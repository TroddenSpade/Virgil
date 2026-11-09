// Capitulum XVII — ATALANTA ET HIPPOMENES
// Source: Goldman & Nyenhuis, Latin via Ovid: A First Course (2nd ed., 1982)
// Reading text, vocabulary, grammar and exercises adapted for the web.

const chapter = {
  number: 17,
  roman: 'XVII',
  slug: 'atalanta-et-hippomenes-1',
  latinTitle: 'ATALANTA ET HIPPOMENES',
  title: 'Atalanta and Hippomenes (Part 1)',
  tagline: 'Atalanta will marry only the man who can outrun her, and the losers pay with their lives.',
  status: 'complete',
  overview:
    'Atalanta, famous alike for her beauty and her speed, imposes a cruel condition on her suitors: ' +
    'race her, and the winner takes her as wife while the loser dies. The first part of the story introduces ' +
    'the contest and the suitors who have already perished, and ends with Hippomenes, a spectator who falls in love ' +
    'with the maiden and resolves to race. The grammar presents the passive voice in the present, imperfect and future, ' +
    'the relative pronoun, the fourth declension, and passive infinitives.',
  objectives: [
    'Read and understand the opening of the Atalanta story.',
    'Form and translate the present, imperfect and future passive.',
    'Use the ablative of agent with ā/ab.',
    'Recognise and decline the relative pronoun quī, quae, quod.',
    'Learn the fourth declension and the passive infinitives.',
  ],
  readings: [
    {
      id: 'atalanta-et-hippomenes',
      latinTitle: 'ATALANTA ET HIPPOMENES',
      title: 'Atalanta and Hippomenes',
      paragraphs: [
        'Forsitan audīvistī dē virgine quae virōs in certāmine cursūs superābat. Illa fābula nōn est rūmor, superābat enim Atalanta. Homines dīcēbant hanc esse tam clāram fōrmā quam pedibus.',
        'Ubi haec virgō dē coniuge scīre dēsīderāvit, ōrāculum respondit: "Fuge coniugem, Atalanta. Nōn debēs coniugem habēre; erit mors tibi." Territa virgō in silvā vīvit innuba et turbam procōrum fugat hīs verbīs dūrīs: "Nōn erō coniūnx, nisi prius victa cursū. Pedibus contendite mēcum. Dabor coniūnx, praemium victōrī. Sed mors erit praemium tardīs. Ea estō lēx certāminis!"',
        'Tamen turba temerāria procōrum ad certāmen vēnit, quōs tanta potentia fōrmae amōrisque in audāciam addūxerat. Sēderat quoque Hippomenēs spectātor cursūs; damnāverat procōs: "Petīturne coniūnx per tanta perīcula?" Sed ubi vīdit fōrmam corpusque puellae, dīxit: "Mihī ignōscite, quōs culpāvī. Praemia nōndum sciēbam. Ea est vērē pulchra! Ego quoque fōrmā Atalantae capior." Dum laudat, ignēs amōris crēscunt; optat victōriam virginī. "Cūr fortūna huius certāminis ā mē nōn temptātur? Deus amantem iuvābit." Dum spectat, virgō pede ālite volat. Quamquam vidētur īre nōn tardius sagittā Scythicā, tamen Hippomenēs fōrmam virginis magis mīrātur. Atalanta ad fīnem pervēnit; cornū sonātur. Atalanta victor corōnātur. Iuvenibus victīs poena mortis datur.',
        'Hippomenēs tamen nōn dēterritus ad certāmen sē parat. Atalantam rogat: "Cūr victōriam facilem quaeris? Contende mēcum! Sī victor erō, nōn pudōrī tibi erit vincī ā mē! Mihī pater est magnus Megareus, cui avus est Neptūnus, rēx aquārum." Dum ille dīcit, fīlia rēgis eum spectat et dubitat superārī an vincere mālit. Dīcit haec verba: "Quī deus eum iubet coniugem petere? Nōn sum digna pretiī, mē iūdice. Sed ille adhūc puer est; nōn iuvenis mē movet, sed aetās. Ō Hippomenēs, relinquē loca perīculōsa dum potes. Debēs amārī ā puellā meliōre. Sed cūr tamen est mihī cūra tuī? Culpa nōn est mea. Ō miser Hippomenēs, erās dignus vīvere!" Sīc dubitat virgō — amat, sed amōrem nōn sentit.',
      ],
      notes: [
        { term: 'forsitan', gloss: 'perhaps; forsitan audīvistī — perhaps you have heard.' },
        { term: 'certāmen, -minis', gloss: 'contest, struggle; certāmen cursūs — a running contest.' },
        { term: 'ōrāculum, -ī', gloss: 'oracle, the god’s answer given through a priest.' },
        { term: 'innuba', gloss: 'unwed, unmarried; virgō innuba — an unmarried maiden.' },
        { term: 'procus, -ī', gloss: 'suitor, one who seeks a woman in marriage.' },
        { term: 'mālle', gloss: 'to prefer; dubitat superārī an vincere mālit — she hesitates whether she prefers to be beaten or to win.' },
        { term: 'pudōrī tibi erit', gloss: 'it will be a shame to you (double dative).' },
        { term: 'vincī ā mē', gloss: 'to be beaten by me; ā/ab with the ablative names the agent of a passive verb.' },
        { term: 'dignus, -a, -um', gloss: 'worthy (with the ablative or genitive): digna pretiī — worthy of the prize.' },
        { term: 'mē iūdice', gloss: 'if I am judge, in my judgment (ablative absolute).' },
        { term: 'aetās, -ātis', gloss: 'age; nōn iuvenis mē movet, sed aetās — not the young man moves me, but his age.' },
        { term: 'cūra tuī', gloss: 'care for you; the genitive is objective.' },
        { term: 'ignōscere', gloss: 'to forgive (+ dative): Mihī ignōscite — forgive me.' },
      ],
    },
  ],
  grammar: [
    {
      id: 'vox-passiva',
      latinTitle: 'Vōx Passīva',
      title: 'The Passive Voice',
      intro:
        'The active voice says what the subject does; the passive voice says what is done to the subject. ' +
        'Active: Agricolae aquam portant — The farmers carry the water. Passive: Aqua ab agricolīs portātur — ' +
        'The water is carried by the farmers. The person who performs the action is put in the ablative with ā or ab.',
      paradigms: [
        {
          caption: 'passīvum praesentis — present passive',
          head: ['', 'I', 'II', 'III', 'III-iō', 'IV'],
          rows: [
            ['1 sing.', 'portor', 'doceor', 'mittor', 'capior', 'audior'],
            ['2 sing.', 'portāris', 'docēris', 'mitteris', 'caperis', 'audīris'],
            ['3 sing.', 'portātur', 'docētur', 'mittitur', 'capitur', 'audītur'],
            ['1 pl.', 'portāmur', 'docēmur', 'mittimur', 'capimur', 'audīmur'],
            ['2 pl.', 'portāminī', 'docēminī', 'mittiminī', 'capiminī', 'audīminī'],
            ['3 pl.', 'portantur', 'docentur', 'mittuntur', 'capiuntur', 'audiuntur'],
          ],
        },
        {
          caption: 'passīvum imperfectī et futūrī — imperfect and future passive',
          head: ['', 'I', 'II', 'III', 'III-iō', 'IV'],
          rows: [
            ['Imperf. 1 sing.', 'portābar', 'docēbar', 'mittēbar', 'capiēbar', 'audiēbar'],
            ['Fut. 1 sing.', 'portābor', 'docēbor', 'mittar', 'capiar', 'audiar'],
            ['Fut. 3 pl.', 'portābuntur', 'docēbuntur', 'mittentur', 'capientur', 'audientur'],
          ],
        },
      ],
      points: [
        'The passive endings are -r, -ris, -tur, -mur, -minī, -ntur.',
        'The stem vowel of each conjugation remains before the passive endings: portā-, docē-, mitte-, cape-, audī-.',
        'The imperfect passive inserts -bā- between the stem and the endings: portābar, docēbar, mittēbar, capiēbar, audiēbar.',
        'The future passive uses -bi- for the first and second conjugations and -e- for the third and fourth: portābor, docēbor, mittar, capiar, audiar.',
        'The ablative of agent with ā/ab names the person by whom the action is done: Aqua ab agricolīs portātur; Dōnum ā parentibus datur.',
      ],
    },
    {
      id: 'pronomen-relativum',
      latinTitle: 'Prōnōmen Relātīvum',
      title: 'The Relative Pronoun',
      intro:
        'The relative pronoun quī, quae, quod introduces a relative clause and refers back to an antecedent. ' +
        'It agrees with its antecedent in gender and number, but its case is determined by its use in the relative clause.',
      paradigms: [
        {
          caption: 'quī, quae, quod — who, which, that',
          head: ['', 'M.', 'F.', 'N.'],
          rows: [
            ['Nom. sing.', 'quī', 'quae', 'quod'],
            ['Gen. sing.', 'cuius', 'cuius', 'cuius'],
            ['Dat. sing.', 'cui', 'cui', 'cui'],
            ['Acc. sing.', 'quem', 'quam', 'quod'],
            ['Abl. sing.', 'quō', 'quā', 'quō'],
            ['Nom. pl.', 'quī', 'quae', 'quae'],
            ['Gen. pl.', 'quōrum', 'quārum', 'quōrum'],
            ['Dat. pl.', 'quibus', 'quibus', 'quibus'],
            ['Acc. pl.', 'quōs', 'quās', 'quae'],
            ['Abl. pl.', 'quibus', 'quibus', 'quibus'],
          ],
        },
      ],
      points: [
        'Hī sunt senēs quibus Iuppiter dōnum dat — These are the old people to whom Jupiter is giving a gift.',
        'Senēs quōs dī amant nihil timent — Old men whom the gods love fear nothing.',
        'Agricola cui casa dabātur est laetus — The farmer to whom the house was being given is joyful.',
        'The relative pronoun agrees with its antecedent in number and gender, but its case depends on its function in the relative clause.',
        'The forms quī, quae, quod also serve as the interrogative adjective; the interrogative pronoun is quis, quid.',
      ],
    },
    {
      id: 'declinatio-quarta',
      latinTitle: 'Dēclīnātiō Quārta',
      title: 'The Fourth Declension',
      intro:
        'The fourth declension is recognised by the vowel -u- in the stem, which appears throughout except in the ' +
        'dative and ablative plural. Most fourth-declension nouns are masculine, but cornu is neuter; manus and domus are feminine.',
      paradigms: [
        {
          caption: 'cursus, -ūs, m. and cornū, -ūs, n.',
          head: ['', 'Masculīnum sing.', 'Masculīnum pl.', 'Neutrum sing.', 'Neutrum pl.'],
          rows: [
            ['Nom.', 'cursus', 'cursūs', 'cornū', 'cornua'],
            ['Gen.', 'cursūs', 'cursuum', 'cornūs', 'cornuum'],
            ['Dat.', 'cursuī, -ū', 'cursibus', '(cornū)', 'cornibus'],
            ['Acc.', 'cursum', 'cursūs', 'cornū', 'cornua'],
            ['Abl.', 'cursū', 'cursibus', 'cornū', 'cornibus'],
          ],
        },
      ],
      points: [
        'The genitive singular of the fourth declension is -ūs, the same form as the nominative singular.',
        'The dative singular of cursus is cursui or (less often) cursū; cornū has no separate dative form.',
        'Manus, -ūs, f. (hand) is declined like cursus; domus, -ūs, f. (house) is declined partly like the fourth and partly like the second declension.',
        'The ablative singular ends in -ū; the dative and ablative plural end in -ibus.',
      ],
    },
    {
      id: 'infinitivi-passivi',
      latinTitle: 'Īnfīnītīvī Passīvī',
      title: 'Passive Infinitives',
      intro:
        'The passive infinitive is formed by changing the final -e of the active infinitive to -ī, except in the third ' +
        'conjugation, where the ending -ere becomes -ī. It means "to be ——ed".',
      paradigms: [
        {
          caption: 'īnfīnītīvus praesentis passīvī — present passive infinitive',
          head: ['', 'I', 'II', 'III', 'III-iō', 'IV'],
          rows: [
            ['Actīvum', 'portāre', 'docēre', 'petere', 'capere', 'audīre'],
            ['Passīvum', 'portārī', 'docērī', 'petī', 'capī', 'audīrī'],
            ['Anglicē', 'to be carried', 'to be taught', 'to be sought', 'to be taken', 'to be heard'],
          ],
        },
      ],
      points: [
        'Spectātōrēs procul audīrī possunt — The spectators are able to be heard (can be heard) at a distance.',
        'The passive infinitive is used with possum, dēbeō and similar verbs: Verba deōrum dubitārī nōn dēbent — The words of the gods ought not to be doubted.',
        'Do not confuse the passive infinitive portārī with the active portāre; the final vowel is the only difference.',
      ],
    },
  ],
  vocabulary: [
    { latin: 'aetās, -ātis', english: 'age', pos: 'noun f.' },
    { latin: 'audācia, -ae', english: 'boldness', pos: 'noun f.' },
    { latin: 'avus, -ī', english: 'grandfather', pos: 'noun m.' },
    { latin: 'certāmen, -minis', english: 'contest, struggle', pos: 'noun n.' },
    { latin: 'cornū, -ūs', english: 'horn, end, tip', pos: 'noun n.' },
    { latin: 'culpa, -ae', english: 'guilt, blame, fault', pos: 'noun f.' },
    { latin: 'cūra, -ae', english: 'care, concern', pos: 'noun f.' },
    { latin: 'cursus, -ūs', english: 'running, course', pos: 'noun m.' },
    { latin: 'ignis, ignis', english: 'fire', pos: 'noun m.' },
    { latin: 'lēx, lēgis', english: 'law', pos: 'noun f.' },
    { latin: 'procus, -ī', english: 'suitor', pos: 'noun m.' },
    { latin: 'rūmor, -ōris', english: 'rumour, hearsay', pos: 'noun m.' },
    { latin: 'spectātor, -ōris', english: 'spectator', pos: 'noun m.' },
    { latin: 'turba, -ae', english: 'crowd', pos: 'noun f.' },
    { latin: 'victōria, -ae', english: 'victory', pos: 'noun f.' },
    { latin: 'addūcere', english: 'to bring to, draw to, influence', pos: 'verb' },
    { latin: 'capere', english: 'to capture, take', pos: 'verb' },
    { latin: 'corōnāre', english: 'to crown', pos: 'verb' },
    { latin: 'culpāre', english: 'to blame', pos: 'verb' },
    { latin: 'damnāre', english: 'to condemn', pos: 'verb' },
    { latin: 'īre', english: 'to go', pos: 'verb' },
    { latin: 'ignōscere', english: 'to forgive (+ dat.)', pos: 'verb' },
    { latin: 'movēre', english: 'to move, stir', pos: 'verb' },
    { latin: 'scīre', english: 'to know', pos: 'verb' },
    { latin: 'sonāre', english: 'to sound', pos: 'verb' },
    { latin: 'superāre', english: 'to surpass, rise above, conquer', pos: 'verb' },
    { latin: 'vincere', english: 'to conquer, defeat, vanquish', pos: 'verb' },
    { latin: 'dēterritus, -a, -um', english: 'deterred', pos: 'adj.' },
    { latin: 'dūrus, -a, -um', english: 'hard, harsh', pos: 'adj.' },
    { latin: 'innubus, -a, -um', english: 'unwed', pos: 'adj.' },
    { latin: 'tantus, -a, -um', english: 'such a great, so great', pos: 'adj.' },
    { latin: 'tardus, -a, -um', english: 'late, slow', pos: 'adj.' },
    { latin: 'an', english: 'or (in double questions)', pos: 'conjunction' },
    { latin: 'forsitan', english: 'perhaps', pos: 'adverb' },
    { latin: 'magis', english: 'more', pos: 'adverb' },
    { latin: 'nisi', english: 'unless, if ... not', pos: 'conjunction' },
    { latin: 'nōndum', english: 'not yet', pos: 'adverb' },
    { latin: 'quī, quae, quod', english: 'who, which, that', pos: 'pronoun' },
    { latin: 'tam', english: 'so', pos: 'adverb' },
    { latin: 'vidētur', english: 'he, she, it seems', pos: 'verb' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PĒNSVM A',
      title: 'Questions',
      instruction: 'Answer each question in a complete Latin sentence, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'Audīvistīne fābulam dē Atalantā, puellā clārā?', a: 'Audīvī fābulam dē Atalantā, puellā clārā.' },
        { q: 'Estne fābula dē virgine rūmor?', a: 'Fābula dē virgine nōn est rūmor; superābat enim Atalanta.' },
        { q: 'Cūr Atalanta coniugem fugit?', a: 'Atalanta coniugem fugit quod ōrāculum dīxit: "Erit mors tibi."' },
        { q: 'Ubi Atalanta vīvit?', a: 'Atalanta in silvā vīvit innuba.' },
        { q: 'Quis est lēx certāminis?', a: 'Lēx certāminis est: "Dabor coniūnx, praemium victōrī. Sed mors erit praemium tardīs."' },
        { q: 'Quī ad hanc lēgem vēnērunt?', a: 'Turba temerāria procōrum ad hanc lēgem vēnit.' },
        { q: 'Cūr vēnērunt?', a: 'Vēnērunt quod tanta potentia fōrmae amōrisque eōs in audāciam addūxerat.' },
        { q: 'Amatne Hippomenēs spectātor Atalantam?', a: 'Ita: Hippomenēs spectātor fōrmā Atalantae capitur et eam amat.' },
        { q: 'Ubi Hippomenēs fōrmam Atalantae vīdit, quid fēcit?', a: 'Ubi fōrmam Atalantae vīdit, procōs culpāvit, deinde sē ad certāmen parāvit.' },
        { q: 'Quid Atalanta facit?', a: 'Atalanta ad fīnem pervenit et victor corōnātur; deinde dē Hippomene dubitat.' },
      ],
    },
    {
      id: 'pensum-b',
      latinLabel: 'PĒNSVM B',
      title: 'Passive Verbs',
      instruction: 'Supply the correct present passive form of the verb in brackets.',
      type: 'fill',
      items: [
        'Templum ā puellīs {{ornātur}}.',
        'Ūrna ā parentibus {{portātur}}.',
        'Casa ā deīs {{petitur}}.',
        'Coniūnx ab Atalantā {{vītātur}}.',
        'Certāmen ā procīs nōn {{vītātur}}.',
        'Victor ā populō {{corōnātur}}.',
        'Perīculum ā iuvene {{petitur}}.',
        'Atalanta aetāte puerī {{movētur}}.',
        'Rūmor ā iuvenibus {{nārrātur}}.',
        'Lēgēs ā virīs {{fōrmantur}}.',
        'Puellae nōn facile {{vincuntur}}.',
        'Victōrēs ā rēge {{corōnantur}}.',
      ],
    },
    {
      id: 'pensum-c',
      latinLabel: 'PĒNSVM C',
      title: 'The Relative Pronoun',
      instruction: 'Supply the correct form of the relative pronoun.',
      type: 'fill',
      items: [
        'Virī, {{quī}} in viīs errant, labōrāre debent.',
        'Vir {{quem}} virgō amat vincere debet.',
        'Puella {{quae}} innuba est procōs nōn vītat.',
        'Puella {{quam}} procī laudant est Atalanta.',
        'Lēx {{quā}} procī necantur est nota.',
        'Rēx {{cuius}} fīlia est Atalanta in rēgiā in Boeōtiā habitat.',
        'Dōna {{quae}} ā deīs dantur nōn sunt semper grāta.',
        'Dōnum {{quod}} dea dabit Hippomenem servābit.',
        'Lēx {{quam}} Atalanta fēcit nōn est bona.',
        'Virī {{quōrum}} casae sunt in rīpīs flūminum semper aquās timent.',
        'Atalanta est fīlia {{quam}} rēx amābat.',
        'Hippomenēs est procus {{quī}} Atalantam amāvit.',
      ],
    },
  ],
}

export default chapter
