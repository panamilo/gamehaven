import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { STORE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ο χώρος",
  description:
    "Τραπέζια για TCG, επιτραπέζια και RPG, και χώρος για παρέες, γενέθλια και ομάδες στο GameHaven Πάτρας.",
  alternates: { canonical: "/space" },
};

// TODO: confirm the real offering and prices with the store.
const FEATURES = [
  {
    title: "Open play",
    text: "Κάθεσαι σε ελεύθερο τραπέζι και παίζεις ό,τι θέλεις, με δικό σου παιχνίδι ή με κάτι από το μαγαζί.",
  },
  {
    title: "Επιτραπέζια & RPG",
    text: "Unmatched, D&D και ό,τι άλλο θες να στήσεις. Θα σε βοηθήσουμε να μάθεις τους κανόνες.",
  },
  {
    title: "Τραπέζια για TCG",
    text: "Χώρος για τουρνουά, pods του Commander και casual παιχνίδι.",
  },
];

const PHOTOS = [
  {
    src: "/space-crowd.webp",
    alt: "Παίκτες σε τουρνουά TCG γεμίζουν τα τραπέζια του GameHaven",
    className: "sm:col-span-2 sm:row-span-2",
    sizes: "(min-width: 640px) 66vw, 100vw",
    priority: true,
  },
  {
    src: "/space-empty.webp",
    alt: "Ο χώρος του GameHaven με τα τραπέζια παιχνιδιού και το ράφι με επιτραπέζια",
    className: "",
    sizes: "(min-width: 640px) 33vw, 100vw",
    priority: false,
  },
  {
    src: "/shelf.webp",
    alt: "Booster boxes από Riftbound, Magic, One Piece και Yu-Gi-Oh! στο ράφι",
    className: "",
    sizes: "(min-width: 640px) 33vw, 100vw",
    priority: false,
  },
];

const OCCASIONS = [
  { title: "Γενέθλια", text: "Πάρτι με επιτραπέζια ή TCG για παιδιά και μεγάλους." },
  { title: "Ομάδες & εταιρείες", text: "Team building γύρω από ένα τραπέζι." },
  { title: "Σχολεία & σύλλογοι", text: "Γνωριμία με τα επιτραπέζια για ομάδες." },
];

export default function SpacePage() {
  return (
    <>
      <PageIntro eyebrow="Ο χώρος" title="Το τραπέζι σε περιμένει">
        Το GameHaven φτιάχτηκε για να μένεις. Έλα με την παρέα σου ή μόνος σου και θα βρεις με ποιον να
        παίξεις.
      </PageIntro>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid gap-3 sm:h-[34rem] sm:grid-cols-3 sm:grid-rows-2">
          {PHOTOS.map((photo) => (
            <figure
              key={photo.src}
              className={`relative aspect-[4/3] overflow-hidden rounded-xl border border-line sm:aspect-auto ${photo.className}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={photo.sizes}
                className="object-cover"
                priority={photo.priority}
              />
            </figure>
          ))}
        </div>

        <section className="mt-14 grid gap-4 md:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="rounded-xl border border-line bg-surface p-6">
              <h2 className="font-heading text-xl font-semibold text-ember">{f.title}</h2>
              <p className="mt-2 text-muted">{f.text}</p>
            </div>
          ))}
        </section>

        <section className="mt-16">
          <h2 className="font-heading text-2xl font-bold">Κλείσε τον χώρο</h2>
          <p className="mt-2 max-w-2xl text-muted">
            Για ιδιωτικές εκδηλώσεις και μεγάλες παρέες, επικοινώνησε μαζί μας για διαθεσιμότητα.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {OCCASIONS.map((o) => (
              <div key={o.title} className="rounded-xl border border-line bg-surface p-5">
                <h3 className="font-heading font-semibold">{o.title}</h3>
                <p className="mt-1 text-sm text-muted">{o.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-lg bg-ember px-5 py-3 font-semibold text-background transition hover:brightness-110"
            >
              Επικοινωνία
            </Link>
            <a
              href={STORE.phoneHref}
              className="rounded-lg border border-line px-5 py-3 font-semibold transition hover:border-ember/60"
            >
              {STORE.phone}
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
