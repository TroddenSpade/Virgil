// Capitulum XXXV — FILMING THE ODYSSEY
// Source: Goldman & Nyenhuis, Latin via Ovid: A First Course (2nd ed., 1982)
// Reading text, vocabulary, grammar and exercises adapted for the web.

const chapter = {
  number: 35,
  roman: 'XXXV',
  slug: 'filming-the-odyssey',
  latinTitle: 'FILMING THE ODYSSEY',
  title: 'Filming the Odyssey',
  tagline: 'A Latin script for a shadow-puppet film of the Odyssey, from the Cyclops to the homecoming at Ithaca.',
  status: 'complete',
  overview:
    'This chapter is a review lesson built around a short Latin script of Homer’s Odyssey, written to accompany ' +
    'a student film of shadow puppets painted on the shapes of Greek vases. The simple narrative moves from the ' +
    'Cyclops and Aeolus to the Sirens, Scylla and Circe, and ends with the return of Ulysses to Penelope. ' +
    'There is no new grammar: the lesson revisits the passive voice, participles and the imperative, and adds a ' +
    'rich vocabulary of ships, monsters and sea travel.',
  objectives: [
    'Read a continuous Latin narrative of the wanderings of Ulysses.',
    'Recognise passive forms and participles in a connected story.',
    'Review the imperative in the language of a stage script.',
    'Learn vocabulary for ships, monsters, the sea and the home.',
  ],
  readings: [
    {
      id: 'fabula-ulixis',
      latinTitle: 'FABVLA VLIXIS',
      title: 'The Story of Ulysses',
      paragraphs: [
        'Ecce urnae Graecae — crātēr, hydria, calix. Artifex colōribus urnās pingit; format pictūrās dē deīs et dē herōe Graecō, Ulixe.',
        'Ecce dea Minerva. Ecce deus Mercurius. Deus Iuppiter cum fulminibus. Deus Neptūnus, currum trāns mare agēns. Ecce classis Graecōrum, birēmis, trirēmis; servī remōs dūcentēs; ducēs ventum secundum spērantēs.',
        'Nautae ad terram ignōtam nāvigant. Ibi cyclōps Polyphemus agnōs cūrat. Polyphemus gigās crūdēlissimus erat quī sōlum ūnum oculum habēbat. Vidēte — nautam dēvorat! Sed sagāx Ulixēs ūnum oculum tēlō acūtō trāns fodit. Tum sē et suōs sub agnōs celat. Effugiunt!',
        'Iterum nāvēs ventīs trāns mare transportantur ad terram in quā Aeolus, rēx ventōrum, habitat. Ulixēs ventōs in saccō, dōnō ā rēge Aeolō, accēpit. “Nōlī aperīre hoc dōnum,” dīxit Aeolus. Trāns mare tranquillum nāvēs paene ad lītus Ithacae adveniunt. Sed saccus ventōrum ā nautīs cūriōsīs aperītur et ventī effugiunt. Magna tempestās furit. Ecce Iuppiter cum fulminibus; ignēs fulgent. Neptūnus ē marī surgit et classis Graeca fracta est, pulsa ā deō et ventīs et undīs. Laestrygonēs quoque barbarī cēterās nāvēs in fundum maris dēmittunt; nāvis Ulixis sōla effugit.',
        'Nunc appropinquant Harpyiae — avēs biformēs, capite fēminae; tum Ulixēs iubet sē ad nāvem ligārī dum nautae, auribus clausīs, Sīrēnēs effugiant. Nunc Scylla, mōnstrum maris sex capitibus nautam carpit; ecce Charybdis — cūr tam vorāx? — nāvēs, undās, avēs, vada, mōnstra dēvorat revomitque. Sed Ulixēs effugit et pervenit ad īnsulam Circae.',
        'Circē maga est quae potestātem malam habet; virōs in porcōs trānsformat. Vidēte — nunc virī, nunc porcī. Ulixēs autem dē perīculō audit. Deus Mercurius eum iuvat. Ulixēs ad rēgiam Circae venit et Circae persuādet ut virōs, nunc porcōs, in hominēs iterum trānsformet. Circē Ulixem et virōs retinēre dēsīderat, sed oportet eōs nāvigāre domum.',
        'Quae domus est in Ithaca; in rēgiā Ithacae fīda Penelopē texit dum coniūnx vīgintī annōs errat. Tempus est longum; et multī procī dēsīderant Penelopēn in mātrimōnium dūcere. Sed Ulixēs adest! Omnēs hōs virōs sagittīs necat et Penelopēn coniugem fīdam salūtat.',
        'Minerva signum facit: fīnis fābulae. Artifex fābulam fīnit. Spectāte fābulās in urnīs, discipulī. Hae scaenae moventēs factae sunt ā discipulīs dē Collegio Highland Park; magistra eōrum, Cyril Miles et coniūnx Arnold, pictūram moventem fēcērunt. Musica Graeca in fistulam ā Mary Johnson inflāta est. Sī pictūra vōbīs grāta est, plaudite nunc!',
      ],
      notes: [
        { term: 'urna, -ae', gloss: 'urn, vase; the film is projected through openings shaped like Greek vases.' },
        { term: 'crātēr, -ēris', gloss: 'a large mixing bowl for wine and water.' },
        { term: 'artifex, -ficis', gloss: 'artist, craftsman; the painter of the vases.' },
        { term: 'birēmis, trirēmis', gloss: 'with two banks of oars, with three banks — the Greek warships.' },
        { term: 'cyclōps, -is', gloss: 'the Cyclops, a one-eyed giant, here Polyphemus.' },
        { term: 'sagāx, -ācis', gloss: 'shrewd, wily — the standing epithet of Ulysses.' },
        { term: 'trānsfodiō, -ere', gloss: 'stab through, transfix: ūnum oculum tēlō acūtō trāns fodit.' },
        { term: 'Aeolus, -ī', gloss: 'king of the winds, who gives Ulysses the bag of winds.' },
        { term: 'Laestrygonēs, -um', gloss: 'a race of giants who destroy the Greek ships.' },
        { term: 'Harpyiae, -ārum', gloss: 'the Harpies, birds with women’s faces.' },
        { term: 'Sīrēnēs, -um', gloss: 'the Sirens, whose song lures sailors to death; Ulysses has himself bound to the mast.' },
        { term: 'Scylla et Charybdis', gloss: 'the monster of the cliffs and the whirlpool that devours ships.' },
        { term: 'Circē, -ae', gloss: 'the sorceress who turns the companions of Ulysses into pigs.' },
        { term: 'procī', gloss: 'suitors, the noblemen who press Penelope to marry.' },
        { term: 'Penelopē, -ae', gloss: 'the faithful wife of Ulysses, who waits twenty years for his return.' },
      ],
    },
  ],
  grammar: [
    {
      id: 'repetitio-passivum',
      latinTitle: 'Repetītiō: Verbum Passīvum',
      title: 'Review: The Passive Voice',
      intro:
        'The passive voice presents the subject as receiving the action. The Latin passive is formed by special ' +
        'endings in the present system and by the perfect participle with a form of sum in the perfect system. ' +
        'The reading uses the passive constantly: the ships are carried by the winds, the sack is opened, the ' +
        'fleet is broken, the men are changed into pigs.',
      paradigms: [
        {
          caption: 'pellō, pellere, pepulī, pulsum — passive',
          head: ['Tempus', 'Forma', 'Significātiō'],
          rows: [
            ['praesēns', 'pellor, pelleris, pellitur', 'I am driven, you are driven, he is driven'],
            ['imperfectum', 'pellēbar, pellēbāris, pellēbātur', 'I was being driven'],
            ['futūrum', 'pellar, pellēris, pellētur', 'I shall be driven'],
            ['perfectum', 'pulsus sum, pulsus es, pulsus est', 'I have been driven'],
            ['plūsquamperfectum', 'pulsus eram, pulsus erās, pulsus erat', 'I had been driven'],
            ['futūrum perfectum', 'pulsus erō, pulsus eris, pulsus erit', 'I shall have been driven'],
          ],
        },
        {
          caption: 'passīvum in fābulā',
          head: ['Exemplum', 'Forma', 'Significātiō'],
          rows: [
            ['Nāvēs ventīs trāns mare transportantur.', 'praesēns passīvum', 'The ships are carried across the sea by the winds.'],
            ['Saccus ventōrum ā nautīs aperītur.', 'praesēns passīvum', 'The sack of winds is opened by the sailors.'],
            ['Classis Graeca fracta est.', 'perfectum passīvum', 'The Greek fleet was broken.'],
            ['Virī in porcōs trānsformantur.', 'praesēns passīvum', 'The men are changed into pigs.'],
          ],
        },
      ],
      points: [
        'The personal endings of the passive are -r, -ris, -tur, -mur, -minī, -ntur.',
        'The imperfect passive adds -bar, -bāris, -bātur to the present stem: pellēbar, pellēbāris.',
        'The future passive adds -bor, -beris, -bitur: pellar, pellēris, pellētur.',
        'The perfect passive is the perfect participle plus sum: pulsus sum, pulsus es, pulsus est.',
        'The agent of a passive verb is expressed by ā or ab with the ablative: ā nautīs, by the sailors.',
        'The means or instrument is in the plain ablative: ventīs, by the winds; sagittīs, with arrows.',
      ],
    },
    {
      id: 'repetitio-participia-imperativus',
      latinTitle: 'Repetītiō: Participia et Imperātīvus',
      title: 'Review: Participles and the Imperative',
      intro:
        'The film script is full of participles and direct commands: the painter is a man painting, the sailors ' +
        'are men rowing, and the audience is told Vidēte! Spectāte! Plaudite! The imperative is the mood of the ' +
        'stage direction and the narrator’s invitation.',
      paradigms: [
        {
          caption: 'participia verbī dēvorō, dēvorāre, dēvorāvī, dēvorātum',
          head: ['', 'Āctīvum', 'Passīvum'],
          rows: [
            ['Praesēns', 'dēvorāns, -antis — devouring', '—'],
            ['Perfectum', '—', 'dēvorātus, -a, -um — having been devoured'],
            ['Futūrum', 'dēvorātūrus, -a, -um — about to devour', 'dēvorandus, -a, -um — about to be devoured'],
          ],
        },
        {
          caption: 'imperātīvus',
          head: ['Verbum', 'Singulāris', 'Plūrālis'],
          rows: [
            ['videō', 'vidē! — see!', 'vidēte! — see!'],
            ['spectō', 'spectā! — watch!', 'spectāte! — watch!'],
            ['plaudō', 'plaude! — applaud!', 'plaudite! — applaud!'],
            ['nōlō', 'nōlī aperīre! — do not open!', 'nōlīte aperīre! — do not open!'],
          ],
        },
      ],
      points: [
        'The present participle ends in -ns, -ntis and is declined like a third-declension adjective: dūcentēs, leading.',
        'The perfect passive participle ends in -tus or -sus: fractus, broken; pulsus, driven; clausus, closed.',
        'The future active participle ends in -tūrus: dēvorātūrus, about to devour.',
        'The gerundive ends in -ndus and expresses what must or should be done: dēvorandus, to be devoured.',
        'The imperative singular of the first conjugation ends in -ā, of the second in -ē, of the third in -e, of the fourth in -ī.',
        'The negative command uses nōlī or nōlīte with the infinitive: nōlī aperīre, do not open.',
      ],
    },
  ],
  vocabulary: [
    { latin: 'Aeolus, -ī', english: 'Aeolus, king of the winds', pos: 'noun m.' },
    { latin: 'agnus, -ī', english: 'lamb', pos: 'noun m.' },
    { latin: 'artifex, -ficis', english: 'artist, craftsman', pos: 'noun m.' },
    { latin: 'calix, -icis', english: 'drinking cup', pos: 'noun m.' },
    { latin: 'Circē, -ae', english: 'Circe, the sorceress', pos: 'noun f.' },
    { latin: 'color, -ōris', english: 'colour', pos: 'noun m.' },
    { latin: 'crātēr, -ēris', english: 'large mixing bowl', pos: 'noun m.' },
    { latin: 'Cyclōps, -is', english: 'Cyclops, the one-eyed giant', pos: 'noun m.' },
    { latin: 'fulmen, -inis', english: 'lightning, thunderbolt', pos: 'noun n.' },
    { latin: 'fundus, -ī', english: 'bottom, depths', pos: 'noun m.' },
    { latin: 'gigās, -antis', english: 'giant', pos: 'noun m.' },
    { latin: 'Harpyiae, -ārum', english: 'the Harpies, half woman, half bird', pos: 'noun f. pl.' },
    { latin: 'hydria, -ae', english: 'large water jar', pos: 'noun f.' },
    { latin: 'Ithaca, -ae', english: 'Ithaca, the island home of Ulysses', pos: 'noun f.' },
    { latin: 'Laestrygon, -onis', english: 'a Laestrygonian, one of a race of giants', pos: 'noun m.' },
    { latin: 'maga, -ae', english: 'witch, sorceress', pos: 'noun f.' },
    { latin: 'nauta, -ae', english: 'sailor', pos: 'noun m.' },
    { latin: 'Penelopē, -ae', english: 'Penelope, wife of Ulysses', pos: 'noun f.' },
    { latin: 'Polyphemus, -ī', english: 'Polyphemus, the Cyclops', pos: 'noun m.' },
    { latin: 'porcus, -ī', english: 'pig, swine', pos: 'noun m.' },
    { latin: 'potestās, -ātis', english: 'power, ability', pos: 'noun f.' },
    { latin: 'remus, -ī', english: 'oar', pos: 'noun m.' },
    { latin: 'saccus, -ī', english: 'sack, bag', pos: 'noun m.' },
    { latin: 'Scylla, -ae', english: 'Scylla, a monster with six dog heads', pos: 'noun f.' },
    { latin: 'Sīrēnēs, -um', english: 'the Sirens, whose song lures sailors', pos: 'noun f. pl.' },
    { latin: 'tempestās, -ātis', english: 'storm, tempest', pos: 'noun f.' },
    { latin: 'Ulixēs, -is', english: 'Ulysses (Greek Odysseus)', pos: 'noun m.' },
    { latin: 'unda, -ae', english: 'wave, water, sea', pos: 'noun f.' },
    { latin: 'vadum, -ī', english: 'shallows, bottom of the sea', pos: 'noun n.' },
    { latin: 'dēvorō, -āre, dēvorāvī, dēvorātum', english: 'devour, swallow', pos: 'verb' },
    { latin: 'frangō, -ere, frēgī, frāctum', english: 'break, shatter', pos: 'verb' },
    { latin: 'fulgeō, -ēre, fulsī', english: 'flash, shine', pos: 'verb' },
    { latin: 'ligō, -āre, ligāvī', english: 'tie, bind', pos: 'verb' },
    { latin: 'pellō, -ere, pepulī, pulsum', english: 'drive, push', pos: 'verb' },
    { latin: 'pingō, -ere, pīnxī, pictum', english: 'paint, depict, draw', pos: 'verb' },
    { latin: 'plaudō, -ere, plausī, plausum', english: 'applaud, clap', pos: 'verb' },
    { latin: 'birēmis, -e', english: 'with two banks of oars', pos: 'adj.' },
    { latin: 'cūriōsus, -a, -um', english: 'curious, inquisitive', pos: 'adj.' },
    { latin: 'ignōtus, -a, -um', english: 'unknown, strange', pos: 'adj.' },
    { latin: 'sagāx, -ācis', english: 'wily, shrewd', pos: 'adj.' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PĒNSVM A',
      title: 'Respondēte Latīnē',
      instruction: 'Answer each question with a full Latin sentence, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'Quae sunt nōmina urnārum Graecārum?', a: 'Nōmina urnārum Graecārum sunt crātēr, hydria, calix.' },
        { q: 'Quibus signīs Iuppiter intrat?', a: 'Iuppiter fulminibus intrat.' },
        { q: 'Quis colōribus urnās pingit?', a: 'Artifex colōribus urnās pingit.' },
        { q: 'Quem ventum ducēs spērant?', a: 'Ducēs ventum secundum spērant.' },
        { q: 'Quōs Polyphemus cūrat?', a: 'Polyphemus agnōs cūrat.' },
        { q: 'Quot oculōs Polyphemus habet?', a: 'Polyphemus ūnum oculum habet.' },
        { q: 'Quōmodo Ulixēs ē spēluncā Polyphemī effugit?', a: 'Ulixēs sē et suōs sub agnīs celat et effugit.' },
        { q: 'Quis Ulixī saccum ventōrum dedit?', a: 'Aeolus, rēx ventōrum, Ulixī saccum dedit.' },
        { q: 'Ā quibus saccus ventōrum apertus est?', a: 'Saccus ventōrum ā nautīs cūriōsīs apertus est.' },
        { q: 'Quis ē marī surgit dum tempestās furit?', a: 'Neptūnus ē marī surgit dum tempestās furit.' },
        { q: 'Quī cēterās nāvēs in fundum maris dēmittunt?', a: 'Laestrygonēs barbarī cēterās nāvēs in fundum maris dēmittunt.' },
        { q: 'Suntne Harpyiae fēminae?', a: 'Harpyiae avēs biformēs sunt, capite fēminae.' },
        { q: 'Quōmodo Ulixēs Sīrēnēs effugit?', a: 'Ulixēs sē ad nāvem ligārī iubet, dum nautae auribus clausīs Sīrēnēs effugiunt.' },
        { q: 'Quot capita Scylla habet?', a: 'Scylla sex capita habet.' },
        { q: 'Quae Charybdis ēdit?', a: 'Charybdis nāvēs, undās, avēs, vada, mōnstra dēvorat revomitque.' },
        { q: 'In quōs Circē hominēs trānsformāvit?', a: 'Circē virōs in porcōs trānsformāvit.' },
        { q: 'Quis Ulixem iuvat ut potestātem malam Circae ēvītāret?', a: 'Mercurius Ulixem iuvat.' },
        { q: 'Ubi est domus Ulixis?', a: 'Domus Ulixis in Ithaca est.' },
        { q: 'Quī Penelopēn in mātrimōnium dūcere dēsīderābant?', a: 'Multī procī Penelopēn in mātrimōnium dūcere dēsīderābant.' },
      ],
    },
    {
      id: 'pensum-b',
      latinLabel: 'PĒNSVM B',
      title: 'Complete the story',
      instruction: 'Fill each gap with the missing word from the chapter.',
      type: 'fill',
      items: [
        'Artifex colōribus urnās {{pingit}}. Nautae ad terram {{ignōtam}} nāvigant. Ibi {{Polyphemus}} agnōs cūrat. Ulixēs ūnum oculum tēlō {{acūtō}} trāns fodit. Tum sē et suōs sub {{agnīs}} celat.',
        'Aeolus Ulixī {{saccum}} ventōrum dedit, sed nautae {{cūriōsī}} eum aperuērunt et ventī effūgērunt. Magna {{tempestās}} furit. Neptūnus ē marī {{surgit}} et classis Graeca {{frācta est}}.',
        'Laestrygonēs cēterās nāvēs in {{fundum}} maris dēmittunt. Circē virōs in {{porcōs}} trānsformat; Mercurius Ulixem {{iuvat}}. Postrēmō Ulixēs domum pervenit et procōs sagittīs {{necat}}.',
      ],
    },
    {
      id: 'pensum-c',
      latinLabel: 'PĒNSVM C',
      title: 'English derivatives',
      instruction: 'Name the Latin word in this chapter from which each English word is derived.',
      type: 'questions',
      items: [
        { q: 'crater', a: 'crātēr' },
        { q: 'hydria', a: 'hydria' },
        { q: 'pork', a: 'porcus' },
        { q: 'siren', a: 'Sīrēnēs' },
        { q: 'barbarian', a: 'barbarus' },
        { q: 'sack', a: 'saccus' },
        { q: 'tempest', a: 'tempestās' },
        { q: 'picture', a: 'pingō (pictūra)' },
        { q: 'textile', a: 'texō' },
        { q: 'fractile', a: 'frangō (frāctum)' },
      ],
    },
  ],
}

export default chapter



