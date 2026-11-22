{
    updated:"2026-09-23",
    specialty:"外區麻醉",
    name:"心臟電燒",
    en:"Cardiac Ablation (RFA / PFA)",
    summary:{ position:"依術式需求", posType:"supine", time:"約 2–4 hr", blood:"Minimal", airway:"ETGA" },
    pickLabel:"選擇電燒術式,再點進去看該術式的重點",
    hideVariantSummary:true,
    preop:[
      "標準麻醉前評估",
      "<b class='w'>確認有無術前半年內的 cardiac echo 報告</b>"
    ],
    airway:[
      "以 <b>LEMON</b> 評估呼吸道<button class='info-btn' type='button' aria-expanded='false' onclick='toggleInfo(this)'>ⓘ 說明</button><span class='info-panel' hidden><b>L</b>ook:外觀,如臉部外傷、鬍鬚、牙齒鬆動、舌頭肥大、頸部粗短;<b>E</b>valuate 3-3-2:張口 ≥3 指、下頦到舌骨 ≥3 指、舌骨到甲狀軟骨 ≥2 指;<b>M</b>allampati 分級;<b>O</b>bstruction:上呼吸道阻塞或近期感染;<b>N</b>eck mobility:頸部活動度。</span>"
    ],
    prep:[
      "<span class='ptit'>誘導藥</span><span class='pdet'>ETGA induction 藥物</span>",
      "<span class='ptit'>升壓藥</span><span class='pdet'><b class='w'>Norepinephrine 一袋(10 µg/mL)</b></span>",
      "<span class='ptit'>外出藥物</span><span class='pdet'>外出小藥盒、自費藥物</span>",
      "<span class='ptit'>輸液管路</span><span class='pdet'><b>備一條輸血用粗 IV set</b></span>"
    ],
    monitor:[
      "<span class='ptit'>導線方向</span><span class='pdet'><b>麻醉科導線走麻機側(病人左側)</b>;<b class='w'>左側為禁治療肢體時,NIBP 考慮量在腳上</b></span>",
      "<span class='ptit'>自費監測</span><span class='pdet'>Entropy、NMT、床上型溫毯</span>",
      "<span class='ptit'>A-line</span><span class='pdet'><b>心內醫師會打好</b>,接出來給我們看</span>",
      "<span class='ptit'>Sheath 與輸液</span><span class='pdet'>心內醫師會在病人腳上打 sheath → <b>遞一條無菌 IV extension 給心內醫師</b>,再接上備好的輸血粗 IV set</span>",
      "<span class='ptit'>轉送備物</span><span class='pdet'>帶 N20 與鼻導管</span>"
    ],
    hemo:[
      "心臟電燒刺激不大 → <b>吸入麻藥依 Entropy 調整</b>",
      "<b class='w'>心內醫師 pacing 時心跳快、血壓低</b> → 適時給 Norepinephrine,維持血行動力穩定",
      "<b>輸液量不用多</b>:沒有手術第三空間,且心內醫師會從 sheath 端給水降低電燒溫度"
    ],
    emergence:[
      "手術結束<b>通知麻醫</b>,選擇適當的 reverse 藥物",
      "<b>清醒後拔管</b>"
    ],
    postop:[
      "病人戴上氧氣鼻導管、帶上 N20,與麻醫及家屬一同推病人小床至 <b>POR</b>"
    ],
    variants:[
        {
          cls:"v-rfa-af",
          name:"心臟電燒－心房顫動",
          en:"RFA – Atrial Fibrillation",
          note:"射頻熱能做肺靜脈隔離。重點:食道溫度監測、灌流液容積過多、可能使用噴射通氣。",
          heroImage:{ src:"@@IMG:056-cardiac-ablation-rfa-pfa-1.png:png@@", alt:"心臟電燒（RFA）肺靜脈隔離透明背景醫學卡通圖（AI 生成）" },
          summary:{ position:"依術式需求", posType:"supine", time:"待補", blood:"待補", airway:"待補" },
          lit:[
            {
              tag:"Miller", cls:"miller", label:"Miller's Anesthesia 教科書重點", note:"第 10 版,第 50 章",
              preop:[
                "<b>背景</b>:AF 盛行率 1–2%,65 歲以後明顯增加;<b>AF 病人中風風險為無 AF 者的 4–5 倍</b>,80 歲以上的中風約四分之一由 AF 造成",
                "<b>外科 Cox–Maze IV</b> 為治癒 AF 的金標準(需 CPB),約 95% 十年無 AF;外科心外膜途徑可避開肺靜脈狹窄、大幅降低食道傷害,並可一併切除左心耳",
                "<b>場地</b>:電生理手術可在電生理室或 hybrid room;hybrid room 兼具透視與開刀條件、設在手術室內或旁邊,<b>出現非預期併發症時關鍵人員較快到位</b>",
                "<b class='w'>導管可能穿破心腔或大血管</b> → 事先規劃轉開放手術的可能,<b>專責外科團隊待命</b>;沒有 hybrid room 的醫院要能緊急送刀房",
                "<b>高風險消融</b>可能事先放經皮心室輔助器(Impella、TandemHeart)支持左心室,<b>外科後援必須到位</b>"
              ],
              airway:[
                "鎮靜或 GA 依病人與術式決定;<b>由麻醉人員監測可提升許多導管手術的成效與安全</b>",
                "<b>GA 插管最能掌控</b>:病人舒適、呼吸道確保",
                "LMA 或面罩也可以,但<b>自發呼吸時橫膈持續起伏,可能干擾透視</b>下看心臟與血管"
              ],
              monitor:[
                "<b>經皮心室輔助器</b>產生非搏動血流 → <b class='w'>SpO₂ 與 NIBP 可能量不準</b>,建議 A-line;備大口徑 IV(可能大量失血)",
                "緊急狀況要能即時驗 ABG、電解質、Hb/Hct;有出血時 TEG 等床邊凝血檢查比 PT/INR 更有幫助"
              ],
              hemo:[
                "<b class='w'>急性心包填塞</b>:導管意外穿破心腔或血管,心包腔快速累積 <b>100–200 mL</b> 就可使心包壓力升到 30 mmHg 以上<button class='info-btn' type='button' aria-expanded='false' onclick='toggleInfo(this)'>ⓘ 說明</button><span class='info-panel' hidden>心包在急性積液時幾乎撐不開,少量出血就讓壓力陡升,各心腔舒張壓被迫與心包壓相等,心輸出量下降,靠<b>心跳加快與血管收縮</b>代償。臨床線索:<b>Beck 三徵</b>(低血壓、頸靜脈壓上升、心音遙遠)、<b>奇脈</b>(吸氣時收縮壓下降超過 10 mmHg)。超音波:右心房收縮期塌陷較早出現,右心室舒張早期塌陷特異性高,兩者都有代表血行動力上已有意義。</span>",
                "<b>填塞的血行目標:fast, full, strong</b>:HR 維持在高正常、先補液增加前負荷、避免心肌抑制藥;<b class='w'>避免心搏過緩</b>(心跳快是最重要的代償)",
                "<b class='w'>避免大潮氣量正壓通氣</b>(減少靜脈回流);可改高頻率、小潮氣量降低平均氣道壓;嚴重不穩時可先在局部麻醉下心包穿刺引流,部分解除後再全身麻醉"
              ],
              intraop:[
                "<span class='ptit ptit-c'>緊急誘導</span><span class='pdet'>尚未插管者依血行動力選藥,<b>避免低血壓與心搏過速</b>,並注意禁食狀況與先前給過的鎮靜藥;填塞時常選 etomidate</span>",
                "<span class='ptit ptit-c'>緊急支持</span><span class='pdet'>盡快建立 A-line 與中心靜脈,TEE 協助診斷;必要時以藥物、IABP 或 VAD 暫時撐住血行,再送刀房;導管室成員都應具備 BLS,鼓勵 ACLS</span>"
              ],
              emergence:[
                "無明顯併發症或共病:可在室內醒來再轉恢復區;<b>較複雜者轉 ICU 慢慢醒</b>"
              ],
              flags:[
                "導管穿破心腔或大血管 → 急性心包填塞",
                "需緊急轉開放手術",
                "心室輔助器時 SpO₂、NIBP 失準"
              ]
            },
            {
              tag:"UpToDate", cls:"uptodate", label:"UpToDate 重點", note:"Anesthetic considerations for electrophysiology procedures",
              preop:[
                "<b>抗凝</b>:多數 AF 消融在<b>不中斷口服抗凝</b>下進行,以降低左心房操作的血栓栓塞;抗凝狀態不確定時抽 PT/INR,由心內團隊決定是否改期",
                "<b>抗心律不整藥</b>:flecainide、sotalol、amiodarone 等在 AF、VT 消融前常停用;停藥由心內團隊指示,術前詳問病人實際服藥情形,有疑問先問心內醫師",
                "<b>左心房血栓</b>:懷疑時於術前或誘導後做 TEE;竇律、規則抗凝、LV 功能正常且 CTA 已排除者可考慮不做",
                "<b>共病</b>:心衰竭者限制輸液避免容積過多;原有腎功能不佳者注意顯影劑腎損傷;<b>詢問顯影劑與 protamine 過敏史</b>",
                "事先規劃術後去處(導管室恢復區、恢復室或加護病房)"
              ],
              airway:[
                "AF 消融可在 GA 或不同深度鎮靜下進行,依時間長短、麻醉人力與病人意願個別決定;<b>複雜或預期很痛</b>的個案以 GA 為優先",
                "GA 通常插 ETT;要先做 TEE 排除血栓時選短效藥與短效肌鬆,<b>看到血栓可快速清醒改期</b>;少數以 LMA 取代",
                "心內醫師可能要求<b>暫停呼吸 10–60 秒</b>穩定導管;恢復通氣後依 EtCO₂ 增加分鐘通氣量,避免高碳酸",
                "心內醫師可能在關鍵時段要求<b>高頻噴射通氣(HFJV)</b>減少胸廓起伏、穩定導管 → 麻醉機離開迴路,<b>必須改 TIVA</b>"
              ],
              prep:[
                "<b class='w'>誘導前貼好體外電擊/經皮節律貼片</b>,具節律功能的電擊器隨時可用",
                "<b>手臂收在身旁後就摸不到</b> → 誘導前後確保 IV 足夠,多數再加一條周邊 IV;心內醫師放的股靜脈鞘管也可給藥與抽 ACT"
              ],
              monitor:[
                "ASA 標準監測,含 SpO₂ 與 EtCO₂",
                "<b class='w'>射頻消融左心房後壁靠近食道 → 放食道溫度探頭</b>:誘導後<b>經口</b>放(抗凝下經鼻易大量鼻出血),心內醫師以透視調到消融點正後方;放電時持續監測,溫度上升就停止放電或降低能量與時間<button class='info-btn' type='button' aria-expanded='false' onclick='toggleInfo(this)'>ⓘ 說明</button><span class='info-panel' hidden>射頻是用熱能燒灼,熱會傳到緊貼在左心房後壁後方的食道,嚴重時造成食道穿孔與<b>心房食道瘻管</b>(罕見但死亡率高)。溫度探頭讓心內醫師在溫度升高時及時停手。其他預防方式包括降低導管接觸力、把食道推開。</span>",
                "<b>A-line 選擇性放置</b>:EF 很低、頻繁惡性心律不整、ACS、嚴重心衰或血行不穩;快速心律使袖帶不準;需多次抽 ACT 或 ABG",
                "ACT 多可從股靜脈鞘管抽;<b>使用 HFJV 時</b>容易低碳酸與低血壓,A-line 與 ABG 更重要",
                "腦波監測(processed 或 raw EEG)協助調整麻醉深度,<b>尤其 TIVA 合併肌鬆</b>時,降低術中知曉"
              ],
              hemo:[
                "<b>低血壓原因</b>:低刺激時段麻醉過深、原有心臟病、快速 pacing、給 isoproterenol 誘發心律不整;<b class='w'>心臟或血管穿孔 → 出血或心包填塞</b>;要與心內團隊密切溝通找原因",
                "<b class='w'>容積過多</b>:射頻導管頭端持續以生理食鹽水灌流冷卻,<b>整台下來可累積數公升</b> → 限制 IV 輸液,<b>約每 30 分鐘計算一次輸入輸出</b>;懷疑容積過多依醫囑 furosemide 20 mg(心衰或腎功能差者可能需要更高劑量),常放尿管或外接集尿",
                "<b>升壓藥 bolus 參考</b>:phenylephrine 50–100 µg、norepinephrine 4–8 µg、epinephrine 4–10 µg 起;實際依醫囑與本科泡法表"
              ],
              intraop:[
                "<span class='ptit ptit-a'>麻醉維持</span><span class='pdet'>吸入或靜脈皆可;多數麻藥對 QT、竇房結或房室結只有輕微影響,<b>不影響心律不整誘發,不需刻意避開特定藥物</b></span>",
                "<span class='ptit ptit-b'>Heparin 與 ACT</span><span class='pdet'>左側心臟消融常用 heparin,以 ACT 監測是否達標;結束時給 protamine 中和</span>",
                "<span class='ptit ptit-c'>HFJV 前</span><span class='pdet'>心內醫師會提前幾分鐘告知;<b>先加深麻醉</b>(HFJV 刺激呼吸道,易咳嗽或 bucking),可加 remifentanil bolus 50–100 µg</span>",
                "<span class='ptit ptit-c'>HFJV 的 TIVA</span><span class='pdet'>常用 propofol 100–150 µg/kg/min + remifentanil 0.1–0.2 µg/kg/min;術後疼痛輕微,不需長效鴉片</span>",
                "<span class='ptit ptit-c'>HFJV 設定(參考)</span><span class='pdet'>驅動壓 30 psi、頻率 100 次/分、FiO₂ 80%、吸氣時間比 30%、濕度 50%;EtCO₂ 呈<b>鋸齒狀</b>屬正常<button class='info-btn' type='button' aria-expanded='false' onclick='toggleInfo(this)'>ⓘ 說明</button><span class='info-panel' hidden>ABG 在開始 HFJV 前後、之後約每 30 分鐘,以及恢復一般通氣後各抽一次。出現高碳酸時:<b>降低頻率</b>(如 100 → 80 次/分)讓呼氣時間變長、<b>降低吸氣時間比</b>(30 → 25%)、或<b>提高驅動壓</b>(30 → 32 psi)。COPD、氣喘、嚴重肥胖者可能出現高碳酸或平台壓上升,調整無效就放棄 HFJV。</span></span>"
              ],
              emergence:[
                "通常<b>拔鞘管前給 protamine</b>;可在拔鞘管前或後拔管",
                "<b class='w'>拔鞘管後咳嗽可能造成穿刺處大出血或血腫</b> → 容易咳嗽的病人(如呼吸道過敏)可考慮鞘管仍在時先拔管"
              ],
              postop:[
                "拔除股靜脈、股動脈大鞘管後需<b>平躺數小時</b>",
                "術後疼痛通常輕微,不常規給止痛;長時間仰躺在檢查台可能<b>下背痛</b>,出室前處理",
                "仰躺無法維持通氣與氧合者,可帶管、鎮靜數小時後再拔",
                "使用 HFJV 者恢復室停留時間較長"
              ],
              flags:[
                "食道熱傷害 → 食道穿孔、心房食道瘻管",
                "灌流液造成容積過多",
                "心臟穿孔、心包填塞",
                "HFJV 相關低碳酸、低血壓",
                "血管入路出血、血腫"
              ]
            },
            {
              tag:"其他文獻", cls:"otherlit", label:"其他文獻重點", note:"SRMA、登錄研究與 review",
              airway:[
                "<b>SRMA(Europace 2025):</b>6 篇 RCT + 17 篇觀察性研究、12,302 人,GA 與鎮靜的心房頻脈復發無顯著差異",
                "<b>醫院登錄研究(J Clin Anesth 2024):</b>1822 人,63% 使用 HFJV;校正後 HFJV 組<b>恢復室停留多約 38 分鐘</b>,術中<b>低碳酸</b>(OR 5.9)與<b>低血壓</b>(OR 1.9)較多,低血氧與術後呼吸併發症沒有增加"
              ],
              postop:[
                "<b>Review(Circulation 2017):</b>AF 消融後食道穿孔約 0.1–0.25%,即使有食道溫度監測仍可能發生;<b class='w'>術後數天到數週出現發燒、突發胸痛或神經學症狀要警覺心房食道瘻管</b>,以 CT 診斷,避免做內視鏡(可能造成空氣栓塞)"
              ]
            }
          ],
          refs:[
            "Sarwar, M. F., Rodriguez-Diaz, C., Dabski, M., et al. (2025). Anesthesia for cardiac surgical procedures. In M. A. Gropper, L. I. Eriksson, L. A. Fleisher, et al. (Eds.), Miller's anesthesia (10th ed., pp. 1577–1682). Elsevier.",
            "Shook, D. C., & JohnBull, E. A. (2026, January 5). Anesthetic considerations for electrophysiology procedures. In J. B. Mark, B. P. Knight, N. A. Nussmeier, & N. F. Botkin (Eds.), UpToDate. Retrieved September 23, 2026, from https://www.uptodate.com/contents/anesthetic-considerations-for-electrophysiology-procedures",
            "Araújo, B., Rivera, A., de Oliveira Tapioca, V., et al. (2025). Sedation vs. general anaesthesia in patients with atrial fibrillation undergoing catheter ablation: A systematic review and meta-analysis. Europace, 27(9), euaf156.",
            "Munoz-Acuna, R., Tartler, T. M., Azizi, B. A., et al. (2024). Recovery and safety with prolonged high-frequency jet ventilation for catheter ablation of atrial fibrillation: A hospital registry study from a New England healthcare network. Journal of Clinical Anesthesia, 93, 111324.",
            "Kapur, S., Barbhaiya, C., Deneke, T., & Michaud, G. F. (2017). Esophageal injury and atrioesophageal fistula caused by ablation for atrial fibrillation. Circulation, 136(13), 1247–1255."
          ],
          collapse:true
        },
        {
          cls:"v-pfa",
          name:"心臟脈衝場消融－心房顫動",
          en:"PFA – Atrial Fibrillation",
          note:"脈衝電場(非熱能)做肺靜脈隔離。重點:放電時肌肉收縮、迷走反射心搏過緩、溶血。",
          heroImage:{ src:"@@IMG:056-cardiac-ablation-rfa-pfa-2.png:png@@", alt:"心臟脈衝場消融（PFA）肺靜脈隔離透明背景醫學卡通圖（AI 生成）" },
          summary:{ position:"依術式需求", posType:"supine", time:"待補", blood:"待補", airway:"待補" },
          lit:[
            {
              tag:"Miller", cls:"miller", label:"Miller's Anesthesia 教科書重點", note:"第 10 版,第 50 章",
              preop:[
                "<b>背景</b>:AF 盛行率 1–2%,65 歲以後明顯增加;<b>AF 病人中風風險為無 AF 者的 4–5 倍</b>,80 歲以上的中風約四分之一由 AF 造成",
                "<b>外科 Cox–Maze IV</b> 為治癒 AF 的金標準(需 CPB),約 95% 十年無 AF;外科心外膜途徑可避開肺靜脈狹窄、大幅降低食道傷害,並可一併切除左心耳",
                "<b>場地</b>:電生理手術可在電生理室或 hybrid room;hybrid room 兼具透視與開刀條件、設在手術室內或旁邊,<b>出現非預期併發症時關鍵人員較快到位</b>",
                "<b class='w'>導管可能穿破心腔或大血管</b> → 事先規劃轉開放手術的可能,<b>專責外科團隊待命</b>;沒有 hybrid room 的醫院要能緊急送刀房",
                "<b>高風險消融</b>可能事先放經皮心室輔助器(Impella、TandemHeart)支持左心室,<b>外科後援必須到位</b>"
              ],
              airway:[
                "鎮靜或 GA 依病人與術式決定;<b>由麻醉人員監測可提升許多導管手術的成效與安全</b>",
                "<b>GA 插管最能掌控</b>:病人舒適、呼吸道確保",
                "LMA 或面罩也可以,但<b>自發呼吸時橫膈持續起伏,可能干擾透視</b>下看心臟與血管"
              ],
              monitor:[
                "<b>經皮心室輔助器</b>產生非搏動血流 → <b class='w'>SpO₂ 與 NIBP 可能量不準</b>,建議 A-line;備大口徑 IV(可能大量失血)",
                "緊急狀況要能即時驗 ABG、電解質、Hb/Hct;有出血時 TEG 等床邊凝血檢查比 PT/INR 更有幫助"
              ],
              hemo:[
                "<b class='w'>急性心包填塞</b>:導管意外穿破心腔或血管,心包腔快速累積 <b>100–200 mL</b> 就可使心包壓力升到 30 mmHg 以上<button class='info-btn' type='button' aria-expanded='false' onclick='toggleInfo(this)'>ⓘ 說明</button><span class='info-panel' hidden>心包在急性積液時幾乎撐不開,少量出血就讓壓力陡升,各心腔舒張壓被迫與心包壓相等,心輸出量下降,靠<b>心跳加快與血管收縮</b>代償。臨床線索:<b>Beck 三徵</b>(低血壓、頸靜脈壓上升、心音遙遠)、<b>奇脈</b>(吸氣時收縮壓下降超過 10 mmHg)。超音波:右心房收縮期塌陷較早出現,右心室舒張早期塌陷特異性高,兩者都有代表血行動力上已有意義。</span>",
                "<b>填塞的血行目標:fast, full, strong</b>:HR 維持在高正常、先補液增加前負荷、避免心肌抑制藥;<b class='w'>避免心搏過緩</b>(心跳快是最重要的代償)",
                "<b class='w'>避免大潮氣量正壓通氣</b>(減少靜脈回流);可改高頻率、小潮氣量降低平均氣道壓;嚴重不穩時可先在局部麻醉下心包穿刺引流,部分解除後再全身麻醉"
              ],
              intraop:[
                "<span class='ptit ptit-c'>緊急誘導</span><span class='pdet'>尚未插管者依血行動力選藥,<b>避免低血壓與心搏過速</b>,並注意禁食狀況與先前給過的鎮靜藥;填塞時常選 etomidate</span>",
                "<span class='ptit ptit-c'>緊急支持</span><span class='pdet'>盡快建立 A-line 與中心靜脈,TEE 協助診斷;必要時以藥物、IABP 或 VAD 暫時撐住血行,再送刀房;導管室成員都應具備 BLS,鼓勵 ACLS</span>"
              ],
              emergence:[
                "無明顯併發症或共病:可在室內醒來再轉恢復區;<b>較複雜者轉 ICU 慢慢醒</b>"
              ],
              flags:[
                "導管穿破心腔或大血管 → 急性心包填塞",
                "需緊急轉開放手術",
                "心室輔助器時 SpO₂、NIBP 失準"
              ]
            },
            {
              tag:"UpToDate", cls:"uptodate", label:"UpToDate 重點", note:"Anesthetic considerations for electrophysiology procedures",
              preop:[
                "<b>抗凝</b>:多數 AF 消融在<b>不中斷口服抗凝</b>下進行,以降低左心房操作的血栓栓塞;抗凝狀態不確定時抽 PT/INR,由心內團隊決定是否改期",
                "<b>抗心律不整藥</b>:flecainide、sotalol、amiodarone 等在 AF、VT 消融前常停用;停藥由心內團隊指示,術前詳問病人實際服藥情形,有疑問先問心內醫師",
                "<b>左心房血栓</b>:懷疑時於術前或誘導後做 TEE;竇律、規則抗凝、LV 功能正常且 CTA 已排除者可考慮不做",
                "<b>共病</b>:心衰竭者限制輸液避免容積過多;原有腎功能不佳者注意顯影劑腎損傷;<b>詢問顯影劑與 protamine 過敏史</b>",
                "事先規劃術後去處(導管室恢復區、恢復室或加護病房)"
              ],
              airway:[
                "AF 消融可在 GA 或不同深度鎮靜下進行;<b>複雜或預期很痛</b>的個案以 GA 為優先",
                "GA 通常插 ETT;要先做 TEE 排除血栓時選短效藥與短效肌鬆,<b>看到血栓可快速清醒改期</b>;少數以 LMA 取代",
                "心內醫師可能要求<b>暫停呼吸 10–60 秒</b>穩定導管;恢復通氣後依 EtCO₂ 增加分鐘通氣量,避免高碳酸",
                "<b>PFA 普及後,高頻噴射通氣(HFJV)的使用已減少</b>"
              ],
              prep:[
                "<b class='w'>誘導前貼好體外電擊/經皮節律貼片</b>,具節律功能的電擊器隨時可用",
                "<b>手臂收在身旁後就摸不到</b> → 誘導前後確保 IV 足夠,多數再加一條周邊 IV;心內醫師放的股靜脈鞘管也可給藥與抽 ACT"
              ],
              monitor:[
                "ASA 標準監測,含 SpO₂ 與 EtCO₂",
                "<b>PFA 不需要食道溫度探頭</b>:食道與膈神經等周邊結構受傷風險極低;RF 或冷凍消融左心房後壁時才需要",
                "<b>A-line 選擇性放置</b>:EF 很低、頻繁惡性心律不整、ACS、嚴重心衰或血行不穩;快速心律使袖帶不準;需多次抽 ACT 或 ABG",
                "<b>預計在三尖瓣峽部(CTI)或側壁二尖瓣峽部放電時也放 A-line</b>:可能要高劑量 NTG 預防冠狀動脈痙攣",
                "ACT 多可從股靜脈鞘管抽",
                "腦波監測(processed 或 raw EEG)協助調整麻醉深度,<b>尤其 TIVA 合併肌鬆</b>時,降低術中知曉"
              ],
              hemo:[
                "<b>低血壓原因</b>:低刺激時段麻醉過深、原有心臟病、快速 pacing、給 isoproterenol 誘發心律不整;<b class='w'>心臟或血管穿孔 → 出血或心包填塞</b>;要與心內團隊密切溝通找原因",
                "<b>溶血</b>:PFA 放電次數多時可能發生有臨床意義的溶血,少數導致急性腎衰竭;部分團隊會給生理食鹽水水化,減少對腎臟的影響",
                "<b>升壓藥 bolus 參考</b>:phenylephrine 50–100 µg、norepinephrine 4–8 µg、epinephrine 4–10 µg 起;實際依醫囑與本科泡法表"
              ],
              intraop:[
                "<span class='ptit ptit-a'>骨骼肌收縮</span><span class='pdet'>PFA 放電瞬間常直接引起骨骼肌與橫膈收縮,或刺激膈神經造成橫膈收縮 → <b>使用肌鬆可減少體動</b></span>",
                "<span class='ptit ptit-b'>Heparin 與 ACT</span><span class='pdet'>左側心臟消融常用 heparin,以 ACT 監測是否達標;結束時給 protamine 中和</span>",
                "<span class='ptit ptit-a'>麻醉維持</span><span class='pdet'>吸入或靜脈皆可;多數麻藥對 QT、竇房結或房室結只有輕微影響,<b>不影響心律不整誘發,不需刻意避開特定藥物</b></span>"
              ],
              emergence:[
                "通常<b>拔鞘管前給 protamine</b>;可在拔鞘管前或後拔管",
                "<b class='w'>拔鞘管後咳嗽可能造成穿刺處大出血或血腫</b> → 容易咳嗽的病人(如呼吸道過敏)可考慮鞘管仍在時先拔管"
              ],
              postop:[
                "拔除股靜脈、股動脈大鞘管後需<b>平躺數小時</b>",
                "術後疼痛通常輕微,不常規給止痛;長時間仰躺在檢查台可能<b>下背痛</b>,出室前處理",
                "仰躺無法維持通氣與氧合者,可帶管、鎮靜數小時後再拔"
              ],
              flags:[
                "心臟穿孔、心包填塞",
                "溶血、血紅素尿、急性腎衰竭",
                "冠狀動脈痙攣(CTI 或二尖瓣峽部附近放電)",
                "放電時骨骼肌與橫膈收縮、體動",
                "血管入路出血、血腫"
              ]
            },
            {
              tag:"其他文獻", cls:"otherlit", label:"其他文獻重點", note:"RCT、SRMA、登錄與觀察性研究",
              preop:[
                "<b>RCT(ADVENT, NEJM 2023):</b>陣發性 AF,PFA 與傳統熱能消融(射頻或冷凍)相比,一年療效與嚴重不良事件皆不劣於熱能消融",
                "<b>大型登錄(MANIFEST-17K, Nat Med 2024):</b>17,642 人未見食道併發症、肺靜脈狹窄或持續性膈神經麻痺;主要併發症約 1%(心包填塞 0.36%、血管事件 0.30%);意外併發症為<b>冠狀動脈痙攣 0.14%</b>與<b>溶血相關急性腎衰竭需洗腎 0.03%</b>"
              ],
              airway:[
                "<b>SRMA(Europace 2025):</b>6 篇 RCT + 17 篇觀察性研究、12,302 人,GA 與鎮靜的心房頻脈復發無顯著差異"
              ],
              monitor:[
                "<b>前瞻性研究(J Cardiovasc Electrophysiol 2024):</b>PFA 後內視鏡未見食道黏膜病灶或迷走神經損傷;熱能消融組 58% 有食道或食道周圍損傷"
              ],
              hemo:[
                "<b>多中心研究(Circ Arrhythm Electrophysiol 2024):</b>PFA 145 人對射頻 70 人,<b>溶血 94.3% 對 6.8%</b>;PFA 後 bilirubin、LDH 較高;溶血程度與放電次數相關,<b>54 次以上最嚴重</b>;36.4% 出現血紅素尿,<b>基準 GFR <50 者肌酸酐上升較多</b>",
                "<b>世代研究(JACC Clin EP 2024):</b>術後未常規水化的 28 人中 75% 出現血紅素尿;術後計畫性輸注生理食鹽水 ≥2 L 的組別肌酸酐無明顯上升;<b>放電次數與術後水化</b>都是腎損傷的獨立預測因子"
              ],
              intraop:[
                "<span class='ptit ptit-a'>MAUDE 通報(Heart Rhythm 2025)</span><span class='pdet'>PFA 通報事件以<b>心包積液、迷走反應、溶血</b>最常見;迷走反應、溶血與冠狀動脈事件的通報比例都高於射頻</span>",
                "<span class='ptit ptit-b'>前瞻性世代(JAMA Cardiol 2024)</span><span class='pdet'>二尖瓣峽部消融,PFA 17 人中 41% 發生左迴旋支痙攣,射頻組沒有;多為亞臨床,少數需 NTG,多數數分鐘內緩解</span>",
                "<span class='ptit ptit-b'>前瞻性研究(JACC Clin EP 2024)</span><span class='pdet'>以 focal PFA 做 CTI 消融,未給 NTG 時 5 人中 4 人出現中到重度右冠狀動脈痙攣;<b>事先給高劑量 NTG</b> 可預防嚴重痙攣</span>",
                "<span class='ptit ptit-c'>Editorial(J Cardiothorac Vasc Anesth 2024)</span><span class='pdet'>從麻醉角度整理 PFA 的機轉與麻醉照護重點</span>"
              ],
              postop:[
                "<b>RCT(JACC Clin EP 2024):</b>PFA 33 人對射頻 32 人做肺靜脈隔離,<b>troponin 峰值 PFA 約為射頻的 10 倍</b>;血小板與凝血活化程度相近,發炎反應 PFA 略低"
              ]
            }
          ],
          refs:[
            "Sarwar, M. F., Rodriguez-Diaz, C., Dabski, M., et al. (2025). Anesthesia for cardiac surgical procedures. In M. A. Gropper, L. I. Eriksson, L. A. Fleisher, et al. (Eds.), Miller's anesthesia (10th ed., pp. 1577–1682). Elsevier.",
            "Shook, D. C., & JohnBull, E. A. (2026, January 5). Anesthetic considerations for electrophysiology procedures. In J. B. Mark, B. P. Knight, N. A. Nussmeier, & N. F. Botkin (Eds.), UpToDate. Retrieved September 23, 2026, from https://www.uptodate.com/contents/anesthetic-considerations-for-electrophysiology-procedures",
            "Reddy, V. Y., Gerstenfeld, E. P., Natale, A., et al. (2023). Pulsed field or conventional thermal ablation for paroxysmal atrial fibrillation. The New England Journal of Medicine, 389(18), 1660–1671.",
            "Ekanem, E., Neuzil, P., Reichlin, T., et al. (2024). Safety of pulsed field ablation in more than 17,000 patients with atrial fibrillation in the MANIFEST-17K study. Nature Medicine, 30(7), 2020–2029.",
            "Araújo, B., Rivera, A., de Oliveira Tapioca, V., et al. (2025). Sedation vs. general anaesthesia in patients with atrial fibrillation undergoing catheter ablation: A systematic review and meta-analysis. Europace, 27(9), euaf156.",
            "Grosse Meininghaus, D., Freund, R., Koerber, B., Kleemann, T., Matthes, H., & Geller, J. C. (2024). Pulsed-field ablation does not induce esophageal and periesophageal injury—A new esophageal safety paradigm in catheter ablation of atrial fibrillation. Journal of Cardiovascular Electrophysiology, 35(1), 86–93.",
            "Popa, M. A., Venier, S., Menè, R., et al. (2024). Characterization and clinical significance of hemolysis after pulsed field ablation for atrial fibrillation: Results of a multicenter analysis. Circulation: Arrhythmia and Electrophysiology, 17(10), e012732.",
            "Mohanty, S., Casella, M., Compagnucci, P., et al. (2024). Acute kidney injury resulting from hemoglobinuria after pulsed-field ablation in atrial fibrillation: Is it preventable? JACC: Clinical Electrophysiology, 10(4), 709–715.",
            "Cho, M. S., Lee, S. R., Black-Maier, E., et al. (2025). Complications associated with pulsed field ablation vs radiofrequency catheter ablation of atrial fibrillation. Heart Rhythm, 22(9), 2194–2200.",
            "Zhang, C., Neuzil, P., Petru, J., et al. (2024). Coronary artery spasm during pulsed field vs radiofrequency catheter ablation of the mitral isthmus. JAMA Cardiology, 9(1), 72–77.",
            "Malyshev, Y., Neuzil, P., Petru, J., et al. (2024). Nitroglycerin to ameliorate coronary artery spasm during focal pulsed-field ablation for atrial fibrillation. JACC: Clinical Electrophysiology, 10(5), 885–896.",
            "Tang, J. E., Guirguis, F., Stein, E. J., Essandoh, M. K., & Iyer, M. H. (2024). Pulse field ablation: The electric future of cardiac ablation. Journal of Cardiothoracic and Vascular Anesthesia, 38(10), 2139–2142.",
            "Osmancik, P., Bacova, B., Hozman, M., et al. (2024). Myocardial damage, inflammation, coagulation, and platelet activity during catheter ablation using radiofrequency and pulsed-field energy. JACC: Clinical Electrophysiology, 10(3), 463–474."
          ],
          collapse:true
        },
        {
          cls:"v-rfa-fl",
          name:"心臟電燒－心房撲動",
          en:"RFA – Atrial Flutter",
          note:"右心房三尖瓣峽部(CTI)消融,常在鎮靜下完成。",
          heroImage:{ src:"@@IMG:056-cardiac-ablation-rfa-pfa-3.png:png@@", alt:"心房撲動電燒（RFA – Atrial Flutter）透明背景醫學卡通圖（AI 生成）" },
          summary:{ position:"依術式需求", posType:"supine", time:"待補", blood:"待補", airway:"待補" },
          lit:[
            {
              tag:"Miller", cls:"miller", label:"Miller's Anesthesia 教科書重點", note:"第 10 版,第 50 章",
              preop:[
                "<b>場地</b>:電生理手術可在電生理室或 hybrid room;hybrid room 兼具透視與開刀條件、設在手術室內或旁邊,<b>出現非預期併發症時關鍵人員較快到位</b>",
                "<b class='w'>導管可能穿破心腔或大血管</b> → 事先規劃轉開放手術的可能,<b>專責外科團隊待命</b>;沒有 hybrid room 的醫院要能緊急送刀房",
                "<b>高風險消融</b>可能事先放經皮心室輔助器(Impella、TandemHeart)支持左心室,<b>外科後援必須到位</b>"
              ],
              airway:[
                "鎮靜或 GA 依病人與術式決定;<b>由麻醉人員監測可提升許多導管手術的成效與安全</b>",
                "<b>GA 插管最能掌控</b>:病人舒適、呼吸道確保",
                "LMA 或面罩也可以,但<b>自發呼吸時橫膈持續起伏,可能干擾透視</b>下看心臟與血管"
              ],
              monitor:[
                "<b>經皮心室輔助器</b>產生非搏動血流 → <b class='w'>SpO₂ 與 NIBP 可能量不準</b>,建議 A-line;備大口徑 IV(可能大量失血)",
                "緊急狀況要能即時驗 ABG、電解質、Hb/Hct;有出血時 TEG 等床邊凝血檢查比 PT/INR 更有幫助"
              ],
              hemo:[
                "<b class='w'>急性心包填塞</b>:導管意外穿破心腔或血管,心包腔快速累積 <b>100–200 mL</b> 就可使心包壓力升到 30 mmHg 以上<button class='info-btn' type='button' aria-expanded='false' onclick='toggleInfo(this)'>ⓘ 說明</button><span class='info-panel' hidden>心包在急性積液時幾乎撐不開,少量出血就讓壓力陡升,各心腔舒張壓被迫與心包壓相等,心輸出量下降,靠<b>心跳加快與血管收縮</b>代償。臨床線索:<b>Beck 三徵</b>(低血壓、頸靜脈壓上升、心音遙遠)、<b>奇脈</b>(吸氣時收縮壓下降超過 10 mmHg)。超音波:右心房收縮期塌陷較早出現,右心室舒張早期塌陷特異性高,兩者都有代表血行動力上已有意義。</span>",
                "<b>填塞的血行目標:fast, full, strong</b>:HR 維持在高正常、先補液增加前負荷、避免心肌抑制藥;<b class='w'>避免心搏過緩</b>(心跳快是最重要的代償)",
                "<b class='w'>避免大潮氣量正壓通氣</b>(減少靜脈回流);可改高頻率、小潮氣量降低平均氣道壓;嚴重不穩時可先在局部麻醉下心包穿刺引流,部分解除後再全身麻醉"
              ],
              intraop:[
                "<span class='ptit ptit-c'>緊急誘導</span><span class='pdet'>尚未插管者依血行動力選藥,<b>避免低血壓與心搏過速</b>,並注意禁食狀況與先前給過的鎮靜藥;填塞時常選 etomidate</span>",
                "<span class='ptit ptit-c'>緊急支持</span><span class='pdet'>盡快建立 A-line 與中心靜脈,TEE 協助診斷;必要時以藥物、IABP 或 VAD 暫時撐住血行,再送刀房;導管室成員都應具備 BLS,鼓勵 ACLS</span>"
              ],
              emergence:[
                "無明顯併發症或共病:可在室內醒來再轉恢復區;<b>較複雜者轉 ICU 慢慢醒</b>"
              ],
              flags:[
                "導管穿破心腔或大血管 → 急性心包填塞",
                "需緊急轉開放手術",
                "心室輔助器時 SpO₂、NIBP 失準"
              ]
            },
            {
              tag:"UpToDate", cls:"uptodate", label:"UpToDate 重點", note:"Anesthetic considerations for electrophysiology procedures",
              preop:[
                "<b>抗凝與抗心律不整藥</b>:停藥與否由心內團隊指示,術前詳問病人實際服藥情形;抗凝狀態不確定時抽 PT/INR,由心內團隊決定是否改期",
                "<b>共病</b>:心衰竭者限制輸液;原有腎功能不佳者注意顯影劑;<b>詢問顯影劑與 protamine 過敏史</b>",
                "事先規劃術後去處"
              ],
              airway:[
                "心房撲動與其他 SVT 消融<b>常在護理人員執行的中度鎮靜下完成</b>;心內團隊可視情況請麻醉科做 MAC 加深靜脈鎮靜,或選擇性 GA",
                "<b>請麻醉科的常見原因</b>:中重度焦慮、可能困難氣道、可能血行不穩、預計時間很長",
                "MAC 時面罩給氧維持 SpO₂;<b class='w'>氧氣源與病人臉部都在無菌單下時注意火災風險</b>"
              ],
              prep:[
                "<b class='w'>誘導前貼好體外電擊/經皮節律貼片</b>,具節律功能的電擊器隨時可用",
                "<b>手臂收在身旁後就摸不到</b> → 誘導前後確保 IV 足夠,多數再加一條周邊 IV;心內醫師放的股靜脈鞘管也可給藥與抽 ACT"
              ],
              monitor:[
                "ASA 標準監測;<b class='w'>鎮靜時也要監測 EtCO₂</b>,及早發現呼吸暫停與低血氧",
                "<b>A-line 選擇性放置</b>:EF 很低、頻繁惡性心律不整、ACS、嚴重心衰或血行不穩;快速心律使袖帶不準;需多次抽 ACT 或 ABG",
                "<b>若以 PFA 在三尖瓣峽部(CTI)放電</b>:可能要高劑量 NTG 預防冠狀動脈痙攣 → 考慮放 A-line"
              ],
              hemo:[
                "<b>低血壓原因</b>:低刺激時段麻醉過深、原有心臟病、快速 pacing、給 isoproterenol 誘發心律不整;<b class='w'>心臟或血管穿孔 → 出血或心包填塞</b>;要與心內團隊密切溝通找原因",
                "<b>射頻灌流液</b>:導管頭端持續以生理食鹽水冷卻,時間長可累積大量液體 → 限制 IV 輸液、定時計算輸入輸出",
                "<b>升壓藥 bolus 參考</b>:phenylephrine 50–100 µg、norepinephrine 4–8 µg、epinephrine 4–10 µg 起;實際依醫囑與本科泡法表"
              ],
              intraop:[
                "<span class='ptit ptit-a'>MAC 用藥(作者作法)</span><span class='pdet'>propofol 25–75 µg/kg/min 輸注(可先 bolus),可加 remifentanil 0.025–0.1 µg/kg/min;也可用小劑量 ketamine、midazolam、fentanyl 或 dexmedetomidine</span>",
                "<span class='ptit ptit-a'>誘發心律不整</span><span class='pdet'>診斷階段心內醫師可能要求<b>減淺鎮靜</b>,讓心律不整較容易誘發</span>",
                "<span class='ptit ptit-b'>麻醉維持</span><span class='pdet'>吸入或靜脈皆可;多數麻藥對 QT、竇房結或房室結只有輕微影響,<b>不影響心律不整誘發,不需刻意避開特定藥物</b></span>",
                "<span class='ptit ptit-b'>Heparin 與 ACT</span><span class='pdet'>左側心臟消融常用 heparin,以 ACT 監測是否達標;結束時給 protamine 中和</span>"
              ],
              postop:[
                "拔除股靜脈、股動脈大鞘管後需<b>平躺數小時</b>",
                "術後疼痛通常輕微,不常規給止痛;長時間仰躺在檢查台可能<b>下背痛</b>,出室前處理"
              ],
              flags:[
                "鎮靜過深、呼吸暫停、低血氧",
                "心臟穿孔、心包填塞",
                "灌流液造成容積過多",
                "以 PFA 做 CTI 消融時右冠狀動脈痙攣",
                "血管入路出血、血腫"
              ]
            },
            {
              tag:"其他文獻", cls:"otherlit", label:"其他文獻重點", note:"前瞻性研究與大型登錄",
              intraop:[
                "<span class='ptit ptit-a'>前瞻性研究(JACC Clin EP 2024)</span><span class='pdet'>以 focal PFA 做 CTI 消融,未給 NTG 時 5 人中 4 人出現中到重度右冠狀動脈痙攣;<b>事先給高劑量 NTG</b> 可預防嚴重痙攣</span>",
                "<span class='ptit ptit-a'>大型登錄(MANIFEST-17K, Nat Med 2024)</span><span class='pdet'>PFA 17,642 人,冠狀動脈痙攣 0.14%、心包填塞 0.36%</span>"
              ]
            }
          ],
          refs:[
            "Sarwar, M. F., Rodriguez-Diaz, C., Dabski, M., et al. (2025). Anesthesia for cardiac surgical procedures. In M. A. Gropper, L. I. Eriksson, L. A. Fleisher, et al. (Eds.), Miller's anesthesia (10th ed., pp. 1577–1682). Elsevier.",
            "Shook, D. C., & JohnBull, E. A. (2026, January 5). Anesthetic considerations for electrophysiology procedures. In J. B. Mark, B. P. Knight, N. A. Nussmeier, & N. F. Botkin (Eds.), UpToDate. Retrieved September 23, 2026, from https://www.uptodate.com/contents/anesthetic-considerations-for-electrophysiology-procedures",
            "Malyshev, Y., Neuzil, P., Petru, J., et al. (2024). Nitroglycerin to ameliorate coronary artery spasm during focal pulsed-field ablation for atrial fibrillation. JACC: Clinical Electrophysiology, 10(5), 885–896.",
            "Ekanem, E., Neuzil, P., Reichlin, T., et al. (2024). Safety of pulsed field ablation in more than 17,000 patients with atrial fibrillation in the MANIFEST-17K study. Nature Medicine, 30(7), 2020–2029."
          ],
          collapse:true
        },
        {
          cls:"v-rfa-svt",
          name:"心臟電燒－陣發性上心室頻脈",
          en:"RFA – PSVT",
          note:"AVNRT、副傳導路徑等。重點:術前停藥與保留心律不整的可誘發性。",
          heroImage:{ src:"@@IMG:056-cardiac-ablation-rfa-pfa-4.png:png@@", alt:"心臟電燒（RFA）陣發性上心室頻脈透明背景醫學卡通圖（AI 生成）" },
          summary:{ position:"依術式需求", posType:"supine", time:"待補", blood:"待補", airway:"待補" },
          lit:[
            {
              tag:"Miller", cls:"miller", label:"Miller's Anesthesia 教科書重點", note:"第 10 版,第 50 章",
              preop:[
                "<b>場地</b>:電生理手術可在電生理室或 hybrid room;hybrid room 兼具透視與開刀條件、設在手術室內或旁邊,<b>出現非預期併發症時關鍵人員較快到位</b>",
                "<b class='w'>導管可能穿破心腔或大血管</b> → 事先規劃轉開放手術的可能,<b>專責外科團隊待命</b>;沒有 hybrid room 的醫院要能緊急送刀房",
                "<b>高風險消融</b>可能事先放經皮心室輔助器(Impella、TandemHeart)支持左心室,<b>外科後援必須到位</b>"
              ],
              airway:[
                "鎮靜或 GA 依病人與術式決定;<b>由麻醉人員監測可提升許多導管手術的成效與安全</b>",
                "<b>GA 插管最能掌控</b>:病人舒適、呼吸道確保",
                "LMA 或面罩也可以,但<b>自發呼吸時橫膈持續起伏,可能干擾透視</b>下看心臟與血管"
              ],
              monitor:[
                "<b>經皮心室輔助器</b>產生非搏動血流 → <b class='w'>SpO₂ 與 NIBP 可能量不準</b>,建議 A-line;備大口徑 IV(可能大量失血)",
                "緊急狀況要能即時驗 ABG、電解質、Hb/Hct;有出血時 TEG 等床邊凝血檢查比 PT/INR 更有幫助"
              ],
              hemo:[
                "<b class='w'>急性心包填塞</b>:導管意外穿破心腔或血管,心包腔快速累積 <b>100–200 mL</b> 就可使心包壓力升到 30 mmHg 以上<button class='info-btn' type='button' aria-expanded='false' onclick='toggleInfo(this)'>ⓘ 說明</button><span class='info-panel' hidden>心包在急性積液時幾乎撐不開,少量出血就讓壓力陡升,各心腔舒張壓被迫與心包壓相等,心輸出量下降,靠<b>心跳加快與血管收縮</b>代償。臨床線索:<b>Beck 三徵</b>(低血壓、頸靜脈壓上升、心音遙遠)、<b>奇脈</b>(吸氣時收縮壓下降超過 10 mmHg)。超音波:右心房收縮期塌陷較早出現,右心室舒張早期塌陷特異性高,兩者都有代表血行動力上已有意義。</span>",
                "<b>填塞的血行目標:fast, full, strong</b>:HR 維持在高正常、先補液增加前負荷、避免心肌抑制藥;<b class='w'>避免心搏過緩</b>(心跳快是最重要的代償)",
                "<b class='w'>避免大潮氣量正壓通氣</b>(減少靜脈回流);可改高頻率、小潮氣量降低平均氣道壓;嚴重不穩時可先在局部麻醉下心包穿刺引流,部分解除後再全身麻醉"
              ],
              intraop:[
                "<span class='ptit ptit-c'>緊急誘導</span><span class='pdet'>尚未插管者依血行動力選藥,<b>避免低血壓與心搏過速</b>,並注意禁食狀況與先前給過的鎮靜藥;填塞時常選 etomidate</span>",
                "<span class='ptit ptit-c'>緊急支持</span><span class='pdet'>盡快建立 A-line 與中心靜脈,TEE 協助診斷;必要時以藥物、IABP 或 VAD 暫時撐住血行,再送刀房;導管室成員都應具備 BLS,鼓勵 ACLS</span>"
              ],
              emergence:[
                "無明顯併發症或共病:可在室內醒來再轉恢復區;<b>較複雜者轉 ICU 慢慢醒</b>"
              ],
              flags:[
                "導管穿破心腔或大血管 → 急性心包填塞",
                "需緊急轉開放手術",
                "心室輔助器時 SpO₂、NIBP 失準"
              ]
            },
            {
              tag:"UpToDate", cls:"uptodate", label:"UpToDate 重點", note:"Anesthetic considerations for electrophysiology procedures",
              preop:[
                "<b class='w'>影響房室結傳導的藥物</b>(如鈣離子阻斷劑、digoxin)常在房室結依賴型心律不整(如 AVNRT)消融前停用數天,讓心律不整能被誘發;<b>術前確認病人有沒有照指示停藥</b>,不確定就先問心內醫師",
                "其他長期心血管用藥(statin、aspirin 等)多數照常服用",
                "<b>共病</b>:注意顯影劑腎損傷;<b>詢問顯影劑與 protamine 過敏史</b>"
              ],
              airway:[
                "SVT 消融<b>常在護理人員執行的中度鎮靜下完成</b>;心內團隊可視情況請麻醉科做 MAC 加深靜脈鎮靜,或選擇性 GA",
                "MAC 時面罩給氧維持 SpO₂;<b class='w'>氧氣源與病人臉部都在無菌單下時注意火災風險</b>"
              ],
              prep:[
                "<b class='w'>誘導前貼好體外電擊/經皮節律貼片</b>,具節律功能的電擊器隨時可用",
                "<b>手臂收在身旁後就摸不到</b> → 誘導前後確保 IV 足夠,多數再加一條周邊 IV;心內醫師放的股靜脈鞘管也可給藥與抽 ACT"
              ],
              monitor:[
                "ASA 標準監測;<b class='w'>鎮靜時也要監測 EtCO₂</b>",
                "<b>A-line 選擇性放置</b>:EF 很低、頻繁惡性心律不整、ACS、嚴重心衰或血行不穩;快速心律使袖帶不準;需多次抽 ACT 或 ABG"
              ],
              hemo:[
                "<b>低血壓原因</b>:低刺激時段麻醉過深、原有心臟病、快速 pacing、給 isoproterenol 誘發心律不整;<b class='w'>心臟或血管穿孔 → 出血或心包填塞</b>;要與心內團隊密切溝通找原因",
                "<b>升壓藥 bolus 參考</b>:phenylephrine 50–100 µg、norepinephrine 4–8 µg、epinephrine 4–10 µg 起;實際依醫囑與本科泡法表"
              ],
              intraop:[
                "<span class='ptit ptit-a'>誘發心律不整</span><span class='pdet'>診斷階段心內醫師可能要求<b>減淺鎮靜</b>;也可能給 <b>isoproterenol</b> 誘發 → 注意心跳加快與血壓下降</span>",
                "<span class='ptit ptit-a'>MAC 用藥(作者作法)</span><span class='pdet'>propofol 25–75 µg/kg/min 輸注(可先 bolus),可加 remifentanil 0.025–0.1 µg/kg/min;也可用小劑量 ketamine、midazolam、fentanyl 或 dexmedetomidine</span>",
                "<span class='ptit ptit-b'>麻藥與傳導</span><span class='pdet'>吸入麻藥、opioid、dexmedetomidine、midazolam 等可能輕微延長 QT 或抑制竇房結、房室結,<b>但不具臨床意義、不影響誘發</b>,不需刻意避開;propofol 與肌鬆對 ECG 無已知影響</span>"
              ],
              postop:[
                "拔除股靜脈、股動脈大鞘管後需<b>平躺數小時</b>",
                "術後疼痛通常輕微,不常規給止痛;長時間仰躺在檢查台可能<b>下背痛</b>,出室前處理"
              ],
              flags:[
                "鎮靜過深、呼吸暫停",
                "isoproterenol 誘發心搏過速與低血壓",
                "房室傳導阻滯",
                "心臟穿孔、心包填塞",
                "血管入路出血、血腫"
              ]
            },
            {
              tag:"其他文獻", cls:"otherlit", label:"其他文獻重點", note:"觀察性研究與 review",
              intraop:[
                "<span class='ptit ptit-a'>回溯性研究(Anesth Analg 2019)</span><span class='pdet'>PSVT 消融以 dexmedetomidine 為主鎮靜(163 例)對 fentanyl + midazolam(163 例),<b>誘發不出心律不整的比例相近</b>(24% 對 26%);非預期深度鎮靜較少,但<b>術中低血壓較多</b></span>",
                "<span class='ptit ptit-b'>Review(J Clin Anesth 2024)</span><span class='pdet'>兒童 EPS 與 SVT 消融多需較深鎮靜或 GA;主要顧慮是麻藥抑制副傳導路徑、影響檢查,<b>相關文獻有限,最佳麻醉方式仍有爭議</b></span>"
              ]
            }
          ],
          refs:[
            "Sarwar, M. F., Rodriguez-Diaz, C., Dabski, M., et al. (2025). Anesthesia for cardiac surgical procedures. In M. A. Gropper, L. I. Eriksson, L. A. Fleisher, et al. (Eds.), Miller's anesthesia (10th ed., pp. 1577–1682). Elsevier.",
            "Shook, D. C., & JohnBull, E. A. (2026, January 5). Anesthetic considerations for electrophysiology procedures. In J. B. Mark, B. P. Knight, N. A. Nussmeier, & N. F. Botkin (Eds.), UpToDate. Retrieved September 23, 2026, from https://www.uptodate.com/contents/anesthetic-considerations-for-electrophysiology-procedures",
            "Slupe, A. M., Minnier, J., Raitt, M. H., Zarraga, I. G. E., MacMurdy, K. S., & Jessel, P. M. (2019). Dexmedetomidine sedation for paroxysmal supraventricular tachycardia ablation is not associated with alteration of arrhythmia inducibility. Anesthesia & Analgesia, 129(6), 1529–1535.",
            "Monaco, F., D'Andria Ursoleo, J., Lerose, C. C., et al. (2024). Anaesthetic management of paediatric patients undergoing electrophysiology study and ablation for supraventricular tachycardia: A focused narrative review. Journal of Clinical Anesthesia, 93, 111361."
          ],
          collapse:true
        }
    ],
    refs:[
      "Sarwar, M. F., Rodriguez-Diaz, C., Dabski, M., et al. (2025). Anesthesia for cardiac surgical procedures. In M. A. Gropper, L. I. Eriksson, L. A. Fleisher, et al. (Eds.), Miller's anesthesia (10th ed., pp. 1577–1682). Elsevier.",
      "Shook, D. C., & JohnBull, E. A. (2026, January 5). Anesthetic considerations for electrophysiology procedures. In J. B. Mark, B. P. Knight, N. A. Nussmeier, & N. F. Botkin (Eds.), UpToDate. Retrieved September 23, 2026, from https://www.uptodate.com/contents/anesthetic-considerations-for-electrophysiology-procedures"
    ],
    collapse:true
  }