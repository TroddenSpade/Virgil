// Capitulum VIII — PAN ET SYRINGA
// Source: Goldman & Nyenhuis, Latin via Ovid: A First Course (2nd ed., 1982)
// Reading text, vocabulary, grammar and exercises adapted for the web.

const chapter = {
  number: 8,
  roman: 'VIII',
  slug: 'pan-et-syringa',
  latinTitle: 'PAN ET SYRINGA',
  title: 'Pan and Syrinx',
  tagline:
    'The nymph Syrinx, vowed to Diana, flees the god Pan; changed into reeds, she becomes the pipe that bears her name.',
  status: 'complete',
  overview:
    'Pan, the god of the woods, falls in love with the nymph Syrinx, who has devoted her life to Diana. ' +
    'When he pursues her, her fellow nymphs change her into reeds by the river, and Pan binds the reeds into the ' +
    'shepherd’s pipe. The chapter teaches the future tense, second declension nouns in -er and -ir, adjectives in -er, ' +
    'the future of sum, and the pronouns mēcum and tēcum.',
  objectives: [
    'Read the story of Pan and Syrinx in Latin.',
    'Form the future tense of first and second conjugation verbs.',
    'Decline second declension nouns in -er and -ir such as puer, ager and vir.',
    'Decline the adjectives miser and pulcher.',
    'Use the future of sum and the forms mēcum, tēcum, nōbīscum and vōbīscum.',
  ],
  readings: [
    {
      id: 'pan-et-syringa',
      latinTitle: 'PAN ET SYRINGA',
      title: 'Pan and Syrinx',
      paragraphs: [
        'Ōlim erat nympha pulchra. Nōmen nymphae erat Syringa. In Arcadiā habitābat. Centum deī et satyrī Syringam amābant, sed Syringa eōs nōn amābat. Quamquam Syringa nymphās cēterās et deam Diānam amābat, tamen deōs satyrōsque fugitābat. Sē in silvā umbrōsā et dēnsā celābat.',
        'Syringa dīxit: “Diānae vītam meam dēvovēbō. Nūllus vir, nūllus deus mē habēbit.”',
        'Deus Pān autem, dum in silvā errat, Syringam videt et statim eam amat. Pān dīxit: “Aeternum tē amābō.” Syringa autem dīxit: “Aeternum nympha Diānae erō.”',
        'Deinde nympha misera trāns agrōs et per silvās celeriter fugitat donec rīpam undārum spectat. Undae fugam prohibēbant. Syringa auxilium nymphās sīc ōrat: “Fōrmam meam mūtāte, nymphae benignae.” Nymphae eam in papyrōs in rīpā mūtant.',
        'Pān autem putat sē Syringam in bracchiīs tenēre; in bracchiīs nōn eam sed papyrōs habēbat. Dum miser Pān suspīrat trāns papyrōs, papyrī sonum querellae dant. Dēnique Pān dīxit: “Tēcum concilium habēbō. Syringa manēbit.” Et cērā septem papyrōs coniungit. Ita Pān fistulam fōrmat, et fistulae nōmen Syringam dat.',
      ],
      notes: [
        { term: 'Syringa, -ae', gloss: 'Syrinx, a nymph of Arcadia; the Greek name is Syrinx.' },
        { term: 'Centum deī et satyrī', gloss: 'a hundred gods and satyrs; centum is indeclinable.' },
        { term: 'quamquam ... tamen', gloss: 'although ... nevertheless — the two words regularly go together.' },
        { term: 'fugitābat', gloss: 'kept fleeing, shunned; the frequentative verb suggests repeated action.' },
        { term: 'sē celābat', gloss: 'hid herself; the reflexive pronoun sē refers back to Syrinx.' },
        { term: 'Diānae vītam meam dēvovēbō', gloss: 'I shall devote my life to Diana; dēvoveō takes the dative.' },
        { term: 'aeternum', gloss: 'forever, for eternity.' },
        { term: 'rīpam undārum', gloss: 'the bank of the stream; unda means wave, water, stream.' },
        { term: 'fōrmam meam mūtāte', gloss: 'change my form — plural imperative addressed to the nymphs.' },
        { term: 'papyrī', gloss: 'papyrus reeds; singular papyrus, -ī.' },
        { term: 'tēcum concilium habēbō', gloss: 'I shall have union with you; concilium here means a joining together.' },
        { term: 'cērā', gloss: 'with wax — ablative of means.' },
      ],
    },
  ],
  grammar: [
    {
      id: 'tempus-futurum',
      latinTitle: 'Tempus Futūrum',
      title: 'The Future Tense',
      intro:
        'The future tense inserts the tense sign -bi- between the stem and the personal endings. ' +
        'The stem vowel -ā- of the first conjugation and -ē- of the second are kept before the sign. ' +
        'In the first person singular -bi- becomes -bō, and in the third person plural it becomes -bu-.',
      paradigms: [
        {
          caption: 'future of vocō and doceō',
          head: ['', 'I conjugātiō (vocō)', 'II conjugātiō (doceō)'],
          rows: [
            ['1 sg.', 'vocābō', 'docēbō'],
            ['2 sg.', 'vocābis', 'docēbis'],
            ['3 sg.', 'vocābit', 'docēbit'],
            ['1 pl.', 'vocābimus', 'docēbimus'],
            ['2 pl.', 'vocābitis', 'docēbitis'],
            ['3 pl.', 'vocābunt', 'docēbunt'],
          ],
        },
      ],
      points: [
        'vocābō — I shall call; docēbō — I shall teach.',
        'The personal endings are the same as in the present: -ō/-m, -s, -t, -mus, -tis, -nt.',
        'The future of dare is irregular in stem but regular in endings: dabō, dabis, dabit, dabimus, dabitis, dabunt.',
      ],
    },
    {
      id: 'duo-adiectiva',
      latinTitle: 'Duo Adiectīva ūnīus Nōminis',
      title: 'Two Adjectives and Word Order',
      intro:
        'Two adjectives modifying a single noun are usually translated without “and,” although Latin may connect them with et. ' +
        'Adjectives of size, quantity and number generally precede their noun.',
      paradigms: [
        {
          caption: 'two adjectives with one noun',
          head: ['Latīnē', 'Anglicē'],
          rows: [
            ['in silvā dēnsā et umbrōsā', 'in a dense, shady forest'],
            ['nympha pulchra et benigna', 'a beautiful, kind nymph'],
            ['Regīna in magnā rēgiā habitat.', 'The queen lives in a large palace.'],
            ['Quīnque equōs in campō vidēbat.', 'He saw five horses on the plain.'],
          ],
        },
      ],
      points: [
        'Both adjectives must agree with the noun in case, number and gender.',
        'magnus, multus, quīnque and similar words of size or number normally come before the noun.',
      ],
    },
    {
      id: 'tecum-mecum',
      latinTitle: 'Tēcum, Mēcum',
      title: 'Cum with Personal Pronouns',
      intro:
        'When the preposition cum (with) is used with the pronouns tē and mē, it is attached to the end of the pronoun. ' +
        'The same happens in the plural.',
      paradigms: [
        {
          caption: 'cum with pronouns',
          head: ['Latīnē', 'Anglicē'],
          rows: [
            ['tēcum', 'with you (sg.)'],
            ['mēcum', 'with me'],
            ['nōbīscum', 'with us'],
            ['vōbīscum', 'with you (pl.)'],
          ],
        },
      ],
      points: [
        'These forms are written as one word: tēcum, not cum tē.',
        'With nouns and other pronouns cum stands separately: cum amīcā, cum eā.',
      ],
    },
    {
      id: 'nomina-er-ir',
      latinTitle: 'Nōmina in -er et -ir',
      title: 'Nouns in -er and -ir; Adjectives in -er',
      intro:
        'A few masculine second declension nouns end in -er in the nominative. Some, like puer, keep the -e throughout; ' +
        'others, like ager, drop it after the nominative. Vir is the only noun in -ir. The adjective miser keeps its -e, ' +
        'while pulcher drops it like ager.',
      paradigms: [
        {
          caption: 'puer, ager, vir',
          head: ['', 'Singulāris', 'Plūrālis'],
          rows: [
            ['Nōm.', 'puer / ager / vir', 'puerī / agrī / virī'],
            ['Gen.', 'puerī / agrī / virī', 'puerōrum / agrōrum / virōrum'],
            ['Dat.', 'puerō / agrō / virō', 'puerīs / agrīs / virīs'],
            ['Acc.', 'puerum / agrum / virum', 'puerōs / agrōs / virōs'],
            ['Abl.', 'puerō / agrō / virō', 'puerīs / agrīs / virīs'],
          ],
        },
        {
          caption: 'miser, misera, miserum and pulcher, pulchra, pulchrum',
          head: ['', 'M.', 'F.', 'N.'],
          rows: [
            ['Nōm.', 'miser / pulcher', 'misera / pulchra', 'miserum / pulchrum'],
            ['Gen.', 'miserī / pulchrī', 'misera / pulchrae', 'miserī / pulchrī'],
            ['Dat.', 'miserō / pulchrō', 'misera / pulchrae', 'miserō / pulchrō'],
            ['Acc.', 'miserum / pulchrum', 'miseram / pulchram', 'miserum / pulchrum'],
            ['Abl.', 'miserō / pulchrō', 'miserā / pulchrā', 'miserō / pulchrō'],
          ],
        },
      ],
      points: [
        'puer and miser retain the -e; ager and pulcher drop it: puerī, miserī, agrī, pulchrī.',
        'Both adjectives are regular in the plural: miserī, miserae, misera; pulchrī, pulchrae, pulchra.',
      ],
    },
    {
      id: 'futurum-sum',
      latinTitle: 'Futūrum Esse',
      title: 'The Future of Sum',
      intro: 'The future of sum is formed from the stem eri- and is regular in its endings.',
      paradigms: [
        {
          caption: 'future of sum, esse',
          head: ['', 'Singulāris', 'Plūrālis'],
          rows: [
            ['1', 'erō — I shall be', 'erimus — we shall be'],
            ['2', 'eris — you will be', 'eritis — you will be'],
            ['3', 'erit — he, she, it will be', 'erunt — they will be'],
          ],
        },
      ],
      points: [
        'Note the difference between erit (future: will be) and est (present: is).',
        'The future of compounds follows the same pattern: aderō, aberō.',
      ],
    },
  ],
  vocabulary: [
    { latin: 'ager, agrī', english: 'field', pos: 'noun m.' },
    { latin: 'auxilium, -iī', english: 'aid, help', pos: 'noun n.' },
    { latin: 'bracchium, -iī', english: 'arm, limb', pos: 'noun n.' },
    { latin: 'cēra, -ae', english: 'wax', pos: 'noun f.' },
    { latin: 'concilium, -iī', english: 'union, joining', pos: 'noun n.' },
    { latin: 'fistula, -ae', english: 'reed pipe, pipes of Pan', pos: 'noun f.' },
    { latin: 'fuga, -ae', english: 'flight', pos: 'noun f.' },
    { latin: 'Pān, Pānos', english: 'Pan (a forest divinity, satyr)', pos: 'noun m.' },
    { latin: 'papyrus, -ī', english: 'papyrus, reed', pos: 'noun f.' },
    { latin: 'rīpa, -ae', english: 'bank (of a river)', pos: 'noun f.' },
    { latin: 'satyrus, -ī', english: 'satyr', pos: 'noun m.' },
    { latin: 'sonus, -ī', english: 'sound', pos: 'noun m.' },
    { latin: 'Syringa, -ae', english: 'Syrinx (a nymph)', pos: 'noun f.' },
    { latin: 'unda, -ae', english: 'wave, water, stream', pos: 'noun f.' },
    { latin: 'vir, virī', english: 'man', pos: 'noun m.' },
    { latin: 'cēlō, -āre, -āvī, -ātum', english: 'hide, conceal', pos: 'verb' },
    { latin: 'dēvoveō, -ēre, -vōvī, -vōtum', english: 'devote', pos: 'verb' },
    { latin: 'errō, -āre, -āvī, -ātum', english: 'wander', pos: 'verb' },
    { latin: 'fugitō, -āre, -āvī, -ātum', english: 'flee, avoid, shun', pos: 'verb' },
    { latin: 'maneō, -ēre, mānsī, mānsum', english: 'remain, stay', pos: 'verb' },
    { latin: 'putō, -āre, -āvī, -ātum', english: 'think', pos: 'verb' },
    { latin: 'suspīrō, -āre, -āvī, -ātum', english: 'breathe', pos: 'verb' },
    { latin: 'teneō, -ēre, -uī, tentum', english: 'hold, keep, possess, have', pos: 'verb' },
    { latin: 'videō, -ēre, vīdī, vīsum', english: 'see', pos: 'verb' },
    { latin: 'benignus, -a, -um', english: 'kind', pos: 'adj.' },
    { latin: 'cēterus, -a, -um', english: 'other, rest of', pos: 'adj.' },
    { latin: 'dēnsus, -a, -um', english: 'thick, dense', pos: 'adj.' },
    { latin: 'miser, -era, -erum', english: 'wretched, unhappy, miserable', pos: 'adj.' },
    { latin: 'nūllus, -a, -um', english: 'no, none', pos: 'adj.' },
    { latin: 'umbrōsus, -a, -um', english: 'shady', pos: 'adj.' },
    { latin: 'aeternum', english: 'forever', pos: 'adv.' },
    { latin: 'autem', english: 'but, however (postpositive)', pos: 'conjunction' },
    { latin: 'donec', english: 'until, up to the time when', pos: 'conjunction' },
    { latin: 'eam', english: 'her (acc.)', pos: 'pronoun' },
    { latin: 'eōs', english: 'them (acc.)', pos: 'pronoun' },
    { latin: 'ōlim', english: 'once, once upon a time, formerly', pos: 'adv.' },
    { latin: 'quamquam', english: 'although', pos: 'conjunction' },
    { latin: 'sīc', english: 'thus', pos: 'adv.' },
    { latin: 'statim', english: 'immediately', pos: 'adv.' },
    { latin: 'tamen', english: 'nevertheless', pos: 'adv.' },
    { latin: 'trāns', english: 'across (+ acc.)', pos: 'prep.' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PĒNSVM A',
      title: 'Respondēte Latīnē',
      instruction: 'Answer each question with a complete Latin sentence, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'Quis erat Syringa?', a: 'Syringa erat nympha pulchra.' },
        { q: 'Amābatne Syringa virōs et deōs?', a: 'Nōn, Syringa virōs et deōs nōn amābat.' },
        { q: 'Ubi Syringa sē celat?', a: 'Syringa sē in silvā umbrōsā et dēnsā celat.' },
        { q: 'Quis maximē Syringam amābat?', a: 'Pān, deus silvārum, maximē Syringam amābat.' },
        { q: 'Quid Syringae dīxit Pān?', a: 'Pān Syringae dīxit: “Aeternum tē amābō.”' },
        { q: 'Quid fugam Syringae prohibēbat?', a: 'Undae rīpae fugam Syringae prohibēbant.' },
        { q: 'Quis fōrmam Syringae mūtat?', a: 'Nymphae benignae fōrmam Syringae mūtant.' },
        { q: 'Quid Pān in bracchiīs habēbat?', a: 'Pān in bracchiīs nōn Syringam sed papyrōs habēbat.' },
        { q: 'Quid Pān ita fōrmat?', a: 'Pān fistulam fōrmat.' },
        { q: 'Quid est nōmen septem papyrīs?', a: 'Pān septem papyrīs nōmen Syringam dat.' },
      ],
    },
    {
      id: 'pensum-b',
      latinLabel: 'PĒNSVM B',
      title: 'Tempus Futūrum',
      instruction: 'Complete each future tense form.',
      type: 'fill',
      items: [
        'vocāre: vocābō, {{vocābis}}, {{vocābit}}, {{vocābimus}}, {{vocābitis}}, {{vocābunt}}.',
        'habēre: habēbō, {{habēbis}}, {{habēbit}}, {{habēbimus}}, {{habēbitis}}, {{habēbunt}}.',
        'esse: erō, {{eris}}, {{erit}}, {{erimus}}, {{eritis}}, {{erunt}}.',
        'dare: dabō, {{dabis}}, {{dabit}}, {{dabimus}}, {{dabitis}}, {{dabunt}}.',
        'vidēre: vidēbō, {{vidēbis}}, {{vidēbit}}, {{vidēbimus}}, {{vidēbitis}}, {{vidēbunt}}.',
        'Mūtāte in plūrālem: fugitābit → {{fugitābunt}}; eris → {{eritis}}; manēbit → {{manēbunt}}; dabit → {{dabunt}}; amābit → {{amābunt}}.',
      ],
    },
    {
      id: 'pensum-c',
      latinLabel: 'PĒNSVM C',
      title: 'Reddite Latīnē',
      instruction: 'Translate each English sentence into Latin, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'Syrinx, a beautiful nymph, lived in Arcadia.', a: 'Syringa, nympha pulchra, in Arcadiā habitābat.' },
        { q: 'She did not love the gods and satyrs.', a: 'Deōs et satyrōs nōn amābat.' },
        { q: '“No man shall have me,” she said.', a: '“Nūllus vir mē habēbit,” dīxit.' },
        { q: 'Pan loved Syrinx and said, “I shall love you forever.”', a: 'Pān Syringam amābat et dīxit: “Aeternum tē amābō.”' },
        { q: 'Syrinx flees through the woods and the fields.', a: 'Syringa per silvās et agrōs fugitat.' },
        { q: 'Pan holds the reeds in his arms.', a: 'Pān papyrōs in bracchiīs tenet.' },
        { q: 'While he breathes over the reeds, the papyri give the sound of a complaint.', a: 'Dum trāns papyrōs suspīrat, papyrī sonum querellae dant.' },
        { q: 'Pan binds together the reeds with wax.', a: 'Pān cērā papyrōs coniungit.' },
        { q: 'Thus he will have Syrinx forever.', a: 'Ita Syringam aeternum habēbit.' },
        { q: 'Pan forms the pipes and gives to the pipes the name Syrinx.', a: 'Pān fistulam fōrmat et fistulae nōmen Syringam dat.' },
      ],
    },
  ],
}

export default chapter
