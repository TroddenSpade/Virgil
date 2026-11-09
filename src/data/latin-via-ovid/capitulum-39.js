// Capitulum XXXIX — SIBYLLA CVMAEA
// Source: Goldman & Nyenhuis, Latin via Ovid: A First Course (2nd ed., 1982)
// Reading text, vocabulary, grammar and exercises adapted for the web.

const chapter = {
  number: 39,
  roman: 'XXXIX',
  slug: 'sibylla-cumaea',
  latinTitle: 'SIBYLLA CVMAEA',
  title: 'The Cumaean Sibyl',
  tagline: 'At Cumae the aged prophetess leads Aeneas to the underworld and tells him her own story.',
  status: 'complete',
  overview:
    'Aeneas comes to the shores of Cumae and the cave of the Sibyl, who promises him the road to the ' +
    'shades of his father and shows him the golden bough in the grove of Avernal Juno. He descends, sees ' +
    'the wealth of Orcus and the shade of Anchises, and learns what wars await him in Italy. On the way out ' +
    'the Sibyl tells her own story: she refused the love of Phoebus, and though she asked for as many years ' +
    'as there were grains in a heap of sand, she forgot to ask for youth. The grammar reviews the vocative, ' +
    'effective repetition, and the passive and deponent verb.',
  objectives: [
    'Read the Sibyl\'s prophecy and her account of her gift and her age.',
    'Form and use the vocative case in all five declensions.',
    'Recognise the paired conjunctions seu ... seu, nec ... nec, vel ... vel, et ... et.',
    'Review the passive and deponent forms of the four conjugations.',
    'Answer questions on the reading in Latin.',
  ],
  readings: [
    {
      id: 'antrum-sibyllae',
      latinTitle: 'ANTRVM SIBYLLAE',
      title: 'The Grotto of the Sibyl',
      paragraphs: [
        '[Aenēās] . . . loca fēta palustribus undīs,\nlītora Cūmārum vīvācisque antrā Sibyllae\nintrat, et [ut] ad mānēs veniat per Averna paternōs\nōrat. At illa diū vultum tellūre morātum\nērēxit tandemque deō furibunda receptō\n"magna petis," dīxit, "vir factīs māxime, cuius\ndextera per ferrum, pietās spectāta per ignēs.\nPōne tamen, Trōiāne, metum: potiēre petītīs\nĒlysiāsque domōs et rēgna novissima mundī\nmē duce cognōscēs simulācraque cāra parentis,\ninvia virtūtī nūlla est via."',
        'Dīxit et aurō\nfulgentem rāmum silvā Iūnōnis Avernae\nmōnstrāvit iussitque suō dīvellere truncō.\nPāruit Aenēās et formīdābilis Orcī\nvīdit opēs ātavōsque suōs umbramque senīlem\nmagnanimī Anchīsae; didicit quoque iūra locōrum,\nquaeque novīs essent adeunda perīcula bellīs.',
      ],
      notes: [
        { term: 'fēta palustribus undīs', gloss: 'teeming with marshy waters — the land around Cumae.' },
        { term: 'Cūmae, -ārum', gloss: 'Cumae, the ancient city on the Campanian coast, famous for its Sibyl.' },
        { term: 'vīvāx, -ācis', gloss: 'long-lived; the Sibyl has lived for centuries.' },
        { term: 'per Averna', gloss: 'through the region of Avernus, the legendary entrance to the underworld.' },
        { term: 'furibunda deō receptō', gloss: 'raging with the god now received into her, i.e. inspired by Apollo.' },
        { term: 'vir factīs māxime', gloss: 'O man of the greatest deeds — the vocative with māxime, though it agrees with factīs.' },
        { term: 'potiēre petītīs', gloss: 'you will obtain what you seek; potior takes the ablative.' },
        { term: 'invia virtūtī nūlla est via', gloss: 'no road is impassable to virtue — the motto of the chapter.' },
        { term: 'rāmum fulgentem aurō', gloss: 'the golden bough, plucked from a tree in the grove of Avernal Juno.' },
        { term: 'formīdābilis Orcus', gloss: 'fearful Orcus, the underworld and its god.' },
        { term: 'ātavī', gloss: 'forefathers, ancestors; Aeneas sees the line of his descendants.' },
        { term: 'quaeque ... adeunda perīcula', gloss: 'the dangers that must be faced in new wars — gerundive of obligation.' },
      ],
    },
    {
      id: 'fabula-sibyllae',
      latinTitle: 'FĀBULA SIBYLLAE',
      title: 'The Sibyl\'s Story',
      paragraphs: [
        '"Nec dea sum," dīxit, "nec sacrī tūris honōre\nhūmānum dignāre caput; neu nescius errēs,\nlūx aeterna mihi cārītūraque fīne dabātur,\nsī mea virginitās Phoebō patuisset amantī.',
        'Dum tamen hanc sperat, dum praecorrumpere dōnīs\nmē cupit, "ēlige" ait "virgō Cūmaea, quid optēs:\noptātīs potiēre tuīs." Ego pulveris haustī\nostendī cumulum: quot habēret corpora pulvis,\ntot mihi nātālēs contingere vāna rogāvī;\nexcidit, ut peterem iuvenēs quoque prōtinus annōs.\nHōs tamen ille mihi dabat aeternamque iuventam,\nsī Venerem paterer: contemptō mūnere Phoebī,\ninnuba permaneō; sed iam fēlīcior aetās\nterga dedit, tremulōque gradū venit aegra senectūs,\nquae patienda diū est.',
        'Tempus erit, cum dē tantō mē corpore parvam\nlonga diēs faciet, cōnsūmptaque membra senectā\nad minimum redigentur onus: nec amāta vidēbor\nnec plācuisse deō, Phoebus quoque forsitan ipse\nvel nōn cognōscet, vel dīlēxisse negābit:\nūsque adeō mūtāta ferar nūllīque videnda,\nvōce tamen nōscar; vōcem mihi fāta relinquent."',
      ],
      notes: [
        { term: 'nec dea sum', gloss: 'I am not a goddess — the Sibyl answers the awe of Aeneas.' },
        { term: 'dignāre', gloss: 'a mild imperative from dignor: do not think a human head worthy of sacred incense.' },
        { term: 'neu nescius errēs', gloss: 'lest you go astray in ignorance; nē ... errēs.' },
        { term: 'lūx aeterna ... dabātur', gloss: 'eternal light, never to end, would have been given me.' },
        { term: 'Phoebō amantī', gloss: 'to Phoebus as a lover; she would have received long life if she had yielded.' },
        { term: 'pulveris haustī cumulus', gloss: 'a heap of gathered dust — the sand she held in her hand.' },
        { term: 'quot ... tot', gloss: 'as many ... as: as many birthdays as grains of dust.' },
        { term: 'excidit, ut peterem', gloss: 'it slipped my mind to ask — she forgot to ask for youth as well.' },
        { term: 'contemptō mūnere Phoebī', gloss: 'ablative absolute: having scorned the gift of Phoebus.' },
        { term: 'innuba', gloss: 'unwed, a virgin; she remained unmarried.' },
        { term: 'aegra senectūs', gloss: 'sick old age, which she must endure for a long time.' },
        { term: 'ad minimum redigentur onus', gloss: 'my limbs will be reduced to the smallest weight.' },
        { term: 'vōce tamen nōscar', gloss: 'nevertheless I shall be known by my voice; only the voice will remain.' },
      ],
    },
  ],
  grammar: [
    {
      id: 'vocativus',
      latinTitle: 'Vocātīvus',
      title: 'The Vocative',
      intro:
        'The vocative is the case of direct address. Its endings are the same as the nominative except in ' +
        'the masculine singular of the second declension, where -us becomes -e and -ius becomes -ī. Meus has ' +
        'the vocative mī.',
      paradigms: [
        {
          caption: 'vocātīvus in quīnque dēclīnātiōnibus',
          head: ['Dēclīnātiō', 'Singulāris', 'Plūrālis'],
          rows: [
            ['I', 'puella', 'puellae'],
            ['II', 'amīce', 'amīcī'],
            ['II (in -ius)', 'fīlī', 'fīliī'],
            ['III', 'māter', 'mātrēs'],
            ['IV', 'exercitus', 'exercitūs'],
            ['V', 'diēs', 'diēs'],
          ],
        },
      ],
      points: [
        'The vocative is used in direct speech: Vir factīs māxime, magna petis — O man of the greatest deeds, you seek great things.',
        'Second-declension nouns in -us make the vocative in -e: amīcus → amīce; fīlius → fīlī.',
        'Names in -ius and the adjective meus make the vocative in -ī: Vergilius → Vergilī; meus → mī.',
        'All other nouns and adjectives have the vocative identical with the nominative: māter, exercitus, diēs, puella.',
        'The vocative is often accompanied by ō, especially in poetry and in solemn address: ō iūstissime Trōum.',
      ],
    },
    {
      id: 'repetitio',
      latinTitle: 'Repetitiō Efficāx',
      title: 'Effective Repetition',
      intro:
        'Latin often repeats a conjunction to balance two parallel words, phrases or clauses. English uses ' +
        'either ... or, neither ... nor, both ... and.',
      paradigms: [
        {
          caption: 'coniūnctiōnēs repetītae',
          head: ['Coniūnctiōnēs', 'Significātiō', 'Exemplum'],
          rows: [
            ['seu ... seu', 'whether ... or', 'Seu vōs Hesperiam ... sīve Erycīs fīnīs optātis.'],
            ['sīve ... sīve', 'whether ... or', 'Sīve Erycīs fīnīs rēgemque optātis Acestēn.'],
            ['nec ... nec', 'neither ... nor', 'Nec amāta vidēbor nec plācuisse deō.'],
            ['vel ... vel', 'either ... or', 'Vel nōn cognōscet, vel dīlēxisse negābit.'],
            ['et ... et', 'both ... and', 'Et pudet et referam.'],
          ],
        },
      ],
      points: [
        'The paired conjunctions frame parallel ideas and give the sentence balance; keep the same English pair in translation.',
        'Seu and sīve are interchangeable; both may be repeated.',
        'Nec (or neque) repeated means "neither ... nor"; vel repeated means "either ... or".',
        'Et ... et means "both ... and"; it is common with verbs and adjectives.',
        'Do not confuse the repeated nec with the simple negative nec — the repetition marks the pair.',
      ],
    },
    {
      id: 'verba-passiva-et-deponentia',
      latinTitle: 'Verba Passīva et Deponentia',
      title: 'Passive and Deponent Verbs',
      intro:
        'Deponent verbs have passive forms but active meanings. Their endings are those of the passive, and ' +
        'the alternative second-person singular in -re should be recognised in reading. The four model verbs ' +
        'below cover the four conjugations.',
      paradigms: [
        {
          caption: 'indicātīvus praesentis',
          head: ['', 'miror', 'vereor', 'loquor', 'potior'],
          rows: [
            ['I', 'miror', 'vereor', 'loquor', 'potior'],
            ['II', 'mirāris (-re)', 'verēris (-re)', 'loqueris (-re)', 'potīris (-re)'],
            ['III', 'mirātur', 'verētur', 'loquitur', 'potītur'],
            ['I pl.', 'mirāmur', 'verēmur', 'loquimur', 'potīmur'],
            ['II pl.', 'mirāminī', 'verēminī', 'loquiminī', 'potīminī'],
            ['III pl.', 'mirantur', 'verentur', 'loquuntur', 'potiuntur'],
          ],
        },
        {
          caption: 'coniūnctīvus praesentis',
          head: ['', 'mirer', 'verear', 'loquar', 'potiar'],
          rows: [
            ['I', 'mirer', 'verear', 'loquar', 'potiar'],
            ['II', 'mirēris (-re)', 'vereāris (-re)', 'loquāris (-re)', 'potiāris (-re)'],
            ['III', 'mirētur', 'vereātur', 'loquātur', 'potiātur'],
            ['I pl.', 'mirēmur', 'vereāmur', 'loquāmur', 'potiāmur'],
            ['II pl.', 'mirēminī', 'vereāminī', 'loquāminī', 'potiāminī'],
            ['III pl.', 'mirēntur', 'vereāntur', 'loquāntur', 'potiāntur'],
          ],
        },
      ],
      points: [
        'Deponent verbs are passive in form but active in meaning: miror — I admire; vereor — I fear; loquor — I speak; potior — I obtain.',
        'The imperfect adds -bā- to the present stem: mirābar, verēbar, loquēbar, potiēbar.',
        'The future of the first and second conjugations adds -bi-: mirābor, verēbor; the third and fourth use -e- and -ie-: loquar, potiar.',
        'The perfect system is formed with the perfect participle and sum: mirātus sum, veritus sum, locūtus sum, potītus sum.',
        'The present participle ends in -ns: mirāns, verēns, loquēns, potiēns; the perfect participle is passive in form but active in sense for deponents.',
        'Potior takes the genitive or ablative: potior urbis or potior urbe — I gain possession of the city.',
      ],
    },
  ],
  vocabulary: [
    { latin: 'fētus, -a, -um', english: 'teeming, full of (+ abl.)', pos: 'adjective' },
    { latin: 'antrum, -ī', english: 'cave, grotto', pos: 'noun n.' },
    { latin: 'vīvāx, -ācis', english: 'long-lived, lively', pos: 'adjective' },
    { latin: 'Sibylla, -ae', english: 'the Sibyl, a prophetess', pos: 'noun f.' },
    { latin: 'paternus, -a, -um', english: 'of a father, paternal', pos: 'adjective' },
    { latin: 'Averna, -ōrum', english: 'the region of Avernus, entrance to the underworld', pos: 'noun n. pl.' },
    { latin: 'potior, -īrī, -ītus sum', english: 'to obtain, gain possession of (+ gen./abl.)', pos: 'verb (deponent)' },
    { latin: 'rāmus, -ī', english: 'branch, bough', pos: 'noun m.' },
    { latin: 'truncus, -ī', english: 'trunk, stem', pos: 'noun m.' },
    { latin: 'formīdābilis, -e', english: 'fearful, terrible', pos: 'adjective' },
    { latin: 'Orcus, -ī', english: 'Orcus, the underworld', pos: 'noun m.' },
    { latin: 'ātavus, -ī', english: 'forefather, ancestor', pos: 'noun m.' },
    { latin: 'senīlis, -e', english: 'of old age, aged', pos: 'adjective' },
    { latin: 'magnanimus, -a, -um', english: 'great-hearted, noble', pos: 'adjective' },
    { latin: 'nescius, -a, -um', english: 'not knowing, ignorant', pos: 'adjective' },
    { latin: 'errō (1)', english: 'to wander, go astray', pos: 'verb' },
    { latin: 'careō, -ēre, -uī, -itum', english: 'to lack, be without (+ abl.)', pos: 'verb' },
    { latin: 'virginitās, -ātis', english: 'virginity, maidenhood', pos: 'noun f.' },
    { latin: 'optō (1)', english: 'to wish, choose', pos: 'verb' },
    { latin: 'pulvis, -eris', english: 'dust, sand', pos: 'noun m.' },
    { latin: 'ostendō, -ere, -tendī, -tēnsum', english: 'to show, point out', pos: 'verb' },
    { latin: 'cumulus, -ī', english: 'heap, pile', pos: 'noun m.' },
    { latin: 'nātālis, -is', english: 'birthday; (pl.) birth', pos: 'noun m.' },
    { latin: 'excidō, -ere, -cidī', english: 'to fall out, slip from the mind', pos: 'verb' },
    { latin: 'innubus, -a, -um', english: 'unwed, unmarried', pos: 'adjective' },
    { latin: 'aetās, -ātis', english: 'age, time of life', pos: 'noun f.' },
    { latin: 'tremulus, -a, -um', english: 'trembling, shaking', pos: 'adjective' },
    { latin: 'gradus, -ūs', english: 'step, pace', pos: 'noun m.' },
    { latin: 'senectūs, -ūtis', english: 'old age', pos: 'noun f.' },
    { latin: 'cōnsūmō, -ere, -sūmpsī, -sūmptum', english: 'to consume, wear away', pos: 'verb' },
    { latin: 'redigō, -ere, -ēgī, -āctum', english: 'to reduce, bring back', pos: 'verb' },
    { latin: 'forsitan', english: 'perhaps, it may be', pos: 'adverb' },
    { latin: 'dīligō, -ere, -lēxī, -lēctum', english: 'to love, esteem', pos: 'verb' },
    { latin: 'ūsque', english: 'all the way, even', pos: 'adverb' },
    { latin: 'nōscō, -ere, nōvī, nōtum', english: 'to know, recognise', pos: 'verb' },
    { latin: 'relinquō, -ere, -līquī, -lictum', english: 'to leave behind, abandon', pos: 'verb' },
    { latin: 'fātum, -ī', english: 'fate, destiny; (pl.) fates', pos: 'noun n.' },
    { latin: 'patior, -ī, passus sum', english: 'to suffer, endure, allow', pos: 'verb (deponent)' },
    { latin: 'contingō, -ere, -tigī, -tāctum', english: 'to touch; to fall to one\'s lot', pos: 'verb' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PĒNSVM A',
      title: 'Respondēte Latīnē',
      instruction: 'Answer each question in a complete Latin sentence, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'Ubi est antrum Sibyllae?', a: 'Antrum Sibyllae in lītoribus Cūmārum est.' },
        { q: 'Quid ōrat Aenēās ut Sibylla faciat?', a: 'Aenēās ōrat ut ad mānēs paternōs per Averna veniat.' },
        { q: 'Quid Sibylla mōnstrāvit in silvā Avernae Iūnōnis?', a: 'Sibylla rāmum aurō fulgentem mōnstrāvit.' },
        { q: 'Cuius umbram Aenēās vīdit in Orcō?', a: 'Aenēās umbram Anchīsae, patris suī, vīdit.' },
        { q: 'Estne Sibylla dea?', a: 'Sibylla dea nōn est, sed mortālis, cui Phoebus lūcem aeternam dedit.' },
        { q: 'Quis Sibyllam amāvit?', a: 'Phoebus, deus, Sibyllam amāvit.' },
        { q: 'Quid rogāvit Sibylla ut Apollo daret?', a: 'Tot annōs rogāvit quot corpora pulvis habēret.' },
        { q: 'Quid Sibylla rogāre oblīta est?', a: 'Sibylla iuvenēs annōs quoque rogāre oblīta est.' },
        { q: 'Dūcitne Apollo Sibyllam in mātrimōnium?', a: 'Apollo eam nōn dūcit, quod illa Venerem eius patī nōluit.' },
        { q: 'Cum Sibylla minima fuerit, quid permanēbit?', a: 'Cum Sibylla minima fuerit, vōx eius permanēbit.' },
      ],
    },
    {
      id: 'pensum-b',
      latinLabel: 'PĒNSVM B',
      title: 'Synopsis of deponent verbs',
      instruction:
        'Give the required forms. The first item asks for hortor in the third person singular; the second asks for sequor in the second person singular, using the -re forms.',
      type: 'fill',
      items: [
        'hortor, 3rd sing.: indic. pres. {{hortātur}}, imperf. {{hortābātur}}, fut. {{hortābitur}}, perf. {{hortātus est}}, pluperf. {{hortātus erat}}, fut. perf. {{hortātus erit}}; subj. pres. {{hortētur}}, imperf. {{hortārētur}}, perf. {{hortātus sit}}, pluperf. {{hortātus esset}}.',
        'sequor, 2nd sing.: indic. pres. {{sequeris (-re)}}, imperf. {{sequēbāris (-re)}}, fut. {{sequēris (-re)}}, perf. {{secūtus es}}, pluperf. {{secūtus erās}}, fut. perf. {{secūtus eris}}; subj. pres. {{sequāris (-re)}}, imperf. {{sequerēris (-re)}}, perf. {{secūtus sīs}}, pluperf. {{secūtus essēs}}.',
      ],
    },
    {
      id: 'pensum-c',
      latinLabel: 'PĒNSVM C',
      title: 'Vocative forms',
      instruction: 'Fill in the vocative form required by each sentence.',
      type: 'fill',
      items: [
        '{{Puerī}}, venīte ad mē. (boys)',
        '{{Mārce}}, manē in scholā. (Marcus)',
        '{{Vergilī}}, carmina tua sunt dulcissima. (Vergilius)',
        '{{Mātrēs}}, audīte mea verba. (mothers)',
        '{{Nōx}}, venī celeriter. (night)',
      ],
    },
  ],
}

export default chapter
