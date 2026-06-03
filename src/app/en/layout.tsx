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
    default: `${SITE_NAME} — Create Professional Websites for SMEs`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Web agency specialized in creating professional websites for SMEs and artisans in francophone countries. Modern, fast, SEO-optimized websites delivered in 7 days from €990.",
  alternates: {
    canonical: "/en",
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

export default function EnLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
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
