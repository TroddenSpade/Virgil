// Capitulum XX — MIDAS ET PAN
// Source: Goldman & Nyenhuis, Latin via Ovid: A First Course (2nd ed., 1982)
// Reading text, vocabulary, grammar and exercises adapted for the web.

const chapter = {
  number: 20,
  roman: 'XX',
  slug: 'midas-et-pan',
  latinTitle: 'MIDAS ET PAN',
  title: 'Midas and Pan',
  tagline: 'Midas judges a contest between Pan and Apollo, and is given the ears of an ass for his folly.',
  status: 'complete',
  overview:
    'Midas, still foolish, worships Pan in the woods and is made judge of a musical contest between Pan and Apollo. ' +
    'When he declares Pan the winner, Apollo gives him the ears of an ass. Midas tries to hide them under a turban, ' +
    'but his barber whispers the secret into the earth, and the reeds repeat it whenever the wind blows. ' +
    'The grammar completes the perfect passive system and introduces idem, the deponent verbs, onomatopoeia and the reflexive pronoun sē.',
  objectives: [
    'Read and understand the story of Midas and Pan.',
    'Form and translate the perfect, pluperfect and future perfect passive.',
    'Recognise the forms of idem, eadem, idem.',
    'Understand and translate deponent verbs.',
    'Use the reflexive pronoun sē and recognise onomatopoeia.',
  ],
  readings: [
    {
      id: 'midas-et-pan',
      latinTitle: 'MIDAS ET PAN',
      title: 'Midas and Pan',
      paragraphs: [
        'Posteā Mīdās in silvīs habitābat ubi deum Pānem colēbat, sed etiamnunc sē stultum esse dēmōnstrāvit. Et sapientia et iūdicium rēgī Phrygiae eō tempore deerant. Est in Lydiā mōns altus, Tmōlus nōmine, summō quō Pān nymphīs carmina sua cantābat, dum fīstulam cērā coniūnctam īnflat. Carmina eius quidem erant pulcherrima et grātissima nymphīs Mīdaeque, quī deum maximē laudābat. Pān superbus carmina Apollinis, deī mūsicae, contemnit; vocat Apollinem ad certāmen sub iūdice Tmōlō, deō montis.',
        'Senex igitur iūdex in monte suō sēdit et aurēs ab arboribus līberāvit. Deum Pānem spectāvit et eum cantāre hīs verbīs iussit: "In iūdice nūlla mora erit." Quia Mīdās forte aderat, carmen audīverat quod fīstula Pānis sonābat. Rēx hoc carmen barbarum maximē mīrābātur, quod eī erat grātissimum. Ubi carmen Pānis terminātum est, sacer Tmōlus ōs vertit ad ōs Phoebī, quī gerēbat laurum in capite vestīmentumque longum tīnctum Tyriō murice. Sinistrā manū lyram gemmīs atque dentibus Indīs decorātam, dextrā manū plectrum tenuit. Tum Phoebus ortus est et lyram digitō doctō tetigit. Carmen cantāre coepit. Carmine audītō, Tmōlus iūdex iussit Pānem fīstulam lyrae submittere.',
        'Iūdicium autem sacrī montis Tmōlī, quod erat omnibus grātum, nōn erat grātum Mīdae, quī ita loquitur: "Iūdicium est iniūstum." Apollō nōn patitur tālēs aurēs hūmānam figūram retinēre. Ille eāsdem longiōrēs et plēnās villīs facit; dat quoque posse movērī. Mīdās damnātus in ūnā parte corporis aurēs asellī gerit, quamquam cēterae partēs sunt hominis.',
        'Posteā Mīdās aurēs purpureīs tiārīs pudōre celāre cōnābātur, sed servus, quī capillōs longōs resecābat, aurēs vīderat. Dē quibus īdem nārrāre verēbātur nec tamen sē retinēre poterat. Effōdit igitur terram, in quam immurmurat parvā voce dē auribus dominī vīsīs. Terrā reposītā, servus tacitus abit. Sed harundinēs tremulae, quae ex terrā crēscunt, verba humāta remittunt, quia ventō mōtae fābulam dē auribus asellī murmurant.',
      ],
      notes: [
        { term: 'Pān, Pānos', gloss: 'Pan, the Arcadian god of shepherds and wild music.' },
        { term: 'stultus, -a, -um', gloss: 'foolish, stupid; sē stultum esse dēmōnstrāvit — he showed himself to be foolish.' },
        { term: 'iūdicium, -ī', gloss: 'judgment, decision; iūdicium est iniūstum — the judgment is unfair.' },
        { term: 'Tmōlus, -ī', gloss: 'Mount Tmolus in Lydia, whose god acts as judge.' },
        { term: 'fīstula, -ae', gloss: 'reed-pipe, Pan’s instrument; fīstulam cērā coniūnctam īnflat.' },
        { term: 'Apollō, -inis', gloss: 'Apollo, god of music and poetry; called Phoebus in this story.' },
        { term: 'sub iūdice Tmōlō', gloss: 'with Tmolus as judge, under the judgeship of Tmolus.' },
        { term: 'aurēs līberāre', gloss: 'to free one’s ears: Tmolus frees his ears from the trees to listen.' },
        { term: 'mūrex, muricis', gloss: 'the murex, a shellfish yielding Tyrian purple dye.' },
        { term: 'plectrum, -ī', gloss: 'the pick or plectrum used to strike the lyre.' },
        { term: 'asellus, -ī', gloss: 'little ass, donkey; aurēs asellī — the ears of an ass.' },
        { term: 'tiāra, -ae', gloss: 'turban, head-dress; Midas hides his ears under purple turbans.' },
        { term: 'resecāre', gloss: 'to cut off, cut back: capillōs longōs resecābat — he was cutting his long hair.' },
        { term: 'immurmurāre', gloss: 'to whisper into; an onomatopoeic word, echoing the sound of murmuring.' },
        { term: 'harundō, -inis', gloss: 'reed; the trembling reeds repeat the buried words.' },
      ],
    },
  ],
  grammar: [
    {
      id: 'systema-perfecti-passivi',
      latinTitle: 'Systema Perfectī Passīvī',
      title: 'The Perfect Passive System',
      intro:
        'The perfect passive of every verb is a verb phrase made of the perfect passive participle and a form of esse. ' +
        'The participle agrees with the subject in number and gender. The same pattern gives the pluperfect passive ' +
        '(participle + eram) and the future perfect passive (participle + erō).',
      paradigms: [
        {
          caption: 'dūcō, dūcere, dūxī, ductum — perfect passive',
          head: ['Person', 'Latin', 'English'],
          rows: [
            ['1 sing.', 'ductus (-a) sum', 'I have been led'],
            ['2 sing.', 'ductus (-a) es', 'you have been led'],
            ['3 sing.', 'ductus (-a, -um) est', 'he, she, it has been led'],
            ['1 pl.', 'ductī (-ae) sumus', 'we have been led'],
            ['2 pl.', 'ductī (-ae) estis', 'you have been led'],
            ['3 pl.', 'ductī (-ae, -a) sunt', 'they have been led'],
          ],
        },
        {
          caption: 'pluperfect and future perfect passive',
          head: ['', 'Singular', 'Plural'],
          rows: [
            ['Pluperf.', 'ductus eram, erās, erat', 'ductī erāmus, erātis, erant'],
            ['Fut. perf.', 'ductus erō, eris, erit', 'ductī erimus, eritis, erunt'],
          ],
        },
      ],
      points: [
        'The perfect passive is easily recognised because it consists of two words: participle + form of esse.',
        'The participle changes with the subject: vir ductus est, virgō ducta est, animal ductum est; virī ductī sunt, animalia ducta sunt.',
        'The pluperfect passive uses eram, erās, erat, etc.: ductus eram — I had been led.',
        'The future perfect passive uses erō, eris, erit, etc.: ductus erō — I shall have been led.',
      ],
    },
    {
      id: 'idem-eadem-idem',
      latinTitle: 'Īdem, Eadem, Idem',
      title: 'The Same',
      intro:
        'The enclitic -dem added to the forms of is, ea, id gives the intensive pronoun-adjective īdem, eadem, idem, ' +
        'meaning "the same". It may be used as a pronoun or as an adjective.',
      paradigms: [
        {
          caption: 'īdem, eadem, idem — the same',
          head: ['', 'M.', 'F.', 'N.'],
          rows: [
            ['Nom. sing.', 'īdem', 'eadem', 'idem'],
            ['Gen. sing.', 'eiusdem', 'eiusdem', 'eiusdem'],
            ['Dat. sing.', 'eīdem', 'eīdem', 'eīdem'],
            ['Acc. sing.', 'eundem', 'eandem', 'idem'],
            ['Abl. sing.', 'eōdem', 'eādem', 'eōdem'],
            ['Nom. pl.', 'eīdem', 'eaedem', 'eadem'],
            ['Gen. pl.', 'eōrundem', 'eārundem', 'eōrundem'],
            ['Dat. pl.', 'eīsdem', 'eīsdem', 'eīsdem'],
            ['Acc. pl.', 'eōsdem', 'eāsdem', 'eadem'],
            ['Abl. pl.', 'eīsdem', 'eīsdem', 'eīsdem'],
          ],
        },
      ],
      points: [
        'The forms are those of is, ea, id with -dem added; before -dem a final -m becomes -n: eundem, eandem, eōrundem.',
        'As a pronoun: Īdem est amīcus meus et comes — The same man is my friend and companion.',
        'As an adjective: eōdem tempore — at the same time; in eadem loca — into the same places.',
        'The simpler is, ea, id is less emphatic: eō tempore — at that time.',
      ],
    },
    {
      id: 'verba-deponentia',
      latinTitle: 'Verba Dēponentia',
      title: 'Deponent Verbs',
      intro:
        'Deponent verbs have laid aside (dēpōnere) their active forms and appear only in the passive, but their passive ' +
        'forms must be translated as active. They occur in all four conjugations.',
      paradigms: [
        {
          caption: 'synopsis, third person singular',
          head: ['', 'I', 'II', 'III', 'III-iō', 'IV'],
          rows: [
            ['Pres.', 'cōnātur', 'verētur', 'loquitur', 'patitur', 'oritur'],
            ['Imperf.', 'cōnābātur', 'verēbātur', 'loquēbātur', 'patiēbātur', 'oriēbātur'],
            ['Fut.', 'cōnābitur', 'verēbitur', 'loquētur', 'patiētur', 'oriētur'],
            ['Perf.', 'cōnātus est', 'veritus est', 'locūtus est', 'passus est', 'ortus est'],
            ['Pluperf.', 'cōnātus erat', 'veritus erat', 'locūtus erat', 'passus erat', 'ortus erat'],
            ['Fut. perf.', 'cōnātus erit', 'veritus erit', 'locūtus erit', 'passus erit', 'ortus erit'],
          ],
        },
      ],
      points: [
        'The deponents of this lesson are cōnor, cōnārī, cōnātus sum (try); vereor, verērī, veritus sum (fear); loquor, loquī, locūtus sum (speak); patior, patī, passus sum (allow, suffer); and orior, orīrī, ortus sum (rise).',
        'Their conjugation is regular and follows the passive forms, but the meaning is active: cōnātur — he tries, not "he is tried".',
        'The future sign is -bi- in the first and second conjugations and -e- in the third, third-iō and fourth.',
        'The perfect of a deponent is made with the perfect participle and esse: locūtus est — he spoke, he has spoken.',
      ],
    },
    {
      id: 'onomatopoeia',
      latinTitle: 'Onomatopoeia',
      title: 'Onomatopoeia',
      intro:
        'Onomatopoeia is the figure of speech in which the sound of the words echoes their meaning. In the story of Midas ' +
        'the verb immurmurat echoes the sound of whispering or murmuring.',
      paradigms: [
        {
          caption: 'sound echoing sense',
          head: ['Latin', 'English', 'Sound'],
          rows: [
            ['immurmurāre', 'to whisper into, murmur against', 'the low, repeated murmur of the secret'],
            ['murmurāre', 'to murmur', 'the sound of the reeds in the wind'],
          ],
        },
      ],
      points: [
        'The poet chooses words whose sound supports the sense: immurmurat, murmurant.',
        'Onomatopoeia is especially common in descriptions of water, wind, insects and human speech.',
        'The English words "murmur" and "whisper" are themselves onomatopoeic and help to bring out the Latin effect.',
      ],
    },
    {
      id: 'pronomen-reflexivum',
      latinTitle: 'Prōnōmen Reflexīvum: Sē',
      title: 'The Reflexive Pronoun sē',
      intro:
        'When the third-person subject acts upon itself, Latin uses the reflexive pronoun sē (sēsē) rather than a form of is, ' +
        'ea, id. It has the same form for all genders, singular and plural.',
      paradigms: [
        {
          caption: 'sē, suī — himself, herself, itself, themselves',
          head: ['Case', 'Form', 'Meaning'],
          rows: [
            ['Gen.', 'suī', 'of himself, herself, itself, themselves; his, her, its, their own'],
            ['Dat.', 'sibi', 'to himself, herself, itself, themselves'],
            ['Acc.', 'sē (sēsē)', 'himself, herself, itself, themselves'],
            ['Abl.', 'sē (sēsē)', '(by) himself, herself, itself, themselves'],
          ],
        },
      ],
      points: [
        'Arachnē sē (sēsē) docet — Arachne teaches herself.',
        'Vir ā sē necātus est — The man was killed by himself.',
        'Fēminae sē laudant — The women praise themselves.',
        'Narcissus erat sibi grātissimus — Narcissus was very pleasing to himself.',
        'The possessive adjective suus, -a, -um corresponds to sē: suōs parentēs amant — they love their own parents.',
      ],
    },
  ],
  vocabulary: [
    { latin: 'Apollō, -inis', english: 'Apollo (god of music and medicine)', pos: 'noun m.' },
    { latin: 'auris, auris', english: 'ear', pos: 'noun f.' },
    { latin: 'carmen, -inis', english: 'song', pos: 'noun n.' },
    { latin: 'gemma, -ae', english: 'jewel, gem', pos: 'noun f.' },
    { latin: 'iūdex, -icis', english: 'judge', pos: 'noun m.' },
    { latin: 'iūdicium, -ī', english: 'judgment', pos: 'noun n.' },
    { latin: 'lyra, -ae', english: 'lyre', pos: 'noun f.' },
    { latin: 'ventus, -ī', english: 'wind', pos: 'noun m.' },
    { latin: 'abīre', english: 'to go away', pos: 'verb' },
    { latin: 'cantāre', english: 'to sing, make music', pos: 'verb' },
    { latin: 'coepisse', english: 'to have begun (defective)', pos: 'verb' },
    { latin: 'colere', english: 'to till, cultivate, honour, worship', pos: 'verb' },
    { latin: 'cōnārī', english: 'to attempt, try', pos: 'verb' },
    { latin: 'contemnere', english: 'to value little, disdain', pos: 'verb' },
    { latin: 'decorāre', english: 'to adorn, decorate', pos: 'verb' },
    { latin: 'deesse', english: 'to be absent, be lacking, be missing', pos: 'verb' },
    { latin: 'effodere', english: 'to dig', pos: 'verb' },
    { latin: 'gerere', english: 'to bear, carry, wear, accomplish, do', pos: 'verb' },
    { latin: 'immurmurāre', english: 'to whisper into', pos: 'verb' },
    { latin: 'īnflāre', english: 'to blow into', pos: 'verb' },
    { latin: 'līberāre', english: 'to free, set free, liberate', pos: 'verb' },
    { latin: 'loquī', english: 'to speak, say', pos: 'verb' },
    { latin: 'mīrārī', english: 'to wonder at, admire', pos: 'verb' },
    { latin: 'patī', english: 'to allow, suffer, permit', pos: 'verb' },
    { latin: 'orīrī', english: 'to rise', pos: 'verb' },
    { latin: 'repōnere', english: 'to put back, replace', pos: 'verb' },
    { latin: 'resecāre', english: 'to cut off', pos: 'verb' },
    { latin: 'submittere', english: 'to put down, lower, humble, yield', pos: 'verb' },
    { latin: 'tacēre', english: 'to be silent', pos: 'verb' },
    { latin: 'termināre', english: 'to end, finish', pos: 'verb' },
    { latin: 'verērī', english: 'to fear, be afraid', pos: 'verb' },
    { latin: 'vertere', english: 'to turn', pos: 'verb' },
    { latin: 'barbarus, -a, -um', english: 'rough, rude, foreign', pos: 'adj.' },
    { latin: 'dexter, -tra, -trum', english: 'right, skilful', pos: 'adj.' },
    { latin: 'hūmānus, -a, -um', english: 'human, humane', pos: 'adj.' },
    { latin: 'iniūstus, -a, -um', english: 'unjust, unfair', pos: 'adj.' },
    { latin: 'sinister, -tra, -trum', english: 'left, adverse', pos: 'adj.' },
    { latin: 'villōsus, -a, -um', english: 'shaggy, hairy', pos: 'adj.' },
    { latin: 'posteā', english: 'afterwards, thereafter, after that', pos: 'adverb' },
    { latin: 'tum', english: 'then', pos: 'adverb' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PĒNSVM A',
      title: 'Questions',
      instruction: 'Answer each question in a complete Latin sentence, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'Quem Mīdās colēbat?', a: 'Mīdās deum Pānem in silvīs colēbat.' },
        { q: 'Habetne Mīdās nunc sapientiam aut iūdicium?', a: 'Nōn habet: et sapientia et iūdicium rēgī Phrygiae eō tempore deerant.' },
        { q: 'Quibus Pān carmina cantābat?', a: 'Pān nymphīs carmina sua cantābat.' },
        { q: 'Quem Pān ad certāmen vocat?', a: 'Pān Apollinem, deum mūsicae, ad certāmen vocat.' },
        { q: 'Quis est iūdex certāminis?', a: 'Tmōlus, deus montis, est iūdex certāminis.' },
        { q: 'Cuius carmen est prīmum? Estne pulchrum?', a: 'Carmen Pānis est prīmum; nymphīs quidem pulcherrimum et grātissimum erat.' },
        { q: 'Estne lyra Apollinis decorāta? Quibus?', a: 'Lyra Apollinis gemmīs atque dentibus Indīs decorāta est.' },
        { q: 'Quis est victor certāminis?', a: 'Apollō est victor certāminis: Tmōlus iussit Pānem fīstulam lyrae submittere.' },
        { q: 'Quis iūdicium vocat iniūstum?', a: 'Mīdās iūdicium vocat iniūstum.' },
        { q: 'Quōmodo Mīdās damnātur?', a: 'Apollō Mīdae aurēs asellī dat: in ūnā parte corporis aurēs asellī gerit.' },
        { q: 'Quōmodo Mīdās aurēs celat?', a: 'Mīdās aurēs purpureīs tiārīs pudōre celāre cōnābātur.' },
        { q: 'Quis aurēs rēgis videt?', a: 'Servus, quī capillōs longōs resecābat, aurēs rēgis vīdit.' },
      ],
    },
    {
      id: 'pensum-b',
      latinLabel: 'PĒNSVM B',
      title: 'The Perfect Passive',
      instruction: 'Supply the correct form of the perfect passive of the verb in brackets.',
      type: 'fill',
      items: [
        'Iūdicium {{factum est}}.',
        'Verba {{dicta sunt}}.',
        'Vōx {{audīta est}}.',
        'Puer {{territus est}}.',
        'Fābula {{nārrāta est}}.',
        'Terra {{relicta erat}}.',
        'Pōmum in aurum {{mūtātum erat}}.',
        'Carmen {{cantātum erit}}.',
        'Clāmor ā spectātōribus {{sonātus est}}.',
        'Aurēs asellī ā rēge {{celātae sunt}}.',
      ],
    },
    {
      id: 'pensum-c',
      latinLabel: 'PĒNSVM C',
      title: 'Deponent Verbs',
      instruction: 'Translate each deponent verb into English. Remember that the passive form has an active meaning.',
      type: 'fill',
      items: [
        'cōnantur — {{they try}}',
        'verēbāmur — {{we feared}}',
        'locūtī sumus — {{we spoke}}',
        'passī erātis — {{you (pl.) had suffered}}',
        'ortus es — {{you (sing.) rose}}',
        'oriēbātur — {{he was rising}}',
        'loquēmur — {{we shall speak}}',
        'veritus est — {{he feared}}',
        'cōnābāris — {{you were trying}}',
        'patiminī — {{you (pl.) allow}}',
      ],
    },
  ],
}

export default chapter
