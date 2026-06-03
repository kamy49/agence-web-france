import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/home/Hero";
import ServicesSection from "@/app/components/home/ServicesSection";
import Portfolio from "@/app/components/home/Portfolio";
import Testimonials from "@/app/components/home/Testimonials";
import Pricing from "@/app/components/home/Pricing";
import Process from "@/app/components/home/Process";
import CTASection from "@/app/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <Process />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
