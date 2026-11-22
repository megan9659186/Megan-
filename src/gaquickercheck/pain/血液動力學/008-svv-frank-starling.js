{
    topic: "血液動力學",
    group: "輸液與目標導向",
    id: "svv-starling",
    updated: "2026-11-22",
    name: "SVV、Frank-Starling 與輸液反應",
    en: "Stroke Volume Variation & Fluid Responsiveness",
    key: "問題不是『病人缺不缺水』,而是『再給水,SV 會不會增加』",
    sections: [
      {
        h: "原理",
        items: [
          "<b>正壓通氣</b>吸氣時胸內壓上升 → 右心回流減少,幾個心跳後左心 SV 下降;呼氣時回升 → 動脈壓與 SV 隨呼吸起伏",
          "病人位在 <b>Frank-Starling 曲線陡段</b>(前負荷不足)時,這個起伏特別大 → SVV、PPV 變大",
          "位在<b>平台段</b>時,前負荷改變對 SV 影響小 → SVV 小,再給水只會增加水腫與肺充血",
          "SVV 與 PPV 預測的是<b>『輸液反應』</b>,不是血容量多少,也不是前負荷的絕對值"
        ]
      },
      { h: "互動計算:SVV", widget: "svv-calc" },
      { h: "互動判讀:輸液挑戰(ΔSV)", widget: "starling" },
      {
        h: "SVV 準確的前提",
        items: [
          "<b>控制通氣</b>、沒有自發呼吸",
          "潮氣量足夠(約 8 mL/kg);小潮氣量時 SVV 偏低、敏感度下降",
          "<b>竇性心律</b>(心房顫動、頻繁早期收縮時不可靠)",
          "未開胸;沒有嚴重右心衰竭或肺高壓;腹內壓不過高",
          "條件不符時改用:<b>被動抬腿(PLR)</b>1–2 分鐘(相當於一次自體輸液,心律不整或自發呼吸也可用)、呼氣末閉塞試驗,或小量輸液挑戰並看 SV 變化"
        ]
      }
    ],
    refs: [
      "Michard, F. (2005). Changes in arterial pressure during mechanical ventilation. Anesthesiology, 103(2), 419–428.",
      "Monnet, X., & Teboul, J.-L. (2008). Passive leg raising. Intensive Care Medicine, 34(4), 659–663.",
      "Monnet, X., Marik, P. E., & Teboul, J.-L. (2016). Prediction of fluid responsiveness: An update. Annals of Intensive Care, 6(1), 111.",
      "Edwards, M. R., & Grocott, M. P. W. (2025). Perioperative fluid and electrolyte therapy. In M. A. Gropper, L. I. Eriksson, L. A. Fleisher, et al. (Eds.), Miller's anesthesia (10th ed., pp. 1331–1373.e6). Elsevier."
    ]
  }
