"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Globe, ShoppingCart, Search, Wrench, RefreshCw, Megaphone,
  CheckCircle2, ArrowRight, Clock, Shield, TrendingUp, Users,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    color: "#4F46E5",
    bg: "rgba(79,70,229,.08)",
    title: "Site Vitrine Professionnel",
    subtitle: "Présentez votre activité avec élégance",
    desc: "Un site vitrine sur mesure, rapide, mobile-first et optimisé SEO pour attirer plus de clients. Design premium adapté à votre secteur d'activité.",
    features: [
      "Design personnalisé à votre charte graphique",
      "5 à 15 pages selon vos besoins",
      "Responsive mobile et tablette",
      "Formulaire de contact et carte Google Maps",
      "Optimisation SEO on-page complète",
      "Intégration Google Analytics & Search Console",
      "Hébergement premium inclus (1 an)",
      "Formation pour gérer votre contenu",
    ],
    price: "À partir de 990€ HT",
    delay: 0.1,
  },
  {
    icon: ShoppingCart,
    color: "#F97316",
    bg: "rgba(249,115,22,.08)",
    title: "Boutique E-commerce",
    subtitle: "Vendez en ligne 24h/24, 7j/7",
    desc: "Boutique en ligne complète avec paiement sécurisé Stripe, gestion des stocks et tableau de bord intuitif. Idéal pour artisans, créateurs et commerçants.",
    features: [
      "Catalogue produits illimité",
      "Paiement sécurisé Stripe & PayPal",
      "Gestion des commandes et stocks",
      "Emails transactionnels automatisés",
      "Codes promo et réductions",
      "Frais de livraison paramétrables",
      "Dashboard analytics des ventes",
      "Formation complète offerte",
    ],
    price: "À partir de 1 990€ HT",
    delay: 0.2,
  },
  {
    icon: Search,
    color: "#10B981",
    bg: "rgba(16,185,129,.08)",
    title: "Référencement SEO",
    subtitle: "Apparaissez en 1ère page Google",
    desc: "Stratégie SEO complète pour dominer les résultats de recherche locaux et nationaux. Audit, optimisation technique, contenu et netlinking.",
    features: [
      "Audit SEO complet de votre site",
      "Recherche de mots-clés stratégiques",
      "Optimisation technique (Core Web Vitals)",
      "Création de contenu SEO optimisé",
      "Netlinking et autorité de domaine",
      "Fiche Google My Business optimisée",
      "Rapports mensuels de performance",
      "Suivi de positionnement en temps réel",
    ],
    price: "À partir de 490€/mois HT",
    delay: 0.3,
  },
  {
    icon: Wrench,
    color: "#F59E0B",
    bg: "rgba(245,158,11,.08)",
    title: "Maintenance & Support",
    subtitle: "Votre site toujours à jour et sécurisé",
    desc: "Service de maintenance mensuel pour garder votre site sécurisé, performant et à jour. Modifications illimitées incluses selon le plan choisi.",
    features: [
      "Mises à jour WordPress/CMS régulières",
      "Sauvegardes automatiques quotidiennes",
      "Monitoring uptime 24h/24",
      "Certificat SSL renouvelé automatiquement",
      "Modifications de contenu incluses",
      "Support par email et téléphone",
      "Rapport mensuel de performances",
      "Intervention sous 4h en cas d'urgence",
    ],
    price: "À partir de 49€/mois HT",
    delay: 0.4,
  },
  {
    icon: RefreshCw,
    color: "#8B5CF6",
    bg: "rgba(139,92,246,.08)",
    title: "Refonte de Site Web",
    subtitle: "Modernisez votre présence en ligne",
    desc: "Votre site existant est vieillissant ou peu performant ? Nous le repensons de A à Z pour en faire un outil de conversion efficace.",
    features: [
      "Audit complet de l'existant",
      "Nouveau design moderne et impactant",
      "Migration de contenu sans perte SEO",
      "Amélioration de la vitesse de chargement",
      "Optimisation du taux de conversion",
      "Mise aux normes accessibilité RGAA",
      "Redirection 301 préservée",
      "Tests multi-navigateurs et appareils",
    ],
    price: "À partir de 790€ HT",
    delay: 0.5,
  },
  {
    icon: Megaphone,
    color: "#EC4899",
    bg: "rgba(236,72,153,.08)",
    title: "Campagnes Google Ads",
    subtitle: "Attirez des clients dès le 1er jour",
    desc: "Création et gestion de campagnes Google Ads ciblées pour générer des leads qualifiés rapidement. ROI mesurable et transparent.",
    features: [
      "Création et structure des campagnes",
      "Recherche de mots-clés et audiences",
      "Rédaction des annonces optimisées",
      "Landing page dédiée haute conversion",
      "Suivi des conversions configuré",
      "Budget optimisé en temps réel",
      "Rapports de performance hebdomadaires",
      "Remarketing et audiences similaires",
    ],
    price: "À partir de 290€/mois HT",
    delay: 0.6,
  },
];

const garanties = [
  { icon: Clock, label: "Livraison en 7 jours", sub: "Délai garanti contractuellement" },
  { icon: Shield, label: "Satisfait ou remboursé", sub: "Garantie 30 jours sans conditions" },
  { icon: TrendingUp, label: "SEO optimisé", sub: "Dès la mise en ligne de votre site" },
  { icon: Users, label: "Support dédié", sub: "Un interlocuteur unique pour vous" },
];

export default function ServicesDetail() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#F8F7FF] via-[#FAFAF9] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge mb-4">Ce que nous faisons</span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[#0F172A] mt-4 mb-6 leading-tight">
              Des services web{" "}
              <span className="gradient-text">sur mesure</span>
              <br />pour votre PME
            </h1>
            <p className="text-[#64748B] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Création, refonte, SEO ou e-commerce — nous avons la solution adaptée
              à votre activité et votre budget. Tout est transparent, rien de caché.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Garanties */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {garanties.map((g, i) => (
              <motion.div
                key={g.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center gap-2"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#4F46E5]/08 flex items-center justify-center">
                  <g.icon size={22} className="text-[#4F46E5]" />
                </div>
                <p className="font-bold text-[#0F172A] text-sm">{g.label}</p>
                <p className="text-[#64748B] text-xs">{g.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#FAFAF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: s.delay }}
                className={`card p-0 overflow-hidden flex flex-col lg:flex-row ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Color panel */}
                <div
                  className="lg:w-72 flex-shrink-0 flex flex-col items-center justify-center p-10 gap-5"
                  style={{ background: s.bg }}
                >
                  <div
                    className="w-20 h-20 rounded-3xl flex items-center justify-center"
                    style={{ backgroundColor: s.color }}
                  >
                    <s.icon size={36} className="text-white" />
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-[#0F172A] text-xl">{s.title}</p>
                    <p className="text-[#64748B] text-sm mt-1">{s.subtitle}</p>
                  </div>
                  <div
                    className="text-center px-4 py-2 rounded-full text-sm font-bold text-white"
                    style={{ backgroundColor: s.color }}
                  >
                    {s.price}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-8 lg:p-10">
                  <p className="text-[#334155] text-base leading-relaxed mb-7">{s.desc}</p>
                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5 mb-8">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-[#334155]">
                        <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: s.color }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="btn-primary text-sm px-6 py-3"
                    style={{ background: `linear-gradient(135deg, ${s.color}, ${s.color}dd)` }}
                  >
                    Demander un devis gratuit <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
