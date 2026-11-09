// Capitulum XIII — ECHO ET NARCISSUS
// Source: Goldman & Nyenhuis, Latin via Ovid: A First Course (2nd ed., 1982)
// Reading text, vocabulary, grammar and exercises adapted for the web.
// Long vowels are marked with macra.

const chapter = {
  number: 13,
  roman: 'XIII',
  slug: 'echo-et-narcissus',
  latinTitle: 'ECHO ET NARCISSUS',
  title: 'Echo and Narcissus',
  tagline: 'A nymph who can only repeat, and a youth who loves only his own image.',
  status: 'complete',
  overview:
    'The story of Echo and Narcissus. Echo, punished by Juno, loses her own voice and can only repeat the ' +
    'words of others; Narcissus, who scorns all love, falls in love with his reflection and wastes away. ' +
    'The chapter presents the superlative of adjectives, subordinate clauses with quamquam and tamen, the ' +
    'verb posse, the ablative case, third-declension i-stems, the future perfect, the pronouns quem and sē, ' +
    'and the gender of third-declension nouns.',
  objectives: [
    'Read the story of Echo and Narcissus and answer questions about it in Latin.',
    'Form and translate the superlative of adjectives.',
    'Use quamquam ... tamen and the present tense of posse.',
    'Recognise the chief uses of the ablative case.',
    'Understand third-declension i-stems, the future perfect, quem and the reflexive pronoun sē.',
  ],
  readings: [
    {
      id: 'echo-et-narcissus',
      latinTitle: 'ECHO ET NARCISSUS',
      title: 'Echo and Narcissus',
      paragraphs: [
        'Narcissus erat iuvenis fōrmōsus et superbus. Putābat sē fōrmōsissimum esse. Quamquam multae iuvenem amāverant, tamen Narcissus nēminem praeter sē amābat.',
        'Ubi nympha Ēchō Narcissum in silvā vīdit, statim iuvenem amāvit. Ēchō adhūc et corpus et vōcem habēbat, sed vōx erat nova. Quod Ēchō Iūnōnī, rēgīnae deōrum, dolō nocuerat, nympha Iūnōnī nōn grāta erat. Iūnō dīxit: "Nōn sine poenā mihi nocueris." Ēchō vōcem habet sed sōlum respondēre potest. Verba aliōrum reportāre potest, sed sua verba nōn habet.',
        'Ōlim Narcissus cum cēterīs iuvenibus animālia fera in silvīs et montibus sequitur. Forte sōlus errat, et Ēchō iuvenem sēcrētō sequitur. Nox appropinquat et fōrmās obscūrās in silvā celat.',
        '"Quis adest?" rogat Narcissus. "Quis adest?" "Adest," respondet Ēchō. "Venī," clāmat Narcissus magnā vōce. "Venī!" "Venī," respondet Ēchō, et nympha misera iuvenem superbum bracchiīs suīs tenēre temptat.',
        '"Dēsiste," clāmat Narcissus. "Moriar antequam tibi mē dederō." "Tibi mē dederō," resonat misera Ēchō. In pudōre sē celat — in silvīs, in montibus, in spēluncīs — dōnec fōrma minima est. Vōx sōla manet. Etiam hodiē haec vōx manet. Sī vōs in montibus spēluncīsque errāveritis et "Ēchō, Ēchō," clāmāveritis, Ēchō verba vestra resonābit.',
        'Narcissus autem potestātem amōris nōn fugitāvit. Ōlim in undīs flūminis sē, iuvenem fōrmōsissimum, vīdit et imāginem suī amāvit. Cum imāginem tangere temptāvit, imāgō fugitāvit. Dēnique pervīdit sē imāginem esse. Lacrimīs aquās fontis turbāvit. Imāgō iterum fugitāvit; amor corpus iuvenis dēvorāvit; neque vigor, neque color, neque fōrma mānsit.',
        '"Valē," dīxit Narcissus, et in rīpā flūminis iacuit. "Valē." "Valē," resonāvit Ēchō. Sorōrēs Narcissī corpus iuvenis quem amāverant humāre parāvērunt. Sed prō corpore sōlum mānsit flōs — flōs appellātus Narcissus albīs foliīs.',
      ],
      notes: [
        { term: 'sē fōrmōsissimum esse', gloss: 'that he himself was most handsome; accusative and infinitive after putābat.' },
        { term: 'quamquam ... tamen', gloss: 'although ... nevertheless.' },
        { term: 'dolō', gloss: 'by a trick, by deceit (ablative of means).' },
        { term: 'nōn sine poenā mihi nocueris', gloss: 'you will not have harmed me without punishment; future perfect.' },
        { term: 'sōlum', gloss: 'only (adverb), not to be confused with sōlus, alone.' },
        { term: 'reportāre', gloss: 'to carry back, repeat, report.' },
        { term: 'sēcrētō', gloss: 'in secret, secretly.' },
        { term: 'in pudōre sē celat', gloss: 'she hides herself in shame.' },
        { term: 'dōnec', gloss: 'until.' },
        { term: 'pervīdit sē imāginem esse', gloss: 'he finally saw that he himself was the image.' },
        { term: 'prō corpore', gloss: 'in place of the body.' },
        { term: 'albīs foliīs', gloss: 'with white petals (ablative of description).' },
      ],
    },
    {
      id: 'partes-corporis',
      latinTitle: 'PARTĒS CORPORIS',
      title: 'Parts of the Body',
      paragraphs: [
        'Partēs corporis sunt caput et truncus et crura et bracchia. Partēs capitis sunt capillī, oculī, ōs, nāsus, aurēs. Bracchia manūs et digitōs habent.',
      ],
      notes: [
        { term: 'truncus, -ī', gloss: 'trunk, torso.' },
        { term: 'capillī, -ōrum', gloss: 'hair (plural).' },
        { term: 'aurēs', gloss: 'ears; singular auris, auris (f.).' },
      ],
    },
  ],
  grammar: [
    {
      id: 'superlativus',
      latinTitle: 'Superlātīvus Adiectīvōrum',
      title: 'The Superlative of Adjectives',
      intro:
        'Most adjectives form the superlative by adding -issimus, -a, -um to the stem: longus → longissimus. ' +
        'English may translate the superlative as "the longest", "most long", "very long" or "exceedingly long".',
      paradigms: [
        {
          caption: 'longissimus, -a, -um — longest',
          head: ['', 'Masculīnum', 'Fēminīnum', 'Neutrum'],
          rows: [
            ['Nōm.', 'longissimus', 'longissima', 'longissimum'],
            ['Gen.', 'longissimī', 'longissimae', 'longissimī'],
            ['Dat.', 'longissimō', 'longissimae', 'longissimō'],
            ['Acc.', 'longissimum', 'longissimam', 'longissimum'],
            ['Abl.', 'longissimō', 'longissimā', 'longissimō'],
          ],
        },
        {
          caption: 'examples',
          head: ['Positive', 'Superlative', 'English'],
          rows: [
            ['longus, -a, -um', 'longissimus, -a, -um', 'longest'],
            ['beātus, -a, -um', 'beātissimus, -a, -um', 'happiest'],
            ['pius, -a, -um', 'piissimus, -a, -um', 'most pious'],
            ['sānctus, -a, -um', 'sānctissimus, -a, -um', 'most holy'],
          ],
        },
      ],
      points: [
        'The superlative is an adjective of the first and second declension and agrees with its noun: iuvenis fōrmōsissimus, fōrma minima.',
        'The stem is taken from the genitive singular minus -ī: longī → long-, beātī → beāt-.',
        'Adjectives in -er form the superlative differently: pulcher → pulcherrimus (see Chapter XV).',
        'The superlative may be translated "very ..." when no comparison is expressed.',
      ],
    },
    {
      id: 'quamquam-posse',
      latinTitle: 'Quamquam, Tamen et Posse',
      title: 'Although, Nevertheless, and Can',
      intro:
        'A subordinate clause introduced by quamquam (although) is often balanced by a main clause introduced ' +
        'by tamen (nevertheless). Posse, can or be able, is a combination of esse and the stem pot-.',
      paradigms: [
        {
          caption: 'quamquam ... tamen',
          head: ['Latin', 'English'],
          rows: [
            ['Quamquam multae iuvenem amāverant, tamen Narcissus nēminem amābat.', 'Although many maidens had loved the youth, nevertheless Narcissus loved no one.'],
            ['Quamquam fōrma minima est, tamen vōx manet.', 'Although her form is very small, nevertheless her voice remains.'],
          ],
        },
        {
          caption: 'possum, posse, potuī — present tense',
          head: ['', 'Singulāris', 'Plūrālis'],
          rows: [
            ['1st person', 'possum — I can', 'possumus — we can'],
            ['2nd person', 'potes — you can', 'potestis — you can'],
            ['3rd person', 'potest — he/she/it can', 'possunt — they can'],
          ],
        },
      ],
      points: [
        'Quamquam introduces a fact, not a hypothetical condition: quamquam multae amāverant.',
        'Tamen need not be translated when English "although" already carries the contrast.',
        'The -t of pot- becomes -s before another -s: pot + sum → possum.',
        'The infinitive posse is a contraction of potis + esse.',
        'Ēchō sōlum respondēre potest — Echo can only reply.',
      ],
    },
    {
      id: 'casus-ablativus',
      latinTitle: 'Cāsus Ablātīvus',
      title: 'The Ablative Case',
      intro:
        'The Latin ablative combines three older cases: a true ablative of separation or source, an ' +
        'instrumental of means, manner and accompaniment, and a locative of place where and time when. ' +
        'Every ablative use can be referred to one of these three aspects.',
      paradigms: [
        {
          caption: 'the three aspects of the ablative',
          head: ['Aspect', 'Use', 'Example'],
          rows: [
            ['true ablative', 'separation, source, agent, comparison', 'sine poenā — without punishment'],
            ['instrumental', 'means', 'dolō — by a trick'],
            ['instrumental', 'manner', 'magnā vōce — in a loud voice'],
            ['instrumental', 'accompaniment', 'cum patre Iove — with his father Jupiter'],
            ['instrumental', 'description', 'albīs foliīs — with white petals'],
            ['locative', 'place where', 'in silvā — in the forest'],
            ['locative', 'time when', 'nocte — at night'],
          ],
        },
      ],
      points: [
        'Means: Phoebus fīliōs rēgīnae sagittā necāvit — by means of an arrow.',
        'Manner: Narcissus magnā vōce clāmat — in a loud voice.',
        'When no adjective modifies the noun, accompaniment uses cum: cum patre; cum may also stand between noun and adjective: magnō cum gaudiō.',
        'Place where uses in with the ablative: in silvā, in montibus, in spēluncīs.',
        'Time when uses the bare ablative: nocte, eādem hōrā.',
      ],
    },
    {
      id: 'i-stems-futurum-perfectum',
      latinTitle: 'Nōmina in -i- et Tempus Futūrum Perfectum',
      title: 'Third Declension I-Stems and the Future Perfect',
      intro:
        'Some third-declension nouns take -ium in the genitive plural. The future perfect adds the future forms ' +
        'of esse to the perfect stem; in the third person plural -erunt becomes -erint.',
      paradigms: [
        {
          caption: 'i-stem nouns',
          head: ['Latin', 'Genitive plural', 'English'],
          rows: [
            ['fīnis, fīnis', 'fīnium', 'end'],
            ['aedēs, aedis', 'aedium', 'house'],
            ['nox, noctis', 'noctium', 'night'],
            ['mōns, montis', 'montium', 'mountain'],
            ['animal, animālis', 'animālium', 'animal'],
          ],
        },
        {
          caption: 'amāverō — I shall have loved; nocuerō — I shall have harmed',
          head: ['', 'I conjugation', 'II conjugation'],
          rows: [
            ['1st sing.', 'amāverō', 'nocuerō'],
            ['2nd sing.', 'amāveris', 'nocueris'],
            ['3rd sing.', 'amāverit', 'nocuerit'],
            ['1st pl.', 'amāverimus', 'nocuerimus'],
            ['2nd pl.', 'amāveritis', 'nocueritis'],
            ['3rd pl.', 'amāverint', 'nocuerint'],
          ],
        },
      ],
      points: [
        'I-stems are either parisyllabic (fīnis, fīnis) or have one syllable in the nominative and two consonants before -is in the genitive (pars, partis).',
        'Nox, noctis and mōns, montis are i-stems because their stems end in two consonants.',
        'Neuter nouns in -e, -al and -ar take -ium: animal, animālis; mare, maris.',
        'The future perfect is common in the "if" clause of a future condition: sī errāveritis, Ēchō resonābit.',
        'The third person plural ending is -erint, not -erunt.',
      ],
    },
    {
      id: 'pronomina-genus',
      latinTitle: 'Quem, Sē et Genus Tertiae Dēclīnātiōnis',
      title: 'Quem, the Reflexive Pronoun, and Gender',
      intro:
        'Quem is both the interrogative "whom?" and the relative "whom". The reflexive pronoun sē refers back ' +
        'to the subject of its own clause. The gender of third-declension nouns follows natural gender for ' +
        'persons and a few reliable patterns for other nouns.',
      paradigms: [
        {
          caption: 'the reflexive pronoun sē',
          head: ['Case', 'Form', 'English'],
          rows: [
            ['Gen.', 'suī', 'of himself, of herself, of itself, of themselves'],
            ['Dat.', 'sibi', 'to himself, to herself, to itself, to themselves'],
            ['Acc.', 'sē (sēsē)', 'himself, herself, itself, themselves'],
            ['Abl.', 'sē (sēsē)', 'with himself, with herself, with itself, with themselves'],
          ],
        },
        {
          caption: 'gender of third-declension nouns',
          head: ['Gender', 'Endings', 'Examples'],
          rows: [
            ['masculine', '-or, -ōris', 'amor, pudor, labor'],
            ['masculine', '-tor, -tōris', 'victor, scriptor'],
            ['feminine', '-tās, -tātis', 'veritās, libertās'],
            ['feminine', '-tūs, -tūtis', 'virtūs, senectūs'],
            ['feminine', '-tūdō, -tūdinis', 'multitūdō, pulchritūdō'],
            ['feminine', '-tiō, -tiōnis', 'nātiō, ōrātiō'],
            ['neuter', '-us, -oris / -eris', 'corpus, tempus, genus'],
            ['neuter', '-e, -al, -ar', 'mare, animal, exemplar'],
            ['neuter', '-en, -inis', 'flūmen, nōmen'],
          ],
        },
      ],
      points: [
        'Interrogative: Quem in silvā vīdistī? — Whom did you see in the forest?',
        'Relative: Sorōrēs Narcissī corpus iuvenis quem amāverant humāre parāvērunt — the youth whom they had loved.',
        'The relative pronoun takes its case from its use in its own clause, not from its antecedent.',
        'Sē is the same in singular and plural: Narcissus sē amat; iuvenēs sē amant.',
        'Sēsē is an alternative form of sē, used especially for emphasis.',
      ],
    },
  ],
  vocabulary: [
    { latin: 'amor, amōris', english: 'love', pos: 'noun m.' },
    { latin: 'color, colōris', english: 'color', pos: 'noun m.' },
    { latin: 'corpus, corporis', english: 'body', pos: 'noun n.' },
    { latin: 'Ēchō, -ūs', english: 'Echo (a nymph)', pos: 'noun f.' },
    { latin: 'flōs, flōris', english: 'flower', pos: 'noun m.' },
    { latin: 'flūmen, -inis', english: 'river', pos: 'noun n.' },
    { latin: 'folium, -iī', english: 'leaf, petal', pos: 'noun n.' },
    { latin: 'fōns, fontis, -ium', english: 'fountain, pool, spring', pos: 'noun m.' },
    { latin: 'imāgō, -inis', english: 'image, reflection', pos: 'noun f.' },
    { latin: 'iuvenis, iuvenis', english: 'youth, young person', pos: 'noun c.' },
    { latin: 'mōns, montis, -ium', english: 'mountain', pos: 'noun m.' },
    { latin: 'Narcissus, -ī', english: 'Narcissus (a youth)', pos: 'noun m.' },
    { latin: 'nox, noctis, -ium', english: 'night', pos: 'noun f.' },
    { latin: 'potestās, -tātis', english: 'power', pos: 'noun f.' },
    { latin: 'pudor, -ōris', english: 'shame', pos: 'noun m.' },
    { latin: 'rīpa, -ae', english: 'bank of a river', pos: 'noun f.' },
    { latin: 'soror, -ōris', english: 'sister', pos: 'noun f.' },
    { latin: 'spēlunca, -ae', english: 'cave', pos: 'noun f.' },
    { latin: 'vigor, -ōris', english: 'liveliness, force, vigor', pos: 'noun m.' },
    { latin: 'vōx, vōcis', english: 'voice', pos: 'noun f.' },
    { latin: 'dēsistō, -ere, -stitī, -stitum', english: 'desist, stop, leave off', pos: 'verb' },
    { latin: 'dēvorō (1)', english: 'consume, devour', pos: 'verb' },
    { latin: 'humō (1)', english: 'bury', pos: 'verb' },
    { latin: 'inquit', english: 'he says, she says, said', pos: 'verb (defective)' },
    { latin: 'noceō, -ēre, -uī, -itum', english: 'harm (+ dat.)', pos: 'verb' },
    { latin: 'pervideō, -ēre, -vīdī, -vīsum', english: 'see through, discern, realize', pos: 'verb' },
    { latin: 'possum, posse, potuī', english: 'can, be able', pos: 'verb' },
    { latin: 'putō (1)', english: 'think, suppose', pos: 'verb' },
    { latin: 'reportō (1)', english: 'carry back, repeat, report', pos: 'verb' },
    { latin: 'tangō, -ere, tetigī, tactum', english: 'touch', pos: 'verb' },
    { latin: 'albus, -a, -um', english: 'white', pos: 'adjective' },
    { latin: 'alius, -a, -ud', english: 'other, another', pos: 'adjective (pronominal)' },
    { latin: 'obscūrus, -a, -um', english: 'dark, obscure', pos: 'adjective' },
    { latin: 'adhūc', english: 'until now, up to this point', pos: 'adverb' },
    { latin: 'antequam', english: 'before, sooner than', pos: 'conjunction' },
    { latin: 'forte', english: 'by chance', pos: 'adverb' },
    { latin: 'nēmō, nēminem', english: 'no one', pos: 'pronoun' },
    { latin: 'praeter', english: 'except, beyond (+ acc.)', pos: 'preposition' },
    { latin: 'prō', english: 'in place of, before, for (+ abl.)', pos: 'preposition' },
    { latin: 'quamquam', english: 'although', pos: 'conjunction' },
    { latin: 'sē, suī, sibi', english: 'himself, herself, itself, themselves', pos: 'pronoun (reflexive)' },
    { latin: 'tamen', english: 'nevertheless', pos: 'adverb' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PĒNSVM A',
      title: 'Respondēte Latīnē',
      instruction: 'Answer each question in a complete Latin sentence, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'Quis erat Narcissus?', a: 'Narcissus erat iuvenis fōrmōsus et superbus.' },
        { q: 'Quem Narcissus amābat?', a: 'Narcissus nēminem praeter sē amābat.' },
        { q: 'Cūr Ēchō vōcem novam habet?', a: 'Quod Iūnōnī dolō nocuerat, Ēchō vōcem novam habet.' },
        { q: 'Estne Ēchō Iūnōnī grāta?', a: 'Ēchō Iūnōnī nōn grāta erat.' },
        { q: 'Habetne Ēchō sua verba?', a: 'Nōn habet; sōlum verba aliōrum reportāre potest.' },
        { q: 'Ubi Narcissus animālia fera sequitur?', a: 'Narcissus animālia fera in silvīs et montibus sequitur.' },
        { q: 'Cūr nympha misera erat?', a: 'Quod Narcissus eam nōn amābat.' },
        { q: 'Ubi Ēchō sē celāvit?', a: 'Ēchō sē in silvīs, in montibus, in spēluncīs celāvit.' },
        { q: 'Quem Narcissus in flūmine vīdit?', a: 'Narcissus sē in flūmine vīdit.' },
        { q: 'Quid mānsit prō corpore iuvenis?', a: 'Flōs appellātus Narcissus albīs foliīs mānsit.' },
      ],
    },
    {
      id: 'pensum-b',
      latinLabel: 'PĒNSVM B',
      title: 'Superlatives and Posse',
      instruction: 'Complete each sentence with the superlative of the adjective in parentheses, or with the correct form of possum.',
      type: 'fill',
      items: [
        'Narcissus est {{fōrmōsissimus}}. (fōrmōsus)',
        'Callistō est deae {{cārissima}}. (cāra)',
        'Iūnō est {{īrātissima}}. (īrāta)',
        'Arachnē est {{superbissima}}. (superba)',
        'Philēmōn est {{piissimus}}. (pius)',
        'Baucis est {{piissima}}. (pia)',
        'Flamma est {{sānctissima}}. (sāncta)',
        'Nympha est {{nōtissima}}. (nōta)',
        'Lātōna est {{stultissima}}. (stulta)',
        'Īnsula est {{longissima}}. (longa)',
        'Arachnē pictūrās melius quam Minerva fōrmāre nōn {{potest}}.',
        'Ēchō fābulam nārrāre nōn {{potest}}.',
        'Narcissus aliās amāre nōn {{potest}}; sōlum sē amāre {{potest}}.',
        'Īnsulam vidēre {{possumus}}.',
        'Tū nymphas spectāre {{potes}}?',
        'Iuvenēs Narcissum vidēre nōn {{possunt}}.',
        'Ēchō verba resonāre sōlum {{potest}}.',
        'Sorōrēs flōrem vidēre {{possunt}}.',
        'Philēmōn et Baucis eādem hōrā morī {{possunt}}.',
        'Nymphae deīs grātae esse {{possunt}}.',
      ],
    },
    {
      id: 'pensum-c',
      latinLabel: 'PĒNSVM C',
      title: 'Translate into Latin',
      instruction: 'Render each English sentence in Latin, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'Handsome Narcissus loved no one except himself.', a: 'Narcissus fōrmōsus nēminem praeter sē amābat.' },
        { q: 'Echo had a voice up to this time.', a: 'Ēchō adhūc vōcem habēbat.' },
        { q: 'Juno was angry; the nymph was not pleasing to her.', a: 'Iūnō īrāta erat; nympha eī nōn grāta erat.' },
        { q: 'Narcissus used to wander with other youths in the forests and mountains.', a: 'Narcissus cum aliīs iuvenibus in silvīs et montibus errābat.' },
        { q: 'Echo had seen and had loved the youth.', a: 'Ēchō iuvenem vīderat et amāverat.' },
        { q: 'Echo can only reply; she can only report the words of Narcissus.', a: 'Ēchō sōlum respondēre potest; sōlum verba Narcissī reportāre potest.' },
        { q: 'The wretched nymph hides in caves until her form is very small.', a: 'Nympha misera in spēluncīs sē celat dōnec fōrma minima est.' },
        { q: 'If Narcissus looks in the river, he will see himself.', a: 'Sī Narcissus in flūmine vīderit, sē vidēbit.' },
        { q: 'He tries to touch the image.', a: 'Imāginem tangere temptat.' },
        { q: 'His sisters see a flower in place of the body.', a: 'Sorōrēs eius flōrem prō corpore vident.' },
      ],
    },
  ],
}

export default chapter
