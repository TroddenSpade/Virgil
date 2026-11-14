/* Scenery for the Via map: small line drawings of Roman country life,
   placed in the empty pockets between lesson labels — never on the stage
   dividers. Each scene fits a 60 × 26 box with its ground line at y = 0. */

const scene = (nature, paths, extra = {}) => ({ nature, paths, ...extra })

const SCENES = {
  /* ---------- Landscape ---------- */
  coast: scene(true, [
    'M-30 2 H30',
    'M-28 6 q6 -5 12 0 q6 -5 12 0 q6 -5 12 0 q6 -5 12 0 q6 -5 12 0',
    'M-20 -4 l4 -3 l4 3',
    'M-4 -8 l4 -3 l4 3',
  ]),
  vesuvius: scene(true, [
    'M-30 0 L-12 -20 L-2 -8 L10 -24 L30 0 Z',
    'M-12 -20 L-8 -13 L-16 -13 Z',
    'M10 -24 L14 -17 L6 -17 Z',
    'M6 -26 q2 -5 5 -2 q-1 3 1 6',
  ]),
  cliffs: scene(true, [
    'M-30 0 H30',
    'M-30 0 L-12 0 L-10 -12 L-3 -16 L0 0',
    'M0 0 L8 -10 L15 -5 L18 0',
  ]),
  grotto: scene(true, [
    'M-30 0 H30',
    'M-22 0 Q-22 -22 -8 -22 Q0 -22 0 -12 Q0 -22 8 -22 Q22 -22 22 0',
    'M-12 0 Q-12 -11 0 -11 Q12 -11 12 0',
  ]),
  reeds: scene(true, [
    'M-30 0 H30',
    'M-18 0 q-3 -10 0 -20 M-12 0 q3 -7 0 -14 M-6 0 q-2 -12 0 -22',
    'M2 0 q3 -9 0 -18 M8 0 q-3 -11 0 -20 M14 0 q2 -6 0 -12',
  ]),
  cypress: scene(true, [
    'M-30 0 H30',
    'M-16 0 C-20 -8 -13 -18 -16 -26 C-19 -18 -12 -8 -16 0 Z',
    'M0 0 C-4 -7 3 -16 0 -24 C-3 -16 4 -7 0 0 Z',
    'M16 0 C12 -8 19 -18 16 -26 C13 -18 20 -8 16 0 Z',
  ]),
  pine: scene(true, [
    'M-30 0 H30',
    'M0 0 V-14',
    'M-15 -14 Q0 -26 15 -14 Q0 -18 -15 -14 Z',
  ]),
  mountain: scene(true, [
    'M-30 0 L-14 -22 L-2 -8 L12 -24 L30 0 Z',
    'M-14 -22 L-10 -15 L-17 -15 Z',
  ]),

  /* ---------- Rural ---------- */
  vineyard: scene(true, [
    'M-30 0 H30',
    'M-22 0 V-16 M-12 0 V-16 M-2 0 V-16 M8 0 V-16 M18 0 V-16',
    'M-22 -12 q5 -5 10 0 M-12 -13 q5 -5 10 0 M-2 -12 q5 -5 10 0 M8 -13 q5 -5 10 0 M18 -12 q5 -5 10 0',
  ]),
  wheat: scene(true, [
    'M-30 0 H30',
    'M-22 0 V-14 M-16 0 V-18 M-10 0 V-12 M-4 0 V-16',
    'M2 0 V-11 M8 0 V-17 M14 0 V-13 M20 0 V-15',
  ]),
  orchard: scene(true, [
    'M-30 0 H30',
    'M-18 0 V-8 M0 0 V-10 M18 0 V-7',
  ], {
    ellipses: [[-18, -15, 7, 6], [0, -17, 8, 7], [18, -14, 6, 5]],
  }),
  fence: scene(true, [
    'M-30 0 H30',
    'M-26 0 V-9 M-14 0 V-9 M-2 0 V-9 M10 0 V-9 M22 0 V-9',
    'M-26 -5 H22',
  ]),
  olive: scene(true, [
    'M-30 0 H30',
    'M-16 0 V-8 M16 0 V-7',
  ], {
    ellipses: [[-16, -14, 8, 6], [16, -12, 7, 5]],
  }),
  ruins: scene(true, [
    'M-30 0 H30',
    'M-16 0 V-18 M-10 0 V-12',
    'M-20 -18 H-12 M-14 -12 H-6',
    'M4 -6 H16 V-2 H4 Z',
    'M8 -6 V-2 M12 -6 V-2',
  ]),

  /* ---------- Built ---------- */
  villa: scene(false, [
    'M-30 0 H30',
    'M-20 -2 H6 V-14 H-20 Z',
    'M-24 -14 L-7 -23 L10 -14 Z',
    'M-12 -2 V-9 H-6 V-2',
    'M-18 -12 H-14 V-8 H-18 Z',
    'M20 -2 C17 -8 20 -16 20 -24 C20 -16 23 -8 20 -2 Z',
  ]),
  temple: scene(false, [
    'M-30 0 H30',
    'M-22 -2 H22 V-6 H-22 Z',
    'M-18 -6 V-20 M-9 -6 V-20 M0 -6 V-20 M9 -6 V-20 M18 -6 V-20',
    'M-22 -20 H22 L0 -26 Z',
  ]),
  tholos: scene(false, [
    'M-30 0 H30',
    'M-16 -2 H16 V-5 H-16 Z',
    'M-12 -5 V-14 M-6 -5 V-14 M0 -5 V-14 M6 -5 V-14 M12 -5 V-14',
    'M-14 -14 Q0 -24 14 -14',
  ]),
  tomb: scene(false, [
    'M-30 0 H30',
    'M-14 -2 H14 V-6 H-14 Z',
    'M-10 -6 H10 V-16 H-10 Z',
    'M-12 -16 H12 L0 -24 Z',
    'M-3 -6 V-12 H3 V-6',
  ]),
  lighthouse: scene(false, [
    'M-30 0 H30',
    'M-8 -2 H8 L6 -18 H-6 Z',
    'M-7 -18 H7 V-22 H-7 Z',
    'M0 -22 l-3 -4 M0 -22 l3 -4 M0 -22 v-4',
  ]),
  bridge: scene(false, [
    'M-30 0 H30',
    'M-22 -2 V-10 H22 V-2',
    'M-22 -10 Q-11 -22 0 -10 Q11 -22 22 -10',
    'M-22 0 V5 M22 0 V5',
  ]),
  arch: scene(false, [
    'M-30 0 H30',
    'M-18 -2 V-18 H18 V-2',
    'M-12 -2 V-10 Q0 -20 12 -10 V-2',
    'M-18 -18 Q0 -26 18 -18',
  ]),
  insulae: scene(false, [
    'M-30 0 H30',
    'M-22 -2 H-4 V-22 H-22 Z',
    'M-4 -2 H14 V-14 H-4 Z',
    'M14 -2 H26 V-20 H14 Z',
    'M-18 -18 H-8 M-18 -12 H-8 M0 -10 H8 M0 -6 H8 M18 -16 H22 M18 -10 H22',
  ]),
  citygate: scene(false, [
    'M-30 0 H30',
    'M-18 -2 V-18 H-8 V-2 M8 -2 V-18 H18 V-2',
    'M-8 -8 Q0 -18 8 -8 V-2 H-8 Z',
    'M-18 -18 H-8 M8 -18 H18',
  ]),
  well: scene(false, [
    'M-30 0 H30',
    'M-10 -2 H10 V-8 H-10 Z',
    'M-12 -8 H12 L0 -18 Z',
    'M0 -8 V-2',
  ]),
  fountain: scene(false, [
    'M-30 0 H30',
    'M-14 -2 H14 V-8 H-14 Z',
    'M0 -8 V-14',
    'M-4 -14 H4',
    'M0 -14 q-8 2 -10 8 M0 -14 q8 2 10 8',
  ]),
  dovecote: scene(false, [
    'M-30 0 H30',
    'M-8 -2 H8 V-20 H-8 Z',
    'M-12 -20 H12 L0 -26 Z',
    'M-5 -16 h3 v3 h-3 Z M2 -16 h3 v3 h-3 Z M-5 -10 h3 v3 h-3 Z M2 -10 h3 v3 h-3 Z',
  ]),
  altar: scene(false, [
    'M-30 0 H30',
    'M-10 -2 H10 V-10 H-10 Z',
    'M-14 -10 H14 V-13 H-14 Z',
    'M0 -13 q-3 -4 0 -7 q3 3 0 7',
  ]),
  theatre: scene(false, [
    'M-30 0 H30',
    'M-20 -2 Q0 -24 20 -2',
    'M-14 -2 Q0 -18 14 -2',
    'M-6 -2 Q0 -10 6 -2',
  ]),
  amphitheatre: scene(false, [
    'M-30 0 H30',
    'M-24 -2 Q0 -26 24 -2',
    'M-16 -4 Q0 -20 16 -4',
    'M-8 -6 Q0 -14 8 -6',
  ]),
  colonnade: scene(false, [
    'M-30 0 H30',
    'M-24 -20 H24',
    'M-24 -16 H24',
    'M-20 -16 V-2 M-10 -16 V-2 M0 -16 V-2 M10 -16 V-2 M20 -16 V-2',
  ]),
  towerwall: scene(false, [
    'M-30 0 H30',
    'M-30 -8 H30 V-2 H-30 Z',
    'M-26 -8 V-16 H-18 V-8 M-8 -8 V-16 H0 V-8 M10 -8 V-16 H18 V-8',
  ]),
  pomerium: scene(false, [
    'M-30 0 H30',
    'M-20 0 V-10 M0 0 V-12 M20 0 V-9',
    'M-23 -10 H-17 M-3 -12 H3 M17 -9 H23',
  ]),

  /* ---------- Animals ---------- */
  flock: scene(true, [
    'M-30 0 H30',
    'M-22 -4 V0 M-18 -4 V0 M-4 -4 V0 M0 -4 V0 M14 -4 V0 M18 -4 V0',
  ], {
    ellipses: [[-20, -7, 7, 4.5], [-2, -8, 8, 5], [16, -6, 6, 4]],
    circles: [[-12, -8, 1.6], [-9.5, -8, 1.6], [9, -9, 1.6], [11.5, -9, 1.6]],
  }),
  shepherd: scene(true, [
    'M-30 0 H30',
    'M-18 -20 V-8 M-18 -16 L-22 -12 M-18 -16 L-14 -12 M-18 -8 L-21 -2 M-18 -8 L-15 -2',
    'M-12 -24 V0 M-12 -24 Q-9 -26 -8 -23',
    'M2 -4 V0 M6 -4 V0',
  ], {
    circles: [[-18, -22, 2]],
    ellipses: [[6, -7, 6, 4]],
  }),
  horse: scene(true, [
    'M-30 0 H30',
    'M-18 -4 C-20 -12 -10 -16 0 -16 C10 -16 14 -12 16 -8 L20 -10 L22 -4 L16 -4',
    'M-14 0 L-12 -8 M-2 0 L0 -10 M8 0 L10 -8',
    'M-20 -8 L-24 -12',
  ]),
  donkey: scene(true, [
    'M-30 0 H30',
    'M-16 -4 C-18 -12 -8 -15 0 -15 C8 -15 12 -12 14 -8 L18 -9 L20 -4 L14 -4',
    'M-12 0 V-7 M-2 0 V-8 M6 0 V-7',
    'M-18 -12 l-2 -7 M-14 -14 l0 -7',
  ]),
  oxen: scene(true, [
    'M-30 0 H30',
    'M-20 -6 C-22 -13 -14 -16 -8 -16 C-2 -16 2 -12 4 -8 L10 -10 L12 -5 L6 -5',
    'M-14 0 V-6 M-8 0 V-6 M0 0 V-6',
    'M4 -10 q4 -4 8 -1 M-18 -14 q3 -3 6 0',
  ]),
  pigs: scene(true, [
    'M-30 0 H30',
    'M-16 -4 C-18 -10 -10 -12 -4 -12 C2 -12 6 -9 6 -5 L10 -6 L11 -3 L7 -3',
    'M-10 0 V-4 M-2 0 V-4',
    'M8 -6 q2 -3 4 0',
  ]),
  poultry: scene(true, [
    'M-30 0 H30',
    'M-16 -4 C-18 -10 -12 -12 -8 -10 C-4 -12 0 -8 -4 -4 L-6 0 M-12 0 V-4',
    'M4 -6 C2 -12 8 -14 12 -10 C16 -12 18 -8 14 -5 L12 0 M8 0 V-5',
    'M-8 -10 l3 -3 M12 -10 l3 -3',
  ]),
  deer: scene(true, [
    'M-30 0 H30',
    'M-16 -4 C-18 -12 -8 -16 0 -16 C8 -16 12 -12 14 -8 L18 -10 L20 -5 L14 -5',
    'M-12 0 V-5 M-4 0 V-6 M6 0 V-5',
    'M-14 -12 l-4 -6 M-10 -14 l-2 -7 M12 -12 l4 -6 M8 -14 l2 -7',
  ]),
  hare: scene(true, [
    'M-30 0 H30',
    'M-12 -4 C-16 -10 -6 -14 2 -12 C12 -10 16 -6 16 -2 L10 -3',
    'M-8 0 V-4 M2 0 V-4',
    'M-8 -12 l-2 -8 M-4 -12 l-1 -8',
  ]),
  boar: scene(true, [
    'M-30 0 H30',
    'M-16 -4 C-18 -14 -6 -18 4 -14 C12 -12 16 -8 18 -4 L12 -4',
    'M-12 0 V-5 M-2 0 V-6 M6 0 V-5',
    'M-14 -14 l-3 -4 M-10 -16 l-2 -4',
  ]),
  beehives: scene(true, [
    'M-30 0 H30',
    'M-18 -2 H-8 V-14 H-18 Z',
    'M-16 -14 H-10 L-13 -18 Z',
    'M0 -2 H10 V-12 H0 Z',
    'M2 -12 H8 L5 -16 Z',
    'M16 -2 H26 V-10 H16 Z',
    'M18 -10 H24 L21 -13 Z',
  ]),
  goat: scene(true, [
    'M-30 0 H30',
  ], {
    ellipses: [[0, -9, 10, 5.5]],
    paths: [
      'M-30 0 H30',
      'M8 -11 L14 -16 L15 -22',
      'M15 -22 Q12 -26 11 -22 M15 -22 Q18 -26 19 -22',
      'M-7 -4 V0 M-3 -4 V0 M4 -4 V0 M8 -4 V0',
      'M-10 -9 L-15 -12',
    ],
  }),
  wolf: scene(true, [
    'M-30 0 H30',
    'M-16 -4 L-14 -13 L2 -15 L12 -10 L16 -15 L18 -8 L13 -4 Z',
    'M-12 -15 L-15 -19 L-9 -17',
    'M-14 -4 V0 M-8 -4 V0 M6 -4 V0 M12 -4 V0',
    'M-16 -9 L-22 -12',
  ]),

  /* ---------- People ---------- */
  ploughman: scene(false, [
    'M-30 0 H30',
    'M-14 -20 V-6 M-14 -16 L-10 -12 M-6 -20 V-6',
    'M-6 -10 H10 V-6 H-6 Z',
    'M10 -6 L16 -2 H22',
  ], {
    circles: [[-14, -22, 2]],
  }),
  vintner: scene(false, [
    'M-30 0 H30',
    'M-16 -20 V-6 M-16 -16 L-12 -12 M-8 -20 V-6',
    'M-18 -8 H-8 V-2 H-18 Z',
    'M-13 -10 q-3 -4 0 -7 q3 3 0 7',
  ], {
    circles: [[-12, -22, 2]],
  }),
  fisherman: scene(false, [
    'M-30 0 H30',
    'M-16 -20 V-6 M-16 -16 L-10 -12',
    'M-16 -20 L4 -26',
    'M4 -26 V-14',
    'M-6 -2 H6 V-6 H-6 Z',
  ], {
    circles: [[-16, -22, 2]],
  }),
  legionary: scene(false, [
    'M-30 0 H30',
    'M-14 -20 V-6 M-14 -16 L-18 -10 M-8 -20 V-6 M-8 -16 L-4 -10',
    'M-18 -18 H-4 V-10 H-18 Z',
    'M-11 -24 V-18',
    'M-13 -28 H-9',
  ], {
    circles: [[-11, -21, 1.8]],
  }),
  lictor: scene(false, [
    'M-30 0 H30',
    'M-12 -20 V-6 M-12 -16 L-16 -10',
    'M-6 -26 V-2',
    'M-10 -24 H-2 M-10 -21 H-2 M-10 -18 H-2',
  ], {
    circles: [[-12, -22, 2]],
  }),
  augur: scene(false, [
    'M-30 0 H30',
    'M-12 -20 V-6 M-12 -16 L-8 -12',
    'M-12 -20 L-4 -14',
    'M2 -4 C0 -8 6 -10 8 -6 L10 0 M4 0 V-4',
  ], {
    circles: [[-12, -22, 2]],
  }),
  vestal: scene(false, [
    'M-30 0 H30',
    'M-12 -20 V-6 M-12 -16 L-8 -12',
    'M-12 -20 Q-12 -26 -6 -26 Q0 -26 0 -20 L0 -6',
  ], {
    circles: [[-12, -21, 1.8]],
  }),
  womanwell: scene(false, [
    'M-30 0 H30',
    'M-14 -20 V-6 M-14 -16 L-10 -12',
    'M0 -2 H12 V-8 H0 Z',
    'M0 -8 H12 L6 -16 Z',
  ], {
    circles: [[-14, -22, 2]],
  }),
  childdog: scene(true, [
    'M-30 0 H30',
    'M-12 -14 V-2 M-12 -10 L-8 -8',
    'M2 -4 C0 -8 6 -10 8 -6 L12 -8 L13 -4 L9 -4',
    'M2 0 V-4',
  ], {
    circles: [[-12, -16, 2]],
  }),

  /* ---------- Objects ---------- */
  amphora: scene(false, [
    'M-8 -2 C-12 -8 -10 -16 -6 -18 H6 C10 -16 12 -8 8 -2 Z',
    'M-6 -18 H6',
    'M-8 -2 H8',
    'M-2 -18 V-22 H2 V-18',
  ]),
  dolium: scene(false, [
    'M-12 -2 C-16 -10 -14 -18 -8 -18 H8 C14 -18 16 -10 12 -2 Z',
    'M-10 -18 H10',
    'M-14 -2 H14',
  ]),
  milestone: scene(false, [
    'M-4 -2 V-18 H4 V-2 Z',
    'M-6 0 H6',
    'M-2 -14 H2 M-2 -10 H2',
  ]),
  statue: scene(false, [
    'M-6 0 H6 V-5 H-6 Z',
    'M0 -5 V-16',
    'M-5 -18 H5 L0 -24 Z',
    'M-4 -10 L-8 -16 M4 -10 L8 -16',
  ]),
  herm: scene(false, [
    'M-2 0 V-14 H2 V0',
    'M-5 -14 H5 V-18 H-5 Z',
    'M-4 -22 Q0 -26 4 -22',
    'M-3 -18 V-14 M3 -18 V-14',
  ]),
  sundial: scene(false, [
    'M-6 0 H6 V-4 H-6 Z',
    'M0 -4 V-18',
    'M-8 -8 H8',
    'M0 -18 l4 -3',
  ]),
  plough: scene(false, [
    'M-20 0 H20',
    'M-12 -2 L-2 -6 L6 -2',
    'M-6 -6 V-12',
    'M-14 -2 V-6',
  ]),
  loom: scene(false, [
    'M-14 0 V-18 M14 0 V-18',
    'M-14 -18 H14 M-14 -12 H14',
    'M-10 -18 V0 M-5 -18 V0 M0 -18 V0 M5 -18 V0 M10 -18 V0',
  ]),
  basket: scene(false, [
    'M-10 -2 H10 L7 -12 H-7 Z',
    'M-10 -2 Q0 -6 10 -2',
    'M-7 -12 Q0 -16 7 -12',
    'M-4 -8 V-2 M0 -8 V-2 M4 -8 V-2',
  ]),
  ship: scene(false, [
    'M-30 2 H30',
    'M-20 0 H18 L12 -6 H-14 Z',
    'M0 -6 V-22',
    'M0 -20 L12 -8 H0 Z',
    'M-2 0 V-4 M10 0 V-4',
  ]),
  anchor: scene(false, [
    'M0 -4 V-20',
    'M-6 -16 H6',
    'M0 -4 Q-10 -2 -10 6 Q-10 2 0 2 Q10 2 10 6 Q10 -2 0 -4',
  ]),
  lyre: scene(false, [
    'M-8 0 Q-12 -10 -8 -18 M8 0 Q12 -10 8 -18',
    'M-8 -4 H8',
    'M-4 -4 V-16 M0 -4 V-16 M4 -4 V-16',
  ]),
  scroll: scene(false, [
    'M-8 -4 H8 V-18 H-8 Z',
    'M-12 -18 Q-8 -22 -4 -18 M12 -18 Q8 -22 4 -18',
    'M-5 -12 H5 M-5 -8 H5',
  ]),
  laurel: scene(true, [
    'M-10 0 Q-18 -10 -10 -20 M10 0 Q18 -10 10 -20',
    'M-13 -4 l-4 -2 M-15 -9 l-4 -1 M-13 -14 l-4 2',
    'M13 -4 l4 -2 M15 -9 l4 -1 M13 -14 l4 2',
  ]),
  fasces: scene(false, [
    'M-2 0 V-18 H2 V0',
    'M-6 -4 H6 M-6 -9 H6 M-6 -14 H6',
    'M0 -18 L-4 -24 L4 -24 Z',
  ]),

  /* ---------- Sacred ---------- */
  grove: scene(true, [
    'M-30 0 H30',
    'M-18 0 V-8 M0 0 V-10 M18 0 V-7',
  ], {
    ellipses: [[-18, -15, 8, 7], [0, -18, 9, 8], [18, -14, 7, 6]],
  }),
  hermae: scene(false, [
    'M-30 0 H30',
    'M-18 0 V-14 H-14 V0 M0 0 V-16 H4 V0 M18 0 V-14 H22 V0',
    'M-19 -14 H-13 V-18 H-19 Z M-1 -16 H5 V-20 H-1 Z M17 -14 H23 V-18 H17 Z',
    'M-18 -22 Q-16 -25 -14 -22 M0 -24 Q2 -27 4 -24 M18 -22 Q20 -25 22 -22',
  ]),

  /* ---------- More of the catalogue ---------- */
  doves: scene(true, [
    'M-30 0 H30',
    'M-16 -8 q4 -8 8 0 q4 -8 8 0',
    'M2 -6 q4 -7 7 0 q3 -7 7 0',
  ]),
  fishpond: scene(true, [
    'M-30 0 H30',
    'M-22 -2 H22 V-10 H-22 Z',
    'M-16 -6 q4 -6 8 0 q-4 6 -8 0',
    'M2 -5 q4 -5 8 0 q-4 5 -8 0',
  ]),
  olivepicker: scene(false, [
    'M-30 0 H30',
    'M-14 -20 V-6 M-14 -16 L-10 -12',
    'M6 0 V-10',
    'M-2 -14 Q-2 -24 8 -24 Q18 -24 18 -14 Q8 -10 -2 -14 Z',
    'M14 -22 V-26',
  ], { circles: [[-14, -22, 2]] }),
  merchant: scene(false, [
    'M-30 0 H30',
    'M-14 -20 V-6 M-14 -16 L-10 -12',
    'M4 -2 C2 -8 4 -14 8 -16 H14 C18 -14 20 -8 18 -2 Z',
    'M6 -16 H16',
  ], { circles: [[-14, -22, 2]] }),
  columbarium: scene(false, [
    'M-30 0 H30',
    'M-22 -2 H22 V-20 H-22 Z',
    'M-18 -6 h4 v4 h-4 Z M-10 -6 h4 v4 h-4 Z M-2 -6 h4 v4 h-4 Z M6 -6 h4 v4 h-4 Z M14 -6 h4 v4 h-4 Z',
    'M-18 -13 h4 v4 h-4 Z M-10 -13 h4 v4 h-4 Z M-2 -13 h4 v4 h-4 Z M6 -13 h4 v4 h-4 Z M14 -13 h4 v4 h-4 Z',
  ]),
  inn: scene(false, [
    'M-30 0 H30',
    'M-18 -2 H8 V-14 H-18 Z',
    'M-22 -14 L-5 -22 L12 -14 Z',
    'M-10 -2 V-9 H-4 V-2',
    'M16 -18 V-2',
    'M16 -18 H24 V-12 H16 Z',
  ]),
  bakery: scene(false, [
    'M-30 0 H30',
    'M-12 -2 Q-12 -18 0 -18 Q12 -18 12 -2 Z',
    'M-12 -2 H12',
    'M0 -14 V-20',
    'M-3 -20 H3',
  ]),
  mill: scene(false, [
    'M-30 0 H30',
    'M-12 -2 H8 V-16 H-12 Z',
    'M8 -8 H18',
    'M18 -8 V-14',
    'M18 0 V-2 M22 0 V-2',
    'M14 -8 H22',
  ]),
  kiln: scene(false, [
    'M-30 0 H30',
    'M-12 -2 Q-12 -14 0 -14 Q12 -14 12 -2 Z',
    'M0 -14 V-22',
    'M-4 -22 H4',
    'M-16 0 V-4',
  ]),
  baths: scene(false, [
    'M-30 0 H30',
    'M-22 -2 V-14 Q-14 -22 -6 -14 V-2',
    'M-6 -2 V-14 Q2 -22 10 -14 V-2',
    'M10 -2 V-12 Q16 -18 22 -12 V-2',
  ]),
  circus: scene(false, [
    'M-30 0 H30',
    'M-24 -2 Q0 -26 24 -2',
    'M-18 -2 Q0 -20 18 -2',
    'M0 -18 V-26 M-3 -26 H3',
  ]),
  basilica: scene(false, [
    'M-30 0 H30',
    'M-24 -2 H24 V-12 H-24 Z',
    'M-24 -12 L0 -22 L24 -12',
    'M-18 -2 V-10 M-12 -2 V-10 M-6 -2 V-10 M0 -2 V-10 M6 -2 V-10 M12 -2 V-10 M18 -2 V-10',
  ]),
  boat: scene(false, [
    'M-30 0 H30',
    'M-20 -2 H18 L12 -8 H-14 Z',
    'M-2 0 V-6 M10 0 V-6',
  ]),
  net: scene(true, [
    'M-30 0 H30',
    'M-12 0 V-20 M12 0 V-20',
    'M-12 -18 H12',
    'M-12 -12 H12 M-12 -6 H12',
    'M-8 -18 L-4 -6 M-4 -18 L0 -6 M0 -18 L4 -6 M4 -18 L8 -6',
  ]),
  tripod: scene(false, [
    'M-30 0 H30',
    'M-6 0 L0 -12 L6 0',
    'M0 -12 V-18',
    'M-6 -18 H6',
    'M0 -18 Q-6 -22 -8 -18 M0 -18 Q6 -22 8 -18',
  ]),
  winepress: scene(false, [
    'M-30 0 H30',
    'M-16 -2 H8 V-8 H-16 Z',
    'M-8 -8 V-16',
    'M-18 -16 H2',
    'M-16 -16 L-10 -22 L-4 -16',
  ]),
  oilpress: scene(false, [
    'M-30 0 H30',
    'M-16 -2 H10 V-10 H-16 Z',
    'M-6 -10 V-20',
    'M-10 -20 H-2',
    'M-6 -20 l-3 -4 M-6 -20 l3 -4',
  ]),
  waterfall: scene(true, [
    'M-30 0 H30',
    'M-12 -24 H-4',
    'M-8 -24 V-4 Q-8 2 -14 4',
    'M-2 -22 V-2 Q-2 4 4 6',
    'M-18 4 q6 -3 12 0',
  ]),
  quarry: scene(true, [
    'M-30 0 H30',
    'M-24 0 L-20 -10 L-12 -6 L-8 -14 L2 -8 L8 -12 L16 -4 L22 0',
    'M-20 -10 H-12 M-8 -14 H2',
  ]),
  canal: scene(true, [
    'M-30 2 q10 -4 20 0 q10 -4 20 0 q10 -4 20 0',
    'M-30 -2 q10 -4 20 0 q10 -4 20 0 q10 -4 20 0',
    'M-30 6 H30',
  ]),
  saltpans: scene(false, [
    'M-30 0 H30',
    'M-24 -2 H-10 V-12 H-24 Z',
    'M-4 -2 H10 V-10 H-4 Z',
    'M14 -2 H26 V-14 H14 Z',
  ]),
}

export const SCENE_KINDS = Object.keys(SCENES)

/* One scene, drawn in a 60 × 26 box with its ground at y = 0. */
function Vignette({ kind, x, y, scale = 1, flip = 1 }) {
  const art = SCENES[kind]
  if (!art) return null

  return (
    <g
      className={`iter-map__scene${art.nature ? ' is-nature' : ''}`}
      transform={`translate(${x.toFixed(1)} ${y.toFixed(1)}) scale(${(flip * scale * 0.92).toFixed(
        3,
      )} ${(scale * 0.92).toFixed(3)})`}
    >
      {art.paths.map((d, index) => (
        <path key={`p${index}`} d={d} />
      ))}
      {(art.ellipses || []).map(([cx, cy, rx, ry], index) => (
        <ellipse key={`e${index}`} cx={cx} cy={cy} rx={rx} ry={ry} />
      ))}
      {(art.circles || []).map(([cx, cy, r], index) => (
        <circle key={`c${index}`} cx={cx} cy={cy} r={r} />
      ))}
      {(art.rects || []).map(([rx, ry, rw, rh], index) => (
        <rect key={`r${index}`} x={rx} y={ry} width={rw} height={rh} />
      ))}
    </g>
  )
}

/* Scatter the scenes through the empty pockets between lesson labels:
   at every fourth lesson, on the side opposite that lesson's label, in
   the free band between the labels above and below. Dividers sit at the
   stage gates, far above and below these spots, so no scene lands on a
   boundary band. */
export function Scenery({ items, width }) {
  const lessons = items.filter((item) => item.type === 'lesson')
  const nodes = []

  lessons.forEach((item, index) => {
    if (index % 3 !== 1) return
    if (index >= lessons.length - 4) return

    const scale = width < 420 ? 0.66 : width < 700 ? 0.82 : 1
    const half = 30 * 0.92 * scale
    const free = -item.side
    const room = free > 0 ? width - item.x : item.x
    const minOffset = 52
    const maxOffset = room - half - 8
    if (maxOffset < minOffset + 8) return

    /* Break the two parallel files: a deterministic scatter from just
       beside the road to the far margin. */
    const noise = Math.abs(Math.sin(index * 12.9898 + 78.233) * 43758.5453) % 1
    const offset = minOffset + noise * (maxOffset - minOffset)
    const kind = SCENE_KINDS[nodes.length % SCENE_KINDS.length]

    nodes.push(
      <Vignette
        key={`scene-${index}`}
        kind={kind}
        x={item.x + free * offset}
        y={item.y + 13}
        scale={scale}
        flip={index % 2 ? 1 : -1}
      />,
    )
  })

  return <g className="iter-map__scenery">{nodes}</g>
}
