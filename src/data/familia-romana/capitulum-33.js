// Capitulum XXXIII — Exercitus Romanus
// Sources: Ørberg, Lingua Latina per se Illustrata, Pars I: Familia Romana (2nd ed.)
// Reading text, grammar and exercises adapted and re-typeset for the web.

const chapter = {
  number: 33,
  roman: 'XXXIII',
  slug: 'exercitus-romanus',
  latinTitle: 'EXERCITVS RŌMĀNVS',
  title: 'The Roman Army',
  tagline:
    'The legions, the marching camp, and a soldier’s letter home — told in the pluperfect subjunctive.',
  status: 'complete',
  overview:
    'Chapter XXXIII describes the Roman army from the inside: its legions and auxiliary troops, the silver ' +
    'eagle that leads the march, the battle-line, and the fortified camp. The second half is a letter from ' +
    'Aemilius, a young soldier serving in Germany, who tells his sister of a night battle and of the friend ' +
    'he lost. Through his story you meet the pluperfect subjunctive — the form used for indirect questions ' +
    'and for contrary-to-fact conditions about the past.',
  objectives: [
    'Describe the structure of a Roman legion and the troops that supported it.',
    'Follow the army on the march, in battle and in camp.',
    'Form the pluperfect subjunctive active and passive: laudavissem, laudatus essem.',
    'Report past questions and past conditions with the pluperfect subjunctive: num ... laudavisset, si ... fuisses.',
    'Read a Roman soldier’s letter and understand both its pride and its grief.',
  ],
  readings: [
    {
      id: 'exercitus-romanus',
      latinTitle: 'EXERCITVS RŌMĀNVS',
      title: 'The Roman Army',
      paragraphs: [
        'Exercitus Rōmānus ūniversus cōnstat ex legiōnibus duodētrīgintā, quae in dēnās cohortēs dīviduntur. In singulīs legiōnibus sunt sēna vel quīna vel quaterna milia mīlitum, quī omnēs cīvēs Rōmānī sunt. Praetereā magna auxilia exercituī adiunguntur. Auxilia sunt peditēs equitēsque ex prōvinciīs, quī arma leviōra, sīcut arcus sagittāsque, ferunt. Legiōnāriī sunt peditēs scūtīs, gladiīs pilīsque armātī.',
        'Signum legiōnis est aquilā argenteā, quae in itinere ante agmen fertur. In itinere cohortēs alia post aliam in longō ōrdine prōgrediuntur. Tālis ōrdō mīlitum prōgredientium dīcitur agmen. Cum agmen ad hostēs pervēnit, sī tempus et locus idōneus est ad pugnandum, cohortēs in trēs ōrdinēs īnstruuntur. Exercitus ita īnstrūctus aciēs appellātur. Ante proelium dux exercitiīs mīlitēs suōs hortātur ut fortiter pugnent. Tum peditēs proelium incipiunt et prīmum pīla in hostēs mittunt, deinde eōs gladiīs caedunt. Hostibus proeliō victīs, dux ā mīlitibus imperātor salūtātur.',
        'Vesperī exercitūs locō ad dēfendendum idōneō castrā pōnit, quae vāllō et fossā circumdantur. Ita mūniuntur castra Rōmāna.',
      ],
      notes: [
        { term: 'legiō', gloss: 'a legion — the basic unit of the Roman army, divided into ten cohorts.' },
        { term: 'cohors', gloss: 'a cohort, one tenth of a legion.' },
        { term: 'auxiliā', gloss: 'auxiliary troops — non-citizen soldiers from the provinces.' },
        { term: 'signum / aquila', gloss: 'the standard / the eagle — the silver eagle carried before the legion.' },
        { term: 'agmen', gloss: 'the marching column: cohortes in longo ordine progrediuntur.' },
        { term: 'aciēs', gloss: 'the battle-line — the army drawn up in three ranks.' },
        { term: 'vallum et fossa', gloss: 'rampart and ditch — the defences of the marching camp.' },
      ],
    },
    {
      id: 'aemilius',
      latinTitle: 'AEMILIVS',
      title: 'Aemilius',
      paragraphs: [
        'Aemilius, frāter Aemiliae minor, quem suprā commemorāvimus, ā prīmā aetāte studiōsus fuit reī mīlitāris. Iam puer septem annōs nātus gladiōs ligneōs et arcūs sagittāsque sibi faciēbat, ut cum aliīs puerīs eius aetātis proelia lūderet. Septendecim annōs nātus ā patre interrogātus ‘quid tum discere vellet?’ fīlius statim respondit ‘sē nihil nisi rem mīlitārem discere velle.’ Vōx fīliī patrī haud placēbat, cum ipse litterīs studēret ūllumque aliud studium fīliō suō dignum esse arbitrārētur.',
        'Cum vērō fīlius nūllō modō contrā voluntātem suam ad studium litterārum cōgī posset, pater eum ūna cum Valeriō, adulēscente eiusdem aetātis, in Germāniam ad exercitum Rōmānum mīsit, ut apud ducem ēgregium stīpendia merēret. Ibi Aemilius fortiter pugnāns iam magnam glōriam mīlitārem sibi parāverat.',
        'Virtūs eius ēgregia ab omnibus laudātur. Et pater et soror Aemiliī frequentēs epistulās ad eum mittunt. Pater maxime dē rēbus suīs scrībit, sed Aemilia dē rēbus prīvātīs, ut dē suīs et dē convīviīs, scrībere solet. Epistulae quās pater ad fīlium dat praecipuē dē glōriā et virtūte sunt, sed ex iīs litterīs prīvātīs quās Aemilia nūper ā frātre suō accēpit plānē appāret eum iam vītā mīlitārī fatīgātum esse.',
        'Ecce litterae novissimae, quās Aemilia prīdiē kalendās Iunīās ā frātre accēpit et posterō diē in convīviō recitāvit:',
      ],
      notes: [
        { term: 'reī mīlitāris', gloss: 'of military matters — studium rei mīlitāris, a passion for soldiering.' },
        { term: 'stīpendia merēre', gloss: 'to serve for pay, to serve as a soldier.' },
        { term: 'vōx fīliī', gloss: 'the son’s words — vox here means what he said, not just his voice.' },
        { term: 'epistula', gloss: 'a letter; frequentes epistulas mittunt, they send letters often.' },
        { term: 'vītā mīlitārī', gloss: 'military life — fatigatus, worn out by it.' },
        { term: 'kalendae', gloss: 'the Kalends, the first day of the month: prīdiē kalendas Iunias = 31 May.' },
      ],
    },
    {
      id: 'epistula-aemilii',
      latinTitle: 'EPISTVLA AEMILIĪ',
      title: 'Aemilius’ Letter',
      paragraphs: [
        'Aemilius sorōrī suae cārissimae s. d.',
        'Hodiē dēmum mihi allāta est epistula tua quae ā. d. VII kal. Maī. scrīpta est, id est ante vīgintī diēs. Quam tardus est iste tabellārius! Celsī sānē et arduī montēs Germāniam ab Italiā disiungunt, ac difficillimae sunt viae quae trāns Alpēs ferunt, sed tamen celer tabellārius idem iter quīndecim ferē diēbus cōnficere potest, ut tabellāriī pūblicī quibus ūtitur dux noster. Ego vērō istum tabellārium properāre docēbō, cum meās litterās ad tē referet.',
        'Sed quamquam tardē advenit, grātissima mihi fuit tua epistula magnōque cum gaudiō ex ea cognōvī tē et Iūlium et līberōs vestrōs, quōs valdē dīligō, bonā valētūdine fruī. Cum epistulās tuās lēgō, apud vōs in Albānō esse mihi videor, neque in hāc terra frīgida inter hominēs barbarōs. Tum, nesciō quōmodo, ita permoveor ut lacrimās vix teneam — ita patriam et amīcōs meōs dēsīderō.',
        'Ō, quam longē absum ab Italiā et ab iīs omnibus quōs praecipuē dīligō! Utinam ego Rōmae essem aut tū apud mē essēs! Cum Dānuvium flūmen aspiciō, quod praeter castra nostra fluit, dē Tiberī cōgitō atque dē Rōmā. Quandō tē aspiciam, urbs pulcherrima? Utinam hic amnis Tiberis esset et haec castra essent Rōmā! Sed frūstrā haec optō, cum nēmō nisi deus ita subitō alium locum trānsferrī possit. Sī Mercurius essem, ālās habērem, ventō celerius trāns montēs amnēsque Italiam volārem, ubi Venus, soror mea pulcherrima, rīdēns mē reciperet. Rīdēbis certē, mea soror, nec sine causā, nam rīdiculum est tālēs rēs optāre, nec lacrimās effundere mīlitem cuius officium est sanguinem effundere prō patriā.',
        'Ego vērō, etsī cupidus sum patriae videndae, officium meum praestābō sīcut cēterī mīlitēs Rōmānī, quōrum magnus numerus in Germāniā est. Nisi nōs hīc fīnēsque imperiī dēfenderēmus, hostēs celeriter Dānuvium et Alpēs trānsīrent atque usque in Italiam pervenīrent, nec vōs in Latiō tūtī essētis. Nē hoc fīat, legiōnēs Rōmānae hīc sunt ac tamdiū remanēbunt dum hostis armātus seu citrā seu ultrā Dānuvium ūllus reliquus erit. Quoniam igitur ipse ad tē properāre nōn possum, ad tē scrībere properō.',
        'Quaeris ā mē cūr tibi tam paucās litterās scrīpserim, cum interim trīnās quaternāsve litterās ā tē accēperim. Haud difficile est mihi respondēre: quod neglegēns fuerim in scrībendō. Sī mihi esset ōtiī quantum est tibi, in epistulīs scrībendīs nōn minus dīligēns essem quam tū. Sed cum per mēnsēs vix tempus habuerim ad dormiendum, facile intellegēs nūllum mihi ōtium fuisse ad epistulam scrībendam. Prope cotīdiē aut Germānī castra nostra oppugnāvērunt aut nōs impetūs fēcimus in illōs.',
        'Hodiē vērō nūllum hostem armātum citrā flūmen vidēmus. Magnus numerus eōrum aut caesus aut captus est ā nostrīs, reliquī ultrā flūmen in magnīs silvīs latent. Heri enim exercitum Germānōrum proeliō vīcimus. Quod sīc factum est:',
        'Mediā nocte in castra nūntiātum est magnum hostium numerum nāviculīs ratibusque cōpulātīs flūmen trānsīsse celeriterque secundum flūmen adversus castra nostra prōgredī. Hōc nūntiō allātō, mīlitēs statim convocātī sunt. Quī cum arma cēpissent et vallum ascendissent, prīmō mīrābantur quamobrem mediā nocte ē somnō excitātī essent, cum extrā vallum omnia tranquilla esse vidērentur. Ego quoque dubitāre coeperam num nūntius vērum dīxisset, cum subitō paulō ante lūcem magnus numerus Germānōrum ē silvīs proximīs excurrēns castra nostra oppugnāvit. Nostrī, cum parātī essent ad castra dēfendenda, illum prīmum impetum facile sustinuērunt. Nec tamen hostēs castra oppugnāre dēstitērunt, sed aliī ex aliīs partibus etiam atque etiam sub vallum prōcurrērunt.',
        'Cum complūrēs hōrās ita fortissimē ā nostrīs, ab hostibus cōnstanter ac nōn timidē pugnātum esset, equitātus noster repente porta dextrā ērumpēns impetum in latus hostium apertum fēcit. Paulō post, cum plērīque hostēs sē ad equitēs convertissent, peditēs nostrī porta sinistrā ērūpērunt. Hostēs hāc rē perturbātī, cum iam longa pugnā fatīgātī essent, impetum Rōmānōrum ab utrāque parte venientium diūtius sustinēre nōn potuērunt, ac post brevem pugnam terga vertērunt. Cum ad rīpam flūminis fugientēs pervēnissent, aliī nāviculīs ratibusque sē servāvērunt, aliī armīs abiectīs in flūmen sē prōiēcērunt, ut natandō ad ulteriōrem rīpam pervenīrent, reliquī omnēs ab equitibus, quī ad eōs persequendōs missī erant, in rīpā caesī aut captī sunt. Tanta ibi caedēs hostium facta est ut meminisse horream.',
        'Duo ferē mīlia hominum magnamque armōrum cōpiam hostēs eō proeliō āmīsērunt. Ē nostrīs haud multī cecidērunt. Ipse sagitta in bracchiō laevō vulnerātus sum, sed vulnus meum leve est, multī graviōra vulnera accēpērunt. Nec vērō ūllus mīles legiōnārius ā tergō vulnerātus est. Plērīque autem mīlitēs nostrī ex tantō proeliō incolumēs sunt.',
        'Hōc proeliō factō, dux victor, cum ā mīlitibus imperātor salūtātus esset, virtūtem nostram laudāvit quod contrā hostēs numerō superiōrēs fortissimē pugnāvissēmus; tot hominibus ūnō proeliō āmissīs, hostēs brevī arma positūrōs esse dīxit. Hīs verbīs maximō gaudiō affectī sumus, nam post longum bellum omnēs pācem dēsīderāmus. Hodiē lēgātī ā Germānīs missī ad castra vēnērunt, ut cum imperātōre colloquerentur. Nesciō an lēgātī pācem petī tum vēnerint, sed certō sciō imperātōrem nostrum cum hoste armātō colloquī nōlle.',
        'Ego cum cēterīs hāc victōriā glōriōsā gaudeō quidem, sed multō magis gaudērem sī amīcus meus Pūblius Valerius, quōcum prīmum stīpendium meruī, incolumis esset et mēcum gaudēre posset. Quī cum mihi in hostēs prōgressō auxilium ferre vellet, ipse ex aciē excurrēns pīlō percussus cecidit. Graviter vulnerātus in castrā portātus est, ubi in manibus meīs ex vulnere mortuus est, postquam mē ōrāvit ut per litterās parentēs suōs dē morte fīliī cōnsōlārer. Sed quōmodo aliōs cōnsōler, cum ipse mē cōnsōlārī nōn possim? Fateor mē lacrimās effūdisse cum oculōs eius clausissem, sed illae lacrimae et mīlitem et amīcum decēbant; etenim malus amīcus fuissem, nisi lacrimās effūdissem super corpus amīcī mortuī, cum ille sanguinem suum prō mē effūdisset.',
        'Utinam patrem audīvissem, cum mē ad studium litterārum hortārētur! Sed tum litterās et studiōsōs litterārum dēspiciēbam. Poētās ut hominēs ōtiōsōs ōderam, praecipuē Tibullum, quī vītam rūsticam atque ōtiōsam laudābat, vītam mīlitārem dēspiciēbat. Mīrābar cūr ille poēta mortem glōriōsam prō patriā ‘dīram’ vocāret et ēnsēs quibus patria dēfenditur ‘horrendōs’, ut in hīs versibus, quōs senex magister etiam atque etiam nōbīs recitābat:',
        'Quis fuit horrendōs prīmus quī prōtulit ēnsēs? / Quam ferus et vērē ferreus ille fuit! / Tum caedēs hominum generī, tum proelia nāta, / tum brevior dīrae mortis aperta via est!',
        'Rīdiculī mihi puerō vidēbantur iī versūs, cum nōndum caedem vīdissem. At hodiē Tibullum vērum dīxisse intellegō. Sī iam tum hoc intellēxissem, certē patrī pāruissem nec ad bellum profectus essem, ut tot et tot vulnera vidērem. At iam satis dē caede scrīpsī. Nōlō tē fatīgāre nārrandō dē bellō cruentō, cum brevī pācem fore spērem. Nisi ea spēs mē fallit, posthāc plūrēs epistulās ā mē exspectātō, atque plūrēs etiam ipsa scrībitō! Etiam līberōs monē ut ad mē litterās dent. Et dē rē pūblicā et dē rē prīvāta nārrātōte mihi! Scītōte mē omnia quae apud vōs fīunt cognōscere velle. Valētūdinem tuam cūra dīligenter! Datum prīdiē Kalendās Maiās ex castrīs.',
      ],
      notes: [
        { term: 's. d.', gloss: 'salūtem dicit — “sends greetings”, the usual opening of a Roman letter.' },
        { term: 'tabellārius', gloss: 'a courier, letter-carrier; tabellarii publici carried the army’s post.' },
        { term: 'utinam', gloss: 'if only! — introduces a wish: Utinam Rōmae essem!' },
        { term: 'bracchium', gloss: 'the arm; ipse sagitta in bracchio laevo vulneratus sum.' },
        { term: 'incolumīs', gloss: 'unharmed, safe; plērīque milites incolumes sunt.' },
        { term: 'meminisse horream', gloss: 'I shudder to remember — horreō, to shudder, to bristle.' },
        { term: 'lēgātī', gloss: 'envoys; legati a Germanis missi ad castra venerunt.' },
        { term: 'Tibullus', gloss: 'the poet Tibullus, who praised country life and condemned war.' },
      ],
    },
  ],
  grammar: [
    {
      id: 'coniunctivus-plusquamperfecti',
      latinTitle: 'Coniūnctīvus Plusquamperfēctī',
      title: 'The Pluperfect Subjunctive',
      intro:
        'The pluperfect subjunctive (laudavissem, paruissem, scripsissem, audivissem) is the “had ...ed” form ' +
        'of the subjunctive. It is used in indirect questions and in contrary-to-fact conditions about the past.',
      paradigms: [
        {
          caption: 'coniūnctīvus plusquamperfecti āctīvī — terminationes',
          head: ['', 'Singulāris', 'Plūrālis'],
          rows: [
            ['persōna prīma', '-īssem (laudāvissem)', '-īssēmus (laudāvissēmus)'],
            ['persōna secunda', '-īssēs (laudāvissēs)', '-īssētis (laudāvissētis)'],
            ['persōna tertia', '-īsset (laudāvisset)', '-īssent (laudāvissent)'],
          ],
        },
        {
          caption: 'laudāre — coniūnctīvus plusquamperfecti āctīvus',
          head: ['', 'Singulārīs', 'Plūrālīs'],
          rows: [
            ['persōna prīma', 'laudāvissem — I had praised', 'laudāvissēmus — we had praised'],
            ['persōna secunda', 'laudāvissēs — you had praised', 'laudāvissētis — you had praised'],
            ['persōna tertia', 'laudāvisset — he/she had praised', 'laudāvissent — they had praised'],
          ],
        },
        {
          caption: 'laudāre — coniūnctīvus plusquamperfecti passīvus',
          head: ['', 'Singulāris', 'Plūrālis'],
          rows: [
            ['persōna prīma', 'laudātus essem — I had been praised', 'laudātī essēmus — we had been praised'],
            ['persōna secunda', 'laudātus essēs — you had been praised', 'laudātī essētis — you had been praised'],
            ['persōna tertia', 'laudātus esset — he had been praised', 'laudātī essent — they had been praised'],
          ],
        },
        {
          caption: 'formatio: īnfīnītīvus perfectī → coniūnctīvus plusquamperfecti',
          head: ['Īnfīnītīvus perfectī', 'Coniūnctīvus plusquamperfecti', 'Significātiō'],
          rows: [
            ['recitāvisse', 'recitāvisset', 'he/she had recited'],
            ['pāruisse', 'pāruisset', 'he/she had obeyed'],
            ['scrīpsisse', 'scrīpsisset', 'he/she had written'],
            ['audīvisse', 'audīvisset', 'he/she had heard'],
          ],
        },
        {
          caption: 'in quaestionibus indirectis et sententiis condicionalibus',
          head: ['Exemplum', 'Significātiō'],
          rows: [
            ['Iūlius dubitābat num magister Mārcum laudāvisset.', 'Iūlius wondered whether the master had praised Mārcus.'],
            ['Pater fīlium interrogāvit num bonus discipulus fuisset.', 'The father asked his son whether he had been a good pupil.'],
            ['Sī bonus discipulus fuissēs, magister tē laudāvisset.', 'If you had been a good pupil, the master would have praised you.'],
            ['Etiam sī industrius fuissem, magister mē nōn laudāvisset.', 'Even if I had been diligent, the master would not have praised me.'],
          ],
        },
      ],
      points: [
        'Take the perfect infinitive, drop -isse, and add -issem, -isses, -isset, -issemus, -issetis, -issent: paravisse → paravissem.',
        'In an indirect question the subjunctive reports someone else’s question: Iūlius dubitabat num magister Mārcum laudavisset — Iūlius wondered whether the master had praised Mārcus.',
        'In a past contrary-to-fact condition both clauses take the pluperfect subjunctive: si bonus discipulus fuisses, magister te laudavisset — if you had been a good pupil, the master would have praised you.',
        'The passive is made with the perfect participle and essem, esses, esset, essemus, essetis, essent: laudatus essem — I had been praised.',
      ],
    },
    {
      id: 'imperativus-futuri',
      latinTitle: 'Imperātīvus Futūrī',
      title: 'The Future Imperative',
      intro:
        'The future imperative (pugnato! pugnatote!) gives a command meant to last — “you shall ... from now ' +
        'on”. It ends in -to in the singular and -tote in the plural.',
      paradigms: [
        {
          caption: 'imperātīvus futūrī — pugnāre',
          head: ['', 'Singulāris', 'Plūrālis'],
          rows: [
            ['imperātīvus futūrī', 'pugnātō! — you shall fight!', 'pugnātōte! — you shall all fight!'],
          ],
        },
        {
          caption: 'exempla',
          head: ['Singulāris', 'Plūrālis', 'Significātiō'],
          rows: [
            ['estō!', 'ēstote!', 'be! (from now on)'],
            ['pārētō!', 'pārētōte!', 'obey! (from now on)'],
            ['audītō!', 'audītōte!', 'listen! (from now on)'],
            ['recitātō!', 'recitātōte!', 'recite! (from now on)'],
            ['scrībitō!', 'scrībitōte!', 'write! (from now on)'],
          ],
        },
      ],
      points: [
        'The future imperative is formed from the present stem plūs -to (singular) and -tote (plural): pugna- → pugnato, pugnatote.',
        'It means much the same as the ordinary imperative (pugna! pugnate!), but it is used for standing orders, rules, laws and wills.',
        'The future imperative of esse is irregular: estō! (singular), estote! (plural) — “be!”',
        'Magister: Posthāc bonus discipulus estō, puer! — “From now on you shall be a good pupil, boy!”',
      ],
    },
  ],
  vocabulary: [
    { latin: 'exercitus', english: 'army', pos: 'noun (m.)' },
    { latin: 'legiō', english: 'legion', pos: 'noun (f.)' },
    { latin: 'cohors', english: 'cohort', pos: 'noun (f.)' },
    { latin: 'mīles', english: 'soldier', pos: 'noun (m.)' },
    { latin: 'auxilium', english: 'help; (pl.) auxiliary troops', pos: 'noun (n.)' },
    { latin: 'pedes', english: 'foot-soldier', pos: 'noun (m.)' },
    { latin: 'eques', english: 'horseman', pos: 'noun (m.)' },
    { latin: 'arma', english: 'arms, weapons', pos: 'noun (n.)' },
    { latin: 'signum', english: 'standard, sign', pos: 'noun (n.)' },
    { latin: 'aquila', english: 'eagle', pos: 'noun (f.)' },
    { latin: 'agmen', english: 'marching column', pos: 'noun (n.)' },
    { latin: 'aciēs', english: 'battle-line', pos: 'noun (f.)' },
    { latin: 'proelium', english: 'battle', pos: 'noun (n.)' },
    { latin: 'hostis', english: 'enemy', pos: 'noun (m.)' },
    { latin: 'dux', english: 'leader, commander', pos: 'noun (m.)' },
    { latin: 'imperātor', english: 'commander, general', pos: 'noun (m.)' },
    { latin: 'castra', english: 'camp', pos: 'noun (n.)' },
    { latin: 'vāllum', english: 'rampart', pos: 'noun (n.)' },
    { latin: 'fossa', english: 'ditch', pos: 'noun (f.)' },
    { latin: 'bellum', english: 'war', pos: 'noun (n.)' },
    { latin: 'pāx', english: 'peace', pos: 'noun (f.)' },
    { latin: 'victōria', english: 'victory', pos: 'noun (f.)' },
    { latin: 'vulnus', english: 'wound', pos: 'noun (n.)' },
    { latin: 'tabellārius', english: 'courier, letter-carrier', pos: 'noun (m.)' },
    { latin: 'epistula', english: 'letter', pos: 'noun (f.)' },
    { latin: 'lēgātus', english: 'envoy', pos: 'noun (m.)' },
    { latin: 'pugnō', english: 'to fight', pos: 'verb' },
    { latin: 'oppugnō', english: 'to attack', pos: 'verb' },
    { latin: 'vincō', english: 'to conquer, defeat', pos: 'verb' },
    { latin: 'caedō', english: 'to kill, cut down', pos: 'verb' },
    { latin: 'īnstruō', english: 'to draw up, arrange', pos: 'verb' },
    { latin: 'sustineō', english: 'to withstand, hold out', pos: 'verb' },
    { latin: 'dēfendō', english: 'to defend', pos: 'verb' },
    { latin: 'vulnerō', english: 'to wound', pos: 'verb' },
    { latin: 'cōnsōlor', english: 'to comfort', pos: 'verb' },
    { latin: 'dēspiciō', english: 'to despise, look down on', pos: 'verb' },
    { latin: 'idōneus', english: 'suitable, fit', pos: 'adjective' },
    { latin: 'incolumis', english: 'unharmed, safe', pos: 'adjective' },
    { latin: 'gravis', english: 'heavy, serious', pos: 'adjective' },
    { latin: 'tūtus', english: 'safe', pos: 'adjective' },
    { latin: 'fortiter', english: 'bravely', pos: 'adverb' },
    { latin: 'nisi', english: 'unless, if not', pos: 'conjunction' },
    { latin: 'trāns', english: 'across', pos: 'preposition' },
    { latin: 'plūsquamperfectum', english: 'pluperfect', pos: 'noun (n.)' },
    { latin: 'coniūnctīvus', english: 'subjunctive', pos: 'noun (m.)' },
  ],
  pensa: [
    {
      id: 'pensum-c',
      latinLabel: 'PĒNSVM C',
      title: 'Answer in Latin',
      instruction: 'Answer each question with a full Latin sentence, then reveal the model answer.',
      type: 'questions',
      items: [
        {
          q: 'Quae arma gerunt auxilia?',
          a: 'Auxilia arma leviōra gerunt, sīcut arcus sagittāsque.',
        },
        {
          q: 'Quid est signum legiōnis?',
          a: 'Signum legiōnis est aquilā argenteā.',
        },
        {
          q: 'Quōmodo mīlitēs in aciem īnstruuntur?',
          a: 'Cohortēs in trēs ōrdinēs īnstruuntur; exercitus ita īnstrūctus aciēs appellātur.',
        },
        {
          q: 'Ad quod studium pater Aemilium hortābātur?',
          a: 'Pater Aemilium ad studium litterārum hortābātur.',
        },
        {
          q: 'Quō Aemilius adulēscēns missus est?',
          a: 'Aemilius adulēscēns in Germāniam ad exercitum Rōmānum missus est.',
        },
        {
          q: 'Cūr Aemilius epistulās legēns permovētur?',
          a: 'Aemilius epistulās legēns permovētur, quia patriam et amīcōs suōs dēsīderat.',
        },
        {
          q: 'Quamobrem ipse paucās epistulās scrīpsit?',
          a: 'Paucās epistulās scrīpsit, quod in scrībendō neglegēns erat et vix tempus habēbat.',
        },
        {
          q: 'Quī nūntius nocte in castrā allātus est?',
          a: 'Nūntiātum est magnum hostium numerum flūmen trānsīsse et adversus castra nostra prōgredī.',
        },
        {
          q: 'Cūr hostēs castra Rōmāna nōn expugnāvērunt?',
          a: 'Hostēs castra Rōmāna nōn expugnāvērunt, quia mīlitēs parātī erant ad eā dēfendenda et ab nostrīs vīctī sunt.',
        },
        {
          q: 'Num Tibullus vītam mīlitārem laudat?',
          a: 'Tibullus vītam mīlitārem nōn laudat, sed eam dēspicit.',
        },
      ],
    },
  ],
}

export default chapter