// Capitulum XV — Magister et Discipuli
// Sources: Ørberg, Lingua Latina per se Illustrata, Pars I: Familia Romana (2nd ed.)
// Reading text, grammar and exercises adapted and re-typeset for the web.

const chapter = {
  number: 15,
  roman: 'XV',
  slug: 'magister-et-discipuli',
  latinTitle: 'MAGISTER ET DISCIPVLĪ',
  title: 'The Teacher and the Pupils',
  tagline:
    'Mārcus goes to school in Tusculum, where the strict teacher Diodorus and his rod keep order — ' +
    'until the pupils chat, laugh and fall asleep.',
  status: 'complete',
  overview:
    'Mārcus carries his book and writing-tablet to the lūdus, the school of Tusculum, where the Greek ' +
    'teacher Diodorus rules with a cane. One pupil arrives early and politely, but Mārcus arrives late, ' +
    'skips the knock and refuses to greet the master — and he is punished. Then the whole class drifts ' +
    'off to sleep while the teacher recites. Through the story you learn the persons of the verb ' +
    '(persōna prīma, secunda, tertia) in both singular and plural, the pronouns ego, tu, nos and vos, ' +
    'and the full present tense across the four conjugations.',
  objectives: [
    'Read the school scene aloud and follow a Latin dialogue in prose.',
    'Name the six persons of the verb: persōna prīma, secunda and tertia, singular and plural.',
    'Conjugate a verb in the present tense across the four conjugations (clamare, ridere, dicere, audīre).',
    'Use the personal pronouns ego, tu, nos and vos for emphasis or contrast.',
    'Use the endings to tell who acts without a separate pronoun: clāmat means “he shouts”.',
  ],
  readings: [
    {
      id: 'in-ludum',
      latinTitle: 'IN LŪDVM',
      title: 'To School',
      paragraphs: [
        'Mārcus librum et tabulam et cēterās rēs ferēns Tusculum ambulat. Illīc est lūdus puerōrum. Multī puerī māne in lūdum eunt.',
        'Magister lūdī est vir Graecus, cui nōmen est Diodōrus. Mārcus magistrum metuit, Diodōrus enim magister sevērus est, quī discipulōs suōs virga verberat; eō modo magister sevērus discipulōs improbōs pūnīre solet.',
        'Discipulī sunt puerī quī in lūdum eunt. Mārcus et Quīntus sunt duo discipulī. Aliī discipulī sunt Titus et Sextus.',
        'Sextus, quī ante Mārcum et Titum ad lūdum advēnit, prīmus lūdum intrat. Sextus sōlus est, nam cēterī discipulī nōndum adsunt.',
        "Magister intrāns Sextum sōlum in sellā sedentem videt. Sextus dē sellā surgēns magistrum salūtat: 'Salvē, magister!'",
      ],
      notes: [
        { term: 'lūdus', gloss: 'school — also “game, play”; the lūdus is where boys learn.' },
        { term: 'tabulā', gloss: 'a writing-tablet, the pupil’s notebook.' },
        { term: 'magister / discipulus', gloss: 'teacher / pupil (literally “learner”).' },
        { term: 'metuit', gloss: 'fears, is afraid of (metuere).' },
        { term: 'virgā', gloss: 'a rod or cane, the teacher’s instrument of punishment.' },
        { term: 'pūnit', gloss: 'punishes; pūnīre solet — he is accustomed to punish.' },
        { term: 'sella', gloss: 'chair, seat; de sella surgit — he gets up from his chair.' },
      ],
    },
    {
      id: 'marcus-improbus',
      latinTitle: 'MARCVS IMPROBVS',
      title: 'Marcus the Naughty Pupil',
      paragraphs: [
        "Magister: 'Salvē, Sexte! Cōnsīde!' Sextus in sellā cōnsīdit. Discipulus tacitus ante magistrum sedet.",
        "Magister interrogat: 'Cūr tū sōlus es, Sexte?' 'Ego sōlus sum, quod cēterī discipulī omnēs absunt,' respondet Sextus. Exclāmat magister: 'Ō discipulōs improbōs ...!' Sextus: 'Num ego discipulus improbus sum?' Magister: 'Immō tū probus es discipulus, Sexte, at Mārcus et Quīntus et Titus improbī sunt!'",
        "Hic Titus ad lūdum advēnit et iānuam pulsat antequam intrat: discipulus nōn statim intrat, sed prīmum iānuam pulsat; tum lūdum intrat et magistrum salūtat: 'Salvē, magister!' Magister: 'Ō Tite! Sextus iam adest ... ' Titus: 'At Mārcus et Quīntus nōndum adsunt!' Magister: 'Tacē, puer! Claudē iānuam et cōnsīde! Aperīte librōs, puerī!'",
        "Sextus statim librum suum aperit, sed Titus, quī librum nōn habet, 'Ego' inquit 'librum nōn habeō.' Magister: 'Quid? Sextus librum suum habet, tū librum tuum nōn habēs? Cūr librum nōn habēs?' Titus: 'Librum nōn habeō, quod Mārcus meum librum habet.'",
        "Post Titum Mārcus ad lūdum advēnit, neque is iānuam pulsat antequam intrat. Mārcus statim intrat, nec magistrum salūtat. 'Ō Mārce!' inquit Diodōrus, 'Cūr tū iānuam nōn pulsās cum ad lūdum venīs, nec mē salūtās cum mē vidēs?' At Mārcus 'Ego' inquit 'iānuam nōn pulsō cum ad lūdum veniō, nec tē salūtō cum tē videō, quia nec Sextus nec Titus id facit.' Sextus et Titus: 'Quid?'",
        "Mārcus (ad Sextum et Titum): 'Vōs iānuam nōn pulsātis cum ad lūdum venītis, nec magistrum salūtātis cum eum vidētis. Audītisne id quod dīcō?' Tum Sextus et Titus 'Id quod dīcis' inquiunt 'vērum nōn est: nōs iānuam pulsāmus cum ad lūdum venīmus, et magistrum salūtāmus cum eum vidēmus. Nōnne vērum dīcimus, magister?' Magister: 'Vōs vērum dīcitis. Quod Mārcus dīcit nōn est vērum. Discipulus improbus es, Mārce! Necesse est tē pūnīre. Statim ad mē venī!'",
        "Diodōrus, magister sevērus, tergum puerī virga verberat. (Tergum est posterior pars corporis.) Tergum dolet Mārcō, neque ille lacrimat, nam lacrimāre puerō Rōmānō nōn convenit. Mārcus clāmat: 'Ēī! Iam satis est! Dēsine, magister!' Magister puerum verberāre dēsinit et 'Ad sellam tuam redī!' inquit, 'atque cōnsīde!'",
        "Mārcus ad sellam suam redit, neque cōnsīdit, sed tacitus ante sellam stat. 'Audīsne, Mārce? Ego tē cōnsīdere iubeō. Cūr nōn cōnsīdis?' interrogat magister. Mārcus: 'Nōn cōnsīdō, quod sedēre nōn possum.' Diodōrus: 'Cūr sedēre nōn potes?' Mārcus: 'Sedēre nōn possum, quod mihi dolet ... pars tergī īnferior in quā sedēre soleō.' Haec verba audientēs Titus et Sextus rīdent. Diodōrus: 'Quid rīdētis, Tite et Sexte?' Titus: 'Rīdēmus, quod Mārcō dolet ... ' Diodōrus: 'Tacēte! Eam corporis partem nōmināre nōn convenit! Sed ubi est frāter tuus, Mārce?'",
        "Mārcus: 'Is domī est apud mātrem suam. Quīntus dīcit sē aegrum esse.' Diodōrus: 'Sī aeger est, in lūdum īre nōn potest. At vōs bene valētis. Iam aperīte librōs!' Titus: 'Mārcus meum librum habet.' Diodōrus: 'Quid tū librum Titī habēs, Mārce?' Mārcus: 'Ego eius librum habeō, quod is meum malum habet. Redde mihi mālum meum, Tite!' Titus rīdēns 'Mālum' inquit 'tibi reddere nōn possum, id enim iam in ventre meō est!'",
        "Mārcus īrātus Titum pulsāre incipit, sed magister 'Dēsine, Mārce!' inquit, 'Titus tibi mālum dare nōn potest, at ego tibi mālum dare possum, nisi hic et nunc Titō librum reddis!' Mārcus Titō librum reddit. Discipulī librōs aperiunt. Item librum suum aperit magister ac recitāre incipit.",
      ],
      notes: [
        { term: 'Cōnsīde!', gloss: 'sit down! — imperative of considere.' },
        { term: 'immō', gloss: 'on the contrary, no indeed — corrects a suggestion.' },
        { term: 'iānuam pulsat', gloss: 'knocks at the door (antequam intrat — before he enters).' },
        { term: 'tergum', gloss: 'the back, the rear part of the body.' },
        { term: 'lacrimat', gloss: 'sheds tears, weeps; convenit — it is fitting.' },
        { term: 'dolet', gloss: 'hurts, gives pain: tergum mihi dolet — my back hurts.' },
        { term: 'mālum', gloss: 'an apple (but also “an evil” — a favourite pun here).' },
        { term: 'dēsine!', gloss: 'stop! cease! (desinere).' },
      ],
    },
    {
      id: 'discipuli-dormientes',
      latinTitle: 'DISCIPVLĪ DORMIENTĒS',
      title: 'The Sleeping Pupils',
      paragraphs: [
        "Puerī autem priōrem librī partem tantum audiunt, nam antequam magister posteriōrem librī partem recitāre incipit, omnēs puerī dormiunt. Magister recitāre dēsinit et exclāmat: 'Ō improbī discipulī! Dormītis! Quod recitō nōn audītis!'",
        "Mārcus magistrō īrātē 'Ego' inquit 'nōn dormiō. Immō vigilō et tē audiō, magister.' Item Sextus et Titus 'Neque nōs dormīmus' inquiunt, 'Vigilāmus et omnia verba tua audīmus. Bene recitās, Diodōre! Bonus es magister!' Magister laetus 'Vērum est quod dīcitis' inquit, 'ego bene recitō ac bonus sum magister, at vōs male recitātis ac malī discipulī estis!'",
        "Discipulī: 'Immō bonī discipulī sumus! Bene recitāmus!' Diodōrus: 'Tacēte! Ubi estis, puerī?' Discipulī: 'In lūdō sumus.' Diodōrus: 'Vērum dīcitis: in lūdō estis, nōn domī in lectulīs! In lectulō dormīre licet, hic in lūdō nōn licet dormīre!'",
        "Magister īrātus discipulōs virga verberat. Discipulī: 'Ēī, eī! Quid nōs verberās, magister?' Diodōrus: 'Vōs verberō, quod aliō modō vōs excitāre nōn possum. Ad sellās vestrās redīte atque cōnsīdite!' Discipulī ad sellās suās redeunt, neque cōnsīdunt. Magister: 'Quid nōn cōnsīditis?' Discipulī: 'Nōn cōnsīdimus, quod sedēre nōn possumus.'",
        "Diodōrus: 'Quid? Sēdēre nōn potestis? Ergō vōs hōram tōtam tacitī stāte, dum ego sedēns partem librī posteriōrem recitō! Nec enim stantēs dormīre potestis!'",
      ],
      notes: [
        { term: 'dormit / vigilat', gloss: 'sleeps / is awake, stays awake.' },
        { term: 'recitat', gloss: 'reads aloud, recites (recitāre).' },
        { term: 'lectulus', gloss: 'a little bed (diminutive of lectus).' },
        { term: 'licet', gloss: 'it is allowed, one may: dormīre licet — you may sleep.' },
        { term: 'excitat', gloss: 'wakes up, rouses (excitare).' },
        { term: 'statē!', gloss: 'stand! — plural imperative of stare.' },
        { term: 'dum', gloss: 'while, as long as.' },
      ],
    },
  ],
  grammar: [
    {
      id: 'personae-verbi',
      latinTitle: 'Persōnae Verbī',
      title: 'The Persons of the Verb',
      intro:
        'Every Latin verb has six forms — three persons in the singular and three in the plural — ' +
        'and the ending alone tells you who is acting.',
      paradigms: [
        {
          caption: 'rīdeō, rīdēre — to laugh',
          head: ['', 'Singulāris', 'Plūrālis'],
          rows: [
            ['persōna prīma', 'rīdeō — I laugh', 'rīdēmus — we laugh'],
            ['persōna secunda', 'rīdēs — you laugh', 'rīdētis — you (all) laugh'],
            ['persōna tertia', 'rīdet — he/she laughs', 'rīdent — they laugh'],
          ],
        },
      ],
      points: [
        'Persōna prīma is the speaker (I, we); persōna secunda the person spoken to (you); persōna tertia the person spoken about (he, she, it, they).',
        'The personal endings are -o/-m, -s, -t for the singular and -mus, -tis, -nt for the plural: rīdeō, rides, rīdet; ridemus, ridetis, rīdent.',
        'The pronoun is normally left out, because the ending already says who acts: rīdet can mean “he laughs” or “she laughs”.',
        'The teacher says “Dormitis!” — you are sleeping — because the ending -tis points straight at the pupils.',
      ],
    },
    {
      id: 'coniugationes',
      latinTitle: 'Quattuor Coniugātiōnēs',
      title: 'The Four Conjugations in the Present',
      intro:
        'The four conjugations differ in their vowel, but the personal endings are always the same. ' +
        'Here is the whole present tense of one verb from each conjugation.',
      paradigms: [
        {
          caption: 'I: clāmō, clāmāre — to shout',
          head: ['', 'Singulāris', 'Plūrālis'],
          rows: [
            ['persōna prīma', 'clāmō — I shout', 'clāmāmus — we shout'],
            ['persōna secunda', 'clāmās — you shout', 'clāmātis — you shout'],
            ['persōna tertia', 'clāmat — he shouts', 'clāmant — they shout'],
          ],
        },
        {
          caption: 'II: rīdeō, rīdēre — to laugh',
          head: ['', 'Singulāris', 'Plūrālis'],
          rows: [
            ['persōna prīma', 'rīdeō — I laugh', 'rīdēmus — we laugh'],
            ['persōna secunda', 'rīdēs — you laugh', 'rīdētis — you laugh'],
            ['persōna tertia', 'rīdet — he laughs', 'rīdent — they laugh'],
          ],
        },
        {
          caption: 'III: dīcō, dīcere — to say',
          head: ['', 'Singulāris', 'Plūrālis'],
          rows: [
            ['persōna prīma', 'dīcō — I say', 'dīcimus — we say'],
            ['persōna secunda', 'dīcis — you say', 'dīcitis — you say'],
            ['persōna tertia', 'dīcit — he says', 'dīcunt — they say'],
          ],
        },
        {
          caption: 'III (-io): faciō, facere — to do, make',
          head: ['', 'Singulāris', 'Plūrālis'],
          rows: [
            ['persōna prīma', 'faciō — I do', 'facimus — we do'],
            ['persōna secunda', 'facis — you do', 'facitis — you do'],
            ['persōna tertia', 'facit — he does', 'faciunt — they do'],
          ],
        },
        {
          caption: 'IV: audiō, audīre — to hear',
          head: ['', 'Singulāris', 'Plūrālis'],
          rows: [
            ['persōna prīma', 'audiō — I hear', 'audīmus — we hear'],
            ['persōna secunda', 'audīs — you hear', 'audītis — you hear'],
            ['persōna tertia', 'audit — he hears', 'audiunt — they hear'],
          ],
        },
      ],
      points: [
        'First conjugation, infinitive in -are: clāmō, clamas, clāmat, clamamus, clamatis, clamant.',
        'Third conjugation keeps an -i-: dīcō, dicis, dicit, dicimus, dicitis, dicunt; verbs in -io like faciō add it too: faciō, facis, faciunt.',
        'Fourth conjugation, infinitive in -ire, also has -i-: audiō, audis, audit, audimus, auditis, audiunt.',
        'Whatever the conjugation, the ending -mus means “we” and -tis means “you (all)”: clamamus, ridemus, dicimus, audimus.',
      ],
    },
    {
      id: 'pronomina-personalia',
      latinTitle: 'Prōnōmina Persōnālia',
      title: 'The Personal Pronouns: ego, tu, nos, vos',
      intro:
        'Latin does not need a pronoun to make a sentence, but it uses one to emphasize or contrast ' +
        'the person: Ego non rīdeō, at vos ridetis! — I am not laughing, but you are!',
      paradigms: [
        {
          caption: 'the personal pronouns',
          head: ['', 'Singulāris', 'Plūrālis'],
          rows: [
            ['persōna prīma', 'ego — I', 'nōs — we'],
            ['persōna secunda', 'tū — you', 'vōs — you (all)'],
          ],
        },
      ],
      points: [
        'vos is simply the plural of tu: use it when you speak to more than one person.',
        'The pronoun matches the ending of its verb: ego audiō, tu audis, nos audimus, vos auditis.',
        'The pronoun is added for emphasis or contrast. “Vos ianuam non pulsatis!” — it is you who do not knock!',
        'The third-person pronoun is ille / illa (he / she) and is / ea (this one / that one), as in neque ille lacrimat — and he does not weep.',
      ],
    },
    {
      id: 'sum-posse',
      latinTitle: 'Verbum sum et posse',
      title: 'The Verb sum and posse',
      intro:
        'sum “I am” and its relatives belong to a small group whose infinitive ends in -esse.',
      paradigms: [
        {
          caption: 'sum, esse — to be',
          head: ['', 'Singulāris', 'Plūrālis'],
          rows: [
            ['persōna prīma', 'sum — I am', 'sumus — we are'],
            ['persōna secunda', 'es — you are', 'estis — you are'],
            ['persōna tertia', 'est — he/she/it is', 'sunt — they are'],
          ],
        },
        {
          caption: 'possum, posse — to be able, can',
          head: ['', 'Singulāris', 'Plūrālis'],
          rows: [
            ['persōna prīma', 'possum — I can', 'possumus — we can'],
            ['persōna secunda', 'potes — you can', 'potestis — you can'],
            ['persōna tertia', 'potest — he can', 'possunt — they can'],
          ],
        },
      ],
      points: [
        'sum is conjugated with the endings -m, -s, -t, -mus, -tis, -nt, like every other verb.',
        'Its compounds behave the same way: absum, adsum, possum.',
        'possum is really pot- + sum: possum, potes, potest, possumus, potestis, possunt.',
        'The pupils say “Bonī discipuli sumus!” — we are good pupils; the pronoun is used for emphasis.',
      ],
    },
  ],
  vocabulary: [
    { latin: 'lūdus', english: 'school; game, play', pos: 'noun (m.)' },
    { latin: 'magister', english: 'teacher, master', pos: 'noun (m.)' },
    { latin: 'discipulus', english: 'pupil, student', pos: 'noun (m.)' },
    { latin: 'tabula', english: 'writing-tablet', pos: 'noun (f.)' },
    { latin: 'sella', english: 'chair, seat', pos: 'noun (f.)' },
    { latin: 'virga', english: 'rod, cane', pos: 'noun (f.)' },
    { latin: 'tergum', english: 'back (of the body)', pos: 'noun (n.)' },
    { latin: 'iānua', english: 'door', pos: 'noun (f.)' },
    { latin: 'mālum', english: 'apple', pos: 'noun (n.)' },
    { latin: 'Graecus', english: 'Greek', pos: 'adjective' },
    { latin: 'sevērus', english: 'strict, severe', pos: 'adjective' },
    { latin: 'probus', english: 'good, honest', pos: 'adjective' },
    { latin: 'improbus', english: 'naughty, bad', pos: 'adjective' },
    { latin: 'bonus', english: 'good', pos: 'adjective' },
    { latin: 'malus', english: 'bad, wicked', pos: 'adjective' },
    { latin: 'aeger', english: 'ill, sick', pos: 'adjective' },
    { latin: 'metuit', english: 'fears, is afraid of', pos: 'verb' },
    { latin: 'verberat', english: 'beats, whips', pos: 'verb' },
    { latin: 'pūnit', english: 'punishes', pos: 'verb' },
    { latin: 'intrat', english: 'enters', pos: 'verb' },
    { latin: 'advenit', english: 'arrives, comes to', pos: 'verb' },
    { latin: 'salūtat', english: 'greets', pos: 'verb' },
    { latin: 'cōnsīdit', english: 'sits down', pos: 'verb' },
    { latin: 'surgit', english: 'rises, gets up', pos: 'verb' },
    { latin: 'clāmat', english: 'shouts, cries out', pos: 'verb' },
    { latin: 'rīdet', english: 'laughs, smiles', pos: 'verb' },
    { latin: 'recitat', english: 'recites, reads aloud', pos: 'verb' },
    { latin: 'dormit', english: 'sleeps', pos: 'verb' },
    { latin: 'vigilat', english: 'is awake, stays awake', pos: 'verb' },
    { latin: 'dēsinit', english: 'stops, ceases', pos: 'verb' },
    { latin: 'redit', english: 'returns, goes back', pos: 'verb' },
    { latin: 'potest', english: 'can, is able', pos: 'verb' },
    { latin: 'licet', english: 'it is allowed, one may', pos: 'verb' },
    { latin: 'dolet', english: 'hurts, causes pain', pos: 'verb' },
    { latin: 'incipit', english: 'begins', pos: 'verb' },
    { latin: 'reddit', english: 'gives back, returns', pos: 'verb' },
    { latin: 'ego', english: 'I', pos: 'pronoun' },
    { latin: 'tū', english: 'you (sing.)', pos: 'pronoun' },
    { latin: 'nōs', english: 'we', pos: 'pronoun' },
    { latin: 'vōs', english: 'you (pl.)', pos: 'pronoun' },
    { latin: 'quod', english: 'because', pos: 'conjunction' },
    { latin: 'cum', english: 'when, since', pos: 'conjunction' },
    { latin: 'dum', english: 'while, as long as', pos: 'conjunction' },
    { latin: 'māne', english: 'in the morning, early', pos: 'adverb' },
    { latin: 'statim', english: 'immediately, at once', pos: 'adverb' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PĒNSVM A',
      title: 'Fill in the endings',
      instruction: 'Complete each word with the correct ending.',
      type: 'fill',
      items: [
        "Mārcus ad lūdum ven{{it}} nec iānuam puls{{at}}. Magister: 'Cūr tū iānuam nōn puls{{ās}}, cum ad lūdum ven{{īs}}?' Mārcus: 'Ego iānuam nōn puls{{ō}} cum ad lūdum ven{{iō}}, quod nec Sextus nec Titus id facit. Audītē, Sexte et Tite: vōs iānuam nōn puls{{ātis}} cum ad lūdum ven{{ītis}}!' Sextus et Titus: 'Nōs iānuam puls{{āmus}} cum ad lūdum vēn{{imus}}!'",
        "Magister: 'Tacēte! Aperīte librōs!' Titus: 'Ego librum nōn hab{{eō}}.' Magister: 'Cūr librum nōn hab{{ēs}}, Tite?' Titus: 'Librum nōn hab{{eō}}, quod Mārcus meum librum hab{{et}}!' Mārcus: 'Sed vōs meās rēs hab{{ētis}}!' Titus et Sextus: 'Nōs rēs tuās nōn hab{{ēmus}}!'",
        "Magister discipulōs dormīre vidēns exclāmat: 'Ō puerī! Dorm{{ītis}}! Ego recit{{ō}}, vōs nōn aud{{ītis}}!' Mārcus: 'Ego tē recitāre aud{{iō}}. Nōn dorm{{iō}}.' Titus et Sextus: 'Nec nōs dorm{{īmus}}. Tē recitāre aud{{īmus}}. Bene recit{{ās}}, magister.' Magister: 'Ego bene recit{{ō}}, at vōs male recit{{ātis}}! Malī discipulī es{{tis}}!' Discipulī: 'Vērum nōn dīc{{imus}}, magister. Bonī discipulī s{{umus}}: in lūdō nec clām{{āmus}} nec rīd{{ēmus}}, et tē aud{{īmus}}!'",
      ],
    },
    {
      id: 'pensum-b',
      latinLabel: 'PĒNSVM B',
      title: 'Complete the sentences',
      instruction: 'Fill each gap with the missing word.',
      type: 'fill',
      items: [
        'Māne puerī in {{lūdum}} eunt. Puerī quī in lūdum eunt {{discipulī}} sunt. Quī lūdum habet, {{magister}} est. Mārcus magistrum metuit, nam Diodōrus magister {{sevērus}} est quī puerōs improbōs {{virga}} verberat.',
        "Intrat magister. Sextus dē {{sellā}} surgit. Cēterī discipulī {{nōndum}} adsunt. Magister {{exclāmat}}: 'Ō discipulōs improbōs!' Sextus: 'Num ego improbus {{discipulus|discipulus sum}}?' Magister: '{{Tū}} discipulus improbus nōn es, {{at|sed}} cēterī discipulī improbī sunt!'",
        "Post Sextum venit Titus, {{deinde}} Mārcus. Mārcus {{iānuam|ōstium}} nōn pulsat, {{statim}} lūdum intrat, nec magistrum salūtat. Magister: 'Discipulus improbus {{es}}, Mārce! Ad mē venī!' Magister {{tergum}} Mārcī virga verberat. Tergum est {{posterior}} pars corporis. Magister puerum verberāre {{dēsinit}}. Mārcus ad sellam suam {{redit}} neque {{cōnsīdit}}. Magister: '{{Cūr}} nōn cōnsīdis?' Mārcus: 'Sedēre nōn {{possum}}, quod pars tergī mihi dolet!'",
      ],
    },
    {
      id: 'pensum-c',
      latinLabel: 'PĒNSVM C',
      title: 'Answer in Latin',
      instruction: 'Answer each question with a full Latin sentence, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'Quō puerī māne eunt?', a: 'Puerī māne in lūdum eunt.' },
        { q: 'Quis est Diodōrus?', a: 'Diodōrus magister lūdī est.' },
        { q: 'Cūr puerī magistrum metuunt?', a: 'Puerī magistrum metuunt, quia sevērus est et discipulōs improbōs virga verberat.' },
        { q: 'Quis discipulus prīmus ad lūdum advēnit?', a: 'Sextus prīmus ad lūdum advēnit.' },
        { q: 'Quid facit Titus antequam lūdum intrat?', a: 'Titus iānuam pulsat antequam lūdum intrat.' },
        { q: 'Cūr Titus librum suum nōn habet?', a: 'Titus librum suum nōn habet, quod Mārcus eius librum habet.' },
        { q: 'Quis est discipulus improbissimus?', a: 'Mārcus est discipulus improbissimus.' },
        { q: 'Cūr Quīntus in lūdum īre nōn potest?', a: 'Quīntus in lūdum īre nōn potest, quod aeger est.' },
        { q: 'Cūr magister recitāre dēsinit?', a: 'Magister recitāre dēsinit, quod discipulī dormiunt nec eum audiunt.' },
        { q: 'Uter es, magister an discipulus?', a: 'Ego discipulus sum, nōn magister.' },
        { q: 'Num tū iānuam pulsās antequam cubiculum tuum intrās?', a: 'Ita, ego iānuam pulsō antequam cubiculum meum intrō.' },
      ],
    },
  ],
}

export default chapter
