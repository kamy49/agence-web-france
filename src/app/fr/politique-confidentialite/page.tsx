import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import LegalLayout from "@/app/components/LegalLayout";

export const metadata = {
  title: "Politique de Confidentialité",
  description: "Consultez la politique de confidentialité de WebZynth.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Navbar />
      <main>
        <LegalLayout title="Politique de Confidentialité">
          <section className="space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-3">
                Protection de vos données
              </h2>
              <p>
                WebZynth s'engage à protéger vos données personnelles conformément
                aux lois applicables en matière de protection des données.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-3">Données collectées</h2>
              <p>
                Nous collectons vos données personnelles uniquement pour vous
                fournir nos services et améliorer votre expérience.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-3">Vos droits</h2>
              <p>
                Vous disposez de droits concernant vos données personnelles.
                Pour exercer ces droits, veuillez nous contacter.
              </p>
            </div>
          </section>
        </LegalLayout>
      </main>
      <Footer />
    </>
  );
}
