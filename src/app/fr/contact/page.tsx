import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ContactContent from "@/app/components/ContactContent";

export const metadata = {
  title: "Contactez-nous",
  description: "Contactez l'équipe WebZynth pour discuter de votre projet web.",
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
