import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PortfolioFull from "@/app/components/PortfolioFull";

export const metadata = {
  title: "Nos Réalisations",
  description: "Consultez notre portefeuille de projets web pour PME et artisans.",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        <PortfolioFull />
      </main>
      <Footer />
    </>
  );
}
