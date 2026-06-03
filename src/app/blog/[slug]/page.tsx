import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { articles } from "../../data/articles";
import { ArrowLeft, Clock, User, Calendar, ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `/blog/${slug}`,
      images: [{ url: article.image, width: 1200, height: 630, alt: article.title }],
    },
  };
}

const articleContent: Record<string, string[]> = {
  "pourquoi-votre-pme-a-besoin-dun-site-web-en-2025": [
    "En 2025, ne pas avoir de site web pour votre PME, c'est comme ne pas être dans l'annuaire téléphonique en 1995. Vos clients potentiels vous cherchent en ligne — et s'ils ne vous trouvent pas, ils trouvent votre concurrent.",
    "## Les chiffres qui parlent d'eux-mêmes",
    "87% des Français effectuent une recherche sur Google avant de contacter un professionnel. 75% d'entre eux ne vont jamais au-delà de la première page des résultats. Et 57% des internautes ne recommanderont pas une entreprise dont le site web est mal conçu sur mobile.",
    "Ce n'est pas une tendance — c'est la réalité du marché français en 2025.",
    "## Ce que vous perdez sans site web",
    "Sans site web, vous perdez des clients qui auraient pu vous trouver, des devis que vous n'avez jamais reçus, de la crédibilité face à vos concurrents, et des avis Google qui auraient construit votre réputation.",
    "Un restaurateur de Bruxelles nous a confié avoir perdu 40% de ses nouvelles réservations après qu'un concurrent a ouvert à côté avec un site web professionnel. En 6 mois avec WebZynth, il a non seulement récupéré ses parts de marché mais les a doublées.",
    "## Votre site web : un investissement, pas une dépense",
    "Un site vitrine professionnel coûte entre 990€ et 2 000€. Si votre panier moyen est de 50€ et que le site vous apporte 3 clients supplémentaires par mois, il est rentabilisé en 7 mois.",
    "Pour un plombier avec un chantier moyen à 300€, c'est rentabilisé en 3 mois avec seulement un client par mois.",
    "## Comment agir maintenant",
    "1. Commencez par une présence simple mais professionnelle\n2. Assurez-vous d'être sur Google My Business\n3. Collectez des avis de vos clients actuels\n4. Créez du contenu qui répond aux questions de vos prospects",
    "Chez WebZynth, nous livrons un site web professionnel optimisé SEO en 7 jours à partir de 990€. Demandez votre maquette gratuite aujourd'hui.",
  ],
  "seo-local-artisans-comment-apparaitre-google": [
    "Le SEO local est l'art d'apparaître dans les résultats Google quand quelqu'un près de chez vous cherche votre type de service. Pour un plombier, c'est apparaître quand quelqu'un tape 'plombier Paris 15'. Pour un boulanger, c'est 'boulangerie Bordeaux centre'.",
    "## Pourquoi le SEO local est crucial pour les artisans",
    "Les recherches locales représentent 46% de toutes les recherches Google. Et parmi ceux qui effectuent une recherche locale, 72% visitent un commerce dans les 5 km. Le SEO local n'est pas un luxe — c'est votre canal d'acquisition principal.",
    "## 1. Optimiser votre fiche Google My Business",
    "La fiche Google My Business (maintenant Google Business Profile) est votre vitrine gratuite sur Google. Pour l'optimiser :\n- Remplissez TOUS les champs : nom, adresse, téléphone, horaires, catégorie\n- Ajoutez des photos de qualité (devanture, intérieur, réalisations)\n- Répondez à tous les avis — positifs ET négatifs\n- Publiez des posts réguliers (offres, actualités)\n- Activez la messagerie directe",
    "## 2. Les mots-clés locaux à cibler",
    "Identifiez les mots-clés que vos clients tapent : [votre métier] + [votre ville], [votre métier] + [votre quartier], 'urgent' + [votre métier] + [votre ville].",
    "Intégrez ces mots-clés naturellement dans vos titres, descriptions, et contenu de page.",
    "## 3. Les citations locales (NAP)",
    "Assurez-vous que votre nom, adresse et téléphone (NAP) sont identiques sur votre site, Google My Business, les Pages Jaunes, Yelp, et tous les annuaires professionnels de votre secteur.",
    "## 4. Les avis clients : votre meilleur atout SEO",
    "Les avis Google influencent directement votre positionnement local. Objectif : 50+ avis avec une note moyenne de 4.5/5.\n\nDemandez systématiquement un avis à vos clients satisfaits via un lien direct que vous pouvez envoyer par SMS.",
    "## Résultats attendus",
    "Avec une stratégie SEO local bien exécutée, vous pouvez espérer apparaître dans le 'pack local' (les 3 résultats avec carte) en 3 à 6 mois. C'est là que se passe 44% des clics.",
  ],
  "combien-coute-un-site-web-professionnel-en-france": [
    "La question qui revient le plus souvent : combien faut-il budgeter pour un site web professionnel en France en 2025 ? La réponse honnête : entre 500€ et 15 000€. Voici comment comprendre ces écarts.",
    "## Les options du marché",
    "**Faire soi-même (0 à 200€/an)** : Wix, Squarespace ou WordPress.com. Simple, mais limité. Le résultat manque souvent de professionnalisme et les performances SEO sont médiocres.",
    "**Freelance débutant (500 à 1 500€)** : Prix attractif, mais risque sur la qualité, le délai et le suivi. Vérifiez toujours un portfolio.",
    "**Agence web PME (990 à 3 000€)** : Le sweet spot pour une PME. Design professionnel, code optimisé, SEO intégré, support. C'est notre positionnement chez WebZynth.",
    "**Grande agence (3 000 à 15 000€+)** : Processus long (3 à 6 mois), équipes importantes, tarifs élevés. Pertinent pour les projets complexes, surdimensionné pour une PME.",
    "## Ce qui justifie le prix",
    "La différence entre un site à 990€ et un site à 300€, c'est :\n- Le temps de développement (20h vs 2h)\n- La qualité du design et de l'UX\n- L'optimisation SEO technique\n- La performance (vitesse, Core Web Vitals)\n- Le support et la maintenance",
    "## Ce que vous devez exiger peu importe le prix",
    "Design responsive mobile-first, score Google PageSpeed > 80, conformité RGPD, accès à votre hébergement et nom de domaine, et une formation pour gérer votre contenu.",
    "## Notre recommandation",
    "Pour une PME française en 2025, budgétez entre 990€ et 2 500€ pour un site vitrine professionnel, entre 1 990€ et 4 000€ pour un e-commerce, et entre 290 et 490€/mois pour un accompagnement SEO.",
    "Chez WebZynth, nos tarifs sont transparents : Starter à 990€, Business à 1 990€. Tout inclus, aucune surprise.",
  ],
  "wordpress-vs-nextjs-quelle-technologie-choisir": [
    "WordPress ou Next.js ? C'est l'une des questions techniques les plus fréquentes de nos clients. Voici une comparaison honnête des deux solutions pour vous aider à choisir.",
    "## WordPress : le géant démocratique",
    "WordPress alimente 43% de tous les sites web dans le monde. C'est la solution la plus répandue pour une bonne raison : elle est accessible, flexible et dispose d'un écosystème gigantesque.",
    "**Avantages de WordPress :**\n- Interface d'administration intuitive\n- Milliers de thèmes et plugins\n- Coût initial souvent plus bas\n- Large communauté de développeurs\n- Idéal pour les blogs à fort volume de contenu",
    "**Inconvénients :**\n- Performances souvent moyennes (sans optimisation poussée)\n- Surface d'attaque importante (nombreuses vulnérabilités plugins)\n- Maintenances régulières obligatoires\n- Temps de chargement parfois lent",
    "## Next.js : la performance maximale",
    "Next.js est un framework React moderne utilisé par des entreprises comme Netflix, Airbnb et TikTok. Il génère des pages statiques ultra-rapides.",
    "**Avantages de Next.js :**\n- Performances exceptionnelles (PageSpeed 95+)\n- Sécurité optimale (pas de base de données exposée)\n- SEO technique supérieur\n- Temps de chargement < 1 seconde\n- Expérience utilisateur fluide et moderne",
    "**Inconvénients :**\n- Gestion de contenu moins intuitive (nécessite un CMS headless)\n- Développeurs plus rares et plus coûteux\n- Moins de plugins prêts à l'emploi",
    "## Notre recommandation selon le contexte",
    "Choisissez **WordPress** si vous avez besoin de publier beaucoup de contenu fréquemment et souhaitez gérer votre site en totale autonomie.\n\nChoisissez **Next.js** si vous voulez les meilleures performances, le meilleur SEO technique, et une sécurité maximale.",
    "Chez WebZynth, nous utilisons Next.js pour tous nos sites. La différence de performance est mesurable : +40% de vitesse en moyenne par rapport à WordPress.",
  ],
  "rgpd-guide-complet-site-web-pme": [
    "Depuis mai 2018, le RGPD (Règlement Général sur la Protection des Données) impose des obligations strictes à toutes les entreprises ayant des clients en Europe. Votre site web PME est directement concerné.",
    "## Ce que dit la loi (en clair)",
    "Vous devez informer vos visiteurs de la collecte de données, obtenir leur consentement pour les cookies non-essentiels, leur permettre de refuser facilement, et protéger les données que vous collectez.",
    "## Les 5 éléments obligatoires sur votre site",
    "**1. Politique de confidentialité** : Un document complet expliquant quelles données vous collectez, pourquoi, et comment vous les traitez.",
    "**2. Mentions légales** : Nom de l'entreprise, adresse, SIRET, responsable de publication. Obligatoire en France.",
    "**3. Bandeau cookies** : Doit apparaître au premier accès, permettre d'accepter ou refuser, et ne pas pre-cocher les cases.",
    "**4. CGV (si vous vendez en ligne)** : Conditions Générales de Vente détaillées.",
    "**5. Formulaires conformes** : Mentionner le traitement des données dans chaque formulaire de contact.",
    "## Ce que vous devez éviter",
    "Ne pas collecter plus de données que nécessaire, ne pas pré-cocher les cases de consentement, ne pas rendre le refus plus difficile que l'acceptation, et ne pas transférer des données hors UE sans mesures adéquates.",
    "## Les sanctions",
    "La CNIL peut infliger des amendes allant jusqu'à 4% du chiffre d'affaires mondial ou 20 millions d'euros. Les PME sont de plus en plus dans le viseur.",
    "## Chez WebZynth",
    "Tous nos sites sont livrés conformes RGPD : bandeau cookies, politique de confidentialité, mentions légales et CGV incluses. Nous gérons la conformité pour vous.",
  ],
  "augmenter-clients-grace-site-web-restaurant": [
    "Un restaurant avec un excellent site web peut tripler ses réservations en ligne en 3 mois. On vous explique comment avec des exemples concrets de nos clients.",
    "## Les éléments indispensables d'un site restaurant qui convertit",
    "**Photos appétissantes** : Investissez dans un shooting photo professionnel. Des études montrent que les photos de qualité augmentent les commandes de 30%. C'est votre meilleur ROI.",
    "**Menu interactif et à jour** : Votre menu doit être facile à trouver, lisible sur mobile, et mis à jour régulièrement. 73% des clients consultent le menu en ligne avant de réserver.",
    "**Réservation en 1 clic** : Intégrez un système de réservation directement sur votre site (TheFork, Resy, ou un formulaire simple). Chaque étape supplémentaire coûte 30% de conversions.",
    "## La stratégie SEO locale pour un restaurant",
    "Optimisez pour des mots-clés comme 'restaurant [cuisine] [ville]', 'meilleur restaurant [quartier]', 'restaurant romantique [ville]'.\n\nRemplissez votre fiche Google My Business avec des photos, vos horaires, le menu, et répondez à TOUS les avis.",
    "## Les réseaux sociaux intégrés à votre site",
    "Intégrez votre flux Instagram directement sur votre site. Les restaurants qui publient 3 fois par semaine sur Instagram génèrent 40% de réservations supplémentaires.",
    "L'histoire de Sophie — Restaurant Le Botaniste, Genève",
    "Sophie Marchand, restauratrice à Genève, nous a contactés en janvier 2025. Son site existant était vieillissant, non optimisé mobile, et ses réservations en ligne représentaient moins de 5% de son activité.",
    "En 6 jours, nous avons livré un nouveau site avec shooting photo, menu interactif, réservation en ligne et SEO local optimisé. Résultat : +45% de réservations en ligne en 3 mois.",
    "## Comment commencer",
    "Commencez par auditer votre situation actuelle : votre site est-il lisible sur mobile ? Vos photos donnent-elles faim ? Peut-on réserver en moins de 60 secondes ?\n\nSi la réponse à l'une de ces questions est non, il est temps d'agir.",
  ],
};

export default async function BlogArticlePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const content = articleContent[slug] ?? [];
  const related = articles.filter((a) => a.slug !== slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    author: { "@type": "Person", name: article.author },
    publisher: {
      "@type": "Organization",
      name: "WebZynth",
      url: "https://webzynth.fr",
    },
    datePublished: article.date,
    mainEntityOfPage: `https://webzynth.fr/blog/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        {/* Hero article */}
        <section className="pt-28 pb-0">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#64748B] hover:text-[#4F46E5] text-sm font-medium transition-colors mb-8"
            >
              <ArrowLeft size={16} /> Retour au blog
            </Link>
            <span
              className="text-white text-xs font-bold px-3 py-1.5 rounded-full inline-block mb-4"
              style={{ backgroundColor: article.categoryColor }}
            >
              {article.category}
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight mb-6">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#64748B] mb-8">
              <span className="flex items-center gap-1.5"><User size={15} />{article.author}</span>
              <span className="flex items-center gap-1.5"><Calendar size={15} />{article.date}</span>
              <span className="flex items-center gap-1.5"><Clock size={15} />{article.readTime} de lecture</span>
            </div>
          </div>
        </section>

        {/* Image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="relative h-72 sm:h-96 rounded-3xl overflow-hidden">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <section className="pb-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              {content.map((block, i) => {
                if (block.startsWith("## ")) {
                  return (
                    <h2 key={i} className="font-display text-2xl font-bold text-[#0F172A] mt-10 mb-4">
                      {block.replace("## ", "")}
                    </h2>
                  );
                }
                if (block.startsWith("**") && block.includes(":**")) {
                  const [boldPart, rest] = block.split(":**");
                  return (
                    <p key={i} className="text-[#334155] text-base leading-relaxed mb-4">
                      <strong className="text-[#0F172A]">{boldPart.replace("**", "")} :</strong>
                      {rest}
                    </p>
                  );
                }
                return (
                  <p key={i} className="text-[#334155] text-base leading-relaxed mb-4 whitespace-pre-line">
                    {block}
                  </p>
                );
              })}
            </div>

            {/* CTA inline */}
            <div className="mt-14 rounded-3xl bg-gradient-to-br from-[#4F46E5] to-[#3730A3] p-8 text-center">
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                Prêt à développer votre activité en ligne ?
              </h3>
              <p className="text-[#CBD5E1] mb-6">
                Obtenez votre maquette gratuite en 24h. Aucun engagement.
              </p>
              <Link href="/contact" className="btn-amber text-base px-8 py-3.5">
                Demander ma maquette gratuite <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Articles liés */}
        <section className="py-16 bg-[#FAFAF9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-[#0F172A] mb-8">
              Articles similaires
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {related.map((a) => (
                <Link key={a.slug} href={`/blog/${a.slug}`} className="group card block overflow-hidden">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={a.image}
                      alt={a.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                    <span
                      className="absolute top-3 left-3 text-white text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: a.categoryColor }}
                    >
                      {a.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-bold text-[#0F172A] text-base group-hover:text-[#4F46E5] transition-colors leading-snug mb-2">
                      {a.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
                      <Clock size={12} /> {a.readTime}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
