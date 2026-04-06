import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactContent from "../components/ContactContent";

export const metadata: Metadata = {
  title: "Contact — Demandez Votre Devis Gratuit",
  description:
    "Contactez PixelPro Agency pour un devis gratuit sous 24h. Maquette offerte, sans engagement. Nous accompagnons les PME françaises dans leur développement web.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contactez-nous | PixelPro Agency",
    description: "Devis gratuit sous 24h, maquette offerte. Votre site web professionnel en 7 jours.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactContent />
      </main>
      <Footer />
    </>
  );
}
