// Capitulum XXXIV — BELLVM TROIANVM: TROIA CAPTA
// Source: Goldman & Nyenhuis, Latin via Ovid: A First Course (2nd ed., 1982)
// Reading text, vocabulary, grammar and exercises adapted for the web.

const chapter = {
  number: 34,
  roman: 'XXXIV',
  slug: 'bellum-troianum-troia-capta',
  latinTitle: 'BELLVM TROIANVM: TROIA CAPTA',
  title: 'The Trojan War: Troy Captured',
  tagline: 'Troy burns, the Trojan women are led into captivity, and Polyxena goes to the grave with a courage beyond her sex.',
  status: 'complete',
  overview:
    'After the fall of Troy the Trojan women are divided as booty among the victors. Ovid follows Cassandra, ' +
    'the doomed prophetess, and Hecuba, the queen who loses husband, city and children in a single day. The ' +
    'youngest princess, Polyxena, is demanded by the ghost of Achilles and goes to the sacrificial knife with a ' +
    'courage that shames her captors, while her mother laments over the ruin of all her hopes. The chapter ' +
    'reviews the four participles, the passive periphrastic with the gerundive, the numerals and the uses of the ablative.',
  objectives: [
    'Read Ovid’s account of the fall of Troy, the death of Polyxena and the grief of Hecuba.',
    'Review the active and passive participles, including the gerundive.',
    'Express obligation and necessity with the passive periphrastic.',
    'Review the declension of ūnus, duo and trēs and the main uses of the ablative.',
  ],
  readings: [
    {
      id: 'polyxena',
      latinTitle: 'POLYXENA',
      title: 'Polyxena',
      paragraphs: [
        '[Cassandra] tracta atque comīs antistita Phoebī nōn prōfectūrās tendēbat ad aethera palmās. Dardanidās mātrēs patriōrum signa deōrum dum licet amplexās succēnsaque templa tenentīs invidiōsa trahunt victōrēs praemia Graī; mittitur Astyanax illīs dē turribus, unde pugnantem prō sē prōavītaque rēgna tuentem saepe vidēre patrem mōnstrātum ā mātre solēbat.',
        '“Trōia, valē, rapimur” clāmant; dant ōscula terrae Trōadēs et patriae fūmantia tēcta relinquunt. Ultima cōnscendit classem — miserābile vīsū! — in mediīs Hecuba nātōrum inventa sepulcrīs: [eam] prensantem tumulōs atque ossibus ōscula dantem Graecōrum trāxēre manūs, tamen ūnius hausit inque sinū cinerēs sēcum tulit Hectoris haustōs; Hectoris in tumulō crīnem lacrimāsque relīquit.',
        'Est, ubi Trōia fuit, Phrygiae contrāria tellus; lītore Thrēiciō classem religārat Ātrīdēs dum mare pācātum dum ventus amīcior esset: hīc subitō, quantus, cum vīveret, esse solēbat, exit humō lātē ruptā similisque minantī temporis illīus vultum referēbat Achillēs, quō ferus iniūstō petiit Agamemnona ferrō “immemorēs” que “meī discēditis” inquit “Achīvī, obrutaque est mēcum virtūtis grātia nostrae? Nē facite! utque meum nōn sit sine honōre sepulcrum, placet Achillēōs mactāta Polyxena mānēs!”',
        'Dīxit, et inmitī sociīs pārentibus umbrae, rapta sinū mātris, ... fortis et īnfēlīx et plūs quam fēmina virgō dūcitur ad tumulum. ... Utque Neoptolemum stantem ferrumque tenentem [vīdit], [dīxit:] “Conde meō iugulō vel pectore tēlum.” Nūlla mora est. Iugulumque simul pectusque retēxit, scīlicet haud ūllī servīre Polyxena vellet! ... At sī quōs tamen ultima nostrī verba movent ōris (Prīamī vōs fīlia rēgis, nōn captīva rogat), genetricī corpus inemptum reddite, nēve aurō redimat iūs triste sepulcrī, sed lacrimīs! tunc, cum poterat, redimēbat et aurō.” Dīxerat, at populus lacrimās, quās illa tenēbat, nōn tenet; ipse etiam flēns invītusque sacerdōs virginis ferrum in pectore condit.',
        'Trōadēs [corpus] excipiunt dēplōrātōsque recēnsent Prīamidās et quot tulērit domus ūna cruōrēs, tēque gemunt, virgō, tēque, ō modo rēgia coniūnx rēgia dicta parēns, Asiae flōrentis imāgō; haec māter maestās lacrimās in vulnera fundit ōsculaque ōre tegit cōnsuētaque pectora plangit cānitiemque suam concrētō in sanguine verrēns plūra quidem, sed et haec laniātō pectore, dīxit: “Nāta, tuae — quid enim superest? — dolor ultime mātris, nāta, iacēs, videōque tuum, mea vulnera, vulnus:',
        '... cecidistī et fēmina ferrō, totque tuōs idem frātrēs, tē perdidit īdem, exitium Trōiae nostrīque orbātor, Achillēs; at postquam cecidit Paridis Phoebīque sagittīs, ‘nunc certē’ dīxī ‘nōn est metuendus Achillēs’: nunc quoque mī metuendus erat; cinis ipse sepultī in genus hoc saevit, tumulō quoque sēnsimus hostem, Aeacidae fēcunda fuī! Iacet Īlion ingēns.”',
      ],
      notes: [
        { term: 'Cassandra, -ae', gloss: 'daughter of Priam and Hecuba; Apollo gave her prophecy but made sure no one would believe her.' },
        { term: 'antistita, -ae', gloss: 'priestess — the priestess of Phoebus (Apollo).' },
        { term: 'nōn prōfectūrās palmās', gloss: 'hands that would not avail — palma, the palm of the hand.' },
        { term: 'invidiōsa praemia', gloss: 'hateful booty; the captured women are the prize of the victors.' },
        { term: 'Astyanax, -actis', gloss: 'son of Hector, thrown from the towers of Troy.' },
        { term: 'miserābile vīsū', gloss: 'a pitiful sight — supine in -ū after an adjective.' },
        { term: 'hauriō, -īre', gloss: 'draw up, take in; cinerēs hausit — she gathered a handful of ashes.' },
        { term: 'quantus ... esse solēbat', gloss: 'as great as he used to be when alive — the ghost rises to full heroic size.' },
        { term: 'immemorēs meī', gloss: 'forgetful of me; genitive after immemor.' },
        { term: 'mactāta Polyxena', gloss: 'Polyxena, sacrificed; the ghost of Achilles demands her blood.' },
        { term: 'inmitī ... umbrae', gloss: 'the cruel shade; pārentibus is dative with pāreō, obeying.' },
        { term: 'retēxit', gloss: 'she laid bare (retegō, -ere, retēxī, retēctum).' },
        { term: 'inemptum', gloss: 'unbought, without ransom.' },
        { term: 'orbātor, -ōris', gloss: 'one who bereaves — the destroyer of Troy and of Hecuba.' },
        { term: 'Aeacidae ... fēcunda', gloss: 'fruitful for the son of Aeacus — Achilles, whom Hecuba bore children for.' },
      ],
    },
  ],
  grammar: [
    {
      id: 'participia',
      latinTitle: 'Participia',
      title: 'Review of Participles',
      intro:
        'A participle is a verbal adjective: it has tense and voice like a verb, and case, number and gender like an ' +
        'adjective. Latin has four: the present active, the perfect passive, the future active and the future passive, ' +
        'which is called the gerundive.',
      paradigms: [
        {
          caption: 'participia verbī gerō, gerere, gessī, gestum',
          head: ['', 'Āctīvum', 'Passīvum'],
          rows: [
            ['Praesēns', 'gerēns, -entis — waging', '—'],
            ['Perfectum', '—', 'gestus, -a, -um — having been waged'],
            ['Futūrum', 'gestūrus, -a, -um — about to wage', 'gerendus, -a, -um — about to be waged'],
          ],
        },
        {
          caption: 'exempla ex fābulā',
          head: ['Participium', 'Exemplum', 'Significātiō'],
          rows: [
            ['praesēns āctīvum', 'tendēbat palmās', 'she stretched out her hands'],
            ['perfectum passīvum', 'succēnsa templa', 'the burning temples (having been set on fire)'],
            ['futūrum āctīvum', 'datūra cruōrem', 'about to shed blood'],
            ['gerundīvum', 'miserābile vīsū', 'pitiful to see'],
          ],
        },
      ],
      points: [
        'The present participle is declined like a third-declension adjective: gerēns, gerentis; ablative gerente.',
        'The perfect passive participle is declined like a first-second-declension adjective: gestus, -a, -um.',
        'The future active participle ends in -ūrus, -a, -um: gestūrus, about to wage.',
        'The gerundive ends in -ndus, -a, -um: gerendus, about to be waged, and expresses necessity or fitness.',
        'A participle agrees with its noun in case, number and gender, but its tense is relative to the main verb.',
        'The ablative absolute is made of a noun and a participle in the ablative: Trōiā captā, when Troy had been captured.',
      ],
    },
    {
      id: 'periphrasticum-passivum',
      latinTitle: 'Periphrasticum Passīvum',
      title: 'The Passive Periphrastic',
      intro:
        'The gerundive with a form of sum expresses obligation or necessity: it is a roundabout, periphrastic way of ' +
        'saying that something must be done. The person who must act is put in the dative of agent, not in the ' +
        'ablative with ā or ab.',
      paradigms: [
        {
          caption: 'gerundīvum cum sum',
          head: ['Exemplum', 'Significātiō'],
          rows: [
            ['Cēna afferenda ā cocō parābātur.', 'The dinner to be carried in was being prepared by the cook.'],
            ['Bella gerenda ab omnibus timēbantur.', 'The wars that had to be waged were feared by all.'],
            ['Dēbeō tē amāre.', 'I ought to love you (active).'],
            ['Tū ā mē amārī dēbēs.', 'You ought to be loved by me (passive).'],
            ['Tū amandus mihi es.', 'You ought to be loved by me (passive periphrastic).'],
            ['Nōn mihi metuendus est Achilles.', 'I do not have to fear Achilles.'],
          ],
        },
      ],
      points: [
        'The passive periphrastic is made of the gerundive plus a form of sum: amandus est — he must be loved.',
        'The agent is expressed by the dative: mihi amandus est — he must be loved by me.',
        'Do not use ā or ab with the passive periphrastic; the dative alone names the agent.',
        'The construction is common in Ovid: nunc quoque mī metuendus erat — even now he had to be feared by me.',
        'The neuter gerundive with est may be impersonal: pugnandum est — one must fight.',
        'The tense of sum shows the time of the obligation: amandus est, amandus erat, amandus erit.',
      ],
    },
    {
      id: 'numeri',
      latinTitle: 'Numerī',
      title: 'Review of Numbers',
      intro:
        'Of the numbers from one to a hundred only ūnus, duo and trēs are declined; the rest are indeclinable ' +
        'adjectives. The numbers from quattuor to centum do not change their ending.',
      paradigms: [
        {
          caption: 'ūnus, duo, trēs',
          head: ['', 'M.', 'F.', 'N.'],
          rows: [
            ['ūnus', 'ūnus', 'ūna', 'ūnum'],
            ['duo', 'duo', 'duae', 'duo'],
            ['trēs', 'trēs', 'trēs', 'tria'],
            ['gen. (ūnus)', 'ūnīus', 'ūnīus', 'ūnīus'],
            ['gen. (duo)', 'duōrum', 'duārum', 'duōrum'],
            ['gen. (trēs)', 'trium', 'trium', 'trium'],
          ],
        },
        {
          caption: 'numerī cardinālēs',
          head: ['Numerus', 'Latīnē', 'Numerus', 'Latīnē'],
          rows: [
            ['1', 'ūnus', '11', 'ūndecim'],
            ['2', 'duo', '12', 'duodecim'],
            ['3', 'trēs', '13', 'tredecim'],
            ['4', 'quattuor', '14', 'quattuordecim'],
            ['5', 'quīnque', '15', 'quīndecim'],
            ['6', 'sex', '16', 'sēdecim'],
            ['7', 'septem', '17', 'septendecim'],
            ['8', 'octō', '18', 'duodēvīgintī'],
            ['9', 'novem', '19', 'ūndēvīgintī'],
            ['10', 'decem', '20', 'vīgintī'],
          ],
        },
      ],
      points: [
        'Ūnus is declined like a first-second-declension adjective, but with the genitive ūnīus and dative ūnī.',
        'Duo has the irregular forms duo, duae, duo; genitive duōrum, duārum, duōrum.',
        'Trēs is a third-declension adjective: trēs, trium, tribus, trēs, tribus; the neuter is tria.',
        'The numbers from quattuor to centum are indeclinable: cum quīnque virīs, in septem urbibus.',
        'Mīlle is indeclinable as an adjective (mīlle virī), but the plural mīlia takes the genitive: mīlia virōrum.',
        'The ordinal numbers — prīmus, secundus, tertius — are ordinary adjectives and decline fully.',
      ],
    },
    {
      id: 'ablativus',
      latinTitle: 'Ūsūs Ablātīvī',
      title: 'Review of the Ablative',
      intro:
        'The ablative combines several older case functions: separation, instrument, place and time, description, ' +
        'specification and the absolute construction. The list below gathers the uses already met in the course.',
      paradigms: [
        {
          caption: 'ūsūs ablatīvī',
          head: ['Ūsus', 'Exemplum', 'Significātiō'],
          rows: [
            ['sēparātiō', 'Cīvēs (ē) terrōre līberāvit.', 'He freed the citizens from fear.'],
            ['orīgō', 'Nātus deā.', 'Born from a goddess.'],
            ['māteria', 'Equus (ē) lignō factus.', 'A horse made of wood.'],
            ['locus unde', 'Athēnīs, ab urbe.', 'From Athens, away from the city.'],
            ['comparātiō', 'Maior frātre suō.', 'Greater than his brother.'],
            ['īnstrūmentum', 'Cassandra ferrō necāta est.', 'Cassandra was killed by a dagger.'],
            ['modus', 'Magnō (cum) gaudiō.', 'With great joy.'],
            ['societās', 'Cum mātre.', 'With his mother.'],
            ['dēscrīptiō', 'Multīs flōribus.', 'With many flowers.'],
            ['āgēns cum passīvō', 'Ab ursā necātus est.', 'He was killed by a bear.'],
            ['locus in quō', 'In Lydiā; Athēnīs.', 'In Lydia; at Athens.'],
            ['tempus', 'Decimō annō; tribus diēbus.', 'In the tenth year; in three days.'],
            ['ablātīvus absolūtus', 'Nāve vāstātā, bellum fīnītum est.', 'When the ship had been destroyed, the war was over.'],
            ['specificātiō', 'Virtūte praestat.', 'He excels in bravery.'],
            ['cum ūtor, fruor, potior', 'Magnīs vīribus male ūsus est.', 'He used his great strength badly.'],
          ],
        },
      ],
      points: [
        'True ablative of separation uses ā, ab, ē, ex or dē with a verb or adjective of freeing, lacking or departing.',
        'The ablative of means has no preposition: ferrō, sagittīs; the ablative of agent with a passive verb uses ā or ab.',
        'Place where is expressed by in with the ablative, except for cities and small islands, which take the plain ablative: Athēnīs.',
        'Time when uses the ablative: decimō annō; time within which also uses the ablative: tribus diēbus.',
        'The ablative absolute has a noun and a participle (or another noun) in the ablative, independent of the main clause.',
        'Verbs of using, enjoying, lacking and getting possession take the ablative: ūtor, fruor, careō, potior.',
      ],
    },
  ],
  vocabulary: [
    { latin: 'antistita, -ae', english: 'priestess', pos: 'noun f.' },
    { latin: 'signum, -ī', english: 'sign; statue, image', pos: 'noun n.' },
    { latin: 'turris, -is', english: 'tower', pos: 'noun f.' },
    { latin: 'sepulcrum, -ī', english: 'grave, tomb', pos: 'noun n.' },
    { latin: 'tumulus, -ī', english: 'mound, grave', pos: 'noun m.' },
    { latin: 'os, ossis', english: 'bone', pos: 'noun n.' },
    { latin: 'cinis, -eris', english: 'ashes', pos: 'noun m.' },
    { latin: 'crīnis, -is', english: 'hair', pos: 'noun m.' },
    { latin: 'sinus, -ūs', english: 'fold, bosom, breast', pos: 'noun m.' },
    { latin: 'lītus, lītoris', english: 'shore', pos: 'noun n.' },
    { latin: 'humus, -ī', english: 'ground, earth', pos: 'noun f.' },
    { latin: 'mānis, -ium', english: 'shades of the dead, ghost', pos: 'noun m. pl.' },
    { latin: 'iugulum, -ī', english: 'throat', pos: 'noun n.' },
    { latin: 'pectus, -oris', english: 'breast, heart', pos: 'noun n.' },
    { latin: 'tēlum, -ī', english: 'weapon, spear', pos: 'noun n.' },
    { latin: 'vulnus, -eris', english: 'wound', pos: 'noun n.' },
    { latin: 'cruor, -ōris', english: 'blood, gore', pos: 'noun m.' },
    { latin: 'imāgō, -inis', english: 'image, likeness', pos: 'noun f.' },
    { latin: 'genetrīx, -īcis', english: 'mother', pos: 'noun f.' },
    { latin: 'orbātor, -ōris', english: 'bereaver, destroyer', pos: 'noun m.' },
    { latin: 'excipiō, -ere, excēpī, exceptum', english: 'take up, receive', pos: 'verb' },
    { latin: 'recēnseō, -ēre, recēnsuī', english: 'recount, review', pos: 'verb' },
    { latin: 'gemō, -ere, gemuī', english: 'groan, lament', pos: 'verb' },
    { latin: 'fundō, -ere, fūdī, fūsum', english: 'pour, shed', pos: 'verb' },
    { latin: 'tegō, -ere, tēxī, tēctum', english: 'cover, hide', pos: 'verb' },
    { latin: 'condō, -ere, condidī, conditum', english: 'hide, bury, plunge', pos: 'verb' },
    { latin: 'retēgō, -ere, retēxī, retēctum', english: 'uncover, lay bare', pos: 'verb' },
    { latin: 'serviō, -īre, servīvī', english: 'be a slave to (+ dat.)', pos: 'verb' },
    { latin: 'redimō, -ere, redēmī, redemptum', english: 'buy back, ransom', pos: 'verb' },
    { latin: 'perdō, -ere, perdidī, perditum', english: 'destroy, ruin, lose', pos: 'verb' },
    { latin: 'relinquō, -ere, relīquī, relictum', english: 'leave behind, abandon', pos: 'verb' },
    { latin: 'invidiōsus, -a, -um', english: 'hateful, enviable', pos: 'adj.' },
    { latin: 'patrius, -a, -um', english: 'paternal, ancestral', pos: 'adj.' },
    { latin: 'succēnsus, -a, -um', english: 'set on fire, burning', pos: 'adj.' },
    { latin: 'miserābilis, -e', english: 'pitiful, wretched', pos: 'adj.' },
    { latin: 'īnfēlīx, -īcis', english: 'unhappy, ill-fated', pos: 'adj.' },
    { latin: 'inemptus, -a, -um', english: 'unbought, without ransom', pos: 'adj.' },
    { latin: 'invītus, -a, -um', english: 'unwilling, against one’s will', pos: 'adj.' },
    { latin: 'dum', english: 'while, as long as; until', pos: 'conjunction' },
    { latin: 'scīlicet', english: 'obviously, of course', pos: 'adverb' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PĒNSVM A',
      title: 'Respondēte Latīnē',
      instruction: 'Answer each question with a full Latin sentence, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'Quot fīliōs et quot fīliās Prīamus habet?', a: 'Quīnquāgintā fīliōs et quīnquāgintā fīliās Prīamus habet.' },
        { q: 'Quis erat sacerdōs Apollinis?', a: 'Cassandra sacerdōs Apollinis erat.' },
        { q: 'Cūr Apollō fēcit ut nēmō verbīs Cassandrae crēderet?', a: 'Apollō id fēcit, quia Cassandra eī nōn obsecūta est.' },
        { q: 'Quī Dardanidās mātrēs trahunt?', a: 'Graī victōrēs Dardanidās mātrēs trahunt.' },
        { q: 'Quis dē turribus Trōiae mittitur? Ā quibus?', a: 'Astyanax dē turribus Trōiae mittitur ā Graecīs.' },
        { q: 'In quō locō Hecuba inventa erat?', a: 'Hecuba in mediīs nātōrum sepulcrīs inventa erat.' },
        { q: 'Quae Hecuba ossibus nātōrum dedit?', a: 'Hecuba ossibus nātōrum ōscula dedit.' },
        { q: 'In quō locō cinerēs Hectoris sēcum tulit?', a: 'Cinerēs Hectoris in sinū suō sēcum tulit.' },
        { q: 'Cuius mānēs in terrā Phrygiae subitō humō exit?', a: 'Mānēs Achillis subitō humō exeunt.' },
        { q: 'Quid placet mānibus Achillis?', a: 'Placet mānibus Achillis ut Polyxena mactētur.' },
        { q: 'Quis Polyxenam necāvit?', a: 'Neoptolemus Polyxenam necāvit.' },
        { q: 'Sagittāne aut ferrō Polyxenam necāvit?', a: 'Ferrō, nōn sagittā, Polyxenam necāvit.' },
        { q: 'Achillēsne metuendus est Hecubae? Cūr?', a: 'Etiam nunc Hecubae metuendus est, quia cinis ipse sepultī in genus eius saevit.' },
        { q: 'Quam ad fīnem adducta est urbs Trōia?', a: 'Trōia ad exitium adducta est: capta et incēnsa est.' },
      ],
    },
    {
      id: 'pensum-b',
      latinLabel: 'PĒNSVM B',
      title: 'Periphrasticum passīvum',
      instruction: 'Change each expression of obligation into the passive periphrastic with the gerundive and the dative of agent.',
      type: 'fill',
      items: [
        'Dēbeō litterās scribere. → Litterae mihi {{scrībendae sunt}}.',
        'Hecuba dēbet Achillem nōn metuere. → Achilles Hecubae nōn {{metuendus est}}.',
        'Neoptolemus dēbet Polyxenam nōn necāre. → Polyxena Neoptolemō nōn {{necanda est}}.',
        'Dēbēs urbem condere in hōc locō. → Urbs tibi in hōc locō {{condenda est}}.',
        'Populī verbīs Cassandrae crēdere dēbent. → Populīs verbīs Cassandrae {{crēdendum est}}.',
        'Dēbēmus Trōiam capere. → Trōia nōbīs {{capienda est}}.',
      ],
    },
    {
      id: 'pensum-c',
      latinLabel: 'PĒNSVM C',
      title: 'Participia et numerī',
      instruction: 'Give the four participles of each verb, and supply the correct form of the number in each phrase.',
      type: 'fill',
      items: [
        'agō: praesēns {{agēns, -entis}}; perfectum {{actus, -a, -um}}; futūrum āctīvum {{āctūrus, -a, -um}}; gerundīvum {{agendus, -a, -um}}.',
        'dō: praesēns {{dāns, dantis}}; perfectum {{datus, -a, -um}}; futūrum āctīvum {{datūrus, -a, -um}}; gerundīvum {{dandus, -a, -um}}.',
        'moneō: praesēns {{monēns, -entis}}; perfectum {{monitus, -a, -um}}; futūrum āctīvum {{monitūrus, -a, -um}}; gerundīvum {{monendus, -a, -um}}.',
        'incipiō: praesēns {{incipiēns, -entis}}; perfectum {{inceptus, -a, -um}}; futūrum āctīvum {{inceptūrus, -a, -um}}; gerundīvum {{incipiendus, -a, -um}}.',
        '(one) equus → {{ūnus}} equus; (with three) sagittīs → {{tribus}} sagittīs; (from five) urbibus → ex {{quīnque}} urbibus.',
        '(by two) virīs → ā {{duōbus}} virīs; (out of ten) domibus → ex {{decem}} domibus; (on one) īnsulā → in {{ūnā}} īnsulā.',
        '(with a hundred) mīlitibus → cum {{centum}} mīlitibus; (five hundred) urbēs → {{quīngentae}} urbēs; (twelve) arborēs → {{duodecim}} arborēs.',
        '(three blind) mūrēs → {{trēs}} {{caecī}} mūrēs.',
      ],
    },
  ],
}

export default chapter




