// Capitulum X — CALLISTO
// Source: Goldman & Nyenhuis, Latin via Ovid: A First Course (2nd ed., 1982)
// Reading text, vocabulary, grammar and exercises adapted for the web.

const chapter = {
  number: 10,
  roman: 'X',
  slug: 'callisto-2',
  latinTitle: 'CALLISTO',
  title: 'Callisto (Part 2)',
  tagline:
    'Juno punishes Callisto by turning her into a bear; years later her son Arcas nearly kills her, until Jupiter sets them both in the sky.',
  status: 'complete',
  overview:
    'Juno’s jealousy brings the story of Callisto to its climax. She transforms the nymph into a bear, though her human ' +
    'feelings remain; fifteen years later her son Arcas, now a hunter, meets the bear in the woods and is about to kill ' +
    'her when Jupiter prevents the matricide and places mother and son among the stars. The chapter completes the ' +
    'perfect tense with irregular first conjugation verbs, special second conjugation stems, and the perfect of sum, ' +
    'adsum and absum.',
  objectives: [
    'Read the conclusion of the story of Callisto in Latin.',
    'Form the perfect of dō, stō and iuvō.',
    'Learn special perfect stems of second conjugation verbs.',
    'Use the perfect of sum, adsum and absum.',
    'Recognise the cardinal numbers from thirteen to nineteen.',
  ],
  readings: [
    {
      id: 'callisto',
      latinTitle: 'CALLISTO',
      title: 'Callisto',
      paragraphs: [
        'Iūnō rēgīna deōrum erat maximē īrāta. Tempus idōneum poenīs exspectāvit. Ubi puer Arcas nymphae nātus est, Iūnō dīxit: “Causa nūlla morae est. Vidē iniūriam meam, adultera! Sed Iuppiter abest. Tē nōn servābit. Figūram pulchram tuam mūtābō.”',
        'Dīxit et capillōs nymphae tenuit et eam prōnam in terram strāvit. Cum misera Callistō supplex bracchia tendēbat, bracchia villīs horrēscēbant. Nūlla verba in nymphā mānsērunt; sōlum vōx rauca. Callistō nunc est ursa fera, sed sēnsa hūmāna in ursā manent. Ā! Quotiēns in agrīs ōlim suīs errāvit! Ā! Quotiēns ea, territa, virōs et animālia fera in silvīs fugitāvit, ipsa animal.',
        'Ecce Arcas, post ter quīnque (quīndecim) annōs, paene vir. Est vēnātor et saepe in silvā adest. Dum animālia fera vēnātur Arcas ursam videt. Ursa est Callistō et fīlium suum recognōscit. Arcas oculōs immōtōs eius ēvītat et ursam iaculō necāre temptat. Sed Iuppiter omnipotēns erat fīliō benignus. Mātrīcīdium prohibuit. Ursam et fīlium eius in caelum, stellās vīcīnās, trānsportāvit.',
      ],
      notes: [
        { term: 'tempus idōneum poenīs', gloss: 'a suitable time for punishments; idōneus takes the dative.' },
        { term: 'nātus est', gloss: 'was born; literally “was born to the nymph,” the dative nymphae.' },
        { term: 'adultera', gloss: 'adulteress — Juno’s insult to Callisto.' },
        { term: 'prōnam in terram strāvit', gloss: 'threw her down prone on the ground.' },
        { term: 'supplex', gloss: 'as a suppliant, pleading; a noun and adjective of the third declension.' },
        { term: 'villīs horrēscēbant', gloss: 'grew rough with shaggy hair; villus, -ī, m., shaggy hair.' },
        { term: 'sēnsa hūmāna', gloss: 'human feelings; sēnsa is a plural neuter noun.' },
        { term: 'quotiēns', gloss: 'how often, how many times.' },
        { term: 'ipsa animal', gloss: 'herself an animal — emphatic apposition.' },
        { term: 'ter quīnque', gloss: 'three times five, i.e. fifteen.' },
        { term: 'immōtōs oculōs', gloss: 'unmoving eyes — he does not recognise his mother.' },
        { term: 'mātrīcīdium', gloss: 'matricide, the killing of one’s mother.' },
        { term: 'stellās vīcīnās', gloss: 'neighbouring stars — in apposition to caelum.' },
      ],
    },
  ],
  grammar: [
    {
      id: 'numeri-13-19',
      latinTitle: 'Numerī 13–19',
      title: 'Cardinal Numbers 13–19',
      intro:
        'The numbers from thirteen to nineteen are indeclinable. Thirteen to seventeen are compounds of three to seven ' +
        'with ten; eighteen and nineteen are usually expressed by subtracting one and two from twenty.',
      paradigms: [
        {
          caption: 'cardinal numbers 13–19',
          head: ['', 'Latīnē', 'Rōmānē'],
          rows: [
            ['13', 'tredecim', 'XIII'],
            ['14', 'quattuordecim', 'XIV'],
            ['15', 'quīndecim', 'XV'],
            ['16', 'sēdecim', 'XVI'],
            ['17', 'septendecim', 'XVII'],
            ['18', 'duodēvīgintī', 'XVIII'],
            ['19', 'ūndēvīgintī', 'XIX'],
          ],
        },
      ],
      points: [
        'tredecim, quattuordecim, quīndecim, sēdecim and septendecim are obvious compounds of the units and decem.',
        'duodēvīgintī means “two from twenty”; ūndēvīgintī means “one from twenty.”',
        'Post-classical Latin also allowed octōdecim for eighteen.',
      ],
    },
    {
      id: 'perfectum-primae-irregulare',
      latinTitle: 'Perfectum Prīmae Coniugātiōnis',
      title: 'Special Perfects of the First Conjugation',
      intro:
        'The first conjugation is regular in all tenses, but dō, stō and iuvō have special perfect forms. ' +
        'Their perfect stems are ded-, stet- and iūv-.',
      paradigms: [
        {
          caption: 'dō, stō, iuvō in the perfect',
          head: ['', 'dō, dare', 'stō, stāre', 'iuvō, iuvāre'],
          rows: [
            ['1 sg.', 'dedī', 'stetī', 'iūvī'],
            ['2 sg.', 'dedistī', 'stetistī', 'iūvistī'],
            ['3 sg.', 'dedit', 'stetit', 'iūvit'],
            ['1 pl.', 'dedimus', 'stetimus', 'iūvimus'],
            ['2 pl.', 'dedistis', 'stetistis', 'iūvistis'],
            ['3 pl.', 'dedērunt', 'stetērunt', 'iūvērunt'],
          ],
        },
      ],
      points: [
        'dō, dare, dedī, datum — give; the stem vowel is short throughout the present system except in dās.',
        'stō, stāre, stetī, statum — stand.',
        'iuvō, iuvāre, iūvī, iūtum — help, aid.',
      ],
    },
    {
      id: 'perfectum-secundae',
      latinTitle: 'Perfectum Secundae Coniugātiōnis',
      title: 'Special Perfect Stems of the Second Conjugation',
      intro:
        'Many second conjugation verbs do not follow the regular -uī pattern. The third principal part must be learned ' +
        'with each verb, and the perfect endings are added to that stem.',
      paradigms: [
        {
          caption: 'special perfect stems',
          head: ['Praesēns', 'Īnfīnītīvus', 'Perfectum', 'Significātiō'],
          rows: [
            ['videō', 'vidēre', 'vīdī', 'I saw'],
            ['maneō', 'manēre', 'mānsī', 'I remained'],
            ['respondeō', 'respondēre', 'respondī', 'I replied'],
            ['teneō', 'tenēre', 'tenuī', 'I held'],
            ['doceō', 'docēre', 'docuī', 'I taught'],
          ],
        },
      ],
      points: [
        'mānsī, mānsistī, mānsit, mānsimus, mānsistis, mānsērunt.',
        'The perfect endings are the same for every verb: -ī, -istī, -it, -imus, -istis, -ērunt.',
      ],
    },
    {
      id: 'perfectum-sum',
      latinTitle: 'Perfectum Esse',
      title: 'The Perfect of Sum',
      intro:
        'Sum is irregular in the perfect tense: its stem changes completely to fu-. The endings, however, are regular.',
      paradigms: [
        {
          caption: 'perfect of sum, esse',
          head: ['', 'Singulāris', 'Plūrālis'],
          rows: [
            ['1', 'fuī — I have been, I was', 'fuimus — we have been, we were'],
            ['2', 'fuistī — you have been, you were', 'fuistis — you have been, you were'],
            ['3', 'fuit — he has been, he was', 'fuērunt — they have been, they were'],
          ],
        },
      ],
      points: [
        'The perfect of sum is made from fu- plus the ordinary perfect endings.',
        'fuī may mean “I was,” “I have been,” or “I did be” according to context.',
      ],
    },
    {
      id: 'adsum-absum',
      latinTitle: 'Adsum et Absum',
      title: 'Adsum and Absum',
      intro:
        'Sum forms compounds with the prefixes ad- and ab-. Adsum means “I am present, I am near”; absum means ' +
        '“I am absent, I am away, I am lacking.” Both are conjugated like sum, but absum drops the -b- in its perfect stem: āfuī.',
      paradigms: [
        {
          caption: 'adsum and absum',
          head: ['Tempus', 'adsum', 'absum'],
          rows: [
            ['Praesēns', 'adsum, ades, adest', 'absum, abes, abest'],
            ['Imperfectum', 'aderam, aderās, aderat', 'aberam, aberās, aberat'],
            ['Futūrum', 'aderō, aderis, aderit', 'aberō, aberis, aberit'],
            ['Perfectum', 'adfuī, adfuistī, adfuit', 'āfuī, āfuistī, āfuit'],
          ],
        },
      ],
      points: [
        'Iuppiter abest — Jupiter is away.',
        'Arcas in silvā adest — Arcas is present in the wood.',
        'The perfect āfuī has lost the -b- of ab-, just as adfuī keeps the d- of ad-.',
      ],
    },
  ],
  vocabulary: [
    { latin: 'adultera, -ae', english: 'adulteress', pos: 'noun f.' },
    { latin: 'animal, -ālis', english: 'animal (pl. animālia)', pos: 'noun n.' },
    { latin: 'bracchium, -iī', english: 'arm, branch', pos: 'noun n.' },
    { latin: 'causa, -ae', english: 'cause, reason', pos: 'noun f.' },
    { latin: 'figūra, -ae', english: 'form, shape, figure', pos: 'noun f.' },
    { latin: 'iniūria, -ae', english: 'injury, hurt, wrong', pos: 'noun f.' },
    { latin: 'mātrīcīdium, -iī', english: 'matricide', pos: 'noun n.' },
    { latin: 'poena, -ae', english: 'punishment', pos: 'noun f.' },
    { latin: 'sēnsa, -ōrum', english: 'sense, feeling', pos: 'noun n. pl.' },
    { latin: 'tempus, -oris', english: 'time, times', pos: 'noun n.' },
    { latin: 'vēnātor, -ōris', english: 'hunter', pos: 'noun m.' },
    { latin: 'verbum, -ī', english: 'word', pos: 'noun n.' },
    { latin: 'villus, -ī', english: 'shaggy hair', pos: 'noun m.' },
    { latin: 'vōx, vōcis', english: 'voice', pos: 'noun f.' },
    { latin: 'absum, abesse, āfuī, āfutūrum', english: 'be absent, be away', pos: 'verb' },
    { latin: 'adsum, adesse, adfuī, adfutūrum', english: 'be present, be near', pos: 'verb' },
    { latin: 'exspectō, -āre, -āvī, -ātum', english: 'await, wait for', pos: 'verb' },
    { latin: 'fugitō, -āre, -āvī, -ātum', english: 'flee, avoid, shun', pos: 'verb' },
    { latin: 'horrēscō, -ere, horruī', english: 'grow rough', pos: 'verb' },
    { latin: 'servō, -āre, -āvī, -ātum', english: 'save, protect', pos: 'verb' },
    { latin: 'tendō, -ere, tetendī, tentum', english: 'stretch out, extend', pos: 'verb' },
    { latin: 'trānsportō, -āre, -āvī, -ātum', english: 'transport, carry', pos: 'verb' },
    { latin: 'benignus, -a, -um', english: 'kind (to) (+ dat.)', pos: 'adj.' },
    { latin: 'ferus, -a, -um', english: 'wild', pos: 'adj.' },
    { latin: 'hūmānus, -a, -um', english: 'human', pos: 'adj.' },
    { latin: 'idōneus, -a, -um', english: 'suitable (for) (+ dat.)', pos: 'adj.' },
    { latin: 'immōtus, -a, -um', english: 'unmoving', pos: 'adj.' },
    { latin: 'nōtus, -a, -um', english: 'known', pos: 'adj.' },
    { latin: 'prōnus, -a, -um', english: 'bent over, prone', pos: 'adj.' },
    { latin: 'raucus, -a, -um', english: 'hoarse', pos: 'adj.' },
    { latin: 'supplex, -icis', english: 'suppliant, pleading', pos: 'adj.' },
    { latin: 'territus, -a, -um', english: 'terrified', pos: 'adj.' },
    { latin: 'tuus, -a, -um', english: 'your (sg.)', pos: 'adj.' },
    { latin: 'vīcīnus, -a, -um', english: 'neighboring', pos: 'adj.' },
    { latin: 'ā', english: 'ah!', pos: 'interjection' },
    { latin: 'cum', english: 'when', pos: 'conjunction' },
    { latin: 'ea', english: 'she', pos: 'pronoun' },
    { latin: 'post', english: 'after (+ acc.)', pos: 'prep.' },
    { latin: 'quīndecim', english: 'fifteen', pos: 'numeral' },
    { latin: 'quotiēns', english: 'how often', pos: 'adv.' },
    { latin: 'ter', english: 'three times, thrice', pos: 'adv.' },
    { latin: 'ter quīnque', english: 'fifteen (3 x 5)', pos: 'phrase' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PĒNSVM A',
      title: 'Respondēte Latīnē',
      instruction: 'Answer each question with a complete Latin sentence, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'Quis erat maximē īrāta?', a: 'Iūnō rēgīna deōrum maximē īrāta erat.' },
        { q: 'Quis nymphae nātus est?', a: 'Arcas, fīlius nymphae, nātus est.' },
        { q: 'Quis abest et nympham nōn servābit?', a: 'Iuppiter abest et nympham nōn servābit.' },
        { q: 'Verbane in nymphā mānsērunt?', a: 'Nūlla verba in nymphā mānsērunt.' },
        { q: 'Estne vōx ursae grāta aut rauca?', a: 'Vōx ursae rauca est.' },
        { q: 'Suntne sēnsa hūmāna in ursā? in ursīs?', a: 'Sēnsa hūmāna in ursā sunt, sed in ursīs nōn sunt.' },
        { q: 'Eratne ursa Callistō beāta cum in silvīs errābat?', a: 'Nōn, ursa Callistō beāta nōn erat.' },
        { q: 'Quis ursam necāre temptāvit?', a: 'Arcas ursam necāre temptāvit.' },
        { q: 'Quot annōs Arcas habēbat?', a: 'Arcas quīndecim annōs habēbat.' },
        { q: 'Quis mātrīcīdium prohibuit?', a: 'Iuppiter mātrīcīdium prohibuit.' },
      ],
    },
    {
      id: 'pensum-b',
      latinLabel: 'PĒNSVM B',
      title: 'Perfectum',
      instruction: 'Complete each perfect tense form from the principal parts given.',
      type: 'fill',
      items: [
        'dare: dedī, {{dedistī}}, {{dedit}}, {{dedimus}}, {{dedistis}}, {{dedērunt}}.',
        'stāre: stetī, {{stetistī}}, {{stetit}}, {{stetimus}}, {{stetistis}}, {{stetērunt}}.',
        'iuvāre: iūvī, {{iūvistī}}, {{iūvit}}, {{iūvimus}}, {{iūvistis}}, {{iūvērunt}}.',
        'respondēre: respondī, {{respondistī}}, {{respondit}}, {{respondimus}}, {{respondistis}}, {{respondērunt}}.',
        'manēre: mānsī, {{mānsistī}}, {{mānsit}}, {{mānsimus}}, {{mānsistis}}, {{mānsērunt}}.',
        'vidēre: vīdī, {{vīdistī}}, {{vīdit}}, {{vīdimus}}, {{vīdistis}}, {{vīdērunt}}.',
        'esse: fuī, {{fuistī}}, {{fuit}}, {{fuimus}}, {{fuistis}}, {{fuērunt}}.',
      ],
    },
    {
      id: 'pensum-c',
      latinLabel: 'PĒNSVM C',
      title: 'Dativus et Redditiō',
      instruction: 'Supply the dependent dative, then translate the English sentences into Latin.',
      type: 'questions',
      items: [
        { q: 'Arcadia est (to the god) cāra.', a: 'Arcadia est deō cāra.' },
        { q: 'Iuppiter est (to his son) benignus.', a: 'Iuppiter est fīliō suō benignus.' },
        { q: 'Callistō est (to the god) grāta.', a: 'Callistō est deō grāta.' },
        { q: 'Arcas est (to the nymph) cārus.', a: 'Arcas est nymphae cārus.' },
        { q: 'Fābulae sunt (to children) grātae.', a: 'Fābulae sunt līberīs grātae.' },
        { q: '“I shall change your beautiful form,” said Juno.', a: '“Figūram tuam pulchram mūtābō,” dīxit Iūnō.' },
        { q: 'When Arcas was born, Juno changed the form of the nymph.', a: 'Ubi Arcas nātus est, Iūnō figūram nymphae mūtāvit.' },
        { q: 'Only a hoarse voice and her human feelings remained.', a: 'Sōlum vōx rauca et sēnsa hūmāna mānsērunt.' },
        { q: 'Callisto stretched out her arms as a suppliant.', a: 'Callistō supplex bracchia tendēbat.' },
        { q: 'The terrified Callisto, now a wild animal, avoided men and beasts.', a: 'Callistō territa, nunc animal fera, virōs et animālia fera fugitābat.' },
      ],
    },
  ],
}

export default chapter
