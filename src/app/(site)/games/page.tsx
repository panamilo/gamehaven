import type { Metadata } from "next";
import { GameCard } from "@/components/game-card";
import { PageIntro } from "@/components/page-intro";
import { CATEGORY_LABELS, CATEGORY_ORDER, GAMES } from "@/content/games";

export const metadata: Metadata = {
  title: "Τι παίζουμε",
  description:
    "Riftbound, One Piece, Pokémon, Magic: The Gathering, Yu-Gi-Oh!, Unmatched και D&D στο GameHaven Πάτρας.",
  alternates: { canonical: "/games" },
};

export default function GamesPage() {
  return (
    <>
      <PageIntro eyebrow="Παιχνίδια" title="Τι παίζουμε">
        Τα βρίσκεις στο ράφι και στο τραπέζι. Αν δεν ξέρεις από πού να ξεκινήσεις, ρώτα μας.
      </PageIntro>

      <div className="mx-auto w-full max-w-6xl space-y-14 px-4 sm:px-6">
        {CATEGORY_ORDER.map((category) => {
          const items = GAMES.filter((g) => g.category === category);
          if (items.length === 0) return null;
          return (
            <section key={category} id={category}>
              <h2 className="font-heading text-2xl font-bold">{CATEGORY_LABELS[category]}</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((game) => (
                  <GameCard key={game.slug} game={game} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
