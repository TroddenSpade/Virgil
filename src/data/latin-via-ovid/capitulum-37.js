// Capitulum XXXVII — ACHAEMENIDES
// Source: Goldman & Nyenhuis, Latin via Ovid: A First Course (2nd ed., 1982)
// Reading text, vocabulary, grammar and exercises adapted for the web.

const chapter = {
  number: 37,
  roman: 'XXXVII',
  slug: 'achaemenides',
  latinTitle: 'ACHAEMENIDES',
  title: 'Achaemenides',
  tagline: 'A Greek left behind on the island of the Cyclops is taken aboard Aeneas\' ship.',
  status: 'complete',
  overview:
    'Near Mount Aetna, Aeneas rescues Achaemenides, a Greek whom Ulysses had abandoned in the cave of ' +
    'Polyphemus. The chapter is his own account: the jaws dripping with human blood, the blinded giant ' +
    'prowling over the mountain and cursing the Greeks, the months of hiding among the rocks, and the ' +
    'Trojan ship that finally took him aboard. He then tells how Aeolus gave Ulysses the winds shut up in ' +
    'an ox-hide, and how the greedy sailors let them out. The grammar reviews the ablative of comparison ' +
    'and the genitive with verbs of remembering and forgetting.',
  objectives: [
    'Read Achaemenides\' account of Polyphemus and of the bag of the winds.',
    'Use the ablative of comparison and the alternative with quam.',
    'Use meminī and oblīvīscor with the genitive.',
    'Learn the vocabulary of fear, hiding, the sea and the monstrous.',
    'Answer questions on the reading in Latin.',
  ],
  readings: [
    {
      id: 'achaemenides',
      latinTitle: 'ACHAEMENIDES',
      title: 'Achaemenides',
      paragraphs: [
        'Dīxit Achaemenidēs: "iterum Polyphēmon et illōs\nadspiciam fluidōs hūmānō sanguine rīctūs,\nhāc mihi sī cārior domus est Īthacāque carīna,\nsī minus Aenēān veneror genitōre, nec umquam\nesse satis poterō, nōn sī dederō omnia, grātus.\nQuod loquor et spīrō caelumque et sīdera sōlis\nrespiciō, possimne ingrātus et immemor esse?\nIlle dedit, quod nōn animā haec Cyclōpis in ōra\nvēnit, et ut iam nunc lūmen vītāle relinquam,\naut tumulō aut certē nōn illā condar in alvō."',
        'Quid mihi tunc animī (nisi sī timor abstulit omnem\nsēnsum animumque) fuit, cum vōs petere alta relictus\naequora cōnspexī? Voluī inclāmāre, sed hostī\nprōdere mē timuī; vīdī, cum monte revulsum\nimmāne scopulum mediās permīsit in undās;\nvīdī iterum velutī tormentī vīribus ācta\nvāsta Gigantēō iaculantem saxa lacertō.',
        'Ille quidem tōtam gemebundus obambulat Aetnam\npraetemptatque manū silvās et lūminis orbus\nrūpibus incursat foedātaque bracchia tābō\nin mare prōtendēns gentem exsecrātur Achīvam\natque ait: "Ō sī quis referat mihi cāsus Ulixēn,\naut aliquem ē sociīs, in quem mea saeviat īra,\nvīscera cuius edam, cuius vīventia dextrā\nmembra meā laniem, cuius mihi sanguis inundet\nguttur, et ēlīsī trepident sub dentibus artūs."',
        'Mors erat ante oculōs, mē lūridus occupat horror.\nPerque diēs multōs latitāns omnemque tremīscēns\nad strepitum mortemque timēns cupidusque morīrī,\nglande famem pellēns et mixtā frondibus herbā\nhanc procul adspexī longō post tempore nāvem\nōrāvīque fugam gestū ad lītusque cucurrī,\net mōvī: Graiumque ratis Trōiāna recēpit."',
        'Aeolon ille dixit Ītalicō rēgnāre profundō,\nAeolon rēgem omnem cohibentem carcere ventōs;\nquōs bovis inclūsōs tergō, memorābile mūnus,\nDulichium sūmpsisse ducem flātūque secundō\nlūcibus īsse novem et terram aspexisse petītam;\nproxima post nōnam cum sēsē aurōra movēret,\ninvidia sociōs praedaeque cupīdine victōs\nesse; ratōs aurum dēmpsisse ligāmina ventīs;\ncum quibus īsse retrō, per quās modo vēnerat undās,\nAeoliīque ratem portūs repetīsse tyrannī.',
      ],
      notes: [
        { term: 'Achaemenidēs', gloss: 'a Greek companion of Ulysses, left behind in the cave of Polyphemus.' },
        { term: 'rīctūs fluidōs sanguine', gloss: 'jaws dripping with human blood; rīctus, -ūs, the open mouth of a beast.' },
        { term: 'cārior ... carīnā', gloss: 'dearer than this ship — ablative of comparison.' },
        { term: 'sī minus', gloss: 'if less: "if I do not revere Aeneas more than my father."' },
        { term: 'quod nōn animā ... vēnit', gloss: 'the fact that I did not come to these jaws of the Cyclops as a breathless corpse.' },
        { term: 'lūmen vītāle relinquam', gloss: 'I shall leave the light of life, i.e. I shall die.' },
        { term: 'nōn illā condar in alvō', gloss: 'I shall not be buried in that belly — he will not eat me.' },
        { term: 'animī', gloss: 'partitive genitive after quid: what courage, what state of mind.' },
        { term: 'revulsum scopulum', gloss: 'a rock torn from the mountain, hurled by the giant into the sea.' },
        { term: 'tormentī vīribus', gloss: 'with the force of a catapult; tormentum, a siege engine.' },
        { term: 'lūminis orbus', gloss: 'deprived of light — the blinded Polyphemus.' },
        { term: 'bracchia tābō foedāta', gloss: 'arms fouled with gore; tābum, -ī, putrid blood.' },
        { term: 'Dulichium ducem', gloss: 'Ulysses, from Dulichium, an island of his kingdom.' },
        { term: 'bovis tergō', gloss: 'in the hide of an ox: Aeolus sewed the winds into a bag of ox-hide.' },
        { term: 'ligāmina ventīs', gloss: 'the fastenings of the winds; the sailors untied the bag, thinking it held gold.' },
      ],
    },
  ],
  grammar: [
    {
      id: 'ablativus-comparationis',
      latinTitle: 'Ablātīvus Compāratiōnis',
      title: 'The Ablative of Comparison',
      intro:
        'After a comparative — cārior, melior, minor, peior — the idea "than" may be expressed either by ' +
        'quam with the same case as the word compared, or by putting the second word in the ablative. The ' +
        'ablative of comparison is regular in negative sentences.',
      paradigms: [
        {
          caption: 'duae viae comparātiōnis',
          head: ['Cum quam', 'Sine quam (ablātīvus)'],
          rows: [
            ['Honor est grātior quam opēs.', 'Honor est grātior opibus.'],
            ['Caesar minor est quam Cicerō.', 'Caesar minor est Cicerōne.'],
            ['Nihil est peius quam servitūs.', 'Nihil est peius servitūte.'],
            ['Domus est cārior quam haec carīna.', 'Domus est cārior hāc carīnā.'],
          ],
        },
      ],
      points: [
        'With quam both words stand in the same case: Caesar minor est quam Cicerō.',
        'With the ablative of comparison the second word is put in the ablative and quam is omitted: Caesar minor est Cicerōne.',
        'The ablative of comparison is especially common after nihil and in negative sentences: Nihil est peius servitūte.',
        'Do not use the ablative of comparison when the first word is itself a nominative or accusative that could be confused with an ablative; Latin prefers quam there.',
        'The comparative may be recognised by its ending -ior (m./f.) or -ius (n.); the ablative of comparison depends on that comparative.',
      ],
    },
    {
      id: 'memini-obliviscor',
      latinTitle: 'Meminī et Oblīvīscor',
      title: 'Remembering and Forgetting',
      intro:
        'The verbs of remembering and forgetting usually take an objective genitive: one remembers or ' +
        'forgets a person or thing. In poetry they may also take the accusative. Meminī is defective, with ' +
        'no present system; oblīvīscor is deponent.',
      paradigms: [
        {
          caption: 'genetīvus obiectīvus',
          head: ['Verbum', 'Exemplum', 'Significātiō'],
          rows: [
            ['meminī, meminisse', 'Vivōrum meminī.', 'I remember the living.'],
            ['meminī, meminisse', 'Virtūtis mīlitum meminit.', 'He remembered the courage of the soldiers.'],
            ['oblīvīscor, oblīvīscī, oblītus sum', 'Flammārum oblītus est.', 'He forgot the flames.'],
            ['oblīvīscor (accūsātīvus poēticus)', 'Flammās oblītus est.', 'He forgot the flames.'],
          ],
        },
      ],
      points: [
        'Meminī is perfect in form but present in meaning: meminī — I remember; memineram — I remembered.',
        'Oblīvīscor is deponent: oblīvīscor, oblīvīscī, oblītus sum — I forget.',
        'Both verbs normally take the genitive: meminī amīcōrum, oblīvīscor īrae.',
        'The accusative with these verbs belongs to poetry and later prose; the book notes it as an occasional alternative.',
        'Other verbs of feeling and memory, such as recordor and admoneō, take different constructions and should be learnt separately.',
      ],
    },
    {
      id: 'auxilia-interpretandi',
      latinTitle: 'Auxilia Interpretandī',
      title: 'Aids in Translation',
      intro:
        'From this chapter the reading is printed with its vocabulary and notes immediately below the passage, ' +
        'so that the Latin may be read first for sound and sense.',
      points: [
        'Read the Latin once or twice through before looking at the notes; listen for the metre and the shape of the sentence.',
        'Find the verb first. If it is first or second person, the speaker or addressee is the subject; if third person, look along the line for the subject.',
        'Know the endings of subject, object, prepositional object, possessive and indirect object in all genders, and expect poetry to separate words that belong together.',
        'Watch for words that introduce subordinate clauses — cum, ut, quod, sī, dum — and for indirect statement after verbs of saying, thinking and feeling.',
        'In verse, word order is governed by metre, chiasmus and interlocking patterns; read the whole sentence before assigning the cases.',
      ],
    },
  ],
  vocabulary: [
    { latin: 'rīctus, -ūs', english: 'jaw, open mouth', pos: 'noun m.' },
    { latin: 'cārus, -a, -um', english: 'dear, beloved', pos: 'adjective' },
    { latin: 'carīna, -ae', english: 'keel; ship', pos: 'noun f.' },
    { latin: 'genitor, -ōris', english: 'father, parent', pos: 'noun m.' },
    { latin: 'animus, -ī', english: 'mind, spirit, courage', pos: 'noun m.' },
    { latin: 'aequor, -oris', english: 'sea, level surface', pos: 'noun n.' },
    { latin: 'scopulus, -ī', english: 'rock, cliff', pos: 'noun m.' },
    { latin: 'lacertus, -ī', english: 'arm, upper arm', pos: 'noun m.' },
    { latin: 'rūpēs, -is', english: 'rock, cliff', pos: 'noun f.' },
    { latin: 'gēns, gentis', english: 'race, people, clan', pos: 'noun f.' },
    { latin: 'vīscera, -um', english: 'entrails, inner organs', pos: 'noun n. pl.' },
    { latin: 'guttur, -uris', english: 'throat', pos: 'noun n.' },
    { latin: 'artus, -ūs', english: 'joint; (pl.) limbs', pos: 'noun m.' },
    { latin: 'mors, mortis', english: 'death', pos: 'noun f.' },
    { latin: 'horror, -ōris', english: 'horror, dread', pos: 'noun m.' },
    { latin: 'strepitus, -ūs', english: 'noise, din', pos: 'noun m.' },
    { latin: 'famēs, famis', english: 'hunger', pos: 'noun f.' },
    { latin: 'gestus, -ūs', english: 'gesture', pos: 'noun m.' },
    { latin: 'carcer, carceris', english: 'prison, enclosure', pos: 'noun m.' },
    { latin: 'bōs, bovis', english: 'ox, cow', pos: 'noun m./f.' },
    { latin: 'tergum, -ī', english: 'back, hide', pos: 'noun n.' },
    { latin: 'mūnus, -eris', english: 'gift, duty', pos: 'noun n.' },
    { latin: 'flātus, -ūs', english: 'blowing, breeze', pos: 'noun m.' },
    { latin: 'invidia, -ae', english: 'envy, jealousy', pos: 'noun f.' },
    { latin: 'praeda, -ae', english: 'booty, plunder', pos: 'noun f.' },
    { latin: 'portus, -ūs', english: 'harbour', pos: 'noun m.' },
    { latin: 'veneror, -ārī, -ātus sum', english: 'to revere, worship', pos: 'verb (deponent)' },
    { latin: 'spīrō (1)', english: 'to breathe, live', pos: 'verb' },
    { latin: 'inclāmō (1)', english: 'to shout out', pos: 'verb' },
    { latin: 'prōdō, -ere, -didī, -ditum', english: 'to betray, hand over', pos: 'verb' },
    { latin: 'iaculor, -ārī, -ātus sum', english: 'to hurl, throw', pos: 'verb (deponent)' },
    { latin: 'exsecror, -ārī, -ātus sum', english: 'to curse', pos: 'verb (deponent)' },
    { latin: 'saeviō, -īre, -iī, -ītum', english: 'to rage, be fierce', pos: 'verb' },
    { latin: 'ēdō, -ere, ēdī, ēsum', english: 'to eat, devour', pos: 'verb' },
    { latin: 'latitō (1)', english: 'to hide, lurk', pos: 'verb' },
    { latin: 'morior, morī, mortuus sum', english: 'to die', pos: 'verb (deponent)' },
    { latin: 'adspiciō, -ere, -spēxī, -spectum', english: 'to catch sight of', pos: 'verb' },
    { latin: 'rēgnō (1)', english: 'to rule, reign', pos: 'verb' },
    { latin: 'cohibeō, -ēre, -uī, -itum', english: 'to hold in, confine', pos: 'verb' },
    { latin: 'inclūdō, -ere, -sī, -sum', english: 'to shut up, enclose', pos: 'verb' },
    { latin: 'sūmō, -ere, sūmpsī, sūmptum', english: 'to take, take up', pos: 'verb' },
    { latin: 'immemor, -oris', english: 'forgetful, unmindful (+ gen.)', pos: 'adjective' },
    { latin: 'immānis, -e', english: 'huge, monstrous', pos: 'adjective' },
    { latin: 'cupidus, -a, -um', english: 'eager, greedy (+ gen.)', pos: 'adjective' },
    { latin: 'procul', english: 'far off', pos: 'adverb' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PĒNSVM A',
      title: 'Quaestiōnēs',
      instruction: 'Answer each question in a complete Latin sentence, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'Ubi ōlim habitābat Achaemenidēs?', a: 'Achaemenidēs ōlim in īnsulā Cyclōpis habitābat, in terrā Siciliā.' },
        { q: 'Quālēs rīctūs Polyphēmus habet?', a: 'Polyphēmus rīctūs fluidōs hūmānō sanguine habet.' },
        { q: 'Quem Achaemenidēs venerātus est?', a: 'Achaemenidēs Aenēān venerātus est, quī eum servāvit.' },
        { q: 'Cum Achaemenidēs nāvem Trōiānam vidēret, quid voluit facere?', a: 'Cum nāvem vidēret, Achaemenidēs inclāmāre voluit.' },
        { q: 'Cūr nōn inclāmāvit?', a: 'Nōn inclāmāvit, quod hostī sē prōdere timuit.' },
        { q: 'Quid Polyphēmus eō tempore faciēbat?', a: 'Polyphēmus tōtam Aetnam obambulābat et saxa in mare iaculābātur.' },
        { q: 'Quibus rēbus Achaemenidēs famem pellit dum latet?', a: 'Glande et mixtā frondibus herbā famem pellit.' },
        { q: 'Quāle mūnus Aeolus Ulixī dedit?', a: 'Aeolus Ulixī ventōs in bovis tergō inclūsōs dedit.' },
        { q: 'Quī dōnum Aeolī aperuērunt?', a: 'Sociī Ulixis dōnum Aeolī aperuērunt.' },
        { q: 'Cūr aperuērunt hoc dōnum?', a: 'Id aperuērunt, quod aurum in eō esse ratī sunt et praedae cupidī erant.' },
      ],
    },
    {
      id: 'pensum-b',
      latinLabel: 'PĒNSVM B',
      title: 'Ablative of comparison',
      instruction:
        'Supply the correct form of the ablative of comparison. The English word in brackets gives the sense.',
      type: 'fill',
      items: [
        'Sanguis est dēnsior {{aquā}} (water: aqua, -ae).',
        'Amīcī sunt meliōrēs {{cognātīs}} (relatives: cognātī, -ōrum).',
        'Cōnsilia tua sunt clāriōra {{lūce}} (light: lūx, lūcis).',
        'Nēmō est laetior {{mē}} (I: ego).',
        'Quis est crūdēlior {{tē}}? (you: tū)',
        'Quis est clārior {{Ulixe}}? (Ulysses: Ulixēs, -is)',
        'Quid est cārius {{aurō}}? (gold: aurum, -ī)',
        'Exēgī monumentum perennius {{aere}} (bronze: aes, aeris).',
        'Verba eius dulciōra {{melle}} erant (honey: mel, mellis).',
        'Estne patria cārior {{vītā}}? (life: vīta, -ae)',
      ],
    },
    {
      id: 'pensum-c',
      latinLabel: 'PĒNSVM C',
      title: 'Objective genitive',
      instruction:
        'Supply the correct genitive after meminī or oblīvīscor. Use the case and number required by the English.',
      type: 'fill',
      items: [
        '{{Amīcōrum}} meminit semper. (friends)',
        '{{Hostium}} numquam oblītus est. (enemies)',
        '{{Graecōrum}} meminerat. (Greeks)',
        '{{Cibī et vīnī}} oblītī sunt. (food and wine)',
        '{{Patriae}} oblītī erant. (fatherland: patria, -ae)',
      ],
    },
  ],
}

export default chapter
