{
    checked: "2026-08-07",
    group: "循環與出血",
    id: "hemorrhage",
    name: "大量出血",
    en: "Massive Haemorrhage",
    key: "啟動大量輸血 → 輸血、保溫、補鈣",
    recog: [
      "24 小時內輸注 ≥10 單位紅血球,或 1 小時內 ≥4 單位而且仍在出血",
      "血壓下降、心搏過速、脈壓變窄、EtCO₂ 下降、尿量減少",
      "術野持續滲血、血塊不成形 → 已經進入凝血病變"
    ],
    actNote: "目標是同時止血、維持灌流、維持體溫,並打斷酸血症與凝血病變的惡性循環。",
    act: [
      "<b class='w'>通知麻醉主治醫師、Call Help!</b>",
      "<b>宣布大量出血、啟動本院大量輸血流程並通知血庫</b>,指定一人專責聯絡",
      "確保兩條以上大口徑周邊靜脈管路;<b>大口徑短管路的輸注速率優於一般中心靜脈導管</b>",
      "外科團隊優先止血:壓迫、夾閉,必要時填塞或改為 damage control 手術",
      "所有輸注液體與血品都經加溫器,並使用強制暖風毯做體溫維持",
      "早期給予 tranexamic acid",
      "依比例輸注紅血球、新鮮冷凍血漿與血小板,<b>不要只給紅血球加晶體液</b>",
      "反覆追蹤血氣、乳酸、游離鈣、血色素、血小板、凝血功能、纖維蛋白原與 <b>ROTEM</b> 等黏彈性凝血檢測",
      "放置動脈導管監測,必要時中心靜脈導管與升壓劑支持"
    ],
    diagram:{ section:"act", caption:"大量出血的死亡三角(lethal triad):低體溫、酸中毒與凝血病變互相加重,任一項未處理都會把另外兩項拉回來,故須同時介入(原創示意圖)", svg:`<svg viewBox="0 0 460 590" width="100%" role="img" xmlns="http://www.w3.org/2000/svg"><title>大量出血的死亡三角示意圖</title><desc>低體溫、酸中毒與凝血病變三者互相加重,形成大量出血時的惡性循環。</desc><defs><marker id="lt-ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></marker></defs><rect x="6" y="6" width="448" height="578" rx="16" fill="#F4F1EB" stroke="#E0D9CD" stroke-width="1"/><text x="230" y="32" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="600" fill="#423E39">Lethal Triad　死亡三角</text><path d="M230 162 L110 366 L350 366 Z" fill="none" stroke="#D8D1C6" stroke-width="1.2" stroke-dasharray="5 6"/><path d="M352 168 C415 215 435 290 428 360" fill="none" stroke="#C0392B" stroke-width="3" marker-end="url(#lt-ar)"/><path d="M330 542 C285 568 175 568 130 542" fill="none" stroke="#C0392B" stroke-width="3" marker-end="url(#lt-ar)"/><path d="M32 360 C25 290 45 215 108 168" fill="none" stroke="#C0392B" stroke-width="3" marker-end="url(#lt-ar)"/><circle cx="230" cy="265" r="60" fill="#EAD9D3" stroke="#C0392B" stroke-width="1.6"/><text x="230" y="260" text-anchor="middle" font-family="sans-serif" font-size="19" font-weight="600" fill="#8F2B20">大量出血</text><text x="230" y="285" text-anchor="middle" font-family="sans-serif" font-size="15" fill="#6E5F5A">惡性循環</text><rect x="105" y="46" width="250" height="110" rx="13" fill="#E3E7EA" stroke="#8892A0" stroke-width="1.6"/><text x="230" y="78" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="600" fill="#3E4750">低體溫</text><text x="230" y="99" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#5E6872">Hypothermia</text><text x="230" y="125" text-anchor="middle" font-family="sans-serif" font-size="15" fill="#4E5862">酵素活性下降、血小板受抑</text><text x="230" y="147" text-anchor="middle" font-family="sans-serif" font-size="15" fill="#4E5862">→ 凝血變慢</text><rect x="10" y="372" width="212" height="155" rx="13" fill="#EDDCD8" stroke="#B5645C" stroke-width="1.6"/><text x="116" y="404" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="600" fill="#7E3A32">酸中毒</text><text x="116" y="425" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#6E5F5A">Acidosis</text><text x="116" y="452" text-anchor="middle" font-family="sans-serif" font-size="15" fill="#5F4E4A">灌流不足、乳酸堆積</text><text x="116" y="476" text-anchor="middle" font-family="sans-serif" font-size="15" fill="#5F4E4A">低血鈣、高血鉀</text><text x="116" y="504" text-anchor="middle" font-family="sans-serif" font-size="15" fill="#5F4E4A">→ 心肌抑制、凝血失效</text><rect x="238" y="372" width="212" height="155" rx="13" fill="#E0E6DA" stroke="#8B9A8B" stroke-width="1.6"/><text x="344" y="404" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="600" fill="#47543F">凝血病變</text><text x="344" y="425" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#5F6B57">Coagulopathy</text><text x="344" y="452" text-anchor="middle" font-family="sans-serif" font-size="15" fill="#525E4B">稀釋、消耗、纖維蛋白原↓</text><text x="344" y="476" text-anchor="middle" font-family="sans-serif" font-size="15" fill="#525E4B">評估:ROTEM／central lab</text><text x="344" y="504" text-anchor="middle" font-family="sans-serif" font-size="15" fill="#525E4B">→ 出血更多</text><text x="230" y="578" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#726B62">三者須同時處理:保溫、恢復灌流與補鈣、依檢測補充血品</text></svg>` },
    dose: [
      ["Tranexamic acid", "<b>1 g 於 10 分鐘內輸注,續 1 g 於 8 小時內給完</b>", "外傷病人<b class='w'>應在受傷 3 小時內給予</b>,超過反而可能有害"],
      ["血品比例", "紅血球:新鮮冷凍血漿:血小板 約 1:1:1", "檢驗結果來不及時,先依比例給"],
      ["低血鈣", "Calcium chloride 1 g 或 calcium gluconate 3 g IV", "每輸注數單位血品就追蹤游離鈣,目標 &gt;1.1 mmol/L"],
      ["Fibrinogen", "低於 1.5–2 g/L 補充冷凍沉澱品或纖維蛋白原濃縮劑", "是大量出血中最早耗竭的凝血因子"]
    ],
    avoid: [
      "不要用大量晶體液撐血壓,會加重稀釋性凝血病變與組織水腫",
      "不要等檢驗報告出來才開始給血漿與血小板"
    ],
    after: [
      "目標:體溫 &gt;36 °C、pH &gt;7.2、游離鈣 &gt;1.1 mmol/L、血小板 &gt;50(合併頭部外傷或持續出血者 &gt;100)",
      "轉加護病房追蹤再出血、腹腔間隔症候群、急性腎損傷與輸血相關併發症",
      "檢視輸血反應並完整記錄血品使用"
    ],
    refs: [
      "Rossaint, R., Afshari, A., Bouillon, B., et al. (2023). The European guideline on management of major bleeding and coagulopathy following trauma: Sixth edition. Critical Care, 27(1), 80.",
      "Holcomb, J. B., Tilley, B. C., Baraniuk, S., et al. (2015). Transfusion of plasma, platelets, and red blood cells in a 1:1:1 vs a 1:1:2 ratio and mortality in patients with severe trauma: The PROPPR randomized clinical trial. JAMA, 313(5), 471–482.",
      "CRASH-2 Trial Collaborators. (2010). Effects of tranexamic acid on death, vascular occlusive events, and blood transfusion in trauma patients with significant haemorrhage (CRASH-2): A randomised, placebo-controlled trial. The Lancet, 376(9734), 23–32."
    ]
  }