"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { NAV_LINKS } from "@/lib/nav";
import { SITE_URL } from "@/lib/site";

/** "Αρχική / Πρόγραμμα" above every page but the home page, so nobody has to know the logo is a link. */
export function Breadcrumbs() {
  const pathname = usePathname();
  const page = NAV_LINKS.find((link) => link.href === pathname);

  // Home needs no trail; unknown paths (the 404 page) get none either.
  if (!page) return null;

  // Emitted so Google can render the breadcrumb trail in search results. This is a
  // client component, but Next still server-renders it, so the JSON-LD is in the
  // initial HTML the crawler receives.
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Αρχική", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: page.label, item: `${SITE_URL}${page.href}` },
    ],
  };

  return (
    <nav aria-label="Breadcrumb" className="mx-auto w-full max-w-6xl px-4 pt-6 sm:px-6">
      <JsonLd data={breadcrumbJsonLd} />
      <ol className="flex flex-wrap items-center gap-x-2 text-sm text-muted">
        <li>
          <Link href="/" className="transition hover:text-ember">
            ← Αρχική
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li className="text-foreground" aria-current="page">
          {page.label}
        </li>
      </ol>
    </nav>
  );
}
