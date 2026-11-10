// Front and back matter of the Epitome Historiae Sacrae.
// The preface is reproduced from the printed book; the abbreviations are the
// signs used in the marginal notes.

export const extras = [
  {
    id: 'praefatio',
    slug: 'praefatio',
    title: 'Praefatio',
    latinTitle: 'PRAEFATIO',
    sections: [
      {
        id: 'sec-1',
        latin: 'PRAEFATIO',
        english: 'Preface',
        kind: 'reference',
        blocks: [
          {
            t: 'p',
            text: 'Carolus Franciscus Lhomond in parvo quodam Galliae oppido, quod eius civium lingua Chaulnes appellatur, anno MDCCXXVII p. Chr. n. pauperibus parentibus natus est, qui eum litteris studere volentem pecunia adiuvare non potuerunt. Cum autem iam a puero pius et discendi cupidus esset, in seminarium missus est, ubi et linguam Latinam et litteras sive sacras sive non sacras tam bene didicit, ut primum sacerdos, deinde etiam rector eiusdem seminarii factus sit.',
          },
          {
            t: 'p',
            text: 'Seminario autem clauso, litteras in ludo docuit. Librum scripsit De viris illustribus urbis Romae, quo ostendit Romanorum antiquorum virtutes discipulis suis imitandas, et Epitomen historiae sacrae, qua narravit ea, quae in Vetere Testamento continentur: res gestas Iudaeorum scilicet, a tempore antiquissimo, quo Deus fecerat terrarum orbem, usque ad Iesu Christi nativitatem; cui libro ignotus quidam scriptor epitomen addidit Novi Testamenti, qua Iesu, divini hominis, vita et mors eiusdemque mirabilia facta narrantur.',
          },
          {
            t: 'p',
            text: 'Cum vero anno MDCCXCII fidem polliceri noluisset hominibus et militibus qui interea regem occisuri erant atque res in Gallia iam mutaverant, in carcerem est coniectus, unde paulo post, liberatus a Ioanne Lamberto Tallien — olim eius discipulo qui semper gratus fuit magistro ob ea omnia quae ille magno cum amore docuerat — exiit.',
          },
          {
            t: 'p',
            text: 'Duobus post annis tranquille, ut vixerat, mortuus est.',
          },
        ],
      },
    ],
  },
  {
    id: 'notae',
    slug: 'notae',
    title: 'Notae',
    latinTitle: 'NOTAE',
    sections: [
      {
        id: 'sec-1',
        latin: 'NOTAE',
        english: 'Abbreviations',
        kind: 'reference',
        blocks: [
          {
            t: 'p',
            text: 'Ad paginarum latera explicantur vocabula quae non reperiuntur in capitulis libri cui titulus est Familia Romana. Signa quibus auctor utitur haec sunt.',
          },
          {
            t: 'table',
            rows: [
              ['Signum', 'Significat', 'Signum', 'Significat'],
              ['=', 'idem atque', 'Gr', 'Graece'],
              ['id est', '', 'imperf', 'imperfectum'],
              ['↔', 'contrarium', 'ind', 'indicativus'],
              ['<', 'factum/ortum est', 'indecl', 'non declinatur'],
              ['|', 'sive', 'm', 'masculinum'],
              ['+ dat', 'cum dativo', 'n', 'neutrum'],
              ['+ acc', 'cum accusativo', 'f', 'femininum'],
              ['+ gen', 'cum genitivo', 'pl', 'pluralis'],
              ['+ abl', 'cum ablativo', 'sg', 'singularis'],
              ['adv', 'adverbium', 'coni', 'coniunctivus'],
              ['perf', 'perfectum', 'fut', 'futurum'],
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'indices',
    slug: 'indices',
    title: 'Indices',
    latinTitle: 'INDICES',
    sections: [
      {
        id: 'sec-1',
        latin: 'INDEX NOMINVM ET VOCABVLORVM',
        english: 'Indexes of names and words',
        kind: 'reference',
        blocks: [
          {
            t: 'p',
            text: 'Liber impressus etiam indices continet: VETERIS NOVIQVE TESTAMENTI REGIONES, VRBES ET OPPIDA; ORDO TEMPORVM HISTORIAE SACRAE; INDEX NOMINVM; INDEX VOCABVLORVM. In hac editione electronica textus praecipuus et notae marginales praebentur; indices ad libros impressos remittunt.',
          },
        ],
      },
    ],
  },
]

export default extras
