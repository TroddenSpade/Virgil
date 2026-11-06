// Capitulum VI — Via Latina
// Sources: Ørberg, Lingua Latina per se Illustrata, Pars I: Familia Romana (2nd ed.)
// Reading text, grammar and exercises adapted and re-typeset for the web.

const chapter = {
  number: 6,
  roman: 'VI',
  slug: 'via-latina',
  latinTitle: 'VIA LATĪNĀ',
  title: 'The Latin Road',
  tagline: 'The great roads of Italy — and how Latin says "to", "from" and "at".',
  status: 'complete',
  overview:
    'Iūlius travels from Tusculum to his country vīlla, carried in a litter by four slaves, while Mēdus, ' +
    'a runaway slave, walks the same road towards Rome and his beloved Lydia, and Cornēlius rides the other ' +
    'way. Along the journey you learn the prepositions that take the accusative or the ablative, the three ' +
    'place constructions (Rōmam, Roma, Rōmae), and the passive voice of the Latin verb.',
  objectives: [
    'Name the great roads of Italy and the towns they connect.',
    'Use prepositions with the accusative (ad, ante, post, inter, prope, circum, apud, per) and with the ablative (ab, cum, ex, in, sine).',
    'Express place with the bare case: Rōmam (to), Roma (from), Rōmae (at).',
    'Recognise and form the passive voice (-tur / -ntur).',
    'Read continuous Latin prose about Iūlius’s journey and Mēdus the fugitive.',
  ],
  readings: [
    {
      id: 'via-latina',
      latinTitle: 'VIA LATĪNĀ',
      title: 'The Roads of Italy',
      paragraphs: [
        'In Italiā multae et magnae viae sunt: via Appia, via Latīna, via Flāminia, via Aurēlia, via Aemilia. Via Appia est inter Rōmam et Brundisium; via Latīna inter Rōmam et Capuam; via Flāminia inter Rōmam et Arīminum; via Aurēlia inter Rōmam et Genuam; via Aemilia inter Arīminum et Placentiam. Brundisium, Capua, Arīminum, Genua, Placentia, Ōstia magna oppida sunt.',
        'Ubi est Ōstia? Ōstia est prope Rōmam. Tusculum quoque prope Rōmam est. Brundisium nōn est prope Rōmam, sed procul ab Rōmā: via Appia longa est. Via Latīna nōn tam longa est quam via Appia. Quam longa est via Flāminia? Neque ea tam longa est quam via Appia. Tiberis fluvius nōn tam longus est quam fluvius Padus.',
        'Circum oppida mūrī sunt. Circum Rōmam est mūrus antīquus. In mūrō Rōmānō duodecim portae sunt. Porta prīma Rōmāna est porta Capēna. Circum oppidum Tusculum mūrus nōn tam longus est quam circum Rōmam.',
      ],
      notes: [
        { term: 'via', gloss: 'a road, a way: via Appia, via Latina, via Flāminia.' },
        { term: 'inter + accūsātīvō', gloss: 'between, among: inter Rōmam et Brundisium.' },
        { term: 'prope + accūsātīvō', gloss: 'near, close to: prope Rōmam, prope Tusculum.' },
        { term: 'procul ab + ablātīvō', gloss: 'far from: Brundisium procul ab Roma est.' },
        { term: 'nōn tam ... quam ...', gloss: 'not so ... as ...: via Latina non tam longa est quam via Appia.' },
        { term: 'circum + accūsātīvō', gloss: 'around: circum oppida, circum Rōmam.' },
        { term: 'mūrus', gloss: 'a wall; plural mūrī.' },
        { term: 'duodecim', gloss: 'twelve.' },
      ],
    },
    {
      id: 'iulius',
      latinTitle: 'IŪLIVS',
      title: 'Iulius on the Road',
      paragraphs: [
        'Vīlla Iūliī est prope Tusculum. Ab oppidō Tusculō ad vīllam Iūliī nōn longa via est. Ecce Iūlius et quattuor servī in viā. Iūlius ab oppidō ad vīllam suam it. Dominus et servī ab oppidō ad vīllam eunt.',
        'Dominus in lectīcā est. Duo servī lectīcam cum dominō portant. Servī quī lectīcam portant sunt Ursus et Dāvus. Iūlius nōn in viā ambulat, servī eum portant. Syrus et Lēander ambulant. Syrus saccum portat et Lēander quoque saccum portat: Syrus et Lēander duōs saccōs in umerīs portant. Saccī quōs Syrus et Lēander portant magnī sunt, sed saccus quem Syrus portat nōn tam magnus est quam saccus Lēandrī. Quattuor servī dominum et duōs saccōs ab oppidō ad vīllam vehunt.',
        'Iūlius in lectīcā est inter Ursum et Dāvum. Ursus est ante Iūlium, Dāvus post eum est. Syrus et Lēander nōn ante lectīcam, sed post lectīcam ambulant. Venitne Iūlius ā vīllā? Nōn ā vīllā venit. Unde venit Iūlius? Ab oppidō venit. Quō it Iūlius? Ad vīllam it. Post eum Tusculum est, ante eum est vīlla.',
        'Iūlius sōlus nōn est, nam quattuor servī apud eum sunt. Mēdus nōn est apud dominum, nam is dominum īrātum timet. Mēdus est malus servus quī nummōs dominī in sacculō suō habet. Dominus servōs malōs baculō verberat; itaque servī malī dominum et baculum eius timent. Dāvus autem bonus servus est, neque is Mēdum amat. Dāvus amīcus Mēdī nōn est, nam servus bonus et servus malus nōn amīcī, sed inimīcī sunt. Mēdus est inimīcus Dāvī. Ursus autem amīcus Dāvī est.',
      ],
      notes: [
        { term: 'villa', gloss: 'a country house, an estate (not a town-house).' },
        { term: 'lectīca', gloss: 'a litter: a couch in which a wealthy master is carried.' },
        { term: 'quattuor', gloss: 'four: quattuor servī.' },
        { term: 'umerus', gloss: 'shoulder; in umerīs = on their shoulders.' },
        { term: 'ante / post + accūsātīvō', gloss: 'before / behind: ante Iūlium, post lectīcam.' },
        { term: 'apud + accūsātīvō', gloss: 'at the house of, with: apud dominum.' },
        { term: 'baculum', gloss: 'a stick; baculō verberat = he beats with a stick.' },
        { term: 'autem', gloss: 'however, but (never the first word).' },
      ],
    },
    {
      id: 'medus-et-cornelius',
      latinTitle: 'MĒDVS ET CORNĒLIVS',
      title: 'Medus and Cornelius',
      paragraphs: [
        'Mēdus abest ā dominō suō. Estne in oppidō Tusculō? Mēdus Tusculī nōn est; neque Rōmae est Mēdus, sed in viā Latīnā inter Rōmam et Tusculum. Unde venit Mēdus? Tusculō venit, neque is ad vīllam Iūliī it. Quō it Mēdus? Rōmam it. Tusculum post eum est, ante eum est Rōma. Mēdus viā Latīnā Tusculō Rōmam ambulat.',
        'Etiam Cornēlius, amīcus Iūliī, in viā Latīnā est inter Rōmam et Tusculum. Unde venit Cornēlius? Is nōn Tusculō, sed Rōmā venit. Quō it? Cornēlius nōn Rōmam, sed Tusculum it. Rōma post eum, ante eum Tusculum est. Cornēlius in equō est. Equus quī Cornēlium vehit pulcher est. Iūlius et Cornēlius ad vīllās suās eunt. Vīlla ubi Iūlius habitat prope Tusculum est. Ubi habitat Cornēlius? Is Tusculī habitat.',
        'Iam Iūlius prope vīllam suam est. Servī quī lectīcam portant fessī sunt. Dominus autem fessus nōn est, nam is nōn ambulat. Iūlius ab Ursō et Dāvō portātur, itaque is fessus nōn est. Fessī sunt Syrus et Lēander, nam iī duōs magnōs saccōs umerīs portant, neque vacuī sunt saccī! Saccī quī ā Sȳrō et Lēandrō portantur magnī sunt, sed saccus quem Syrus portat nōn tam magnus est quam saccus quī ā Lēandrō portātur. Itaque Syrus nōn tam fessus est quam Lēander.',
        'Cornēlius nōn est fessus, nam is equō vehitur. Iūlius lectīcā vehitur. Servī ambulant. Dominī vehuntur. Mēdus ambulat, nam is servus est neque equum habet.',
        'Iūlius prope vīllam suam est. Mēdus autem, quī dominum īrātum timet, procul ā vīllā Iūliī abest. Dominus ā servō malō timētur. Mēdus prope Rōmam est; iam mūrī Rōmānī ab eō videntur et porta Capēna. (Is quī viā Latīnā venit per portam Capēnam Rōmam intrat.) Cūr Rōmam it Mēdus? Rōmam it, quia Lȳdia Rōmae habitat, nam Lȳdia amīca eius est: Mēdus Lȳdiam amat et ab eā amātur. Mēdus Rōmam vocātur ab amīcā suā, quae fēmina est pulchra et proba. Itaque is fessus nōn est et laetus cantat: "Nōn longa est via Rōmam, ubi amīca habitat mea pulchra." Sed id quod Mēdus cantat ā Lȳdiā nōn audītur!',
        "Iam Iūlius in vīllā est et ab Aemiliā līberīsque laetīs salūtātur. Cornēlius Tusculī est. Mēdus autem Rōmae est ante ōstium Lȳdiae. Mēdus ōstium pulsat. Lȳdia imperat: 'Intrā!' Mēdus per ōstium intrat et amīcam suam salūtat: 'Salvē, mea Lȳdia! Ecce amīcus tuus quī sōlus Rōmam ad tē venit.' Lȳdia verbīs Mēdī dēlectātur eumque salūtat: 'Ō amīce, salvē! Ubi est dominus tuus?' Mēdus: 'Iūlius in vīllā est apud servōs suōs neque is iam meus dominus est!' Verba Mēdī ā Lȳdiā laetā audiuntur.",
      ],
      notes: [
        { term: 'Tusculī / Rōmae', gloss: 'locative: at Tusculum / at Rome.' },
        { term: 'Tusculō / Rōmā', gloss: 'ablative of place from which: from Tusculum / from Rome.' },
        { term: 'vehitur', gloss: 'passive of vehit: he is carried (equō vehitur = he rides).' },
        { term: 'portātur', gloss: 'passive of portat: he is carried.' },
        { term: 'timētur', gloss: 'passive of timet: he is feared/feared by.' },
        { term: 'amātur / audītur', gloss: 'is loved / is heard — more passives.' },
        { term: 'ōstium', gloss: 'a door; per ōstium = through the door.' },
        { term: 'Intrā!', gloss: 'Come in! (an imperative).' },
      ],
    },
  ],
  grammar: [
    {
      id: 'praepositiones',
      latinTitle: 'Praepositiōnēs',
      title: 'Prepositions',
      intro:
        'A preposition shows the relation of a noun to the rest of the sentence. Some prepositions take ' +
        'the accusative, others the ablative — the noun\u2019s ending changes to match.',
      paradigms: [
        {
          caption: 'cum accūsātīvō',
          head: ['Praepositiō', 'Significātiō', 'Exemplum'],
          rows: [
            ['ad', 'to, towards', 'ad vīllam (to the vīlla)'],
            ['ante', 'before, in front of', 'ante Iūlium (in front of Iūlius)'],
            ['post', 'after, behind', 'post lectīcam (behind the litter)'],
            ['inter', 'between, among', 'inter Rōmam et Capuam'],
            ['prope', 'near, close to', 'prope Tusculum'],
            ['circum', 'around', 'circum oppidum (around the town)'],
            ['apud', 'at the house of, with', 'apud dominum'],
            ['per', 'through', 'per portam Capēnam'],
          ],
        },
        {
          caption: 'cum ablātīvō',
          head: ['Praepositiō', 'Significātiō', 'Exemplum'],
          rows: [
            ['ab / ā', 'from; by (agent)', 'ab oppidō; ā servō'],
            ['cum', 'with', 'cum dominō'],
            ['ex / ē', 'out of, from', 'ex oppidō (out of the town)'],
            ['in', 'in, on', 'in viā; in lectīcā'],
            ['sine', 'without', 'sine dominō'],
          ],
        },
      ],
      points: [
        'Prepositions with the accusative mostly express motion towards or position around: ad, ante, post, inter, prope, circum, apud, per.',
        'Prepositions with the ablative express separation, accompaniment or place where: ab, cum, ex, in, sine.',
        'The noun after the preposition changes case to match it: prope Rōmam (acc.) but procul ab Roma (abl.).',
      ],
    },
    {
      id: 'locus',
      latinTitle: 'Locus',
      title: 'Place: To, From, At',
      intro:
        'Names of towns (and small islands) need no preposition at all: the case-ending alone tells you ' +
        'whether the motion is to, from or at the place.',
      paradigms: [
        {
          caption: 'oppidum Tusculum',
          head: ['Quaestiō', 'Fōrma', 'Exemplum'],
          rows: [
            ['Quo? (to where?)', 'Accūsātīvus', 'Tusculum it (he goes to Tusculum)'],
            ['Unde? (from where?)', 'Ablātīvus', 'Tusculō venit (he comes from Tusculum)'],
            ['Ubi? (where?)', 'Locatīvus (= genetīvus)', 'Tusculī habitat (he lives at Tusculum)'],
          ],
        },
        {
          caption: 'Rōmā',
          head: ['Quaestiō', 'Fōrma', 'Exemplum'],
          rows: [
            ['Quo? (to where?)', 'Accūsātīvus', 'Rōmam it (he goes to Rome)'],
            ['Unde? (from where?)', 'Ablātīvus', 'Roma venit (he comes from Rome)'],
            ['Ubi? (where?)', 'Locatīvus (= genetīvus)', 'Rōmae habitat (he lives at Rome)'],
          ],
        },
      ],
      points: [
        'Towns use the bare case: Rōmam, Roma, Rōmae; Tusculum, Tusculō, Tusculī.',
        'The locative (ubi?) looks the same as the genitive: Rōmae, Tusculī, Capuae.',
        'For larger places, and for all common nouns, Latin adds a preposition: ad vīllam, in via, ab oppidō.',
      ],
    },
    {
      id: 'passivum',
      latinTitle: 'Verbum Passīvum',
      title: 'The Passive Voice',
      intro:
        'The passive turns the object of the action into the subject: servus saccum portat becomes ' +
        'saccus a servō portātur — the sack is carried by the slave.',
      paradigms: [
        {
          caption: 'āctīvum ↔ passīvum',
          head: ['Āctīvum', 'Passīvum', 'Significātiō'],
          rows: [
            ['portat', 'portātur', 'carries \u2192 is carried'],
            ['portant', 'portantur', 'carry \u2192 are carried'],
            ['amat', 'amātur', 'loves \u2192 is loved'],
            ['videt', 'vidētur', 'sees \u2192 is seen'],
            ['pōnit', 'pōnitur', 'puts \u2192 is put'],
            ['audit', 'audītur', 'hears \u2192 is heard'],
          ],
        },
        {
          caption: 'the four conjugations',
          head: ['Coniugātiō', 'Singulāris', 'Plūrālis'],
          rows: [
            ['I: -atur / -antur', 'amātur', 'amantur'],
            ['II: -etur / -entur', 'vidētur', 'videntur'],
            ['III: -itur / -untur', 'pōnitur', 'pōnuntur'],
            ['IV: -itur / -iuntur', 'audītur', 'audiuntur'],
          ],
        },
      ],
      points: [
        'The passive replaces the active endings -t, -nt with -tur, -ntur.',
        'The doer, if named, stands in the ablative with ab: saccus a servō portātur — the sack is carried by the slave.',
        'Examples from the chapter: Iūlius ab Ursō et Dāvō portātur; Mēdus a Lydia amātur; mūrī ab eo videntur.',
      ],
    },
  ],
  vocabulary: [
    { latin: 'via', english: 'road, way', pos: 'noun (f.)' },
    { latin: 'vīlla', english: 'country house, estate', pos: 'noun (f.)' },
    { latin: 'mūrus', english: 'wall', pos: 'noun (m.)' },
    { latin: 'porta', english: 'gate', pos: 'noun (f.)' },
    { latin: 'lectīca', english: 'litter, sedan-chair', pos: 'noun (f.)' },
    { latin: 'umerus', english: 'shoulder', pos: 'noun (m.)' },
    { latin: 'saccus', english: 'sack, bag', pos: 'noun (m.)' },
    { latin: 'baculum', english: 'stick, staff', pos: 'noun (n.)' },
    { latin: 'equus', english: 'horse', pos: 'noun (m.)' },
    { latin: 'amīcus', english: 'friend', pos: 'noun (m.)' },
    { latin: 'inimīcus', english: 'enemy', pos: 'noun (m.)' },
    { latin: 'ōstium', english: 'door, entrance', pos: 'noun (n.)' },
    { latin: 'praepositiō', english: 'preposition', pos: 'noun (f.)' },
    { latin: 'passīvum', english: 'passive', pos: 'adjective' },
    { latin: 'longus', english: 'long', pos: 'adjective' },
    { latin: 'sōlus', english: 'alone, only', pos: 'adjective' },
    { latin: 'malus', english: 'bad, wicked', pos: 'adjective' },
    { latin: 'pulcher', english: 'beautiful, handsome', pos: 'adjective' },
    { latin: 'fessus', english: 'tired, weary', pos: 'adjective' },
    { latin: 'portat', english: 'carries', pos: 'verb' },
    { latin: 'vehit', english: 'carries, conveys', pos: 'verb' },
    { latin: 'timet', english: 'fears, is afraid of', pos: 'verb' },
    { latin: 'habitat', english: 'lives, dwells', pos: 'verb' },
    { latin: 'abest', english: 'is away, is absent', pos: 'verb' },
    { latin: 'salūtat', english: 'greets, hails', pos: 'verb' },
    { latin: 'it', english: 'goes', pos: 'verb' },
    { latin: 'ambulat', english: 'walks', pos: 'verb' },
    { latin: 'quattuor', english: 'four', pos: 'numeral' },
    { latin: 'duodecim', english: 'twelve', pos: 'numeral' },
    { latin: 'ad', english: 'to, towards', pos: 'preposition' },
    { latin: 'ante', english: 'before, in front of', pos: 'preposition' },
    { latin: 'post', english: 'after, behind', pos: 'preposition' },
    { latin: 'inter', english: 'between, among', pos: 'preposition' },
    { latin: 'prope', english: 'near, close to', pos: 'preposition' },
    { latin: 'circum', english: 'around', pos: 'preposition' },
    { latin: 'apud', english: 'at the house of, with', pos: 'preposition' },
    { latin: 'per', english: 'through', pos: 'preposition' },
    { latin: 'ab / a', english: 'from; by (agent)', pos: 'preposition' },
    { latin: 'cum', english: 'with', pos: 'preposition' },
    { latin: 'ex / e', english: 'out of, from', pos: 'preposition' },
    { latin: 'in', english: 'in, on, into', pos: 'preposition' },
    { latin: 'sine', english: 'without', pos: 'preposition' },
    { latin: 'procul', english: 'far, far off', pos: 'adverb' },
    { latin: 'itaque', english: 'therefore, and so', pos: 'adverb' },
    { latin: 'autem', english: 'however, but', pos: 'conjunction' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PĒNSVM A',
      title: 'Fill in the endings',
      instruction: 'Complete each word with the correct ending.',
      type: 'fill',
      items: [
        'Iūlius ab oppid{{ō}} Tuscul{{ō}} ad vīll{{am}} su{{am}} it. Vīlla eius prope Tuscul{{um}} est. Iūlius in lectīc{{ā}} est inter Urs{{um}} et Dāv{{um}}. Dominus ā serv{{īs}} port{{ātur}}. Ursus et Dāvus nōn saccōs port{{ant}}, saccī ā Sȳrō et Leandrō port{{antur}}. Saccus quem Lēander port{{at}} nōn tam parvus est quam saccus quī ā Sȳrō port{{ātur}}.',
        'Mēdus nōn est apud domin{{um}}, nam servus malus dominum tim{{et}}. Dominus ā serv{{ō}} mal{{ō}} tim{{ētur}}. Dominus serv{{um}} mal{{um}} vocat neque ab e{{ō}} aud{{ītur}}. Serv{{us}} mal{{us}} domin{{um}} vocat neque e{{um}} aud{{it}}.',
        'Quō it Mēdus? Rōm{{am}} it. Unde venit? Mēdus Tuscul{{ō}} venit. Ante Mēd{{um}} est Rōma, Tusculum post e{{um}} est. Cornēlius nōn Tuscul{{ō}} Rōm{{am}}, sed Rōm{{ā}} Tuscul{{um}} it, nam is Tuscul{{ī}} habitat. Cornēlius nōn ambulat, sed equ{{ō}} veh{{itur}}.',
        'Lȳdia, amīc{{a}} Mēdī, Rōm{{ae}} habitat. Iam Mēdus Rōm{{ae}} apud Lȳdi{{am}} est. Mēdus amīc{{am}} su{{am}} salūtat et ab amīc{{ā}} su{{ā}} salūt{{ātur}}, nam Lȳdia Mēd{{um}} amat et ab e{{ō}} am{{ātur}}.',
      ],
    },
    {
      id: 'pensum-b',
      latinLabel: 'PĒNSVM B',
      title: 'Complete the sentences',
      instruction: 'Fill each gap with the missing word.',
      type: 'fill',
      items: [
        'Ōstia nōn {{procul}} ā Rōmā, sed {{prope}} Rōmam est. {{Unde}} venit Iūlius? Tusculō venit et {{ad}} vīllam it. Duo servī eum {{portant}}. Syrus et Lēander, quī {{post}} lectīcam ambulant, duōs {{saccōs}} portant. Saccus Syrī nōn tam {{magnus}} est quam saccus quī ā Leandrō portātur; {{itaque}} Syrus nōn tam {{fessus}} est quam Lēander.',
        'Mēdus {{apud}} dominum nōn est, nam Mēdus dominum īrātum {{timet}}. Mēdus servus {{malus}} [= improbus] est; {{itaque}} Mēdus et Iūlius nōn {{amīcī}}, sed inimīcī {{sunt}}. Via Latīna, quae est {{inter}} Rōmam et Capuam, nōn tam {{longa}} est quam viā Appiā. {{Quō}} ambulat Mēdus? Is Rōmam ambulat, {{quia}} amīca eius Rōmae habitat. Cornēlius {{nōn}} Tusculō Rōmam, sed Rōmā Tusculum {{it}}. Tusculum est {{ante}} eum, {{post}} eum est Rōma. Cornēlius equō {{vehitur}}, is nōn {{ambulat}}. Iūlius et Cornēlius ad vīllās suās {{eunt}}.',
      ],
    },
    {
      id: 'pensum-c',
      latinLabel: 'PĒNSVM C',
      title: 'Answer in Latin',
      instruction: 'Answer each question with a full Latin sentence, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'Ambulatne Iūlius?', a: 'Iūlius nōn ambulat, sed in lectīcā ā servīs portātur.' },
        { q: 'Quī Iūlium portant?', a: 'Ursus et Dāvus Iūlium portant.' },
        { q: 'Quid portant Syrus et Lēander?', a: 'Syrus et Lēander duōs saccōs portant.' },
        { q: 'Unde venit Iūlius et quō it?', a: 'Iūlius Tusculō venit et ad vīllam suam it.' },
        { q: 'Quō it Mēdus?', a: 'Mēdus Rōmam it.' },
        { q: 'Etiamne Cornēlius Tusculō Rōmam it?', a: 'Cornēlius nōn Tusculō Rōmam, sed Rōmā Tusculum it.' },
        { q: 'Ubi habitat Cornēlius?', a: 'Cornēlius Tusculī habitat.' },
        { q: 'Cūr Mēdus laetus est?', a: 'Mēdus laetus est, quia Lȳdia amīca eius Rōmae habitat.' },
        { q: 'Quae est Lȳdia?', a: 'Lȳdia amīca Mēdī est, fēmina pulchra et proba.' },
        { q: 'Quid habet Mēdus in sacculō suō?', a: 'Mēdus nummōs dominī in sacculō suō habet.' },
        { q: 'Suntne amīcī Iūlius et Mēdus?', a: 'Nōn; Iūlius dominus Mēdī est et Mēdus servus eius.' },
        { q: "Num 'portat' verbum passīvum est?", a: "'Portat' verbum āctīvum est, nōn passīvum." },
      ],
    },
  ],
}

export default chapter
