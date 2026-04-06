"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

const categories = ["Tous", "Site Vitrine", "E-commerce", "SEO", "Refonte"];

const projects = [
  {
    title: "Restaurant Le Botaniste",
    category: "Site Vitrine",
    desc: "Site moderne avec réservation en ligne et menu interactif. +45% de réservations en 3 mois.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    tags: ["Next.js", "SEO", "Réservation"],
    color: "#10B981",
    result: "+45% de réservations",
  },
  {
    title: "Plomberie Dupont & Fils",
    category: "SEO",
    desc: "Refonte complète et optimisation SEO locale. #1 sur Google pour « plombier Paris 15 ».",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
    tags: ["SEO Local", "Google Ads", "Mobile"],
    color: "#4F46E5",
    result: "#1 sur Google",
  },
  {
    title: "Bijoux Maison Clara",
    category: "E-commerce",
    desc: "Boutique en ligne avec 200+ produits, paiement Stripe et gestion des stocks intégrée.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    tags: ["E-commerce", "Stripe", "Dashboard"],
    color: "#F97316",
    result: "x4 le coût en 2 mois",
  },
  {
    title: "Cabinet Médical Dr. Martin",
    category: "Site Vitrine",
    desc: "Site conforme RGPD avec prise de rendez-vous en ligne. Taux de conversion x3.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    tags: ["RGPD", "RDV en ligne", "Accessibilité"],
    color: "#F59E0B",
    result: "x3 taux de conversion",
  },
  {
    title: "Boulangerie Paulette",
    category: "Site Vitrine",
    desc: "Site chaleureux avec commande click & collect. 80 commandes/semaine dès le 1er mois.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
    tags: ["Click & Collect", "SEO", "Instagram"],
    color: "#F97316",
    result: "80 commandes/semaine",
  },
  {
    title: "Auto-École Liberté",
    category: "Site Vitrine",
    desc: "Calendrier de réservation d'heures de conduite en ligne. -70% d'appels téléphoniques.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    tags: ["Réservation", "Paiement", "CRM"],
    color: "#4F46E5",
    result: "-70% d'appels",
  },
  {
    title: "Comptable Expertise Plus",
    category: "Refonte",
    desc: "Refonte complète d'un site vieillissant. +60% de leads entrants en 4 mois.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    tags: ["Refonte", "Lead gen", "SEO"],
    color: "#8B5CF6",
    result: "+60% de leads",
  },
  {
    title: "Coiffure Studio Nadia",
    category: "Site Vitrine",
    desc: "Site avec réservation en ligne Planity, galerie photos et avis Google. Complet en 6 jours.",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80",
    tags: ["Réservation", "Galerie", "Instagram"],
    color: "#EC4899",
    result: "Livré en 6 jours",
  },
  {
    title: "Mode & Tendance Paris",
    category: "E-commerce",
    desc: "Boutique fashion avec 500+ références, retours simplifiés et espace client personnalisé.",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80",
    tags: ["E-commerce", "Fashion", "Espace client"],
    color: "#F97316",
    result: "+120% de ventes en ligne",
  },
];

export default function PortfolioFull() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filtered = activeFilter === "Tous"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-14 bg-gradient-to-br from-[#F8F7FF] via-[#FAFAF9] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge mb-4">Nos réalisations</span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[#0F172A] mt-4 mb-6 leading-tight">
              Des sites qui{" "}
              <span className="gradient-text">parlent d'eux-mêmes</span>
            </h1>
            <p className="text-[#64748B] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              150+ projets livrés pour des PME et artisans partout en France.
              Chaque site raconte une histoire de croissance.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filtres */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeFilter === cat
                    ? "bg-[#4F46E5] text-white shadow-warm"
                    : "bg-[#F1F5F9] text-[#334155] hover:bg-[#4F46E5]/08 hover:text-[#4F46E5]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grille */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="card overflow-hidden group cursor-pointer"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span
                      className="absolute top-3 left-3 text-white text-xs font-bold px-3 py-1.5 rounded-full"
                      style={{ backgroundColor: p.color }}
                    >
                      {p.category}
                    </span>
                    <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white font-bold text-sm bg-white/20 backdrop-blur px-3 py-1 rounded-full">
                        ✓ {p.result}
                      </span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-white/20 backdrop-blur rounded-full p-3">
                        <ExternalLink size={20} className="text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-bold text-[#0F172A] text-lg mb-2">{p.title}</h3>
                    <p className="text-[#64748B] text-sm leading-relaxed mb-3">{p.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-[#F1F5F9] text-[#334155] px-2.5 py-1 rounded-full font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
