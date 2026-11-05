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
    'Name the eight parts of speech: nomen, pronomen, verbum, adverbium, participium, coniunctio, praepositio, interiectio.',
    'Recite the four genders, the two numbers and the six cases of the noun.',
    'Compare adjectives (doctus, doctior, doctissimus) and adverbs (docte, doctius, doctissime).',
    'Describe the moods, genders and five tenses of the verb, and the four conjugations.',
    'Tell the kinds of conjunction apart, and which case each preposition takes.',
  ],
  readings: [
    {
      id: 'de-partibus-orationis',
      latinTitle: 'PARTES ORATIONIS',
      title: 'The Parts of Speech',
      paragraphs: [
        "Magister discipulum interrogat: 'Partes orationis quot sunt?' Discipulus respondet: 'Octo.' Magister: 'Quae?' Discipulus: 'Nomen, pronomen, verbum, adverbium, participium, coniunctio, praepositio, interiectio.'",
        "Magister: 'Nomen quid est?' Discipulus: 'Pars orationis cum casu, corpus aut rem proprie significans; aut enim unius nomen est et proprium dicitur, aut multorum et appellativum.'",
        "Magister: 'Genera nominum quot sunt?' Discipulus: 'Quattuor.' Magister: 'Quae?' Discipulus: 'Masculinum, ut hic magister; femininum, ut haec femina; neutrum, ut hoc scamnum; commune, ut hic et haec sacerdos.'",
        "Magister: 'Numeri nominum quot sunt?' Discipulus: 'Duo.' Magister: 'Qui?' Discipulus: 'Singularis, ut hic magister; pluralis, ut hi magistri.'",
        "Magister: 'Casus nominum quot sunt?' Discipulus: 'Sex.' Magister: 'Qui?' Discipulus: 'Nominativus, genetivus, dativus, accusativus, vocativus, ablativus. Per hos omnium generum nomina, pronomina, participia declinantur.'",
        "Magister: 'Comparationis gradus quot sunt?' Discipulus: 'Tres.' Magister: 'Qui?' Discipulus: 'Positivus, ut doctus; comparativus, ut doctior; superlativus, ut doctissimus.' Magister: 'Quae nomina comparantur?' Discipulus: 'Appellativa dumtaxat qualitatem aut quantitatem significantia.'",
        "Magister: 'Pronomen quid est?' Discipulus: 'Pars orationis quae pro nomine posita tantundem paene significat personamque interdum recipit.'",
        "Magister: 'Genera pronominum quae sunt?' Discipulus: 'Eadem fere quae et nominum: masculinum, ut quis; femininum, ut quae; neutrum, ut quod; commune, ut qualis, talis; trium generum, ut ego, tu.'",
        "Magister: 'Numeri pronominum quot sunt?' Discipulus: 'Duo.' Magister: 'Qui?' Discipulus: 'Singularis, ut hic; pluralis, ut hi.' Magister: 'Personae pronominum quot sunt?' Discipulus: 'Tres.' Magister: 'Quae?' Discipulus: 'Prima, ut ego; secunda, ut tu; tertia, ut ille.'",
        "Magister: 'Casus item pronominum quot sunt?' Discipulus: 'Sex, quem ad modum et nominum, per quos omnium generum pronomina inflectuntur.'",
      ],
      notes: [
        { term: 'partes orationis', gloss: 'the parts of speech — the classes into which every Latin word falls.' },
        { term: 'nomen', gloss: 'a noun: it names a person or thing and always takes a case.' },
        { term: 'proprium / appellativum', gloss: 'a proper noun (one person, e.g. Iulius) / a common noun (many, e.g. magister).' },
        { term: 'genera', gloss: 'genders: masculinum, femininum, neutrum, commune.' },
        { term: 'casus', gloss: 'cases: nominativus, genetivus, dativus, accusativus, vocativus, ablativus.' },
        { term: 'gradus comparationis', gloss: 'degrees of comparison: doctus, doctior, doctissimus.' },
        { term: 'pronomen', gloss: 'a pronoun: it is put in place of a noun (pro nomine).' },
      ],
    },
    {
      id: 'de-verbo-et-adverbio',
      latinTitle: 'DE VERBO ET ADVERBIO',
      title: 'The Verb and the Adverb',
      paragraphs: [
        "Magister: 'Verbum quid est?' Discipulus: 'Pars orationis cum tempore et persona, sine casu, aut agere aliquid aut pati aut neutrum significans.'",
        "Magister: 'Modi verborum qui sunt?' Discipulus: 'Indicativus, ut lego; imperativus, ut lege; optativus, ut utinam legerem; coniunctivus, ut cum legam; infinitivus, ut legere.'",
        "Magister: 'Genera verborum quot sunt?' Discipulus: 'Quattuor.' Magister: 'Quae?' Discipulus: 'Activa, passiva, neutra, deponentia.'",
        "Magister: 'Activa quae sunt?' Discipulus: 'Quae in -o desinunt et accepta -r littera faciunt ex se passiva, ut lego: legor.' Magister: 'Passiva quae sunt?' Discipulus: 'Quae in -r desinunt et ea dempta redeunt in activa, ut legor: lego.'",
        "Magister: 'Neutra quae sunt?' Discipulus: 'Quae in -o desinunt ut activa, sed accepta -r littera Latina non sunt, ut sto, curro.' Magister: 'Deponentia quae sunt?' Discipulus: 'Quae in -r desinunt ut passiva, sed ea dempta Latina non sunt, ut luctor, loquor.'",
        "Magister: 'Numeri verborum quot sunt?' Discipulus: 'Duo.' Magister: 'Qui?' Discipulus: 'Singularis, ut lego; pluralis, ut legimus.' Magister: 'Tempora verborum quot sunt?' Discipulus: 'Tria.' Magister: 'Quae?' Discipulus: 'Praesens, ut lego; praeteritum, ut legi; futurum, ut legam.'",
        "Magister: 'Quot sunt tempora in declinatione verborum?' Discipulus: 'Quinque.' Magister: 'Quae?' Discipulus: 'Praesens, ut lego; praeteritum imperfectum, ut legebam; praeteritum perfectum, ut legi; praeteritum plusquamperfectum, ut legeram; futurum, ut legam.'",
        "Magister: 'Personae verborum quot sunt?' Discipulus: 'Tres.' Magister: 'Quae?' Discipulus: 'Prima, ut lego; secunda, ut legis; tertia, ut legit.' Magister: 'Da declinationem verbi activi!' Discipulus: 'Amo, amas, amat; amamus, amatis, amant.'",
        "Magister: 'Adverbium quid est?' Discipulus: 'Pars orationis quae adiecta verbo significationem eius explanat atque implet.'",
        "Magister: 'Significatio adverbiorum in quo est?' Discipulus: 'Sunt aut loci adverbia aut temporis aut numeri aut negandi aut affirmandi aut demonstrandi aut optandi aut hortandi aut ordinis aut interrogandi aut qualitatis aut quantitatis aut dubitandi.'",
        "Magister: 'Da adverbia loci!' Discipulus: 'Ut hic vel ibi, intus vel foris, illuc vel inde.' Magister: 'Da temporis!' Discipulus: 'Ut hodie, nunc, nuper, cras, aliquando.' Magister: 'Da numeri!' Discipulus: 'Ut semel, bis, ter.'",
        "Magister: 'Da negandi et affirmandi!' Discipulus: 'Negandi, ut non; affirmandi, ut etiam, quidni.' Magister: 'Da demonstrandi et optandi!' Discipulus: 'Demonstrandi, ut en, ecce; optandi, ut utinam.' Magister: 'Da hortandi et ordinis!' Discipulus: 'Hortandi, ut eia; ordinis, ut deinde.'",
        "Magister: 'Da interrogandi, qualitatis, quantitatis, dubitandi!' Discipulus: 'Interrogandi, ut cur, quare, quamobrem; qualitatis, ut docte, pulchre, fortiter; quantitatis, ut multum, parum; dubitandi, ut forsitan.'",
        "Magister: 'Comparatio adverbiorum in quo est?' Discipulus: 'In tribus gradibus comparationis: positivo, comparativo, superlativo.' Magister: 'Da adverbium positivi gradus!' Discipulus: 'Ut docte; comparativi, ut doctius; superlativi, ut doctissime.'",
      ],
      notes: [
        { term: 'modi', gloss: 'moods: indicativus, imperativus, optativus, coniunctivus, infinitivus.' },
        { term: 'activa / passiva', gloss: 'active (lego, I read) / passive (legor, I am read).' },
        { term: 'deponentia', gloss: 'deponent verbs: passive in form but active in meaning, e.g. loquor, I speak.' },
        { term: 'tempora', gloss: 'tenses: praesens, imperfectum, perfectum, plusquamperfectum, futurum.' },
        { term: 'adverbium', gloss: 'an adverb: added to a verb, it explains and completes its meaning.' },
        { term: 'gradus', gloss: 'degrees: docte, doctius, doctissime — learnedly, more learnedly, most learnedly.' },
      ],
    },
    {
      id: 'de-ceteris-partibus',
      latinTitle: 'DE CETERIS PARTIBUS',
      title: 'The Remaining Parts',
      paragraphs: [
        "Magister: 'Participium quid est?' Discipulus: 'Pars orationis partem capiens nominis, partem verbi: nominis genera et casus, verbi tempora et significationes, utriusque numerum.'",
        "Magister: 'Genera participiorum quot sunt?' Discipulus: 'Quattuor.' Magister: 'Quae?' Discipulus: 'Masculinum, ut hic lectus; femininum, ut haec lecta; neutrum, ut hoc lectum; commune tribus generibus, ut hic et haec et hoc legens.'",
        "Magister: 'Casus participiorum quot sunt?' Discipulus: 'Sex.' Magister: 'Qui?' Discipulus: 'Nominativus, ut hic legens; genetivus, ut huius legentis; dativus, ut huic legenti; accusativus, ut hunc legentem; vocativus, ut o legens; ablativus, ut ab hoc legente.'",
        "Magister: 'Tempora participiorum quot sunt?' Discipulus: 'Tria.' Magister: 'Quae?' Discipulus: 'Praesens, ut legens; praeteritum, ut lectus; futurum, ut lecturus et legendus.' Magister: 'Numeri participiorum quot sunt?' Discipulus: 'Duo.' Magister: 'Qui?' Discipulus: 'Singularis, ut hic legens; pluralis, ut hi legentes.'",
        "Magister: 'Da declinationem participii!' Discipulus: 'Legens, legentis; lectus, lecta, lectum; lecturus, lectura, lecturum; legendus, legenda, legendum.'",
        "Magister: 'Coniunctio quid est?' Discipulus: 'Pars orationis adnectens ordinansque sententiam.' Magister: 'Potestas coniunctionum quot species habet?' Discipulus: 'Quinque.' Magister: 'Quas?' Discipulus: 'Copulativas, disiunctivas, expletivas, causales, rationales.'",
        "Magister: 'Da copulativas!' Discipulus: 'Et, -que, atque, ac.' Magister: 'Da disiunctivas!' Discipulus: 'Aut, -ve, vel, nec, neque.' Magister: 'Da expletivas!' Discipulus: 'Quidem, equidem, quoque, autem, tamen.'",
        "Magister: 'Da causales!' Discipulus: 'Si, etsi, siquidem, quando, nam, namque, etenim, quamobrem.' Magister: 'Da rationales!' Discipulus: 'Itaque, enim, quia, quapropter, quoniam, ergo, ideo, igitur, scilicet, propterea.'",
        "Magister: 'Praepositio quid est?' Discipulus: 'Pars orationis quae praeposita aliis partibus orationis significationem earum aut complet aut mutat aut minuit.'",
        "Magister: 'Da praepositiones casus accusativi!' Discipulus: 'Ad, apud, ante, adversum, cis, citra, circum, circa, contra, erga, extra, inter, intra, infra, iuxta, ob, per, prope, secundum, post, trans, ultra, praeter, propter, supra.'",
        "Magister: 'Quo modo?' Discipulus: 'Dicimus enim ad patrem, apud villam, ante domum, adversum inimicos, cis Rhenum, citra forum, circum oppidum, circa templum, contra hostem, erga parentes, extra vallum, inter naves, intra moenia, infra tectum, iuxta viam, ob fraudem, per portam, prope fenestram, secundum ripam, post tergum, trans flumen, ultra fines, praeter officium, propter rem, supra caelum.'",
        "Magister: 'Da praepositiones casus ablativi!' Discipulus: 'A, ab, cum, coram, de, e, ex, pro, prae, sine.' Magister: 'Quo modo?' Discipulus: 'Dicimus enim a domo, ab homine, cum exercitu, coram testibus, de foro, e iure, ex provincia, pro patria, prae timore, sine labore.'",
        "Magister: 'Da utriusque casus praepositiones!' Discipulus: 'In, sub, super.' Magister: 'In et sub quando accusativo casui iunguntur?' Discipulus: 'Quando nos in locum ire, isse, futuros esse significamus.' Magister: 'Quando ablativo?' Discipulus: 'Quando nos in loco esse, fuisse, futuros esse significamus.'",
        "Magister: 'Super quam vim habet?' Discipulus: 'Ubi locum significat, magis accusativo casui servit; ubi mentionem alicuius facimus, ablativo tantum, ut multa super Priamo rogitans, super Hectore multa, id est multa de Priamo, de Hectore.'",
        "Magister: 'Interiectio quid est?' Discipulus: 'Pars orationis significans mentis affectum voce incondita.' Magister: 'Significatio interiectionis in quo est?' Discipulus: 'Aut laetitiam significamus, ut euax!; aut dolorem, ut heu!; aut admirationem, ut papae!; aut metum, ut attat!; et si qua sunt similia.'",
      ],
      notes: [
        { term: 'participium', gloss: 'a participle: it takes part of the noun (gender, case) and part of the verb (tense).' },
        { term: 'legens / lectus', gloss: 'reading / having been read — the present and perfect participles of legere.' },
        { term: 'coniunctio', gloss: 'a conjunction: it joins and orders the sentence (et, aut, nam, quia).' },
        { term: 'praepositio', gloss: 'a preposition: placed before a word, it completes, changes or lessens its meaning.' },
        { term: 'casus accusativi / ablativi', gloss: 'some prepositions take the accusative (ad, per, trans), some the ablative (a, cum, ex).' },
        { term: 'interiectio', gloss: 'an interjection: a cry that shows a feeling — euax!, heu!, attat!.' },
        { term: 'multa super Priamo...', gloss: 'a quotation from Vergil’s Aeneid, book I: “much asking about Priam, much about Hector”.' },
      ],
    },
  ],
  grammar: [
    {
      id: 'partes-orationis',
      latinTitle: 'Partes Orationis',
      title: 'The Eight Parts of Speech',
      intro:
        'Every Latin word belongs to one of eight classes, the partes orationis. The magister asks quot sunt? ' +
        'and the discipulus answers octo. Nouns, pronouns, verbs and participles change their form (they are ' +
        'declinable); the rest never change.',
      paradigms: [
        {
          caption: 'partes orationis octo',
          head: ['Pars orationis', 'English', 'Exemplum'],
          rows: [
            ['nomen', 'noun', 'magister, femina, scamnum'],
            ['pronomen', 'pronoun', 'ego, tu, ille, hic'],
            ['verbum', 'verb', 'lego, amo, sum'],
            ['adverbium', 'adverb', 'hic, hodie, non'],
            ['participium', 'participle', 'legens, lectus, lecturus'],
            ['coniunctio', 'conjunction', 'et, aut, nam, quia'],
            ['praepositio', 'preposition', 'ad, cum, in, trans'],
            ['interiectio', 'interjection', 'euax!, heu!, attat!'],
          ],
        },
        {
          caption: 'declinabilia et indeclinabilia',
          head: ['Declinabilia (formam mutant)', 'Indeclinabilia (forma eadem manet)'],
          rows: [
            ['nomen, pronomen, verbum, participium', 'adverbium, coniunctio, praepositio, interiectio'],
          ],
        },
      ],
      points: [
        'The magister asks quot sunt? and the discipulus answers: octo — nomen, pronomen, verbum, adverbium, participium, coniunctio, praepositio, interiectio.',
        'Nomina, pronomina, verba, participia declinantur: their endings change with case, number and tense.',
        'Ceterae partes orationis sunt indeclinabiles: an adverb, a conjunction, a preposition or an interjection is always written the same way.',
      ],
    },
    {
      id: 'nomen',
      latinTitle: 'Nomen',
      title: 'The Noun',
      intro:
        'A noun (nomen) names a body or a thing and always takes a case — pars orationis cum casu. ' +
        'Nouns have gender, number and case, and some of them are compared.',
      paradigms: [
        {
          caption: 'genera nominum (quattuor)',
          head: ['Genus', 'Exemplum'],
          rows: [
            ['masculinum', 'hic magister — this master'],
            ['femininum', 'haec femina — this woman'],
            ['neutrum', 'hoc scamnum — this bench'],
            ['commune', 'hic et haec sacerdos — this priest/priestess'],
          ],
        },
        {
          caption: 'numeri et casus',
          head: ['Categoria', 'Quot', 'Exempla'],
          rows: [
            ['numeri', 'duo', 'singularis: hic magister; pluralis: hi magistri'],
            ['casus', 'sex', 'nominativus, genetivus, dativus, accusativus, vocativus, ablativus'],
          ],
        },
        {
          caption: 'gradus comparationis (tres)',
          head: ['Gradus', 'Exemplum', 'Significatio'],
          rows: [
            ['positivus', 'doctus', 'learned'],
            ['comparativus', 'doctior', 'more learned'],
            ['superlativus', 'doctissimus', 'most learned'],
          ],
        },
        {
          caption: 'nomen proprium et appellativum',
          head: ['Genus nominis', 'Exemplum'],
          rows: [
            ['proprium (unius)', 'Iulius, Roma, Tiberis'],
            ['appellativum (multorum)', 'magister, femina, scamnum'],
          ],
        },
        {
          caption: 'declinationes quinque (genetivus singularis)',
          head: ['Declinatio', 'Genetivus', 'Exemplum'],
          rows: [
            ['prima', '-ae', 'terra, terrae'],
            ['secunda', '-i', 'dominus, domini'],
            ['tertia', '-is', 'sol, solis'],
            ['quarta', '-us', 'portus, portus'],
            ['quinta', '-ei', 'dies, diei'],
          ],
        },
      ],
      points: [
        'Casus sunt sex: nominativus, genetivus, dativus, accusativus, vocativus, ablativus; per hos omnia nomina declinantur.',
        'Genera sunt quattuor: masculinum, femininum, neutrum, commune.',
        'Comparantur appellativa dumtaxat qualitatem aut quantitatem significantia — only common nouns that express a quality or quantity are compared.',
        'The declension of a noun is known from its genitive singular: -ae (I), -i (II), -is (III), -us (IV), -ei (V).',
      ],
    },
    {
      id: 'pronomen',
      latinTitle: 'Pronomen',
      title: 'The Pronoun',
      intro:
        'A pronoun (pronomen) is put in place of a noun and means almost the same as it: pars orationis ' +
        'quae pro nomine posita tantundem paene significat personamque interdum recipit. It has the same ' +
        'genders, numbers and cases as a noun, and it also has persons.',
      paradigms: [
        {
          caption: 'personae pronominum (tres)',
          head: ['Persona', 'Singularis', 'Pluralis'],
          rows: [
            ['prima', 'ego — I', 'nos — we'],
            ['secunda', 'tu — you', 'vos — you'],
            ['tertia', 'ille — he', 'illi — they'],
          ],
        },
        {
          caption: 'genera pronominum',
          head: ['Genus', 'Exemplum', 'Significatio'],
          rows: [
            ['masculinum', 'quis', 'who? (m.)'],
            ['femininum', 'quae', 'who? (f.)'],
            ['neutrum', 'quod', 'what? (n.)'],
            ['commune', 'qualis, talis', 'of such a kind (m./f.)'],
            ['trium generum', 'ego, tu', 'I, you'],
          ],
        },
      ],
      points: [
        'Genera pronominum eadem fere sunt quae et nominum: masculinum, femininum, neutrum, commune, trium generum.',
        'Numeri sunt duo (singularis, ut hic; pluralis, ut hi), et personae sunt tres (ego, tu, ille).',
        'Casus item pronominum sunt sex, quem ad modum et nominum: pronomina per eosdem casus inflectuntur.',
      ],
    },
    {
      id: 'verbum',
      latinTitle: 'Verbum',
      title: 'The Verb',
      intro:
        'A verb (verbum) is pars orationis cum tempore et persona, sine casu — it shows time and person, ' +
        'but never a case. It means acting, being acted upon, or neither. Verbs have moods, kinds, numbers, ' +
        'tenses and persons.',
      paradigms: [
        {
          caption: 'modi verborum (quinque)',
          head: ['Modus', 'Exemplum', 'Significatio'],
          rows: [
            ['indicativus', 'lego', 'I read — a plain statement'],
            ['imperativus', 'lege', 'read! — a command'],
            ['optativus', 'utinam legerem', 'would that I read — a wish'],
            ['coniunctivus', 'cum legam', 'when I read — in a subordinate clause'],
            ['infinitivus', 'legere', 'to read'],
          ],
        },
        {
          caption: 'genera verborum (quattuor)',
          head: ['Genus', 'Exemplum', 'Significatio'],
          rows: [
            ['activum', 'lego → legor', 'active: I read; it can become passive'],
            ['passivum', 'legor → lego', 'passive: I am read; it can become active'],
            ['neutrum', 'sto, curro', 'neither active nor passive'],
            ['deponens', 'luctor, loquor', 'passive in form, active in meaning'],
          ],
        },
        {
          caption: 'tempora in declinatione verbi (quinque)',
          head: ['Tempus', 'Exemplum'],
          rows: [
            ['praesens', 'lego — I read'],
            ['praeteritum imperfectum', 'legebam — I was reading'],
            ['praeteritum perfectum', 'legi — I have read'],
            ['praeteritum plusquamperfectum', 'legeram — I had read'],
            ['futurum', 'legam — I shall read'],
          ],
        },
        {
          caption: 'personae verborum (tres)',
          head: ['Persona', 'Exemplum'],
          rows: [
            ['prima', 'lego — I read'],
            ['secunda', 'legis — you read'],
            ['tertia', 'legit — he/she reads'],
          ],
        },
        {
          caption: 'coniugationes quattuor (infinitivus)',
          head: ['Coniugatio', 'Infinitivus', 'Exemplum'],
          rows: [
            ['I', '-are', 'amare — to love'],
            ['II', '-ere', 'monere — to warn'],
            ['III', '-ere', 'legere — to read'],
            ['IV', '-ire', 'audire — to hear'],
          ],
        },
      ],
      points: [
        'Modi sunt quinque: indicativus (lego), imperativus (lege), optativus (utinam legerem), coniunctivus (cum legam), infinitivus (legere).',
        'Genera sunt quattuor: activa (lego), passiva (legor), neutra (sto, curro), deponentia (luctor, loquor).',
        'In declinatione verbi tempora sunt quinque; numeri duo; personae tres, ut lego, legis, legit.',
        'The four conjugations are known from the infinitive: -are, -ere, -ere, -ire.',
      ],
    },
    {
      id: 'adverbium',
      latinTitle: 'Adverbium',
      title: 'The Adverb',
      intro:
        'An adverb (adverbium) is added to a verb to explain and complete its meaning: pars orationis quae ' +
        'adiecta verbo significationem eius explanat atque implet. Adverbs are grouped by what they express, ' +
        'and some of them are compared.',
      paradigms: [
        {
          caption: 'significationes adverbiorum',
          head: ['Species', 'Exempla'],
          rows: [
            ['loci', 'hic, ibi, intus, foris, illuc, inde'],
            ['temporis', 'hodie, nunc, nuper, cras, aliquando'],
            ['numeri', 'semel, bis, ter'],
            ['negandi', 'non'],
            ['affirmandi', 'etiam, quidni'],
            ['demonstrandi', 'en, ecce'],
            ['optandi', 'utinam'],
            ['hortandi', 'eia'],
            ['ordinis', 'deinde'],
            ['interrogandi', 'cur, quare, quamobrem'],
            ['qualitatis', 'docte, pulchre, fortiter'],
            ['quantitatis', 'multum, parum'],
            ['dubitandi', 'forsitan'],
          ],
        },
        {
          caption: 'comparatio adverbiorum (tres gradus)',
          head: ['Gradus', 'Exemplum'],
          rows: [
            ['positivus', 'docte — learnedly'],
            ['comparativus', 'doctius — more learnedly'],
            ['superlativus', 'doctissime — most learnedly'],
          ],
        },
      ],
      points: [
        'Sunt aut loci adverbia aut temporis aut numeri aut negandi aut affirmandi aut demonstrandi aut optandi aut hortandi aut ordinis aut interrogandi aut qualitatis aut quantitatis aut dubitandi.',
        'Comparatio adverbiorum in tribus gradibus est: positivo (docte), comparativo (doctius), superlativo (doctissime).',
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
          caption: 'genera participiorum (quattuor)',
          head: ['Genus', 'Exemplum'],
          rows: [
            ['masculinum', 'hic lectus'],
            ['femininum', 'haec lecta'],
            ['neutrum', 'hoc lectum'],
            ['commune tribus generibus', 'hic et haec et hoc legens'],
          ],
        },
        {
          caption: 'tempora participiorum (tria)',
          head: ['Tempus', 'Exemplum', 'Significatio'],
          rows: [
            ['praesens', 'legens', 'reading'],
            ['praeteritum', 'lectus', 'having been read'],
            ['futurum', 'lecturus, legendus', 'about to read / to be read'],
          ],
        },
        {
          caption: 'declinatio participii (legens, legentis)',
          head: ['Casus', 'Singularis', 'Pluralis'],
          rows: [
            ['nominativus', 'hic legens', 'hi legentes'],
            ['genetivus', 'huius legentis', 'horum legentium'],
            ['dativus', 'huic legenti', 'his legentibus'],
            ['accusativus', 'hunc legentem', 'hos legentes'],
            ['vocativus', 'o legens', 'o legentes'],
            ['ablativus', 'ab hoc legente', 'ab his legentibus'],
          ],
        },
      ],
      points: [
        'Participium partem capit nominis (genera et casus) et partem verbi (tempora et significationes), utriusque numerum.',
        'Genera participiorum sunt quattuor: masculinum, femininum, neutrum, commune tribus generibus (legens).',
        'Tempora sunt tria: praesens (legens), praeteritum (lectus), futurum (lecturus, legendus).',
        'The present participle legens is declined like a third-declension adjective; lectus, lecta, lectum like bonus -a -um.',
      ],
    },
    {
      id: 'coniunctio',
      latinTitle: 'Coniunctio',
      title: 'The Conjunction',
      intro:
        'A conjunction (coniunctio) joins and orders the parts of a sentence: pars orationis adnectens ' +
        'ordinansque sententiam. Its force falls into five kinds.',
      paradigms: [
        {
          caption: 'species coniunctionum (quinque)',
          head: ['Species', 'Exempla'],
          rows: [
            ['copulativae', 'et, -que, atque, ac'],
            ['disiunctivae', 'aut, -ve, vel, nec, neque'],
            ['expletivae', 'quidem, equidem, quoque, autem, tamen'],
            ['causales', 'si, etsi, siquidem, quando, nam, namque, etenim, quamobrem'],
            ['rationales', 'itaque, enim, quia, quapropter, quoniam, ergo, ideo, igitur, scilicet, propterea'],
          ],
        },
      ],
      points: [
        'Potestas coniunctionum quinque species habet: copulativas, disiunctivas, expletivas, causales, rationales.',
        'Copulativae (et, -que, atque) join words; disiunctivae (aut, vel, -ve) offer a choice.',
        'Causales (si, nam, etenim) give a cause or condition; rationales (quia, quoniam, igitur) give a reason or inference.',
      ],
    },
    {
      id: 'praepositio',
      latinTitle: 'Praepositio',
      title: 'The Preposition',
      intro:
        'A preposition (praepositio) is placed before another word and completes, changes or lessens its ' +
        'meaning: pars orationis quae praeposita aliis partibus orationis significationem earum aut complet ' +
        'aut mutat aut minuit. Some take the accusative, some the ablative, and three take either.',
      paradigms: [
        {
          caption: 'praepositiones cum accusativo',
          head: ['Praepositiones', 'Exempla'],
          rows: [
            ['ad, apud, ante, adversum', 'ad patrem, apud villam, ante domum, adversum inimicos'],
            ['cis, citra, circum, circa, contra', 'cis Rhenum, citra forum, circum oppidum, circa templum, contra hostem'],
            ['erga, extra, inter, intra, infra', 'erga parentes, extra vallum, inter naves, intra moenia, infra tectum'],
            ['iuxta, ob, per, prope, secundum', 'iuxta viam, ob fraudem, per portam, prope fenestram, secundum ripam'],
            ['post, trans, ultra, praeter, propter, supra', 'post tergum, trans flumen, ultra fines, praeter officium, propter rem, supra caelum'],
          ],
        },
        {
          caption: 'praepositiones cum ablativo',
          head: ['Praepositiones', 'Exempla'],
          rows: [
            ['a, ab, cum, coram, de', 'a domo, ab homine, cum exercitu, coram testibus, de foro'],
            ['e, ex, pro, prae, sine', 'e iure, ex provincia, pro patria, prae timore, sine labore'],
          ],
        },
        {
          caption: 'praepositiones utriusque casus',
          head: ['Praepositio', 'Cum accusativo', 'Cum ablativo'],
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
      latinTitle: 'Interiectio',
      title: 'The Interjection',
      intro:
        'An interjection (interiectio) is an outcry that shows a feeling of the mind: pars orationis ' +
        'significans mentis affectum voce incondita.',
      paradigms: [
        {
          caption: 'significationes interiectionis',
          head: ['Affectus', 'Exemplum'],
          rows: [
            ['laetitia', 'euax! — hurrah!'],
            ['dolor', 'heu! — alas!'],
            ['admiratio', 'papae! — good heavens!'],
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
    { latin: 'oratio', english: 'speech, sentence', pos: 'noun (f.)' },
    { latin: 'nomen', english: 'noun, name', pos: 'noun (n.)' },
    { latin: 'pronomen', english: 'pronoun', pos: 'noun (n.)' },
    { latin: 'verbum', english: 'verb, word', pos: 'noun (n.)' },
    { latin: 'adverbium', english: 'adverb', pos: 'noun (n.)' },
    { latin: 'participium', english: 'participle', pos: 'noun (n.)' },
    { latin: 'coniunctio', english: 'conjunction', pos: 'noun (f.)' },
    { latin: 'praepositio', english: 'preposition', pos: 'noun (f.)' },
    { latin: 'interiectio', english: 'interjection', pos: 'noun (f.)' },
    { latin: 'casus', english: 'case', pos: 'noun (m.)' },
    { latin: 'genus', english: 'gender, kind', pos: 'noun (n.)' },
    { latin: 'numerus', english: 'number', pos: 'noun (m.)' },
    { latin: 'gradus', english: 'degree, step', pos: 'noun (m.)' },
    { latin: 'comparatio', english: 'comparison', pos: 'noun (f.)' },
    { latin: 'coniugatio', english: 'conjugation', pos: 'noun (f.)' },
    { latin: 'modus', english: 'mood, manner', pos: 'noun (m.)' },
    { latin: 'tempus', english: 'time, tense', pos: 'noun (n.)' },
    { latin: 'persona', english: 'person', pos: 'noun (f.)' },
    { latin: 'nominativus', english: 'nominative', pos: 'noun (m.)' },
    { latin: 'genetivus', english: 'genitive', pos: 'noun (m.)' },
    { latin: 'dativus', english: 'dative', pos: 'noun (m.)' },
    { latin: 'accusativus', english: 'accusative', pos: 'noun (m.)' },
    { latin: 'vocativus', english: 'vocative', pos: 'noun (m.)' },
    { latin: 'ablativus', english: 'ablative', pos: 'noun (m.)' },
    { latin: 'positivus', english: 'positive (degree)', pos: 'adjective' },
    { latin: 'comparativus', english: 'comparative', pos: 'adjective' },
    { latin: 'superlativus', english: 'superlative', pos: 'adjective' },
    { latin: 'proprius', english: 'proper, one’s own', pos: 'adjective' },
    { latin: 'appellativus', english: 'common (of a noun)', pos: 'adjective' },
    { latin: 'masculinus', english: 'masculine', pos: 'adjective' },
    { latin: 'femininus', english: 'feminine', pos: 'adjective' },
    { latin: 'neuter', english: 'neuter', pos: 'adjective' },
    { latin: 'communis', english: 'common (of gender)', pos: 'adjective' },
    { latin: 'singularis', english: 'singular', pos: 'adjective' },
    { latin: 'pluralis', english: 'plural', pos: 'adjective' },
    { latin: 'activus', english: 'active', pos: 'adjective' },
    { latin: 'passivus', english: 'passive', pos: 'adjective' },
    { latin: 'deponens', english: 'deponent', pos: 'adjective' },
    { latin: 'doctus', english: 'learned', pos: 'adjective' },
    { latin: 'declinare', english: 'to decline, inflect', pos: 'verb' },
    { latin: 'interrogat', english: 'asks, questions', pos: 'verb' },
    { latin: 'respondet', english: 'answers, replies', pos: 'verb' },
    { latin: 'significat', english: 'means, signifies', pos: 'verb' },
  ],
  pensa: [
    {
      id: 'pensum-a',
      latinLabel: 'PENSVM A',
      title: 'Decline and conjugate',
      instruction: 'Complete each word with the correct ending or form.',
      type: 'fill',
      items: [
        "Declina 'ala', nomen femininum I declinationis. Singularis: nom. haec al{{a}}, gen. huius al{{ae}}, dat. huic al{{ae}}, acc. hanc al{{am}}, voc. o al{{a}}, abl. ab hac al{{a}}. Pluralis: nom. hae al{{ae}}, gen. harum al{{arum}}, dat. his al{{is}}, acc. has al{{as}}, voc. o al{{ae}}, abl. ab his al{{is}}.",
        "Declina 'pes', nomen masculinum III declinationis. Singularis: nom. hic p{{es}}, gen. huius ped{{is}}, dat. huic ped{{i}}, acc. hunc ped{{em}}, voc. o p{{es}}, abl. ab hoc ped{{e}}. Pluralis: nom. hi ped{{es}}, gen. horum ped{{um}}, dat. his ped{{ibus}}, acc. hos ped{{es}}, voc. o ped{{es}}, abl. ab his ped{{ibus}}.",
        "Coniuga 'orare', verbum activum I coniugationis. Indicativus: praes. or{{o}}, imperfectum ora{{bam}}, futurum ora{{bo}}, perfectum ora{{vi}}, plusquamperfectum ora{{veram}}, futurum perfectum ora{{vero}}. Coniunctivus: praes. or{{em}}, imperfectum ora{{rem}}, perfectum ora{{verim}}, plusquamperfectum ora{{vissem}}.",
        "Coniuga 'dicere', verbum activum III coniugationis. Indicativus: praes. dic{{o}}, imperfectum dic{{ebam}}, futurum dic{{am}}, perfectum dix{{i}}, plusquamperfectum dix{{eram}}, futurum perfectum dix{{ero}}. Coniunctivus: praes. dic{{am}}, imperfectum dic{{erem}}, perfectum dix{{erim}}, plusquamperfectum dix{{issem}}.",
        "Da verba principalia: laedere, {{laesi}}, {{laesum}}; implicare, {{implicavi}}, {{implicatum}}; plaudere, {{plausi}}, {{plausum}}; retinere, {{retinui}}, {{retentum}}; accendere, {{accendi}}, {{accensum}}; sedere, {{sedi}}, {{sessum}}; nubere, {{nupsi}}, {{nuptum}}; demere, {{dempsi}}, {{demptum}}; adicere, {{adieci}}, {{adiectum}}.",
      ],
    },
  ],
}

export default chapter
