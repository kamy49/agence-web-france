import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LegalLayout from "../components/LegalLayout";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente (CGV)",
  description: "Conditions générales de vente de WebZynth — prestation de création de sites web.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/cgv" },
};

export default function CGVPage() {
  return (
    <>
      <Navbar />
      <main>
        <LegalLayout title="Conditions Générales de Vente" lastUpdated="5 avril 2026">
          <p>
            Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles
            entre WebZynth (ci-après « le Prestataire ») et tout client (ci-après « le Client »)
            souhaitant bénéficier de ses services de création de sites web et de services digitaux associés.
          </p>

          <h2>1. Objet</h2>
          <p>
            Le Prestataire propose des services de conception et développement de sites web, référencement
            SEO, création de contenu digital, maintenance et autres prestations digitales pour les PME,
            artisans et professionnels indépendants.
          </p>

          <h2>2. Devis et commande</h2>
          <p>
            Toute prestation débute par l'établissement d'un devis gratuit, valable 30 jours à compter de
            sa date d'émission. La commande est ferme et définitive à réception par le Prestataire du devis
            signé avec la mention « Bon pour accord » et du versement de l'acompte.
          </p>
          <p>
            Toute modification du devis initial par le Client peut donner lieu à l'établissement d'un avenant
            et/ou à une révision du prix.
          </p>

          <h2>3. Tarifs et facturation</h2>
          <p>Les tarifs sont indiqués en euros, hors taxes (HT). La TVA applicable est celle en vigueur en France.</p>
          <ul>
            <li><strong>Offre Starter :</strong> à partir de 990€ HT</li>
            <li><strong>Offre Business :</strong> à partir de 1 990€ HT</li>
            <li><strong>Offre Premium / Sur mesure :</strong> sur devis</li>
            <li><strong>Maintenance mensuelle :</strong> à partir de 49€ HT/mois</li>
          </ul>
          <p>
            Une facture détaillée est émise à chaque étape de facturation. Les prix sont susceptibles
            d'être révisés annuellement, avec préavis d'un mois pour les contrats de maintenance.
          </p>

          <h2>4. Modalités de paiement</h2>
          <p>Sauf accord contraire, le règlement s'effectue en deux versements :</p>
          <ul>
            <li><strong>50% à la commande</strong> : acompte permettant le démarrage des travaux.</li>
            <li><strong>50% à la livraison</strong> : solde dû avant la mise en ligne du site.</li>
          </ul>
          <p>
            Pour les contrats de maintenance, la facturation est mensuelle, en début de période.
            Le paiement s'effectue par virement bancaire ou carte bancaire (via Stripe).
          </p>
          <p>
            Tout retard de paiement entraîne de plein droit l'application d'intérêts de retard au taux
            de 3 fois le taux d'intérêt légal en vigueur, ainsi qu'une indemnité forfaitaire de 40€ pour
            frais de recouvrement.
          </p>

          <h2>5. Délais de livraison</h2>
          <p>
            Le Prestataire s'engage sur un délai de livraison indicatif de 7 jours ouvrés pour les
            offres Starter et Business, à compter de la réception de l'acompte ET de tous les éléments
            nécessaires à la réalisation (textes, images, identifiants, etc.).
          </p>
          <p>
            Les délais peuvent être prolongés en cas de retard dans la fourniture des éléments par le
            Client, de demandes de modifications substantielles ou de cas de force majeure.
          </p>

          <h2>6. Obligations du Client</h2>
          <p>Le Client s'engage à :</p>
          <ul>
            <li>Fournir en temps et en heure tous les éléments nécessaires à la réalisation du projet (textes, images, logos, accès).</li>
            <li>Désigner un interlocuteur unique disposant du pouvoir de valider les livrables.</li>
            <li>Répondre aux demandes de validation dans un délai de 5 jours ouvrés.</li>
            <li>S'assurer que les éléments fournis ne violent pas les droits de tiers (droits d'auteur, marques, etc.).</li>
          </ul>

          <h2>7. Obligations du Prestataire</h2>
          <p>Le Prestataire s'engage à :</p>
          <ul>
            <li>Réaliser les prestations conformément au devis validé, dans les règles de l'art.</li>
            <li>Respecter la confidentialité des informations transmises par le Client.</li>
            <li>Livrer un site conforme aux standards W3C, mobile-first et optimisé SEO.</li>
            <li>Assurer la conformité RGPD du site livré.</li>
          </ul>

          <h2>8. Révisions et modifications</h2>
          <p>
            Chaque offre inclut un nombre de cycles de révisions défini dans le devis (généralement 2 cycles).
            Les modifications demandées au-delà de ces cycles feront l'objet d'une facturation complémentaire
            au taux horaire de 75€ HT/heure.
          </p>

          <h2>9. Transfert de propriété</h2>
          <p>
            Le Prestataire transfère la propriété intellectuelle du site au Client après règlement intégral
            de la facture. Jusqu'à ce paiement complet, le Prestataire reste propriétaire de tous les éléments
            créés.
          </p>
          <p>
            Le Prestataire conserve le droit de mentionner la réalisation du site dans son portfolio et à des
            fins de communication, sauf demande expresse contraire du Client.
          </p>

          <h2>10. Garantie et support</h2>
          <p>
            Le Prestataire garantit les travaux livrés pendant une durée de 30 jours après la mise en ligne.
            Tout bug ou dysfonctionnement constaté dans ce délai sera corrigé sans frais supplémentaires,
            sauf s'il résulte d'une modification effectuée par le Client ou un tiers.
          </p>
          <p>
            Au-delà de cette période, les interventions font l'objet d'un contrat de maintenance ou d'une
            facturation au taux horaire.
          </p>

          <h2>11. Satisfaction garantie</h2>
          <p>
            Si le Client n'est pas satisfait du rendu final après deux cycles de révisions, et si le
            Prestataire n'est pas en mesure d'apporter les corrections attendues dans les 15 jours,
            l'acompte versé sera intégralement remboursé.
          </p>

          <h2>12. Limitation de responsabilité</h2>
          <p>
            La responsabilité du Prestataire est limitée au montant des sommes effectivement perçues au
            titre du contrat concerné. Le Prestataire ne saurait être tenu responsable des préjudices
            indirects subis par le Client (perte de chiffre d'affaires, perte de clientèle, etc.).
          </p>

          <h2>13. Force majeure</h2>
          <p>
            Aucune partie ne pourra être tenue responsable de l'inexécution de ses obligations en cas de
            force majeure au sens de l'article 1218 du Code civil (pandémie, catastrophe naturelle,
            défaillance des réseaux, etc.).
          </p>

          <h2>14. Confidentialité</h2>
          <p>
            Les parties s'engagent à maintenir confidentielles toutes les informations échangées dans le
            cadre du présent contrat, pendant toute la durée de la relation contractuelle et pendant 3 ans
            après son terme.
          </p>

          <h2>15. Résiliation</h2>
          <p>
            En cas de manquement grave d'une partie à ses obligations, l'autre partie peut résilier le
            contrat après mise en demeure restée sans effet pendant 15 jours. L'acompte versé reste acquis
            au Prestataire pour les travaux déjà réalisés.
          </p>

          <h2>16. Droit applicable et litiges</h2>
          <p>
            Les présentes CGV sont soumises au droit français. En cas de litige, les parties s'engagent à
            rechercher une solution amiable avant tout recours judiciaire. À défaut, le litige sera soumis
            aux tribunaux compétents du ressort du siège social du Prestataire.
          </p>
          <p>
            Conformément à l'article L612-1 du Code de la consommation, tout consommateur peut recourir
            gratuitement au service de médiation de la consommation.
          </p>

          <h2>17. Contact</h2>
          <p>
            Pour toute question relative aux présentes CGV :<br />
            Email : contact@webzynth.fr
          </p>
        </LegalLayout>
      </main>
      <Footer />
    </>
  );
}
