import type { Game } from "@/content/games";
import { weeklySlotsFor } from "@/content/schedule";

export function GameCard({ game }: { game: Game }) {
  const slots = weeklySlotsFor(game.slug);

  return (
    <article
      id={game.slug}
      className="relative flex scroll-mt-24 flex-col overflow-hidden rounded-xl border border-line bg-surface p-5"
    >
      <div aria-hidden className="absolute inset-x-0 top-0 h-1" style={{ background: game.accent }} />
      <h3 className="font-heading text-lg font-semibold">{game.name}</h3>
      <p className="mt-2 text-sm text-muted">{game.blurb}</p>

      {slots.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {slots.map((slot) => (
            <li
              key={slot}
              className="rounded-md bg-background px-2.5 py-1 text-xs font-medium"
              style={{ color: game.accent }}
            >
              {slot}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-5">
        {game.register ? (
          <a
            href={game.register.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg bg-ember px-4 py-2.5 text-center text-sm font-semibold text-background transition hover:brightness-110"
          >
            Τουρνουά & εγγραφή ↗
            <span className="block text-xs font-normal opacity-80">{game.register.platform}</span>
          </a>
        ) : (
          <p className="rounded-lg bg-ember-soft px-4 py-2.5 text-center text-sm">Δηλώσεις στο μαγαζί</p>
        )}
      </div>
    </article>
  );
}
