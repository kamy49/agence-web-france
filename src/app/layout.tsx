import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "./components/CookieBanner";

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
const SITE_URL = "https://webzynth.fr";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Création de Sites Web pour PME en France`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Agence web spécialisée dans la création de sites web professionnels pour PME et artisans en France. Sites vitrine, e-commerce, SEO — livrés en 7 jours à partir de 990€.",
  keywords: [
    "création site web PME France",
    "agence web professionnelle",
    "site internet artisan",
    "création site web restaurant",
    "site web pas cher France",
    "référencement SEO France",
    "site vitrine professionnel",
    "refonte site internet",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Création de Sites Web pour PME en France`,
    description:
      "Agence web professionnelle — sites vitrine, e-commerce et SEO pour PME et artisans français. Livraison en 7 jours.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "WebZynth — Création de sites web professionnels",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Création de Sites Web pour PME`,
    description: "Sites web professionnels pour PME et artisans français.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "/" },
  verification: {
    google: "votre-code-google-search-console",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  description: "Agence web spécialisée création de sites web pour PME et artisans dans les pays francophones.",
  url: SITE_URL,
  email: "contact@webzynth.fr",
  priceRange: "€€",
  areaServed: "Belgium,Canada,France,Luxembourg,Switzerland",
  serviceType: "Création de sites web",
  address: {
    "@type": "PostalAddress",
    addressCountry: "FR",
  },
  sameAs: [
    "https://www.linkedin.com/company/webzynth",
    "https://www.instagram.com/webzynth",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${plusJakarta.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-creme font-body">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
