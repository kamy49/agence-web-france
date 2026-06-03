import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PortfolioFull from "@/app/components/PortfolioFull";

export const metadata = {
  title: "Our Portfolio",
  description: "Browse our portfolio of web projects for SMEs and artisans.",
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
