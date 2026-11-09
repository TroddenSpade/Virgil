// Capitulum XXXIII — BELLVM TROIANVM: AIAX ET VLIXES
// Source: Goldman & Nyenhuis, Latin via Ovid: A First Course (2nd ed., 1982)
// Reading text, vocabulary, grammar and exercises adapted for the web.

const chapter = {
  number: 33,
  roman: 'XXXIII',
  slug: 'bellum-troianum-aiax-ulixes',
  latinTitle: 'BELLVM TROIANVM: AIAX ET VLIXES',
  title: 'The Trojan War: Ajax and Ulysses',
  tagline: 'After Achilles falls, Ajax and Ulysses contend in speech for his divine armour, and eloquence defeats brute strength.',
  status: 'complete',
  overview:
    'With Achilles dead, his marvellous armour becomes the prize of a quarrel between Ajax, the strongest of the ' +
    'Greeks, and Ulysses, the cleverest. Ovid gives the contest as a pair of speeches: Ajax boasts of his body and ' +
    'his battle deeds, while Ulysses answers with his mind, his stratagems and his services to the Greek cause. ' +
    'The chapter reads the close of Ulysses’ speech and reviews the accusative, the Latin pronouns, the irregular ' +
    'verb fīō, the impersonal licet and the interrogative particles nonne and num.',
  objectives: [
    'Read Ovid’s debate between Ajax and Ulysses for the arms of Achilles.',
    'Review the uses of the accusative, including place to which, extent of time and exclamation.',
    'Recognise the pronouns is, hic, ille, idem, ipse, iste and the adjective-pronouns in -ius.',
    'Use fīō, licet, nonne and num correctly.',
  ],
  readings: [
    {
      id: 'aiax-et-ulixes',
      latinTitle: 'AIAX ET VLIXES',
      title: 'Ajax and Ulysses',
      paragraphs: [
        'Mittor et Īliacās audāx ōrātor ad arcēs vīsaque et intrāta est altae mihi cūria Trōiae plēnaque adhūc erat illa virīs; interritus ēgī, quam mihi mandārat commūnis Graecia, causam accūsōque Parin praedamque Helenamque reposcō et moveō Prīamum Prīamōque Antēnora iūnctum; at Paris et frātrēs et quī rapuēre sub illō vix tenuēre manūs (scīs hoc, Menelāe) nefandās, prīmaque lūx nostrī tēcum fuit illa perīclī.',
        'Longa referre mora est, quae cōnsiliōque manūque ūtiliter fēcī spatiōsī tempore bellī. Post aciēs prīmās urbis sē moenibus hostēs continuēre diū, nec apertī cōpia Martis ūlla fuit; decimō dēmum pugnāvimus annō; quid facis intereā, quī nīl nisi proelia nōstī? Quis tuus ūsus erat? Nam sī mea facta requīris, hostibus īnsidior, fossā mūnīmina cingō, cōnsōlor sociōs, ut longī taedia bellī mente ferant placidā, doceō, quō sīmus alendī armandīque modō, mittor, quō postulat ūsus.',
        'Quid, quod et ipse fugit? Vīdī, puduitque vidēre, cum tū terga darēs inhonestaque vēla parārēs; nec mora “quid facitis? Quae vōs dēmentia” dīxī “concitat, ō sociī, captam dīmittere Trōiam, quidque domum fertis decimō, nisi dēdecus, annō?”',
        'Tālibus atque aliīs, in quae dolor ipse disertum fēcerat, āversōs profugā dē classe redūxī. Convocat Ātrīdēs sociōs terrōre paventīs: nec Tēlamōniadēs etiamnunc hiscere quicquam audet. ... Orior et trepidōs cīvīs exhortor in hostem āmissamque meā virtūtem vōce repōnō. Tempore ab hōc, quodcumque potest fēcisse vidērī fortiter iste, meum est, [ego] quī dantem terga retrāxī.',
      ],
      notes: [
        { term: 'Īliacus, -a, -um', gloss: 'Trojan; Ilium is the Greek name for Troy.' },
        { term: 'cūria, -ae', gloss: 'senate house; Ovid uses the Roman name for the Trojan council, an anachronism.' },
        { term: 'interritus, -a, -um', gloss: 'undaunted, without fear.' },
        { term: 'causam agere', gloss: 'to plead a case; the metaphor is that of a Roman court or senate.' },
        { term: 'reposcō, -ere', gloss: 'demand back — praedamque Helenamque reposcō.' },
        { term: 'Parin', gloss: 'Greek accusative of Paris (Paridem); the object of accūsō.' },
        { term: 'nefandus, -a, -um', gloss: 'wicked, unspeakable — manūs nefandās.' },
        { term: 'perīclī', gloss: 'genitive of perīculum; prīma lūx perīclī — the first day of danger.' },
        { term: 'spatiōsus, -a, -um', gloss: 'long, prolonged — spatiōsī tempore bellī.' },
        { term: 'apertī Martis cōpia', gloss: 'opportunity for open war; Mars stands for battle.' },
        { term: 'dēmum', gloss: 'finally, at last — decimō dēmum pugnāvimus annō.' },
        { term: 'īnsidior, -ārī', gloss: 'lie in ambush for, plot against (+ dat.).' },
        { term: 'mūnīmina', gloss: 'fortifications, defences; fossā mūnīmina cingō — I surround them with a trench.' },
        { term: 'Tēlamōniadēs', gloss: 'son of Telamon, that is, Ajax.' },
        { term: 'hiscō, -ere', gloss: 'open the mouth, speak a word: nec hiscere quicquam audet.' },
      ],
    },
    {
      id: 'philoctetes',
      latinTitle: 'ORATIO VLIXIS: PHILOCTETES',
      title: 'Ulysses and Philoctetes',
      paragraphs: [
        'Sīs licet īnfestus sociīs rēgīque mihique, dūre Philoctēte, licet exsecrēre meumque dēvoveās sine fīne caput cupiāsque dolentī mē tibi forte darī nostrumque haurīre cruōrem, tē tamen adgrediar mēcumque redūcere nītar tamque tuīs potiar (faveat Fortūna) sagittīs, quam sum Dardaniō, quem cēpī, vāte potītus, quam respōnsa deum Trōiānaque fāta retēxī, quam rapuī Phrygiae signum penetrāle Minervae hostibus ē mediīs. Et sē mihi comparat Aiāx? Nempe capī Trōiam prohibēbant fāta sine illō: fortis ubi est Aiāx? Ubi sunt ingentia magnī verba virī? Cūr hīc metuis? Cūr audet Ulixēs īre per excubiās et sē committere noctī perque ferōs ēnsēs nōn tantum moenia Trōum, vērum etiam summās arcēs intrāre suāque ēripere aede deam raptamque adferre per hostēs? Quae nisi fēcissem, frūstrā Tēlamone creātus gestāsset laevā taurōrum tergora septem. Illā nocte mihi Trōiae victōria parta est: Pergama tunc vīcī, cum vincī posse coēgī.',
      ],
      notes: [
        { term: 'Philoctētēs, -ae', gloss: 'the Greek archer who kept the bow and arrows of Hercules on Lemnos.' },
        { term: 'sīs licet ... licet exsecrēre', gloss: 'granted that you are angry, granted that you curse — licet with the subjunctive.' },
        { term: 'exsecror, exsecrārī', gloss: 'curse, execrate (deponent).' },
        { term: 'dēvoveō, -ēre', gloss: 'devote, solemnly curse; dēvoveās caput — may you curse my head.' },
        { term: 'potior, potīrī, potītus sum', gloss: 'get possession of (+ abl.): tuīs potiar sagittīs.' },
        { term: 'Dardanius vātēs', gloss: 'the Trojan seer Helenus, captured by Ulysses, who revealed the prophecies.' },
        { term: 'retēxī', gloss: 'I uncovered, disclosed (retegō, -ere, retēxī, retēctum).' },
        { term: 'signum penetrāle Minervae', gloss: 'the Palladium, the sacred image of Athena kept in the citadel of Troy.' },
        { term: 'excubiae, -ārum', gloss: 'sentinels, night-watches — īre per excubiās.' },
        { term: 'Pergama', gloss: 'the citadel of Troy; Pergama vīcī — I conquered Troy.' },
        { term: 'gestāsset', gloss: 'syncopated for gestāvisset; a contrary-to-fact condition.' },
      ],
    },
  ],
  grammar: [
    {
      id: 'accusativus',
      latinTitle: 'Ūsūs Accūsātīvī',
      title: 'Further Uses of the Accusative',
      intro:
        'The accusative is the case of the direct object, but it does much more. It names the object of many ' +
        'prepositions, the place to which one goes (without a preposition for cities, small islands, domum and rūs), ' +
        'the subject of an infinitive, the extent of space or time, and the person or thing exclaimed over.',
      paradigms: [
        {
          caption: 'ūsūs accūsātīvī',
          head: ['Ūsus', 'Exemplum', 'Significātiō'],
          rows: [
            ['obiectum dīrēctum', 'Rapuī signum Minervae.', 'I stole the statue of Minerva.'],
            ['obiectum praepositiōnis', 'Ad īnsulam nāvigāvimus.', 'We sailed to the island.'],
            ['locus quō (sine praepositiōne)', 'Quid decimō annō domum fertis?', 'What are you taking home in the tenth year?'],
            ['subiectum īnfīnītīvī', 'Trōiānī iubēbant mīlitēs suōs adstāre.', 'The Trojans ordered their soldiers to stand ready.'],
            ['extent of time', 'Decem annōs bellum contrā Trōiam gessit.', 'For ten years he waged war against Troy.'],
            ['exclāmātiō', 'Mē miserum!', 'Wretched me!'],
          ],
        },
      ],
      points: [
        'Names of cities, small islands, domus and rūs take the plain accusative for place to which: Athēnās, domum, rūs.',
        'Athēnae is plural in Latin, so the accusative is Athēnās: decimō annō Athēnās fertis.',
        'The subject of an infinitive stands in the accusative in indirect statement: Trōiānī sensērunt Graecōs appropinquāre.',
        'Verbs such as iubeō and prohibeō take an accusative object and an infinitive: fāta prohibēbant Trōiam capī.',
        'Extent of time and space is expressed by the accusative without a preposition: decem annōs, mīlle passūs.',
        'Exclamations of grief, surprise or indignation use the accusative, often with an adjective: mē miserum!',
      ],
    },
    {
      id: 'pronomina',
      latinTitle: 'Prōnōmina',
      title: 'The Pronouns of Latin',
      intro:
        'Latin uses is, ea, id as the personal pronoun, and hic and ille as demonstratives. A group of ' +
        'adjective-pronouns — ūnus, tōtus, ūllus, sōlus, nūllus, alius, alter — has the genitive singular in ' +
        '-īus and the dative singular in -ī. Idem means "the same"; ipse means "himself, herself, itself"; ' +
        'iste points at "that man of yours" with a tone of contempt.',
      paradigms: [
        {
          caption: 'idem, eadem, idem — the same',
          head: ['', 'M.', 'F.', 'N.'],
          rows: [
            ['Nom. sg.', 'idem', 'eadem', 'idem'],
            ['Gen. sg.', 'eiusdem', 'eiusdem', 'eiusdem'],
            ['Dat. sg.', 'eīdem', 'eīdem', 'eīdem'],
            ['Acc. sg.', 'eundem', 'eandem', 'idem'],
            ['Abl. sg.', 'eōdem', 'eādem', 'eōdem'],
            ['Nom. pl.', 'eīdem (īdem)', 'eaedem', 'eadem'],
            ['Gen. pl.', 'eōrundem', 'eārundem', 'eōrundem'],
            ['Dat. pl.', 'eīsdem (īsdem)', 'eīsdem', 'eīsdem'],
            ['Acc. pl.', 'eōsdem', 'eāsdem', 'eadem'],
            ['Abl. pl.', 'eīsdem (īsdem)', 'eīsdem', 'eīsdem'],
          ],
        },
        {
          caption: 'adjectīva-prōnōmina in -īus',
          head: ['Prōnōmen', 'Significātiō', 'Gen. sg.', 'Dat. sg.'],
          rows: [
            ['ūnus, -a, -um', 'one', 'ūnīus', 'ūnī'],
            ['tōtus, -a, -um', 'whole, all', 'tōtīus', 'tōtī'],
            ['ūllus, -a, -um', 'any', 'ūllīus', 'ūllī'],
            ['sōlus, -a, -um', 'alone, only', 'sōlīus', 'sōlī'],
            ['nūllus, -a, -um', 'no, none', 'nūllīus', 'nūllī'],
            ['alius, alia, aliud', 'other', 'alīus', 'aliī'],
            ['alter, altera, alterum', 'the other', 'alterīus', 'alterī'],
          ],
        },
      ],
      points: [
        'These words are adjectives when they modify a noun and pronouns when they stand alone: facta ūnīus, the deeds of one man.',
        'The genitive of nēmō is usually nūllīus, and the ablative nūllō, instead of neminis and nemine.',
        'Idem is is, ea, id with the suffix -dem; the final -m of the stem becomes -n before -d: eundem, eandem.',
        'Ipse emphasises the person: ipse respondit — the man himself replied; the plural is regular: ipsī, ipsae, ipsa.',
        'Iste, ista, istud is declined like ille and carries contempt: istī, "those people of yours".',
        'Hic points to what is near the speaker, ille to what is far or famous: hic vir, ille rēx.',
      ],
    },
    {
      id: 'fio-et-licet',
      latinTitle: 'Fīō et Licet',
      title: 'The Verb fīō and the Impersonal licet',
      intro:
        'Faciō has no regular passive in the present system; its place is taken by fīō, fierī, factus sum — ' +
        'to be made, to become, to happen. Licet is an impersonal verb meaning "it is permitted", "granted that", ' +
        'or "although"; it takes an infinitive or a subjunctive clause.',
      paradigms: [
        {
          caption: 'fīō, fierī, factus sum — be made, become',
          head: ['Persōna', 'Praesēns', 'Imperfectum', 'Futūrum', 'Perfectum'],
          rows: [
            ['ego', 'fīō', 'fīēbam', 'fīam', 'factus sum'],
            ['tū', 'fīs', 'fīēbās', 'fīēs', 'factus es'],
            ['is / ea', 'fit', 'fīēbat', 'fīet', 'factus est'],
            ['nōs', 'fīmus', 'fīēbāmus', 'fīēmus', 'factī sumus'],
            ['vōs', 'fītis', 'fīēbātis', 'fīētis', 'factī estis'],
            ['eī', 'fīunt', 'fīēbant', 'fīent', 'factī sunt'],
          ],
        },
        {
          caption: 'coniūnctīvus fīō',
          head: ['Persōna', 'Praesēns', 'Imperfectum'],
          rows: [
            ['ego', 'fīam', 'fierem'],
            ['tū', 'fīās', 'fierēs'],
            ['is / ea', 'fīat', 'fieret'],
            ['nōs', 'fīāmus', 'fierēmus'],
            ['vōs', 'fīātis', 'fierētis'],
            ['eī', 'fīant', 'fierent'],
          ],
        },
        {
          caption: 'licet, licēre, licuit — it is permitted',
          head: ['Exemplum', 'Significātiō'],
          rows: [
            ['Licet mihi domum redīre.', 'It is permitted for me to go home.'],
            ['Licet fūmāre.', 'It is permitted to smoke.'],
            ['Licet sīs īnfestus mihi.', 'Granted that you are angry with me.'],
            ['Dum licet.', 'While it is permitted.'],
          ],
        },
      ],
      points: [
        'Fīō supplies the passive of faciō: rēx fīt — the king is made; opus factum est — the work was done.',
        'The present forms fīs, fit, fīmus, fītis, fīunt are irregular and must be learned by heart.',
        'The subjunctive fīat appears in wishes and commands: fīat lūx — let there be light.',
        'The infinitive fierī is common: fierī potest — it can happen; mūtārī in cygnum — to be changed into a swan.',
        'Licet may take an infinitive (licet fūmāre) or a subjunctive without ut (licet sīs īnfestus).',
        'Other impersonal verbs work in the same way: libet (it is pleasing), decet (it is fitting), placet (it pleases), pudet (it shames).',
      ],
    },
    {
      id: 'nonne-et-num',
      latinTitle: 'Nōnne et Num',
      title: 'Questions Expecting Yes or No',
      intro:
        'A simple question may begin with an interrogative word or add -ne to the first word. If the speaker ' +
        'wants to suggest the answer, Latin uses nōnne for a question expecting "yes" and num for one expecting "no".',
      paradigms: [
        {
          caption: 'genera quaestiōnum',
          head: ['Genus', 'Exemplum', 'Responsum suggestum'],
          rows: [
            ['simplex', 'Rapuitne Plūtō Proserpinam?', 'Did Pluto carry off Proserpina? (no hint)'],
            ['nōnne — yes expected', 'Nōnne Cerēs est misera, Proserpinā raptā?', 'Is not Ceres unhappy? — Yes, she is.'],
            ['num — no expected', 'Num Iuppiter erat īrātus, cum Proserpina rapta esset?', 'Jupiter was not angry, was he? — No, he was not.'],
          ],
        },
      ],
      points: [
        'Nōnne expects the answer ita, vērō, or certē: Nōnne Ulixēs mittitur ōrātor? — Yes, he is sent.',
        'Num expects the answer nōn: Num Aiāx sociōs cōnsōlātur? — No, he does not.',
        'The particle -ne merely asks a question and does not hint at the answer: Vīdistīne Aiācem?',
        'In English, nōnne is often rendered by a tag question or by "surely": Surely Ceres is unhappy?',
        'Do not confuse num (whether, in indirect questions) with num (expecting "no") in a direct question.',
      ],
    },
  ],
  vocabulary: [
    { latin: 'arx, arcis', english: 'citadel, height', pos: 'noun f.' },
    { latin: 'cūria, -ae', english: 'senate house, council', pos: 'noun f.' },
    { latin: 'causa, -ae', english: 'case, cause, reason', pos: 'noun f.' },
    { latin: 'ōrātor, -ōris', english: 'orator, speaker', pos: 'noun m.' },
    { latin: 'praeda, -ae', english: 'booty, plunder', pos: 'noun f.' },
    { latin: 'lūx, lūcis', english: 'light, day', pos: 'noun f.' },
    { latin: 'perīculum, -ī', english: 'danger, risk', pos: 'noun n.' },
    { latin: 'aciēs, -ēī', english: 'battle line; keenness', pos: 'noun f.' },
    { latin: 'cōpia, -ae', english: 'abundance; opportunity; troops', pos: 'noun f.' },
    { latin: 'ūsus, -ūs', english: 'use, service, advantage', pos: 'noun m.' },
    { latin: 'fossa, -ae', english: 'trench, ditch', pos: 'noun f.' },
    { latin: 'mūnīmen, -inis', english: 'defence, fortification', pos: 'noun n.' },
    { latin: 'taedium, -ī', english: 'weariness, tedium', pos: 'noun n.' },
    { latin: 'dēdecus, -oris', english: 'disgrace, shame', pos: 'noun n.' },
    { latin: 'vēlum, -ī', english: 'sail', pos: 'noun n.' },
    { latin: 'dēmentia, -ae', english: 'madness, folly', pos: 'noun f.' },
    { latin: 'socius, -ī', english: 'ally, companion, comrade', pos: 'noun m.' },
    { latin: 'terror, -ōris', english: 'fear, terror', pos: 'noun m.' },
    { latin: 'caput, capitis', english: 'head; life', pos: 'noun n.' },
    { latin: 'cruor, -ōris', english: 'blood, gore', pos: 'noun m.' },
    { latin: 'sagitta, -ae', english: 'arrow', pos: 'noun f.' },
    { latin: 'vātēs, -is', english: 'seer, prophet', pos: 'noun m.' },
    { latin: 'excubiae, -ārum', english: 'sentries, night-watch', pos: 'noun f. pl.' },
    { latin: 'ēnsis, -is', english: 'sword', pos: 'noun m.' },
    { latin: 'moenia, -ium', english: 'walls, ramparts', pos: 'noun n. pl.' },
    { latin: 'aedēs, -is', english: 'temple, shrine; house', pos: 'noun f.' },
    { latin: 'tergum, -ī', english: 'back; terga dare — to flee', pos: 'noun n.' },
    { latin: 'accūsō, -āre, accūsāvī', english: 'accuse, blame', pos: 'verb' },
    { latin: 'reposcō, -ere, repoposcī', english: 'demand back, claim', pos: 'verb' },
    { latin: 'contineō, -ēre, continuī, contentum', english: 'hold together, keep, defend', pos: 'verb' },
    { latin: 'īnsidior, -ārī, īnsidiātus sum', english: 'lie in wait for, plot against (+ dat.)', pos: 'verb (dep.)' },
    { latin: 'cōnsōlor, -ārī, cōnsōlātus sum', english: 'comfort, encourage', pos: 'verb (dep.)' },
    { latin: 'doceō, -ēre, docuī, doctum', english: 'teach, instruct', pos: 'verb' },
    { latin: 'potior, potīrī, potītus sum', english: 'get possession of (+ abl.)', pos: 'verb (dep.)' },
    { latin: 'ēripiō, -ere, ēripuī, ēreptum', english: 'snatch away, rescue', pos: 'verb' },
    { latin: 'audāx, audācis', english: 'bold, daring', pos: 'adj.' },
    { latin: 'interritus, -a, -um', english: 'undaunted', pos: 'adj.' },
    { latin: 'nefandus, -a, -um', english: 'wicked, unspeakable', pos: 'adj.' },
    { latin: 'disertus, -a, -um', english: 'eloquent', pos: 'adj.' },
    { latin: 'īnfestus, -a, -um', english: 'hostile, dangerous', pos: 'adj.' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PĒNSVM A',
      title: 'Respondēte Latīnē',
      instruction: 'Answer each question with a full Latin sentence, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'Nōnne Ulixēs mittitur ōrātor ad arcēs Īliacās?', a: 'Ita, Ulixēs mittitur ōrātor ad arcēs Īliacās.' },
        { q: 'Quem Ulixēs accūsat?', a: 'Ulixēs Parin accūsat.' },
        { q: 'Quid Ulixēs reposcit?', a: 'Ulixēs praedam et Helenam reposcit.' },
        { q: 'Quī voluērunt manūs nefandās in Ulixem pōnere?', a: 'Paris et frātrēs et quī rapuēre sub illō manūs nefandās pōnere voluērunt.' },
        { q: 'Quō annō dēmum pugnāvērunt Graecī et Trōiānī?', a: 'Decimō annō dēmum pugnāvērunt.' },
        { q: 'Num Aiāx sociōs cōnsōlātur?', a: 'Nōn, Aiāx sociōs nōn cōnsōlātur; Ulixēs eōs cōnsōlātur.' },
        { q: 'Num voluit Ulixēs domum redīre, Trōiā nōn captā?', a: 'Nōn, Ulixēs Trōiā captā domum redīre voluit.' },
        { q: 'Nōnne voluit Aiāx domum redīre?', a: 'Ita, Aiāx domum redīre voluit.' },
        { q: 'Quā Ulixēs mūnīmina cingit?', a: 'Ulixēs fossā mūnīmina cingit.' },
        { q: 'Quid Ulixēs sociōs docuit?', a: 'Ulixēs docuit quō modō alendī armandīque essent.' },
      ],
    },
    {
      id: 'pensum-b',
      latinLabel: 'PĒNSVM B',
      title: 'Iussa oblīqua',
      instruction: 'Change each command after iubeō into a noun clause of desire with imperō, ut and the subjunctive.',
      type: 'fill',
      items: [
        'Agamemnōn iussit nautās classem parāre. → Agamemnōn nautīs imperāvit ut classem {{parārent}}.',
        'Prīamus iussit Achillem corpus Hectoris reddere. → Prīamus Achillī imperāvit ut corpus Hectoris {{redderet}}.',
        'Laocoōn iussit Trōiānōs equum ligneum in urbem nōn trahere. → Laocoōn Trōiānīs imperāvit nē equum ligneum in urbem {{traherent}}.',
        'Menelāus iussit Pariden Helenam reddere. → Menelāus Paridī imperāvit ut Helenam {{redderet}}.',
        'Hector iussit coniugem suam nōn lacrimāre. → Hector coniugī suae imperāvit nē {{lacrimāret}}.',
        'Iuppiter iussit Agamemnonem bellum Trōiānum nōn gerere. → Iuppiter Agamemnonī imperāvit nē bellum Trōiānum {{gereret}}.',
        'Ulixēs iussit Aiācem terga nōn dare. → Ulixēs Aiācī imperāvit nē terga {{daret}}.',
        'Ulixēs iussit Philoctētem arma Herculis Trōiam ferre. → Ulixēs Philoctētae imperāvit ut arma Herculis Trōiam {{ferret}}.',
        'Agamemnōn Achillem iussit servam tradere. → Agamemnōn Achillī imperāvit ut servam {{traderet}}.',
        'Thetis iussit Hephaestum arma nova Achillī facere. → Thetis Hephaestō imperāvit ut arma nova Achillī {{faceret}}.',
      ],
    },
    {
      id: 'pensum-c',
      latinLabel: 'PĒNSVM C',
      title: 'Prōnōmina et licet',
      instruction: 'Complete each sentence with the intensive or demonstrative pronoun, or with the impersonal construction required.',
      type: 'fill',
      items: [
        'Eum in curru vīdimus. → {{Eundem}} in curru vīdimus. (or Hunc, Ipsum, Istum)',
        'Corpus eī dedit. → Corpus {{huic}} dedit. (or ipsī, eīdem, istī)',
        'Achillēs id Prīamō dedit. → Achillēs {{idem}} Prīamō dedit. (or hoc, ipsum, istud)',
        'Achillēs eōs concutit. → Achillēs {{hōs}} concutit. (or eōsdem, ipsōs, istōs)',
        'Ab eō arma portantur. → Ab {{eōdem}} arma portantur. (or hōc, ipsō, istō)',
        'I am allowed to go home. → {{Licet mihi domum redīre}}.',
        'I am permitted to smoke. → {{Licet mihi fūmāre}}.',
        'I like to read and write. → {{Libet mihi legere et scribere}}.',
        'They are permitted to enter the citadel. → {{Licet eīs arcem intrāre}}.',
        'You are not permitted to touch the statue of the goddess. → {{Nōn licet tibi signum deae attingere}}.',
      ],
    },
  ],
}

export default chapter




