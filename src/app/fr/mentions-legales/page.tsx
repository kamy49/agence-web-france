import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import LegalLayout from "@/app/components/LegalLayout";

export const metadata = {
  title: "Mentions Légales",
  description: "Consultez les mentions légales de WebZynth.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Navbar />
      <main>
        <LegalLayout title="Mentions Légales">
          <section className="space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-3">Informations générales</h2>
              <p>
                <strong>Nom :</strong> WebZynth
              </p>
              <p>
                <strong>Activité :</strong> Agence de création web et digital
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-3">Contact</h2>
              <p>
                Pour toute question, contactez-nous à{" "}
                <a
                  href="mailto:hello@webzynth.com"
                  className="text-amber-600 hover:text-amber-700"
                >
                  hello@webzynth.com
                </a>
              </p>
            </div>
          </section>
        </LegalLayout>
      </main>
      <Footer />
    </>
  );
}
