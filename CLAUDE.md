# 麻醉快速查詢工具(gaquickercheck)— Claude Code 專案說明

「科別 → 手術 → 全身麻醉注意事項」的快速查詢網頁，放在 GitHub Pages(https://megan9659186.github.io/Megan-/gaquickercheck.html)。
使用對象：臨床速查、帶學生教學、給同事共用(手機加到主畫面、院內電腦離線開單檔)。內容需教學等級的臨床正確度。

**回覆 Megan 一律使用繁體中文**(英文術語、檔名、指令照原樣保留)。
內容為繁體中文夾英文術語。Morandi 低彩度風格。雙欄「清單→詳情」流程，手機自動堆疊。

## 檔案結構(重要)

**不要直接編輯根目錄的 `gaquickercheck.html`** —— 它是組裝產物。所有修改都在 `src/gaquickercheck/`：

```
src/gaquickercheck/
  template.html            版面、CSS、程式、APP_VERSION / APP_UPDATED(資料位置以 /*@@SURGERIES@@*/ 等標記)
  surgeries/<科別>/NNN-<英文名>.js   每台手術一個檔，內容就是一個物件 { … }
  crisis/<分組>/NNN-<id>.js         每張急救卡一個檔
  pain/<主題或分組>/NNN-<id>.js           「麻醉冷知識」教學區(chip 在外區麻醉之後;先選主題 topic:疼痛路徑、血液動力學,再列項目)每張卡一個檔({ topic, group, id, name, en, key, updated, sections:[{ h, items, table, widget }], diagram, refs });widget 為互動工具名稱(hemo-calc / svv-calc / starling / gdt-flow / mcgee / shock-match),程式在 template.html 的 WIDGETS
  updates.js               首頁公告 UPDATES 陣列
  img/                     圖片檔；資料裡用 @@IMG:檔名:png@@ 引用，組裝時自動內嵌
tools/build.mjs            組裝 → gaquickercheck.html
tools/validate.mjs         驗證
```

- NNN 是全站顯示順序(跨科別排序)，不可重複。新增手術用下一個空號，或插在想要的位置並調整檔名編號。
- 換科別 = 把檔案移到另一個科別資料夾，並改 `specialty`。
- 新增圖片：把 PNG/JPG 放進 `img/`，在資料中寫 `@@IMG:檔名.png:png@@`(jpg 寫 `:jpeg`)取代 `data:image/...` 那串。

## 每次修改的流程

1. 在 `src/gaquickercheck/` 做針對性小改(Edit)，不整檔重生。
2. 有使用者看得到的改變 → 同一次修改內一併：
   - `template.html` 的 `APP_VERSION` +0.1、`APP_UPDATED` 改為當天日期(以當次對話日期為準)
   - `updates.js` 陣列**最上方**新增一筆，`date` 與 `APP_UPDATED` 一致
   - 有改到的手術在卡片右上角顯示 NEW(七天後自動消失，沿用現有機制)
3. `node tools/build.mjs` 組裝。
4. `node tools/validate.mjs` 驗證，✗ 錯誤必須清零才能交付。
5. **先給 Megan 預覽**：用 Artifact 工具重新發布 `gaquickercheck.html`(同一個 file_path，維持同一個私人網址 https://claude.ai/artifact/Pa9hkqyrNMn5vfV9komo6V)，讓 Megan 在右邊側欄直接點著看真正的網頁。不要用 SendUserFile 送 html 檔(側欄只會顯示原始碼)。必要時可另附 Playwright 截圖，標出有改到的地方。
6. 回報精簡摘要，結尾固定提醒：**上線前請對照機構 protocol 逐台校過。**
7. 等 Megan 看過、說要改就回到步驟 1 再改再預覽；Megan 明確說確定 / 可以上傳後，才 commit 並 push 到 GitHub。

只動程式、使用者端沒有任何可見變化 → 不加公告、不動版本號。
未經 Megan 同意不要 commit / push —— 預覽確認前一律不上傳。

## 資料結構(每台手術)

固定欄位：`specialty`(科別)、`name`(中文名)、`en`(英文名)、`summary:{ position, posType, time, blood, airway }`、
`preop, airway, monitor, hemo, intraop, drug, emergence, postop, flags, refs` —— 皆為字串陣列(每則一個 bullet)；不需要的欄位留 `[]`。
另有 `checked`、`collapse` 等既有欄位，照舊保留。選填 `diagram`(見下)。bullet 字串可內含 inline HTML。

## 顯示與格式慣例

- 術式英文名在上、中文在下(清單卡與詳情頁皆是)。
- 警示語 `<b class='w'>…</b>` → 紅字粗體。**class 一律單引號**(資料字串是雙引號)。一般重點用純 `<b>…</b>`。
- `flags`(重要併發症)整區已是紅字粗體，裡面不必再加 `<b>`。
- 麻醉方式(`summary.airway`)：會插氣管內管者寫 **ETGA**(如 `ETGA`、`ETGA/Oral RAE`、`ETGA/IONM`、`LMA 或 ETGA`)，不寫「GA / ETT」。
- 體位：`position` 放英文標註(無中文)；`posType`：`supine` / `revtrend`(頭高)/ `trend`(頭低)/ `prone` / `lateral`。
- 標點沿用現有樣式：半形括號 ()、頓號、→ 因果、; : 等。
- 術中神經監測一律寫 **IONM**(不是 NIM、IOMN)。
- 視覺層次：第一行粗體短標題、第二行細節；所有區塊可點標題收合。
- 每張卡有三個來源區塊 —— 本院筆記、Miller、UpToDate，各自可收合、可單獨檢視；Miller / UpToDate 區塊不加「通用原則，不一定符合本院作法」標籤。Miller、UpToDate 以外的文獻(RCT、SRMA、指引)放獨立的「其他文獻」分頁。

## ⓘ 說明(可展開)

在 bullet 字串尾端附加：

```
<button class='info-btn' type='button' aria-expanded='false' onclick='toggleInfo(this)'>ⓘ 說明</button><span class='info-panel' hidden>解釋文字，重點用 <b>…</b></span>
```

class 與屬性值一律單引號；面板內文字不可有雙引號(要引號用『』)；說明精簡、教學導向。

## 補充說明一律用 ⓘ 說明

不再使用底線術語(點術語展開)的寫法,避免與 ⓘ 說明混淆;需要解釋某個術語時,也用 ⓘ 說明,放在該 bullet 尾端,面板開頭用 <b>術語</b>: 標出解釋的是哪個詞。

## 示意圖(diagram)

```
diagram:{ section:"hemo", caption:"圖說(可註明：原創示意圖)", svg:`<svg viewBox="0 0 680 400" width="100%" role="img">…</svg>` }
```

`section` 必須是既有區塊 key；svg 用反引號包，svg 內不可出現反引號或 `${`。一律原創示意圖(Morandi 配色、自帶淺色底板)，不得嵌入 UpToDate 等外部圖檔。

例外：Megan 提供、授權允許轉用的外部圖片(如 Wikimedia Commons 的 CC BY-SA)可改用 `img`：

```
diagram:{ section:"hemo", img:"@@IMG:檔名.jpg:jpeg@@", alt:"替代文字", caption:"圖說。圖片來源:作者,<a href='檔案頁網址' target='_blank' rel='noopener'>檔名</a>,Wikimedia Commons,<a href='授權網址' target='_blank' rel='noopener'>CC BY-SA 3.0</a>" }
```

caption 必須寫明作者、來源連結與授權；有改作要註明「經改作」。UpToDate、教科書等有版權的圖仍不得嵌入。

## 文獻標準(每台至少三篇近五到十年)

- 優先：Anesthesiology、BJA、Anesthesia & Analgesia、JAMA、NEJM、Lancet，及 ERAS、EACTS、OAA/DAS、ASA、ACC/AHA、AAO 等指引；優先 RCT、SRMA、指引。
- 排除中文期刊與中國機構來源。純英文，不加中文翻譯。APA 7th，前後一致。
- **不憑記憶捏造引用**：加入前先查證(PubMed 等)；頁碼不確定就只寫到卷期。
- 引用外部資料(UpToDate、Miller 等)一律改寫成精簡條目，不照抄原文。

## 新增文獻的核對流程(Miller、Morgan、UpToDate 以外的每一篇都適用)

**加入任何新文獻前，一定要先完成下面五步，並把核對表與評讀結果交給 Megan 看過，她同意後才寫進卡片。**

### 1. 只找公開全文
- 先找 PubMed Central(PMC)、期刊開放取用版、作者稿等公開全文。
- 找不到公開全文時，**不得只靠摘要寫進卡片**：告訴 Megan 這篇拿不到全文，請她提供 PDF，或改找其他有公開全文的文獻。

### 2. 通篇讀完
- 從題目、摘要、方法、結果(含所有表格、圖、補充資料)、討論到結論逐段讀完，不可只看摘要和結論。
- 回報時說明實際讀到哪些部分(例如「全文含 Table 1–3、Figure 2；補充資料未取得」)。

### 3. 填寫文獻核對表(每篇一張)

| 欄位 | 填寫內容 | 原文出處 | 核對狀態 |
| --- | --- | --- | --- |
| 對象 | 誰、何處、何時、如何選入、排除或限制條件；**實際收進來的是哪些人**(看 Table 1 與流程圖，不是只看納入條件) | | |
| 方法 | 研究設計、資料蒐集、主要指標怎麼算；**摘要、標題、方法對「研究設計」的稱呼是否一致**(不一致要寫出各處的寫法) | | |
| 結果 | 只寫本研究算出或觀察到的數字；含分母、期間、表號、CI 或 p 值 | | |
| 限制 | 只寫原文自己承認的限制 | | |
| 作者推論 | 討論或結論裡，超出結果本身的解釋、建議或外推 | | |
| 未知或缺漏 | 若要把這篇用在麻醉科，原文沒有回答的問題 | | |
| 摘要與表格差異 | 摘要與表格或正文不符時，以表格和正文為準並註明 | | |
| 核對總覽 | 卡片要寫的內容與原文是否一致 | | |

- **原文出處**必須寫到章節名稱或表號，例如「Methods – Participants」、「Results，Table 2」、「Figure 3」、「Discussion 第 2 段」。
- **核對狀態**只能用三種：符合原文／與原文不符／原文未提供。
- 原文沒寫的一律填「原文未提供」，不可自行補寫或推測。

### 4. RCT 與 SRMA 要做實證評讀 + GRADE
- **RCT**：以 Cochrane RoB 2 逐領域評讀(隨機分派、偏離介入、缺失資料、結果測量、選擇性報告)，可搭配 CASP RCT checklist。
- **SRMA**：以 AMSTAR 2 評讀(標出 critical domains 是否符合，給整體信心等級)。
- **GRADE**：針對卡片要引用的主要結果，評定證據確定性(高／中／低／極低)，寫出升降級理由(偏誤風險、不一致性、間接性、不精確性、發表偏誤)。
- 最後給結論：**適合／有條件適合／不適合**放進卡片，並說明理由(含是否符合本院作法、族群是否相近)。
- 其他設計(觀察性研究、指引、共識、回顧)不必做 RoB 2／AMSTAR 2，但要在核對表的「方法」寫明設計，並在卡片標示為觀察性研究／共識等，不可寫成因果結論。

### 5. 交付方式
- 核對表與評讀結果先給 Megan 確認，不直接改卡片。
- 卡片上的寫法必須與核對表中「符合原文」的內容一致。

## 本院作法(內容須符合本院，通用指引僅供起點)

- RSI / 拮抗標準：Rocuronium + Sugammadex。小兒不用 Succinylcholine。
- 無 N₂O；不使用喉部填塞(throat pack)。
- PELD 一律全身麻醉；脊椎手術不做 neuraxial。
- 藥物泡法只依本院標準稀釋表，表外藥物不得自行泡製。

## 公告寫法(updates.js)

只寫使用者看得到的改變，臨床同仁看得懂的話，大概交代即可：哪台手術哪個區塊新增/改寫什麼、新增或移除哪個功能/chip/題組、移除原因(如不符本院作法)。一次改多台，每台各一條。
**不寫程式細節**(欄位、變數、class、函式、檔案、驗證流程)。

- ✅「鼻部手術：新增咽部殘留血塊與拔管策略；移除喉部填塞相關內容(本院未使用)」
- ❌「emergence 欄位新增 3 則 bullet 與 2 組 info-panel」

## 其他工具

`gacalc.html`(麻醉計算機)、`pediatricpcversioncalculator.html`(小兒計算機)等目前仍是單一檔，直接編輯即可；版本號與公告規則相同。
