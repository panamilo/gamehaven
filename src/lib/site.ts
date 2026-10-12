export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gamehaven.gr";

/**
 * Store details. Single source of truth for the header, footer, contact page,
 * map and the LocalBusiness JSON-LD.
 */
export const STORE = {
  name: "GameHaven",
  tagline: "TCG · Επιτραπέζια · Χώρος παιχνιδιού",
  street: "28ης Οκτωβρίου 53Α",
  city: "Πάτρα",
  postalCode: "262 23",
  country: "GR",
  phone: "694 859 5665",
  phoneHref: "tel:+306948595665",
  email: "gamehaven91@gmail.com",
  instagramHandle: "gamehavenpatras",
  instagramUrl: "https://www.instagram.com/gamehavenpatras/",
  facebookUrl: "https://www.facebook.com/p/GameHaven-61587004667787/",
  /** Google Business profile: reviews, photos, hours. */
  googleProfileUrl: "https://share.google/XQj9bR6ssUJOM4CNS",
  /** Directions to the address. */
  googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("GameHaven, 28ης Οκτωβρίου 53Α, Πάτρα")}`,
} as const;

export const STORE_MAP_QUERY = `${STORE.street}, ${STORE.postalCode} ${STORE.city}`;

export const OPENING_HOURS = [
  { days: "Δευτέρα", hours: "17:00 – 23:00" },
  { days: "Τρίτη", hours: "Κλειστά" },
  { days: "Τετάρτη", hours: "17:00 – 23:00" },
  { days: "Πέμπτη", hours: "17:00 – 23:00" },
  { days: "Παρασκευή", hours: "17:00 – 23:00" },
  { days: "Σάββατο", hours: "15:00 – 22:00" },
  { days: "Κυριακή", hours: "12:00 – 22:00" },
];

/** schema.org `openingHoursSpecification` for the Store JSON-LD. */
export const OPENING_HOURS_SPEC = [
  { dayOfWeek: ["Monday", "Wednesday", "Thursday", "Friday"], opens: "17:00", closes: "23:00" },
  { dayOfWeek: ["Saturday"], opens: "15:00", closes: "22:00" },
  { dayOfWeek: ["Sunday"], opens: "12:00", closes: "22:00" },
].map((spec) => ({ "@type": "OpeningHoursSpecification", ...spec }));
