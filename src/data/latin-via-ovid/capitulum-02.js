// Capitulum II — EUROPA ET TAURUS
// Source: Goldman & Nyenhuis, Latin via Ovid: A First Course (2nd ed., 1982)
// Reading text, notes, grammar and exercises adapted for the web.

const chapter = {
  number: 2,
  roman: 'II',
  slug: 'europa-et-taurus',
  latinTitle: 'EUROPA ET TAURUS',
  title: 'Europa and the Bull',
  tagline: 'Jupiter sees the maiden Europa, becomes a bull, and carries her across the sea.',
  status: 'complete',
  overview:
    'The second lesson tells how Jupiter, king of the gods, falls in love with the Phoenician princess ' +
    'Europa and carries her off in the form of a beautiful bull. The reading introduces transitive ' +
    'sentences with a direct object, the present tense of the verb, the genitive of possession, nouns in ' +
    '-us, and the preposition in with the accusative. The story is told in the historical present.',
  objectives: [
    'Read the story of Europa and the bull in the book\'s Latin.',
    'Distinguish the subject, direct object and verb in a transitive sentence.',
    'Give the three English translations of a Latin present-tense verb.',
    'Form and translate the genitive of possession.',
    'Use the second-declension endings -us, -um, -ō.',
    'Tell the difference between in with the ablative and in with the accusative.',
  ],
  readings: [
    {
      id: 'europa-et-taurus',
      latinTitle: 'EUROPA ET TAURUS',
      title: 'Europa and the Bull',
      paragraphs: [
        'Eurōpa est puella pulchra. Eurōpa in Tyrō, īnsulā in Phoenīcē, habitat. Agēnōr est rēx Phoenīcius, et Eurōpa est fīlia. Eurōpa cum amīcīs Tyriīs lūdit. Amīcae Eurōpae puellam amant, et Eurōpa amīcās amat.',
        'Iuppiter est deus. Deus Iuppiter in Olympō habitat. Ōlim terram Phoenīciam spectat. Puellam Eurōpam spectat et amat. Deus puellam dēsīderat.',
        'Sed Eurōpa est timida. Ita Iuppiter sē in taurum pulchrum trānsformat. Eurōpa taurum novum diū spectat. Amīcae Eurōpae sunt timidae. Quis est taurus? Taurus cum puellā et amīcīs lūdit. Eurōpa cum taurō lūdit. Nunc taurus nōn est novus; puella nōn est timida. Taurus nunc est amīcus. Taurus puellās in tergō portat. Nunc Eurōpam in tergō portat. Taurus cum puellā in tergō fugitat et puellam ad īnsulam Crētam portat. Deus et puella in īnsulā habitant. Īnsula est in terrā novā. Terra nova nunc est appellāta Eurōpa.',
        'Poēta Ovidius fābulam dē Eurōpā et taurō nārrat.',
      ],
      notes: [
        { term: 'Agēnōr, -ōris', gloss: 'Agenor, king of Phoenicia and father of Europa.' },
        { term: 'Phoenīcius, -a, -um', gloss: 'Phoenician, of Phoenicia: rēx Phoenīcius.' },
        { term: 'Tyrius, -a, -um', gloss: 'Tyrian, of Tyre: amīcīs Tyriīs.' },
        { term: 'Iuppiter, Iovis', gloss: 'Jupiter, king of gods and men; in Olympō — on Mount Olympus.' },
        { term: 'lūdit', gloss: 'plays; lūdit cum puellā — plays with the girl.' },
        { term: 'dēsīderat', gloss: 'longs for, desires.' },
        { term: 'timida', gloss: 'shy, timid; the maidens are frightened of the strange bull.' },
        { term: 'sē trānsformat', gloss: '"changes himself": the reflexive sē refers back to Jupiter.' },
        { term: 'tergum, -ī', gloss: 'back: in tergō portat — carries on his back.' },
        { term: 'appellāta', gloss: 'called, named: terra nova est appellāta Eurōpa.' },
        { term: 'Crēta, -ae', gloss: 'Crete, the great island of the eastern Mediterranean.' },
        { term: 'poēta Ovidius', gloss: 'the poet Ovid, who tells the story in the Metamorphoses.' },
      ],
    },
  ],
  grammar: [
    {
      id: 'possessivum-et-ordo',
      latinTitle: 'Adiectīvum Possessīvum et Ōrdō',
      title: 'The Missing Possessive; Word Order',
      intro:
        'Latin often leaves out the words for his, her, its and their when the sense is clear, and English ' +
        'must supply them. In a transitive sentence the usual order is subject, direct object, verb; the ' +
        'verb stands last for emphasis, but the endings, not the order, give the meaning.',
      paradigms: [
        {
          caption: 'the same sentence, three arrangements',
          head: ['Ōrdō', 'Sententia', 'Emphasis'],
          rows: [
            ['subiectum — obiectum — verbum', 'Deus Eurōpam amat.', 'the plain statement'],
            ['obiectum — subiectum — verbum', 'Eurōpam deus amat.', 'Eurōpa, not someone else'],
            ['verbum — subiectum — obiectum', 'Amat deus Eurōpam.', 'the loving is stressed'],
          ],
        },
      ],
      points: [
        'Agēnōr est rēx Phoenīcius et Eurōpa est fīlia. — "... and Europa is his daughter." Latin omits "his".',
        'The direct object is in the accusative: Deus Eurōpam amat.',
        'The verb commonly stands last, but it may be moved to the first place for emphasis.',
        'Word order changes emphasis, never the basic meaning.',
      ],
    },
    {
      id: 'tempus-praesens',
      latinTitle: 'Tempus Praesēns',
      title: 'The Present Tense',
      intro:
        'Every Latin present-tense verb except est and sunt may be translated in three ways: simply, ' +
        'progressively, or emphatically. The ending shows the person and number. The story is told in the ' +
        'present tense even though the events are past — the historical present, which makes the narrative vivid.',
      paradigms: [
        {
          caption: 'third person: -t and -nt',
          head: ['', 'Singulāris', 'Plūrālis'],
          rows: [
            ['amō, amāre', 'amat — he/she/it loves', 'amant — they love'],
            ['portō, portāre', 'portat — carries', 'portant — they carry'],
            ['regnō, regnāre', 'regnat — rules', 'regnant — they rule'],
            ['lūdō, lūdere', 'lūdit — plays', 'lūdunt — they play'],
            ['sum, esse', 'est — is', 'sunt — are'],
          ],
        },
      ],
      points: [
        'Poēta fābulam nārrat. — "The poet tells / is telling / does tell a story."',
        'Change final -t to -nt for the plural: amat → amant, portat → portant.',
        'These forms are third person, the person spoken of.',
        'The historical present: the whole story of Europa is told in the present, though it happened long ago.',
      ],
    },
    {
      id: 'casus-genetivus',
      latinTitle: 'Cāsus Genetīvus',
      title: 'The Genitive Case',
      intro:
        'Possession is shown by the genitive case. Latin has no separate word for "of": the idea is built ' +
        'into the noun ending. The genitive also limits or describes another noun, as in "the goddess of wisdom".',
      paradigms: [
        {
          caption: 'genitive of the first declension',
          head: ['', 'Singulāris', 'Plūrālis'],
          rows: [
            ['Genetīvus', 'puellae — of the girl, the girl\'s', 'puellārum — of the girls, the girls\''],
            ['Ēnding', '-ae', '-ārum'],
          ],
        },
      ],
      points: [
        'Amīca Eurōpae est timida. — "Europa\'s friend is shy."',
        'Amīcae poētae fābulās amant. — "The poet\'s friends like his stories."',
        'The genitive can describe as well as possess: dea sapientiae — "the goddess of wisdom".',
        'Nymphae silvae sunt pulchrae. — "The nymphs of the forest are beautiful."',
      ],
    },
    {
      id: 'nomina-in-us',
      latinTitle: 'Nōmina in -us',
      title: 'Nouns in -us',
      intro:
        'Most nouns in -us are masculine and belong to the second declension. They change to -um in the ' +
        'accusative and -ō in the ablative. The adjective agrees with its noun in case, number and gender.',
      paradigms: [
        {
          caption: 'taurus, -ī, m. — bull',
          head: ['Cāsus', 'Singulāris', 'Plūrālis'],
          rows: [
            ['Nōminātīvus', 'taurus', 'taurī'],
            ['Accūsātīvus', 'taurum', 'taurōs'],
            ['Ablātīvus', 'taurō', 'taurīs'],
          ],
        },
      ],
      points: [
        'Puella taurum novum spectat. — "The girl looks at the strange bull."',
        'Cum taurō lūdit. — "She plays with the bull."',
        'The adjective follows the noun and takes the same ending: taurum novum, taurō novō.',
        'Taurus novus est Iuppiter. — The predicate noun stays nominative after est.',
      ],
    },
    {
      id: 'in-cum-accusativo',
      latinTitle: 'In cum Accūsātīvō',
      title: 'in with the Accusative',
      intro:
        'The preposition in takes either the ablative or the accusative. With the ablative it means "in" or ' +
        '"on" and answers the question "where?"; with the accusative it means "into" and answers "whither?".',
      points: [
        'Tyrus est in Phoenīcē. — "Tyre is in Phoenicia" (ablative: place where).',
        'Taurus puellam in terram novam portat. — "The bull carries the maiden into a new land" (accusative: motion into).',
        'The vocabulary always tells which case a preposition governs.',
        'Cum ("with") takes the ablative; with a pronoun the two words are reversed and joined: mēcum, tēcum, sēcum.',
      ],
    },
  ],
  vocabulary: [
    { latin: 'amīca, -ae', english: 'friend (female)', pos: 'noun f.' },
    { latin: 'amīcus, -ī', english: 'friend (male)', pos: 'noun m.' },
    { latin: 'dea, -ae', english: 'goddess', pos: 'noun f.' },
    { latin: 'deus, -ī', english: 'god', pos: 'noun m.' },
    { latin: 'fīlia, -ae', english: 'daughter', pos: 'noun f.' },
    { latin: 'fābula, -ae', english: 'story', pos: 'noun f.' },
    { latin: 'poēta, -ae', english: 'poet', pos: 'noun m.' },
    { latin: 'rēx, rēgis', english: 'king', pos: 'noun m.' },
    { latin: 'taurus, -ī', english: 'bull', pos: 'noun m.' },
    { latin: 'tergum, -ī', english: 'back', pos: 'noun n.' },
    { latin: 'Iuppiter, Iovis', english: 'Jupiter, Jove', pos: 'noun m.' },
    { latin: 'Ovidius, -ī', english: 'Ovid, the poet', pos: 'noun m.' },
    { latin: 'Tyrus, -ī', english: 'Tyre', pos: 'noun f.' },
    { latin: 'amat', english: 'loves, likes', pos: 'verb' },
    { latin: 'dēsīderat', english: 'desires, longs for', pos: 'verb' },
    { latin: 'fugitat', english: 'flees, runs away', pos: 'verb' },
    { latin: 'lūdit', english: 'plays', pos: 'verb' },
    { latin: 'nārrat', english: 'tells, relates', pos: 'verb' },
    { latin: 'portat', english: 'carries', pos: 'verb' },
    { latin: 'spectat', english: 'watches, looks at', pos: 'verb' },
    { latin: 'trānsformat', english: 'transforms, changes', pos: 'verb' },
    { latin: 'novus, -a, -um', english: 'new, strange', pos: 'adj.' },
    { latin: 'timidus, -a, -um', english: 'shy, timid', pos: 'adj.' },
    { latin: 'Phoenīcius, -a, -um', english: 'Phoenician, of Phoenicia', pos: 'adj.' },
    { latin: 'Tyrius, -a, -um', english: 'Tyrian, of Tyre', pos: 'adj.' },
    { latin: 'ad', english: 'to, toward, near (+ accusative)', pos: 'preposition' },
    { latin: 'cum', english: 'with (+ ablative)', pos: 'preposition' },
    { latin: 'dē', english: 'about, concerning; down from (+ ablative)', pos: 'preposition' },
    { latin: 'diū', english: 'for a long time', pos: 'adverb' },
    { latin: 'nunc', english: 'now', pos: 'adverb' },
    { latin: 'ōlim', english: 'once, once upon a time', pos: 'adverb' },
    { latin: 'quis?', english: 'who?', pos: 'pronoun' },
    { latin: 'sē', english: 'himself, herself, itself, themselves', pos: 'pronoun' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PĒNSVM A',
      title: 'Questions',
      instruction: 'Answer each question in a complete Latin sentence, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'Quis est puella pulchra?', a: 'Eurōpa est puella pulchra.' },
        { q: 'Ubi habitat Eurōpa?', a: 'Eurōpa in Tyrō, īnsulā in Phoenīcē, habitat.' },
        { q: 'Quis est Iuppiter?', a: 'Iuppiter est deus.' },
        { q: 'Ubi habitat Iuppiter?', a: 'Iuppiter in Olympō habitat.' },
        { q: 'Quis Eurōpam dēsīderat?', a: 'Iuppiter Eurōpam dēsīderat.' },
        { q: 'Quis sē in taurum pulchrum trānsformat?', a: 'Iuppiter sē in taurum pulchrum trānsformat.' },
        { q: 'Quis cum puellīs lūdit?', a: 'Taurus cum puellīs lūdit.' },
        { q: 'Estne taurus timidus?', a: 'Taurus nōn est timidus; amīcae Eurōpae sunt timidae.' },
        { q: 'Ubi habitant deus et puella?', a: 'Deus et puella in īnsulā Crētā habitant.' },
        { q: 'Quis fābulam dē Eurōpā et taurō nārrat?', a: 'Poēta Ovidius fābulam dē Eurōpā et taurō nārrat.' },
      ],
    },
    {
      id: 'pensum-b',
      latinLabel: 'PĒNSVM B',
      title: 'Number and the genitive',
      instruction: 'Make the sentence plural, or supply the genitive required by the English in parentheses.',
      type: 'fill',
      items: [
        'Amīca est pulchra. → {{Amīcae}} sunt {{pulchrae}}.',
        'Charta est nova. → {{Chartae}} sunt {{novae}}.',
        'Fīlia est timida. → {{Fīliae}} sunt {{timidae}}.',
        'Fābula est nova. → {{Fābulae}} sunt {{novae}}.',
        'Rēgīna nōn est timida. → {{Rēgīnae}} nōn sunt {{timidae}}.',
        'Amīca (of the queen) est pulchra. → Amīca {{rēgīnae}} est pulchra.',
        'Fīlia (of the poet) est parva. → Fīlia {{poētae}} est parva.',
        'Amīcus (of the girl) est magnus. → Amīcus {{puellae}} est magnus.',
        'Charta (of the island) est parva. → Charta {{īnsulae}} est parva.',
        'Deus (of the land) est Iuppiter. → Deus {{terrae}} est Iuppiter.',
      ],
    },
    {
      id: 'pensum-c',
      latinLabel: 'PĒNSVM C',
      title: 'Change and translate',
      instruction: 'Change each verb to the plural and translate the sentence; then render the English sentences in Latin.',
      type: 'questions',
      items: [
        { q: 'Puella taurum spectat.', a: 'Puellae taurum spectant. — The girls watch the bull.' },
        { q: 'Amīca puellam amat.', a: 'Amīcae puellam amant. — The friends love the girl.' },
        { q: 'Poēta fābulam nārrat.', a: 'Poētae fābulam nārrant. — The poets tell the story.' },
        { q: 'Amīca fugitat.', a: 'Amīcae fugitant. — The friends flee.' },
        { q: 'Amīca est timida.', a: 'Amīcae sunt timidae. — The friends are shy.' },
        { q: 'Rēgīna in Graeciā regnat.', a: 'Rēgīnae in Graeciā regnant. — The queens rule in Greece.' },
        { q: 'Deus in Olympō habitat.', a: 'Dī in Olympō habitant. — The gods live on Olympus.' },
        { q: 'Puella fābulam dēsīderat.', a: 'Puellae fābulam dēsīderant. — The girls long for the story.' },
        { q: 'Fīlia in īnsulā habitat.', a: 'Fīliae in īnsulā habitant. — The daughters live on the island.' },
        { q: 'Terra nova est pulchra.', a: 'Terrae novae sunt pulchrae. — The new lands are beautiful.' },
        { q: 'Once upon a time there was a beautiful girl.', a: 'Ōlim est puella pulchra.' },
        { q: 'Europa lives in Phoenicia.', a: 'Eurōpa in Phoenīcē habitat.' },
        { q: 'Jupiter desires the beautiful maiden.', a: 'Iuppiter puellam pulchram dēsīderat.' },
        { q: 'The god changes himself into a bull.', a: 'Deus sē in taurum trānsformat.' },
        { q: 'The bull flees with Europa.', a: 'Taurus cum Eurōpā fugitat.' },
      ],
    },
  ],
}

export default chapter
