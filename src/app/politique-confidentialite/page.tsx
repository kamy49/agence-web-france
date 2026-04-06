import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LegalLayout from "../components/LegalLayout";

export const metadata: Metadata = {
  title: "Politique de Confidentialité — RGPD",
  description: "Politique de confidentialité et de traitement des données personnelles de PixelPro Agency, conformément au RGPD.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/politique-confidentialite" },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Navbar />
      <main>
        <LegalLayout title="Politique de Confidentialité" lastUpdated="5 avril 2026">
          <p>
            PixelPro Agency s'engage à protéger la vie privée des utilisateurs de son site web.
            La présente politique de confidentialité décrit comment nous collectons, utilisons et
            protégeons vos données personnelles, conformément au Règlement Général sur la Protection
            des Données (RGPD — UE 2016/679) et à la loi Informatique et Libertés.
          </p>

          <h2>1. Responsable du traitement</h2>
          <p>
            <strong>PixelPro Agency</strong><br />
            SIRET : [À compléter]<br />
            Email : contact@pixelpro-agency.fr<br />
            Téléphone : +33 6 XX XX XX XX
          </p>

          <h2>2. Données collectées</h2>
          <p>Nous collectons les données suivantes :</p>
          <ul>
            <li><strong>Via le formulaire de contact :</strong> nom, prénom, email, téléphone, nom d'entreprise, message.</li>
            <li><strong>Automatiquement :</strong> adresse IP, type de navigateur, pages visitées, durée de visite (via Google Analytics, avec votre consentement).</li>
            <li><strong>Cookies :</strong> cookies fonctionnels (nécessaires) et cookies analytiques (avec consentement).</li>
          </ul>

          <h2>3. Finalités du traitement</h2>
          <table>
            <thead>
              <tr>
                <th>Finalité</th>
                <th>Base légale</th>
                <th>Durée de conservation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Répondre aux demandes de contact et devis</td>
                <td>Intérêt légitime / Exécution d'un contrat</td>
                <td>3 ans</td>
              </tr>
              <tr>
                <td>Envoi de notre newsletter (avec consentement)</td>
                <td>Consentement</td>
                <td>Jusqu'au désabonnement</td>
              </tr>
              <tr>
                <td>Analyses statistiques des visites</td>
                <td>Consentement</td>
                <td>13 mois (Google Analytics)</td>
              </tr>
              <tr>
                <td>Respect des obligations légales et comptables</td>
                <td>Obligation légale</td>
                <td>10 ans</td>
              </tr>
            </tbody>
          </table>

          <h2>4. Cookies</h2>
          <p>Nous utilisons les catégories de cookies suivantes :</p>
          <ul>
            <li><strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site (session, préférences de consentement). Ils ne nécessitent pas de consentement.</li>
            <li><strong>Cookies analytiques :</strong> Google Analytics pour mesurer l'audience. Activés uniquement après votre consentement.</li>
          </ul>
          <p>
            Vous pouvez gérer vos préférences de cookies à tout moment via le bandeau qui apparaît
            lors de votre première visite, ou en effaçant les cookies de votre navigateur.
          </p>

          <h2>5. Partage des données</h2>
          <p>
            Nous ne vendons ni ne louons vos données personnelles à des tiers. Vos données peuvent
            être transmises à nos sous-traitants dans le strict cadre de la prestation (hébergeur Vercel,
            Google Analytics, outil de messagerie), qui sont contractuellement tenus au respect du RGPD.
          </p>

          <h2>6. Transferts hors UE</h2>
          <p>
            Certains de nos prestataires (Vercel, Google) sont basés aux États-Unis. Les transferts
            sont encadrés par les Clauses Contractuelles Types (CCT) approuvées par la Commission
            européenne ou par le Data Privacy Framework UE-USA.
          </p>

          <h2>7. Vos droits</h2>
          <p>Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul>
            <li><strong>Droit d'accès :</strong> obtenir une copie de vos données.</li>
            <li><strong>Droit de rectification :</strong> corriger des données inexactes.</li>
            <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données.</li>
            <li><strong>Droit à la limitation :</strong> restreindre le traitement de vos données.</li>
            <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré.</li>
            <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données.</li>
            <li><strong>Droit de retirer votre consentement</strong> à tout moment.</li>
          </ul>
          <p>
            Pour exercer vos droits, contactez-nous à : contact@pixelpro-agency.fr. Nous répondrons
            dans un délai d'un mois. En cas de litige, vous pouvez saisir la CNIL (www.cnil.fr).
          </p>

          <h2>8. Sécurité</h2>
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour
            protéger vos données : connexion HTTPS, chiffrement des données sensibles, accès
            restreint aux données personnelles.
          </p>

          <h2>9. Modifications</h2>
          <p>
            Nous nous réservons le droit de modifier cette politique. En cas de modification
            substantielle, vous serez informé par un avis sur notre site.
          </p>
        </LegalLayout>
      </main>
      <Footer />
    </>
  );
}
