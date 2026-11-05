// Capitulum IX — Pastor et Oves
// Sources: Ørberg, Lingua Latina per se Illustrata, Pars I: Familia Romana (2nd ed.)
// Reading text, grammar and exercises adapted and re-typeset for the web.

const chapter = {
  number: 9,
  roman: 'IX',
  slug: 'pastor-et-oves',
  latinTitle: 'PASTOR ET OVES',
  title: 'The Shepherd and the Sheep',
  tagline: 'A shepherd, a hundred sheep, and a wolf in the wood — and the five declensions of Latin nouns.',
  status: 'complete',
  overview:
    'A shepherd (pastor) tends his flock of a hundred sheep in the fields, with only a black dog for company. ' +
    'They rest in the shade of a tree, but while the shepherd sleeps the one black sheep wanders off into the wood, ' +
    'where a hungry wolf is prowling. The dog and the shepherd must find her before the wolf does. ' +
    'The story brings a whole countryside of new nouns — fields, mountains, valleys, woods, sun and sky — and gives ' +
    'the perfect excuse to learn the first three of the five declensions: insula, servus, verbum, pastor and ovis.',
  objectives: [
    'Read a continuous Latin story about a shepherd and his flock.',
    'Tell which declension a noun belongs to from its genitive singular.',
    'Decline first-declension nouns in -a like insula.',
    'Decline second-declension nouns in -us and -um like servus and verbum.',
    'Decline third-declension nouns like pastor and ovis, and learn nouns together with their genitive.',
  ],
  readings: [
    {
      id: 'pastor-et-oves',
      latinTitle: 'PASTOR ET OVES',
      title: 'The Shepherd and the Flock',
      paragraphs: [
        'Hic vir, qui in campo ambulat, pastor Iulii est. Pastor non solus est in campo, nam canis niger cum eo est et centum oves: una ovis nigra et undecentum oves albae. Pastor unam ovem nigram et multas oves albas habet. Is est dominus ovis nigrae et ovium albarum. Pastor ovi nigrae et ovibus albis aquam et cibum dat. Cum una ove nigra et undecentum ovibus albis pastor in campo est.',
        'Cibus ovium est herba, quae in campo est. In rivo est aqua. Oves in campo herbam edunt, et aquam bibunt e rivo, qui inter campum et silvam est. Canis herbam non est, neque pastor herbam est. Cibus pastoris est panis, qui inest in sacco. Iulius pastori suo panem dat. Pastor cani suo cibum dat: canis a pastore cibum accipit. Itaque canis pastorem amat.',
        'In Italia sunt multi pastores. Qui via Appia Roma Brundisium it multos pastores videt in campis. Numerus pastorum magnus est. Domini pastoribus suis cibum dant. Canes a pastoribus cibum accipiunt.',
        'Post campum montes sunt. Inter montes sunt valles. In campo est collis. (Collis est mons parvus.) In colle arbor est. In silva multae arbores sunt. Oves non in silva neque in monte, sed in campo sunt. In silva est lupus. Pastor et oves lupum timent, nam lupus oves est. In silvis et in montibus lupi sunt, in vallibus nulli sunt lupi.',
        'Sol in caelo est supra campum. In caelo nulla nubes videtur. Caelum est supra terram. Montes et valles campi silvaeque sunt in terra. In caelo sol et nubes sunt, sed supra hunc campum caelum sine nubibus est. Itaque sol lucet in campo.',
      ],
      notes: [
        { term: 'pastor', gloss: 'shepherd (genitive pastoris) — the master of the flock.' },
        { term: 'ovis', gloss: 'sheep (genitive ovis); plural oves.' },
        { term: 'undecentum', gloss: 'ninety-nine — literally "one short of a hundred".' },
        { term: 'cibus', gloss: 'food; cibus ovium est herba — the food of the sheep is grass.' },
        { term: 'e rivo', gloss: 'out of the stream (e/ex + ablative).' },
        { term: 'collis', gloss: 'a hill — the text explains it as mons parvus, a little mountain.' },
        { term: 'itaque', gloss: 'and so, therefore.' },
        { term: 'sol lucet', gloss: 'the sun shines.' },
      ],
    },
    {
      id: 'ovis-nigra',
      latinTitle: 'OVIS NIGRA',
      title: 'The Black Sheep',
      paragraphs: [
        'Pastor in sole ambulat. Sub arbore autem umbra est. Pastor, qui nullam nubem videt in caelo, cum cane et ovibus ad arborem adit. Pastor umbram petit. Etiam oves umbram petunt: post pastorem ad arborem adeunt. Pastor oves suas ad arborem ducit.',
        'Ecce pastor in umbra arboris iacet cum cane et ovibus. Arbor pastori et cani et ovibus umbram dat; sed ovis nigra cum paucis aliis in sole iacet. Pastor, qui fessus est, oculos claudit et dormit. Canis non dormit.',
        "Dum pastor in herba dormit, ovis nigra ab ovibus albis abit et ad rivum currit. Ovis nigra oves albas relinquit et rivum petit; aquam bibit e rivo, et in silvam intrat!",
        "Canis latrat: 'Baubau!' Pastor oculos aperit, oves aspicit, ovem nigram non videt. Pastor oves numerat: 'Una, duae, tres, quattuor, quinque ... undecentum.' Numerus ovium est undecentum, non centum. Nullae oves albae absunt, sed abest ovis nigra. Pastor et canis oves albas relinquunt et silvam petunt. Pastor saccum cum pane in colle relinquit.",
        'Dum ceterae oves a pastore numerantur, ovis nigra in magna silva, ubi via nulla est, errat. Ovis, quae iam procul a pastore ceterisque ovibus abest, neque caelum neque solem supra se videt. Sub arboribus sol non lucet. Ovis nigra in umbra est.',
        'In terra inter arbores sunt vestigia lupi. Ubi est lupus ipse? Non procul abest. Ovis vestigia lupi in terra videt, neque lupum ipsum videt. Itaque ovis lupum non timet. Parva ovis sine timore inter arbores errat.',
        'Lupus autem prope ovem est. Pastor et canis procul ab ea sunt. Lupus, qui cibum non habet, per silvam errat. Lupus in silva cibum quaerit, dum pastor et canis ovem nigram quaerunt.',
      ],
      notes: [
        { term: 'umbra', gloss: 'shade, shadow; sub arbore umbra est — there is shade under the tree.' },
        { term: 'petit', gloss: 'seeks, heads for (petere); umbram petit — he looks for the shade.' },
        { term: 'abit', gloss: 'goes away, departs (ab + eo); ovis ab ovibus albis abit.' },
        { term: 'relinquit', gloss: 'leaves (behind), abandons.' },
        { term: 'latrat', gloss: 'barks; the dog’s cry “Baubau!” is woof woof!' },
        { term: 'fessus', gloss: 'tired, weary; qui fessus est — who is tired.' },
        { term: 'procul ↔ prope', gloss: 'far off / near; procul a pastore = far from the shepherd.' },
        { term: 'vestigia', gloss: 'footprints, traces (vestigium, -i).' },
      ],
    },
    {
      id: 'lupus',
      latinTitle: 'LPVS',
      title: 'The Wolf',
      paragraphs: [
        "Pastor: 'Ubi est ovis nigra? Age! quaere ovem, canis, et reperi eam!' Canis ovem quaerit et vestigia eius in terra reperit, neque ovem ipsam reperit. Canis latrat.",
        "Pastor: 'Ecce vestigia ovis. Ubi est ovis ipsa? Duc me ad eam, canis!' Canis dominum suum per silvam ducit ad ovem, sed ovis procul abest.",
        "Lupus ululat: 'Uhii!' Et ovis et canis lupum audiunt. Lupus currit. Ovis consistit et exspectat dum lupus venit. Ovis balat: 'Baba!'",
        'Ecce lupus qui ante ovem est! Iam ovis lupum ipsum ante se videt. Oculi lupi in umbra lucent ut gemmae et dentes ut margaritae. Parva ovis oculos claudit et dentes lupi exspectat. Lupus collum ovis petit dentibus ...',
        'Sed ecce canis accurrit! Lupus se ab ove vertit ad canem, qui ante lupum consistit et dentes ostendit. Lupus ululat. Canis latrat. Ovis balat.',
        "Pastor, qui iam prope est, clamat: 'Pete lupum!' Canis clamorem pastoris audit, et sine timore lupum petit. Lupus autem ovem relinquit et montes petit.",
        'Pastor quoque accurrit et ovem suam, quae in terra iacet, aspicit. In collo eius sunt vestigia dentium lupi! Ovis oculos aperit et ad pastorem suum balat.',
        'Pastor laetus ovem in umeros imponit eamque portat ad ceteras oves, quae sine pastore in campo errant. Procul in monte lupus ululat.',
      ],
      notes: [
        { term: 'Age!', gloss: 'come on! — a call to action.' },
        { term: 'quaere / reperi', gloss: 'look for! / find! (singular imperatives).' },
        { term: 'ululat', gloss: 'howls; ovis balat — the sheep bleats, canis latrat — the dog barks.' },
        { term: 'ut gemmae', gloss: 'like jewels — ut introduces a comparison.' },
        { term: 'consistit', gloss: 'stops, halts, takes a stand.' },
        { term: 'accurrit', gloss: 'runs up (ad + currit).' },
        { term: 'imponit', gloss: 'puts (her) on; ovem in umeros imponit — he lifts the sheep onto his shoulders.' },
        { term: 'in collo eius', gloss: 'on her neck (collum, -i).' },
      ],
    },
  ],
  grammar: [
    {
      id: 'quinque-declinationes',
      latinTitle: 'Quinque Declinationes',
      title: 'The Five Declensions',
      intro:
        'Latin nouns are divided into five families, called declensions. To decline a noun is to run through ' +
        'its cases with the right endings; which family it belongs to you can always tell from the genitive singular.',
      paradigms: [
        {
          caption: 'the five declensions — the genitive singular is the sign',
          head: ['Declinatio', 'Signum', 'Exemplum'],
          rows: [
            ['I', '-ae', 'insula, insulae (f.) — island'],
            ['II', '-i', 'servus, servi (m.); verbum, verbi (n.)'],
            ['III', '-is', 'pastor, pastoris (m.); ovis, ovis (f.)'],
            ['IV', '-us', 'exercitus, exercitus (m.) — army'],
            ['V', '-ei', 'res, rei (f.) — thing, matter'],
          ],
        },
      ],
      points: [
        'Learn every noun with its genitive: insula, -ae; servus, -i; pastor, -is. The genitive is the signpost that tells you the declension.',
        'The five signposts are -ae (I), -i (II), -is (III), -us (IV) and -ei (V).',
        'This chapter meets the first three declensions through the nouns of the story: insula, servus and verbum, pastor and ovis.',
        'A noun’s case, not its position in the sentence, shows what it does: ovis lupum videt (the sheep sees the wolf) and lupus ovem videt (the wolf sees the sheep).',
      ],
    },
    {
      id: 'declinatio-prima',
      latinTitle: 'Declinatio Prima',
      title: 'The First Declension',
      intro:
        'First-declension nouns end in -a in the nominative singular and in -ae in the genitive. ' +
        'Learn them on insula, insulae (f.) — island.',
      paradigms: [
        {
          caption: 'insula, insulae (f.) — island',
          head: ['Casus', 'Singularis', 'Pluralis'],
          rows: [
            ['Nominativus', 'insula', 'insulae'],
            ['Accusativus', 'insulam', 'insulas'],
            ['Genetivus', 'insulae', 'insularum'],
            ['Dativus', 'insulae', 'insulis'],
            ['Ablativus', 'insula', 'insulis'],
          ],
        },
        {
          caption: 'the endings of the first declension',
          head: ['Casus', 'Singularis', 'Pluralis'],
          rows: [
            ['Nominativus', '-a', '-ae'],
            ['Accusativus', '-am', '-as'],
            ['Genetivus', '-ae', '-arum'],
            ['Dativus', '-ae', '-is'],
            ['Ablativus', '-a', '-is'],
          ],
        },
      ],
      points: [
        'The first declension is recognised by the nominative -a together with the genitive -ae.',
        'Most first-declension nouns are feminine: femina, puella, filia, domina, familia, pecunia, mensa, villa, aqua, via, silva, terra.',
        'A few nouns of this declension naming male persons are masculine: nauta (sailor), agricola (farmer), poeta (poet).',
        'The dative singular and the genitive singular look the same (-ae): Iulius ancillae malum dat — Iulius gives an apple to the slave-girl.',
      ],
    },
    {
      id: 'declinatio-secunda',
      latinTitle: 'Declinatio Secunda',
      title: 'The Second Declension',
      intro:
        'The second declension has masculine nouns in -us and neuter nouns in -um. ' +
        'Its sign is the genitive singular in -i: servus, servi; verbum, verbi.',
      paradigms: [
        {
          caption: 'servus, servi (m.) — slave',
          head: ['Casus', 'Singularis', 'Pluralis'],
          rows: [
            ['Nominativus', 'servus', 'servi'],
            ['Accusativus', 'servum', 'servos'],
            ['Genetivus', 'servi', 'servorum'],
            ['Dativus', 'servo', 'servis'],
            ['Ablativus', 'servo', 'servis'],
          ],
        },
        {
          caption: 'verbum, verbi (n.) — word',
          head: ['Casus', 'Singularis', 'Pluralis'],
          rows: [
            ['Nominativus', 'verbum', 'verba'],
            ['Accusativus', 'verbum', 'verba'],
            ['Genetivus', 'verbi', 'verborum'],
            ['Dativus', 'verbo', 'verbis'],
            ['Ablativus', 'verbo', 'verbis'],
          ],
        },
      ],
      points: [
        'Masculine nouns in -us decline like servus: filius, dominus, fluvius, numerus, nummus, hortus, equus, saccus, amicus, oculus, campus, rivus, lupus.',
        'Neuter nouns in -um decline like verbum: oppidum, exemplum, baculum, ostium, cubiculum, malum, caelum, vestigium.',
        'In every neuter noun the nominative, accusative and vocative are alike, and the plural of those cases ends in -a: verbum, verba.',
        'A few second-declension nouns end in -er, not -us, and keep the -e- in the other cases: puer, pueri; liber, libri. The signal is still the genitive in -i.',
      ],
    },
    {
      id: 'declinatio-tertia',
      latinTitle: 'Declinatio Tertia',
      title: 'The Third Declension',
      intro:
        'Third-declension nouns have nominatives of many different shapes, but their genitive singular always ends in -is. ' +
        'Here they are on pastor (m.) and ovis (f.), the two leading words of the chapter.',
      paradigms: [
        {
          caption: 'pastor, pastoris (m.) — shepherd',
          head: ['Casus', 'Singularis', 'Pluralis'],
          rows: [
            ['Nominativus', 'pastor', 'pastores'],
            ['Accusativus', 'pastorem', 'pastores'],
            ['Genetivus', 'pastoris', 'pastorum'],
            ['Dativus', 'pastori', 'pastoribus'],
            ['Ablativus', 'pastore', 'pastoribus'],
          ],
        },
        {
          caption: 'ovis, ovis (f.) — sheep (i-stem)',
          head: ['Casus', 'Singularis', 'Pluralis'],
          rows: [
            ['Nominativus', 'ovis', 'oves'],
            ['Accusativus', 'ovem', 'oves'],
            ['Genetivus', 'ovis', 'ovium'],
            ['Dativus', 'ovi', 'ovibus'],
            ['Ablativus', 'ove', 'ovibus'],
          ],
        },
      ],
      points: [
        'Always learn a third-declension noun with its genitive: pastor, -is; ovis, -is; mons, -is; dens, -is; sol, -is.',
        'Nouns like pastor: sol, timor, clamor, arbor (f.) — the genitive plural ends in -um (pastorum, solum).',
        'Some nouns like ovis are i-stems and take the genitive plural in -ium: ovis, ovium; collis, collium; panis, panium. Canis keeps the short form canum.',
        'The nominative does not show the gender: ovis, vallis and nubes are feminine, while panis, collis, mons and dens are masculine.',
      ],
    },
  ],
  vocabulary: [
    { latin: 'pastor', english: 'shepherd', pos: 'noun (m.)' },
    { latin: 'ovis', english: 'sheep', pos: 'noun (f.)' },
    { latin: 'canis', english: 'dog', pos: 'noun (m.)' },
    { latin: 'lupus', english: 'wolf', pos: 'noun (m.)' },
    { latin: 'campus', english: 'field, plain', pos: 'noun (m.)' },
    { latin: 'herba', english: 'grass, herb', pos: 'noun (f.)' },
    { latin: 'cibus', english: 'food', pos: 'noun (m.)' },
    { latin: 'aqua', english: 'water', pos: 'noun (f.)' },
    { latin: 'panis', english: 'bread', pos: 'noun (m.)' },
    { latin: 'saccus', english: 'sack, bag', pos: 'noun (m.)' },
    { latin: 'rivus', english: 'stream, brook', pos: 'noun (m.)' },
    { latin: 'silva', english: 'forest, wood', pos: 'noun (f.)' },
    { latin: 'mons', english: 'mountain', pos: 'noun (m.)' },
    { latin: 'vallis', english: 'valley', pos: 'noun (f.)' },
    { latin: 'collis', english: 'hill', pos: 'noun (m.)' },
    { latin: 'arbor', english: 'tree', pos: 'noun (f.)' },
    { latin: 'umbra', english: 'shade, shadow', pos: 'noun (f.)' },
    { latin: 'sol', english: 'sun', pos: 'noun (m.)' },
    { latin: 'caelum', english: 'sky, heaven', pos: 'noun (n.)' },
    { latin: 'nubes', english: 'cloud', pos: 'noun (f.)' },
    { latin: 'terra', english: 'earth, land', pos: 'noun (f.)' },
    { latin: 'via', english: 'road, way', pos: 'noun (f.)' },
    { latin: 'vestigium', english: 'trace, footprint', pos: 'noun (n.)' },
    { latin: 'oculus', english: 'eye', pos: 'noun (m.)' },
    { latin: 'dens', english: 'tooth', pos: 'noun (m.)' },
    { latin: 'collum', english: 'neck', pos: 'noun (n.)' },
    { latin: 'declinatio', english: 'declension', pos: 'noun (f.)' },
    { latin: 'casus', english: 'case (of a noun)', pos: 'noun (m.)' },
    { latin: 'niger', english: 'black', pos: 'adjective' },
    { latin: 'albus', english: 'white', pos: 'adjective' },
    { latin: 'fessus', english: 'tired, weary', pos: 'adjective' },
    { latin: 'multus', english: 'much, many', pos: 'adjective' },
    { latin: 'ambulat', english: 'walks', pos: 'verb' },
    { latin: 'bibit', english: 'drinks', pos: 'verb' },
    { latin: 'accipit', english: 'receives, gets', pos: 'verb' },
    { latin: 'timet', english: 'fears, is afraid of', pos: 'verb' },
    { latin: 'currit', english: 'runs', pos: 'verb' },
    { latin: 'intrat', english: 'enters, goes into', pos: 'verb' },
    { latin: 'relinquit', english: 'leaves (behind)', pos: 'verb' },
    { latin: 'quaerit', english: 'seeks, looks for', pos: 'verb' },
    { latin: 'reperit', english: 'finds', pos: 'verb' },
    { latin: 'procul', english: 'far off, at a distance', pos: 'adverb' },
    { latin: 'prope', english: 'near, close by', pos: 'adverb' },
    { latin: 'supra', english: 'above, over', pos: 'preposition' },
    { latin: 'sub', english: 'under, beneath', pos: 'preposition' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PENSVM A',
      title: 'Fill in the endings',
      instruction: 'Complete each word with the correct ending.',
      type: 'fill',
      items: [
        "Pastor non solus est in campo, nam canis niger cum eo est et centum ov{{es}}: una ovis nigra et undecentum oves alb{{ae}}. Pastor est dominus ovis nigrae et ov{{ium}} albarum. Pastor ovi nigrae et ovibus albis aquam et cib{{um}} dat.",
        "Cibus ovium est herb{{a}}, cibus pastoris est pan{{is}}. Oves in campo herb{{am}} edunt et aquam bibunt. Canis cibum a pastore accip{{it}}. Pastores in campis mult{{as}} oves habent.",
        "In coll{{e}} est arbor. Pastor cum cane et ov{{ibus}} ad arborem it. Pastor in umbr{{a}} arboris iacet. Arbor pastori et cani umbr{{am}} dat, sed ovis nigra in sol{{e}} iacet. Nullae nub{{es}} in cael{{o}} sunt.",
        "Ovis nigra a pastore ceterisque ov{{ibus}} discedit et in silv{{am}} intrat. In terr{{a}} sunt vestigia lup{{i}}; lupus ipse non procul abest. Pastor oves suas ad arborem duc{{it}}. Lupus in silv{{a}} cibum quaerit, dum pastor et canis ov{{em}} quaerunt.",
      ],
    },
    {
      id: 'pensum-c',
      latinLabel: 'PENSVM C',
      title: 'Answer in Latin',
      instruction: 'Answer each question with a full Latin sentence, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'Num pastor solus in campo est?', a: 'Pastor solus non est: canis niger cum eo est et centum oves.' },
        { q: 'Quot oves habet pastor?', a: 'Centum oves habet: unam ovem nigram et undecentum oves albas.' },
        { q: 'A quo canis cibum accipit?', a: 'Canis a pastore cibum accipit.' },
        { q: 'Suntne montes prope pastorem?', a: 'Post campum montes sunt.' },
        { q: 'Ubi sunt valles?', a: 'Valles inter montes sunt.' },
        { q: 'Quid est collis?', a: 'Collis est mons parvus.' },
        { q: 'Quo it pastor?', a: 'Pastor ad arborem it, quia umbram petit.' },
        { q: 'Cur pastor umbram petit?', a: 'Pastor umbram petit, quia in sole ambulat et fessus est.' },
        { q: 'Quo it ovis nigra?', a: 'Ovis nigra ad rivum currit et in silvam intrat.' },
        { q: 'Quid ovis in terra videt?', a: 'Ovis vestigia lupi in terra videt.' },
        { q: 'Cur lupus ovem nigram non est?', a: 'Lupus ovem nigram non est, quia canis accurrit et lupum petit.' },
        { q: 'Quis ovem nigram servat?', a: 'Canis ovem nigram servat.' },
        { q: 'Quid pastor in collo ovis videt?', a: 'Pastor in collo ovis vestigia dentium lupi videt.' },
      ],
    },
  ],
}

export default chapter
