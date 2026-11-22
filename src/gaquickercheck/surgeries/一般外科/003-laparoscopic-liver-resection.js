{
    checked: "2026-08-07",
    specialty:"一般外科",
    name:"腹腔鏡肝切除術",
    en:"Laparoscopic Liver Resection",
    summary:{ position:"Supine · reverse Trendelenburg (± French/split-leg)", posType:"revtrend", time:"參考捷格手術排程時間", blood:"中～多(離斷期可能大量)", airway:"GA / ETT" },
    preop:[
      "評估肝功能與肝儲備(Child-Pugh、MELD、ICG 清除率)、門脈高壓、食道靜脈曲張、凝血與血小板",
      "肝病(肝硬化、化療後肝、脂肪肝)影響藥物代謝與出血風險",
      "新輔助化療 → 化療相關脂肪肝炎(↑周術期併發症)及心毒性(心律不整、心肌病、心衰、MI);建議化療結束後 4–6 週再手術",
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
      "考慮心輸出量/SVV 導向輸液(較 CVP 更能兼顧低 CVP 與容積管理)",
      "<b>氣腹經傳導干擾 CVP 讀值 → 腹腔鏡下 CVP 監測不可靠</b>,多改以動態/心輸出量指標取代常規 CVP 導管",
      "<b class='w'>警覺氣體栓塞</b>:EtCO₂ 驟降、SpO₂↓、低血壓;TEE 最敏感",
      "<b class='w'>CUSA 使用時失血易低估</b>:血液積於分離吸引罐、常被 drape 遮蔽 → 主動核對實際失血量"
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
    refs:[
      "Joliat, G. R., Kobayashi, K., Hasegawa, K., et al. (2023). Guidelines for perioperative care for liver surgery: Enhanced Recovery After Surgery (ERAS) Society recommendations 2022. World Journal of Surgery, 47(1), 11–34.",
      "Luo, W., Jin, D., Huang, J., et al. (2024). Low pneumoperitoneum pressure reduces gas embolism during laparoscopic liver resection: A randomized controlled trial. Annals of Surgery, 279(4), 588.",
      "Egger, M. E., Gottumukkala, V., Wilks, J. A., et al. (2017). Anesthetic and operative considerations for laparoscopic liver resection. Surgery, 161(5), 1191–1202.",
      "Patel, J., Jones, C. N., & Amoako, D. (2022). Perioperative management for hepatic resection surgery. BJA Education, 22(9), 357–363.",
      "Pawlik, T. M., Schmidt, C. R., & Lewis, H. L. (2026). Minimally invasive liver resection (MILR). In UpToDate. Wolters Kluwer. (Topic last updated June 06, 2024)."
    ],
    diagram:{ section:"hemo", caption:"Pringle maneuver:夾閉肝門(HA + PV)阻斷入肝血流;肝靜脈 → IVC 回流不受阻斷,故離斷期肝靜脈回血仍是主要出血源(原創示意圖)", svg:`<svg viewBox="0 0 680 400" width="100%" role="img" xmlns="http://www.w3.org/2000/svg"><title>Pringle maneuver 肝臟前面觀示意圖</title><desc>肝臟前面觀:肝門(肝動脈、門靜脈、總膽管)由血管夾夾閉以阻斷入肝血流;肝靜脈匯入下腔靜脈的回流不受阻斷。</desc><defs><marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></marker></defs><rect x="8" y="8" width="664" height="384" rx="16" fill="#F4F1EB" stroke="#E0D9CD" stroke-width="1"/><rect x="384" y="30" width="20" height="70" rx="7" fill="#6E7E90"/><path d="M326 108 C348 99 372 97 390 96" fill="none" stroke="#6E7E90" stroke-width="3" stroke-linecap="round" opacity="0.8"/><path d="M356 118 C372 109 384 103 393 99" fill="none" stroke="#6E7E90" stroke-width="2.4" stroke-linecap="round" opacity="0.65"/><path d="M64 150 C60 104 120 80 210 77 C300 74 372 85 412 101 C440 113 430 157 398 183 C356 217 296 227 220 223 C150 219 92 203 64 150 Z" fill="#E4D4CD" stroke="#B8968C" stroke-width="1"/><path d="M250 79 C249 96 250 106 251 118" fill="none" stroke="#C4A89E" stroke-width="1.4"/><path d="M244 84 L250 94 L256 84" fill="none" stroke="#C4A89E" stroke-width="1.2" stroke-linejoin="round"/><path d="M300 96 C340 92 372 96 402 106" fill="none" stroke="#D3BDB4" stroke-width="1" opacity="0.8"/><path d="M168 214 C159 227 168 246 181 246 C194 246 200 229 191 214 C185 205 174 205 168 214 Z" fill="#C7D2C0" stroke="#8B9A8B" stroke-width="1"/><rect x="228" y="210" width="52" height="124" rx="14" fill="#EBDDD7" stroke="#CDBBB2" stroke-width="0.6" opacity="0.75"/><rect x="238" y="214" width="6" height="120" rx="3" fill="#B5645C"/><rect x="247" y="214" width="13" height="120" rx="4" fill="#8892A0"/><rect x="263" y="214" width="6" height="120" rx="3" fill="#97A98A"/><ellipse cx="253" cy="278" rx="54" ry="25" fill="none" stroke="#C0392B" stroke-width="2" opacity="0.5" stroke-dasharray="5 5"/><path d="M210 271 C190 262 184 267 189 279" fill="none" stroke="#5E5952" stroke-width="3.4" stroke-linecap="round"/><path d="M210 285 C190 293 184 288 189 277" fill="none" stroke="#5E5952" stroke-width="3.4" stroke-linecap="round"/><circle cx="212" cy="278" r="4.5" fill="#443F39"/><rect x="214" y="270" width="76" height="15" rx="6" fill="#5E5952" stroke="#443F39" stroke-width="0.6"/><rect x="220" y="273" width="64" height="3.5" rx="1.5" fill="#7A756D"/><rect x="24" y="300" width="178" height="52" rx="11" fill="#EAD9D3" stroke="#C0392B" stroke-width="1.2"/><text x="38" y="323" font-family="sans-serif" font-size="14.5" font-weight="600" fill="#8F2B20">Pringle maneuver</text><text x="38" y="342" font-family="sans-serif" font-size="12" fill="#6E5F5A">夾閉肝門,阻斷入肝血流</text><path d="M150 300 C185 292 210 292 236 284" fill="none" stroke="#C0392B" stroke-width="2.6" marker-end="url(#ah)"/><line x1="300" y1="122" x2="466" y2="114" stroke="#B4AEA4" stroke-width="0.6" stroke-dasharray="3 3"/><circle cx="300" cy="122" r="2" fill="#8B837A"/><text x="472" y="118" font-family="sans-serif" font-size="14" font-weight="500" fill="#423E39">肝臟</text><line x1="402" y1="52" x2="466" y2="58" stroke="#B4AEA4" stroke-width="0.6" stroke-dasharray="3 3"/><circle cx="402" cy="52" r="2" fill="#8B837A"/><text x="472" y="56" font-family="sans-serif" font-size="14" font-weight="500" fill="#423E39">肝靜脈 → IVC</text><text x="472" y="74" font-family="sans-serif" font-size="12" fill="#726B62">未阻斷,回血仍在</text><line x1="280" y1="238" x2="466" y2="238" stroke="#B4AEA4" stroke-width="0.6" stroke-dasharray="3 3"/><circle cx="280" cy="238" r="2" fill="#8B837A"/><text x="472" y="234" font-family="sans-serif" font-size="14" font-weight="500" fill="#423E39">肝門 portal triad</text><text x="472" y="252" font-family="sans-serif" font-size="12" fill="#726B62">HA + PV + 總膽管</text><line x1="184" y1="240" x2="150" y2="272" stroke="#B4AEA4" stroke-width="0.6" stroke-dasharray="3 3"/><circle cx="184" cy="240" r="2" fill="#8B837A"/><rect x="232" y="360" width="12" height="12" rx="3" fill="#B5645C"/><text x="250" y="370" font-family="sans-serif" font-size="12" fill="#726B62">肝動脈 HA</text><rect x="338" y="360" width="12" height="12" rx="3" fill="#8892A0"/><text x="356" y="370" font-family="sans-serif" font-size="12" fill="#726B62">門靜脈 PV</text><rect x="444" y="360" width="12" height="12" rx="3" fill="#97A98A"/><text x="462" y="370" font-family="sans-serif" font-size="12" fill="#726B62">總膽管</text></svg>` },
    collapse:true
  }