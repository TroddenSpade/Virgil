// Capitulum XXII — Cave Canem
// Sources: Ørberg, Lingua Latina per se Illustrata, Pars I: Familia Romana (2nd ed.)
// Reading text, grammar and exercises adapted and re-typeset for the web.

const chapter = {
  number: 22,
  roman: 'XXII',
  slug: 'cave-canem',
  latinTitle: 'CAVĒ CANEM',
  title: 'Beware of the Dog',
  tagline:
    'A doorkeeper, a chained dog, and a postman who will not be kept out — plūs the supine.',
  status: 'complete',
  overview:
    'The door of the vīlla has two leaves and a threshold with SALVĒ written on it, and the iānitor ' +
    'guards it together with a dog as fierce as a wolf. When the postman Tlepolemus arrives out of ' +
    'the rain, the doorkeeper dawdles and the dog breaks its chain; the messenger is barked at, ' +
    'terrified and mocked before he can hand over his letter. Through the story you meet the supine: ' +
    'the form in -tum that names a purpose after verbs of going (lavatum eunt) and the form in -tu ' +
    'used with facilis and difficilis (facile dictu).',
  objectives: [
    'Read the story of the doorkeeper and the postman aloud.',
    'Recognise and form the supine in -tum after verbs of motion: ire, venire, mittere.',
    'Recognise the supine in -tu with adjectives such as facilis and difficilis.',
    'Learn the vocabulary of the Roman door, its hinge, chain and materials.',
    'Follow a dialogue and answer questions about what the characters do and say.',
  ],
  readings: [
    {
      id: 'ianua-et-ostiarius',
      latinTitle: 'IĀNVA ET ŌSTIĀRIVS',
      title: 'The Door and the Doorkeeper',
      paragraphs: [
        'Iānua vīllae ē duābus foribus cōnstat. Sub foribus est līmen, in quō SALVĒ scrīptum est. ' +
          'Foris duōs cardinēs habet, in quibus vertī potest; cum foris in cardinibus vertitur, iānua aperītur aut clauditur.',
        'Servus cuius officium est forēs aperīre et claudere ac vīllam dominī cūstōdīre, ōstiārius vel iānitor appellātur.',
        'Sī quis vīllam intrāre vult, iānuam pulsat et extrā iānuam exspectat, dum iānitor forēs aperit eumque in vīllam admittit. ' +
          'Iānitor intrā iānuam sedet cum cane, quī prope tam ferōx est quam lupus; itaque necesse est eum catēnā vincīre. ' +
          'Anteā dominī sevērī nōn sōlum canēs, sed etiam iānitōrēs suōs catēnīs vinciēbant.',
        'Catēnā quā canis vincitur ex ferrō facta est. Catēna cōnstat ē multīs ānulīs ferreīs, quī inter sē coniunguntur. ' +
          'Ānulī, quibus digitī ōrnantur, nōn ex ferrō, sed ex aurō factī sunt. Aurum est magnī pretiī sīcut gemmae. ' +
          'Ānulus aureus multō pulchrior est quam ānulus ferreus.',
        'Forēs ē lignō factae sunt sīcut tabulae. Lignum est māteria dūra, sed minus dūra quam ferrum. ' +
          'Quī rēs ferreās vel ligneās facit, faber appellātur. Deus fabrōrum est Vulcānus.',
      ],
      notes: [
        { term: 'iānua / foris', gloss: 'the door / a door-leaf; fores (pl.) = the double doors.' },
        { term: 'cardō', gloss: 'a hinge — the foris turns (vertitur) on its cardines.' },
        { term: 'līmen', gloss: 'the threshold, the stone under the door.' },
        { term: 'ōstiārius / iānitor', gloss: 'the doorkeeper; iānitor is the commoner word.' },
        { term: 'catēnā / vincīre', gloss: 'a chain / to chain, to tie up.' },
        { term: 'ānulus', gloss: 'a (finger-)ring; a chain is many ānulī joined together.' },
        { term: 'faber', gloss: 'a craftsman, a smith — one who works in iron or wood.' },
        { term: 'tam ... quam', gloss: 'as ... as: tam ferōx quam lupus = as fierce as a wolf.' },
      ],
    },
    {
      id: 'tabellarius-ad-ianuam',
      latinTitle: 'TABELLĀRIVS AD IĀNVAM',
      title: 'The Postman at the Door',
      paragraphs: [
        'Iānua clausa est. Iānitor, quī forēs clausit postquam Mārcus intrāvit, iam rūrsus dormit! ' +
          'Iānitōre dormiente, canis vigilāns iānuam cūstōdit.',
        'Extrā forēs stat tabellārius (sīc appellātur servus quī epistulās fert, nam anteā in tabellīs scrībēbantur epistulae). ' +
          'Is baculō ligneō forēs pulsat atque clāmat: "Heus! Aperī hanc iānuam! Num quis hīc est? Num quis hanc aperit iānuam? Heus tū, iānitor! Quīn aperīs? Dormīsne?"',
        'Cānē lātrante iānitor ē somnō excitātur. Tabellārius iterum forēs pulsat magnā vōce clāmāns: ' +
          '"Heus, iānitor! Quīn mē admittis? Putāsne mē hostem esse? Ego nōn veniō vīllam oppugnātum sīcut hostis, nec pecūniam postulātum veniō."',
        'Tandem surgit iānitor. "Quis forēs nostrās sīc pulsat?" inquit. ' +
          'Tabellārius (extrā iānuam): "Ego pulsō." Iānitor (intrā iānuam): "Quis \'ego\'? Quid est tibi nōmen? Unde venīs? Quid vīs aut quem quaeris?"',
        'Tabellārius: "Multa simul rogitās. Admitte mē! Posteā respondēbō ad omnia." ' +
          'Iānitor: "Respondē prius! Posteā admittēris."',
        'Tabellārius: "Nōmen meum nōn est facile dictū: Tlēpolemus nōminor." ' +
          'Iānitor: "Quid dīcis? Cleopolimus? Vōx tua difficilis est audītū, quod forēs intersunt." ' +
          'Tabellārius: "Mihi nōmen est Tlēpolemus, sīcut iam dictum est. Tusculō veniō. Erum tuum quaerō."',
        'Iānitor: "Sī erum salūtātum venīs, melius est aliō tempore venīre, nam hāc hōrā erus meus dormītum īre solet: ' +
          'post brevem somnum ambulātum exībit, deinde lāvātum ībit." ' +
          'Tlēpolemus: "Sī quis per hunc imbrem ambulat, nōn opus est posteā lavātum īre! At nōn veniō salūtātum. Tabellārius sum."',
      ],
      notes: [
        { term: 'tabellārius', gloss: 'the letter-carrier, "postman" (from tabella, a writing-tablet).' },
        { term: 'quīn ...?', gloss: 'why not ...? a brisk way of urging someone to act.' },
        { term: 'veniō oppugnātum / postulātum', gloss: 'I come to attack / to demand — supines in -tum showing purpose.' },
        { term: 'salūtātum vēnīs', gloss: 'you come to greet (the master) — supine after venire.' },
        { term: 'dormītum / ambulātum / lavātum īre', gloss: 'to go to sleep / to walk / to bathe — more supines of purpose.' },
        { term: 'facile dictū', gloss: 'easy to say — the supine in -tu.' },
        { term: 'difficilis audītū', gloss: 'hard to hear — supine in -tu with difficilis.' },
        { term: 'imber', gloss: 'a rain-shower, a downpour.' },
      ],
    },
    {
      id: 'canis-ferox',
      latinTitle: 'CANIS FERŌX',
      title: 'The Fierce Dog',
      paragraphs: [
        'Tandem iānitor forēs aperit et Tlēpolemum foris in imbre stantem videt. ' +
          'Canis īrātus dentēs ostendit ac fremit: "Rrrr...!" nec vērō tabellārium mordēre potest, quod catēna retinētur. ' +
          'Iānitor: "Cave! Canis tē mordēbit!" Sīc iānitor hominem intrantem dē cane ferōcī monet.',
        'Tlēpolemus in līmine resistēns "Retinē canem!" inquit, "Nōlī eum solvere! Nec vērō opus est mē monēre dē cane, ego enim legere sciō." ' +
          'Tabellārius sōlum intrā līmen aspicit, ubi CAVĒ CANEM scrīptum est īnfrā imāginem canis ferōcis. ' +
          '"Neque haec imāgō neque canis vērus mē terret!" inquit, et propius ad canem accēdit.',
        '"Manē foris!" inquit iānitor, "Nōlī ad hunc canem accēdere! Iam tē monuī!" ' +
          'Tabellārius vērō, quamquam sīc ā iānitōre monitus est, alterum gradum ad canem versus facit — ' +
          'sed ecce canis in eum salit catēnam rumpēns! Homō territus ex ōstiō cēdere cōnātur, sed canis īrātus pallium eius dentibus prehendit et tenet.',
        '"Eī! Canis mē mordet!" exclāmat tabellārius, quī iam neque recēdere neque prōcēdere audet: canis fremēns eum locō sē movēre nōn sinit. ' +
          'Iānitor rīdēns "Quīn prōcēdis?" inquit, "Nōlī resistere! Ego tē intrāre sinō. Iānuam aperuī. Prōcēde in vīllam!" Sīc iānitor virum territum dērīdet.',
        '"Id facilius est dictū quam factū" inquit tabellārius, atque alterum gradum facere audet, ' +
          'sed canis statim in pedēs posteriōrēs surgit atque pedēs priōrēs in pectore eius pōnit! ' +
          'Tabellārius, tōtō corpore tremēns, ex ōstiō cēdit: sīc canis eum ē vīllā pellit. ' +
          '"Removē canem!" inquit ille, "Iste canis ferōx mē intrāre nōn sinit."',
        'Iānitor eum tremere animadvertit iterumque dērīdet: "Quid tremis? Hīcine canis tē terruit?" ' +
          'Tlēpolemus: "Nōlī putāre mē ab istō cane territum esse. Sī tremō, nōn propter canem ferōcem, sed propter frīgidum tremō. ' +
          'Admitte mē sub tēctum, iānitor, amābō tē! Vincī istum canem ferōcem! Cūr eum solvistī?"',
        'Tabellārius enim canem ā iānitōre solūtum esse arbitrātur. Iānitor catēnam manū prehendit canemque paulum ā tabellāriō removet. ' +
          '"Nōlī arbitrārī" inquit "mē canem solvisse. Canis ipse catēnam suam rūpit. Ecce catēna rupta."',
        'Tlēpolemus: "Num canis catēnam ferream rumpere potest? Id nōn crēdō. At certē vestem scindere potuit: ' +
          'pallium meum novum, quod nūper magnō pretiō ēmī, scissum esse ā cane tuō?" ' +
          'Iānitor: "Istud pallium nōn est magnī pretiī, neque id nūper ēmptum esse crēdō. Sed quid tū vēnistī? Num quid tēcum fers?"',
        'Tlēpolemus: "Stultē rogitās, iānitor, nam iam tibi dīxī \'tabellārium mē esse\'. Quid tabellāriōs ferre arbitrāris? Aureōsne iānitōribus? ' +
          'Profectō nōs aurum nōn ferimus." Iānitor: "Vōs scīlicet epistulās fertis." ' +
          'Tlēpolemus: "Rēctē dīcis. Epistulam afferō ad Lūcium Iūlium Balbum. Hōcine erō tuō nōmen est?"',
        'Iānitor: "Est. Quīn mihi istam epistulam dās?" ' +
          'Tlēpolemus: "Prius vincī canem et sine mē intrāre! Nōlī iterum mē forās in imbrem pellere!" ' +
          'Iānitor, postquam canem vīnxit, "Nōn ego" inquit, "sed hic canis tē forās pepulit. Nōlī nārrāre \'tē ā iānitōre forās pulsum esse\'!"',
        'Cane vīnctō, tabellārius tandem intrat epistulamque ostendit iānitōrī; quī statim epistulam prehendit et in ātrium ad dominum suum fert.',
      ],
      notes: [
        { term: 'Cave! / Cave canem!', gloss: 'look out! / beware of the dog! (the warning on the mosaic).' },
        { term: 'mordēre', gloss: 'to bite.' },
        { term: 'pallium', gloss: 'a cloak, a mantle.' },
        { term: 'tremere', gloss: 'to tremble, to shake with fear or cold.' },
        { term: 'dērīdēre', gloss: 'to laugh at, to mock.' },
        { term: 'arbitrārī', gloss: 'to think, to suppose.' },
        { term: 'scindere', gloss: 'to tear, to split.' },
        { term: 'pretium', gloss: 'price, value: magnī pretii = of great value.' },
      ],
    },
  ],
  grammar: [
    {
      id: 'supinum',
      latinTitle: 'Supīnum',
      title: 'The Supine',
      intro:
        'The supine is a verbal noun — the fourth part of the verb’s principal parts. It has two ' +
        'forms: one in -tum that tells you the purpose of a coming or sending, and one in -tu that ' +
        'goes with facilis and difficilis.',
      paradigms: [
        {
          caption: 'Supīnum I: the form in -tum (purpose, after verbs of motion)',
          head: ['Verbum', 'Supīnum', 'Exemplum'],
          rows: [
            ['salūtāre', 'salūtātum', 'Amīcī salūtātum veniunt. — Friends come to greet.'],
            ['lavāre', 'lavātum', 'Rōmānī cotīdiē lavātum eunt. — Romans go to bathe every day.'],
            ['dormīre', 'dormītum', 'Vesperī omnēs dormītum eunt. — In the evening all go to sleep.'],
            ['ambulāre', 'ambulātum', 'Erus post somnum ambulātum exībit. — After his nap the master will go out to walk.'],
            ['oppugnāre', 'oppugnātum', 'Mīlitēs oppidum oppugnātum mittuntur. — Soldiers are sent to storm the town.'],
            ['ēmerē', 'ēmptum', 'Mēdus et Lȳdia ad tabernam eunt ānulum ēmptum. — They go to the shop to buy a ring.'],
            ['postulāre', 'postulātum', 'Nec pecūniam postulātum veniō. — Nor do I come to demand money.'],
          ],
        },
        {
          caption: 'Supīnum II: the form in -tu (with facilis, difficilis, and a few others)',
          head: ['Verbum', 'Supīnum', 'Exemplum'],
          rows: [
            ['dīcere', 'dictū', 'Nōmen meum nōn est facile dictū. — My name is not easy to say.'],
            ['facere', 'factū', 'Id facilius est dictū quam factū. — That is easier to say than to do.'],
            ['audīre', 'audītū', 'Vōx tua difficilis est audītū. — Your voice is hard to hear.'],
          ],
        },
      ],
      points: [
        'The supine is the fourth principal part of the verb: laudō, laudāre, laudavi, laudatum.',
        'The supine in -tum expresses purpose and follows verbs of going and sending: ire, venire, mittere.',
        'The supine in -tu works like an ablative with facilis, difficilis and a few other adjectives: facile dictu = easy to say.',
        'Do not confuse the supine in -tum with the neuter past participle; both look alike (emptum), but only the supine means "to buy / for buying".',
      ],
    },
  ],
  vocabulary: [
    { latin: 'iānua', english: 'door', pos: 'noun (f.)' },
    { latin: 'foris', english: 'door, door-leaf; (pl.) doors', pos: 'noun (f.)' },
    { latin: 'cardō', english: 'hinge', pos: 'noun (m.)' },
    { latin: 'līmen', english: 'threshold', pos: 'noun (n.)' },
    { latin: 'ōstiārius', english: 'doorkeeper', pos: 'noun (m.)' },
    { latin: 'iānitor', english: 'doorkeeper, porter', pos: 'noun (m.)' },
    { latin: 'canis', english: 'dog', pos: 'noun (m.)' },
    { latin: 'lupus', english: 'wolf', pos: 'noun (m.)' },
    { latin: 'catēna', english: 'chain', pos: 'noun (f.)' },
    { latin: 'ānulus', english: 'ring', pos: 'noun (m.)' },
    { latin: 'aurum', english: 'gold', pos: 'noun (n.)' },
    { latin: 'ferrum', english: 'iron', pos: 'noun (n.)' },
    { latin: 'lignum', english: 'wood', pos: 'noun (n.)' },
    { latin: 'māteria', english: 'material, matter', pos: 'noun (f.)' },
    { latin: 'faber', english: 'craftsman, smith', pos: 'noun (m.)' },
    { latin: 'Vulcānus', english: 'Vulcan, god of smiths', pos: 'noun (m.)' },
    { latin: 'tabellārius', english: 'postman, letter-carrier', pos: 'noun (m.)' },
    { latin: 'epistula', english: 'letter', pos: 'noun (f.)' },
    { latin: 'baculum', english: 'stick, staff', pos: 'noun (n.)' },
    { latin: 'vōx', english: 'voice', pos: 'noun (f.)' },
    { latin: 'imber', english: 'rain, rain-shower', pos: 'noun (m.)' },
    { latin: 'pallium', english: 'cloak, mantle', pos: 'noun (n.)' },
    { latin: 'pretium', english: 'price, value', pos: 'noun (n.)' },
    { latin: 'ātrium', english: 'atrium, hall', pos: 'noun (n.)' },
    { latin: 'dominus', english: 'master, lord', pos: 'noun (m.)' },
    { latin: 'servus', english: 'slave', pos: 'noun (m.)' },
    { latin: 'mordēre', english: 'to bite', pos: 'verb' },
    { latin: 'lātrāre', english: 'to bark', pos: 'verb' },
    { latin: 'vincīre', english: 'to chain, tie up', pos: 'verb' },
    { latin: 'cūstōdīre', english: 'to guard', pos: 'verb' },
    { latin: 'aperīre', english: 'to open', pos: 'verb' },
    { latin: 'claudere', english: 'to close, shut', pos: 'verb' },
    { latin: 'admittere', english: 'to let in, admit', pos: 'verb' },
    { latin: 'exspectāre', english: 'to wait (for)', pos: 'verb' },
    { latin: 'pulsāre', english: 'to knock, strike', pos: 'verb' },
    { latin: 'solvere', english: 'to untie, loosen', pos: 'verb' },
    { latin: 'rumpere', english: 'to break, burst', pos: 'verb' },
    { latin: 'scindere', english: 'to tear, split', pos: 'verb' },
    { latin: 'pellere', english: 'to drive (out)', pos: 'verb' },
    { latin: 'terrēre', english: 'to frighten', pos: 'verb' },
    { latin: 'tremere', english: 'to tremble', pos: 'verb' },
    { latin: 'dērīdēre', english: 'to mock, laugh at', pos: 'verb' },
    { latin: 'arbitrārī', english: 'to think, suppose', pos: 'verb' },
    { latin: 'ferre', english: 'to carry, bring', pos: 'verb' },
    { latin: 'supīnum', english: 'supine', pos: 'noun (n.)' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PĒNSVM A',
      title: 'Fill in the endings',
      instruction: 'Complete each word with the correct ending of the supine.',
      type: 'fill',
      items: [
        'Hōra nōna erus ambulā{{tum}} īre solet. Tabellāriī nōn mittuntur pecūniam postulā{{tum}}. ' +
          'Hostēs castra expugnā{{tum}} veniunt. Multī barbarī Rōmam veniunt habitā{{tum}}.',
        "Syra: 'Verba medicī difficilia sunt audī{{tū}}.' Ea rēs est facilis dic{{tū}}. " +
          'Nōmen barbarum difficile est dic{{tū}}. Multa sunt faciliōra dic{{tū}} quam fac{{tū}}.',
        'Rōmānī cotīdiē lavā{{tum}} eunt; vesperī omnēs dormī{{tum}} eunt. ' +
          'Mēdus et Lȳdia ad tabernam eunt ānulum ēmp{{tum}}. Nōmen meum nōn est facile dic{{tū}}.',
      ],
    },
  ],
}

export default chapter
