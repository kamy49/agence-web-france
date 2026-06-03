import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTASection from "../components/home/CTASection";
import ServicesDetail from "../components/ServicesDetail";

export const metadata: Metadata = {
  title: "Nos Services — Création de Sites Web, SEO & E-commerce",
  description:
    "Création de sites vitrine, e-commerce, refonte, SEO et campagnes Google Ads pour PME et artisans français. Devis gratuit sous 24h.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Nos Services | WebZynth",
    description: "Sites vitrine, e-commerce, SEO, maintenance et Google Ads pour PME françaises.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesDetail />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
