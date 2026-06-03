import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import LegalLayout from "@/app/components/LegalLayout";

export const metadata = {
  title: "Conditions Générales de Vente",
  description: "Consultez les conditions générales de vente de WebZynth.",
};

export default function CGVPage() {
  return (
    <>
      <Navbar />
      <main>
        <LegalLayout title="Conditions Générales de Vente">
          <section className="space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-3">1. Définitions</h2>
              <p>
                Dans les présentes conditions générales, les termes suivants
                ont les significations ci-dessous :
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-3">2. Prestation de Services</h2>
              <p>
                WebZynth propose des services de création et d'optimisation de
                sites web. Les délais et tarifs sont définis dans les devis
                proposés.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-3">3. Responsabilités</h2>
              <p>
                WebZynth met ses meilleures efforts pour livrer des sites web
                de qualité professionnelle. Le client est responsable du
                contenu fourni.
              </p>
            </div>
          </section>
        </LegalLayout>
      </main>
      <Footer />
    </>
  );
}
