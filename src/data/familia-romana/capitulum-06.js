// Capitulum VI — Via Latina
// Sources: Ørberg, Lingua Latina per se Illustrata, Pars I: Familia Romana (2nd ed.)
// Reading text, grammar and exercises adapted and re-typeset for the web.

const chapter = {
  number: 6,
  roman: 'VI',
  slug: 'via-latina',
  latinTitle: 'VIA LATINA',
  title: 'The Latin Road',
  tagline: 'The great roads of Italy — and how Latin says "to", "from" and "at".',
  status: 'complete',
  overview:
    'Iulius travels from Tusculum to his country villa, carried in a litter by four slaves, while Medus, ' +
    'a runaway slave, walks the same road towards Rome and his beloved Lydia, and Cornelius rides the other ' +
    'way. Along the journey you learn the prepositions that take the accusative or the ablative, the three ' +
    'place constructions (Romam, Roma, Romae), and the passive voice of the Latin verb.',
  objectives: [
    'Name the great roads of Italy and the towns they connect.',
    'Use prepositions with the accusative (ad, ante, post, inter, prope, circum, apud, per) and with the ablative (ab, cum, ex, in, sine).',
    'Express place with the bare case: Romam (to), Roma (from), Romae (at).',
    'Recognise and form the passive voice (-tur / -ntur).',
    'Read continuous Latin prose about Iulius\u2019s journey and Medus the fugitive.',
  ],
  readings: [
    {
      id: 'via-latina',
      latinTitle: 'VIA LATINA',
      title: 'The Roads of Italy',
      paragraphs: [
        'In Italia multae et magnae viae sunt: via Appia, via Latina, via Flaminia, via Aurelia, via Aemilia. Via Appia est inter Romam et Brundisium; via Latina inter Romam et Capuam; via Flaminia inter Romam et Ariminum; via Aurelia inter Romam et Genuam; via Aemilia inter Ariminum et Placentiam. Brundisium, Capua, Ariminum, Genua, Placentia, Ostia magna oppida sunt.',
        'Ubi est Ostia? Ostia est prope Romam. Tusculum quoque prope Romam est. Brundisium non est prope Romam, sed procul ab Roma: via Appia longa est. Via Latina non tam longa est quam via Appia. Quam longa est via Flaminia? Neque ea tam longa est quam via Appia. Tiberis fluvius non tam longus est quam fluvius Padus.',
        'Circum oppida muri sunt. Circum Romam est murus antiquus. In muro Romano duodecim portae sunt. Porta prima Romana est porta Capena. Circum oppidum Tusculum murus non tam longus est quam circum Romam.',
      ],
      notes: [
        { term: 'via', gloss: 'a road, a way: via Appia, via Latina, via Flaminia.' },
        { term: 'inter + accusativo', gloss: 'between, among: inter Romam et Brundisium.' },
        { term: 'prope + accusativo', gloss: 'near, close to: prope Romam, prope Tusculum.' },
        { term: 'procul ab + ablativo', gloss: 'far from: Brundisium procul ab Roma est.' },
        { term: 'non tam ... quam ...', gloss: 'not so ... as ...: via Latina non tam longa est quam via Appia.' },
        { term: 'circum + accusativo', gloss: 'around: circum oppida, circum Romam.' },
        { term: 'murus', gloss: 'a wall; plural muri.' },
        { term: 'duodecim', gloss: 'twelve.' },
      ],
    },
    {
      id: 'iulius',
      latinTitle: 'IVLIVS',
      title: 'Iulius on the Road',
      paragraphs: [
        'Villa Iulii est prope Tusculum. Ab oppido Tusculo ad villam Iulii non longa via est. Ecce Iulius et quattuor servi in via. Iulius ab oppido ad villam suam it. Dominus et servi ab oppido ad villam eunt.',
        'Dominus in lectica est. Duo servi lecticam cum domino portant. Servi qui lecticam portant sunt Ursus et Davus. Iulius non in via ambulat, servi eum portant. Syrus et Leander ambulant. Syrus saccum portat et Leander quoque saccum portat: Syrus et Leander duos saccos in umeris portant. Sacci quos Syrus et Leander portant magni sunt, sed saccus quem Syrus portat non tam magnus est quam saccus Leandri. Quattuor servi dominum et duos saccos ab oppido ad villam vehunt.',
        'Iulius in lectica est inter Ursum et Davum. Ursus est ante Iulium, Davus post eum est. Syrus et Leander non ante lecticam, sed post lecticam ambulant. Venitne Iulius a villa? Non a villa venit. Unde venit Iulius? Ab oppido venit. Quo it Iulius? Ad villam it. Post eum Tusculum est, ante eum est villa.',
        'Iulius solus non est, nam quattuor servi apud eum sunt. Medus non est apud dominum, nam is dominum iratum timet. Medus est malus servus qui nummos domini in sacculo suo habet. Dominus servos malos baculo verberat; itaque servi mali dominum et baculum eius timent. Davus autem bonus servus est, neque is Medum amat. Davus amicus Medi non est, nam servus bonus et servus malus non amici, sed inimici sunt. Medus est inimicus Davi. Ursus autem amicus Davi est.',
      ],
      notes: [
        { term: 'villa', gloss: 'a country house, an estate (not a town-house).' },
        { term: 'lectica', gloss: 'a litter: a couch in which a wealthy master is carried.' },
        { term: 'quattuor', gloss: 'four: quattuor servi.' },
        { term: 'umerus', gloss: 'shoulder; in umeris = on their shoulders.' },
        { term: 'ante / post + accusativo', gloss: 'before / behind: ante Iulium, post lecticam.' },
        { term: 'apud + accusativo', gloss: 'at the house of, with: apud dominum.' },
        { term: 'baculum', gloss: 'a stick; baculo verberat = he beats with a stick.' },
        { term: 'autem', gloss: 'however, but (never the first word).' },
      ],
    },
    {
      id: 'medus-et-cornelius',
      latinTitle: 'MEDVS ET CORNELIVS',
      title: 'Medus and Cornelius',
      paragraphs: [
        'Medus abest a domino suo. Estne in oppido Tusculo? Medus Tusculi non est; neque Romae est Medus, sed in via Latina inter Romam et Tusculum. Unde venit Medus? Tusculo venit, neque is ad villam Iulii it. Quo it Medus? Romam it. Tusculum post eum est, ante eum est Roma. Medus via Latina Tusculo Romam ambulat.',
        'Etiam Cornelius, amicus Iulii, in via Latina est inter Romam et Tusculum. Unde venit Cornelius? Is non Tusculo, sed Roma venit. Quo it? Cornelius non Romam, sed Tusculum it. Roma post eum, ante eum Tusculum est. Cornelius in equo est. Equus qui Cornelium vehit pulcher est. Iulius et Cornelius ad villas suas eunt. Villa ubi Iulius habitat prope Tusculum est. Ubi habitat Cornelius? Is Tusculi habitat.',
        'Iam Iulius prope villam suam est. Servi qui lecticam portant fessi sunt. Dominus autem fessus non est, nam is non ambulat. Iulius ab Urso et Davo portatur, itaque is fessus non est. Fessi sunt Syrus et Leander, nam ii duos magnos saccos umeris portant, neque vacui sunt sacci! Sacci qui a Syro et Leandro portantur magni sunt, sed saccus quem Syrus portat non tam magnus est quam saccus qui a Leandro portatur. Itaque Syrus non tam fessus est quam Leander.',
        'Cornelius non est fessus, nam is equo vehitur. Iulius lectica vehitur. Servi ambulant. Domini vehuntur. Medus ambulat, nam is servus est neque equum habet.',
        'Iulius prope villam suam est. Medus autem, qui dominum iratum timet, procul a villa Iulii abest. Dominus a servo malo timetur. Medus prope Romam est; iam muri Romani ab eo videntur et porta Capena. (Is qui via Latina venit per portam Capenam Romam intrat.) Cur Romam it Medus? Romam it, quia Lydia Romae habitat, nam Lydia amica eius est: Medus Lydiam amat et ab ea amatur. Medus Romam vocatur ab amica sua, quae femina est pulchra et proba. Itaque is fessus non est et laetus cantat: "Non longa est via Romam, ubi amica habitat mea pulchra." Sed id quod Medus cantat a Lydia non auditur!',
        "Iam Iulius in villa est et ab Aemilia liberisque laetis salutatur. Cornelius Tusculi est. Medus autem Romae est ante ostium Lydiae. Medus ostium pulsat. Lydia imperat: 'Intra!' Medus per ostium intrat et amicam suam salutat: 'Salve, mea Lydia! Ecce amicus tuus qui solus Romam ad te venit.' Lydia verbis Medi delectatur eumque salutat: 'O amice, salve! Ubi est dominus tuus?' Medus: 'Iulius in villa est apud servos suos neque is iam meus dominus est!' Verba Medi a Lydia laeta audiuntur.",
      ],
      notes: [
        { term: 'Tusculi / Romae', gloss: 'locative: at Tusculum / at Rome.' },
        { term: 'Tusculo / Roma', gloss: 'ablative of place from which: from Tusculum / from Rome.' },
        { term: 'vehitur', gloss: 'passive of vehit: he is carried (equo vehitur = he rides).' },
        { term: 'portatur', gloss: 'passive of portat: he is carried.' },
        { term: 'timetur', gloss: 'passive of timet: he is feared/feared by.' },
        { term: 'amatur / auditur', gloss: 'is loved / is heard — more passives.' },
        { term: 'ostium', gloss: 'a door; per ostium = through the door.' },
        { term: 'Intra!', gloss: 'Come in! (an imperative).' },
      ],
    },
  ],
  grammar: [
    {
      id: 'praepositiones',
      latinTitle: 'Praepositiones',
      title: 'Prepositions',
      intro:
        'A preposition shows the relation of a noun to the rest of the sentence. Some prepositions take ' +
        'the accusative, others the ablative — the noun\u2019s ending changes to match.',
      paradigms: [
        {
          caption: 'cum accusativo',
          head: ['Praepositio', 'Significatio', 'Exemplum'],
          rows: [
            ['ad', 'to, towards', 'ad villam (to the villa)'],
            ['ante', 'before, in front of', 'ante Iulium (in front of Iulius)'],
            ['post', 'after, behind', 'post lecticam (behind the litter)'],
            ['inter', 'between, among', 'inter Romam et Capuam'],
            ['prope', 'near, close to', 'prope Tusculum'],
            ['circum', 'around', 'circum oppidum (around the town)'],
            ['apud', 'at the house of, with', 'apud dominum'],
            ['per', 'through', 'per portam Capenam'],
          ],
        },
        {
          caption: 'cum ablativo',
          head: ['Praepositio', 'Significatio', 'Exemplum'],
          rows: [
            ['ab / a', 'from; by (agent)', 'ab oppido; a servo'],
            ['cum', 'with', 'cum domino'],
            ['ex / e', 'out of, from', 'ex oppido (out of the town)'],
            ['in', 'in, on', 'in via; in lectica'],
            ['sine', 'without', 'sine domino'],
          ],
        },
      ],
      points: [
        'Prepositions with the accusative mostly express motion towards or position around: ad, ante, post, inter, prope, circum, apud, per.',
        'Prepositions with the ablative express separation, accompaniment or place where: ab, cum, ex, in, sine.',
        'The noun after the preposition changes case to match it: prope Romam (acc.) but procul ab Roma (abl.).',
      ],
    },
    {
      id: 'locus',
      latinTitle: 'Locus',
      title: 'Place: To, From, At',
      intro:
        'Names of towns (and small islands) need no preposition at all: the case-ending alone tells you ' +
        'whether the motion is to, from or at the place.',
      paradigms: [
        {
          caption: 'oppidum Tusculum',
          head: ['Quaestio', 'Forma', 'Exemplum'],
          rows: [
            ['Quo? (to where?)', 'Accusativus', 'Tusculum it (he goes to Tusculum)'],
            ['Unde? (from where?)', 'Ablativus', 'Tusculo venit (he comes from Tusculum)'],
            ['Ubi? (where?)', 'Locativus (= genetivus)', 'Tusculi habitat (he lives at Tusculum)'],
          ],
        },
        {
          caption: 'Roma',
          head: ['Quaestio', 'Forma', 'Exemplum'],
          rows: [
            ['Quo? (to where?)', 'Accusativus', 'Romam it (he goes to Rome)'],
            ['Unde? (from where?)', 'Ablativus', 'Roma venit (he comes from Rome)'],
            ['Ubi? (where?)', 'Locativus (= genetivus)', 'Romae habitat (he lives at Rome)'],
          ],
        },
      ],
      points: [
        'Towns use the bare case: Romam, Roma, Romae; Tusculum, Tusculo, Tusculi.',
        'The locative (ubi?) looks the same as the genitive: Romae, Tusculi, Capuae.',
        'For larger places, and for all common nouns, Latin adds a preposition: ad villam, in via, ab oppido.',
      ],
    },
    {
      id: 'passivum',
      latinTitle: 'Verbum Passivum',
      title: 'The Passive Voice',
      intro:
        'The passive turns the object of the action into the subject: servus saccum portat becomes ' +
        'saccus a servo portatur — the sack is carried by the slave.',
      paradigms: [
        {
          caption: 'activum \u2194 passivum',
          head: ['Activum', 'Passivum', 'Significatio'],
          rows: [
            ['portat', 'portatur', 'carries \u2192 is carried'],
            ['portant', 'portantur', 'carry \u2192 are carried'],
            ['amat', 'amatur', 'loves \u2192 is loved'],
            ['videt', 'videtur', 'sees \u2192 is seen'],
            ['ponit', 'ponitur', 'puts \u2192 is put'],
            ['audit', 'auditur', 'hears \u2192 is heard'],
          ],
        },
        {
          caption: 'the four conjugations',
          head: ['Coniugatio', 'Singularis', 'Pluralis'],
          rows: [
            ['I: -atur / -antur', 'amatur', 'amantur'],
            ['II: -etur / -entur', 'videtur', 'videntur'],
            ['III: -itur / -untur', 'ponitur', 'ponuntur'],
            ['IV: -itur / -iuntur', 'auditur', 'audiuntur'],
          ],
        },
      ],
      points: [
        'The passive replaces the active endings -t, -nt with -tur, -ntur.',
        'The doer, if named, stands in the ablative with ab: saccus a servo portatur — the sack is carried by the slave.',
        'Examples from the chapter: Iulius ab Urso et Davo portatur; Medus a Lydia amatur; muri ab eo videntur.',
      ],
    },
  ],
  vocabulary: [
    { latin: 'via', english: 'road, way', pos: 'noun (f.)' },
    { latin: 'villa', english: 'country house, estate', pos: 'noun (f.)' },
    { latin: 'murus', english: 'wall', pos: 'noun (m.)' },
    { latin: 'porta', english: 'gate', pos: 'noun (f.)' },
    { latin: 'lectica', english: 'litter, sedan-chair', pos: 'noun (f.)' },
    { latin: 'umerus', english: 'shoulder', pos: 'noun (m.)' },
    { latin: 'saccus', english: 'sack, bag', pos: 'noun (m.)' },
    { latin: 'baculum', english: 'stick, staff', pos: 'noun (n.)' },
    { latin: 'equus', english: 'horse', pos: 'noun (m.)' },
    { latin: 'amicus', english: 'friend', pos: 'noun (m.)' },
    { latin: 'inimicus', english: 'enemy', pos: 'noun (m.)' },
    { latin: 'ostium', english: 'door, entrance', pos: 'noun (n.)' },
    { latin: 'praepositio', english: 'preposition', pos: 'noun (f.)' },
    { latin: 'passivum', english: 'passive', pos: 'adjective' },
    { latin: 'longus', english: 'long', pos: 'adjective' },
    { latin: 'solus', english: 'alone, only', pos: 'adjective' },
    { latin: 'malus', english: 'bad, wicked', pos: 'adjective' },
    { latin: 'pulcher', english: 'beautiful, handsome', pos: 'adjective' },
    { latin: 'fessus', english: 'tired, weary', pos: 'adjective' },
    { latin: 'portat', english: 'carries', pos: 'verb' },
    { latin: 'vehit', english: 'carries, conveys', pos: 'verb' },
    { latin: 'timet', english: 'fears, is afraid of', pos: 'verb' },
    { latin: 'habitat', english: 'lives, dwells', pos: 'verb' },
    { latin: 'abest', english: 'is away, is absent', pos: 'verb' },
    { latin: 'salutat', english: 'greets, hails', pos: 'verb' },
    { latin: 'it', english: 'goes', pos: 'verb' },
    { latin: 'ambulat', english: 'walks', pos: 'verb' },
    { latin: 'quattuor', english: 'four', pos: 'numeral' },
    { latin: 'duodecim', english: 'twelve', pos: 'numeral' },
    { latin: 'ad', english: 'to, towards', pos: 'preposition' },
    { latin: 'ante', english: 'before, in front of', pos: 'preposition' },
    { latin: 'post', english: 'after, behind', pos: 'preposition' },
    { latin: 'inter', english: 'between, among', pos: 'preposition' },
    { latin: 'prope', english: 'near, close to', pos: 'preposition' },
    { latin: 'circum', english: 'around', pos: 'preposition' },
    { latin: 'apud', english: 'at the house of, with', pos: 'preposition' },
    { latin: 'per', english: 'through', pos: 'preposition' },
    { latin: 'ab / a', english: 'from; by (agent)', pos: 'preposition' },
    { latin: 'cum', english: 'with', pos: 'preposition' },
    { latin: 'ex / e', english: 'out of, from', pos: 'preposition' },
    { latin: 'in', english: 'in, on, into', pos: 'preposition' },
    { latin: 'sine', english: 'without', pos: 'preposition' },
    { latin: 'procul', english: 'far, far off', pos: 'adverb' },
    { latin: 'itaque', english: 'therefore, and so', pos: 'adverb' },
    { latin: 'autem', english: 'however, but', pos: 'conjunction' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PENSVM A',
      title: 'Fill in the endings',
      instruction: 'Complete each word with the correct ending.',
      type: 'fill',
      items: [
        'Iulius ab oppid{{o}} Tuscul{{o}} ad vill{{am}} su{{am}} it. Villa eius prope Tuscul{{um}} est. Iulius in lectic{{a}} est inter Urs{{um}} et Dav{{um}}. Dominus a serv{{is}} port{{atur}}. Ursus et Davus non saccos port{{ant}}, sacci a Syro et Leandro port{{antur}}. Saccus quem Leander port{{at}} non tam parvus est quam saccus qui a Syro port{{atur}}.',
        'Medus non est apud domin{{um}}, nam servus malus dominum tim{{et}}. Dominus a serv{{o}} mal{{o}} tim{{etur}}. Dominus serv{{um}} mal{{um}} vocat neque ab e{{o}} aud{{itur}}. Serv{{us}} mal{{us}} domin{{um}} vocat neque e{{um}} aud{{it}}.',
        'Quo it Medus? Rom{{am}} it. Unde venit? Medus Tuscul{{o}} venit. Ante Med{{um}} est Roma, Tusculum post e{{um}} est. Cornelius non Tuscul{{o}} Rom{{am}}, sed Rom{{a}} Tuscul{{um}} it, nam is Tuscul{{i}} habitat. Cornelius non ambulat, sed equ{{o}} veh{{itur}}.',
        'Lydia, amic{{a}} Medi, Rom{{ae}} habitat. Iam Medus Rom{{ae}} apud Lydi{{am}} est. Medus amic{{am}} su{{am}} salutat et ab amic{{a}} su{{a}} salut{{atur}}, nam Lydia Med{{um}} amat et ab e{{o}} am{{atur}}.',
      ],
    },
    {
      id: 'pensum-b',
      latinLabel: 'PENSVM B',
      title: 'Complete the sentences',
      instruction: 'Fill each gap with the missing word.',
      type: 'fill',
      items: [
        'Ostia non {{procul}} a Roma, sed {{prope}} Romam est. {{Unde}} venit Iulius? Tusculo venit et {{ad}} villam it. Duo servi eum {{portant}}. Syrus et Leander, qui {{post}} lecticam ambulant, duos {{saccos}} portant. Saccus Syri non tam {{magnus}} est quam saccus qui a Leandro portatur; {{itaque}} Syrus non tam {{fessus}} est quam Leander.',
        'Medus {{apud}} dominum non est, nam Medus dominum iratum {{timet}}. Medus servus {{malus}} [= improbus] est; {{itaque}} Medus et Iulius non {{amici}}, sed inimici {{sunt}}. Via Latina, quae est {{inter}} Romam et Capuam, non tam {{longa}} est quam via Appia. {{Quo}} ambulat Medus? Is Romam ambulat, {{quia}} amica eius Romae habitat. Cornelius {{non}} Tusculo Romam, sed Roma Tusculum {{it}}. Tusculum est {{ante}} eum, {{post}} eum est Roma. Cornelius equo {{vehitur}}, is non {{ambulat}}. Iulius et Cornelius ad villas suas {{eunt}}.',
      ],
    },
    {
      id: 'pensum-c',
      latinLabel: 'PENSVM C',
      title: 'Answer in Latin',
      instruction: 'Answer each question with a full Latin sentence, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'Ambulatne Iulius?', a: 'Iulius non ambulat, sed in lectica a servis portatur.' },
        { q: 'Qui Iulium portant?', a: 'Ursus et Davus Iulium portant.' },
        { q: 'Quid portant Syrus et Leander?', a: 'Syrus et Leander duos saccos portant.' },
        { q: 'Unde venit Iulius et quo it?', a: 'Iulius Tusculo venit et ad villam suam it.' },
        { q: 'Quo it Medus?', a: 'Medus Romam it.' },
        { q: 'Etiamne Cornelius Tusculo Romam it?', a: 'Cornelius non Tusculo Romam, sed Roma Tusculum it.' },
        { q: 'Ubi habitat Cornelius?', a: 'Cornelius Tusculi habitat.' },
        { q: 'Cur Medus laetus est?', a: 'Medus laetus est, quia Lydia amica eius Romae habitat.' },
        { q: 'Quae est Lydia?', a: 'Lydia amica Medi est, femina pulchra et proba.' },
        { q: 'Quid habet Medus in sacculo suo?', a: 'Medus nummos domini in sacculo suo habet.' },
        { q: 'Suntne amici Iulius et Medus?', a: 'Non; Iulius dominus Medi est et Medus servus eius.' },
        { q: "Num 'portat' verbum passivum est?", a: "'Portat' verbum activum est, non passivum." },
      ],
    },
  ],
}

export default chapter
