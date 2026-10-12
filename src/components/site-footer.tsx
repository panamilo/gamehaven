import Link from "next/link";
import { NAV_LINKS } from "@/lib/nav";
import { OPENING_HOURS, STORE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line bg-surface">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-heading text-xl font-bold">
            Game<span className="text-ember">Haven</span>
          </p>
          <p className="mt-2 max-w-sm text-sm text-muted">
            {STORE.tagline}. Το στέκι της Πάτρας για όσους παίζουν, ή θέλουν να ξεκινήσουν.
          </p>
          <div className="mt-4 flex gap-3 text-sm">
            <a href={STORE.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-ember">
              Instagram
            </a>
            <a href={STORE.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-ember">
              Facebook
            </a>
            <a href={STORE.googleProfileUrl} target="_blank" rel="noopener noreferrer" className="hover:text-ember">
              Google
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">Ωράριο</p>
          <dl className="mt-3 space-y-1.5 text-sm">
            {OPENING_HOURS.map((row) => (
              <div key={row.days} className="flex justify-between gap-4">
                <dt className="text-muted">{row.days}</dt>
                <dd>{row.hours}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">Σελίδες</p>
          <ul className="mt-3 space-y-1.5 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-ember">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted">
            {STORE.street}, {STORE.city}
          </p>
        </div>
      </div>
      <p className="border-t border-line px-4 py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} {STORE.name}. All rights reserved.
      </p>
    </footer>
  );
}
