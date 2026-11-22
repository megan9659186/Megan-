{
    group: "通用急救",
    id: "arrest",
    name: "術中心跳停止(成人)",
    en: "Intraoperative Cardiac Arrest (Adult)",
    key: "沒脈搏就壓 → 喊人、貼電擊片、關掉麻醉藥與血管擴張藥,同時找 H 與 T",
    recog: [
      "## 怎麼發現",
      "<b>EtCO₂ 突然掉很低或消失</b>、血氧波形消失、動脈波形變平或 MAP &lt;20 mmHg",
      "量不到 NIBP、摸不到頸動脈或股動脈(周邊脈搏不可靠;外科醫師常比較好摸)",
      "心電圖 VF/VT、asystole,或看似正常節律但沒有脈搏(PEA)",
      "清醒或半身麻醉病人:突然沒反應、類似抽搐、停止呼吸",
      "<b class='w'>先處理病人,不要先懷疑機器</b>;同時檢查導線與監測,但不可因此延誤按壓",
      "## 術中常見原因",
      "出血與低血容、低血氧(含未發現的食道插管)、高血鉀",
      "半身麻醉後心搏過緩、強烈迷走反射、麻醉藥過量或給藥錯誤、LAST",
      "張力性氣胸、氣體滯留(auto-PEEP)、心包填塞、肺栓塞或氣體栓塞、過敏、惡性高熱"
    ],
    actNote: "手術室的心跳停止通常有人目擊、原因可逆,關鍵是立即高品質按壓並同步找原因。",
    act: [
      "<b class='w'>通知麻醉主治醫師、Call Help!</b>立即告知外科團隊並啟動院內急救流程",
      "<b>立即開始胸外按壓</b>:每分鐘 100–120 次、深度約 5–6 cm、讓胸廓完全回彈;每 2 分鐘換手,中斷 &lt;10 秒",
      "貼上電擊貼片、推急救車",
      "<b>關掉所有吸入與靜脈麻醉藥、血管擴張藥</b>,100% 氧氣高流量",
      "已插管:每分鐘 10 次通氣,按壓不停;未插管:30:2 面罩通氣,準備聲門上呼吸道或插管",
      "用 EtCO₂ 與動脈舒張壓看按壓品質:EtCO₂ 至少 10 mmHg、舒張壓 &gt;20 mmHg,達不到就改善按壓",
      "<b>可電擊心律(VF/無脈 VT)</b>:儘快電擊,電擊後立即按壓 2 分鐘再看心律;第 2 次電擊後給 epinephrine,頑固者加 amiodarone",
      "<b>不可電擊心律(PEA/asystole)</b>:儘快給 epinephrine,每 3–5 分鐘重複",
      "<b>同時找可逆原因</b>:放掉氣腹、解除拉鉤壓迫、懷孕者子宮左推、拆開迴路排除氣體滯留、檢查所有點滴與輸注藥物",
      "抽動脈血氣與電解質(鉀、鈣、血糖);有條件時以 TEE 或超音波找心包填塞、右心擴大、低血容",
      "俯臥手術:若氣道已固定,可先在俯臥姿勢按壓兩側肩胛骨之間,同時準備翻身",
      "恢復自發循環的徵象:EtCO₂ 突然上升、出現動脈波形或可摸到脈搏"
    ],
    dose: [
      ["Epinephrine", "<b>1 mg IV/IO,每 3–5 分鐘</b>", "不可電擊心律儘早給;可電擊心律在第 2 次電擊後給"],
      ["電擊", "雙相 120–200 J(依機型建議),之後同等或更高", "每 2 分鐘檢查一次心律;充電時繼續按壓"],
      ["Amiodarone", "<b>首劑 300 mg IV,第二劑 150 mg</b>", "頑固性 VF/無脈 VT"],
      ["Lidocaine", "1–1.5 mg/kg IV,之後 0.5–0.75 mg/kg", "可取代 amiodarone;<b class='w'>懷疑 LAST 時不可用</b>"],
      ["Calcium chloride", "10% CaCl₂ 500–1000 mg IV", "懷疑高血鉀、低血鈣或大量輸血時"],
      ["Magnesium sulfate", "2 g IV", "Torsades de pointes"]
    ],
    avoid: [
      "<b class='w'>不要為了確認監測或找原因而停止按壓</b>",
      "<b class='w'>懷疑 LAST 時 epinephrine 單次 ≤1 µg/kg,並給脂肪乳劑</b>(見局部麻醉藥全身毒性卡)",
      "不要在可電擊心律延誤電擊;不要電擊後先摸脈搏,應立即恢復按壓"
    ],
    after: [
      "恢復循環後:維持 SpO₂ 92–98%、正常 PaCO₂、MAP ≥65 mmHg,避免發燒",
      "做 12 導程心電圖,與心臟科討論是否需要心導管",
      "轉加護病房;與團隊討論是否繼續或終止手術",
      "事後團隊回顧(debriefing),記錄時間點、給藥與電擊次數"
    ],
    refs: [
      "Wigginton, J. G., Agarwal, S., Bartos, J. A., Coute, R. A., Drennan, I. R., Haamid, A., et al. (2025). Part 9: Adult advanced life support: 2025 American Heart Association guidelines for cardiopulmonary resuscitation and emergency cardiovascular care. Circulation, 152(16_suppl_2), S538–S577.",
      "Cao, D., Arens, A. M., Chow, S. L., Easter, S. R., Hoffman, R. S., Lagina, A. T., et al. (2025). Part 10: Adult and pediatric special circumstances of resuscitation: 2025 American Heart Association guidelines for cardiopulmonary resuscitation and emergency cardiovascular care. Circulation, 152(16_suppl_2), S578–S672.",
      "Hirsch, K. G., Amorim, E., Coppler, P. J., Drennan, I. R., Elliott, A., Gordon, A. J., et al. (2025). Part 11: Post-cardiac arrest care: 2025 American Heart Association guidelines for cardiopulmonary resuscitation and emergency cardiovascular care. Circulation, 152(16_suppl_2), S673–S718.",
      "Hinkelbein, J., Andres, J., Böttiger, B. W., Brazzi, L., De Robertis, E., Einav, S., et al. (2023). Cardiac arrest in the perioperative period: A consensus guideline for identification, treatment, and prevention from the European Society of Anaesthesiology and Intensive Care and the European Society for Trauma and Emergency Surgery. European Journal of Anaesthesiology, 40(10), 724–736.",
      "Gaba, D. M., Howard, S. K., & Burden, A. (Eds.). (2026). Crisis management in anesthesiology (3rd ed.). Elsevier."
    ]
  }