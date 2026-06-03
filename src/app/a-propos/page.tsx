import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutContent from "../components/AboutContent";
import CTASection from "../components/home/CTASection";

export const metadata: Metadata = {
  title: "À Propos — Notre Équipe & Notre Mission",
  description:
    "Découvrez l'équipe WebZynth : des passionnés du web qui aident les PME et artisans français à se développer grâce à des sites web professionnels.",
  alternates: { canonical: "/a-propos" },
  openGraph: {
    title: "À Propos | WebZynth",
    description: "Notre mission : aider chaque PME française à réussir sur internet.",
    url: "/a-propos",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutContent />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
