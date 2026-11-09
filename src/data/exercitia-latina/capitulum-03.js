// Capitulum III — CAPITVLVM TERTIVM
// Source: Ørberg, Lingua Latina per se Illustrata: Exercitia Latina I (2005)
// Exercise text adapted for the web.

const chapter = {
  "number": 3,
  "roman": "III",
  "slug": "capitulum-03",
  "latinTitle": "CAPITVLVM TERTIVM",
  "title": "The Naughty Boy",
  "tagline": "The accusative case, the verbs of the little drama, and the relative pronoun quī / quae.",
  "status": "complete",
  "overview": "The third workbook chapter works through the miniature play of Mārcus, Iūlia and Quīntus. The drills fix the accusative singular in -um and -am, contrast the nominative and the accusative in the same sentence, and introduce the relative pronoun quī, quae, quem and quam. A short review of the genitive opens the chapter, linking it back to the family of Iūlius.",
  "objectives": [
    "Form the accusative singular of masculine and feminine nouns.",
    "Distinguish the doer (nominative) from the object (accusative).",
    "Use the present endings -at, -et and -it.",
    "Join clauses with the relative pronoun quī, quae, quem and quam.",
    "Recall the genitive singular and plural from the previous chapter."
  ],
  "readings": [],
  "grammar": [
    {
      "id": "nom-acc",
      "latinTitle": "Nōminātīvus et Accūsātīvus",
      "title": "Nominative and Accusative",
      "intro": "The nominative is the doer of the action; the accusative is the person or thing the action is done to. Word order is free: the ending, not the position, tells you who does what.",
      "paradigms": [
        {
          "caption": "masculine",
          "head": [
            "Nōminātīvus (doer)",
            "Accūsātīvus (object)"
          ],
          "rows": [
            [
              "Mārcus rīdet.",
              "Quīntus Mārcum pulsat."
            ],
            [
              "Quīntus plōrat.",
              "Iūlius Quīntum vocat."
            ],
            [
              "puer",
              "puerum"
            ]
          ]
        },
        {
          "caption": "feminine",
          "head": [
            "Nōminātīvus",
            "Accūsātīvus"
          ],
          "rows": [
            [
              "Iūlia cantat.",
              "Mārcus Iūliam pulsat."
            ],
            [
              "Aemilia venit.",
              "Iūlia Aemiliam vocat."
            ],
            [
              "puella",
              "puellam"
            ]
          ]
        }
      ],
      "points": [
        "Masculine: nominative -us (-er), accusative -um.",
        "Feminine: nominative -a, accusative -am.",
        "The object may stand before the verb: Mārcum Quīntus pulsat — Quīntus hits Marcus."
      ]
    },
    {
      "id": "verbum",
      "latinTitle": "Verbum",
      "title": "The Verb: -at, -et, -it",
      "intro": "One word is a whole sentence in Latin: the ending shows who is acting.",
      "paradigms": [
        {
          "caption": "the three conjugations met so far",
          "head": [
            "Ending",
            "Exempla",
            "Meaning"
          ],
          "rows": [
            [
              "-at",
              "cantat, pulsat, plōrat, vocat, interrogat, verberat",
              "he/she …s"
            ],
            [
              "-et",
              "rīdet, videt, respondet",
              "he/she …s"
            ],
            [
              "-it",
              "dormit, venit, audit",
              "he/she …s"
            ]
          ]
        }
      ],
      "points": [
        "The subject (nominative) and the verb agree: Mārcus pulsat — Mārcus hits.",
        "The object (accusative) shows who receives the action: Mārcum pulsat — he hits Mārcus."
      ]
    },
    {
      "id": "relativum",
      "latinTitle": "Prōnōmen Relātīvum",
      "title": "The Relative Pronoun: who / which",
      "intro": "quī, quae, quem and quam join a description to a person or thing.",
      "paradigms": [
        {
          "caption": "quī, quae — who, which",
          "head": [
            "",
            "Nōminātīvus",
            "Accūsātīvus"
          ],
          "rows": [
            [
              "masculine",
              "quī (puer quī rīdet)",
              "quem (puer quem Iūlius audit)"
            ],
            [
              "feminine",
              "quae (puella quae plōrat)",
              "quam (puella quam Mārcus pulsat)"
            ]
          ]
        }
      ],
      "points": [
        "The relative pronoun takes the gender and number of the word it describes, but the case of its own role in the clause.",
        "Puer quī puellam pulsat — the boy who hits the girl. Puella quam Mārcus pulsat — the girl whom Mārcus hits."
      ]
    }
  ],
  "vocabulary": [
    {
      "latin": "scaena",
      "english": "scene, stage",
      "pos": "noun (f.)"
    },
    {
      "latin": "persōna",
      "english": "character, person",
      "pos": "noun (f.)"
    },
    {
      "latin": "mamma",
      "english": "mummy, mum",
      "pos": "noun (f.)"
    },
    {
      "latin": "laetus",
      "english": "happy, glad",
      "pos": "adjective"
    },
    {
      "latin": "īrātus",
      "english": "angry",
      "pos": "adjective"
    },
    {
      "latin": "probus",
      "english": "good, honest, well-behaved",
      "pos": "adjective"
    },
    {
      "latin": "improbus",
      "english": "bad, naughty",
      "pos": "adjective"
    },
    {
      "latin": "cantat",
      "english": "sings",
      "pos": "verb"
    },
    {
      "latin": "pulsat",
      "english": "hits, strikes",
      "pos": "verb"
    },
    {
      "latin": "plōrat",
      "english": "cries, weeps",
      "pos": "verb"
    },
    {
      "latin": "rīdet",
      "english": "laughs, smiles",
      "pos": "verb"
    },
    {
      "latin": "videt",
      "english": "sees",
      "pos": "verb"
    },
    {
      "latin": "vocat",
      "english": "calls",
      "pos": "verb"
    },
    {
      "latin": "venit",
      "english": "comes",
      "pos": "verb"
    },
    {
      "latin": "interrogat",
      "english": "asks, questions",
      "pos": "verb"
    },
    {
      "latin": "respondet",
      "english": "answers, replies",
      "pos": "verb"
    },
    {
      "latin": "dormit",
      "english": "sleeps",
      "pos": "verb"
    },
    {
      "latin": "audit",
      "english": "hears, listens to",
      "pos": "verb"
    },
    {
      "latin": "verberat",
      "english": "beats, whips",
      "pos": "verb"
    },
    {
      "latin": "mē",
      "english": "me (acc.)",
      "pos": "pronoun"
    },
    {
      "latin": "tē",
      "english": "you (acc.)",
      "pos": "pronoun"
    },
    {
      "latin": "eum",
      "english": "him (acc.)",
      "pos": "pronoun"
    },
    {
      "latin": "eam",
      "english": "her (acc.)",
      "pos": "pronoun"
    },
    {
      "latin": "neque",
      "english": "and not, nor",
      "pos": "conjunction"
    },
    {
      "latin": "iam",
      "english": "now, already",
      "pos": "adverb"
    },
    {
      "latin": "cūr?",
      "english": "why?",
      "pos": "adverb"
    },
    {
      "latin": "quia",
      "english": "because",
      "pos": "conjunction"
    },
    {
      "latin": "hīc",
      "english": "here",
      "pos": "adverb"
    },
    {
      "latin": "quī",
      "english": "who, which (m.)",
      "pos": "pronoun"
    },
    {
      "latin": "quae",
      "english": "who, which (f.)",
      "pos": "pronoun"
    },
    {
      "latin": "quem",
      "english": "whom, which (m. acc.)",
      "pos": "pronoun"
    },
    {
      "latin": "quam",
      "english": "whom, which (f. acc.)",
      "pos": "pronoun"
    },
    {
      "latin": "nōminātīvus",
      "english": "nominative",
      "pos": "noun (m.)"
    },
    {
      "latin": "accūsātīvus",
      "english": "accusative",
      "pos": "noun (m.)"
    },
    {
      "latin": "genetīvus",
      "english": "genitive",
      "pos": "noun (m.)"
    },
    {
      "latin": "verbum",
      "english": "verb, word",
      "pos": "noun (n.)"
    }
  ],
  "pensa": [
    {
      "id": "exercitium-1",
      "latinLabel": "EXERCITIUM 1",
      "title": "Exercise 1",
      "instruction": "Complete the sentences about the first scene.",
      "type": "fill",
      "items": [
        "In {{scaenā}} prīmā sunt trēs {{persōnae}}: Iūlia, Mārcus, Quīntus.",
        "Iūlia {{cantat}}: “Lalla, lalla!” Iūlia {{laeta}} est.",
        "Mārcus laetus nōn est, Mārcus {{īrātus}} est.",
        "Mārcus Iūliam {{pulsat}}.",
        "{{Iam}} Iūlia nōn cantat, sed {{plōrat}}.",
        "Mārcus {{rīdet}}: “Hahahae!”",
        "Iūlia: “Ubi est māter?” Iūlia Aemiliam nōn {{videt}}.",
        "Iūlia Aemiliam {{vocat}}: “Mamma!”",
        "Aemilia {{venit}}."
      ]
    },
    {
      "id": "exercitium-2",
      "latinLabel": "EXERCITIUM 2",
      "title": "Exercise 2",
      "instruction": "Complete each word with the correct accusative ending.",
      "type": "fill",
      "items": [
        "Mārcus Iūli{{am}} pulsat.",
        "Mārcus Quīnt{{um}} nōn videt, sed Quīntus Mārc{{um}} videt.",
        "Quīntus: “Quid? Mārcus puell{{am}} pulsat?”",
        "Quīntus Mārc{{um}} pulsat, et Mārcus pulsat Quīnt{{um}}.",
        "Iūlia nōn videt Aemili{{am}}.",
        "Iūlia Aemili{{am}} vocat: “Mamma!”",
        "Mārcus īrātus Iūli{{am}} pulsat.",
        "Iūlia: “Mamma! Mārcus {{mē}} pulsat!”"
      ]
    },
    {
      "id": "exercitium-3",
      "latinLabel": "EXERCITIUM 3",
      "title": "Exercise 3",
      "instruction": "Complete each verb with the correct present ending.",
      "type": "fill",
      "items": [
        "Iūlia cant{{at}}, et Mārcus eam puls{{at}}!",
        "Iam Iūlia nōn cant{{at}}, sed plōr{{at}}.",
        "Iūlia Aemiliam nōn vid{{et}}; Iūlia Aemiliam voc{{at}}.",
        "Aemilia ven{{it}} et interrog{{at}}: “Ubi est Iūlius?”",
        "Mārcus respond{{et}}: “Pater dorm{{it}}.”",
        "Quīntus Iūlium voc{{at}}.",
        "Iūlius dorm{{it}} neque Quīntum aud{{it}}.",
        "Mārcus {{rīdet}}."
      ]
    },
    {
      "id": "exercitium-4",
      "latinLabel": "EXERCITIUM 4",
      "title": "Exercise 4",
      "instruction": "Complete the dialogue and the relative clauses.",
      "type": "fill",
      "items": [
        "Aemilia Quīntum {{interrogat}}: “Quis mē vocat?”",
        "Quīntus {{respondet}}: “Iūlia {{tē}} vocat.”",
        "Aemilia {{interrogat}}: “{{Cūr}} Iūlia plōrat?”",
        "Quīntus {{respondet}}: “Iūlia plōrat, {{quia}} Mārcus {{eam}} pulsat.”",
        "Aemilia: “Mārcus puer {{improbus}} est! Ubi est Iūlius?”",
        "Quīntus: “Pater nōn {{hīc}} est, sed Mārcus {{hīc}} est.”",
        "Quīntus Iūlium vocat; Iūlius {{dormit}} neque Quīntum {{audit}}.",
        "Iūlia, {{quae}} parva puella est, Aemiliam vocat.",
        "Aemilia, {{quam}} Iūlia vocat, venit.",
        "Aemilia, {{quae}} māter līberōrum est, fīlium improbum verberat.",
        "Fīlius {{quem}} Aemilia verberat est Mārcus.",
        "Quīntus, {{quī}} fīlius probus est, Iūlium vocat.",
        "Iūlius, {{quem}} Quīntus vocat, nōn venit.",
        "Mārcus, {{quem}} Aemilia verberat, plōrat.",
        "Iūlius, {{quī}} iam nōn dormit, puerum audit.",
        "Puer {{quem}} Iūlius audit est Mārcus."
      ]
    },
    {
      "id": "exercitium-5",
      "latinLabel": "EXERCITIUM 5",
      "title": "Exercise 5",
      "instruction": "Answer each question with quia and a reason from the story.",
      "type": "questions",
      "items": [
        {
          "q": "Cūr Mārcus Iūliam pulsat?",
          "a": "Mārcus Iūliam pulsat, quia Iūlia cantat."
        },
        {
          "q": "Cūr Iūlia plōrat?",
          "a": "Iūlia plōrat, quia Mārcus eam pulsat."
        },
        {
          "q": "Cūr Mārcus rīdet?",
          "a": "Mārcus rīdet, quia Iūlia plōrat."
        },
        {
          "q": "Cūr Iūlia nōn pulsat Mārcum?",
          "a": "Iūlia Mārcum nōn pulsat, quia puella proba est."
        },
        {
          "q": "Cūr Aemilia venit?",
          "a": "Aemilia venit, quia Iūlia eam vocat."
        },
        {
          "q": "Cūr Iūlius Quīntum nōn audit?",
          "a": "Iūlius Quīntum nōn audit, quia dormit."
        },
        {
          "q": "Cūr Mārcum verberat Aemilia?",
          "a": "Aemilia Mārcum verberat, quia puer improbus est."
        },
        {
          "q": "Cūr Mārcus plōrat?",
          "a": "Mārcus plōrat, quia Aemilia eum verberat."
        },
        {
          "q": "Cūr venit Iūlius?",
          "a": "Iūlius venit, quia Mārcum plōrantem audit."
        }
      ]
    },
    {
      "id": "exercitium-6",
      "latinLabel": "EXERCITIUM 6",
      "title": "Exercise 6",
      "instruction": "Complete each word with the correct case ending.",
      "type": "fill",
      "items": [
        "Mārc{{us}} Iūli{{am}} pulsat, quia Iūli{{a}} cantat.",
        "Iūli{{a}} plōrat, quia Mārcus e{{am}} pulsat.",
        "Iūlia Aemili{{am}} vocat. Aemili{{a}} venit.",
        "Aemili{{a}} Quīnt{{um}} videt et e{{um}} interrogat: “Quis mē vocat?” Quīnt{{us}} respondet: “Iūli{{a}} tē vocat.”",
        "Aemilia: “Ubi est Iūlius?” Aemili{{a}} Iūli{{um}} nōn videt.",
        "Quīnt{{us}} Iūli{{um}} vocat: “Pater!” Iūli{{us}} Quīnt{{um}} nōn audit.",
        "Aemili{{a}} īrāta Mārc{{um}} verberat.",
        "Mārc{{us}} plōrat, quia Aemili{{a}} e{{um}} verberat.",
        "Iūli{{us}} Mārc{{um}} audit, et venit.",
        "Iūlius Aemili{{am}} et Mārc{{um}} et Quīnt{{um}} et Iūli{{am}} videt.",
        "Aemilia: “Mārc{{us}} puer improb{{us}} est.”",
        "Quīntus: “Mārc{{us}} parv{{am}} puell{{am}} pulsat!”",
        "Iūli{{us}} īrāt{{us}} puer{{um}} improb{{um}} verberat.",
        "Iūli{{a}} est puell{{a}} prob{{a}}."
      ]
    },
    {
      "id": "exercitium-7",
      "latinLabel": "EXERCITIUM 7",
      "title": "Exercise 7",
      "instruction": "Join each pair of clauses with the correct form of the relative pronoun.",
      "type": "fill",
      "items": [
        "Puella {{quae}} cantat laeta est.",
        "Puer {{quī}} puellam pulsat improbus est.",
        "Iūlia, {{quae}} cantat, puella proba est.",
        "Mārcus, {{quī}} puer improbus est, puellam et puerum pulsat.",
        "Puella {{quam}} Mārcus pulsat est Iūlia.",
        "Puer {{quem}} Mārcus pulsat est Quīntus.",
        "Iūlia, {{quae}} parva puella est, Aemiliam vocat.",
        "Aemilia, {{quam}} Iūlia vocat, venit.",
        "Aemilia, {{quae}} māter est līberōrum, fīlium improbum verberat.",
        "Fīlius {{quem}} Aemilia verberat est Mārcus.",
        "Quīntus, {{quī}} fīlius probus est, Iūlium vocat.",
        "Iūlius, {{quem}} Quīntus vocat, nōn venit.",
        "Mārcus, {{quem}} Aemilia verberat, plōrat.",
        "Iūlius, {{quī}} iam nōn dormit, puerum audit.",
        "Puer {{quem}} Iūlius audit est Mārcus."
      ]
    },
    {
      "id": "exercitium-8",
      "latinLabel": "EXERCITIUM 8",
      "title": "Exercise 8",
      "instruction": "Answer each question in a complete Latin sentence.",
      "type": "questions",
      "items": [
        {
          "q": "Quis Iūliam pulsat?",
          "a": "Mārcus Iūliam pulsat."
        },
        {
          "q": "Quis plōrat?",
          "a": "Iūlia plōrat."
        },
        {
          "q": "Quis rīdet?",
          "a": "Mārcus rīdet."
        },
        {
          "q": "Quem Quīntus videt?",
          "a": "Quīntus Mārcum videt."
        },
        {
          "q": "Quem Iūlia vocat?",
          "a": "Iūlia Aemiliam vocat."
        },
        {
          "q": "Quis venit?",
          "a": "Aemilia venit."
        },
        {
          "q": "Quem Aemilia interrogat?",
          "a": "Aemilia Quīntum interrogat."
        },
        {
          "q": "Quis vocat Iūlium?",
          "a": "Quīntus Iūlium vocat."
        },
        {
          "q": "Quem Aemilia verberat?",
          "a": "Aemilia Mārcum verberat."
        },
        {
          "q": "Quis iam plōrat?",
          "a": "Mārcus iam plōrat."
        },
        {
          "q": "Quem audit Iūlius?",
          "a": "Iūlius Mārcum audit."
        },
        {
          "q": "Quem Iūlius verberat?",
          "a": "Iūlius Mārcum verberat."
        }
      ]
    },
    {
      "id": "exercitium-9",
      "latinLabel": "EXERCITIUM 9",
      "title": "Exercise 9",
      "instruction": "Complete each question with quis or quem.",
      "type": "fill",
      "items": [
        "{{Quis}} Iūliam pulsat? Mārcus Iūliam pulsat.",
        "{{Quis}} Mārcum videt? Quīntus Mārcum videt.",
        "{{Quem}} Quīntus pulsat? Mārcum Quīntus pulsat.",
        "{{Quis}} Aemiliam vocat? Iūlia Aemiliam vocat.",
        "{{Quem}} Aemilia interrogat? Quīntum Aemilia interrogat.",
        "{{Quis}} respondet? Quīntus respondet.",
        "{{Quem}} vocat Quīntus? Iūlium vocat Quīntus.",
        "{{Quem}} verberat Iūlius? Mārcum verberat Iūlius."
      ]
    },
    {
      "id": "exercitium-10",
      "latinLabel": "EXERCITIUM 10",
      "title": "Exercise 10",
      "instruction": "Complete the sentences on the nominative and accusative.",
      "type": "fill",
      "items": [
        "Quīntus nōminātīvus est. Mārcum est {{accūsātīvus}}.",
        "Quīntum accūsātīvus est. Quīntus est {{nōminātīvus}}.",
        "Iūlia {{nōminātīvus}} est. Aemiliam {{accūsātīvus}} est.",
        "Iūliam {{accūsātīvus}} est. Aemilia {{nōminātīvus}} est.",
        "Nōminātīvus: Mārcus. Accūsātīvus: Mārc{{um}}.",
        "Nōminātīvus: Aemilia. Accūsātīvus: Aemili{{am}}.",
        "Accūsātīvus: Iūlium. Nōminātīvus: Iūli{{us}}.",
        "Accūsātīvus: Iūliam. Nōminātīvus: Iūli{{a}}.",
        "Nōminātīvus: puer improbus. Accūsātīvus: puer{{um}} improb{{um}}.",
        "Nōminātīvus: parva puella. Accūsātīvus: parv{{am}} puell{{am}}."
      ]
    },
    {
      "id": "exercitium-13",
      "latinLabel": "EXERCITIUM 13",
      "title": "Exercise 13",
      "instruction": "Complete the sentences on the genitive case.",
      "type": "fill",
      "items": [
        "Iūlius pater Mārcī est: Mārcī {{pater}} est.",
        "Iūlius pater Iūliae est: Iūliae quoque {{pater}} est.",
        "Iūlius dominus servī est: servī {{dominus}} singulāris est.",
        "Iūlius dominus servōrum est: servōrum est {{dominus}} {{plūrālis}}.",
        "Aemilia domina ancillae est: ancillae {{domina}} {{singulāris}} est.",
        "Aemilia domina ancillārum est: ancillārum est {{domina}} {{plūrālis}}.",
        "Titulus capitulī est FAMILIA ROMANA: capitulī {{titulus}} {{singulāris}} est.",
        "Numerus capitulōrum magnus est: capitulōrum est {{numerus}} {{plūrālis}}.",
        "Genetīvus: singulāris serv{{ī}}, plūrālis serv{{ōrum}}.",
        "Genetīvus: singulāris ancill{{ae}}, plūrālis ancill{{ārum}}.",
        "Genetīvus: singulāris capitul{{ī}}, plūrālis capitul{{ōrum}}."
      ]
    }
  ]
}

export default chapter
