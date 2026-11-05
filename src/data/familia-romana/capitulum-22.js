// Capitulum XXII — Cave Canem
// Sources: Ørberg, Lingua Latina per se Illustrata, Pars I: Familia Romana (2nd ed.)
// Reading text, grammar and exercises adapted and re-typeset for the web.

const chapter = {
  number: 22,
  roman: 'XXII',
  slug: 'cave-canem',
  latinTitle: 'CAVE CANEM',
  title: 'Beware of the Dog',
  tagline:
    'A doorkeeper, a chained dog, and a postman who will not be kept out — plus the supine.',
  status: 'complete',
  overview:
    'The door of the villa has two leaves and a threshold with SALVE written on it, and the ianitor ' +
    'guards it together with a dog as fierce as a wolf. When the postman Tlepolemus arrives out of ' +
    'the rain, the doorkeeper dawdles and the dog breaks its chain; the messenger is barked at, ' +
    'terrified and mocked before he can hand over his letter. Through the story you meet the supine: ' +
    'the form in -tum that names a purpose after verbs of going (lavatum eunt) and the form in -tu ' +
    'used with facilis and difficilis (facile dictu).',
  objectives: [
    'Read the story of the doorkeeper and the postman aloud.',
    'Recognise and form the supine in -tum after verbs of motion: ire, venire, mittere.',
    'Recognise the supine in -tu with adjectives such as facilis and difficilis.',
    'Learn the vocabulary of the Roman door, its hinge, chain and materials.',
    'Follow a dialogue and answer questions about what the characters do and say.',
  ],
  readings: [
    {
      id: 'ianua-et-ostiarius',
      latinTitle: 'IANVA ET OSTIARIVS',
      title: 'The Door and the Doorkeeper',
      paragraphs: [
        'Ianua villae e duabus foribus constat. Sub foribus est limen, in quo SALVE scriptum est. ' +
          'Foris duos cardines habet, in quibus verti potest; cum foris in cardinibus vertitur, ianua aperitur aut clauditur.',
        'Servus cuius officium est fores aperire et claudere ac villam domini custodire, ostiarius vel ianitor appellatur.',
        'Si quis villam intrare vult, ianuam pulsat et extra ianuam exspectat, dum ianitor fores aperit eumque in villam admittit. ' +
          'Ianitor intra ianuam sedet cum cane, qui prope tam ferox est quam lupus; itaque necesse est eum catena vincire. ' +
          'Antea domini severi non solum canes, sed etiam ianitores suos catenis vinciebant.',
        'Catena qua canis vincitur ex ferro facta est. Catena constat e multis anulis ferreis, qui inter se coniunguntur. ' +
          'Anuli, quibus digiti ornantur, non ex ferro, sed ex auro facti sunt. Aurum est magni pretii sicut gemmae. ' +
          'Anulus aureus multo pulchrior est quam anulus ferreus.',
        'Fores e ligno factae sunt sicut tabulae. Lignum est materia dura, sed minus dura quam ferrum. ' +
          'Qui res ferreas vel ligneas facit, faber appellatur. Deus fabrorum est Vulcanus.',
      ],
      notes: [
        { term: 'ianua / foris', gloss: 'the door / a door-leaf; fores (pl.) = the double doors.' },
        { term: 'cardo', gloss: 'a hinge — the foris turns (vertitur) on its cardines.' },
        { term: 'limen', gloss: 'the threshold, the stone under the door.' },
        { term: 'ostiarius / ianitor', gloss: 'the doorkeeper; ianitor is the commoner word.' },
        { term: 'catena / vincire', gloss: 'a chain / to chain, to tie up.' },
        { term: 'anulus', gloss: 'a (finger-)ring; a chain is many anuli joined together.' },
        { term: 'faber', gloss: 'a craftsman, a smith — one who works in iron or wood.' },
        { term: 'tam ... quam', gloss: 'as ... as: tam ferox quam lupus = as fierce as a wolf.' },
      ],
    },
    {
      id: 'tabellarius-ad-ianuam',
      latinTitle: 'TABELLARIVS AD IANVAM',
      title: 'The Postman at the Door',
      paragraphs: [
        'Ianua clausa est. Ianitor, qui fores clausit postquam Marcus intravit, iam rursus dormit! ' +
          'Ianitore dormiente, canis vigilans ianuam custodit.',
        'Extra fores stat tabellarius (sic appellatur servus qui epistulas fert, nam antea in tabellis scribebantur epistulae). ' +
          'Is baculo ligneo fores pulsat atque clamat: "Heus! Aperi hanc ianuam! Num quis hic est? Num quis hanc aperit ianuam? Heus tu, ianitor! Quin aperis? Dormisne?"',
        'Cane latrante ianitor e somno excitatur. Tabellarius iterum fores pulsat magna voce clamans: ' +
          '"Heus, ianitor! Quin me admittis? Putasne me hostem esse? Ego non venio villam oppugnatum sicut hostis, nec pecuniam postulatum venio."',
        'Tandem surgit ianitor. "Quis fores nostras sic pulsat?" inquit. ' +
          'Tabellarius (extra ianuam): "Ego pulso." Ianitor (intra ianuam): "Quis \'ego\'? Quid est tibi nomen? Unde venis? Quid vis aut quem quaeris?"',
        'Tabellarius: "Multa simul rogitas. Admitte me! Postea respondebo ad omnia." ' +
          'Ianitor: "Responde prius! Postea admitteris."',
        'Tabellarius: "Nomen meum non est facile dictu: Tlepolemus nominor." ' +
          'Ianitor: "Quid dicis? Cleopolimus? Vox tua difficilis est auditu, quod fores intersunt." ' +
          'Tabellarius: "Mihi nomen est Tlepolemus, sicut iam dictum est. Tusculo venio. Erum tuum quaero."',
        'Ianitor: "Si erum salutatum venis, melius est alio tempore venire, nam hac hora erus meus dormitum ire solet: ' +
          'post brevem somnum ambulatum exibit, deinde lavatum ibit." ' +
          'Tlepolemus: "Si quis per hunc imbrem ambulat, non opus est postea lavatum ire! At non venio salutatum. Tabellarius sum."',
      ],
      notes: [
        { term: 'tabellarius', gloss: 'the letter-carrier, "postman" (from tabella, a writing-tablet).' },
        { term: 'quin ...?', gloss: 'why not ...? a brisk way of urging someone to act.' },
        { term: 'venio oppugnatum / postulatum', gloss: 'I come to attack / to demand — supines in -tum showing purpose.' },
        { term: 'salutatum venis', gloss: 'you come to greet (the master) — supine after venire.' },
        { term: 'dormitum / ambulatum / lavatum ire', gloss: 'to go to sleep / to walk / to bathe — more supines of purpose.' },
        { term: 'facile dictu', gloss: 'easy to say — the supine in -tu.' },
        { term: 'difficilis auditu', gloss: 'hard to hear — supine in -tu with difficilis.' },
        { term: 'imber', gloss: 'a rain-shower, a downpour.' },
      ],
    },
    {
      id: 'canis-ferox',
      latinTitle: 'CANIS FEROX',
      title: 'The Fierce Dog',
      paragraphs: [
        'Tandem ianitor fores aperit et Tlepolemum foris in imbre stantem videt. ' +
          'Canis iratus dentes ostendit ac fremit: "Rrrr...!" nec vero tabellarium mordere potest, quod catena retinetur. ' +
          'Ianitor: "Cave! Canis te mordebit!" Sic ianitor hominem intrantem de cane feroci monet.',
        'Tlepolemus in limine resistens "Retine canem!" inquit, "Noli eum solvere! Nec vero opus est me monere de cane, ego enim legere scio." ' +
          'Tabellarius solum intra limen aspicit, ubi CAVE CANEM scriptum est infra imaginem canis ferocis. ' +
          '"Neque haec imago neque canis verus me terret!" inquit, et propius ad canem accedit.',
        '"Mane foris!" inquit ianitor, "Noli ad hunc canem accedere! Iam te monui!" ' +
          'Tabellarius vero, quamquam sic a ianitore monitus est, alterum gradum ad canem versus facit — ' +
          'sed ecce canis in eum salit catenam rumpens! Homo territus ex ostio cedere conatur, sed canis iratus pallium eius dentibus prehendit et tenet.',
        '"Ei! Canis me mordet!" exclamat tabellarius, qui iam neque recedere neque procedere audet: canis fremens eum loco se movere non sinit. ' +
          'Ianitor ridens "Quin procedis?" inquit, "Noli resistere! Ego te intrare sino. Ianuam aperui. Procede in villam!" Sic ianitor virum territum deridet.',
        '"Id facilius est dictu quam factu" inquit tabellarius, atque alterum gradum facere audet, ' +
          'sed canis statim in pedes posteriores surgit atque pedes priores in pectore eius ponit! ' +
          'Tabellarius, toto corpore tremens, ex ostio cedit: sic canis eum e villa pellit. ' +
          '"Remove canem!" inquit ille, "Iste canis ferox me intrare non sinit."',
        'Ianitor eum tremere animadvertit iterumque deridet: "Quid tremis? Hicine canis te terruit?" ' +
          'Tlepolemus: "Noli putare me ab isto cane territum esse. Si tremo, non propter canem ferocem, sed propter frigidum tremo. ' +
          'Admitte me sub tectum, ianitor, amabo te! Vinci istum canem ferocem! Cur eum solvisti?"',
        'Tabellarius enim canem a ianitore solutum esse arbitratur. Ianitor catenam manu prehendit canemque paulum a tabellario removet. ' +
          '"Noli arbitrari" inquit "me canem solvisse. Canis ipse catenam suam rupit. Ecce catena rupta."',
        'Tlepolemus: "Num canis catenam ferream rumpere potest? Id non credo. At certe vestem scindere potuit: ' +
          'pallium meum novum, quod nuper magno pretio emi, scissum esse a cane tuo?" ' +
          'Ianitor: "Istud pallium non est magni pretii, neque id nuper emptum esse credo. Sed quid tu venisti? Num quid tecum fers?"',
        'Tlepolemus: "Stulte rogitas, ianitor, nam iam tibi dixi \'tabellarium me esse\'. Quid tabellarios ferre arbitraris? Aureosne ianitoribus? ' +
          'Profecto nos aurum non ferimus." Ianitor: "Vos scilicet epistulas fertis." ' +
          'Tlepolemus: "Recte dicis. Epistulam affero ad Lucium Iulium Balbum. Hocine ero tuo nomen est?"',
        'Ianitor: "Est. Quin mihi istam epistulam das?" ' +
          'Tlepolemus: "Prius vinci canem et sine me intrare! Noli iterum me foras in imbrem pellere!" ' +
          'Ianitor, postquam canem vinxit, "Non ego" inquit, "sed hic canis te foras pepulit. Noli narrare \'te a ianitore foras pulsum esse\'!"',
        'Cane vincto, tabellarius tandem intrat epistulamque ostendit ianitori; qui statim epistulam prehendit et in atrium ad dominum suum fert.',
      ],
      notes: [
        { term: 'Cave! / Cave canem!', gloss: 'look out! / beware of the dog! (the warning on the mosaic).' },
        { term: 'mordere', gloss: 'to bite.' },
        { term: 'pallium', gloss: 'a cloak, a mantle.' },
        { term: 'tremere', gloss: 'to tremble, to shake with fear or cold.' },
        { term: 'deridere', gloss: 'to laugh at, to mock.' },
        { term: 'arbitrari', gloss: 'to think, to suppose.' },
        { term: 'scindere', gloss: 'to tear, to split.' },
        { term: 'pretium', gloss: 'price, value: magni pretii = of great value.' },
      ],
    },
  ],
  grammar: [
    {
      id: 'supinum',
      latinTitle: 'Supinum',
      title: 'The Supine',
      intro:
        'The supine is a verbal noun — the fourth part of the verb’s principal parts. It has two ' +
        'forms: one in -tum that tells you the purpose of a coming or sending, and one in -tu that ' +
        'goes with facilis and difficilis.',
      paradigms: [
        {
          caption: 'Supinum I: the form in -tum (purpose, after verbs of motion)',
          head: ['Verbum', 'Supinum', 'Exemplum'],
          rows: [
            ['salutare', 'salutatum', 'Amici salutatum veniunt. — Friends come to greet.'],
            ['lavare', 'lavatum', 'Romani cotidie lavatum eunt. — Romans go to bathe every day.'],
            ['dormire', 'dormitum', 'Vesperi omnes dormitum eunt. — In the evening all go to sleep.'],
            ['ambulare', 'ambulatum', 'Erus post somnum ambulatum exibit. — After his nap the master will go out to walk.'],
            ['oppugnare', 'oppugnatum', 'Milites oppidum oppugnatum mittuntur. — Soldiers are sent to storm the town.'],
            ['emere', 'emptum', 'Medus et Lydia ad tabernam eunt anulum emptum. — They go to the shop to buy a ring.'],
            ['postulare', 'postulatum', 'Nec pecuniam postulatum venio. — Nor do I come to demand money.'],
          ],
        },
        {
          caption: 'Supinum II: the form in -tu (with facilis, difficilis, and a few others)',
          head: ['Verbum', 'Supinum', 'Exemplum'],
          rows: [
            ['dicere', 'dictu', 'Nomen meum non est facile dictu. — My name is not easy to say.'],
            ['facere', 'factu', 'Id facilius est dictu quam factu. — That is easier to say than to do.'],
            ['audire', 'auditu', 'Vox tua difficilis est auditu. — Your voice is hard to hear.'],
          ],
        },
      ],
      points: [
        'The supine is the fourth principal part of the verb: laudo, laudare, laudavi, laudatum.',
        'The supine in -tum expresses purpose and follows verbs of going and sending: ire, venire, mittere.',
        'The supine in -tu works like an ablative with facilis, difficilis and a few other adjectives: facile dictu = easy to say.',
        'Do not confuse the supine in -tum with the neuter past participle; both look alike (emptum), but only the supine means "to buy / for buying".',
      ],
    },
  ],
  vocabulary: [
    { latin: 'ianua', english: 'door', pos: 'noun (f.)' },
    { latin: 'foris', english: 'door, door-leaf; (pl.) doors', pos: 'noun (f.)' },
    { latin: 'cardo', english: 'hinge', pos: 'noun (m.)' },
    { latin: 'limen', english: 'threshold', pos: 'noun (n.)' },
    { latin: 'ostiarius', english: 'doorkeeper', pos: 'noun (m.)' },
    { latin: 'ianitor', english: 'doorkeeper, porter', pos: 'noun (m.)' },
    { latin: 'canis', english: 'dog', pos: 'noun (m.)' },
    { latin: 'lupus', english: 'wolf', pos: 'noun (m.)' },
    { latin: 'catena', english: 'chain', pos: 'noun (f.)' },
    { latin: 'anulus', english: 'ring', pos: 'noun (m.)' },
    { latin: 'aurum', english: 'gold', pos: 'noun (n.)' },
    { latin: 'ferrum', english: 'iron', pos: 'noun (n.)' },
    { latin: 'lignum', english: 'wood', pos: 'noun (n.)' },
    { latin: 'materia', english: 'material, matter', pos: 'noun (f.)' },
    { latin: 'faber', english: 'craftsman, smith', pos: 'noun (m.)' },
    { latin: 'Vulcanus', english: 'Vulcan, god of smiths', pos: 'noun (m.)' },
    { latin: 'tabellarius', english: 'postman, letter-carrier', pos: 'noun (m.)' },
    { latin: 'epistula', english: 'letter', pos: 'noun (f.)' },
    { latin: 'baculum', english: 'stick, staff', pos: 'noun (n.)' },
    { latin: 'vox', english: 'voice', pos: 'noun (f.)' },
    { latin: 'imber', english: 'rain, rain-shower', pos: 'noun (m.)' },
    { latin: 'pallium', english: 'cloak, mantle', pos: 'noun (n.)' },
    { latin: 'pretium', english: 'price, value', pos: 'noun (n.)' },
    { latin: 'atrium', english: 'atrium, hall', pos: 'noun (n.)' },
    { latin: 'dominus', english: 'master, lord', pos: 'noun (m.)' },
    { latin: 'servus', english: 'slave', pos: 'noun (m.)' },
    { latin: 'mordere', english: 'to bite', pos: 'verb' },
    { latin: 'latrare', english: 'to bark', pos: 'verb' },
    { latin: 'vincire', english: 'to chain, tie up', pos: 'verb' },
    { latin: 'custodire', english: 'to guard', pos: 'verb' },
    { latin: 'aperire', english: 'to open', pos: 'verb' },
    { latin: 'claudere', english: 'to close, shut', pos: 'verb' },
    { latin: 'admittere', english: 'to let in, admit', pos: 'verb' },
    { latin: 'exspectare', english: 'to wait (for)', pos: 'verb' },
    { latin: 'pulsare', english: 'to knock, strike', pos: 'verb' },
    { latin: 'solvere', english: 'to untie, loosen', pos: 'verb' },
    { latin: 'rumpere', english: 'to break, burst', pos: 'verb' },
    { latin: 'scindere', english: 'to tear, split', pos: 'verb' },
    { latin: 'pellere', english: 'to drive (out)', pos: 'verb' },
    { latin: 'terrere', english: 'to frighten', pos: 'verb' },
    { latin: 'tremere', english: 'to tremble', pos: 'verb' },
    { latin: 'deridere', english: 'to mock, laugh at', pos: 'verb' },
    { latin: 'arbitrari', english: 'to think, suppose', pos: 'verb' },
    { latin: 'ferre', english: 'to carry, bring', pos: 'verb' },
    { latin: 'supinum', english: 'supine', pos: 'noun (n.)' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PENSVM A',
      title: 'Fill in the endings',
      instruction: 'Complete each word with the correct ending of the supine.',
      type: 'fill',
      items: [
        'Hora nona erus ambula{{tum}} ire solet. Tabellarii non mittuntur pecuniam postula{{tum}}. ' +
          'Hostes castra expugna{{tum}} veniunt. Multi barbari Romam veniunt habita{{tum}}.',
        "Syra: 'Verba medici difficilia sunt audi{{tu}}.' Ea res est facilis dic{{tu}}. " +
          'Nomen barbarum difficile est dic{{tu}}. Multa sunt faciliora dic{{tu}} quam fac{{tu}}.',
        'Romani cotidie lava{{tum}} eunt; vesperi omnes dormi{{tum}} eunt. ' +
          'Medus et Lydia ad tabernam eunt anulum emp{{tum}}. Nomen meum non est facile dic{{tu}}.',
      ],
    },
  ],
}

export default chapter
