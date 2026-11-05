// Capitulum XX — Parentes
// Sources: Ørberg, Lingua Latina per se Illustrata, Pars I: Familia Romana (2nd ed.)
// Reading text, grammar and exercises adapted and re-typeset for the web.

const chapter = {
  number: 20,
  roman: 'XX',
  slug: 'parentes',
  latinTitle: 'PARENTES',
  title: 'Parents',
  tagline:
    'A newborn baby, its nurse, and little Iulia, who does not want a sister — a chapter about ' +
    'parents and children that turns the story to the future: erit, habebit, dormiet, computabit.',
  status: 'complete',
  overview:
    'A new baby is coming to the household, and this chapter looks at parents and children: how a ' +
    'tiny infant is fed and cared for, who nurses it, and what children learn at home and in school. ' +
    'In the peristyle Aemilia and Iulius argue about sons and daughters, and little Iulia declares ' +
    'that she does not want a sister. Through it all runs the grammar of the chapter — the future ' +
    'tense, the form that tells what will happen tomorrow: erit, habebit, dormiet, computabit, parebit, scribet.',
  objectives: [
    'Read the chapter as prose and dialogue, and follow the family through the coming birth of a child.',
    'Form the future tense in all four conjugations: -bit/-bunt and -et/-ent.',
    'Use the irregular future of esse: ero, eris, erit, erimus, eritis, erunt.',
    'Recognise the future passive built on the same endings: laudabor, laudaberis, laudabitur.',
    'Talk in Latin about parents, infants, nurses, school, and the future.',
  ],
  readings: [
    {
      id: 'infantes',
      latinTitle: 'INFANTES',
      title: 'Infants',
      paragraphs: [
        'Parvuli qui nondum fari possunt infantes dicuntur. Parvulus infans in cunis cubare solet. Cunae sunt cunabula infantis. Infans multas horas dormit, non solum nocte sed etiam die; nam longus somnus infanti tam necessarius est quam cibus. Infans neque somno neque cibo carere potest.',
        'Quomodo infans, qui fari non potest, postulat? Infans qui cibo caret magna voce vagit. Parvulus infans cibum postulat. Tum mater accurrit infantemque ad pectus suum apponit. Infans lac mammae bibit. Parvulus infans, cui dentes nulli sunt, non pane, sed lacte vivit.',
        'Si mater infantem suum ipsa alere non potest sive vult, infans ab alia muliere alitur, quae ei in loco matris est. Mulier quae alienum infantem alit nutrix appellatur. Multi infantes Romani non a matribus suis, sed a nutricibus aluntur. Multae matres infantes suos ipsae alere nolunt.',
        'Ante quinque annos Iulia parvula infans erat. Tunc infantem in cunis habebat Aemilia. Nunc ea parvulo infante caret: cunae vacuae sunt.',
        'Sed post paucos menses novus infans in cunis erit. Aemilia rursus parvulum infantem habebit neque cunae vacuae erunt. Tum Iulius et Aemilia quattuor liberos habebunt. Aemilia laeta cunas movebit et parva voce cantabit: "Lalla." Pater infantem suum in manibus portabit eumque non minus amabit quam mater. Pater et mater infantem suum aeque amabunt.',
        'Anno post pater et mater ab infante suo appellabuntur. Aemilia autem "mamma" appellabitur, non "mater", neque Iulius "pater", sed "tata" appellabitur; neque enim infans ipsa nomina "patris" et "matris" dicere poterit. Infans igitur parentibus suis dicet: "Mamma! Tata!" Neque solum prima verba, sed etiam primos gradus faciet infans. Initio pater eum sustinebit ac manu ducet; mox vero infans solus ambulare incipiet neque a parentibus sustinebitur neque manu ducetur. Infans ambulans a parentibus laetis laudabitur. Simul infans plura verba discet et mox recte loqui sciet.',
        'Utra infantem Aemiliae alet, materne an nutrix? Infans a matre aletur. Aemilia ipsa infantem vagientem ad pectus suum apponet. Infans lac matris bibet, non nutricis. Tum mater infantem in cunas imponet. Vesperi duae ancillae cunas in cubiculum parentum portabunt atque ante lectum eorum ponent. Si infans bene dormiet neque vagiet, parentes quoque bene dormient neque infante vagiente e somno excitabuntur.',
      ],
      notes: [
        {
          term: 'infans (infantis)',
          gloss: 'a baby, an infant — one who cannot yet speak (in-fans = "not speaking").',
        },
        { term: 'cunae', gloss: 'a cradle; the word is plural in Latin (cunae, cunarum).' },
        { term: 'vagit / lac', gloss: 'cries, wails / milk (lac, lactis).' },
        {
          term: 'nutrix (nutricis)',
          gloss: 'a nurse, a wet-nurse — a woman who feeds another woman\'s child.',
        },
        { term: 'carere + abl.', gloss: 'to lack, to be without: cibo caret — he lacks food.' },
        { term: 'appellare', gloss: 'to call, to address by name.' },
        { term: 'erit / erunt', gloss: 'future of esse: he will be / they will be.' },
      ],
    },
    {
      id: 'colloquium-parentum',
      latinTitle: 'COLLOQVIVM PARENTVM',
      title: 'The Parents\' Conversation',
      paragraphs: [
        'Iulius adhuc in peristylo cum uxore colloquitur. Aemilia fessa in sella considit. Maritus et uxor iam non de praeterito colloquuntur, sed de tempore futuro. Sermo eorum est de rebus futuris.',
        'Iulius autem, qui iam intellegit Aemiliam novum infantem habere velle, inquit: "O Aemilia! Mox parvulum filium habebimus." Aemilia: "Filium? Iam duos filios habemus. Ego alteram filiam habere volo, plures quam duos filios nolo! Tu filium habere vis, Iuli? Nonne laetus eris, si filium habebis? Num parvulam filiam minus amabis quam filium?" Iulius: "Profecto laetus ero, si alteram filiam habebo. Non filium magis amabo quam parvulam filiam."',
        'Aemilia: "Iam filios tuos magis amas quam tuam Iuliam filiolam: Marcum et Quintum saepe laudas, sed Iuliam raro laudas, quamquam proba est puella. Vos viri filios modo habere vultis, filias non amatis!" Aemilia surgit atque gradum adversus ostium facit. Iulius: "Mane hic apud me, Aemilia!" Aemilia alterum gradum ad ostium versus facit, tum incerta consistit. Iulius: "Noli abire! Tecum colloqui volo." Aemilia non abit, sed apud maritum manet. Coniuges colloqui pergunt. Ecce colloquium eorum:',
        'Iulius: "Nos viri non filios tantum, sed etiam filias habere volumus, nec filias minus amamus quam filios. Certe mulieres rarius a liberis suis discedunt ..." Aemilia: "Multae matres infantes suos apud nutrices relinquunt, ego vero manebo apud infantem meum: numquam ab eo discedam! Si aeger erit, ipsa eum curabo totamque noctem apud eum vigilabo; nemo infantem aegrum tam bene curare potest quam mater ipsa."',
        'Iulius: "Nonne ab infante sano discedes?" Aemilia: "Minime! Bona mater semper apud infantem suum manere debet. Sive infans valet sive aegrotat, mater ipsa eum curare et alere debet — hoc est matris officium!" Iulius: "Tune ipsa infantem tuum lacte tuo ales?" Aemilia: "Profecto infantem meum ipsa alam. Ego faciam officium meum! Neque solum die, sed etiam nocte apud infantem ero: semper cum eo dormiam."',
        'Iulius: "Quid? Nos et infans in eodem cubiculo dormiemus? Vix unam horam dormire poterimus, si infans vagiet. Si tu et infans tuus in cubiculo nostro dormietis, ego profecto in alio cubiculo dormiam, ubi ab infante vagiente non excitabor!" Aemilia: "O Iuli! Ita loquitur homo qui officium suum nescit!"',
        'Iulius: "Meum officium est pecuniam facere ac magnam familiam alere, non cum infante vagiente cubare! Somnus viro industrio necessarius est!" Aemilia irata: "Noli pergere!" inquit, "Plura a te audire nolo!" atque iterum ad ostium versus ire incipit. "Mane, Aemilia!" inquit Iulius, "Noli ita me relinquere!" sed illa adversus ostium ire pergit.',
      ],
      notes: [
        { term: 'peristylum', gloss: 'the colonnaded garden-court of a Roman house.' },
        {
          term: 'praeteritum / futurum',
          gloss: 'the past / the future; de tempore futuro — about the future.',
        },
        { term: 'nolo / nolle', gloss: 'I do not want; nolunt — they refuse.' },
        { term: 'manebo / discedam', gloss: 'future: I shall stay / I shall leave (manere, discedere).' },
        { term: 'alam / curabo', gloss: 'I shall feed / I shall care for (alere, curare).' },
        { term: 'sive ... sive', gloss: 'whether ... or: sive valet sive aegrotat.' },
        {
          term: 'officium',
          gloss: 'duty, job: hoc est matris officium — this is a mother\'s duty.',
        },
      ],
    },
    {
      id: 'de-sorore',
      latinTitle: 'DE SORORE',
      title: 'About a Sister',
      paragraphs: [
        'Tum vero Syra, quae eo ipso tempore peristylum intrat una cum Iulia, dominae in ostio occurrit. Aemilia ante Syram et Iuliam consistens: "Quid vultis?" inquit, "Cur non manetis in horto?" Syra: "Quia mox imbrem habebimus: ecce caelum atris nubibus operitur. Si in horto manebimus, umidae erimus. Vos quoque umidi eritis, domini, si hic in peristylo manebitis."',
        'Iulius caelum spectans: "Recte dicis" inquit, "Illae nubes imbrem afferent. Venite mecum in atrium! Mox rursus lucebit." Iulius atrium intrat; Aemilia eum sequitur una cum Iulia et Syra. In atrio Iulius et Aemilia silentes imbrem per impluvium cadentem aspiciunt. Iulia silentium parentum animadvertit, et "Quid siletis?" inquit, "Estisne tristes? Ego vos consolabor!"',
        'Aemilia: "Cogitamus de miseris nautis, quorum officium est navigare, sive mare tranquillum sive turbidum est. Multi nautae nunc in mare merguntur, dum res necessarias ex terris alienis in Italiam advehere conantur. O miseros nautas, qui numquam domum revertentur! O miseros liberos nautarum, qui post hanc tempestatem patres suos non videbunt!"',
        'Iulia: "Ego laetor quod pater meus nauta non est et domi apud nos manere potest." Iulius, qui cras Romam ibit: "Non semper" inquit, "mihi licet apud vos manere, Iulia. Necesse est mihi cras rursus a vobis discedere, nec vero in terras alienas ibo, ut nauta." Iulia: "Quo ibis, tata? Quando reverteris? Ego et mamma te sequemur!" Iulius: "Quare me sequemini? Romam proficiscar, unde tertio quoque die revertar, si potero."',
        'Iulia: "Noli a nobis discedere! Vel si necesse erit domo abire, non modo tertio quoque die, sed cotidie ad nos reverti debes. Hoc postulo a te! Nolo te carere, tata. Cotidie tibi occurram." Iulius: "Audisne, Aemilia? Iulia dicit se patre suo carere nolle, ergo me non minus diligit quam te. Atque ego profecto filiam meam aeque diligo ac filios. Nec alteram filiam minus diligam."',
        'Iulia: "Quam alteram filiam dicis? Mihi soror non est." Iulio silente, Aemilia: "Nonne gaudebis, Iuliiola" inquit, "si parvulam sororem habebis?" Iulia: "Sororem habere nolo! Nam si sororem habebo, ea sola a vobis amabitur, ego non amabor!" Aemilia: "Certe tu non minus a nobis amaberis: tu et parvula soror aeque amabimini."',
        'Iulia: "Si aeque amabimur, laeta ero. Sed multo magis laetabor, si fratrem habebo, mamma! Nonne tu quoque laetaberis, tata, si filiolum habebis?" Iulius silet. Aemilia vero, antequam Iulia silentium animadvertit: "Noli dicere \'tatam\' et \'mammam\'," inquit, "Ea nomina a te audire nolumus. Ita parvuli infantes loquuntur, nec sermo infantium te decet. \'Patrem\' et \'matrem\' dicere oportet."',
        'Iulia: "Si infans non sum, nolite me \'Iuliolam\' vocare! Id nomen me non decet. Mihi nomen est \'Iulia\'." Aemilia: "Recte dicis, Iulia. Tu igitur a nobis \'Iulia\' vocaberis, et nos a te \'pater\' et \'mater\' vocabimur." Iulia: "Ita semper a me vocabimini, tata et mamma!"',
      ],
      notes: [
        { term: 'imber (imbris)', gloss: 'rain, a rainstorm; mox imbrem habebimus — we shall soon have rain.' },
        { term: 'atris nubibus', gloss: 'with dark clouds (ater = black, gloomy).' },
        { term: 'afferent / lucebit', gloss: 'will bring / will shine — future forms.' },
        { term: 'laetor / consolabor', gloss: 'I rejoice / I shall comfort.' },
        { term: 'laetabor / diligam', gloss: 'I shall rejoice / I shall love — future forms.' },
        { term: 'soror / frater', gloss: 'sister / brother.' },
        { term: 'vocaberis / vocabimur', gloss: 'you will be called / we shall be called — future passive.' },
      ],
    },
  ],
  grammar: [
    {
      id: 'tempus-futurum',
      latinTitle: 'Tempus Futurum',
      title: 'The Future Tense',
      intro:
        'The future tense tells what will happen: mox nox erit — soon it will be night. The first and ' +
        'second conjugations add -b- to the stem (-bit, -bunt); the third and fourth take -et, -ent.',
      paradigms: [
        {
          caption: 'futurum: the endings (I & II vs. III & IV conjugation)',
          head: ['', 'I / II coniugatio', 'III / IV coniugatio'],
          rows: [
            ['persona prima (sing.)', '-bo', '-am'],
            ['persona secunda (sing.)', '-bis', '-es'],
            ['persona tertia (sing.)', '-bit', '-et'],
            ['persona prima (plur.)', '-bimus', '-emus'],
            ['persona secunda (plur.)', '-bitis', '-etis'],
            ['persona tertia (plur.)', '-bunt', '-ent'],
          ],
        },
        {
          caption: 'the four conjugations, third person singular',
          head: ['Coniugatio', 'Infinitivus', 'Futurum'],
          rows: [
            ['I', 'computare', 'computabit — will calculate'],
            ['II', 'parere', 'parebit — will obey'],
            ['III', 'scribere', 'scribet — will write'],
            ['IV', 'dormire', 'dormiet — will sleep'],
          ],
        },
        {
          caption: 'esse — to be (future)',
          head: ['', 'Singularis', 'Pluralis'],
          rows: [
            ['persona prima', 'ero — I shall be', 'erimus — we shall be'],
            ['persona secunda', 'eris — you will be', 'eritis — you will be'],
            ['persona tertia', 'erit — he/she will be', 'erunt — they will be'],
          ],
        },
      ],
      points: [
        'The first two conjugations insert -b- before the ending: ama-bo, ama-bis, ama-bit ... ama-bunt.',
        'The third and fourth conjugations use -am, -es, -et ... -ent: scribam, scribes, scribet; dormiam, dormies, dormiet.',
        'The future of esse is irregular and very common: ero, eris, erit, erimus, eritis, erunt.',
        'Compare present and future: dormit — he sleeps; dormiet — he will sleep.',
      ],
    },
    {
      id: 'futurum-passivum',
      latinTitle: 'Futurum Passivum',
      title: 'The Future Passive',
      intro:
        'The same future endings take an -r in the passive: the good pupil will be praised — discipulus ' +
        'bonus laudabitur.',
      paradigms: [
        {
          caption: 'futurum passivum: the endings',
          head: ['', 'I / II coniugatio', 'III / IV coniugatio'],
          rows: [
            ['persona prima (sing.)', '-bor', '-ar'],
            ['persona secunda (sing.)', '-beris', '-eris'],
            ['persona tertia (sing.)', '-bitur', '-etur'],
            ['persona prima (plur.)', '-bimur', '-emur'],
            ['persona secunda (plur.)', '-bimini', '-emini'],
            ['persona tertia (plur.)', '-buntur', '-entur'],
          ],
        },
      ],
      points: [
        'laudabor, laudaberis, laudabitur — I shall be praised, you will be praised, he will be praised.',
        'reprehendar, reprehenderis, reprehendetur — I shall be blamed, and so on (laudare, reprehendere).',
        'The future passive is built on the same stem and time as the future active; only the endings differ.',
        'A pupil says: a magistro laudabor, non reprehendar — I shall be praised by the teacher, not blamed.',
      ],
    },
  ],
  vocabulary: [
    { latin: 'infans (infantis)', english: 'infant, baby', pos: 'noun (m.)' },
    { latin: 'parvulus', english: 'little, tiny', pos: 'adjective' },
    { latin: 'cunae', english: 'cradle (plural)', pos: 'noun (f.)' },
    { latin: 'somnus', english: 'sleep', pos: 'noun (m.)' },
    { latin: 'cibus', english: 'food', pos: 'noun (m.)' },
    { latin: 'lac (lactis)', english: 'milk', pos: 'noun (n.)' },
    { latin: 'nutrix (nutricis)', english: 'nurse, wet-nurse', pos: 'noun (f.)' },
    { latin: 'maritus', english: 'husband', pos: 'noun (m.)' },
    { latin: 'uxor (uxoris)', english: 'wife', pos: 'noun (f.)' },
    { latin: 'filius', english: 'son', pos: 'noun (m.)' },
    { latin: 'filia', english: 'daughter', pos: 'noun (f.)' },
    { latin: 'soror (sororis)', english: 'sister', pos: 'noun (f.)' },
    { latin: 'frater (fratris)', english: 'brother', pos: 'noun (m.)' },
    { latin: 'officium', english: 'duty, job', pos: 'noun (n.)' },
    { latin: 'sermo (sermonis)', english: 'conversation, talk', pos: 'noun (m.)' },
    { latin: 'discipulus', english: 'pupil, student', pos: 'noun (m.)' },
    { latin: 'magister', english: 'teacher, master', pos: 'noun (m.)' },
    { latin: 'ludus', english: 'school; game, play', pos: 'noun (m.)' },
    { latin: 'futurus', english: 'future, about to be', pos: 'adjective' },
    { latin: 'praeteritus', english: 'past, gone by', pos: 'adjective' },
    { latin: 'alienus', english: 'another\'s, foreign', pos: 'adjective' },
    { latin: 'aeger', english: 'sick, ill', pos: 'adjective' },
    { latin: 'tristis', english: 'sad', pos: 'adjective' },
    { latin: 'alere', english: 'feed, nourish', pos: 'verb' },
    { latin: 'carere', english: 'lack, be without (+ abl.)', pos: 'verb' },
    { latin: 'vagire', english: 'cry, wail', pos: 'verb' },
    { latin: 'postulare', english: 'demand, ask for', pos: 'verb' },
    { latin: 'appellare', english: 'call, address by name', pos: 'verb' },
    { latin: 'ambulare', english: 'walk', pos: 'verb' },
    { latin: 'laudare', english: 'praise', pos: 'verb' },
    { latin: 'discere', english: 'learn', pos: 'verb' },
    { latin: 'loqui', english: 'speak', pos: 'verb' },
    { latin: 'relinquere', english: 'leave (behind)', pos: 'verb' },
    { latin: 'curare', english: 'care for, look after', pos: 'verb' },
    { latin: 'vigilare', english: 'stay awake', pos: 'verb' },
    { latin: 'pergere', english: 'continue, go on', pos: 'verb' },
    { latin: 'occurrere', english: 'meet, run up to', pos: 'verb' },
    { latin: 'reverti', english: 'return', pos: 'verb' },
    { latin: 'laetari', english: 'rejoice, be glad', pos: 'verb' },
    { latin: 'diligere', english: 'love, cherish', pos: 'verb' },
    { latin: 'computare', english: 'calculate, reckon', pos: 'verb' },
    { latin: 'parere', english: 'obey', pos: 'verb' },
    { latin: 'scribere', english: 'write', pos: 'verb' },
    { latin: 'dormire', english: 'sleep', pos: 'verb' },
    { latin: 'esse', english: 'to be (ero, eris, erit)', pos: 'verb' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PENSVM A',
      title: 'Fill in the endings',
      instruction: 'Complete each verb with the correct future ending.',
      type: 'fill',
      items: [
        "Mox novus infans in cunis Aemiliae er{{it}}. Aemilia rursus infantem hab{{ebit}}. Tum quattuor liberi in familia er{{unt}}. Iulius et Aemilia quattuor liberos hab{{ebunt}}. Aemilia infantem suum am{{abit}}. Iulius et Aemilia infantem suum aeque am{{abunt}}. Anno post infans prima verba discet primosque gradus fac{{iet}}. Infans ambulans a parentibus lauda{{bitur}}.",
        "Aemilia: 'Ego infantem meum bene cur{{abo}}: semper apud eum man{{ebo}}, numquam ab eo disced{{am}}.' Iulius: 'Certe bona er{{is}}, Aemilia: infantem tuum ipsa cur{{abis}} nec eum apud nutricem relinqu{{es}}.' Aemilia: 'Etiam nocte apud infantem er{{o}}, semper cum eo dorm{{iam}}. Nos et infans in eodem cubiculo dorm{{iemus}}.' Iulius: 'Non dormiemus, sed vigil{{abo}}! Nam certe ab infante vagiente excit{{abor}}!' Aemilia: 'Ego excit{{abor}}, tu bene dormies nec excit{{aberis}}!'",
      ],
    },
    {
      id: 'pensum-b',
      latinLabel: 'PENSVM B',
      title: 'Complete the sentences',
      instruction: 'Fill each gap with the missing word.',
      type: 'fill',
      items: [
        "Parvulus puer qui fari non potest {{infans}} appellatur. Infans qui cibo {{caret}} magna voce {{vagit}}. Non panis, sed {{lac}} cibus infantium est. Nutrix est {{mulier}} (= femina) quae non suum, sed {{alienum}} infantem {{alit}}. Multae matres infantes suos ipsae alere {{nolunt}}.",
        "Maritus et uxor iam non de tempore praeterito {{colloquuntur}}, sed de tempore {{futuro}}. Aemilia: 'Cur tu filium habere {{vis}}, Iuli? Ego alteram filiam habere {{volo}}, plures quam duos filios {{nolo}} (= non volo). Vos viri filios tantum {{vultis}}! Filios {{magis}} diligitis quam filias!' Iulius {{silet}} (= tacet). Aemilia irata {{gradum}} adversus ostium facit, sed Iulius '{{Mane}} hic apud me!' inquit, '{{Noli}} discedere!' Aemilia manet ac {{loquitur}}: 'Bona mater apud infantem suum manere {{debet}}, hoc matris {{officium}} est. Nemo enim infantem melius {{curare}} potest quam mater ipsa.'",
      ],
    },
    {
      id: 'pensum-c',
      latinLabel: 'PENSVM C',
      title: 'Answer in Latin',
      instruction: 'Answer each question with a full Latin sentence, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'Ubi parvulus infans cubat?', a: 'Parvulus infans in cunis cubat.' },
        { q: 'Quid facit infans qui cibo caret?', a: 'Infans qui cibo caret magna voce vagit.' },
        { q: 'Quid est cibus infantium parvulorum?', a: 'Lac est cibus infantium parvulorum.' },
        { q: 'Num omnes infantes a matribus suis aluntur?', a: 'Non omnes: multi infantes a nutricibus aluntur.' },
        { q: 'Quae sunt prima verba infantis?', a: 'Prima verba infantis sunt "mamma" et "tata".' },
        { q: 'Quando Aemilia novum infantem habebit?', a: 'Aemilia novum infantem post paucos menses habebit.' },
        { q: 'Cur Aemilia a marito suo discedere vult?', a: 'Aemilia discedere vult, quia irata est: Iulius filios magis amare videtur quam filias.' },
        { q: 'Cur Iulius in alio cubiculo dormire vult?', a: 'Iulius in alio cubiculo dormire vult, quia ab infante vagiente excitari non vult.' },
        { q: 'Quid Aemilia officium matris esse dicit?', a: 'Aemilia dicit officium matris esse infantem suum ipsum curare et alere.' },
        { q: 'Cur Syra et Iulia in horto non manent?', a: 'In horto non manent, quia mox imber erit.' },
        { q: 'Cur Iulia sororem habere non vult?', a: 'Iulia sororem habere non vult, quia timet ne sola a parentibus ametur.' },
      ],
    },
  ],
}

export default chapter
