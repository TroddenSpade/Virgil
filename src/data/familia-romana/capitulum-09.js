// Capitulum IX — Pastor et Oves
// Sources: Ørberg, Lingua Latina per se Illustrata, Pars I: Familia Romana (2nd ed.)
// Reading text, grammar and exercises adapted and re-typeset for the web.

const chapter = {
  number: 9,
  roman: 'IX',
  slug: 'pastor-et-oves',
  latinTitle: 'PĀSTOR ET OVĒS',
  title: 'The Shepherd and the Sheep',
  tagline: 'A shepherd, a hundred sheep, and a wolf in the wood — and the five declensions of Latin nouns.',
  status: 'complete',
  overview:
    'A shepherd (pāstor) tends his flock of a hundred sheep in the fields, with only a black dog for company. ' +
    'They rest in the shade of a tree, but while the shepherd sleeps the one black sheep wanders off into the wood, ' +
    'where a hungry wolf is prowling. The dog and the shepherd must find her before the wolf does. ' +
    'The story brings a whole countryside of new nouns — fields, mountains, valleys, woods, sun and sky — and gives ' +
    'the perfect excuse to learn the first three of the five declensions: īnsula, servus, verbum, pāstor and ovis.',
  objectives: [
    'Read a continuous Latin story about a shepherd and his flock.',
    'Tell which declension a noun belongs to from its genitive singular.',
    'Decline first-declension nouns in -a like īnsula.',
    'Decline second-declension nouns in -us and -um like servus and verbum.',
    'Decline third-declension nouns like pāstor and ovis, and learn nouns together with their genitive.',
  ],
  readings: [
    {
      id: 'pastor-et-oves',
      latinTitle: 'PĀSTOR ET OVĒS',
      title: 'The Shepherd and the Flock',
      paragraphs: [
        'Hic vir, quī in campō ambulat, pāstor Iūliī est. Pāstor nōn sōlus est in campō, nam canis niger cum eō est et centum ovēs: ūna ovis nigra et ūndēcentum ovēs albae. Pāstor ūnam ovem nigram et multās ovēs albās habet. Is est dominus ovis nigrae et ovium albārum. Pāstor ovī nigrae et ovibus albīs aquam et cibum dat. Cum ūnā ove nigrā et ūndēcentum ovibus albīs pāstor in campō est.',
        'Cibus ovium est herba, quae in campō est. In rīvō est aqua. Ovēs in campō herbam edunt, et aquam bibunt ē rīvō, quī inter campum et silvam est. Canis herbam nōn ēst, neque pāstor herbam ēst. Cibus pāstōris est pānis, quī inest in saccō. Iūlius pāstōrī suō pānem dat. Pāstor canī suō cibum dat: canis ā pāstōre cibum accipit. Itaque canis pāstōrem amat.',
        'In Italiā sunt multī pāstōrēs. Quī viā Appiā Rōmā Brundisium it multōs pāstōrēs videt in campīs. Numerus pāstōrum magnus est. Dominī pāstōribus suīs cibum dant. Canēs ā pāstōribus cibum accipiunt.',
        'Post campum montēs sunt. Inter montēs sunt vallēs. In campō est collis. (Collis est mōns parvus.) In colle arbor est. In silvā multae arborēs sunt. Ovēs nōn in silvā neque in monte, sed in campō sunt. In silvā est lupus. Pāstor et ovēs lupum timent, nam lupus ovēs ēst. In silvīs et in montibus lupī sunt, in vallibus nūllī sunt lupī.',
        'Sōl in caelō est suprā campum. In caelō nūlla nūbēs vidētur. Caelum est suprā terram. Montēs et vallēs campī silvaeque sunt in terrā. In caelō sōl et nūbēs sunt, sed suprā hunc campum caelum sine nūbibus est. Itaque sōl lūcet in campō.',
      ],
      notes: [
        { term: 'pāstor', gloss: 'shepherd (genitive pāstōris) — the master of the flock.' },
        { term: 'ovis', gloss: 'sheep (genitive ovis); plural ovēs.' },
        { term: 'ūndēcentum', gloss: 'ninety-nine — literally "one short of a hundred".' },
        { term: 'cibus', gloss: 'food; cibus ovium est herba — the food of the sheep is grass.' },
        { term: 'ē rīvō', gloss: 'out of the stream (e/ex + ablative).' },
        { term: 'collis', gloss: 'a hill — the text explains it as mōns parvus, a little mountain.' },
        { term: 'itaque', gloss: 'and so, therefore.' },
        { term: 'sōl lūcet', gloss: 'the sun shines.' },
      ],
    },
    {
      id: 'ovis-nigra',
      latinTitle: 'OVIS NIGRA',
      title: 'The Black Sheep',
      paragraphs: [
        'Pāstor in sōle ambulat. Sub arbore autem umbra est. Pāstor, quī nūllam nūbem videt in caelō, cum cane et ovibus ad arborem adit. Pāstor umbram petit. Etiam ovēs umbram petunt: post pāstōrem ad arborem adeunt. Pāstor ovēs suās ad arborem dūcit.',
        'Ecce pāstor in umbrā arboris iacet cum cane et ovibus. Arbor pāstōrī et canī et ovibus umbram dat; sed ovis nigra cum paucīs aliīs in sōle iacet. Pāstor, quī fessus est, oculōs claudit et dormit. Canis nōn dormit.',
        'Dum pāstor in herbā dormit, ovis nigra ab ovibus albīs abit et ad rīvum currit. Ovis nigra ovēs albās relinquit et rīvum petit; aquam bibit ē rīvō, et in silvam intrat!',
        "Canis lātrat: 'Baubau!' Pāstor oculōs aperit, ovēs aspicit, ovem nigram nōn videt. Pāstor ovēs numerat: 'Ūna, duae, trēs, quattuor, quīnque ... ūndēcentum.' Numerus ovium est ūndēcentum, nōn centum. Nūllae ovēs albae absunt, sed abest ovis nigra. Pāstor et canis ovēs albās relinquunt et silvam petunt. Pāstor saccum cum pāne in colle relinquit.",
        'Dum cēterae ovēs ā pāstōre numerantur, ovis nigra in magnā silvā, ubi via nūlla est, errat. Ovis, quae iam procul ā pāstōre cēterisque ovibus abest, neque caelum neque sōlem suprā sē videt. Sub arboribus sōl nōn lūcet. Ovis nigra in umbrā est.',
        'In terrā inter arborēs sunt vestīgia lupī. Ubi est lupus ipse? Nōn procul abest. Ovis vestīgia lupī in terrā videt, neque lupum ipsum videt. Itaque ovis lupum nōn timet. Parva ovis sine timōre inter arborēs errat.',
        'Lupus autem prope ovem est. Pāstor et canis procul ab eā sunt. Lupus, quī cibum nōn habet, per silvam errat. Lupus in silvā cibum quaerit, dum pāstor et canis ovem nigram quaerunt.',
      ],
      notes: [
        { term: 'umbra', gloss: 'shade, shadow; sub arbore umbra est — there is shade under the tree.' },
        { term: 'petit', gloss: 'seeks, heads for (petere); umbram petit — he looks for the shade.' },
        { term: 'abit', gloss: 'goes away, departs (ab + eo); ovis ab ovibus albīs abit.' },
        { term: 'relinquit', gloss: 'leaves (behind), abandons.' },
        { term: 'lātrat', gloss: 'barks; the dog’s cry “Baubau!” is woof woof!' },
        { term: 'fessus', gloss: 'tired, weary; qui fessus est — who is tired.' },
        { term: 'procul ↔ prope', gloss: 'far off / near; procul a pāstōre = far from the shepherd.' },
        { term: 'vestīgia', gloss: 'footprints, traces (vestīgium, -i).' },
      ],
    },
    {
      id: 'lupus',
      latinTitle: 'LPVS',
      title: 'The Wolf',
      paragraphs: [
        "Pāstor: 'Ubi est ovis nigra? Age! quaere ovem, canis, et reperi eam!' Canis ovem quaerit et vestīgia eius in terrā reperit, neque ovem ipsam reperit. Canis lātrat.",
        "Pāstor: 'Ecce vestīgia ovis. Ubi est ovis ipsa? Dūc mē ad eam, canis!' Canis dominum suum per silvam dūcit ad ovem, sed ovis procul abest.",
        "Lupus ululat: 'Uhīī!' Et ovis et canis lupum audiunt. Lupus currit. Ovis cōnsistit et exspectat dum lupus venit. Ovis bālat: 'Bābā!'",
        'Ecce lupus quī ante ovem est! Iam ovis lupum ipsum ante sē videt. Oculī lupī in umbrā lūcent ut gemmae et dentēs ut margarītae. Parva ovis oculōs claudit et dentēs lupī exspectat. Lupus collum ovis petit dentibus ...',
        'Sed ecce canis accurrit! Lupus sē ab ove vertit ad canem, quī ante lupum cōnsistit et dentēs ostendit. Lupus ululat. Canis lātrat. Ovis bālat.',
        "Pāstor, quī iam prope est, clāmat: 'Pete lupum!' Canis clāmōrem pāstōris audit, et sine timōre lupum petit. Lupus autem ovem relinquit et montēs petit.",
        'Pāstor quoque accurrit et ovem suam, quae in terrā iacet, aspicit. In collō eius sunt vestīgia dentium lupī! Ovis oculōs aperit et ad pāstōrem suum bālat.',
        'Pāstor laetus ovem in umerōs impōnit eamque portat ad cēterās ovēs, quae sine pāstōre in campō errant. Procul in monte lupus ululat.',
      ],
      notes: [
        { term: 'Age!', gloss: 'come on! — a call to action.' },
        { term: 'quaere / reperī', gloss: 'look for! / find! (singular imperatives).' },
        { term: 'ululat', gloss: 'howls; ovis bālat — the sheep bleats, canis lātrat — the dog barks.' },
        { term: 'ut gemmae', gloss: 'like jewels — ut introduces a comparison.' },
        { term: 'cōnsistit', gloss: 'stops, halts, takes a stand.' },
        { term: 'accurrit', gloss: 'runs up (ad + currit).' },
        { term: 'impōnit', gloss: 'puts (her) on; ovem in umerōs impōnit — he lifts the sheep onto his shoulders.' },
        { term: 'in collō eius', gloss: 'on her neck (collum, -i).' },
      ],
    },
  ],
  grammar: [
    {
      id: 'quinque-declinationes',
      latinTitle: 'Quīnque Dēclīnātiōnēs',
      title: 'The Five Declensions',
      intro:
        'Latin nouns are divided into five families, called declensions. To decline a noun is to run through ' +
        'its cases with the right endings; which family it belongs to you can always tell from the genitive singular.',
      paradigms: [
        {
          caption: 'the five declensions — the genitive singular is the sign',
          head: ['Dēclīnātiō', 'Signum', 'Exemplum'],
          rows: [
            ['I', '-ae', 'īnsula, īnsulae (f.) — island'],
            ['II', '-i', 'servus, servī (m.); verbum, verbī (n.)'],
            ['III', '-is', 'pāstor, pāstōris (m.); ovis, ovis (f.)'],
            ['IV', '-us', 'exercitus, exercitus (m.) — army'],
            ['V', '-ei', 'rēs, reī (f.) — thing, matter'],
          ],
        },
      ],
      points: [
        'Learn every noun with its genitive: īnsula, -ae; servus, -i; pāstor, -is. The genitive is the signpost that tells you the declension.',
        'The five signposts are -ae (I), -i (II), -is (III), -us (IV) and -ei (V).',
        'This chapter meets the first three declensions through the nouns of the story: īnsula, servus and verbum, pāstor and ovis.',
        'A noun’s case, not its position in the sentence, shows what it does: ovis lupum videt (the sheep sees the wolf) and lupus ovem videt (the wolf sees the sheep).',
      ],
    },
    {
      id: 'declinatio-prima',
      latinTitle: 'Dēclīnātiō Prīma',
      title: 'The First Declension',
      intro:
        'First-declension nouns end in -a in the nominative singular and in -ae in the genitive. ' +
        'Learn them on īnsula, īnsulae (f.) — island.',
      paradigms: [
        {
          caption: 'īnsula, īnsulae (f.) — island',
          head: ['Cāsus', 'Singulāris', 'Plūrālis'],
          rows: [
            ['Nōminātīvus', 'īnsula', 'īnsulae'],
            ['Accūsātīvus', 'īnsulam', 'īnsulās'],
            ['Genetīvus', 'īnsulae', 'īnsulārum'],
            ['Datīvus', 'īnsulae', 'īnsulīs'],
            ['Ablātīvus', 'īnsula', 'īnsulīs'],
          ],
        },
        {
          caption: 'the endings of the first declension',
          head: ['Cāsus', 'Singulāris', 'Plūrālis'],
          rows: [
            ['Nōminātīvus', '-a', '-ae'],
            ['Accūsātīvus', '-am', '-as'],
            ['Genetīvus', '-ae', '-arum'],
            ['Datīvus', '-ae', '-is'],
            ['Ablātīvus', '-a', '-is'],
          ],
        },
      ],
      points: [
        'The first declension is recognised by the nominative -a together with the genitive -ae.',
        'Most first-declension nouns are feminine: fēmina, puella, fīlia, domina, familia, pecūnia, mēnsā, vīlla, aqua, via, silvā, terrā.',
        'A few nouns of this declension naming male persons are masculine: nauta (sailor), agricola (farmer), poēta (poet).',
        'The dative singular and the genitive singular look the same (-ae): Iūlius ancillae mālum dat — Iūlius gives an apple to the slave-girl.',
      ],
    },
    {
      id: 'declinatio-secunda',
      latinTitle: 'Dēclīnātiō Secunda',
      title: 'The Second Declension',
      intro:
        'The second declension has masculine nouns in -us and neuter nouns in -um. ' +
        'Its sign is the genitive singular in -i: servus, servī; verbum, verbī.',
      paradigms: [
        {
          caption: 'servus, servī (m.) — slave',
          head: ['Cāsus', 'Singulāris', 'Plūrālis'],
          rows: [
            ['Nōminātīvus', 'servus', 'servī'],
            ['Accūsātīvus', 'servum', 'servōs'],
            ['Genetīvus', 'servī', 'servōrum'],
            ['Datīvus', 'servō', 'servīs'],
            ['Ablātīvus', 'servō', 'servīs'],
          ],
        },
        {
          caption: 'verbum, verbī (n.) — word',
          head: ['Cāsus', 'Singulāris', 'Plūrālis'],
          rows: [
            ['Nōminātīvus', 'verbum', 'verba'],
            ['Accūsātīvus', 'verbum', 'verba'],
            ['Genetīvus', 'verbī', 'verbōrum'],
            ['Datīvus', 'verbō', 'verbīs'],
            ['Ablātīvus', 'verbō', 'verbīs'],
          ],
        },
      ],
      points: [
        'Masculine nouns in -us decline like servus: fīlius, dominus, fluvius, numerus, nummus, hortus, equus, saccus, amīcus, oculus, campus, rīvus, lupus.',
        'Neuter nouns in -um decline like verbum: oppidum, exemplum, baculum, ōstium, cubiculum, mālum, caelum, vestīgium.',
        'In every neuter noun the nominative, accusative and vocative are alike, and the plural of those cases ends in -a: verbum, verba.',
        'A few second-declension nouns end in -er, not -us, and keep the -e- in the other cases: puer, puerī; liber, librī. The signal is still the genitive in -i.',
      ],
    },
    {
      id: 'declinatio-tertia',
      latinTitle: 'Dēclīnātiō Tertia',
      title: 'The Third Declension',
      intro:
        'Third-declension nouns have nominatives of many different shapes, but their genitive singular always ends in -is. ' +
        'Here they are on pāstor (m.) and ovis (f.), the two leading words of the chapter.',
      paradigms: [
        {
          caption: 'pāstor, pāstōris (m.) — shepherd',
          head: ['Cāsus', 'Singulāris', 'Plūrālis'],
          rows: [
            ['Nōminātīvus', 'pāstor', 'pāstōrēs'],
            ['Accūsātīvus', 'pāstōrem', 'pāstōrēs'],
            ['Genetīvus', 'pāstōris', 'pāstōrum'],
            ['Datīvus', 'pāstōrī', 'pāstōribus'],
            ['Ablātīvus', 'pāstōre', 'pāstōribus'],
          ],
        },
        {
          caption: 'ovis, ovis (f.) — sheep (i-stem)',
          head: ['Cāsus', 'Singulāris', 'Plūrālis'],
          rows: [
            ['Nōminātīvus', 'ovis', 'ovēs'],
            ['Accūsātīvus', 'ovem', 'ovēs'],
            ['Genetīvus', 'ovis', 'ovium'],
            ['Datīvus', 'ovī', 'ovibus'],
            ['Ablātīvus', 'ove', 'ovibus'],
          ],
        },
      ],
      points: [
        'Always learn a third-declension noun with its genitive: pāstor, -is; ovis, -is; mōns, -is; dēns, -is; sol, -is.',
        'Nouns like pāstor: sol, timor, clāmor, arbor (f.) — the genitive plural ends in -um (pāstōrum, sōlum).',
        'Some nouns like ovis are i-stems and take the genitive plural in -ium: ovis, ovium; collis, collium; pānis, panium. Canis keeps the short form canum.',
        'The nominative does not show the gender: ovis, vallis and nūbēs are feminine, while pānis, collis, mōns and dēns are masculine.',
      ],
    },
  ],
  vocabulary: [
    { latin: 'pāstor', english: 'shepherd', pos: 'noun (m.)' },
    { latin: 'ovis', english: 'sheep', pos: 'noun (f.)' },
    { latin: 'canis', english: 'dog', pos: 'noun (m.)' },
    { latin: 'lupus', english: 'wolf', pos: 'noun (m.)' },
    { latin: 'campus', english: 'field, plain', pos: 'noun (m.)' },
    { latin: 'herba', english: 'grass, herb', pos: 'noun (f.)' },
    { latin: 'cibus', english: 'food', pos: 'noun (m.)' },
    { latin: 'aqua', english: 'water', pos: 'noun (f.)' },
    { latin: 'pānis', english: 'bread', pos: 'noun (m.)' },
    { latin: 'saccus', english: 'sack, bag', pos: 'noun (m.)' },
    { latin: 'rīvus', english: 'stream, brook', pos: 'noun (m.)' },
    { latin: 'silva', english: 'forest, wood', pos: 'noun (f.)' },
    { latin: 'mōns', english: 'mountain', pos: 'noun (m.)' },
    { latin: 'vallis', english: 'valley', pos: 'noun (f.)' },
    { latin: 'collis', english: 'hill', pos: 'noun (m.)' },
    { latin: 'arbor', english: 'tree', pos: 'noun (f.)' },
    { latin: 'umbra', english: 'shade, shadow', pos: 'noun (f.)' },
    { latin: 'sōl', english: 'sun', pos: 'noun (m.)' },
    { latin: 'caelum', english: 'sky, heaven', pos: 'noun (n.)' },
    { latin: 'nūbēs', english: 'cloud', pos: 'noun (f.)' },
    { latin: 'terra', english: 'earth, land', pos: 'noun (f.)' },
    { latin: 'via', english: 'road, way', pos: 'noun (f.)' },
    { latin: 'vestīgium', english: 'trace, footprint', pos: 'noun (n.)' },
    { latin: 'oculus', english: 'eye', pos: 'noun (m.)' },
    { latin: 'dēns', english: 'tooth', pos: 'noun (m.)' },
    { latin: 'collum', english: 'neck', pos: 'noun (n.)' },
    { latin: 'dēclīnātiō', english: 'declension', pos: 'noun (f.)' },
    { latin: 'cāsus', english: 'case (of a noun)', pos: 'noun (m.)' },
    { latin: 'niger', english: 'black', pos: 'adjective' },
    { latin: 'albus', english: 'white', pos: 'adjective' },
    { latin: 'fessus', english: 'tired, weary', pos: 'adjective' },
    { latin: 'multus', english: 'much, many', pos: 'adjective' },
    { latin: 'ambulat', english: 'walks', pos: 'verb' },
    { latin: 'bibit', english: 'drinks', pos: 'verb' },
    { latin: 'accipit', english: 'receives, gets', pos: 'verb' },
    { latin: 'timet', english: 'fears, is afraid of', pos: 'verb' },
    { latin: 'currit', english: 'runs', pos: 'verb' },
    { latin: 'intrat', english: 'enters, goes into', pos: 'verb' },
    { latin: 'relinquit', english: 'leaves (behind)', pos: 'verb' },
    { latin: 'quaerit', english: 'seeks, looks for', pos: 'verb' },
    { latin: 'reperit', english: 'finds', pos: 'verb' },
    { latin: 'procul', english: 'far off, at a distance', pos: 'adverb' },
    { latin: 'prope', english: 'near, close by', pos: 'adverb' },
    { latin: 'suprā', english: 'above, over', pos: 'preposition' },
    { latin: 'sub', english: 'under, beneath', pos: 'preposition' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PĒNSVM A',
      title: 'Fill in the endings',
      instruction: 'Complete each word with the correct ending.',
      type: 'fill',
      items: [
        'Pāstor nōn sōlus est in campō, nam canis niger cum eō est et centum ov{{ēs}}: ūna ovis nigra et ūndēcentum ovēs alb{{ae}}. Pāstor est dominus ovis nigrae et ov{{ium}} albārum. Pāstor ovī nigrae et ovibus albīs aquam et cib{{um}} dat.',
        'Cibus ovium est herb{{a}}, cibus pāstōris est pān{{is}}. Ovēs in campō herb{{am}} edunt et aquam bibunt. Canis cibum ā pāstōre accip{{it}}. Pāstōrēs in campīs mult{{ās}} ovēs habent.',
        'In coll{{e}} est arbor. Pāstor cum cane et ov{{ibus}} ad arborem it. Pāstor in umbr{{ā}} arboris iacet. Arbor pāstōrī et canī umbr{{am}} dat, sed ovis nigra in sōl{{e}} iacet. Nūllae nūb{{ēs}} in cael{{ō}} sunt.',
        'Ovis nigra ā pāstōre cēterīsque ov{{ibus}} discēdit et in silv{{am}} intrat. In terr{{ā}} sunt vestīgia lup{{ī}}; lupus ipse nōn procul abest. Pāstor ovēs suās ad arborem dūc{{it}}. Lupus in silv{{ā}} cibum quaerit, dum pāstor et canis ov{{em}} quaerunt.',
      ],
    },
    {
      id: 'pensum-c',
      latinLabel: 'PĒNSVM C',
      title: 'Answer in Latin',
      instruction: 'Answer each question with a full Latin sentence, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'Num pāstor sōlus in campō est?', a: 'Pāstor sōlus nōn est: canis niger cum eō est et centum ovēs.' },
        { q: 'Quot ovēs habet pāstor?', a: 'Centum ovēs habet: ūnam ovem nigram et ūndēcentum ovēs albās.' },
        { q: 'Ā quō canis cibum accipit?', a: 'Canis ā pāstōre cibum accipit.' },
        { q: 'Suntne montēs prope pāstōrem?', a: 'Post campum montēs sunt.' },
        { q: 'Ubi sunt vallēs?', a: 'Vallēs inter montēs sunt.' },
        { q: 'Quid est collis?', a: 'Collis est mōns parvus.' },
        { q: 'Quō it pāstor?', a: 'Pāstor ad arborem it, quia umbram petit.' },
        { q: 'Cūr pāstor umbram petit?', a: 'Pāstor umbram petit, quia in sōle ambulat et fessus est.' },
        { q: 'Quō it ovis nigra?', a: 'Ovis nigra ad rīvum currit et in silvam intrat.' },
        { q: 'Quid ovis in terrā videt?', a: 'Ovis vestīgia lupī in terrā videt.' },
        { q: 'Cūr lupus ovem nigram nōn est?', a: 'Lupus ovem nigram nōn est, quia canis accurrit et lupum petit.' },
        { q: 'Quis ovem nigram servat?', a: 'Canis ovem nigram servat.' },
        { q: 'Quid pāstor in collō ovis videt?', a: 'Pāstor in collō ovis vestīgia dentium lupī videt.' },
      ],
    },
  ],
}

export default chapter
