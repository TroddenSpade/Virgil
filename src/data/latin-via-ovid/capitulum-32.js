// Capitulum XXXII — BELLVM TROIANVM: MORS CYGNI
// Source: Goldman & Nyenhuis, Latin via Ovid: A First Course (2nd ed., 1982)
// Reading text, vocabulary, grammar and exercises adapted for the web.

const chapter = {
  number: 32,
  roman: 'XXXII',
  slug: 'bellum-troianum-cycnus',
  latinTitle: 'BELLVM TROIANVM: MORS CYGNI',
  title: 'The Trojan War: The Death of Cycnus',
  tagline: 'Achilles meets Neptune’s son Cygnus in battle, and no weapon can wound the invulnerable youth.',
  status: 'complete',
  overview:
    'The Greek fleet has reached the Trojan shore, and the war begins with single combat between heroes. ' +
    'Achilles, searching for Hector, meets Cygnus, the son of Neptune, whose armour turns every spear. ' +
    'Achilles finally crushes him with a stone and is about to strip the body when Neptune changes his son ' +
    'into the swan whose name he already bore. The chapter reviews deponent and semi-deponent verbs and ' +
    'their participles, indirect questions, the partitive genitive, the future imperative and the double dative.',
  objectives: [
    'Read Ovid’s account of the duel between Achilles and Cygnus.',
    'Recognise deponent and semi-deponent verbs and translate their passive forms actively.',
    'Form the participles, infinitives and imperatives of deponent verbs.',
    'Use indirect questions, the partitive genitive, the future imperative and the double dative.',
  ],
  readings: [
    {
      id: 'mors-cygni',
      latinTitle: 'MORS CYGNI',
      title: 'The Death of Cygnus',
      paragraphs: [
        'Fēcerat haec [fāma] nōtum Graiās cum mīlite fortī adventāre ratēs neque inexspectātus in armīs hostis adest; prohibent aditūs lītusque tuentur Trōes, et magnō quid Achāica dextera posset sanguine sēnsērunt, et iam Phrygia rubēbant lītora, iam lētō prōlēs Neptūnia, Cygnus, mīlle virōs dederat. Iam curru īnstābat Achillēs āgmina perque aciēs aut Cygnum aut Hectora quaerēns; occurrit Cygnō (decimum dīlāta in annum mors Hectoris erat): tum ... exhortātus equōs currum dīrēxit in hostem concutiensque suīs vibrantia tēla lacertīs “Quisquis es, ō iuvenis” dīxit “sōlāmen habētō mortis, ab Aeacidē quod sīs iugulātus Achille!”',
        'Herōs ita fātus est: vōcem gravis hasta secūta est, sed quamquam certa nūllus fuit error in hastā, nīl tamen mortis cum ferrō ēmissō volāvit. “Nāte deā, nam tē fāmā praenōvimus” inquit ille “cūr ā nōbīs vulnus mīrāris abesse?”',
        '(Mīrābātur Achillēs enim.) “Nec haec cassis quam vidēs neque scūtum, onus sinistrae, auxiliō mihi sunt; decor est quaesītus ab istīs; Mars quoque ob hoc capere arma solet! [Sī] removēbitur huius tegminis officium, tamen indestrictus abībō; est aliquid nōn esse nātum Nērēide, sed quī Nēreaque et nātās et tōtum temperat aequor.”',
        '... pavor occupat illum, ante oculōsque natant tenebrae retrōque ferentī āversōs passūs mediō lapis obstitit arvō; quem super impulsum resupīnō corpore Cygnum vī multā vertit terraeque affīxit Achillēs. Vincla trahit galeae; victum spoliāre parābat; arma relicta videt; corpus deus aequoris albam contulit in volucrem, cuius modo nōmen habēbat.',
      ],
      notes: [
        { term: 'fāma, -ae', gloss: 'report, rumour; Ovid has just described the power of Fāma.' },
        { term: 'Graius, -a, -um', gloss: 'Greek; the Romans named all the Greek tribes from the Graī, one people of Italy.' },
        { term: 'inexspectātus, -a, -um', gloss: 'unexpected: the enemy is upon them before they are ready.' },
        { term: 'lītus, lītoris', gloss: 'shore, beach — lītusque tuentur Trōes, the Trojans guard the shore.' },
        { term: 'quid ... posset', gloss: 'indirect question after sēnsērunt: they learned what the Achaean hand could do.' },
        { term: 'Phrygius, -a, -um', gloss: 'Phrygian, Trojan; Phrygia lītora, the Trojan shores.' },
        { term: 'lētum, -ī', gloss: 'death; lētō prōlēs Neptūnia — Cygnus, offspring of Neptune, has sent a thousand men to death.' },
        { term: 'Aeacidēs', gloss: 'son of Aeacus — Achilles, whose grandfather was Aeacus.' },
        { term: 'sōlāmen, -inis', gloss: 'comfort, consolation; the consolation of death is that Achilles killed him.' },
        { term: 'quod ... sis iugulātus', gloss: 'the fact that you have been butchered — a quod clause in apposition with sōlāmen.' },
        { term: 'nīl mortis', gloss: 'nothing of death, no fatal wound — partitive genitive.' },
        { term: 'Nāte deā', gloss: 'son of a goddess; nāte is vocative, deā ablative.' },
        { term: 'auxiliō mihi sunt', gloss: 'they are a help to me — double dative: auxiliō (function) and mihi (person).' },
        { term: 'indestrictus', gloss: 'unhurt, untouched; Cygnus will walk away even without his armour.' },
        { term: 'in volucrem ... albam', gloss: 'into a white bird, the swan (cygnus) whose name he already had.' },
      ],
    },
  ],
  grammar: [
    {
      id: 'deponentia',
      latinTitle: 'Verba Dēponentia',
      title: 'Deponent and Semi-Deponent Verbs',
      intro:
        'A deponent verb has passive endings but an active meaning. The Trojans do not "be protected" the shore; ' +
        'they protect it. The perfect participle of a deponent is also translated actively, and the verb has four ' +
        'participles and three infinitives. A few verbs, such as gaudeō, are semi-deponents: active in the present ' +
        'system, deponent only in the perfect.',
      paradigms: [
        {
          caption: 'hortor, hortārī, hortātus sum — to urge',
          head: ['', 'Forma', 'Significātiō'],
          rows: [
            ['praesēns indicātīvī', 'hortor', 'I urge'],
            ['imperfectum', 'hortābar', 'I was urging'],
            ['futūrum', 'hortābor', 'I shall urge'],
            ['perfectum', 'hortātus sum', 'I have urged'],
            ['plūsquamperfectum', 'hortātus eram', 'I had urged'],
            ['futūrum perfectum', 'hortātus erō', 'I shall have urged'],
          ],
        },
        {
          caption: 'particīpia et īnfīnītīvī',
          head: ['Genus', 'Forma', 'Significātiō'],
          rows: [
            ['part. praes. act.', 'hortāns, -antis', 'urging'],
            ['part. perf. pass.', 'hortātus, -a, -um', 'having urged'],
            ['part. fut. act.', 'hortātūrus, -a, -um', 'about to urge'],
            ['gerundīvum', 'hortandus, -a, -um', 'about to be urged'],
            ['īnfīnītīvus praes.', 'hortārī', 'to urge'],
            ['īnfīnītīvus perf.', 'hortātus esse', 'to have urged'],
            ['īnfīnītīvus fut.', 'hortātūrus esse', 'to be about to urge'],
          ],
        },
        {
          caption: 'imperātīvus dēponentis',
          head: ['', 'Singulāris', 'Plūrālis'],
          rows: [
            ['hortor', 'hortāre! — urge!', 'hortāminī! — urge!'],
          ],
        },
      ],
      points: [
        'Deponent verbs are recognised by their dictionary entry: hortor, hortārī, hortātus sum; the passive form is the only form.',
        'Translate the present, imperfect and future actively: Trōes lītus tuentur — the Trojans guard the shore.',
        'Translate the perfect participle actively: Achilles equōs exhortātus — Achilles, having urged on his horses.',
        'Semi-deponents use active forms in the present system and passive forms in the perfect: gaudeō, gaudēre, gāvīsus sum — I rejoice, I have rejoiced.',
        'The imperative of a deponent looks like the passive second person: hortāre! hortāminī! The form hortāre is not an infinitive.',
        'The gerundive of a deponent still has a passive sense of obligation: hortandus, -a, -um — to be urged.',
      ],
    },
    {
      id: 'quaestiones-obliquae',
      latinTitle: 'Quaestiōnēs Oblīquae',
      title: 'Indirect Questions',
      intro:
        'Verbs of asking, knowing, perceiving, feeling and the like may complete their meaning with a subordinate ' +
        'clause introduced by an interrogative word — quis, quid, cūr, ubi, unde, quōmodo, quam ob causam. The verb ' +
        'of that clause stands in the subjunctive. Its tense follows the sequence of tenses: primary after a present ' +
        'or future main verb, secondary after a past tense.',
      paradigms: [
        {
          caption: 'seriēs prīmāria',
          head: ['Verbum prīncipāle', 'Verbum subiūnctum', 'Exemplum'],
          rows: [
            ['praesēns aut futūrum', 'praesēns aut perfectum coniūnctīvī', 'Rēx scit quis sīs. — The king knows who you are.'],
            ['praesēns aut futūrum', 'praesēns aut perfectum coniūnctīvī', 'Rēx rogat quid dēsīderēs. — The king asks what you desire.'],
            ['praesēns aut futūrum', 'praesēns aut perfectum coniūnctīvī', 'Rēx quaerit cūr veniant. — The king asks why they are coming.'],
          ],
        },
        {
          caption: 'seriēs secundāria',
          head: ['Verbum prīncipāle', 'Verbum subiūnctum', 'Exemplum'],
          rows: [
            ['praeteritum (imperf., perf., plūsquamperf.)', 'imperfectum aut plūsquamperfectum coniūnctīvī', 'Trōes sēnsērunt quid Achāica manus posset. — The Trojans understood what the Achaean hand could do.'],
            ['praeteritum', 'imperfectum aut plūsquamperfectum coniūnctīvī', 'Trōes sēnsērunt cūr Graecī venīrent. — The Trojans understood why the Greeks came.'],
            ['praeteritum', 'imperfectum aut plūsquamperfectum coniūnctīvī', 'Trōes sēnsērunt quam ob causam Graecī vēnissent. — The Trojans understood why the Greeks had come.'],
          ],
        },
      ],
      points: [
        'The interrogative word introduces the clause and the subjunctive marks the indirectness: mīrāris cūr vulnus absit.',
        'After a primary tense, use the present subjunctive for a present action and the perfect subjunctive for a completed one.',
        'After a secondary tense, use the imperfect subjunctive for a present or continued action and the pluperfect for a completed one.',
        'Do not confuse an indirect question with a relative clause: the indirect question expects an answer, and its verb is subjunctive.',
        'The same construction follows rogō, sciō, sentiō, mīror, quaerō, doceō and similar verbs.',
      ],
    },
    {
      id: 'genetivus',
      latinTitle: 'Genetīvus Partītīvus',
      title: 'Further Uses of the Genitive',
      intro:
        'Besides possession (fīlius Prīamī) and the objective genitive (amor pecūniae), Latin uses the genitive ' +
        'for the whole of which a part is named. This partitive genitive, or genitive of the whole, follows words ' +
        'of quantity: pars, nihil, quid, plūs, maior, multa mīlia.',
      paradigms: [
        {
          caption: 'genetīvus partītīvus',
          head: ['Exemplum', 'Significātiō'],
          rows: [
            ['pars terrae', 'part of the land'],
            ['quid bonī?', 'what good? (literally, what of good?)'],
            ['nīl mortis', 'no death, nothing of death'],
            ['maior frātrum', 'the elder of the brothers'],
            ['plūs fortūnae', 'more luck'],
            ['multa mīlia virōrum', 'many thousands of men'],
          ],
        },
        {
          caption: 'genetīvus possessīvus et obiectīvus',
          head: ['Exemplum', 'Ūsus', 'Significātiō'],
          rows: [
            ['fīlius Prīamī', 'possessiōnis', 'the son of Priam'],
            ['mors Hectoris', 'possessiōnis', 'the death of Hector'],
            ['amor pecūniae', 'obiectīvus', 'love of money'],
          ],
        },
      ],
      points: [
        'The partitive genitive names the whole after a word that names a part: pars cīvitātis, part of the state.',
        'It is especially common with nīl, quid, aliquid, satis, plūs, minus and with comparative adjectives.',
        'With mīlia the genitive is regular: mīlle virōs (a thousand men) but mīlia virōrum (thousands of men).',
        'The objective genitive names the object of the feeling or action: timor mortis, fear of death.',
        'The possessive genitive names the owner: lītus Trōiae, the shore of Troy.',
      ],
    },
    {
      id: 'imperativus-futurus',
      latinTitle: 'Imperātīvus Futūrus et Duplex Datīvus',
      title: 'The Future Imperative and the Double Dative',
      intro:
        'Latin has a future imperative for commands to be carried out later; it is rare and mostly poetic, but ' +
        'Ovid uses it in the challenge to Cygnus. The double dative joins two datives: one names the function or ' +
        'purpose, the other the person for whom it is done.',
      paradigms: [
        {
          caption: 'imperātīvus praesentis et futūrī',
          head: ['', 'Singulāris', 'Plūrālis'],
          rows: [
            ['praesēns', 'habē! — have!', 'habēte! — have!'],
            ['futūrum', 'habētō! — you shall have (later)!', 'habētōte! — you shall have (later)!'],
            ['praesēns (dēpōnēns)', 'hortāre!', 'hortāminī!'],
          ],
        },
        {
          caption: 'duplex datīvus',
          head: ['Exemplum', 'Fūnctiō', 'Persōna'],
          rows: [
            ['Auxiliō mihi sunt.', 'auxiliō — as a help', 'mihi — for me'],
            ['Sōlāmen mortis habētō.', 'sōlāmen — as a comfort', 'tibi — for you (understood)'],
          ],
        },
      ],
      points: [
        'The future imperative singular ends in -tō, the plural in -tōte: habētō, habētōte; the form is used for a command that will take effect later.',
        'In sōlāmen habētō the future imperative gives the challenge a solemn, almost prophetic tone.',
        'A double dative combines a dative of purpose with a dative of reference or advantage: auxiliō mihi sunt — they are a help to me.',
        'The dative of purpose often has no preposition: magnō ūsuī esse, to be of great use.',
        'Do not confuse the future imperative habētō with the future indicative habēbit.',
      ],
    },
  ],
  vocabulary: [
    { latin: 'fāma, -ae', english: 'report, rumour, fame', pos: 'noun f.' },
    { latin: 'aditus, -ūs', english: 'approach, entrance', pos: 'noun m.' },
    { latin: 'lītus, lītoris', english: 'shore, beach', pos: 'noun n.' },
    { latin: 'lētum, -ī', english: 'death, ruin', pos: 'noun n.' },
    { latin: 'prōlēs, -is', english: 'offspring, child', pos: 'noun f.' },
    { latin: 'sōlāmen, -inis', english: 'comfort, consolation', pos: 'noun n.' },
    { latin: 'hasta, -ae', english: 'spear', pos: 'noun f.' },
    { latin: 'ferrum, -ī', english: 'iron; iron weapon, spear', pos: 'noun n.' },
    { latin: 'cassis, -idis', english: 'helmet', pos: 'noun f.' },
    { latin: 'scūtum, -ī', english: 'shield', pos: 'noun n.' },
    { latin: 'onus, oneris', english: 'burden, load', pos: 'noun n.' },
    { latin: 'pavor, -ōris', english: 'fear, panic', pos: 'noun m.' },
    { latin: 'tenebrae, -ārum', english: 'darkness, shadows', pos: 'noun f. pl.' },
    { latin: 'lapis, -idis', english: 'stone', pos: 'noun m.' },
    { latin: 'arvum, -ī', english: 'field, ploughed land', pos: 'noun n.' },
    { latin: 'galea, -ae', english: 'helmet', pos: 'noun f.' },
    { latin: 'vinculum, -ī', english: 'bond, strap, chain', pos: 'noun n.' },
    { latin: 'volucris, -is', english: 'bird', pos: 'noun f.' },
    { latin: 'adventō, -āre', english: 'arrive, approach', pos: 'verb' },
    { latin: 'tueor, tuērī, tūtus sum', english: 'protect, guard', pos: 'verb (dep.)' },
    { latin: 'īnstō, -āre, īnstitī', english: 'press on, stand upon', pos: 'verb' },
    { latin: 'dīrigō, -ere, dīrēxī, dīrēctum', english: 'direct, guide', pos: 'verb' },
    { latin: 'concutiō, -ere, concussī, concussum', english: 'shake, brandish', pos: 'verb' },
    { latin: 'exhortor, exhortārī, exhortātus sum', english: 'urge on, encourage', pos: 'verb (dep.)' },
    { latin: 'iugulō, -āre, iugulāvī', english: 'butcher, kill', pos: 'verb' },
    { latin: 'praenōscō, -ere, praenōvī', english: 'know beforehand', pos: 'verb' },
    { latin: 'removeō, -ēre, remōvī, remōtum', english: 'remove, take away', pos: 'verb' },
    { latin: 'temperō, -āre, temperāvī', english: 'rule, control; temper', pos: 'verb' },
    { latin: 'occupō, -āre, occupāvī', english: 'seize, occupy', pos: 'verb' },
    { latin: 'obstō, -āre, obstitī', english: 'stand in the way, block (+ dat.)', pos: 'verb' },
    { latin: 'impellō, -ere, impulī, impulsum', english: 'strike, push, overthrow', pos: 'verb' },
    { latin: 'vertō, -ere, vertī, versum', english: 'turn, overturn', pos: 'verb' },
    { latin: 'affīgō, -ere, affīxī, affīxum', english: 'fasten, pin to (+ dat.)', pos: 'verb' },
    { latin: 'spoliō, -āre, spoliāvī', english: 'strip, despoil', pos: 'verb' },
    { latin: 'cōnferō, cōnferre, contulī, collātum', english: 'bring together; change', pos: 'verb' },
    { latin: 'Graius, -a, -um', english: 'Greek', pos: 'adj.' },
    { latin: 'inexspectātus, -a, -um', english: 'unexpected', pos: 'adj.' },
    { latin: 'Phrygius, -a, -um', english: 'Phrygian, Trojan', pos: 'adj.' },
    { latin: 'gravis, -e', english: 'heavy, weighty, grave', pos: 'adj.' },
    { latin: 'certus, -a, -um', english: 'sure, certain', pos: 'adj.' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PĒNSVM A',
      title: 'Respondēte Latīnē',
      instruction: 'Answer each question with a full Latin sentence, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'Quis fēcerat nōtum Graiās ratēs adventāre?', a: 'Fāma fēcerat nōtum Graiās ratēs adventāre.' },
        { q: 'Adestne hostis Graecus inexspectātus?', a: 'Nōn inexspectātus adest: Trōes iam aditūs lītusque tuentur.' },
        { q: 'Quī aditum Graecōrum prohibent?', a: 'Trōes aditūs prohibent et lītus tuentur.' },
        { q: 'Quis mīlle virōs Graecōrum lētō dederat?', a: 'Cygnus, prōlēs Neptūnia, mīlle virōs lētō dederat.' },
        { q: 'In quem annum mors Hectoris dīlāta erat?', a: 'Mors Hectoris in decimum annum dīlāta erat.' },
        { q: 'Quid erit sōlāmen mortis Cygnī?', a: 'Sōlāmen mortis erit quod ab Aeacidē Achille iugulātus sit.' },
        { q: 'Cūr hasta gravis Achillis nīl mortis portāvit?', a: 'Hasta nīl mortis portāvit, quia Cygnus corpore invulnerābilis erat.' },
        { q: 'Quam ob causam Cygnus scūtum portāvit?', a: 'Cygnus scūtum nōn auxiliī causā, sed decoris causā portāvit.' },
        { q: 'Quid Achillēs victō facere parābat?', a: 'Achillēs victum spoliāre parābat.' },
        { q: 'In quam avem deus Neptūnus corpus Cygnī contulit?', a: 'Neptūnus corpus Cygnī in volucrem albam, id est in cygnum, contulit.' },
      ],
    },
    {
      id: 'pensum-b',
      latinLabel: 'PĒNSVM B',
      title: 'Quaestiōnēs oblīquae',
      instruction: 'Change each indirect question to secondary sequence by making the main verb perfect and putting the subjunctive in the imperfect or pluperfect as the sense requires.',
      type: 'fill',
      items: [
        'Neptūnus sentit cūr fīlius suus immortālis sit. → Neptūnus {{sēnsit}} cūr fīlius suus immortālis {{esset}}.',
        'Cygnus nōn sentit in quō locō moriātur. → Cygnus nōn {{sēnsit}} in quō locō {{morerētur}}.',
        'Trōes nōn sentiunt quō modō Graecī bellum gerant. → Trōes nōn {{sēnsērunt}} quō modō Graecī bellum {{gererent}}.',
        'Achillēs mīrātur cūr hasta sua nīl mortis portet. → Achillēs {{mīrātus est}} cūr hasta sua nīl mortis {{portāret}}.',
        'Vōs omnēs scītis cūr Cygnus in cygnum mūtētur. → Vōs omnēs {{scīvistis}} cūr Cygnus in cygnum {{mūtārētur}}.',
      ],
    },
    {
      id: 'pensum-c',
      latinLabel: 'PĒNSVM C',
      title: 'Imperātīvus futūrus',
      instruction: 'Change each present command into the future imperative.',
      type: 'fill',
      items: [
        'Scrībe, discipule! → {{Scrībitō}}, discipule!',
        'Cantāte mēcum. → {{Cantātōte}} mēcum.',
        'Venīte, adōrēmus. → {{Venītōte}}, adōrēmus.',
        'Gaudēte, discipulī; lūdus fīnītus est. → {{Gaudētōte}}, discipulī; lūdus fīnītus est.',
        'Dā dōna deīs. → {{Dātō}} dōna deīs.',
        'Amā, nōlī pugnāre. → {{Amātō}}, {{nōlītō}} pugnāre.',
      ],
    },
  ],
}

export default chapter




