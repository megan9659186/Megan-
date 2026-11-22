{
    group: "血流動力學",
    id: "hemo-values",
    updated: "2026-11-22",
    name: "血流動力學正常值與計算機",
    en: "Hemodynamic Parameters & Calculator",
    key: "先記住正常範圍與公式,再看監視器上的數字",
    sections: [
      { h: "互動計算:CO、CI、SVI、SVR", widget: "hemo-calc" },
      {
        h: "血流動力學參數",
        table: {
          head: ["參數", "公式", "正常值"],
          rows: [
            ["MAP", "(SBP + 2 × DBP) / 3", "70–105 mmHg"],
            ["CVP / RAP", "—", "2–6 mmHg"],
            ["PAP", "收縮 / 舒張", "15–25 / 8–15 mmHg"],
            ["MPAP", "(PASP + 2 × PADP) / 3", "10–20 mmHg"],
            ["PAOP(楔壓)", "—", "6–12 mmHg"],
            ["CO", "HR × SV / 1000", "4–8 L/min"],
            ["CI", "CO / BSA", "2.5–4 L/min/m²"],
            ["SV", "CO / HR × 1000", "60–100 mL/beat"],
            ["SVI", "CI / HR × 1000", "33–47 mL/beat/m²"],
            ["SVV", "(SVmax − SVmin) / SVmean × 100", "&lt;10–15%(FloTrac 以 13% 為界)"],
            ["SVR", "(MAP − CVP) × 80 / CO", "800–1200 dyn·s/cm⁵"],
            ["SVRI", "(MAP − CVP) × 80 / CI", "1970–2390 dyn·s/cm⁵/m²"],
            ["PVR", "(MPAP − PAOP) × 80 / CO", "&lt;250 dyn·s/cm⁵"],
            ["CPP(冠狀動脈灌流壓)", "DBP − PAOP", "60–80 mmHg"]
          ]
        }
      },
      {
        h: "氧合參數",
        table: {
          head: ["參數", "公式", "正常值"],
          rows: [
            ["SaO₂", "—", "95–100%"],
            ["SvO₂ / ScvO₂", "—", "SvO₂ 60–80%;ScvO₂ 目標 &gt;70%"],
            ["CaO₂(動脈含氧量)", "1.38 × Hb × SaO₂ + 0.0031 × PaO₂", "17–20 mL/dL"],
            ["CvO₂(靜脈含氧量)", "1.38 × Hb × SvO₂ + 0.0031 × PvO₂", "12–15 mL/dL"],
            ["DO₂(氧氣輸送)", "CaO₂ × CO × 10", "950–1150 mL/min"],
            ["VO₂(氧氣消耗)", "(CaO₂ − CvO₂) × CO × 10", "200–250 mL/min"],
            ["O₂ER(氧氣擷取率)", "(CaO₂ − CvO₂) / CaO₂ × 100", "22–30%"],
            ["Lactate", "—", "約 0.5–2 mmol/L(&gt;2 具臨床意義)"]
          ]
        }
      },
      {
        h: "記憶重點",
        items: [
          "<b>MAP = CO × SVR</b>(概念上)→ 血壓低時,不是 CO 不夠(容積或收縮力),就是 SVR 太低(血管擴張)",
          "<b>CO = HR × SV</b>;SV 又由前負荷、後負荷、收縮力決定 → 這就是『灌水、升壓、強心』三條路的由來",
          "<b>DO₂ 主要由 CO、Hb、SaO₂ 決定</b>;ScvO₂ 下降代表組織擷取更多氧氣 → 輸送不足或消耗增加",
          "<b>CVP 只是靜態壓力</b>,受靜脈張力、胸內壓、右心功能影響,不能用來判斷『給水有沒有用』",
          "各監測儀器的正常值略有不同,以本院儀器與檢驗室的參考值為準"
        ]
      }
    ],
    refs: [
      "Edwards, M. R., & Grocott, M. P. W. (2025). Perioperative fluid and electrolyte therapy. In M. A. Gropper, L. I. Eriksson, L. A. Fleisher, et al. (Eds.), Miller's anesthesia (10th ed., pp. 1331–1373.e6). Elsevier.",
      "Monnet, X., Marik, P. E., & Teboul, J.-L. (2016). Prediction of fluid responsiveness: An update. Annals of Intensive Care, 6(1), 111.",
      "Vincent, J.-L., & De Backer, D. (2013). Circulatory shock. New England Journal of Medicine, 369(18), 1726–1734."
    ]
  }
