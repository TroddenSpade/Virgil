// Capitulum VI — CAPITVLVM SEXTVM
// Source: Ørberg, Lingua Latina per se Illustrata: Exercitia Latina I (2005)
// Exercise text adapted for the web.

const chapter = {
  "number": 6,
  "roman": "VI",
  "slug": "capitulum-06",
  "latinTitle": "CAPITVLVM SEXTVM",
  "title": "The Latin Road",
  "tagline": "The ablative and the imperative, the roads of Italy, and the passive voice on the road to Tusculum.",
  "status": "complete",
  "overview": "This workbook chapter drills the grammar of the Latin road: the ablative endings of the first three declensions, the difference between the imperative and the indicative, the prepositions that take the accusative or the ablative, the bare cases used with names of towns, and the passive voice. Its exercises follow Iūlius on his journey from Tusculum and Mēdus on the same road towards Rome.",
  "objectives": [
    "Form and recognise the ablative singular and plural of the first three declensions.",
    "Distinguish the imperative from the indicative in all four conjugations.",
    "Use prepositions correctly with the accusative or the ablative.",
    "Express place with the bare case: Rōmam, Rōmā, Rōmae, Tusculum, Tusculō, Tusculī.",
    "Turn active sentences into passive ones with -tur and -ntur."
  ],
  "readings": [],
  "grammar": [
    {
      "id": "ablativus",
      "latinTitle": "Ablātīvus et Locus",
      "title": "The Ablative Case and Place",
      "intro": "The ablative is the case of separation, means and accompaniment. With a preposition it expresses place from which, place where, or the person by whom something is done; without one it names the instrument or means.",
      "paradigms": [
        {
          "caption": "the ablative singular and plural",
          "head": [
            "Dēclīnātiō",
            "Nōminātīvus",
            "Ablātīvus sing.",
            "Ablātīvus plūr."
          ],
          "rows": [
            [
              "I (f.)",
              "ancilla",
              "ancillā",
              "ancillīs"
            ],
            [
              "II (m.)",
              "servus",
              "servō",
              "servīs"
            ],
            [
              "II (n.)",
              "cubiculum",
              "cubiculō",
              "cubiculīs"
            ]
          ]
        },
        {
          "caption": "praepositiōnēs cum ablātīvō",
          "head": [
            "Praepositiō",
            "Significātiō",
            "Exemplum"
          ],
          "rows": [
            [
              "ab / ā",
              "from; by (agent)",
              "ab oppidō; ā servō"
            ],
            [
              "cum",
              "with",
              "cum dominō"
            ],
            [
              "ex / ē",
              "out of, from",
              "ex oppidō"
            ],
            [
              "in",
              "in, on",
              "in lectīcā"
            ],
            [
              "sine",
              "without",
              "sine dominō"
            ],
            [
              "procul ab",
              "far from",
              "procul ā Rōmā"
            ]
          ]
        },
        {
          "caption": "locus: quō? unde? ubi?",
          "head": [
            "Quaestiō",
            "Cāsus",
            "Exemplum"
          ],
          "rows": [
            [
              "Quō? (to where?)",
              "Accūsātīvus",
              "Rōmam it; Tusculum it"
            ],
            [
              "Unde? (from where?)",
              "Ablātīvus",
              "Rōmā venit; Tusculō venit"
            ],
            [
              "Ubi? (where?)",
              "Locātīvus",
              "Rōmae habitat; Tusculī habitat"
            ]
          ]
        }
      ],
      "points": [
        "The ablative singular ends in -ā (first declension), -ō (second declension); the plural ends in -īs for all three.",
        "The ablative of means has no preposition: baculō verberat (he beats with a stick), lectīcā vehitur (he is carried in a litter).",
        "The agent of a passive verb takes ab / ā with the ablative: Iūlius ā servīs portātur.",
        "The prepositions ab, cum, ex, in and sine take the ablative; ad, ante, post, inter, prope, circum, apud and per take the accusative.",
        "Names of towns need no preposition: the accusative marks “to”, the ablative “from”, and the locative “at” (Rōmam, Rōmā, Rōmae; Tusculum, Tusculō, Tusculī)."
      ]
    },
    {
      "id": "imperativus-indicativus",
      "latinTitle": "Imperātīvus et Indicātīvus",
      "title": "Imperative and Indicative",
      "intro": "The imperative gives a command; the indicative states a fact. Both have a singular and a plural, and their endings differ in each of the four conjugations.",
      "paradigms": [
        {
          "caption": "imperātīvus et indicātīvus",
          "head": [
            "Coniugātiō",
            "Imp. sing.",
            "Imp. plūr.",
            "Ind. sing.",
            "Ind. plūr."
          ],
          "rows": [
            [
              "I",
              "cantā",
              "cantāte",
              "cantat",
              "cantant"
            ],
            [
              "II",
              "tacē",
              "tacēte",
              "tacet",
              "tacent"
            ],
            [
              "III",
              "age",
              "agite",
              "agit",
              "agunt"
            ],
            [
              "IV",
              "audī",
              "audīte",
              "audit",
              "audiunt"
            ]
          ]
        }
      ],
      "points": [
        "The singular imperative has no ending in the second person: vocā! (call!), vidē! (see!), pōne! (put!), venī! (come!).",
        "The plural imperative adds -te: vocāte, vidēte, pōnite, venīte.",
        "The third person indicative ends in -t (singular) and -nt (plural): vocat / vocant, videt / vident, pōnit / pōnunt, venit / veniunt.",
        "The imperative of the third conjugation has a short -e (pōne, age), but the indicative keeps -it (pōnit, agit)."
      ]
    },
    {
      "id": "passivum",
      "latinTitle": "Verbum Passīvum",
      "title": "The Passive Voice",
      "intro": "The passive makes the object of an action into the subject: dominus servum vocat becomes servus ā dominō vocātur — the slave is called by the master.",
      "paradigms": [
        {
          "caption": "āctīvum ↔ passīvum",
          "head": [
            "Āctīvum",
            "Passīvum",
            "Significātiō"
          ],
          "rows": [
            [
              "vocat / vocant",
              "vocātur / vocantur",
              "calls / is called"
            ],
            [
              "videt / vident",
              "vidētur / videntur",
              "sees / is seen"
            ],
            [
              "pōnit / pōnunt",
              "pōnitur / pōnuntur",
              "puts / is put"
            ],
            [
              "audit / audiunt",
              "audītur / audiuntur",
              "hears / is heard"
            ],
            [
              "vehit / vehunt",
              "vehitur / vehuntur",
              "carries / is carried"
            ]
          ]
        }
      ],
      "points": [
        "The passive replaces the active endings -t and -nt with -tur and -ntur.",
        "The person who performs the action stands in the ablative with ab / ā: servus ā dominō vocātur.",
        "The subject of a passive verb is the thing or person acted upon: saccus ā servō portātur.",
        "In the perfect passive Latin uses a participle with est or sunt (not drilled in this chapter)."
      ]
    }
  ],
  "vocabulary": [
    {
      "latin": "via",
      "english": "road, way",
      "pos": "noun (f.)"
    },
    {
      "latin": "vīlla",
      "english": "country house, estate",
      "pos": "noun (f.)"
    },
    {
      "latin": "mūrus",
      "english": "wall",
      "pos": "noun (m.)"
    },
    {
      "latin": "porta",
      "english": "gate",
      "pos": "noun (f.)"
    },
    {
      "latin": "lectīca",
      "english": "litter, sedan-chair",
      "pos": "noun (f.)"
    },
    {
      "latin": "umerus",
      "english": "shoulder",
      "pos": "noun (m.)"
    },
    {
      "latin": "saccus",
      "english": "sack, bag",
      "pos": "noun (m.)"
    },
    {
      "latin": "equus",
      "english": "horse",
      "pos": "noun (m.)"
    },
    {
      "latin": "amīcus",
      "english": "friend",
      "pos": "noun (m.)"
    },
    {
      "latin": "inimīcus",
      "english": "enemy",
      "pos": "noun (m.)"
    },
    {
      "latin": "longus",
      "english": "long",
      "pos": "adjective"
    },
    {
      "latin": "malus",
      "english": "bad, wicked",
      "pos": "adjective"
    },
    {
      "latin": "sōlus",
      "english": "alone, only",
      "pos": "adjective"
    },
    {
      "latin": "fessus",
      "english": "tired, weary",
      "pos": "adjective"
    },
    {
      "latin": "portat",
      "english": "carries",
      "pos": "verb"
    },
    {
      "latin": "vehit",
      "english": "carries, conveys",
      "pos": "verb"
    },
    {
      "latin": "timet",
      "english": "fears, is afraid of",
      "pos": "verb"
    },
    {
      "latin": "ambulat",
      "english": "walks",
      "pos": "verb"
    },
    {
      "latin": "it",
      "english": "goes",
      "pos": "verb"
    },
    {
      "latin": "venit",
      "english": "comes",
      "pos": "verb"
    },
    {
      "latin": "vocat",
      "english": "calls",
      "pos": "verb"
    },
    {
      "latin": "videt",
      "english": "sees",
      "pos": "verb"
    },
    {
      "latin": "pōnit",
      "english": "puts, places",
      "pos": "verb"
    },
    {
      "latin": "audit",
      "english": "hears",
      "pos": "verb"
    },
    {
      "latin": "ad",
      "english": "to, towards (with acc.)",
      "pos": "preposition"
    },
    {
      "latin": "ante",
      "english": "before, in front of (with acc.)",
      "pos": "preposition"
    },
    {
      "latin": "post",
      "english": "after, behind (with acc.)",
      "pos": "preposition"
    },
    {
      "latin": "inter",
      "english": "between, among (with acc.)",
      "pos": "preposition"
    },
    {
      "latin": "prope",
      "english": "near, close to (with acc.)",
      "pos": "preposition"
    },
    {
      "latin": "circum",
      "english": "around (with acc.)",
      "pos": "preposition"
    },
    {
      "latin": "apud",
      "english": "at the house of, with (with acc.)",
      "pos": "preposition"
    },
    {
      "latin": "ab / ā",
      "english": "from; by (with abl.)",
      "pos": "preposition"
    },
    {
      "latin": "cum",
      "english": "with (with abl.)",
      "pos": "preposition"
    },
    {
      "latin": "ex / ē",
      "english": "out of, from (with abl.)",
      "pos": "preposition"
    },
    {
      "latin": "in",
      "english": "in, on (with abl.)",
      "pos": "preposition"
    },
    {
      "latin": "sine",
      "english": "without (with abl.)",
      "pos": "preposition"
    },
    {
      "latin": "unde?",
      "english": "from where?",
      "pos": "adverb"
    },
    {
      "latin": "quō?",
      "english": "to where?",
      "pos": "adverb"
    },
    {
      "latin": "quī / quae / quod",
      "english": "who, which",
      "pos": "pronoun"
    },
    {
      "latin": "duodecim",
      "english": "twelve",
      "pos": "numeral"
    }
  ],
  "pensa": [
    {
      "id": "exercitium-1",
      "latinLabel": "EXERCITIUM 1",
      "title": "Exercise 1",
      "instruction": "Complete the sentences with the missing words from the first reading.",
      "type": "fill",
      "items": [
        "{{Via}} Flāminia est {{inter}} Rōmam et Arīminum.",
        "Vīlla Iūliī {{prope}} Tusculum est, neque {{procul}} ā Rōmā.",
        "Ab oppidō {{ad}} vīllam nōn longa via est.",
        "Iūlius ab oppidō ad vīllam {{it}}.",
        "Vīlla est {{ante}} eum, oppidum {{post}} eum est.",
        "Dominus et quattuor servī ad vīllam {{eunt}}.",
        "Servī in viā {{ambulant}}; dominus in {{lectīcā}} est neque ambulat.",
        "Duo servī lectīcam cum dominō {{portant}}.",
        "Syrus et Lēander duōs {{saccōs}} in {{umerīs}} portant.",
        "{{Unde}} venit Iūlius? Ab oppidō venit.",
        "{{Quō}} it Iūlius? Ad vīllam it.",
        "Duo servī dominum ab oppidō ad vīllam {{vehunt}} [= portant].",
        "Dominus sōlus nōn est, {{nam}} quattuor servī {{apud}} eum sunt.",
        "Mēdus nummōs Iūliī habet; {{itaque}} is nōn est cum dominō.",
        "Mēdus dominum īrātum {{timet}}.",
        "Mēdus servus {{malus}} est. Dāvus {{autem}} servus bonus est.",
        "Dāvus Mēdum nōn amat: Dāvus {{amīcus}} Mēdī nōn est.",
        "Dāvus et Mēdus nōn amīcī, sed {{inimīcī}} sunt.",
        "Via Latīna nōn tam {{longa}} est quam via Appia.",
        "In {{mūrō}} Rōmānō antiquō sunt {{duodecim}} {{portae}}.",
        "{{Circum}} Tusculum mūrus nōn {{tam}} longus est {{quam}} circum Rōmam."
      ]
    },
    {
      "id": "exercitium-2",
      "latinLabel": "EXERCITIUM 2",
      "title": "Exercise 2",
      "instruction": "Answer each question in a complete Latin sentence, then reveal the model answer.",
      "type": "questions",
      "items": [
        {
          "q": "Ubi est via Latīna?",
          "a": "Via Latīna est inter Rōmam et Capuam."
        },
        {
          "q": "Quid est Capua?",
          "a": "Capua est oppidum."
        },
        {
          "q": "Num fluvius Tiberis tam longus est quam Nīlus?",
          "a": "Nōn; Tiberis nōn tam longus est quam Nīlus."
        },
        {
          "q": "Estne Tusculum procul ā Rōmā?",
          "a": "Nōn; Tusculum prope Rōmam est."
        },
        {
          "q": "Ubi est vīlla Iūliī?",
          "a": "Vīlla Iūliī prope Tusculum est."
        },
        {
          "q": "Ubi est Iūlius?",
          "a": "Iūlius in lectīcā est inter Ursum et Dāvum."
        },
        {
          "q": "Ambulatne Iūlius?",
          "a": "Iūlius nōn ambulat, sed ā servīs portātur."
        },
        {
          "q": "Quot servī apud dominum sunt?",
          "a": "Quattuor servī apud dominum sunt."
        },
        {
          "q": "Quī lectīcam portant?",
          "a": "Ursus et Dāvus lectīcam portant."
        },
        {
          "q": "Quid portant Syrus et Lēander?",
          "a": "Syrus et Lēander duōs saccōs portant."
        },
        {
          "q": "Quō it Iūlius?",
          "a": "Iūlius ad vīllam it."
        },
        {
          "q": "Unde venit Iūlius?",
          "a": "Iūlius ab oppidō Tusculō venit."
        },
        {
          "q": "Cūr Mēdus apud dominum nōn est?",
          "a": "Mēdus apud dominum nōn est, quia dominum īrātum timet."
        },
        {
          "q": "Suntne amīcī Mēdus et Dāvus?",
          "a": "Nōn; Mēdus et Dāvus nōn amīcī, sed inimīcī sunt."
        }
      ]
    },
    {
      "id": "exercitium-3",
      "latinLabel": "EXERCITIUM 3",
      "title": "Exercise 3",
      "instruction": "Fill each gap with the correct preposition.",
      "type": "fill",
      "items": [
        "Iūlius nōn {{ā}} vīllā, sed {{ab}} oppidō venit.",
        "Iūlia {{ab}} Aemiliā et {{ā}} puerīs discēdit.",
        "Iūlius {{ab}} ūnō ad decem numerat, neque {{ab}} decem ad centum.",
        "Mēdus {{ā}} dominō discēdit, Dāvus {{ab}} eō nōn discēdit.",
        "Britannia est procul {{ab}} Italiā et {{ā}} Rōmā.",
        "Imperium Rōmānum est {{ab}} Hispāniā ad Arabiam et {{ā}} Britanniā ad Āfricam."
      ]
    },
    {
      "id": "exercitium-4",
      "latinLabel": "EXERCITIUM 4",
      "title": "Exercise 4",
      "instruction": "Complete each word with the correct case ending.",
      "type": "fill",
      "items": [
        "Via Appia est inter Rōm{{am}} et Brundisi{{um}}.",
        "Inter oppid{{a}} sunt viae. Circum multa oppid{{a}} sunt mūrī.",
        "Vīlla Iūliī est prope oppid{{um}} Tuscul{{um}}.",
        "Inter oppid{{um}} et vīll{{am}} nōn longa via est.",
        "Iūlius ab oppid{{ō}} Tuscul{{ō}} ad vīll{{am}} su{{am}} it.",
        "Dominus in lectīc{{ā}} est inter du{{ōs}} serv{{ōs}}.",
        "Ursus est ante domin{{um}}, Dāvus post e{{um}} est.",
        "Quattuor servī apud domin{{um}} (= cum domin{{ō}}) sunt.",
        "Aemilia in vīll{{ā}} est sine vir{{ō}} su{{ō}} Iūli{{ō}}.",
        "Puerī apud Aemili{{am}} sunt neque ab e{{ā}} discēdunt.",
        "Iūlia ex hort{{ō}} ad Aemili{{am}} venit cum quīnque ros{{īs}}.",
        "Ab, nōn ā, ante litter{{ās}} a-, e-, i-, o-, u-, h-!"
      ]
    },
    {
      "id": "exercitium-5",
      "latinLabel": "EXERCITIUM 5",
      "title": "Exercise 5",
      "instruction": "Complete the sentences with the correct form of the relative pronoun.",
      "type": "fill",
      "items": [
        "Servī {{quī}} saccōs portant sunt Syrus et Lēander.",
        "Saccī {{quōs}} servī portant nōn parvī sunt.",
        "Saccus {{quem}} Lēander portat est magnus.",
        "Servus {{quī}} magnum saccum portat laetus nōn est.",
        "Dominus {{quem}} servī vehunt est Iūlius.",
        "Servī {{quī}} Iūlium vehunt sunt Ursus et Dāvus.",
        "Servī {{quōs}} dominus vocat ad eum veniunt.",
        "Dominus verberat servōs {{quī}} nōn pārent.",
        "Servī {{quōs}} dominus verberat improbī sunt.",
        "Nummī {{quōs}} Mēdus in sacculō suō habet Iūliī sunt."
      ]
    },
    {
      "id": "exercitium-6",
      "latinLabel": "EXERCITIUM 6",
      "title": "Exercise 6",
      "instruction": "Complete each sentence with the correct case of the town name.",
      "type": "fill",
      "items": [
        "Quō it Mēdus? Mēdus Rōm{{am}} it, nam amīca eius Rōm{{ae}} habitat.",
        "Unde venit Cornēlius? Cornēlius Rōm{{ā}} venit.",
        "Quō it Cornēlius? Cornēlius Tuscul{{um}} it, nam is Tuscul{{ī}} habitat.",
        "Unde venit Mēdus? Mēdus Tuscul{{ō}} venit.",
        "Mēdus Tuscul{{ō}} Rōm{{am}} it.",
        "Cornēlius Rōm{{ā}} Tuscul{{um}} it.",
        "Iam Mēdus Rōm{{ae}} apud amīcam suam est.",
        "Ubi est Cornēlius? Tuscul{{ī}} est apud familiam suam."
      ]
    },
    {
      "id": "exercitium-7",
      "latinLabel": "EXERCITIUM 7",
      "title": "Exercise 7",
      "instruction": "Complete the verbs in the active or passive voice.",
      "type": "fill",
      "items": [
        "Dominus nōn ambul{{at}}, sed ā servīs port{{ātur}}.",
        "Iūlius Aemiliam am{{at}} et ab Aemiliā am{{ātur}}.",
        "Iūlius et Aemilia līberōs suōs am{{ant}} et ab iīs am{{antur}}.",
        "Servī malī dominum tim{{ent}} neque ā dominō tim{{entur}}.",
        "Quīntus Mārcum vid{{et}} neque ab eō vid{{ētur}}.",
        "Quīntus Mārcum puls{{at}} et ab eō puls{{ātur}}.",
        "Quīntus Iūlium voc{{at}} neque ab eō aud{{ītur}}.",
        "Puerī Iūliam voc{{ant}} neque ab eā aud{{iuntur}}.",
        "Equus Cornēlium veh{{it}}; Iūlius nōn equō, sed lectīcā veh{{itur}}.",
        "Dominī veh{{untur}}, servī ambul{{ant}}.",
        "Fēminae rosīs dēlect{{antur}}.",
        "Iūlius nummōs in mēnsā pōn{{it}} et numer{{at}}.",
        "Nummī ā Iūliō in mēnsā pōn{{untur}} et numer{{antur}}."
      ]
    },
    {
      "id": "exercitium-8",
      "latinLabel": "EXERCITIUM 8",
      "title": "Exercise 8",
      "instruction": "Turn each sentence from active to passive, or from passive to active, and mark the changed verb.",
      "type": "fill",
      "items": [
        "Ancilla dominum salūtat = Dominus ab ancillā {{salūtātur}}.",
        "Dominus ā servīs salūtātur = Servī dominum {{salūtant}}.",
        "Dominus servōs interrogat = Servī ā dominō {{interrogantur}}.",
        "Dāvus accūsātur ā Mēdō = Mēdus Dāvum {{accūsat}}.",
        "Dāvus sacculum in mēnsā pōnit = Sacculus ā Dāvō in mēnsā {{pōnitur}}.",
        "Iūlius ā Mēdō timētur = Mēdus Iūlium {{timet}}.",
        "Iūlius Mēdum vocat = Mēdus ā Iūliō {{vocātur}}.",
        "Iūlia ā puerīs vocātur = Puerī Iūliam {{vocant}}.",
        "Iūlia puerōs nōn audit = Puerī ab Iūliā nōn {{audiuntur}}.",
        "Puerī vocantur ā Iūliā = Iūlia puerōs {{vocat}}.",
        "Servī improbī dominum īrātum timent = Dominus īrātus ā servīs improbīs {{timētur}}.",
        "Servī improbī ā dominō īrātō verberantur = Dominus īrātus servōs improbōs {{verberat}}."
      ]
    },
    {
      "id": "exercitium-9",
      "latinLabel": "EXERCITIUM 9",
      "title": "Exercise 9",
      "instruction": "Complete each word with the correct ablative ending.",
      "type": "fill",
      "items": [
        "Cornēlius equ{{ō}} vehitur.",
        "Iūlius lectīc{{ā}} vehitur.",
        "Iūlia verb{{īs}} Aemiliae dēlectātur.",
        "Dominus servum improbum bacul{{ō}} verberat.",
        "Servī saccōs umer{{īs}} portant."
      ]
    },
    {
      "id": "exercitium-10",
      "latinLabel": "EXERCITIUM 10",
      "title": "Exercise 10",
      "instruction": "Name the case and complete the ablative forms.",
      "type": "fill",
      "items": [
        "Servō nōn nōminātīvus, sed {{ablātīvus}} est.",
        "Servō {{ablātīvus}} singulāris est; servīs {{ablātīvus}} {{plūrālis}} est.",
        "Ancillā ablātīvus {{singulāris}} est; ancillīs {{ablātīvus}} {{plūrālis}} est.",
        "Cubiculō {{ablātīvus}} {{singulāris}} est; cubiculīs est {{ablātīvus}} {{plūrālis}}.",
        "Singulāris: nōminātīvus servus, ablātīvus serv{{ō}}.",
        "Plūrālis: nōminātīvus servī, ablātīvus serv{{īs}}.",
        "Singulāris: nōminātīvus ancilla, ablātīvus ancill{{ā}}.",
        "Plūrālis: nōminātīvus ancillae, ablātīvus ancill{{īs}}.",
        "Singulāris: nōminātīvus cubiculum, ablātīvus cubicul{{ō}}.",
        "Plūrālis: nōminātīvus cubicula, ablātīvus cubicul{{īs}}."
      ]
    },
    {
      "id": "exercitium-11",
      "latinLabel": "EXERCITIUM 11",
      "title": "Exercise 11",
      "instruction": "Distinguish the imperative from the indicative and complete the verb forms.",
      "type": "fill",
      "items": [
        "Vocā imperātīvus singulāris est; vocāte {{imperātīvus}} {{plūrālis}} est.",
        "Vocat indicātīvus {{singulāris}} est; vocant est {{indicātīvus}} plūrālis.",
        "Vidē, pōne, venī {{imperātīvus}} {{singulāris}} est; vidēte, pōnite, venīte {{imperātīvus}} {{plūrālis}} est.",
        "Videt, pōnit, venit {{indicātīvus}} {{singulāris}} est; vident, pōnunt, veniunt {{indicātīvus}} {{plūrālis}} est.",
        "Imperātīvus singulāris: cantā, tac{{ē}}, ag{{e}}, aud{{ī}}.",
        "Imperātīvus plūrālis: cant{{āte}}, tac{{ēte}}, ag{{ite}}, aud{{īte}}.",
        "Indicātīvus singulāris: cantat, tac{{et}}, ag{{it}}, aud{{it}}.",
        "Indicātīvus plūrālis: cant{{ant}}, tac{{ent}}, ag{{unt}}, aud{{iunt}}."
      ]
    }
  ]
}

export default chapter
