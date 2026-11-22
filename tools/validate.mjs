// 驗證：每次修改後執行 node tools/validate.mjs
// 錯誤(✗)= 必須修正；警告(△)= 提醒，不擋上線
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import os from 'node:os';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { build, listItems } from './build.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, 'src/gaquickercheck');
const errors = [], warns = [];
const err = (w, m) => errors.push(`✗ ${w}：${m}`);
const warn = (w, m) => warns.push(`△ ${w}：${m}`);
const rel = f => path.relative(SRC, f);

const POS_TYPES = ['supine', 'revtrend', 'trend', 'prone', 'lateral'];
const ARR_FIELDS = ['preop', 'airway', 'monitor', 'hemo', 'intraop', 'drug', 'emergence', 'postop', 'flags', 'refs'];
const template = fs.readFileSync(path.join(SRC, 'template.html'), 'utf8');
const sdIdx = template.indexOf('SECTION_DEFS');
const SECTION_KEYS = [...template.slice(sdIdx, sdIdx + 3000).matchAll(/key:"([a-z]+)"/g)].map(m => m[1]);

// 把物件裡所有字串收集起來(含巢狀)
function strings(o, out = []) {
  if (typeof o === 'string') out.push(o);
  else if (o && typeof o === 'object') for (const v of Object.values(o)) strings(v, out);
  return out;
}

function checkHtmlBits(where, strs) {
  for (const s of strs) {
    // ⓘ 說明：每個 info-panel 前面要有 info-btn，且預設 hidden
    const panels = s.match(/<span class='info-panel'[^>]*>/g) || [];
    const btns = (s.match(/class='info-btn'/g) || []).length;
    if (panels.length !== btns) err(where, `ⓘ 說明按鈕(${btns})與面板(${panels.length})數量不符`);
    panels.forEach(p => { if (!/\bhidden\b/.test(p)) err(where, 'info-panel 少了 hidden(會預設展開)'); });
    // 術語補充:每個 term 後面緊接一個 term-panel,且預設 hidden
    const terms = (s.match(/<span class='term'[^>]*>/g) || []).length;
    const tpanels = s.match(/<span class='term-panel'[^>]*>/g) || [];
    if (terms !== tpanels.length) err(where, `術語(${terms})與補充面板(${tpanels.length})數量不符`);
    tpanels.forEach(p => { if (!/\bhidden\b/.test(p)) err(where, 'term-panel 少了 hidden(會預設展開)'); });
    if (/<span class='term'[^>]*>[^<]*<\/span>(?!<span class='term-panel')/.test(s)) err(where, '術語後面必須緊接 term-panel');
    if (/class="/.test(s) && !s.trim().startsWith('<svg')) warn(where, '字串內出現 class="…"(慣例用單引號)');
    if (/\bNIM\b|\bIOMN\b/.test(s)) err(where, '術中神經監測縮寫請用 IONM');
  }
}

// 1) 每台手術逐檔檢查(錯誤可直接定位到檔案)
const surgFiles = listItems(path.join(SRC, 'surgeries'));
const seenNames = new Set();
for (const f of surgFiles) {
  const w = rel(f);
  let o;
  try { o = vm.runInNewContext('(' + fs.readFileSync(f, 'utf8') + ')'); }
  catch (e) { err(w, `語法錯誤 — ${e.message}`); continue; }
  for (const k of ['specialty', 'name', 'en']) if (!o[k]) err(w, `缺少 ${k}`);
  if (o.specialty && path.basename(path.dirname(f)) !== o.specialty) warn(w, `檔案放在「${path.basename(path.dirname(f))}」但 specialty 是「${o.specialty}」`);
  if (seenNames.has(o.name)) err(w, `術式名稱重複：${o.name}`); seenNames.add(o.name);
  if (!o.summary) err(w, '缺少 summary');
  else if (!POS_TYPES.includes(o.summary.posType)) err(w, `posType「${o.summary.posType}」未定義(可用：${POS_TYPES.join(' / ')})`);
  for (const k of ARR_FIELDS) if (o[k] !== undefined && !Array.isArray(o[k])) err(w, `${k} 應為陣列`);
  if (!o.refs || !o.refs.length) err(w, '沒有 refs(文獻)');
  else if (o.refs.length < 3) warn(w, `文獻只有 ${o.refs.length} 篇(標準：至少 3 篇)`);
  if (o.diagram) {
    const ds = Array.isArray(o.diagram) ? o.diagram : [o.diagram];
    ds.forEach(d => {
      if (!SECTION_KEYS.includes(d.section)) err(w, `diagram.section「${d.section}」不是合法區塊(${SECTION_KEYS.join(' / ')})`);
      if (d.svg && !(d.svg.trim().startsWith('<svg') && d.svg.trim().endsWith('</svg>'))) err(w, 'diagram.svg 需以 <svg 開頭、</svg> 結尾');
      if (!d.svg && !d.img) err(w, 'diagram 需有 svg 或 img');
      if (d.img && !d.caption) err(w, 'diagram.img(外部圖片)需有 caption 註明來源');
    });
  }
  checkHtmlBits(w, strings(o));
}

// 2) 急救卡逐檔
for (const f of listItems(path.join(SRC, 'crisis'))) {
  try { const o = vm.runInNewContext('(' + fs.readFileSync(f, 'utf8') + ')'); checkHtmlBits(rel(f), strings(o)); }
  catch (e) { err(rel(f), `語法錯誤 — ${e.message}`); }
}

// 2b) 疼痛路徑逐檔
const painIds = new Set();
for (const f of listItems(path.join(SRC, 'pain'))) {
  const w = rel(f);
  let o;
  try { o = vm.runInNewContext('(' + fs.readFileSync(f, 'utf8') + ')'); }
  catch (e) { err(w, `語法錯誤 — ${e.message}`); continue; }
  for (const k of ['group', 'id', 'name', 'en']) if (!o[k]) err(w, `缺少 ${k}`);
  if (painIds.has(o.id)) err(w, `id 重複：${o.id}`); painIds.add(o.id);
  if (!Array.isArray(o.sections) || !o.sections.length) err(w, '缺少 sections');
  if (!o.refs || !o.refs.length) err(w, '沒有 refs(文獻)');
  if (o.diagram && o.diagram.svg && !(o.diagram.svg.trim().startsWith('<svg') && o.diagram.svg.trim().endsWith('</svg>'))) err(w, 'diagram.svg 需以 <svg 開頭、</svg> 結尾');
  checkHtmlBits(w, strings(o));
}

// 3) 版本號與公告
let updates = [];
try { updates = vm.runInNewContext('(' + fs.readFileSync(path.join(SRC, 'updates.js'), 'utf8') + ')'); }
catch (e) { err('updates.js', `語法錯誤 — ${e.message}`); }
const ver = (template.match(/APP_VERSION\s*=\s*"([^"]+)"/) || [])[1];
const upd = (template.match(/APP_UPDATED\s*=\s*"([^"]+)"/) || [])[1];
if (!ver || !upd) err('template.html', '找不到 APP_VERSION / APP_UPDATED');
if (updates[0] && updates[0].date !== upd) err('updates.js', `最上方公告日期 ${updates[0].date} ≠ APP_UPDATED ${upd}`);
updates.forEach((u, i) => { if (!u.date || !u.note || !Array.isArray(u.items)) err('updates.js', `第 ${i + 1} 筆公告缺 date/note/items`); });

// 4) 組裝後整支 <script> 跑 node --check
let html = '';
try { html = build(); } catch (e) { err('build', e.message); }
if (html) {
  const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
  scripts.forEach((js, i) => {
    const tmp = path.join(os.tmpdir(), `gaq-check-${i}.js`);
    fs.writeFileSync(tmp, js);
    try { execFileSync(process.execPath, ['--check', tmp], { stdio: 'pipe' }); }
    catch (e) { err(`<script> #${i + 1}`, String(e.stderr).split('\n').slice(0, 5).join(' ')); }
  });
  const out = path.join(ROOT, 'gaquickercheck.html');
  if (!fs.existsSync(out) || fs.readFileSync(out, 'utf8') !== html) warn('gaquickercheck.html', '尚未重新組裝 → 執行 node tools/build.mjs');
}

console.log(`手術 ${surgFiles.length} 台・版本 ${ver}(${upd})`);
warns.forEach(m => console.log(m));
errors.forEach(m => console.log(m));
console.log(errors.length ? `\n✗ ${errors.length} 個錯誤需修正` : '\n✓ 驗證通過');
process.exit(errors.length ? 1 : 0);
