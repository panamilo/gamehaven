import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GameCard } from "@/components/game-card";
import { JsonLd } from "@/components/json-ld";
import { WeeklySchedule } from "@/components/weekly-schedule";
import { GAMES } from "@/content/games";
import { OPENING_HOURS, OPENING_HOURS_SPEC, SITE_URL, STORE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "GameHaven Πάτρα · TCG & Επιτραπέζια" },
  alternates: { canonical: "/" },
};

const SPACE_HIGHLIGHTS = [
  { title: "Τραπέζια για όλους", text: "Κάθεσαι και παίζεις, με τη δική σου τράπουλα ή με παιχνίδι από το μαγαζί." },
  { title: "Τουρνουά κάθε μέρα", text: "Riftbound, One Piece, Pokémon, Magic, Yu-Gi-Oh! και όχι μόνο." },
  { title: "Επιτραπέζια & RPG", text: "Unmatched, D&D και ό,τι άλλο θες να στήσεις με την παρέα σου." },
  { title: "Μαθαίνεις να παίζεις", text: "Δεν ξέρεις κανόνες; Σου εξηγούμε εμείς. Όλοι κάπως ξεκίνησαν." },
];

const storeJsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: `${STORE.name} Πάτρα`,
  url: SITE_URL,
  telephone: STORE.phoneHref.replace("tel:", ""),
  email: STORE.email,
  logo: `${SITE_URL}/logo.webp`,
  image: `${SITE_URL}/space-crowd.webp`,
  address: {
    "@type": "PostalAddress",
    streetAddress: STORE.street,
    addressLocality: STORE.city,
    postalCode: STORE.postalCode,
    addressCountry: STORE.country,
  },
  openingHoursSpecification: OPENING_HOURS_SPEC,
  sameAs: [STORE.instagramUrl, STORE.facebookUrl, STORE.googleProfileUrl],
};

export default function Home() {
  return (
    <>
      <JsonLd data={storeJsonLd} />

      {/* Hero */}
      <section className="bg-felt border-b border-line">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-ember">Πάτρα · {STORE.tagline}</p>
            <h1 className="mt-4 max-w-3xl font-heading text-5xl font-black leading-[1.05] tracking-tight sm:text-7xl">
              Πάρε την παρέα.
              <br />
              <span className="text-ember">Έλα να παίξεις.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted">
              Κάρτες, επιτραπέζια και RPG. Ψωνίζεις, κάθεσαι, παίζεις. Τουρνουά σχεδόν κάθε μέρα, και πάντα
              ένα τραπέζι για σένα.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/schedule"
                className="rounded-lg bg-ember px-5 py-3 font-semibold text-background transition hover:brightness-110"
              >
                Δες το πρόγραμμα
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border border-line bg-surface px-5 py-3 font-semibold transition hover:border-ember/60"
              >
                Πού θα μας βρεις
              </Link>
            </div>
          </div>
          <Image
            src="/logo.webp"
            alt="Το logo του GameHaven: τρία αρκουδάκια παίζουν επιτραπέζιο"
            width={1200}
            height={800}
            priority
            sizes="(min-width: 1024px) 460px, 100vw"
            className="w-full rounded-2xl border-4 border-cream/20 shadow-2xl shadow-black/50"
          />
        </div>
      </section>

      {/* Weekly schedule */}
      <section className="mx-auto w-full max-w-6xl px-4 pt-16 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-heading text-2xl font-bold">Η εβδομάδα στο GameHaven</h2>
            <p className="mt-1 text-sm text-muted">Πάτα σε ένα παιχνίδι για τουρνουά και εγγραφή.</p>
          </div>
          <Link href="/schedule" className="text-sm font-semibold text-ember hover:underline">
            Πρόγραμμα & εγγραφές →
          </Link>
        </div>
        <div className="mt-6">
          <WeeklySchedule />
        </div>
      </section>

      {/* The space */}
      <section className="mx-auto w-full max-w-6xl px-4 pt-20 sm:px-6">
        <h2 className="font-heading text-2xl font-bold">Δεν είναι μόνο μαγαζί</h2>
        <p className="mt-2 max-w-2xl text-muted">
          Το GameHaven είναι χώρος για να αράξεις. Έλα για ένα game, μείνε για όλη τη βραδιά.
        </p>
        <div className="mt-6 grid gap-4 lg:grid-cols-[1.2fr_1fr]">
          <Image
            src="/space-crowd.webp"
            alt="Παίκτες σε τουρνουά TCG στο GameHaven"
            width={910}
            height={910}
            sizes="(min-width: 1024px) 560px, 100vw"
            className="aspect-[4/3] h-full w-full rounded-xl border border-line object-cover"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {SPACE_HIGHLIGHTS.map((item) => (
              <div key={item.title} className="rounded-xl border border-line bg-surface p-5">
                <h3 className="font-heading font-semibold text-ember">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <Link href="/space" className="mt-6 inline-block text-sm font-semibold text-ember hover:underline">
          Γνώρισε τον χώρο →
        </Link>
      </section>

      {/* Games */}
      <section className="mx-auto w-full max-w-6xl px-4 pt-20 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-heading text-2xl font-bold">Τι παίζουμε</h2>
          <Link href="/games" className="text-sm font-semibold text-ember hover:underline">
            Όλα τα παιχνίδια →
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GAMES.slice(0, 6).map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>
      </section>

      {/* Visit */}
      <section className="mx-auto w-full max-w-6xl px-4 pt-20 sm:px-6">
        <div className="grid gap-8 rounded-2xl border border-line bg-surface-raised p-8 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-bold">Πέρνα από το μαγαζί</h2>
            <p className="mt-3 text-muted">
              {STORE.street}, {STORE.postalCode} {STORE.city}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={STORE.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-ember px-5 py-3 font-semibold text-background transition hover:brightness-110"
              >
                Οδηγίες στο Google Maps
              </a>
              <a
                href={STORE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-line px-5 py-3 font-semibold transition hover:border-ember/60"
              >
                Instagram
              </a>
            </div>
          </div>
          <dl className="space-y-2 self-center">
            {OPENING_HOURS.map((row) => (
              <div key={row.days} className="flex justify-between gap-4 border-b border-line pb-2">
                <dt className="text-muted">{row.days}</dt>
                <dd className="font-semibold">{row.hours}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
