// Capitulum XXIII — IASON ET ARGONAVTAE
// Source: Goldman & Nyenhuis, Latin via Ovid: A First Course (2nd ed., 1982)
// Reading text, vocabulary, grammar and exercises adapted for the web.

const chapter = {
  number: 23,
  roman: 'XXIII',
  slug: 'iason-et-argonautae',
  latinTitle: 'IASON ET ARGONAVTAE',
  title: 'Jason and the Argonauts',
  tagline: 'A stolen kingdom, a prophecy of one sandal, and the voyage to the golden fleece.',
  status: 'complete',
  overview:
    'Pelias seizes the throne of Thessaly and sends the young Jason to Colchis for the golden fleece, hoping that the journey will kill him. Jason gathers the bravest heroes of Greece, among them Orpheus and Hercules, and sails in the Argo to the far side of the Black Sea. There King Aeetes sets a deadly condition for the fleece: Jason must yoke the fire-breathing bulls and sow the dragon\'s teeth. The grammar of the chapter is indirect statement — the accusative with the infinitive — together with the use of negō, the pronoun quīdam, and the irregular adjectives.',
  objectives: [
    'Read the opening of the Argonautic story in the book\'s Latin.',
    'Report speech and thought with the accusative and infinitive.',
    'Use negō for "say that ... not".',
    'Decline quīdam, quaedam, quoddam.',
    'Recognise the irregular genitive and dative singular of alius, sōlus, tōtus, ūllus, nūllus and ūnus.',
  ],
  readings: [
    {
      id: 'fabula',
      latinTitle: 'IASON ET ARGONAVTAE',
      title: 'Jason and the Argonauts',
      paragraphs: [
        'Aesōn erat ōlim rēx Thessaliae, sed frāter eius, quī Pelias appellābātur, rēgnum obtinēre cupiēns Aesōnem ē rēgnō expulit. Fīlium praetereā Aesonis, nōmine Iāsonem, occīdere temptāvit Pelias, homō scelestus, sed eī, fābulā fictā, nūntiāvērunt amīcī Aesonis puerum iam mortuum esse. Nōn nūllīs post diēbus nūntius rēgī novō fidēlis Delphōs missus ad dominum suum sē rettulit, cui nūntiāvit ōrāculum. Pythia, nam sīc appellāta est Delphīs sacerdōs, ēdiderat nūllum esse perīculum eō tempore, sed rēgem verērī dēbēre iuvenem ūnō calceō sōlum indūtum.',
        'Paucīs post annīs, ubi Iāsōn, alterō calceō āmissō, ūnō calceō sōlum indūtus ad rēgiam Peliae pervēnit, rēx ipse perīculum statim sēnsit, nam ōrāculī memoriam retinēbat. Iuvenem igitur ad Colchidem mīsit, quō locō habitābat quīdam rēx, Aeētēs appellātus, quī vellere aureō potiēbātur. Hoc enim vellus ā Phrixō ōlim in rēgnō Colchide relictum erat, postquam ariete aureō in illum locum pervēnit. Quia iter ad Colchidem erat maximē perīculōsum, Iāsonem hoc iter facere iussit Pelias; eum enim hōc itinere interitūrum esse spērābat.',
        'Iāsōn autem sine comitibus īre nōn dēsīderābat; quam ob causam quīnquāgintā virōs fortissimōs dēlēgit, inter quōs erant Orpheus et Herculēs. Hī virī cum Iāsone nāvem ab Argō perītō aedificātam brevī tempore cōnscendērunt atque solvērunt. Post multōs diēs multaque perīcula auxiliō deōrum ad Colchidem pervēnērunt Argonautae (sīc enim nōminābantur ex nōmine nāvis, quae Argō appellāta erat).',
        'Tum Argonautae, multīs perīculōsīs rēbus gestīs, ē nāve ēgressī ad rēgiam sē contulerant, quā habitābat Aeētēs. Ubi autem ab illō vellus aureum Phrixī poposcērunt, prīmum negābat sē ūllī vellus aureum umquam trāditūrum esse, sed deinde lēgem dedit ad quam hoc dōnum trāderet. Sī Iāsōn duōbus taurīs iūnctīs agrum quendam arāverit atque dentēs dracōnis sparserit, vellus eī trādētur. At hoc negōtium erat maximē perīculōsum, quia taurī ex ōre flammam spīrābant atque virī armātī ē dentibus sparsīs creātī sunt, sed iuvenis, rem esse malam nōn putāns, haec nescīvit.',
        'Aeētēs autem fīliam nōmine Medeam habēbat, quae auxiliō magnō Iāsonī futūra erat.',
      ],
      notes: [
        { term: 'fābulā fictā', gloss: 'with a story having been invented, i.e. having made up a story (ablative absolute).' },
        { term: 'Delphōs / Delphīs', gloss: 'to Delphi / at Delphi; names of cities take no preposition, only the accusative or ablative.' },
        { term: 'quam ob causam', gloss: 'for this reason; ob is postpositive here, placed after quam.' },
        { term: 'potior, -īrī, potītus sum', gloss: 'get possession of, possess; it takes the ablative: vellere aureō potiēbātur.' },
        { term: 'solvērunt', gloss: 'they set sail (solvō, -ere, solvī, solūtum — loosen, set sail).' },
        { term: 'ad quam lēgem', gloss: 'on the condition according to which he would hand over the gift.' },
        { term: 'auxiliō magnō Iāsonī', gloss: 'for a great help to Jason — a double dative (dative of purpose and dative of advantage).' },
        { term: 'Argus, -ī', gloss: 'Argus, the skilled shipwright who built the Argo; the Argonauts are named from the ship.' },
        { term: 'ūllī', gloss: 'to anyone; after negō Latin uses ūllus, umquam, usquam rather than nūllus, numquam, nusquam.' },
        { term: 'rem esse malam nōn putāns', gloss: 'not thinking that the matter was bad — accusative and infinitive after putāns.' },
      ],
    },
  ],
  grammar: [
    {
      id: 'oratio-obliqua',
      latinTitle: 'Ōrātiō Oblīqua',
      title: 'Indirect Statement',
      intro:
        'Direct statement quotes a speaker\'s exact words. Indirect statement reports them without quotation marks. Latin has no word for "that" in this construction: it uses an infinitive with its subject in the accusative. The tense of the infinitive is relative to the main verb — present for the same time, perfect for prior time, future for subsequent time.',
      paradigms: [
        {
          caption: 'ōrātiō rēcta et oblīqua',
          head: ['Ōrātiō rēcta', 'Ōrātiō oblīqua'],
          rows: [
            ['Dīcunt, "Marcus hodiē adest."', 'Dīcunt Marcum hodiē adesse.'],
            ['Dīcunt, "Marcus herī adfuit."', 'Dīcunt Marcum herī adfuisse.'],
            ['Dīcunt, "Marcus crās aderit."', 'Dīcunt Marcum crās adfutūrum esse.'],
          ],
        },
        {
          caption: 'tempus īnfīnītīvī post verbum prīmārium',
          head: ['Verbum prīmārium', 'Īnfīnītīvus', 'Significātiō'],
          rows: [
            ['Dīcit / Dīcet', 'deōs amāre poētam', 'he says/will say that the gods love the poet'],
            ['Dīcit / Dīcet', 'deōs amāvisse poētam', 'he says that the gods loved the poet'],
            ['Dīcit / Dīcet', 'deōs amātūrōs esse poētam', 'he says that the gods will love the poet'],
          ],
        },
        {
          caption: 'tempus īnfīnītīvī post verbum secundārium',
          head: ['Verbum prīmārium', 'Īnfīnītīvus', 'Significātiō'],
          rows: [
            ['Dīcēbat / Dīxit', 'deōs amāre poētam', 'he said that the gods loved the poet'],
            ['Dīcēbat / Dīxit', 'deōs amāvisse poētam', 'he said that the gods had loved the poet'],
            ['Dīcēbat / Dīxit', 'deōs amātūrōs esse poētam', 'he said that the gods would love the poet'],
          ],
        },
        {
          caption: 'reflexīvum in ōrātiōne oblīquā',
          head: ['Latinē', 'Anglicē'],
          rows: [
            ['Illa dīcit sē hodiē adesse.', 'She says that she is here today.'],
            ['Ille dīcit sē herī adfuisse.', 'He says that he was here yesterday.'],
            ['Illī dīcunt sē crās adfutūrōs esse.', 'They say that they will be here tomorrow.'],
          ],
        },
      ],
      points: [
        'Verbs of saying, thinking, sensing, knowing, hoping and showing introduce indirect statement: ait, dīcō, negō, nūntiō, nārro, mōnstrō, sciō, nesciō, crēdō, putō, audiō, videō, sentiō, spērō, dēmōnstrō.',
        'In indirect statement the subject of the infinitive goes into the accusative: Amīcī Aesonis nūntiāvērunt puerum iam mortuum esse.',
        'When the subject of the infinitive is the same as the subject of the main verb, the reflexive sē is used: Aeētēs negābat sē vellus trāditūrum esse.',
        'Passive indirect statement uses the passive infinitive: Dīcit poētam ā deīs amārī — he says that the poet is loved by the gods.',
      ],
    },
    {
      id: 'nego',
      latinTitle: 'Ūsus Negō',
      title: 'The Use of negō',
      intro:
        'To say "he says that ... not", Latin uses negō rather than dīcō with a negative word. Because negō already contains the negative idea, it is followed by ūllus, umquam and usquam rather than nūllus, numquam and nusquam.',
      paradigms: [
        {
          caption: 'negō in ōrātiōne oblīquā',
          head: ['Latinē', 'Anglicē'],
          rows: [
            ['Negō nautam adesse.', 'I say that the sailor is not here.'],
            ['Prīmum Aeētēs negābat sē ūllī vellus aureum umquam trāditūrum esse.', 'At first Aeetes said that he would never give the golden fleece to anyone.'],
            ['Negāvit quemquam verērī dēbēre.', 'He said that no one ought to be afraid.'],
          ],
        },
      ],
      points: [
        'Do not write dīcō ... nōn for "say that ... not"; use negō.',
        'The same rule applies to other negatives in the reported clause: use umquam, ūllus, usquam after negō.',
        'Negō may also stand alone with a simple accusative and infinitive: negat hoc esse vērum — he says that this is not true.',
      ],
    },
    {
      id: 'quidam',
      latinTitle: 'Quīdam, Quaedam, Quoddam',
      title: 'The Pronoun quīdam',
      intro:
        'Quīdam, quaedam, quoddam means "a certain". It is declined like quī, quae, quod with the suffix -dam, which remains unchanged. The neuter singular is quiddam when it is a substantive and quoddam when it is an adjective.',
      paradigms: [
        {
          caption: 'quīdam, quaedam, quoddam',
          head: ['', 'M.', 'F.', 'N.'],
          rows: [
            ['Nōminātīvus sing.', 'quīdam', 'quaedam', 'quoddam'],
            ['Genetīvus sing.', 'cuiusdam', 'cuiusdam', 'cuiusdam'],
            ['Datīvus sing.', 'cuidam', 'cuidam', 'cuidam'],
            ['Accūsātīvus sing.', 'quendam', 'quandam', 'quoddam'],
            ['Ablātīvus sing.', 'quōdam', 'quādam', 'quōdam'],
            ['Nōminātīvus plūr.', 'quīdam', 'quaedam', 'quaedam'],
            ['Genetīvus plūr.', 'quōrundam', 'quārundam', 'quōrundam'],
            ['Datīvus plūr.', 'quibusdam', 'quibusdam', 'quibusdam'],
            ['Accūsātīvus plūr.', 'quōsdam', 'quāsdam', 'quaedam'],
            ['Ablātīvus plūr.', 'quibusdam', 'quibusdam', 'quibusdam'],
          ],
        },
      ],
      points: [
        'Quīdam rēx in Colchide habitābat — a certain king lived in Colchis.',
        'After a noun quīdam often means "a certain" with a slight tone of contempt or vagueness: quīdam homō scelestus.',
        'The suffix -dam is invariable; only the quī/quae/quod part declines.',
      ],
    },
    {
      id: 'adjectiva-irregularia',
      latinTitle: 'Adiectīva Irrēgulāria',
      title: 'Irregular Adjectives',
      intro:
        'Alter, alius, nūllus, sōlus, tōtus, ūllus and ūnus are regular in most forms but have a genitive singular in -īus and a dative singular in -ī for all genders. The other cases follow bonus, -a, -um.',
      paradigms: [
        {
          caption: 'sōlus, -a, -um — only, alone',
          head: ['', 'M.', 'F.', 'N.', 'M. pl.', 'F. pl.', 'N. pl.'],
          rows: [
            ['Nōminātīvus', 'sōlus', 'sōla', 'sōlum', 'sōlī', 'sōlae', 'sōla'],
            ['Genetīvus', 'sōlīus', 'sōlīus', 'sōlīus', 'sōlōrum', 'sōlārum', 'sōlōrum'],
            ['Datīvus', 'sōlī', 'sōlī', 'sōlī', 'sōlīs', 'sōlīs', 'sōlīs'],
            ['Accūsātīvus', 'sōlum', 'sōlam', 'sōlum', 'sōlōs', 'sōlās', 'sōla'],
            ['Ablātīvus', 'sōlō', 'sōlā', 'sōlō', 'sōlīs', 'sōlīs', 'sōlīs'],
          ],
        },
      ],
      points: [
        'alter, altera, alterum — the other (of two), with genitive alterīus and dative alterī; alius, alia, aliud — other (of more than two), with genitive alīus and dative alī.',
        'nūllus — none; sōlus — only; tōtus — whole, all; ūllus — any; ūnus — one.',
        'The genitive in -īus and dative in -ī are the same for all three genders: sōlīus, sōlī.',
        'These adjectives are common in indirect statement: negābat sē ūllī ... trāditūrum esse.',
      ],
    },
  ],
  vocabulary: [
    { latin: 'Aeētēs, -ae', english: 'Aeetes (king of Colchis)', pos: 'noun m.' },
    { latin: 'Aesōn, -onis', english: 'Aeson (father of Jason)', pos: 'noun m.' },
    { latin: 'Argonautae, -ārum', english: 'the Argonauts (sailors on the Argo)', pos: 'noun m. pl.' },
    { latin: 'ariēs, arietis', english: 'a ram', pos: 'noun m.' },
    { latin: 'calceus, -ī', english: 'shoe, sandal', pos: 'noun m.' },
    { latin: 'Colchis, -idis', english: 'Colchis (a country on the Black Sea)', pos: 'noun f.' },
    { latin: 'dracō, -ōnis', english: 'dragon, serpent', pos: 'noun m.' },
    { latin: 'Iāsōn, -onis', english: 'Jason', pos: 'noun m.' },
    { latin: 'Medea, -ae', english: 'Medea (princess of Colchis)', pos: 'noun f.' },
    { latin: 'nāvis, -is', english: 'ship', pos: 'noun f.' },
    { latin: 'negōtium, -iī', english: 'business, affair, task', pos: 'noun n.' },
    { latin: 'nūntius, -iī', english: 'messenger', pos: 'noun m.' },
    { latin: 'ōrāculum, -ī', english: 'oracle', pos: 'noun n.' },
    { latin: 'Pelias, -ae', english: 'Pelias (usurper king of Thessaly)', pos: 'noun m.' },
    { latin: 'Pythia, -ae', english: 'Pythia (the priestess of Apollo)', pos: 'noun f.' },
    { latin: 'vellus, -eris', english: 'fleece', pos: 'noun n.' },
    { latin: 'āmittō, -ere, āmīsī, āmissum', english: 'lose', pos: 'verb' },
    { latin: 'appellō, -āre, -āvī, -ātum', english: 'call, name', pos: 'verb' },
    { latin: 'arō, -āre, -āvī, -ātum', english: 'plough', pos: 'verb' },
    { latin: 'cōnferō, cōnferre, contulī, collātum', english: 'bring together, collect; sē cōnferre — take oneself to', pos: 'verb' },
    { latin: 'cōnscendō, -ere, -dī, -sum', english: 'go on board ship, embark', pos: 'verb' },
    { latin: 'dēligō, -ere, -lēgī, -lēctum', english: 'pick, choose, select', pos: 'verb' },
    { latin: 'ēgredior, -gredī, -gressus sum', english: 'step out, go out, disembark', pos: 'verb' },
    { latin: 'expellō, -ere, -pulī, -pulsum', english: 'drive out, expel', pos: 'verb' },
    { latin: 'gerō, -ere, gessī, gestum', english: 'do, make, experience, achieve', pos: 'verb' },
    { latin: 'induō, -ere, -uī, -ūtum', english: 'put on, wear, dress', pos: 'verb' },
    { latin: 'potior, -īrī, potītus sum', english: 'get possession of, possess (+ abl.)', pos: 'verb' },
    { latin: 'trādō, -ere, trādidī, trāditum', english: 'hand over, betray, surrender', pos: 'verb' },
    { latin: 'armātus, -a, -um', english: 'armed', pos: 'adjective' },
    { latin: 'brevis, -e', english: 'short', pos: 'adjective' },
    { latin: 'fidēlis, -e', english: 'faithful (to, + dat.)', pos: 'adjective' },
    { latin: 'paucī, -ae, -a', english: 'few, a few', pos: 'adjective' },
    { latin: 'quīdam, quaedam, quoddam', english: 'a certain', pos: 'adjective' },
    { latin: 'scelestus, -a, -um', english: 'wicked', pos: 'adjective' },
    { latin: 'crās', english: 'tomorrow', pos: 'adverb' },
    { latin: 'herī', english: 'yesterday', pos: 'adverb' },
    { latin: 'hodiē', english: 'today', pos: 'adverb' },
    { latin: 'ob (+ acc.)', english: 'on account of, against', pos: 'preposition' },
    { latin: 'post', english: 'after, afterwards', pos: 'adverb' },
    { latin: 'umquam', english: 'ever', pos: 'adverb' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PĒNSVM A',
      title: 'Respondēte Latīnē',
      instruction: 'Answer each question in Latin, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'Quam ob rem expulit Pelias frātrem suum?', a: 'Quia rēgnum obtinēre cupiēbat, Aesōnem ē rēgnō expulit.' },
        { q: 'Quid erat nōmen fīliō Aesonis?', a: 'Nōmen fīliō Aesonis erat Iāsōn.' },
        { q: 'Quando mīsit rēx nūntium Delphōs?', a: 'Nōn nūllīs post diēbus rēx nūntium Delphōs mīsit.' },
        { q: 'Quid ēdiderat Pythia?', a: 'Ēdiderat nūllum esse perīculum eō tempore, sed rēgem verērī dēbēre iuvenem ūnō calceō sōlum indūtum.' },
        { q: 'Quōmodo erat habitus Iāsonis novus?', a: 'Iāsōn ūnō calceō sōlum indūtus erat, alterō calceō āmissō.' },
        { q: 'Quis potiēbātur vellere aureō?', a: 'Aeētēs, rēx Colchidis, vellere aureō potiēbātur.' },
        { q: 'Quid iussit Pelias?', a: 'Iāsonem ad Colchidem īre iussit, ut vellus aureum peteret.' },
        { q: 'Quisnam nāvem aedificāvit?', a: 'Argus perītus nāvem aedificāvit.' },
        { q: 'Quantum virōrum fortissimōrum dēlēgit Iāsōn?', a: 'Quīnquāgintā virōs fortissimōs dēlēgit.' },
        { q: 'Pervēnēruntne Argonautae ad Colchidem sine auxiliō deōrum?', a: 'Nōn sine auxiliō deōrum: auxiliō deōrum ad Colchidem pervēnērunt.' },
        { q: 'Quid prīmum respondēbat Aeētēs?', a: 'Prīmum negābat sē ūllī vellus aureum umquam trāditūrum esse.' },
        { q: 'Quid dēnique respondēbat ille?', a: 'Dēnique lēgem dedit: sī Iāsōn tauros iūnxisset et dentēs dracōnis sparsisset, vellus eī trāderētur.' },
      ],
    },
    {
      id: 'pensum-b',
      latinLabel: 'PĒNSVM B',
      title: 'Ōrātiō Oblīqua',
      instruction: 'Complete each sentence in indirect statement with the correct infinitive.',
      type: 'fill',
      items: [
        'Nūntiant puerum hodiē {{abesse}} (is absent).',
        'Nūntiant puerum herī {{abfuisse}} (was absent).',
        'Nūntiant puerum crās {{abfutūrum esse}} (will be absent).',
        'Nūntiāvērunt puerum herī {{abesse}} (was absent).',
        'Nūntiāvērunt puerum herī {{abfuisse}} (had been absent).',
        'Nūntiāvērunt puerum crās {{abfutūrum esse}} (would be absent).',
        'Dīcunt puerum {{esse}} fīlium rēgis (is the king\'s son).',
        'Putant puerum {{fugere}} (is fleeing).',
        'Prīmum negābat nautam {{adesse}} (was present).',
        'Poēta nārrat Argonautās {{appellātōs esse}} quoque Minyās (were called).',
      ],
    },
    {
      id: 'pensum-c',
      latinLabel: 'PĒNSVM C',
      title: 'In Latīnum convertite',
      instruction: 'Translate each English sentence into Latin, then compare with the model answer.',
      type: 'questions',
      items: [
        {
          q: 'Aeson\'s brother wanted to rule, but he did not kill Aeson.',
          a: 'Frāter Aesonis rēgnum obtinēre cupiēbat, sed Aesōnem nōn occīdit.',
        },
        {
          q: 'He was going to kill the king\'s son, but the messengers announced that the boy was already dead.',
          a: 'Fīlium rēgis occīsūrus erat, sed nūntiī nūntiāvērunt puerum iam mortuum esse.',
        },
        {
          q: 'Jason was wearing only one sandal because he had lost the other.',
          a: 'Iāsōn ūnō calceō sōlum indūtus erat, quod alterum āmīserat.',
        },
        {
          q: 'He says that Jason did not choose fifty very brave men.',
          a: 'Negat Iāsonem quīnquāgintā virōs fortissimōs dēlēgisse.',
        },
        {
          q: 'Aeetes said, "I will surrender the fleece on this condition."',
          a: 'Aeētēs dīxit sē hāc lēge vellus trāditūrum esse.',
        },
        {
          q: 'They did not know that this task would be very dangerous.',
          a: 'Nesciēbant hoc negōtium maximē perīculōsum futūrum esse.',
        },
      ],
    },
  ],
}

export default chapter
