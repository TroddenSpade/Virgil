// Capitulum V — Villa et Hortus
// Sources: Ørberg, Lingua Latina per se Illustrata, Pars I: Familia Romana (2nd ed.)
// Reading text, grammar and exercises adapted and re-typeset for the web.

const chapter = {
  number: 5,
  roman: 'V',
  slug: 'villa-et-hortus',
  latinTitle: 'VĪLLA ET HORTVS',
  title: 'The Villa and the Garden',
  tagline: 'A tour of the Roman house — and the cases that describe it.',
  status: 'complete',
  overview:
    'The scene widens from the family to the whole household: Iūlius’ country vīlla, the slaves and ' +
    'maidservants who live in it, the ātrium with its water-basin, the colonnaded garden court and the ' +
    'bedrooms. In the garden the children tease and quarrel, and the chapter ends with Mārcus and Quīntus ' +
    'splashing about in the impluvium. Through it all you learn the accusative and the ablative, the ' +
    'prepositions that take the ablative, and the difference between a command and a statement.',
  objectives: [
    'Describe a Roman vīlla, its rooms and its garden in Latin.',
    'Form the accusative singular and plural (-um / -am / -um; -os / -as / -a).',
    'Form the ablative with prepositions (in hortō, ex ātriō, cum servō).',
    'Tell a command apart from a statement (vocā! / vocāte! — vocat / vocant).',
  ],
  readings: [
    {
      id: 'villa-et-hortus',
      latinTitle: 'VĪLLA ET HORTVS',
      title: 'The Villa and the Garden',
      paragraphs: [
        'Ecce vīlla et hortus Iūliī. Iūlius in magnā vīllā habitat. Pater et māter et trēs līberī in vīllā habitant. Iūlius et Aemilia trēs līberōs habent: duōs fīliōs et ūnam fīliam — nōn duās fīliās.',
        'In vīllā multī servī habitant. Dominus eōrum est Iūlius: is multōs servōs habet. Ancillae quoque multae in vīllā habitant. Domina eārum est Aemilia: ea multās ancillās habet.',
        'Iūlius in vīllā suā habitat cum magnā familiā. Pater et māter habitant cum Mārcō et Quīntō et Iūliā. Iūlius et Aemilia in vīllā habitant cum līberīs et servīs et ancillīs.',
        'Vīlla Iūliī in magnō hortō est. In Italiā sunt multae vīllae cum magnīs hortīs. In hortīs sunt rosae et līlia. Iūlius multās rosās et multa līlia in hortō suō habet. Hortus Iūliī pulcher est, quia in eō sunt multae et pulchrae rosae līliaque.',
        'Aemilia fēmina pulchra est. Syra nōn est fēmina pulchra, neque pulcher est nāsus eius, sed foedus est.',
        'Syra, quae bona ancilla est, nāsum magnum et foedum habet. Iūlius est vir Aemiliae, fēminae pulchrae. Iūlius Aemiliam amat, quia ea pulchra et bona fēmina est. Aemilia Iūlium virum suum amat et cum eō habitat. Pater et māter līberōs suōs amant. Iūlius nōn sōlus, sed cum Aemiliā et cum magnā familiā in vīllā habitat.',
      ],
      notes: [
        { term: 'habitat', gloss: 'lives, dwells (habitare).' },
        { term: 'hortus', gloss: 'garden — vīlla in magnō hortō est.' },
        { term: 'rosae et līlia', gloss: 'roses and lilies.' },
        { term: 'pulcher ↔ foedus', gloss: 'beautiful / ugly, foul.' },
        { term: 'amat', gloss: 'loves (amare).' },
        { term: 'sōlus', gloss: 'alone: Iūlius non sōlus habitat.' },
        { term: 'cum + ablātīvō', gloss: 'cum magna familia — with the big household.' },
      ],
    },
    {
      id: 'atrium-et-peristylum',
      latinTitle: 'ĀTRIVM ET PERISTȲLVM',
      title: 'The Atrium and the Peristyle',
      paragraphs: [
        'In vīllā sunt duo ōstia: ōstium magnum et ōstium parvum. Vīlla duo ōstia et multās fenestrās habet.',
        'In vīllā Iūliī magnum ātrium est cum impluviō. Quid est in impluviō? In eō est aqua. In ātriō nūllae fenestrae sunt.',
        "Etiam peristȳlum magnum et pulchrum in vīllā est. 'Peristȳlum' est vocābulum Graecum. In vīllīs Graecīs et Rōmānīs magna et pulchra peristȳla sunt. Estne impluvium in peristȳlō? Id nōn in peristȳlō, sed in ātriō est. In peristȳlō parvus hortus est.",
        'In vīllā sunt multa cubicula. Quīntus in cubiculō parvō dormit. Estne magnum cubiculum Mārcī? Id quoque parvum est. Iūlius et Aemilia in cubiculō magnō dormiunt. Ubi dormiunt servī? Iī quoque in cubiculīs dormiunt. Suntne magna eōrum cubicula? Ea nōn magna sunt, et multī servī in ūnō cubiculō dormiunt. Etiam ancillae multae in ūnō cubiculō dormiunt, neque eae magna cubicula habent.',
      ],
      notes: [
        { term: 'ōstium', gloss: 'door, entrance.' },
        { term: 'fenestrā', gloss: 'window.' },
        { term: 'ātrium', gloss: 'the main hall of a Roman house.' },
        { term: 'impluvium', gloss: 'the water-basin in the middle of the ātrium.' },
        { term: 'peristȳlum', gloss: 'a colonnaded garden court (a Greek word).' },
        { term: 'cubiculum', gloss: 'bedroom, room.' },
        { term: 'dormit / dormiunt', gloss: 'sleeps / (they) sleep.' },
        { term: 'nūllae', gloss: 'no, not any (plural of nūlla).' },
      ],
    },
    {
      id: 'rosae-iuliae',
      latinTitle: 'ROSAE IŪLIAE',
      title: 'Julia\u2019s Roses',
      paragraphs: [
        'Aemilia in peristȳlō est. Estne sōla? Aemilia sōla nōn est: līberī cum eā in peristȳlō adsunt. Iūlius abest. Aemilia sine virō suō Iūliō in vīllā est. Ubi est Iūlius? In oppidō Tusculō est sine Aemiliā, sed cum servīs quattuor. Aemilia cum Mārcō, Quīntō Iūliāque in peristȳlō est. Iūlia rosās pulchrās in hortō videt et ab Aemiliā discēdit. Iam ea cum Aemiliā nōn est. Aemilia eam nōn videt. Puella in hortō est.',
        'Aemilia imperat: "Mārce et Quīnte! Iūliam vocāte!" Mārcus et Quīntus Iūliam vocant: "Iūlia! Venī!" sed Iūlia eōs nōn audit neque venit. Iūlia puerōs vocat: "Mārce et Quīnte! Venīte! Hīc multae rosae sunt." Puerī Iūliam audiunt, neque iī ab Aemiliā discēdunt. Quīntus: "Carpe rosās, Iūlia!" Iūlia rosās carpit et cum quīnque rosīs ex hortō venit. Iūlia: "Vidē, māter! Vidēte, puerī! Vidēte rosās meās!" Iūlia laeta est, rosae eam dēlectant.',
        'Aemilia: "Ecce puella pulchra cum rosīs pulchrīs!" Verba Aemiliae Iūliam dēlectant. Mārcus: "Rosae pulchrae sunt; puella sine rosīs pulchra nōn est!" Verba Mārcī Iūliam nōn dēlectant! Aemilia (īrāta): "Tacē, puer improbe! Iūlia puella pulchra est — cum rosīs et sine rosīs." Iūlia: "Audīte, Mārce et Quīnte!" Mārcus: "Māter nōn videt nāsum tuum foedum!" Mārcus et Quīntus rīdent: "Hahahae!" Iūlia: "Audī, mamma: puerī etiam mē rīdent!" Iūlia plōrat et cum ūnā rosā ab iīs discēdit.',
        'Aemilia: "Tacēte, puerī improbī! Nāsus Iūliae foedus nōn est. Discēdite ex peristȳlō! Sūmite cēterās rosās eāsque in aquā pōnite!" Puerī cēterās quattuor rosās sūmunt et cum iīs discēdunt. Aemilia, quae iam sōla est in peristȳlō, ancillās vocat: "Dēlia et Syra! Venīte!" Dēlia et Syra ex ātriō veniunt. Aemilia eās interrogat: "Suntne puerī in ātriō?" Dēlia respondet: "In ātriō sunt."',
        'Aemilia: "Quid agunt Mārcus et Quīntus?" Dēlia: "Puerī aquam sūmunt ex impluviō ..." Syra: "... et rosās in aquā pōnunt." Hīc domina et ancillae puerōs audiunt ex ātriō: Quīntus plōrat et Mārcus rīdet. Aemilia: "Quid iam agunt puerī? Age, Dēlia! Discēde et interrogā eōs!" Dēlia ab Aemiliā et Syrā discēdit. Aemilia Syram interrogat: "Ubi est Dāvus?" Syra respondet: "In oppidō est cum dominō."',
        'Dēlia ex ātriō venit et dominam vocat: "Venī, ō domina! Venī!" Aemilia: "Quid est, Dēlia?" Dēlia: "Quīntus est in impluviō!" Aemilia: "In impluviō? Quid agit puer in impluviō?" Dēlia: "Aquam pulsat et tē vocat." Aemilia: "Quid agit Mārcus?" Dēlia: "Is rīdet, quia Quīntus in aquā est!" Aemilia: "Ō, puer improbus est Mārcus! Agite! Iūlium vocāte, ancillae!" Syra: "Sed dominus in oppidō est." Aemilia: "Ō, iam rūrsus abest Iūlius!" Dēlia: "Age! Venī, domina, et Mārcum verberā!" Quid agit domina? Domina īrāta cum ancillīs ex peristȳlō discēdit.',
      ],
      notes: [
        { term: 'adest / abest', gloss: '(is) present / (is) absent.' },
        { term: 'sine + ablātīvō', gloss: 'sine virō suo — without her husband.' },
        { term: 'discēdit', gloss: 'goes away, departs.' },
        { term: 'carpe!', gloss: 'pick! pluck! (carpere).' },
        { term: 'dēlectant', gloss: 'please, delight.' },
        { term: 'tacē! / tacēte!', gloss: 'be quiet! (to one / to several).' },
        { term: 'age! / agite!', gloss: 'come! come on!' },
        { term: 'aquam pulsat', gloss: 'splashes the water.' },
      ],
    },
  ],
  grammar: [
    {
      id: 'accusativus',
      latinTitle: 'Accūsātīvus',
      title: 'The Accusative',
      intro:
        'The accusative is the case of the object — the person or thing that the action is done to. ' +
        'It is the case you use for counting and seeing: Iūlius duōs fīliōs habet.',
      paradigms: [
        {
          caption: 'the accusative endings',
          head: ['Genus', 'Singulāris', 'Plūrālis'],
          rows: [
            ['masculīnum (m)', '-um (dominum, hortum)', '-ōs (dominōs, hortōs)'],
            ['fēminīnum (f)', '-am (vīllam, rosam)', '-ās (vīllās, rosās)'],
            ['neutrum (n)', '-um (cubiculum)', '-a (cubicula)'],
          ],
        },
        {
          caption: 'nominative → accusative',
          head: ['Nōminātīvus', 'Accūsātīvus', 'Exemplum'],
          rows: [
            ['fīlius', 'fīlium', 'Iūlius ūnum fīlium habet.'],
            ['fīliī', 'fīliōs', 'Iūlius duōs fīliōs habet.'],
            ['fīlia', 'fīliam', 'Iūlius ūnam fīliam habet.'],
            ['cubiculum', 'cubicula', 'Vīlla multa cubicula habet.'],
          ],
        },
      ],
      points: [
        'The accusative marks the object of the verb: Iūlius Aemiliam amat — Iūlius loves Aemilia.',
        'Masculine -us → -um, plural -i → -os; feminine -a → -am, plural -ae → -as.',
        'Neuter nouns are the same in the nominative and accusative, singular and plural: cubiculum / cubicula.',
      ],
    },
    {
      id: 'ablativus',
      latinTitle: 'Ablātīvus',
      title: 'The Ablative',
      intro:
        'The ablative is the case that follows many prepositions. It answers "where? from where? with whom?", ' +
        'and on its own it can mean "by, with or from".',
      paradigms: [
        {
          caption: 'the ablative endings',
          head: ['Genus', 'Singulāris', 'Plūrālis'],
          rows: [
            ['masculīnum (m)', '-ō (in hortō, cum servō)', '-īs (in hortīs, cum servīs)'],
            ['fēminīnum (f)', '-ā (in vīllā, cum Aemilia)', '-īs (in vīllīs, cum ancillīs)'],
            ['neutrum (n)', '-ō (in oppidō, in cubiculō)', '-īs (in oppidīs, in cubiculīs)'],
          ],
        },
      ],
      points: [
        'Ablative singular: -o for masculine and neuter nouns, -a for feminine nouns.',
        'Ablative plural is always -is, whatever the gender: in hortīs, in vīllīs, in cubiculīs.',
        'The same noun may appear in different cases: vīlla (nom.), vīllam (acc.), vīlla (abl.). The preposition tells you which.',
      ],
    },
    {
      id: 'praepositiones',
      latinTitle: 'Praepositiōnēs cum Ablātīvō',
      title: 'Prepositions with the Ablative',
      intro:
        'in, ex, ab, cum and sine are the prepositions of this chapter. Each one always takes a noun ' +
        'in the ablative case.',
      paradigms: [
        {
          caption: 'prepositions with the ablative',
          head: ['Praepositiō', 'Significātiō', 'Exemplum'],
          rows: [
            ['in', 'in, on (where?)', 'in ātriō, in cubiculīs, in hortō'],
            ['ex / ē', 'out of, from', 'ex hortō, ex ātriō, ex Italiā'],
            ['ab / ā', 'from, away from', 'ab Aemiliā, ab oppidō'],
            ['cum', 'with, together with', 'cum servō, cum līberīs, cum magnā familiā'],
            ['sine', 'without', 'sine virō suō, sine rosīs'],
          ],
        },
      ],
      points: [
        'These five prepositions always take the ablative: the noun after them must be in the ablative case.',
        'in + ablative answers "where?": in vīlla habitat — he lives in the vīlla.',
        'ex and ab stand before vowels (ex ātriō, ab Aemilia); e and a before consonants (e cubiculō, a Mārcō).',
      ],
    },
    {
      id: 'imperativus',
      latinTitle: 'Imperātīvus et Indicātīvus',
      title: 'Command and Statement',
      intro:
        'A command to one person or to several is the imperative; a plain statement is the indicative. ' +
        'The ending tells you both who is addressed and whether it is an order or a fact.',
      paradigms: [
        {
          caption: 'imperative and indicative',
          head: ['Vōcālīs', 'Imperātīvus (command)', 'Indicātīvus (statement)'],
          rows: [
            ['singulāris', 'vocā! venī! tacē! discēde!', 'vocat, venit, tacet, discēdit'],
            ['plūrālis', 'vocāte! venīte! tacēte! discēdite!', 'vocant, veniunt, tacent, discēdunt'],
          ],
        },
        {
          caption: 'the endings compared',
          head: ['Ending', 'Imperātīvus singulāris', 'Imperātīvus plūrālis', 'Indicātīvus sing. / plur.'],
          rows: [
            ['-a / -ate', 'vocā!', 'vocāte!', 'vocat / vocant'],
            ['-e / -ete', 'tacē! vidē!', 'tacēte! vidēte!', 'tacet / tacent'],
            ['-ē / -īte', 'discēde!', 'discēdite!', 'discēdit / discēdunt'],
            ['-ī / -īte', 'venī!', 'venīte!', 'venit / veniunt'],
          ],
        },
      ],
      points: [
        'A command to one person is the imperative singular (Venī, Iulia!); a command to several adds -te (Venīte, puerī!).',
        'A statement uses the indicative: -t for one person, -nt for several.',
        'When you call someone by name you use the vocative: Mārce et Quīnte! — Mārcus and Quīntus!',
      ],
    },
  ],
  vocabulary: [
    { latin: 'vīlla', english: 'country house, villa', pos: 'noun (f.)' },
    { latin: 'hortus', english: 'garden', pos: 'noun (m.)' },
    { latin: 'rosa', english: 'rose', pos: 'noun (f.)' },
    { latin: 'līlium', english: 'lily', pos: 'noun (n.)' },
    { latin: 'nāsus', english: 'nose', pos: 'noun (m.)' },
    { latin: 'ōstium', english: 'door, entrance', pos: 'noun (n.)' },
    { latin: 'fenestra', english: 'window', pos: 'noun (f.)' },
    { latin: 'ātrium', english: 'atrium, hall', pos: 'noun (n.)' },
    { latin: 'impluvium', english: 'water-basin in the atrium', pos: 'noun (n.)' },
    { latin: 'aqua', english: 'water', pos: 'noun (f.)' },
    { latin: 'peristȳlum', english: 'peristyle, colonnaded garden court', pos: 'noun (n.)' },
    { latin: 'cubiculum', english: 'bedroom, room', pos: 'noun (n.)' },
    { latin: 'verbum', english: 'word', pos: 'noun (n.)' },
    { latin: 'vir', english: 'man, husband', pos: 'noun (m.)' },
    { latin: 'pulcher', english: 'beautiful, handsome', pos: 'adjective' },
    { latin: 'foedus', english: 'ugly, foul', pos: 'adjective' },
    { latin: 'sōlus', english: 'alone, only', pos: 'adjective' },
    { latin: 'Graecus', english: 'Greek', pos: 'adjective' },
    { latin: 'habitat', english: 'lives, dwells', pos: 'verb' },
    { latin: 'dormit', english: 'sleeps', pos: 'verb' },
    { latin: 'amat', english: 'loves', pos: 'verb' },
    { latin: 'imperat', english: 'commands, orders', pos: 'verb' },
    { latin: 'discēdit', english: 'departs, goes away', pos: 'verb' },
    { latin: 'carpit', english: 'picks, plucks', pos: 'verb' },
    { latin: 'pōnit', english: 'puts, places', pos: 'verb' },
    { latin: 'sūmit', english: 'takes', pos: 'verb' },
    { latin: 'dēlectat', english: 'delights, pleases', pos: 'verb' },
    { latin: 'tacet', english: 'is silent, is quiet', pos: 'verb' },
    { latin: 'abest', english: 'is absent, is away', pos: 'verb' },
    { latin: 'adest', english: 'is present', pos: 'verb' },
    { latin: 'rūrsus', english: 'again, back', pos: 'adverb' },
    { latin: 'in', english: 'in, on (+ abl.)', pos: 'preposition' },
    { latin: 'ex / e', english: 'out of, from (+ abl.)', pos: 'preposition' },
    { latin: 'ab / a', english: 'from, away from (+ abl.)', pos: 'preposition' },
    { latin: 'cum', english: 'with (+ abl.)', pos: 'preposition' },
    { latin: 'sine', english: 'without (+ abl.)', pos: 'preposition' },
    { latin: 'age! / agite!', english: 'come! come on!', pos: 'interjection' },
    { latin: 'quīnque', english: 'five', pos: 'numeral' },
    { latin: 'quattuor', english: 'four', pos: 'numeral' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PĒNSVM A',
      title: 'Fill in the endings',
      instruction: 'Complete each word with the correct ending.',
      type: 'fill',
      items: [
        'Iūlius et Aemilia in vīll{{ā}} habit{{ant}} cum līber{{īs}} et serv{{īs}}. Dominus mult{{ōs}} serv{{ōs}} et mult{{ās}} ancill{{ās}} habet.',
        'Iūlius du{{ōs}} fīli{{ōs}} et ūn{{am}} fīli{{am}} habet. Vīlla Iūliī in magn{{ō}} hort{{ō}} est. In hort{{ō}} sunt ros{{ae}} et līli{{a}}. Iūlius mult{{ās}} ros{{ās}} in hort{{ō}} su{{ō}} habet.',
        'Aemilia in peristȳl{{ō}} est cum Mārc{{ō}} et Quīnt{{ō}} et Iūli{{a}}. Iūlia mult{{ās}} ros{{ās}} in hort{{ō}} videt et ab Aemili{{ā}} discēd{{it}}.',
        'Aemilia puerīs imperat: "Mārce et Quīnte, Iūliam vocā{{tē}}!" Puerī Iūliam voc{{ant}}: "Iūlia, ven{{ī}}!" Iūlia ven{{it}} et ros{{ās}} in aqu{{ā}} pōn{{it}}.',
      ],
    },
    {
      id: 'pensum-b',
      latinLabel: 'PĒNSVM B',
      title: 'Complete the sentences',
      instruction: 'Fill each gap with the missing word.',
      type: 'fill',
      items: [
        'Iūlius in magnā {{vīllā}} habitat. Aemilia cum {{Iūliō}} habitat. Iūlius Aemiliam {{amat}}, quia Aemilia bona et {{pulchra}} fēmina est.',
        'Aemilia in peristȳlō est {{cum}} līberīs suīs, sed {{sine}} virō suō. Iūlia {{ab}} Aemiliā discēdit; iam puella in {{hortō}} est. Iūliā cum {{quīnque}} rosīs ex hortō venit. Puella laeta est: rosae eam {{dēlectant}}.',
        'Ubi est impluvium? Impluvium in {{ātriō}} est. In impluviō {{aqua}} est. In ātriō nūllae {{fenestrae}} sunt. Quīntus in {{impluviō}} est; Mārcus {{rīdet}}, quia Quīntus in aquā est.',
        'In vīllā sunt multa {{cubicula}}. Quīntus in cubiculō parvō {{dormit}}. Iūlius et Aemilia in cubiculō {{magnō}} dormiunt. Multī servī in ūnō {{cubiculō}} dormiunt.',
      ],
    },
    {
      id: 'pensum-c',
      latinLabel: 'PĒNSVM C',
      title: 'Answer in Latin',
      instruction: 'Answer each question with a full Latin sentence, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'Num Iūlius sōlus in vīllā habitat?', a: 'Iūlius nōn sōlus, sed cum magnā familiā in vīllā habitat.' },
        { q: 'Quot fīliōs et quot fīliās habent Iūlius et Aemilia?', a: 'Duōs fīliōs et ūnam fīliam habent.' },
        { q: 'Ubi est impluvium?', a: 'Impluvium in ātriō est.' },
        { q: 'Ubi dormiunt servī?', a: 'Servī in cubiculīs parvīs dormiunt.' },
        { q: 'Adestne Iūlius in peristȳlō cum Aemilia?', a: 'Iūlius nōn adest: in oppidō Tusculō est sine Aemiliā.' },
        { q: 'Ubi est Iūlius?', a: 'Iūlius in oppidō Tusculō est cum servīs quattuor.' },
        { q: 'Estne Aemilia sola in peristȳlō?', a: 'Aemilia sola nōn est: līberī cum ea adsunt.' },
        { q: 'Quid Iūlia agit in hortō?', a: 'Iūlia rosās pulchrās in hortō videt et carpit.' },
        { q: 'Quid agit Quīntus in ātriō?', a: 'Quīntus in impluviō est et aquam pulsat.' },
        { q: 'Cūr Mārcus rīdet?', a: 'Mārcus rīdet, quia Quīntus in aquā est.' },
        { q: 'Quot rosās Iūlia ex hortō fert?', a: 'Iūliā cum quīnque rosīs ex hortō venit.' },
        { q: 'Quid Aemilia puerīs imperat?', a: 'Aemilia puerīs imperat: "Sūmite cēterās rosās eāsque in aquā pōnite!"' },
      ],
    },
  ],
}

export default chapter
