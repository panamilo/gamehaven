import type { Metadata } from "next";
import { Geologica, Inter } from "next/font/google";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SITE_URL, STORE } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "greek"],
});

const geologica = Geologica({
  variable: "--font-geologica",
  subsets: ["latin", "greek"],
});

const DESCRIPTION =
  "GameHaven Πάτρα: κατάστημα και χώρος παιχνιδιού για TCG, επιτραπέζια και RPG. Τουρνουά, εβδομαδιαίες βραδιές και τραπέζια για να παίξεις με την παρέα σου.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "GameHaven Πάτρα · TCG & Επιτραπέζια",
    template: "%s | GameHaven",
  },
  description: DESCRIPTION,
  openGraph: {
    siteName: STORE.name,
    type: "website",
    locale: "el_GR",
    url: SITE_URL,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" data-scroll-behavior="smooth" className={`${inter.variable} ${geologica.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex w-full flex-1 flex-col">
          <Breadcrumbs />
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
