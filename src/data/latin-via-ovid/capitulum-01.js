// Capitulum I — CHARTA GEOGRAPHICA
// Source: Goldman & Nyenhuis, Latin via Ovid: A First Course (2nd ed., 1982)
// Reading text, notes, grammar and exercises adapted for the web.

const chapter = {
  number: 1,
  roman: 'I',
  slug: 'charta-geographica',
  latinTitle: 'CHARTA GEOGRAPHICA',
  title: 'The Map of the World',
  tagline: 'A first look at the ancient world, and the first-declension noun.',
  status: 'complete',
  overview:
    'The first lesson opens with a map of the known world. In simple sentences naming the continents, ' +
    'lands and islands, it introduces the verb "to be" (est, sunt), the first declension in -a, and the ' +
    'three cases used in the reading: nominative, accusative and ablative. Questions with ubi and -ne, ' +
    'and answers with ita and nōn, complete the groundwork of the chapter.',
  objectives: [
    'Read and understand simple Latin sentences about the lands and islands of the world.',
    'Use est and sunt, and supply the English article that Latin leaves out.',
    'Recognise the first-declension endings -a, -ae and the cases nominative, accusative and ablative.',
    'Ask and answer questions with ubi, -ne, ita and nōn.',
    'Learn the names of the continents, seas and countries of the ancient map.',
  ],
  readings: [
    {
      id: 'charta-geographica',
      latinTitle: 'CHARTA GEOGRAPHICA',
      title: 'The Map of the World',
      paragraphs: [
        'Hic est charta geographica. Est charta parva, sed terrae sunt magnae. Charta est bona. Eurōpa et Āfrica et Āsia sunt continentēs. Sunt terrae pulchrae in Eurōpā, in Āfricā, in Āsiā.',
        'Spectāte terrās in Eurōpā: Britannia, Gallia, Germānia, Hispānia, Italia, Graecia sunt in Eurōpā. Spectāte īnsulās: Siciliam, Sardiniam, Corsicam, Crētam, Cyprum. Ubi sunt īnsulae? Sunt in marī Mediterrāneō. Suntne īnsulae magnae? Ita, īnsulae sunt magnae. Peloponnēsus est paene īnsula. Hispānia, Graecia, Italia sunt paenīnsulae magnae. Rōma est in Italiā.',
        'Spectāte Āfricam. Spectāte terrās in Āfricā: Maurītāniam, Numidiam, Libyam, Aethiopiam, Aegyptum. Carthāgō est in Āfricā. In Āfricā Dīdō, rēgīna Phoenissa, habitat et regnat.',
        'Spectāte Āsiam. Spectāte terrās in Āsiā. Terrae in Āsiā sunt Āsia Minor, Armenia, Mesopotamia, Arabia, Syria, Phoenīcē. Spectāte īnsulam parvam in Phoenīcē. Est īnsula pulchra—Tyrus. Eurōpa, puella in fābulā prīmā, in Phoenīcē habitat. Estne īnsula magna? Īnsula nōn est magna; est parva.',
      ],
      notes: [
        { term: 'charta, -ae', gloss: 'paper, papyrus, map. The Romans more often called a map tabula or fōrma.' },
        { term: 'continēns, -entis', gloss: 'continent: Eurōpa et Āfrica et Āsia sunt continentēs.' },
        { term: 'mare Mediterrāneum', gloss: 'the Mediterranean Sea, "the sea in the middle of the land".' },
        { term: 'paenīnsula, -ae', gloss: 'peninsula, from paene ("almost") + īnsula ("island").' },
        { term: 'Peloponnēsus, -ī', gloss: 'the Peloponnese, the southern part of the Greek peninsula, paene īnsula.' },
        { term: 'Carthāgō, -inis', gloss: 'Carthage, on the north coast of Africa.' },
        { term: 'Dīdō, -ūs', gloss: 'Dido, the Phoenician queen of Carthage and heroine of the Aeneid.' },
        { term: 'Phoenīcē, -ēs', gloss: 'Phoenicia, the coastal strip on the eastern Mediterranean.' },
        { term: 'Tyrus, -ī', gloss: 'Tyre, an island off the Phoenician coast, famous for its crimson dye.' },
        { term: 'Gallia, Hispānia', gloss: 'Gaul (roughly modern France) and Spain; the other place names answer to their English forms.' },
        { term: 'rēgīna Phoenissa', gloss: 'apposition: "Dido, the Phoenician queen".' },
        { term: 'Eurōpa, -ae', gloss: 'Europa, the maiden of the first story, and the continent named after her.' },
      ],
    },
  ],
  grammar: [
    {
      id: 'articulus-et-ordo',
      latinTitle: 'Nūllus Articulus',
      title: 'No Article; Word Order',
      intro:
        'Latin has no word for "a", "an" or "the". English must supply whichever article the sense demands. ' +
        'The adjective generally follows its noun, and the verb often stands last because the end of the ' +
        'sentence is a position of emphasis.',
      points: [
        'Hic est charta may be translated "Here is a map" or "Here is the map"; the context decides.',
        'The adjective usually follows its noun: terra pulchra, īnsula parva, fābulā prīmā.',
        'The first and last positions in a Latin sentence carry the greatest emphasis; the subject usually occupies the first part and the verb stands last.',
        'Est and sunt are not bound by this rule: they stand wherever emphasis demands.',
        'Word order does not give the meaning — the endings do — so words may be shifted for emphasis.',
      ],
    },
    {
      id: 'pronomen-subiectum',
      latinTitle: 'Prōnōmen Subiectum',
      title: 'The Pronoun Subject',
      intro:
        'The pronoun subject — he, she, it, they — is contained in the verb ending and is not written unless ' +
        'there is special emphasis.',
      paradigms: [
        {
          caption: 'the ending carries the subject',
          head: ['', 'Singulāris', 'Plūrālis'],
          rows: [
            ['habitat', 'he / she / it lives', 'habitant — they live'],
            ['regnat', 'he / she / it rules', 'regnant — they rule'],
            ['est', 'he / she / it is', 'sunt — they are'],
          ],
        },
      ],
      points: [
        'The final -t means "he", "she" or "it"; the final -nt means "they".',
        'Insulae sunt pulchrae. Sunt in marī Mediterrāneō. — "The islands are beautiful. They are in the Mediterranean Sea."',
        'The pronoun is expressed only for contrast or emphasis.',
      ],
    },
    {
      id: 'numerus-et-casus',
      latinTitle: 'Numerus et Cāsus',
      title: 'Number and Case',
      intro:
        'The ending of a Latin noun shows both its number (one or many) and its case — its work in the ' +
        'sentence. First-declension nouns in -a make the plural in -ae. The subject stands in the ' +
        'nominative, the direct object in the accusative, and the object of many prepositions in the ablative.',
      paradigms: [
        {
          caption: 'terra, -ae, f. — land, country',
          head: ['Cāsus', 'Singulāris', 'Plūrālis', 'Ēnding'],
          rows: [
            ['Nōminātīvus', 'terra', 'terrae', '-a / -ae'],
            ['Accūsātīvus', 'terram', 'terrās', '-am / -ās'],
            ['Ablātīvus', 'terrā', 'terrīs', '-ā / -īs'],
          ],
        },
      ],
      points: [
        'Nominative — the subject, and the predicate word after est or sunt: Terra est magna. Insulae sunt terrae.',
        'Accusative — the direct object: Spectāte terram. Spectāte terrās.',
        'Ablative — the object of a preposition such as in: Rōma est in Italiā. Puellae in īnsulīs sunt.',
        'A predicate noun or adjective after est / sunt stays in the nominative: Insulae sunt terrae.',
        'This change of ending in nouns is called declension (dēclīnātiō).',
      ],
    },
    {
      id: 'expletivum',
      latinTitle: 'Explētīvum',
      title: '"There is", "There are"',
      intro:
        'When English "there" points to existence rather than to a place, Latin simply omits it and uses ' +
        'est or sunt.',
      points: [
        'Sunt terrae pulchrae in Eurōpā. — "There are beautiful lands in Europe."',
        'Est īnsula in Phoenīcē. — "There is an island in Phoenicia."',
        'When "there" means a place, Latin uses the adverb: Ibi sunt īnsulae.',
      ],
    },
    {
      id: 'interrogatio-et-appositio',
      latinTitle: 'Interrogātiō et Appositiō',
      title: 'Questions and Apposition',
      intro:
        'Questions may be introduced by an interrogative word such as ubi, or by the enclitic -ne attached ' +
        'to the first word of the sentence. An appositive — a noun placed beside another to explain it — ' +
        'stands in the same case as the noun it explains.',
      points: [
        'Ubi est īnsula? — "Where is the island?"',
        'Suntne īnsulae magnae? — "Are the islands large?" The enclitic -ne is attached to the first word.',
        'An affirmative answer repeats the words of the question, often with ita: Ita, īnsulae sunt magnae.',
        'A negative answer puts nōn before the verb: Īnsulae nōn sunt magnae.',
        'Apposition: Terra Italia est in Eurōpā — "The land of Italy is in Europe"; Dīdō, rēgīna Phoenissa, habitat — "Dido, the Phoenician queen, lives ..."',
      ],
    },
  ],
  vocabulary: [
    { latin: 'charta, -ae', english: 'paper, map', pos: 'noun f.' },
    { latin: 'terra, -ae', english: 'land, country, earth', pos: 'noun f.' },
    { latin: 'īnsula, -ae', english: 'island', pos: 'noun f.' },
    { latin: 'paenīnsula, -ae', english: 'peninsula', pos: 'noun f.' },
    { latin: 'fābula, -ae', english: 'story', pos: 'noun f.' },
    { latin: 'puella, -ae', english: 'girl, maiden', pos: 'noun f.' },
    { latin: 'rēgīna, -ae', english: 'queen', pos: 'noun f.' },
    { latin: 'continēns, -entis', english: 'continent', pos: 'noun f.' },
    { latin: 'Eurōpa, -ae', english: 'Europa; Europe', pos: 'noun f.' },
    { latin: 'Āfrica, -ae', english: 'Africa', pos: 'noun f.' },
    { latin: 'Āsia, -ae', english: 'Asia', pos: 'noun f.' },
    { latin: 'Italia, -ae', english: 'Italy', pos: 'noun f.' },
    { latin: 'Graecia, -ae', english: 'Greece', pos: 'noun f.' },
    { latin: 'Gallia, -ae', english: 'Gaul (modern France)', pos: 'noun f.' },
    { latin: 'Hispānia, -ae', english: 'Spain', pos: 'noun f.' },
    { latin: 'Rōma, -ae', english: 'Rome', pos: 'noun f.' },
    { latin: 'Carthāgō, -inis', english: 'Carthage', pos: 'noun f.' },
    { latin: 'Phoenīcē, -ēs', english: 'Phoenicia', pos: 'noun f.' },
    { latin: 'est', english: 'is', pos: 'verb' },
    { latin: 'sunt', english: 'are', pos: 'verb' },
    { latin: 'habitat', english: 'lives, dwells', pos: 'verb' },
    { latin: 'regnat', english: 'rules, reigns', pos: 'verb' },
    { latin: 'spectāte', english: 'look at (plural command)', pos: 'verb' },
    { latin: 'bonus, -a, -um', english: 'good', pos: 'adj.' },
    { latin: 'geographicus, -a, -um', english: 'geographical', pos: 'adj.' },
    { latin: 'magnus, -a, -um', english: 'large, great', pos: 'adj.' },
    { latin: 'parvus, -a, -um', english: 'small, little', pos: 'adj.' },
    { latin: 'prīmus, -a, -um', english: 'first', pos: 'adj.' },
    { latin: 'pulcher, -chra, -chrum', english: 'beautiful, pretty, fair', pos: 'adj.' },
    { latin: 'et', english: 'and', pos: 'conjunction' },
    { latin: 'sed', english: 'but', pos: 'conjunction' },
    { latin: 'hic', english: 'here', pos: 'adverb' },
    { latin: 'in', english: 'in, on (+ ablative)', pos: 'preposition' },
    { latin: 'ita', english: 'yes, thus, so', pos: 'adverb' },
    { latin: 'nōn', english: 'not', pos: 'adverb' },
    { latin: 'paene', english: 'almost', pos: 'adverb' },
    { latin: 'ubi', english: 'where', pos: 'adverb' },
    { latin: '-ne', english: '(attached to the first word, asks a question)', pos: 'particle' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PĒNSVM A',
      title: 'Questions',
      instruction: 'Answer each question in a complete Latin sentence, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'Ubi est charta?', a: 'Hic est charta.' },
        { q: 'Estne charta magna?', a: 'Charta nōn est magna; est parva.' },
        { q: 'Suntne terrae parvae?', a: 'Terrae nōn sunt parvae; sunt magnae.' },
        { q: 'Ubi sunt Italia et Graecia?', a: 'Italia et Graecia in Eurōpā sunt.' },
        { q: 'Suntne Italia et Graecia īnsulae?', a: 'Italia et Graecia īnsulae nōn sunt; paenīnsulae sunt.' },
        { q: 'Estne Sicilia paenīnsula?', a: 'Sicilia paenīnsula nōn est; īnsula est.' },
        { q: 'Ubi est Carthāgō?', a: 'Carthāgō in Āfricā est.' },
        { q: 'Estne Āfrica magna?', a: 'Ita, Āfrica magna est.' },
        { q: 'Ubi est Phoenīcē?', a: 'Phoenīcē in Āsiā est.' },
        { q: 'Ubi habitat Eurōpa, puella in fābulā prīmā?', a: 'Eurōpa in Phoenīcē habitat.' },
      ],
    },
    {
      id: 'pensum-b',
      latinLabel: 'PĒNSVM B',
      title: 'Number and case',
      instruction: 'Change the singular words to the plural, then put the nouns into the case required.',
      type: 'fill',
      items: [
        'Terra est parva. → {{Terrae}} sunt {{parvae}}.',
        'Charta est bona. → {{Chartae}} sunt {{bonae}}.',
        'Īnsula est pulchra. → {{Īnsulae}} sunt {{pulchrae}}.',
        'Paenīnsula est magna. → {{Paenīnsulae}} sunt {{magnae}}.',
        'Puella est parva. → {{Puellae}} sunt {{parvae}}.',
        'Rēgīna est pulchra. → {{Rēgīnae}} sunt {{pulchrae}}.',
        'Fābula est pulchra. → {{Fābulae}} sunt {{pulchrae}}.',
        'Īnsula est magna. → {{Īnsulae}} sunt {{magnae}}.',
        'Terra est pulchra. Spectāte {{terram}} {{pulchram}}.',
        'Īnsula est magna. Spectāte {{īnsulam}} {{magnam}}.',
        'Puella est parva. Spectāte {{puellam}} {{parvam}}.',
        'Rēgīnae sunt pulchrae. Spectāte {{rēgīnās}} {{pulchrās}}.',
        'Paenīnsulae sunt parvae. Spectāte {{paenīnsulās}} {{parvās}}.',
        'Graecia est magna. Spectāte {{Graeciam}} {{magnam}}.',
        'Charta est magna. Spectāte {{chartam}} {{magnam}}.',
        'Īnsulae sunt parvae. Spectāte {{īnsulās}} {{parvās}}.',
        'Italia est in {{Eurōpā}}.',
        'Rōma est in {{Italiā}}.',
        'Carthāgō est in {{Āfricā}}.',
        'Phoenīcē est in {{Āsiā}}.',
        'Graecia est in {{Eurōpā}}.',
      ],
    },
    {
      id: 'pensum-c',
      latinLabel: 'PĒNSVM C',
      title: 'Translate into Latin',
      instruction: 'Render each English sentence in Latin, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'The island is small.', a: 'Īnsula parva est.' },
        { q: 'Italy is large.', a: 'Italia magna est.' },
        { q: 'The small island is beautiful.', a: 'Īnsula parva pulchra est.' },
        { q: 'Sicily is a large island.', a: 'Sicilia est īnsula magna.' },
        { q: 'Are the islands small? They are not small.', a: 'Suntne īnsulae parvae? Nōn sunt parvae.' },
      ],
    },
  ],
}

export default chapter
