import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { WeeklySchedule } from "@/components/weekly-schedule";
import { GAMES } from "@/content/games";

export const metadata: Metadata = {
  title: "Πρόγραμμα",
  description:
    "Το εβδομαδιαίο πρόγραμμα του GameHaven Πάτρας: Riftbound, One Piece, Pokémon, Magic, Yu-Gi-Oh!, Unmatched και D&D.",
  alternates: { canonical: "/schedule" },
};

export default function SchedulePage() {
  const registrable = GAMES.filter((g) => g.register);

  return (
    <>
      <PageIntro eyebrow="Κάθε εβδομάδα" title="Πρόγραμμα">
        Πάτα σε ένα παιχνίδι για να δεις τα τουρνουά του και να κάνεις εγγραφή.
      </PageIntro>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <WeeklySchedule />

        <section className="mt-16">
          <h2 className="font-heading text-2xl font-bold">Εγγραφές σε τουρνουά</h2>
          <p className="mt-2 max-w-2xl text-muted">
            Τα επίσημα τουρνουά δηλώνονται στην πλατφόρμα του κάθε παιχνιδιού. Για D&D και Unmatched
            δηλώνεις απευθείας στο μαγαζί.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {registrable.map((game) => (
              <li key={game.slug}>
                <a
                  href={game.register!.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 rounded-xl border border-line bg-surface px-4 py-3 transition hover:border-ember/60"
                  style={{ borderLeft: `4px solid ${game.accent}` }}
                >
                  <span>
                    <span className="block font-semibold">{game.name}</span>
                    <span className="block text-xs text-muted">{game.register!.platform}</span>
                  </span>
                  <span aria-hidden className="text-ember">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
