// Capitulum XVI — PYRAMUS ET THISBE
// Source: Goldman & Nyenhuis, Latin via Ovid: A First Course (2nd ed., 1982)
// Reading text, vocabulary, grammar and exercises adapted for the web.

const chapter = {
  number: 16,
  roman: 'XVI',
  slug: 'pyramus-et-thisbe-2',
  latinTitle: 'PYRAMUS ET THISBE',
  title: 'Pyramus and Thisbe (Part 2)',
  tagline: 'Thisbe finds the dying Pyramus beneath the mulberry tree, and the two lovers are joined at last in a single urn.',
  status: 'complete',
  overview:
    'The second half of the story of Pyramus and Thisbe completes the tragedy begun in the previous chapter. ' +
    'Thisbe returns to the trysting-place, discovers the bloodstained body of Pyramus, and takes her own life with his sword. ' +
    'The grammar presents the demonstrative pronouns and adjectives hic, haec, hoc and ille, illa, illud, and the imperative mood of all four conjugations.',
  objectives: [
    'Read and understand the closing scene of the Pyramus and Thisbe story.',
    'Recognise and use the demonstratives hic, haec, hoc and ille, illa, illud.',
    'Form and translate the singular and plural imperative.',
    'Use the imperative in commands, prayers and greetings.',
    'Learn the vocabulary of death, burial and remembrance.',
  ],
  readings: [
    {
      id: 'pyramus-et-thisbe',
      latinTitle: 'PYRAMUS ET THISBE',
      title: 'Pyramus and Thisbe',
      paragraphs: [
        'Ecce Thīsbe ex spēluncā venit. Amantem oculīs quaerit quod eī dē perīculīs nārrāre dēsīderat. Locum et fōrmam arboris videt, sed color pōmī eam incertam facit. Dum dubitat, videt in herbā sub hāc arbore corpus Pyramī cruentum. Multīs lacrimīs ita clāmat virgō territa: "Pyrame, quis tē ā mē rapuit? Pyrame, Pyrame, respondē, tua tē cārissima Thīsbe nōminat!"',
        'Ad nōmen Thīsbēs Pyramus oculōs aperuit; tum iterum eōs in morte clausit.',
        'Ubi Thīsbe velāmina sua gladiumque Pyramī vīdit, "Tua tē manus," inquit, "amorque tuus necāvit. Mihī quoque sunt amor et manus. Mē in mortem mittam; sī causa mortis tuae fuī, comes quoque mortis tuae erō. Ō parentēs miserī, date nōbīs hoc dōnum. Pōnite in hōc tumulō ūnō nōs, quōs amor coniūnxit, quōs ūna hōra coniūnxit. At tū, arbor, habē semper pōma purpurea, monumenta duōrum amantium mortuōrum."',
        'Dum haec dīcit, gladiō Pyramī sē necat. Et dī et parentēs haec verba audīvērunt, nam color pōmī morī nōn iam albus est, sed purpureus ubi permāturuit. Cinis duōrum amantium in ūnā ūrnā requiēscit.',
      ],
      notes: [
        { term: 'Thīsbe, -ēs', gloss: 'Thisbe, the Babylonian maiden loved by Pyramus.' },
        { term: 'spēlunca, -ae', gloss: 'cave, cavern; the meeting-place of the lovers.' },
        { term: 'perīculum, -ī', gloss: 'danger; the dangers Thisbe wishes to tell Pyramus about.' },
        { term: 'mōrus, -ī', gloss: 'the mulberry tree; color pōmī morī — the colour of the mulberry fruit.' },
        { term: 'velāmen, -inis', gloss: 'veil, covering; Thisbe’s cloak, left behind in the first part of the story.' },
        { term: 'comes, comitis', gloss: 'companion, sharer (common gender): comes mortis — companion in death.' },
        { term: 'tumulus, -ī', gloss: 'grave, mound; ūnus tumulus — a single grave.' },
        { term: 'convenīre', gloss: 'to join, unite: quōs amor coniūnxit — whom love has joined.' },
        { term: 'pūrpureus, -a, -um', gloss: 'purple; the colour of the ripe mulberry.' },
        { term: 'permāturēscere', gloss: 'to ripen thoroughly; per- intensifies the verb.' },
        { term: 'cinis, -eris', gloss: 'ashes of a corpse; in the plural especially in poetry.' },
        { term: 'ūrna, -ae', gloss: 'urn, vessel of baked clay for holding ashes.' },
        { term: 'requiēscere', gloss: 'to rest, lie at rest: in ūnā ūrnā requiēscit.' },
      ],
    },
  ],
  grammar: [
    {
      id: 'hic-haec-hoc',
      latinTitle: 'Hic, Haec, Hoc',
      title: 'This; These',
      intro:
        'The demonstrative hic, haec, hoc points to something near the speaker: "this" or "these". ' +
        'It may be used as a pronoun (Hoc est bonum — This is good) or as an adjective agreeing with a noun ' +
        '(Hic puer est bonus — This boy is good). In either use it agrees in gender, number and case with the word or idea it refers to.',
      paradigms: [
        {
          caption: 'hic, haec, hoc — this (near the speaker)',
          head: ['', 'M.', 'F.', 'N.'],
          rows: [
            ['Nom. sing.', 'hic', 'haec', 'hoc'],
            ['Gen. sing.', 'huius', 'huius', 'huius'],
            ['Dat. sing.', 'huic', 'huic', 'huic'],
            ['Acc. sing.', 'hunc', 'hanc', 'hoc'],
            ['Abl. sing.', 'hōc', 'hāc', 'hōc'],
            ['Nom. pl.', 'hī', 'hae', 'haec'],
            ['Gen. pl.', 'hōrum', 'hārum', 'hōrum'],
            ['Dat. pl.', 'hīs', 'hīs', 'hīs'],
            ['Acc. pl.', 'hōs', 'hās', 'haec'],
            ['Abl. pl.', 'hīs', 'hīs', 'hīs'],
          ],
        },
      ],
      points: [
        'The genitive singular huius and the dative singular huic are the same for all three genders.',
        'The neuter nominative and accusative singular are both hoc; the neuter plural is haec.',
        'Used as a substantive, the gender shows whether men, women or things are meant: Hī sunt mortuī — These men are dead; Haec venit — This woman is coming; Hoc videō — I see this thing.',
        'The vowel of the nominative hic is short in this text, to avoid confusion with the adverb hīc, "here", and the ablative hōc.',
      ],
    },
    {
      id: 'ille-illa-illud',
      latinTitle: 'Ille, Illa, Illud',
      title: 'That; Those',
      intro:
        'The demonstrative ille, illa, illud points to something farther away: "that" or "those". ' +
        'Like hic it serves both as a pronoun (Illud est novum — That is strange) and as an adjective ' +
        '(Illa arbor est pulchra — That tree is beautiful).',
      paradigms: [
        {
          caption: 'ille, illa, illud — that (farther away)',
          head: ['', 'M.', 'F.', 'N.'],
          rows: [
            ['Nom. sing.', 'ille', 'illa', 'illud'],
            ['Gen. sing.', 'illīus', 'illīus', 'illīus'],
            ['Dat. sing.', 'illī', 'illī', 'illī'],
            ['Acc. sing.', 'illum', 'illam', 'illud'],
            ['Abl. sing.', 'illō', 'illā', 'illō'],
            ['Nom. pl.', 'illī', 'illae', 'illa'],
            ['Gen. pl.', 'illōrum', 'illārum', 'illōrum'],
            ['Dat. pl.', 'illīs', 'illīs', 'illīs'],
            ['Acc. pl.', 'illōs', 'illās', 'illa'],
            ['Abl. pl.', 'illīs', 'illīs', 'illīs'],
          ],
        },
      ],
      points: [
        'The genitive singular illīus and the dative singular illī are the same for all three genders.',
        'Hic and ille can also mean "the latter" and "the former" respectively: Iuppiter Mercuriō dīcit; ille (the former) huic (the latter) fābulam nārrat.',
        'Illī sunt vīvī — Those men are alive; Illae respondērunt — Those women replied; Illud nōn est sacrum — That thing is not sacred.',
        'The forms of both hic and ille often stand alone as pronouns; the context, not English word order, determines the antecedent.',
      ],
    },
    {
      id: 'imperativus',
      latinTitle: 'Imperātīvus',
      title: 'The Imperative',
      intro:
        'The imperative mood gives a command. The singular imperative is formed by dropping the -re of the infinitive; ' +
        'the plural adds -te to the same stem. Third-conjugation verbs use -ite for the plural.',
      paradigms: [
        {
          caption: 'imperātīvus praesentis — all conjugations',
          head: ['', 'I', 'II', 'III', 'III-iō', 'IV'],
          rows: [
            ['Īnfīnītīvus', 'vocāre', 'docēre', 'mittere', 'capere', 'audīre'],
            ['Sing.', 'vocā', 'docē', 'mitte', 'cape', 'audī'],
            ['Pl.', 'vocāte', 'docēte', 'mittite', 'capite', 'audīte'],
          ],
        },
      ],
      points: [
        'The accent follows the antepenultimate rule: vocāte, docēte, mittite, capite, audīte.',
        'Pōnite in hōc tumulō nōs — Place us in this grave; Habē semper pōma purpurea — Always have purple fruit.',
        'Ōrāte deīs — Pray to the gods; Venīte ad tabulam — Come to the board.',
        'The singular imperatives of dīcō, faciō and ferō are irregular: dīc, fac, fer.',
        'Salvē! greets one person; salvēte! greets more than one. Valē! and valēte! are the corresponding farewells.',
      ],
    },
  ],
  vocabulary: [
    { latin: 'cinis, -eris', english: 'ashes (of a corpse)', pos: 'noun m.' },
    { latin: 'comes, comitis', english: 'companion, sharer', pos: 'noun c.' },
    { latin: 'hōra, -ae', english: 'hour', pos: 'noun f.' },
    { latin: 'monumentum, -ī', english: 'memorial, reminder', pos: 'noun n.' },
    { latin: 'perīculum, -ī', english: 'danger', pos: 'noun n.' },
    { latin: 'ūrna, -ae', english: 'urn, vessel of baked clay', pos: 'noun f.' },
    { latin: 'aperīre', english: 'to open', pos: 'verb' },
    { latin: 'audīre', english: 'to hear', pos: 'verb' },
    { latin: 'claudere', english: 'to close', pos: 'verb' },
    { latin: 'inquit', english: 'says, said', pos: 'verb' },
    { latin: 'legere', english: 'to read, gather, choose', pos: 'verb' },
    { latin: 'mittere', english: 'to send', pos: 'verb' },
    { latin: 'nōmināre', english: 'to call, name', pos: 'verb' },
    { latin: 'pōnere', english: 'to put, place', pos: 'verb' },
    { latin: 'rapere', english: 'to seize, carry off', pos: 'verb' },
    { latin: 'incertus, -a, -um', english: 'uncertain, unsure', pos: 'adj.' },
    { latin: 'mortuus, -a, -um', english: 'dead', pos: 'adj.' },
    { latin: 'cruentus, -a, -um', english: 'bloodstained, bloody', pos: 'adj.' },
    { latin: 'pūrpureus, -a, -um', english: 'purple', pos: 'adj.' },
    { latin: 'at', english: 'but, yet, but meanwhile', pos: 'conjunction' },
    { latin: 'atque', english: 'and, and also', pos: 'conjunction' },
    { latin: 'nam', english: 'for, because', pos: 'conjunction' },
    { latin: 'nōn iam', english: 'no longer', pos: 'adverb' },
    { latin: 'quōs', english: 'whom (acc. pl.)', pos: 'pronoun' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PĒNSVM A',
      title: 'Questions',
      instruction: 'Answer each question in a complete Latin sentence, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'Cūr Thīsbe Pyramum quaesīvit?', a: 'Thīsbe Pyramum quaesīvit quod eī dē perīculīs nārrāre dēsīderābat.' },
        { q: 'Suntne pōma adhūc alba?', a: 'Nōn iam alba sunt; purpurea sunt ubi permāturuit.' },
        { q: 'Quem Thīsbe in herbā vīdit?', a: 'Thīsbe in herbā corpus Pyramī cruentum vīdit.' },
        { q: 'Quid clāmat Thīsbe?', a: 'Thīsbe clāmat: "Pyrame, quis tē ā mē rapuit? Responde, tua tē cārissima Thīsbe nōminat!"' },
        { q: 'Cum Pyramus nōmen Thīsbēs audīvit, quid fēcit?', a: 'Pyramus oculōs aperuit, tum iterum eōs in morte clausit.' },
        { q: 'Quae Thīsbe prope corpus Pyramī vīdit?', a: 'Thīsbe velāmina sua gladiumque Pyramī vīdit.' },
        { q: 'Quid est dōnum quod Thīsbe parentēs ōrāvit?', a: 'Thīsbe parentēs ōrāvit: "Pōnite nōs in hōc tumulō ūnō."' },
        { q: 'Quid est dōnum quod Thīsbe arborem ōrāvit?', a: 'Thīsbe arborem ōrāvit ut semper pōma purpurea habēret.' },
        { q: 'Quid dēnique fēcit Thīsbe?', a: 'Thīsbe gladiō Pyramī sē necāvit.' },
      ],
    },
    {
      id: 'pensum-b',
      latinLabel: 'PĒNSVM B',
      title: 'This and That',
      instruction: 'Supply the correct form of hic, haec, hoc or ille, illa, illud.',
      type: 'fill',
      items: [
        '{{Haec}} arbor est pulchra. {{Hic}} gladius est acūtus.',
        '{{Hunc}} librum in manū habeō. {{Hōs}} librōs in scholā habēmus.',
        '{{Hanc}} puellam Pyramus amat. {{Hoc}} dōnum nōn est tibi.',
        '{{Hic}} cinis in ūnā ūrnā requiēscit. {{Hanc}} arborem Thīsbe nōn videt.',
        '{{Haec}} pōma sunt purpurea. {{Haec}} ūna hōra duōs amantēs coniunget.',
        '{{Ille}} liber est novus. {{Illa}} fābula est longa. {{Illud}} dōnum est novum.',
        '{{Illum}} librum novum habeō. {{Illam}} longam fābulam amō. {{Illud}} dōnum sacrum ōrāvī.',
        '{{Illa}} pōma sunt purpurea. {{Ille}} gladius eum necāvit.',
        '{{Illī}} oculī pulchrī sunt.',
        'Parentēs erant miserī propter {{illōs}} amantēs mortuōs.',
      ],
    },
    {
      id: 'pensum-c',
      latinLabel: 'PĒNSVM C',
      title: 'Commands',
      instruction: 'Supply the correct form of the imperative. The vocative shows whether the singular or the plural is needed.',
      type: 'fill',
      items: [
        '{{Pōnite}}, discipulī, librōs in mēnsam.',
        '{{Pōne}}, Thīsbe, gladium in herbam.',
        '{{Audīte}}, discipulī, verba magistrī.',
        '{{Legite}}, discipulī, fābulam in librīs.',
        '{{Aperī}}, Marcē, portam.',
        '{{Claude}}, rēgīna, portās rēgiae.',
        '{{Audī}}, Marcē, mūsicam deōrum.',
        '{{Scribite}}, discipulī, nōmina hīc, quaesō.',
        '{{Aperīte}}, servī, ūrnās.',
        '{{Mittite}}, parentēs, fīliās fīliōsque ad scholam.',
      ],
    },
    {
      id: 'pensum-d',
      latinLabel: 'PĒNSVM D',
      title: 'Into Latin',
      instruction: 'Translate each English sentence into Latin, using the chapter’s vocabulary and grammar.',
      type: 'fill',
      items: [
        'Thisbe wants to tell Pyramus about these dangers. → {{Thīsbe Pyramō dē hīs perīculīs nārrāre dēsīderat.}}',
        'She hesitates when she sees the colour of the fruit. → {{Dubitat ubi colōrem pōmī videt.}}',
        'She sees the bloody body of Pyramus. → {{Corpus Pyramī cruentum videt.}}',
        'Pyramus did not open his eyes again. → {{Pyramus oculōs iterum nōn aperuit.}}',
        'Thisbe said: "This great love has killed you." → {{Thīsbe dīxit: "Hic magnus amor tē necāvit."}}',
        'I shall be the companion of your death. → {{Comes mortis tuae erō.}}',
        'O wretched parents, give us this gift. → {{Ō parentēs miserī, date nōbīs hoc dōnum.}}',
        'Place the ashes in a single urn. → {{Pōnite cinerēs in ūnā ūrnā.}}',
        'The gods heard the words of the maiden, and the parents placed the ashes in a single urn. → {{Dī verba virginis audīvērunt, et parentēs cinerēs in ūnā ūrnā posuērunt.}}',
        'The colour of the fruit of the mulberry is always purple. → {{Color pōmī morī semper purpureus est.}}',
      ],
    },
  ],
}

export default chapter
