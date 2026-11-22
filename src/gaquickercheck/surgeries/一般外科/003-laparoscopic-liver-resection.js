{
    checked: "2026-08-07",
    updated:"2026-11-22",
    specialty:"一般外科",
    name:"腹腔鏡肝切除術",
    en:"Laparoscopic Liver Resection",
    summary:{ position:"Supine · reverse Trendelenburg (± French/split-leg)", posType:"revtrend", time:"參考捷格手術排程時間", blood:"中～多(離斷期可能大量)", airway:"GA / ETT" },
    preop:[
      "評估肝功能與肝儲備(Child-Pugh、MELD、ICG 清除率)、門脈高壓、食道靜脈曲張、凝血與血小板",
      "肝病(肝硬化、化療後肝、脂肪肝)影響藥物代謝與出血風險",
      "新輔助化療 → <span class='term' role='button' tabindex='0' aria-expanded='false' onclick='toggleTerm(this)' onkeydown='termKey(event,this)'>化療相關脂肪肝炎</span><span class='term-panel' hidden onclick='toggleTerm(this.previousElementSibling)'><b>化療相關肝損傷(CALI)</b>常見於大腸直腸癌肝轉移接受新輔助化療者,依藥物分兩型:<b>Irinotecan → 脂肪肝炎(CASH)</b>,肥胖者更明顯,與術後肝衰竭、死亡率上升相關;<b>Oxaliplatin → 肝竇阻塞症候群(SOS,外觀呈『藍肝』)</b>,肝實質易出血、離斷時失血與輸血增加。<b>5-FU</b> 可致脂肪肝。<b>Bevacizumab</b> 影響傷口癒合與出血,一般停藥 ≥6 週再手術。化療<b>療程越多、與手術間隔越短</b>,肝損傷越明顯 → 術前肝儲備評估更重要。</span>(↑周術期併發症)及心毒性(心律不整、心肌病、心衰、MI);建議化療結束後 4–6 週再手術",
      "<b>備血</b>:預期可能大出血 → 確認血品可近性與大量輸血流程",
      "評估心肺功能(肺功能檢查及 cardiac echo 報告):<b class='w'>低 CVP 策略對前負荷依賴者(如主動脈瓣狹窄)風險高</b>"
    ],
    airway:[
      "ETT;氣腹 + 反向頭高 → FRC↓、氣道壓↑,採肺保護通氣",
      "CO₂ 吸收 → 高碳酸血症,提高分鐘通氣量並監測 EtCO₂"
    ],
    monitor:[
      "標準 ASA 監測 + Flowtrac(連續血壓、心輸出量/SVV 導向、頻繁抽血氣/Hb/乳酸)",
      "<b>大口徑靜脈管路 ×2</b> ± 中央靜脈導管;備快速輸液與加溫裝置",
      "考慮以 <b>SV/SVV 導向輸液</b>取代看 CVP 數字:離斷期壓低 CVP 減少出血,同時避免血管內容積(有效循環血量)不足而低灌流<button class='info-btn' type='button' aria-expanded='false' onclick='toggleInfo(this)'>ⓘ 說明</button><span class='info-panel' hidden>這裡的『容積』指的是<b>血管內容積</b>(有效循環血量),不是 stroke volume 本身。<b>SV</b>(每搏輸出量)是心臟每跳打出去的血量;<b>SVV</b>(每搏變異度)是正壓通氣時 SV 隨呼吸起伏的幅度,用來判斷病人對輸液有沒有反應:SVV 大(約 >12–13%)→ 前負荷不足、給水 SV 會上升;SVV 小 → 再給水也沒幫助,只會讓 CVP 上升、肝靜脈回血變多。靜態 CVP 受靜脈張力與氣腹影響,不能告訴你血管內容積夠不夠。所以低 CVP 期間以 SV/SVV、血壓、尿量、乳酸一起看:<b>離斷期容許 SVV 偏高</b>(刻意偏乾),離斷完成止血後再依 SV/SVV 回補到 euvolemia。</span>",
      "<b>氣腹經傳導干擾 CVP 讀值 → 腹腔鏡下 CVP 監測不可靠</b>,多改以動態/心輸出量指標取代常規 CVP 導管",
      "<b class='w'>警覺氣體栓塞</b>:EtCO₂ 驟降、SpO₂↓、低血壓;TEE 最敏感",
      "<b class='w'>使用 CUSA 時失血容易被低估</b>:CUSA 邊震碎肝組織、邊大量沖水並抽吸,吸出的血混在<b>大量沖洗水裡,收進 CUSA 專用的收集罐</b>(與一般 suction 分開),容易漏算或難估;部分出血又被 drape 遮住 → 主動核對 CUSA 收集罐(扣除沖洗量)、紗布、Hb/乳酸趨勢"
    ],
    hemo:[
      "<b>低 CVP 麻醉(目標 CVP < 5 mmHg)</b> → 減少肝靜脈回血、降低肝實質離斷出血",
      "RCT 證實離斷期以麻醉手段壓低 CVP 可顯著減少術中失血;<b>低 CVP 僅維持到肝實質離斷完成,止血後即與外科團隊確認回補至 euvolemia</b>(結束低 CVP 期)",
      "機轉:離斷期主要出血源為<b>無瓣膜的肝靜脈回血</b> → 壓低 CVP/肝靜脈壓使術野趨近「無血」;meta-analysis 顯示可減少失血與輸血,但臨床預後未見改善",
      "目標:限制輸液、反向頭高、避免高 PEEP、必要時低劑量血管擴張(furosemide、GTN、remifentanil 等);維持灌流與尿量的平衡",
      "<b class='w'>低 CVP 需與器官灌流權衡</b>:過度低血壓 → 腦/腎/肝低灌流(文獻死因含低血壓相關腦梗塞、術後肝腎衰竭);常需血管收縮劑維持灌流壓,注意尿量、乳酸、動脈壓變化",
      "可佐 <b>tranexamic acid</b> 減少失血",
      "<b class='w'>低 CVP + 氣腹使 PP–CVP 梯度↑ → CO₂ 栓塞風險升高</b><button class='info-btn' type='button' aria-expanded='false' onclick='toggleInfo(this)'>ⓘ 說明</button><span class='info-panel' hidden><b>PP</b> 是氣腹壓(pneumoperitoneum pressure),<b>CVP</b> 這裡代表中央/肝靜脈端壓力。氣體會不會跑進血管,取決於腹腔內 CO₂ 壓力與開放肝靜脈內壓力的<b>落差(梯度)</b>。氣腹把腹腔打到正壓(如 12–14 mmHg),低 CVP 又把靜脈端壓得很低 → 兩者相加使落差變大。當離斷時肝靜脈被切開、靜脈內壓低於周圍 CO₂ 壓,CO₂ 就被這個壓力差灌進開放靜脈 → 氣體栓塞。也就是說:低 CVP 一方面減少出血(好),另一方面卻加大了把 CO₂ 推進血管的驅動壓(壞)。這正是切肝比一般腹腔鏡更需警覺氣栓、有人主張把氣腹壓降到 10–12 mmHg 的原因。</span>",
      "<b>氣腹壓權衡</b>:降至 10–12 mmHg 可減少氣體栓塞(RCT);但止血 tamponade 常需 ≥10–14 mmHg → 與外科團隊依出血/栓塞風險即時調整",
      "Pringle maneuver 阻斷肝門 → 放開時再灌流性低血壓與代謝變化;大血管(肝靜脈/IVC)損傷 → 瞬間大出血",
      "Pringle 多採<b>間歇阻斷</b>(常規肝連續 >1 hr、病理肝 >30 min 易致缺血/再灌流傷害)→ 10–20 min 阻斷 + 5 min 再灌流;夾閉時靜脈回流↓、SVR↑ → 血行動力學波動,需與外科團隊密切溝通",
      "<b class='w'>TVE(全肝血流阻斷,含 IVC 上下夾)</b>:無血術野最佳但 FLR 缺血風險高、劇烈容積位移與血行動力學波動;保留給肝靜脈頑固大出血或 IVC 侵犯"
    ],
    intraop:[
      "維持體溫",
      "維持足夠肌肉鬆弛,利於氣腹與手術視野;肝實質離斷階段隨時與外科醫師溝通出血狀況",
      "手術床可能大幅傾斜(steep Trendelenburg ↔ reverse Trendelenburg)→ 事先固定 ETT 與管路,每次變位後重確認氣管內管深度與血行動力學",
      "肝臟後上段(VII/VIII)病灶常採左半側臥、右側朝上約 45° → 加強壓點保護、變位後重評通氣與血壓",
      "Pringle 放開前預告 → 準備處理再灌流低血壓"
    ],
    drug:[
      "肝功能不良 → 首選不依賴肝代謝之藥(如 cisatracurium 之 Hofmann 降解);謹慎 morphine、benzodiazepine",
      "維持適當麻醉深度但避免過度輸液以配合低 CVP"
    ],
    emergence:[
      "確認血行動力學穩定、無活動性出血再甦醒",
      "大範圍切除/肝硬化者評估是否延遲拔管或送 ICU"
    ],
    postop:[
      "多模式止痛:NB 減少鴉片;硬脊膜外於凝血/血小板疑慮者需權衡",
      "止痛策略:ERAS 已不建議常規胸椎硬脊膜外(低血壓、液體過負荷、失敗率、術後凝血病下硬膜外血腫風險)→ 替代 intrathecal morphine、傷口持續浸潤導管(CWI)、TAP/ESP block;paracetamol 除極大範圍切除外多屬安全,NSAID 無禁忌時可用",
      "監測術後出血、膽漏、肝功能與凝血、低血糖",
      "<b>PHLF</b> 多於 POD5 後浮現(INR↑、膽紅素↑);術後仍常對輸液有反應 → goal-directed,循環容積足即停 IV fluid<button class='info-btn' type='button' aria-expanded='false' onclick='toggleInfo(this)'>ⓘ 說明</button><span class='info-panel' hidden>這條其實壓縮了兩個重點。<b>一、PHLF 辨識時機</b>:PHLF(post-hepatectomy liver failure,術後肝衰竭)典型在 POD5(術後第 5 天)之後才浮現,指標是 INR 上升 + 膽紅素上升(即 50–50 criteria 概念)→ 所以術後凝血與膽紅素追蹤的關鍵時間點在 POD5 前後。<b>二、術後輸液</b>:大範圍切除後,病人術後早期通常仍對輸液有反應(fluid-responsive),故短期採目標導向輸液(goal-directed);但一旦水化與循環容積足夠就停掉靜脈輸液,避免液體過負荷。</span>",
      "早期活動、目標導向輸液(ERAS 肝手術)"
    ],
    flags:[
      "CO₂ 氣體栓塞(肝靜脈開放 + 低 CVP → 風險高於一般腹腔鏡)",
      "大血管損傷 → 瞬間大量失血",
      "Pringle 放開後再灌流性低血壓;術後出血/膽漏",
      "肝衰竭(切除量過大/肝儲備不足)、術後凝血病"
    ],
    lit:[
      {
        tag:"Miller", cls:"miller", label:"Miller's Anesthesia 教科書重點", note:"第 10 版,第 43、44 章(輸液與電解質、酸鹼平衡)",
        monitor:[
          "<b>CVP 不等於血管內容積</b>:CVP 受靜脈順應性影響,血管收縮時即使容積不足 CVP 也可能正常或偏高;靜態 CVP 難預測輸液反應,看趨勢較有意義",
          "<b>動脈波形分析(如 FloTrac)</b>未校正,呈現的是 SV <b>趨勢</b>而非絕對值;SVV 可預測正壓通氣下的輸液反應",
          "<b>乳酸</b>可反映整體組織灌流,但肝功能不良或缺血組織再灌流時也會上升 → 解讀時要考慮肝臟本身的清除能力"
        ],
        hemo:[
          "<b>容積有『甜蜜點』</b>:過少 → 腸道低灌流、DO₂ 不足、乳酸性酸中毒;過多 → 組織水腫、肺充血、傷口癒合差、腸功能恢復慢",
          "<b>GDT 典型作法</b>:快速給 250 mL 輸液,目標 SV 上升 ≥10%;重複直到 SV 不再上升(已在 Starling 曲線平坦段)",
          "<b>RELIEF 試驗</b>(3000 例重大腹部手術):限制輸液組手術部位感染與需洗腎比例較高 → 提醒<b>過度限水也有害</b>;術後體重增加約 +1.5 kg 可作參考",
          "以 mL/kg 公式給水而非依生理目標時,晶體液 >3.5–5 L 與體重上升、心肺併發症、傷口癒合不良、腸功能延遲及住院延長相關",
          "含乳酸的平衡液可用於肝病,但<b>晚期肝病代謝乳酸變慢</b>"
        ],
        drug:[
          "<b>升壓劑會讓乳酸上升</b>:epinephrine/norepinephrine 刺激 β 受體產生『有氧糖解』(type B 乳酸上升),不一定代表低灌流",
          "乳酸 >2 mEq/L 具臨床意義;合併代謝性酸中毒且 ≥5 mEq/L 屬嚴重",
          "給水後乳酸先因稀釋快速下降,之後受肝臟清除速率限制,每小時約降 10–20%;<b>給水後乳酸不降 → 不應再持續給水</b>"
        ]
      }
    ],
    refs:[
      "Joliat, G. R., Kobayashi, K., Hasegawa, K., et al. (2023). Guidelines for perioperative care for liver surgery: Enhanced Recovery After Surgery (ERAS) Society recommendations 2022. World Journal of Surgery, 47(1), 11–34.",
      "Luo, W., Jin, D., Huang, J., et al. (2024). Low pneumoperitoneum pressure reduces gas embolism during laparoscopic liver resection: A randomized controlled trial. Annals of Surgery, 279(4), 588.",
      "Egger, M. E., Gottumukkala, V., Wilks, J. A., et al. (2017). Anesthetic and operative considerations for laparoscopic liver resection. Surgery, 161(5), 1191–1202.",
      "Patel, J., Jones, C. N., & Amoako, D. (2022). Perioperative management for hepatic resection surgery. BJA Education, 22(9), 357–363.",
      "Edwards, M. R., & Grocott, M. P. W. (2025). Perioperative fluid and electrolyte therapy. In M. A. Gropper, L. I. Eriksson, L. A. Fleisher, et al. (Eds.), Miller's anesthesia (10th ed., pp. 1331–1373.e6). Elsevier.",
      "Neligan, P. J. (2025). Perioperative acid–base balance. In M. A. Gropper, L. I. Eriksson, L. A. Fleisher, et al. (Eds.), Miller's anesthesia (10th ed., pp. 1374–1397.e3). Elsevier.",
      "Remesz, O. (2013). <i>Pringle manoeuvre EN.svg</i> [Illustration]. Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Pringle_manoeuvre_EN.svg (CC BY-SA 3.0, https://creativecommons.org/licenses/by-sa/3.0/; 經改作)",
      "Pawlik, T. M., Schmidt, C. R., & Lewis, H. L. (2026). Minimally invasive liver resection (MILR). In UpToDate. Wolters Kluwer. (Topic last updated June 06, 2024)."
    ],
    diagram:{ section:"hemo", img:"@@IMG:pringle-maneuver-wikipedia.jpg:jpeg@@", alt:"Pringle maneuver:血管鉗夾住肝十二指腸韌帶", caption:"Pringle maneuver:以血管鉗夾住肝十二指腸韌帶(內含肝動脈、門靜脈、總膽管),阻斷入肝血流;肝靜脈 → IVC 的回流不受阻斷,故離斷期肝靜脈回血仍是主要出血源。(圖片來源見文獻出處)" },
    collapse:true
  }