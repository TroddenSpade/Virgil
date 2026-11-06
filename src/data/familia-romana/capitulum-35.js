// Capitulum XXXV — Ars Grammatica
// Sources: Ørberg, Lingua Latina per se Illustrata, Pars I: Familia Romana (2nd ed.)
// Reading text, grammar and exercises adapted and re-typeset for the web.

const chapter = {
  number: 35,
  roman: 'XXXV',
  slug: 'ars-grammatica',
  latinTitle: 'ARS GRAMMATICA',
  title: 'The Art of Grammar',
  tagline:
    'The last lesson of the book: a magister quizzes his discipulus, and together they review the whole of Latin grammar — the eight parts of speech and all their categories.',
  status: 'complete',
  overview:
    'The final chapter is not a story but a lesson. In the manner of the old grammarian Donatus, a magister ' +
    'puts questions to his discipulus, and the two of them work through the whole of Latin grammar one last ' +
    'time: the eight partes orationis, the four genders, two numbers and six cases of the noun, the degrees ' +
    'of comparison, the moods and tenses of the verb, and the kinds of conjunction and preposition. It is a ' +
    'review of everything met from Capitulum I onwards.',
  objectives: [
    'Name the eight parts of speech: nōmen, prōnōmen, verbum, adverbium, participium, coniūnctiō, praepositiō, interiectiō.',
    'Recite the four genders, the two numbers and the six cases of the noun.',
    'Compare adjectives (doctus, doctior, doctissimus) and adverbs (docte, doctius, doctissime).',
    'Describe the moods, genders and five tenses of the verb, and the four conjugations.',
    'Tell the kinds of conjunction apart, and which case each preposition takes.',
  ],
  readings: [
    {
      id: 'de-partibus-orationis',
      latinTitle: 'PARTĒS ŌRĀTIŌNIS',
      title: 'The Parts of Speech',
      paragraphs: [
        "Magister discipulum interrogat: 'Partēs ōrātiōnis quot sunt?' Discipulus respondet: 'Octō.' Magister: 'Quae?' Discipulus: 'Nōmen, prōnōmen, verbum, adverbium, participium, coniūnctiō, praepositiō, interiectiō.'",
        "Magister: 'Nōmen quid est?' Discipulus: 'Pars ōrātiōnis cum cāsū, corpus aut rem propriē significāns; aut enim ūnīus nōmen est et proprium dīcitur, aut multōrum et appellātīvum.'",
        "Magister: 'Genera nōminum quot sunt?' Discipulus: 'Quattuor.' Magister: 'Quae?' Discipulus: 'Masculīnum, ut hic magister; fēminīnum, ut haec fēmina; neutrum, ut hoc scamnum; commūne, ut hic et haec sacerdōs.'",
        "Magister: 'Numerī nōminum quot sunt?' Discipulus: 'Duo.' Magister: 'Quī?' Discipulus: 'Singulāris, ut hic magister; plūrālis, ut hī magistrī.'",
        "Magister: 'Cāsus nōminum quot sunt?' Discipulus: 'Sex.' Magister: 'Quī?' Discipulus: 'Nōminātīvus, genetīvus, dativus, accūsātīvus, vocātīvus, ablātīvus. Per hōs omnium generum nōmina, prōnōmina, participia dēclīnantur.'",
        "Magister: 'Comparātiōnis gradūs quot sunt?' Discipulus: 'Trēs.' Magister: 'Quī?' Discipulus: 'Positīvus, ut doctus; comparātīvus, ut doctior; superlātīvus, ut doctissimus.' Magister: 'Quae nōmina comparantur?' Discipulus: 'Appellātīva dumtaxat quālitātem aut quantitātem significantiā.'",
        "Magister: 'Prōnōmen quid est?' Discipulus: 'Pars ōrātiōnis quae prō nōmine posita tantundem paene significat persōnamque interdum recipit.'",
        "Magister: 'Genera prōnōminum quae sunt?' Discipulus: 'Eādem ferē quae et nōminum: masculīnum, ut quis; fēminīnum, ut quae; neutrum, ut quod; commūne, ut quālis, tālis; trium generum, ut ego, tū.'",
        "Magister: 'Numerī prōnōminum quot sunt?' Discipulus: 'Duo.' Magister: 'Quī?' Discipulus: 'Singulāris, ut hic; plūrālis, ut hī.' Magister: 'Personae prōnōminum quot sunt?' Discipulus: 'Trēs.' Magister: 'Quae?' Discipulus: 'Prīma, ut ego; secunda, ut tū; tertia, ut ille.'",
        "Magister: 'Cāsus item prōnōminum quot sunt?' Discipulus: 'Sex, quem ad modum et nōminum, per quōs omnium generum prōnōmina īnflectuntur.'",
      ],
      notes: [
        { term: 'partēs ōrātiōnis', gloss: 'the parts of speech — the classes into which every Latin word falls.' },
        { term: 'nōmen', gloss: 'a noun: it names a person or thing and always takes a case.' },
        { term: 'proprium / appellātīvum', gloss: 'a proper noun (one person, e.g. Iūlius) / a common noun (many, e.g. magister).' },
        { term: 'genera', gloss: 'genders: masculīnum, fēminīnum, neutrum, commune.' },
        { term: 'cāsūs', gloss: 'cases: nōminātīvus, genetīvus, datīvus, accūsātīvus, vocātīvus, ablātīvus.' },
        { term: 'gradūs comparātiōnis', gloss: 'degrees of comparison: doctus, doctior, doctissimus.' },
        { term: 'prōnōmen', gloss: 'a pronoun: it is put in place of a noun (pro nomine).' },
      ],
    },
    {
      id: 'de-verbo-et-adverbio',
      latinTitle: 'DĒ VERBŌ ET ADVERBIŌ',
      title: 'The Verb and the Adverb',
      paragraphs: [
        "Magister: 'Verbum quid est?' Discipulus: 'Pars ōrātiōnis cum tempore et persōnā, sine cāsū, aut agere aliquid aut patī aut neutrum significāns.'",
        "Magister: 'Modī verbōrum quī sunt?' Discipulus: 'Indicātīvus, ut lēgō; imperātīvus, ut lēge; optātīvus, ut utinam legerem; coniūnctīvus, ut cum legam; īnfīnītīvus, ut legere.'",
        "Magister: 'Genera verbōrum quot sunt?' Discipulus: 'Quattuor.' Magister: 'Quae?' Discipulus: 'Āctīva, passīva, neutra, dēpōnentia.'",
        "Magister: 'Āctīva quae sunt?' Discipulus: 'Quae in -ō dēsinunt et acceptā -r litterā faciunt ex sē passīva, ut lēgō: legor.' Magister: 'Passīva quae sunt?' Discipulus: 'Quae in -r dēsinunt et ea dēmpta redeunt in āctīvā, ut legor: lēgō.'",
        "Magister: 'Neutra quae sunt?' Discipulus: 'Quae in -ō dēsinunt ut āctīva, sed acceptā -r litterā Latīnā nōn sunt, ut stō, currō.' Magister: 'Dēpōnentia quae sunt?' Discipulus: 'Quae in -r dēsinunt ut passīva, sed ea dēmpta Latīna nōn sunt, ut luctor, loquor.'",
        "Magister: 'Numerī verbōrum quot sunt?' Discipulus: 'Duo.' Magister: 'Quī?' Discipulus: 'Singulāris, ut lēgō; plūrālis, ut legimus.' Magister: 'Tempora verbōrum quot sunt?' Discipulus: 'Tria.' Magister: 'Quae?' Discipulus: 'Praesēns, ut lēgō; praeteritum, ut lēgī; futūrum, ut legam.'",
        "Magister: 'Quot sunt tempora in dēclīnātiōne verbōrum?' Discipulus: 'Quīnque.' Magister: 'Quae?' Discipulus: 'Praesēns, ut lēgō; praeteritum imperfectum, ut legēbam; praeteritum perfectum, ut lēgī; praeteritum plusquamperfectum, ut lēgeram; futūrum, ut legam.'",
        "Magister: 'Personae verbōrum quot sunt?' Discipulus: 'Trēs.' Magister: 'Quae?' Discipulus: 'Prīma, ut lēgō; secunda, ut legis; tertia, ut lēgit.' Magister: 'Dā dēclīnātiōnem verbī āctīvī!' Discipulus: 'Amō, amās, amat; amāmus, amātis, amant.'",
        "Magister: 'Adverbium quid est?' Discipulus: 'Pars ōrātiōnis quae adiectā verbō significātiōnem eius explānat atque implet.'",
        "Magister: 'Significātiō adverbiōrum in quō est?' Discipulus: 'Sunt aut locī adverbia aut temporis aut numerī aut negandī aut affirmandī aut dēmōnstrandī aut optandī aut hortandī aut ōrdinis aut interrogandī aut quālitātis aut quantitātis aut dubitandī.'",
        "Magister: 'Dā adverbia locī!' Discipulus: 'Ut hic vel ibi, intus vel foris, illūc vel inde.' Magister: 'Dā temporis!' Discipulus: 'Ut hodiē, nunc, nūper, crās, aliquandō.' Magister: 'Dā numerī!' Discipulus: 'Ut semel, bis, ter.'",
        "Magister: 'Dā negandī et affirmandī!' Discipulus: 'Negandī, ut nōn; affirmandī, ut etiam, quidnī.' Magister: 'Dā dēmōnstrandī et optandī!' Discipulus: 'Dēmōnstrandī, ut ēn, ecce; optandī, ut utinam.' Magister: 'Dā hortandī et ōrdinis!' Discipulus: 'Hortandī, ut ēia; ōrdinis, ut deinde.'",
        "Magister: 'Dā interrogandī, quālitātis, quantitātis, dubitandī!' Discipulus: 'Interrogandī, ut cūr, quārē, quamobrem; quālitātis, ut doctē, pulchre, fortiter; quantitātis, ut multum, parum; dubitandī, ut forsitan.'",
        "Magister: 'Comparātiō adverbiōrum in quō est?' Discipulus: 'In tribus gradibus comparātiōnis: positīvō, comparātīvō, superlātīvō.' Magister: 'Dā adverbium positīvī gradūs!' Discipulus: 'Ut doctē; comparātīvī, ut doctius; superlātīvī, ut doctissimē.'",
      ],
      notes: [
        { term: 'modī', gloss: 'moods: indicātīvus, imperātīvus, optātīvus, coniūnctīvus, īnfīnītīvus.' },
        { term: 'āctīva / passīva', gloss: 'active (lego, I read) / passive (legor, I am read).' },
        { term: 'dēpōnentia', gloss: 'deponent verbs: passive in form but active in meaning, e.g. loquor, I speak.' },
        { term: 'tempora', gloss: 'tenses: praesēns, imperfectum, perfectum, plūsquamperfectum, futurum.' },
        { term: 'adverbium', gloss: 'an adverb: added to a verb, it explains and completes its meaning.' },
        { term: 'gradūs', gloss: 'degrees: docte, doctius, doctissime — learnedly, more learnedly, most learnedly.' },
      ],
    },
    {
      id: 'de-ceteris-partibus',
      latinTitle: 'DĒ CĒTERĪS PARTIBVS',
      title: 'The Remaining Parts',
      paragraphs: [
        "Magister: 'Participium quid est?' Discipulus: 'Pars ōrātiōnis partem capiēns nōminis, partem verbī: nōminis genera et cāsūs, verbī tempora et significātiōnēs, utriusque numerum.'",
        "Magister: 'Genera participiōrum quot sunt?' Discipulus: 'Quattuor.' Magister: 'Quae?' Discipulus: 'Masculīnum, ut hic lectus; fēminīnum, ut haec lēcta; neutrum, ut hoc lectum; commūne tribus generibus, ut hic et haec et hoc legēns.'",
        "Magister: 'Cāsus participiōrum quot sunt?' Discipulus: 'Sex.' Magister: 'Quī?' Discipulus: 'Nōminātīvus, ut hic legēns; genetīvus, ut huius legentīs; dativus, ut huic legentī; accūsātīvus, ut hunc legentem; vocātīvus, ut ō legēns; ablātīvus, ut ab hōc legente.'",
        "Magister: 'Tempora participiōrum quot sunt?' Discipulus: 'Tria.' Magister: 'Quae?' Discipulus: 'Praesēns, ut legēns; praeteritum, ut lēctus; futūrum, ut lēctūrus et legendus.' Magister: 'Numerī participiōrum quot sunt?' Discipulus: 'Duo.' Magister: 'Quī?' Discipulus: 'Singulāris, ut hic legēns; plūrālis, ut hī legentēs.'",
        "Magister: 'Dā dēclīnātiōnem participiī!' Discipulus: 'Legēns, legentis; lectus, lecta, lectum; lēctūrus, lēctūra, lēctūrum; legendus, legenda, legendum.'",
        "Magister: 'Coniūnctiō quid est?' Discipulus: 'Pars ōrātiōnis adnectēns ōrdinānsque sententiam.' Magister: 'Potestās coniūnctiōnum quot speciēs habet?' Discipulus: 'Quīnque.' Magister: 'Quās?' Discipulus: 'Cōpulātīvās, disiūnctīvās, explētīvās, causālēs, ratiōnālēs.'",
        "Magister: 'Dā cōpulātīvās!' Discipulus: 'Et, -que, atque, ac.' Magister: 'Dā disiūnctīvās!' Discipulus: 'Aut, -ve, vel, nec, neque.' Magister: 'Dā explētīvās!' Discipulus: 'Quidem, equidem, quoque, autem, tamen.'",
        "Magister: 'Dā causālēs!' Discipulus: 'Sī, etsī, siquidem, quandō, nam, namque, etenim, quamobrem.' Magister: 'Dā ratiōnālēs!' Discipulus: 'Itaque, enim, quia, quāpropter, quoniam, ergō, ideō, igitur, scīlicet, proptereā.'",
        "Magister: 'Praepositiō quid est?' Discipulus: 'Pars ōrātiōnis quae praeposita aliīs partibus ōrātiōnis significātiōnem eārum aut complet aut mūtat aut minuit.'",
        "Magister: 'Dā praepositiōnēs cāsūs accūsātīvī!' Discipulus: 'Ad, apud, ante, adversum, cis, citra, circum, circā, contrā, ergā, extrā, inter, intrā, īnfrā, iuxtā, ob, per, prope, secundum, post, trāns, ultrā, praeter, propter, suprā.'",
        "Magister: 'Quō modō?' Discipulus: 'Dīcimus enim ad patrem, apud vīllam, ante domum, adversum inimīcōs, cis Rhēnum, citrā forum, circum oppidum, circā templum, contrā hostem, ergā parentēs, extrā vallum, inter nāvēs, intrā moenia, īnfrā tēctum, iuxtā viam, ob fraudem, per portam, prope fenestram, secundum rīpam, post tergum, trāns flūmen, ultrā fīnēs, praeter officium, propter rem, suprā caelum.'",
        "Magister: 'Dā praepositiōnēs cāsūs ablātīvī!' Discipulus: 'Ā, ab, cum, coram, dē, ē, ex, prō, prae, sine.' Magister: 'Quō modō?' Discipulus: 'Dīcimus enim ā domō, ab homine, cum exercitū, cōram testibus, dē forō, ē iūre, ex prōvinciā, prō patriā, prae timōre, sine labōre.'",
        "Magister: 'Dā utriusque cāsūs praepositiōnēs!' Discipulus: 'In, sub, super.' Magister: 'In et sub quandō accūsātīvō cāsuī iunguntur?' Discipulus: 'Quandō nōs in locum īre, īsse, futūrōs esse significāmus.' Magister: 'Quandō ablātīvō?' Discipulus: 'Quandō nōs in locō esse, fuisse, futūrōs esse significāmus.'",
        "Magister: 'Super quam vim habet?' Discipulus: 'Ubi locum significat, magis accūsātīvō cāsuī servit; ubi mentiōnem alicuius facimus, ablātīvō tantum, ut multa super Priamō rogitāns, super Hectore multa, id est multa dē Priamō, dē Hectore.'",
        "Magister: 'Interiectiō quid est?' Discipulus: 'Pars ōrātiōnis significāns mentīs affectum vōce inconditā.' Magister: 'Significātiō interiectiōnis in quō est?' Discipulus: 'Aut laetitiam significāmus, ut euax!; aut dolōrem, ut heu!; aut admīrātiōnem, ut pāpae!; aut metum, ut attat!; et sī quā sunt similia.'",
      ],
      notes: [
        { term: 'participium', gloss: 'a participle: it takes part of the noun (gender, case) and part of the verb (tense).' },
        { term: 'legēns / lēctus', gloss: 'reading / having been read — the present and perfect participles of legere.' },
        { term: 'coniūnctiō', gloss: 'a conjunction: it joins and orders the sentence (et, aut, nam, quia).' },
        { term: 'praepositiō', gloss: 'a preposition: placed before a word, it completes, changes or lessens its meaning.' },
        { term: 'cāsūs accūsātīvī / ablātīvī', gloss: 'some prepositions take the accusative (ad, per, trāns), some the ablative (a, cum, ex).' },
        { term: 'interiectiō', gloss: 'an interjection: a cry that shows a feeling — euax!, heu!, attat!.' },
        { term: 'multa super Priamo...', gloss: 'a quotation from Vergil’s Aeneid, book I: “much asking about Priam, much about Hector”.' },
      ],
    },
  ],
  grammar: [
    {
      id: 'partes-orationis',
      latinTitle: 'Partēs Ōrātiōnis',
      title: 'The Eight Parts of Speech',
      intro:
        'Every Latin word belongs to one of eight classes, the partes orationis. The magister asks quot sunt? ' +
        'and the discipulus answers octō. Nouns, pronouns, verbs and participles change their form (they are ' +
        'declinable); the rest never change.',
      paradigms: [
        {
          caption: 'partēs ōrātiōnis octō',
          head: ['Pars ōrātiōnis', 'English', 'Exemplum'],
          rows: [
            ['nōmen', 'noun', 'magister, fēmina, scamnum'],
            ['prōnōmen', 'pronoun', 'ego, tū, ille, hīc'],
            ['verbum', 'verb', 'lego, amō, sum'],
            ['adverbium', 'adverb', 'hīc, hodiē, nōn'],
            ['participium', 'participle', 'legens, lectus, lecturus'],
            ['coniūnctiō', 'conjūnctiōn', 'et, aut, nam, quia'],
            ['praepositiō', 'preposition', 'ad, cum, in, trāns'],
            ['interiectiō', 'interjectiōn', 'euax!, heu!, attat!'],
          ],
        },
        {
          caption: 'declinabilia et indeclinabilia',
          head: ['Declinabilia (formam mutant)', 'Indeclinabilia (fōrma eadem manet)'],
          rows: [
            ['nōmen, prōnōmen, verbum, participium', 'adverbium, coniūnctiō, praepositiō, interiectiō'],
          ],
        },
      ],
      points: [
        'The magister asks quot sunt? and the discipulus answers: octō — nōmen, prōnōmen, verbum, adverbium, participium, coniūnctiō, praepositiō, interiectiō.',
        'Nōmina, pronomina, verba, participia declinantur: their endings change with case, number and tense.',
        'Cēterae partes orationis sunt indeclinabiles: an adverb, a conjunction, a preposition or an interjection is always written the same way.',
      ],
    },
    {
      id: 'nomen',
      latinTitle: 'Nōmen',
      title: 'The Noun',
      intro:
        'A noun (nōmen) names a body or a thing and always takes a case — pars orationis cum casu. ' +
        'Nouns have gender, number and case, and some of them are compared.',
      paradigms: [
        {
          caption: 'genera nōminum (quattuor)',
          head: ['Genus', 'Exemplum'],
          rows: [
            ['masculīnum', 'hic magister — this master'],
            ['fēminīnum', 'haec fēmina — this woman'],
            ['neutrum', 'hoc scamnum — this bench'],
            ['commūne', 'hic et haec sacerdōs — this priest/priestess'],
          ],
        },
        {
          caption: 'numerī et cāsus',
          head: ['Catēgoria', 'Quot', 'Exempla'],
          rows: [
            ['numerī', 'duo', 'singulāris: hic magister; plūrālis: hī magistrī'],
            ['cāsūs', 'sex', 'nōminātīvus, genetīvus, datīvus, accūsātīvus, vocātīvus, ablātīvus'],
          ],
        },
        {
          caption: 'gradūs comparātiōnis (trēs)',
          head: ['Gradus', 'Exemplum', 'Significātiō'],
          rows: [
            ['positīvus', 'doctus', 'learned'],
            ['comparātīvus', 'doctior', 'more learned'],
            ['superlātīvus', 'doctissimus', 'most learned'],
          ],
        },
        {
          caption: 'nōmen proprium et appellātīvum',
          head: ['Genus nōminis', 'Exemplum'],
          rows: [
            ['proprium (ūnīus)', 'Iūlius, Roma, Tiberis'],
            ['appellātīvum (multōrum)', 'magister, fēmina, scamnum'],
          ],
        },
        {
          caption: 'dēclīnātiōnēs quīnque (genetīvus singulāris)',
          head: ['Dēclīnātiō', 'Genetīvus', 'Exemplum'],
          rows: [
            ['prīma', '-ae', 'terrā, terrae'],
            ['secunda', '-i', 'dominus, dominī'],
            ['tertia', '-is', 'sōl, solis'],
            ['quārta', '-us', 'portus, portus'],
            ['quīnta', '-ei', 'diēs, diei'],
          ],
        },
      ],
      points: [
        'Cāsus sunt sex: nōminātīvus, genetīvus, dativus, accūsātīvus, vocātīvus, ablātīvus; per hōs omnia nōmina dēclīnantur.',
        'Genera sunt quattuor: masculīnum, fēminīnum, neutrum, commūne.',
        'Comparantur appellativa dumtaxat qualitatem aut quantitatem significantia — only common nouns that express a quality or quantity are compared.',
        'The declension of a noun is known from its genitive singular: -ae (I), -i (II), -is (III), -us (IV), -ei (V).',
      ],
    },
    {
      id: 'pronomen',
      latinTitle: 'Prōnōmen',
      title: 'The Pronoun',
      intro:
        'A pronoun (prōnōmen) is put in place of a noun and means almost the same as it: pars orationis ' +
        'quae pro nomine posita tantundem paene significat personamque interdum recipit. It has the same ' +
        'genders, numbers and cases as a noun, and it also has persons.',
      paradigms: [
        {
          caption: 'persōnae prōnōminum (trēs)',
          head: ['Persona', 'Singulāris', 'Plūrālis'],
          rows: [
            ['prīma', 'ego — I', 'nōs — we'],
            ['secunda', 'tū — you', 'vōs — you'],
            ['tertia', 'ille — he', 'illī — they'],
          ],
        },
        {
          caption: 'genera prōnōminum',
          head: ['Genus', 'Exemplum', 'Significātiō'],
          rows: [
            ['masculīnum', 'quis', 'who? (m.)'],
            ['fēminīnum', 'quae', 'who? (f.)'],
            ['neutrum', 'quod', 'what? (n.)'],
            ['commūne', 'quālis, tālis', 'of such a kind (m./f.)'],
            ['trium generum', 'ego, tū', 'I, you'],
          ],
        },
      ],
      points: [
        'Genera prōnōminum eadem ferē sunt quae et nōminum: masculīnum, fēminīnum, neutrum, commūne, trium generum.',
        'Numerī sunt duo (singulāris, ut hic; plūrālis, ut hī), et persōnae sunt trēs (ego, tū, ille).',
        'Cāsus item pronominum sunt sex, quem ad modum et nominum: pronomina per eosdem cāsus inflectuntur.',
      ],
    },
    {
      id: 'verbum',
      latinTitle: 'Verbum',
      title: 'The Verb',
      intro:
        'A verb (verbum) is pars orationis cum tempore et persōna, sine casu — it shows time and person, ' +
        'but never a case. It means acting, being acted upon, or neither. Verbs have moods, kinds, numbers, ' +
        'tenses and persons.',
      paradigms: [
        {
          caption: 'modī verbōrum (quīnque)',
          head: ['Modus', 'Exemplum', 'Significātiō'],
          rows: [
            ['indicātīvus', 'lēgō', 'I read — a plain statement'],
            ['imperātīvus', 'lēge', 'read! — a command'],
            ['optātīvus', 'utinam legerem', 'would that I read — a wish'],
            ['coniūnctīvus', 'cum legam', 'when I read — in a subordinate clause'],
            ['īnfīnītīvus', 'legere', 'to read'],
          ],
        },
        {
          caption: 'genera verbōrum (quattuor)',
          head: ['Genus', 'Exemplum', 'Significātiō'],
          rows: [
            ['āctīvum', 'lēgō → legor', 'active: I read; it can become passive'],
            ['passīvum', 'legor → lēgō', 'passive: I am read; it can become active'],
            ['neutrum', 'stō, currō', 'neither active nor passive'],
            ['dēpōnēns', 'luctor, loquor', 'passive in form, active in meaning'],
          ],
        },
        {
          caption: 'tempora in dēclīnātiōne verbī (quīnque)',
          head: ['Tempus', 'Exemplum'],
          rows: [
            ['praesēns', 'lēgō — I read'],
            ['praeteritum imperfectum', 'legēbam — I was reading'],
            ['praeteritum perfectum', 'legī — I have read'],
            ['praeteritum plusquamperfectum', 'lēgeram — I had read'],
            ['futūrum', 'legam — I shall read'],
          ],
        },
        {
          caption: 'persōnae verbōrum (trēs)',
          head: ['Persōna', 'Exemplum'],
          rows: [
            ['prīma', 'lēgō — I read'],
            ['secundā', 'lēgis — you read'],
            ['tertia', 'lēgit — he/she reads'],
          ],
        },
        {
          caption: 'coniugātiōnēs quattuor (īnfīnītīvus)',
          head: ['Coniugātiō', 'Īnfīnītīvus', 'Exemplum'],
          rows: [
            ['I', '-are', 'amāre — to love'],
            ['II', '-ere', 'monēre — to warn'],
            ['III', '-ere', 'legere — to read'],
            ['IV', '-ire', 'audīre — to hear'],
          ],
        },
      ],
      points: [
        'Modī sunt quīnque: indicātīvus (lēgō), imperātīvus (lēge), optātīvus (utinam legerem), coniūnctīvus (cum legam), īnfīnītīvus (legere).',
        'Genera sunt quattuor: āctīva (lēgō), passīva (legor), neutra (stō, currō), dēpōnentia (luctor, loquor).',
        'In dēclīnātiōne verbī tempora sunt quīnque; numerī duo; persōnae trēs, ut lēgō, lēgis, legit.',
        'The four conjugations are known from the infinitive: -are, -ere, -ere, -ire.',
      ],
    },
    {
      id: 'adverbium',
      latinTitle: 'Adverbium',
      title: 'The Adverb',
      intro:
        'An adverb (adverbium) is added to a verb to explain and complete its meaning: pars orationis quae ' +
        'adiecta verbō significationem eius explanat atque implet. Adverbs are grouped by what they express, ' +
        'and some of them are compared.',
      paradigms: [
        {
          caption: 'significātiōnēs adverbiōrum',
          head: ['Speciēs', 'Exempla'],
          rows: [
            ['locī', 'hīc, ibi, intus, foris, illūc, inde'],
            ['temporis', 'hodiē, nunc, nūper, crās, aliquandō'],
            ['numerī', 'semel, bis, ter'],
            ['negandī', 'nōn'],
            ['affirmandī', 'etiam, quidnī'],
            ['dēmōnstrandī', 'ēn, ecce'],
            ['optandī', 'utinam'],
            ['hortandī', 'ēia'],
            ['ōrdinis', 'deinde'],
            ['interrogandī', 'cūr, quārē, quamobrem'],
            ['quālitātis', 'docte, pulchrē, fortiter'],
            ['quantitātis', 'multum, parum'],
            ['dubitandī', 'forsitan'],
          ],
        },
        {
          caption: 'comparātiō adverbiōrum (trēs gradūs)',
          head: ['Gradus', 'Exemplum'],
          rows: [
            ['positīvus', 'doctē — learnedly'],
            ['comparātīvus', 'doctius — more learnedly'],
            ['superlātīvus', 'doctissimē — most learnedly'],
          ],
        },
      ],
      points: [
        'Sunt aut locī adverbia aut temporis aut numerī aut negandī aut affirmandī aut dēmōnstrandī aut optandī aut hortandī aut ōrdinis aut interrogandī aut quālitātis aut quantitātis aut dubitandī.',
        'Comparātiō adverbiorum in tribus gradibus est: positivo (docte), comparativo (doctius), superlativo (doctissime).',
        'The comparative is the neuter of the adjective’s comparative; the superlative adds -e to the superlative stem.',
      ],
    },
    {
      id: 'participium',
      latinTitle: 'Participium',
      title: 'The Participle',
      intro:
        'A participle (participium) takes part of the noun and part of the verb: from the noun it takes ' +
        'gender and case, from the verb its tense and meaning. It has the number of both.',
      paradigms: [
        {
          caption: 'genera participiōrum (quattuor)',
          head: ['Genus', 'Exemplum'],
          rows: [
            ['masculīnum', 'hic lēctus'],
            ['fēminīnum', 'haec lēcta'],
            ['neutrum', 'hoc lectum'],
            ['commūne tribus generibus', 'hic et haec et hoc legēns'],
          ],
        },
        {
          caption: 'tempora participiōrum (tria)',
          head: ['Tempus', 'Exemplum', 'Significātiō'],
          rows: [
            ['praesēns', 'legēns', 'reading'],
            ['praeteritum', 'lectus', 'having been read'],
            ['futūrum', 'lecturus, legendus', 'about to read / to be read'],
          ],
        },
        {
          caption: 'dēclīnātiō participiī (legēns, legentis)',
          head: ['Cāsus', 'Singulāris', 'Plūrālis'],
          rows: [
            ['Nōminātīvus', 'hic legēns', 'hī legentēs'],
            ['Genetīvus', 'huius legentīs', 'hōrum legentium'],
            ['Datīvus', 'huic legentī', 'his legentibus'],
            ['Accūsātīvus', 'hunc legentem', 'hōs legentēs'],
            ['Vocātīvus', 'ō legēns', 'ō legentēs'],
            ['Ablātīvus', 'ab hōc legente', 'ab his legentibus'],
          ],
        },
      ],
      points: [
        'Participium partem capit nōminis (genera et cāsūs) et partem verbī (tempora et significātiōnēs), utriusque numerum.',
        'Genera participiōrum sunt quattuor: masculīnum, fēminīnum, neutrum, commūne tribus generibus (legēns).',
        'Tempora sunt tria: praesēns (legēns), praeteritum (lectus), futūrum (lēctūrus, legendus).',
        'The present participle legens is declined like a third-declension adjective; lectus, lecta, lectum like bonus -a -um.',
      ],
    },
    {
      id: 'coniunctio',
      latinTitle: 'Coniūnctiō',
      title: 'The Conjunction',
      intro:
        'A conjunction (coniūnctiō) joins and orders the parts of a sentence: pars orationis adnectens ' +
        'ordinansque sententiam. Its force falls into five kinds.',
      paradigms: [
        {
          caption: 'speciēs coniūnctiōnum (quīnque)',
          head: ['Speciēs', 'Exempla'],
          rows: [
            ['copulativae', 'et, -que, atque, ac'],
            ['disiunctivae', 'aut, -ve, vel, nec, neque'],
            ['expletivae', 'quidem, equidem, quoque, autem, tamen'],
            ['causālēs', 'sī, etsī, sīquidem, quandō, nam, namque, etenim, quamobrem'],
            ['ratiōnālēs', 'itaque, enim, quia, quāpropter, quoniam, ergō, ideō, igitur, scīlicet, proptereā'],
          ],
        },
      ],
      points: [
        'Potestās coniūnctiōnum quīnque speciēs habet: cōpulātīvās, disiūnctīvās, explētīvās, causālēs, ratiōnālēs.',
        'Copulativae (et, -que, atque) join words; disiunctivae (aut, vel, -ve) offer a choice.',
        'Causales (si, nam, etenim) give a cause or condition; rationales (quia, quoniam, igitur) give a reason or inference.',
      ],
    },
    {
      id: 'praepositio',
      latinTitle: 'Praepositiō',
      title: 'The Preposition',
      intro:
        'A preposition (praepositiō) is placed before another word and completes, changes or lessens its ' +
        'meaning: pars orationis quae praeposita aliīs partibus orationis significationem eārum aut complet ' +
        'aut mūtat aut minuit. Some take the accusative, some the ablative, and three take either.',
      paradigms: [
        {
          caption: 'praepositiōnēs cum accūsātīvō',
          head: ['Praepositiōnēs', 'Exempla'],
          rows: [
            ['ad, apud, ante, adversum', 'ad patrem, apud vīllam, ante domum, adversum inimīcōs'],
            ['cis, citrā, circum, circā, contrā', 'cis Rhēnum, citrā forum, circum oppidum, circā templum, contrā hostem'],
            ['ergā, extrā, inter, intrā, īnfrā', 'ergā parentēs, extrā vallum, inter nāvēs, intrā moenia, īnfrā tēctum'],
            ['iūxtā, ob, per, prope, secundum', 'iūxtā viam, ob fraudem, per portam, prope fenestram, secundum ripam'],
            ['post, trāns, ultrā, praeter, propter, suprā', 'post tergum, trāns flūmen, ultrā fīnēs, praeter officium, propter rem, suprā caelum'],
          ],
        },
        {
          caption: 'praepositiōnēs cum ablātīvō',
          head: ['Praepositiōnēs', 'Exempla'],
          rows: [
            ['a, ab, cum, cōram, dē', 'ā domō, ab homine, cum exercitū, cōram testibus, dē forō'],
            ['ē, ex, prō, prae, sine', 'ē iūre, ex prōvinciā, prō patriā, prae timōre, sine labōre'],
          ],
        },
        {
          caption: 'praepositiōnēs utriusque cāsūs',
          head: ['Praepositiō', 'Cum accūsātīvō', 'Cum ablātīvō'],
          rows: [
            ['in', 'in urbem — into the city (motion)', 'in urbe — in the city (position)'],
            ['sub', 'sub montem — to under the mountain', 'sub monte — under the mountain'],
            ['super', 'super caelum — over the sky', 'super Hectore — about Hector'],
          ],
        },
      ],
      points: [
        'In and sub take the accusative when we mean “motion into a place”, the ablative when we mean “being in a place”.',
        'Super takes the accusative of place (super caelum), but the ablative when it means “about, concerning” (multa super Priamo).',
        'The same word may govern either case; only the sense of the sentence decides.',
      ],
    },
    {
      id: 'interiectio',
      latinTitle: 'Interiectiō',
      title: 'The Interjection',
      intro:
        'An interjection (interiectiō) is an outcry that shows a feeling of the mind: pars orationis ' +
        'significāns mentīs affectum vōce inconditā.',
      paradigms: [
        {
          caption: 'significātiōnēs interiectiōnis',
          head: ['Affectus', 'Exemplum'],
          rows: [
            ['laetitiā', 'euax! — hurrah!'],
            ['dolor', 'heu! — alas!'],
            ['admīrātiō', 'papae! — good heavens!'],
            ['metus', 'attat! — oh no!'],
          ],
        },
      ],
      points: [
        'Aut laetitiam significamus (euax!), aut dolorem (heu!), aut admirationem (papae!), aut metum (attat!).',
        'An interjection stands outside the grammar of the sentence: it takes no case and agrees with nothing.',
      ],
    },
  ],
  vocabulary: [
    { latin: 'pars', english: 'part', pos: 'noun (f.)' },
    { latin: 'ōrātiō', english: 'speech, sentence', pos: 'noun (f.)' },
    { latin: 'nōmen', english: 'noun, name', pos: 'noun (n.)' },
    { latin: 'prōnōmen', english: 'pronoun', pos: 'noun (n.)' },
    { latin: 'verbum', english: 'verb, word', pos: 'noun (n.)' },
    { latin: 'adverbium', english: 'adverb', pos: 'noun (n.)' },
    { latin: 'participium', english: 'participle', pos: 'noun (n.)' },
    { latin: 'coniūnctiō', english: 'conjunction', pos: 'noun (f.)' },
    { latin: 'praepositiō', english: 'preposition', pos: 'noun (f.)' },
    { latin: 'interiectiō', english: 'interjection', pos: 'noun (f.)' },
    { latin: 'cāsus', english: 'case', pos: 'noun (m.)' },
    { latin: 'genus', english: 'gender, kind', pos: 'noun (n.)' },
    { latin: 'numerus', english: 'number', pos: 'noun (m.)' },
    { latin: 'gradus', english: 'degree, step', pos: 'noun (m.)' },
    { latin: 'comparātiō', english: 'comparison', pos: 'noun (f.)' },
    { latin: 'coniugātiō', english: 'conjugation', pos: 'noun (f.)' },
    { latin: 'modus', english: 'mood, manner', pos: 'noun (m.)' },
    { latin: 'tempus', english: 'time, tense', pos: 'noun (n.)' },
    { latin: 'persōna', english: 'person', pos: 'noun (f.)' },
    { latin: 'nōminātīvus', english: 'nominative', pos: 'noun (m.)' },
    { latin: 'genetīvus', english: 'genitive', pos: 'noun (m.)' },
    { latin: 'datīvus', english: 'dative', pos: 'noun (m.)' },
    { latin: 'accūsātīvus', english: 'accusative', pos: 'noun (m.)' },
    { latin: 'vocātīvus', english: 'vocative', pos: 'noun (m.)' },
    { latin: 'ablātīvus', english: 'ablative', pos: 'noun (m.)' },
    { latin: 'positīvus', english: 'positive (degree)', pos: 'adjective' },
    { latin: 'comparātīvus', english: 'comparative', pos: 'adjective' },
    { latin: 'superlātīvus', english: 'superlative', pos: 'adjective' },
    { latin: 'proprius', english: 'proper, one’s own', pos: 'adjective' },
    { latin: 'appellātīvus', english: 'common (of a noun)', pos: 'adjective' },
    { latin: 'masculīnus', english: 'masculine', pos: 'adjective' },
    { latin: 'fēminīnus', english: 'feminine', pos: 'adjective' },
    { latin: 'neuter', english: 'neuter', pos: 'adjective' },
    { latin: 'commūnis', english: 'common (of gender)', pos: 'adjective' },
    { latin: 'singulāris', english: 'singular', pos: 'adjective' },
    { latin: 'plūrālis', english: 'plural', pos: 'adjective' },
    { latin: 'āctīvus', english: 'active', pos: 'adjective' },
    { latin: 'passīvus', english: 'passive', pos: 'adjective' },
    { latin: 'dēpōnens', english: 'deponent', pos: 'adjective' },
    { latin: 'doctus', english: 'learned', pos: 'adjective' },
    { latin: 'dēclīnāre', english: 'to decline, inflect', pos: 'verb' },
    { latin: 'interrogat', english: 'asks, questions', pos: 'verb' },
    { latin: 'respondet', english: 'answers, replies', pos: 'verb' },
    { latin: 'significat', english: 'means, signifies', pos: 'verb' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PĒNSVM A',
      title: 'Decline and conjugate',
      instruction: 'Complete each word with the correct ending or form.',
      type: 'fill',
      items: [
        "Dēclīnā 'āla', nōmen fēminīnum I dēclīnātiōnis. Singulāris: nom. haec āl{{ā}}, gen. huius āl{{ae}}, dat. huic āl{{ae}}, acc. hanc āl{{am}}, voc. ō āl{{a}}, abl. ab hāc āl{{ā}}. Plūrālis: nom. hae āl{{ae}}, gen. hārum āl{{ārum}}, dat. hīs āl{{īs}}, acc. hās āl{{ās}}, voc. ō āl{{ae}}, abl. ab hīs āl{{īs}}.",
        "Dēclīnā 'pēs', nōmen masculīnum III dēclīnātiōnis. Singulāris: nom. hic p{{ēs}}, gen. huius ped{{is}}, dat. huic pēd{{ī}}, acc. hunc ped{{em}}, voc. ō p{{ēs}}, abl. ab hōc ped{{e}}. Plūrālis: nom. hī ped{{ēs}}, gen. hōrum ped{{um}}, dat. hīs ped{{ibus}}, acc. hōs ped{{ēs}}, voc. ō ped{{ēs}}, abl. ab hīs ped{{ibus}}.",
        "Coniugā 'ōrāre', verbum āctīvum I coniugātiōnis. Indicātīvus: praes. ōr{{ō}}, imperfectum ōrā{{bam}}, futūrum ōrā{{bō}}, perfectum ōrā{{vī}}, plusquamperfectum ōrā{{veram}}, futūrum perfectum ōrā{{verō}}. Coniūnctīvus: praes. ōr{{em}}, imperfectum ōrā{{rem}}, perfectum ōrā{{verim}}, plusquamperfectum ōrā{{vissem}}.",
        "Coniugā 'dīcere', verbum āctīvum III coniugātiōnis. Indicātīvus: praes. dīc{{ō}}, imperfectum dīc{{ēbam}}, futūrum dic{{am}}, perfectum dīx{{ī}}, plusquamperfectum dīx{{eram}}, futūrum perfectum dīx{{erō}}. Coniūnctīvus: praes. dīc{{am}}, imperfectum dīc{{erem}}, perfectum dīx{{erim}}, plusquamperfectum dīx{{issem}}.",
        'Dā verba prīncipālia: laedere, {{laesī}}, {{laesum}}; implicāre, {{implicāvī}}, {{implicātum}}; plaudere, {{plausī}}, {{plausum}}; retinēre, {{retinuī}}, {{retentum}}; accendere, {{accendī}}, {{accēnsum}}; sedēre, {{sēdī}}, {{sessum}}; nūbere, {{nūpsī}}, {{nūptum}}; dēmere, {{dēmpsī}}, {{dēmptum}}; adicere, {{adiēcī}}, {{adiectum}}.',
      ],
    },
  ],
}

export default chapter
