import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PortfolioFull from "../components/PortfolioFull";
import CTASection from "../components/home/CTASection";

export const metadata: Metadata = {
  title: "Portfolio — Nos Réalisations Sites Web PME",
  description:
    "Découvrez nos réalisations web : sites vitrine, e-commerce et applications web pour PME et artisans en France. Plus de 150 projets livrés.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio | WebZynth",
    description: "Sites vitrine, e-commerce et SEO — nos réalisations pour PME françaises.",
    url: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        <PortfolioFull />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
