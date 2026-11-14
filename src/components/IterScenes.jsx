/* Scenery for the Via map: Roman country life placed in the empty pockets
   between lesson labels — never on the stage dividers. Each scene fits a
   60 × 26 box with its ground line at y = 0. */

const scene = (nature, paths, extra = {}) => ({ nature, paths, ...extra })

const SCENES = {
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
    'M18 -4 C16 -9 22 -11 24 -7 L28 -9 L29 -5 L25 -5',
    'M18 0 V-4 M22 0 V-4',
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
    'M20 -3 C19 -7 23 -8 25 -5 L28 -6 L29 -3 L26 -3',
    'M21 0 V-3 M24 0 V-3',
  ]),
  oxen: scene(true, [
    'M-30 0 H30',
    'M-20 -6 C-22 -13 -14 -16 -8 -16 C-2 -16 2 -12 4 -8 L10 -10 L12 -5 L6 -5',
    'M-14 0 V-6 M-8 0 V-6 M0 0 V-6',
    'M4 -10 q4 -4 8 -1 M-18 -14 q3 -3 6 0',
    'M-28 -2 H-18 V-6 H-28 Z',
    'M-28 -6 L-30 -10',
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
  doves: scene(true, [
    'M-30 0 H30',
    'M-16 -8 q4 -8 8 0 q4 -8 8 0',
    'M2 -6 q4 -7 7 0 q3 -7 7 0',
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
  fishpond: scene(true, [
    'M-30 0 H30',
    'M-22 -2 H22 V-10 H-22 Z',
    'M-16 -6 q4 -6 8 0 q-4 6 -8 0',
    'M2 -5 q4 -5 8 0 q-4 5 -8 0',
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

  /* ---------- People ---------- */
  ploughman: scene(false, [
    'M-30 0 H30',
    'M-14 -20 V-6 M-14 -16 L-10 -12 M-6 -20 V-6',
    'M-6 -10 H10 V-6 H-6 Z',
    'M10 -6 L16 -2 H22',
  ], { circles: [[-14, -22, 2]] }),
  vintner: scene(false, [
    'M-30 0 H30',
    'M-16 -20 V-6 M-16 -16 L-12 -12 M-8 -20 V-6',
    'M-18 -8 H-8 V-2 H-18 Z',
    'M-13 -10 q-3 -4 0 -7 q3 3 0 7',
  ], { circles: [[-12, -22, 2]] }),
  olivepicker: scene(false, [
    'M-30 0 H30',
    'M-14 -20 V-6 M-14 -16 L-10 -12',
    'M6 0 V-10',
    'M-2 -14 Q-2 -24 8 -24 Q18 -24 18 -14 Q8 -10 -2 -14 Z',
    'M14 -22 V-26',
  ], { circles: [[-14, -22, 2]] }),
  fisherman: scene(false, [
    'M-30 0 H30',
    'M-16 -20 V-6 M-16 -16 L-10 -12',
    'M-16 -20 L4 -26',
    'M4 -26 V-14',
    'M-6 -2 H6 V-6 H-6 Z',
  ], { circles: [[-16, -22, 2]] }),
  merchant: scene(false, [
    'M-30 0 H30',
    'M-14 -20 V-6 M-14 -16 L-10 -12',
    'M4 -2 C2 -8 4 -14 8 -16 H14 C18 -14 20 -8 18 -2 Z',
    'M6 -16 H16',
  ], { circles: [[-14, -22, 2]] }),
  legionary: scene(false, [
    'M-30 0 H30',
    'M-14 -20 V-6 M-14 -16 L-18 -10 M-8 -20 V-6 M-8 -16 L-4 -10',
    'M-18 -18 H-4 V-10 H-18 Z',
    'M-11 -24 V-18',
    'M-13 -28 H-9',
  ], { circles: [[-11, -21, 1.8]] }),
  lictor: scene(false, [
    'M-30 0 H30',
    'M-12 -20 V-6 M-12 -16 L-16 -10',
    'M-6 -26 V-2',
    'M-10 -24 H-2 M-10 -21 H-2 M-10 -18 H-2',
  ], { circles: [[-12, -22, 2]] }),
  augur: scene(false, [
    'M-30 0 H30',
    'M-12 -20 V-6 M-12 -16 L-8 -12',
    'M-12 -20 L-4 -14',
    'M2 -4 C0 -8 6 -10 8 -6 L10 0 M4 0 V-4',
    'M10 -6 l3 -3',
  ], { circles: [[-12, -22, 2]] }),
  vestal: scene(false, [
    'M-30 0 H30',
    'M-12 -20 V-6 M-12 -16 L-8 -12',
    'M-12 -20 Q-12 -26 -6 -26 Q0 -26 0 -20 L0 -6',
  ], { circles: [[-12, -21, 1.8]] }),
  womanwell: scene(false, [
    'M-30 0 H30',
    'M-14 -20 V-6 M-14 -16 L-10 -12',
    'M0 -2 H12 V-8 H0 Z',
    'M0 -8 H12 L6 -16 Z',
  ], { circles: [[-14, -22, 2]] }),
  childdog: scene(true, [
    'M-30 0 H30',
    'M-12 -14 V-2 M-12 -10 L-8 -8',
    'M2 -4 C0 -8 6 -10 8 -6 L12 -8 L13 -4 L9 -4',
    'M2 0 V-4',
  ], { circles: [[-12, -16, 2]] }),

  /* ---------- Buildings ---------- */
  tholos: scene(false, [
    'M-30 0 H30',
    'M-16 -2 H16 V-5 H-16 Z',
    'M-12 -5 V-14 M-6 -5 V-14 M0 -5 V-14 M6 -5 V-14 M12 -5 V-14',
    'M-14 -14 Q0 -24 14 -14',
  ]),
  altar: scene(false, [
    'M-30 0 H30',
    'M-10 -2 H10 V-10 H-10 Z',
    'M-14 -10 H14 V-13 H-14 Z',
    'M0 -13 q-3 -4 0 -7 q3 3 0 7',
  ]),
  tomb: scene(false, [
    'M-30 0 H30',
    'M-14 -2 H14 V-6 H-14 Z',
    'M-10 -6 H10 V-16 H-10 Z',
    'M-12 -16 H12 L0 -24 Z',
    'M-3 -6 V-12 H3 V-6',
  ]),
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
  arch: scene(false, [
    'M-30 0 H30',
    'M-18 -2 V-18 H18 V-2',
    'M-12 -2 V-10 Q0 -20 12 -10 V-2',
    'M-18 -18 Q0 -26 18 -18',
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
  fountain: scene(false, [
    'M-30 0 H30',
    'M-14 -2 H14 V-8 H-14 Z',
    'M0 -8 V-14',
    'M-4 -14 H4',
    'M0 -14 q-8 2 -10 8 M0 -14 q8 2 10 8',
  ]),
  well: scene(false, [
    'M-30 0 H30',
    'M-10 -2 H10 V-8 H-10 Z',
    'M-12 -8 H12 L0 -18 Z',
    'M0 -8 V-2',
  ]),
  dovecote: scene(false, [
    'M-30 0 H30',
    'M-8 -2 H8 V-20 H-8 Z',
    'M-12 -20 H12 L0 -26 Z',
    'M-5 -16 h3 v3 h-3 Z M2 -16 h3 v3 h-3 Z M-5 -10 h3 v3 h-3 Z M2 -10 h3 v3 h-3 Z',
  ]),

  /* ---------- Landscape ---------- */
  vesuvius: scene(true, [
    'M-30 0 L-12 -20 L-2 -8 L10 -24 L30 0 Z',
    'M-12 -20 L-8 -13 L-16 -13 Z',
    'M10 -24 L14 -17 L6 -17 Z',
    'M6 -26 q2 -5 5 -2 q-1 3 1 6',
  ]),
  grotto: scene(true, [
    'M-30 0 H30',
    'M-22 0 Q-22 -22 -8 -22 Q0 -22 0 -12 Q0 -22 8 -22 Q22 -22 22 0',
    'M-12 0 Q-12 -11 0 -11 Q12 -11 12 0',
  ]),
  spring: scene(true, [
    'M-30 0 H30',
    'M-10 0 Q-6 -10 0 -8 Q6 -6 10 0',
    'M-6 -3 q4 4 8 0 q4 4 8 0',
    'M-18 -6 q3 -5 6 0',
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
  mine: scene(true, [
    'M-30 0 H30',
    'M-14 0 Q-14 -18 0 -18 Q14 -18 14 0',
    'M-8 0 V-8 H8 V0',
    'M-10 -8 H10',
    'M0 -18 V-24 M-4 -24 H4',
  ]),
  cliffs: scene(true, [
    'M-30 0 H30',
    'M-30 0 L-12 0 L-10 -12 L-3 -16 L0 0',
    'M0 0 L8 -10 L15 -5 L18 0',
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
  grove: scene(true, [
    'M-30 0 H30',
    'M-18 0 V-8 M0 0 V-10 M18 0 V-7',
  ], {
    ellipses: [[-18, -15, 8, 7], [0, -18, 9, 8], [18, -14, 7, 6]],
  }),
  reeds: scene(true, [
    'M-30 0 H30',
    'M-18 0 q-3 -10 0 -20 M-12 0 q3 -7 0 -14 M-6 0 q-2 -12 0 -22',
    'M2 0 q3 -9 0 -18 M8 0 q-3 -11 0 -20 M14 0 q2 -6 0 -12',
  ]),

  /* ---------- Natural ---------- */
  coast: scene(true, [
    'M-30 2 H30',
    'M-28 6 q6 -5 12 0 q6 -5 12 0 q6 -5 12 0 q6 -5 12 0 q6 -5 12 0',
    'M-20 -4 l4 -3 l4 3',
    'M-4 -8 l4 -3 l4 3',
  ]),
  lake: scene(true, [
    'M-30 0 H30',
    'M-24 -2 H24 V-10 H-24 Z',
    'M-16 -6 q6 -3 12 0 q6 3 12 0',
    'M-20 -10 v-6 M-16 -10 q-2 -5 0 -9 M-12 -10 v-5',
    'M10 -10 q2 -6 0 -10 M14 -10 v-5',
  ]),
  dunes: scene(true, [
    'M-30 0 H30',
    'M-30 0 Q-24 -12 -18 0 Q-12 -16 -6 0 Q0 -10 6 0 Q12 -18 18 0 Q24 -9 30 0',
  ]),
  gorge: scene(true, [
    'M-30 0 H30',
    'M-30 0 L-18 -6 L-14 -18 L-8 -22 L-4 -10 L-2 0',
    'M2 0 L4 -12 L10 -20 L16 -14 L22 -4 L30 0',
    'M-2 0 L0 -6 L2 0',
  ]),
  delta: scene(true, [
    'M-30 0 H30',
    'M0 -24 V-12',
    'M0 -12 Q-12 -6 -22 0 M0 -12 Q-4 -4 -6 0 M0 -12 Q6 -4 10 0 M0 -12 Q14 -6 22 0',
  ]),

  /* ---------- Built ---------- */
  colonnade: scene(false, [
    'M-30 0 H30',
    'M-24 -20 H24',
    'M-24 -16 H24',
    'M-20 -16 V-2 M-10 -16 V-2 M0 -16 V-2 M10 -16 V-2 M20 -16 V-2',
  ]),
  pomerium: scene(false, [
    'M-30 0 H30',
    'M-20 0 V-10 M0 0 V-12 M20 0 V-9',
    'M-23 -10 H-17 M-3 -12 H3 M17 -9 H23',
  ]),
  milestonerow: scene(false, [
    'M-30 0 H30',
    'M-18 0 V-12 H-14 V0 M-2 0 V-14 H2 V0 M14 0 V-11 H18 V0',
    'M-18 -10 H-14 M-2 -12 H2 M14 -9 H18',
  ]),
  towerwall: scene(false, [
    'M-30 0 H30',
    'M-30 -8 H30 V-2 H-30 Z',
    'M-26 -8 V-16 H-18 V-8 M-8 -8 V-16 H0 V-8 M10 -8 V-16 H18 V-8',
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

/* Scatter one scene at every second lesson: on the side opposite that
   lesson's label, in the free band between the labels above and below,
   from beside the road out to the far margin. Dividers sit at the stage
   gates, far above and below these spots, so none lands on a band. */
export function Scenery({ items, width }) {
  const lessons = items.filter((item) => item.type === 'lesson')
  const nodes = []

  items.forEach((item) => {
    if (item.type !== 'lesson') return

    const index = lessons.indexOf(item)
    if (index >= lessons.length - 4) return
    /* Two consecutive lessons per four: their labels sit on opposite
       sides, so the free pockets alternate left and right while the
       density stays at roughly one scene per two lessons. */
    if (index % 4 !== 1 && index % 4 !== 2) return

    const scale = width < 420 ? 0.66 : width < 700 ? 0.82 : 1
    const half = 30 * 0.92 * scale
    const free = -item.side
    const room = free > 0 ? width - item.x : item.x
    const minOffset = 52
    const maxOffset = room - half - 8
    if (maxOffset < minOffset + 8) return

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
