import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import LegalLayout from "@/app/components/LegalLayout";

export const metadata = {
  title: "Terms of Service",
  description: "Read WebZynth's terms of service.",
};

export default function CGVPage() {
  return (
    <>
      <Navbar />
      <main>
        <LegalLayout title="Terms of Service">
          <section className="space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-3">1. Definitions</h2>
              <p>
                In these terms of service, the following terms have the
                meanings set out below:
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-3">2. Services</h2>
              <p>
                WebZynth offers website creation and optimization services.
                Timelines and pricing are defined in the quotations provided.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-3">3. Responsibilities</h2>
              <p>
                WebZynth makes its best efforts to deliver professionally
                crafted websites. The client is responsible for the content
                provided.
              </p>
            </div>
          </section>
        </LegalLayout>
      </main>
      <Footer />
    </>
  );
}
