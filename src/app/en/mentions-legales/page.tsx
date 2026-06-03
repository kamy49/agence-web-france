import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import LegalLayout from "@/app/components/LegalLayout";

export const metadata = {
  title: "Legal Information",
  description: "Read WebZynth's legal information.",
};

export default function LegalInfoPage() {
  return (
    <>
      <Navbar />
      <main>
        <LegalLayout title="Legal Information">
          <section className="space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-3">General Information</h2>
              <p>
                <strong>Name :</strong> WebZynth
              </p>
              <p>
                <strong>Activity :</strong> Web and digital creation agency
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-3">Contact</h2>
              <p>
                For any questions, contact us at{" "}
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
