// Capitulum XVIII — ATALANTA ET HIPPOMENES
// Source: Goldman & Nyenhuis, Latin via Ovid: A First Course (2nd ed., 1982)
// Reading text, vocabulary, grammar and exercises adapted for the web.

const chapter = {
  number: 18,
  roman: 'XVIII',
  slug: 'atalanta-et-hippomenes-2',
  latinTitle: 'ATALANTA ET HIPPOMENES',
  title: 'Atalanta and Hippomenes (Part 2)',
  tagline: 'Venus gives Hippomenes three golden apples, and the race is won by a costly delay.',
  status: 'complete',
  overview:
    'The story of Atalanta reaches its crisis. Hippomenes prays to Venus, who gives him three golden apples from her ' +
    'sacred tree on Cyprus. During the race he throws them one by one; Atalanta cannot resist stopping to pick them up, ' +
    'and so Hippomenes wins the prize. But the lovers forget to thank the goddess, and Venus turns them into lions. ' +
    'The grammar presents the perfect passive participle, the interrogative pronoun and adjective, the irregular verb eō, ' +
    'the declension of trēs and mīlia, and the passive of videō.',
  objectives: [
    'Read and understand the second part of the Atalanta story.',
    'Recognise and translate the perfect passive participle.',
    'Distinguish the interrogative pronoun quis, quid from the interrogative adjective quī, quae, quod.',
    'Conjugate the irregular verb eō, īre.',
    'Decline trēs and mīlia and use the passive of videō.',
  ],
  readings: [
    {
      id: 'atalanta-et-hippomenes',
      latinTitle: 'ATALANTA ET HIPPOMENES',
      title: 'Atalanta and Hippomenes',
      paragraphs: [
        'Iam populus paterque cursum prōmissum poscunt. Iam Hippomenēs Venerem hōc modō invocat: "Ō dea Venus, iuvā ignēs amōris quōs dedistī." Venus, hīs precibus adducta et mōta, sine morā auxilium dat.',
        'Est ager in parte optimā īnsulae Cyprī, quae est sacra deae Venerī. In mediō agrō stat nōn sōlum templum sed etiam arbor in quā sunt ramī aureī et pōma aurea. Forte Venus tria pōma ab hāc arbore carpta portābat, quae iuvenī dedit. "Pōma sunt pulcherrima," inquit Hippomenēs, "sed quōmodo pōmīs vincere possum?" Dea eum pōmōrum ūsum docuit.',
        'Nunc dēmum cornua concinunt, quae signum cursūs dant. Duo cursōrēs trāns summum cursum volāre videntur. Spectātōrēs clāmant: "Curre, Hippomenēs, ī, ī, properā sine morā! Nunc vincēs!" Herōs gaudet; gaudet sēcrētō virgō quoque. Facile virgō eum superāre potest; saepe dubitat, saepe invīta eum relinquit. Mēta longē abest. Hippomenēs est dēfessus. Nunc ūnum dē tribus pōmīs ā Venere datīs iacit.',
        'Hoc pōmum aureum iactum spectat dēsīderatque virgō. Relinquit cursum et pōmum manū carpit. Quia intereā Hippomenēs eam superat, spectātōrēs clāmant et plausum dant.',
        'Iterum illa celeriter currit, iterum iuvenem post tergum relinquit. Iterum Hippomenēs virginem secundō pōmō remorātam superat. Sed iterum Atalanta eum facile praeterit. Pars ultima cursūs adest. Herōs dēfessus vix currere potest. "Nunc," inquit, "ades, dea adōrāta, auctor amōris," et tertium pōmum aureum oblīquō in agrum iacit. Virgō dubitāre vidētur; dēsīderat pōmum quod in agrō est petere, sed cursum relinquere nōn dēsīderat. Venus superat. Virgō in agrum currit et Venus pōma graviōra facit. Propter moram pretiōsam virgō superātur.',
        'Herōs autem nec Venerī dōna dedit nec in īrā deae tūra posuit. Venus igitur, quae erat magnopere īrāta, duōs amantēs in leōnēs trānsfōrmāvit.',
      ],
      notes: [
        { term: 'prōmissus, -a, -um', gloss: 'promised; cursum prōmissum — the promised race.' },
        { term: 'poscere', gloss: 'to demand, request: populus paterque cursum prōmissum poscunt.' },
        { term: 'Cyprus, -ī', gloss: 'the island of Cyprus, sacred to Venus.' },
        { term: 'carpere', gloss: 'to pick, pluck: pōma ab arbore carpta — apples picked from the tree.' },
        { term: 'ūsus, -ūs', gloss: 'use; dea eum pōmōrum ūsum docuit — the goddess taught him the use of the apples.' },
        { term: 'concinere', gloss: 'to sound in chorus: cornua concinunt — the horns sound together.' },
        { term: 'mēta, -ae', gloss: 'goal, turning-post at the end of the race-course.' },
        { term: 'dēfessus, -a, -um', gloss: 'tired, worn out, weary.' },
        { term: 'remorātus, -a, -um', gloss: 'delayed again, hindered; virginem pōmō remorātam — the maiden delayed by the apple.' },
        { term: 'praeterīre', gloss: 'to go past, pass by: Atalanta eum facile praeterit.' },
        { term: 'oblīquō', gloss: 'to the side, sideways; pōmum oblīquō iacit — he throws the apple to one side.' },
        { term: 'tūs, tūris', gloss: 'incense, offered to the gods; tūra pōnere — to place incense on the altar.' },
        { term: 'trānsfōrmāre', gloss: 'to change, transform: in leōnēs trānsfōrmāvit — changed them into lions.' },
      ],
    },
  ],
  grammar: [
    {
      id: 'participium-perfecti-passivi',
      latinTitle: 'Participium Perfectī Passīvī',
      title: 'The Perfect Passive Participle',
      intro:
        'The fourth principal part of the verb gives the perfect passive participle, an adjective made from a verb. ' +
        'It is declined like bonus, -a, -um and means literally "having been ——ed", though it is often translated ' +
        'simply by the past participle. It agrees with the noun it modifies in gender, number and case.',
      paradigms: [
        {
          caption: 'participle formed from the fourth principal part',
          head: ['Verb', 'Principal parts', 'Participle'],
          rows: [
            ['vocō', 'vocō, vocāre, vocāvī, vocātum', 'vocātus, -a, -um — (having been) called'],
            ['videō', 'videō, vidēre, vīdī, vīsum', 'vīsus, -a, -um — (having been) seen'],
            ['dūcō', 'dūcō, dūcere, dūxī, ductum', 'ductus, -a, -um — (having been) led'],
            ['capiō', 'capiō, capere, cēpī, captum', 'captus, -a, -um — (having been) taken'],
            ['audiō', 'audiō, audīre, audīvī, audītum', 'audītus, -a, -um — (having been) heard'],
          ],
        },
        {
          caption: 'agreement with the noun',
          head: ['Latin', 'English'],
          rows: [
            ['Puer ā patre vocātus respondit.', 'The boy called by his father replied.'],
            ['Puella ā patre vocāta respondit.', 'The girl called by her father replied.'],
            ['Dōnum ā deīs datum vīta aeterna est.', 'The gift given by the gods is eternal life.'],
            ['Atalanta est puella ā iuvene amāta.', 'Atalanta is the maiden loved by the youth.'],
          ],
        },
      ],
      points: [
        'The perfect passive participle ends in -tum or -sum in the fourth principal part.',
        'It is passive in meaning and perfect in time: vocātus — having been called, called.',
        'It agrees with its noun in gender, number and case: puer vocātus, puella vocāta, dōnum vocātum.',
        'An ablative of agent with ā/ab often accompanies it: Venus, hīs precibus adducta et mōta, auxilium dedit.',
        'Sometimes the participle is best translated as a simple adjective: populus cursum prōmissum poscit — the people demand the promised race.',
      ],
    },
    {
      id: 'interrogativa',
      latinTitle: 'Prōnōmen et Adiectīvum Interrogātīvum',
      title: 'The Interrogatives',
      intro:
        'The interrogative pronoun quis, quid asks "who?" or "what?" and stands alone. The interrogative adjective ' +
        'quī, quae, quod asks "which?" or "what?" and agrees with a noun expressed or understood.',
      paradigms: [
        {
          caption: 'interrogative pronoun — quis, quid?',
          head: ['', 'M. & F.', 'N.'],
          rows: [
            ['Nom. sing.', 'quis', 'quid'],
            ['Gen. sing.', 'cuius', 'cuius'],
            ['Dat. sing.', 'cui', 'cui'],
            ['Acc. sing.', 'quem', 'quid'],
            ['Abl. sing.', 'quō', 'quō'],
            ['Nom. pl.', 'quī', 'quae'],
            ['Gen. pl.', 'quōrum', 'quōrum'],
            ['Dat. pl.', 'quibus', 'quibus'],
            ['Acc. pl.', 'quōs', 'quae'],
            ['Abl. pl.', 'quibus', 'quibus'],
          ],
        },
        {
          caption: 'interrogative adjective — quī, quae, quod?',
          head: ['', 'M.', 'F.', 'N.'],
          rows: [
            ['Nom. sing.', 'quī', 'quae', 'quod'],
            ['Gen. sing.', 'cuius', 'cuius', 'cuius'],
            ['Acc. sing.', 'quem', 'quam', 'quod'],
            ['Nom. pl.', 'quī', 'quae', 'quae'],
            ['Acc. pl.', 'quōs', 'quās', 'quae'],
          ],
        },
      ],
      points: [
        'Pronoun: Quis est Atalanta? — Who is Atalanta? Quid Hippomenēs fēcit? — What did Hippomenes do?',
        'Adjective: Quae dea est auctor amōris? — What goddess is the author of love? Quod cōnsilium hostēs habuērunt? — What plan did the enemy have?',
        'The interrogative adjective has the same forms as the relative pronoun quī, quae, quod.',
        'The genitive cuius asks "whose?": Cuius arbor in agrō stat? — Whose tree stands in the field?',
      ],
    },
    {
      id: 'verbum-eo',
      latinTitle: 'Verbum Irregulāre: Eō',
      title: 'The Irregular Verb eō',
      intro:
        'The verb eō, īre, iī (īvī), itum, "go", is irregular in the present tense but regular in the imperfect and future. ' +
        'Its compounds include ineō, exeō, adeō, abeō, subeō, trānseō and praetereō.',
      paradigms: [
        {
          caption: 'eō, īre — present, imperfect, future',
          head: ['', 'Singular', 'Plural'],
          rows: [
            ['Praes.', 'eō, īs, it', 'īmus, ītis, eunt'],
            ['Imperf.', 'ībam, ībās, ībat', 'ībāmus, ībātis, ībant'],
            ['Fut.', 'ībō, ībis, ībit', 'ībimus, ībitis, ībunt'],
          ],
        },
        {
          caption: 'perfect and imperative',
          head: ['', 'Form'],
          rows: [
            ['Perfect', 'iī, īstī, iit, iimus, īstis, iērunt (or īvī, īvistī, etc.)'],
            ['Pluperfect', 'ieram, ierās, etc. (or īveram, īverās, etc.)'],
            ['Future perfect', 'ierō, ieris, etc. (or īverō, īveris, etc.)'],
            ['Imperative', 'ī (sing.), īte (pl.)'],
          ],
        },
      ],
      points: [
        'Do not confuse eō and īs with the personal pronoun is, ea, id.',
        'The imperfect and future are formed regularly on the stem ī-: ībam, ībō.',
        'The perfect system may be built on either the stem i- or īv-: iī or īvī.',
        'In the reading: ī, ī, properā — go, go, hurry!',
      ],
    },
    {
      id: 'tres-et-milia',
      latinTitle: 'Trēs et Mīlia',
      title: 'Three and Thousands',
      intro:
        'Trēs, tria is declined in the plural only. Mīlia, the plural of mīlle, is a neuter noun of the third declension ' +
        'and is followed by the genitive plural of the whole: tria mīlia passuum — three thousand paces.',
      paradigms: [
        {
          caption: 'trēs, tria and mīlia',
          head: ['', 'M. & F.', 'N.', 'N. (mīlia)'],
          rows: [
            ['Nom.', 'trēs', 'tria', 'mīlia passuum'],
            ['Gen.', 'trium', 'trium', 'mīlium casārum'],
            ['Dat.', 'tribus', 'tribus', 'mīlibus fēminārum'],
            ['Acc.', 'trēs', 'tria', 'mīlia animālium'],
            ['Abl.', 'tribus', 'tribus', 'mīlibus sagittārum'],
          ],
        },
      ],
      points: [
        'The singular mīlle is indeclinable and is not followed by a genitive: mīlle passūs — a thousand paces.',
        'The plural mīlia is a noun and takes the genitive plural: decem mīlia mīlitum — ten thousand soldiers.',
        'Trēs has the same form for masculine and feminine; the neuter is tria.',
      ],
    },
    {
      id: 'passivum-video',
      latinTitle: 'Passīvum Verbī Videō',
      title: 'The Passive of videō',
      intro:
        'The passive forms of videō frequently mean "seem" rather than "is seen" or "are seen". The construction is ' +
        'completed by a present infinitive.',
      paradigms: [
        {
          caption: 'videor, vidērī, vīsus sum — I seem',
          head: ['Latin', 'English'],
          rows: [
            ['Duo trāns summum cursum volāre videntur.', 'The two seem to fly over the top of the course.'],
            ['Virgō dubitāre vidētur.', 'The maiden seems to hesitate.'],
            ['Hī montēs altī esse videntur.', 'These mountains seem to be high.'],
          ],
        },
      ],
      points: [
        'Videor, vidērī, vīsus sum means "I seem"; the person or thing that seems is the subject.',
        'An infinitive completes the meaning: volāre videntur — they seem to fly.',
        'Do not translate vidētur as "is seen" when an infinitive follows; the idiomatic sense is "seems".',
      ],
    },
  ],
  vocabulary: [
    { latin: 'auctor, -ōris', english: 'author', pos: 'noun m.' },
    { latin: 'cursor, -ōris', english: 'runner', pos: 'noun m.' },
    { latin: 'Cyprus, -ī', english: 'Cyprus (island sacred to Venus)', pos: 'noun f.' },
    { latin: 'hērōs, -ōis', english: 'hero', pos: 'noun m.' },
    { latin: 'liber, -brī', english: 'book', pos: 'noun m.' },
    { latin: 'mēta, -ae', english: 'goal, post', pos: 'noun f.' },
    { latin: 'prex, precis', english: '(usually pl.) prayers', pos: 'noun f.' },
    { latin: 'signum, -ī', english: 'signal, sign', pos: 'noun n.' },
    { latin: 'tabula, -ae', english: 'board, plank, table', pos: 'noun f.' },
    { latin: 'ūsus, -ūs', english: 'use, practice', pos: 'noun m.' },
    { latin: 'adōrāre', english: 'to adore, worship', pos: 'verb' },
    { latin: 'carpere', english: 'to pick, pluck', pos: 'verb' },
    { latin: 'concinere', english: 'to sound in chorus', pos: 'verb' },
    { latin: 'currere', english: 'to run', pos: 'verb' },
    { latin: 'dūcere', english: 'to lead', pos: 'verb' },
    { latin: 'gaudēre', english: 'to rejoice', pos: 'verb' },
    { latin: 'iacere', english: 'to throw', pos: 'verb' },
    { latin: 'poscere', english: 'to request, demand', pos: 'verb' },
    { latin: 'praeterīre', english: 'to go past, pass by', pos: 'verb' },
    { latin: 'prōmittere', english: 'to promise', pos: 'verb' },
    { latin: 'aureus, -a, -um', english: 'golden', pos: 'adj.' },
    { latin: 'dēfessus, -a, -um', english: 'tired, worn out, weary', pos: 'adj.' },
    { latin: 'invītus, -a, -um', english: 'unwilling', pos: 'adj.' },
    { latin: 'medius, -a, -um', english: 'middle of', pos: 'adj.' },
    { latin: 'remorātus, -a, -um', english: 'delayed again, hindered', pos: 'adj.' },
    { latin: 'summus, -a, -um', english: 'top of, highest', pos: 'adj.' },
    { latin: 'tertius, -a, -um', english: 'third', pos: 'adj.' },
    { latin: 'dēmum', english: 'at last, finally', pos: 'adverb' },
    { latin: 'facile', english: 'easily', pos: 'adverb' },
    { latin: 'forte', english: 'by chance', pos: 'adverb' },
    { latin: 'igitur', english: 'therefore', pos: 'adverb' },
    { latin: 'intereā', english: 'meanwhile', pos: 'adverb' },
    { latin: 'longē', english: 'far away', pos: 'adverb' },
    { latin: 'magnopere', english: 'very greatly', pos: 'adverb' },
    { latin: 'nec ... nec', english: 'neither ... nor', pos: 'conjunction' },
    { latin: 'nōn sōlum ... sed etiam', english: 'not only ... but also', pos: 'conjunction' },
    { latin: 'oblīquō', english: 'to the side', pos: 'adverb' },
    { latin: 'quōmodo', english: 'how, in what manner', pos: 'adverb' },
    { latin: 'vix', english: 'scarcely', pos: 'adverb' },
    { latin: 'hōc modō', english: 'in this manner, thus', pos: 'idiom' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PĒNSVM A',
      title: 'Questions',
      instruction: 'Answer each question in a complete Latin sentence, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'Quid populus paterque poscunt?', a: 'Populus paterque cursum prōmissum poscunt.' },
        { q: 'Quem Hippomenēs invocat?', a: 'Hippomenēs Venerem, deam amōris, invocat.' },
        { q: 'Adductane est Venus precibus?', a: 'Ita: Venus, hīs precibus adducta et mōta, auxilium dat.' },
        { q: 'Ubi stat arbor pōmīs aureīs?', a: 'Arbor pōmīs aureīs in mediō agrō īnsulae Cyprī stat.' },
        { q: 'Quae Venus iuvenī dat? Quid docet?', a: 'Venus iuvenī tria pōma aurea dat et eum pōmōrum ūsum docet.' },
        { q: 'Quae signum cursūs dant?', a: 'Cornua signum cursūs dant.' },
        { q: 'Dēsīderābantne spectātōrēs Atalantam aut Hippomenem vincere?', a: 'Spectātōrēs Atalantam et Hippomenem vincere cupiēbant; utrumque enim laudābant.' },
        { q: 'Quōmodo Hippomenēs vīcit?', a: 'Hippomenēs tribus pōmīs aureīs vīcit: Atalanta enim pōma carpere dēsīderābat et cursum relinquēbat.' },
        { q: 'Quis in mātrimōnium Atalantam, praemium, dūxit?', a: 'Hippomenēs in mātrimōnium Atalantam dūxit.' },
        { q: 'Cūr Venus duōs amantēs in leōnēs trānsfōrmāvit?', a: 'Venus eōs in leōnēs trānsfōrmāvit quod nec Venerī dōna dedērunt nec in īrā deae tūra posuērunt.' },
      ],
    },
    {
      id: 'pensum-b',
      latinLabel: 'PĒNSVM B',
      title: 'The Perfect Passive Participle',
      instruction: 'Supply the correct form of the perfect passive participle of the verb in brackets.',
      type: 'fill',
      items: [
        'Venus ab iuvene {{mōta}} auxilium dedit.',
        'Pōmum ab iuvene {{iactum}} ab Atalantā spectābātur.',
        'Populus cursum {{dēsīderātum}} poscit.',
        'Auxilium ā deā {{parātum}} est idōneum.',
        'Hippomenēs hīs verbīs {{audītīs}} gaudet.',
        'Cornua {{sonāta}} signum cursūs dant.',
        'Virgō ab iuvene {{vīcta}} dūcitur.',
        'Amantēs ā deā {{trānsfōrmātī}} vōcem nōn iam habent.',
        'Victor virginem {{vīctam}} dūcit.',
        'Auxilium ā deīs {{missum}} nōn est sine pretiō.',
      ],
    },
    {
      id: 'pensum-c',
      latinLabel: 'PĒNSVM C',
      title: 'The Interrogatives',
      instruction: 'Supply the correct form of the interrogative pronoun or adjective.',
      type: 'fill',
      items: [
        '{{Quis}} est virgō quae coniugem fugit?',
        '{{Quem}} Hippomenēs amāvit?',
        '{{Quis}} iuvenī auxilium dedit?',
        'Ā {{quō}} auxilium dabātur?',
        '{{Quī}} cursum prōmissum poscunt?',
        '{{Cuius}} arbor ramōs aureōs habet?',
        '{{Quibus}} Venus auxilium dedit?',
        '{{Quis}} est victor in certāmine cursūs?',
        'Ā {{quō}} pōmum aureum carpitur?',
        '{{Quem}} Venus in leōnēs trānsfōrmāvit?',
      ],
    },
  ],
}

export default chapter
