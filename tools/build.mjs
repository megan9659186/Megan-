// 組裝：src/gaquickercheck/ → gaquickercheck.html(線上與離線用的單一檔)
// 用法：node tools/build.mjs        (寫出 gaquickercheck.html)
//       node tools/build.mjs --check(只比對，不寫檔；與現有檔不同時 exit 1)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, 'src/gaquickercheck');
const OUT = path.join(ROOT, 'gaquickercheck.html');

// 讀取某資料夾(含科別子資料夾)內所有 NNN-xxx.js，依 NNN 排序
export function listItems(dir) {
  const files = [];
  for (const sub of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!sub.isDirectory()) continue;
    for (const f of fs.readdirSync(path.join(dir, sub.name))) {
      if (/^\d{3}-.*\.js$/.test(f)) files.push(path.join(dir, sub.name, f));
    }
  }
  files.sort((a, b) => path.basename(a).localeCompare(path.basename(b)));
  const nums = files.map(f => path.basename(f).slice(0, 3));
  const dup = nums.find((n, i) => nums.indexOf(n) !== i);
  if (dup) throw new Error(`編號重複：${dup}(${dir})`);
  return files;
}

const joinArr = files =>
  '[\r\n  ' + files.map(f => fs.readFileSync(f, 'utf8').trim()).join(',\r\n  ') + '\r\n]';

export function build() {
  let html = fs.readFileSync(path.join(SRC, 'template.html'), 'utf8');
  const parts = {
    SURGERIES: joinArr(listItems(path.join(SRC, 'surgeries'))),
    CRISIS: joinArr(listItems(path.join(SRC, 'crisis'))),
    UPDATES: fs.readFileSync(path.join(SRC, 'updates.js'), 'utf8').trim(),
  };
  for (const [k, v] of Object.entries(parts)) {
    const mark = `/*@@${k}@@*/`;
    if (html.split(mark).length !== 2) throw new Error(`template 缺少或重複 ${mark}`);
    html = html.replace(mark, () => v);
  }
  html = html.replace(/@@IMG:([^:@]+):([a-z]+)@@/g, (_, f, ext) => {
    const p = path.join(SRC, 'img', f);
    if (!fs.existsSync(p)) throw new Error(`找不到圖片 img/${f}`);
    return `data:image/${ext};base64,` + fs.readFileSync(p).toString('base64');
  });
  return html;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const html = build();
  if (process.argv.includes('--check')) {
    const same = fs.existsSync(OUT) && fs.readFileSync(OUT, 'utf8') === html;
    console.log(same ? '✓ gaquickercheck.html 與原始碼一致' : '✗ gaquickercheck.html 與原始碼不一致，請執行 node tools/build.mjs');
    process.exit(same ? 0 : 1);
  }
  fs.writeFileSync(OUT, html);
  console.log(`✓ 已輸出 gaquickercheck.html(${(Buffer.byteLength(html) / 1024).toFixed(0)} KB)`);
}
