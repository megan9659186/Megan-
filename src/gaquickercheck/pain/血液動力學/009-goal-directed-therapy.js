{
    topic: "血液動力學",
    group: "輸液與目標導向",
    id: "gdt-flow",
    updated: "2026-11-22",
    name: "目標導向輸液流程(GDT)",
    en: "Goal-Directed Haemodynamic Therapy",
    key: "灌水(前負荷)→ 升壓(後負荷)→ 強心(收縮力):依 SVV 與 SVR 決定先做哪一個",
    sections: [
      { h: "互動流程:術中低血壓 / 低灌流", widget: "gdt-flow" },
      {
        h: "三條路怎麼分",
        items: [
          "<b>灌水 → 前負荷不足</b>:SVV &gt;12%(常合併 SVR 偏高,身體代償性收縮血管)→ 500 mL 晶體液或 250 mL 膠體液",
          "<b>升壓 → 後負荷(血管張力)太低</b>:SVV ≤12%、SVR &lt;800 → ephedrine 5–10 mg,不足時 norepinephrine",
          "<b>強心 → 收縮力不足</b>:SVV ≤12%、SVR ≥800 但 CI 仍低 → ephedrine 5–10 mg,不足時 dobutamine",
          "每次處置後重新評估;最終目標除了 CI ≥2.5、MAP ≥65,還要看 <b>ScvO₂ &gt;70%</b> 或<b>乳酸下降</b>",
          "藥物濃度依本院標準稀釋表泡製"
        ]
      },
      { h: "互動流程:SV / SVV 簡易判讀(McGee)", widget: "mcgee" },
      {
        h: "沒有進階監測時",
        items: [
          "輸入輸出儘量<b>接近平衡</b>,避免過度正平衡",
          "尿量維持至少約 <b>0.5 mL/kg/h</b>;但術中尿量受 ADH 等壓力荷爾蒙影響,尿少不一定代表容積不足",
          "合併血壓、心跳、末梢灌流、乳酸與出血量一起判斷"
        ]
      },
      {
        h: "實證重點",
        items: [
          "GDT 統合分析顯示可減少術後併發症與住院天數,包括腎功能不良、呼吸衰竭與傷口感染(Miller)",
          "<b>OPTIMISE II</b>(2498 位 ≥65 歲、重大腸胃道手術):以心輸出量導向輸液加低劑量強心劑<b>沒有減少術後感染</b>,24 小時內心臟事件(主要是心律不整)反而增加 → <b>不建議對未篩選的病人常規使用</b>",
          "限水過度也有害(RELIEF 試驗:手術部位感染與洗腎增加)→ 目標是個別化的『剛剛好』"
        ]
      }
    ],
    refs: [
      "McGee, W. T. (2009). A simple physiologic algorithm for managing hemodynamics using stroke volume and stroke volume variation: Physiologic optimization program. Journal of Intensive Care Medicine, 24(6), 352–360.",
      "OPTIMISE II Trial Group. (2024). Cardiac output-guided haemodynamic therapy for patients undergoing major gastrointestinal surgery: OPTIMISE II randomised clinical trial. BMJ, 387, e080439.",
      "Edwards, M. R., & Grocott, M. P. W. (2025). Perioperative fluid and electrolyte therapy. In M. A. Gropper, L. I. Eriksson, L. A. Fleisher, et al. (Eds.), Miller's anesthesia (10th ed., pp. 1331–1373.e6). Elsevier.",
      "Monnet, X., Marik, P. E., & Teboul, J.-L. (2016). Prediction of fluid responsiveness: An update. Annals of Intensive Care, 6(1), 111."
    ]
  }
