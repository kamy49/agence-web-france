import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ServicesDetail from "@/app/components/ServicesDetail";

export const metadata = {
  title: "Our Services",
  description: "Discover WebZynth's web services: website creation, SEO, design, and optimization.",
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
