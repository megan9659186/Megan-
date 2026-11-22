{
    group: "通用排查",
    id: "hypotension",
    name: "低血壓",
    en: "Hypotension",
    key: "先確認是真的 → 減麻醉、補液、升壓,同時找原因;沒脈搏就 CPR",
    recog: [
      "收縮壓 &lt;90 mmHg、MAP &lt;60–65 mmHg,或比術前基準下降超過 20%",
      "伴隨:EtCO₂ 下降、血氧波形變差、心跳變快或變慢、尿量減少;清醒病人噁心或意識改變",
      "## 先確認不是量錯",
      "NIBP 袖帶尺寸、有人壓到袖帶;動脈導管 damping、換能器高度或沒歸零、接頭鬆脫;側臥時上下手臂差異",
      "## 依機轉想原因",
      "<b>前負荷不足</b>:出血(含隱性出血)、拉鉤或氣腹壓迫下腔靜脈、體位、懷孕子宮、氣胸、心包填塞、肺栓塞",
      "<b>血管張力下降</b>:麻醉藥過深、半身麻醉、過敏、敗血症、腎上腺功能不全、長期服用 ACEI/ARB",
      "<b>心臟收縮力下降</b>:心肌缺血、心衰竭、低血氧;<b>心律</b>:過快、過慢或不規則"
    ],
    actNote: "容易漏掉的致命原因:隱性出血、麻醉藥過量、心肌缺血、氣胸、氣體滯留(auto-PEEP)、過敏、氣腹或下腔靜脈受壓。",
    act: [
      "<b>確認是真的</b>:摸脈搏、看 EtCO₂ 與血氧波形、重測 NIBP、沖洗動脈導管並檢查換能器高度",
      "<b class='w'>沒有脈搏 → 開始 CPR</b>(見術中心跳停止卡)",
      "嚴重低血壓:<b class='w'>通知麻醉主治醫師、Call Help!</b>,FiO₂ 100%",
      "<b>降低或關掉吸入與靜脈麻醉藥、血管擴張藥</b>",
      "抬腿或頭低腳高,<b>快速輸液</b>;心衰竭病人小量多次並反覆評估",
      "<b>給升壓藥</b>維持灌流,需要反覆推注就改持續輸注",
      "告知外科:有無出血、拉鉤或器械壓迫、氣腹壓;必要時請求支援或暫停手術",
      "高氣道壓或懷疑氣體滯留時,短暫拆開迴路觀察血壓是否回升",
      "懷疑過敏 → 停止可疑藥物,給 epinephrine 與大量輸液(見過敏卡)",
      "放置動脈導管與導尿管;抽血氣、血紅素、電解質、鈣、乳酸;備血",
      "看心電圖有無缺血;有條件時以 TEE 或超音波評估容積與心臟功能"
    ],
    dose: [
      ["Phenylephrine", "50–200 µg IV,可重複", "心跳偏快或正常時"],
      ["Ephedrine", "5–10 mg IV,可重複", "心跳偏慢時"],
      ["Epinephrine", "10–100 µg IV 滴定", "嚴重或對上述無效時"],
      ["Norepinephrine", "持續輸注,依血壓滴定", "需要反覆推注時"],
      ["晶體液", "250–500 mL 快速輸注", "依反應重複;心衰竭者小量"],
      ["Hydrocortisone", "100 mg IV", "懷疑腎上腺功能不全或長期使用類固醇者"]
    ],
    avoid: [
      "<b class='w'>不要沒確認就把假警報當真猛給升壓藥</b>,但也不要因確認而延誤真的低血壓",
      "<b class='w'>不要只給升壓藥而不找原因</b>",
      "心衰竭或心包填塞者,不要一次大量輸液"
    ],
    after: [
      "一般維持 MAP 至少 60–65 mmHg;高風險病人依術前基準個別化",
      "記錄低血壓持續時間與處置;追蹤心肌酵素、腎功能與尿量",
      "持續需要升壓藥者轉加護病房"
    ],
    refs: [
      "Saugel, B., Fletcher, N., Gan, T. J., Grocott, M. P. W., Myles, P. S., Sessler, D. I., et al. (2024). PeriOperative Quality Initiative (POQI) international consensus statement on perioperative arterial pressure management. British Journal of Anaesthesia, 133(2), 264–276.",
      "Wesselink, E. M., Kappen, T. H., Torn, H. M., Slooter, A. J. C., & van Klei, W. A. (2018). Intraoperative hypotension and the risk of postoperative adverse outcomes: A systematic review. British Journal of Anaesthesia, 121(4), 706–721.",
      "D'Amico, F., Fominskiy, E. V., Turi, S., Pruna, A., Fresilli, S., Triulzi, M., et al. (2023). Intraoperative hypotension and postoperative outcomes: A meta-analysis of randomised trials. British Journal of Anaesthesia, 131(5), 823–831.",
      "Gaba, D. M., Howard, S. K., & Burden, A. (Eds.). (2026). Crisis management in anesthesiology (3rd ed.). Elsevier."
    ]
  }