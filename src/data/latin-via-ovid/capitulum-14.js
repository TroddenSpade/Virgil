// Capitulum XIV — PHOEBUS ET DAPHNE
// Source: Goldman & Nyenhuis, Latin via Ovid: A First Course (2nd ed., 1982)
// Reading text, vocabulary, grammar and exercises adapted for the web.
// Long vowels are marked with macra.

const chapter = {
  number: 14,
  roman: 'XIV',
  slug: 'phoebus-et-daphne',
  latinTitle: 'PHOEBUS ET DAPHNE',
  title: 'Phoebus and Daphne',
  tagline: 'Apollo, wounded by Cupid, pursues the nymph Daphne until she becomes a laurel.',
  status: 'complete',
  overview:
    'The story of Apollo and Daphne. Cupid punishes the proud god with love and the nymph with hatred of ' +
    'love; when Apollo finally overtakes her, her river-god father changes her into the laurel, which the ' +
    'god takes as his own tree. The chapter completes the third conjugation, introduces third -iō verbs ' +
    'and sets out the personal pronouns.',
  objectives: [
    'Read the story of Phoebus and Daphne and answer questions about it in Latin.',
    'Conjugate third-conjugation verbs in the present, imperfect, perfect, past perfect and future perfect.',
    'Recognise and conjugate third -iō verbs such as faciō.',
    'Decline and use the Latin personal pronouns.',
    'Translate English sentences into Latin using the chapter vocabulary.',
  ],
  readings: [
    {
      id: 'phoebus-et-daphne',
      latinTitle: 'PHOEBUS ET DAPHNE',
      title: 'Phoebus and Daphne',
      paragraphs: [
        'Daphnē erat prīmus amor Phoebī. Īra Cupīdinis Phoebō amōrem dedit. Phoebus superbus vīderat Cupīdinem cum sagittīs et dīxerat: "Quid est tibi, puer, cum armīs et sagittīs? Sagittae sunt meae. Ego possum dare vulnera hostibus. Tū dēbēs contentus esse cum amōribus."',
        'Fīlius Veneris respondit: "Tuus arcus omnia, Phoebe, fīgit, sed meus arcus tē fīgit." Et in arcū Cupīdō duo tēla tenuit: alterum tēlum amōrem fugat; alterum amōrem facit. Hoc est acūtum, illud est obtūsum. Deus Cupīdō obtūsum tēlum in virginem fīgit, acūtum in Phoebum. Phoebus amat; Daphnē nōmen amōris fugitat. Per silvās cum Diānā et cēterīs nymphīs errāre sōlum amat.',
        'Saepe pater nymphae, deus flūminis, dīxit: "Dēbēs coniugem habēre." Saepe dīxit: "Dēbēs fīliōs habēre." Sed Daphnē pulchra patrem ōrat ita: "Cārissime pater, dā mihi hoc dōnum — mē esse virginem perpetuam." Pater fīliae hoc dōnum dedit.',
        'Phoebus autem virginem amat et flammae amōris in deō crēscunt. Deus virginem videt et laudat caput, capillōs, oculōs; laudat digitōs et manūs et bracchia. Daphnē autem nōn manet. Fugitat in silvās.',
        '"Manē, nympha! Nōn sum hostis. Nympha, manē! Amor est mihi causa dolōris. Nescīs mē esse Phoebum. Iuppiter est mihi pater. Sum deus sōlis, mūsicae, medicīnae, artium."',
        'Daphnē iterum fugitāverat. Phoebus virginem iterum petīvit. Eam superāre temptāvit. Daphnē aquās flūminis patris vīdit et dīxit: "Dā mihi auxilium, pater, sī potentiam habēs, mūtā fōrmam meam."',
        'Statim pater bracchia pulchra in rāmōs mūtat. Daphnē virga fōrmōsa nunc est laurus, arbor pulchra. Phoebus ōscula arborī dat et dīcit: "Sī coniūnx mea esse nōn potes, arbor eris certē mea; stābis prīma in capitibus rēgum ducumque Rōmae."',
      ],
      notes: [
        { term: 'prīmus amor Phoebī', gloss: 'the first love of Phoebus (Apollo).' },
        { term: 'īra Cupīdinis', gloss: 'the anger of Cupid; Cupid was angry because Apollo had mocked his arrows.' },
        { term: 'quid est tibi cum ...?', gloss: 'what have you to do with ...? what business have you with ...?' },
        { term: 'omnia ... fīgit', gloss: 'pierces all things; omnia is neuter plural.' },
        { term: 'alterum ... alterum', gloss: 'the one ... the other.' },
        { term: 'acūtum / obtūsum', gloss: 'sharp / blunt. The sharp arrow kindles love; the blunt one drives it away.' },
        { term: 'nōmen amōris fugitat', gloss: 'she flees the name of love.' },
        { term: 'sōlum', gloss: 'only; she loves only to wander.' },
        { term: 'mē esse virginem perpetuam', gloss: 'that I be a maiden forever; accusative and infinitive after dā mihi hoc dōnum.' },
        { term: 'flammae amōris crēscunt', gloss: 'the flames of love grow.' },
        { term: 'nescīs mē esse Phoebum', gloss: 'you do not know that I am Phoebus.' },
        { term: 'laurus, -ī', gloss: 'the laurel tree, sacred to Apollo.' },
        { term: 'prīma in capitibus rēgum', gloss: 'first among the heads of kings; the laurel crowns Roman victors.' },
      ],
    },
  ],
  grammar: [
    {
      id: 'coniugatio-tertia',
      latinTitle: 'Coniugātiō Tertia',
      title: 'The Third Conjugation',
      intro:
        'The third-conjugation infinitive ends in -ere: dīcere, petere, tendere. The present stem vowel is ' +
        '-i-, which becomes -u- before -nt; the imperfect adds -ēba- to the stem. The perfect tenses are ' +
        'formed regularly from the perfect stem, so the third principal part must be learnt with each verb.',
      paradigms: [
        {
          caption: 'present and imperfect',
          head: ['', 'dīcō, -ere', 'petō, -ere'],
          rows: [
            ['1st sing.', 'dīcō / dīcēbam', 'petō / petēbam'],
            ['2nd sing.', 'dīcis / dīcēbās', 'petis / petēbās'],
            ['3rd sing.', 'dīcit / dīcēbat', 'petit / petēbat'],
            ['1st pl.', 'dīcimus / dīcēbāmus', 'petimus / petēbāmus'],
            ['2nd pl.', 'dīcitis / dīcēbātis', 'petitis / petēbātis'],
            ['3rd pl.', 'dīcunt / dīcēbant', 'petunt / petēbant'],
          ],
        },
        {
          caption: 'the perfect system',
          head: ['', 'dīxī — I have said', 'petīvī — I have sought'],
          rows: [
            ['Perfect', 'dīxī, dīxistī, dīxit, dīximus, dīxistis, dīxērunt', 'petīvī, petīvistī, petīvit, petīvimus, petīvistis, petīvērunt'],
            ['Past perfect', 'dīxeram, dīxerās, dīxerat, dīxerāmus, dīxerātis, dīxerant', 'petīveram, petīverās, petīverat, petīverāmus, petīverātis, petīverant'],
            ['Future perfect', 'dīxerō, dīxeris, dīxerit, dīxerimus, dīxeritis, dīxerint', 'petīverō, petīveris, petīverit, petīverimus, petīveritis, petīverint'],
          ],
        },
      ],
      points: [
        'The short -e of the infinitive shifts the accent to the antepenult: dīcere, pētere.',
        'The imperfect stem vowel is lengthened before -bā-: dīcēbam, petēbam.',
        'The perfect stem is the third principal part minus -ī: dīxī → dīx-, petīvī → petīv-.',
        'Dīcō, dīcere, dīxī, dictum; petō, petere, petīvī, petītum. Learn all four forms.',
      ],
    },
    {
      id: 'tertia-io',
      latinTitle: 'Coniugātiō Tertia in -iō',
      title: 'Third -iō Verbs',
      intro:
        'Some third-conjugation verbs end in -iō in the first person singular. They have -iunt in the third ' +
        'person plural and -iē- before the imperfect sign -ba-. Their perfect tenses are regular.',
      paradigms: [
        {
          caption: 'faciō, facere, fēcī, factum — make, do',
          head: ['', 'Present', 'Imperfect'],
          rows: [
            ['1st sing.', 'faciō', 'faciēbam'],
            ['2nd sing.', 'facis', 'faciēbās'],
            ['3rd sing.', 'facit', 'faciēbat'],
            ['1st pl.', 'facimus', 'faciēbāmus'],
            ['2nd pl.', 'facitis', 'faciēbātis'],
            ['3rd pl.', 'faciunt', 'faciēbant'],
          ],
        },
      ],
      points: [
        'The third person plural ends in -iunt, not -unt: faciunt, fugiunt, capiunt.',
        'The imperfect has -iē- before -ba-: faciēbam, fugiēbam.',
        'The perfect system is regular: fēcī, fēceram, fēcerō.',
        'Other common -iō verbs are fugiō (flee), capiō (take) and cupiō (desire).',
      ],
    },
    {
      id: 'pronomina-personalia',
      latinTitle: 'Prōnōmina Persōnālia',
      title: 'Personal Pronouns',
      intro:
        'The personal pronouns are used in all cases, but the nominative is usually omitted unless the ' +
        'reference is unclear or emphasis is needed, since the verb ending already shows the person. ' +
        'The third-person pronoun is also the demonstrative is, ea, id.',
      paradigms: [
        {
          caption: 'ego, tū, is / ea / id',
          head: ['Cāsus', '1st sing.', '2nd sing.', '3rd sing.', '1st pl.', '2nd pl.', '3rd pl.'],
          rows: [
            ['Nōm.', 'ego', 'tū', 'is / ea / id', 'nōs', 'vōs', 'eī / eae / ea'],
            ['Gen.', 'meī', 'tuī', 'eius', 'nostrum / nostrī', 'vestrum / vestrī', 'eōrum / eārum / eōrum'],
            ['Dat.', 'mihi', 'tibi', 'eī', 'nōbīs', 'vōbīs', 'eīs'],
            ['Acc.', 'mē', 'tē', 'eum / eam / id', 'nōs', 'vōs', 'eōs / eās / ea'],
            ['Abl.', 'mē', 'tē', 'eō / eā / eō', 'nōbīs', 'vōbīs', 'eīs'],
          ],
        },
      ],
      points: [
        'The nominative is expressed for emphasis or contrast: ego possum, tū dēbēs.',
        'Nostrum and vestrum are used for the partitive genitive; nostrī and vestrī are objective.',
        'Eius, eī and eōrum refer to a person or thing already mentioned.',
        'The pronoun agrees in gender and number with the noun it replaces: eum (Phoebum), eam (Daphnēn), id (dōnum).',
        'Cum takes the ablative and is attached to the pronoun: mēcum, tēcum, nōbīscum, vōbīscum.',
      ],
    },
  ],
  vocabulary: [
    { latin: 'aqua, -ae', english: 'water', pos: 'noun f.' },
    { latin: 'arcus, -ūs', english: 'bow', pos: 'noun m.' },
    { latin: 'arma, -ōrum', english: 'weapons, arms', pos: 'noun n. pl.' },
    { latin: 'ars, artis, -ium', english: 'art, skill', pos: 'noun f.' },
    { latin: 'caput, -itis', english: 'head', pos: 'noun n.' },
    { latin: 'Cupīdō, -inis', english: 'Cupid, Eros, Amor', pos: 'noun m.' },
    { latin: 'Daphnē, -ēs', english: 'Daphne (a nymph)', pos: 'noun f.' },
    { latin: 'digitus, -ī', english: 'finger', pos: 'noun m.' },
    { latin: 'dolor, dolōris', english: 'grief, pain', pos: 'noun m.' },
    { latin: 'dux, ducis', english: 'leader', pos: 'noun m.' },
    { latin: 'hostis, hostis, -ium', english: 'enemy', pos: 'noun m.' },
    { latin: 'laurus, -ī', english: 'laurel tree', pos: 'noun f.' },
    { latin: 'manus, -ūs', english: 'hand', pos: 'noun f.' },
    { latin: 'medicīna, -ae', english: 'medicine', pos: 'noun f.' },
    { latin: 'mūsica, -ae', english: 'music', pos: 'noun f.' },
    { latin: 'ōsculum, -ī', english: 'kiss', pos: 'noun n.' },
    { latin: 'rāmus, -ī', english: 'branch, bough', pos: 'noun m.' },
    { latin: 'sōl, sōlis', english: 'sun', pos: 'noun m.' },
    { latin: 'tēlum, -ī', english: 'weapon, dart, missile', pos: 'noun n.' },
    { latin: 'Venus, Veneris', english: 'Venus (goddess of love)', pos: 'noun f.' },
    { latin: 'virgō, -inis', english: 'maiden, young woman', pos: 'noun f.' },
    { latin: 'vulnus, -eris', english: 'wound', pos: 'noun n.' },
    { latin: 'crēscō, -ere, crēvī, crētum', english: 'increase, grow', pos: 'verb' },
    { latin: 'dīcō, -ere, dīxī, dictum', english: 'say, speak, tell', pos: 'verb' },
    { latin: 'faciō, facere, fēcī, factum', english: 'make, do', pos: 'verb' },
    { latin: 'fīgō, -ere, fīxī, fīxum', english: 'fasten, affix, transfix, pierce', pos: 'verb' },
    { latin: 'fugō (1)', english: 'put to flight, drive away', pos: 'verb' },
    { latin: 'nesciō, -īre, nescīvī, nescītum', english: 'not know, be ignorant of', pos: 'verb' },
    { latin: 'petō, -ere, petīvī, petītum', english: 'seek, ask, pursue', pos: 'verb' },
    { latin: 'superō (1)', english: 'overcome, conquer', pos: 'verb' },
    { latin: 'acūtus, -a, -um', english: 'sharp', pos: 'adjective' },
    { latin: 'alter, -era, -erum', english: 'the one, the other (of two)', pos: 'adjective' },
    { latin: 'contentus, -a, -um', english: 'satisfied, content', pos: 'adjective' },
    { latin: 'hic, haec, hoc', english: 'this; he, she, it; the latter', pos: 'pronoun' },
    { latin: 'ille, illa, illud', english: 'that; he, she, it; the former', pos: 'pronoun' },
    { latin: 'obtūsus, -a, -um', english: 'dull, blunt', pos: 'adjective' },
    { latin: 'tuus, -a, -um', english: 'your (singular)', pos: 'adjective' },
    { latin: 'eī, eae, ea', english: 'they (plural)', pos: 'pronoun' },
    { latin: 'is, ea, id', english: 'he, she, it', pos: 'pronoun' },
    { latin: 'quod', english: 'which, that; because', pos: 'pronoun / conjunction' },
    { latin: 'tū', english: 'you (singular)', pos: 'pronoun' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PĒNSVM A',
      title: 'Respondēte Latīnē',
      instruction: 'Answer each question in a complete Latin sentence, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'Quis erat prīmus amor Phoebī?', a: 'Daphnē erat prīmus amor Phoebī.' },
        { q: 'Quis Phoebō amōrem dedit?', a: 'Cupīdō, fīlius Veneris, Phoebō amōrem dedit.' },
        { q: 'Cūr Cupīdō erat īrātus?', a: 'Quod Phoebus Cupīdinem dē armīs et sagittīs vituperāverat.' },
        { q: 'Suntne sagittae Cupīdinis acūtae? Suntne obtūsae?', a: 'Ūna sagitta acūta est, altera obtūsa.' },
        { q: 'Fīgitne Cupīdō obtūsam sagittam in Phoebum?', a: 'Nōn; obtūsam in virginem fīgit, acūtam in Phoebum.' },
        { q: 'Quis est pater nymphae?', a: 'Deus flūminis est pater nymphae.' },
        { q: 'Laudatne Phoebus fōrmam nymphae?', a: 'Ita; caput, capillōs, oculōs, digitōs, manūs bracchiaque laudat.' },
        { q: 'Quis est Phoebus?', a: 'Phoebus est deus sōlis, mūsicae, medicīnae, artium.' },
        { q: 'Datne pater nymphae auxilium eī?', a: 'Ita; pater fōrmam eius mūtat.' },
        { q: 'Mūtatne pater fōrmam eius? Amatne Phoebus etiam eam, nunc laurum?', a: 'Ita; Daphnē in laurum mūtātur, et Phoebus eam etiam nunc amat.' },
      ],
    },
    {
      id: 'pensum-b',
      latinLabel: 'PĒNSVM B',
      title: 'Change the Tense',
      instruction: 'Change each present verb to the imperfect, and each perfect verb to the past perfect.',
      type: 'fill',
      items: [
        'dīcit → {{dīcēbat}}',
        'facit → {{faciēbat}}',
        'spectat → {{spectābat}}',
        'stat → {{stābat}}',
        'docet → {{docēbat}}',
        'vīdērunt → {{vīderant}}',
        'mānsērunt → {{mānserant}}',
        'iussērunt → {{iusserant}}',
        'clāmāvērunt → {{clāmāverant}}',
        'fēcērunt → {{fēcerant}}',
      ],
    },
    {
      id: 'pensum-c',
      latinLabel: 'PĒNSVM C',
      title: 'Translate into Latin',
      instruction: 'Render each English sentence in Latin, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'Cupid gave Phoebus his first love.', a: 'Cupīdō Phoebō prīmum amōrem dedit.' },
        { q: 'Phoebus had watched Cupid with his bow and arrows.', a: 'Phoebus Cupīdinem cum arcū et sagittīs vīderat.' },
        { q: 'The son of Venus had said to Phoebus, "My arrow can transfix you."', a: 'Fīlius Veneris Phoebō dīxerat: "Mea sagitta tē fīgere potest."' },
        { q: 'Cupid holds two arrows in his bow; the one is sharp, the other is dull.', a: 'Cupīdō duo tēla in arcū tenet; alterum acūtum est, alterum obtūsum.' },
        { q: 'Daphne loves only to wander with Diana and her friends in the woods.', a: 'Daphnē sōlum cum Diānā et amīcīs eius in silvīs errāre amat.' },
        { q: 'The father of the nymph is a river god.', a: 'Pater nymphae deus flūminis est.' },
        { q: 'He gives the nymph a gift: to be an eternal maiden.', a: 'Fīliae dōnum dat: eam esse virginem perpetuam.' },
        { q: 'Phoebus Apollo is the god of the arts, music and medicine; he is also god of the sun.', a: 'Phoebus Apollō est deus artium, mūsicae, medicīnae; est quoque deus sōlis.' },
        { q: 'Daphne flees to the river and begs for aid.', a: 'Daphnē ad flūmen fugit et auxilium ōrat.' },
        { q: 'Her father changes the maiden into a tree, the laurel, dear to Phoebus.', a: 'Pater eius virginem in arborem, laurum, Phoebō cāram mūtat.' },
      ],
    },
  ],
}

export default chapter
