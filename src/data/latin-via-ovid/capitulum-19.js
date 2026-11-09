// Capitulum XIX — MIDAS ET VIS AUREA
// Source: Goldman & Nyenhuis, Latin via Ovid: A First Course (2nd ed., 1982)
// Reading text, vocabulary, grammar and exercises adapted for the web.

const chapter = {
  number: 19,
  roman: 'XIX',
  slug: 'midas-et-vis-aurea',
  latinTitle: 'MIDAS ET VIS AUREA',
  title: 'Midas and the Golden Touch',
  tagline: 'Midas asks that everything he touches become gold, and discovers that the gift is a curse.',
  status: 'complete',
  overview:
    'King Midas of Phrygia, rewarded by Bacchus for a kindness, chooses the golden touch. At first he delights in ' +
    'turning branches, stones and food to gold, but he soon finds that he can neither eat nor drink. He prays for ' +
    'pardon and is told to wash away the gift in the river near Sardis. The grammar presents the ablative absolute, ' +
    'the principal parts of second-, third- and fourth-conjugation verbs, the fifth declension, and third-declension adjectives.',
  objectives: [
    'Read and understand the story of Midas and the golden touch.',
    'Recognise and translate the ablative absolute.',
    'Give the principal parts of verbs of the second, third and fourth conjugations.',
    'Decline fifth-declension nouns.',
    'Recognise and decline third-declension adjectives such as omnis, -e.',
  ],
  readings: [
    {
      id: 'midas-et-vis-aurea',
      latinTitle: 'MIDAS ET VIS AUREA',
      title: 'Midas and the Golden Touch',
      paragraphs: [
        'Mīdās, magnus rēx Phrygiae, magnam sapientiam nōn habēbat. Quod Mīdās fuerat benignus deō Bacchō, Bacchus eī dōnum dedit: "Quicquid dēsīderās," dīxit deus, "tibi dabō." Rēx igitur hōc modō rogat: "Quicquid corpore tangam, id in aurum mūtā, quaesō. Hoc ego maximē dēsīderō." Hoc dōnum rēgī deus dedit, sed maestissimus erat quod ille tāle dōnum petīverat.',
        'Rēx autem nōn maestus, sed laetissimus, novum dōnum cupidē temptat. Ūnam et alteram rem digitō tangit; vix fortūnae crēdit. Vērum est. Ubi rāmum viridem ex arbore carpit, rāmum aureum Mīdās manū tenet. Saxum quoque manū tāctum in aurum mūtātur. Dōna quoque Cereris carpta in aurum trānsfōrmantur. Praetereā pōmum, quod dē arbore carpsit, nunc est pōmum aureum. Ubi digitōs in postibus altīs in rēgiā pōnit, postēs radiāre videntur. Ubi ille manūs liquidīs aquīs lavat, aqua in liquidum aurum mūtātur. Omnia manū eius tācta in aurum vel aurea mūtantur.',
        'Ubi Mīdās satis gāvīsus erat, servī prō eō mēnsam carne atque dōnīs Cereris onustam posuērunt. Mīdās cibum dente avidō tangere temptāvit, sed dentēs dūrum aurum tetigērunt. Ubi Mīdās aquam et vīnum bibere temptāvit, liquidum aurum in ōre flūxit. Rēs quae prius secundae, nunc adversae vidēbantur.',
        'Miser Mīdās territus nunc ōdit quod dēsīderāverat, atque hoc dōnum removēre optat. Nūllam aquam bibere potest, nūllum cibum edere potest. Manibus ad caelum tentīs, hōc modō ōrat: "Dā veniam, pater benignē, peccāvimus, sed remitte damnōsum dōnum." Bacchus benignus inquit: "Ī ad flūmen vīcīnum Sardibus et carpe viam in montēs Lydiae ūsque ad ortum flūminis. Lavā caput corpusque. Simul tē in aquīs lavā, simul crīmen lavā."',
        'Hīs verbīs audītīs, rēx ad flūmen in Lydiā īvit, et corpus lāvit. Ubi prīmum rēx flūmen tetigit, vīs aurea dē corpore hūmānō in flūmen trānsīvit. Etiamnunc terra Lydiae est aurea, aquīs in agrōs vīcīnōs portātīs.',
      ],
      notes: [
        { term: 'Mīdās, -ae', gloss: 'Midas, king of Phrygia, famous for his greed for gold.' },
        { term: 'Bacchus, -ī', gloss: 'Bacchus, the god of wine; he rewards Midas for a kindness.' },
        { term: 'benignus, -a, -um', gloss: 'kind, generous: benignus deō Bacchō — kind to the god Bacchus.' },
        { term: 'mūtāre', gloss: 'to change: id in aurum mūtā — change it into gold.' },
        { term: 'Ceres, Cereris', gloss: 'Ceres, goddess of agriculture; dōna Cereris — the gifts of Ceres, i.e. bread.' },
        { term: 'postis, -is', gloss: 'door-post: in postibus altīs — on the tall door-posts.' },
        { term: 'radiāre', gloss: 'to shine, gleam: postēs radiāre videntur — the posts seem to shine.' },
        { term: 'onustus, -a, -um', gloss: 'laden, loaded: mēnsa carne onusta — a table laden with meat.' },
        { term: 'avidus, -a, -um', gloss: 'eager, greedy: dente avidō — with eager tooth.' },
        { term: 'adversus, -a, -um', gloss: 'unfavourable, adverse (opposite of secundus).' },
        { term: 'venia, -ae', gloss: 'pardon, favour: dā veniam — grant pardon.' },
        { term: 'damnōsus, -a, -um', gloss: 'ruinous, harmful: damnōsum dōnum — a ruinous gift.' },
        { term: 'Sardis', gloss: 'Sardis, the capital of Lydia; flūmen vīcīnum Sardibus — the river near Sardis.' },
        { term: 'crīmen, -inis', gloss: 'sin, fault, crime; here the guilt of the golden touch is washed away.' },
        { term: 'vīs, vim', gloss: 'force, power; vīs aurea — the golden power, the golden touch.' },
      ],
    },
  ],
  grammar: [
    {
      id: 'ablativus-absolutus',
      latinTitle: 'Ablātīvus Absolūtus',
      title: 'The Ablative Absolute',
      intro:
        'The ablative absolute consists of a noun or pronoun and a modifier, usually a perfect passive participle, ' +
        'both in the ablative. It is grammatically independent of the subject and verb of the sentence and expresses ' +
        'an adverbial idea: when, because, after, while, or under what circumstances the main action takes place.',
      paradigms: [
        {
          caption: 'ablātīvus absolūtus — examples',
          head: ['Latin', 'English'],
          rows: [
            ['Mēnsā parātā, Mīdās cupidē edit.', 'When the table had been set, Midas ate eagerly.'],
            ['Aquīs in agrōs vīcīnōs portātīs, terra Lydiae est aurea.', 'Because the waters were carried into the neighbouring fields, the land of Lydia is golden.'],
            ['Virgine vīctā, Hippomenēs praemium dūxit.', 'After the maiden had been conquered, Hippomenes led away his prize.'],
            ['Pōmō iactō, Atalanta cursum relīquit.', 'When the apple was thrown, Atalanta left the track.'],
            ['Hīs verbīs audītīs, rēx ad flūmen īvit.', 'When he had heard these words, the king went to the river.'],
          ],
        },
      ],
      points: [
        'The literal English "the table having been set" is awkward; expand the ablative absolute into a subordinate clause according to the sense.',
        'The ablative absolute is grammatically independent: its noun is not the subject or object of the main sentence.',
        'It may consist of two nouns, a noun and a pronoun, or a noun and an adjective: Caesare duce, urbs est tūta — With Caesar as leader, the city is safe; mē iūdice — in my judgment.',
        'Common translations are "when ...," "after ...," "because ...," "since ...," or "with ...".',
      ],
    },
    {
      id: 'partes-principales',
      latinTitle: 'Partēs Principālēs',
      title: 'Principal Parts and the Perfect Passive Participle',
      intro:
        'The fourth principal part of second-, third- and fourth-conjugation verbs is not formed by a single rule, ' +
        'but it always ends in -tum or -sum. Learn the fourth principal part with every verb, since it supplies the ' +
        'perfect passive participle and the perfect passive system.',
      paradigms: [
        {
          caption: 'fourth principal parts in the second, third and fourth conjugations',
          head: ['Verb', 'Principal parts', 'Participle'],
          rows: [
            ['habeō', 'habeō, habēre, habuī, habitum', 'habitus, -a, -um'],
            ['teneō', 'teneō, tenēre, tenuī, tentum', 'tentus, -a, -um'],
            ['videō', 'videō, vidēre, vīdī, vīsum', 'vīsus, -a, -um'],
            ['mittō', 'mittō, mittere, mīsī, missum', 'missus, -a, -um'],
            ['dūcō', 'dūcō, dūcere, dūxī, ductum', 'ductus, -a, -um'],
            ['faciō', 'faciō, facere, fēcī, factum', 'factus, -a, -um'],
            ['audiō', 'audiō, audīre, audīvī, audītum', 'audītus, -a, -um'],
            ['sentiō', 'sentiō, sentīre, sēnsī, sēnsum', 'sēnsus, -a, -um'],
          ],
        },
      ],
      points: [
        'The ending is -tum after a vowel or most consonants, and -sum after certain stems: habitum, ductum, vīsum, missum.',
        'The perfect passive participle is an adjective of the first and second declension: habitus, habita, habitum.',
        'The same fourth principal part is used with forms of esse to make the perfect passive system: ductus est — he has been led.',
      ],
    },
    {
      id: 'declinatio-quinta',
      latinTitle: 'Dēclīnātiō Quīnta',
      title: 'The Fifth Declension',
      intro:
        'The characteristic vowel of the fifth declension is -ē-. All fifth-declension nouns are feminine except diēs, ' +
        'which is masculine; diēs is feminine when it means a specific appointed day.',
      paradigms: [
        {
          caption: 'rēs, reī, f. and diēs, diēī, m.',
          head: ['', 'Singular', 'Plural'],
          rows: [
            ['Nom.', 'rēs / diēs', 'rēs / diēs'],
            ['Gen.', 'reī / diēī', 'rērum / diērum'],
            ['Dat.', 'reī / diēī', 'rēbus / diēbus'],
            ['Acc.', 'rem / diem', 'rēs / diēs'],
            ['Abl.', 'rē / diē', 'rēbus / diēbus'],
          ],
        },
      ],
      points: [
        'The endings are -ēs, -eī, -eī, -em, -ē in the singular and -ēs, -ērum, -ēbus, -ēs, -ēbus in the plural.',
        'The genitive and dative singular are the same: reī, diēī.',
        'Diēs is masculine in general, but feminine when a particular day is meant: cōnstitūtā diē — on the appointed day.',
        'Rēs is one of the commonest nouns in Latin, meaning "thing, matter, situation" and, in the plural, "affairs".',
      ],
    },
    {
      id: 'adjectiva-tertiae',
      latinTitle: 'Adiectīva Tertiae Dēclīnātiōnis',
      title: 'Third-Declension Adjectives',
      intro:
        'Some adjectives belong to the third declension. The common type has one form for masculine and feminine and ' +
        'a separate form for the neuter in the nominative singular, and is declined on i-stems.',
      paradigms: [
        {
          caption: 'omnis, -e — each, every; (pl.) all',
          head: ['', 'M. & F.', 'N.', 'M. & F. pl.', 'N. pl.'],
          rows: [
            ['Nom.', 'omnis', 'omne', 'omnēs', 'omnia'],
            ['Gen.', 'omnis', 'omnis', 'omnium', 'omnium'],
            ['Dat.', 'omnī', 'omnī', 'omnibus', 'omnibus'],
            ['Acc.', 'omnem', 'omne', 'omnēs', 'omnia'],
            ['Abl.', 'omnī', 'omnī', 'omnibus', 'omnibus'],
          ],
        },
      ],
      points: [
        'The ablative singular ends in -ī for all three genders: omnī.',
        'The genitive plural ends in -ium, and the neuter nominative and accusative plural in -ia.',
        'In the plural omnēs means "all (the people)" and omnia means "all things".',
        'Other adjectives of this type include gravis, -e (heavy, serious), fortis, -e (brave) and facilis, -e (easy).',
      ],
    },
  ],
  vocabulary: [
    { latin: 'aurum, -ī', english: 'gold', pos: 'noun n.' },
    { latin: 'Bacchus, -ī', english: 'Bacchus (god of wine)', pos: 'noun m.' },
    { latin: 'carō, carnis', english: 'flesh, meat', pos: 'noun f.' },
    { latin: 'Cerēs, Cereris', english: 'Ceres (goddess of agriculture)', pos: 'noun f.' },
    { latin: 'crīmen, -inis', english: 'sin, crime, fault', pos: 'noun n.' },
    { latin: 'diēs, diēī', english: 'day', pos: 'noun m.' },
    { latin: 'Mīdās, -ae', english: 'Midas (king of Phrygia)', pos: 'noun m.' },
    { latin: 'ortus, -ūs', english: 'source, origin', pos: 'noun m.' },
    { latin: 'postis, -is', english: 'door-post', pos: 'noun m.' },
    { latin: 'rēs, reī', english: 'thing, object; (pl.) situation', pos: 'noun f.' },
    { latin: 'saxum, -ī', english: 'rock, stone', pos: 'noun n.' },
    { latin: 'venia, -ae', english: 'pardon, favour', pos: 'noun f.' },
    { latin: 'vīs, vim', english: 'force, strength; touch', pos: 'noun f.' },
    { latin: 'bibere', english: 'to drink', pos: 'verb' },
    { latin: 'crēdere', english: 'to believe, trust (+ dat.)', pos: 'verb' },
    { latin: 'edere', english: 'to eat', pos: 'verb' },
    { latin: 'fluere', english: 'to flow', pos: 'verb' },
    { latin: 'lavāre', english: 'to wash', pos: 'verb' },
    { latin: 'ōdisse', english: 'to hate (perfect used as present)', pos: 'verb' },
    { latin: 'peccāre', english: 'to sin, make a mistake, err', pos: 'verb' },
    { latin: 'remittere', english: 'to send back, let go back, drive away', pos: 'verb' },
    { latin: 'removēre', english: 'to remove, take away, put off', pos: 'verb' },
    { latin: 'tendere', english: 'to stretch out, extend', pos: 'verb' },
    { latin: 'trānsīre', english: 'to go across, pass over, cross', pos: 'verb' },
    { latin: 'adversus, -a, -um', english: 'unfavourable', pos: 'adj.' },
    { latin: 'altus, -a, -um', english: 'tall, lofty, deep, high', pos: 'adj.' },
    { latin: 'damnōsus, -a, -um', english: 'ruinous', pos: 'adj.' },
    { latin: 'liquidus, -a, -um', english: 'liquid', pos: 'adj.' },
    { latin: 'maestus, -a, -um', english: 'sad, gloomy', pos: 'adj.' },
    { latin: 'omnis, -e', english: 'each, every; (pl.) all', pos: 'adj.' },
    { latin: 'onustus, -a, -um', english: 'laden', pos: 'adj.' },
    { latin: 'secundus, -a, -um', english: 'following, favourable, second', pos: 'adj.' },
    { latin: 'tālis, -e', english: 'such (a)', pos: 'adj.' },
    { latin: 'viridis, -e', english: 'green', pos: 'adj.' },
    { latin: 'atque', english: 'and, and also', pos: 'conjunction' },
    { latin: 'cum', english: 'when (conjunction)', pos: 'conjunction' },
    { latin: 'cupidē', english: 'eagerly', pos: 'adverb' },
    { latin: 'etiamnunc', english: 'yet, still', pos: 'adverb' },
    { latin: 'praetereā', english: 'in addition, further, besides, moreover', pos: 'adverb' },
    { latin: 'simul', english: 'at the same time', pos: 'adverb' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PĒNSVM A',
      title: 'Questions',
      instruction: 'Answer each question in a complete Latin sentence, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'Habetne Mīdās sapientiam?', a: 'Mīdās magnam sapientiam nōn habet.' },
        { q: 'Cui Bacchus dōnum dedit?', a: 'Bacchus Mīdae, rēgī Phrygiae, dōnum dedit.' },
        { q: 'Estne Mīdās laetus aut maestus cum Bacchus eī dōnum dat?', a: 'Mīdās laetissimus est, sed deus maestissimus est.' },
        { q: 'Quid temptat?', a: 'Mīdās novum dōnum cupidē temptat et rēs tangere incipit.' },
        { q: 'Quae tangit?', a: 'Rāmum viridem, saxum, dōna Cereris et pōmum tangit.' },
        { q: 'Quōs in rēgiā tangit?', a: 'Mīdās postēs altōs in rēgiā tangit.' },
        { q: 'Quī mēnsam parāvērunt?', a: 'Servī mēnsam carne atque dōnīs Cereris onustam posuērunt.' },
        { q: 'Cum Mīdās edere temptat, quid dentēs tangunt?', a: 'Dentēs dūrum aurum tangunt.' },
        { q: 'Potestne Mīdās bibere aut edere?', a: 'Nōn potest: nūllam aquam bibere, nūllum cibum edere potest.' },
        { q: 'Quōmodo Mīdās dōnum damnōsum remittit?', a: 'Mīdās ad flūmen in Lydiā īvit et corpus lāvit; ita vīs aurea in flūmen trānsīvit.' },
      ],
    },
    {
      id: 'pensum-b',
      latinLabel: 'PĒNSVM B',
      title: 'The Ablative Absolute',
      instruction: 'Turn the first sentence into an ablative absolute and fit it into the second sentence.',
      type: 'fill',
      items: [
        'Mēnsa parātur. {{Mēnsā parātā}}, Mīdās edit.',
        'Dōnum datur. {{Dōnō datō}}, Mīdās erat laetus.',
        'Pōmum tangitur. {{Pōmō tāctō}}, Mīdās novō dōnō gaudet.',
        'Verba audiuntur. {{Verbīs audītīs}}, Mīdās ad flūmen īvit.',
        'Deus movētur. {{Deō mōtō}}, Mīdās dōnum remittit.',
        'Rēx movētur. {{Rēge mōtō}}, servus līberātur.',
      ],
    },
    {
      id: 'pensum-c',
      latinLabel: 'PĒNSVM C',
      title: 'Commands',
      instruction: 'Change each singular imperative to the plural, keeping the rest of the sentence.',
      type: 'fill',
      items: [
        '{{Cūrāte}}, puellae.',
        '{{Manēte}}, puerī.',
        '{{Petite}}, patrēs, fortūnam.',
        '{{Ēvītāte}}, mātrēs, verba dūra.',
        '{{Carpite}} diem, discipulī.',
        '{{Facite}}, iuvenēs, aliās rēs.',
        '{{Dūcite}}, rēgēs, populōs laetōs.',
        '{{Habēte}}, senēs, vītam laetam.',
        '{{Docēte}}, magistrī, rēs vērās.',
        '{{Audīte}}, puerī, verba mea.',
      ],
    },
  ],
}

export default chapter
