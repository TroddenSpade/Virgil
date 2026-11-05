// Capitulum XXXIII — Exercitus Romanus
// Sources: Ørberg, Lingua Latina per se Illustrata, Pars I: Familia Romana (2nd ed.)
// Reading text, grammar and exercises adapted and re-typeset for the web.

const chapter = {
  number: 33,
  roman: 'XXXIII',
  slug: 'exercitus-romanus',
  latinTitle: 'EXERCITVS ROMANVS',
  title: 'The Roman Army',
  tagline:
    'The legions, the marching camp, and a soldier’s letter home — told in the pluperfect subjunctive.',
  status: 'complete',
  overview:
    'Chapter XXXIII describes the Roman army from the inside: its legions and auxiliary troops, the silver ' +
    'eagle that leads the march, the battle-line, and the fortified camp. The second half is a letter from ' +
    'Aemilius, a young soldier serving in Germany, who tells his sister of a night battle and of the friend ' +
    'he lost. Through his story you meet the pluperfect subjunctive — the form used for indirect questions ' +
    'and for contrary-to-fact conditions about the past.',
  objectives: [
    'Describe the structure of a Roman legion and the troops that supported it.',
    'Follow the army on the march, in battle and in camp.',
    'Form the pluperfect subjunctive active and passive: laudavissem, laudatus essem.',
    'Report past questions and past conditions with the pluperfect subjunctive: num ... laudavisset, si ... fuisses.',
    'Read a Roman soldier’s letter and understand both its pride and its grief.',
  ],
  readings: [
    {
      id: 'exercitus-romanus',
      latinTitle: 'EXERCITVS ROMANVS',
      title: 'The Roman Army',
      paragraphs: [
        'Exercitus Romanus universus constat ex legionibus duodetriginta, quae in denas cohortes dividuntur. In singulis legionibus sunt sena vel quina vel quaterna milia militum, qui omnes cives Romani sunt. Praeterea magna auxilia exercitui adiunguntur. Auxilia sunt pedites equitesque ex provinciis, qui arma leviora, sicut arcus sagittasque, ferunt. Legionarii sunt pedites scutis, gladiis pilisque armati.',
        'Signum legionis est aquila argentea, quae in itinere ante agmen fertur. In itinere cohortes alia post aliam in longo ordine progrediuntur. Talis ordo militum progredientium dicitur agmen. Cum agmen ad hostes pervenit, si tempus et locus idoneus est ad pugnandum, cohortes in tres ordines instruuntur. Exercitus ita instructus acies appellatur. Ante proelium dux exercitiis milites suos hortatur ut fortiter pugnent. Tum pedites proelium incipiunt et primum pila in hostes mittunt, deinde eos gladiis caedunt. Hostibus proelio victis, dux a militibus imperator salutatur.',
        'Vesperi exercitus loco ad defendendum idoneo castra ponit, quae vallo et fossa circumdantur. Ita muniuntur castra Romana.',
      ],
      notes: [
        { term: 'legio', gloss: 'a legion — the basic unit of the Roman army, divided into ten cohorts.' },
        { term: 'cohors', gloss: 'a cohort, one tenth of a legion.' },
        { term: 'auxilia', gloss: 'auxiliary troops — non-citizen soldiers from the provinces.' },
        { term: 'signum / aquila', gloss: 'the standard / the eagle — the silver eagle carried before the legion.' },
        { term: 'agmen', gloss: 'the marching column: cohortes in longo ordine progrediuntur.' },
        { term: 'acies', gloss: 'the battle-line — the army drawn up in three ranks.' },
        { term: 'vallum et fossa', gloss: 'rampart and ditch — the defences of the marching camp.' },
      ],
    },
    {
      id: 'aemilius',
      latinTitle: 'AEMILIVS',
      title: 'Aemilius',
      paragraphs: [
        'Aemilius, frater Aemiliae minor, quem supra commemoravimus, a prima aetate studiosus fuit rei militaris. Iam puer septem annos natus gladios ligneos et arcus sagittasque sibi faciebat, ut cum aliis pueris eius aetatis proelia luderet. Septendecim annos natus a patre interrogatus ‘quid tum discere vellet?’ filius statim respondit ‘se nihil nisi rem militarem discere velle.’ Vox filii patri haud placebat, cum ipse litteris studeret ullumque aliud studium filio suo dignum esse arbitraretur.',
        'Cum vero filius nullo modo contra voluntatem suam ad studium litterarum cogi posset, pater eum una cum Valerio, adulescente eiusdem aetatis, in Germaniam ad exercitum Romanum misit, ut apud ducem egregium stipendia mereret. Ibi Aemilius fortiter pugnans iam magnam gloriam militarem sibi paraverat.',
        'Virtus eius egregia ab omnibus laudatur. Et pater et soror Aemilii frequentes epistulas ad eum mittunt. Pater maxime de rebus suis scribit, sed Aemilia de rebus privatis, ut de suis et de conviviis, scribere solet. Epistulae quas pater ad filium dat praecipue de gloria et virtute sunt, sed ex iis litteris privatis quas Aemilia nuper a fratre suo accepit plane apparet eum iam vita militari fatigatum esse.',
        'Ecce litterae novissimae, quas Aemilia pridie kalendas Iunias a fratre accepit et postero die in convivio recitavit:',
      ],
      notes: [
        { term: 'rei militaris', gloss: 'of military matters — studium rei militaris, a passion for soldiering.' },
        { term: 'stipendia merere', gloss: 'to serve for pay, to serve as a soldier.' },
        { term: 'vox filii', gloss: 'the son’s words — vox here means what he said, not just his voice.' },
        { term: 'epistula', gloss: 'a letter; frequentes epistulas mittunt, they send letters often.' },
        { term: 'vita militari', gloss: 'military life — fatigatus, worn out by it.' },
        { term: 'kalendae', gloss: 'the Kalends, the first day of the month: pridie kalendas Iunias = 31 May.' },
      ],
    },
    {
      id: 'epistula-aemilii',
      latinTitle: 'EPISTVLA AEMILII',
      title: 'Aemilius’ Letter',
      paragraphs: [
        'Aemilius sorori suae carissimae s. d.',
        'Hodie demum mihi allata est epistula tua quae a. d. VII kal. Mai. scripta est, id est ante viginti dies. Quam tardus est iste tabellarius! Celsi sane et ardui montes Germaniam ab Italia disiungunt, ac difficillimae sunt viae quae trans Alpes ferunt, sed tamen celer tabellarius idem iter quindecim fere diebus conficere potest, ut tabellarii publici quibus utitur dux noster. Ego vero istum tabellarium properare docebo, cum meas litteras ad te referet.',
        'Sed quamquam tarde advenit, gratissima mihi fuit tua epistula magnoque cum gaudio ex ea cognovi te et Iulium et liberos vestros, quos valde diligo, bona valetudine frui. Cum epistulas tuas lego, apud vos in Albano esse mihi videor, neque in hac terra frigida inter homines barbaros. Tum, nescio quomodo, ita permoveor ut lacrimas vix teneam — ita patriam et amicos meos desidero.',
        'O, quam longe absum ab Italia et ab iis omnibus quos praecipue diligo! Utinam ego Romae essem aut tu apud me esses! Cum Danuvium flumen aspicio, quod praeter castra nostra fluit, de Tiberi cogito atque de Roma. Quando te aspiciam, urbs pulcherrima? Utinam hic amnis Tiberis esset et haec castra essent Roma! Sed frustra haec opto, cum nemo nisi deus ita subito alium locum transferri possit. Si Mercurius essem, alas haberem, vento celerius trans montes amnesque Italiam volarem, ubi Venus, soror mea pulcherrima, ridens me reciperet. Ridebis certe, mea soror, nec sine causa, nam ridiculum est tales res optare, nec lacrimas effundere militem cuius officium est sanguinem effundere pro patria.',
        'Ego vero, etsi cupidus sum patriae videndae, officium meum praestabo sicut ceteri milites Romani, quorum magnus numerus in Germania est. Nisi nos hic finesque imperii defenderemus, hostes celeriter Danuvium et Alpes transirent atque usque in Italiam pervenirent, nec vos in Latio tuti essetis. Ne hoc fiat, legiones Romanae hic sunt ac tamdiu remanebunt dum hostis armatus seu citra seu ultra Danuvium ullus reliquus erit. Quoniam igitur ipse ad te properare non possum, ad te scribere propero.',
        'Quaeris a me cur tibi tam paucas litteras scripserim, cum interim trinas quaternasve litteras a te acceperim. Haud difficile est mihi respondere: quod neglegens fuerim in scribendo. Si mihi esset otii quantum est tibi, in epistulis scribendis non minus diligens essem quam tu. Sed cum per menses vix tempus habuerim ad dormiendum, facile intelleges nullum mihi otium fuisse ad epistulam scribendam. Prope cotidie aut Germani castra nostra oppugnaverunt aut nos impetus fecimus in illos.',
        'Hodie vero nullum hostem armatum citra flumen videmus. Magnus numerus eorum aut caesus aut captus est a nostris, reliqui ultra flumen in magnis silvis latent. Heri enim exercitum Germanorum proelio vicimus. Quod sic factum est:',
        'Media nocte in castra nuntiatum est magnum hostium numerum naviculis ratibusque copulatis flumen transisse celeriterque secundum flumen adversus castra nostra progredi. Hoc nuntio allato, milites statim convocati sunt. Qui cum arma cepissent et vallum ascendissent, primo mirabantur quamobrem media nocte e somno excitati essent, cum extra vallum omnia tranquilla esse viderentur. Ego quoque dubitare coeperam num nuntius verum dixisset, cum subito paulo ante lucem magnus numerus Germanorum e silvis proximis excurrens castra nostra oppugnavit. Nostri, cum parati essent ad castra defendenda, illum primum impetum facile sustinuerunt. Nec tamen hostes castra oppugnare destiterunt, sed alii ex aliis partibus etiam atque etiam sub vallum procurrerunt.',
        'Cum complures horas ita fortissime a nostris, ab hostibus constanter ac non timide pugnatum esset, equitatus noster repente porta dextra erumpens impetum in latus hostium apertum fecit. Paulo post, cum plerique hostes se ad equites convertissent, pedites nostri porta sinistra eruperunt. Hostes hac re perturbati, cum iam longa pugna fatigati essent, impetum Romanorum ab utraque parte venientium diutius sustinere non potuerunt, ac post brevem pugnam terga verterunt. Cum ad ripam fluminis fugientes pervenissent, alii naviculis ratibusque se servaverunt, alii armis abiectis in flumen se proiecerunt, ut natando ad ulteriorem ripam pervenirent, reliqui omnes ab equitibus, qui ad eos persequendos missi erant, in ripa caesi aut capti sunt. Tanta ibi caedes hostium facta est ut meminisse horream.',
        'Duo fere milia hominum magnamque armorum copiam hostes eo proelio amiserunt. E nostris haud multi ceciderunt. Ipse sagitta in bracchio laevo vulneratus sum, sed vulnus meum leve est, multi graviora vulnera acceperunt. Nec vero ullus miles legionarius a tergo vulneratus est. Plerique autem milites nostri ex tanto proelio incolumes sunt.',
        'Hoc proelio facto, dux victor, cum a militibus imperator salutatus esset, virtutem nostram laudavit quod contra hostes numero superiores fortissime pugnavissemus; tot hominibus uno proelio amissis, hostes brevi arma posituros esse dixit. His verbis maximo gaudio affecti sumus, nam post longum bellum omnes pacem desideramus. Hodie legati a Germanis missi ad castra venerunt, ut cum imperatore colloquerentur. Nescio an legati pacem peti tum venerint, sed certo scio imperatorem nostrum cum hoste armato colloqui nolle.',
        'Ego cum ceteris hac victoria gloriosa gaudeo quidem, sed multo magis gauderem si amicus meus Publius Valerius, quocum primum stipendium merui, incolumis esset et mecum gaudere posset. Qui cum mihi in hostes progresso auxilium ferre vellet, ipse ex acie excurrens pilo percussus cecidit. Graviter vulneratus in castra portatus est, ubi in manibus meis ex vulnere mortuus est, postquam me oravit ut per litteras parentes suos de morte filii consolarer. Sed quomodo alios consoler, cum ipse me consolari non possim? Fateor me lacrimas effudisse cum oculos eius clausissem, sed illae lacrimae et militem et amicum decebant; etenim malus amicus fuissem, nisi lacrimas effudissem super corpus amici mortui, cum ille sanguinem suum pro me effudisset.',
        'Utinam patrem audivissem, cum me ad studium litterarum hortaretur! Sed tum litteras et studiosos litterarum despiciebam. Poetas ut homines otiosos oderam, praecipue Tibullum, qui vitam rusticam atque otiosam laudabat, vitam militarem despiciebat. Mirabar cur ille poeta mortem gloriosam pro patria ‘diram’ vocaret et enses quibus patria defenditur ‘horrendos’, ut in his versibus, quos senex magister etiam atque etiam nobis recitabat:',
        'Quis fuit horrendos primus qui protulit enses? / Quam ferus et vere ferreus ille fuit! / Tum caedes hominum generi, tum proelia nata, / tum brevior dirae mortis aperta via est!',
        'Ridiculi mihi puero videbantur ii versus, cum nondum caedem vidissem. At hodie Tibullum verum dixisse intellego. Si iam tum hoc intellexissem, certe patri paruissem nec ad bellum profectus essem, ut tot et tot vulnera viderem. At iam satis de caede scripsi. Nolo te fatigare narrando de bello cruento, cum brevi pacem fore sperem. Nisi ea spes me fallit, posthac plures epistulas a me exspectato, atque plures etiam ipsa scribito! Etiam liberos mone ut ad me litteras dent. Et de re publica et de re privata narratote mihi! Scitote me omnia quae apud vos fiunt cognoscere velle. Valetudinem tuam cura diligenter! Datum pridie Kalendas Maias ex castris.',
      ],
      notes: [
        { term: 's. d.', gloss: 'salutem dicit — “sends greetings”, the usual opening of a Roman letter.' },
        { term: 'tabellarius', gloss: 'a courier, letter-carrier; tabellarii publici carried the army’s post.' },
        { term: 'utinam', gloss: 'if only! — introduces a wish: Utinam Romae essem!' },
        { term: 'bracchium', gloss: 'the arm; ipse sagitta in bracchio laevo vulneratus sum.' },
        { term: 'incolumis', gloss: 'unharmed, safe; plerique milites incolumes sunt.' },
        { term: 'meminisse horream', gloss: 'I shudder to remember — horreo, to shudder, to bristle.' },
        { term: 'legati', gloss: 'envoys; legati a Germanis missi ad castra venerunt.' },
        { term: 'Tibullus', gloss: 'the poet Tibullus, who praised country life and condemned war.' },
      ],
    },
  ],
  grammar: [
    {
      id: 'coniunctivus-plusquamperfecti',
      latinTitle: 'Coniunctivus Plusquamperfecti',
      title: 'The Pluperfect Subjunctive',
      intro:
        'The pluperfect subjunctive (laudavissem, paruissem, scripsissem, audivissem) is the “had ...ed” form ' +
        'of the subjunctive. It is used in indirect questions and in contrary-to-fact conditions about the past.',
      paradigms: [
        {
          caption: 'coniunctivus plusquamperfecti activi — terminationes',
          head: ['', 'Singularis', 'Pluralis'],
          rows: [
            ['persona prima', '-issem (laudavissem)', '-issemus (laudavissemus)'],
            ['persona secunda', '-isses (laudavisses)', '-issetis (laudavissetis)'],
            ['persona tertia', '-isset (laudavisset)', '-issent (laudavissent)'],
          ],
        },
        {
          caption: 'laudare — coniunctivus plusquamperfecti activus',
          head: ['', 'Singularis', 'Pluralis'],
          rows: [
            ['persona prima', 'laudavissem — I had praised', 'laudavissemus — we had praised'],
            ['persona secunda', 'laudavisses — you had praised', 'laudavissetis — you had praised'],
            ['persona tertia', 'laudavisset — he/she had praised', 'laudavissent — they had praised'],
          ],
        },
        {
          caption: 'laudare — coniunctivus plusquamperfecti passivus',
          head: ['', 'Singularis', 'Pluralis'],
          rows: [
            ['persona prima', 'laudatus essem — I had been praised', 'laudati essemus — we had been praised'],
            ['persona secunda', 'laudatus esses — you had been praised', 'laudati essetis — you had been praised'],
            ['persona tertia', 'laudatus esset — he had been praised', 'laudati essent — they had been praised'],
          ],
        },
        {
          caption: 'formatio: infinitivus perfecti → coniunctivus plusquamperfecti',
          head: ['Infinitivus perfecti', 'Coniunctivus plusquamperfecti', 'Significatio'],
          rows: [
            ['recitavisse', 'recitavisset', 'he/she had recited'],
            ['paruisse', 'paruisset', 'he/she had obeyed'],
            ['scripsisse', 'scripsisset', 'he/she had written'],
            ['audivisse', 'audivisset', 'he/she had heard'],
          ],
        },
        {
          caption: 'in quaestionibus indirectis et sententiis condicionalibus',
          head: ['Exemplum', 'Significatio'],
          rows: [
            ['Iulius dubitabat num magister Marcum laudavisset.', 'Iulius wondered whether the master had praised Marcus.'],
            ['Pater filium interrogavit num bonus discipulus fuisset.', 'The father asked his son whether he had been a good pupil.'],
            ['Si bonus discipulus fuisses, magister te laudavisset.', 'If you had been a good pupil, the master would have praised you.'],
            ['Etiam si industrius fuissem, magister me non laudavisset.', 'Even if I had been diligent, the master would not have praised me.'],
          ],
        },
      ],
      points: [
        'Take the perfect infinitive, drop -isse, and add -issem, -isses, -isset, -issemus, -issetis, -issent: paravisse → paravissem.',
        'In an indirect question the subjunctive reports someone else’s question: Iulius dubitabat num magister Marcum laudavisset — Iulius wondered whether the master had praised Marcus.',
        'In a past contrary-to-fact condition both clauses take the pluperfect subjunctive: si bonus discipulus fuisses, magister te laudavisset — if you had been a good pupil, the master would have praised you.',
        'The passive is made with the perfect participle and essem, esses, esset, essemus, essetis, essent: laudatus essem — I had been praised.',
      ],
    },
    {
      id: 'imperativus-futuri',
      latinTitle: 'Imperativus Futuri',
      title: 'The Future Imperative',
      intro:
        'The future imperative (pugnato! pugnatote!) gives a command meant to last — “you shall ... from now ' +
        'on”. It ends in -to in the singular and -tote in the plural.',
      paradigms: [
        {
          caption: 'imperativus futuri — pugnare',
          head: ['', 'Singularis', 'Pluralis'],
          rows: [
            ['imperativus futuri', 'pugnato! — you shall fight!', 'pugnatote! — you shall all fight!'],
          ],
        },
        {
          caption: 'exempla',
          head: ['Singularis', 'Pluralis', 'Significatio'],
          rows: [
            ['esto!', 'estote!', 'be! (from now on)'],
            ['pareto!', 'paretote!', 'obey! (from now on)'],
            ['audito!', 'auditote!', 'listen! (from now on)'],
            ['recitato!', 'recitatote!', 'recite! (from now on)'],
            ['scribito!', 'scribitote!', 'write! (from now on)'],
          ],
        },
      ],
      points: [
        'The future imperative is formed from the present stem plus -to (singular) and -tote (plural): pugna- → pugnato, pugnatote.',
        'It means much the same as the ordinary imperative (pugna! pugnate!), but it is used for standing orders, rules, laws and wills.',
        'The future imperative of esse is irregular: esto! (singular), estote! (plural) — “be!”',
        'Magister: Posthac bonus discipulus esto, puer! — “From now on you shall be a good pupil, boy!”',
      ],
    },
  ],
  vocabulary: [
    { latin: 'exercitus', english: 'army', pos: 'noun (m.)' },
    { latin: 'legio', english: 'legion', pos: 'noun (f.)' },
    { latin: 'cohors', english: 'cohort', pos: 'noun (f.)' },
    { latin: 'miles', english: 'soldier', pos: 'noun (m.)' },
    { latin: 'auxilium', english: 'help; (pl.) auxiliary troops', pos: 'noun (n.)' },
    { latin: 'pedes', english: 'foot-soldier', pos: 'noun (m.)' },
    { latin: 'eques', english: 'horseman', pos: 'noun (m.)' },
    { latin: 'arma', english: 'arms, weapons', pos: 'noun (n.)' },
    { latin: 'signum', english: 'standard, sign', pos: 'noun (n.)' },
    { latin: 'aquila', english: 'eagle', pos: 'noun (f.)' },
    { latin: 'agmen', english: 'marching column', pos: 'noun (n.)' },
    { latin: 'acies', english: 'battle-line', pos: 'noun (f.)' },
    { latin: 'proelium', english: 'battle', pos: 'noun (n.)' },
    { latin: 'hostis', english: 'enemy', pos: 'noun (m.)' },
    { latin: 'dux', english: 'leader, commander', pos: 'noun (m.)' },
    { latin: 'imperator', english: 'commander, general', pos: 'noun (m.)' },
    { latin: 'castra', english: 'camp', pos: 'noun (n.)' },
    { latin: 'vallum', english: 'rampart', pos: 'noun (n.)' },
    { latin: 'fossa', english: 'ditch', pos: 'noun (f.)' },
    { latin: 'bellum', english: 'war', pos: 'noun (n.)' },
    { latin: 'pax', english: 'peace', pos: 'noun (f.)' },
    { latin: 'victoria', english: 'victory', pos: 'noun (f.)' },
    { latin: 'vulnus', english: 'wound', pos: 'noun (n.)' },
    { latin: 'tabellarius', english: 'courier, letter-carrier', pos: 'noun (m.)' },
    { latin: 'epistula', english: 'letter', pos: 'noun (f.)' },
    { latin: 'legatus', english: 'envoy', pos: 'noun (m.)' },
    { latin: 'pugno', english: 'to fight', pos: 'verb' },
    { latin: 'oppugno', english: 'to attack', pos: 'verb' },
    { latin: 'vinco', english: 'to conquer, defeat', pos: 'verb' },
    { latin: 'caedo', english: 'to kill, cut down', pos: 'verb' },
    { latin: 'instruo', english: 'to draw up, arrange', pos: 'verb' },
    { latin: 'sustineo', english: 'to withstand, hold out', pos: 'verb' },
    { latin: 'defendo', english: 'to defend', pos: 'verb' },
    { latin: 'vulnero', english: 'to wound', pos: 'verb' },
    { latin: 'consolor', english: 'to comfort', pos: 'verb' },
    { latin: 'despicio', english: 'to despise, look down on', pos: 'verb' },
    { latin: 'idoneus', english: 'suitable, fit', pos: 'adjective' },
    { latin: 'incolumis', english: 'unharmed, safe', pos: 'adjective' },
    { latin: 'gravis', english: 'heavy, serious', pos: 'adjective' },
    { latin: 'tutus', english: 'safe', pos: 'adjective' },
    { latin: 'fortiter', english: 'bravely', pos: 'adverb' },
    { latin: 'nisi', english: 'unless, if not', pos: 'conjunction' },
    { latin: 'trans', english: 'across', pos: 'preposition' },
    { latin: 'plusquamperfectum', english: 'pluperfect', pos: 'noun (n.)' },
    { latin: 'coniunctivus', english: 'subjunctive', pos: 'noun (m.)' },
  ],
  pensa: [
    {
      id: 'pensum-c',
      latinLabel: 'PENSVM C',
      title: 'Answer in Latin',
      instruction: 'Answer each question with a full Latin sentence, then reveal the model answer.',
      type: 'questions',
      items: [
        {
          q: 'Quae arma gerunt auxilia?',
          a: 'Auxilia arma leviora gerunt, sicut arcus sagittasque.',
        },
        {
          q: 'Quid est signum legionis?',
          a: 'Signum legionis est aquila argentea.',
        },
        {
          q: 'Quomodo milites in aciem instruuntur?',
          a: 'Cohortes in tres ordines instruuntur; exercitus ita instructus acies appellatur.',
        },
        {
          q: 'Ad quod studium pater Aemilium hortabatur?',
          a: 'Pater Aemilium ad studium litterarum hortabatur.',
        },
        {
          q: 'Quo Aemilius adulescens missus est?',
          a: 'Aemilius adulescens in Germaniam ad exercitum Romanum missus est.',
        },
        {
          q: 'Cur Aemilius epistulas legens permovetur?',
          a: 'Aemilius epistulas legens permovetur, quia patriam et amicos suos desiderat.',
        },
        {
          q: 'Quamobrem ipse paucas epistulas scripsit?',
          a: 'Paucas epistulas scripsit, quod in scribendo neglegens erat et vix tempus habebat.',
        },
        {
          q: 'Qui nuntius nocte in castra allatus est?',
          a: 'Nuntiatum est magnum hostium numerum flumen transisse et adversus castra nostra progredi.',
        },
        {
          q: 'Cur hostes castra Romana non expugnaverunt?',
          a: 'Hostes castra Romana non expugnaverunt, quia milites parati erant ad ea defendenda et ab nostris victi sunt.',
        },
        {
          q: 'Num Tibullus vitam militarem laudat?',
          a: 'Tibullus vitam militarem non laudat, sed eam despicit.',
        },
      ],
    },
  ],
}

export default chapter