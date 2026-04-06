import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LegalLayout from "../components/LegalLayout";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: "Mentions légales de PixelPro Agency — éditeur du site web.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Navbar />
      <main>
        <LegalLayout title="Mentions Légales" lastUpdated="5 avril 2026">
          <h2>1. Éditeur du site</h2>
          <p>
            Le présent site web est édité par :<br />
            <strong>PixelPro Agency</strong><br />
            Forme juridique : [À compléter — SARL / SAS / Auto-entrepreneur]<br />
            SIRET : [À compléter]<br />
            Siège social : [Adresse complète], France<br />
            Email : contact@pixelpro-agency.fr<br />
            Téléphone : +33 6 XX XX XX XX
          </p>

          <h2>2. Directeur de la publication</h2>
          <p>
            Le directeur de la publication est [Prénom Nom], en sa qualité de [gérant / président].
          </p>

          <h2>3. Hébergement</h2>
          <p>
            Le site est hébergé par :<br />
            <strong>Vercel Inc.</strong><br />
            440 N Barranca Ave #4133, Covina, CA 91723, USA<br />
            Site web : vercel.com
          </p>

          <h2>4. Propriété intellectuelle</h2>
          <p>
            L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, etc.) est
            la propriété exclusive de PixelPro Agency ou de ses partenaires, et est protégé par
            les lois françaises et internationales relatives à la propriété intellectuelle.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication ou adaptation de tout ou
            partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite,
            sauf autorisation écrite préalable de PixelPro Agency.
          </p>

          <h2>5. Liens hypertextes</h2>
          <p>
            PixelPro Agency ne peut être tenu responsable du contenu des sites externes vers lesquels
            des liens hypertextes sont proposés. La création de liens vers ce site est soumise à
            l'accord préalable de l'éditeur.
          </p>

          <h2>6. Limitation de responsabilité</h2>
          <p>
            PixelPro Agency s'efforce d'assurer l'exactitude et la mise à jour des informations
            publiées sur ce site. Cependant, nous ne pouvons garantir l'exactitude, la précision
            ou l'exhaustivité des informations mises à disposition.
          </p>
          <p>
            En conséquence, PixelPro Agency décline toute responsabilité pour toute imprécision,
            inexactitude ou omission portant sur des informations disponibles sur ce site.
          </p>

          <h2>7. Droit applicable et juridiction</h2>
          <p>
            Les présentes mentions légales sont régies par le droit français. Tout litige relatif
            à l'utilisation de ce site relève de la compétence exclusive des tribunaux français.
          </p>

          <h2>8. Contact</h2>
          <p>
            Pour toute question concernant ces mentions légales, vous pouvez nous contacter à :<br />
            Email : contact@pixelpro-agency.fr<br />
            Téléphone : +33 6 XX XX XX XX
          </p>
        </LegalLayout>
      </main>
      <Footer />
    </>
  );
}
