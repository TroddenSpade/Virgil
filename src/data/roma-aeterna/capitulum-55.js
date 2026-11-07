// Capitulum LV — DE RE PVBLICA
// Source: Ørberg, Lingua Latina per se Illustrata, Pars II: Roma Aeterna (2nd ed.)
// Reading text, notes, grammar and exercises adapted for the web.

const chapter = {
  "number": 55,
  "roman": "LV",
  "slug": "de-re-publica",
  "latinTitle": "DE RE PVBLICA",
  "title": "On the Republic",
  "author": "Cicerō",
  "tagline": "At Scipio's villa during the Latin Festival, the friends debate the two suns, then turn to the far greater question: what is the best form of the state?",
  "status": "complete",
  "overview": "The chapter follows the first two books of Cicero's De re publica. A holiday gathering at Scipio Aemilianus' villa begins with a report of two suns seen in the sky, but Laelius dismisses astronomy and points to the real prodigy: one state with two senates and two peoples. Scipio defines res publica as the property of the people, distinguishes the three kinds of constitution, and praises the mixed Roman order. He then traces Rome from Romulus through Numa to the fall of Tarquin, showing how the state grew by the wisdom of many men over many ages. The grammar section practises feminine abstract nouns formed from adjectives.",
  "objectives": [
    "Read a dramatic dialogue from Cicero's De re publica.",
    "Understand Scipio's definition of res publica: res populī, bound by ius and common advantage.",
    "Distinguish the three constitutions — regnum, optimātium dominātus, populāris — and the mixed form.",
    "Follow the early history of Rome from Romulus to Brutus.",
    "Form and use feminine nouns in -ia, -itia, -tās and -tūdō from adjectives."
  ],
  "readings": [
    {
      "id": "de-duobus-solibus",
      "latinTitle": "DĒ DUŌBUS SŌLIBUS",
      "title": "The Two Suns",
      "paragraphs": [
        "Cum P. Āfricānus, hic Paulī fīlius, fēriīs Latīnīs Tūditānō cōnsule et Aquīliō, cōnstituisset in hortīs esse familiārissimīque eius ad eum frequenter per eōs diēs ventitātūrī sē esse dīxissent, Latīnīs ipsīs māne ad eum prīmus sorōris fīlius vēnit Q. Tubērō. Quem cum cōmiter Scīpiō appellāvisset libenterque vīdisset, 'Quid tū' inquit 'tam māne, Tubērō? Dabant enim hae fēriae tibi facultātem ad explicandās tuās litterās.' Tum ille: 'Mihi vērō omne tempus est ad meōs librōs vacuum; numquam enim sunt illī occupātī. Tē autem permagnum est nancīscī ōtiōsum, hōc praesertim mōtū reī pūblicae.' Tum Scīpiō: 'Atquī nactus es, sed mēhercule ōtiōsiōrem operā quam animō.' Et ille: 'At tū vērō animum quoque relaxāre oportet. Ut enim multī, cōnstituimus, parātī, sī tuō commodō fierī potest, abūtī tēcum hōc ōtiō.'",
        "[Scīpiō:] 'Libenter mē vērō, ut aliquid aliquandō dē doctrīnae studiīs admoneāmur.' Tum ille: 'Vīsne igitur hōc prīmum, Āfricāne, videāmus, antequam veniunt aliī, quidnam sit dē istō 'alterō sōle' quod nūntiātum est in senātū? Neque enim paucī neque levēs sunt quī 'sē duōs sōlēs vīdisse' dīcant.' Hīc Scīpiō: 'Quam vellem Panaetium nostrum nōbīscum habērēmus! quī cum cētera, tum haec caelestia vel studiōsissimē solet quaerere. Sed ego, Tubērō — nam tēcum apertē quod sentiō loquar — nōn nimis assentior in omnī istō genere nostrō illī familiārī. Quō etiam sapientiōrem Sōcratem soleō iūdicāre, quī omnem eius modī cūram dēposuerit eaque quae dē nātūrā quaererentur aut 'maiora quam hominum ratiō cōnsequī possit' aut 'nihil omnīnō ad vītam hominum attinēre' dīxerit.'",
        "Haec Scīpiō cum dīxisset, Fūrium repentē venientem aspexit, eumque ut salūtāvit, amīcissimē apprehendit et in lectō suō collocāvit; et cum simul P. Rutilius vēnisset, eum quoque ut salūtāvit, propter Tubērōnem iussit assīdere. Tum Fūrius: 'Quid vōs agitis? Num sermōnem vestrum aliquem dīrēmit noster interventus?' 'Minimē vērō!' Āfricānus; 'sōlēs enim tē haec studiōsē investīgāre quae sunt in hōc genere, dē quō īnstituerat paulō ante Tubērō quaerere; Rutilius quidem noster etiam sub ipsīs Numantiae moenibus solēbat, mēcum interdum eius modī aliquid conquīrere.' 'Quae rēs tandem inciderat?' inquit Philus. Tum ille: 'Dē sōlibus istīs duōbus. Dē quō studeō, Phile, ex tē audīre quid sentiās.'",
        "Dīxerat hoc ille, cum puer nūntiāvit venīre ad eum Laelium domōque iam exīsse. Tum Scīpiō, calceīs et vestīmentīs sūmptīs, ē cubiculō est ēgressus et, cum paululum inambulāvisset in porticū, Laelium advenientem salūtāvit et eōs quī ūnā vēnerant, Spūrium Mummium, quem in prīmīs dīlīgēbat, et C. Fannium et Q. Mucium Scaevolam, generōs Laelī, doctōs adulēscentēs, iam aetāte quaestōriōs. Quōs cum omnēs salūtāvisset, convertit sē in porticū et coniēcit in medium Laelium (fuit enim hoc in amīcitiā quasi quoddam iūs inter illōs, ut mīlitiae propter eximiam bellī glōriam Āfricānum ut deum coleret Laelius, domī vicissim Laelium, quod aetāte antecēdēbat, observāret in parentis locō Scīpiō).",
        "Dein, cum essent perpauca inter sē ūnō aut alterō spatiō collocūtī Scīpiōnīque eōrum adventus periūcundus et pergrātus fuisset, placitum est ut in apricō maximē prātulō locō, quod erat hībernum tempus annī, cōnsīderent. Quod cum facere vellent, intervēnit vir prūdēns omnibusque illīs et iūcundus et cārus, M'. Manīlius, quī ā Scīpiōne cēterīsque amīcissimē cōnsalūtātus assēdit proximus Laeliō.",
        "Tum Philus 'Nōn mihi vidētur' inquit 'quod hī vēnērunt, alius nōbīs sermō esse quaerendus, sed agendum accūrātius et dīcendum dignum aliquid hōrum auribus.' Hīc Laelius: 'Quid tandem agēbātis, aut cuī sermōnī nōs intervēnimus?' [Philus:] 'Quaesierat ex mē Scīpiō quidnam sentīrem dē hōc quod duō sōlēs vīsōs esse cōnstāret?' [Laelius:] 'Ain' vērō, Phile? Iam explōrāta nōbīs sunt ea quae ad domōs nostrās quaeque ad rem pūblicam pertinent, sīquidem quid agātur in caelō quaerimus?' [Philus:] Et ille 'An tū ad domōs nostrās nōn cēnsēs pertinēre scīre quid agātur et quid fīat 'domī'? quae nōn ea est quam parietēs nostrī cingunt, sed mundus hic tōtus, quod domicilium quamque patriam dī nōbīs commūnem sēcum dedērunt — cum praesertim, sī haec ignōrēmus, multa nōbīs et magna ignōranda sint. Ac mē hercule etiam tē ipsum, Laelī, omnēsque avidōs sapientiae cōgnitiō ipsa rērum cōnsīderātiōque dēlectat.'",
        "Tum Laelius: 'Nōn impediō, praesertim quoniam fēriātī sumus. Sed possumus audīre aliquid, an sērius vēnimus?' [Philus:] 'Nihil est adhūc disputātum, et, quoniam disputāre integrum est, libenter tibi, Laelī, dē eō dissertāre concesserō.' [Laelius:] 'Immō vērō tē audiāmus.'",
        "Cum deinde Philus et Scīpiō et Tubērō parumper dē rēbus caelestibus disputāvissent — velut dē certīs et ratīs astrōrum mōtibus, quōs Archimēdēs Syrācūsiānus in globō sīve sphaerā aēneā arte mīrābilī effectā dēclārāvisse dīcitur — Laelius, quī eius modī disputātiōnēs tamquam inūtilēs contemnēbat, 'alia quaedam maiōra quaerenda esse' dīxit.",
        "Tum Tubērō: 'Nōn dissentio ā tē, Laelī, sed quaerō quae tū esse maiōra intellegās?' [Laelius:] 'Dīcam mēhercule, et contemnar ā tē fortasse, cum tū ista caelestia dē Scīpiōne quaesieris, ego autem haec quae videntur ante oculōs esse magis putem quaerenda. Quid enim mihi L. Paulī nepos, hōc avunculō, nōbilissimā in familiā atque in hāc tam clārā rē pūblicā nātus, quaerit 'quōmodo duo sōlēs vīsī sint?' nōn quaerit 'cūr in ūnā rē pūblicā duo senātūs et duo paene iam populī sint?' Nam, vidētis, mors Tiberiī Gracchī et iam ante tōta illīus ratiō tribūnātūs dīvīsit populum ūnum in duās partēs. Quam ob rem — sī mē audiētis, adulēscentēs — sōlem alterum nē metueritis! Aut enim nūllus esse potest, aut sit sāne ut vīsus est, modo nē sit molēstus; aut scīre istārum rērum nihil, aut, etiam sī maximē sciēmus, nec meliōrēs ob eam scientiam nec beātiōrēs esse possumus. Senātum vērō et populum ut ūnum habeāmus, et fierī potest, et permolestum est nisi fit, et secus esse scīmus, et vidēmus, sī id effectum sit, et melius nōs esse victūrōs et beātius.'",
        "Tum Mūcius: 'Quid esse igitur cēnsēs, Laelī, discendum nōbīs, ut istud efficere possīmus ipsum quod postulās?' [Laelius:] 'Eās artēs quae efficiant ut ūsuī cīvitātī sīmus; id enim esse praeclārissimum sapientiae mūnus maximumque virtūtis vel documentum vel officium putō. Quam ob rem, ut hae fēriae nōbīs ad ūtilissimōs reī pūblicae sermōnēs potissimum cōnferantur, Scīpiōnem rogēmus ut explicet quem existimet esse optimum statum cīvitātis. Deinde alia quaerēmus.' Cum id et Philus et Manīlius et Mummius admodum approbāvissent...",
        "[Hīc duae pāginae vel versūs ex librō antīquō excidērunt.] [Laelius:] '... id nōn sōlum ob eam causam fierī voluī quod erat aequum dē rē pūblicā potissimum prīncipem reī pūblicae dīcere, sed etiam quod memineram persaepe tē cum Panaetiō disserere solitum cōram Polybiō, duōbus Graecīs vel perītissimīs rērum cīvīlium, multaque colligere ac docēre 'optimum longē statum cīvitātis esse eum quem maiōrēs nostrī nōbīs relīquissent.' Quā in disputātiōne quoniam tū parātior es, fēceris — ut etiam prō hīs dīcam — sī dē rē pūblicā quid sentiās explicāris, nōbīs grātum omnibus.'"
      ],
      "notes": [
        {
          "term": "fēriae Latīnae",
          "gloss": "the Latin Festival, held yearly on the Alban Mount; a public holiday."
        },
        {
          "term": "Tūditānus et Aquīlius",
          "gloss": "the consuls of 129 B.C., the dramatic date of the dialogue."
        },
        {
          "term": "ventitāre",
          "gloss": "to come often, keep visiting; frequentative of venīre."
        },
        {
          "term": "nancīscī",
          "gloss": "to get hold of, find; nactus es = you have found him."
        },
        {
          "term": "mōtus reī pūblicae",
          "gloss": "political upheaval; the unrest stirred by the Gracchi."
        },
        {
          "term": "Panaetius",
          "gloss": "a Stoic philosopher of Rhodes, friend of Scipio and teacher of his circle."
        },
        {
          "term": "assentīrī",
          "gloss": "to agree with (+ dat.); Scipio does not wholly agree with Panaetius."
        },
        {
          "term": "sphaera aēnea",
          "gloss": "a bronze globe; Archimedes is said to have shown the motions of the stars with one."
        },
        {
          "term": "Numantia",
          "gloss": "a Celtiberian town in Spain, destroyed by Scipio in 133 B.C."
        },
        {
          "term": "quaestōrius",
          "gloss": "of quaestorian rank; aetāte quaestōrius = about thirty years old."
        },
        {
          "term": "prātulum",
          "gloss": "a little meadow, a grassy lawn."
        },
        {
          "term": "apricus",
          "gloss": "sunny, open to the sun; the opposite of opācus."
        }
      ]
    },
    {
      "id": "de-tribus-generibus",
      "latinTitle": "DĒ TRIBUS GENERIBUS RĒRUM PŪBLICĀRUM",
      "title": "The Three Kinds of Constitution",
      "paragraphs": [
        "Hīc Scīpiō: 'Faciam quod vultis, ut poterō, et ingrediar in disputātiōnem eā lēge — quā crēdō omnibus in rēbus disserendīs ūtendum esse, sī errōrem tollere velīs — ut eius reī dē quā quaerētur sī nōmen quod sit conveniat, explicētur quid dēclārētur eō nōmine; quod sī convēnerit, tum dēmum decēbit ingredī in sermōnem. Numquam enim quāle sit illud dē quō disputābitur intellegī poterit, nisi quid sit fuerit intellectum prius. Quārē, quoniam dē rē pūblicā quaerimus, hoc prīmum videāmus: quid sit id ipsum quod quaerimus.' Cum approbāvisset Laelius, 'Est igitur' inquit Āfricānus 'rēs pūblica \"rēs populī\", populus autem nōn omnis hominum coetus quōquō modō congregātus, sed coetus multitūdinis iūris cōnsēnsū et ūtilitātis commūniōne sociātus...'",
        "[Exciderunt duae pāginae.] [Scīpiō:] 'Hī coetūs igitur sēdem prīmum certō locō domiciliōrum causā cōnstituērunt; quam cum locīs manūque saepsissent, eius modī coniūnctiōnem tēctōrum \"oppidum\" vel \"urbem\" appellāvērunt dēlūbrīs distīnctam spatiīsque commūnibus. Omnis ergo populus, quī est tālis coetus multitūdinis, omnis rēs pūblica, quae (ut dīxī) \"populī rēs\" est, cōnsiliō quōdam regenda est, ut dīturna sit. Id autem cōnsilium aut tribuendum est ūnī, aut dēlēctīs quibusdam, aut suscipiendum est atque omnibus.'",
        "'Cum penes ūnum est omnium summa rērum, \"rēgem\" illum ūnum vocāmus et \"rēgnum\" eius reī pūblicae statum. Cum autem est penes dēlēctōs, tum illa cīvitās \"optimātium\" arbitriō regī dīcitur. Illa autem est cīvitās \"populāris\" (sīc enim appellant) in quā in populō sunt omnia.'",
        "'Atque hōrum trium generum quodvīs, sī teneat illud vinculum quod prīmum hominēs inter sē reī pūblicae societāte dēvīnxit, nōn perfectum illud quidem neque meā sententiā optimum est, sed tolerābile tamen. Nam vel rēx aequus et sapiēns, vel dēlēctī ac prīncipēs cīvēs, vel ipse populus, quamquam id est minimē probandum, tamen, nūllīs interiectīs inīquitātibus aut cupiditātibus, posse vidētur aliquō esse nōn incertō statū. Sed et in rēgnīs nimis expertēs sunt cēterī commūnis iūris et cōnsiliī; et in optimātium dominātū vix particeps lībertātis potest esse multitūdō, cum omnī cōnsiliō commūnī ac potestāte careat; et cum omnia per populum geruntur, quamvīs iūstum atque moderātum, tamen ipsa aequābilitās est inīqua, cum habet nūllōs gradūs dignitātis...'",
        "'Itaque quārtum quoddam genus reī pūblicae maximē probandum esse sentiō, quod est ex hīs quae prīma dīxī permixtum tribus.' Hīc Laelius: 'Sciō tibi ita placēre, Āfricāne; saepe enim ex tē audīvī; sed tamen, nisi molestum est, ex tribus istīs modīs rērum pūblicārum velim scīre quod optimum iūdicēs.' [Exciderunt aliquot pāginae.] [Scīpiō, cum dē singulīs rērum pūblicārum generibus disputāvisset, dīxit \"nūllum ipsum per sē probandum esse\".]",
        "[Scīpiō:] 'Quod ita cum sit, ex tribus prīmīs generibus longē praestat meā sententiā rēgium, rēgiō autem ipsī praestābit id quod erit aequātum et temperātum ex tribus prīmīs rērum pūblicārum modīs. Placet enim esse quiddam in rē pūblicā praestāns et rēgāle, esse aliud auctōritātī prīncipum impertītum ac tribūtum, esse quāsdam rēs servātās iūdiciō voluntātīque multitūdinis. Haec cōnstitūtiō prīmum habet aequābilitātem quandam magnam, quā carēre diūtius vix possunt līberī, deinde firmitūdinem — quod et illa prīma facile in contrāria vitia convertuntur, ut exsistat ex rēge dominus, ex optimātibus factiō, ex populō turba et cōnfūsiō.'",
        "'Sed vereor, Laelī vōsque hominēs amīcissimī ac prūdentissimī, nē, sī diūtius in hōc genere verser, quasi praecipientis cuiusdam et docentis et nōn vōbīscum simul cōnsīderantis esse videātur ōrātiō mea. Quam ob rem ingrediar in ea quae nōta sunt omnibus, quaesīta autem ā nōbīs iam diū. Sīc enim dēcernō, sīc sentiō, sīc affirmō: nūllam omnium rērum pūblicārum aut cōnstitūtiōne aut dīscrīptiōne aut disciplīnā cōnferendam esse cum eā quam patrēs nostrī nōbīs acceptam iam inde ā māiōribus relīquērunt. Quam — placet — simul et quālis sit et optimam esse ostendam, exposītāque ad exemplum nostrā rē pūblicā, accommodābō ad eam, ut poterō, omnem illam ōrātiōnem quae est mihi habenda dē optimō cīvitātis statū.'"
      ],
      "notes": [
        {
          "term": "rēs pūblica",
          "gloss": "the commonwealth, the state; literally “the public thing”, defined here as rēs populī."
        },
        {
          "term": "populus",
          "gloss": "not any crowd, but a gathering bound by consent to law and common advantage."
        },
        {
          "term": "iūris cōnsēnsus",
          "gloss": "agreement in law, a shared legal order."
        },
        {
          "term": "ūtilitātis commūniō",
          "gloss": "common advantage, shared interest."
        },
        {
          "term": "dēlūbrum, -ī",
          "gloss": "a shrine, sanctuary; the city is marked off by shrines and common spaces."
        },
        {
          "term": "rēgnum",
          "gloss": "kingdom, monarchy — rule by one (Greek monarchia)."
        },
        {
          "term": "optimātium dominātus",
          "gloss": "rule of the best men, aristocracy."
        },
        {
          "term": "populāris cīvitās",
          "gloss": "a popular state, democracy — where all power is in the people."
        },
        {
          "term": "aequābilitās",
          "gloss": "evenness, equality; in a pure democracy it becomes inīqua, unjust, because it knows no degrees."
        },
        {
          "term": "dignitātis gradūs",
          "gloss": "degrees of rank; a healthy state distinguishes offices and honours."
        },
        {
          "term": "cōnstitūtiō",
          "gloss": "constitution, settled ordering of the state."
        },
        {
          "term": "dīscrīptiō",
          "gloss": "distribution, arrangement of powers."
        },
        {
          "term": "exsistere",
          "gloss": "to arise, come into being; ex rēge exsistit dominus."
        }
      ]
    },
    {
      "id": "de-vetere-re-publica-romana",
      "latinTitle": "DĒ VETERE RĒ PŪBLICĀ RŌMĀNĀ",
      "title": "The Old Roman Republic",
      "paragraphs": [
        "Cum omnēs flagrārent cupiditāte audiendī, ingressus est sīc loquī Scīpiō: 'Catō senex (quem, ut scītis, ūnicē dīlēxī maximēque sum admīrātus) dīcere solēbat \"ob hanc causam praestāre nostrae cīvitātis statum cēterīs cīvitātibus: quod in illīs singulī fuissent ferē quī suam quisque rem pūblicam cōnstituissent lēgibus atque īnstitūtīs suīs (ut Crētum Mīnōs, Lacedaemoniōrum Lycūrgus, Athēniēnsium, quae persaepe commūtāta esset, tum Thēseus, tum Drācō, tum Sōlō, tum Clisthenēs, tum multī aliī), nostra autem rēs pūblica nōn ūnīus esset ingeniō, sed multōrum, nec ūnā hominis vītā, sed aliquot cōnstitūta saeculīs et aetātibus. Nam neque ūllum ingenium tantum exstitisse\" dīcēbat \"ut, quem rēs nūlla fugeret, quisquam aliquandō fuisset, neque cūncta ingenia collāta in ūnum tantum posse ūnō tempore prōvidēre, ut omnia complecterentur, sine rērum ūsū ac vetustāte.\" Quam ob rem, ut ille solēbat, ita nunc mea repetet ōrātiō populī Rōmānī \"orīginem\" — libenter enim etiam verbō ūtor Catōnis. Facilius autem quod est prōpositum cōnsequar, sī nostram rem pūblicam vōbīs et nāscentem et crēscentem et adultam et iam firmam atque rōbustam ostenderō, quam sī mihi aliquam, ut apud Platōnem Sōcratēs, ipse fīnxerō.'",
        "Hoc cum omnēs approbāvissent, 'Quod habēmus' inquit 'īnstitūtae reī pūblicae tam clārum ac tam omnibus nōtum exōrdium quam huius urbis condendae prīncipium profectum ā Rōmulō? Quī patre Marte nātus cum Remō frātre dīcitur ab Amūliō, rēge Albānō, ob labefactandī rēgnī timōrem ad Tiberim expōnī iussus esse. Quō in locō cum esset silvestris bēluae sustentātus ūberibus pastōrēsque eum sustulissent et in agrēstī cultū labōreque aluissent, perhibētur, ut adolēverit, et corporis vīribus et animī ferōcitāte tantum cēterīs praestitisse ut omnēs quī tum eōs agrōs ubi hodiē est haec urbs incolēbant aequō animō illī libenterque pārērent. Quōrum cōpiīs cum sē ducem praebuisset — ut iam ā fābulīs ad facta veniāmus — oppressisse Longam Albam, validam urbem et potentem temporibus illīs, Amūliumque rēgem interēmisse fertur.'",
        "'Quā glōriā partā, urbem auspicātō condere et firmāre dīcitur prīmum cōgitāvisse rem pūblicam. Atque haec quidem perceleriter cōnfēcit. Nam et urbem cōnstituit, quam ē suō nōmine \"Rōmam\" iussit nōminārī, et ad firmandam novam cīvitātem novum quoddam et subagreste cōnsilium, sed ad augendās opēs rēgnī ac populī suī magnī hominis et iam tum longē prōvidentis secūtus est, cum Sabīnās honestō ortās locō virginēs, quae Rōmam lūdōrum grātiā vēnissent (quōs tum prīmum anniversāriōs in Circō facere īnstituisset), rapī iussit eāsque in familiārum amplissimārum mātrimōniīs collocāvit. Quā ex causā cum bellum Rōmānīs Sabīnī intulissent proeliōque certāmen varium atque anceps fuisset, cum T. Tatiō, rēge Sabīnōrum, foedus īcit mātrōnīs ipsīs quae raptae erant ōrantibus. Quō foedere et Sabīnōs in cīvitātem ascīvit, sacris commūnicātis, et rēgnum suum cum illōrum rēge sociāvit.'",
        "'Post interitum autem Tatiī cum ad eum dominātus omnis reccidisset, quamquam cum Tatiō in rēgium cōnsilium dēlēgerat prīncipēs (quī appellātī sunt propter cāritātem \"patrēs\") populumque et suō et Tatiī nōmine et Lucumōnis (quī Rōmulī socius in Sabīnō proeliō occiderat) in tribūs trēs cūriāsque trīgintā dīscrīpserat (quās cūriās eārum nōminibus nuncupāvit quae ex Sabīnīs virginēs raptae posteā fuerant ōrātrīcēs pācis et Tatiō vīvō foederis) — sed quamquam ea Tatiō sīc erant dīscrīpta vīvō, tamen eō interfectō multō etiam magis Rōmulus patrum auctōritāte cōnsiliōque rēgnāvit.'",
        "'Quō factō, prīmum vīdit iūdicāvitque idem quod Spartae Lycūrgus paulō ante vīderat: singulārī imperiō et potestāte rēgiā tum melius gubernārī et regī cīvitātēs, sī esset optimī cuiusque ad illam vim dominātiōnis adiūncta auctōritās. Itaque, hōc cōnsiliō et quasi senātū fultus et mūnītus, et bella cum fīnitimīs fēlīcissimē multa gessit et, cum ipse nihil ex praedā domum suam reportāret, locuplētāre cīvēs nōn dēstitit.'",
        "'Tunc — id quod retinēmus hodiē magnā cum salūte reī pūblicae — auspiciīs plūrimum obsecūtus est Rōmulus. Nam et ipse — quod prīncipium reī pūblicae fuit — urbem condidit auspicātō, et, omnibus pūblicīs rēbus īnstituendīs quī sibi essent in auspiciīs, ex singulīs tribubus singulōs cooptāvit augurēs.'",
        "'Ac Rōmulus, cum septem et trīgintā rēgnāvisset annōs et haec ēgregia duo firmāmenta reī pūblicae peperisset, auspicia et senātum, tantum est cōnsecūtus ut, cum subitō sōle obscūrātō nōn comparuisset, deōrum in numerō collocātus putārētur. Quam opīniōnem nēmō umquam mortālis assequī potuit sine eximiā virtūtis glōriā. Profectō tanta fuit in eō vīs ingeniī atque virtūtis, ut id dē Rōmulō Proculō Iūliō, hominī agrēstī, dē nūllō aliō crēderētur quod multīs iam ante saeculīs dē nūllō mortālī hominēs crēdidissent: quī impulsū patrum, quō illī ā sē invidiam interitūs Rōmulī pellerent, in concilium vēnisse dīcitur, quī nunc Quirīnālis vocātur, eumque sibi mandāsse ut populum rogāret ut sibi eō in colle dēlūbrum fieret: sē deum esse et Quirīnum vocārī.'",
        "'Vidētisne igitur ūnīus virī cōnsiliō nōn sōlum ortum novum populum neque ut in cūnābulīs vāgientem relictum, sed adultum iam et paene pūberem?' Tum Laelius: 'Nōs vērō vidēmus, et tē quidem in scribendō praestantiōrem fuisse quam in disputandō... mihi vidēris utrumque factūrus: es enim ita ingressus ut quae ipse reperiās tribuere aliīs mālis quam (ut facit apud Platōnem Sōcratēs) ipse fingere, et disputes nōn vagantī ōrātiōne, sed dēfīxā in ūnā rē pūblicā. Quārē perge ut īnstituistī; prōspicere enim iam videor, tē reliquōs rēgēs persequente, quasi perfectam rem pūblicam.'",
        "'Ergō' inquit Scīpiō 'cum ille Rōmulī senātus (quī cōnstābat ex optimātibus, quibus ipse rēx tantum tribuisset ut eōs \"patrēs\" vellet nōminārī \"patriciōsque\" eōrum līberōs) temptāret post Rōmulī excessum ut ipse regeret sine rēge rem pūblicam, populus id nōn tulit dēsīderiōque Rōmulī posteā rēgem flagitāre nōn dēstitit; cum prūdenter illī prīncipēs novam et inaudītam cēterīs gentibus \"interrēgnī\" ineundī ratiōnem excōgitāvērunt, ut, quoad certus rēx dēclārātus esset, neque sine rēge cīvitās neque dīturnō rēge esset ūnō.'",
        "'Quō quidem tempore novus ille populus vīdit tamen id quod fūgit Lacedaemonius Lycūrgus, quī rēgem nōn dēligendum dūxit (sī modo hoc in Lycūrgī potestāte potuit esse), sed habendum, quāliscumque is foret, quī modo esset Herculis stirpe generātus. Nostrī illī etiam tum agrēstēs vīdērunt virtūtem et sapientiam rēgālem, nōn prōgeniem quaerī oportēre. Quibus cum esse praestantem Numam Pompīlium fāma ferret, praetermissīs suīs cīvibus rēgem alienigenam patribus auctōribus sibi ipse populus ascīvit eumque ad rēgnandum Sabīnum hominem Rōmam Curibus accīvit.'",
        "'Quī huc ut vēnit, hominēs Rōmānōs īnstitūtō Rōmulī bellicīs studiīs ut vīdit incēnsōs, existimāvit eōs paulum ab illā cōnsuētūdine esse revocandōs. Ac prīmum agrōs quōs bellō Rōmulus cēperat dīvīsit virītim cīvibus docuitque sine dēpopulātiōne atque praedā posse eōs colendīs agrīs abundāre commodīs omnibus, amōremque iīs ōtiī et pācis iniēcit, quibus facillimē iūstitia et fidēs convalēscit et quōrum patrōciniō maximē cultus agrōrum perceptiōque frūgum dēfenditur. Idemque Pompīlius et auspiciīs maiōribus inventīs ad prīstinum numerum duo augurēs addidit, et sacrīs ē prīncipum numerō pontificēs quīnque praefēcit, et animōs ardentēs cōnsuētūdine et cupiditāte bellandī religiōnum caerimōniīs mītigāvit, adiūnxītque praetereā flāminēs, Saliōs virginēsque Vestālēs omnēsque partēs religiōnis statuit sānctissimē. Idemque mercātūs, lūdōs omnēsque conveniundī causās et celebritātēs invēnit. Quibus rēbus īnstitūtīs, ad hūmānitātem atque mānsuētūdinem revocāvit animōs hominum studiīs bellandī iam immānēs ac ferōs.'",
        "'Sīc ille, cum ūndēquādrāgintā annōs summā in pāce concordiāque rēgnāvisset (sequāmur enim potissimum Polybium nostrum, quō nēmō fuit in exquīrendīs temporibus dīligentior), excessit ē vītā, duābus praeclārissimīs ad dīturnitātem reī pūblicae rēbus cōnfirmātīs: religiōne atque clēmentiā.'",
        "[Deinde Scīpiō rēgna Tullī et Ancī et Tarquiniī Priscī et Serviī exponit eōsque rēgēs haud iniūstōs fuisse ostendit, in quōrum rēgnīs fuerit senātus et aliquod etiam populī iūs, quamvīs dēfuerit lībertās; sed vitiō Tarquiniī Superbī, rēgis iniūstissimī, concidisse genus illud tōtum reī pūblicae.]",
        "'Nam rēx ille dē quō loquor prīmum optimī rēgis caede maculātus integram mentem nōn erat, et, cum metueret ipse poenam sceleris suī summam, metuī sē volēbat. Deinde, victōriīs dīvitiīsque subnīxus, exsultābat īnsolentiā neque suōs mōrēs regere poterat neque suōrum libīdinēs.'",
        "'Itaque cum maior eius fīlius Lucrētiae, Tricipitīnī fīliae, Collātīnī uxōrī, vim attulisset, mulierque pudēns et nōbilis ob illam iniūriam sēsē ipsa morte multāvisset, L. tum vir ingeniō et virtūte praestāns, Brūtus, dēpulit ā cīvibus suīs iniūstum illud dūrae servitūtis iugum. (Quī cum prīvātus esset, tōtam rem pūblicam sustinuit prīmusque in hāc cīvitāte docuit in cōnservandā cīvium lībertāte esse prīvātum nēminem.) Quō auctōre et prīncipe concitāta cīvitās et hāc recentī querellā Lucrētiae et recordātiōne patris et propinquōrum et recordātiōne superbiae Tarquiniī multārumque iniūriārum et ipsīus et fīliōrum exsulem et rēgem ipsum et līberōs eius et gentem Tarquiniōrum esse iussit.'",
        "'Vidētisne igitur ut dē rēge dominus exstiterit ūnīusque vitiō genus reī pūblicae ex bonō in dēterrimum conversum sit? Hic est enim dominus populī quem Graecī \"tyrannum\" vocant; nam \"rēgem\" illum volunt esse quī cōnsulit ut parēns populō cōnservatque eōs quibus est praepositus quam optimā in condiciōne vīvendī — sānē bonum (ut dīxī) reī pūblicae genus, sed tamen inclīnātum et quasi prōnum ad perniciōsissimum statum. Simulatque enim sē īnflexit hic rēx in dominātum iniūstiōrem, fit continuō tyrannus, quō neque taetrius neque foedius nec dīs hominibusque invīsius animāl ūllum cōgitārī potest — quī, quamquam figūra est hominis, mōrum tamen immānitāte vāstissimās vincit bēluās! Quis enim hunc \"hominem\" rītē dīxerit quī sibi cum suīs cīvibus, quī dēnique cum omnī hominum genere nūllam iūris commūniōnem, nūllam hūmānitātis societātem velit?'",
        "'Sit huic oppositus alter, bonus et sapiēns et perītus ūtilitātis dignitātisque cīvīlis, quasi tūtor et prōcūrātor reī pūblicae: sīc enim appelletur quīcumque erit rēctor et gubernātor cīvitātis. Quem virum facite ut agnōscātis: iste est enim quī cōnsiliō et operā cīvitātem tuērī potest.'",
        "[Cum Scīpiō veterem rem pūblicam Rōmānam usque ad decemvirōs exposuisset eamque optimē cōnstitūtam esse ostendisset, Tubērō eum interrogāvit quae disciplīna, quibus mōribus aut lēgibus ea ipsa rēs pūblica quam laudāvisset cōnservārī posset. Scīpiō respondit sine summā iūstitiā rem pūblicam gerī nūllō modō posse. Dē hīs et aliīs rēbus Scīpiō postrīdiē cum īsdem amīcīs disputāvit. Tertiō diē dē bonō reī pūblicae rēctōre disputātiō fuit et dē praemiīs quae virīs bene dē rē pūblicā meritīs dēbentur. Tum Scīpiō dīxit nec statuās nec triumphōs amplissima esse praemia virtūtis, sed stabiliora quaedam alia praemiōrum genera esse. Ā Laeliō interrogātus quaenam illa essent, Scīpiō somnium mīrābile nārrāvit docēns illa esse stabiliora praemiōrum genera quae ipse vīdisset in caelō bonīs rērum pūblicārum servāta rēctōribus.]"
      ],
      "notes": [
        {
          "term": "Catō senex",
          "gloss": "M. Porcius Cato the Elder, who wrote the Origines, the first history of Rome in Latin."
        },
        {
          "term": "orīgō, -inis",
          "gloss": "origin, beginning; the title of Cato's history."
        },
        {
          "term": "labefactāre",
          "gloss": "to shake, weaken; ob labefactandī rēgnī timōrem = for fear his kingdom might be undermined."
        },
        {
          "term": "bēlua",
          "gloss": "wild beast; the she-wolf that suckled Romulus and Remus."
        },
        {
          "term": "perhibētur",
          "gloss": "it is said, tradition reports."
        },
        {
          "term": "auspicātō",
          "gloss": "after taking the auspices, with divine sanction."
        },
        {
          "term": "subagrestis",
          "gloss": "rather rustic, somewhat uncouth."
        },
        {
          "term": "augendās opēs",
          "gloss": "to increase his power; the seizure of the Sabine women was meant to strengthen the new state."
        },
        {
          "term": "ōrātrīx pācis",
          "gloss": "a spokeswoman for peace; the Sabine women pleaded between the armies."
        },
        {
          "term": "reccidere",
          "gloss": "to fall back, come to; cum ad eum dominātus omnis reccidisset = when all power fell to him."
        },
        {
          "term": "cūnābula, -ōrum",
          "gloss": "cradle; Rome was not left crying in its cradle."
        },
        {
          "term": "Quirīnus",
          "gloss": "the name under which Romulus was worshipped after his disappearance."
        },
        {
          "term": "augur, -uris",
          "gloss": "augur, interpreter of the auspices."
        }
      ]
    }
  ],
  "grammar": [
    {
      "id": "nomina-in-ia-et-itia",
      "latinTitle": "Dē vocābulīs faciendīs: -ia et -itia",
      "title": "Abstract Nouns in -ia and -itia",
      "intro": "Latin forms feminine nouns of quality from adjectives by adding -ia or -itia to the adjective stem. The noun names the quality itself: iūstus → iūstitia, laetus → laetitia, miser → miseria. The chapter is full of such words: clēmentia, īnsolentia, cāritās, lībertās, dignitās.",
      "paradigms": [
        {
          "caption": "nōmina in -ia",
          "head": [
            "Adiectīvum",
            "Nōmen",
            "English"
          ],
          "rows": [
            [
              "iūstus, -a, -um",
              "iūstitia, -ae",
              "justice"
            ],
            [
              "clēmēns, -entis",
              "clēmentia, -ae",
              "clemency, gentleness"
            ],
            [
              "īnsolēns, -entis",
              "īnsolentia, -ae",
              "arrogance, insolence"
            ],
            [
              "miser, -era, -erum",
              "miseria, -ae",
              "wretchedness, misery"
            ],
            [
              "audāx, -ācis",
              "audācia, -ae",
              "boldness, daring"
            ],
            [
              "concors, -cordis",
              "concordia, -ae",
              "harmony, agreement"
            ]
          ]
        },
        {
          "caption": "nōmina in -itia",
          "head": [
            "Adiectīvum",
            "Nōmen",
            "English"
          ],
          "rows": [
            [
              "laetus, -a, -um",
              "laetitia, -ae",
              "joy, gladness"
            ],
            [
              "tristis, -e",
              "tristitia, -ae",
              "sadness"
            ],
            [
              "avārus, -a, -um",
              "avāritia, -ae",
              "greed"
            ],
            [
              "pudīcus, -a, -um",
              "pudīcitia, -ae",
              "modesty, chastity"
            ],
            [
              "stultus, -a, -um",
              "stultitia, -ae",
              "folly"
            ]
          ]
        }
      ],
      "points": [
        "Nouns in -ia and -itia are always feminine and belong to the first declension: clēmentia, -ae; laetitia, -ae.",
        "The suffix is added to the stem of the adjective: iūst- → iūstitia; laet- → laetitia; miser- → miseria.",
        "Some adjectives in -ns form the noun in -ntia: clēmēns → clēmentia, īnsolēns → īnsolentia, cōnstāns → cōnstantia.",
        "These nouns name a quality as a thing, so they often stand as subject or object: clēmentia Rōmulī, īnsolentia rēgis.",
        "Do not confuse the abstract noun with the adjective: iūstitia est magna virtūs, sed iūstus vir eam exercet."
      ]
    },
    {
      "id": "nomina-in-tas-et-tudo",
      "latinTitle": "Dē vocābulīs faciendīs: -tās et -tūdō",
      "title": "Abstract Nouns in -tās and -tūdō",
      "intro": "The suffixes -tās (gen. -tātis) and -tūdō (gen. -tūdinis) also make feminine abstract nouns from adjectives. -tās is the commoner and gives words such as lībertās, cāritās, dignitās; -tūdō gives magnitūdō, firmitūdō, cōnsuētūdō.",
      "paradigms": [
        {
          "caption": "nōmina in -tās (-tātis, f.)",
          "head": [
            "Adiectīvum",
            "Nōmen",
            "English"
          ],
          "rows": [
            [
              "līber, -era, -erum",
              "lībertās, -ātis",
              "freedom"
            ],
            [
              "cārus, -a, -um",
              "cāritās, -ātis",
              "dearness, affection"
            ],
            [
              "dignus, -a, -um",
              "dignitās, -ātis",
              "worth, dignity"
            ],
            [
              "hūmānus, -a, -um",
              "hūmānitās, -ātis",
              "humanity, kindness"
            ],
            [
              "aequābilis, -e",
              "aequābilitās, -ātis",
              "evenness, equality"
            ],
            [
              "firmus, -a, -um",
              "firmitās, -ātis",
              "firmness, strength"
            ]
          ]
        },
        {
          "caption": "nōmina in -tūdō (-tūdinis, f.)",
          "head": [
            "Adiectīvum",
            "Nōmen",
            "English"
          ],
          "rows": [
            [
              "magnus, -a, -um",
              "magnitūdō, -inis",
              "greatness, size"
            ],
            [
              "firmus, -a, -um",
              "firmitūdō, -inis",
              "firmness, stability"
            ],
            [
              "cōnsuētus, -a, -um",
              "cōnsuētūdō, -inis",
              "habit, custom"
            ],
            [
              "longus, -a, -um",
              "longitūdō, -inis",
              "length"
            ],
            [
              "altus, -a, -um",
              "altitūdō, -inis",
              "height, depth"
            ]
          ]
        }
      ],
      "points": [
        "Nouns in -tās and -tūdō are feminine. -tās has the genitive -tātis; -tūdō has the genitive -tūdinis.",
        "The suffix is added to the adjective stem, often with a connecting vowel: līber → lībertās, magnus → magnitūdō.",
        "Some nouns are formed from participles or verbal adjectives: cōnsuētūdō < cōnsuētus, firmitūdō < firmus.",
        "A few adjectives give both types: firmitās and firmitūdō; the sense is close, but one form usually prevails in use.",
        "Learn the genitive with every noun: lībertātis, dignitātis, magnitūdinis, cōnsuētūdinis."
      ]
    }
  ],
  "vocabulary": [
    {
      "latin": "fēriae, -ārum",
      "english": "holiday, festival",
      "pos": "noun f. pl."
    },
    {
      "latin": "interventus, -ūs",
      "english": "interruption, arrival",
      "pos": "noun m."
    },
    {
      "latin": "cōnsīderātiō, -ōnis",
      "english": "consideration, contemplation",
      "pos": "noun f."
    },
    {
      "latin": "sphaera, -ae",
      "english": "sphere, globe",
      "pos": "noun f."
    },
    {
      "latin": "disputātiō, -ōnis",
      "english": "discussion, argument",
      "pos": "noun f."
    },
    {
      "latin": "coetus, -ūs",
      "english": "gathering, assembly",
      "pos": "noun m."
    },
    {
      "latin": "commūniō, -ōnis",
      "english": "sharing, community",
      "pos": "noun f."
    },
    {
      "latin": "cōnstitūtiō, -ōnis",
      "english": "constitution, ordering",
      "pos": "noun f."
    },
    {
      "latin": "inīquitās, -ātis",
      "english": "injustice, unfairness",
      "pos": "noun f."
    },
    {
      "latin": "dominātus, -ūs",
      "english": "rule, domination",
      "pos": "noun m."
    },
    {
      "latin": "aequābilitās, -ātis",
      "english": "evenness, equality",
      "pos": "noun f."
    },
    {
      "latin": "firmitūdō, -inis",
      "english": "firmness, stability",
      "pos": "noun f."
    },
    {
      "latin": "cōnfūsiō, -ōnis",
      "english": "confusion, disorder",
      "pos": "noun f."
    },
    {
      "latin": "bēlua, -ae",
      "english": "wild beast",
      "pos": "noun f."
    },
    {
      "latin": "ferōcitās, -ātis",
      "english": "fierceness, ferocity",
      "pos": "noun f."
    },
    {
      "latin": "interitus, -ūs",
      "english": "death, destruction",
      "pos": "noun m."
    },
    {
      "latin": "excessus, -ūs",
      "english": "departure, death",
      "pos": "noun m."
    },
    {
      "latin": "caerimōnia, -ae",
      "english": "ceremony, rite",
      "pos": "noun f."
    },
    {
      "latin": "īnsolentia, -ae",
      "english": "arrogance, excess",
      "pos": "noun f."
    },
    {
      "latin": "immānitās, -ātis",
      "english": "savagery, cruelty",
      "pos": "noun f."
    },
    {
      "latin": "rēctor, -ōris",
      "english": "ruler, governor",
      "pos": "noun m."
    },
    {
      "latin": "populāris, -e",
      "english": "popular, of the people",
      "pos": "adj."
    },
    {
      "latin": "particeps, -cipis",
      "english": "sharing in, partaking of",
      "pos": "adj."
    },
    {
      "latin": "adultus, -a, -um",
      "english": "grown up, mature",
      "pos": "adj."
    },
    {
      "latin": "pudēns, -entis",
      "english": "modest, chaste",
      "pos": "adj."
    },
    {
      "latin": "ventitāre",
      "english": "to come often",
      "pos": "verb"
    },
    {
      "latin": "nancīscī",
      "english": "to get, obtain",
      "pos": "verb"
    },
    {
      "latin": "relaxāre",
      "english": "to relax, relieve",
      "pos": "verb"
    },
    {
      "latin": "investīgāre",
      "english": "to investigate, search out",
      "pos": "verb"
    },
    {
      "latin": "sociāre",
      "english": "to unite, associate",
      "pos": "verb"
    },
    {
      "latin": "exsistere",
      "english": "to arise, emerge",
      "pos": "verb"
    },
    {
      "latin": "labefactāre",
      "english": "to shake, undermine",
      "pos": "verb"
    },
    {
      "latin": "ascīscere",
      "english": "to admit, adopt",
      "pos": "verb"
    },
    {
      "latin": "commūnicāre",
      "english": "to share, make common",
      "pos": "verb"
    },
    {
      "latin": "flagitāre",
      "english": "to demand eagerly",
      "pos": "verb"
    }
  ],
  "pensa": [
    {
      "id": "pensum-a",
      "latinLabel": "PĒNSVM A",
      "title": "Form the abstract noun",
      "instruction": "Supplenda sunt nōmina fēminīna ex adiectīvīs facta. Complete each blank with the correct abstract noun.",
      "type": "fill",
      "items": [
        "miser → {{miseria}}; īnsānus → {{īnsānia}}; superbus → {{superbia}}; perfidus → {{perfidia}}.",
        "audāx → {{audācia}}; patiēns → {{patientia}}; potēns → {{potentia}}; cōnstāns → {{cōnstantia}}; concors → {{concordia}}.",
        "trīstis → {{trīstitia}}; amīcus → {{amīcitia}}; stultus → {{stultitia}}; maestus → {{maestitia}}; saevus → {{saevitia}}.",
        "iūstus → {{iūstitia}}; avārus → {{avāritia}}; pudīcus → {{pudīcitia}}; malus → {{malitia}}.",
        "foedus → {{foeditās}}; dignus → {{dignitās}}; hūmānus → {{hūmānitās}}; fēlīx → {{fēlīcitās}}; novus → {{novitās}}.",
        "paucī → {{paucitās}}; crūdēlis → {{crūdēlitās}}; gravis → {{gravitās}}; celeber → {{celebritās}}; ūtilis → {{ūtilitās}}; līber → {{lībertās}}.",
        "longus → {{longitūdō}}; pulcher → {{pulchritūdō}}; multī → {{multitūdō}}; altus → {{altitūdō}}; fortis → {{fortitūdō}}.",
        "sōlus → {{sōlitūdō}}; clārus → {{clāritūdō}}; amplus → {{amplitūdō}}; firmus → {{firmitūdō}}."
      ]
    },
    {
      "id": "pensum-b",
      "latinLabel": "PĒNSVM B",
      "title": "Complete the sentences",
      "instruction": "Complete each sentence with the form required by the sense. All the words come from the reading.",
      "type": "fill",
      "items": [
        "Tubērō, cum fēriīs Latīnīs Scīpiōnem ōtiōsum {{nactus esset}}, dē rēbus caelestibus cum eō disputāre {{coepit}}.",
        "Laelius, quī tālēs disputātiōnēs nihil ad vītam hūmānam {{attinēre}} putābat, maiōra quaedam {{quaerenda}} esse dīxit.",
        "In rēgnō, quamvīs iūstō, populus {{particeps}} lībertātis nōn est.",
        "Saepe ex rēge {{exsistit}} tyrannus, quī immānitāte taeterrimās {{bēluās}} superat.",
        "Cīvitās {{populāris}} est in quā in populō sunt omnia.",
        "Oppidum est coniūnctiō tēctōrum dēlūbrīs et spatiīs {{commūnibus}} {{distīncta}}.",
        "Rōmulus Sabīnōs in cīvitātem {{ascīvit}} et sacra eōrum cum Rōmānīs {{commūnicāvit}}.",
        "Cūriās nōminibus Sabīnārum {{nuncupāvit}}.",
        "Sōle {{obscūrātō}} Rōmulus nōn {{comparuit}}.",
        "Post eius {{excessum}} populus novum rēgem {{flagitāre}} nōn dēstitit.",
        "Rōmulus deō Marte {{generātus}} erat.",
        "Quī iam adolēvit, {{adultus}} esse dīcitur."
      ]
    },
    {
      "id": "pensum-c",
      "latinLabel": "PĒNSVM C",
      "title": "Answer in Latin",
      "instruction": "Respondē Latīnē, breviter, ad hās quaestiōnēs.",
      "type": "questions",
      "items": [
        {
          "q": "Quandō amīcī ad Scīpiōnem convēnērunt?",
          "a": "Fēriīs Latīnīs, māne, in hortīs Scīpiōnis."
        },
        {
          "q": "Quod prōdigium in caelō vīsum erat?",
          "a": "Duō sōlēs vīsī esse nūntiābantur."
        },
        {
          "q": "Dē quibus rēbus fuit prīma disputātiō?",
          "a": "Dē duōbus sōlibus et dē rēbus caelestibus."
        },
        {
          "q": "Quōmodo Archimēdēs mōtūs astrōrum dēclārāvit?",
          "a": "In globō sīve sphaerā aēneā arte mīrābilī effectā."
        },
        {
          "q": "Cūr Laelius dē rēbus caelestibus disputāre nōluit?",
          "a": "Quia ea minimē ūtilia esse putābat; maiōra dē rē pūblicā quaerenda esse dīcēbat."
        },
        {
          "q": "Quid tum Laelius Scīpiōnem rogāvit?",
          "a": "Ut explicāret quem existimāret esse optimum statum cīvitātis."
        },
        {
          "q": "Quae sunt tria rērum pūblicārum genera?",
          "a": "Rēgnum, optimātium dominātus, cīvitās populāris."
        },
        {
          "q": "Quod genus Scīpiō optimum esse putābat?",
          "a": "Quārtum quoddam genus, ex tribus permixtum et temperātum."
        },
        {
          "q": "Unde incipit Scīpiō dē rē pūblicā Rōmānā disputāns?",
          "a": "Ab ipsā huius urbis condendae prīncipiō, quod profectum est ā Rōmulō."
        },
        {
          "q": "Quibus rēbus Rōmulus rem pūblicam firmāvit?",
          "a": "Auspiciīs et senātū."
        },
        {
          "q": "Quōmodo Numa populum ferōcem mītigāvit?",
          "a": "Religiōne, caerimōniīs, lēgibus et amōre ōtiī ac pācis."
        },
        {
          "q": "Cuius rēgis vitiō rēs pūblica Rōmāna ex bonā in dēterrimam conversa est?",
          "a": "Vitiō Tarquiniī Superbī, rēgis iniūstissimī."
        },
        {
          "q": "Quem Cicerō tyrannō immānī oppōnit?",
          "a": "Bonum et sapientem virum, quasi tūtōrem et prōcūrātōrem reī pūblicae."
        }
      ]
    }
  ],
  "complete": true
}

export default chapter
