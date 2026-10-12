/**
 * The recurring weekly programme. Days follow `Date.getDay()` (0 = Sunday) so the
 * schedule can highlight today, but are listed Monday first.
 */

export type Slot = { time: string; game: string };
export type ScheduleDay = { day: number; name: string; slots: Slot[]; closed?: boolean };

export const WEEKLY_SCHEDULE: ScheduleDay[] = [
  { day: 1, name: "Δευτέρα", slots: [{ time: "18:30", game: "one-piece" }] },
  { day: 2, name: "Τρίτη", slots: [], closed: true },
  {
    day: 3,
    name: "Τετάρτη",
    slots: [
      { time: "18:30", game: "dnd" },
      { time: "18:30", game: "riftbound" },
    ],
  },
  {
    day: 4,
    name: "Πέμπτη",
    slots: [
      { time: "18:30", game: "pokemon" },
      { time: "18:30", game: "mtg" },
    ],
  },
  {
    day: 5,
    name: "Παρασκευή",
    slots: [
      { time: "18:00", game: "yugioh" },
      { time: "18:30", game: "unmatched" },
    ],
  },
  {
    day: 6,
    name: "Σάββατο",
    slots: [
      { time: "18:00", game: "riftbound" },
      { time: "18:30", game: "one-piece" },
    ],
  },
  {
    day: 0,
    name: "Κυριακή",
    slots: [
      { time: "12:00", game: "pokemon" },
      { time: "18:00", game: "riftbound" },
      { time: "18:00", game: "unmatched" },
    ],
  },
];

/** "Δευτέρα 18:30, Σάββατο 18:30" — when a game is on during the week. */
export function weeklySlotsFor(gameSlug: string) {
  return WEEKLY_SCHEDULE.flatMap((d) =>
    d.slots.filter((s) => s.game === gameSlug).map((s) => `${d.name} ${s.time}`),
  );
}
