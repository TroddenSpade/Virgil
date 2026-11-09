// Capitulum XXXVI — AENEAS
// Source: Goldman & Nyenhuis, Latin via Ovid: A First Course (2nd ed., 1982)
// Reading text, vocabulary, grammar and exercises adapted for the web.

const chapter = {
  number: 36,
  roman: 'XXXVI',
  slug: 'aeneas',
  latinTitle: 'AENEAS',
  title: 'Aeneas',
  tagline: 'Ovid and Virgil follow the Trojan hero from burning Troy to Carthage.',
  status: 'complete',
  overview:
    'This chapter turns from the fall of Troy to the wanderings of Aeneas. Ovid tells the story briefly: ' +
    'Aeneas carries his father and his household gods out of the burning city, is received at Delos, crosses ' +
    'the sea past Scylla and Charybdis, and comes to Dido at Carthage. Beside Ovid the book sets three ' +
    'passages of Virgil — the proem of the Aeneid, Dido\'s welcome, and the warning of Laocoon — so that the ' +
    'same hero may be heard in epic verse. The grammar joins the supine of purpose to the other six ways ' +
    'Latin has of expressing purpose.',
  objectives: [
    'Read Ovid\'s account of Aeneas from Troy to Carthage and three passages of Virgil\'s Aeneid.',
    'Recognise the supine in -um and -ū and translate it correctly.',
    'Express purpose with ut, a relative clause, ad + gerund or gerundive, causā or grātiā, and the supine.',
    'Learn the vocabulary of the sea, of flight and of heroic suffering.',
    'Answer questions about the reading in Latin.',
  ],
  readings: [
    {
      id: 'aeneas-apud-ovidium',
      latinTitle: 'AENĒAS APVD OVIDIVM',
      title: 'Aeneas in Ovid',
      paragraphs: [
        'Nōn tamen ēversam Trōiae cum moenibus esse\nspem quoque fāta sinunt: sacra et, sacra altera, patrem\nfert umerīs, venerābile onus, Cythēreius hērōs.\nDē tantīs opibus praedam pius ēligit illam\nAscaniumque suum profugāque per aequora classe\n. . . intrat Apollineam sociīs comitantibus urbem.\nTunc Anius illum templōque domōque recēpit\nurbemque ostendit dēlūbraque nōta duāsque\nLātōnā quondam stirpēs pariente retentās.\nTūre datō flammīs vīnōque in tūra profūsō,\n. . . rēgia tēcta petunt, positīsque tapētibus altīs\nmūnera cum liquidō capiunt Cereālia Bacchō.',
        'Talibus atque aliīs postquam convīvia dictīs\nimplērunt, mēnsā somnum petiēre remōtā\ncumque diē surgunt adeuntque ōrācula Phoebī,\nquī petere antīquam mātrem cognātaque iussit\nlītora; prōsequitur rēx et dat mūnus itūrīs,\nAnchīsae scēptrum, chlamydem pharetramque nepōtī,\ncrātēra Aenēae, quem quondam trānstulit illī\nhospes ab Aoniīs Thersēs Ismēnius ōrīs:\nmīserat hunc illī Thersēs, fābricāverat Alcōn\nHȳleus et longō caelāverat argūmentō.\nUrbs erat, et septem possēs ostendere portās:\nhae prō nōmine erant, et quae foret illa, docēbant;\nante urbem exequiae tumulīque ignēsque pyraeque\neffūsaeque comās et apertae pectora mātrēs\nsignificant lūctum.',
        'Sīciliam: tribus haec excurrit in aequora pennīs.\nScylla latus dextrum, laevum inrequiēta Charybdis\nīnfestat; vorat haec raptās revomitque carīnās;\nilla ferīs canibus succingitur, illa etiam nunc\nvirginis ōra gerēns, et, sī nōn omnia vātēs\nficta relīquērunt, aliquō quoque tempore virgō.',
        'Hunc ubi Trōiānae rēmīs avidamque Charybdin\nēvicēre ratēs, cum iam prope lītus adessent\nAusonium, Libycās ventō referuntur ad ōrās.\nExcipit Aenēān illīc animōque domōque\nnōn bene discidium Phrygiī lātūra marītī\nSīdōnis; inque pyram sacrī sub imāgine factā\nincubuit ferrō dēceptaque dēcipit omnēs.',
      ],
      notes: [
        { term: 'Cythēreius hērōs', gloss: 'Aeneas, son of Venus, who was worshipped at Cythera.' },
        { term: 'venerābile onus', gloss: 'a venerable burden — Anchises, his father, carried on his shoulders.' },
        { term: 'pius', gloss: 'dutiful, devoted; the standing epithet of Aeneas, who saves his father and his gods.' },
        { term: 'profugā classe', gloss: 'ablative absolute: with his fleet in flight, i.e. as an exile.' },
        { term: 'Apollineam urbem', gloss: 'Delos, the island sacred to Apollo, where Latona bore him and Diana.' },
        { term: 'duās stirpēs', gloss: 'the two offspring of Latona, Apollo and Diana, and the two trees she held.' },
        { term: 'mūnera Cereālia', gloss: 'the gifts of Ceres, that is, bread and food.' },
        { term: 'liquidō Bacchō', gloss: 'with flowing Bacchus, i.e. wine.' },
        { term: 'Mēnsā remōtā', gloss: 'ablative absolute: when the table had been removed.' },
        { term: 'antīquam mātrem', gloss: 'their ancient mother — the oracle told the Trojans to seek the land of their ancestors.' },
        { term: 'crātēr', gloss: 'a large bowl for mixing wine; the goblet engraved with the seven-gated city is Thebes.' },
        { term: 'exequiae, pyrae', gloss: 'funeral procession and funeral pyre, pictured on the goblet.' },
        { term: 'Sīdōnis', gloss: 'the Sidonian woman, Dido, queen of Carthage.' },
        { term: 'dēceptaque dēcipit omnēs', gloss: 'herself deceived, she deceives all — Dido hides her love and her fate.' },
      ],
    },
    {
      id: 'vergilius-de-aenea',
      latinTitle: 'VERGILIVS DĒ AENĒĀ',
      title: 'Virgil on Aeneas',
      paragraphs: [
        'Arma virumque canō, Trōiae quī prīmus ab ōrīs\nĪtaliam fātō profugus Lāvīniaque vēnit\nlītora, multum ille et terrīs iactātus et altō\nvī superum saevae memorem Iūnōnis ob īram;\nmulta quoque et bellō passus, dum conderet urbem\ninferretque deōs Latiō, genus unde Latīnum\nAlbānīque patrēs atque altae moenia Rōmae.',
        'Quis genus Aenēadum, quis Trōiae nesciat urbem\nvirtūtēsque virōsque aut tantī incendia bellī?\nNōn obtūnsa adeō gestāmus pectora Poenī,\nnec tam āversus equōs Tyriā Sōl iungit ab urbe.\nSeu vōs Hesperiam magnam Sāturniaque arva\nsīve Erycīs fīnīs rēgemque optātis Acestēn,\n[vōs] auxiliō tūtōs dīmittam opibusque iuvābō.\nVultis et hīs mēcum pariter cōnsīdere rēgnīs?\nUrbem quam statuō, vestra est; subdūcite nāvīs;\nTrōs Tyriusque mihī nūllō discrīmine agētur.\nAtque utinam rēx ipse Notō compulsus eōdem\nadforet Aenēās: equidem per lītora certōs\ndīmittam et Libyae lūstrāre extrēma iubēbō,\nsī quibus ēiectus silvīs aut urbibus errat.',
        'Quārē agite, ō tēctīs, iuvenēs, succēdite nostrīs:\nmē quoque per multōs similis fortūna labōrēs\niactātam hāc dēmum voluit cōnsistere terrā:\nnōn ignāra malī miserīs succurrere discō.\nSīc memorat; simul Aenēān in rēgia dūcit tēcta.',
        'Aenēās rapidum ad nāvīs praemittit Achātēn,\n[ut] Ascanīō ferat haec, ipsumque ad moenia dūcat;\nomnis in Ascanīō cārī stat cūra parentis.\n[eum] Mūnera praetereā Īliacīs ērepta ruīnīs\nferre iubet. . . .\nAt Cythērea novās artēs, nova pectore versat\ncōnsilia, ut faciem mūtātus et ōra Cupīdō\nprō dulcī Ascanīō veniat, dōnīsque furēntem\nincendat rēgīnam atque ossibus implicet ignem.',
        'Lāocoōn ārdēns summā dēcurrit ab arce,\net procul: "Ō miserī, quae tanta īnsānia, cīvēs?\nCrēditis āvectōs hostēs, aut ūlla putātis\ndōna carēre dolīs Danaum? sīc nōtus Ulixēs?\nAut hōc inclūsī lignō occultantur Achīvī,\naut haec in nostrōs fābricāta est māchina mūrōs\nīnspectūra domōs ventūraque dēsuper urbī,\naut aliquis latet error: equō nē crēdite, Teucrī.\nQuicquid id est, timeō Danaōs et dōna ferentīs."',
      ],
      notes: [
        { term: 'Arma virumque canō', gloss: 'arms and the man I sing — the opening words of the Aeneid.' },
        { term: 'Lāvīnia lītora', gloss: 'the Lavinian shores; Lavinia is the Italian princess Aeneas is destined to marry.' },
        { term: 'vī superum', gloss: 'by the power of the gods above (superum = superōrum).' },
        { term: 'memorem īram', gloss: 'remembering wrath — Juno never forgets the judgment of Paris.' },
        { term: 'dum conderet urbem', gloss: 'until he should found the city; dum with the subjunctive of purpose.' },
        { term: 'Aenēadum', gloss: 'of the Aeneadae, the race of Aeneas (genitive plural).' },
        { term: 'Poenī', gloss: 'we Phoenicians; Dido speaks for her people.' },
        { term: 'Hesperia', gloss: 'the western land, an old poetical name for Italy.' },
        { term: 'Acestēs', gloss: 'king of Eryx in Sicily, who receives the Trojans kindly.' },
        { term: 'nūllō discrīmine', gloss: 'with no distinction: Trojan and Tyrian shall be treated alike.' },
        { term: 'nōn ignāra malī', gloss: 'not ignorant of misfortune — Dido, too, has suffered.' },
        { term: 'Achātēs', gloss: 'Achates, the faithful companion of Aeneas.' },
        { term: 'Cythērea', gloss: 'Venus; she sends Cupid disguised as Ascanius to inflame Dido.' },
        { term: 'Lāocoōn', gloss: 'the Trojan priest who warns his people against the wooden horse.' },
        { term: 'quicquid id est', gloss: 'whatever it is — even bearing gifts, the Greeks are feared.' },
      ],
    },
  ],
  grammar: [
    {
      id: 'supinum',
      latinTitle: 'Supīnum',
      title: 'The Supine',
      intro:
        'The supine is a verbal noun of the fourth declension, formed from the stem of the perfect passive ' +
        'participle with -um and -ū. It survives only in the accusative and ablative singular. The accusative ' +
        'is used after verbs of motion to express the purpose of the motion; the ablative is used with ' +
        'adjectives such as mīrābile and difficile.',
      paradigms: [
        {
          caption: 'supīnum — accūsātīvus et ablātīvus',
          head: ['Verbum', 'Accūsātīvus', 'Ablātīvus'],
          rows: [
            ['amō, amāre', 'amātum', 'amātū'],
            ['videō, vidēre', 'vīsum', 'vīsū'],
            ['condō, condere', 'conditum', 'conditū'],
            ['veniō, venīre', 'ventum', 'ventū'],
          ],
        },
      ],
      points: [
        'Accusative of purpose after a verb of motion: Venit mē vīsum — He came to see me. Aenēās vēnit rēgīnam vīsitātum — Aeneas came to visit the queen.',
        'The supine is generally given as the fourth principal part of intransitive verbs: veniō, venīre, vēnī, ventum.',
        'Ablative supine with an adjective: mīrābile dictū — amazing to relate; mīrābile vīsū — a wonderful sight.',
        'The supine has no nominative, and no plural: it is a single form for each of the two cases.',
        'Do not confuse the supine in -um with the accusative of the perfect passive participle; the supine is used only with verbs of motion to name a purpose.',
      ],
    },
    {
      id: 'modi-finem-exprimendi',
      latinTitle: 'Modī Fīnem Exprīmendī',
      title: 'Seven Ways to Express Purpose',
      intro:
        'Latin has many ways of expressing the purpose of an action, which English usually renders with an ' +
        'infinitive. The book sets out seven constructions; they are not interchangeable in style, but they ' +
        'say the same thing.',
      paradigms: [
        {
          caption: 'fīlium mīsit — he sent his son',
          head: ['Via', 'Exemplum'],
          rows: [
            ['Clausula fīnālis', 'Fīlium mīsit ut rēgīnam vidēret.'],
            ['Clausula relātīva', 'Fīlium mīsit quī rēgīnam vidēret.'],
            ['Gerundium post ad', 'Fīlium mīsit ad videndum.'],
            ['Gerundīvum post ad', 'Fīlium mīsit ad rēgīnam videndam.'],
            ['causā + gerundīvum', 'Fīlium mīsit rēgīnae videndae causā.'],
            ['grātiā + gerundīvum', 'Fīlium mīsit rēgīnae videndae grātiā.'],
            ['Supīnum', 'Fīlium mīsit rēgīnam vīsum.'],
          ],
        },
      ],
      points: [
        'The purpose clause takes ut with the subjunctive; a negative purpose takes nē.',
        'The relative clause of purpose takes quī, quae, quod with the subjunctive.',
        'The gerund is a verbal noun; when it would take a direct object, Latin prefers the gerundive, a verbal adjective agreeing with the noun: ad rēgīnam videndam, not ad rēgīnam videndum.',
        'causā and grātiā, both ablative, mean "for the sake of" and are preceded by the genitive of the gerund or gerundive.',
        'The supine in -um is the shortest construction, and the most common after verbs of motion such as mittō, veniō, eō and currō.',
        'Purpose may also be expressed by the future participle after verbs of motion, but the seven constructions above are the ones the book practises.',
      ],
    },
  ],
  vocabulary: [
    { latin: 'onus, oneris', english: 'burden, load', pos: 'noun n.' },
    { latin: 'ops, opis', english: 'power, help; (pl.) wealth, resources', pos: 'noun f.' },
    { latin: 'īra, -ae', english: 'anger, wrath', pos: 'noun f.' },
    { latin: 'dōnum, -ī', english: 'gift', pos: 'noun n.' },
    { latin: 'hostis, -is', english: 'enemy', pos: 'noun m.' },
    { latin: 'lītus, -oris', english: 'shore, coast', pos: 'noun n.' },
    { latin: 'aequor, -oris', english: 'sea, plain', pos: 'noun n.' },
    { latin: 'scopulus, -ī', english: 'rock, cliff', pos: 'noun m.' },
    { latin: 'sanguis, -inis', english: 'blood', pos: 'noun m.' },
    { latin: 'mūnus, -eris', english: 'gift, duty, service', pos: 'noun n.' },
    { latin: 'ventus, -ī', english: 'wind', pos: 'noun m.' },
    { latin: 'carīna, -ae', english: 'keel; poetically, ship', pos: 'noun f.' },
    { latin: 'vātēs, -is', english: 'prophet, poet', pos: 'noun m./f.' },
    { latin: 'imāgo, -inis', english: 'image, likeness, pretext', pos: 'noun f.' },
    { latin: 'incendium, -ī', english: 'fire, conflagration', pos: 'noun n.' },
    { latin: 'ēligō, -ere, -lēgī, -lēctum', english: 'to pick out, choose', pos: 'verb' },
    { latin: 'petō, -ere, petīvī, petītum', english: 'to seek, ask, attack', pos: 'verb' },
    { latin: 'surgō, -ere, surrexī, surrēctum', english: 'to rise, get up', pos: 'verb' },
    { latin: 'fabricō (1)', english: 'to make, craft, fashion', pos: 'verb' },
    { latin: 'inclāmō (1)', english: 'to shout out, cry out', pos: 'verb' },
    { latin: 'iaculor, -ārī, -ātus sum', english: 'to hurl, throw', pos: 'verb (deponent)' },
    { latin: 'prōtendō, -ere, -tendī, -tēnsum', english: 'to stretch out, extend', pos: 'verb' },
    { latin: 'exsecror, -ārī, -ātus sum', english: 'to curse', pos: 'verb (deponent)' },
    { latin: 'saeviō, -īre, -iī, -ītum', english: 'to rage, be violent', pos: 'verb' },
    { latin: 'ēdō, -ere, ēdī, ēsum', english: 'to eat, devour', pos: 'verb' },
    { latin: 'morior, morī, mortuus sum', english: 'to die', pos: 'verb (deponent)' },
    { latin: 'adspiciō, -ere, -spēxī, -spectum', english: 'to catch sight of, look at', pos: 'verb' },
    { latin: 'rēgnō (1)', english: 'to rule, reign', pos: 'verb' },
    { latin: 'sūmō, -ere, sūmpsī, sūmptum', english: 'to take, take up', pos: 'verb' },
    { latin: 'dēcipiō, -ere, -cēpī, -ceptum', english: 'to deceive, cheat', pos: 'verb' },
    { latin: 'condō, -ere, -didī, -ditum', english: 'to found; to bury, hide', pos: 'verb' },
    { latin: 'servō (1)', english: 'to save, keep, preserve', pos: 'verb' },
    { latin: 'dūcō, -ere, dūxī, ductum', english: 'to lead, draw', pos: 'verb' },
    { latin: 'incendō, -ere, -cendī, -cēnsum', english: 'to set on fire, inflame', pos: 'verb' },
    { latin: 'vīsō, -ere, vīsī, vīsum', english: 'to visit, go to see', pos: 'verb' },
    { latin: 'pius, -a, -um', english: 'dutiful, devoted, pious', pos: 'adjective' },
    { latin: 'venerābilis, -e', english: 'venerable, worthy of reverence', pos: 'adjective' },
    { latin: 'immemor, -oris', english: 'forgetful, unmindful (+ gen.)', pos: 'adjective' },
    { latin: 'immānis, -e', english: 'huge, monstrous, savage', pos: 'adjective' },
    { latin: 'cupidus, -a, -um', english: 'eager, desiring (+ gen.)', pos: 'adjective' },
    { latin: 'dulcis, -e', english: 'sweet, dear', pos: 'adjective' },
    { latin: 'profugus, -a, -um', english: 'fugitive, exiled', pos: 'adjective' },
    { latin: 'procul', english: 'far off, at a distance', pos: 'adverb' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PĒNSVM A',
      title: 'Seven ways of purpose',
      instruction:
        'The book\'s model sentence is Rēx mīlitēs mīsit ut urbem servārent. Express the same purpose in each of the other constructions. Fill every blank.',
      type: 'fill',
      items: [
        'Clausula fīnālis: Rēx mīlitēs mīsit {{ut}} urbem servā{{rent}}.',
        'Clausula relātīva: Rēx mīlitēs mīsit {{quī}} urbem servā{{rent}}.',
        'Gerundium post ad: Rēx mīlitēs mīsit ad servan{{dum}}.',
        'Gerundīvum post ad: Rēx mīlitēs mīsit ad urbem servan{{dam}}.',
        'causā + gerundīvum: Rēx mīlitēs mīsit urbis servand{{ae}} {{causā}}.',
        'grātiā + gerundīvum: Rēx mīlitēs mīsit urbis servand{{ae}} {{grātiā}}.',
        'Supīnum: Rēx mīlitēs mīsit urbem servā{{tum}}.',
      ],
    },
    {
      id: 'pensum-b',
      latinLabel: 'PĒNSVM B',
      title: 'Change the purpose clause to a supine',
      instruction:
        'Each sentence expresses purpose with ut and the subjunctive. Rewrite it with the accusative supine, which the book also uses after verbs of motion.',
      type: 'fill',
      items: [
        'Aenēās Achātēn mittit ut Ascanium dūcat. → Aenēās Achātēn mittit Ascanium duc{{tum}}.',
        'Venus Cupīdinem mīsit ut rēgīnam incenderet. → Venus Cupīdinem mīsit rēgīnam incēn{{sum}}.',
        'Polyphēmus saxum dīmīsit ut Graecōs necāret. → Polyphēmus saxum dīmīsit Graecōs necā{{tum}}.',
        'Aenēās vēnit ut rēgīnam vīsitāret. → Aenēās vēnit rēgīnam vīsitā{{tum}}.',
        'Mīlitēs vēnērunt ut urbem servārent. → Mīlitēs vēnērunt urbem servā{{tum}}.',
        'Trōiānī vēnērunt ut templum videant. → Trōiānī vēnērunt templum vī{{sum}}.',
      ],
    },
    {
      id: 'pensum-c',
      latinLabel: 'PĒNSVM C',
      title: 'Questions on the reading',
      instruction: 'Answer each question in a complete Latin sentence, then compare the model answer.',
      type: 'questions',
      items: [
        { q: 'Quid Aenēās umerīs fert?', a: 'Aenēās patrem Anchīsēn umerīs fert, venerābile onus.' },
        { q: 'Quid pius Aenēās dē tantīs opibus praedam ēligit?', a: 'Pius Aenēās Ascanium suum et sacra ēligit.' },
        { q: 'Quō Aenēās cum sociīs intrat?', a: 'Aenēās Apollineam urbem, Delum, cum sociīs intrat.' },
        { q: 'Quis Aenēān templōque domōque recēpit?', a: 'Anius rēx Aenēān templōque domōque recēpit.' },
        { q: 'Quid rēx Aenēae et Ascanīō dat?', a: 'Rēx Anchīsae scēptrum, Ascanīō chlamydem et pharetram, Aenēae crātēra dat.' },
        { q: 'Quid deinde ōrāculum Phoebī iubet?', a: 'Ōrāculum Phoebī iubet Troiānōs petere antīquam mātrem cognātaque lītora.' },
        { q: 'Quās terrās Aenēās post Delum praeterit?', a: 'Aenēās Scyllam et Charybdin praeterit, et ad Sīciliam venit.' },
        { q: 'Ubi Aenēās ā Sīdōnide excipitur?', a: 'Aenēās in Lībyā, ad ōrās Carthāginis, ā Sīdōnide excipitur.' },
        { q: 'Quis Aenēān in rēgia tēcta dūcit?', a: 'Dīdō, Sīdōnis rēgīna, Aenēān in rēgia tēcta dūcit.' },
        { q: 'Cūr Lāocoōn Troiānōs monet nē equō crēdant?', a: 'Lāocoōn monet nē equō crēdant, quod dōna Danaum dolōs occultant.' },
      ],
    },
  ],
}

export default chapter
