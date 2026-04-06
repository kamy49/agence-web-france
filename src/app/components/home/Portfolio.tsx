"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Restaurant Le Botaniste",
    category: "Site Vitrine",
    desc: "Site moderne avec réservation en ligne et menu interactif. +45% de réservations en 3 mois.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    tags: ["Next.js", "SEO", "Réservation"],
    color: "#10B981",
  },
  {
    title: "Plomberie Dupont & Fils",
    category: "Site Vitrine + SEO",
    desc: "Refonte complète et optimisation SEO locale. #1 sur Google pour « plombier Paris 15 ».",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
    tags: ["SEO Local", "Google Ads", "Mobile"],
    color: "#4F46E5",
  },
  {
    title: "Bijoux Maison Clara",
    category: "E-commerce",
    desc: "Boutique en ligne avec 200+ produits, paiement Stripe et gestion des stocks intégrée.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    tags: ["E-commerce", "Stripe", "Dashboard"],
    color: "#F97316",
  },
  {
    title: "Cabinet Médical Dr. Martin",
    category: "Site Vitrine",
    desc: "Site conforme RGPD avec prise de rendez-vous en ligne. Taux de conversion x3.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    tags: ["RGPD", "RDV en ligne", "Accessibilité"],
    color: "#F59E0B",
  },
  {
    title: "Boulangerie Paulette",
    category: "Site Vitrine",
    desc: "Site chaleureux avec commande click & collect. 80 commandes/semaine dès le 1er mois.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
    tags: ["Click & Collect", "SEO", "Instagram"],
    color: "#F97316",
  },
  {
    title: "Auto-École Liberté",
    category: "Site + Réservation",
    desc: "Calendrier de réservation d'heures de conduite en ligne. -70% d'appels téléphoniques.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    tags: ["Réservation", "Paiement", "CRM"],
    color: "#4F46E5",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-badge mb-4">Nos réalisations</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#0F172A] mt-4 mb-5">
            Des sites qui{" "}
            <span className="gradient-text">génèrent des résultats</span>
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            Chaque projet est unique. Voici quelques exemples de ce que nous avons
            créé pour nos clients PME en France.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-3 left-3">
                  <span
                    className="text-white text-xs font-bold px-3 py-1.5 rounded-full"
                    style={{ backgroundColor: p.color }}
                  >
                    {p.category}
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
                  {p.tags.map(tag => (
                    <span key={tag} className="text-xs bg-[#F1F5F9] text-[#334155] px-2.5 py-1 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link href="/portfolio" className="btn-outline text-[#4F46E5] border-[#4F46E5] text-base px-8 py-4">
            Voir tout le portfolio
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
