import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "@/app/globals.css";
import CookieBanner from "@/app/components/CookieBanner";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const SITE_NAME = "WebZynth";
const SITE_URL = "https://webzynth.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Création de Sites Web pour PME`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Agence web spécialisée dans la création de sites web professionnels pour PME et artisans dans les pays francophones. Sites modernes, rapides, optimisés SEO livrés en 7 jours à partir de 990€.",
  alternates: {
    canonical: "/fr",
    languages: {
      fr: `${SITE_URL}/fr`,
      en: `${SITE_URL}/en`,
      "x-default": `${SITE_URL}/en`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function FrLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${plusJakarta.variable} ${inter.variable}`}>
      <head>
        <link rel="alternate" hrefLang="en" href={`${SITE_URL}/en`} />
        <link rel="alternate" hrefLang="fr" href={`${SITE_URL}/fr`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/en`} />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-creme font-body">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
