export type GameCategory = "tcg" | "board" | "rpg";

export type Game = {
  slug: string;
  name: string;
  /** Short label for tight spaces like the schedule grid. */
  short: string;
  category: GameCategory;
  accent: string;
  blurb: string;
  /**
   * Where players see the store's sanctioned events and register for them.
   * Games without an official platform take sign-ups in the store.
   */
  register?: { platform: string; url: string };
};

// TODO: Riftbound points at the store's own events; the rest still point at the
// platforms' locators until we have GameHaven's page on each.
export const GAMES: Game[] = [
  {
    slug: "riftbound",
    name: "Riftbound",
    short: "Riftbound",
    category: "tcg",
    accent: "#2dd4bf",
    blurb: "Το TCG του League of Legends. Nexus Nights, τουρνουά και Pre-Rifts σε κάθε νέο set.",
    register: {
      platform: "Play Riftbound",
      url: "https://playriftbound.com/en-US/events?q=28is+Oktovriou+53A%2C+Patra+262+23%2C+Greece&lat=38.251754399999996&lng=21.7404022",
    },
  },
  {
    slug: "one-piece",
    name: "One Piece Card Game",
    short: "One Piece",
    category: "tcg",
    accent: "#ef4444",
    blurb: "Store tournaments, Treasure Cups και casual παιχνίδι για όλα τα επίπεδα.",
    register: { platform: "Bandai TCG+", url: "https://www.bandai-tcg-plus.com/" },
  },
  {
    slug: "pokemon",
    name: "Pokémon TCG",
    short: "Pokémon",
    category: "tcg",
    accent: "#facc15",
    blurb: "League και τουρνουά για όλες τις ηλικίες, prereleases σε κάθε νέο set.",
    register: { platform: "Play! Pokémon", url: "https://events.pokemon.com/" },
  },
  {
    slug: "mtg",
    name: "Magic: The Gathering",
    short: "MTG",
    category: "tcg",
    accent: "#f97316",
    blurb: "Commander, constructed και drafts. Prereleases σε κάθε νέο set.",
    register: { platform: "Wizards Event Locator", url: "https://locator.wizards.com/" },
  },
  {
    slug: "yugioh",
    name: "Yu-Gi-Oh!",
    short: "Yu-Gi-Oh!",
    category: "tcg",
    accent: "#a855f7",
    blurb: "Εβδομαδιαία locals και επίσημα τουρνουά.",
    register: { platform: "Yu-Gi-Oh! TCG", url: "https://www.yugioh-card.com/eu/" },
  },
  {
    slug: "unmatched",
    name: "Unmatched",
    short: "Unmatched",
    category: "board",
    accent: "#22c55e",
    blurb: "Μονομαχίες θρύλων στο ταμπλό. Φέρε τον ήρωά σου ή δανείσου έναν από εμάς.",
  },
  {
    slug: "dnd",
    name: "Dungeons & Dragons",
    short: "D&D",
    category: "rpg",
    accent: "#dc2626",
    blurb: "Campaigns και one-shots. Ιδανικό και για όσους παίζουν πρώτη φορά.",
  },
];

export const GAMES_BY_SLUG = Object.fromEntries(GAMES.map((g) => [g.slug, g])) as Record<string, Game>;

export const CATEGORY_LABELS: Record<GameCategory, string> = {
  tcg: "Trading Card Games",
  board: "Επιτραπέζια",
  rpg: "RPG",
};

export const CATEGORY_ORDER: GameCategory[] = ["tcg", "board", "rpg"];
