// Capitulum XV — PYRAMUS ET THISBE
// Source: Goldman & Nyenhuis, Latin via Ovid: A First Course (2nd ed., 1982)
// Reading text, vocabulary, grammar and exercises adapted for the web.
// Long vowels are marked with macra.

const chapter = {
  number: 15,
  roman: 'XV',
  slug: 'pyramus-et-thisbe-1',
  latinTitle: 'PYRAMUS ET THISBE',
  title: 'Pyramus and Thisbe (Part 1)',
  tagline: 'Two young lovers speak through a crack in the wall, and a lion changes everything.',
  status: 'complete',
  overview:
    'The first half of the tragedy of Pyramus and Thisbe. Forbidden by their parents, the two lovers ' +
    'arrange to meet at the tomb of Ninus; Thisbe arrives first, flees from a lion, and loses her veil. ' +
    'The chapter presents the fourth conjugation, the future tense in all conjugations, the synopsis of ' +
    'the verb, the simile, the superlative of adjectives in -er, and the irregular declension of domus.',
  objectives: [
    'Read the first part of the story of Pyramus and Thisbe and answer questions about it in Latin.',
    'Conjugate fourth-conjugation verbs such as veniō and sentiō.',
    'Form the future tense in all four conjugations.',
    'Give a synopsis of a verb in all six tenses.',
    'Recognise a simile and form the superlative of adjectives in -er.',
    'Decline the irregular noun domus.',
  ],
  readings: [
    {
      id: 'pyramus-et-thisbe',
      latinTitle: 'PYRAMUS ET THISBE',
      title: 'Pyramus and Thisbe',
      paragraphs: [
        'Pyramus iuvenis pulcherrimus et Thisbē virgō fōrmōsissima domōs vīcīnās tenuērunt. Amantēs erant, et amor tempore crēvit. Parentēs amōrem iuvenum prohibēre temptāvērunt. Sed amor viam facit. Fissum erat in pariete domuum quod nēmō per multōs annōs vīderat. Amantēs hoc fissum prīmī vīderant (quid amor nōn sentit?) et iter vōcis fēcērunt. Pyramus stābat hinc, illinc Thisbē, et per fissum verba mollia murmurābant. Nocte, "Valē," dīcēbant et utrimque ōscula dabant. Deinde Pyramus et Thisbē, duo amantēs, cōnsilium habent. Nocte fallere parentēs et domōs relinquere temptābunt. Cum relīquerint domōs et oppidum, ad tumulum Nīnī sub arborem convenient. Arbor est mōrus, ūberrima pōmīs albīs, vīcīna fontī.',
        'Prīmō Thisbē pervēnit et sub arbore sedet. Ecce venit leō quī aquās fontis bibere dēsīderat. Quia recēns leō animal necāverat, cruor erat in ōre. Procul Thisbē leōnem videt et in spēluncam obscūram fugit. Ubi fugit, vēlāmina relinquit quae leō ōre cruentō laniat.',
        'Nunc venit Pyramus; vestīgia leōnis et vēlāmina cruenta Thisbēs vīdit. Miserrimus dīxit: "Ūna nox mortem duōrum amantium vīderit. Tū fuistī dignissima vītā longā. Ego sum causa mortis tuae. Ego iussī tē venīre nocte in loca perīculōsa nec ego hūc prior vēnī. Ō venīte, leōnēs, dēvorāte meum corpus! Sed est timidum sōlum optāre mortem!" Portāvit vēlāmina Thisbēs ad arborem, dedit ōscula lacrimāsque; clāmāvit: "Ego quoque mortem quaeram"; itaque gladiō sē necāvit. Sub arbore iacuit, et gladium ē vulnere trāxit. Cruor in herbam emicat ut fōns; ubi rādīcem arboris mōrī tangit, pōma alba facit purpurea.',
      ],
      notes: [
        { term: 'domōs vīcīnās', gloss: 'neighboring houses; domus is feminine despite its -us ending.' },
        { term: 'fissum, -ī', gloss: 'a crack, a split in the wall.' },
        { term: 'quid amor nōn sentit?', gloss: 'what does love not perceive? a parenthetical aside.' },
        { term: 'iter vōcis fēcērunt', gloss: 'they made a path for the voice, i.e. they spoke through the crack.' },
        { term: 'hinc ... illinc', gloss: 'on this side ... on that side.' },
        { term: 'cum relīquerint', gloss: 'when they have left; future perfect in a temporal clause.' },
        { term: 'mōrus, -ī', gloss: 'mulberry tree; do not confuse with morī, to die.' },
        { term: 'ūberrima pōmīs albīs', gloss: 'very rich with white fruit; ablative of description.' },
        { term: 'vīcīna fontī', gloss: 'near the spring; vīcīnus takes the dative.' },
        { term: 'recēns', gloss: 'recently; the lion had recently killed an animal.' },
        { term: 'vēlāmina', gloss: 'coverings, garments; here Thisbe\'s veil.' },
        { term: 'dignissima vītā longā', gloss: 'most worthy of a long life; dignus takes the ablative.' },
        { term: 'iussī tē venīre', gloss: 'I ordered you to come.' },
        { term: 'vīderit', gloss: 'future perfect: one night will have seen the death of two lovers.' },
        { term: 'emicat ut fōns', gloss: 'spurts out like a fountain; a simile.' },
      ],
    },
    {
      id: 'dialogus',
      latinTitle: 'DIALOGUS',
      title: 'In the Classroom',
      paragraphs: [
        '"Aperīte librōs, quaesō." "Claudite librōs, quaesō." "Legite fābulam, quaesō."',
      ],
      notes: [
        { term: 'aperīte', gloss: 'open (plural imperative).' },
        { term: 'claudite', gloss: 'close (plural imperative).' },
        { term: 'legite', gloss: 'read (plural imperative).' },
        { term: 'quaesō', gloss: 'please, I beg you.' },
      ],
    },
  ],
  grammar: [
    {
      id: 'coniugatio-quarta',
      latinTitle: 'Coniugātiō Quārta',
      title: 'The Fourth Conjugation',
      intro:
        'The fourth-conjugation infinitive ends in -īre: venīre, sentīre. The stem vowel is -i-, which is ' +
        'shortened before final -t and -nt. The fourth conjugation is very close to third -iō verbs.',
      paradigms: [
        {
          caption: 'veniō, venīre, vēnī, ventum — come',
          head: ['', 'Present', 'Imperfect'],
          rows: [
            ['1st sing.', 'veniō', 'veniēbam'],
            ['2nd sing.', 'venīs', 'veniēbās'],
            ['3rd sing.', 'venit', 'veniēbat'],
            ['1st pl.', 'venīmus', 'veniēbāmus'],
            ['2nd pl.', 'venītis', 'veniēbātis'],
            ['3rd pl.', 'veniunt', 'veniēbant'],
          ],
        },
        {
          caption: 'the perfect system of veniō',
          head: ['Tense', 'Forms'],
          rows: [
            ['Perfect', 'vēnī, vēnistī, vēnit, vēnimus, vēnistis, vēnērunt'],
            ['Past perfect', 'vēneram, vēnerās, vēnerat, vēnerāmus, vēnerātis, vēnerant'],
            ['Future perfect', 'vēnerō, vēneris, vēnerit, vēnerimus, vēneritis, vēnerint'],
          ],
        },
      ],
      points: [
        'The infinitive ends in -īre: venīre, sentīre, audīre.',
        'The vowel is long in venīs, venīmus, venītis but short before final -t and -nt: venit, veniunt.',
        'The imperfect adds -ēba- to the stem: veniēbam, sentiēbam.',
        'The perfect stem is the third principal part minus -ī: vēnī → vēn-, sēnsī → sēns-.',
        'The accent falls on the penult in the first and second person plural because of the long -ī-.',
      ],
    },
    {
      id: 'tempus-futurum',
      latinTitle: 'Tempus Futūrum in Omnibus Coniugātiōnibus',
      title: 'The Future Tense in All Conjugations',
      intro:
        'The first and second conjugations form the future with the sign -bi-; the third, third -iō and ' +
        'fourth conjugations use -e- (which becomes -a- in the first person singular). English uses ' +
        '"shall" or "will".',
      paradigms: [
        {
          caption: 'future indicative',
          head: ['', 'I amō', 'II doceō', 'III dīcō', 'III -iō faciō', 'IV veniō'],
          rows: [
            ['1st sing.', 'amābō', 'docēbō', 'dīcam', 'faciam', 'veniam'],
            ['2nd sing.', 'amābis', 'docēbis', 'dīcēs', 'faciēs', 'veniēs'],
            ['3rd sing.', 'amābit', 'docēbit', 'dīcet', 'faciet', 'veniet'],
            ['1st pl.', 'amābimus', 'docēbimus', 'dīcēmus', 'faciēmus', 'veniēmus'],
            ['2nd pl.', 'amābitis', 'docēbitis', 'dīcētis', 'faciētis', 'veniētis'],
            ['3rd pl.', 'amābunt', 'docēbunt', 'dīcent', 'facient', 'venient'],
          ],
        },
      ],
      points: [
        'First and second conjugations: -bō, -bis, -bit, -bimus, -bitis, -bunt.',
        'Third, third -iō and fourth: -am, -ēs, -et, -ēmus, -ētis, -ent.',
        'Note -bo in the first person singular and -bunt in the third person plural of the first and second conjugations.',
        'The future of esse is erō, eris, erit, erimus, eritis, erunt.',
        'Amor viam faciet — love will make a way.',
      ],
    },
    {
      id: 'synopsis',
      latinTitle: 'Synopsis Verbī',
      title: 'The Synopsis of a Verb',
      intro:
        'A synopsis presents one person and number of a verb in all its tenses. It is a short way of ' +
        'reviewing the whole tense system without writing out every person.',
      paradigms: [
        {
          caption: 'synopsis of vocō, vocāre, vocāvī, vocātum — third person singular',
          head: ['Tense', 'Form', 'English'],
          rows: [
            ['Present', 'vocat', 'he calls'],
            ['Imperfect', 'vocābat', 'he was calling'],
            ['Future', 'vocābit', 'he will call'],
            ['Perfect', 'vocāvit', 'he has called, called'],
            ['Past perfect', 'vocāverat', 'he had called'],
            ['Future perfect', 'vocāverit', 'he will have called'],
          ],
        },
      ],
      points: [
        'Choose the person and number required and give that form in each of the six tenses.',
        'The perfect, past perfect and future perfect all use the perfect stem.',
        'A synopsis of the third person plural of vocō would be: vocant, vocābant, vocābunt, vocāvērunt, vocāverant, vocāverint.',
        'The synopsis makes it easy to see which forms are built on the present stem and which on the perfect stem.',
      ],
    },
    {
      id: 'simile-superlativus-er',
      latinTitle: 'Simile et Superlātīvus in -er',
      title: 'The Simile and the Superlative of -er Adjectives',
      intro:
        'A simile compares two ideas with ut, "like" or "as": cruor in herbam emicat ut fōns, the blood ' +
        'spurts into the grass like a fountain. Adjectives ending in -er form the superlative by adding ' +
        '-rimus, -a, -um to the masculine nominative singular.',
      paradigms: [
        {
          caption: 'simile',
          head: ['Latin', 'English'],
          rows: [
            ['Cruor in herbam emicat ut fōns.', 'The blood spurts into the grass like a fountain.'],
            ['Pōma sunt ut sanguis.', 'The fruits are like blood.'],
            ['Pyramus stat ut leō.', 'Pyramus stands like a lion.'],
          ],
        },
        {
          caption: 'superlative of adjectives in -er',
          head: ['Positive', 'Superlative', 'English'],
          rows: [
            ['pulcher, -chra, -chrum', 'pulcherrimus, -a, -um', 'most beautiful'],
            ['miser, misera, miserum', 'miserrimus, -a, -um', 'most unhappy'],
            ['sacer, sacra, sacrum', 'sacerrimus, -a, -um', 'most sacred'],
          ],
        },
      ],
      points: [
        'The simile uses ut or velut to introduce the compared image; English uses "like" or "as".',
        'The comparison need not be introduced by a verb: ūberrima pōmīs, very rich in fruit.',
        'Adjectives in -er add -rimus directly to the masculine nominative: pulcher → pulcherrimus.',
        'The superlative of -er adjectives is declined like bonus, -a, -um.',
      ],
    },
    {
      id: 'declinatio-domus',
      latinTitle: 'Dēclīnātiō Domūs',
      title: 'The Declension of Domus',
      intro:
        'Domus is irregular: it is partly fourth declension and partly second declension in the accusative ' +
        'and ablative. It is feminine, despite its -us ending, and has a locative domī, at home.',
      paradigms: [
        {
          caption: 'domus, -ūs (f.) — house, home',
          head: ['Cāsus', 'Singulāris', 'Plūrālis'],
          rows: [
            ['Nōm.', 'domus', 'domūs'],
            ['Gen.', 'domūs, domī', 'domuum, domōrum'],
            ['Dat.', 'domuī, domō', 'domibus'],
            ['Acc.', 'domum', 'domōs, domūs'],
            ['Abl.', 'domū, domō', 'domibus'],
            ['Loc.', 'domī', '—'],
          ],
        },
      ],
      points: [
        'Domus is feminine: domus magna, domus mea.',
        'The accusative singular is domum and the ablative singular domū or domō.',
        'The genitive singular is usually domūs, but domī is common in the sense "of the house".',
        'The locative domī means "at home": domī manet, he stays at home.',
        'The plural is domūs, domuum (or domōrum), domibus, domōs (or domūs), domibus.',
      ],
    },
  ],
  vocabulary: [
    { latin: 'amāns, amantis', english: 'one who loves, a lover', pos: 'noun c.' },
    { latin: 'cōnsilium, -ī', english: 'plan, advice', pos: 'noun n.' },
    { latin: 'cruor, -ōris', english: 'blood', pos: 'noun m.' },
    { latin: 'domus, -ūs', english: 'house, home', pos: 'noun f.' },
    { latin: 'fissum, -ī', english: 'crack', pos: 'noun n.' },
    { latin: 'gladius, -ī', english: 'sword', pos: 'noun m.' },
    { latin: 'herba, -ae', english: 'grass', pos: 'noun f.' },
    { latin: 'iter, itineris', english: 'road, path, way', pos: 'noun n.' },
    { latin: 'leō, leōnis', english: 'lion', pos: 'noun m.' },
    { latin: 'mors, mortis, -ium', english: 'death', pos: 'noun f.' },
    { latin: 'parēns, parentis', english: 'parent', pos: 'noun c.' },
    { latin: 'pariēs, parietis', english: 'wall', pos: 'noun m.' },
    { latin: 'pōmum, -ī', english: 'fruit, apple', pos: 'noun n.' },
    { latin: 'Pyramus, -ī', english: 'Pyramus (a youth)', pos: 'noun m.' },
    { latin: 'rādīx, rādīcis', english: 'root, radish', pos: 'noun f.' },
    { latin: 'tempus, -oris', english: 'time', pos: 'noun n.' },
    { latin: 'Thisbē, -ēs', english: 'Thisbe (a maiden)', pos: 'noun f.' },
    { latin: 'tumulus, -ī', english: 'grave, mound', pos: 'noun m.' },
    { latin: 'vēlāmen, -inis', english: 'garment, covering, veil', pos: 'noun n.' },
    { latin: 'vestīgium, -ī', english: 'track, footstep', pos: 'noun n.' },
    { latin: 'bibō, -ere, bibī, bibitum', english: 'drink', pos: 'verb' },
    { latin: 'conveniō, -īre, convēnī, conventum', english: 'meet, assemble', pos: 'verb' },
    { latin: 'fallō, -ere, fefellī, falsum', english: 'deceive', pos: 'verb' },
    { latin: 'fugiō, -ere, fūgī, -itum', english: 'flee', pos: 'verb' },
    { latin: 'murmurō (1)', english: 'murmur', pos: 'verb' },
    { latin: 'optō (1)', english: 'wish for, desire', pos: 'verb' },
    { latin: 'perveniō, -īre, pervēnī, perventum', english: 'arrive', pos: 'verb' },
    { latin: 'quaerō, -ere, quaesīvī, quaesītum', english: 'seek, ask, inquire', pos: 'verb' },
    { latin: 'quaesō, -ere', english: 'seek, beg; I beg you, please', pos: 'verb' },
    { latin: 'relinquō, -ere, relīquī, relictum', english: 'leave behind', pos: 'verb' },
    { latin: 'sentiō, -īre, sēnsī, -sum', english: 'feel, know, sense', pos: 'verb' },
    { latin: 'trahō, -ere, trāxī, -ctum', english: 'draw, draw out, drag', pos: 'verb' },
    { latin: 'veniō, -īre, vēnī, ventum', english: 'come', pos: 'verb' },
    { latin: 'albus, -a, -um', english: 'white', pos: 'adjective' },
    { latin: 'cruentus, -a, -um', english: 'bloody', pos: 'adjective' },
    { latin: 'dignus, -a, -um', english: 'worthy (of) (+ abl.)', pos: 'adjective' },
    { latin: 'prior, prius', english: 'before, earlier (comparative)', pos: 'adjective' },
    { latin: 'purpureus, -a, -um', english: 'purple', pos: 'adjective' },
    { latin: 'vīcīnus, -a, -um', english: 'neighboring, near (to) (+ dat.)', pos: 'adjective' },
    { latin: 'ē (ex)', english: 'out of, from (+ abl.)', pos: 'preposition' },
    { latin: 'hinc', english: 'here, on this side, hence', pos: 'adverb' },
    { latin: 'illinc', english: 'there, on that side, thence', pos: 'adverb' },
    { latin: 'procul', english: 'at a distance, far off', pos: 'adverb' },
    { latin: 'quī, quae, quod', english: 'who, which', pos: 'pronoun' },
    { latin: 'quia', english: 'because', pos: 'conjunction' },
    { latin: 'recēns', english: 'recently, freshly', pos: 'adverb / adjective' },
    { latin: 'sub', english: 'under, beneath (+ acc. or abl.)', pos: 'preposition' },
    { latin: 'ut', english: 'as, like; that', pos: 'conjunction' },
    { latin: 'utrimque', english: 'on each side, on both sides', pos: 'adverb' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PĒNSVM A',
      title: 'Respondēte Latīnē',
      instruction: 'Answer each question in a complete Latin sentence, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'Quis est Pyramus? Quis est Thisbē?', a: 'Pyramus iuvenis pulcherrimus est; Thisbē virgō fōrmōsissima est.' },
        { q: 'Ubi habitābant?', a: 'Domōs vīcīnās tenēbant.' },
        { q: 'Quī amōrem iuvenum prohibuērunt?', a: 'Parentēs eōrum amōrem prohibēre temptāvērunt.' },
        { q: 'Ubi fissum erat?', a: 'Fissum in pariete domuum erat.' },
        { q: 'Quid est cōnsilium iuvenum?', a: 'Nocte parentēs fallere et domōs relinquere cōnsilium habent.' },
        { q: 'Ubi convenient?', a: 'Ad tumulum Nīnī sub arbore convenient.' },
        { q: 'Quis vēnit prīmō?', a: 'Thisbē prīmō pervēnit.' },
        { q: 'Quis adest quoque?', a: 'Leō quoque adest.' },
        { q: 'Quid fēcit leō? Quid fēcit Thisbē?', a: 'Leō vēlāmina ōre cruentō laniāvit; Thisbē in spēluncam obscūram fūgit.' },
        { q: 'Quid colōrem pōmōrum mūtāvit?', a: 'Cruor Pyramī colōrem pōmōrum mūtāvit.' },
      ],
    },
    {
      id: 'pensum-b',
      latinLabel: 'PĒNSVM B',
      title: 'Change to the Future',
      instruction: 'Change each verb to the future tense.',
      type: 'fill',
      items: [
        'Iuvenēs ōscula utrimque dant. → {{dabunt}}.',
        'Pyramus vēlāmina Thisbēs videt. → {{vidēbit}}.',
        'Pyramus prīmus nōn venit. → {{veniet}}.',
        'Leō virginī nōn nocet. → {{nocēbit}}.',
        'Amor viam facit. → {{faciet}}.',
        'Amantēs domōs relinquunt. → {{relinquent}}.',
        'Pyramus sē necat. → {{necābit}}.',
        'Pōma nōn sunt alba. → {{erunt}}.',
        'Cruor colōrem pōmōrum mūtāvit. → {{mūtābit}}.',
        'Leō virginem nōn dēvorāvit. → {{dēvorābit}}.',
      ],
    },
    {
      id: 'pensum-c',
      latinLabel: 'PĒNSVM C',
      title: 'Translate into Latin',
      instruction: 'Render each English sentence in Latin, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'Pyramus loved Thisbe, but their parents tried to prevent their love.', a: 'Pyramus Thisbēn amābat, sed parentēs eōrum amōrem prohibēre temptāvērunt.' },
        { q: 'They spoke through a hole in the wall.', a: 'Per fissum in pariete verba mollia murmurābant.' },
        { q: 'They had neighboring houses.', a: 'Domōs vīcīnās tenēbant.' },
        { q: 'They have a plan to leave their homes at night and meet secretly.', a: 'Cōnsilium habent nocte domōs relinquere et sēcrētō convenīre.' },
        { q: 'They will deceive their parents and leave the city.', a: 'Parentēs fallent et oppidum relinquent.' },
        { q: 'They will meet at the tree near the tomb of Ninus.', a: 'Ad arborem prope tumulum Nīnī convenient.' },
        { q: 'Thisbe is the first to come and sees a lion.', a: 'Thisbē prīma venit et leōnem videt.' },
        { q: 'Thisbe flees and leaves behind her veil.', a: 'Thisbē fugit et vēlāmen relinquit.' },
        { q: 'The lion tears the veil with his bloody mouth.', a: 'Leō vēlāmen ōre cruentō laniat.' },
        { q: 'Pyramus is most wretched when he sees the veil, and he kills himself with his sword.', a: 'Pyramus, ubi vēlāmen videt, miserrimus est et gladiō sē necat.' },
      ],
    },
  ],
}

export default chapter
