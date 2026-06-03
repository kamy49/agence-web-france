import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ContactContent from "@/app/components/ContactContent";

export const metadata = {
  title: "Contact Us",
  description: "Contact the WebZynth team to discuss your web project.",
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
