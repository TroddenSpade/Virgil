// Capitulum II — Familia Romana
// Sources: Ørberg, Lingua Latina per se Illustrata, Pars I: Familia Romana (2nd ed.)

const chapter = {
  number: 2,
  roman: 'II',
  slug: 'familia-romana',
  latinTitle: 'FAMILIA RŌMĀNA',
  title: 'The Roman Family',
  tagline: 'Meet the household of Iūlius — and learn the genitive.',
  status: 'complete',
  overview:
    'A Roman household comes to life: Iūlius the master, Aemilia his wife, their children and their slaves. ' +
    'In reading about them you learn the three genders of Latin nouns and the genitive case, which shows ' +
    'who owns or belongs to whom (servus Iūliī — the slave of Iūlius).',
  objectives: [
    'Name the members of a Roman family and household.',
    'Tell masculine, feminine and neuter nouns apart.',
    'Form the genitive singular and plural (-i/-orum, -ae/-arum).',
    'Ask whose? (cuius?) and how many? (quot?).',
  ],
  readings: [
    {
      id: 'familia',
      latinTitle: 'FAMILIA RŌMĀNA',
      title: 'The Household of Iulius',
      paragraphs: [
        'Iūlius vir Rōmānus est. Aemilia fēmina Rōmāna est. Mārcus est puer Rōmānus. Quīntus quoque puer Rōmānus est. Iūlia est puella Rōmāna.',
        'Mārcus et Quīntus nōn virī, sed puerī sunt. Virī sunt Iūlius et Mēdus et Dāvus. Aemilia et Dēlia et Syra sunt fēminae. Estne fēmina Iūlia? Nōn fēmina, sed parva puella est Iūlia.',
        'Iūlius, Aemilia, Mārcus, Quīntus, Iūlia, Syra, Dāvus, Dēlia Mēdusque sunt familia Rōmāna. Iūlius pater est. Aemilia est māter. Iūlius pater Mārcī et Quīntī est. Iūlius pater Iūliae quoque est. Aemilia est māter Mārcī et Quīntī et Iūliae. Mārcus fīlius Iūliī est. Mārcus fīlius Aemiliae est. Quīntus quoque fīlius Iūliī et Aemiliae est. Iūlia est fīlia Iūliī et Aemiliae.',
        'Quis est Mārcus? Mārcus puer Rōmānus est. Quis pater Mārcī est? Iūlius pater Mārcī est. Quae est māter Mārcī? Māter Mārcī est Aemilia. Quae est Iūlia? Iūlia est puella Rōmāna. Quae māter Iūliae est? Aemilia māter Iūliae est. Pater Iūliae est Iūlius. Iūlia fīlia Iūliī est.',
        'Quī sunt fīliī Iūliī? Fīliī Iūliī sunt Mārcus et Quīntus. Mārcus, Quīntus Iūliaque sunt trēs līberī. Līberī sunt fīliī fīliaeque. Mārcus et Quīntus et Iūlia sunt līberī Iūliī et Aemiliae. In familiā Iūliī sunt trēs līberī: duo fīliī et ūna fīlia.',
        'Estne Mēdus fīlius Iūliī? Mēdus fīlius Iūliī nōn est, Mēdus est servus Iūliī. Iūlius dominus Mēdī est. Iūlius dominus servī est. Dāvus quoque servus est. Mēdus et Dāvus duo servī sunt. Iūlius est dominus Mēdī et Dāvī. Iūlius dominus servōrum est et pater līberōrum.',
        'Estne Dēlia fīlia Aemiliae? Dēlia nōn est fīlia Aemiliae, Dēlia ancilla Aemiliae est. Aemilia domina Dēliae est. Aemilia domina ancillae est. Syra quoque ancilla est. Dēlia et Syra duae ancillae sunt. Aemilia domina ancillārum est.',
        'Cuius servus est Dāvus? Dāvus servus Iūliī est. Cuius ancilla est Syra? Syra est ancilla Aemiliae.',
        'Quot līberī sunt in familiā? In familiā Iūliī sunt trēs līberī. Quot fīliī et quot fīliae? Duo fīliī et ūna fīlia. Quot servī sunt in familiā? In familiā sunt centum servī. In familiā Iūliī sunt multī servī, paucī līberī. Iūlius est dominus multōrum servōrum.',
        'Duo et trēs numerī sunt. Centum quoque numerus est. Numerus servōrum est centum. Numerus līberōrum est trēs. Centum est magnus numerus. Trēs parvus numerus est. Numerus servōrum est magnus. Numerus līberōrum parvus est. In familiā Iūliī magnus numerus servōrum, parvus numerus līberōrum est.',
        'Mēdus servus Graecus est. Dēlia est ancilla Graeca. In familiā Iūliī sunt multī servī Graecī multaeque ancillae Graecae. Estne Aemilia fēmina Graeca? Aemilia nōn est fēmina Graeca, sed Rōmāna. Iūlius nōn vir Graecus, sed Rōmānus est.',
        'Sparta oppidum Graecum est. Sparta, Delphī Tusculumque tria oppida sunt: duo oppida Graeca et ūnum oppidum Rōmānum. In Graeciā et in Italiā magnus numerus oppidōrum est. In Galliā est magnus numerus fluviōrum. Fluviī Galliae magnī sunt. Magnīne sunt fluviī Āfricae? In Āfricā ūnus fluvius magnus est: Nīlus; cēterī fluviī Āfricae parvī sunt. Suntne magnae īnsulae Graecae? Crēta et Euboea duae īnsulae magnae sunt; cēterae īnsulae Graecae sunt parvae.',
        'Quis est Cornēlius? Cornēlius dominus Rōmānus est. Iūlius et Cornēlius duo dominī Rōmānī sunt. Mēdus nōn est servus Cornēliī. Mēdus servus Iūliī est.',
        "Cornēlius: 'Cuius servus est Mēdus?' Iūlius: 'Mēdus servus meus est.' Cornēlius: 'Estne Dāvus servus tuus?' Iūlius: 'Dāvus quoque servus meus est. Servī meī sunt Mēdus et Dāvus et cēterī multī...' Cornēlius: 'Estne Dēlia ancilla tua?' Iūlius: 'Dēlia est ancilla mea, et Syra quoque ancilla mea est. Ancillae meae sunt Dēlia et Syra et cēterae multae. Familia mea magna est.' Cornēlius: 'Quot servī sunt in familiā tuā?' Iūlius: 'In familiā meā sunt centum servī.' Cornēlius: 'Quid?' Iūlius: 'Numerus servōrum meōrum est centum.' Cornēlius: 'Centum servī! Magnus est numerus servōrum tuōrum!'",
      ],
      notes: [
        { term: 'ūnus vir / duo virī', gloss: 'ūnus puer; duo puerī.' },
        { term: '-que = et', gloss: 'Mēdusque = et Mēdus; multaeque ancillae = et multae ancillae.' },
        { term: 'cuius?', gloss: 'Cuius servus est Dāvus? — Dāvus servus Iūliī est.' },
        { term: 'quot?', gloss: 'Quot līberī sunt? — Duo fīliī et ūna fīlia.' },
        { term: 'meus -a -um', gloss: 'my; tuus -a -um — your.' },
        { term: 'duo / duae / duo', gloss: 'duo servī, duae ancillae, duo oppida.' },
        { term: 'trēs / tria', gloss: 'trēs līberī, trēs litterae, tria oppida.' },
      ],
    },
    {
      id: 'liber-tuus',
      latinTitle: 'LIBER TVVS LATĪNVS',
      title: 'Your Latin Book',
      paragraphs: [
        "Ecce duo librī Latīnī: liber antīquus et liber novus. LINGVA LATĪNĀ est prīmus liber tuus Latīnus. Titulus librī tuī est 'LINGVA LATINA'. Liber tuus nōn antīquus, sed novus est.",
        "In LINGVĀ LATĪNĀ sunt multae pāginae et multa capitula: capitulum prīmum, secundum, tertium, cētera. 'IMPERIVM ROMANVM' est titulus capitulī prīmī. Titulus capitulī secundī est 'FAMILIA RŌMĀNA'. In capitulō secundō sunt sex pāginae. In pāginā prīmā capitulī secundī multa vocābula nova sunt: vir, fēmina, puer, puella, familia, cētera. Numerus vocābulōrum Latīnōrum magnus est!",
      ],
      notes: [
        { term: 'liber novus ↔ antīquus', gloss: 'a new book / an old book.' },
        { term: 'pāginā', gloss: 'a page of a book.' },
        { term: 'titulus', gloss: 'the title of a book or chapter.' },
      ],
    },
  ],
  grammar: [
    {
      id: 'genera',
      latinTitle: 'Masculīnum, Fēminīnum, Neutrum',
      title: 'The Three Genders',
      intro: 'Every Latin noun belongs to one of three genders. In this chapter the ending usually tells you which.',
      paradigms: [
        {
          caption: 'gender by ending',
          head: ['Genus', 'Typical ending', 'Exempla'],
          rows: [
            ['Masculīnum (m)', '-us (-er)', 'fīlius, dominus, puer, vir, fluvius, numerus, liber, titulus'],
            ['Fēminīnum (f)', '-a', 'fēmina, puella, fīlia, domina, īnsula, prōvincia, littera, familia, pāgina'],
            ['Neutrum (n)', '-um', 'oppidum, imperium, vocābulum, capitulum, exemplum, pēnsum'],
          ],
        },
      ],
      points: [
        'Masculine nouns are mostly persons and things ending in -us: servus, dominus, fluvius.',
        'Feminine nouns usually end in -a: ancilla, īnsula, familia.',
        'Neuter nouns usually end in -um: oppidum, vocābulum. Their plural ends in -a.',
      ],
    },
    {
      id: 'genetivus',
      latinTitle: 'Genetīvus',
      title: 'The Genitive: "of..."',
      intro:
        'The genitive answers the question cuius? (whose?). It is the case of the owner: ' +
        'servus Iūliī = the slave of Iūlius, Iūlius’s slave.',
      paradigms: [
        {
          caption: 'masculine (m)',
          head: ['', 'Singulāris', 'Plūrālis'],
          rows: [
            ['dominus', 'dominus servī', 'dominus servōrum'],
            ['servus', 'servus Dāvī', 'servus Dāvī et Mēdī'],
          ],
        },
        {
          caption: 'feminine (f)',
          head: ['', 'Singulāris', 'Plūrālis'],
          rows: [
            ['dominā', 'domina ancillae', 'dominā ancillārum'],
            ['ancillā', 'ancilla Syrae', 'ancilla Syrae et Dēliae'],
          ],
        },
        {
          caption: 'neuter (n)',
          head: ['', 'Singulāris', 'Plūrālis'],
          rows: [
            ['vocābulum', 'prīma littera vocābulī', 'numerus vocābulōrum'],
          ],
        },
      ],
      points: [
        'Genitive singular: -i (m/n), -ae (f). Genitive plural: -orum (m/n), -arum (f).',
        'The genitive is also the form under which nouns are listed in a dictionary: servus, servī; ancilla, ancillae.',
      ],
    },
  ],
  vocabulary: [
    { latin: 'vir', english: 'man', pos: 'noun (m.)' },
    { latin: 'fēmina', english: 'woman', pos: 'noun (f.)' },
    { latin: 'puer', english: 'boy', pos: 'noun (m.)' },
    { latin: 'puella', english: 'girl', pos: 'noun (f.)' },
    { latin: 'familia', english: 'household, family', pos: 'noun (f.)' },
    { latin: 'pater', english: 'father', pos: 'noun (m.)' },
    { latin: 'māter', english: 'mother', pos: 'noun (f.)' },
    { latin: 'fīlius', english: 'son', pos: 'noun (m.)' },
    { latin: 'fīlia', english: 'daughter', pos: 'noun (f.)' },
    { latin: 'līberī', english: 'children (free-born)', pos: 'noun (m. pl.)' },
    { latin: 'servus', english: 'slave, servant', pos: 'noun (m.)' },
    { latin: 'dominus', english: 'master, lord', pos: 'noun (m.)' },
    { latin: 'ancilla', english: 'maidservant', pos: 'noun (f.)' },
    { latin: 'domina', english: 'mistress, lady', pos: 'noun (f.)' },
    { latin: 'liber', english: 'book', pos: 'noun (m.)' },
    { latin: 'titulus', english: 'title', pos: 'noun (m.)' },
    { latin: 'pāgina', english: 'page', pos: 'noun (f.)' },
    { latin: 'antīquus', english: 'old, ancient', pos: 'adjective' },
    { latin: 'novus', english: 'new', pos: 'adjective' },
    { latin: 'cēterī', english: 'the rest, the others', pos: 'adjective (pl.)' },
    { latin: 'meus', english: 'my', pos: 'adjective' },
    { latin: 'tuus', english: 'your (of one person)', pos: 'adjective' },
    { latin: 'centum', english: 'a hundred', pos: 'numeral' },
    { latin: 'duae', english: 'two (fem.)', pos: 'numeral' },
    { latin: 'tria', english: 'three (neut.)', pos: 'numeral' },
    { latin: '-que', english: 'and (attached to a word)', pos: 'enclitic' },
    { latin: 'quis?', english: 'who? (m. sg.)', pos: 'pronoun' },
    { latin: 'quae?', english: 'who? (f. sg.)', pos: 'pronoun' },
    { latin: 'quī?', english: 'who? (m. pl.)', pos: 'pronoun' },
    { latin: 'cuius?', english: 'whose?', pos: 'pronoun' },
    { latin: 'quot?', english: 'how many?', pos: 'pronoun' },
    { latin: 'masculīnum', english: 'masculine', pos: 'adjective' },
    { latin: 'fēminīnum', english: 'feminine', pos: 'adjective' },
    { latin: 'neutrum', english: 'neuter', pos: 'adjective' },
    { latin: 'genetīvus', english: 'genitive', pos: 'noun (m.)' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PĒNSVM A',
      title: 'Fill in the endings',
      instruction: 'Add the ending each word needs.',
      type: 'fill',
      items: [
        'Mārcus fīli{{us}} Iūli{{ī}} est. Iūlia fīli{{a}} Iūli{{ī}} est. Iūlius est vir Rōmān{{us}}. Aemilia fēmin{{a}} Rōmān{{a}} est. Iūlius domin{{us}}, Aemilia domin{{a}} est. Mēdus serv{{us}} Graec{{us}} est, Dēlia est ancill{{a}} Graec{{a}}. Sparta oppid{{um}} Graec{{um}} est.',
        'Iūlius pater Mārc{{ī}} est. Mārcus est fīlius Iūli{{ī}} et Aemili{{ae}}. Mēdus servus Iūli{{ī}} est: Iūlius est dominus serv{{ī}}. Iūlius dominus Mēd{{ī}} et Dāv{{ī}} est: Iūlius dominus serv{{ōrum}} est. Numerus serv{{ōrum}} magnus est. Dēlīā est ancilla Aemili{{ae}}: Aemilia domin{{a}} ancill{{ae}} est. Aemiliā domina Dēli{{ae}} et Syr{{ae}} est: Aemilia domina ancill{{ārum}} est.',
        'In familiā Iūli{{ī}} est magnus numerus serv{{ōrum}} et ancill{{ārum}}. Aemilia māter Mārc{{ī}} et Quīnt{{ī}} et Iūli{{ae}} est. Mārcus, Quīntus Iūliaque sunt līberī Iūli{{ī}} et Aemili{{ae}}. Numerus līber{{ōrum}} est trēs. Numerus serv{{ōrum}} est centum.',
        'In pāginā prīma capitul{{ī}} secund{{ī}} multa vocābula nova sunt. Numerus capitul{{ōrum}} nōn parvus est.',
      ],
    },
    {
      id: 'pensum-b',
      latinLabel: 'PĒNSVM B',
      title: 'Complete the sentences',
      instruction: 'Fill each gap with the correct word.',
      type: 'fill',
      items: [
        'Mārcus puer Rōmān{{us}} est. Iūlius vir Rōmān{{us}} est. Aemilia est fēmin{{a}} Rōmān{{a}}. Iūlius est pater Mārc{{ī}} et Quīnt{{ī}} et Iūli{{ae}}. In familiā Iūliī sunt trēs līberī: duo fīliī et ūna fīlia. Māter līberōrum est Aemilia. Cuius servus est Dāvus? Dāvus est servus Iūli{{ī}}. Iūlius dominus Dāv{{ī}} est. Quae est Syrā? Syra ancilla Aemili{{ae}} est. Aemilia est domina Syr{{ae}}.',
        "Cornēlius: 'Quot servī sunt in familiā tuā?' Iūlius: 'In familiā meā sunt centum servī.' Cornēlius: 'Familia tua magna est!' 'LINGVA LATĪNĀ' est titulus libr{{ī}} tuī Latīnī.",
      ],
    },
    {
      id: 'pensum-c',
      latinLabel: 'PĒNSVM C',
      title: 'Answer in Latin',
      instruction: 'Answer each question with a full Latin sentence, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'Quis est Quīntus?', a: 'Quīntus est puer Rōmānus, fīlius Iūliī.' },
        { q: 'Quī sunt Mēdus et Dāvus?', a: 'Mēdus et Dāvus servī Iūliī sunt.' },
        { q: 'Mārcusne quoque servus Iūliī est?', a: 'Mārcus servus nōn est, sed fīlius Iūliī est.' },
        { q: 'Cuius fīlia est Iūlia?', a: 'Iūlia fīlia Iūliī et Aemiliae est.' },
        { q: 'Quot līberī sunt in familiā Iūliī?', a: 'Trēs līberī sunt: duo fīliī et ūna fīlia.' },
        { q: 'Quot servī in familiā sunt?', a: 'In familiā sunt centum servī.' },
        { q: 'Num Syra domina est?', a: 'Syra domina nōn est, sed ancilla Aemiliae est.' },
        { q: 'Quae est domina ancillārum?', a: 'Aemilia domina ancillārum est.' },
        { q: 'Estne Cornēlius vir Graecus?', a: 'Cornēlius vir Rōmānus est, nōn Graecus.' },
        { q: "Num 'puella' vocābulum masculīnum est?", a: "'Puella' vocābulum fēminīnum est." },
      ],
    },
  ],
}

export default chapter
