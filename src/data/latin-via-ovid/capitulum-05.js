// Capitulum V — MINERVA ET ARACHNE
// Source: Goldman & Nyenhuis, Latin via Ovid: A First Course (2nd ed., 1982)
// Reading text, notes, grammar and exercises adapted for the web.

const chapter = {
  number: 5,
  roman: 'V',
  slug: 'minerva-et-arachne-3',
  latinTitle: 'MINERVA ET ARACHNE',
  title: 'Minerva and Arachne (Part 3)',
  tagline: 'The weaving contest, the goddess\'s anger, and the first spider.',
  status: 'complete',
  overview:
    'The fifth lesson completes the story. Minerva and Arachne weave side by side: the goddess depicts the ' +
    'honourable deeds of the gods, while Arachne mocks them with their shameful deeds. Minerva, enraged, ' +
    'changes the girl into a spider, and Arachne hangs forever on her thread. The grammar turns to past ' +
    'time: the imperfect tense of the first two conjugations and of sum, the adverbs maximē and minimē, ' +
    'and two further uses of the dative, possession and interest.',
  objectives: [
    'Read the end of the story of Minerva and Arachne.',
    'Form and translate the imperfect tense of the first two conjugations.',
    'Give the imperfect tense of sum, esse.',
    'Use maximē and minimē to intensify or deny a statement.',
    'Recognise the dative of possession and the dative of interest.',
    'Retell the story in the past tense.',
  ],
  readings: [
    {
      id: 'minerva-et-arachne',
      latinTitle: 'MINERVA ET ARACHNE',
      title: 'Minerva and Arachne',
      paragraphs: [
        'Minerva et Arachne bene labōrābant. Prīmō Minerva lānam glomerābat. Formābat pictūrās pulchrās dē factīs bonīs deōrum. Pictūrae fābulās dē vītā deōrum in Olympō nārābant. Deinde Arachne lānam glomerābat. Sed Arachne pictūrās dē factīs malīs deōrum formābat. Certē pictūrae deae erant pulchrae; pictūrae puellae quoque erant pulchrae.',
        'Agricolae et nymphae et incolae Lydiae spectābant dum puella et dea labōrant. Nymphae pictūrās et fābulās puellae amābant; maximē amābant fābulam longam dē rapīnā Eurōpae ā Iove. Sed Minerva erat maximē īrāta neque amābat fābulās dē factīs malīs deōrum.',
        'Itaque dea Minerva puellam in arāneam mūtat. Prīmō puella est parva; deinde est minor; dēnique est minima. Arachne sē necāre temptat, et in fīlō pendet. Sed Minerva misericordiam habet, et puellam sē necāre prohibet. "Pendē aeternō," dīxit. Ita dea puellam docet et arānea aeternō in fīlō suō pendet.',
        'Poēta Ovidius fābulam dē puellā superbā nārrat.',
      ],
      notes: [
        { term: 'factum, -ī', gloss: 'deed: dē factīs bonīs / malīs deōrum — about the good / evil deeds of the gods.' },
        { term: 'rapīna, -ae', gloss: 'carrying off, robbery: fābulam dē rapīnā Eurōpae ā Iove.' },
        { term: 'Iove', gloss: 'ablative of Iuppiter: ā Iove — by Jupiter.' },
        { term: 'maximē', gloss: 'very much, exceedingly; maximē īrāta — very angry indeed.' },
        { term: 'neque', gloss: 'and not: neque amābat — and she did not like.' },
        { term: 'itaque', gloss: 'and so, therefore.' },
        { term: 'arānea, -ae', gloss: 'spider; the Greek arachne gives English "arachnid".' },
        { term: 'mūtat', gloss: 'changes: puellam in arāneam mūtat — changes the girl into a spider.' },
        { term: 'minor, minima', gloss: 'smaller, smallest; note minimus, -a, -um.' },
        { term: 'fīlum, -ī', gloss: 'thread, string: in fīlō pendet — she hangs on the thread.' },
        { term: 'misericordia, -ae', gloss: 'pity, mercy: misericordiam habet.' },
        { term: 'prohibet', gloss: 'prevents, stops: puellam sē necāre prohibet — stops the girl from killing herself.' },
        { term: 'aeternō', gloss: 'eternally, forever: "Pendē aeternō" — "Hang forever."' },
      ],
    },
  ],
  grammar: [
    {
      id: 'imperfectum',
      latinTitle: 'Tempus Imperfectum',
      title: 'The Imperfect Tense',
      intro:
        'The imperfect expresses past time and is formed by inserting the tense sign -bā- between the stem ' +
        'and the personal endings. The first person singular ends in -m instead of -ō. The imperfect describes ' +
        'an action that was going on, was repeated, or was customary in the past.',
      paradigms: [
        {
          caption: 'vocō, vocāre — first conjugation',
          head: ['Persōna', 'Singulāris', 'Plūrālis'],
          rows: [
            ['1', 'vocābam — I called', 'vocābāmus — we called'],
            ['2', 'vocābās — you called', 'vocābātis — you called'],
            ['3', 'vocābat — he/she/it called', 'vocābant — they called'],
          ],
        },
        {
          caption: 'doceō, docēre — second conjugation',
          head: ['Persōna', 'Singulāris', 'Plūrālis'],
          rows: [
            ['1', 'docēbam — I taught', 'docēbāmus — we taught'],
            ['2', 'docēbās — you taught', 'docēbātis — you taught'],
            ['3', 'docēbat — he/she/it taught', 'docēbant — they taught'],
          ],
        },
      ],
      points: [
        'Each form may be translated "I called", "I was calling", "I did call" or "I used to call".',
        'The ending -bat / -bant marks a continuing, repeated or customary action in past time.',
        'The imperfect is also the tense of description: puella erat temerāria; casa erat parva; dea erat īrāta.',
        'The long vowel is shortened before final -m, -t and -nt: vocābam, vocābat, vocābant.',
        'The emphatic "did call" translation is useful in questions: Vocābatne Arachne Minervam? — "Did Arachne call Minerva?"',
      ],
    },
    {
      id: 'maxime-et-minime',
      latinTitle: 'Maximē et Minimē',
      title: 'maximē and minimē',
      intro:
        'A statement may be intensified by maximē ("very much so") or denied by minimē ("not in the least"). ' +
        'Either adverb may stand alone, especially in conversation, as a complete reply.',
      points: [
        'Nymphae fābulam longam maximē amābant. — "The nymphs liked the long story very much indeed."',
        'Habetne Arachne sapientiam? — Sapientiam minimē habet. — "She has very little wisdom."',
        'Minimē alone means "Not in the least."',
        'Maximē alone means "Yes indeed", "Very much so."',
      ],
    },
    {
      id: 'imperfectum-sum',
      latinTitle: 'Imperfectum Verbi Sum',
      title: 'The Imperfect of sum',
      intro:
        'The imperfect of sum is built on the stem era- with the ordinary personal endings: eram, erās, ' +
        'erat, erāmus, erātis, erant.',
      paradigms: [
        {
          caption: 'sum, esse — imperfect',
          head: ['Persōna', 'Singulāris', 'Plūrālis'],
          rows: [
            ['1', 'eram — I was', 'erāmus — we were'],
            ['2', 'erās — you were', 'erātis — you were'],
            ['3', 'erat — he/she/it was', 'erant — they were'],
          ],
        },
      ],
      points: [
        'Minerva erat maximē īrāta. — "Minerva was very angry indeed."',
        'Pictūrae deae erant pulchrae. — "The goddess\'s pictures were beautiful."',
        'The -m of eram is the same ending seen in vocābam.',
        'Do not confuse erat ("was") with est ("is").',
      ],
    },
    {
      id: 'dativus-possessionis',
      latinTitle: 'Datīvus Possessiōnis et Interesse',
      title: 'The Dative of Possession and Interest',
      intro:
        'With a form of sum, the dative may name the owner: "wisdom is to you" means "you have wisdom". The ' +
        'dative is also used of the person interested in or affected by what the sentence says — the dative ' +
        'of interest.',
      points: [
        'Sapientia est tibi. — "You have wisdom" (literally, "wisdom is to you").',
        'Mihi sunt plūra quam tibi. — "I have more than you have."',
        'Quid est nōmen tibi? — "What is your name?" (literally, "what is the name to you?").',
        'Nēmō mihi magistra est. — "No one is my teacher."',
        'Mihi nōmen est Mārcus. — "My name is Mark."',
      ],
    },
  ],
  vocabulary: [
    { latin: 'arānea, -ae', english: 'spider', pos: 'noun f.' },
    { latin: 'factum, -ī', english: 'deed', pos: 'noun n.' },
    { latin: 'fīlum, -ī', english: 'thread, string', pos: 'noun n.' },
    { latin: 'misericordia, -ae', english: 'pity, mercy', pos: 'noun f.' },
    { latin: 'rapīna, -ae', english: 'carrying off, robbery', pos: 'noun f.' },
    { latin: 'Iuppiter, Iovis', english: 'Jupiter, Jove', pos: 'noun m.' },
    { latin: 'mūtō, -āre', english: 'change', pos: 'verb' },
    { latin: 'necō, -āre', english: 'kill', pos: 'verb' },
    { latin: 'pendeō, -ēre, pependī, pēnsum', english: 'hang', pos: 'verb' },
    { latin: 'prohibeō, -ēre', english: 'prevent, stop, prohibit', pos: 'verb' },
    { latin: 'bonus, -a, -um', english: 'good', pos: 'adj.' },
    { latin: 'longus, -a, -um', english: 'long', pos: 'adj.' },
    { latin: 'malus, -a, -um', english: 'evil, bad', pos: 'adj.' },
    { latin: 'minimus, -a, -um', english: 'very small, very little', pos: 'adj.' },
    { latin: 'minor, minus', english: 'smaller', pos: 'adj.' },
    { latin: 'optimus, -a, -um', english: 'very good, excellent', pos: 'adj.' },
    { latin: 'suus, -a, -um', english: 'its own, his own, her own', pos: 'adj.' },
    { latin: 'ā, ab', english: 'from, away from; by (+ ablative)', pos: 'preposition' },
    { latin: 'aeternō', english: 'eternally, forever', pos: 'adverb' },
    { latin: 'deinde', english: 'then', pos: 'adverb' },
    { latin: 'dēnique', english: 'and then, finally', pos: 'adverb' },
    { latin: 'itaque', english: 'and so, and thus, therefore', pos: 'adverb' },
    { latin: 'Latīnē', english: 'in Latin', pos: 'adverb' },
    { latin: 'maximē', english: 'very, exceedingly; yes indeed', pos: 'adverb' },
    { latin: 'minimē', english: 'least; not in the least, not at all', pos: 'adverb' },
    { latin: 'neque', english: 'and not', pos: 'conjunction' },
    { latin: 'optimē', english: 'very good, excellent', pos: 'adverb' },
    { latin: 'prīmō', english: 'first, at first', pos: 'adverb' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PĒNSVM A',
      title: 'Questions',
      instruction: 'Answer each question in a complete Latin sentence, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'Quis lānam glomerābat prīmō?', a: 'Prīmō Minerva lānam glomerābat.' },
        { q: 'Formābatne Minerva pictūrās dē factīs malīs deōrum?', a: 'Nōn; pictūrās dē factīs bonīs deōrum formābat.' },
        { q: 'Suntne pictūrae pulchrae?', a: 'Ita, pictūrae erant pulchrae.' },
        { q: 'Quis deinde lānam glomerābat?', a: 'Deinde Arachne lānam glomerābat.' },
        { q: 'Formābatne Arachne pictūrās dē factīs malīs deōrum?', a: 'Ita, pictūrās dē factīs malīs deōrum formābat.' },
        { q: 'Amābantne nymphae fābulam dē Eurōpā et Iove?', a: 'Ita, eam maximē amābant.' },
        { q: 'Amābatne Minerva fābulam et pictūrās dē Eurōpā et Iove?', a: 'Nōn; Minerva erat maximē īrāta neque eās amābat.' },
        { q: 'Mōnstrābatne Arachne nymphīs pictūrās suās?', a: 'Ita, pictūrās suās nymphīs mōnstrābat.' },
        { q: 'Quid Arachne temptat?', a: 'Arachne sē necāre temptat.' },
        { q: 'Quis fābulam dē Minervā et puellā superbā nārrat?', a: 'Poēta Ovidius fābulam nārrat.' },
      ],
    },
    {
      id: 'pensum-b',
      latinLabel: 'PĒNSVM B',
      title: 'The imperfect; commands; the dative',
      instruction: 'Supply the imperfect form, the plural command, or the dative required by each sentence.',
      type: 'fill',
      items: [
        'mōnstrō, mōnstrāre: (I) → {{mōnstrābam}}.',
        'formō, formāre: (we) → {{formābāmus}}.',
        'nārrō, nārrāre: (she) → {{nārrabat}}.',
        'doceō, docēre: (you, plural) → {{docēbātis}}.',
        'dō, dare: (they) → {{dabant}}.',
        'temptō, temptāre: (you, singular) → {{temptābās}}.',
        'spectō, spectāre: (he) → {{spectābat}}.',
        'sum, esse: (you, plural) → {{erātis}}.',
        'portō, portāre: (they) → {{portābant}}.',
        'dēbeō, dēbēre: (we) → {{dēbēbāmus}}.',
        'Portā, puella, tēlam hūc, quaesō. → {{Portāte}}, {{puellae}}, {{tēlās}} hūc, quaesō.',
        'Nārrā, poēta, fābulam, quaesō. → {{Nārrāte}}, {{poētae}}, {{fābulās}}, quaesō.',
        'Respondē, magistra, Latīnē, quaesō. → {{Respondēte}}, {{magistrae}}, Latīnē, quaesō.',
        'Salvē, dea! → {{Salvēte}}, {{deae}}!',
        'Valē, nympha pulchra! → {{Valēte}}, {{nymphae pulchrae}}!',
        'You have wisdom. → Sapientia est {{tibi}}.',
        'I have more than you have. → Mihi sunt plūra quam {{tibi}}.',
        'No one is my teacher. → Nēmō mihi {{magistra est}}.',
      ],
    },
    {
      id: 'pensum-c',
      latinLabel: 'PĒNSVM C',
      title: 'The accusative; translation',
      instruction: 'Turn each nominative into the object of spectābam, then translate the English sentences into Latin.',
      type: 'questions',
      items: [
        { q: 'Terra erat magna.', a: 'Spectābam terram magnam.' },
        { q: 'Dea erat pulchra.', a: 'Spectābam deam pulchram.' },
        { q: 'Pictūra erat magna.', a: 'Spectābam pictūram magnam.' },
        { q: 'Amīca erat bona.', a: 'Spectābam amīcam bonam.' },
        { q: 'Nymphae silvae erant pulchrae.', a: 'Spectābam nymphās silvae pulchrās.' },
        { q: 'Minerva erat dea.', a: 'Spectābam Minervam deam.' },
        { q: 'Casa erat parva.', a: 'Spectābam casam parvam.' },
        { q: 'Puellae erant bonae.', a: 'Spectābam puellās bonās.' },
        { q: 'Amīcae erant bonae.', a: 'Spectābam amīcās bonās.' },
        { q: 'Magistra erat perīta.', a: 'Spectābam magistram perītam.' },
        { q: 'The pictures about the goddess were beautiful.', a: 'Pictūrae dē deā erant pulchrae.' },
        { q: 'The girls love beautiful stories.', a: 'Puellae fābulās pulchrās amant.' },
        { q: 'The poet Ovid tells about the goddess and the maiden.', a: 'Poēta Ovidius dē deā et puellā nārrat.' },
        { q: 'Arachne also tells stories about the goddess.', a: 'Arachne quoque fābulās dē deā nārrat.' },
        { q: 'The rash girl was proud.', a: 'Puella temerāria erat superba.' },
        { q: 'Minerva was angry because Arachne told stories about the wicked deeds of the gods.', a: 'Minerva erat īrāta quod Arachne fābulās dē factīs malīs deōrum nārrabat.' },
        { q: 'The stories of the poet were long.', a: 'Fābulae poētae erant longae.' },
        { q: '"I am trying to teach you," said Minerva.', a: '"Tē docēre temptō," Minerva dīxit.' },
        { q: 'Minerva changes the form of the proud girl.', a: 'Minerva fōrmam puellae superbae mūtat.' },
        { q: 'Arachne is now a spider and hangs on her thread forever.', a: 'Arachne nunc arānea est et aeternō in fīlō suō pendet.' },
        { q: 'You have wisdom.', a: 'Sapientia est tibi.' },
        { q: 'My name is Mark.', a: 'Mihi nōmen est Mārcus.' },
        { q: 'No one is my teacher.', a: 'Nēmō mihi magistra est.' },
      ],
    },
  ],
}

export default chapter
