{
    topic: "血液動力學",
    group: "參數與計算",
    id: "hemo-values",
    updated: "2026-11-22",
    name: "血液動力學正常值與計算機",
    en: "Hemodynamic Parameters & Calculator",
    key: "先記住正常範圍與公式,再看監視器上的數字",
    sections: [
      { h: "互動計算:CO、CI、SVI、SVR(紅黃綠燈判讀)", widget: "hemo-calc" },
      {
        h: "血液動力學參數",
        table: {
          head: ["參數", "正常值", "公式"],
          rows: [
            ["MAP", "70–105 mmHg", "(SBP + 2 × DBP) / 3"],
            ["CVP / RAP", "2–6 mmHg", "—"],
            ["PAP", "15–25 / 8–15 mmHg", "收縮 / 舒張"],
            ["MPAP", "10–20 mmHg", "(PASP + 2 × PADP) / 3"],
            ["PAOP(楔壓)", "6–12 mmHg", "—"],
            ["CO", "4–8 L/min", "HR × SV / 1000"],
            ["CI", "2.5–4 L/min/m²", "CO / BSA"],
            ["SV", "60–100 mL/beat", "CO / HR × 1000"],
            ["SVI", "33–47 mL/beat/m²", "CI / HR × 1000"],
            ["SVV", "&lt;10–15%(FloTrac 以 13% 為界)", "(SVmax − SVmin) / SVmean × 100"],
            ["SVR", "800–1200 dyn·s/cm⁵", "(MAP − CVP) × 80 / CO"],
            ["SVRI", "1970–2390 dyn·s/cm⁵/m²", "(MAP − CVP) × 80 / CI"],
            ["PVR", "&lt;250 dyn·s/cm⁵", "(MPAP − PAOP) × 80 / CO"],
            ["CPP(冠狀動脈灌流壓)", "60–80 mmHg", "DBP − PAOP"]
          ]
        }
      },
      {
        h: "氧合參數",
        table: {
          head: ["參數", "正常值", "公式"],
          rows: [
            ["SaO₂", "95–100%", "—"],
            ["SvO₂ / ScvO₂", "SvO₂ 60–80%;ScvO₂ 目標 &gt;70%", "—"],
            ["CaO₂(動脈含氧量)", "17–20 mL/dL", "1.38 × Hb × SaO₂ + 0.0031 × PaO₂"],
            ["CvO₂(靜脈含氧量)", "12–15 mL/dL", "1.38 × Hb × SvO₂ + 0.0031 × PvO₂"],
            ["DO₂(氧氣輸送)", "950–1150 mL/min", "CaO₂ × CO × 10"],
            ["VO₂(氧氣消耗)", "200–250 mL/min", "(CaO₂ − CvO₂) × CO × 10"],
            ["O₂ER(氧氣擷取率)", "22–30%", "(CaO₂ − CvO₂) / CaO₂ × 100"],
            ["Lactate", "約 0.5–2 mmol/L(&gt;2 具臨床意義)", "—"]
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
