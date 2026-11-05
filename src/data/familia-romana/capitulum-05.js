// Capitulum V — Villa et Hortus
// Sources: Ørberg, Lingua Latina per se Illustrata, Pars I: Familia Romana (2nd ed.)
// Reading text, grammar and exercises adapted and re-typeset for the web.

const chapter = {
  number: 5,
  roman: 'V',
  slug: 'villa-et-hortus',
  latinTitle: 'VILLA ET HORTVS',
  title: 'The Villa and the Garden',
  tagline: 'A tour of the Roman house — and the cases that describe it.',
  status: 'complete',
  overview:
    'The scene widens from the family to the whole household: Iulius\u2019 country villa, the slaves and ' +
    'maidservants who live in it, the atrium with its water-basin, the colonnaded garden court and the ' +
    'bedrooms. In the garden the children tease and quarrel, and the chapter ends with Marcus and Quintus ' +
    'splashing about in the impluvium. Through it all you learn the accusative and the ablative, the ' +
    'prepositions that take the ablative, and the difference between a command and a statement.',
  objectives: [
    'Describe a Roman villa, its rooms and its garden in Latin.',
    'Form the accusative singular and plural (-um / -am / -um; -os / -as / -a).',
    'Form the ablative with prepositions (in horto, ex atrio, cum servo).',
    'Tell a command apart from a statement (voca! / vocate! — vocat / vocant).',
  ],
  readings: [
    {
      id: 'villa-et-hortus',
      latinTitle: 'VILLA ET HORTVS',
      title: 'The Villa and the Garden',
      paragraphs: [
        'Ecce villa et hortus Iulii. Iulius in magna villa habitat. Pater et mater et tres liberi in villa habitant. Iulius et Aemilia tres liberos habent: duos filios et unam filiam — non duas filias.',
        'In villa multi servi habitant. Dominus eorum est Iulius: is multos servos habet. Ancillae quoque multae in villa habitant. Domina earum est Aemilia: ea multas ancillas habet.',
        'Iulius in villa sua habitat cum magna familia. Pater et mater habitant cum Marco et Quinto et Iulia. Iulius et Aemilia in villa habitant cum liberis et servis et ancillis.',
        'Villa Iulii in magno horto est. In Italia sunt multae villae cum magnis hortis. In hortis sunt rosae et lilia. Iulius multas rosas et multa lilia in horto suo habet. Hortus Iulii pulcher est, quia in eo sunt multae et pulchrae rosae liliaque.',
        'Aemilia femina pulchra est. Syra non est femina pulchra, neque pulcher est nasus eius, sed foedus est.',
        'Syra, quae bona ancilla est, nasum magnum et foedum habet. Iulius est vir Aemiliae, feminae pulchrae. Iulius Aemiliam amat, quia ea pulchra et bona femina est. Aemilia Iulium virum suum amat et cum eo habitat. Pater et mater liberos suos amant. Iulius non solus, sed cum Aemilia et cum magna familia in villa habitat.',
      ],
      notes: [
        { term: 'habitat', gloss: 'lives, dwells (habitare).' },
        { term: 'hortus', gloss: 'garden — villa in magno horto est.' },
        { term: 'rosae et lilia', gloss: 'roses and lilies.' },
        { term: 'pulcher ↔ foedus', gloss: 'beautiful / ugly, foul.' },
        { term: 'amat', gloss: 'loves (amare).' },
        { term: 'solus', gloss: 'alone: Iulius non solus habitat.' },
        { term: 'cum + ablativo', gloss: 'cum magna familia — with the big household.' },
      ],
    },
    {
      id: 'atrium-et-peristylum',
      latinTitle: 'ATRIVM ET PERISTYLVM',
      title: 'The Atrium and the Peristyle',
      paragraphs: [
        'In villa sunt duo ostia: ostium magnum et ostium parvum. Villa duo ostia et multas fenestras habet.',
        'In villa Iulii magnum atrium est cum impluvio. Quid est in impluvio? In eo est aqua. In atrio nullae fenestrae sunt.',
        "Etiam peristylum magnum et pulchrum in villa est. 'Peristylum' est vocabulum Graecum. In villis Graecis et Romanis magna et pulchra peristyla sunt. Estne impluvium in peristylo? Id non in peristylo, sed in atrio est. In peristylo parvus hortus est.",
        'In villa sunt multa cubicula. Quintus in cubiculo parvo dormit. Estne magnum cubiculum Marci? Id quoque parvum est. Iulius et Aemilia in cubiculo magno dormiunt. Ubi dormiunt servi? Ii quoque in cubiculis dormiunt. Suntne magna eorum cubicula? Ea non magna sunt, et multi servi in uno cubiculo dormiunt. Etiam ancillae multae in uno cubiculo dormiunt, neque eae magna cubicula habent.',
      ],
      notes: [
        { term: 'ostium', gloss: 'door, entrance.' },
        { term: 'fenestra', gloss: 'window.' },
        { term: 'atrium', gloss: 'the main hall of a Roman house.' },
        { term: 'impluvium', gloss: 'the water-basin in the middle of the atrium.' },
        { term: 'peristylum', gloss: 'a colonnaded garden court (a Greek word).' },
        { term: 'cubiculum', gloss: 'bedroom, room.' },
        { term: 'dormit / dormiunt', gloss: 'sleeps / (they) sleep.' },
        { term: 'nullae', gloss: 'no, not any (plural of nulla).' },
      ],
    },
    {
      id: 'rosae-iuliae',
      latinTitle: 'ROSAE IVLIAE',
      title: 'Julia\u2019s Roses',
      paragraphs: [
        'Aemilia in peristylo est. Estne sola? Aemilia sola non est: liberi cum ea in peristylo adsunt. Iulius abest. Aemilia sine viro suo Iulio in villa est. Ubi est Iulius? In oppido Tusculo est sine Aemilia, sed cum servis quattuor. Aemilia cum Marco, Quinto Iuliaque in peristylo est. Iulia rosas pulchras in horto videt et ab Aemilia discedit. Iam ea cum Aemilia non est. Aemilia eam non videt. Puella in horto est.',
        'Aemilia imperat: "Marce et Quinte! Iuliam vocate!" Marcus et Quintus Iuliam vocant: "Iulia! Veni!" sed Iulia eos non audit neque venit. Iulia pueros vocat: "Marce et Quinte! Venite! Hic multae rosae sunt." Pueri Iuliam audiunt, neque ii ab Aemilia discedunt. Quintus: "Carpe rosas, Iulia!" Iulia rosas carpit et cum quinque rosis ex horto venit. Iulia: "Vide, mater! Videte, pueri! Videte rosas meas!" Iulia laeta est, rosae eam delectant.',
        'Aemilia: "Ecce puella pulchra cum rosis pulchris!" Verba Aemiliae Iuliam delectant. Marcus: "Rosae pulchrae sunt; puella sine rosis pulchra non est!" Verba Marci Iuliam non delectant! Aemilia (irata): "Tace, puer improbe! Iulia puella pulchra est — cum rosis et sine rosis." Iulia: "Audite, Marce et Quinte!" Marcus: "Mater non videt nasum tuum foedum!" Marcus et Quintus rident: "Hahahae!" Iulia: "Audi, mamma: pueri etiam me rident!" Iulia plorat et cum una rosa ab iis discedit.',
        'Aemilia: "Tacete, pueri improbi! Nasus Iuliae foedus non est. Discedite ex peristylo! Sumite ceteras rosas easque in aqua ponite!" Pueri ceteras quattuor rosas sumunt et cum iis discedunt. Aemilia, quae iam sola est in peristylo, ancillas vocat: "Delia et Syra! Venite!" Delia et Syra ex atrio veniunt. Aemilia eas interrogat: "Suntne pueri in atrio?" Delia respondet: "In atrio sunt."',
        'Aemilia: "Quid agunt Marcus et Quintus?" Delia: "Pueri aquam sumunt ex impluvio ..." Syra: "... et rosas in aqua ponunt." Hic domina et ancillae pueros audiunt ex atrio: Quintus plorat et Marcus ridet. Aemilia: "Quid iam agunt pueri? Age, Delia! Discede et interroga eos!" Delia ab Aemilia et Syra discedit. Aemilia Syram interrogat: "Ubi est Davus?" Syra respondet: "In oppido est cum domino."',
        'Delia ex atrio venit et dominam vocat: "Veni, o domina! Veni!" Aemilia: "Quid est, Delia?" Delia: "Quintus est in impluvio!" Aemilia: "In impluvio? Quid agit puer in impluvio?" Delia: "Aquam pulsat et te vocat." Aemilia: "Quid agit Marcus?" Delia: "Is ridet, quia Quintus in aqua est!" Aemilia: "O, puer improbus est Marcus! Agite! Iulium vocate, ancillae!" Syra: "Sed dominus in oppido est." Aemilia: "O, iam rursus abest Iulius!" Delia: "Age! Veni, domina, et Marcum verbera!" Quid agit domina? Domina irata cum ancillis ex peristylo discedit.',
      ],
      notes: [
        { term: 'adest / abest', gloss: '(is) present / (is) absent.' },
        { term: 'sine + ablativo', gloss: 'sine viro suo — without her husband.' },
        { term: 'discedit', gloss: 'goes away, departs.' },
        { term: 'carpe!', gloss: 'pick! pluck! (carpere).' },
        { term: 'delectant', gloss: 'please, delight.' },
        { term: 'tace! / tacete!', gloss: 'be quiet! (to one / to several).' },
        { term: 'age! / agite!', gloss: 'come! come on!' },
        { term: 'aquam pulsat', gloss: 'splashes the water.' },
      ],
    },
  ],
  grammar: [
    {
      id: 'accusativus',
      latinTitle: 'Accusativus',
      title: 'The Accusative',
      intro:
        'The accusative is the case of the object — the person or thing that the action is done to. ' +
        'It is the case you use for counting and seeing: Iulius duos filios habet.',
      paradigms: [
        {
          caption: 'the accusative endings',
          head: ['Genus', 'Singularis', 'Pluralis'],
          rows: [
            ['masculinum (m)', '-um (dominum, hortum)', '-os (dominos, hortos)'],
            ['femininum (f)', '-am (villam, rosam)', '-as (villas, rosas)'],
            ['neutrum (n)', '-um (cubiculum)', '-a (cubicula)'],
          ],
        },
        {
          caption: 'nominative → accusative',
          head: ['Nominativus', 'Accusativus', 'Exemplum'],
          rows: [
            ['filius', 'filium', 'Iulius unum filium habet.'],
            ['filii', 'filios', 'Iulius duos filios habet.'],
            ['filia', 'filiam', 'Iulius unam filiam habet.'],
            ['cubiculum', 'cubicula', 'Villa multa cubicula habet.'],
          ],
        },
      ],
      points: [
        'The accusative marks the object of the verb: Iulius Aemiliam amat — Iulius loves Aemilia.',
        'Masculine -us → -um, plural -i → -os; feminine -a → -am, plural -ae → -as.',
        'Neuter nouns are the same in the nominative and accusative, singular and plural: cubiculum / cubicula.',
      ],
    },
    {
      id: 'ablativus',
      latinTitle: 'Ablativus',
      title: 'The Ablative',
      intro:
        'The ablative is the case that follows many prepositions. It answers "where? from where? with whom?", ' +
        'and on its own it can mean "by, with or from".',
      paradigms: [
        {
          caption: 'the ablative endings',
          head: ['Genus', 'Singularis', 'Pluralis'],
          rows: [
            ['masculinum (m)', '-o (in horto, cum servo)', '-is (in hortis, cum servis)'],
            ['femininum (f)', '-a (in villa, cum Aemilia)', '-is (in villis, cum ancillis)'],
            ['neutrum (n)', '-o (in oppido, in cubiculo)', '-is (in oppidis, in cubiculis)'],
          ],
        },
      ],
      points: [
        'Ablative singular: -o for masculine and neuter nouns, -a for feminine nouns.',
        'Ablative plural is always -is, whatever the gender: in hortis, in villis, in cubiculis.',
        'The same noun may appear in different cases: villa (nom.), villam (acc.), villa (abl.). The preposition tells you which.',
      ],
    },
    {
      id: 'praepositiones',
      latinTitle: 'Praepositiones cum Ablativo',
      title: 'Prepositions with the Ablative',
      intro:
        'in, ex, ab, cum and sine are the prepositions of this chapter. Each one always takes a noun ' +
        'in the ablative case.',
      paradigms: [
        {
          caption: 'prepositions with the ablative',
          head: ['Praepositio', 'Significatio', 'Exemplum'],
          rows: [
            ['in', 'in, on (where?)', 'in atrio, in cubiculis, in horto'],
            ['ex / e', 'out of, from', 'ex horto, ex atrio, ex Italia'],
            ['ab / a', 'from, away from', 'ab Aemilia, ab oppido'],
            ['cum', 'with, together with', 'cum servo, cum liberis, cum magna familia'],
            ['sine', 'without', 'sine viro suo, sine rosis'],
          ],
        },
      ],
      points: [
        'These five prepositions always take the ablative: the noun after them must be in the ablative case.',
        'in + ablative answers "where?": in villa habitat — he lives in the villa.',
        'ex and ab stand before vowels (ex atrio, ab Aemilia); e and a before consonants (e cubiculo, a Marco).',
      ],
    },
    {
      id: 'imperativus',
      latinTitle: 'Imperativus et Indicativus',
      title: 'Command and Statement',
      intro:
        'A command to one person or to several is the imperative; a plain statement is the indicative. ' +
        'The ending tells you both who is addressed and whether it is an order or a fact.',
      paradigms: [
        {
          caption: 'imperative and indicative',
          head: ['Vocalis', 'Imperativus (command)', 'Indicativus (statement)'],
          rows: [
            ['singularis', 'voca! veni! tace! discede!', 'vocat, venit, tacet, discedit'],
            ['pluralis', 'vocate! venite! tacete! discedite!', 'vocant, veniunt, tacent, discedunt'],
          ],
        },
        {
          caption: 'the endings compared',
          head: ['Ending', 'Imperativus singularis', 'Imperativus pluralis', 'Indicativus sing. / plur.'],
          rows: [
            ['-a / -ate', 'voca!', 'vocate!', 'vocat / vocant'],
            ['-e / -ete', 'tace! vide!', 'tacete! videte!', 'tacet / tacent'],
            ['-e / -ite', 'discede!', 'discedite!', 'discedit / discedunt'],
            ['-i / -ite', 'veni!', 'venite!', 'venit / veniunt'],
          ],
        },
      ],
      points: [
        'A command to one person is the imperative singular (Veni, Iulia!); a command to several adds -te (Venite, pueri!).',
        'A statement uses the indicative: -t for one person, -nt for several.',
        'When you call someone by name you use the vocative: Marce et Quinte! — Marcus and Quintus!',
      ],
    },
  ],
  vocabulary: [
    { latin: 'villa', english: 'country house, villa', pos: 'noun (f.)' },
    { latin: 'hortus', english: 'garden', pos: 'noun (m.)' },
    { latin: 'rosa', english: 'rose', pos: 'noun (f.)' },
    { latin: 'lilium', english: 'lily', pos: 'noun (n.)' },
    { latin: 'nasus', english: 'nose', pos: 'noun (m.)' },
    { latin: 'ostium', english: 'door, entrance', pos: 'noun (n.)' },
    { latin: 'fenestra', english: 'window', pos: 'noun (f.)' },
    { latin: 'atrium', english: 'atrium, hall', pos: 'noun (n.)' },
    { latin: 'impluvium', english: 'water-basin in the atrium', pos: 'noun (n.)' },
    { latin: 'aqua', english: 'water', pos: 'noun (f.)' },
    { latin: 'peristylum', english: 'peristyle, colonnaded garden court', pos: 'noun (n.)' },
    { latin: 'cubiculum', english: 'bedroom, room', pos: 'noun (n.)' },
    { latin: 'verbum', english: 'word', pos: 'noun (n.)' },
    { latin: 'vir', english: 'man, husband', pos: 'noun (m.)' },
    { latin: 'pulcher', english: 'beautiful, handsome', pos: 'adjective' },
    { latin: 'foedus', english: 'ugly, foul', pos: 'adjective' },
    { latin: 'solus', english: 'alone, only', pos: 'adjective' },
    { latin: 'Graecus', english: 'Greek', pos: 'adjective' },
    { latin: 'habitat', english: 'lives, dwells', pos: 'verb' },
    { latin: 'dormit', english: 'sleeps', pos: 'verb' },
    { latin: 'amat', english: 'loves', pos: 'verb' },
    { latin: 'imperat', english: 'commands, orders', pos: 'verb' },
    { latin: 'discedit', english: 'departs, goes away', pos: 'verb' },
    { latin: 'carpit', english: 'picks, plucks', pos: 'verb' },
    { latin: 'ponit', english: 'puts, places', pos: 'verb' },
    { latin: 'sumit', english: 'takes', pos: 'verb' },
    { latin: 'delectat', english: 'delights, pleases', pos: 'verb' },
    { latin: 'tacet', english: 'is silent, is quiet', pos: 'verb' },
    { latin: 'abest', english: 'is absent, is away', pos: 'verb' },
    { latin: 'adest', english: 'is present', pos: 'verb' },
    { latin: 'rursus', english: 'again, back', pos: 'adverb' },
    { latin: 'in', english: 'in, on (+ abl.)', pos: 'preposition' },
    { latin: 'ex / e', english: 'out of, from (+ abl.)', pos: 'preposition' },
    { latin: 'ab / a', english: 'from, away from (+ abl.)', pos: 'preposition' },
    { latin: 'cum', english: 'with (+ abl.)', pos: 'preposition' },
    { latin: 'sine', english: 'without (+ abl.)', pos: 'preposition' },
    { latin: 'age! / agite!', english: 'come! come on!', pos: 'interjection' },
    { latin: 'quinque', english: 'five', pos: 'numeral' },
    { latin: 'quattuor', english: 'four', pos: 'numeral' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PENSVM A',
      title: 'Fill in the endings',
      instruction: 'Complete each word with the correct ending.',
      type: 'fill',
      items: [
        'Iulius et Aemilia in vill{{a}} habit{{ant}} cum liber{{is}} et serv{{is}}. Dominus mult{{os}} serv{{os}} et mult{{as}} ancill{{as}} habet.',
        'Iulius du{{os}} fili{{os}} et un{{am}} fili{{am}} habet. Villa Iulii in magn{{o}} hort{{o}} est. In hort{{o}} sunt ros{{ae}} et lili{{a}}. Iulius mult{{as}} ros{{as}} in hort{{o}} su{{o}} habet.',
        'Aemilia in peristyl{{o}} est cum Marc{{o}} et Quint{{o}} et Iuli{{a}}. Iulia mult{{as}} ros{{as}} in hort{{o}} videt et ab Aemili{{a}} disced{{it}}.',
        'Aemilia pueris imperat: "Marce et Quinte, Iuliam voca{{te}}!" Pueri Iuliam voc{{ant}}: "Iulia, ven{{i}}!" Iulia ven{{it}} et ros{{as}} in aqu{{a}} pon{{it}}.',
      ],
    },
    {
      id: 'pensum-b',
      latinLabel: 'PENSVM B',
      title: 'Complete the sentences',
      instruction: 'Fill each gap with the missing word.',
      type: 'fill',
      items: [
        'Iulius in magna {{villa}} habitat. Aemilia cum {{Iulio}} habitat. Iulius Aemiliam {{amat}}, quia Aemilia bona et {{pulchra}} femina est.',
        'Aemilia in peristylo est {{cum}} liberis suis, sed {{sine}} viro suo. Iulia {{ab}} Aemilia discedit; iam puella in {{horto}} est. Iulia cum {{quinque}} rosis ex horto venit. Puella laeta est: rosae eam {{delectant}}.',
        'Ubi est impluvium? Impluvium in {{atrio}} est. In impluvio {{aqua}} est. In atrio nullae {{fenestrae}} sunt. Quintus in {{impluvio}} est; Marcus {{ridet}}, quia Quintus in aqua est.',
        'In villa sunt multa {{cubicula}}. Quintus in cubiculo parvo {{dormit}}. Iulius et Aemilia in cubiculo {{magno}} dormiunt. Multi servi in uno {{cubiculo}} dormiunt.',
      ],
    },
    {
      id: 'pensum-c',
      latinLabel: 'PENSVM C',
      title: 'Answer in Latin',
      instruction: 'Answer each question with a full Latin sentence, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'Num Iulius solus in villa habitat?', a: 'Iulius non solus, sed cum magna familia in villa habitat.' },
        { q: 'Quot filios et quot filias habent Iulius et Aemilia?', a: 'Duos filios et unam filiam habent.' },
        { q: 'Ubi est impluvium?', a: 'Impluvium in atrio est.' },
        { q: 'Ubi dormiunt servi?', a: 'Servi in cubiculis parvis dormiunt.' },
        { q: 'Adestne Iulius in peristylo cum Aemilia?', a: 'Iulius non adest: in oppido Tusculo est sine Aemilia.' },
        { q: 'Ubi est Iulius?', a: 'Iulius in oppido Tusculo est cum servis quattuor.' },
        { q: 'Estne Aemilia sola in peristylo?', a: 'Aemilia sola non est: liberi cum ea adsunt.' },
        { q: 'Quid Iulia agit in horto?', a: 'Iulia rosas pulchras in horto videt et carpit.' },
        { q: 'Quid agit Quintus in atrio?', a: 'Quintus in impluvio est et aquam pulsat.' },
        { q: 'Cur Marcus ridet?', a: 'Marcus ridet, quia Quintus in aqua est.' },
        { q: 'Quot rosas Iulia ex horto fert?', a: 'Iulia cum quinque rosis ex horto venit.' },
        { q: 'Quid Aemilia pueris imperat?', a: 'Aemilia pueris imperat: "Sumite ceteras rosas easque in aqua ponite!"' },
      ],
    },
  ],
}

export default chapter
