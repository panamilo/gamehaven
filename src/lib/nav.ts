export type NavLink = {
  href: string;
  label: string;
  /** Shown as an outlined button in the header instead of a plain link. */
  cta?: boolean;
};

export const NAV_LINKS: NavLink[] = [
  { href: "/schedule", label: "Πρόγραμμα" },
  { href: "/games", label: "Τι παίζουμε" },
  { href: "/space", label: "Ο χώρος" },
  { href: "/contact", label: "Επικοινωνία", cta: true },
];
