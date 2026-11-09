// Capitulum VI — LATONA ET NIOBE
// Source: Goldman & Nyenhuis, Latin via Ovid: A First Course (2nd ed., 1982)
// Reading text, vocabulary, grammar and exercises adapted for the web.

const chapter = {
  number: 6,
  roman: 'VI',
  slug: 'latona-et-niobe-1',
  latinTitle: 'LATONA ET NIOBE',
  title: 'Latona and Niobe (Part 1)',
  tagline:
    'Queen Niobe boasts of her seven sons and seven daughters and scorns the goddess Latona, mother of only two children.',
  status: 'complete',
  overview:
    'The story of Niobe opens. Proud of her fourteen children, the queen of Thebes claims to surpass the goddess Latona and ' +
    'demands the worship that the women of Thebes have been giving to Latona, Phoebus and Diana. The chapter introduces the ' +
    'second declension in -us, -er and -um, the agreement of adjectives, the cardinal numbers and the few masculine nouns of ' +
    'the first declension.',
  objectives: [
    'Read the first half of the story of Latona and Niobe in Latin.',
    'Decline second declension nouns in -us, -er and -um.',
    'Make adjectives agree with their nouns in case, number and gender.',
    'Recognise the cardinal numbers and Roman numerals.',
    'Use the masculine first declension nouns poēta, nauta, pīrāta and agricola.',
  ],
  readings: [
    {
      id: 'latona-et-niobe',
      latinTitle: 'LATONA ET NIOBE',
      title: 'Latona and Niobe',
      paragraphs: [
        'Poēta Ovidius fābulam dē deā Lātōnā et dē fēminā Nīobē nārrat. Nīobē, rēgīna Thēbārum, erat superba. Erat superba quod septem fīliōs et septem fīliās habēbat. Sē et līberōs suōs laudābat. “Causa superbiae meae nōn est potentia familiae et amīcōrum, sed fāma līberōrum meōrum.”',
        'Dea Lātōna quoque līberōs clārōs habēbat. Fīlius erat deus Phoebus Apollo et fīlia erat dea Diāna.',
        'Mantō erat fēmina oppidī Thēbārum. Mantō multam sapientiam habēbat. In viīs oppidī ambulābat et monēbat fēminās ita: “Date dōna Lātōnae et līberīs quoque Lātōnae, Phoebō et Diānae. Lātōna est dea fēminārum.” Itaque fēminae Thēbārum āram deae in templō ōrnant; ibi dōna deīs deābusque dant et tūra sanctīs flammīs dant.',
        'Ecce Nīobē pulchra et superba cum fēminīs in viā oppidī ambulābat. Stat et oculīs superbīs circumspectat; fēminās Thēbārum vocat et clāmat: “Cūr Lātōnam ōrātis? Nēmō mē ōrat. Sum fīlia avōrum clārōrum. Sum rēgīna rēgiae Cadmī. Pulchra sum, digna deae. Sed maximē beāta sum quod septem puerōs et septem fīliās habeō. Rogāte nunc causam superbiae meae. Cūr Lātōna mihi praestat? Lātōna ūnum fīlium et ūnam fīliam sōlum habet. Fortūna mihi septem dat. Fēminae, ōrāte mē, nōn Lātōnam. Date dōna mihi, nōn Lātōnae.”',
        'Itaque fēminae Thēbārum dōna rēgīnae superbae, nōn Lātōnae dabant.',
      ],
      notes: [
        { term: 'Nīobē, rēgīna Thēbārum', gloss: 'Niobe, queen of Thebes (Thēbae is plural in Latin).' },
        { term: 'Lātōna, -ae', gloss: 'Latona, mother of Apollo and Diana.' },
        { term: 'multam sapientiam', gloss: 'much wisdom; classical Latin more often uses the partitive genitive, multum sapientiae.' },
        { term: 'fīlia, dea', gloss: 'dative and ablative plural fīliābus, deābus, to distinguish them from the masculine forms fīliīs, deīs.' },
        { term: 'tūra', gloss: 'incense, frankincense, burnt on the altar.' },
        { term: 'deīs deābusque', gloss: 'to the gods and goddesses.' },
        { term: 'oculīs superbīs', gloss: 'with proud eyes — ablative of means.' },
        { term: 'avōrum clārōrum', gloss: 'of famous grandfathers; Niobe’s grandfathers were Atlas and Jupiter.' },
        { term: 'rēgia Cadmī', gloss: 'the palace of Cadmus, founder and first king of Thebes.' },
        { term: 'digna deae', gloss: 'worthy of a goddess; dīgnus takes the ablative or genitive.' },
      ],
    },
  ],
  grammar: [
    {
      id: 'secunda-declinatio',
      latinTitle: 'Secunda Dēclīnātiō',
      title: 'The Second Declension',
      intro:
        'The second declension contains masculine nouns in -us and -er and neuter nouns in -um. ' +
        'The endings are the same for all three groups except in the nominative and accusative.',
      paradigms: [
        {
          caption: 'second declension nouns',
          head: ['', 'Masculīnum -us', 'Masculīnum -er', 'Neutrum -um'],
          rows: [
            ['Sing. Nōm.', 'amīcus', 'puer', 'templum'],
            ['Gen.', 'amīcī', 'puerī', 'templī'],
            ['Dat.', 'amīcō', 'puerō', 'templō'],
            ['Acc.', 'amīcum', 'puerum', 'templum'],
            ['Abl.', 'amīcō', 'puerō', 'templō'],
            ['Plūr. Nōm.', 'amīcī', 'puerī', 'templa'],
            ['Gen.', 'amīcōrum', 'puerōrum', 'templōrum'],
            ['Dat.', 'amīcīs', 'puerīs', 'templīs'],
            ['Acc.', 'amīcōs', 'puerōs', 'templa'],
            ['Abl.', 'amīcīs', 'puerīs', 'templīs'],
          ],
        },
      ],
      points: [
        'The genitive singular gives the stem: amīcī, puerī, templī.',
        'The vocative is the same as the nominative except for masculine nouns in -us: amīce, puer, templum.',
        'The neuter nominative and accusative are alike in the singular (-um) and in the plural (-a).',
      ],
    },
    {
      id: 'consensio-adiectivorum',
      latinTitle: 'Cōnsēnsiō Adiectīvōrum',
      title: 'Agreement of Adjectives',
      intro:
        'An adjective agrees with the noun it modifies in case, number and gender. ' +
        'The regular second declension adjectives use the endings of amīcus and templum, and the first declension ending -a for the feminine.',
      paradigms: [
        {
          caption: 'bonus, bona, bonum',
          head: ['', 'M.', 'F.', 'N.'],
          rows: [
            ['Sing. Nōm.', 'bonus', 'bona', 'bonum'],
            ['Gen.', 'bonī', 'bonae', 'bonī'],
            ['Dat.', 'bonō', 'bonae', 'bonō'],
            ['Acc.', 'bonum', 'bonam', 'bonum'],
            ['Abl.', 'bonō', 'bonā', 'bonō'],
            ['Plūr. Nōm.', 'bonī', 'bonae', 'bona'],
            ['Gen.', 'bonōrum', 'bonārum', 'bonōrum'],
            ['Dat.', 'bonīs', 'bonīs', 'bonīs'],
            ['Acc.', 'bonōs', 'bonās', 'bona'],
            ['Abl.', 'bonīs', 'bonīs', 'bonīs'],
          ],
        },
        {
          caption: 'noun and adjective together',
          head: ['', 'Singulāris', 'Plūrālis'],
          rows: [
            ['amīcus bonus', 'amīcus bonus', 'amīcī bonī'],
            ['amīca bona', 'amīca bona', 'amīcae bonae'],
            ['dōnum bonum', 'dōnum bonum', 'dōna bona'],
            ['puer bonus', 'puer bonus', 'puerī bonī'],
          ],
        },
      ],
      points: [
        'The adjective must agree in case, number and gender, but it does not always have the same ending: puer bonus, puerī bonī.',
        'A noun and its adjective may be separated in the sentence: fāma līberōrum meōrum, the fame of my children.',
      ],
    },
    {
      id: 'numeri-cardinales',
      latinTitle: 'Numerī Cardinālēs',
      title: 'Cardinal Numbers',
      intro:
        'The cardinal numbers answer the question quot? — how many? They normally precede the noun they modify: ' +
        'septem fīliōs, ūnam fīliam. All are indeclinable except ūnus, duo and trēs.',
      paradigms: [
        {
          caption: 'cardinal numbers 1–12',
          head: ['', 'Latīnē', 'Rōmānē'],
          rows: [
            ['1', 'ūnus', 'I'],
            ['2', 'duo', 'II'],
            ['3', 'trēs', 'III'],
            ['4', 'quattuor', 'IV'],
            ['5', 'quinque', 'V'],
            ['6', 'sex', 'VI'],
            ['7', 'septem', 'VII'],
            ['8', 'octō', 'VIII'],
            ['9', 'novem', 'IX'],
            ['10', 'decem', 'X'],
            ['11', 'ūndecim', 'XI'],
            ['12', 'duodecim', 'XII'],
          ],
        },
        {
          caption: 'Roman numerals by subtraction and addition',
          head: ['Numerus', 'Rōmānē'],
          rows: [
            ['40', 'XL'],
            ['60', 'LX'],
            ['79', 'LXXIX'],
            ['1975', 'MCMLXXV'],
          ],
        },
      ],
      points: [
        'A smaller numeral before a larger one is subtracted: IV = 4, IX = 9, XL = 40.',
        'A numeral after a larger one is added: VI = 6, XI = 11, LX = 60.',
        'ūnus, duo and trēs are declined; the other cardinals are indeclinable.',
      ],
    },
    {
      id: 'masculina-primae-declinationis',
      latinTitle: 'Masculīna Prīmae Dēclīnātiōnis',
      title: 'Masculine Nouns of the First Declension',
      intro:
        'A few first declension nouns in -a are masculine by natural gender: agricola (farmer), nauta (sailor), ' +
        'pīrāta (pirate) and poēta (poet). Adjectives modifying them must also be masculine.',
      paradigms: [
        {
          caption: 'poēta, -ae, m.',
          head: ['', 'Singulāris', 'Plūrālis'],
          rows: [
            ['Nōm.', 'poēta', 'poētae'],
            ['Gen.', 'poētae', 'poētārum'],
            ['Dat.', 'poētae', 'poētīs'],
            ['Acc.', 'poētam', 'poētās'],
            ['Abl.', 'poētā', 'poētīs'],
          ],
        },
      ],
      points: [
        'poēta clārus — a famous poet; pīrāta malus — a bad pirate; agricolae multī — many farmers.',
        'All other first declension nouns are feminine: rēgīna superba, fāma clāra.',
      ],
    },
  ],
  vocabulary: [
    { latin: 'āra, -ae', english: 'altar', pos: 'noun f.' },
    { latin: 'causa, -ae', english: 'cause, reason', pos: 'noun f.' },
    { latin: 'Diāna, -ae', english: 'Diana (goddess of the moon and the hunt)', pos: 'noun f.' },
    { latin: 'dōnum, -ī', english: 'gift', pos: 'noun n.' },
    { latin: 'fāma, -ae', english: 'reputation, report, fame', pos: 'noun f.' },
    { latin: 'familia, -ae', english: 'family', pos: 'noun f.' },
    { latin: 'fīlius, -iī', english: 'son', pos: 'noun m.' },
    { latin: 'flamma, -ae', english: 'flame', pos: 'noun f.' },
    { latin: 'fortūna, -ae', english: 'fortune', pos: 'noun f.' },
    { latin: 'Graecia, -ae', english: 'Greece', pos: 'noun f.' },
    { latin: 'Lātōna, -ae', english: 'Latona (mother of Apollo and Diana)', pos: 'noun f.' },
    { latin: 'līberī, -ōrum', english: 'children', pos: 'noun m. pl.' },
    { latin: 'Mantō, -ūs', english: 'Manto (a wise woman)', pos: 'noun f.' },
    { latin: 'Nīobē, -ēs', english: 'Niobe (a queen)', pos: 'noun f.' },
    { latin: 'oculus, -ī', english: 'eye', pos: 'noun m.' },
    { latin: 'oppidum, -ī', english: 'town', pos: 'noun n.' },
    { latin: 'Phoebus, -ī', english: 'Phoebus Apollo', pos: 'noun m.' },
    { latin: 'potentia, -ae', english: 'power', pos: 'noun f.' },
    { latin: 'puer, -erī', english: 'boy', pos: 'noun m.' },
    { latin: 'rēgia, -ae', english: 'palace', pos: 'noun f.' },
    { latin: 'superbia, -ae', english: 'pride', pos: 'noun f.' },
    { latin: 'templum, -ī', english: 'temple', pos: 'noun n.' },
    { latin: 'Thēbae, -ārum', english: 'Thebes (the city)', pos: 'noun f. pl.' },
    { latin: 'via, -ae', english: 'street, road', pos: 'noun f.' },
    { latin: 'circumspectō, -āre, -āvī, -ātum', english: 'look about, cast a glance', pos: 'verb' },
    { latin: 'moneō, -ēre, -uī, -itum', english: 'warn, advise', pos: 'verb' },
    { latin: 'ōrnō, -āre, -āvī, -ātum', english: 'decorate, adorn', pos: 'verb' },
    { latin: 'ōrō, -āre, -āvī, -ātum', english: 'beg for, ask for, pray to, implore', pos: 'verb' },
    { latin: 'praestō, -āre, -stitī, -stitum', english: 'stand before, surpass (+ dat.)', pos: 'verb' },
    { latin: 'rogō, -āre, -āvī, -ātum', english: 'ask', pos: 'verb' },
    { latin: 'stō, -āre, stetī, statum', english: 'stand', pos: 'verb' },
    { latin: 'beātus, -a, -um', english: 'happy, blessed', pos: 'adj.' },
    { latin: 'clārus, -a, -um', english: 'famous, illustrious, bright, shining, clear', pos: 'adj.' },
    { latin: 'dīgnus, -a, -um', english: 'worthy, worth (+ abl. or gen.)', pos: 'adj.' },
    { latin: 'multus, -a, -um', english: 'much; (pl.) many', pos: 'adj.' },
    { latin: 'sanctus, -a, -um', english: 'sacred', pos: 'adj.' },
    { latin: 'septem', english: 'seven', pos: 'numeral' },
    { latin: 'suus, -a, -um', english: 'his own, her own, its own, their own', pos: 'adj.' },
    { latin: 'ūnus, -a, -um', english: 'one, only', pos: 'adj.' },
    { latin: 'cūr', english: 'why', pos: 'adv.' },
    { latin: 'ecce', english: 'behold', pos: 'adv.' },
    { latin: 'ibi', english: 'there', pos: 'adv.' },
    { latin: 'sōlum', english: 'only', pos: 'adv.' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PĒNSVM A',
      title: 'Respondēte Latīnē',
      instruction: 'Answer each question with a complete Latin sentence, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'Habetne Nīobē septem fīliōs?', a: 'Ita, Nīobē septem fīliōs habet.' },
        { q: 'Habetne Lātōna septem fīliōs? duōs fīliōs? ūnum fīlium?', a: 'Lātōna septem fīliōs nōn habet; ūnum fīlium habet.' },
        { q: 'Habetne Lātōna septem fīliās? duās fīliās? ūnam fīliam?', a: 'Lātōna septem fīliās nōn habet; ūnam fīliam habet.' },
        { q: 'Quid est nōmen fīliae Lātōnae?', a: 'Nōmen fīliae Lātōnae est Diāna.' },
        { q: 'Quid est nōmen fīliō Lātōnae?', a: 'Nōmen fīliō Lātōnae est Phoebus.' },
        { q: 'Eratne Nīobē superba?', a: 'Ita, Nīobē erat superba.' },
        { q: 'Cūr erat Nīobē superba?', a: 'Nīobē erat superba quod septem fīliōs et septem fīliās habēbat.' },
        { q: 'Dantne fēminae dōna Lātōnae?', a: 'Nōn, fēminae dōna rēgīnae superbae, nōn Lātōnae dant.' },
        { q: 'Ubi ambulābat Nīobē?', a: 'Nīobē in viā oppidī ambulābat.' },
        { q: 'Quid dīxit Nīobē fēminīs Thēbārum?', a: 'Nīobē dīxit sē pulchram et beātam esse et fēminās iussit sē, nōn Lātōnam, ōrāre.' },
      ],
    },
    {
      id: 'pensum-b',
      latinLabel: 'PĒNSVM B',
      title: 'Dēclīnātiō et Cōnsēnsiō',
      instruction: 'Complete each form with the missing second declension ending.',
      type: 'fill',
      items: [
        'Singulāris: Nōm. amīc{{us}}, Gen. amīc{{ī}}, Dat. amīc{{ō}}, Acc. amīc{{um}}, Abl. amīc{{ō}}.',
        'Plūrālis: Nōm. amīc{{ī}}, Gen. amīc{{ōrum}}, Dat. amīc{{īs}}, Acc. amīc{{ōs}}, Abl. amīc{{īs}}.',
        'Neutrum: Nōm. templ{{um}}, Gen. templ{{ī}}, Dat. templ{{ō}}, Acc. templ{{um}}, Abl. templ{{ō}}.',
        'Neutrum plūrāle: Nōm. templ{{a}}, Gen. templ{{ōrum}}, Dat. templ{{īs}}, Acc. templ{{a}}, Abl. templ{{īs}}.',
        'Puer bon{{us}} in viā stat. Puellae bon{{ae}} in oppidō ambulant. Dōnum bon{{um}} est in templō. Dōna bon{{a}} sunt in templō.',
        'Poēta clār{{us}} fābulam nārrat. Pīrāta mal{{us}} nautās vocat. Agricolae mult{{ī}} in agrīs labōrant.',
      ],
    },
    {
      id: 'pensum-c',
      latinLabel: 'PĒNSVM C',
      title: 'Mūtāte Verbum',
      instruction: 'Change each third person singular verb into the third person plural.',
      type: 'fill',
      items: [
        'temptat → {{temptant}}; ambulat → {{ambulant}}; mūtat → {{mūtant}}; dat → {{dant}}; glomerat → {{glomerant}}.',
        'est → {{sunt}}; dēbet → {{dēbent}}; certat → {{certant}}; monstrat → {{monstrant}}; simulat → {{simulant}}.',
        'circumspectat → {{circumspectant}}; habet → {{habent}}; docet → {{docent}}; ōrnat → {{ōrnant}}; stat → {{stant}}.',
        'negat → {{negant}}; ōrat → {{ōrant}}; praestat → {{praestant}}; clāmat → {{clāmant}}; habitat → {{habitant}}.',
      ],
    },
  ],
}

export default chapter
