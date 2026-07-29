// 護理師刷題 App — Service Worker
// 策略：網路優先（network-first）
//  - 有網路：每次都抓 GitHub 上最新的檔案 → 上傳新題庫後，媽媽重新整理/重開 App 就會更新
//  - 沒網路：自動使用上次成功載入的快取 → 離線也能練習
// 這個檔案本身幾乎不需要再改；日後更新題庫只要重新上傳 index.html 即可。

const CACHE = 'nrsquiz-cache';

self.addEventListener('install', function (e) {
  // 新的 SW 立即接手，不必等所有分頁關閉
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  e.waitUntil((async function () {
    // 清掉舊快取
    const keys = await caches.keys();
    await Promise.all(keys.filter(function (k) { return k !== CACHE; })
                          .map(function (k) { return caches.delete(k); }));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', function (e) {
  const req = e.request;
  if (req.method !== 'GET') return;

  e.respondWith((async function () {
    try {
      // 網路優先：cache:'reload' 會略過瀏覽器 HTTP 快取，確保拿到 GitHub 最新版本
      const net = await fetch(req.url, { cache: 'reload' });
      const cache = await caches.open(CACHE);
      cache.put(req, net.clone());
      return net;
    } catch (err) {
      // 沒網路 → 回傳上次快取
      const hit = await caches.match(req);
      if (hit) return hit;
      // 導覽請求離線且無快取時，退回首頁快取
      if (req.mode === 'navigate') {
        const home = await caches.match('index.html') || await caches.match('./');
        if (home) return home;
      }
      return Response.error();
    }
  })());
});
