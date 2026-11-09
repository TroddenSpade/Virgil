// Capitulum IX — CALLISTO
// Source: Goldman & Nyenhuis, Latin via Ovid: A First Course (2nd ed., 1982)
// Reading text, vocabulary, grammar and exercises adapted for the web.

const chapter = {
  number: 9,
  roman: 'IX',
  slug: 'callisto-1',
  latinTitle: 'CALLISTO',
  title: 'Callisto (Part 1)',
  tagline:
    'The Muse tells how the nymph Callisto, loved by Jupiter, was changed with her son Arcas into the two Bears of the sky.',
  status: 'complete',
  overview:
    'The Muse begins the story of Callisto, a beautiful Arcadian nymph devoted to Diana. Jupiter sees her lying asleep ' +
    'in a grassy meadow, takes the shape of Diana, and approaches her; afterwards the ashamed nymph avoids her companions ' +
    'and her goddess. The chapter introduces the perfect tense of the first and second conjugations, the dative with ' +
    'adjectives, conditions with sī, and the difference between suus and eius.',
  objectives: [
    'Read the first part of the story of Callisto in Latin.',
    'Form and translate the perfect tense of first and second conjugation verbs.',
    'Distinguish the imperfect from the perfect.',
    'Use the dative with adjectives such as cārus and grātus.',
    'Understand real conditions with sī and choose correctly between suus and eius.',
  ],
  readings: [
    {
      id: 'callisto',
      latinTitle: 'CALLISTO',
      title: 'Callisto',
      paragraphs: [
        'Saepe poētae Mūsās invocant dum fābulās nārrant. “Nārrā, ō Mūsa, fābulam dē nymphā Callistō et dē fīliō eius, Arcade.”',
        '“Spectāte stellās in caelō,” dīxit Mūsa. “Ecce septem stellae, Ursa Māior, et septem aliae stellae, Ursa Minor. Ursa Māior est Callistō, et Ursa Minor est Arcas, fīlius eius. Propter īram rēgīnae deōrum, Iuppiter nympham et fīlium eius in stellās in caelō trānsfōrmāvit.”',
        'Callistō erat nympha cuius fōrma erat pulchra. In Arcadiā habitābat. Dum Iuppiter silvās et agrōs in Arcadiā, terrā deō cārā, cūrat, nympham pulchram fōrmōsamque spectāvit et statim eam amāvit. Certē Callistō erat fōrmōsa. Fībula vestīmentum retinēbat et vitta neglēctōs capillōs retinēbat. Callistō per silvās cum Diānā et cēterīs nymphīs errābat. Iaculum et sagittās portābat.',
        'Ōlim Callistō sōla erat et in somnō in terrā herbōsā iacēbat; Iuppiter eam vīdit. Nympha erat deō grāta. “Certē Iūnō mē hīc nōn vidēbit,” dīxit, “aut sī videt, sunt dēlectāmenta pretiōsa sed dīgna pretiī.” Statim Iuppiter fōrmam Diānae simulāvit et ita ad nympham sēcrētō appropinquāvit. Ita Iuppiter victor erat; Callistō autem, nympha misera, silvās nōtās et amīcās nōtās et deam Diānam ēvītāvit.',
      ],
      notes: [
        { term: 'Mūsae', gloss: 'the Muses, nine goddesses of poetry, music and the liberal arts.' },
        { term: 'Ursa Māior, Ursa Minor', gloss: 'the Greater Bear and the Smaller Bear — the constellations of the Big and Little Dipper.' },
        { term: 'cuius fōrma', gloss: 'whose form; cuius is the genitive singular of quī, quae, quod.' },
        { term: 'terrā deō cārā', gloss: 'a land dear to the god — ablative in apposition to Arcadiā.' },
        { term: 'fībula', gloss: 'a pin or brooch fastening a garment.' },
        { term: 'vitta', gloss: 'a fillet or band for the hair.' },
        { term: 'neglēctōs capillōs', gloss: 'her careless locks, literally “neglected hair”; capillus, -ī, m., hair.' },
        { term: 'in somnō', gloss: 'asleep, in sleep.' },
        { term: 'deō grāta', gloss: 'pleasing to the god; grātus takes the dative.' },
        { term: 'Iūnō', gloss: 'Juno, queen of the gods and wife of Jupiter.' },
        { term: 'dīgna pretiī', gloss: 'worth the price; dīgnus may take the genitive as well as the ablative.' },
        { term: 'sēcrētō', gloss: 'secretly, in secret.' },
      ],
    },
  ],
  grammar: [
    {
      id: 'tempus-perfectum',
      latinTitle: 'Tempus Perfectum',
      title: 'The Perfect Tense',
      intro:
        'The perfect tense is formed from the third principal part of the verb. Drop the final -ī from the first person ' +
        'singular perfect to obtain the perfect stem, then add the perfect endings. First conjugation verbs regularly ' +
        'form the perfect in -āvī; most second conjugation verbs in -uī.',
      paradigms: [
        {
          caption: 'perfect endings',
          head: ['', 'Singulāris', 'Plūrālis'],
          rows: [
            ['1', '-ī', '-imus'],
            ['2', '-istī', '-istis'],
            ['3', '-it', '-ērunt'],
          ],
        },
        {
          caption: 'vocō, vocāre, vocāvī — first conjugation',
          head: ['', 'Singulāris', 'Plūrālis'],
          rows: [
            ['1', 'vocāvī — I called', 'vocāvimus — we called'],
            ['2', 'vocāvistī — you called', 'vocāvistis — you called'],
            ['3', 'vocāvit — he called', 'vocāvērunt — they called'],
          ],
        },
        {
          caption: 'doceō, docēre, docuī — second conjugation',
          head: ['', 'Singulāris', 'Plūrālis'],
          rows: [
            ['1', 'docuī — I taught', 'docuimus — we taught'],
            ['2', 'docuistī — you taught', 'docuistis — you taught'],
            ['3', 'docuit — he taught', 'docuērunt — they taught'],
          ],
        },
      ],
      points: [
        'The perfect may be translated “I called,” “I have called,” or “I did call.”',
        'The perfect stem must be learned with each verb: vocāv-, docu-, vid-, mans-, respond-.',
        'First conjugation verbs regularly follow the pattern laudō, laudāre, laudāvī; amō, amāre, amāvī; nārrō, nārrāre, nārrāvī.',
      ],
    },
    {
      id: 'perfectum-et-imperfectum',
      latinTitle: 'Perfectum et Imperfectum',
      title: 'Perfect and Imperfect',
      intro:
        'The imperfect describes continuing or habitual action in the past; the perfect describes a single completed act. ' +
        'The difference is often visible in English as “was doing” or “used to do” against “did.”',
      paradigms: [
        {
          caption: 'imperfect and perfect contrasted',
          head: ['Imperfectum', 'Perfectum'],
          rows: [
            ['Callistō in silvā errābat.', 'Iuppiter eam vīdit et statim amāvit.'],
            ['Callisto was wandering in the woods.', 'Jupiter saw her and loved her at once.'],
            ['Callistō in somnō iacēbat.', 'Iuppiter fōrmam Diānae simulāvit.'],
            ['Callisto was lying asleep.', 'Jupiter took on the shape of Diana.'],
          ],
        },
      ],
      points: [
        'The imperfect stresses the course of an action: errābat, was wandering, used to wander.',
        'The perfect stresses its completion: vīdit, saw; amāvit, loved; trānsfōrmāvit, transformed.',
      ],
    },
    {
      id: 'dativus-cum-adiectivis',
      latinTitle: 'Dativus cum Adiectīvīs',
      title: 'The Dative with Adjectives',
      intro:
        'A few adjectives are completed by a noun in the dative case. The idea of “to” or “for” is usually implied in the adjective.',
      paradigms: [
        {
          caption: 'adjectives with the dative',
          head: ['Adiectīvum', 'Significātiō', 'Exemplum'],
          rows: [
            ['cārus, -a, -um', 'dear (to)', 'Arcadia est deō cāra.'],
            ['grātus, -a, -um', 'pleasing (to)', 'Callistō est deō grāta.'],
          ],
        },
      ],
      points: [
        'Arcadia est deō cāra. — Arcadia is dear to the god.',
        'Callistō est deō grāta. — Callisto is pleasing to the god.',
        'The dative noun depends on the adjective, not on a verb.',
      ],
    },
    {
      id: 'conditiones',
      latinTitle: 'Condiciōnēs',
      title: 'Conditions with Sī',
      intro:
        'A subordinate clause introduced by sī (if) states the condition under which the main clause holds. ' +
        'These “real” conditions may use the present, future or imperfect tense.',
      paradigms: [
        {
          caption: 'real conditions',
          head: ['Condiciō', 'Anglicē'],
          rows: [
            ['Sī Iūnō mē videt, dēlectāmenta sunt pretiōsa.', 'If Juno sees me, the delights are costly.'],
            ['Sī Iūnō mē vidēbit, dēlectāmenta erunt pretiōsa.', 'If Juno sees me, the delights will be costly.'],
            ['Sī poēta Mūsam invocābat, fābula erat grāta.', 'If the poet invoked the Muse, the story was pleasing.'],
          ],
        },
      ],
      points: [
        'The tense of the sī-clause and of the main clause usually match in these examples.',
        'Latin often uses the future where English uses the present after “if”: sī vidēbit, “if he sees.”',
      ],
    },
    {
      id: 'suus-et-eius',
      latinTitle: 'Suus et Eius',
      title: 'Suus and Eius',
      intro:
        'Both suus, -a, -um and eius mean “his, her, its,” but they work differently. Suus is an adjective and agrees ' +
        'with the noun it modifies; eius is the genitive singular of the pronoun is, ea, id, meaning “of him, of her, of it.” ' +
        'Use suus when the possessor is the subject of the clause, and eius when the possessor is someone else.',
      paradigms: [
        {
          caption: 'reflexive suus and non-reflexive eius',
          head: ['Latīnē', 'Anglicē'],
          rows: [
            ['Minerva pictūrās suās mōnstrāvit.', 'Minerva showed her own pictures.'],
            ['Iuppiter nympham et fīlium eius trānsfōrmāvit.', 'Jupiter transformed the nymph and her son.'],
            ['Iuppiter nympham et fīlium suum trānsfōrmāvit.', 'Jupiter transformed the nymph and his own son.'],
            ['Fībula vestīmentum retinēbat et vitta capillōs eius retinēbat.', 'A pin held her garment and a band held her hair.'],
          ],
        },
      ],
      points: [
        'If the word “own” can be added in English, use suus: fīlium suum, his own son.',
        'If the possessor is not the subject, use eius: fīlium eius, her son (someone else’s son).',
        'The possessive is often omitted when the context makes the possessor clear, especially with parts of the body.',
      ],
    },
  ],
  vocabulary: [
    { latin: 'Arcadia, -ae', english: 'Arcadia (a region of the Peloponnesus, dear to Jupiter)', pos: 'noun f.' },
    { latin: 'Arcas, Arcadis', english: 'Arcas (son of Callisto)', pos: 'noun m.' },
    { latin: 'caelum, -ī', english: 'sky, the heavens', pos: 'noun n.' },
    { latin: 'Callistō, -ūs', english: 'Callisto (a nymph)', pos: 'noun f.' },
    { latin: 'dēlectāmentum, -ī', english: 'delight', pos: 'noun n.' },
    { latin: 'fībula, -ae', english: 'pin', pos: 'noun f.' },
    { latin: 'iaculum, -ī', english: 'javelin', pos: 'noun n.' },
    { latin: 'īra, -ae', english: 'wrath', pos: 'noun f.' },
    { latin: 'Iūnō, Iūnōnis', english: 'Juno (queen of the gods)', pos: 'noun f.' },
    { latin: 'Mūsa, -ae', english: 'Muse', pos: 'noun f.' },
    { latin: 'pretium, -iī', english: 'price, reward', pos: 'noun n.' },
    { latin: 'somnus, -ī', english: 'sleep; in somnō — asleep', pos: 'noun m.' },
    { latin: 'stella, -ae', english: 'star', pos: 'noun f.' },
    { latin: 'ursa, -ae', english: 'bear; Ursa Māior — Greater Bear; Ursa Minor — Smaller Bear', pos: 'noun f.' },
    { latin: 'vestīmentum, -ī', english: 'garment, clothes', pos: 'noun n.' },
    { latin: 'victor, victōris', english: 'victor', pos: 'noun m.' },
    { latin: 'vitta, -ae', english: 'fillet, band', pos: 'noun f.' },
    { latin: 'appropinquō, -āre, -āvī, -ātum', english: 'approach', pos: 'verb' },
    { latin: 'cūrō, -āre, -āvī, -ātum', english: 'care for', pos: 'verb' },
    { latin: 'ēvītō, -āre, -āvī, -ātum', english: 'avoid, shun', pos: 'verb' },
    { latin: 'iaceō, -ēre, -uī', english: 'lie (at rest)', pos: 'verb' },
    { latin: 'invocō, -āre, -āvī, -ātum', english: 'invoke', pos: 'verb' },
    { latin: 'retineō, -ēre, -uī, -tentum', english: 'keep, hold back, restrain', pos: 'verb' },
    { latin: 'alius, -a, -ud', english: 'other; aliī ... aliī — some ... others', pos: 'adj.' },
    { latin: 'cārus, -a, -um', english: 'dear (to) (+ dat.)', pos: 'adj.' },
    { latin: 'fōrmōsus, -a, -um', english: 'beautiful, shapely', pos: 'adj.' },
    { latin: 'grātus, -a, -um', english: 'pleasing (to) (+ dat.)', pos: 'adj.' },
    { latin: 'herbōsus, -a, -um', english: 'grassy', pos: 'adj.' },
    { latin: 'neglēctus, -a, -um', english: 'neglected', pos: 'adj.' },
    { latin: 'nōtus, -a, -um', english: 'familiar, well-known', pos: 'adj.' },
    { latin: 'pretiōsus, -a, -um', english: 'costly', pos: 'adj.' },
    { latin: 'sōlus, -a, -um', english: 'alone, lone, only', pos: 'adj.' },
    { latin: 'aut', english: 'or', pos: 'conjunction' },
    { latin: 'cuius', english: 'whose (sg.)', pos: 'pronoun' },
    { latin: 'eius', english: 'his, her, its', pos: 'pronoun' },
    { latin: 'propter', english: 'on account of, because of (+ acc.)', pos: 'prep.' },
    { latin: 'sēcrētō', english: 'secretly', pos: 'adv.' },
    { latin: 'sī', english: 'if', pos: 'conjunction' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PĒNSVM A',
      title: 'Respondēte Latīnē',
      instruction: 'Answer each question with a complete Latin sentence, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'Quis est Callistō?', a: 'Callistō est nympha fōrmōsa.' },
        { q: 'Quis est Ursa Minor?', a: 'Ursa Minor est Arcas, fīlius Callistūs.' },
        { q: 'Cūr Iuppiter nympham in stellās trānsfōrmāvit?', a: 'Propter īram rēgīnae deōrum Iuppiter nympham in stellās trānsfōrmāvit.' },
        { q: 'Estne Callistō fōrmōsa?', a: 'Ita, Callistō erat fōrmōsa.' },
        { q: 'Quid vestīmentum nymphae retinēbat?', a: 'Fībula vestīmentum nymphae retinēbat.' },
        { q: 'Quid capillōs neglēctōs retinēbat?', a: 'Vitta capillōs neglēctōs retinēbat.' },
        { q: 'Quid Callistō in silvīs portābat?', a: 'Callistō iaculum et sagittās portābat.' },
        { q: 'Ubi iacēbat Callistō in somnō?', a: 'Callistō in somnō in terrā herbōsā iacēbat.' },
        { q: 'Quis spectābat nympham in somnō in terrā herbōsā?', a: 'Iuppiter nympham in somnō spectābat.' },
        { q: 'Quis erat victor?', a: 'Iuppiter victor erat.' },
      ],
    },
    {
      id: 'pensum-b',
      latinLabel: 'PĒNSVM B',
      title: 'Tempus Perfectum',
      instruction: 'Complete each perfect tense form, then change the singular forms to the plural where asked.',
      type: 'fill',
      items: [
        'cūrāre: cūrāvī, {{cūrāvistī}}, {{cūrāvit}}, {{cūrāvimus}}, {{cūrāvistis}}, {{cūrāvērunt}}.',
        'ēvītāre: ēvītāvī, {{ēvītāvistī}}, {{ēvītāvit}}, {{ēvītāvimus}}, {{ēvītāvistis}}, {{ēvītāvērunt}}.',
        'tenēre: tenuī, {{tenuistī}}, {{tenuit}}, {{tenuimus}}, {{tenuistis}}, {{tenuērunt}}.',
        'habēre: habuī, {{habuistī}}, {{habuit}}, {{habuimus}}, {{habuistis}}, {{habuērunt}}.',
        'docuit → {{docuērunt}}; exercuī → {{exercuimus}}; habuit → {{habuērunt}}; iacuistī → {{iacuistis}}; prohibuī → {{prohibuimus}}.',
        'retinuit → {{retinuērunt}}; portāvī → {{portāvimus}}; appropinquāvit → {{appropinquāvērunt}}; tenuistī → {{tenuistis}}; debuit → {{debuērunt}}.',
      ],
    },
    {
      id: 'pensum-c',
      latinLabel: 'PĒNSVM C',
      title: 'Eius aut Suus; Reddite Latīnē',
      instruction: 'Choose eius or suus, then translate the English sentences into Latin.',
      type: 'questions',
      items: [
        { q: 'Callistō iaculum (eius, suum) in silvā portābat.', a: 'suum' },
        { q: 'Poēta fābulam (eius, suam) nārrāvit.', a: 'suam' },
        { q: 'Arcas est fīlius (eius, suus).', a: 'eius' },
        { q: 'Arachnē pictūrās pulchrās fōrmāvit, sed Minerva pictūrās (eius, suās) nōn amāvit.', a: 'eius' },
        { q: 'Vitta capillōs (eius, suōs) retinēbat.', a: 'eius' },
        { q: '“Look at the stars,” said the Muse.', a: '“Spectāte stellās,” dīxit Mūsa.' },
        { q: 'The Greater Bear is Callisto, once a beautiful nymph.', a: 'Ursa Māior est Callistō, ōlim nympha pulchra.' },
        { q: 'Jupiter changed the nymph and her son into stars because of the wrath of the queen of the gods.', a: 'Propter īram rēgīnae deōrum Iuppiter nympham et fīlium eius in stellās trānsfōrmāvit.' },
        { q: 'Callisto lived in Arcadia, a land dear to the god.', a: 'Callistō in Arcadiā, terrā deō cārā, habitābat.' },
        { q: 'A pin held back her garment and a fillet bound her careless locks.', a: 'Fībula vestīmentum retinēbat et vitta capillōs neglēctōs retinēbat.' },
      ],
    },
  ],
}

export default chapter
