// Capitulum XV — CAPITVLVM QVINTVM DECIMVM
// Source: Ørberg, Lingua Latina per se Illustrata: Exercitia Latina I (2005)
// Exercise text adapted for the web.

const chapter = {
  "number": 15,
  "roman": "XV",
  "slug": "capitulum-15",
  "latinTitle": "CAPITVLVM QVINTVM DECIMVM",
  "title": "The Teacher and the Pupils",
  "tagline": "Diodorus and his schoolroom — the six persons of the verb, the four conjugations and the present participle.",
  "status": "complete",
  "overview": "The fifteenth workbook chapter enters the school of Diodorus at Tusculum, where Mārcus arrives late, skips the knock and is beaten, and the whole class falls asleep during the lesson. The exercises drill the six persons of the verb, the present tense of the four conjugations, the pronouns ego, tū, nōs and vōs, and the present participle (volāns, canēns, faciēns).",
  "objectives": [
    "Name the six persons of the verb and match each ending to its subject.",
    "Conjugate the present tense of the four conjugations.",
    "Use ego, tū, nōs and vōs for emphasis and contrast.",
    "Form and decline the present participle.",
    "Follow the schoolroom dialogue and answer questions about it."
  ],
  "readings": [],
  "grammar": [
    {
      "id": "personae-verbi",
      "latinTitle": "Persōnae Verbī",
      "title": "The Six Persons of the Verb",
      "intro": "Every Latin verb has three persons in the singular and three in the plural. The ending alone tells who acts: -ō/-m, -s, -t in the singular; -mus, -tis, -nt in the plural.",
      "paradigms": [
        {
          "caption": "rīdeō, rīdēre — to laugh",
          "head": [
            "",
            "Singulāris",
            "Plūrālis"
          ],
          "rows": [
            [
              "persōna prīma",
              "rīdeō — I laugh",
              "rīdēmus — we laugh"
            ],
            [
              "persōna secunda",
              "rīdēs — you laugh",
              "rīdētis — you laugh"
            ],
            [
              "persōna tertia",
              "rīdet — he laughs",
              "rīdent — they laugh"
            ]
          ]
        }
      ],
      "points": [
        "Persōna prīma is the speaker (I, we); secunda the person addressed (you); tertia the person spoken of (he, she, it, they).",
        "The pronoun is usually omitted because the ending already shows the person.",
        "The endings are -ō/-m, -s, -t, -mus, -tis, -nt: vocō, vocās, vocat, vocāmus, vocātis, vocant."
      ]
    },
    {
      "id": "quattuor-coniugationes",
      "latinTitle": "Quattuor Coniugātiōnēs",
      "title": "The Four Conjugations in the Present",
      "intro": "The four conjugations differ in their stem vowel, but the personal endings are the same. Here is the present tense of one verb from each conjugation.",
      "paradigms": [
        {
          "caption": "I: clāmō, clāmāre; II: rīdeō, rīdēre",
          "head": [
            "",
            "I",
            "II"
          ],
          "rows": [
            [
              "1",
              "clāmō",
              "rīdeō"
            ],
            [
              "2",
              "clāmās",
              "rīdēs"
            ],
            [
              "3",
              "clāmat",
              "rīdet"
            ],
            [
              "1 pl.",
              "clāmāmus",
              "rīdēmus"
            ],
            [
              "2 pl.",
              "clāmātis",
              "rīdētis"
            ],
            [
              "3 pl.",
              "clāmant",
              "rīdent"
            ]
          ]
        },
        {
          "caption": "III: dīcō, dīcere; IV: audiō, audīre",
          "head": [
            "",
            "III",
            "IV"
          ],
          "rows": [
            [
              "1",
              "dīcō",
              "audiō"
            ],
            [
              "2",
              "dīcis",
              "audīs"
            ],
            [
              "3",
              "dīcit",
              "audit"
            ],
            [
              "1 pl.",
              "dīcimus",
              "audīmus"
            ],
            [
              "2 pl.",
              "dīcitis",
              "audītis"
            ],
            [
              "3 pl.",
              "dīcunt",
              "audiunt"
            ]
          ]
        }
      ],
      "points": [
        "First conjugation: -ā- (clāmāre); second: -ē- (rīdēre); third: -i- (dīcere); fourth: -ī- (audīre).",
        "Verbs in -iō of the third conjugation (faciō, facere) add -i- in the same way: faciō, facis, facit, facimus, facitis, faciunt.",
        "The ending -mus means “we” and -tis means “you (all)”: clāmāmus, rīdētis, dīcimus, audītis."
      ]
    },
    {
      "id": "participium-praesentis",
      "latinTitle": "Participium Praesentis",
      "title": "The Present Participle",
      "intro": "The present participle is a verb made into an adjective: volāre gives volāns, sedēre gives sedēns, facere gives faciēns. It declines like a third-declension adjective.",
      "paradigms": [
        {
          "caption": "volāns, volantis — flying",
          "head": [
            "Cāsus",
            "Masc./Fēm.",
            "Neutrum"
          ],
          "rows": [
            [
              "Nōminātīvus",
              "volāns",
              "volāns"
            ],
            [
              "Accūsātīvus",
              "volantem",
              "volāns"
            ],
            [
              "Genetīvus",
              "volantis",
              "volantis"
            ],
            [
              "Datīvus",
              "volantī",
              "volantī"
            ],
            [
              "Ablātīvus",
              "volante",
              "volante"
            ],
            [
              "Nōm. pl.",
              "volantēs",
              "volantia"
            ],
            [
              "Acc. pl.",
              "volantēs",
              "volantia"
            ],
            [
              "Gen. pl.",
              "volantium",
              "volantium"
            ]
          ]
        },
        {
          "caption": "forming the participle",
          "head": [
            "Īnfīnītīvus",
            "Participium",
            "Genetīvus"
          ],
          "rows": [
            [
              "volāre",
              "volāns",
              "volantis"
            ],
            [
              "sedēre",
              "sedēns",
              "sedentis"
            ],
            [
              "dūcere",
              "dūcēns",
              "dūcentis"
            ],
            [
              "facere",
              "faciēns",
              "facientis"
            ],
            [
              "venīre",
              "veniēns",
              "venientis"
            ]
          ]
        }
      ],
      "points": [
        "First conjugation has -āns, -antis; the second -ēns, -entis; the third -ēns, -entis; the fourth -iēns, -ientis.",
        "The participle agrees with its noun: puer dormiēns, puella canēns, animālia volantia.",
        "It may stand for a relative clause: puer dormiēns = puer quī dormit."
      ]
    }
  ],
  "vocabulary": [
    {
      "latin": "lūdus, -ī",
      "english": "school; game, play",
      "pos": "noun m."
    },
    {
      "latin": "magister, magistrī",
      "english": "teacher, master",
      "pos": "noun m."
    },
    {
      "latin": "discipulus, -ī",
      "english": "pupil, student",
      "pos": "noun m."
    },
    {
      "latin": "sella, -ae",
      "english": "chair, seat",
      "pos": "noun f."
    },
    {
      "latin": "virga, -ae",
      "english": "rod, cane",
      "pos": "noun f."
    },
    {
      "latin": "iānua, -ae",
      "english": "door",
      "pos": "noun f."
    },
    {
      "latin": "tergum, -ī",
      "english": "back (of the body)",
      "pos": "noun n."
    },
    {
      "latin": "tabula, -ae",
      "english": "writing-tablet",
      "pos": "noun f."
    },
    {
      "latin": "lectulus, -ī",
      "english": "little bed",
      "pos": "noun m."
    },
    {
      "latin": "persōna, -ae",
      "english": "person (of the verb); mask, character",
      "pos": "noun f."
    },
    {
      "latin": "sevērus, -a, -um",
      "english": "strict, severe",
      "pos": "adjective"
    },
    {
      "latin": "probus, -a, -um",
      "english": "good, honest",
      "pos": "adjective"
    },
    {
      "latin": "improbus, -a, -um",
      "english": "naughty, bad",
      "pos": "adjective"
    },
    {
      "latin": "tacitus, -a, -um",
      "english": "silent, quiet",
      "pos": "adjective"
    },
    {
      "latin": "omnēs, -ia",
      "english": "all, everyone",
      "pos": "adjective"
    },
    {
      "latin": "ego",
      "english": "I",
      "pos": "pronoun"
    },
    {
      "latin": "tū",
      "english": "you (sing.)",
      "pos": "pronoun"
    },
    {
      "latin": "nōs",
      "english": "we",
      "pos": "pronoun"
    },
    {
      "latin": "vōs",
      "english": "you (pl.)",
      "pos": "pronoun"
    },
    {
      "latin": "metuit",
      "english": "fears, is afraid of",
      "pos": "verb"
    },
    {
      "latin": "verberat",
      "english": "beats, whips",
      "pos": "verb"
    },
    {
      "latin": "pūnit",
      "english": "punishes",
      "pos": "verb"
    },
    {
      "latin": "intrat",
      "english": "enters",
      "pos": "verb"
    },
    {
      "latin": "advenit",
      "english": "arrives, comes to",
      "pos": "verb"
    },
    {
      "latin": "salūtat",
      "english": "greets",
      "pos": "verb"
    },
    {
      "latin": "cōnsīdit",
      "english": "sits down",
      "pos": "verb"
    },
    {
      "latin": "surgit",
      "english": "rises, gets up",
      "pos": "verb"
    },
    {
      "latin": "clāmat",
      "english": "shouts, cries out",
      "pos": "verb"
    },
    {
      "latin": "exclāmat",
      "english": "exclaims, cries out",
      "pos": "verb"
    },
    {
      "latin": "rīdet",
      "english": "laughs, smiles",
      "pos": "verb"
    },
    {
      "latin": "recitat",
      "english": "recites, reads aloud",
      "pos": "verb"
    },
    {
      "latin": "dormit",
      "english": "sleeps",
      "pos": "verb"
    },
    {
      "latin": "vigilat",
      "english": "is awake, stays awake",
      "pos": "verb"
    },
    {
      "latin": "dēsinit",
      "english": "stops, ceases",
      "pos": "verb"
    },
    {
      "latin": "redit",
      "english": "returns, goes back",
      "pos": "verb"
    },
    {
      "latin": "licet",
      "english": "it is allowed, one may",
      "pos": "verb"
    },
    {
      "latin": "antequam",
      "english": "before",
      "pos": "conjunction"
    },
    {
      "latin": "at",
      "english": "but",
      "pos": "conjunction"
    },
    {
      "latin": "tum",
      "english": "then, at that time",
      "pos": "adverb"
    },
    {
      "latin": "statim",
      "english": "immediately, at once",
      "pos": "adverb"
    }
  ],
  "pensa": [
    {
      "id": "exercitium-1",
      "latinLabel": "EXERCITIUM 1",
      "title": "Exercise 1",
      "instruction": "Complete the dialogue with the correct forms of sum and habeō.",
      "type": "fill",
      "items": [
        "Dēlia: \"Egō laeta {{sum}}. Nōnne tū laeta {{es}}, Syra?\"",
        "Syra: \"{{Ego}} laeta nōn {{sum}}. Cūr tū laeta {{es}}, Dēlia?\"",
        "Dēlia: \"Laeta {{sum}}, quia Lēander mē amat: {{is}} amīcus meus {{est}}; {{ego}} amīca eius {{sum}}.\"",
        "Dēlia amīcum habe{{t}}, itaque {{ea}} laeta {{est}}.",
        "Dēlia: \"Nōnne tū amīcum habē{{s}}, Syra?\"",
        "Syra: \"Egō amīcum nōn habe{{ō}}.\"",
        "Dēlia: \"Cūr amīcum nōn habē{{s}}?\"",
        "Syra: \"Amīcum nōn habe{{ō}}, quia formōsa nōn {{sum}}. {{Tū}} amīcum habē{{s}}, quia fēmina formōsa {{es}}.\""
      ]
    },
    {
      "id": "exercitium-2",
      "latinLabel": "EXERCITIUM 2",
      "title": "Exercise 2",
      "instruction": "Complete the sentences about the school.",
      "type": "fill",
      "items": [
        "Diodōrus {{magister}} Mārcī est; Mārcus {{discipulus}} Diodōrī est.",
        "Diodōrus puerōs {{virgā}} verberat; eō modō magister discipulōs improbōs {{pūnīre}} solet.",
        "Diodōrus enim magister {{sevērus}} est.",
        "Sextus prīmus ad {{lūdum}} advenit.",
        "Magister intrāns discipulum salūtat eumque {{cōnsīdere}} iubet: \"Salvē, Sexte! {{Cōnsīde}}!\"",
        "{{Tum}} [= deinde] Sextus in {{sellā}} suā cōnsīdit.",
        "Discipulus {{tacitus}} [= tacēns] ante magistrum sedet.",
        "Sextus iam adest, {{at}} [= sed] cēterī discipulī {{nōndum}} adsunt.",
        "Magister īrātus {{exclāmat}}: \"Ō, discipulōs improbōs...!\"",
        "Titus {{iānuam}} [= ōstium] pulsat {{antequam}} lūdum intrat.",
        "Titus nōn {{statim}} intrat, sed prīmum iānuam pulsat."
      ]
    },
    {
      "id": "exercitium-3",
      "latinLabel": "EXERCITIUM 3",
      "title": "Exercise 3",
      "instruction": "Answer each question in Latin.",
      "type": "questions",
      "items": [
        {
          "q": "Quō it Mārcus?",
          "a": "Mārcus Tusculum, in lūdum, it."
        },
        {
          "q": "Quis est Diodōrus?",
          "a": "Diodōrus magister lūdī est."
        },
        {
          "q": "Cūr Mārcus magistrum suum metuit?",
          "a": "Mārcus magistrum metuit, quia sevērus est et discipulōs virgā verberat."
        },
        {
          "q": "Quōmodo magister discipulōs improbōs pūnit?",
          "a": "Magister discipulōs improbōs virgā verberat."
        },
        {
          "q": "Cui discipulī pārent?",
          "a": "Discipulī magistrō pārent."
        },
        {
          "q": "Quis discipulus prīmus ad lūdum advenit?",
          "a": "Sextus prīmus ad lūdum advenit."
        },
        {
          "q": "Quid facit Sextus cum magister intrat?",
          "a": "Sextus dē sellā surgit et magistrum salūtat."
        },
        {
          "q": "Cūr īrātus est magister?",
          "a": "Magister īrātus est, quia cēterī discipulī nōndum adsunt et discipulī improbī sunt."
        },
        {
          "q": "Estne Sextus discipulus improbus?",
          "a": "Sextus nōn improbus, sed probus discipulus est."
        },
        {
          "q": "Quid facit Titus antequam lūdum intrat?",
          "a": "Titus iānuam pulsat antequam lūdum intrat."
        },
        {
          "q": "Quid magister eum facere iubet?",
          "a": "Magister eum iānuam claudere et cōnsīdere iubet."
        },
        {
          "q": "Cūr Titus librum suum nōn habet?",
          "a": "Titus librum suum nōn habet, quia Mārcus eius librum habet."
        },
        {
          "q": "Tūne magister/magistra an discipulus/discipula es?",
          "a": "Ego discipulus sum, nōn magister."
        }
      ]
    },
    {
      "id": "exercitium-4",
      "latinLabel": "EXERCITIUM 4",
      "title": "Exercise 4",
      "instruction": "Complete the verbs in the present tense.",
      "type": "fill",
      "items": [
        "Lēander saccum port{{at}}; item Syrus saccum port{{at}}.",
        "Dāvus et Ursus lectīcam cum dominō port{{ant}}.",
        "Lēander: \"Saccus quem tū port{{ās}}, Syre, levior est quam is quem ego port{{ō}}.\"",
        "Dāvus: \"Saccī quōs vōs port{{ātis}}, Syre et Lēander, leviōrēs sunt quam lectīca quam nōs port{{āmus}}.\"",
        "Iūlia can{{it}}. Puerī nōn can{{unt}}, sed rīd{{ent}}, quod Iūliam canere aud{{iunt}}, nam puerī eam male canere put{{ant}}.",
        "Iūlia: \"Cūr vōs rīd{{ētis}}, puerī, cum mē canere aud{{ītis}}? Nōnne mē bene canere put{{ātis}}?\"",
        "Mārcus: \"Nōs rīd{{ēmus}} cum tē canere aud{{īmus}}, Iūlia, quia tē male canere put{{āmus}}!\"",
        "Quīntus: \"Ego nōn rīd{{eō}} cum tē canere aud{{iō}}.\"",
        "Iūlia: \"Aud{{īs}}ne, Mārce? Quīntus nōn rīd{{et}} cum mē canere aud{{it}}. Cūr tū nōn rīd{{ēs}}, Quīnte? Tūne mē bene canere put{{ās}}?\"",
        "Quīntus: \"Ego put{{ō}} tē vōcem satis pulchram habēre. Nōn male can{{is}}, ut parva puella.\"",
        "Iūlia: \"Ego bene can{{ō}}, at vōs male can{{itis}}!\"",
        "Quīntus: \"Nōn male can{{itis}}, ut magnī puerī!\""
      ]
    },
    {
      "id": "exercitium-5",
      "latinLabel": "EXERCITIUM 5",
      "title": "Exercise 5",
      "instruction": "Complete the schoolroom dialogue.",
      "type": "fill",
      "items": [
        "Mārcus (ad Sextum et Titum): \"{{Vōs}} magistrum nōn salūtātis...\"",
        "Sextus et Titus: \"Id {{vērum}} nōn est: {{nōs}} magistrum salūtāmus.\"",
        "Magister: \"Vērum dīcitis. {{Quod}} Mārcus dīcit vērum nōn est.\"",
        "Magister īrātus {{tergum}} Mārcī verberat.",
        "Tergum est pars corporis {{posterior}}.",
        "Mārcus nōn lacrimat, neque enim lacrimāre puerō Rōmānō {{convenit}}.",
        "Magister eum verberāre {{dēsinit}}, atque puer ad sellam suam {{redit}}.",
        "\"{{Cūr}} Mārcus nōn cōnsīdit? Nōn cōnsīdit, quia pars tergī {{īnferior}} eī dolet.\"",
        "Quīntus nōn in lūdō, sed {{domī}} est.",
        "Mārcus: \"Quīntus dīcit '{{sē}} aegrum esse'.\"",
        "Magister: \"{{Sī}} frāter tuus aeger est, in lūdum venīre nōn potest.\""
      ]
    },
    {
      "id": "exercitium-6",
      "latinLabel": "EXERCITIUM 6",
      "title": "Exercise 6",
      "instruction": "Answer each question in Latin.",
      "type": "questions",
      "items": [
        {
          "q": "Quis discipulus postrēmus advenit?",
          "a": "Mārcus postrēmus ad lūdum advenit."
        },
        {
          "q": "Mārcusne magistrum salūtat?",
          "a": "Nōn salūtat; Mārcus magistrum nōn salūtat."
        },
        {
          "q": "Cūr magister Mārcum verberat?",
          "a": "Magister Mārcum verberat, quod discipulus improbus est: iānuam nōn pulsat nec magistrum salūtat."
        },
        {
          "q": "Cūr Mārcus nōn lacrimat?",
          "a": "Mārcus nōn lacrimat, nam lacrimāre puerō Rōmānō nōn convenit."
        },
        {
          "q": "Quō magister puerum redīre iubet?",
          "a": "Magister puerum ad sellam suam redīre iubet."
        },
        {
          "q": "Cūr Mārcus nōn cōnsīdit?",
          "a": "Mārcus nōn cōnsīdit, quod sedēre nōn potest, quia pars tergī īnferior eī dolet."
        },
        {
          "q": "Quid est tergum?",
          "a": "Tergum est posterior pars corporis."
        },
        {
          "q": "Ubi est frāter Mārcī?",
          "a": "Frāter Mārcī domī est apud mātrem suam."
        },
        {
          "q": "Cūr Quīntus in lūdum īre nōn potest?",
          "a": "Quīntus in lūdum īre nōn potest, quia aeger est."
        },
        {
          "q": "Quid magister puerōs iubet?",
          "a": "Magister puerōs librōs aperīre iubet."
        },
        {
          "q": "Cūr Mārcus librum Titī habet?",
          "a": "Mārcus librum Titī habet, quod Titus mālum Mārcī habet."
        },
        {
          "q": "Cūr Titus nōn potest mālum reddere Mārcō?",
          "a": "Titus mālum reddere nōn potest, quod id iam in ventre eius est."
        }
      ]
    },
    {
      "id": "exercitium-7",
      "latinLabel": "EXERCITIUM 7",
      "title": "Exercise 7",
      "instruction": "Complete the dialogue with the correct forms of sum and possum.",
      "type": "fill",
      "items": [
        "Dāvus et Ursus, quī dominum vehunt, iam fessī {{sunt}}.",
        "Syrus et Lēander saccōs vehunt; nōndum fessī {{sunt}}.",
        "Dāvus: \"Nōs fessī {{sumus}}. Nōnne vōs fessī {{estis}}, Syre et Lēander?\"",
        "Syrus: \"{{Nōs}} fessī nōn {{sumus}}. Cūr {{vōs}} fessī {{estis}}, Dave et Urse?\"",
        "Ursus: \"Nōs fessī {{sumus}}, quia dominus gravis {{est}}.\"",
        "Dāvus: \"St! Dominus dormit; is quoque fessus {{est}}.\"",
        "Ursus: \"{{Is}} quī vehitur fessus esse nōn {{potest}}.\"",
        "Servī, quī dominum portāre iam nōn {{possunt}}, lectīcam in viā pōnunt. Dominus excitātur.",
        "Iūlius: \"Cūr hīc cōnsistimus? Ubi {{sumus}}?\"",
        "Dāvus: \"In monte {{Tusculānō}}. Iam tē portāre nōn {{possumus}}.\"",
        "Iūlius: \"Quid? Mē portāre nōn {{potestis}}?\"",
        "Dāvus: \"Tē portāre nōn {{possumus}}, quia nimis gravis {{es}}.\"",
        "Iūlius: \"Egō gravis nōn {{sum}}, nec lectīca gravis {{est}}.\"",
        "Ursus: \"Sine tē lectīca gravis nōn {{est}}. Tūne apud lectīcam ambulāre {{potes}}, domine?\"",
        "Iūlius: \"Fessus {{sum}}: ambulāre nōn {{possum}}.\"",
        "Dāvus: \"{{Ego}} nōn tam fessus quam vōs {{sum}}.\"",
        "Iūlius: \"Vērum dīcis: ego nōn tam fessus quam vōs {{sum}}, sed dominus {{sum}}, servī {{estis}}!\""
      ]
    },
    {
      "id": "exercitium-8",
      "latinLabel": "EXERCITIUM 8",
      "title": "Exercise 8",
      "instruction": "Complete the story of the sleeping pupils.",
      "type": "fill",
      "items": [
        "Magister librum aperit ac {{recitāre}} incipit.",
        "Dum magister recitat, {{omnēs}} discipulī dormiunt [= nūllus discipulus vigilat].",
        "Discipulī tam bene dormiunt quam domī in {{lectulīs}} [= parvis lectīs].",
        "Ergō posteriōrem librī partem nōn audiunt, sed tantum {{priōrem}} partem.",
        "Magister eōs verberat. Discipulī: \"Cūr {{nōs}} verberās?\"",
        "Magister: \"{{Vōs}} verberō, quod aliō modō {{vōs}} excitāre nōn possum.\"",
        "In lūdō dormīre nōn {{licet}}."
      ]
    },
    {
      "id": "exercitium-9",
      "latinLabel": "EXERCITIUM 9",
      "title": "Exercise 9",
      "instruction": "Answer each question in Latin.",
      "type": "questions",
      "items": [
        {
          "q": "Quid facit magister antequam recitāre incipit?",
          "a": "Magister librum aperit antequam recitāre incipit."
        },
        {
          "q": "Tōtumne librum audiunt discipulī?",
          "a": "Discipulī nōn tōtum librum audiunt, sed priōrem partem tantum."
        },
        {
          "q": "Cūr nōn audiunt posteriōrem librī partem?",
          "a": "Posteriōrem librī partem nōn audiunt, quia dormiunt."
        },
        {
          "q": "Cūr magister recitāre dēsinit?",
          "a": "Magister recitāre dēsinit, quia discipulī dormiunt nec eum audiunt."
        },
        {
          "q": "Quōmodo magister discipulōs excitat?",
          "a": "Magister discipulōs virgā verberat."
        },
        {
          "q": "Quid Mārcus dicit magistrō īrātō?",
          "a": "Mārcus dīcit sē nōn dormīre, sed vigilāre et magistrum audīre."
        },
        {
          "q": "Quōmodo magister discipulōs pūnit?",
          "a": "Magister discipulōs virgā verberat."
        },
        {
          "q": "Cūr discipulī nōn cōnsīdunt?",
          "a": "Discipulī nōn cōnsīdunt, quia sedēre nōn possunt, quod tergum eīs dolet."
        },
        {
          "q": "Cūr magister eōs ante sellās stāre iubet?",
          "a": "Magister eōs ante sellās stāre iubet, quia stantēs dormīre nōn possunt."
        },
        {
          "q": "Quid recitat magister sedēns?",
          "a": "Magister sedēns posteriōrem librī partem recitat."
        },
        {
          "q": "Num in lūdō dormīre licet?",
          "a": "In lūdō dormīre nōn licet."
        },
        {
          "q": "Quid est lectulus?",
          "a": "Lectulus est parvus lectus."
        },
        {
          "q": "Tūne stāns dormīre potes?",
          "a": "Nōn possum stāns dormīre."
        },
        {
          "q": "Ubī vōs dormīre solētis, discipulī?",
          "a": "Domī in lectulīs dormīre solēmus."
        }
      ]
    },
    {
      "id": "exercitium-10",
      "latinLabel": "EXERCITIUM 10",
      "title": "Exercise 10",
      "instruction": "Name the persons and complete the present tense of the verbs.",
      "type": "fill",
      "items": [
        "Voc|ō, vocā|mus {{persōna}} prīma est.",
        "Vocā|s, vocā|tis {{persōna}} {{secunda}} est.",
        "Voca|t, voca|nt {{persōna}} {{tertia}} est.",
        "Voc|ō persōna {{prīma}} singulāris est; vocā|mus est {{persōna}} {{prīma}} plūrālis.",
        "Vocā|s {{persōna}} secunda {{singulāris}} est; vocā|tis est {{persōna}} {{secunda}} {{plūrālis}}.",
        "Voca|t persōna {{tertia}} {{singulāris}} est; voca|nt est {{persōna}} {{tertia}} {{plūrālis}}.",
        "Pers. 1 am{{ō}} am{{āmus}} vid{{eō}} vid{{ēmus}} aud{{iō}} aud{{īmus}}",
        "Pers. 2 am{{ās}} am{{ātis}} vid{{ēs}} vid{{ētis}} aud{{īs}} aud{{ītis}}",
        "Pers. 3 am{{at}} am{{ant}} vid{{et}} vid{{ent}} aud{{it}} aud{{iunt}}",
        "Pers. 1 dūc{{ō}} dūc{{imus}} fac{{iō}} fac{{imus}} s{{um}} s{{umus}}",
        "Pers. 2 dūc{{is}} dūc{{itis}} fac{{is}} fac{{itis}} {{es}} es{{tis}}",
        "Pers. 3 dūc{{it}} dūc{{unt}} fac{{it}} fac{{iunt}} es{{t}} s{{unt}}"
      ]
    },
    {
      "id": "exercitium-11",
      "latinLabel": "EXERCITIUM 11",
      "title": "Exercise 11",
      "instruction": "Complete the participles and their paradigm.",
      "type": "fill",
      "items": [
        "Vocā|re īnfīnītīvus est. Vocā|ns est {{participium}}.",
        "Vidē|ns, pōn|ēns, audi|ēns {{participia}} sunt.",
        "Īnfīnītīvus volāre, participium vol{{āns}}.",
        "Īnfīnītīvus sedēre, participium sed{{ēns}}.",
        "Participium dūcēns, īnfīnītīvus dūc{{ere}}.",
        "Participium veniēns, īnfīnītīvus ven{{īre}}.",
        "Participium faciēns, īnfīnītīvus fac{{ere}}; item participium capiēns, iaciēns, fugiēns, pariēns, accipiēns, aspiciēns, īnfīnītīvus cap{{ere}}, iac{{ere}}, fug{{ere}}, par{{ere}}, accip{{ere}}, aspic{{ere}}.",
        "Nōm. volāns vol{{āns}} vol{{antēs}} vol{{antia}}",
        "Acc. vol{{antem}} vol{{āns}} vol{{antēs}} vol{{antia}}",
        "Gen. vol{{antis}} vol{{antis}} vol{{antium}} vol{{antium}}",
        "Dat. vol{{antī}} vol{{antī}} vol{{antibus}} vol{{antibus}}",
        "Abl. vol{{ante}}/vol{{antī}} vol{{ante}}/vol{{antī}} vol{{antibus}} vol{{antibus}}",
        "Nōm. canēns can{{ēns}} can{{entēs}} can{{entia}}",
        "Acc. can{{entem}} can{{ēns}} can{{entēs}} can{{entia}}",
        "Gen. can{{entis}} can{{entis}} can{{entium}} can{{entium}}",
        "Dat. can{{entī}} can{{entī}} can{{entibus}} can{{entibus}}",
        "Abl. can{{ente}}/can{{entī}} can{{ente}}/can{{entī}} can{{entibus}} can{{entibus}}",
        "Masculīnum et fēminīnum: volāns, canēns est {{nōminātīvus}} singulāris, volantem, canentem {{accūsātīvus}} {{singulāris}}, volantēs, canentēs {{nōminātīvus}} aut {{accūsātīvus}} plūrālis.",
        "Neutrum: volāns, canēns {{nōminātīvus}} aut {{accūsātīvus}} singulāris est, volantia, canentia {{nōminātīvus}} aut {{accūsātīvus}} plūrālis.",
        "Volante, canente {{ablātīvus}} {{singulāris}} est.",
        "Volantī {{datīvus}} aut {{ablātīvus}} singulāris est, volantibus {{datīvus}} aut {{ablātīvus}} {{plūrālis}}.",
        "Volantis, canentis est {{genetīvus}} {{singulāris}}, volantium, canentium {{genetīvus}} plūrālis."
      ]
    }
  ]
}

export default chapter
