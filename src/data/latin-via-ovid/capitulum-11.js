// Capitulum XI — PHILEMON ET BAUCIS
// Source: Goldman & Nyenhuis, Latin via Ovid: A First Course (2nd ed., 1982)
// Reading text, vocabulary, grammar and exercises adapted for the web.
// Long vowels are marked with macra.

const chapter = {
  number: 11,
  roman: 'XI',
  slug: 'philemon-et-baucis-1',
  latinTitle: 'PHILEMON ET BAUCIS',
  title: 'Philemon and Baucis (Part 1)',
  tagline: 'Two poor old people receive the gods, and their humble cottage is changed.',
  status: 'complete',
  overview:
    'The first half of the tale of Philemon and Baucis. Jupiter and Mercury, disguised as travellers, ' +
    'seek rest in a Phrygian village where every door is shut but one. The chapter introduces the ' +
    'third declension, the irregular numeral duo, the numeral mille, adjectives used with third-declension ' +
    'nouns, the partitive genitive and the ordinal numbers.',
  objectives: [
    'Read the story of Philemon and Baucis and answer questions about it in Latin.',
    'Decline third-declension nouns of all three genders, including i-stems such as finis and pars.',
    'Use the irregular numeral duo, duae, duo and the undeclined mille.',
    'Agree first- and second-declension adjectives with third-declension nouns.',
    'Recognise the partitive genitive and the ordinal numbers.',
  ],
  readings: [
    {
      id: 'philemon-et-baucis',
      latinTitle: 'PHILEMON ET BAUCIS',
      title: 'Philemon and Baucis',
      paragraphs: [
        'Potentia caelī est immēnsa et fīnem nōn habet. Quicquid dī imperant, factum est. Dubitātisne, discipulī? Nārrābō dē duābus arboribus, dē tiliā et quercū in Phrygiā. Fābula est vēra. Ego ipse locum vīdī; nōn procul est stagnum, terra ōlim plēna virōrum, nunc undae plēnae piscium. Hūc Iuppiter vēnit et Mercurius cadūcifer cum patre suō quoque vēnit. Deī fōrmam virōrum simulāverant, et in terrā Phrygiā ambulābant. Requiem in mīlle casīs rogābant, sed mīlle casae erant clausae.',
        'Tamen ūna parva casa erat aperta. Pia Baucis et senex Philēmōn hīc habitābant; duo erant tōta domus. Et servī et dominī erant duo.',
        'Ubi dī parvam casam intrāvērunt, senex Philēmōn deōs sedēre iussit; Baucis vīnum et cibum (carnem et rādīcem et ōva) parāvit. Mēnsam quoque parāvit, sed mēnsa plāna nōn erat; ūnum membrum nōn satis longum erat. Testā autem mēnsa plāna facta est. Senēs advenīs benignī erant, et deīs maiōrem partem cibī et vīnī dedērunt.',
      ],
      notes: [
        { term: 'tilia, -ae', gloss: 'linden tree; quercus, -ūs (f.) — oak tree, a fourth-declension noun.' },
        { term: 'cadūcifer, -erī', gloss: 'carrier of the caduceus, the herald\'s staff of Mercury.' },
        { term: 'simulāverant', gloss: 'they had assumed, had pretended — a pluperfect.' },
        { term: 'requiem', gloss: 'accusative singular of requiēs, rest.' },
        { term: 'tōta domus', gloss: 'the whole household: the two old people were the entire household.' },
        { term: 'testā', gloss: 'by means of a tile, a broken piece of pottery.' },
        { term: 'membrum', gloss: 'here a leg of the table, not a limb of the body.' },
        { term: 'plāna', gloss: 'level, flat; the table was uneven because one leg was too short.' },
        { term: 'maiōrem partem', gloss: 'the greater part — partitive genitive with cibī et vīnī.' },
        { term: 'advenīs', gloss: 'dative plural of advena, stranger; the old people were kind to the strangers.' },
      ],
    },
  ],
  grammar: [
    {
      id: 'duo-et-mille',
      latinTitle: 'Duo et Mīlle',
      title: 'Two and a Thousand',
      intro:
        'Duo is an irregular adjective and exists only in the plural. Mīlle, a thousand, is undeclined, ' +
        'but its plural mīlia, thousands, is a third-declension neuter noun.',
      paradigms: [
        {
          caption: 'duo, duae, duo — two',
          head: ['', 'Masculīnum', 'Fēminīnum', 'Neutrum'],
          rows: [
            ['Nōm.', 'duo', 'duae', 'duo'],
            ['Gen.', 'duōrum', 'duārum', 'duōrum'],
            ['Dat.', 'duōbus', 'duābus', 'duōbus'],
            ['Acc.', 'duōs', 'duās', 'duo'],
            ['Abl.', 'duōbus', 'duābus', 'duōbus'],
          ],
        },
      ],
      points: [
        'Duo agrees with its noun: duo puerī, duae puellae, duo oppida.',
        'Mīlle is undeclined: mīlle puerōs vīdī, mīlle puellās vīdī, mīlle oppida vīdī.',
        'The plural mīlia takes the genitive: duo mīlia hominum — two thousand men.',
        'Mīlle casae erant clausae — a thousand cottages were closed.',
      ],
    },
    {
      id: 'declinatio-tertia',
      latinTitle: 'Dēclīnātiō Tertia',
      title: 'Third Declension Nouns',
      intro:
        'Third-declension nouns are formed from a stem taken from the genitive singular by dropping -is: ' +
        'pater, patris has the stem patr-. The nominative may look quite different from the stem, so the ' +
        'genitive must be learnt with every noun.',
      paradigms: [
        {
          caption: 'third-declension endings',
          head: ['', 'Masc. & fem. sing.', 'Neut. sing.', 'Masc. & fem. pl.', 'Neut. pl.'],
          rows: [
            ['Nōm.', '(various)', '(various)', '-ēs', '-a (-ia)'],
            ['Gen.', '-is', '-is', '-um (-ium)', '-um (-ium)'],
            ['Dat.', '-ī', '-ī', '-ibus', '-ibus'],
            ['Acc.', '-em', '= nōm.', '-ēs', '-a (-ia)'],
            ['Abl.', '-e', '-e', '-ibus', '-ibus'],
          ],
        },
        {
          caption: 'pater, arbor, Iuppiter, rēx — singular',
          head: ['', 'pater, patris (m.)', 'arbor, arboris (f.)', 'Iuppiter, Iovis (m.)', 'rēx, rēgis (m.)'],
          rows: [
            ['Nōm.', 'pater', 'arbor', 'Iuppiter', 'rēx'],
            ['Gen.', 'patris', 'arboris', 'Iovis', 'rēgis'],
            ['Dat.', 'patrī', 'arborī', 'Iovī', 'rēgī'],
            ['Acc.', 'patrem', 'arborem', 'Iovem', 'rēgem'],
            ['Abl.', 'patre', 'arbore', 'Iove', 'rēge'],
          ],
        },
        {
          caption: 'plural',
          head: ['', 'patrēs', 'arborēs', 'rēgēs'],

          rows: [
            ['Nōm.', 'patrēs', 'arborēs', 'rēgēs'],
            ['Gen.', 'patrum', 'arborum', 'rēgum'],
            ['Dat.', 'patribus', 'arboribus', 'rēgibus'],
            ['Acc.', 'patrēs', 'arborēs', 'rēgēs'],
            ['Abl.', 'patribus', 'arboribus', 'rēgibus'],
          ],
        },
      ],
      points: [
        'Masculine and feminine nouns of the third declension share one set of endings; neuter nouns have their own nominative and accusative.',
        'The nominative singular may end in -er, -or, -s, -x, -ō or -iō for masculine and feminine nouns, and in -ō, -s, -e or -al for neuter nouns.',
        'The genitive plural is usually -um (patrum, rēgum), but some nouns take -ium; see the i-stems below.',
        'Iuppiter has no plural; its stem Iov- appears in the other cases.',
      ],
    },
    {
      id: 'tertia-i-stems',
      latinTitle: 'Nōmina Tertiae Dēclīnātiōnis in -i-',
      title: 'Third Declension I-Stems',
      intro:
        'A group of third-declension nouns adds -i- before the ending of the genitive plural, giving -ium. ' +
        'They are recognised either by having the same number of syllables in the nominative and genitive singular ' +
        '(fīnis, fīnis) or by having one syllable in the nominative and two consonants before -is in the genitive ' +
        '(pars, partis).',
      paradigms: [
        {
          caption: 'fīnis, fīnis (m.) — end; pars, partis (f.) — part',
          head: ['', 'fīnis sing.', 'fīnis pl.', 'pars sing.', 'pars pl.'],
          rows: [
            ['Nōm.', 'fīnis', 'fīnēs', 'pars', 'partēs'],
            ['Gen.', 'fīnis', 'fīnium', 'partis', 'partium'],
            ['Dat.', 'fīnī', 'fīnibus', 'partī', 'partibus'],
            ['Acc.', 'fīnem', 'fīnēs', 'partem', 'partēs'],
            ['Abl.', 'fīne', 'fīnibus', 'parte', 'partibus'],
          ],
        },
      ],
      points: [
        'Fīnis is masculine, but it is sometimes feminine in the singular.',
        'Pars, partis is feminine; its genitive plural is partium.',
        'Other i-stems include nāvis (ship), turris (tower) and the river-name Tiberis.',
        'Neuter i-stems in -e, -al and -ar (mare, animal, calcar) also take -ium in the genitive plural.',
      ],
    },
    {
      id: 'adiectiva-cum-tertia',
      latinTitle: 'Adiectīva cum Nōminibus Tertiae Dēclīnātiōnis',
      title: 'Adjectives with Third Declension Nouns',
      intro:
        'When a first- or second-declension adjective modifies a third-declension noun, the two still agree ' +
        'in case, number and gender, but their endings look different. Compare rēx bonus with pater pius, ' +
        'and arbor pulchra with pars immēnsa.',
      paradigms: [
        {
          caption: 'masculine',
          head: ['', 'rēx bonus', 'pater pius', 'Iuppiter magnus'],
          rows: [
            ['Nōm.', 'rēx bonus', 'pater pius', 'Iuppiter magnus'],
            ['Gen.', 'rēgis bonī', 'patris piī', 'Iovis magnī'],
            ['Dat.', 'rēgī bonō', 'patrī piō', 'Iovī magnō'],
            ['Acc.', 'rēgem bonum', 'patrem pium', 'Iovem magnum'],
            ['Abl.', 'rēge bonō', 'patre piō', 'Iove magnō'],
            ['Nōm. pl.', 'rēgēs bonī', 'patrēs piī', '—'],
            ['Gen. pl.', 'rēgum bonōrum', 'patrum piōrum', '—'],
            ['Dat. pl.', 'rēgibus bonīs', 'patribus piīs', '—'],
            ['Acc. pl.', 'rēgēs bonōs', 'patrēs piōs', '—'],
            ['Abl. pl.', 'rēgibus bonīs', 'patribus piīs', '—'],
          ],
        },
        {
          caption: 'feminine',
          head: ['', 'arbor pulchra', 'pars immēnsa'],
          rows: [
            ['Nōm.', 'arbor pulchra', 'pars immēnsa'],
            ['Gen.', 'arboris pulchrae', 'partis immēnsae'],
            ['Dat.', 'arborī pulchrae', 'partī immēnsae'],
            ['Acc.', 'arborem pulchram', 'partem immēnsam'],
            ['Abl.', 'arbore pulchrā', 'parte immēnsā'],
            ['Nōm. pl.', 'arborēs pulchrae', 'partēs immēnsae'],
            ['Gen. pl.', 'arborum pulchrārum', 'partium immēnsārum'],
            ['Dat. pl.', 'arboribus pulchrīs', 'partibus immēnsīs'],
            ['Acc. pl.', 'arborēs pulchrās', 'partēs immēnsās'],
            ['Abl. pl.', 'arboribus pulchrīs', 'partibus immēnsīs'],
          ],
        },
        {
          caption: 'neuter (a preview of the next chapter)',
          head: ['', 'nōmen fāmōsum', 'ōs apertum'],
          rows: [
            ['Nōm.', 'nōmen fāmōsum', 'ōs apertum'],
            ['Gen.', 'nōminis fāmōsī', 'ōris apertī'],
            ['Dat.', 'nōminī fāmōsō', 'ōrī apertō'],
            ['Acc.', 'nōmen fāmōsum', 'ōs apertum'],
            ['Abl.', 'nōmine fāmōsō', 'ōre apertō'],
            ['Nōm. pl.', 'nōmina fāmōsa', 'ōra aperta'],
            ['Gen. pl.', 'nōminum fāmōsōrum', 'ōrum apertōrum'],
            ['Dat. pl.', 'nōminibus fāmōsīs', 'ōribus apertīs'],
            ['Acc. pl.', 'nōmina fāmōsa', 'ōra aperta'],
            ['Abl. pl.', 'nōminibus fāmōsīs', 'ōribus apertīs'],
          ],
        },
      ],
      points: [
        'The adjective keeps its own declension endings; only case, number and gender must agree.',
        'Rēx bonus, rēgis bonī; arbor pulchra, arboris pulchrae; nōmen fāmōsum, nōminis fāmōsī.',
        'The neuter pattern is included here for reference, although neuter third-declension nouns are treated in the next chapter.',
      ],
    },
    {
      id: 'genetivus-partitivus-ordinales',
      latinTitle: 'Genetīvus Partītīvus et Numerī Ōrdinālēs',
      title: 'The Partitive Genitive and Ordinal Numbers',
      intro:
        'The genitive may name the whole of which a part is meant: maiōrem partem cibī et vīnī, the greater ' +
        'part of the food and wine. The ordinal numbers prīmus, secundus, tertius and so on are declined ' +
        'like bonus, -a, -um.',
      paradigms: [
        {
          caption: 'partitive genitive',
          head: ['Latin', 'English'],
          rows: [
            ['maiōrem partem cibī et vīnī', 'the greater part of the food and wine'],
            ['pars urbis', 'part of the city'],
            ['multum vīnī', 'much wine'],
            ['nēmō Rōmānōrum', 'no one of the Romans'],
          ],
        },
        {
          caption: 'prīmus, -a, -um — first',
          head: ['', 'Masculīnum', 'Fēminīnum', 'Neutrum'],
          rows: [
            ['Nōm.', 'prīmus', 'prīma', 'prīmum'],
            ['Gen.', 'prīmī', 'prīmae', 'prīmī'],
            ['Dat.', 'prīmō', 'prīmae', 'prīmō'],
            ['Acc.', 'prīmum', 'prīmam', 'prīmum'],
            ['Abl.', 'prīmō', 'prīmā', 'prīmō'],
          ],
        },
      ],
      points: [
        'The partitive genitive follows words meaning a part or quantity: pars, multum, nēmō, satis.',
        'English often uses of where Latin uses the bare genitive.',
        'The ordinals are prīmus, secundus, tertius, quārtus, quīntus, sextus, septimus, octāvus, nōnus, decimus.',
        'Ordinals are declined like bonus, -a, -um and agree with their noun: prīmā hōrā, septimus rēx.',
      ],
    },
  ],
  vocabulary: [
    { latin: 'advena, -ae', english: 'stranger', pos: 'noun c.' },
    { latin: 'arbor, arboris', english: 'tree', pos: 'noun f.' },
    { latin: 'Baucis, Baucidis', english: 'Baucis', pos: 'noun f.' },
    { latin: 'cibus, -ī', english: 'food', pos: 'noun m.' },
    { latin: 'dominus, -ī', english: 'master, lord', pos: 'noun m.' },
    { latin: 'fīnis, fīnis, -ium', english: 'end; (pl.) boundary', pos: 'noun m. (sometimes f.)' },
    { latin: 'locus, -ī', english: 'place', pos: 'noun m. (pl. loca, n.)' },
    { latin: 'membrum, -ī', english: 'leg (of a table); limb', pos: 'noun n.' },
    { latin: 'mēnsa, -ae', english: 'table', pos: 'noun f.' },
    { latin: 'Mercurius, -iī', english: 'Mercury', pos: 'noun m.' },
    { latin: 'pars, partis, -ium', english: 'part', pos: 'noun f.' },
    { latin: 'pater, patris', english: 'father', pos: 'noun m.' },
    { latin: 'Philēmōn, -mōnis', english: 'Philemon', pos: 'noun m.' },
    { latin: 'Phrygia, -ae', english: 'Phrygia', pos: 'noun f.' },
    { latin: 'piscis, piscis, -ium', english: 'fish', pos: 'noun m.' },
    { latin: 'requiēs, requiētis', english: 'rest', pos: 'noun f.' },
    { latin: 'rēx, rēgis', english: 'king', pos: 'noun m.' },
    { latin: 'senex, senis', english: 'old man, old woman', pos: 'noun c.' },
    { latin: 'servus, -ī', english: 'servant, slave', pos: 'noun m.' },
    { latin: 'stagnum, -ī', english: 'pool, lake', pos: 'noun n.' },
    { latin: 'vīnum, -ī', english: 'wine', pos: 'noun n.' },
    { latin: 'dubitō (1)', english: 'doubt, hesitate', pos: 'verb' },
    { latin: 'imperō (1)', english: 'command, order, bid (+ dat.)', pos: 'verb' },
    { latin: 'intrō (1)', english: 'enter', pos: 'verb' },
    { latin: 'iubeō, -ēre, iussī, iussum', english: 'order, command, ask, bid', pos: 'verb' },
    { latin: 'parō (1)', english: 'prepare', pos: 'verb' },
    { latin: 'sedeō, -ēre, sēdī, sessum', english: 'sit, remain, stay', pos: 'verb' },
    { latin: 'veniō, -īre, vēnī, ventum', english: 'come', pos: 'verb' },
    { latin: 'apertus, -a, -um', english: 'open', pos: 'adjective' },
    { latin: 'clausus, -a, -um', english: 'closed', pos: 'adjective' },
    { latin: 'duo, duae, duo', english: 'two', pos: 'numeral' },
    { latin: 'factus, -a, -um', english: 'done, made', pos: 'adjective' },
    { latin: 'immēnsus, -a, -um', english: 'immense, boundless', pos: 'adjective' },
    { latin: 'maior, maius', english: 'greater', pos: 'adjective (comparative)' },
    { latin: 'noster, -tra, -trum', english: 'our', pos: 'adjective' },
    { latin: 'pius, -a, -um', english: 'pious, reverent', pos: 'adjective' },
    { latin: 'plēnus, -a, -um', english: 'full', pos: 'adjective' },
    { latin: 'vērus, -a, -um', english: 'true', pos: 'adjective' },
    { latin: 'ego', english: 'I', pos: 'pronoun' },
    { latin: 'enim', english: 'for, in fact, truly (postpositive)', pos: 'conjunction' },
    { latin: 'et ... et', english: 'both ... and', pos: 'conjunction' },
    { latin: 'nōn procul', english: 'not distant, near by', pos: 'phrase' },
    { latin: 'quicquid', english: 'whatever', pos: 'pronoun' },
    { latin: 'ubi', english: 'where, when', pos: 'adverb' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PĒNSVM A',
      title: 'Respondēte Latīnē',
      instruction: 'Answer each question in a complete Latin sentence, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'Estne potentia caelī parva?', a: 'Nōn parva, sed immēnsa est.' },
        { q: 'Quis fabulam nārrat?', a: 'Ego ipse fābulam dē duābus arboribus nārrābō.' },
        { q: 'Quī ad locum in Phrygiā appropinquant?', a: 'Iuppiter et Mercurius ad locum appropinquant.' },
        { q: 'Ubi est locus duārum arborum?', a: 'Locus duārum arborum in Phrygiā est.' },
        { q: 'Estne fābula dē duābus arboribus vēra?', a: 'Fābula vēra est.' },
        { q: 'Simulatne Iuppiter fōrmam deī?', a: 'Nōn fōrmam deī, sed fōrmam virī simulat.' },
        { q: 'Populusne in Phrygiā deīs benignus erat?', a: 'Nōn benignus erat; mīlle casae erant clausae.' },
        { q: 'Quī erant deīs benignī?', a: 'Baucis et senex Philēmōn deīs benignī erant.' },
        { q: 'Quis cibum et vīnum parāvit?', a: 'Baucis cibum et vīnum parāvit.' },
        { q: 'Cūr mēnsa nōn plāna erat?', a: 'Quod ūnum membrum nōn satis longum erat.' },
      ],
    },
    {
      id: 'pensum-b',
      latinLabel: 'PĒNSVM B',
      title: 'Complete the Sentences',
      instruction: 'Put the word in parentheses into the correct case and ending.',
      type: 'fill',
      items: [
        '{{Patrem}} bonum habeō.',
        'Parvam {{arborem}} habeō.',
        '{{Piscēs}} bonōs habēmus.',
        'Pater meus est {{senex}} pius.',
        'Dī longam {{requiem}} dēsīderābant.',
        'Multum {{vīnī}} habēmus.',
        'Deum {{Mercurium}} vīdī.',
        'Duo {{advenae}} sunt in oppidō.',
        '{{Dominum}} benignum ōrāmus.',
        '{{Servum}} pium vocāmus.',
        'Multum {{cibī}} dēsīderāmus.',
        'Longam {{mēnsam}} habēmus.',
        'Maximam {{vōcem}} dēsīderāmus.',
        'Longum {{piscem}} in fīlō tenēs.',
        'Magnum {{stagnum}} videō.',
      ],
    },
    {
      id: 'pensum-c',
      latinLabel: 'PĒNSVM C',
      title: 'Translate into Latin',
      instruction: 'Render each English sentence in Latin, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'The power of heaven has no end.', a: 'Potentia caelī fīnem nōn habet.' },
        { q: 'I shall tell you a story about two old people.', a: 'Nārrābō vōbīs fābulam dē duōbus senibus.' },
        { q: 'It is a true story because I myself saw the place.', a: 'Fābula vēra est quod ego ipse locum vīdī.' },
        { q: 'The lake is now full of fish.', a: 'Stagnum nunc plēnum piscium est.' },
        { q: 'Jupiter and his son Mercury approached the place and asked for rest in a thousand cottages.', a: 'Iuppiter et Mercurius fīlius eius ad locum vēnērunt et requiem in mīlle casīs rogāvērunt.' },
        { q: 'Only one small cottage was open to the king of the gods.', a: 'Ūna parva casa sōla rēgī deōrum aperta erat.' },
        { q: 'Philemon bade the strangers sit down.', a: 'Philēmōn advenās sedēre iussit.' },
        { q: 'Baucis gave food and wine to the two gods.', a: 'Baucis duōbus deīs cibum et vīnum dedit.' },
        { q: 'The table was not level because one leg was not long enough.', a: 'Mēnsa plāna nōn erat quod ūnum membrum nōn satis longum erat.' },
        { q: 'The two old people were kind to the gods and gave them the greater part of the food and wine.', a: 'Duo senēs deīs benignī erant et eīs maiōrem partem cibī et vīnī dedērunt.' },
      ],
    },
  ],
}

export default chapter
