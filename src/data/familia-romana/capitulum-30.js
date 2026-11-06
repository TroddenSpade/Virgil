// Capitulum XXX — Convivium
// Sources: Ørberg, Lingua Latina per se Illustrata, Pars I: Familia Romana (2nd ed.)
// Reading text, grammar and exercises adapted and re-typeset for the web.

const chapter = {
  number: 30,
  roman: 'XXX',
  slug: 'convivium',
  latinTitle: 'CONVĪVIVM',
  title: 'The Dinner Party',
  tagline:
    'Guests recline, the wine is poured, and over dinner the future perfect is served: if you have obeyed, you will be praised.',
  status: 'complete',
  overview:
    'Iūlius comes in from the fields, bathes, and welcomes his friends Cornēlius and Orontes to dinner. ' +
    'The guests recline in the trīclīnium while the cook and the waiters bring course after course, and the ' +
    'conversation wanders from city business to country life and then to the merits of Falernian wine. ' +
    'The grammar of the evening is the future perfect — the tense of what will have happened before ' +
    'something else: si fortiter pugnaverit, dux eum laudabit.',
  objectives: [
    'Read a prose account of a Roman dinner party, from the bath to the last cup.',
    'Recognise the future perfect active: -ero, -eris, -erit, -erimus, -eritis, -erint.',
    'Form the future perfect passive with the perfect participle plūs ero, eris, erit.',
    'Use the future perfect in conditional and temporal clauses: si ... -erit, cum ... -erit.',
    'Talk about food, wine and dining: cēna, vīnum, pōculum, gustāre, miscēre.',
  ],
  readings: [
    {
      id: 'adventus-hospitum',
      latinTitle: 'ADVENTVS HOSPITVM',
      title: 'The Guests Arrive',
      paragraphs: [
        'Ex agrīs reversus Iūlius continuō balneum petit, atque aqua calida, tum frīgida lavātur. Dum ille vestem novam induit, Cornēlius et Orontēs et hospitēs eius cum uxōribus Fabiā et Paulā adveniunt. (Hospitēs sunt amīcī quōrum alter alterum bene recipit domum suam, etiam sī inexspectātī vēnerint.) Hodiē autem hospitēs Iūliī exspectātī veniunt, nam eōs vocāvit ad cēnam. (Cēna est cibus quem circiter hōrā nōnā vel decimā sūmunt.)',
        "Aemilia ātrium intrāns hospitēs salūtat et marītum tardum excūsat: 'Iūlius tardē ex agrīs revertit quod nimis diū ambulāvit. Ergō nōndum exiit ē balneō. Sed brevī lautus erit.' Tum Iūlius lautus et novā veste indūtus intrat et amīcōs salvēre iubet: 'Salvēte, amīcī! Gaudeō vōs omnēs iam adesse. Quam ob rem tam rārō tē videō, mī Cornēlī?'",
        "Cornēlius: 'Nōnnumquam tē vīsere voluī, nec prius urbem relinquere potuī prae multīs et magnīs negōtiīs meīs. Nunc dēmum, postquam heri ad vīllam Tusculānam rediī, paulum requiēscere possum et amīcōs vīsere. Post tanta negōtia magis quam umquam ōtiō fruor.'",
        "Iūlius: 'Tūne quoque Rōmā venīs, Orontēs?' Orontēs: 'Nūper longum iter fēcī in Graeciam. Īdibus Maiīs dēmum ex itinere Rōmam revertī, unde hodiē veniō.' Iūlius: 'Ergō vōs mihi aliquid dē rēbus urbānīs novissimīs nūntiābitis.' Cornēlius: 'Et tū nōs docēbis dē rēbus rūsticīs, ut agricola studiōsus et dīligēns.'",
        "Iūlius frontem contrahit et 'Agricola' inquit 'ipse nōn sum, sed multīs agricolīs praesum ac dīligenter cūrō ut colōnī agrōs meōs bene cōlant.' Orontēs, quī vīta rūstica nōn fruitur, 'Prūdenter facis' inquit 'quod agrōs ipse nōn colis. Sī necesse est in agrīs labōrāre, vīta rūstica nōn iūcunda, sed molesta est. Ego numquam īnstrūmentō rūsticō ūsus sum.'",
        "Iūlius: 'Dē rēbus rūsticīs et urbānīs colloquēmur inter cēnam. Prīmum omnium cēnābimus. Sex hōrae iam sunt cum cibum nōn sūmpsī. Venter mihi contrahitur propter famem.' Cornēlius: 'Sex hōrae nihil est. Homō sex diēs cibō carēre potest, nec tamen famē moritur.' Iūlius: 'Dubitō num ego tam diū famem ferre possim.' Cornēlius: 'Id nōn negō, sed multō molestior est sitis quam famēs.'",
        "Orontēs rīdēns 'Equidem' inquit 'sine aquā iūcundē vīvere nōn possum, sine vīnō nōn item! Magnum bonum est vīnum.' Cornēlius: 'Nēmō negat vīnum aquā iūcundius esse, tamen aquam bibere mālō quam sitim patī. Num tū sitim perferre māvīs quam aquam bibere?' Orontēs: 'Mēlius quidem est aquam bibere quam sitī morī. Ex malīs minimum ēligere oportet. Nec vērō ego vīvō nisi cotīdiē bonō vīnō fruor. Vīnum vīta est!' Cornēlius: 'Nōn vīvimus, ut bibāmus, sed bibimus, ut vīvāmus.'",
        "Hic Aemilia 'Necesse est' inquit 'paulisper famem sitimque ferre, dum cibus coquitur et trīclīnium exōrnātur.'",
      ],
      notes: [
        { term: 'hospes', gloss: 'guest (plural hospites); the same word can also mean “host” — it covers both sides of hospitality.' },
        { term: 'balneum', gloss: 'a bath; balneum petere = to head for the bath.' },
        { term: 'lautus', gloss: 'washed, bathed — from lavare, to wash.' },
        { term: 'salvēre iubēre', gloss: 'to bid someone be well, i.e. to greet them: amicos salvēre iubet.' },
        { term: 'ōtium', gloss: 'leisure, free time — the opposite of negōtium.' },
        { term: 'fruī', gloss: 'to enjoy — it takes the ablative: otio fruor, I enjoy leisure.' },
        { term: 'famēs / sītis', gloss: 'hunger / thirst.' },
        { term: 'nūntiābitis', gloss: 'you will report — future of nūntiāre.' },
      ],
    },
    {
      id: 'triclinium',
      latinTitle: 'TRĪCLĪNIVM',
      title: 'The Dining Room',
      paragraphs: [
        '(Servus cuius negōtium est cibum coquere atque cōnficere in culīnā, cocus appellātur. Aliī servī, quī ministrī vocantur, cibum parātum ē culīnā in trīclīnium portant.)',
        'In trīclīniō sunt trēs lectī, lectus summus, medius, īmus, et mēnsā in mediō. Ante convīvium trīclīnium flōribus exōrnātur et vestis pretiōsa super lectōs sternitur. Neque enim sedentēs cēnant Rōmānī, sed in lectīs cubantēs. Quot convīvae in singulīs lectīs accumbunt? In singulīs lectīs aut singulī aut bīnī aut ternī convīvae accumbere solent. Cum igitur paucissimī sunt convīvae, nōn pauciōrēs sunt quam trēs; cum plūrimī, nōn plūrēs quam novem — nam ter ternī sunt novem.',
        "Iūlius: 'Hōra decima est. Cēnam iam prīdem parātam esse oportuit! Nimis tardus est iste cocus!' Aemilia: 'Tuumne hoc negōtium est an meum? Uter nostrum in culīnā praeest? Nōndum hōra decima est. Patienter exspectā, dum servī lēctōs sternunt. Cēnābimus cum prīmum cocus cēnam parāverit et servī trīclīnium ōrnāverint. Brevī cēna parāta et trīclīnium ōrnātum erit.'",
        "Tandem puer 'cēnam parātam esse' nūntiat. 'Trīclīnium intrēmus!' inquit Iūlius, atque convīvae laetī trīclīnium flōribus exōrnātum et veste pulcherrimā strātum intrant. Rosae et līlia et alia multa flōrum genera in mēnsā sparsa sunt inter vāsa et pōcula argentea; nec enim quidquam nisi argentum mēnsam decet virī nōbilis. (Argentum quidem minōris pretiī est quam aurum, nec vērō quisquam ex vāsīs aureīs cēnat nisi hominēs dīvitissimī atque glōriōsī, ut rēgēs Orientīs.)",
        'Iūlius, dominus convīviī, cum Aemilia in lectō mediō accumbit; in aliīs duōbus lectīs bīnī convīvae accumbunt. Cornēlius et Fabia in lectō summō ad sinistram, Orontēs et Paulā ad dextram Aemiliae in lectō īmō. Tum dēmum incipit cēna.',
      ],
      notes: [
        { term: 'trīclīnium', gloss: 'dining room, named from the three lecti (couches) set around the table.' },
        { term: 'lectus summus / medius / īmus', gloss: 'the three couches: the highest, the middle and the lowest.' },
        { term: 'accumbere / cubāre', gloss: 'to recline at table — Romans ate lying down, not sitting.' },
        { term: 'sternere', gloss: 'to spread, lay out: lectos sternere = to make up the couches.' },
        { term: 'exōrnāre', gloss: 'to decorate, adorn: trīclīnium floribus exornatur.' },
        { term: 'cocus / minister', gloss: 'cook / waiter, servant; the minister carries the food from kitchen to table.' },
        { term: 'argentum', gloss: 'silver; vasa argentea = silver dishes.' },
        { term: 'praeesse', gloss: 'to be in charge of (+ dative): uter in culīna praeest? — which of us is in charge in the kitchen?' },
      ],
    },
    {
      id: 'cena',
      latinTitle: 'CĒNA',
      title: 'The Dinner',
      paragraphs: [
        'Prīmum ōva convīvīs appōnuntur; deinde piscēs; sequitur caput cēnae: porcus quem Iūlius ē grege ēlēgit; postrēmō mēnsā secunda: nucēs et varia genera malōrum. Cibus optimus est atque convīvīs placet, maximē vērō laudātur carō porcī, quam minister cultrō acūtē secat convīvīs spectantibus.',
        "'Haec carō valdē mihi placet' inquit Fabia cum prīmum carnem gustāvit, 'Cocus iste sānē negōtium suum scit.' 'Ego cocum nōn laudō' inquit Orontēs et salem carnī aspergit, 'quī sale nōn ūtitur! Optima quidem est carō, sed sale caret.' Orontēs cibum sale aspergere solet, ut sitim augeat! (Sāl est māteriā albā quae in marī et sub terrā invenītur.)",
        'Iam ministrī vīnum et calidam in pōcula fundunt. Rōmānī vīnum cum aquā miscent neque vīnum merum bibere solent. Sōlus Orontēs, cui nōn placet vīnum mixtum, merum pōtat, sed is Graecus est atque lībertīnus. (Lībertīnus est quī servus fuit et līberātus est; in lectō īmō accumbunt lībertīnī.)',
        "Iūlius pōculum tollēns 'Ergō bibāmus!' inquit, 'Hoc vīnum factum est ex optimīs ūvīs meārum vīneārum. Nec vīnum meum peius esse mihi vidētur quam vīnum illud Falernum, quod vīnum Italiae optimum habētur.' (Falernum est vīnum ex agrō Falernō, regiōne Campāniae.)",
        "Statim Cornēlius 'Sāne optimum' inquit 'vīnum est tuum, etiam melius quam Falernum', itemque Fabia 'Sāne ita est' inquit, nam ea omnibus dē rēbus idem sentit quod marītus.",
        "At Paulā vīnum gustāns 'Hoc vīnum' inquit 'nimis acerbum est: os mihi contrahitur. Ego vīnum dulce amō; semper mel vīnō misceō.' Statim minister mel apportat, quod Paulā in pōculum suum fundit. (Mel est quod apēs ex flōribus quaerunt; nihil melle dulcius est.)",
        "Iūlius: 'Īdem nōn omnibus placet. Sed quidnam tū sentīs, Orontēs? Utrum vīnī genus melius esse tibi vidētur, Falernum an Albānum?' 'Equidem' inquit Orontēs 'sententiam meam nōn ante dicam quam utrumque gustāverō.'",
        "Ad hōc Iūlius 'Rēctē mē monēs' inquit 'ūnum vīnī genus parum esse in bonā mēnsā. Profectō utrumque gustābis. Age, puer, profer Falernum quod optimum habeō! Tum dēmum hoc vīnum cum illō comparāre poterimus, cum utrumque gustāverimus. Ergō pōcula exhaurīte, amīcī! Cum prīmum meum vīnum pōtāverītis, Falernum pōtābitis!'",
        "Pōculum Orontis prīmum Falernō complētur, nam is iam prīdem pōculum suum exhausit. Deinde ministrī Falernum in cētera pōcula fundunt. Omnēs, postquam vīnum gustāvērunt, idem sentiunt: vīnum Falernum melius esse vīnō Albānō! Cornēlius et Orontēs sē aspiciunt. Neuter eōrum sententiam suam apertē dīcere audet. Tum Orontēs sīc incipit: 'Nesciō equidem utrum melius sit. Dulcius quidem est Falernum, nec vērō vīnum nimis acerbum esse cēnseō ...' At Cornēlius prūdenter 'Utrumque' inquit 'aequē bonum est. Neutrum melius esse mihi vidētur.'",
      ],
      notes: [
        { term: 'appōnere', gloss: 'to serve, set before: ova convivis apponuntur.' },
        { term: 'caput cēnae', gloss: 'the “head” of the dinner — the main dish, the roast.' },
        { term: 'gustāre', gloss: 'to taste.' },
        { term: 'carō', gloss: 'meat, flesh; carō porci = pork.' },
        { term: 'sāl', gloss: 'salt; sale carēre = to lack salt.' },
        { term: 'merum vīnum', gloss: 'undiluted wine; Romans usually mixed their wine with water.' },
        { term: 'miscēre / fundere', gloss: 'to mix / to pour.' },
        { term: 'acerbus / dulcis', gloss: 'bitter, sharp / sweet — of wine.' },
        { term: 'exhaurīre', gloss: 'to drain, empty: pocula exhaurīre = to empty the cups.' },
      ],
    },
  ],
  grammar: [
    {
      id: 'futurum-perfectum-activum',
      latinTitle: 'Futūrum Perfectum (Āctīvum)',
      title: 'The Future Perfect Active',
      intro:
        'The future perfect describes an action that will already be finished when something else happens: ' +
        'dux militem laudabit, si fortiter pugnaverit — the commander will praise the soldier if he has ' +
        'fought bravely. It joins the perfect stem to the endings -ero, -eris, -erit, -erimus, -eritis, -erint.',
      paradigms: [
        {
          caption: 'futūrum perfectum: laudāre — to praise',
          head: ['', 'Singulāris', 'Plūrālis'],
          rows: [
            ['persōna prīma', 'laudāverō — I shall have praised', 'laudāverīmus — we shall have praised'],
            ['persōna secunda', 'laudāverīs — you will have praised', 'laudāverītis — you will have praised'],
            ['persōna tertia', 'laudāverit — he/she will have praised', 'laudāverint — they will have praised'],
          ],
        },
        {
          caption: 'the endings',
          head: ['', 'Singulāris', 'Plūrālis'],
          rows: [
            ['persōna prīma', '-ero', '-erimus'],
            ['persōna secunda', '-eris', '-eritis'],
            ['persōna tertia', '-erit', '-erint'],
          ],
        },
        {
          caption: 'third person singular, the four conjugations',
          head: ['Coniugātiō', 'Īnfīnītīvus perfectī', 'Futūrum perfectum'],
          rows: [
            ['I', 'recitāvisse', 'recitāverit — will have recited'],
            ['II', 'pāruisse', 'pāruerit — will have obeyed'],
            ['III', 'scrīpsisse', 'scrīpserit — will have written'],
            ['IV', 'audīvisse', 'audīverit — will have heard'],
          ],
        },
        {
          caption: 'esse — to be (future perfect)',
          head: ['', 'Singulāris', 'Plūrālis'],
          rows: [
            ['persōna prīma', 'fuerō — I shall have been', 'fuerīmus — we shall have been'],
            ['persōna secunda', 'fuerīs — you will have been', 'fuerītis — you will have been'],
            ['persōna tertia', 'fuerit — he/she will have been', 'fuerint — they will have been'],
          ],
        },
        {
          caption: 'prōmissa et minae: si ... -eris, ... -bo',
          head: ['Condiciō', 'Cōnsequēns'],
          rows: [
            ['Sī mihi pāruerīs et industrius fuerīs,', 'tē laudābō. — If you have obeyed me and been diligent, I shall praise you.'],
            ['Sī piger fuerīs nec mihi pāruerīs,', 'tē nōn laudābō. — If you have been lazy and not obeyed me, I shall not praise you.'],
            ['Sī prāvē scrīpserīs et male recitāverīs,', 'tē verberābō. — If you have written and recited badly, I shall beat you.'],
            ['Sī rēctē scrīpserīs et bene recitāverīs,', 'tē laudābō. — If you have written and recited well, I shall praise you.'],
          ],
        },
      ],
      points: [
        'The future perfect adds -ero, -eris, -erit (sing.) and -erimus, -eritis, -erint (pl.) to the perfect stem: laudavero, laudaveris, laudaverit ...',
        'It names an action already completed before a future moment: laudabo si pugnaverit — I shall praise him if he has fought (i.e. if he fights and wins).',
        'The third person singular ends in -erit; the perfect infinitive without -isse gives the same stem: recitavisse → recitaverit.',
        'The endings are the same in every conjugation — only the perfect stem changes: recitaverit, paruerit, scripserit, audiverit.',
      ],
    },
    {
      id: 'futurum-perfectum-passivum',
      latinTitle: 'Futūrum Perfectum (Passīvum)',
      title: 'The Future Perfect Passive',
      intro:
        'The passive future perfect is made from the perfect participle together with the future of esse: ' +
        'laudatus ero — I shall have been praised. The participle, not the ending, carries the passive meaning.',
      paradigms: [
        {
          caption: 'laudātus erō — I shall have been praised (laudāre — to praise)',
          head: ['', 'Singulāris', 'Plūrālis'],
          rows: [
            ['persōna prīma', 'laudātus erō — I shall have been praised', 'laudātī erimus — we shall have been praised'],
            ['persōna secunda', 'laudātus eris — you will have been praised', 'laudātī eritis — you will have been praised'],
            ['persōna tertia', 'laudātus erit — he will have been praised', 'laudātī erunt — they will have been praised'],
          ],
        },
        {
          caption: 'āctīvum ↔ passīvum',
          head: ['Āctīvum', 'Passīvum'],
          rows: [
            ['Pater gaudēbit sī magister fīlium laudāverit.', 'Pater gaudēbit sī fīlius ā magistrō laudātus erit. — The father will be glad if his son has been praised by the teacher.'],
            ['Pater gaudēbit sī magister fīliōs laudāverit.', 'Pater gaudēbit sī fīliī ā magistrō laudātī erunt. — The father will be glad if his sons have been praised by the teacher.'],
          ],
        },
      ],
      points: [
        'The passive future perfect = perfect participle + the future of esse: laudatus ero, laudatus eris, laudatus erit ...',
        'The participle agrees with the subject: fīlius laudatus erit, fīlia laudata erit, fīliī laudati erunt.',
        'The doer of a passive verb stands in the ablative with a / ab: a magistro laudatus erit — he will have been praised by the teacher.',
        'Active and passive say the same thing: si magister fīlium laudaverit = si fīlius a magistro laudatus erit.',
      ],
    },
  ],
  vocabulary: [
    { latin: 'convīvium', english: 'dinner party, banquet', pos: 'noun (n.)' },
    { latin: 'convīva', english: 'guest at dinner', pos: 'noun (m.)' },
    { latin: 'cēna', english: 'dinner, main meal', pos: 'noun (f.)' },
    { latin: 'cocus', english: 'cook', pos: 'noun (m.)' },
    { latin: 'minister', english: 'servant, waiter', pos: 'noun (m.)' },
    { latin: 'trīclīnium', english: 'dining room', pos: 'noun (n.)' },
    { latin: 'lectus', english: 'couch, bed', pos: 'noun (m.)' },
    { latin: 'hospes', english: 'guest, host', pos: 'noun (m.)' },
    { latin: 'balneum', english: 'bath', pos: 'noun (n.)' },
    { latin: 'ōtium', english: 'leisure, free time', pos: 'noun (n.)' },
    { latin: 'negōtium', english: 'business, task', pos: 'noun (n.)' },
    { latin: 'famēs', english: 'hunger', pos: 'noun (f.)' },
    { latin: 'sitis', english: 'thirst', pos: 'noun (f.)' },
    { latin: 'vīnum', english: 'wine', pos: 'noun (n.)' },
    { latin: 'pōculum', english: 'cup', pos: 'noun (n.)' },
    { latin: 'argentum', english: 'silver', pos: 'noun (n.)' },
    { latin: 'carō', english: 'meat, flesh', pos: 'noun (f.)' },
    { latin: 'sāl', english: 'salt', pos: 'noun (m.)' },
    { latin: 'mel', english: 'honey', pos: 'noun (n.)' },
    { latin: 'flōs', english: 'flower', pos: 'noun (m.)' },
    { latin: 'lautus', english: 'washed, bathed', pos: 'adjective' },
    { latin: 'pretiōsus', english: 'precious, expensive', pos: 'adjective' },
    { latin: 'acerbus', english: 'bitter, sharp', pos: 'adjective' },
    { latin: 'dulcis', english: 'sweet', pos: 'adjective' },
    { latin: 'merus', english: 'pure, undiluted', pos: 'adjective' },
    { latin: 'tardus', english: 'late, slow', pos: 'adjective' },
    { latin: 'accumbere', english: 'to recline (at table)', pos: 'verb' },
    { latin: 'cubāre', english: 'to lie, recline', pos: 'verb' },
    { latin: 'sternere', english: 'to spread, lay out', pos: 'verb' },
    { latin: 'exōrnāre', english: 'to decorate, adorn', pos: 'verb' },
    { latin: 'appōnere', english: 'to serve, set before', pos: 'verb' },
    { latin: 'gustāre', english: 'to taste', pos: 'verb' },
    { latin: 'miscēre', english: 'to mix', pos: 'verb' },
    { latin: 'fundere', english: 'to pour', pos: 'verb' },
    { latin: 'exhaurīre', english: 'to drain, empty', pos: 'verb' },
    { latin: 'coquere', english: 'to cook', pos: 'verb' },
    { latin: 'ēligere', english: 'to choose, pick out', pos: 'verb' },
    { latin: 'revertī', english: 'to return', pos: 'verb' },
    { latin: 'fruī', english: 'to enjoy (+ abl.)', pos: 'verb' },
    { latin: 'nūntiāre', english: 'to announce, report', pos: 'verb' },
    { latin: 'praeesse', english: 'to be in charge of (+ dat.)', pos: 'verb' },
    { latin: 'prūdenter', english: 'wisely, sensibly', pos: 'adverb' },
    { latin: 'nisi', english: 'unless, if not', pos: 'conjunction' },
    { latin: 'dum', english: 'while, until', pos: 'conjunction' },
    { latin: 'postquam', english: 'after, when', pos: 'conjunction' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PĒNSVM A',
      title: 'Fill in the endings',
      instruction: 'Complete each word with the correct ending.',
      type: 'fill',
      items: [
        "Syra: 'Iam dormī, Quīnte! Cum bene dormīv{{erīs}}, valēbis.' Quīntus: 'Nōn dormiam antequam tū mihi tabulam nārrāv{{erīs}}.'",
        "Quīntus: 'Cum tabulam audīv{{erō}}, bene dormiam. Cum bene dormīv{{erō}}, brevī sānus erō, nisi medicus mē necāv{{erit}}!'",
        "Patria salva erit sī mīlitēs nostrī fortiter pugnāv{{erint}}. Dux: 'Nīsī vōs fortiter pugnāv{{erītis}}, mīlitēs, hostēs castra nostra expugnābunt.' Mīlitēs: 'Num quid nōbīs dabitur, sī fortiter pugnāv{{erimus}}?'",
      ],
    },
  ],
}

export default chapter