// Capitulum XII — PHILEMON ET BAUCIS
// Source: Goldman & Nyenhuis, Latin via Ovid: A First Course (2nd ed., 1982)
// Reading text, vocabulary, grammar and exercises adapted for the web.
// Long vowels are marked with macra.

const chapter = {
  number: 12,
  roman: 'XII',
  slug: 'philemon-et-baucis-2',
  latinTitle: 'PHILEMON ET BAUCIS',
  title: 'Philemon and Baucis (Part 2)',
  tagline: 'The gods reward the pious old couple and punish the wicked village.',
  status: 'complete',
  overview:
    'The second half of the tale of Philemon and Baucis. The gods reveal themselves, destroy the wicked ' +
    'village, transform the cottage into a temple, and grant the old couple their wishes. The chapter ' +
    'introduces common-gender and neuter third-declension nouns, the accusative-with-infinitive after videō, ' +
    'the third conjugation, negative commands, adjectives used as nouns, and the past perfect tense.',
  objectives: [
    'Read the conclusion of the story of Philemon and Baucis.',
    'Recognise common-gender nouns and neuter third-declension nouns.',
    'Use videō with an accusative and infinitive: videō deōs appropinquāre.',
    'Conjugate third-conjugation verbs and give negative commands with nōlī and nōlīte.',
    'Understand adjectives used as nouns and form the past perfect (pluperfect) tense.',
  ],
  readings: [
    {
      id: 'miraculum-et-praemium',
      latinTitle: 'MĪRĀCULUM ET PRAEMIUM',
      title: 'The Miracle and the Reward',
      paragraphs: [
        'Sed post cēnam duo, senex et coniūnx, mīrāculum vīdērunt. Vīnum et cibus etiam erant in crātēribus! Baucis pia et Philēmōn timidus timent et deōs ōrant. Duōbus senibus anser erat; Baucis et Philēmōn anserem prehendere et necāre temptābant, sacrificium deīs. Anser autem fugitāvit ad deōs quī dīxērunt: "Nōlīte anserem necāre. Sumus dī, Iuppiter et Mercurius. Malum oppidum vāstāre dēbēmus. Sed vōbīs praemium dabimus."',
        'Iuppiter oppidum malum in stagnum et hominēs impiōs in piscēs trānsformāvit; casam autem duōrum senum piōrum in templum trānsformāvit. Duōbus senibus dīxit: "Quid dēsīderātis, senex iūste et fēmina pia?" Senēs respondērunt: "Dēsīderāmus sacerdōtēs in templō Iovis esse, et quoniam multōs annōs beātōs inter nōs habuimus, morī dēsīderāmus eādem hōrā."',
        'Itaque Philēmōn et Baucis erant custōdēs templī tam diū quam vīvunt. Sed ōlim dum duo piī prō templō stant, Philēmōn coniugem frondēre et Baucis Philēmōnem frondēre vīdit. "Valē, coniūnx," dīxit Philēmōn, dīxit Baucis; deinde arbor ōra cēlāvit. Eōs in arborēs Iuppiter trānsformāverat. Etiam hodiē hae arborēs in Phrygiā stant prō templō Iovis: ego ipse eās vīdī. Multī in templō ōrant et advenae sunt semper bene receptī. Nōmina Baucidis et Philēmōnis sunt nōta in hāc terrā.',
      ],
      notes: [
        { term: 'duōbus senibus anser erat', gloss: 'the two old people had a goose; duōbus senibus is a dative of possession.' },
        { term: 'sacrificium deīs', gloss: 'as a sacrifice to the gods; sacrificium is in apposition to anserem.' },
        { term: 'fugitāvit', gloss: 'fled, kept fleeing — a frequentative verb from fugiō.' },
        { term: 'nōlīte', gloss: 'do not (plural); the singular is nōlī.' },
        { term: 'eādem hōrā', gloss: 'at the same hour.' },
        { term: 'tam diū quam', gloss: 'as long as.' },
        { term: 'frondēre', gloss: 'to put out leaves, to become leafy.' },
        { term: 'prō templō', gloss: 'before the temple, in front of the temple (+ abl.).' },
        { term: 'hae arborēs', gloss: 'these trees; hae is the feminine nominative plural of hic, haec, hoc.' },
        { term: 'bene receptī', gloss: 'well received, warmly welcomed.' },
      ],
    },
    {
      id: 'dialogus',
      latinTitle: 'DIALOGUS',
      title: 'A Short Dialogue',
      paragraphs: [
        '"Quis abest hodiē?" "Nēmō abest." "Bene est."',
      ],
      notes: [
        { term: 'abest', gloss: 'is absent, is away.' },
        { term: 'nēmō', gloss: 'no one; accusative neminem.' },
        { term: 'bene est', gloss: 'it is well, that is good.' },
      ],
    },
  ],
  grammar: [
    {
      id: 'commune-et-neutrum',
      latinTitle: 'Genus Commūne et Nōmina Neutra',
      title: 'Common Gender and Neuter Third Declension Nouns',
      intro:
        'Nouns which can be either masculine or feminine according to the person meant are of common gender. ' +
        'The third-declension nouns sacerdōs, custōs and coniūnx belong to this group. Neuter nouns of the ' +
        'third declension, such as nōmen and ōs, have the same form in the nominative and accusative, both ' +
        'singular and plural.',
      paradigms: [
        {
          caption: 'common gender',
          head: ['Latin', 'Gender', 'English'],
          rows: [
            ['sacerdōs, sacerdōtis', 'm. (or f.)', 'priest, priestess'],
            ['custōs, custōdis', 'm. & f.', 'guardian, keeper'],
            ['coniūnx, coniugis', 'm. & f.', 'husband, wife, spouse'],
          ],
        },
        {
          caption: 'nōmen, nōminis (n.) — name; ōs, ōris (n.) — mouth',
          head: ['', 'Singulāris', 'Plūrālis'],
          rows: [
            ['Nōm.', 'nōmen / ōs', 'nōmina / ōra'],
            ['Gen.', 'nōminis / ōris', 'nōminum / ōrum'],
            ['Dat.', 'nōminī / ōrī', 'nōminibus / ōribus'],
            ['Acc.', 'nōmen / ōs', 'nōmina / ōra'],
            ['Abl.', 'nōmine / ōre', 'nōminibus / ōribus'],
          ],
        },
      ],
      points: [
        'Common-gender nouns take masculine or feminine adjectives according to the sex of the person: sacerdōs bonus, sacerdōs bona.',
        'In neuter nouns the nominative, accusative and vocative are always alike: nōmen est bonum; nōmen videō.',
        'The plural of neuter nouns ends in -a: nōmina, ōra.',
        'Do not confuse ōs, ōris (mouth) with os, ossis (bone), or with ōra, -ae (shore).',
      ],
    },
    {
      id: 'video-accusativus-infinitivus',
      latinTitle: 'Videō cum Accūsātīvō et Īnfīnītīvō',
      title: 'Videō with an Accusative and Infinitive',
      intro:
        'Videō is often followed by an infinitive whose subject stands in the accusative. English supplies ' +
        '"that" and turns the infinitive into a finite verb: videō deōs appropinquāre — I see that the gods ' +
        'are approaching.',
      paradigms: [
        {
          caption: 'accusative and infinitive after videō',
          head: ['Latin', 'English'],
          rows: [
            ['Deōs appropinquāre videō.', 'I see that the gods are approaching.'],
            ['Hominēs dubitāre videō.', 'I see that the men are doubting.'],
            ['Coniugem frondēre videt.', 'He sees that his wife is putting out leaves.'],
            ['Advenās esse deōs vident.', 'They see that the strangers are gods.'],
          ],
        },
      ],
      points: [
        'The subject of the infinitive is accusative: deōs, hominēs, coniugem, advenās.',
        'The infinitive is translated as an indicative verb after "that".',
        'The same construction is used with other verbs of perceiving and saying.',
        'This construction is closely related to indirect statement.',
      ],
    },
    {
      id: 'coniugatio-tertia-imperativa',
      latinTitle: 'Coniugātiō Tertia et Imperātīva Negātīva',
      title: 'The Third Conjugation and Negative Commands',
      intro:
        'The third-conjugation infinitive ends in -ere. Negative commands are made with nōlī (singular) or ' +
        'nōlīte (plural), the imperative forms of nōlle, to be unwilling, followed by the infinitive.',
      paradigms: [
        {
          caption: 'third conjugation, present tense',
          head: ['', 'dīcō, -ere', 'tendō, -ere', 'prehendō, -ere', 'vīvō, -ere'],
          rows: [
            ['1st sing.', 'dīcō', 'tendō', 'prehendō', 'vīvō'],
            ['2nd sing.', 'dīcis', 'tendis', 'prehendis', 'vīvis'],
            ['3rd sing.', 'dīcit', 'tendit', 'prehendit', 'vīvit'],
            ['1st pl.', 'dīcimus', 'tendimus', 'prehendimus', 'vīvimus'],
            ['2nd pl.', 'dīcitis', 'tenditis', 'prehenditis', 'vīvitis'],
            ['3rd pl.', 'dīcunt', 'tendunt', 'prehendunt', 'vīvunt'],
          ],
        },
        {
          caption: 'negative commands',
          head: ['Latin', 'English'],
          rows: [
            ['Nōlī timēre.', 'Do not fear. (to one person)'],
            ['Nōlīte anserem necāre.', 'Do not kill the goose. (to more than one)'],
            ['Nōlīte dēsīderāre.', 'Do not desire. (to more than one)'],
          ],
        },
      ],
      points: [
        'The third conjugation has a short -e in the infinitive: dīcere, tendere, prehendere, vīvere.',
        'The present stem vowel is -i-, which becomes -u- before -nt: dīcit, but dīcunt.',
        'The imperfect adds -ēba- to the stem: dīcēbam, tendēbam, prehendēbam, vīvēbam.',
        'Nōlī and nōlīte are used only with an infinitive; they are not used with a subjunctive.',
      ],
    },
    {
      id: 'adiectiva-substantiva',
      latinTitle: 'Adiectīva Prō Nōminibus',
      title: 'Adjectives Used as Nouns',
      intro:
        'An adjective may stand in place of a noun; it is then called a substantive. English uses the same ' +
        'device in expressions such as "the rich", "the poor" and "the brave". In Latin the gender of the ' +
        'adjective shows whether men, women or things are meant.',
      paradigms: [
        {
          caption: 'substantive adjectives',
          head: ['Latin', 'English'],
          rows: [
            ['bonī', 'the good men'],
            ['bonae', 'the good women'],
            ['bona', 'the good things, goods'],
            ['multī', 'many men, many people'],
            ['piī', 'the pious ones'],
            ['duo piī', 'the two pious ones'],
            ['malī', 'evil men'],
          ],
        },
      ],
      points: [
        'The masculine plural usually means "the ... men" or "the ... people": bonī, malī, multī.',
        'The feminine plural means "the ... women": bonae, piae.',
        'The neuter plural means "the ... things": bona, mala.',
        'Duo may itself be used as a substantive: duo, the two people.',
      ],
    },
    {
      id: 'plusquamperfectum',
      latinTitle: 'Tempus Praeteritum Perfectum (Plūsquamperfectum)',
      title: 'The Past Perfect (Pluperfect)',
      intro:
        'The past perfect is formed by adding the imperfect forms of sum to the perfect stem: vocāv- + eram ' +
        '= vocāveram, I had called. English uses the auxiliary "had".',
      paradigms: [
        {
          caption: 'vocāveram — I had called; docueram — I had taught',
          head: ['', 'I conjugation', 'II conjugation'],
          rows: [
            ['1st sing.', 'vocāveram', 'docueram'],
            ['2nd sing.', 'vocāverās', 'docuerās'],
            ['3rd sing.', 'vocāverat', 'docuerat'],
            ['1st pl.', 'vocāverāmus', 'docuerāmus'],
            ['2nd pl.', 'vocāverātis', 'docuerātis'],
            ['3rd pl.', 'vocāverant', 'docuerant'],
          ],
        },
      ],
      points: [
        'The perfect stem is found by dropping -ī from the third principal part: vocāvī → vocāv-, docuī → docu-.',
        'The endings -eram, -erās, -erat, -erāmus, -erātis, -erant are the imperfect of esse added to the stem.',
        'Eōs in arborēs Iuppiter trānsformāverat — Jupiter had changed them into trees.',
        'The past perfect describes an action completed before another past action.',
      ],
    },
  ],
  vocabulary: [
    { latin: 'annus, -ī', english: 'year', pos: 'noun m.' },
    { latin: 'anser, anseris', english: 'goose', pos: 'noun m.' },
    { latin: 'cēna, -ae', english: 'dinner, meal', pos: 'noun f.' },
    { latin: 'coniūnx, coniugis', english: 'husband or wife, spouse', pos: 'noun c.' },
    { latin: 'crātēr, crātēris', english: 'bowl', pos: 'noun m.' },
    { latin: 'custōs, custōdis', english: 'guardian, keeper', pos: 'noun c.' },
    { latin: 'homō, -inis', english: 'man, human being', pos: 'noun m.' },
    { latin: 'mīrāculum, -ī', english: 'miracle, wonder', pos: 'noun n.' },
    { latin: 'nōmen, nōminis', english: 'name', pos: 'noun n.' },
    { latin: 'ōs, ōris', english: 'mouth, face', pos: 'noun n.' },
    { latin: 'praemium, -iī', english: 'reward', pos: 'noun n.' },
    { latin: 'sacerdōs, -dōtis', english: 'priest, priestess', pos: 'noun c.' },
    { latin: 'sacrificium, -iī', english: 'sacrifice', pos: 'noun n.' },
    { latin: 'frondeō, -ēre', english: 'put out leaves', pos: 'verb' },
    { latin: 'prehendō, -ere, -hendī, -hēnsum', english: 'catch, seize, grasp', pos: 'verb' },
    { latin: 'timeō, -ēre, -uī', english: 'fear, be afraid of', pos: 'verb' },
    { latin: 'vāstō (1)', english: 'destroy, lay waste', pos: 'verb' },
    { latin: 'vīvō, -ere, vīxī, victum', english: 'live, be alive', pos: 'verb' },
    { latin: 'impius, -a, -um', english: 'wicked, impious', pos: 'adjective' },
    { latin: 'ipse, ipsa, ipsum', english: 'self, himself, herself, itself, themselves', pos: 'pronoun' },
    { latin: 'iūstus, -a, -um', english: 'just, upright, true', pos: 'adjective' },
    { latin: 'receptus, -a, -um', english: 'received, welcomed', pos: 'adjective' },
    { latin: 'timidus, -a, -um', english: 'timid, fearful', pos: 'adjective' },
    { latin: 'eōs, eās', english: 'them (accusative)', pos: 'pronoun' },
    { latin: 'inter', english: 'between, among (+ acc.)', pos: 'preposition' },
    { latin: 'nōs', english: 'we, us', pos: 'pronoun' },
    { latin: 'prō', english: 'in front of, before, for (+ abl.)', pos: 'preposition' },
    { latin: 'quī, quae', english: 'who, which (plural)', pos: 'pronoun' },
    { latin: 'quoniam', english: 'since, because', pos: 'conjunction' },
    { latin: 'semper', english: 'always', pos: 'adverb' },
    { latin: 'sine', english: 'without (+ abl.)', pos: 'preposition' },
    { latin: 'vōbīs', english: 'to you, for you (plural)', pos: 'pronoun' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PĒNSVM A',
      title: 'Respondēte Latīnē',
      instruction: 'Answer each question in a complete Latin sentence, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'Quī mīrāculum vīdērunt?', a: 'Senex et coniūnx mīrāculum vīdērunt.' },
        { q: 'Quid erat mīrāculum?', a: 'Vīnum et cibus etiam in crātēribus erant.' },
        { q: 'Quī anserem servāvērunt?', a: 'Iuppiter et Mercurius anserem servāvērunt.' },
        { q: 'Quī erant advenae?', a: 'Iuppiter et Mercurius advenae erant.' },
        { q: 'Cūr dī oppidum vāstāre dēbent?', a: 'Quod oppidum malum erat et hominēs impiī erant.' },
        { q: 'Cūr dī praemium dare dēbent?', a: 'Quod senēs piī et benignī erant.' },
        { q: 'Quid est praemium senibus?', a: 'Praemium est sacerdōtēs in templō Iovis esse et eādem hōrā morī.' },
        { q: 'Quī sunt custōdēs templī Iovis?', a: 'Philēmōn et Baucis custōdēs templī sunt.' },
        { q: 'Quid nunc est oppidum ubi habitāverant impiī hominēs?', a: 'Nunc stagnum est.' },
        { q: 'Quī sunt arborēs prō templō?', a: 'Philēmōn et Baucis in arborēs trānsformātī sunt.' },
      ],
    },
    {
      id: 'pensum-b',
      latinLabel: 'PĒNSVM B',
      title: 'Accusative and Infinitive',
      instruction: 'Complete each sentence with the accusative and infinitive. Omit the English word "that".',
      type: 'fill',
      items: [
        'Videō deōs {{appropinquāre}}.',
        'Hōram {{fugere}} videō.',
        'Videō Iovem {{rēgem deōrum esse}}.',
        'Baucidem {{arborem esse}} videō.',
        'Multī vident cēnam {{bonam esse}}.',
        'Senēs vident cibum {{manēre}}.',
        'Senēs vident anserem {{ad deōs fugere}}.',
        'Dī vident bonōs {{laetōs esse}}.',
        'Dī vident senēs {{advenīs benignōs esse}}.',
        'Philēmōn videt Baucidem {{frondēre}}.',
      ],
    },
    {
      id: 'pensum-c',
      latinLabel: 'PĒNSVM C',
      title: 'Translate into Latin',
      instruction: 'Render each English sentence in Latin, then reveal the model answer.',
      type: 'questions',
      items: [
        { q: 'Philemon and Baucis saw a miracle after supper.', a: 'Philēmōn et Baucis post cēnam mīrāculum vīdērunt.' },
        { q: 'The bowl was still full of food.', a: 'Crātēr etiam plēnus cibī erat.' },
        { q: 'They wanted to kill their only goose as a sacrifice to the gods.', a: 'Anserem sōlum sacrificium deīs necāre temptābant.' },
        { q: 'The gods changed the wicked men into fish and the town into a lake.', a: 'Dī hominēs impiōs in piscēs et oppidum in stagnum trānsformāvērunt.' },
        { q: 'The gods asked the old people, "What do you wish?"', a: 'Dī senēs rogāvērunt: "Quid dēsīderātis?"' },
        { q: 'The two old people reply, "We wish to die at the same hour."', a: 'Duo senēs respondent: "Eādem hōrā morī dēsīderāmus."' },
        { q: 'The gods change the small cottage into a temple.', a: 'Dī parvam casam in templum trānsformant.' },
        { q: 'Philemon and Baucis are guardians of the temple.', a: 'Philēmōn et Baucis custōdēs templī sunt.' },
        { q: 'Strangers are always well received in the temple.', a: 'Advenae in templō semper bene recipiuntur.' },
        { q: 'Two trees stand before the temple of Jupiter, the guardians Philemon and Baucis.', a: 'Duae arborēs prō templō Iovis stant, custōdēs Philēmōn et Baucis.' },
      ],
    },
  ],
}

export default chapter
