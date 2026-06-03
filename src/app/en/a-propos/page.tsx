import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import AboutContent from "@/app/components/AboutContent";

export const metadata = {
  title: "About WebZynth",
  description: "Discover the story and mission of WebZynth. We create modern websites for SMEs and artisans in francophone countries.",
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
