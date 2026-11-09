// Capitulum XIII — CAPITVLVM TERTIVM DECIMVM
// Source: Ørberg, Lingua Latina per se Illustrata: Exercitia Latina I (2005)
// Exercise text adapted for the web.

const chapter = {
  "number": 13,
  "roman": "XIII",
  "slug": "capitulum-13",
  "latinTitle": "CAPITVLVM TERTIVM DECIMVM",
  "title": "The Year and the Months",
  "tagline": "The Roman year, its months and seasons, and the grammar of comparison — drilled with third-declension adjectives.",
  "status": "complete",
  "overview": "The thirteenth workbook chapter counts the Roman year: twelve months, three hundred and sixty-five days, the named days kalendae, nōnae and īdūs, the four seasons and the hours of the day. Its exercises drill third-declension adjectives such as gravis, the comparative in -ior and the superlative in -issimus, and the accusative and ablative of time.",
  "objectives": [
    "Name the twelve months and the four seasons in Latin.",
    "Decline third-declension adjectives such as gravis, -e.",
    "Form and decline the comparative (longior, -ius) and recognise the superlative.",
    "Use the accusative and ablative of time: trēs diēs, hōrā sextā, mēnse Iūniō.",
    "Answer questions about the calendar, the moon and the length of days."
  ],
  "readings": [],
  "grammar": [
    {
      "id": "adiectiva-tertiae-declinationis",
      "latinTitle": "Adiectīva Tertiae Dēclīnātiōnis",
      "title": "Third-Declension Adjectives: gravis, -e",
      "intro": "Third-declension adjectives have one form for masculine and feminine and a separate neuter. gravis is the masculine/feminine form, grave the neuter; the genitive singular is gravis and the genitive plural gravium.",
      "paradigms": [
        {
          "caption": "gravis, -e — heavy, serious",
          "head": [
            "Cāsus",
            "Masc./Fēm.",
            "Neutrum"
          ],
          "rows": [
            [
              "Nōminātīvus",
              "gravis",
              "grave"
            ],
            [
              "Accūsātīvus",
              "gravem",
              "grave"
            ],
            [
              "Genetīvus",
              "gravis",
              "gravis"
            ],
            [
              "Datīvus",
              "gravī",
              "gravī"
            ],
            [
              "Ablātīvus",
              "gravī",
              "gravī"
            ],
            [
              "Nōm. pl.",
              "gravēs",
              "gravia"
            ],
            [
              "Acc. pl.",
              "gravēs",
              "gravia"
            ],
            [
              "Gen. pl.",
              "gravium",
              "gravium"
            ]
          ]
        }
      ],
      "points": [
        "The ablative singular ends in -ī (gravī), not -e; the genitive plural ends in -ium (gravium).",
        "The neuter nominative and accusative singular is grave, the plural gravia.",
        "Other adjectives of this type: brevis, fortis, levis, trīstis, omnis, tōtus (gen. tōtīus).",
        "The adjective agrees with its noun: mēnsis gravis, proelium grave, partēs gravēs."
      ]
    },
    {
      "id": "comparativus",
      "latinTitle": "Comparātīvus",
      "title": "The Comparative: longior, -ius",
      "intro": "The comparative adds -ior to the stem (neuter -ius) and declines as a third-declension adjective: longior, longius; genitive longiōris. The superlative adds -issimus, -a, -um.",
      "paradigms": [
        {
          "caption": "longus → longior → longissimus",
          "head": [
            "Cāsus",
            "Masc./Fēm.",
            "Neutrum"
          ],
          "rows": [
            [
              "Nōminātīvus",
              "longior",
              "longius"
            ],
            [
              "Accūsātīvus",
              "longiōrem",
              "longius"
            ],
            [
              "Genetīvus",
              "longiōris",
              "longiōris"
            ],
            [
              "Datīvus",
              "longiōrī",
              "longiōrī"
            ],
            [
              "Ablātīvus",
              "longiōre",
              "longiōre"
            ],
            [
              "Nōm. pl.",
              "longiōrēs",
              "longiōra"
            ],
            [
              "Acc. pl.",
              "longiōrēs",
              "longiōra"
            ],
            [
              "Gen. pl.",
              "longiōrum",
              "longiōrum"
            ]
          ]
        },
        {
          "caption": "positīvus, comparātīvus, superlātīvus",
          "head": [
            "Positīvus",
            "Comparātīvus",
            "Superlātīvus"
          ],
          "rows": [
            [
              "altus",
              "altior",
              "altissimus"
            ],
            [
              "longus",
              "longior",
              "longissimus"
            ],
            [
              "brevis",
              "brevior",
              "brevissimus"
            ],
            [
              "clārus",
              "clārior",
              "clārissimus"
            ],
            [
              "fortis",
              "fortior",
              "fortissimus"
            ]
          ]
        }
      ],
      "points": [
        "The comparative stem is -iōr-, giving longiōris, longiōrī, longiōre.",
        "Compare with quam: Februārius brevior est quam Mārtius.",
        "Tam ... quam expresses equality: Iānuārius tam longus est quam December.",
        "The superlative declines like bonus: mēnsis frīgidissimus, stēlla clārissima."
      ]
    },
    {
      "id": "temporis-casus",
      "latinTitle": "Accūsātīvus et Ablātīvus Temporis",
      "title": "The Cases of Time",
      "intro": "Duration of time is put in the accusative: trēs diēs, multās hōrās. The time at which something happens is put in the ablative: hōrā sextā, mēnse Iūniō, diē octāvō.",
      "paradigms": [
        {
          "caption": "tempus",
          "head": [
            "Exemplum",
            "Significātiō"
          ],
          "rows": [
            [
              "Quīntus trēs diēs in lectō iacet.",
              "Quintus lies in bed for three days."
            ],
            [
              "Mēdus multās hōrās in sōle ambulat.",
              "Medus walks in the sun for many hours."
            ],
            [
              "Hōrā sextā sōl altissimus est.",
              "At the sixth hour the sun is highest."
            ],
            [
              "Mēnse Iūniō diēs longissimī sunt.",
              "In the month of June the days are longest."
            ]
          ]
        }
      ],
      "points": [
        "The accusative answers “how long?”: centum annōs vīvere, trēs noctēs dormīre.",
        "The ablative answers “when?”: hōrā prīmā, mēnse Mārtiō, diē septimō, aestāte, hieme.",
        "Do not use a preposition with these expressions: the case alone carries the meaning."
      ]
    }
  ],
  "vocabulary": [
    {
      "latin": "annus, -ī",
      "english": "year",
      "pos": "noun m."
    },
    {
      "latin": "mēnsis, -is",
      "english": "month",
      "pos": "noun m."
    },
    {
      "latin": "diēs, -ēī",
      "english": "day",
      "pos": "noun m."
    },
    {
      "latin": "nox, noctis",
      "english": "night",
      "pos": "noun f."
    },
    {
      "latin": "māne",
      "english": "morning",
      "pos": "noun n."
    },
    {
      "latin": "vesper, -erī",
      "english": "evening",
      "pos": "noun m."
    },
    {
      "latin": "merīdiēs, -ēī",
      "english": "midday, noon",
      "pos": "noun m."
    },
    {
      "latin": "hōra, -ae",
      "english": "hour",
      "pos": "noun f."
    },
    {
      "latin": "saeculum, -ī",
      "english": "century, age",
      "pos": "noun n."
    },
    {
      "latin": "tempus, temporis",
      "english": "time",
      "pos": "noun n."
    },
    {
      "latin": "lūna, -ae",
      "english": "moon",
      "pos": "noun f."
    },
    {
      "latin": "stēlla, -ae",
      "english": "star",
      "pos": "noun f."
    },
    {
      "latin": "sōl, sōlis",
      "english": "sun",
      "pos": "noun m."
    },
    {
      "latin": "caelum, -ī",
      "english": "sky, heavens",
      "pos": "noun n."
    },
    {
      "latin": "lūx, lūcis",
      "english": "light",
      "pos": "noun f."
    },
    {
      "latin": "aestās, aestātis",
      "english": "summer",
      "pos": "noun f."
    },
    {
      "latin": "hiems, hiemis",
      "english": "winter",
      "pos": "noun f."
    },
    {
      "latin": "vēr, vēris",
      "english": "spring",
      "pos": "noun n."
    },
    {
      "latin": "autumnus, -ī",
      "english": "autumn",
      "pos": "noun m."
    },
    {
      "latin": "imber, imbris",
      "english": "rain, shower",
      "pos": "noun m."
    },
    {
      "latin": "nix, nivis",
      "english": "snow",
      "pos": "noun f."
    },
    {
      "latin": "glaciēs, -ēī",
      "english": "ice",
      "pos": "noun f."
    },
    {
      "latin": "lacus, -ūs",
      "english": "lake",
      "pos": "noun m."
    },
    {
      "latin": "aequinoctium, -ī",
      "english": "equinox",
      "pos": "noun n."
    },
    {
      "latin": "kalendae, -ārum",
      "english": "the Kalends (first day of the month)",
      "pos": "noun f. pl."
    },
    {
      "latin": "nōnae, -ārum",
      "english": "the Nones (fifth or seventh day)",
      "pos": "noun f. pl."
    },
    {
      "latin": "īdūs, -uum",
      "english": "the Ides (thirteenth or fifteenth day)",
      "pos": "noun f. pl."
    },
    {
      "latin": "initium, -ī",
      "english": "beginning",
      "pos": "noun n."
    },
    {
      "latin": "altus, -a, -um",
      "english": "high, deep",
      "pos": "adjective"
    },
    {
      "latin": "longus, -a, -um",
      "english": "long",
      "pos": "adjective"
    },
    {
      "latin": "brevis, -e",
      "english": "short",
      "pos": "adjective"
    },
    {
      "latin": "gravis, -e",
      "english": "heavy, serious",
      "pos": "adjective"
    },
    {
      "latin": "calidus, -a, -um",
      "english": "hot, warm",
      "pos": "adjective"
    },
    {
      "latin": "frīgidus, -a, -um",
      "english": "cold",
      "pos": "adjective"
    },
    {
      "latin": "clārus, -a, -um",
      "english": "bright, clear",
      "pos": "adjective"
    },
    {
      "latin": "postrēmus, -a, -um",
      "english": "last, final",
      "pos": "adjective"
    },
    {
      "latin": "lūcet",
      "english": "shines, is light",
      "pos": "verb"
    },
    {
      "latin": "operit",
      "english": "covers",
      "pos": "verb"
    },
    {
      "latin": "incipit",
      "english": "begins",
      "pos": "verb"
    },
    {
      "latin": "nōminātur",
      "english": "is named",
      "pos": "verb"
    }
  ],
  "pensa": [
    {
      "id": "exercitium-1",
      "latinLabel": "EXERCITIUM 1",
      "title": "Exercise 1",
      "instruction": "Give the ordinal number and the name of each month.",
      "type": "fill",
      "items": [
        "{{Prīmus}} mēnsis {{Iānuārius}} est.",
        "{{Secundus}} mēnsis {{Februārius}}.",
        "{{Tertius}} mēnsis {{Mārtius}}.",
        "{{Quārtus}} mēnsis {{Aprīlis}}.",
        "{{Quīntus}} mēnsis {{Maius}}.",
        "{{Sextus}} mēnsis {{Iūnius}}.",
        "{{Septimus}} mēnsis {{Iūlius}}.",
        "{{Octāvus}} mēnsis {{Augustus}}.",
        "{{Nōnus}} mēnsis {{September}}.",
        "{{Decimus}} mēnsis {{Octōber}}.",
        "{{Ūndecimus}} mēnsis {{November}}.",
        "{{Duodecimus}} mēnsis {{December}}."
      ]
    },
    {
      "id": "exercitium-2",
      "latinLabel": "EXERCITIUM 2",
      "title": "Exercise 2",
      "instruction": "Complete the sentences about the year.",
      "type": "fill",
      "items": [
        "{{Annus}} dīviditur in duodecim mēnsēs.",
        "Iānuārius {{mēnsis}} annī prīmus est.",
        "December est mēnsis annī {{postrēmus}}.",
        "In annō sunt {{trecentī}} {{sexāgintā}} quīnque [CCCLXV] {{diēs}}.",
        "{{Saeculum}} est centum annī; duo saecula sunt {{ducentī}} [CC] annī.",
        "Centum annī {{vel}} saeculum est longum {{tempus}}.",
        "Mēnsis Iānuārius ā deō Iānō {{nōminātur}} [= nōmen habet].",
        "Iānus est deus Rōmānus cui duae {{faciēs}} sunt.",
        "Tempore antīquō Mārtius mēnsis prīmus {{erat}}.",
        "{{Tunc}} [= illō tempore] Octōber mēnsis octāvus erat.",
        "{{Nunc}} autem Iānuārius est mēnsis prīmus; Octōber {{igitur}} [= ergō Octōber] mēnsis decimus est.",
        "Februārius {{duodētrīgintā}} [XXVIII] aut {{ūndētrīgintā}} [XXIX] diēs habet.",
        "Cēterī {{ūndecim}} [XI] mēnsēs longiōrēs sunt.",
        "Aprīlis {{trīgintā}} [XXX] diēs habet; {{item}} Iūnius XXX diēs habet.",
        "Sex mēnsēs sunt {{dīmidia}} pars annī.",
        "Prīma pars diēī est {{māne}}.",
        "Diēs est tempus ā māne ad {{vesperum}}.",
        "{{Nox}} est tempus ā vesperō ad māne.",
        "Māne est {{initium}} diēī, vesper {{fīnis}} diēī est.",
        "Diēs in duodecim {{hōrās}} dīviditur.",
        "Hōra sexta, quae {{merīdiēs}} nōminātur, diem dīvidit in duās {{aequās}} partēs."
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
          "q": "Quot mēnsēs sunt in annō?",
          "a": "Duodecim mēnsēs in annō sunt."
        },
        {
          "q": "Quī mēnsis annī prīmus est?",
          "a": "Iānuārius mēnsis annī prīmus est."
        },
        {
          "q": "Quis est mēnsis annī postrēmus?",
          "a": "December mēnsis annī postrēmus est."
        },
        {
          "q": "Quot diēs habet annus?",
          "a": "Annus trecentōs sexāgintā quīnque diēs habet."
        },
        {
          "q": "Num homō ducentōs annōs vīvere potest?",
          "a": "Nōn potest; nēmō ducentōs annōs vīvit."
        },
        {
          "q": "Ā quō nōminātur mēnsis Iānuārius?",
          "a": "Mēnsis Iānuārius ā deō Iānō nōminātur."
        },
        {
          "q": "Quot oculōs et quot ōra habet deus Iānus?",
          "a": "Iānus duōs oculōs et duo ōra habet."
        },
        {
          "q": "Cūr mēnsis nōnus September nōminātur?",
          "a": "September ā numerō septem nōminātur, quod tempore antīquō septimus mēnsis erat."
        },
        {
          "q": "Quot diēs habet mēnsis September?",
          "a": "September trīgintā diēs habet."
        },
        {
          "q": "Quam longus est mēnsis Octōber?",
          "a": "Octōber ūnum et trīgintā diēs longus est."
        },
        {
          "q": "Estne mēnsis Februārius longior quam Mārtius?",
          "a": "Februārius nōn longior, sed brevior est quam Mārtius."
        },
        {
          "q": "Quae est pars diēī postrēma?",
          "a": "Vesper est pars diēī postrēma."
        },
        {
          "q": "In quot hōrās dīviditur diēs?",
          "a": "Diēs in duodecim hōrās dīviditur."
        },
        {
          "q": "Quot mēnsēs sunt dīmidia pars annī?",
          "a": "Sex mēnsēs sunt dīmidia pars annī."
        }
      ]
    },
    {
      "id": "exercitium-4",
      "latinLabel": "EXERCITIUM 4",
      "title": "Exercise 4",
      "instruction": "Complete the accusative of time.",
      "type": "fill",
      "items": [
        "Homō sānus centum ann{{ōs}} vīvere potest.",
        "Nēmō ducent{{ōs}} ann{{ōs}} vīvit.",
        "Canis duodecim ann{{ōs}} vīvere potest.",
        "Mēdus mult{{ās}} hōr{{ās}} in sōle ambulat.",
        "Aemilius sex mēns{{ēs}} mīlitat in Germāniā.",
        "Quīntus trēs di{{ēs}} et trēs noct{{ēs}} in lectō iacet.",
        "Mīlitēs pauc{{ās}} hōr{{ās}} dormiunt."
      ]
    },
    {
      "id": "exercitium-5",
      "latinLabel": "EXERCITIUM 5",
      "title": "Exercise 5",
      "instruction": "Complete the comparisons with the comparative or superlative.",
      "type": "fill",
      "items": [
        "Nūllus mēnsis brev{{ior}} est quam Februārius: is mēnsis annī brev{{issimus}} est.",
        "Sōl est stēlla clār{{ior}} quam cēterae stēllae: sōl stēlla caelī clār{{issima}} est.",
        "Nīlus flūmen long{{ius}} et lāt{{ius}} est quam cētera flūmina Āfricae: id flūmen Āfricae long{{issimum}} et lāt{{issimum}} est.",
        "Nūllī mīlitēs fort{{iōrēs}} sunt quam Rōmānī: Rōmānī mīlitēs fort{{issimī}} sunt.",
        "Tiberius praenōmen long{{ius}} est quam cētera praenōmina: id praenōmen Latīnum long{{issimum}} est.",
        "Verba īre et dare brev{{iora}} sunt quam cētera verba Latīna: ea verba Latīna brev{{issima}} sunt.",
        "Merīdiē sōl alt{{ior}} in caelō est quam ante et post merīdiem: merīdiē sōl alt{{issimus}} est in caelō.",
        "Mēdus: \"Nūlla fēmina tam fōrmōsa aut tam proba est quam Lydia: ea fēmina fōrmōs{{ior}} ac prob{{ior}} est!\""
      ]
    },
    {
      "id": "exercitium-6",
      "latinLabel": "EXERCITIUM 6",
      "title": "Exercise 6",
      "instruction": "Complete the forms of diēs in each case.",
      "type": "fill",
      "items": [
        "Di{{ēs}} est tempus ā māne ad vesperum.",
        "Hōra sexta di{{em}} dīvidit in duās aequās partēs.",
        "Vesper est fīnis di{{ēī}}.",
        "Di{{ē}} prīmō mēnsis Septembris nōmen est kalendae Septembrēs.",
        "Di{{ē}} quīntō decimō post lūnam novam lūna plēna est.",
        "Aestāte di{{ēs}} longiōrēs sunt quam noctēs.",
        "Annus CCCCLXV di{{ēs}} habet; numerus di{{ērum}} magnus est.",
        "Prīmīs mēnsium di{{ēbus}} nōmina sunt kalendae Iānuāriae, Februāriae, Mārtiae, Aprīlēs, cētera.",
        "Mēnsēs incipiunt ab iīs di{{ēbus}} quī kalendae dīcuntur."
      ]
    },
    {
      "id": "exercitium-7",
      "latinLabel": "EXERCITIUM 7",
      "title": "Exercise 7",
      "instruction": "Complete the sentences about the moon, the seasons and the weather.",
      "type": "fill",
      "items": [
        "Nōn sōl, sed {{lūna}} et {{stēllae}} lūcent nocte.",
        "{{Lūx}} lūnae ā sōle venit; itaque lūna nōn tam {{clāra}} est quam sōl.",
        "Sōl terram et lūnam lūce suā {{illūstrat}}.",
        "Nōn {{tōta}} lūna lūce sōlis illūstrātur; ea pars lūnae quae nōn illūstrātur {{obscūra}} est.",
        "Cum lūna nova est, {{exigua}} [= parva] pars eius vidētur.",
        "Lūna dimidia {{fōrmam}} habet litterae D.",
        "Diēs mēnsis prīmus dīcitur {{kalendae}}, diēs quīntus aut septimus {{nōnae}}, diēs tertius decimus aut quīntus decimus {{īdūs}}.",
        "A. d. viii kal. Apr. et a. d. viii kal. Oct. {{aequinoctia}} dīcuntur, nam iīs diēbus nox aequa est {{atque}} diēs.",
        "Tempora annī sunt vēr, {{aestās}}, autumnus, {{hiems}}.",
        "{{Vēr}} ā Mārtiō {{initium}} facit, {{autumnus}} ā Septembrī.",
        "Aestās nōn tempus {{frīgidum}}, sed tempus {{calidum}} est.",
        "Eō tempore multī Rōmānī {{urbem}} [= Rōmam] relinquunt.",
        "Hieme nōn sōlum {{imber}}, sed etiam {{nix}} dē nūbibus cadit.",
        "Hieme {{lacūs}} Germāniae glaci{{ē}} {{operiuntur}}.",
        "Germānī puerī super {{glaciem}} lacuum lūdunt."
      ]
    },
    {
      "id": "exercitium-8",
      "latinLabel": "EXERCITIUM 8",
      "title": "Exercise 8",
      "instruction": "Answer each question in Latin.",
      "type": "questions",
      "items": [
        {
          "q": "Unde venit lūx lūnae?",
          "a": "Lūx lūnae ā sōle venit."
        },
        {
          "q": "Num tōta lūna sōle illūstrātur?",
          "a": "Nōn tōta lūna illūstrātur, sed ea pars quae vertitur ad sōlem."
        },
        {
          "q": "Quis dīcitur diēs tertius decimus mēnsis Aprīlis?",
          "a": "Diēs tertius decimus mēnsis Aprīlis īdūs Aprīlēs dīcitur."
        },
        {
          "q": "Quō mēnse longissimī sunt diēs?",
          "a": "Mēnse Iūniō diēs longissimī sunt."
        },
        {
          "q": "Quae sunt quattuor tempora annī?",
          "a": "Vēr, aestās, autumnus et hiems sunt quattuor tempora annī."
        },
        {
          "q": "Ā quō mēnse incipit annus?",
          "a": "Annus ā mēnse Iānuāriō incipit."
        },
        {
          "q": "Quod annī tempus incipit ā mēnse Decembrī?",
          "a": "Hiems ā mēnse Decembrī incipit."
        },
        {
          "q": "Quī mēnsis annī frīgidissimus est?",
          "a": "Iānuārius mēnsis annī frīgidissimus est."
        },
        {
          "q": "Cūr multī hominēs urbem relinquunt aestāte?",
          "a": "Aestāte multī hominēs urbem relinquunt, quia aestās calida est et in urbe manēre nōn volunt."
        },
        {
          "q": "Quandō folia dē arboribus cadunt?",
          "a": "Autumnō folia dē arboribus cadunt."
        },
        {
          "q": "Quandō arborēs novīs foliīs ōrnantur?",
          "a": "Vērē arborēs novīs foliīs ōrnantur."
        },
        {
          "q": "Quī diēs annī brevissimus est?",
          "a": "Diēs octāvus ante kalendās Iānuāriās est diēs annī brevissimus."
        }
      ]
    },
    {
      "id": "exercitium-9",
      "latinLabel": "EXERCITIUM 9",
      "title": "Exercise 9",
      "instruction": "Complete the sentences with erat/erant or est/sunt as the sense requires.",
      "type": "fill",
      "items": [
        "Antīquīs temporibus Mārtius mēnsis prīmus {{erat}}.",
        "September, quī nunc mēnsis nōnus {{est}}, tunc mēnsis septimus {{erat}}.",
        "Tunc Rōma urbs nōn tam pulchra {{erat}} quam nunc {{est}}.",
        "Tunc Rōmānī pauciōrēs {{erant}} quam nunc {{sunt}}.",
        "Ante tempus Caesaris mēnsī septimō nōmen {{erat}} Quīntīlis."
      ]
    },
    {
      "id": "exercitium-10",
      "latinLabel": "EXERCITIUM 10",
      "title": "Exercise 10",
      "instruction": "Complete the ablatives of time and the forms of diēs.",
      "type": "fill",
      "items": [
        "Aest{{āte}} diēs longiōrēs sunt quam hiem{{e}}.",
        "Mēns{{e}} Mārti{{ō}} et mēns{{e}} Septembr{{ī}} diēs aequī sunt ac noctēs.",
        "Hōr{{ā}} sext{{ā}} vel merīdi{{ē}} sōl altissimus est.",
        "Quandō lūcet lūna? Lūna noct{{e}} lūcet.",
        "Di{{ē}} octāv{{ō}} post lūnam novam lūna dimidia est.",
        "Vēr{{e}} arborēs novīs foliīs ōrnantur.",
        "E{{ō}} tempor{{e}} avēs nīdōs faciunt."
      ]
    },
    {
      "id": "exercitium-11",
      "latinLabel": "EXERCITIUM 11",
      "title": "Exercise 11",
      "instruction": "Answer each question in Latin.",
      "type": "questions",
      "items": [
        {
          "q": "Estne Quīntus in cubiculō suō?",
          "a": "Ita, Quīntus in cubiculō suō est."
        },
        {
          "q": "Estne obscūrum cubiculum Quīntī?",
          "a": "Ita, cubiculum Quīntī obscūrum est."
        },
        {
          "q": "Cūr Aemilia fenestram claudit?",
          "a": "Aemilia fenestram claudit, quia iam satis obscūrum est cubiculum."
        },
        {
          "q": "Cūr Quīntus hōrās longās esse putat?",
          "a": "Quīntus hōrās longās esse putat, quia tōtum diem in lectō iacēre necesse est."
        },
        {
          "q": "Quod tempus est annī?",
          "a": "Vēr est; mēnsis Maius est."
        },
        {
          "q": "Ā quō nōminātur mēnsis Iūlius?",
          "a": "Mēnsis Iūlius ā Caesare nōminātur, nōn ā patre."
        },
        {
          "q": "Quod nōmen eī mēnsī erat ante tempus Caesaris?",
          "a": "Ante tempus Caesaris eī mēnsī nōmen erat Quīntīlis."
        },
        {
          "q": "Num Iūlius vel Quīntīlis mēnsis quīntus est?",
          "a": "Nōn quīntus, sed septimus mēnsis est."
        },
        {
          "q": "Cūr Quīntus dormīre nōn potest?",
          "a": "Quīntus dormīre nōn potest, quia diēs est et sōl lūcet; nocte dormīre solet."
        },
        {
          "q": "Ubī sōl lūcet cum nox est in Italiā?",
          "a": "Cum in Italiā nox est, sōl in aliīs terrīs ab Italiā lūcet."
        },
        {
          "q": "Quandō hominēs dormiunt?",
          "a": "Hominēs nocte dormiunt."
        },
        {
          "q": "Quae urbs est caput imperiī Rōmānī?",
          "a": "Rōma caput imperiī Rōmānī est."
        }
      ]
    },
    {
      "id": "exercitium-12",
      "latinLabel": "EXERCITIUM 12",
      "title": "Exercise 12",
      "instruction": "Complete the fifth-declension paradigm of diēs and name each form.",
      "type": "fill",
      "items": [
        "Nōm. di{{ēs}} di{{ēs}}",
        "Acc. di{{em}} di{{ēs}}",
        "Gen. di{{ēī}} di{{ērum}}",
        "Dat. di{{ēī}} di{{ēbus}}",
        "Abl. di{{ē}} di{{ēbus}}",
        "Diē est {{ablātīvus}} singulāris.",
        "Diēbus {{datīvus}} aut {{ablātīvus}} plūrālis est.",
        "Diēī est {{genetīvus}} aut {{datīvus}} singulāris.",
        "Diem {{accūsātīvus}} {{singulāris}} est.",
        "Diērum {{genetīvus}} {{plūrālis}} est.",
        "Diēs est {{nōminātīvus}} singulāris aut {{nōminātīvus}} aut {{accūsātīvus}} plūrālis."
      ]
    },
    {
      "id": "exercitium-13",
      "latinLabel": "EXERCITIUM 13",
      "title": "Exercise 13",
      "instruction": "Complete the three degrees of the adjectives altus and brevis.",
      "type": "fill",
      "items": [
        "Brev|is -e positīvus est; brevior -ius {{comparātīvus}} est; brevissim|us -a -um est {{superlātīvus}}.",
        "Pos. alt{{us}} alt{{a}} alt{{um}}",
        "Comp. alt{{ior}} alt{{ior}} alt{{ius}}",
        "Sup. alt{{issimus}} alt{{issima}} alt{{issimum}}",
        "Pos. brev{{is}} brev{{is}} brev{{e}}",
        "Comp. brev{{ior}} brev{{ior}} brev{{ius}}",
        "Sup. brev{{issimus}} brev{{issima}} brev{{issimum}}"
      ]
    },
    {
      "id": "exercitium-19",
      "latinLabel": "EXERCITIUM 19",
      "title": "Exercise 19",
      "instruction": "Complete the paradigm of gravis, -e and name each form.",
      "type": "fill",
      "items": [
        "Gravis -e est adiectīvum {{tertiae}} dēclīnātiōnis.",
        "Nōm. grav{{is}} grav{{e}} grav{{ēs}} grav{{ia}}",
        "Acc. grav{{em}} grav{{e}} grav{{ēs}} grav{{ia}}",
        "Gen. grav{{is}} grav{{is}} grav{{ium}} grav{{ium}}",
        "Dat. grav{{ī}} grav{{ī}} grav{{ibus}} grav{{ibus}}",
        "Abl. grav{{ī}} grav{{ī}} grav{{ibus}} grav{{ibus}}",
        "Masculīnum et fēminīnum: gravis est {{nōminātīvus}} aut {{vocātīvus}} singulāris, gravem {{accūsātīvus}} {{singulāris}}, gravēs {{nōminātīvus}} aut {{accūsātīvus}} plūrālis.",
        "Neutrum: grave est {{nōminātīvus}} aut {{accūsātīvus}} singulāris, gravia {{nōminātīvus}} aut {{accūsātīvus}} plūrālis, gravis {{genetīvus}} singulāris.",
        "Gravī {{datīvus}} aut {{ablātīvus}} singulāris est.",
        "Gravibus {{datīvus}} aut {{ablātīvus}} plūrālis est.",
        "Gravium {{genetīvus}} {{plūrālis}} est."
      ]
    },
    {
      "id": "exercitium-20",
      "latinLabel": "EXERCITIUM 20",
      "title": "Exercise 20",
      "instruction": "Complete the comparative paradigm of longior, -ius and name each form.",
      "type": "fill",
      "items": [
        "Longior -ius -iōris est {{comparātīvus}} adiectīvī.",
        "Nōm. longior long{{ius}} long{{iōrēs}} long{{iōra}}",
        "Acc. long{{iōrem}} longius long{{iōrēs}} long{{iōra}}",
        "Gen. long{{iōris}} long{{iōris}} long{{iōrum}} long{{iōrum}}",
        "Dat. long{{iōrī}} long{{iōrī}} long{{iōribus}} long{{iōribus}}",
        "Abl. long{{iōre}} long{{iōre}} long{{iōribus}} long{{iōribus}}",
        "Masculīnum et fēminīnum: longior est {{nōminātīvus}} singulāris, longiōrem {{accūsātīvus}} {{singulāris}}, longiōrēs {{nōminātīvus}} aut {{accūsātīvus}} plūrālis.",
        "Neutrum: longius est {{nōminātīvus}} aut {{accūsātīvus}} singulāris, longiōra {{nōminātīvus}} aut {{accūsātīvus}} plūrālis.",
        "Longiōre {{ablātīvus}} singulāris est.",
        "Longiōrī {{datīvus}} {{singulāris}} est.",
        "Longiōribus est {{datīvus}} aut {{ablātīvus}} plūrālis.",
        "Longiōris {{genetīvus}} {{singulāris}} est.",
        "Longiōrum est {{genetīvus}} {{plūrālis}}."
      ]
    }
  ]
}

export default chapter
