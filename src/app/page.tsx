import Navbar from "./components/Navbar";
import Hero from "./components/home/Hero";
import ServicesSection from "./components/home/ServicesSection";
import Portfolio from "./components/home/Portfolio";
import Process from "./components/home/Process";
import Testimonials from "./components/home/Testimonials";
import Pricing from "./components/home/Pricing";
import CTASection from "./components/home/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <Portfolio />
        <Process />
        <Testimonials />
        <Pricing />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
