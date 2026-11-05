// Capitulum II — Familia Romana
// Sources: Ørberg, Lingua Latina per se Illustrata, Pars I: Familia Romana (2nd ed.)

const chapter = {
  number: 2,
  roman: 'II',
  slug: 'familia-romana',
  latinTitle: 'FAMILIA ROMANA',
  title: 'The Roman Family',
  tagline: 'Meet the household of Iulius — and learn the genitive.',
  status: 'complete',
  overview:
    'A Roman household comes to life: Iulius the master, Aemilia his wife, their children and their slaves. ' +
    'In reading about them you learn the three genders of Latin nouns and the genitive case, which shows ' +
    'who owns or belongs to whom (servus Iulii — the slave of Iulius).',
  objectives: [
    'Name the members of a Roman family and household.',
    'Tell masculine, feminine and neuter nouns apart.',
    'Form the genitive singular and plural (-i/-orum, -ae/-arum).',
    'Ask whose? (cuius?) and how many? (quot?).',
  ],
  readings: [
    {
      id: 'familia',
      latinTitle: 'FAMILIA ROMANA',
      title: 'The Household of Iulius',
      paragraphs: [
        'Iulius vir Romanus est. Aemilia femina Romana est. Marcus est puer Romanus. Quintus quoque puer Romanus est. Iulia est puella Romana.',
        'Marcus et Quintus non viri, sed pueri sunt. Viri sunt Iulius et Medus et Davus. Aemilia et Delia et Syra sunt feminae. Estne femina Iulia? Non femina, sed parva puella est Iulia.',
        'Iulius, Aemilia, Marcus, Quintus, Iulia, Syra, Davus, Delia Medusque sunt familia Romana. Iulius pater est. Aemilia est mater. Iulius pater Marci et Quinti est. Iulius pater Iuliae quoque est. Aemilia est mater Marci et Quinti et Iuliae. Marcus filius Iulii est. Marcus filius Aemiliae est. Quintus quoque filius Iulii et Aemiliae est. Iulia est filia Iulii et Aemiliae.',
        'Quis est Marcus? Marcus puer Romanus est. Quis pater Marci est? Iulius pater Marci est. Quae est mater Marci? Mater Marci est Aemilia. Quae est Iulia? Iulia est puella Romana. Quae mater Iuliae est? Aemilia mater Iuliae est. Pater Iuliae est Iulius. Iulia filia Iulii est.',
        'Qui sunt filii Iulii? Filii Iulii sunt Marcus et Quintus. Marcus, Quintus Iuliaque sunt tres liberi. Liberi sunt filii filiaeque. Marcus et Quintus et Iulia sunt liberi Iulii et Aemiliae. In familia Iulii sunt tres liberi: duo filii et una filia.',
        'Estne Medus filius Iulii? Medus filius Iulii non est, Medus est servus Iulii. Iulius dominus Medi est. Iulius dominus servi est. Davus quoque servus est. Medus et Davus duo servi sunt. Iulius est dominus Medi et Davi. Iulius dominus servorum est et pater liberorum.',
        'Estne Delia filia Aemiliae? Delia non est filia Aemiliae, Delia ancilla Aemiliae est. Aemilia domina Deliae est. Aemilia domina ancillae est. Syra quoque ancilla est. Delia et Syra duae ancillae sunt. Aemilia domina ancillarum est.',
        'Cuius servus est Davus? Davus servus Iulii est. Cuius ancilla est Syra? Syra est ancilla Aemiliae.',
        'Quot liberi sunt in familia? In familia Iulii sunt tres liberi. Quot filii et quot filiae? Duo filii et una filia. Quot servi sunt in familia? In familia sunt centum servi. In familia Iulii sunt multi servi, pauci liberi. Iulius est dominus multorum servorum.',
        "Duo et tres numeri sunt. Centum quoque numerus est. Numerus servorum est centum. Numerus liberorum est tres. Centum est magnus numerus. Tres parvus numerus est. Numerus servorum est magnus. Numerus liberorum parvus est. In familia Iulii magnus numerus servorum, parvus numerus liberorum est.",
        'Medus servus Graecus est. Delia est ancilla Graeca. In familia Iulii sunt multi servi Graeci multaeque ancillae Graecae. Estne Aemilia femina Graeca? Aemilia non est femina Graeca, sed Romana. Iulius non vir Graecus, sed Romanus est.',
        'Sparta oppidum Graecum est. Sparta, Delphi Tusculumque tria oppida sunt: duo oppida Graeca et unum oppidum Romanum. In Graecia et in Italia magnus numerus oppidorum est. In Gallia est magnus numerus fluviorum. Fluvii Galliae magni sunt. Magnine sunt fluvii Africae? In Africa unus fluvius magnus est: Nilus; ceteri fluvii Africae parvi sunt. Suntne magnae insulae Graecae? Creta et Euboea duae insulae magnae sunt; ceterae insulae Graecae sunt parvae.',
        'Quis est Cornelius? Cornelius dominus Romanus est. Iulius et Cornelius duo domini Romani sunt. Medus non est servus Cornelii. Medus servus Iulii est.',
        "Cornelius: 'Cuius servus est Medus?' Iulius: 'Medus servus meus est.' Cornelius: 'Estne Davus servus tuus?' Iulius: 'Davus quoque servus meus est. Servi mei sunt Medus et Davus et ceteri multi...' Cornelius: 'Estne Delia ancilla tua?' Iulius: 'Delia est ancilla mea, et Syra quoque ancilla mea est. Ancillae meae sunt Delia et Syra et ceterae multae. Familia mea magna est.' Cornelius: 'Quot servi sunt in familia tua?' Iulius: 'In familia mea sunt centum servi.' Cornelius: 'Quid?' Iulius: 'Numerus servorum meorum est centum.' Cornelius: 'Centum servi! Magnus est numerus servorum tuorum!'",
      ],
      notes: [
        { term: 'unus vir / duo viri', gloss: 'unus puer; duo pueri.' },
        { term: '-que = et', gloss: 'Medusque = et Medus; multaeque ancillae = et multae ancillae.' },
        { term: 'cuius?', gloss: 'Cuius servus est Davus? — Davus servus Iulii est.' },
        { term: 'quot?', gloss: 'Quot liberi sunt? — Duo filii et una filia.' },
        { term: 'meus -a -um', gloss: 'my; tuus -a -um — your.' },
        { term: 'duo / duae / duo', gloss: 'duo servi, duae ancillae, duo oppida.' },
        { term: 'tres / tria', gloss: 'tres liberi, tres litterae, tria oppida.' },
      ],
    },
    {
      id: 'liber-tuus',
      latinTitle: 'LIBER TVVS LATINVS',
      title: 'Your Latin Book',
      paragraphs: [
        "Ecce duo libri Latini: liber antiquus et liber novus. LINGVA LATINA est primus liber tuus Latinus. Titulus libri tui est 'LINGVA LATINA'. Liber tuus non antiquus, sed novus est.",
        "In LINGVA LATINA sunt multae paginae et multa capitula: capitulum primum, secundum, tertium, cetera. 'IMPERIVM ROMANVM' est titulus capituli primi. Titulus capituli secundi est 'FAMILIA ROMANA'. In capitulo secundo sunt sex paginae. In pagina prima capituli secundi multa vocabula nova sunt: vir, femina, puer, puella, familia, cetera. Numerus vocabulorum Latinorum magnus est!",
      ],
      notes: [
        { term: 'liber novus ↔ antiquus', gloss: 'a new book / an old book.' },
        { term: 'pagina', gloss: 'a page of a book.' },
        { term: 'titulus', gloss: 'the title of a book or chapter.' },
      ],
    },
  ],
  grammar: [
    {
      id: 'genera',
      latinTitle: 'Masculinum, Femininum, Neutrum',
      title: 'The Three Genders',
      intro: 'Every Latin noun belongs to one of three genders. In this chapter the ending usually tells you which.',
      paradigms: [
        {
          caption: 'gender by ending',
          head: ['Genus', 'Typical ending', 'Exempla'],
          rows: [
            ['Masculinum (m)', '-us (-er)', 'filius, dominus, puer, vir, fluvius, numerus, liber, titulus'],
            ['Femininum (f)', '-a', 'femina, puella, filia, domina, insula, provincia, littera, familia, pagina'],
            ['Neutrum (n)', '-um', 'oppidum, imperium, vocabulum, capitulum, exemplum, pensum'],
          ],
        },
      ],
      points: [
        'Masculine nouns are mostly persons and things ending in -us: servus, dominus, fluvius.',
        'Feminine nouns usually end in -a: ancilla, insula, familia.',
        'Neuter nouns usually end in -um: oppidum, vocabulum. Their plural ends in -a.',
      ],
    },
    {
      id: 'genetivus',
      latinTitle: 'Genetivus',
      title: 'The Genitive: "of..."',
      intro:
        'The genitive answers the question cuius? (whose?). It is the case of the owner: ' +
        'servus Iulii = the slave of Iulius, Iulius\u2019s slave.',
      paradigms: [
        {
          caption: 'masculine (m)',
          head: ['', 'Singularis', 'Pluralis'],
          rows: [
            ['dominus', 'dominus servi', 'dominus servorum'],
            ['servus', 'servus Davi', 'servus Davi et Medi'],
          ],
        },
        {
          caption: 'feminine (f)',
          head: ['', 'Singularis', 'Pluralis'],
          rows: [
            ['domina', 'domina ancillae', 'domina ancillarum'],
            ['ancilla', 'ancilla Syrae', 'ancilla Syrae et Deliae'],
          ],
        },
        {
          caption: 'neuter (n)',
          head: ['', 'Singularis', 'Pluralis'],
          rows: [
            ['vocabulum', 'prima littera vocabuli', 'numerus vocabulorum'],
          ],
        },
      ],
      points: [
        'Genitive singular: -i (m/n), -ae (f). Genitive plural: -orum (m/n), -arum (f).',
        'The genitive is also the form under which nouns are listed in a dictionary: servus, servi; ancilla, ancillae.',
      ],
    },
  ],
  vocabulary: [
    { latin: 'vir', english: 'man', pos: 'noun (m.)' },
    { latin: 'femina', english: 'woman', pos: 'noun (f.)' },
    { latin: 'puer', english: 'boy', pos: 'noun (m.)' },
    { latin: 'puella', english: 'girl', pos: 'noun (f.)' },
    { latin: 'familia', english: 'household, family', pos: 'noun (f.)' },
    { latin: 'pater', english: 'father', pos: 'noun (m.)' },
    { latin: 'mater', english: 'mother', pos: 'noun (f.)' },
    { latin: 'filius', english: 'son', pos: 'noun (m.)' },
    { latin: 'filia', english: 'daughter', pos: 'noun (f.)' },
    { latin: 'liberi', english: 'children (free-born)', pos: 'noun (m. pl.)' },
    { latin: 'servus', english: 'slave, servant', pos: 'noun (m.)' },
    { latin: 'dominus', english: 'master, lord', pos: 'noun (m.)' },
    { latin: 'ancilla', english: 'maidservant', pos: 'noun (f.)' },
    { latin: 'domina', english: 'mistress, lady', pos: 'noun (f.)' },
    { latin: 'liber', english: 'book', pos: 'noun (m.)' },
    { latin: 'titulus', english: 'title', pos: 'noun (m.)' },
    { latin: 'pagina', english: 'page', pos: 'noun (f.)' },
    { latin: 'antiquus', english: 'old, ancient', pos: 'adjective' },
    { latin: 'novus', english: 'new', pos: 'adjective' },
    { latin: 'ceteri', english: 'the rest, the others', pos: 'adjective (pl.)' },
    { latin: 'meus', english: 'my', pos: 'adjective' },
    { latin: 'tuus', english: 'your (of one person)', pos: 'adjective' },
    { latin: 'centum', english: 'a hundred', pos: 'numeral' },
    { latin: 'duae', english: 'two (fem.)', pos: 'numeral' },
    { latin: 'tria', english: 'three (neut.)', pos: 'numeral' },
    { latin: '-que', english: 'and (attached to a word)', pos: 'enclitic' },
    { latin: 'quis?', english: 'who? (m. sg.)', pos: 'pronoun' },
    { latin: 'quae?', english: 'who? (f. sg.)', pos: 'pronoun' },
    { latin: 'qui?', english: 'who? (m. pl.)', pos: 'pronoun' },
    { latin: 'cuius?', english: 'whose?', pos: 'pronoun' },
    { latin: 'quot?', english: 'how many?', pos: 'pronoun' },
    { latin: 'masculinum', english: 'masculine', pos: 'adjective' },
    { latin: 'femininum', english: 'feminine', pos: 'adjective' },
    { latin: 'neutrum', english: 'neuter', pos: 'adjective' },
    { latin: 'genetivus', english: 'genitive', pos: 'noun (m.)' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PENSVM A',
      title: 'Fill in the endings',
      instruction: 'Add the ending each word needs.',
      type: 'fill',
      items: [
        'Marcus fili{{us}} Iuli{{i}} est. Iulia fili{{a}} Iuli{{i}} est. Iulius est vir Roman{{us}}. Aemilia femin{{a}} Roman{{a}} est. Iulius domin{{us}}, Aemilia domin{{a}} est. Medus serv{{us}} Graec{{us}} est, Delia est ancill{{a}} Graec{{a}}. Sparta oppid{{um}} Graec{{um}} est.',
        'Iulius pater Marc{{i}} est. Marcus est filius Iuli{{i}} et Aemili{{ae}}. Medus servus Iuli{{i}} est: Iulius est dominus serv{{i}}. Iulius dominus Med{{i}} et Dav{{i}} est: Iulius dominus serv{{orum}} est. Numerus serv{{orum}} magnus est. Delia est ancilla Aemili{{ae}}: Aemilia domin{{a}} ancill{{ae}} est. Aemilia domina Deli{{ae}} et Syr{{ae}} est: Aemilia domina ancill{{arum}} est.',
        'In familia Iuli{{i}} est magnus numerus serv{{orum}} et ancill{{arum}}. Aemilia mater Marc{{i}} et Quint{{i}} et Iuli{{ae}} est. Marcus, Quintus Iuliaque sunt liberi Iuli{{i}} et Aemili{{ae}}. Numerus liber{{orum}} est tres. Numerus serv{{orum}} est centum.',
        'In pagina prima capitul{{i}} secund{{i}} multa vocabula nova sunt. Numerus capitul{{orum}} non parvus est.',
      ],
    },
    {
      id: 'pensum-b',
      latinLabel: 'PENSVM B',
      title: 'Complete the sentences',
      instruction: 'Fill each gap with the correct word.',
      type: 'fill',
      items: [
        'Marcus puer Roman{{us}} est. Iulius vir Roman{{us}} est. Aemilia est femin{{a}} Roman{{a}}. Iulius est pater Marc{{i}} et Quint{{i}} et Iuli{{ae}}. In familia Iulii sunt tres liberi: duo filii et una filia. Mater liberorum est Aemilia. Cuius servus est Davus? Davus est servus Iuli{{i}}. Iulius dominus Dav{{i}} est. Quae est Syra? Syra ancilla Aemili{{ae}} est. Aemilia est domina Syr{{ae}}.',
        "Cornelius: 'Quot servi sunt in familia tua?' Iulius: 'In familia mea sunt centum servi.' Cornelius: 'Familia tua magna est!' 'LINGVA LATINA' est titulus libr{{i}} tui Latini.",
      ],
    },
    {
      id: 'pensum-c',
      latinLabel: 'PENSVM C',
      title: 'Answer in Latin',
      instruction: 'Answer each question with a full Latin sentence, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'Quis est Quintus?', a: 'Quintus est puer Romanus, filius Iulii.' },
        { q: 'Qui sunt Medus et Davus?', a: 'Medus et Davus servi Iulii sunt.' },
        { q: 'Marcusne quoque servus Iulii est?', a: 'Marcus servus non est, sed filius Iulii est.' },
        { q: 'Cuius filia est Iulia?', a: 'Iulia filia Iulii et Aemiliae est.' },
        { q: 'Quot liberi sunt in familia Iulii?', a: 'Tres liberi sunt: duo filii et una filia.' },
        { q: 'Quot servi in familia sunt?', a: 'In familia sunt centum servi.' },
        { q: 'Num Syra domina est?', a: 'Syra domina non est, sed ancilla Aemiliae est.' },
        { q: 'Quae est domina ancillarum?', a: 'Aemilia domina ancillarum est.' },
        { q: 'Estne Cornelius vir Graecus?', a: 'Cornelius vir Romanus est, non Graecus.' },
        { q: "Num 'puella' vocabulum masculinum est?", a: "'Puella' vocabulum femininum est." },
      ],
    },
  ],
}

export default chapter
