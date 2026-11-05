// Capitulum XV — Magister et Discipuli
// Sources: Ørberg, Lingua Latina per se Illustrata, Pars I: Familia Romana (2nd ed.)
// Reading text, grammar and exercises adapted and re-typeset for the web.

const chapter = {
  number: 15,
  roman: 'XV',
  slug: 'magister-et-discipuli',
  latinTitle: 'MAGISTER ET DISCIPVLI',
  title: 'The Teacher and the Pupils',
  tagline:
    'Marcus goes to school in Tusculum, where the strict teacher Diodorus and his rod keep order — ' +
    'until the pupils chat, laugh and fall asleep.',
  status: 'complete',
  overview:
    'Marcus carries his book and writing-tablet to the ludus, the school of Tusculum, where the Greek ' +
    'teacher Diodorus rules with a cane. One pupil arrives early and politely, but Marcus arrives late, ' +
    'skips the knock and refuses to greet the master — and he is punished. Then the whole class drifts ' +
    'off to sleep while the teacher recites. Through the story you learn the persons of the verb ' +
    '(persona prima, secunda, tertia) in both singular and plural, the pronouns ego, tu, nos and vos, ' +
    'and the full present tense across the four conjugations.',
  objectives: [
    'Read the school scene aloud and follow a Latin dialogue in prose.',
    'Name the six persons of the verb: persona prima, secunda and tertia, singular and plural.',
    'Conjugate a verb in the present tense across the four conjugations (clamare, ridere, dicere, audire).',
    'Use the personal pronouns ego, tu, nos and vos for emphasis or contrast.',
    'Use the endings to tell who acts without a separate pronoun: clamat means “he shouts”.',
  ],
  readings: [
    {
      id: 'in-ludum',
      latinTitle: 'IN LVDVM',
      title: 'To School',
      paragraphs: [
        'Marcus librum et tabulam et ceteras res ferens Tusculum ambulat. Illic est ludus puerorum. Multi pueri mane in ludum eunt.',
        'Magister ludi est vir Graecus, cui nomen est Diodorus. Marcus magistrum metuit, Diodorus enim magister severus est, qui discipulos suos virga verberat; eo modo magister severus discipulos improbos punire solet.',
        'Discipuli sunt pueri qui in ludum eunt. Marcus et Quintus sunt duo discipuli. Alii discipuli sunt Titus et Sextus.',
        'Sextus, qui ante Marcum et Titum ad ludum advenit, primus ludum intrat. Sextus solus est, nam ceteri discipuli nondum adsunt.',
        "Magister intrans Sextum solum in sella sedentem videt. Sextus de sella surgens magistrum salutat: 'Salve, magister!'",
      ],
      notes: [
        { term: 'ludus', gloss: 'school — also “game, play”; the ludus is where boys learn.' },
        { term: 'tabula', gloss: 'a writing-tablet, the pupil’s notebook.' },
        { term: 'magister / discipulus', gloss: 'teacher / pupil (literally “learner”).' },
        { term: 'metuit', gloss: 'fears, is afraid of (metuere).' },
        { term: 'virga', gloss: 'a rod or cane, the teacher’s instrument of punishment.' },
        { term: 'punit', gloss: 'punishes; punire solet — he is accustomed to punish.' },
        { term: 'sella', gloss: 'chair, seat; de sella surgit — he gets up from his chair.' },
      ],
    },
    {
      id: 'marcus-improbus',
      latinTitle: 'MARCVS IMPROBVS',
      title: 'Marcus the Naughty Pupil',
      paragraphs: [
        "Magister: 'Salve, Sexte! Conside!' Sextus in sella considit. Discipulus tacitus ante magistrum sedet.",
        "Magister interrogat: 'Cur tu solus es, Sexte?' 'Ego solus sum, quod ceteri discipuli omnes absunt,' respondet Sextus. Exclamat magister: 'O discipulos improbos ...!' Sextus: 'Num ego discipulus improbus sum?' Magister: 'Immo tu probus es discipulus, Sexte, at Marcus et Quintus et Titus improbi sunt!'",
        "Hic Titus ad ludum advenit et ianuam pulsat antequam intrat: discipulus non statim intrat, sed primum ianuam pulsat; tum ludum intrat et magistrum salutat: 'Salve, magister!' Magister: 'O Tite! Sextus iam adest ... ' Titus: 'At Marcus et Quintus nondum adsunt!' Magister: 'Tace, puer! Claude ianuam et conside! Aperite libros, pueri!'",
        "Sextus statim librum suum aperit, sed Titus, qui librum non habet, 'Ego' inquit 'librum non habeo.' Magister: 'Quid? Sextus librum suum habet, tu librum tuum non habes? Cur librum non habes?' Titus: 'Librum non habeo, quod Marcus meum librum habet.'",
        "Post Titum Marcus ad ludum advenit, neque is ianuam pulsat antequam intrat. Marcus statim intrat, nec magistrum salutat. 'O Marce!' inquit Diodorus, 'Cur tu ianuam non pulsas cum ad ludum venis, nec me salutas cum me vides?' At Marcus 'Ego' inquit 'ianuam non pulso cum ad ludum venio, nec te saluto cum te video, quia nec Sextus nec Titus id facit.' Sextus et Titus: 'Quid?'",
        "Marcus (ad Sextum et Titum): 'Vos ianuam non pulsatis cum ad ludum venitis, nec magistrum salutatis cum eum videtis. Auditisne id quod dico?' Tum Sextus et Titus 'Id quod dicis' inquiunt 'verum non est: nos ianuam pulsamus cum ad ludum venimus, et magistrum salutamus cum eum videmus. Nonne verum dicimus, magister?' Magister: 'Vos verum dicitis. Quod Marcus dicit non est verum. Discipulus improbus es, Marce! Necesse est te punire. Statim ad me veni!'",
        "Diodorus, magister severus, tergum pueri virga verberat. (Tergum est posterior pars corporis.) Tergum dolet Marco, neque ille lacrimat, nam lacrimare puero Romano non convenit. Marcus clamat: 'Ei! Iam satis est! Desine, magister!' Magister puerum verberare desinit et 'Ad sellam tuam redi!' inquit, 'atque conside!'",
        "Marcus ad sellam suam redit, neque considit, sed tacitus ante sellam stat. 'Audisne, Marce? Ego te considere iubeo. Cur non considis?' interrogat magister. Marcus: 'Non consido, quod sedere non possum.' Diodorus: 'Cur sedere non potes?' Marcus: 'Sedere non possum, quod mihi dolet ... pars tergi inferior in qua sedere soleo.' Haec verba audientes Titus et Sextus rident. Diodorus: 'Quid ridetis, Tite et Sexte?' Titus: 'Ridemus, quod Marco dolet ... ' Diodorus: 'Tacete! Eam corporis partem nominare non convenit! Sed ubi est frater tuus, Marce?'",
        "Marcus: 'Is domi est apud matrem suam. Quintus dicit se aegrum esse.' Diodorus: 'Si aeger est, in ludum ire non potest. At vos bene valetis. Iam aperite libros!' Titus: 'Marcus meum librum habet.' Diodorus: 'Quid tu librum Titi habes, Marce?' Marcus: 'Ego eius librum habeo, quod is meum malum habet. Redde mihi malum meum, Tite!' Titus ridens 'Malum' inquit 'tibi reddere non possum, id enim iam in ventre meo est!'",
        "Marcus iratus Titum pulsare incipit, sed magister 'Desine, Marce!' inquit, 'Titus tibi malum dare non potest, at ego tibi malum dare possum, nisi hic et nunc Tito librum reddis!' Marcus Tito librum reddit. Discipuli libros aperiunt. Item librum suum aperit magister ac recitare incipit.",
      ],
      notes: [
        { term: 'Conside!', gloss: 'sit down! — imperative of considere.' },
        { term: 'immo', gloss: 'on the contrary, no indeed — corrects a suggestion.' },
        { term: 'ianuam pulsat', gloss: 'knocks at the door (antequam intrat — before he enters).' },
        { term: 'tergum', gloss: 'the back, the rear part of the body.' },
        { term: 'lacrimat', gloss: 'sheds tears, weeps; convenit — it is fitting.' },
        { term: 'dolet', gloss: 'hurts, gives pain: tergum mihi dolet — my back hurts.' },
        { term: 'malum', gloss: 'an apple (but also “an evil” — a favourite pun here).' },
        { term: 'desine!', gloss: 'stop! cease! (desinere).' },
      ],
    },
    {
      id: 'discipuli-dormientes',
      latinTitle: 'DISCIPVLI DORMIENTES',
      title: 'The Sleeping Pupils',
      paragraphs: [
        "Pueri autem priorem libri partem tantum audiunt, nam antequam magister posteriorem libri partem recitare incipit, omnes pueri dormiunt. Magister recitare desinit et exclamat: 'O improbi discipuli! Dormitis! Quod recito non auditis!'",
        "Marcus magistro irate 'Ego' inquit 'non dormio. Immo vigilo et te audio, magister.' Item Sextus et Titus 'Neque nos dormimus' inquiunt, 'Vigilamus et omnia verba tua audimus. Bene recitas, Diodore! Bonus es magister!' Magister laetus 'Verum est quod dicitis' inquit, 'ego bene recito ac bonus sum magister, at vos male recitatis ac mali discipuli estis!'",
        "Discipuli: 'Immo boni discipuli sumus! Bene recitamus!' Diodorus: 'Tacete! Ubi estis, pueri?' Discipuli: 'In ludo sumus.' Diodorus: 'Verum dicitis: in ludo estis, non domi in lectulis! In lectulo dormire licet, hic in ludo non licet dormire!'",
        "Magister iratus discipulos virga verberat. Discipuli: 'Ei, ei! Quid nos verberas, magister?' Diodorus: 'Vos verbero, quod alio modo vos excitare non possum. Ad sellas vestras redite atque considite!' Discipuli ad sellas suas redeunt, neque considunt. Magister: 'Quid non considitis?' Discipuli: 'Non considimus, quod sedere non possumus.'",
        "Diodorus: 'Quid? Sedere non potestis? Ergo vos horam totam taciti state, dum ego sedens partem libri posteriorem recito! Nec enim stantes dormire potestis!'",
      ],
      notes: [
        { term: 'dormit / vigilat', gloss: 'sleeps / is awake, stays awake.' },
        { term: 'recitat', gloss: 'reads aloud, recites (recitare).' },
        { term: 'lectulus', gloss: 'a little bed (diminutive of lectus).' },
        { term: 'licet', gloss: 'it is allowed, one may: dormire licet — you may sleep.' },
        { term: 'excitat', gloss: 'wakes up, rouses (excitare).' },
        { term: 'state!', gloss: 'stand! — plural imperative of stare.' },
        { term: 'dum', gloss: 'while, as long as.' },
      ],
    },
  ],
  grammar: [
    {
      id: 'personae-verbi',
      latinTitle: 'Personae Verbi',
      title: 'The Persons of the Verb',
      intro:
        'Every Latin verb has six forms — three persons in the singular and three in the plural — ' +
        'and the ending alone tells you who is acting.',
      paradigms: [
        {
          caption: 'rideo, ridere — to laugh',
          head: ['', 'Singularis', 'Pluralis'],
          rows: [
            ['persona prima', 'rideo — I laugh', 'ridemus — we laugh'],
            ['persona secunda', 'rides — you laugh', 'ridetis — you (all) laugh'],
            ['persona tertia', 'ridet — he/she laughs', 'rident — they laugh'],
          ],
        },
      ],
      points: [
        'Persona prima is the speaker (I, we); persona secunda the person spoken to (you); persona tertia the person spoken about (he, she, it, they).',
        'The personal endings are -o/-m, -s, -t for the singular and -mus, -tis, -nt for the plural: rideo, rides, ridet; ridemus, ridetis, rident.',
        'The pronoun is normally left out, because the ending already says who acts: ridet can mean “he laughs” or “she laughs”.',
        'The teacher says “Dormitis!” — you are sleeping — because the ending -tis points straight at the pupils.',
      ],
    },
    {
      id: 'coniugationes',
      latinTitle: 'Quattuor Coniugationes',
      title: 'The Four Conjugations in the Present',
      intro:
        'The four conjugations differ in their vowel, but the personal endings are always the same. ' +
        'Here is the whole present tense of one verb from each conjugation.',
      paradigms: [
        {
          caption: 'I: clamo, clamare — to shout',
          head: ['', 'Singularis', 'Pluralis'],
          rows: [
            ['persona prima', 'clamo — I shout', 'clamamus — we shout'],
            ['persona secunda', 'clamas — you shout', 'clamatis — you shout'],
            ['persona tertia', 'clamat — he shouts', 'clamant — they shout'],
          ],
        },
        {
          caption: 'II: rideo, ridere — to laugh',
          head: ['', 'Singularis', 'Pluralis'],
          rows: [
            ['persona prima', 'rideo — I laugh', 'ridemus — we laugh'],
            ['persona secunda', 'rides — you laugh', 'ridetis — you laugh'],
            ['persona tertia', 'ridet — he laughs', 'rident — they laugh'],
          ],
        },
        {
          caption: 'III: dico, dicere — to say',
          head: ['', 'Singularis', 'Pluralis'],
          rows: [
            ['persona prima', 'dico — I say', 'dicimus — we say'],
            ['persona secunda', 'dicis — you say', 'dicitis — you say'],
            ['persona tertia', 'dicit — he says', 'dicunt — they say'],
          ],
        },
        {
          caption: 'III (-io): facio, facere — to do, make',
          head: ['', 'Singularis', 'Pluralis'],
          rows: [
            ['persona prima', 'facio — I do', 'facimus — we do'],
            ['persona secunda', 'facis — you do', 'facitis — you do'],
            ['persona tertia', 'facit — he does', 'faciunt — they do'],
          ],
        },
        {
          caption: 'IV: audio, audire — to hear',
          head: ['', 'Singularis', 'Pluralis'],
          rows: [
            ['persona prima', 'audio — I hear', 'audimus — we hear'],
            ['persona secunda', 'audis — you hear', 'auditis — you hear'],
            ['persona tertia', 'audit — he hears', 'audiunt — they hear'],
          ],
        },
      ],
      points: [
        'First conjugation, infinitive in -are: clamo, clamas, clamat, clamamus, clamatis, clamant.',
        'Third conjugation keeps an -i-: dico, dicis, dicit, dicimus, dicitis, dicunt; verbs in -io like facio add it too: facio, facis, faciunt.',
        'Fourth conjugation, infinitive in -ire, also has -i-: audio, audis, audit, audimus, auditis, audiunt.',
        'Whatever the conjugation, the ending -mus means “we” and -tis means “you (all)”: clamamus, ridemus, dicimus, audimus.',
      ],
    },
    {
      id: 'pronomina-personalia',
      latinTitle: 'Pronomina Personalia',
      title: 'The Personal Pronouns: ego, tu, nos, vos',
      intro:
        'Latin does not need a pronoun to make a sentence, but it uses one to emphasize or contrast ' +
        'the person: Ego non rideo, at vos ridetis! — I am not laughing, but you are!',
      paradigms: [
        {
          caption: 'the personal pronouns',
          head: ['', 'Singularis', 'Pluralis'],
          rows: [
            ['persona prima', 'ego — I', 'nos — we'],
            ['persona secunda', 'tu — you', 'vos — you (all)'],
          ],
        },
      ],
      points: [
        'vos is simply the plural of tu: use it when you speak to more than one person.',
        'The pronoun matches the ending of its verb: ego audio, tu audis, nos audimus, vos auditis.',
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
          head: ['', 'Singularis', 'Pluralis'],
          rows: [
            ['persona prima', 'sum — I am', 'sumus — we are'],
            ['persona secunda', 'es — you are', 'estis — you are'],
            ['persona tertia', 'est — he/she/it is', 'sunt — they are'],
          ],
        },
        {
          caption: 'possum, posse — to be able, can',
          head: ['', 'Singularis', 'Pluralis'],
          rows: [
            ['persona prima', 'possum — I can', 'possumus — we can'],
            ['persona secunda', 'potes — you can', 'potestis — you can'],
            ['persona tertia', 'potest — he can', 'possunt — they can'],
          ],
        },
      ],
      points: [
        'sum is conjugated with the endings -m, -s, -t, -mus, -tis, -nt, like every other verb.',
        'Its compounds behave the same way: absum, adsum, possum.',
        'possum is really pot- + sum: possum, potes, potest, possumus, potestis, possunt.',
        'The pupils say “Boni discipuli sumus!” — we are good pupils; the pronoun is used for emphasis.',
      ],
    },
  ],
  vocabulary: [
    { latin: 'ludus', english: 'school; game, play', pos: 'noun (m.)' },
    { latin: 'magister', english: 'teacher, master', pos: 'noun (m.)' },
    { latin: 'discipulus', english: 'pupil, student', pos: 'noun (m.)' },
    { latin: 'tabula', english: 'writing-tablet', pos: 'noun (f.)' },
    { latin: 'sella', english: 'chair, seat', pos: 'noun (f.)' },
    { latin: 'virga', english: 'rod, cane', pos: 'noun (f.)' },
    { latin: 'tergum', english: 'back (of the body)', pos: 'noun (n.)' },
    { latin: 'ianua', english: 'door', pos: 'noun (f.)' },
    { latin: 'malum', english: 'apple', pos: 'noun (n.)' },
    { latin: 'Graecus', english: 'Greek', pos: 'adjective' },
    { latin: 'severus', english: 'strict, severe', pos: 'adjective' },
    { latin: 'probus', english: 'good, honest', pos: 'adjective' },
    { latin: 'improbus', english: 'naughty, bad', pos: 'adjective' },
    { latin: 'bonus', english: 'good', pos: 'adjective' },
    { latin: 'malus', english: 'bad, wicked', pos: 'adjective' },
    { latin: 'aeger', english: 'ill, sick', pos: 'adjective' },
    { latin: 'metuit', english: 'fears, is afraid of', pos: 'verb' },
    { latin: 'verberat', english: 'beats, whips', pos: 'verb' },
    { latin: 'punit', english: 'punishes', pos: 'verb' },
    { latin: 'intrat', english: 'enters', pos: 'verb' },
    { latin: 'advenit', english: 'arrives, comes to', pos: 'verb' },
    { latin: 'salutat', english: 'greets', pos: 'verb' },
    { latin: 'considit', english: 'sits down', pos: 'verb' },
    { latin: 'surgit', english: 'rises, gets up', pos: 'verb' },
    { latin: 'clamat', english: 'shouts, cries out', pos: 'verb' },
    { latin: 'ridet', english: 'laughs, smiles', pos: 'verb' },
    { latin: 'recitat', english: 'recites, reads aloud', pos: 'verb' },
    { latin: 'dormit', english: 'sleeps', pos: 'verb' },
    { latin: 'vigilat', english: 'is awake, stays awake', pos: 'verb' },
    { latin: 'desinit', english: 'stops, ceases', pos: 'verb' },
    { latin: 'redit', english: 'returns, goes back', pos: 'verb' },
    { latin: 'potest', english: 'can, is able', pos: 'verb' },
    { latin: 'licet', english: 'it is allowed, one may', pos: 'verb' },
    { latin: 'dolet', english: 'hurts, causes pain', pos: 'verb' },
    { latin: 'incipit', english: 'begins', pos: 'verb' },
    { latin: 'reddit', english: 'gives back, returns', pos: 'verb' },
    { latin: 'ego', english: 'I', pos: 'pronoun' },
    { latin: 'tu', english: 'you (sing.)', pos: 'pronoun' },
    { latin: 'nos', english: 'we', pos: 'pronoun' },
    { latin: 'vos', english: 'you (pl.)', pos: 'pronoun' },
    { latin: 'quod', english: 'because', pos: 'conjunction' },
    { latin: 'cum', english: 'when, since', pos: 'conjunction' },
    { latin: 'dum', english: 'while, as long as', pos: 'conjunction' },
    { latin: 'mane', english: 'in the morning, early', pos: 'adverb' },
    { latin: 'statim', english: 'immediately, at once', pos: 'adverb' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PENSVM A',
      title: 'Fill in the endings',
      instruction: 'Complete each word with the correct ending.',
      type: 'fill',
      items: [
        "Marcus ad ludum ven{{it}} nec ianuam puls{{at}}. Magister: 'Cur tu ianuam non puls{{as}}, cum ad ludum ven{{is}}?' Marcus: 'Ego ianuam non puls{{o}} cum ad ludum ven{{io}}, quod nec Sextus nec Titus id facit. Audite, Sexte et Tite: vos ianuam non puls{{atis}} cum ad ludum ven{{itis}}!' Sextus et Titus: 'Nos ianuam puls{{amus}} cum ad ludum ven{{imus}}!'",
        "Magister: 'Tacete! Aperite libros!' Titus: 'Ego librum non hab{{eo}}.' Magister: 'Cur librum non hab{{es}}, Tite?' Titus: 'Librum non hab{{eo}}, quod Marcus meum librum hab{{et}}!' Marcus: 'Sed vos meas res hab{{etis}}!' Titus et Sextus: 'Nos res tuas non hab{{emus}}!'",
        "Magister discipulos dormire videns exclamat: 'O pueri! Dorm{{itis}}! Ego recit{{o}}, vos non aud{{itis}}!' Marcus: 'Ego te recitare aud{{io}}. Non dorm{{io}}.' Titus et Sextus: 'Nec nos dorm{{imus}}. Te recitare aud{{imus}}. Bene recit{{as}}, magister.' Magister: 'Ego bene recit{{o}}, at vos male recit{{atis}}! Mali discipuli es{{tis}}!' Discipuli: 'Verum non dic{{imus}}, magister. Boni discipuli s{{umus}}: in ludo nec clam{{amus}} nec rid{{emus}}, et te aud{{imus}}!'",
      ],
    },
    {
      id: 'pensum-b',
      latinLabel: 'PENSVM B',
      title: 'Complete the sentences',
      instruction: 'Fill each gap with the missing word.',
      type: 'fill',
      items: [
        'Mane pueri in {{ludum}} eunt. Pueri qui in ludum eunt {{discipuli}} sunt. Qui ludum habet, {{magister}} est. Marcus magistrum metuit, nam Diodorus magister {{severus}} est qui pueros improbos {{virga}} verberat.',
        "Intrat magister. Sextus de {{sella}} surgit. Ceteri discipuli {{nondum}} adsunt. Magister {{exclamat}}: 'O discipulos improbos!' Sextus: 'Num ego improbus {{discipulus|discipulus sum}}?' Magister: '{{Tu}} discipulus improbus non es, {{at|sed}} ceteri discipuli improbi sunt!'",
        "Post Sextum venit Titus, {{deinde}} Marcus. Marcus {{ianuam|ostium}} non pulsat, {{statim}} ludum intrat, nec magistrum salutat. Magister: 'Discipulus improbus {{es}}, Marce! Ad me veni!' Magister {{tergum}} Marci virga verberat. Tergum est {{posterior}} pars corporis. Magister puerum verberare {{desinit}}. Marcus ad sellam suam {{redit}} neque {{considit}}. Magister: '{{Cur}} non considis?' Marcus: 'Sedere non {{possum}}, quod pars tergi mihi dolet!'",
      ],
    },
    {
      id: 'pensum-c',
      latinLabel: 'PENSVM C',
      title: 'Answer in Latin',
      instruction: 'Answer each question with a full Latin sentence, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'Quo pueri mane eunt?', a: 'Pueri mane in ludum eunt.' },
        { q: 'Quis est Diodorus?', a: 'Diodorus magister ludi est.' },
        { q: 'Cur pueri magistrum metuunt?', a: 'Pueri magistrum metuunt, quia severus est et discipulos improbos virga verberat.' },
        { q: 'Quis discipulus primus ad ludum advenit?', a: 'Sextus primus ad ludum advenit.' },
        { q: 'Quid facit Titus antequam ludum intrat?', a: 'Titus ianuam pulsat antequam ludum intrat.' },
        { q: 'Cur Titus librum suum non habet?', a: 'Titus librum suum non habet, quod Marcus eius librum habet.' },
        { q: 'Quis est discipulus improbissimus?', a: 'Marcus est discipulus improbissimus.' },
        { q: 'Cur Quintus in ludum ire non potest?', a: 'Quintus in ludum ire non potest, quod aeger est.' },
        { q: 'Cur magister recitare desinit?', a: 'Magister recitare desinit, quod discipuli dormiunt nec eum audiunt.' },
        { q: 'Uter es, magister an discipulus?', a: 'Ego discipulus sum, non magister.' },
        { q: 'Num tu ianuam pulsas antequam cubiculum tuum intras?', a: 'Ita, ego ianuam pulso antequam cubiculum meum intro.' },
      ],
    },
  ],
}

export default chapter
