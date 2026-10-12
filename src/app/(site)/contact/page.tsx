import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { OPENING_HOURS, STORE, STORE_MAP_QUERY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Επικοινωνία",
  description: "Διεύθυνση, ωράριο και τηλέφωνο του GameHaven στην Πάτρα: 28ης Οκτωβρίου 53Α.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const channels = [
    { label: "Διεύθυνση", value: `${STORE.street}, ${STORE.postalCode} ${STORE.city}`, href: STORE.googleMapsUrl },
    { label: "Τηλέφωνο", value: STORE.phone, href: STORE.phoneHref },
    { label: "Email", value: STORE.email, href: `mailto:${STORE.email}` },
    { label: "Instagram", value: `@${STORE.instagramHandle}`, href: STORE.instagramUrl },
    { label: "Facebook", value: "Σελίδα & events", href: STORE.facebookUrl },
    { label: "Google", value: "Κριτικές & φωτογραφίες", href: STORE.googleProfileUrl },
  ];

  return (
    <>
      <PageIntro eyebrow="Επικοινωνία" title="Πού θα μας βρεις">
        Πέρνα από το μαγαζί, πάρε τηλέφωνο ή στείλε μήνυμα στα social.
      </PageIntro>

      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-[1fr_1.4fr]">
        <div className="space-y-8">
          <ul className="space-y-4">
            {channels.map((c) => (
              <li key={c.label}>
                <p className="text-xs uppercase tracking-wider text-muted">{c.label}</p>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="font-semibold hover:text-ember"
                >
                  {c.value}
                </a>
              </li>
            ))}
          </ul>

          <div>
            <p className="text-xs uppercase tracking-wider text-muted">Ωράριο</p>
            <dl className="mt-2 space-y-1.5">
              {OPENING_HOURS.map((row) => (
                <div key={row.days} className="flex justify-between gap-4 border-b border-line pb-1.5">
                  <dt className="text-muted">{row.days}</dt>
                  <dd className="font-semibold">{row.hours}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <iframe
          title={`Χάρτης: ${STORE.name} Πάτρα`}
          src={`https://www.google.com/maps?q=${encodeURIComponent(STORE_MAP_QUERY)}&output=embed`}
          className="aspect-[4/3] w-full rounded-xl border border-line md:aspect-auto md:min-h-[28rem]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}
