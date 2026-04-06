"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "990",
    desc: "Idéal pour se lancer avec un site professionnel simple et efficace.",
    features: [
      "Site 5 pages responsive",
      "Design sur mesure",
      "Formulaire de contact",
      "SEO de base",
      "Google My Business",
      "1 mois de support",
    ],
    cta: "Commencer",
    highlighted: false,
    color: "#4F46E5",
  },
  {
    name: "Business",
    price: "1 990",
    desc: "Notre offre la plus populaire — tout pour se démarquer et convertir.",
    features: [
      "Tout Starter +",
      "Blog avec 5 articles SEO",
      "SEO avancé + rapport",
      "Animations Framer Motion",
      "Intégration réseaux sociaux",
      "Google Analytics",
      "3 mois de support",
      "Formation client incluse",
    ],
    cta: "Choisir Business",
    highlighted: true,
    color: "#F97316",
    badge: "⭐ Populaire",
  },
  {
    name: "Premium",
    price: "Sur devis",
    desc: "Pour les projets complexes : e-commerce, espace client, fonctionnalités avancées.",
    features: [
      "Tout Business +",
      "E-commerce ou espace client",
      "Paiement en ligne (Stripe)",
      "Stratégie SEO 6 mois",
      "Campagne Google Ads",
      "Account manager dédié",
      "6 mois de support",
      "Garantie de résultats",
    ],
    cta: "Nous contacter",
    highlighted: false,
    color: "#10B981",
  },
];

export default function Pricing() {
  return (
    <section className="py-24 bg-[#FAFAF9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-badge mb-4">Tarifs transparents</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#0F172A] mt-4 mb-5">
            Des prix{" "}
            <span className="gradient-text">clairs et honnêtes</span>
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            Pas de mauvaises surprises. Tout est inclus dans le prix affiché.
            Paiement en 2 fois : 50% à la commande, 50% à la livraison.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative rounded-3xl p-8 ${
                plan.highlighted
                  ? "bg-[#0F172A] text-white scale-105 shadow-[0_20px_60px_rgba(79,70,229,0.25)]"
                  : "bg-white shadow-warm border border-gray-100"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#F97316] to-[#F59E0B] text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                  {plan.badge}
                </div>
              )}
              <h3 className={`font-display text-2xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-[#0F172A]"}`}>
                {plan.name}
              </h3>
              <div className="mb-2">
                <span className="text-4xl font-display font-bold" style={{ color: plan.color }}>
                  {plan.price === "Sur devis" ? "" : `${plan.price}€`}
                </span>
                {plan.price === "Sur devis" ? (
                  <span className="text-2xl font-bold" style={{ color: plan.color }}>Sur devis</span>
                ) : (
                  <span className={`text-sm ml-1 ${plan.highlighted ? "text-[#94A3B8]" : "text-[#64748B]"}`}>HT</span>
                )}
              </div>
              <p className={`text-sm mb-6 leading-relaxed ${plan.highlighted ? "text-[#94A3B8]" : "text-[#64748B]"}`}>
                {plan.desc}
              </p>
              <ul className="space-y-3 mb-8">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 size={17} style={{ color: plan.color }} className="flex-shrink-0 mt-0.5" />
                    <span className={plan.highlighted ? "text-[#E2E8F0]" : "text-[#334155]"}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-full font-semibold text-sm transition-all ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-[#F97316] to-[#F59E0B] text-white hover:opacity-90 shadow-amber"
                    : "border-2 hover:text-white transition-colors"
                }`}
                style={!plan.highlighted ? {
                  borderColor: plan.color,
                  color: plan.color,
                } : {}}
                onMouseEnter={e => {
                  if (!plan.highlighted) {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = plan.color;
                    (e.currentTarget as HTMLAnchorElement).style.color = "white";
                  }
                }}
                onMouseLeave={e => {
                  if (!plan.highlighted) {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                    (e.currentTarget as HTMLAnchorElement).style.color = plan.color;
                  }
                }}
              >
                {plan.cta} <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-[#94A3B8] text-sm mt-8">
          Tous les prix sont HT. Maintenance mensuelle disponible à partir de 49€/mois.
          <Link href="/cgv" className="text-[#4F46E5] ml-1 hover:underline">Voir nos CGV</Link>
        </p>
      </div>
    </section>
  );
}
