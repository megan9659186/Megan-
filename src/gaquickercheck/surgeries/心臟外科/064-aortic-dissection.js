{
    updated:"2026-09-13",
    specialty:"心臟外科",
    name:"主動脈剝離",
    en:"Aortic Dissection",
    summary:{ position:"Supine", posType:"supine", time:"急診手術／依剝離範圍", blood:"極多", airway:"ETGA・CPB ± HCA" },
    heroImage:{ src:"@@IMG:044-aortic-dissection-1.png:png@@", alt:"主動脈剝離（Aortic Dissection）透明背景醫學卡通圖（AI 生成）" },
    showEmptyNote:true,
    lit:[
      {
        tag:"Miller", cls:"miller", label:"Miller's Anesthesia 教科書重點",
        preop:[
          "<b>DHCA 主要用於橫主動脈弓剝離或動脈瘤修補</b>:先依預期循環暫停時間決定低溫與是否加 selective cerebral perfusion",
          "若為 descending aorta 剝離需 tube graft，可用 left-heart bypass 維持遠端灌流並控制近端心臟後負荷；複雜手術則需完整 CPB",
          "胸降主動脈手術常需左開胸與單肺通氣；既有肺病或外傷性肺損傷者可能難以維持氧合，且大量出血與低體溫風險高"
        ],
        monitor:[
          "<b>多點體溫</b>搭配 CPB arterial blood temperature；快速降溫時 arterial blood temperature 會低估腦實質溫度",
          "<b>EEG 是低溫腦效應的 pharmacodynamic endpoint</b>；開始循環暫停前應由低溫達到 EEG isoelectricity",
          "右 axillary／innominate cannulation 做 SACP 時，右橈動脈壓可能高於左橈或股動脈壓；<b>降溫與復溫不可只用右橈壓控制全身灌流</b>"
        ],
        hemo:[
          "DHCA 將核心溫度降至約 <b>15–22°C</b> 後完全中斷全身血流；預期暫停 30–40 分鐘時，Miller 認為 18–20°C 通常足夠",
          "若採 SACP，以冷氧合血維持 cerebral blood pressure 約 <b>30–60 mmHg</b>；所需 flow 依插管位置與灌流頭部分支數而異",
          "胸降主動脈夾閉會突然增加心臟後負荷並造成 clamp 遠端缺血；LHB flow 用於維持遠端灌流並調整近端 afterload"
        ],
        intraop:[
          "<span class='ptit ptit-c'>降溫</span><span class='pdet'>成人通常採 α-stat；到達目標 arterial blood temperature 後仍需足夠 equilibration time，Miller 提及一般成人 full-flow cooling 可再持續約 20–30 分鐘，並以多點體溫及 EEG 判斷</span>",
          "<span class='ptit ptit-c'>循環暫停</span><span class='pdet'>停 pump flow、病人血液引流至 ECC reservoir；reservoir 內血液持續 recirculate 防止停滯，並關閉 oxygenator gas flow 以免嚴重 hypocapnia</span>",
          "<span class='ptit ptit-c'>SACP</span><span class='pdet'>可直接插左頸總動脈，或經 axillary／innominate cannulation 灌流右頸總動脈；Miller 認為正確使用時 antegrade perfusion 優於 retrograde perfusion</span>",
          "<span class='ptit ptit-d'>再灌流與復溫</span><span class='pdet'><b>先以冷血再灌流 5–10 分鐘</b>再開始復溫；避免術後高熱，因 DHCA 後數小時腦血流仍可能下降</span>"
        ],
        drug:[
          "低溫是完全全腦缺血時唯一可靠的神經保護方法；steroid、barbiturate 或 propofol 等藥物性腦保護的支持證據有限",
          "若監測 EEG，應先靠低溫達到 isoelectricity，再考慮額外藥物，避免把藥物造成的 burst suppression 誤當作腦已充分降溫"
        ],
        postop:[
          "DHCA 後數小時腦血管阻力上升、腦血流下降；密切神經監測並積極避免／處理高熱",
          "胸降主動脈開放修補後警覺低氧、低體溫、大量出血及 clamp 遠端器官缺血"
        ],
        flags:[
          "DHCA 時間或降溫不足造成缺血性腦損傷",
          "選擇性腦灌流不足或壓力監測位置誤判",
          "胸降主動脈夾閉造成遠端器官／脊髓缺血",
          "大量出血、低氧與低體溫"
        ]
      },
      {
        tag:"UpToDate", cls:"uptodate", label:"UpToDate 重點",
        preop:[
          "<b class='w'>急性 ascending（Stanford type A）aortic dissection 必須緊急修補</b>；症狀開始後急性 AR、tamponade、stroke 或 MI 等併發症估計每小時增加約 1–2%",
          "快速確認 <b>acute AR、cardiac tamponade、冠脈受累、急性 stroke</b>，以及腎、腸、脊髓與四肢 malperfusion",
          "脈搏缺損或 CTA arterial phase flow 下降提示肢體 malperfusion，會直接影響 A-line 與 CPB arterial cannulation site",
          "Type A 本身可有術前凝血病；深低溫、缺血再灌流、長 CPB、fibrinolysis 與 platelet activation 會進一步加重出血"
        ],
        airway:[
          "<b class='w'>外科、麻醉與灌流團隊全部就位後才誘導</b>；極不穩定者可在清醒時先消毒鋪單，準備誘導後立即建立 CPB",
          "誘導藥物選擇以最小血流動力變化為原則；有 full stomach 時仍需 RSII",
          "急性 AR 或 tamponade 休克時避免 beta-blocker，以免心輸出量崩解"
        ],
        prep:[
          "確認足夠 IV 與 rapid transfusion 能力，先通知血庫並準備 RBC、plasma 與 platelets",
          "預先接妥 vasopressor／inotrope；放置 external defibrillator pads，床旁備妥 pacing／defibrillation",
          "準備 insulin infusion；深低溫後幾乎都會出現 hyperglycemia，目標通常 <180 mg/dL"
        ],
        monitor:[
          "<b>誘導前放 upper-extremity A-line</b>；多數升主動脈／弓部病例放雙側橈動脈，malperfusion 時以較高側估計 systemic BP，必要時加 femoral A-line",
          "大口徑 CVC／introducer 供快速輸血與 vasoactive infusion；PAC 可監測 PAP、CVP、CO、SvO₂，PAP 上升可能提示 AR 導致 LV distention",
          "<b class='w'>TEE</b>:確認 intimal tear／flap 範圍、AR、tamponade、regional wall motion；引導 wire 與 cannula 進 true lumen，並監測 CPB 開始後是否 malperfusion",
          "雙側 NIRS 可偵測 CPB／SACP 時 unilateral 或 bilateral cerebral hypoperfusion；條件允許時加 EEG 判斷低溫 electrocortical silence"
        ],
        hemo:[
          "Prebypass anti-impulse：小量遞增 beta-blocker（如 esmolol），目標 <b>HR 60–80、SBP <120 mmHg</b>",
          "<b class='w'>急性 AR 或 tamponade 引起 cardiogenic shock 時不用上述 beta-blocker 策略</b>，以維持冠脈與器官灌流、快速上 CPB 為優先",
          "循環暫停後再灌流期 UpToDate 建議 MAP 約 <b>50–70 mmHg</b>，並避免過高血壓對新吻合處造成壓力"
        ],
        intraop:[
          "<span class='ptit ptit-a'>TEE 與插管</span><span class='pdet'>Seldinger technique 時辨認 true／false lumen 並確認 guidewire、cannula 在 true lumen；CPB 開始後若 NIRS 下降立即找插管錯位或腦 malperfusion</span>",
          "<span class='ptit ptit-c'>低溫策略</span><span class='pdet'>依手術與院內 protocol 採 moderately deep 20–28°C 或 deep 16–20°C HCA，常合併 SACP 或 RCP；降溫與復溫以 α-stat 管理</span>",
          "<span class='ptit ptit-c'>循環暫停前</span><span class='pdet'>先完成麻藥、肌鬆、抗生素及其他必要給藥；暫停期間無法送藥，IV infusion 與 volatile delivery 應停止</span>",
          "<span class='ptit ptit-d'>恢復麻醉</span><span class='pdet'>復溫至鼻咽約 30°C 或 EEG activity 穩定恢復時重新給麻醉，避免回溫期術中覺醒</span>",
          "<span class='ptit ptit-d'>復溫</span><span class='pdet'>冷再灌流約 10 分鐘後緩慢復溫；rate ≤0.5°C/min，arterial outlet <30°C 時 venous-arterial gradient ≤10°C、之後 ≤4°C，所有測溫點 ≤37°C</span>"
        ],
        drug:[
          "barbiturate 或 propofol 可用於進一步抑制腦代謝，但應以 EEG electrocortical silence 為目標而非固定劑量；效益未被高品質證據確立",
          "不支持為腦保護常規使用 glucocorticoid；mannitol 與其他藥物性 adjunct 的腦／腎保護證據不足",
          "深低溫會延長 heparin 作用；CPB 中至少每 30 分鐘檢查 ACT，復溫時再留意 heparin 濃度下降"
        ],
        postop:[
          "追蹤 persistent／new malperfusion：神經狀態、雙側壓與脈搏、乳酸、腎功能、腹部症狀及肢體灌流",
          "警覺 bleeding／coagulopathy、tamponade、LV／RV dysfunction、急性 AR，以及 DHCA 再灌流後常見的乳酸性代謝酸中毒",
          "避免高熱；低溫循環暫停後的缺血再灌流與栓塞性腦傷可能因腦高溫而加重"
        ],
        flags:[
          "Type A 每延誤一小時持續累積致命併發症風險",
          "急性 AR／tamponade 病人錯用 beta-blocker 導致 cardiovascular collapse",
          "guidewire 或 arterial cannula 進入 false lumen",
          "腦、冠脈、腸、腎、脊髓或肢體 malperfusion",
          "深低溫、長 CPB 與剝離相關嚴重凝血病"
        ]
      }
    ],
    refs:[
      "Sarwar, M. F., Rodriguez-Diaz, C., Dabski, M., et al. (2025). Anesthesia for cardiac surgical procedures. In M. A. Gropper, L. I. Eriksson, L. A. Fleisher, et al. (Eds.), Miller's anesthesia (10th ed., pp. 1577–1682). Elsevier.",
      "Cheung, A. T., & Heath, M. (2026, July 23). Anesthesia for aortic surgery with hypothermia and elective circulatory arrest in adult patients. UpToDate. Literature review current through August 2026.",
      "Barbeito, A., JohnBull, E. A., & Heath, M. (2025, September 15). Anesthesia for emergency cardiac surgery. UpToDate. Literature review current through August 2026."
    ],
    collapse:true
  }