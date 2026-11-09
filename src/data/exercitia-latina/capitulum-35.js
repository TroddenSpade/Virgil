// Capitulum XXXV — CAPITVLVM TRICESIMVM QVINTVM
// Source: Ørberg, Lingua Latina per se Illustrata: Exercitia Latina I (2005)
// Exercise text adapted for the web.

const chapter = {
  number: 35,
  roman: "XXXV",
  slug: "capitulum-35",
  latinTitle: "CAPITVLVM TRICESIMVM QVINTVM",
  title: "The Art of Grammar",
  tagline: "The last review: the parts of speech, the noun, the verb and the anomalous verbs.",
  status: 'complete',
  overview:
    'The exercises of Capitulum XXXV review the whole of Latin grammar in the manner of the old grammarians: ' +
    'the eight parts of speech, the genders, numbers and cases of the noun, the moods, tenses and ' +
    'conjugations of the verb, and the meanings of conjunctions and prepositions. The source text for this ' +
    'chapter is fragmentary, so the groups preserved here are the grammatical review exercises and the ' +
    'principal parts of the anomalous verbs.',
  objectives: [
    'Name the eight parts of speech and classify each.',
    'Recite the genders, numbers, cases and degrees of the noun.',
    'Recite the moods, tenses, persons and conjugations of the verb.',
    'Distinguish the kinds of conjunction and the cases taken by prepositions.',
    'Supply the principal parts of the anomalous verbs.',
  ],
  readings: [],
  grammar: [
    {
      id: 'partes-orationis',
      latinTitle: 'Partēs Ōrātiōnis',
      title: 'The Eight Parts of Speech',
      intro:
        'Every Latin word belongs to one of eight classes, the partes orationis. Four are declinable and ' +
        'four are not: nōmen, prōnōmen, verbum and participium change their form; adverbium, coniūnctiō, ' +
        'praepositiō and interiectiō do not.',
      paradigms: [
        {
          caption: 'partēs ōrātiōnis octō',
          head: ['Pars ōrātiōnis', 'English', 'Exemplum'],
          rows: [
            ['nōmen', 'noun', 'magister, fēmina, scamnum'],
            ['prōnōmen', 'pronoun', 'ego, tū, ille, hīc'],
            ['verbum', 'verb', 'legō, amō, sum'],
            ['adverbium', 'adverb', 'hīc, hodiē, nōn'],
            ['participium', 'participle', 'legēns, lēctus, lēctūrus'],
            ['coniūnctiō', 'conjunction', 'et, aut, nam, quia'],
            ['praepositiō', 'preposition', 'ad, cum, in, trāns'],
            ['interiectiō', 'interjection', 'euax!, heu!, attat!'],
          ],
        },
        {
          caption: 'dēclinābilia et indēclinābilia',
          head: ['Dēclinābilia', 'Indēclinābilia'],
          rows: [
            ['nōmen, prōnōmen, verbum, participium', 'adverbium, coniūnctiō, praepositiō, interiectiō'],
          ],
        },
      ],
      points: [
        'Nōmen, prōnōmen, verbum and participium are declined or conjugated; the other four keep one form.',
        'A nōmen is proprium when it names one person or place (Cornēlius, Capua, Aetna) and appellātīvum when it names many (vir, oppidum, mōns).',
        'Adjectives that express quality or quantity are compared: celer, celerior, celerrimus.',
      ],
    },
    {
      id: 'nomen',
      latinTitle: 'Nōmen',
      title: 'The Noun',
      intro:
        'A noun has gender, number and case. There are four genders, two numbers and six cases; its ' +
        'declension is known from the genitive singular.',
      paradigms: [
        {
          caption: 'genera, numerī, cāsūs',
          head: ['Catēgoria', 'Quot', 'Exempla'],
          rows: [
            ['genera', 'quattuor', 'masculīnum, fēminīnum, neutrum, commūne'],
            ['numerī', 'duo', 'singulāris, plūrālis'],
            ['cāsūs', 'sex', 'nōminātīvus, genetīvus, datīvus, accūsātīvus, vocātīvus, ablātīvus'],
          ],
        },
        {
          caption: 'gradūs comparātiōnis',
          head: ['Gradus', 'Exemplum'],
          rows: [
            ['positīvus', 'doctus'],
            ['comparātīvus', 'doctior'],
            ['superlātīvus', 'doctissimus'],
          ],
        },
        {
          caption: 'dēclīnātiōnēs quīnque',
          head: ['Dēclīnātiō', 'Genetīvus', 'Exemplum'],
          rows: [
            ['prīma', '-ae', 'via, viae'],
            ['secunda', '-ī', 'annus, annī'],
            ['tertia', '-is', 'pars, partis'],
            ['quārta', '-ūs', 'lacus, lacūs'],
            ['quīnta', '-ēī', 'rēs, reī'],
          ],
        },
      ],
      points: [
        'Nōmen proprium names one thing; nōmen appellātīvum names a class.',
        'Only appellative nouns that express quality or quantity are compared.',
        'The genitive singular reveals the declension: -ae, -ī, -is, -ūs, -ēī.',
      ],
    },
    {
      id: 'verbum',
      latinTitle: 'Verbum',
      title: 'The Verb',
      intro:
        'A verb shows time and person but no case. It has mood, kind, number, tense and person; the four ' +
        'conjugations are known from the infinitive.',
      paradigms: [
        {
          caption: 'modī, genera, tempora',
          head: ['Catēgoria', 'Quot', 'Exempla'],
          rows: [
            ['modī', 'quīnque', 'indicātīvus, imperātīvus, optātīvus, coniūnctīvus, īnfīnītīvus'],
            ['genera', 'quattuor', 'āctīvum, passīvum, neutrum, dēpōnēns'],
            ['tempora', 'quīnque', 'praesēns, imperfectum, perfectum, plūsquamperfectum, futūrum'],
          ],
        },
        {
          caption: 'coniugātiōnēs quattuor',
          head: ['Coniugātiō', 'Īnfīnītīvus', 'Exemplum'],
          rows: [
            ['I', '-āre', 'laudāre'],
            ['II', '-ēre', 'monēre'],
            ['III', '-ere', 'legere'],
            ['IV', '-īre', 'audīre'],
          ],
        },
        {
          caption: 'verba anōmala',
          head: ['Verbum', 'Perfectum', 'Supīnum'],
          rows: [
            ['dēmere', 'dēmpsī', 'dēmptum'],
            ['adicere', 'adiēcī', 'adiectum'],
            ['parere', 'peperī', 'partum'],
          ],
        },
      ],
      points: [
        'Modī sunt indicātīvus, imperātīvus, optātīvus, coniūnctīvus, īnfīnītīvus.',
        'Genera sunt āctīvum, passīvum, neutrum, dēpōnēns; dēpōnentia passīvā fōrmā sunt, sed significātiōnem āctīvam habent.',
        'The infinitive ends in -āre, -ēre, -ere or -īre, one for each conjugation.',
      ],
    },
  ],
  vocabulary: [
    { latin: 'appellātīvum', english: 'common noun', pos: 'noun (n.)' },
    { latin: 'cāsus', english: 'case', pos: 'noun (m.)' },
    { latin: 'comparāre', english: 'to compare', pos: 'verb' },
    { latin: 'coniūnctiō', english: 'conjunction', pos: 'noun (f.)' },
    { latin: 'dēmōnstrātīvum', english: 'demonstrative', pos: 'noun (n.)' },
    { latin: 'genus', english: 'gender, kind', pos: 'noun (n.)' },
    { latin: 'gradus', english: 'degree, step', pos: 'noun (m.)' },
    { latin: 'īnflectere', english: 'to inflect, bend', pos: 'verb' },
    { latin: 'interiectiō', english: 'interjection', pos: 'noun (f.)' },
    { latin: 'interrogātīvum', english: 'interrogative', pos: 'noun (n.)' },
    { latin: 'ōrātiō', english: 'speech, sentence', pos: 'noun (f.)' },
    { latin: 'persōnāle', english: 'personal', pos: 'noun (n.)' },
    { latin: 'positīvus', english: 'positive (degree)', pos: 'adjective' },
    { latin: 'possessīvum', english: 'possessive', pos: 'noun (n.)' },
    { latin: 'proprium', english: 'proper noun', pos: 'noun (n.)' },
    { latin: 'quālitās', english: 'quality', pos: 'noun (f.)' },
    { latin: 'relātīvum', english: 'relative', pos: 'noun (n.)' },
    { latin: 'sacerdōs', english: 'priest, priestess', pos: 'noun (m./f.)' },
    { latin: 'admirātiō', english: 'admiration, wonder', pos: 'noun (f.)' },
    { latin: 'affectus', english: 'feeling, emotion', pos: 'noun (m.)' },
    { latin: 'causālis', english: 'causal', pos: 'adjective' },
    { latin: 'cōpulātīvus', english: 'copulative', pos: 'adjective' },
    { latin: 'dēmere', english: 'to take away', pos: 'verb' },
    { latin: 'disiūnctīvus', english: 'disjunctive', pos: 'adjective' },
    { latin: 'explānāre', english: 'to explain', pos: 'verb' },
    { latin: 'īra', english: 'anger', pos: 'noun (f.)' },
    { latin: 'mentiōnem facere', english: 'to mention', pos: 'phrase' },
    { latin: 'modus', english: 'mood, manner', pos: 'noun (m.)' },
    { latin: 'persōna', english: 'person', pos: 'noun (f.)' },
    { latin: 'praepositiō', english: 'preposition', pos: 'noun (f.)' },
    { latin: 'quandō', english: 'when', pos: 'conjunction' },
    { latin: 'significātiō', english: 'meaning', pos: 'noun (f.)' },
    { latin: 'similis', english: 'similar', pos: 'adjective' },
    { latin: 'dēclīnātiō', english: 'declension', pos: 'noun (f.)' },
    { latin: 'coniugātiō', english: 'conjugation', pos: 'noun (f.)' },
    { latin: 'indēclīnābilis', english: 'indeclinable', pos: 'adjective' },
    { latin: 'synōnymum', english: 'synonym', pos: 'noun (n.)' },
    { latin: 'anōmalus, -a, -um', english: 'anomalous, irregular', pos: 'adjective' },
    { latin: 'adicere', english: 'to add', pos: 'verb' },
    { latin: 'nōmen', english: 'noun, name', pos: 'noun (n.)' },
    { latin: 'prōnōmen', english: 'pronoun', pos: 'noun (n.)' },
    { latin: 'verbum', english: 'verb, word', pos: 'noun (n.)' },
    { latin: 'adverbium', english: 'adverb', pos: 'noun (n.)' },
    { latin: 'participium', english: 'participle', pos: 'noun (n.)' },
  ],
  pensa: [
    {
      id: 'exercitium-1',
      latinLabel: 'EXERCITIUM 1',
      title: 'Exercise 1',
      instruction: 'Complete the statements about the parts of speech.',
      type: 'fill',
      items: [
        'Partēs {{ōrātiōnis}} sunt: nōmen, prōnōmen, verbum, adverbium, {{coniūnctiō}} [< coniungere], praepositiō, {{interiectiō}}.',
        'Cornēlius, Capua, Aetna sunt nōmina {{propria}}, vir, oppidum, mōns nōmina {{appellātīva}} sunt.',
        '{{Sacerdōs}} est vir quī — aut fēmina quae — dīīs servit.',
        'Adiectīva quae {{quālitātem}} [< quālis] significant nōn modo dēclīnārī, sed etiam {{comparārī}} possunt, ut celer, celerior, celerrimus.',
        '{{Gradūs}} comparātiōnis sunt: {{positīvus}}, comparātīvus, superlātīvus.',
        '{{Genera}} nōminum sunt masculīnum, fēminīnum, neutrum.',
        'Nōminātīvus, accūsātīvus, genetīvus, cēt. sunt {{cāsūs}} nōminum.',
        'Egō, tū, nōs, vōs sunt prōnōmina {{persōnālia}}.',
        'Meus, tuus, suus, noster, vester prōnōmina {{possessīva}} sunt.',
        'Hic, iste, ille, ipse prōnōmina {{dēmōnstrātīva}} sunt.',
        '...quī quae quod est prōnōmen {{relātīvum}}.',
        'Quis? et uter? sunt prōnōmina {{interrogātīva}}.',
        'Difficile est prōnōmen hic haec hoc {{dēclīnāre}} [= dēclīnāre].',
      ],
    },
    {
      id: 'exercitium-2',
      latinLabel: 'EXERCITIUM 2',
      title: 'Exercise 2',
      instruction: 'Complete the statements about the verb, adverb, conjunction and preposition.',
      type: 'fill',
      items: [
        '{{Modī}} verbōrum sunt indicātīvus, coniūnctīvus, imperātīvus, īnfīnītīvus.',
        'Loquor est {{verbum}} prīma singulāris praesentis indicātīvī verbī dēpōnentis; sī -r {{dēmitur}} [<> additur], hoc verbum Latīnum nōn est.',
        'Adverbium verbō adicitur et {{significātiōnem}} [< significāre] eius {{explānat}} [= plānum facit].',
        'Et coniūnctiō est {{cōpulātīva}} [< cōpulāre], aut {{disiūnctīva}} [< disiungere], aut {{causālis}} [< causa].',
        'Ab, cum, dē, ex, prae, prō, sine sunt {{praepositiōnēs}} casūs ablātīvī.',
        'In iungitur accūsātīvō, {{quandō}} [= cum] "nōs in locum īre" dīcimus.',
        'Cornēlius {{mentiōnem}} Solōnis facit [= Solōnem memorat].',
        'Odium et amor sunt mentis {{affectūs}} contrāriī; {{īra}} est affectus eius quī īrātus est, {{admīrātiō}} eius quī admīrātur.',
        'Numerō plūrālī cāsibus datīvō et ablātīvō fōrmae {{eādem}} sunt.',
      ],
    },
    {
      id: 'exercitium-3',
      latinLabel: 'EXERCITIUM 3',
      title: 'Exercise 3',
      instruction: 'Complete the review of declensions and conjugations.',
      type: 'fill',
      items: [
        'Nōmina dīviduntur in v {{dēclīnātiōnēs}}, quārum genetīvus singulāris dēsinit in [1] -{{ae}}, [2] -{{ī}}, [3] -{{is}}, [4] -{{ūs}}, [5] -{{ēī}}.',
        'Dēclīnā haec nōmina: via, annus, ōvum, leō, pars, opus, lacus, rēs! Genitīvus singulāris: via, {{viae}}; annus, {{annī}}; ōvum, {{ōvī}}; leō, {{leōnis}}; pars, {{partis}}; opus, {{operis}}; lacus, {{lacūs}}; rēs, {{reī}}.',
        'Verba in iv {{coniugātiōnēs}} dīviduntur, quārum īnfīnītīvus (praes. āct.) dēsinit in [1] -{{āre}}, [2] -{{ēre}}, [3] -{{ere}}, [4] -{{īre}}.',
        'Dēclīnā haec verba: laudō, claudō, audeō, audiō, nūntiō, rapiō! Īnfīnītīvus: laudāre, {{claudere}}, {{audēre}}, {{audīre}}, {{nūntiāre}}, {{rapere}}.',
        'Adverbia, praepositiōnēs, coniūnctiōnēs, interiectiōnēs sunt partēs ōrātiōnis {{indēclīnābilēs}} [= quae nōn dēclīnantur]; sed multa adverbia comparantur, ut celeriter, celer{{ius}}, celer{{rimē}}.',
        'Vocābula quae īdem significant {{synōnyma}} vocantur, ut fēmina et mulier, gladius et ēnsis, ōrāre et rogāre, fortasse et {{forsitan}}.',
        'Verba anōmala [= quae exemplīs nōn conveniunt]: dēmere, {{dēmps}}isse, {{dēmpt}}um esse; adicere, ad{{iēc}}isse, ad{{iect}}um esse.',
      ],
    },
    {
      id: 'exercitium-11',
      latinLabel: 'EXERCITIUM 11',
      title: 'Exercise 11',
      instruction: 'Supply the missing principal parts.',
      type: 'fill',
      items: [
        'accendere, {{accend}}isse, {{accēns}}um esse.',
        'dēlēre, {{dēlēv}}isse, {{dēlēt}}um esse.',
        'implicāre, {{implicāv}}isse, {{implicāt}}um esse.',
        'laedere, {{laes}}isse, {{laes}}um esse.',
        'parere, {{peper}}isse, {{part}}um esse.',
        'plaudere, {{plaus}}isse.',
        'retinēre, re{{tinu}}isse, re{{tent}}um esse.',
        'sapere, {{sapu}}isse.',
        'sedēre, {{sēd}}isse.',
      ],
    },
  ],
}

export default chapter
