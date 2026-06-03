import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import AboutContent from "@/app/components/AboutContent";

export const metadata = {
  title: "À Propos de WebZynth",
  description: "Découvrez l'histoire et la mission de WebZynth. Nous créons des sites web modernes pour les PME et artisans francophones.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}
