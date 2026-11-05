// Capitulum XXX — Convivium
// Sources: Ørberg, Lingua Latina per se Illustrata, Pars I: Familia Romana (2nd ed.)
// Reading text, grammar and exercises adapted and re-typeset for the web.

const chapter = {
  number: 30,
  roman: 'XXX',
  slug: 'convivium',
  latinTitle: 'CONVIVIVM',
  title: 'The Dinner Party',
  tagline:
    'Guests recline, the wine is poured, and over dinner the future perfect is served: if you have obeyed, you will be praised.',
  status: 'complete',
  overview:
    'Iulius comes in from the fields, bathes, and welcomes his friends Cornelius and Orontes to dinner. ' +
    'The guests recline in the triclinium while the cook and the waiters bring course after course, and the ' +
    'conversation wanders from city business to country life and then to the merits of Falernian wine. ' +
    'The grammar of the evening is the future perfect — the tense of what will have happened before ' +
    'something else: si fortiter pugnaverit, dux eum laudabit.',
  objectives: [
    'Read a prose account of a Roman dinner party, from the bath to the last cup.',
    'Recognise the future perfect active: -ero, -eris, -erit, -erimus, -eritis, -erint.',
    'Form the future perfect passive with the perfect participle plus ero, eris, erit.',
    'Use the future perfect in conditional and temporal clauses: si ... -erit, cum ... -erit.',
    'Talk about food, wine and dining: cena, vinum, poculum, gustare, miscere.',
  ],
  readings: [
    {
      id: 'adventus-hospitum',
      latinTitle: 'ADVENTVS HOSPITVM',
      title: 'The Guests Arrive',
      paragraphs: [
        "Ex agris reversus Iulius continuo balneum petit, atque aqua calida, tum frigida lavatur. Dum ille vestem novam induit, Cornelius et Orontes et hospites eius cum uxoribus Fabia et Paula adveniunt. (Hospites sunt amici quorum alter alterum bene recipit domum suam, etiam si inexspectati venerint.) Hodie autem hospites Iulii exspectati veniunt, nam eos vocavit ad cenam. (Cena est cibus quem circiter hora nona vel decima sumunt.)",
        "Aemilia atrium intrans hospites salutat et maritum tardum excusat: 'Iulius tarde ex agris revertit quod nimis diu ambulavit. Ergo nondum exiit e balneo. Sed brevi lautus erit.' Tum Iulius lautus et nova veste indutus intrat et amicos salvere iubet: 'Salvete, amici! Gaudeo vos omnes iam adesse. Quam ob rem tam raro te video, mi Corneli?'",
        "Cornelius: 'Nonnumquam te visere volui, nec prius urbem relinquere potui prae multis et magnis negotiis meis. Nunc demum, postquam heri ad villam Tusculanam redii, paulum requiescere possum et amicos visere. Post tanta negotia magis quam umquam otio fruor.'",
        "Iulius: 'Tune quoque Roma venis, Orontes?' Orontes: 'Nuper longum iter feci in Graeciam. Idibus Maiis demum ex itinere Romam reverti, unde hodie venio.' Iulius: 'Ergo vos mihi aliquid de rebus urbanis novissimis nuntiabitis.' Cornelius: 'Et tu nos docebis de rebus rusticis, ut agricola studiosus et diligens.'",
        "Iulius frontem contrahit et 'Agricola' inquit 'ipse non sum, sed multis agricolis praesum ac diligenter curo ut coloni agros meos bene colant.' Orontes, qui vita rustica non fruitur, 'Prudenter facis' inquit 'quod agros ipse non colis. Si necesse est in agris laborare, vita rustica non iucunda, sed molesta est. Ego numquam instrumento rustico usus sum.'",
        "Iulius: 'De rebus rusticis et urbanis colloquemur inter cenam. Primum omnium cenabimus. Sex horae iam sunt cum cibum non sumpsi. Venter mihi contrahitur propter famem.' Cornelius: 'Sex horae nihil est. Homo sex dies cibo carere potest, nec tamen fame moritur.' Iulius: 'Dubito num ego tam diu famem ferre possim.' Cornelius: 'Id non nego, sed multo molestior est sitis quam fames.'",
        "Orontes ridens 'Equidem' inquit 'sine aqua iucunde vivere non possum, sine vino non item! Magnum bonum est vinum.' Cornelius: 'Nemo negat vinum aqua iucundius esse, tamen aquam bibere malo quam sitim pati. Num tu sitim perferre mavis quam aquam bibere?' Orontes: 'Melius quidem est aquam bibere quam siti mori. Ex malis minimum eligere oportet. Nec vero ego vivo nisi cotidie bono vino fruor. Vinum vita est!' Cornelius: 'Non vivimus, ut bibamus, sed bibimus, ut vivamus.'",
        "Hic Aemilia 'Necesse est' inquit 'paulisper famem sitimque ferre, dum cibus coquitur et triclinium exornatur.'",
      ],
      notes: [
        { term: 'hospes', gloss: 'guest (plural hospites); the same word can also mean “host” — it covers both sides of hospitality.' },
        { term: 'balneum', gloss: 'a bath; balneum petere = to head for the bath.' },
        { term: 'lautus', gloss: 'washed, bathed — from lavare, to wash.' },
        { term: 'salvere iubere', gloss: 'to bid someone be well, i.e. to greet them: amicos salvere iubet.' },
        { term: 'otium', gloss: 'leisure, free time — the opposite of negotium.' },
        { term: 'frui', gloss: 'to enjoy — it takes the ablative: otio fruor, I enjoy leisure.' },
        { term: 'fames / sitis', gloss: 'hunger / thirst.' },
        { term: 'nuntiabitis', gloss: 'you will report — future of nuntiare.' },
      ],
    },
    {
      id: 'triclinium',
      latinTitle: 'TRICLINIVM',
      title: 'The Dining Room',
      paragraphs: [
        "(Servus cuius negotium est cibum coquere atque conficere in culina, cocus appellatur. Alii servi, qui ministri vocantur, cibum paratum e culina in triclinium portant.)",
        "In triclinio sunt tres lecti, lectus summus, medius, imus, et mensa in medio. Ante convivium triclinium floribus exornatur et vestis pretiosa super lectos sternitur. Neque enim sedentes cenant Romani, sed in lectis cubantes. Quot convivae in singulis lectis accumbunt? In singulis lectis aut singuli aut bini aut terni convivae accumbere solent. Cum igitur paucissimi sunt convivae, non pauciores sunt quam tres; cum plurimi, non plures quam novem — nam ter terni sunt novem.",
        "Iulius: 'Hora decima est. Cenam iam pridem paratam esse oportuit! Nimis tardus est iste cocus!' Aemilia: 'Tuumne hoc negotium est an meum? Uter nostrum in culina praeest? Nondum hora decima est. Patienter exspecta, dum servi lectos sternunt. Cenabimus cum primum cocus cenam paraverit et servi triclinium ornaverint. Brevi cena parata et triclinium ornatum erit.'",
        "Tandem puer 'cenam paratam esse' nuntiat. 'Triclinium intremus!' inquit Iulius, atque convivae laeti triclinium floribus exornatum et veste pulcherrima stratum intrant. Rosae et lilia et alia multa florum genera in mensa sparsa sunt inter vasa et pocula argentea; nec enim quidquam nisi argentum mensam decet viri nobilis. (Argentum quidem minoris pretii est quam aurum, nec vero quisquam ex vasis aureis cenat nisi homines divitissimi atque gloriosi, ut reges Orientis.)",
        "Iulius, dominus convivii, cum Aemilia in lecto medio accumbit; in aliis duobus lectis bini convivae accumbunt. Cornelius et Fabia in lecto summo ad sinistram, Orontes et Paula ad dextram Aemiliae in lecto imo. Tum demum incipit cena.",
      ],
      notes: [
        { term: 'triclinium', gloss: 'dining room, named from the three lecti (couches) set around the table.' },
        { term: 'lectus summus / medius / imus', gloss: 'the three couches: the highest, the middle and the lowest.' },
        { term: 'accumbere / cubare', gloss: 'to recline at table — Romans ate lying down, not sitting.' },
        { term: 'sternere', gloss: 'to spread, lay out: lectos sternere = to make up the couches.' },
        { term: 'exornare', gloss: 'to decorate, adorn: triclinium floribus exornatur.' },
        { term: 'cocus / minister', gloss: 'cook / waiter, servant; the minister carries the food from kitchen to table.' },
        { term: 'argentum', gloss: 'silver; vasa argentea = silver dishes.' },
        { term: 'praeesse', gloss: 'to be in charge of (+ dative): uter in culina praeest? — which of us is in charge in the kitchen?' },
      ],
    },
    {
      id: 'cena',
      latinTitle: 'CENA',
      title: 'The Dinner',
      paragraphs: [
        "Primum ova convivis apponuntur; deinde pisces; sequitur caput cenae: porcus quem Iulius e grege elegit; postremo mensa secunda: nuces et varia genera malorum. Cibus optimus est atque convivis placet, maxime vero laudatur caro porci, quam minister cultro acute secat convivis spectantibus.",
        "'Haec caro valde mihi placet' inquit Fabia cum primum carnem gustavit, 'Cocus iste sane negotium suum scit.' 'Ego cocum non laudo' inquit Orontes et salem carni aspergit, 'qui sale non utitur! Optima quidem est caro, sed sale caret.' Orontes cibum sale aspergere solet, ut sitim augeat! (Sal est materia alba quae in mari et sub terra invenitur.)",
        "Iam ministri vinum et calidam in pocula fundunt. Romani vinum cum aqua miscent neque vinum merum bibere solent. Solus Orontes, cui non placet vinum mixtum, merum potat, sed is Graecus est atque libertinus. (Libertinus est qui servus fuit et liberatus est; in lecto imo accumbunt libertini.)",
        "Iulius poculum tollens 'Ergo bibamus!' inquit, 'Hoc vinum factum est ex optimis uvis mearum vinearum. Nec vinum meum peius esse mihi videtur quam vinum illud Falernum, quod vinum Italiae optimum habetur.' (Falernum est vinum ex agro Falerno, regione Campaniae.)",
        "Statim Cornelius 'Sane optimum' inquit 'vinum est tuum, etiam melius quam Falernum', itemque Fabia 'Sane ita est' inquit, nam ea omnibus de rebus idem sentit quod maritus.",
        "At Paula vinum gustans 'Hoc vinum' inquit 'nimis acerbum est: os mihi contrahitur. Ego vinum dulce amo; semper mel vino misceo.' Statim minister mel apportat, quod Paula in poculum suum fundit. (Mel est quod apes ex floribus quaerunt; nihil melle dulcius est.)",
        "Iulius: 'Idem non omnibus placet. Sed quidnam tu sentis, Orontes? Utrum vini genus melius esse tibi videtur, Falernum an Albanum?' 'Equidem' inquit Orontes 'sententiam meam non ante dicam quam utrumque gustavero.'",
        "Ad hoc Iulius 'Recte me mones' inquit 'unum vini genus parum esse in bona mensa. Profecto utrumque gustabis. Age, puer, profer Falernum quod optimum habeo! Tum demum hoc vinum cum illo comparare poterimus, cum utrumque gustaverimus. Ergo pocula exhaurite, amici! Cum primum meum vinum potaveritis, Falernum potabitis!'",
        "Poculum Orontis primum Falerno completur, nam is iam pridem poculum suum exhausit. Deinde ministri Falernum in cetera pocula fundunt. Omnes, postquam vinum gustaverunt, idem sentiunt: vinum Falernum melius esse vino Albano! Cornelius et Orontes se aspiciunt. Neuter eorum sententiam suam aperte dicere audet. Tum Orontes sic incipit: 'Nescio equidem utrum melius sit. Dulcius quidem est Falernum, nec vero vinum nimis acerbum esse censeo ...' At Cornelius prudenter 'Utrumque' inquit 'aeque bonum est. Neutrum melius esse mihi videtur.'",
      ],
      notes: [
        { term: 'apponere', gloss: 'to serve, set before: ova convivis apponuntur.' },
        { term: 'caput cenae', gloss: 'the “head” of the dinner — the main dish, the roast.' },
        { term: 'gustare', gloss: 'to taste.' },
        { term: 'caro', gloss: 'meat, flesh; caro porci = pork.' },
        { term: 'sal', gloss: 'salt; sale carere = to lack salt.' },
        { term: 'merum vinum', gloss: 'undiluted wine; Romans usually mixed their wine with water.' },
        { term: 'miscere / fundere', gloss: 'to mix / to pour.' },
        { term: 'acerbus / dulcis', gloss: 'bitter, sharp / sweet — of wine.' },
        { term: 'exhaurire', gloss: 'to drain, empty: pocula exhaurire = to empty the cups.' },
      ],
    },
  ],
  grammar: [
    {
      id: 'futurum-perfectum-activum',
      latinTitle: 'Futurum Perfectum (Activum)',
      title: 'The Future Perfect Active',
      intro:
        'The future perfect describes an action that will already be finished when something else happens: ' +
        'dux militem laudabit, si fortiter pugnaverit — the commander will praise the soldier if he has ' +
        'fought bravely. It joins the perfect stem to the endings -ero, -eris, -erit, -erimus, -eritis, -erint.',
      paradigms: [
        {
          caption: 'futurum perfectum: laudare — to praise',
          head: ['', 'Singularis', 'Pluralis'],
          rows: [
            ['persona prima', 'laudavero — I shall have praised', 'laudaverimus — we shall have praised'],
            ['persona secunda', 'laudaveris — you will have praised', 'laudaveritis — you will have praised'],
            ['persona tertia', 'laudaverit — he/she will have praised', 'laudaverint — they will have praised'],
          ],
        },
        {
          caption: 'the endings',
          head: ['', 'Singularis', 'Pluralis'],
          rows: [
            ['persona prima', '-ero', '-erimus'],
            ['persona secunda', '-eris', '-eritis'],
            ['persona tertia', '-erit', '-erint'],
          ],
        },
        {
          caption: 'third person singular, the four conjugations',
          head: ['Coniugatio', 'Infinitivus perfecti', 'Futurum perfectum'],
          rows: [
            ['I', 'recitavisse', 'recitaverit — will have recited'],
            ['II', 'paruisse', 'paruerit — will have obeyed'],
            ['III', 'scripsisse', 'scripserit — will have written'],
            ['IV', 'audivisse', 'audiverit — will have heard'],
          ],
        },
        {
          caption: 'esse — to be (future perfect)',
          head: ['', 'Singularis', 'Pluralis'],
          rows: [
            ['persona prima', 'fuero — I shall have been', 'fuerimus — we shall have been'],
            ['persona secunda', 'fueris — you will have been', 'fueritis — you will have been'],
            ['persona tertia', 'fuerit — he/she will have been', 'fuerint — they will have been'],
          ],
        },
        {
          caption: 'promissa et minae: si ... -eris, ... -bo',
          head: ['Condicio', 'Consequens'],
          rows: [
            ['Si mihi parueris et industrius fueris,', 'te laudabo. — If you have obeyed me and been diligent, I shall praise you.'],
            ['Si piger fueris nec mihi parueris,', 'te non laudabo. — If you have been lazy and not obeyed me, I shall not praise you.'],
            ['Si prave scripseris et male recitaveris,', 'te verberabo. — If you have written and recited badly, I shall beat you.'],
            ['Si recte scripseris et bene recitaveris,', 'te laudabo. — If you have written and recited well, I shall praise you.'],
          ],
        },
      ],
      points: [
        'The future perfect adds -ero, -eris, -erit (sing.) and -erimus, -eritis, -erint (pl.) to the perfect stem: laudavero, laudaveris, laudaverit ...',
        'It names an action already completed before a future moment: laudabo si pugnaverit — I shall praise him if he has fought (i.e. if he fights and wins).',
        'The third person singular ends in -erit; the perfect infinitive without -isse gives the same stem: recitavisse → recitaverit.',
        'The endings are the same in every conjugation — only the perfect stem changes: recitaverit, paruerit, scripserit, audiverit.',
      ],
    },
    {
      id: 'futurum-perfectum-passivum',
      latinTitle: 'Futurum Perfectum (Passivum)',
      title: 'The Future Perfect Passive',
      intro:
        'The passive future perfect is made from the perfect participle together with the future of esse: ' +
        'laudatus ero — I shall have been praised. The participle, not the ending, carries the passive meaning.',
      paradigms: [
        {
          caption: 'laudatus ero — I shall have been praised (laudare — to praise)',
          head: ['', 'Singularis', 'Pluralis'],
          rows: [
            ['persona prima', 'laudatus ero — I shall have been praised', 'laudati erimus — we shall have been praised'],
            ['persona secunda', 'laudatus eris — you will have been praised', 'laudati eritis — you will have been praised'],
            ['persona tertia', 'laudatus erit — he will have been praised', 'laudati erunt — they will have been praised'],
          ],
        },
        {
          caption: 'activum ↔ passivum',
          head: ['Activum', 'Passivum'],
          rows: [
            ['Pater gaudebit si magister filium laudaverit.', 'Pater gaudebit si filius a magistro laudatus erit. — The father will be glad if his son has been praised by the teacher.'],
            ['Pater gaudebit si magister filios laudaverit.', 'Pater gaudebit si filii a magistro laudati erunt. — The father will be glad if his sons have been praised by the teacher.'],
          ],
        },
      ],
      points: [
        'The passive future perfect = perfect participle + the future of esse: laudatus ero, laudatus eris, laudatus erit ...',
        'The participle agrees with the subject: filius laudatus erit, filia laudata erit, filii laudati erunt.',
        'The doer of a passive verb stands in the ablative with a / ab: a magistro laudatus erit — he will have been praised by the teacher.',
        'Active and passive say the same thing: si magister filium laudaverit = si filius a magistro laudatus erit.',
      ],
    },
  ],
  vocabulary: [
    { latin: 'convivium', english: 'dinner party, banquet', pos: 'noun (n.)' },
    { latin: 'conviva', english: 'guest at dinner', pos: 'noun (m.)' },
    { latin: 'cena', english: 'dinner, main meal', pos: 'noun (f.)' },
    { latin: 'cocus', english: 'cook', pos: 'noun (m.)' },
    { latin: 'minister', english: 'servant, waiter', pos: 'noun (m.)' },
    { latin: 'triclinium', english: 'dining room', pos: 'noun (n.)' },
    { latin: 'lectus', english: 'couch, bed', pos: 'noun (m.)' },
    { latin: 'hospes', english: 'guest, host', pos: 'noun (m.)' },
    { latin: 'balneum', english: 'bath', pos: 'noun (n.)' },
    { latin: 'otium', english: 'leisure, free time', pos: 'noun (n.)' },
    { latin: 'negotium', english: 'business, task', pos: 'noun (n.)' },
    { latin: 'fames', english: 'hunger', pos: 'noun (f.)' },
    { latin: 'sitis', english: 'thirst', pos: 'noun (f.)' },
    { latin: 'vinum', english: 'wine', pos: 'noun (n.)' },
    { latin: 'poculum', english: 'cup', pos: 'noun (n.)' },
    { latin: 'argentum', english: 'silver', pos: 'noun (n.)' },
    { latin: 'caro', english: 'meat, flesh', pos: 'noun (f.)' },
    { latin: 'sal', english: 'salt', pos: 'noun (m.)' },
    { latin: 'mel', english: 'honey', pos: 'noun (n.)' },
    { latin: 'flos', english: 'flower', pos: 'noun (m.)' },
    { latin: 'lautus', english: 'washed, bathed', pos: 'adjective' },
    { latin: 'pretiosus', english: 'precious, expensive', pos: 'adjective' },
    { latin: 'acerbus', english: 'bitter, sharp', pos: 'adjective' },
    { latin: 'dulcis', english: 'sweet', pos: 'adjective' },
    { latin: 'merus', english: 'pure, undiluted', pos: 'adjective' },
    { latin: 'tardus', english: 'late, slow', pos: 'adjective' },
    { latin: 'accumbere', english: 'to recline (at table)', pos: 'verb' },
    { latin: 'cubare', english: 'to lie, recline', pos: 'verb' },
    { latin: 'sternere', english: 'to spread, lay out', pos: 'verb' },
    { latin: 'exornare', english: 'to decorate, adorn', pos: 'verb' },
    { latin: 'apponere', english: 'to serve, set before', pos: 'verb' },
    { latin: 'gustare', english: 'to taste', pos: 'verb' },
    { latin: 'miscere', english: 'to mix', pos: 'verb' },
    { latin: 'fundere', english: 'to pour', pos: 'verb' },
    { latin: 'exhaurire', english: 'to drain, empty', pos: 'verb' },
    { latin: 'coquere', english: 'to cook', pos: 'verb' },
    { latin: 'eligere', english: 'to choose, pick out', pos: 'verb' },
    { latin: 'reverti', english: 'to return', pos: 'verb' },
    { latin: 'frui', english: 'to enjoy (+ abl.)', pos: 'verb' },
    { latin: 'nuntiare', english: 'to announce, report', pos: 'verb' },
    { latin: 'praeesse', english: 'to be in charge of (+ dat.)', pos: 'verb' },
    { latin: 'prudenter', english: 'wisely, sensibly', pos: 'adverb' },
    { latin: 'nisi', english: 'unless, if not', pos: 'conjunction' },
    { latin: 'dum', english: 'while, until', pos: 'conjunction' },
    { latin: 'postquam', english: 'after, when', pos: 'conjunction' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PENSVM A',
      title: 'Fill in the endings',
      instruction: 'Complete each word with the correct ending.',
      type: 'fill',
      items: [
        "Syra: 'Iam dormi, Quinte! Cum bene dormiv{{eris}}, valebis.' Quintus: 'Non dormiam antequam tu mihi tabulam narrav{{eris}}.'",
        "Quintus: 'Cum tabulam audiv{{ero}}, bene dormiam. Cum bene dormiv{{ero}}, brevi sanus ero, nisi medicus me necav{{erit}}!'",
        "Patria salva erit si milites nostri fortiter pugnav{{erint}}. Dux: 'Nisi vos fortiter pugnav{{eritis}}, milites, hostes castra nostra expugnabunt.' Milites: 'Num quid nobis dabitur, si fortiter pugnav{{erimus}}?'",
      ],
    },
  ],
}

export default chapter