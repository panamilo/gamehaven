"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { GAMES_BY_SLUG } from "@/content/games";
import { WEEKLY_SCHEDULE } from "@/content/schedule";

const athensWeekday = new Intl.DateTimeFormat("en-US", { weekday: "short", timeZone: "Europe/Athens" });
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/**
 * Today's weekday in Athens. The page is static, so "today" can only be known in
 * the browser; the server snapshot is null and nothing is highlighted until hydration.
 */
function useAthensToday() {
  return useSyncExternalStore(
    () => () => {},
    () => WEEKDAYS.indexOf(athensWeekday.format(new Date())),
    () => null,
  );
}

export function WeeklySchedule() {
  const today = useAthensToday();

  return (
    <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
      {WEEKLY_SCHEDULE.map((day) => {
        const isToday = day.day === today;
        return (
          <li
            key={day.day}
            className={`flex flex-col rounded-xl border p-4 lg:min-h-44 ${
              isToday ? "border-ember bg-ember-soft" : "border-line bg-surface"
            } ${day.closed ? "opacity-60" : ""}`}
          >
            <p className="flex items-center justify-between gap-2 font-heading font-semibold">
              {day.name}
              {isToday && (
                <span className="rounded-full bg-ember px-2 py-0.5 text-[10px] font-bold uppercase text-background">
                  Σήμερα
                </span>
              )}
            </p>
            {day.closed ? (
              <p className="mt-3 text-sm text-muted">Κλειστά</p>
            ) : (
              <ul className="mt-3 space-y-2">
                {day.slots.map((slot) => {
                  const game = GAMES_BY_SLUG[slot.game];
                  const className = "block rounded-md border-l-4 bg-background px-3 py-2 transition hover:bg-surface-raised";
                  const body = (
                    <>
                      <span className="block text-xs text-muted">{slot.time}</span>
                      <span className="block text-sm font-semibold">{game.short}</span>
                    </>
                  );
                  return (
                    <li key={`${slot.time}-${slot.game}`}>
                      {game.register ? (
                        <a
                          href={game.register.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`Τουρνουά & εγγραφή στο ${game.register.platform}`}
                          className={className}
                          style={{ borderColor: game.accent }}
                        >
                          {body}
                        </a>
                      ) : (
                        <Link href={`/games#${game.slug}`} className={className} style={{ borderColor: game.accent }}>
                          {body}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
    </ol>
  );
}
