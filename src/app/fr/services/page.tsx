import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ServicesDetail from "@/app/components/ServicesDetail";

export const metadata = {
  title: "Nos Services",
  description: "Découvrez les services web de WebZynth : création de sites web, SEO, design et optimisation.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesDetail />
      </main>
      <Footer />
    </>
  );
}
