"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/nav";

export function SiteHeader() {
  const pathname = usePathname();
  // Remembers the page the menu was opened on, so navigating closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-bears.webp"
            alt=""
            width={480}
            height={310}
            priority
            className="h-11 w-auto rounded-lg bg-cream p-0.5"
          />
          <span className="font-heading text-lg font-bold tracking-tight">
            Game<span className="text-ember">Haven</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                link.cta
                  ? `ml-2 rounded-md border-2 border-ember px-4 py-1.5 text-sm font-semibold text-ember transition hover:bg-ember hover:text-background ${
                      isActive(link.href) ? "bg-ember-soft" : ""
                    }`
                  : `rounded-md px-3 py-2 text-sm font-medium transition hover:bg-surface-raised ${
                      isActive(link.href) ? "text-ember" : "text-foreground"
                    }`
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpenOn(open ? null : pathname)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="rounded-md border border-line px-3 py-2 text-sm md:hidden"
        >
          {open ? "Κλείσιμο" : "Μενού"}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-line px-4 pb-4 pt-2 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                link.cta
                  ? "mt-2 block rounded-md border-2 border-ember px-3 py-2.5 text-center text-base font-semibold text-ember"
                  : `block rounded-md px-3 py-3 text-base font-medium ${
                      isActive(link.href) ? "text-ember" : "text-foreground"
                    }`
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
