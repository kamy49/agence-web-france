import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import LegalLayout from "@/app/components/LegalLayout";

export const metadata = {
  title: "Privacy Policy",
  description: "Read WebZynth's privacy policy.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <LegalLayout title="Privacy Policy">
          <section className="space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-3">Data Protection</h2>
              <p>
                WebZynth is committed to protecting your personal data in
                accordance with applicable data protection laws.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-3">Data Collected</h2>
              <p>
                We collect your personal data only to provide you with our
                services and improve your experience.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-3">Your Rights</h2>
              <p>
                You have rights regarding your personal data. To exercise these
                rights, please contact us.
              </p>
            </div>
          </section>
        </LegalLayout>
      </main>
      <Footer />
    </>
  );
}
