{
    group: "通用排查",
    id: "highpip",
    name: "高氣道壓",
    en: "High Peak Inspiratory Pressure",
    key: "100% 氧氣、改手動通氣 → 拆開 Y 接頭:壓力還高是機器迴路,壓力下降是管子或病人",
    recog: [
      "氣道壓比原本上升 &gt;5 cmH₂O,或 &gt;40 cmH₂O;高氣道壓警報",
      "呼吸袋變硬、潮氣量變小(壓力控制模式尤其明顯)、胸廓起伏小",
      "EtCO₂ 波形改變(上升支變斜)、SpO₂ 下降;嚴重時靜脈回流受阻 → 頑固性低血壓",
      "## 依位置想原因",
      "<b>機器與迴路</b>:呼吸器/手動切換錯誤、活瓣卡住、管路扭折、意外加了 PEEP、快速供氧鍵卡住",
      "<b>氣管內管</b>:扭折、被咬、痰栓或血塊、氣囊疝出、單側支氣管插管、食道插管",
      "<b>肺與胸壁</b>:支氣管痙攣、吸入、肺水腫、氣胸、肺塌陷;嗆咳、肌鬆不足、鴉片類造成胸壁僵直、惡性高熱",
      "<b>腹部與體位</b>:氣腹、肥胖、俯臥腹部受壓、陡峭頭低位、拉鉤"
    ],
    act: [
      "<b class='w'>通知麻醉主治醫師、Call Help!</b>",
      "<b>FiO₂ 100%</b>,確認仍有 EtCO₂",
      "<b>改手動通氣</b>,感受阻力",
      "<b class='w'>合併低血壓:先把迴路與管子拆開數秒</b>,排除氣體滯留(auto-PEEP)",
      "<b>拆開 Y 接頭,擠壓呼吸袋</b>:壓力仍高 → 機器或迴路問題,立刻改用甦醒球(Ambu)通氣並請人處理;壓力下降 → 問題在管子或病人",
      "聽診兩側:不對稱 → 單側支氣管插管(退管)或氣胸;對稱有喘鳴 → 支氣管痙攣;有囉音 → 肺水腫",
      "<b>抽痰管通過氣管內管</b>:過不去 → 扭折、被咬、痰栓或氣囊疝出;氣囊放氣再試、纖維支氣管鏡檢查,無法排除就換管",
      "檢查麻醉深度與肌鬆、氣腹壓、體位與拉鉤;告知外科",
      "懷疑張力性氣胸(低血壓、單側呼吸音消失、氣管偏移)→ 立即請外科或有經驗者減壓並置放胸管"
    ],
    dose: [],
    avoid: [
      "<b class='w'>不要在原因未明時一直加大呼吸器壓力</b>,會增加氣壓傷與氣胸風險",
      "不要忽略機器端:先拆 Y 接頭分辨,比在病人身上找原因快"
    ],
    after: [
      "處理後血壓可能反彈上升(先前給的輸液與升壓藥開始作用)",
      "懷疑氣壓傷:安排胸部 X 光",
      "移除的氣管內管保留檢查;機器問題通報並更換"
    ],
    refs: [
      "Hinkelbein, J., Andres, J., Böttiger, B. W., Brazzi, L., De Robertis, E., Einav, S., et al. (2023). Cardiac arrest in the perioperative period: A consensus guideline for identification, treatment, and prevention from the European Society of Anaesthesiology and Intensive Care and the European Society for Trauma and Emergency Surgery. European Journal of Anaesthesiology, 40(10), 724–736.",
      "Shum, S., Huang, A., & Slinger, P. (2023). Hypoxaemia during one lung ventilation. BJA Education, 23(9), 328–336.",
      "Goldhaber-Fiebert, S. N., Austin, N., Sultan, E., et al. (2021). Emergency manual: Cognitive aids for perioperative crises (Version 4). Stanford Anesthesia Cognitive Aid Program.",
      "Gaba, D. M., Howard, S. K., & Burden, A. (Eds.). (2026). Crisis management in anesthesiology (3rd ed.). Elsevier."
    ]
  }