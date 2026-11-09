// Capitulum VII — LATONA ET NIOBE
// Source: Goldman & Nyenhuis, Latin via Ovid: A First Course (2nd ed., 1982)
// Reading text, vocabulary, grammar and exercises adapted for the web.

const chapter = {
  number: 7,
  roman: 'VII',
  slug: 'latona-et-niobe-2',
  latinTitle: 'LATONA ET NIOBE',
  title: 'Latona and Niobe (Part 2)',
  tagline:
    'Latona answers Niobe’s pride: Phoebus and Diana kill her fourteen children, and Niobe freezes into a weeping statue.',
  status: 'complete',
  overview:
    'The story of Niobe reaches its terrible end. Latona, outraged that her temple is neglected, sends Phoebus and Diana ' +
    'to punish the proud queen; all fourteen children die, and Niobe herself is changed to stone. The chapter presents ' +
    'first and second declension adjectives, the ablative of means, the vocative, prepositions with the accusative, and ' +
    'compound verbs.',
  objectives: [
    'Read the conclusion of the story of Latona and Niobe in Latin.',
    'Decline first and second declension adjectives in all three genders.',
    'Recognise and translate the ablative of means.',
    'Form and use the vocative case.',
    'Use prepositions with the accusative and understand compound verbs.',
  ],
  readings: [
    {
      id: 'latona-et-niobe',
      latinTitle: 'LATONA ET NIOBE',
      title: 'Latona and Niobe',
      paragraphs: [
        'Dea Lātōna erat maximē īrāta. Līberōs, Phoebum et Diānam, convocat et longam fābulam dē fēminā superbā nārrat. Dīxit ita māter: “Populus templum meum nōn honōrat. Factum populī est profānum. Ō Phoebe et Diāna, līberī meī, iuvāte mē!”',
        'Deinde Phoebus dīxit: “Satis! Longa querella est mora poenae.” Tum celeriter Diāna et Phoebus per āera ad rēgiam rēgīnae volant.',
        'Campus plānus erat prope moenia rēgiae. Hīc, dum fīliī rēgīnae equōs suōs exercent, Phoebus septem fīliōs necat. Puerōs sagittīs necat. Fāma factī malī et lacrimae amīcōrum rēgīnae fābulam ruīnae nārrant. “Ō Lātōna,” dīxit Nīobē, “septem fūnera habeō, sed etiam mihi sunt plūs quam tibi. Etiam septem fīliās habeō.”',
        'Nunc Lātōna erat iterum īrāta. Fīliam Diānam vocat, “Iuvā mē, Diāna!” dīxit Lātōna. Et Diāna sex fīliās necat. Nunc Nīobē potentiam Lātōnae videt. Nīobē lacrimīs multīs vītam ultimae fīliae rogat. “Relinque ūnam minimamque,” clāmat. Sed Diāna ultimam fīliam quoque sagittā necat. Dum Nīobē lacrimat, in statuam congelat; etiam nunc lacrimae manant.',
      ],
      notes: [
        { term: 'maximē īrāta', gloss: 'very angry, furious.' },
        { term: 'profānum', gloss: 'profane, wicked; from prō, “before, outside,” and fānum, “temple” — not sacred.' },
        { term: 'mora poenae', gloss: 'a delay of punishment; longa querella est mora poenae — a long complaint delays the punishment.' },
        { term: 'per āera', gloss: 'through the air; āēr is Greek, and its accusative singular is āera.' },
        { term: 'moenia rēgiae', gloss: 'the walls of the palace; moenia is plural in form.' },
        { term: 'equōs suōs exercent', gloss: 'are exercising their horses — suus refers to the subject, the sons of the queen.' },
        { term: 'sagittīs', gloss: 'with arrows — ablative of means.' },
        { term: 'mihi sunt plūs quam tibi', gloss: 'literally “there are more to me than to you,” i.e. I have more than you.' },
        { term: 'fūnera', gloss: 'funerals, deaths; the plural of fūnus, -eris, n.' },
        { term: 'congelat', gloss: 'she stiffens, freezes. Not to be confused with maneō, manēre, remain.' },
        { term: 'lacrimae manant', gloss: 'her tears flow; manō, -āre means flow.' },
      ],
    },
  ],
  grammar: [
    {
      id: 'adiectiva-primae-secundae',
      latinTitle: 'Adiectīva Prīmae et Secundae Dēclīnātiōnis',
      title: 'First and Second Declension Adjectives',
      intro:
        'Adjectives like bonus, bona, bonum take first declension endings in the feminine and second declension endings ' +
        'in the masculine and neuter. Since the adjective agrees with its noun in gender, number and case, all the forms must be learned.',
      paradigms: [
        {
          caption: 'bonus, bona, bonum',
          head: ['', 'M.', 'F.', 'N.'],
          rows: [
            ['Sing. Nōm.', 'bonus', 'bona', 'bonum'],
            ['Gen.', 'bonī', 'bonae', 'bonī'],
            ['Dat.', 'bonō', 'bonae', 'bonō'],
            ['Acc.', 'bonum', 'bonam', 'bonum'],
            ['Abl.', 'bonō', 'bonā', 'bonō'],
            ['Plūr. Nōm.', 'bonī', 'bonae', 'bona'],
            ['Gen.', 'bonōrum', 'bonārum', 'bonōrum'],
            ['Dat.', 'bonīs', 'bonīs', 'bonīs'],
            ['Acc.', 'bonōs', 'bonās', 'bona'],
            ['Abl.', 'bonīs', 'bonīs', 'bonīs'],
          ],
        },
      ],
      points: [
        'The same endings serve for magnus, parvus, longus, meus, tuus, suus and most other adjectives of this type.',
        'The adjective may stand before or after its noun, but it must always agree with it: fēmina superba, verbum superbum, oculī superbī.',
      ],
    },
    {
      id: 'ablativus-instrumenti',
      latinTitle: 'Ablātīvus Īnstrūmentī',
      title: 'The Ablative of Means',
      intro:
        'The ablative case is used without a preposition to name the means or instrument by which something is done. ' +
        'English usually translates it with “with” or “by means of.”',
      paradigms: [
        {
          caption: 'ablative of means',
          head: ['Latīnē', 'Anglicē'],
          rows: [
            ['Phoebus fīliōs sagittīs necat.', 'Phoebus kills the sons with his arrows.'],
            ['Nīobē lacrimīs vītam fīliae rogat.', 'Niobe begs for her daughter’s life with tears.'],
            ['Poēta fābulā līberōs docet.', 'The poet teaches the children by means of a story.'],
          ],
        },
      ],
      points: [
        'Do not use cum with the ablative of means: sagittīs, not cum sagittīs.',
        'The ablative is also used after certain prepositions, for example in, dē and cum: in viā, dē puellā, cum amīcā.',
      ],
    },
    {
      id: 'vocativus',
      latinTitle: 'Vocātīvus',
      title: 'The Vocative Case',
      intro:
        'The vocative is used in direct address. Almost every vocative is identical with the nominative; the one regular ' +
        'exception is the masculine singular of second declension nouns in -us, which ends in -e.',
      paradigms: [
        {
          caption: 'nominative and vocative',
          head: ['', 'Nōm.', 'Voc.'],
          rows: [
            ['amīcus', 'amīcus', 'amīce'],
            ['dominus', 'dominus', 'domine'],
            ['fīlius', 'fīlius', 'fīlī'],
            ['Diāna', 'Diāna', 'Diāna'],
            ['populus', 'populus', 'popule'],
          ],
        },
      ],
      points: [
        'Ō Phoebe, ō Diāna, iuvāte mē. — Oh Phoebus, oh Diana, help me.',
        'Names in -ius form the vocative in -ī: Vergilius becomes Vergilī; fīlius becomes fīlī.',
        'The interjection ō often accompanies the vocative but is not required.',
      ],
    },
    {
      id: 'accusativus-cum-praepositionibus',
      latinTitle: 'Accūsātīvus cum Praepositiōnibus',
      title: 'Prepositions with the Accusative',
      intro:
        'Some prepositions govern the accusative: the object of the preposition stands in the accusative case. ' +
        'These prepositions commonly express motion toward, extent through, or nearness.',
      paradigms: [
        {
          caption: 'prepositions with the accusative',
          head: ['Praepositiō', 'Significātiō', 'Exemplum'],
          rows: [
            ['ad', 'to, toward', 'ad rēgiam'],
            ['per', 'through', 'per āera'],
            ['prope', 'near, close to', 'prope moenia'],
            ['in', 'into, onto (+ acc.)', 'in silvam'],
            ['post', 'after, behind', 'post fābulam'],
          ],
        },
      ],
      points: [
        'The same preposition in may take the ablative to express place where: in silvā, in oppidō.',
        'Learn each preposition together with its case: ad, per and prope always take the accusative.',
      ],
    },
    {
      id: 'verba-composita',
      latinTitle: 'Verba Composita',
      title: 'Compound Verbs',
      intro:
        'Many Latin verbs are formed from one root with different prefixes, usually prepositions. ' +
        'Recognising the prefix and the root allows you to work out the meaning of a new compound from the context.',
      paradigms: [
        {
          caption: 'compounds of vocō, vocāre, call',
          head: ['Verbum', 'Significātiō'],
          rows: [
            ['advocō', 'call to, summon, invite'],
            ['convocō', 'call together, convoke, assemble'],
            ['dēvocō', 'call off, call away, call down'],
            ['ēvocō', 'call out, evoke'],
            ['invocō', 'call upon, invoke'],
            ['prōvocō', 'call forth, summon, challenge'],
          ],
        },
      ],
      points: [
        'The prefix usually keeps its own meaning: con- “together,” ad- “to,” ē- “out,” in- “upon.”',
        'Other examples from the lesson: praestat, “stands before, surpasses,” and circumspectat, “looks around.”',
      ],
    },
  ],
  vocabulary: [
    { latin: 'āēr, āeris', english: 'air (Greek acc. sing. āera)', pos: 'noun m.' },
    { latin: 'campus, -ī', english: 'field', pos: 'noun m.' },
    { latin: 'equus, -ī', english: 'horse', pos: 'noun m.' },
    { latin: 'fūnus, -eris', english: 'funeral; (pl. fūnera) funerals', pos: 'noun n.' },
    { latin: 'lacrima, -ae', english: 'tear', pos: 'noun f.' },
    { latin: 'māter, mātris', english: 'mother', pos: 'noun f.' },
    { latin: 'moenia, -ium', english: 'walls, fortifications', pos: 'noun n. pl.' },
    { latin: 'mora, -ae', english: 'delay', pos: 'noun f.' },
    { latin: 'poena, -ae', english: 'punishment', pos: 'noun f.' },
    { latin: 'populus, -ī', english: 'people', pos: 'noun m.' },
    { latin: 'querella, -ae', english: 'complaint', pos: 'noun f.' },
    { latin: 'ruīna, -ae', english: 'ruin, disaster', pos: 'noun f.' },
    { latin: 'sagitta, -ae', english: 'arrow', pos: 'noun f.' },
    { latin: 'schola, -ae', english: 'school, class', pos: 'noun f.' },
    { latin: 'statua, -ae', english: 'statue', pos: 'noun f.' },
    { latin: 'verbum, -ī', english: 'word', pos: 'noun n.' },
    { latin: 'congelō, -āre, -āvī, -ātum', english: 'freeze, stiffen, congeal', pos: 'verb' },
    { latin: 'convocō, -āre, -āvī, -ātum', english: 'call together, summon', pos: 'verb' },
    { latin: 'exerceō, -ēre, -uī, -itum', english: 'train, exercise', pos: 'verb' },
    { latin: 'honōrō, -āre, -āvī, -ātum', english: 'honour', pos: 'verb' },
    { latin: 'iuvō, -āre, iūvī, iūtum', english: 'help, aid', pos: 'verb' },
    { latin: 'lacrimō, -āre, -āvī, -ātum', english: 'cry, weep', pos: 'verb' },
    { latin: 'relinquō, -ere, relīquī, relictum', english: 'leave, leave behind', pos: 'verb' },
    { latin: 'rogō, -āre, -āvī, -ātum', english: 'ask, beg for', pos: 'verb' },
    { latin: 'volō, -āre, -āvī, -ātum', english: 'fly', pos: 'verb' },
    { latin: 'meus, -a, -um', english: 'my', pos: 'adj.' },
    { latin: 'plānus, -a, -um', english: 'equal, level, even, flat', pos: 'adj.' },
    { latin: 'profānus, -a, -um', english: 'wicked, evil', pos: 'adj.' },
    { latin: 'ultimus, -a, -um', english: 'last', pos: 'adj.' },
    { latin: 'ad', english: 'to, toward, near (+ acc.)', pos: 'prep.' },
    { latin: 'celeriter', english: 'quickly', pos: 'adv.' },
    { latin: 'hodiē', english: 'today', pos: 'adv.' },
    { latin: 'magis', english: 'more', pos: 'adv.' },
    { latin: 'ō', english: 'oh', pos: 'interjection' },
    { latin: 'per', english: 'through (+ acc.)', pos: 'prep.' },
    { latin: 'plūs', english: 'more', pos: 'adv.' },
    { latin: 'prope', english: 'near, close to (+ acc.)', pos: 'prep.' },
    { latin: 'quot', english: 'how many, how much', pos: 'adj.' },
    { latin: 'quam', english: 'than', pos: 'conjunction' },
    { latin: 'satis', english: 'enough', pos: 'adv.' },
    { latin: 'tum', english: 'then', pos: 'adv.' },
    { latin: 'ubi', english: 'when, while, where', pos: 'conjunction' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PĒNSVM A',
      title: 'Respondēte Latīnē',
      instruction: 'Answer each question with a complete Latin sentence, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'Habēsne casam pulchram?', a: 'Ita, casam pulchram habeō.' },
        { q: 'Habēsne vītam bonam?', a: 'Ita, vītam bonam habeō.' },
        { q: 'Habēsne equum bonum? currum automatum bonum?', a: 'Equum bonum nōn habeō, sed currum automatum bonum habeō.' },
        { q: 'Habēsne amīcum bonum?', a: 'Ita, amīcum bonum habeō.' },
        { q: 'Habēmusne oppidum pulchrum?', a: 'Ita, oppidum pulchrum habēmus.' },
        { q: 'Habetne Phoebus sagittās?', a: 'Ita, Phoebus sagittās habet.' },
        { q: 'Habēsne sagittās?', a: 'Nōn sagittās habeō.' },
        { q: 'Habēsne experientiam bonam in scholā?', a: 'Ita, experientiam bonam in scholā habeō.' },
        { q: 'Habēsne lacrimās?', a: 'Nōn semper lacrimās habeō.' },
        { q: 'Habēsne septem fīliās?', a: 'Septem fīliās nōn habeō.' },
      ],
    },
    {
      id: 'pensum-b',
      latinLabel: 'PĒNSVM B',
      title: 'Singulāris et Plūrālis',
      instruction: 'Change each singular phrase to the plural, keeping the same case.',
      type: 'fill',
      items: [
        'Nōm. vīta bona → {{vītae bonae}}; Gen. vītae bonae → {{vītārum bonārum}}; Dat. vītae bonae → {{vītīs bonīs}}.',
        'Acc. vītam bonam → {{vītās bonās}}; Abl. vītā bonā → {{vītīs bonīs}}.',
        'Nōm. amīcus famōsus → {{amīcī famōsī}}; Gen. amīcī famōsī → {{amīcōrum famōsōrum}}; Dat. amīcō famōsō → {{amīcīs famōsīs}}.',
        'Acc. amīcum famōsum → {{amīcōs famōsōs}}; Abl. amīcō famōsō → {{amīcīs famōsīs}}.',
        'Nōm. dōnum sacrum → {{dōna sacra}}; Gen. dōnī sacrī → {{dōnōrum sacrōrum}}; Dat. dōnō sacrō → {{dōnīs sacrīs}}.',
        'Acc. dōnum sacrum → {{dōna sacra}}; Abl. dōnō sacrō → {{dōnīs sacrīs}}.',
      ],
    },
    {
      id: 'pensum-c',
      latinLabel: 'PĒNSVM C',
      title: 'Cāsūs et Vocātīvus',
      instruction: 'Supply the correct case of the noun or adjective, using the ablative of means where the English says “with” or “by means of.”',
      type: 'fill',
      items: [
        'Phoebus et Diāna līberōs {{sagittīs suīs}} necābant. (by means of their arrows)',
        'Lātōna fēminīs {{verbīs superbīs}} dīxit. (with proud words)',
        'Poēta līberōs {{fābulā}} docet. (by means of a story)',
        '{{Lacrimīs suīs}} Lātōna poenam fēminae superbae rogat. (by her tears)',
        '{{Oculīs suīs}} Nīobē vītam ultimae fīliae ōrat. (with her eyes)',
        'Nīobē {{oculīs superbīs}} circumspectat. (with proud eyes)',
        'Vocāte, {{fēminae}}, fīliōs.',
        'Exercēte, {{puerī}}, equōs in campō.',
        'Iuvā mē, ō {{Phoebe}}!',
        'Ō {{popule}}, spectā ruīnam meam.',
        'Honōrā, {{fīlia mea}}, deōs.',
      ],
    },
  ],
}

export default chapter
