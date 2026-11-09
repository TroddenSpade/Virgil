// Complete table of contents of Latin via Ovid: A First Course (2nd ed.).
// The forty lessons follow the book's order, from the map of the world to
// Aeneas in Italy. Each entry keeps the book's Latin title; the English
// title is a short gloss for the interface.

export const outline = [
  { number: 1, roman: "I", slug: "charta-geographica", latinTitle: "CHARTA GEOGRAPHICA", title: "The Map of the World", author: 'Ovid' },
  { number: 2, roman: "II", slug: "europa-et-taurus", latinTitle: "EUROPA ET TAURUS", title: "Europa and the Bull", author: 'Ovid' },
  { number: 3, roman: "III", slug: "minerva-et-arachne-1", latinTitle: "MINERVA ET ARACHNE", title: "Minerva and Arachne (Part 1)", author: 'Ovid' },
  { number: 4, roman: "IV", slug: "minerva-et-arachne-2", latinTitle: "MINERVA ET ARACHNE", title: "Minerva and Arachne (Part 2)", author: 'Ovid' },
  { number: 5, roman: "V", slug: "minerva-et-arachne-3", latinTitle: "MINERVA ET ARACHNE", title: "Minerva and Arachne (Part 3)", author: 'Ovid' },
  { number: 6, roman: "VI", slug: "latona-et-niobe-1", latinTitle: "LATONA ET NIOBE", title: "Latona and Niobe (Part 1)", author: 'Ovid' },
  { number: 7, roman: "VII", slug: "latona-et-niobe-2", latinTitle: "LATONA ET NIOBE", title: "Latona and Niobe (Part 2)", author: 'Ovid' },
  { number: 8, roman: "VIII", slug: "pan-et-syringa", latinTitle: "PAN ET SYRINGA", title: "Pan and Syrinx", author: 'Ovid' },
  { number: 9, roman: "IX", slug: "callisto-1", latinTitle: "CALLISTO", title: "Callisto (Part 1)", author: 'Ovid' },
  { number: 10, roman: "X", slug: "callisto-2", latinTitle: "CALLISTO", title: "Callisto (Part 2)", author: 'Ovid' },
  { number: 11, roman: "XI", slug: "philemon-et-baucis-1", latinTitle: "PHILEMON ET BAUCIS", title: "Philemon and Baucis (Part 1)", author: 'Ovid' },
  { number: 12, roman: "XII", slug: "philemon-et-baucis-2", latinTitle: "PHILEMON ET BAUCIS", title: "Philemon and Baucis (Part 2)", author: 'Ovid' },
  { number: 13, roman: "XIII", slug: "echo-et-narcissus", latinTitle: "ECHO ET NARCISSUS", title: "Echo and Narcissus", author: 'Ovid' },
  { number: 14, roman: "XIV", slug: "phoebus-et-daphne", latinTitle: "PHOEBUS ET DAPHNE", title: "Phoebus and Daphne", author: 'Ovid' },
  { number: 15, roman: "XV", slug: "pyramus-et-thisbe-1", latinTitle: "PYRAMUS ET THISBE", title: "Pyramus and Thisbe (Part 1)", author: 'Ovid' },
  { number: 16, roman: "XVI", slug: "pyramus-et-thisbe-2", latinTitle: "PYRAMUS ET THISBE", title: "Pyramus and Thisbe (Part 2)", author: 'Ovid' },
  { number: 17, roman: "XVII", slug: "atalanta-et-hippomenes-1", latinTitle: "ATALANTA ET HIPPOMENES", title: "Atalanta and Hippomenes (Part 1)", author: 'Ovid' },
  { number: 18, roman: "XVIII", slug: "atalanta-et-hippomenes-2", latinTitle: "ATALANTA ET HIPPOMENES", title: "Atalanta and Hippomenes (Part 2)", author: 'Ovid' },
  { number: 19, roman: "XIX", slug: "midas-et-vis-aurea", latinTitle: "MIDAS ET VIS AUREA", title: "Midas and the Golden Touch", author: 'Ovid' },
  { number: 20, roman: "XX", slug: "midas-et-pan", latinTitle: "MIDAS ET PAN", title: "Midas and Pan", author: 'Ovid' },
  { number: 21, roman: "XXI", slug: "orpheus-et-eurydice", latinTitle: "ORPHEUS ET EURYDICE", title: "Orpheus and Eurydice", author: 'Ovid' },
  { number: 22, roman: "XXII", slug: "mors-orphei", latinTitle: "MORS ORPHEI", title: "The Death of Orpheus", author: 'Ovid' },
  { number: 23, roman: "XXIII", slug: "iason-et-argonautae", latinTitle: "IASON ET ARGONAVTAE", title: "Jason and the Argonauts", author: 'Ovid' },
  { number: 24, roman: "XXIV", slug: "amor-iasonis", latinTitle: "AMOR IASONIS", title: "The Love of Jason", author: 'Ovid' },
  { number: 25, roman: "XXV", slug: "labores-iasonis", latinTitle: "LABORES IASONIS", title: "The Labours of Jason", author: 'Ovid' },
  { number: 26, roman: "XXVI", slug: "facta-magica-medeae", latinTitle: "FACTA MAGICA MEDEAE", title: "The Magic Deeds of Medea", author: 'Ovid' },
  { number: 27, roman: "XXVII", slug: "theseus-troezene", latinTitle: "THESEVS TROEZENE", title: "Theseus at Troezen", author: 'Ovid' },
  { number: 28, roman: "XXVIII", slug: "theseus-athenis", latinTitle: "THESEVS ATHENIS", title: "Theseus at Athens", author: 'Ovid' },
  { number: 29, roman: "XXIX", slug: "theseus-cretae", latinTitle: "THESEVS CRETAE", title: "Theseus in Crete", author: 'Ovid' },
  { number: 30, roman: "XXX", slug: "theseus-rex", latinTitle: "THESEVS REX", title: "Theseus King", author: 'Ovid' },
  { number: 31, roman: "XXXI", slug: "bellum-troianum-iphigenia", latinTitle: "BELLVM TROIANVM: SACRIFICIVM IPHIGENIAE", title: "The Trojan War: The Sacrifice of Iphigenia", author: 'Ovid' },
  { number: 32, roman: "XXXII", slug: "bellum-troianum-cycnus", latinTitle: "BELLVM TROIANVM: MORS CYGNI", title: "The Trojan War: The Death of Cycnus", author: 'Ovid' },
  { number: 33, roman: "XXXIII", slug: "bellum-troianum-aiax-ulixes", latinTitle: "BELLVM TROIANVM: AIAX ET VLIXES", title: "The Trojan War: Ajax and Ulysses", author: 'Ovid' },
  { number: 34, roman: "XXXIV", slug: "bellum-troianum-troia-capta", latinTitle: "BELLVM TROIANVM: TROIA CAPTA", title: "The Trojan War: Troy Captured", author: 'Ovid' },
  { number: 35, roman: "XXXV", slug: "filming-the-odyssey", latinTitle: "FILMING THE ODYSSEY", title: "Filming the Odyssey", author: 'Ovid' },
  { number: 36, roman: "XXXVI", slug: "aeneas", latinTitle: "AENEAS", title: "Aeneas", author: 'Ovid' },
  { number: 37, roman: "XXXVII", slug: "achaemenides", latinTitle: "ACHAEMENIDES", title: "Achaemenides", author: 'Ovid' },
  { number: 38, roman: "XXXVIII", slug: "circe", latinTitle: "CIRCE", title: "Circe", author: 'Ovid' },
  { number: 39, roman: "XXXIX", slug: "sibylla-cumaea", latinTitle: "SIBYLLA CVMAEA", title: "The Cumaean Sibyl", author: 'Ovid' },
  { number: 40, roman: "XL", slug: "aeneas-in-italia", latinTitle: "AENEAS IN ITALIA", title: "Aeneas in Italy", author: 'Ovid' },
]

export default outline
