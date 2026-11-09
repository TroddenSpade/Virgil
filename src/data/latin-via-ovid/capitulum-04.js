// Capitulum IV — MINERVA ET ARACHNE
// Source: Goldman & Nyenhuis, Latin via Ovid: A First Course (2nd ed., 1982)
// Reading text, notes, grammar and exercises adapted for the web.

const chapter = {
  number: 4,
  roman: 'IV',
  slug: 'minerva-et-arachne-2',
  latinTitle: 'MINERVA ET ARACHNE',
  title: 'Minerva and Arachne (Part 2)',
  tagline: 'Arachne denies the goddess, and Minerva comes to her in the form of an old woman.',
  status: 'complete',
  overview:
    'The fourth lesson carries the contest of Minerva and Arachne to its outbreak. Arachne denies that ' +
    'Minerva is her teacher, boasts that she weaves better than the goddess, and challenges her to compete. ' +
    'Minerva puts on the shape of a woman, warns her, and is answered with fresh arrogance. The grammar ' +
    'introduces the infinitive, the present indicative of the first two conjugations, the irregular verb sum, ' +
    'the dative of the indirect object, the ablative after prepositions, the imperative, the vocative and ' +
    'the enclitic -que.',
  objectives: [
    'Read the second part of the story of Minerva and Arachne.',
    'Use the infinitive, including the complementary infinitive after verbs of desire and obligation.',
    'Conjugate first- and second-conjugation verbs in the present indicative.',
    'Give the present tense of sum, esse.',
    'Recognise the dative of the indirect object and the ablative after prepositions.',
    'Give commands and address a person in the vocative; use -que for "and".',
  ],
  readings: [
    {
      id: 'minerva-et-arachne',
      latinTitle: 'MINERVA ET ARACHNE',
      title: 'Minerva and Arachne',
      paragraphs: [
        'Sed Arachne sapientiam nōn habet. Negat Minervam magistram. Puella temerāria sē laudat et clāmat, "Formō pictūrās fābulāsque melius quam Minerva. Nēmō mihi magistra est. Minervam nōn vocō. Nēmō mē docet. Mē doceō."',
        'Dea Minerva fōrmam fēminae simulat et in terrā ambulat. Puellam temerāriam docēre temptat. Dīxit, "Superbia est perīculōsa. Experientia docet." Sed Arachne iterum affirmat, "Formō pictūrās melius quam Minerva. Dea debet certāre mēcum. Nymphīs pictūrās meās mōnstrāre dēbeō, et dea pictūrās suās mōnstrāre debet. Nunc Minervam vocō. Certā mēcum!"',
        'Minerva est īrāta. Sē esse deam mōnstrat. "Arachne, es stulta. Tē, puella temerāria, docēre temptō," dīxit, "sed es etiam superba. Tē docēre dēbeō. Portāte, nymphae, tēlās hūc, quaesō."',
      ],
      notes: [
        { term: 'negat Minervam magistram', gloss: '"she denies that Minerva is her teacher": negat introduces an accusative-and-infinitive.' },
        { term: 'temerāria', gloss: 'rash, reckless.' },
        { term: 'melius quam', gloss: 'better than: melius quam Minerva — better than Minerva.' },
        { term: 'nēmō', gloss: 'no one; dative nēminī, accusative nēminem.' },
        { term: 'mē doceō', gloss: '"I teach myself": mē is the reflexive object of the same verb.' },
        { term: 'fōrmam fēminae simulat', gloss: 'she pretends the shape of a woman, takes a woman\'s form.' },
        { term: 'superbia, -ae', gloss: 'pride, arrogance — the hubris that the gods punish.' },
        { term: 'experientia docet', gloss: '"experience teaches", a proverb.' },
        { term: 'certā mēcum', gloss: '"contend with me"; cum with a pronoun is reversed and joined: mēcum, tēcum, sēcum.' },
        { term: 'tēla, -ae', gloss: 'loom; not to be confused with tēlum, a weapon.' },
        { term: 'quaesō', gloss: '"please", literally "I ask".' },
        { term: 'sē esse deam', gloss: '"that she is a goddess": accusative-and-infinitive after mōnstrat.' },
      ],
    },
  ],
  grammar: [
    {
      id: 'infinitivus',
      latinTitle: 'Infīnītīvus',
      title: 'The Infinitive',
      intro:
        'The infinitive of most verbs ends in -re and means "to do something". The stem is found by dropping ' +
        'the -re. Verbs in -āre belong to the first conjugation, verbs in -ēre to the second. The infinitive ' +
        'often completes the meaning of a verb of desire or obligation — the complementary infinitive.',
      paradigms: [
        {
          caption: 'infinitives and stems',
          head: ['Coniugātiō', 'Infīnītīvus', 'Stemma', 'Significātiō'],
          rows: [
            ['prīma', 'amāre', 'amā-', 'to love'],
            ['prīma', 'laudāre', 'laudā-', 'to praise'],
            ['prīma', 'vocāre', 'vocā-', 'to call'],
            ['secunda', 'docēre', 'docē-', 'to teach'],
            ['secunda', 'habēre', 'habē-', 'to have'],
            ['secunda', 'dēbēre', 'dēbē-', 'to owe, ought'],
          ],
        },
      ],
      points: [
        'Ambulāre dēsīderō. — "I desire to walk."',
        'Deam vocāre dēbeō. — "I ought to call the goddess."',
        'The complementary infinitive completes verbs such as dēsīderō, dēbeō, temptō and possum.',
        'The stem is the infinitive without -re: vocā-re, docē-re. The personal endings are added to this stem.',
      ],
    },
    {
      id: 'praesens-indicativum',
      latinTitle: 'Praesēns Indicātīvum',
      title: 'The Present Indicative',
      intro:
        'The indicative mood states a fact or asks whether something is a fact. Its personal endings show ' +
        'who acts and whether the subject is one or many. The first conjugation keeps -ā- before the endings; ' +
        'the second keeps -ē-. The verb sum, esse is irregular.',
      paradigms: [
        {
          caption: 'vocō, vocāre — first conjugation',
          head: ['Persōna', 'Singulāris', 'Plūrālis'],
          rows: [
            ['1', 'vocō — I call', 'vocāmus — we call'],
            ['2', 'vocās — you call', 'vocātis — you call'],
            ['3', 'vocat — he/she/it calls', 'vocant — they call'],
          ],
        },
        {
          caption: 'dēbeō, dēbēre — second conjugation',
          head: ['Persōna', 'Singulāris', 'Plūrālis'],
          rows: [
            ['1', 'dēbeō — I owe', 'dēbēmus — we owe'],
            ['2', 'dēbēs — you owe', 'dēbētis — you owe'],
            ['3', 'dēbet — he/she/it owes', 'dēbent — they owe'],
          ],
        },
        {
          caption: 'sum, esse — to be',
          head: ['Persōna', 'Singulāris', 'Plūrālis'],
          rows: [
            ['1', 'sum — I am', 'sumus — we are'],
            ['2', 'es — you are', 'estis — you are'],
            ['3', 'est — he/she/it is', 'sunt — they are'],
          ],
        },
      ],
      points: [
        'The personal endings are -ō / -m, -s, -t, -mus, -tis, -nt.',
        'Each form may be translated simply, progressively or emphatically: vocat — "calls", "is calling", "does call".',
        'The vowel is short before final -t and -nt: vocat, vocant, docet, docent.',
        'The infinitive of sum is esse, "to be"; do not confuse sum ("I am") with the progressive "I am calling".',
        'Principal parts are listed as present, infinitive, perfect and perfect passive participle: portō, portāre, portāvī, portātum; habeō, habēre, habuī, habitum.',
      ],
    },
    {
      id: 'dativus',
      latinTitle: 'Cāsus Datīvus',
      title: 'The Dative: Indirect Object',
      intro:
        'The indirect object is the person to whom or for whom something is done, and stands in the dative. ' +
        'English may express it with "to" or "for"; Latin uses the case alone, never a preposition.',
      paradigms: [
        {
          caption: 'dative singular and plural',
          head: ['Dēclīnātiō', 'Singulāris', 'Plūrālis', 'Exemplum'],
          rows: [
            ['prīma', 'puellae', 'puellīs', 'Minerva puellae sapientiam dat.'],
            ['secunda', 'amīcō', 'amīcīs', 'Nymphīs pictūrās mōnstrāre dēbeō.'],
          ],
        },
      ],
      points: [
        'Minerva puellae sapientiam dat. — "Minerva gives the girl wisdom" or "gives wisdom to the girl".',
        'Nymphīs pictūrās meās mōnstrāre dēbeō. — "I ought to show my pictures to the nymphs."',
        'The dative often stands before the accusative, but the ending, not the order, marks it.',
      ],
    },
    {
      id: 'ablativus',
      latinTitle: 'Cāsus Ablātīvus',
      title: 'The Ablative after Prepositions',
      intro:
        'The ablative is the case used as the object of certain prepositions. The vocabulary always tells ' +
        'which case a preposition governs. With a pronoun, cum is attached to the end of the pronoun and the ' +
        'order is reversed.',
      points: [
        'in Lydiā — "in Lydia"; dē vītā — "about the life"; cum puellā — "with the girl".',
        'But mēcum — "with me"; tēcum — "with you"; sēcum — "with himself".',
        'The ablative of the first declension ends in -ā singular and -īs plural.',
        'Do not confuse in with the ablative ("in, on") and in with the accusative ("into").',
      ],
    },
    {
      id: 'imperativus-vocativus-que',
      latinTitle: 'Imperātīvus, Vocātīvus, -que',
      title: 'Commands, the Vocative, and -que',
      intro:
        'The imperative gives a command: the singular is the bare stem, the plural adds -te. The person ' +
        'addressed stands in the vocative, which looks like the nominative. The enclitic -que, attached to ' +
        'the second of two words, means "and".',
      paradigms: [
        {
          caption: 'imperative singular and plural',
          head: ['Singulāris', 'Plūrālis'],
          rows: [
            ['Portā tēlās. — Carry the looms.', 'Portāte tēlās. — Carry the looms (to several).'],
            ['Docē mē. — Teach me.', 'Docēte mē. — Teach me (to several).'],
            ['Salvē, discipule! — Greetings, student!', 'Salvēte, discipulī! — Greetings, students!'],
          ],
        },
      ],
      points: [
        'The vocative usually stands after the first word: Tē, puella temerāria, docēre temptō.',
        'Portāte, nymphae, tēlās hūc. — "Nymphs, carry the looms here."',
        '-que is attached to the end of the second word: nymphae puellaeque — "the nymphs and the girls".',
        'Puella sē laudat clāmatque. — "The girl praises herself and shouts."',
      ],
    },
  ],
  vocabulary: [
    { latin: 'domina, -ae', english: 'lady, mistress of the household', pos: 'noun f.' },
    { latin: 'dominus, -ī', english: 'lord, master, mister', pos: 'noun m.' },
    { latin: 'experientia, -ae', english: 'experience', pos: 'noun f.' },
    { latin: 'fēmina, -ae', english: 'woman', pos: 'noun f.' },
    { latin: 'fōrma, -ae', english: 'form, shape', pos: 'noun f.' },
    { latin: 'nōmen, nōminis', english: 'name', pos: 'noun n.' },
    { latin: 'superbia, -ae', english: 'pride, arrogance', pos: 'noun f.' },
    { latin: 'tēla, -ae', english: 'loom', pos: 'noun f.' },
    { latin: 'affirmō, -āre', english: 'affirm, assert', pos: 'verb' },
    { latin: 'ambulō, -āre', english: 'walk', pos: 'verb' },
    { latin: 'certō, -āre', english: 'contend, vie with, struggle', pos: 'verb' },
    { latin: 'dēbeō, -ēre', english: 'ought, owe, should', pos: 'verb' },
    { latin: 'dīxit', english: 'he/she/it said', pos: 'verb' },
    { latin: 'doceō, -ēre', english: 'teach', pos: 'verb' },
    { latin: 'esse', english: 'to be', pos: 'verb' },
    { latin: 'habeō, -ēre', english: 'have, hold', pos: 'verb' },
    { latin: 'mōnstrō, -āre', english: 'show, point out', pos: 'verb' },
    { latin: 'negō, -āre', english: 'deny, say that ... not', pos: 'verb' },
    { latin: 'quaesō', english: 'please (literally, I ask)', pos: 'verb' },
    { latin: 'respondeō, -ēre', english: 'reply, respond, answer', pos: 'verb' },
    { latin: 'scrībite', english: 'write (plural command)', pos: 'verb' },
    { latin: 'simulō, -āre', english: 'imitate, copy, pretend, take the form of', pos: 'verb' },
    { latin: 'temptō, -āre', english: 'try, attempt', pos: 'verb' },
    { latin: 'vocō, -āre', english: 'call, summon', pos: 'verb' },
    { latin: 'īrātus, -a, -um', english: 'angry, irate', pos: 'adj.' },
    { latin: 'meus, -a, -um', english: 'my', pos: 'adj.' },
    { latin: 'perīculōsus, -a, -um', english: 'dangerous', pos: 'adj.' },
    { latin: 'stultus, -a, -um', english: 'stupid, foolish', pos: 'adj.' },
    { latin: 'suus, -a, -um', english: 'his own, her own, its own, their own', pos: 'adj.' },
    { latin: 'temerārius, -a, -um', english: 'rash, reckless', pos: 'adj.' },
    { latin: 'etiam', english: 'still, yet, even', pos: 'adverb' },
    { latin: 'hūc', english: 'to this place, here', pos: 'adverb' },
    { latin: 'iterum', english: 'again', pos: 'adverb' },
    { latin: 'melius quam', english: 'better than', pos: 'phrase' },
    { latin: 'mihi', english: 'to me, for me (dative)', pos: 'pronoun' },
    { latin: 'nēmō', english: 'no one', pos: 'pronoun' },
    { latin: '-que', english: 'and (attached to the second of two words)', pos: 'particle' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PĒNSVM A',
      title: 'Questions',
      instruction: 'Answer each question in a complete Latin sentence, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'Habetne Arachne sapientiam?', a: 'Arachne sapientiam nōn habet.' },
        { q: 'Laudatne Arachne deam?', a: 'Arachne deam nōn laudat; sē laudat.' },
        { q: 'Quid Arachne clāmat?', a: 'Arachne clāmat sē pictūrās melius quam Minervam formāre.' },
        { q: 'Simulatne Minerva fōrmam fēminae?', a: 'Ita, Minerva fōrmam fēminae simulat.' },
        { q: 'Ubi Minerva ambulat?', a: 'Minerva in terrā ambulat.' },
        { q: 'Temptatne Minerva puellam docēre?', a: 'Ita, puellam temerāriam docēre temptat.' },
        { q: 'Estne experientia magistra bona?', a: 'Ita, experientia docet; magistra bona est.' },
        { q: 'Quid dīxit Arachne Minervae?', a: 'Dīxit sē melius quam Minervam formāre et deam sēcum certāre dēbēre.' },
        { q: 'Estne Minerva īrāta?', a: 'Ita, Minerva est īrāta.' },
        { q: 'Quid dīxit Minerva nymphīs?', a: '"Portāte, nymphae, tēlās hūc, quaesō," dīxit.' },
      ],
    },
    {
      id: 'pensum-b',
      latinLabel: 'PĒNSVM B',
      title: 'Verbs, datives and ablatives',
      instruction: 'Supply the correct verb form, dative or ablative required by the sentence.',
      type: 'fill',
      items: [
        'vocō, vocāre: (we) {{vocāmus}}.',
        'vocō, vocāre: (you, singular) {{vocās}}.',
        'vocō, vocāre: (they) {{vocant}}.',
        'doceō, docēre: (she) {{docet}}.',
        'doceō, docēre: (you, plural) {{docētis}}.',
        'dēbeō, dēbēre: (I) {{dēbeō}}.',
        'sum, esse: (we) {{sumus}}.',
        'sum, esse: (you, plural) {{estis}}.',
        'Minerva (to the girl) sapientiam dat. → Minerva {{puellae}} sapientiam dat.',
        'Puella (to the goddess) pictūram dat. → Puella {{deae}} pictūram dat.',
        'Nymphae (to Minerva) tēlās dant. → Nymphae {{Minervae}} tēlās dant.',
        'Quis est magistra (to you)? → Quis est magistra {{tibi}}?',
        'Agricola (to the woman) terram dat. → Agricola {{fēminae}} terram dat.',
        'Dea (to the farmers) terram dat. → Dea {{agricolīs}} terram dat.',
        'Nympha (to the women) fābulam nārrat. → Nympha {{fēminīs}} fābulam nārrat.',
        'Agricolae (to the land) nōmen dant. → Agricolae {{terrae}} nōmen dant.',
        'Dea (to the inhabitants) Lydiae casās dat. → Dea {{incolīs}} Lydiae casās dat.',
        'Magistra (to the girl) lānam dat. → Magistra {{puellae}} lānam dat.',
        'in (the house) → in {{casā}}',
        'dē (the life) → dē {{vītā}}',
        'cum (Minerva) → cum {{Minervā}}',
        'in (Lydia) → in {{Lydiā}}',
        'dē (the pictures) → dē {{pictūrīs}}',
        'dē (the farmers) → dē {{agricolīs}}',
        'in (the shape) → in {{fōrmā}}',
        'cum (the nymph) → cum {{nymphā}}',
      ],
    },
    {
      id: 'pensum-c',
      latinLabel: 'PĒNSVM C',
      title: 'Translate into Latin',
      instruction: 'Render each English sentence in Latin, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'The house is small, but it is pretty.', a: 'Casa parva est, sed pulchra est.' },
        { q: 'The girls are angry about the story.', a: 'Puellae dē fābulā sunt īrātae.' },
        { q: 'The stories are new.', a: 'Fābulae sunt novae.' },
        { q: 'We are telling tales to the little girls.', a: 'Fābulās puellīs parvīs nārrāmus.' },
        { q: 'Minerva walks on earth in the form of a woman.', a: 'Minerva in fōrmā fēminae in terrā ambulat.' },
        { q: '"No one is my teacher; I teach myself," said Arachne.', a: '"Nēmō mihi magistra est; mē doceō," Arachne dīxit.' },
        { q: 'The goddess is trying to teach the rash girl.', a: 'Dea puellam temerāriam docēre temptat.' },
        { q: 'Experience teaches.', a: 'Experientia docet.' },
        { q: 'The goddess ought to show her pictures to me.', a: 'Dea pictūrās suās mihi mōnstrāre debet.' },
        { q: 'Minerva ought to teach the girl.', a: 'Minerva puellam docēre debet.' },
        { q: 'We ought to give houses to the inhabitants of Lydia.', a: 'Incolīs Lydiae casās dare dēbēmus.' },
        { q: 'Give me wisdom, goddess.', a: 'Dā mihi sapientiam, dea.' },
        { q: 'What is your name, little girl?', a: 'Quid est nōmen tibi, puella parva?' },
        { q: 'Work with me, farmers.', a: 'Labōrāte mēcum, agricolae.' },
      ],
    },
  ],
}

export default chapter
