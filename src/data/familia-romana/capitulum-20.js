// Capitulum XX — Parentes
// Sources: Ørberg, Lingua Latina per se Illustrata, Pars I: Familia Romana (2nd ed.)
// Reading text, grammar and exercises adapted and re-typeset for the web.

const chapter = {
  number: 20,
  roman: 'XX',
  slug: 'parentes',
  latinTitle: 'PARENTĒS',
  title: 'Parents',
  tagline:
    'A newborn baby, its nurse, and little Iulia, who does not want a sister — a chapter about ' +
    'parents and children that turns the story to the future: erit, habebit, dormiet, computabit.',
  status: 'complete',
  overview:
    'A new baby is coming to the household, and this chapter looks at parents and children: how a ' +
    'tiny infant is fed and cared for, who nurses it, and what children learn at home and in school. ' +
    'In the peristyle Aemilia and Iūlius argue about sons and daughters, and little Iulia declares ' +
    'that she does not want a sister. Through it all runs the grammar of the chapter — the future ' +
    'tense, the form that tells what will happen tomorrow: erit, habebit, dormiet, computabit, parebit, scribet.',
  objectives: [
    'Read the chapter as prose and dialogue, and follow the family through the coming birth of a child.',
    'Form the future tense in all four conjugations: -bit/-bunt and -et/-ent.',
    'Use the irregular future of esse: ero, eris, erit, erimus, eritis, erunt.',
    'Recognise the future passive built on the same endings: laudabor, laudaberis, laudabitur.',
    'Talk in Latin about parents, infants, nurses, school, and the future.',
  ],
  readings: [
    {
      id: 'infantes',
      latinTitle: 'ĪNFANTĒS',
      title: 'Infants',
      paragraphs: [
        'Parvulī quī nōndum fārī possunt īnfantēs dīcuntur. Parvulus īnfāns in cūnīs cubāre solet. Cūnae sunt cūnābula īnfantīs. Īnfāns multās hōrās dormit, nōn sōlum nocte sed etiam diē; nam longus somnus īnfantī tam necessārius est quam cibus. Īnfāns neque somnō neque cibō carēre potest.',
        'Quōmodo īnfāns, quī fārī nōn potest, postulat? Īnfāns quī cibō caret magnā vōce vāgit. Parvulus īnfāns cibum postulat. Tum māter accurrit īnfantemque ad pectus suum appōnit. Īnfāns lac mammae bibit. Parvulus īnfāns, cui dentēs nūllī sunt, nōn pāne, sed lacte vīvit.',
        'Sī māter īnfantem suum ipsa alere nōn potest sīve vult, īnfāns ab aliā muliere alitur, quae eī in locō mātris est. Mulier quae aliēnum īnfantem alit nūtrīx appellātur. Multī īnfantēs Rōmānī nōn ā mātribus suīs, sed ā nūtrīcibus aluntur. Multae mātrēs īnfantēs suōs ipsae alere nōlunt.',
        'Ante quīnque annōs Iūlia parvula īnfāns erat. Tunc īnfantem in cūnīs habēbat Aemilia. Nunc eā parvulō īnfante caret: cūnae vacuae sunt.',
        'Sed post paucōs mēnsēs novus īnfāns in cūnīs erit. Aemilia rūrsus parvulum īnfantem habēbit neque cūnae vacuae erunt. Tum Iūlius et Aemilia quattuor līberōs habēbunt. Aemilia laeta cūnās movēbit et parva vōce cantābit: "Lallā." Pater īnfantem suum in manibus portābit eumque nōn minus amābit quam māter. Pater et māter īnfantem suum aequē amābunt.',
        'Annō post pater et māter ab īnfante suō appellābuntur. Aemilia autem "mamma" appellābitur, nōn "māter", neque Iūlius "pater", sed "tata" appellābitur; neque enim īnfāns ipsa nōmina "patris" et "mātris" dīcere poterit. Īnfāns igitur parentibus suīs dīcet: "Mamma! Tata!" Neque sōlum prīma verba, sed etiam prīmōs gradūs faciet īnfāns. Initiō pater eum sustinēbit ac manū dūcet; mox vērō īnfāns sōlus ambulāre incipiet neque ā parentibus sustinēbitur neque manū dūcētur. Īnfāns ambulāns ā parentibus laetīs laudābitur. Simul īnfāns plūra verba discet et mox rēctē loquī sciet.',
        'Utra īnfantem Aemiliae alet, māternē an nūtrīx? Īnfāns ā mātre alētur. Aemilia ipsa īnfantem vāgientem ad pectus suum appōnet. Īnfāns lac mātris bibet, nōn nūtrīcis. Tum māter īnfantem in cūnās impōnet. Vesperī duae ancillae cūnās in cubiculum parentum portābunt atque ante lectum eōrum pōnent. Sī īnfāns bene dormiet neque vāgiet, parentēs quoque bene dormient neque īnfante vāgiente ē somnō excitābuntur.',
      ],
      notes: [
        {
          term: 'īnfāns (īnfantis)',
          gloss: 'a baby, an infant — one who cannot yet speak (in-fans = "not speaking").',
        },
        { term: 'cūnae', gloss: 'a cradle; the word is plural in Latin (cūnae, cunarum).' },
        { term: 'vāgit / lac', gloss: 'cries, wails / milk (lac, lactis).' },
        {
          term: 'nūtrīx (nūtrīcis)',
          gloss: 'a nurse, a wet-nurse — a woman who feeds another woman\'s child.',
        },
        { term: 'carēre + abl.', gloss: 'to lack, to be without: cibō caret — he lacks food.' },
        { term: 'appellāre', gloss: 'to call, to address by name.' },
        { term: 'erit / erunt', gloss: 'future of esse: he will be / they will be.' },
      ],
    },
    {
      id: 'colloquium-parentum',
      latinTitle: 'COLLOQVIVM PARENTVM',
      title: 'The Parents\' Conversation',
      paragraphs: [
        'Iūlius adhūc in peristȳlō cum uxōre colloquitur. Aemilia fessa in sellā cōnsīdit. Marītus et uxor iam nōn dē praeteritō colloquuntur, sed dē tempore futūrō. Sermō eōrum est dē rēbus futūrīs.',
        'Iūlius autem, quī iam intellegit Aemiliam novum īnfantem habēre velle, inquit: "Ō Aemilia! Mox parvulum fīlium habēbimus." Aemilia: "Fīlium? Iam duōs fīliōs habēmus. Ego alteram fīliam habēre volō, plūrēs quam duōs fīliōs nōlō! Tū fīlium habēre vīs, Iūlī? Nōnne laetus eris, sī fīlium habēbis? Num parvulam fīliam minus amābis quam fīlium?" Iūlius: "Profectō laetus erō, sī alteram fīliam habēbō. Nōn fīlium magis amābō quam parvulam fīliam."',
        'Aemilia: "Iam fīliōs tuōs magis amās quam tuam Iūliam fīliolam: Marcum et Quīntum saepe laudās, sed Iūliam rārō laudās, quamquam proba est puella. Vōs virī fīliōs modo habēre vultis, fīliās nōn amātis!" Aemilia surgit atque gradum adversus ōstium facit. Iūlius: "Manē hīc apud mē, Aemilia!" Aemilia alterum gradum ad ōstium versus facit, tum incerta cōnsistit. Iūlius: "Nōlī abīre! Tēcum colloquī volō." Aemilia nōn abit, sed apud marītum manet. Coniugēs colloquī pergunt. Ecce colloquium eōrum:',
        'Iūlius: "Nōs virī nōn fīliōs tantum, sed etiam fīliās habēre volumus, nec fīliās minus amāmus quam fīliōs. Certē mulierēs rārius ā līberīs suīs discēdunt ..." Aemilia: "Multae mātrēs īnfantēs suōs apud nūtrīcēs relinquunt, ego vērō manēbō apud īnfantem meum: numquam ab eō discēdam! Sī aeger erit, ipsa eum cūrābō tōtamque noctem apud eum vigilābō; nēmō īnfantem aegrum tam bene cūrāre potest quam māter ipsa."',
        'Iūlius: "Nōnne ab īnfante sānō discēdēs?" Aemilia: "Minimē! Bona māter semper apud īnfantem suum manēre dēbet. Sīve īnfāns valet sīve aegrōtat, māter ipsa eum cūrāre et alere dēbet — hoc est mātris officium!" Iūlius: "Tūne ipsa īnfantem tuum lacte tuō āles?" Aemilia: "Profectō īnfantem meum ipsa ālam. Ego faciam officium meum! Neque sōlum diē, sed etiam nocte apud īnfantem erō: semper cum eō dormiam."',
        'Iūlius: "Quid? Nōs et īnfāns in eōdem cubiculō dormiēmus? Vix ūnam hōram dormīre poterimus, sī īnfāns vāgiet. Sī tū et īnfāns tuus in cubiculō nostrō dormiētis, ego profectō in aliō cubiculō dormiam, ubi ab īnfante vāgiente nōn excitābor!" Aemilia: "Ō Iūlī! Ita loquitur homō quī officium suum nescit!"',
        'Iūlius: "Meum officium est pecūniam facere ac magnam familiam alere, nōn cum īnfante vāgiente cubāre! Somnus virō industriō necessārius est!" Aemilia īrāta: "Nōlī pergere!" inquit, "Plūra ā tē audīre nōlō!" atque iterum ad ōstium versūs īre incipit. "Māne, Aemilia!" inquit Iūlius, "Nōlī ita mē relinquere!" sed illa adversus ōstium īre pergit.',
      ],
      notes: [
        { term: 'peristȳlum', gloss: 'the colonnaded garden-court of a Roman house.' },
        {
          term: 'praeteritum / futūrum',
          gloss: 'the past / the future; de tempore futuro — about the future.',
        },
        { term: 'nōlō / nōlle', gloss: 'I do not want; nolunt — they refuse.' },
        { term: 'manēbō / discēdam', gloss: 'future: I shall stay / I shall leave (manēre, discedere).' },
        { term: 'ālam / cūrābō', gloss: 'I shall feed / I shall care for (alere, cūrāre).' },
        { term: 'sīve ... sīve', gloss: 'whether ... or: sīve valet sīve aegrōtat.' },
        {
          term: 'officium',
          gloss: 'duty, job: hoc est matris officium — this is a mother\'s duty.',
        },
      ],
    },
    {
      id: 'de-sorore',
      latinTitle: 'DĒ SORŌRE',
      title: 'About a Sister',
      paragraphs: [
        'Tum vērō Syrā, quae eō ipsō tempore peristȳlum intrat ūna cum Iūlia, dominae in ōstiō occurrit. Aemilia ante Syram et Iūliam cōnsistēns: "Quid vultis?" inquit, "Cūr nōn manētis in hortō?" Syra: "Quia mox imbrem habēbimus: ecce caelum ātrīs nūbibus operītur. Sī in hortō manēbimus, ūmidae erimus. Vōs quoque ūmidī eritis, dominī, sī hīc in peristȳlō manēbitis."',
        'Iūlius caelum spectāns: "Rēctē dīcis" inquit, "Illae nūbēs imbrem afferent. Venīte mēcum in ātrium! Mox rūrsus lūcēbit." Iūlius ātrium intrat; Aemilia eum sequitur ūna cum Iūlia et Syra. In ātriō Iūlius et Aemilia silentēs imbrem per impluvium cadentem aspiciunt. Iūlia silentium parentum animadvertit, et "Quid silētis?" inquit, "Estisne trīstēs? Ego vōs cōnsōlābor!"',
        'Aemilia: "Cōgitāmus dē miserīs nautīs, quōrum officium est nāvigāre, sīve mare tranquillum sīve turbidum est. Multī nautae nunc in mare merguntur, dum rēs necessāriās ex terrīs aliēnīs in Italiam advehere cōnantur. Ō miserōs nautās, quī numquam domum revertentur! Ō miserōs līberōs nautārum, quī post hanc tempestātem patrēs suōs nōn vidēbunt!"',
        'Iūlia: "Ego laetor quod pater meus nauta nōn est et domī apud nōs manēre potest." Iūlius, quī crās Rōmam ībit: "Nōn semper" inquit, "mihi licet apud vōs manēre, Iūlia. Necesse est mihi crās rūrsus ā vōbīs discēdere, nec vērō in terrās aliēnās ībō, ut nauta." Iūlia: "Quō ībis, tata? Quandō reverteris? Ego et mamma tē sequēmur!" Iūlius: "Quārē mē sequēminī? Rōmam proficīscar, unde tertiō quoque diē revertar, sī poterō."',
        'Iūlia: "Nōlī ā nōbīs discēdere! Vel sī necesse erit domō abīre, nōn modo tertiō quoque diē, sed cotīdiē ad nōs revertī dēbēs. Hoc postulō ā tē! Nōlō tē carēre, tata. Cotīdiē tibi occurram." Iūlius: "Audīsne, Aemilia? Iūlia dīcit sē patre suō carēre nōlle, ergō mē nōn minus dīligit quam tē. Atque ego profectō fīliam meam aequē dīligō ac fīliōs. Nec alteram fīliam minus dīligam."',
        'Iūlia: "Quam alteram fīliam dīcis? Mihi soror nōn est." Iūliō silentē, Aemilia: "Nōnne gaudēbis, Iuliiola" inquit, "sī parvulam sorōrem habēbis?" Iūlia: "Sorōrem habēre nōlō! Nam sī sorōrem habēbō, ea sōla ā vōbīs amābitur, ego nōn amābor!" Aemilia: "Certē tū nōn minus ā nōbīs amāberis: tū et parvula soror aequē amābiminī."',
        'Iūlia: "Sī aequē amābimur, laeta erō. Sed multō magis laetābor, sī frātrem habēbō, mamma! Nōnne tū quoque laetāberis, tata, sī fīliolum habēbis?" Iūlius silet. Aemilia vērō, antequam Iūlia silentium animadvertit: "Nōlī dīcere \'tatam\' et \'mammam\'," inquit, "Ea nōmina ā tē audīre nōlumus. Ita parvulī īnfantēs loquuntur, nec sermō īnfantium tē decet. \'Patrem\' et \'mātrem\' dīcere oportet."',
        'Iūlia: "Sī īnfāns nōn sum, nōlīte mē \'Iuliolam\' vocāre! Id nōmen mē nōn decet. Mihi nōmen est \'Iūlia\'." Aemilia: "Rēctē dīcis, Iūlia. Tū igitur ā nōbīs \'Iūlia\' vocāberis, et nōs ā tē \'pater\' et \'māter\' vocābimur." Iūlia: "Ita semper ā mē vocābiminī, tata et mamma!"',
      ],
      notes: [
        { term: 'imber (imbris)', gloss: 'rain, a rainstorm; mox imbrem habebimus — we shall soon have rain.' },
        { term: 'ātrīs nūbibus', gloss: 'with dark clouds (āter = black, gloomy).' },
        { term: 'afferent / lūcēbit', gloss: 'will bring / will shine — future forms.' },
        { term: 'laetor / cōnsōlābor', gloss: 'I rejoice / I shall comfort.' },
        { term: 'laetābor / dīligam', gloss: 'I shall rejoice / I shall love — future forms.' },
        { term: 'soror / frāter', gloss: 'sister / brother.' },
        { term: 'vocāberis / vocābimur', gloss: 'you will be called / we shall be called — future passive.' },
      ],
    },
  ],
  grammar: [
    {
      id: 'tempus-futurum',
      latinTitle: 'Tempus Futūrum',
      title: 'The Future Tense',
      intro:
        'The future tense tells what will happen: mox nox erit — soon it will be night. The first and ' +
        'second conjugations add -b- to the stem (-bit, -bunt); the third and fourth take -et, -ent.',
      paradigms: [
        {
          caption: 'futūrum: the endings (I & II vs. III & IV conjugation)',
          head: ['', 'I / II coniugātiō', 'III / IV coniugātiō'],
          rows: [
            ['persōna prīma (sing.)', '-bo', '-am'],
            ['persōna secunda (sing.)', '-bis', '-es'],
            ['persōna tertia (sing.)', '-bit', '-et'],
            ['persōna prīma (plur.)', '-bimus', '-emus'],
            ['persōna secunda (plur.)', '-bitis', '-etis'],
            ['persōna tertia (plur.)', '-bunt', '-ent'],
          ],
        },
        {
          caption: 'the four conjugations, third person singular',
          head: ['Coniugātiō', 'Īnfīnītīvus', 'Futūrum'],
          rows: [
            ['I', 'computāre', 'computābit — will calculate'],
            ['II', 'pārēre', 'pārēbit — will obey'],
            ['III', 'scrībere', 'scrībet — will write'],
            ['IV', 'dormīre', 'dormiet — will sleep'],
          ],
        },
        {
          caption: 'esse — to be (future)',
          head: ['', 'Singulārīs', 'Plūrālīs'],
          rows: [
            ['persōna prīma', 'erō — I shall be', 'erimus — we shall be'],
            ['persōna secunda', 'eris — you will be', 'eritis — you will be'],
            ['persōna tertia', 'erit — he/she will be', 'erunt — they will be'],
          ],
        },
      ],
      points: [
        'The first two conjugations insert -b- before the ending: ama-bo, ama-bis, ama-bit ... ama-bunt.',
        'The third and fourth conjugations use -am, -es, -et ... -ent: scribam, scribes, scribet; dormiam, dormies, dormiet.',
        'The future of esse is irregular and very common: ero, eris, erit, erimus, eritis, erunt.',
        'Compare present and future: dormit — he sleeps; dormiet — he will sleep.',
      ],
    },
    {
      id: 'futurum-passivum',
      latinTitle: 'Futūrum Passīvum',
      title: 'The Future Passive',
      intro:
        'The same future endings take an -r in the passive: the good pupil will be praised — discipulus ' +
        'bonus laudābitur.',
      paradigms: [
        {
          caption: 'futūrum passīvum: the endings',
          head: ['', 'I / II coniugātiō', 'III / IV coniugātiō'],
          rows: [
            ['persōna prīma (sing.)', '-bor', '-ar'],
            ['persōna secunda (sing.)', '-beris', '-eris'],
            ['persōna tertia (sing.)', '-bitur', '-etur'],
            ['persōna prīma (plur.)', '-bimur', '-emur'],
            ['persōna secunda (plur.)', '-bimini', '-emini'],
            ['persōna tertia (plur.)', '-buntur', '-entur'],
          ],
        },
      ],
      points: [
        'laudabor, laudaberis, laudabitur — I shall be praised, you will be praised, he will be praised.',
        'reprehendar, reprehenderis, reprehendetur — I shall be blamed, and so on (laudāre, reprehendere).',
        'The future passive is built on the same stem and time as the future active; only the endings differ.',
        'A pupil says: a magistro laudabor, non reprehendar — I shall be praised by the teacher, not blamed.',
      ],
    },
  ],
  vocabulary: [
    { latin: 'īnfāns (infantis)', english: 'infant, baby', pos: 'noun (m.)' },
    { latin: 'parvulus', english: 'little, tiny', pos: 'adjective' },
    { latin: 'cūnae', english: 'cradle (plural)', pos: 'noun (f.)' },
    { latin: 'somnus', english: 'sleep', pos: 'noun (m.)' },
    { latin: 'cibus', english: 'food', pos: 'noun (m.)' },
    { latin: 'lac (lactis)', english: 'milk', pos: 'noun (n.)' },
    { latin: 'nūtrīx (nutricis)', english: 'nurse, wet-nurse', pos: 'noun (f.)' },
    { latin: 'marītus', english: 'husband', pos: 'noun (m.)' },
    { latin: 'uxor (uxoris)', english: 'wife', pos: 'noun (f.)' },
    { latin: 'fīlius', english: 'son', pos: 'noun (m.)' },
    { latin: 'fīlia', english: 'daughter', pos: 'noun (f.)' },
    { latin: 'soror (sororis)', english: 'sister', pos: 'noun (f.)' },
    { latin: 'frāter (fratris)', english: 'brother', pos: 'noun (m.)' },
    { latin: 'officium', english: 'duty, job', pos: 'noun (n.)' },
    { latin: 'sermō (sermonis)', english: 'conversation, talk', pos: 'noun (m.)' },
    { latin: 'discipulus', english: 'pupil, student', pos: 'noun (m.)' },
    { latin: 'magister', english: 'teacher, master', pos: 'noun (m.)' },
    { latin: 'lūdus', english: 'school; game, play', pos: 'noun (m.)' },
    { latin: 'futūrus', english: 'future, about to be', pos: 'adjective' },
    { latin: 'praeteritus', english: 'past, gone by', pos: 'adjective' },
    { latin: 'aliēnus', english: 'another\'s, foreign', pos: 'adjective' },
    { latin: 'aeger', english: 'sick, ill', pos: 'adjective' },
    { latin: 'trīstis', english: 'sad', pos: 'adjective' },
    { latin: 'alere', english: 'feed, nourish', pos: 'verb' },
    { latin: 'carēre', english: 'lack, be without (+ abl.)', pos: 'verb' },
    { latin: 'vāgīre', english: 'cry, wail', pos: 'verb' },
    { latin: 'postulāre', english: 'demand, ask for', pos: 'verb' },
    { latin: 'appellāre', english: 'call, address by name', pos: 'verb' },
    { latin: 'ambulāre', english: 'walk', pos: 'verb' },
    { latin: 'laudāre', english: 'praise', pos: 'verb' },
    { latin: 'discere', english: 'learn', pos: 'verb' },
    { latin: 'loquī', english: 'speak', pos: 'verb' },
    { latin: 'relinquere', english: 'leave (behind)', pos: 'verb' },
    { latin: 'cūrāre', english: 'care for, look after', pos: 'verb' },
    { latin: 'vigilāre', english: 'stay awake', pos: 'verb' },
    { latin: 'pergere', english: 'continue, go on', pos: 'verb' },
    { latin: 'occurrere', english: 'meet, run up to', pos: 'verb' },
    { latin: 'revertī', english: 'return', pos: 'verb' },
    { latin: 'laetārī', english: 'rejoice, be glad', pos: 'verb' },
    { latin: 'dīligere', english: 'love, cherish', pos: 'verb' },
    { latin: 'computāre', english: 'calculate, reckon', pos: 'verb' },
    { latin: 'pārēre', english: 'obey', pos: 'verb' },
    { latin: 'scrībere', english: 'write', pos: 'verb' },
    { latin: 'dormīre', english: 'sleep', pos: 'verb' },
    { latin: 'esse', english: 'to be (ero, eris, erit)', pos: 'verb' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PĒNSVM A',
      title: 'Fill in the endings',
      instruction: 'Complete each verb with the correct future ending.',
      type: 'fill',
      items: [
        'Mox novus īnfāns in cūnīs Aemiliae er{{it}}. Aemilia rūrsus īnfantem hab{{ēbit}}. Tum quattuor līberī in familiā er{{unt}}. Iūlius et Aemilia quattuor līberōs hab{{ēbunt}}. Aemilia īnfantem suum am{{ābit}}. Iūlius et Aemilia īnfantem suum aequē am{{ābunt}}. Annō post īnfāns prīma verba discet prīmōsque gradūs fac{{iet}}. Īnfāns ambulāns ā parentibus laudā{{bitur}}.',
        "Aemilia: 'Ego īnfantem meum bene cūr{{ābō}}: semper apud eum man{{ēbō}}, numquam ab eō discēd{{am}}.' Iūlius: 'Certē bona er{{is}}, Aemilia: īnfantem tuum ipsa cūr{{ābis}} nec eum apud nūtrīcem relinqu{{ēs}}.' Aemilia: 'Etiam nocte apud īnfantem er{{ō}}, semper cum eō dorm{{iam}}. Nōs et īnfāns in eōdem cubiculō dorm{{iēmus}}.' Iūlius: 'Nōn dormiēmus, sed vigil{{ābō}}! Nam certē ab īnfante vāgiente excit{{ābor}}!' Aemilia: 'Ego excit{{ābor}}, tū bene dormiēs nec excit{{āberis}}!'",
      ],
    },
    {
      id: 'pensum-b',
      latinLabel: 'PĒNSVM B',
      title: 'Complete the sentences',
      instruction: 'Fill each gap with the missing word.',
      type: 'fill',
      items: [
        'Parvulus puer quī fārī nōn potest {{īnfāns}} appellātur. Īnfāns quī cibō {{caret}} magnā vōce {{vāgit}}. Nōn pānis, sed {{lac}} cibus īnfantium est. Nūtrīx est {{mulier}} (= fēmina) quae nōn suum, sed {{aliēnum}} īnfantem {{alit}}. Multae mātrēs īnfantēs suōs ipsae alere {{nōlunt}}.',
        "Marītus et uxor iam nōn dē tempore praeteritō {{colloquuntur}}, sed dē tempore {{futūrō}}. Aemilia: 'Cūr tū fīlium habēre {{vīs}}, Iūlī? Ego alteram fīliam habēre {{volō}}, plūrēs quam duōs fīliōs {{nōlō}} (= nōn volō). Vōs virī fīliōs tantum {{vultis}}! Fīliōs {{magis}} dīligitis quam fīliās!' Iūlius {{silet}} (= tacet). Aemilia īrāta {{gradum}} adversus ōstium facit, sed Iūlius '{{Māne}} hic apud mē!' inquit, '{{Nōlī}} discēdere!' Aemilia manet ac {{loquitur}}: 'Bona māter apud īnfantem suum manēre {{dēbet}}, hoc mātris {{officium}} est. Nēmō enim īnfantem melius {{cūrāre}} potest quam māter ipsa.'",
      ],
    },
    {
      id: 'pensum-c',
      latinLabel: 'PĒNSVM C',
      title: 'Answer in Latin',
      instruction: 'Answer each question with a full Latin sentence, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'Ubi parvulus īnfāns cubat?', a: 'Parvulus īnfāns in cūnīs cubat.' },
        { q: 'Quid facit īnfāns quī cibō caret?', a: 'Īnfāns quī cibō caret magnā vōce vāgit.' },
        { q: 'Quid est cibus īnfantium parvulōrum?', a: 'Lac est cibus īnfantium parvulōrum.' },
        { q: 'Num omnēs īnfantēs ā mātribus suīs aluntur?', a: 'Nōn omnēs: multī īnfantēs ā nūtrīcibus aluntur.' },
        { q: 'Quae sunt prīma verba īnfantīs?', a: 'Prīma verba īnfantīs sunt "mamma" et "tata".' },
        { q: 'Quandō Aemilia novum īnfantem habēbit?', a: 'Aemilia novum īnfantem post paucōs mēnsēs habēbit.' },
        { q: 'Cūr Aemilia ā marītō suō discēdere vult?', a: 'Aemilia discēdere vult, quia īrāta est: Iūlius fīliōs magis amāre vidētur quam fīliās.' },
        { q: 'Cūr Iūlius in aliō cubiculō dormīre vult?', a: 'Iūlius in aliō cubiculō dormīre vult, quia ab īnfante vāgiente excitārī nōn vult.' },
        { q: 'Quid Aemilia officium mātris esse dīcit?', a: 'Aemilia dīcit officium mātris esse īnfantem suum ipsum cūrāre et alere.' },
        { q: 'Cūr Syra et Iūlia in hortō nōn manent?', a: 'In hortō nōn manent, quia mox imber erit.' },
        { q: 'Cūr Iūlia sorōrem habēre nōn vult?', a: 'Iūlia sorōrem habēre nōn vult, quia timet nē sōla ā parentibus amētur.' },
      ],
    },
  ],
}

export default chapter
