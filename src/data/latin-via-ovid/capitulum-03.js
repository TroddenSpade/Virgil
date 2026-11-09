// Capitulum III — MINERVA ET ARACHNE
// Source: Goldman & Nyenhuis, Latin via Ovid: A First Course (2nd ed., 1982)
// Reading text, notes, grammar and exercises adapted for the web.

const chapter = {
  number: 3,
  roman: 'III',
  slug: 'minerva-et-arachne-1',
  latinTitle: 'MINERVA ET ARACHNE',
  title: 'Minerva and Arachne (Part 1)',
  tagline: 'A Lydian girl weaves beautiful pictures, and the goddess of wool watches.',
  status: 'complete',
  overview:
    'The third lesson begins the story of Arachne, the Lydian maiden whose skill in weaving draws a crowd ' +
    'of nymphs and the notice of Minerva. The reading describes her work and the praise of the nymphs, who ' +
    'say that Minerva must be her teacher. The grammar presents the parts of speech, inflection, the ' +
    'noun\'s number, gender and case, the first declension in full, agreement of noun and adjective, and commands.',
  objectives: [
    'Read the first part of the story of Minerva and Arachne.',
    'Name the parts of speech and explain what inflection is.',
    'Give the number, gender and case of a first-declension noun.',
    'Decline puella through all five cases in both numbers.',
    'Make an adjective agree with its noun in case, number and gender.',
    'Give singular and plural commands.',
  ],
  readings: [
    {
      id: 'minerva-et-arachne',
      latinTitle: 'MINERVA ET ARACHNE',
      title: 'Minerva and Arachne',
      paragraphs: [
        'Minerva est dea. Est dea sapientiae. Est dea lānae quoque. Arachne est puella. Est puella perīta in lānā. Pictūrās pulchrās in textilī format. Minerva cum deīs in Olympō habitat. Arachne in casā parvā in Lydiā habitat.',
        'Arachne est superba quod pictūrās pulchrās format. Saepe nymphae silvae spectant dum puella perīta lānam glomerat et pictūrās in textilī format. Pictūrae sunt pulchrae. Pictūrae fābulās dē vītā agricolārum et dē vītā incolārum Lydiae nārrant.',
        'Nymphae pictūrās puellae amant et puellam laudant. Deam quoque laudant et clāmant, "Quis est magistra tibi? Certē Minerva pictūrās et fābulās tibi dat. Labōratne Arachne bene quod est perīta? Puella bene nōn labōrat quod est perīta. Bene labōrat quod Minerva est magistra. Minerva tē bene docet."',
      ],
      notes: [
        { term: 'Minerva, -ae', gloss: 'Minerva (Greek Athena), goddess of wisdom and of spinning and weaving.' },
        { term: 'Arachne, -ēs', gloss: 'Arachne, a Lydian maiden famous for her weaving.' },
        { term: 'perīta in lānā', gloss: 'skilled in wool, that is, in spinning and weaving.' },
        { term: 'lāna, -ae', gloss: 'wool; lānam glomerat — she winds the wool into a ball.' },
        { term: 'textile, -is', gloss: 'weaving, woven cloth: pictūrās in textilī format — she makes pictures in the tapestry.' },
        { term: 'pictūra, -ae', gloss: 'picture, painted or woven scene.' },
        { term: 'Lydia, -ae', gloss: 'Lydia, a country of Asia Minor.' },
        { term: 'nymphae silvae', gloss: 'the nymphs of the forest; silva, -ae — forest.' },
        { term: 'magistra tibi', gloss: '"your teacher" (literally "teacher to you"); tibi is dative.' },
        { term: 'superba', gloss: 'proud, haughty — the pride the Greeks called hubris.' },
        { term: 'quod', gloss: 'because: Arachne est superba quod pictūrās pulchrās format.' },
        { term: 'salvē, salvēte', gloss: 'greetings, hail — to one person and to more than one.' },
      ],
    },
  ],
  grammar: [
    {
      id: 'partes-orationis',
      latinTitle: 'Partēs Ōrātiōnis',
      title: 'The Parts of Speech',
      intro:
        'The parts of speech are the classes into which words are grouped by their work: noun, pronoun, ' +
        'adjective, verb, adverb, preposition, conjunction and interjection. English uses the same classes. ' +
        'Latin changes the endings of nouns, adjectives and verbs to show their work in the sentence; this ' +
        'change is called inflection.',
      points: [
        'The eight parts of speech are noun, pronoun, adjective, verb, adverb, preposition, conjunction and interjection.',
        'Inflection of nouns is called declension; inflection of verbs is called conjugation.',
        'Puella superba Minervam nōn laudat. → Puellae superbae Minervam nōn laudant. The noun, its adjective and its verb all change together.',
        'The stem carries the meaning (puell-); the ending shows the grammatical work (-a, -ae, -am).',
      ],
    },
    {
      id: 'nomen',
      latinTitle: 'Nōmen',
      title: 'The Noun: Number, Gender, Case',
      intro:
        'Latin nouns are inflected for three things: number (singular or plural), gender (masculine, ' +
        'feminine or neuter) and case (their use in the sentence). Gender may be natural, as with deus and ' +
        'dea, or grammatical, as with silva and fābula, which are feminine although English treats them as neuter.',
      paradigms: [
        {
          caption: 'the five cases and their work',
          head: ['Cāsus', 'Ūsus', 'Exemplum'],
          rows: [
            ['Nōminātīvus', 'subject or predicate word', 'Puella est Arachne.'],
            ['Genetīvus', 'possession', 'Casa puellae est parva.'],
            ['Datīvus', 'indirect object', 'Minerva puellae pictūrās dat.'],
            ['Accūsātīvus', 'direct object', 'Nymphae puellam spectant.'],
            ['Ablātīvus', 'object of a preposition', 'Taurus cum puellā lūdit.'],
          ],
        },
      ],
      points: [
        'Nouns in -a are regularly feminine; the few masculines in -a show natural gender: agricola, poēta, nauta.',
        'The gender of every noun must be learnt with the word; the vocabulary gives it.',
        'The nominative is also used for the predicate noun after est and sunt: Puella est Arachne.',
        'The dative marks the person to or for whom something is done: Minerva puellae pictūrās dat.',
      ],
    },
    {
      id: 'declinatio-prima',
      latinTitle: 'Dēclīnātiō Prīma',
      title: 'The First Declension',
      intro:
        'Latin has five declensions, each with a characteristic vowel. The first declension has -a, and its ' +
        'nouns are nearly all feminine. Learn the endings with a model noun; the genitive singular -ae is the ' +
        'mark of the whole declension.',
      paradigms: [
        {
          caption: 'puella, -ae, f. — girl',
          head: ['Cāsus', 'Singulāris', 'Plūrālis', 'Ēnding sing. / pl.'],
          rows: [
            ['Nōminātīvus', 'puella', 'puellae', '-a / -ae'],
            ['Genetīvus', 'puellae', 'puellārum', '-ae / -ārum'],
            ['Datīvus', 'puellae', 'puellīs', '-ae / -īs'],
            ['Accūsātīvus', 'puellam', 'puellās', '-am / -ās'],
            ['Ablātīvus', 'puellā', 'puellīs', '-ā / -īs'],
          ],
        },
      ],
      points: [
        'The genitive singular of a first-declension noun ends in -ae: puellae, casae, silvae, Minervae.',
        'The dative singular looks exactly like the genitive singular; only the work in the sentence tells them apart.',
        'The ablative singular has a long -ā; the nominative has a short -a.',
        'In the vocabulary nouns are listed by nominative and genitive, then gender: silva, silvae, f.',
      ],
    },
    {
      id: 'consensio',
      latinTitle: 'Cōnsēnsiō Nōminis et Adiectīvī',
      title: 'Agreement of Noun and Adjective',
      intro:
        'An adjective always agrees with the noun it modifies in case, number and gender, whether it stands ' +
        'beside the noun or in the predicate after est and sunt.',
      points: [
        'Est silva magna in īnsulā pulchrā. — "There is a great forest on a beautiful island."',
        'The adjective may follow its noun, but it need not stand next to it: the endings show which noun it modifies.',
        'Puella est superba. / Puellae sunt superbae. — The predicate adjective is nominative, like the subject.',
        'Pictūrae puellae sunt pulchrae. — The adjective pulchrae agrees with pictūrae, not with puellae.',
      ],
    },
    {
      id: 'imperativus',
      latinTitle: 'Modus Imperātīvus',
      title: 'Commands',
      intro:
        'A command is given in the imperative mood. The singular imperative is the bare stem of the verb; ' +
        'the plural adds -te and is used when addressing more than one person.',
      paradigms: [
        {
          caption: 'singular and plural commands',
          head: ['Singulāris', 'Plūrālis'],
          rows: [
            ['salvē — greetings!', 'salvēte — greetings!'],
            ['valē — farewell!', 'valēte — farewell!'],
            ['amā — love!', 'amāte — love!'],
            ['labōrā — work!', 'labōrāte — work!'],
            ['portā — carry!', 'portāte — carry!'],
          ],
        },
      ],
      points: [
        'The singular command addresses one person: Salvē, magistra!',
        'The plural command addresses several: Salvēte, discipulī!',
        'The plural ending -te is the same ending seen in spectāte and valēte.',
        'The vocative — the name of the person addressed — often accompanies the command: Portāte, nymphae, tēlās!',
      ],
    },
  ],
  vocabulary: [
    { latin: 'agricola, -ae', english: 'farmer', pos: 'noun m.' },
    { latin: 'Arachne, -ēs', english: 'Arachne (a maiden)', pos: 'noun f.' },
    { latin: 'casa, -ae', english: 'house, cottage', pos: 'noun f.' },
    { latin: 'dea, -ae', english: 'goddess', pos: 'noun f.' },
    { latin: 'discipulī, -ōrum', english: 'students, pupils', pos: 'noun m. pl.' },
    { latin: 'incola, -ae', english: 'inhabitant', pos: 'noun c.' },
    { latin: 'lāna, -ae', english: 'wool, spinning', pos: 'noun f.' },
    { latin: 'Lydia, -ae', english: 'Lydia (a country in Asia Minor)', pos: 'noun f.' },
    { latin: 'magister, -trī', english: 'teacher (male)', pos: 'noun m.' },
    { latin: 'magistra, -ae', english: 'teacher (female)', pos: 'noun f.' },
    { latin: 'Minerva, -ae', english: 'Minerva (a goddess)', pos: 'noun f.' },
    { latin: 'nympha, -ae', english: 'nymph', pos: 'noun f.' },
    { latin: 'pictūra, -ae', english: 'picture', pos: 'noun f.' },
    { latin: 'sapientia, -ae', english: 'wisdom', pos: 'noun f.' },
    { latin: 'silva, -ae', english: 'forest, wood', pos: 'noun f.' },
    { latin: 'textile, -is', english: 'weaving, woven cloth', pos: 'noun n.' },
    { latin: 'vīta, -ae', english: 'life', pos: 'noun f.' },
    { latin: 'clāmat, clāmant', english: 'shouts, exclaims', pos: 'verb' },
    { latin: 'dat, dant', english: 'gives', pos: 'verb' },
    { latin: 'docet, docent', english: 'teaches', pos: 'verb' },
    { latin: 'format, formant', english: 'makes, shapes, fashions', pos: 'verb' },
    { latin: 'glomerat, glomerant', english: 'winds into a ball', pos: 'verb' },
    { latin: 'labōrat, labōrant', english: 'works', pos: 'verb' },
    { latin: 'laudat, laudant', english: 'praises', pos: 'verb' },
    { latin: 'salvē, salvēte', english: 'greetings, hello, hail', pos: 'verb' },
    { latin: 'valē, valēte', english: 'farewell, goodbye', pos: 'verb' },
    { latin: 'perītus, -a, -um', english: 'skilled, skilful', pos: 'adj.' },
    { latin: 'superbus, -a, -um', english: 'proud, haughty', pos: 'adj.' },
    { latin: 'bene', english: 'well', pos: 'adverb' },
    { latin: 'certē', english: 'surely, certainly', pos: 'adverb' },
    { latin: 'dum', english: 'while (+ present indicative)', pos: 'conjunction' },
    { latin: 'mē', english: 'me, myself', pos: 'pronoun' },
    { latin: 'quid', english: 'what', pos: 'pronoun' },
    { latin: 'quod', english: 'because', pos: 'conjunction' },
    { latin: 'quoque', english: 'also, too', pos: 'adverb' },
    { latin: 'saepe', english: 'often', pos: 'adverb' },
    { latin: 'tē', english: 'you (accusative or ablative)', pos: 'pronoun' },
    { latin: 'tibi', english: 'to you, for you (dative)', pos: 'pronoun' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PĒNSVM A',
      title: 'Questions',
      instruction: 'Answer each question in a complete Latin sentence, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'Quis est Minerva?', a: 'Minerva est dea.' },
        { q: 'Quis est Arachne?', a: 'Arachne est puella perīta in lānā.' },
        { q: 'Ubi habitat Minerva?', a: 'Minerva cum deīs in Olympō habitat.' },
        { q: 'Ubi habitat Arachne?', a: 'Arachne in casā parvā in Lydiā habitat.' },
        { q: 'Spectantne deae dum Arachne pictūrās format?', a: 'Deae nōn spectant; nymphae silvae spectant.' },
        { q: 'Spectantne agricolae dum Arachne pictūrās format?', a: 'Agricolae nōn spectant; nymphae spectant.' },
        { q: 'Estne Arachne superba?', a: 'Ita, Arachne est superba.' },
        { q: 'Formatne Arachne pictūrās dē vītā incolārum?', a: 'Ita, pictūrās dē vītā incolārum Lydiae format.' },
        { q: 'Amantne nymphae pictūrās puellae?', a: 'Ita, nymphae pictūrās puellae amant.' },
        { q: 'Quid clāmant nymphae?', a: 'Nymphae clāmant Minervam magistram Arachae esse.' },
      ],
    },
    {
      id: 'pensum-b',
      latinLabel: 'PĒNSVM B',
      title: 'Negatives and plurals',
      instruction: 'Make each sentence negative, or change it to the plural as directed.',
      type: 'fill',
      items: [
        'Arachne est superba. → Arachne {{nōn}} est superba.',
        'Minerva est dea sapientiae. → Minerva {{nōn}} est dea sapientiae.',
        'Arachne in casā parvā habitat. → Arachne in casā parvā {{nōn}} habitat.',
        'Arachne pictūrās pulchrās format. → Arachne pictūrās pulchrās {{nōn}} format.',
        'Nymphae pictūrās spectant. → Nymphae pictūrās {{nōn}} spectant.',
        'Agricolae pictūrās pulchrās amant. → Agricolae pictūrās pulchrās {{nōn}} amant.',
        'Incolae deam amant. → Incolae deam {{nōn}} amant.',
        'Arachne fābulās nārrat. → Arachne fābulās {{nōn}} nārrat.',
        'Dea hic habitat. → Dea hic {{nōn}} habitat.',
        'Arachne deam laudat. → Arachne deam {{nōn}} laudat.',
        'Hic est magistra. → Hic sunt {{magistrae}}.',
        'Hic est fābula. → Hic sunt {{fābulae}}.',
        'Hic est casa parva. → Hic sunt {{casae parvae}}.',
        'Hic est puella superba. → Hic sunt {{puellae superbae}}.',
        'Hic est silva pulchra. → Hic sunt {{silvae pulchrae}}.',
        'Hic est nympha perīta. → Hic sunt {{nymphae perītae}}.',
        'Hic est magistra perīta. → Hic sunt {{magistrae perītae}}.',
        'Hic est pictūra puellae. → Hic sunt {{pictūrae puellārum}}.',
        'Hic est fīlia deae. → Hic sunt {{fīliae deārum}}.',
        'Hic est casa pulchra. → Hic sunt {{casae pulchrae}}.',
      ],
    },
    {
      id: 'pensum-c',
      latinLabel: 'PĒNSVM C',
      title: 'The accusative; translation',
      instruction: 'Turn each nominative into the object of spectat, then translate the English sentences into Latin.',
      type: 'questions',
      items: [
        { q: 'Puella est superba.', a: 'Agricola puellam superbam spectat.' },
        { q: 'Pictūra est pulchra.', a: 'Agricola pictūram pulchram spectat.' },
        { q: 'Dea est perīta.', a: 'Agricola deam perītam spectat.' },
        { q: 'Casa est parva.', a: 'Agricola casam parvam spectat.' },
        { q: 'Magistra est perīta.', a: 'Agricola magistram perītam spectat.' },
        { q: 'Nympha est pulchra.', a: 'Agricola nympham pulchram spectat.' },
        { q: 'Lydia est pulchra.', a: 'Agricola Lydiam pulchram spectat.' },
        { q: 'Silva est magna.', a: 'Agricola silvam magnam spectat.' },
        { q: 'Minerva est superba.', a: 'Agricola Minervam superbam spectat.' },
        { q: 'Lāna est parva.', a: 'Agricola lānam parvam spectat.' },
        { q: 'Arachne is making beautiful pictures.', a: 'Arachne pictūrās pulchrās format.' },
        { q: 'She is telling stories about the farmers.', a: 'Fābulās dē agricolīs nārrat.' },
        { q: 'The nymphs love the stories about Minerva.', a: 'Nymphae fābulās dē Minervā amant.' },
        { q: 'The stories tell about the life of the inhabitants of Lydia.', a: 'Fābulae dē vītā incolārum Lydiae nārrant.' },
        { q: 'Minerva is your teacher. She teaches you well.', a: 'Minerva est magistra tibi. Tē bene docet.' },
      ],
    },
  ],
}

export default chapter
