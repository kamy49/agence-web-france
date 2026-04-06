"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Monitor, ShoppingCart, Search, Wrench, Camera, TrendingUp, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Site Vitrine",
    desc: "Un site professionnel 5 pages pour présenter votre activité, générer des contacts et rassurer vos prospects.",
    price: "À partir de 990€",
    delay: 0,
    color: "#4F46E5",
    href: "/services#vitrine",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    desc: "Boutique en ligne complète avec paiement sécurisé, gestion des stocks et tableau de bord vendeur.",
    price: "À partir de 2 990€",
    delay: 0.1,
    color: "#F97316",
    href: "/services#ecommerce",
  },
  {
    icon: Search,
    title: "Référencement SEO",
    desc: "Optimisation Google pour apparaître en première page sur vos mots-clés cibles et attirer des clients.",
    price: "À partir de 490€/mois",
    delay: 0.2,
    color: "#10B981",
    href: "/services#seo",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    desc: "Hébergement, mises à jour, sauvegardes et modifications inclus. Votre site toujours à jour.",
    price: "À partir de 49€/mois",
    delay: 0.3,
    color: "#F59E0B",
    href: "/services#maintenance",
  },
  {
    icon: Camera,
    title: "Refonte de site",
    desc: "Votre site est dépassé ? On le modernise intégralement tout en conservant votre référencement.",
    price: "À partir de 790€",
    delay: 0.4,
    color: "#4F46E5",
    href: "/services#refonte",
  },
  {
    icon: TrendingUp,
    title: "Google Ads & Meta",
    desc: "Campagnes publicitaires ciblées pour générer des leads qualifiés immédiatement.",
    price: "À partir de 299€/mois",
    delay: 0.5,
    color: "#F97316",
    href: "/services#ads",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-badge mb-4">Nos expertises</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#0F172A] mt-4 mb-5">
            Des solutions web pour{" "}
            <span className="gradient-text">chaque besoin</span>
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto leading-relaxed">
            Du site vitrine à l&apos;e-commerce en passant par le SEO — nous couvrons
            tous vos besoins digitaux avec des solutions sur mesure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: s.delay, duration: 0.6 }}
              >
                <Link href={s.href} className="card p-7 block group h-full">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${s.color}12` }}
                  >
                    <Icon size={26} style={{ color: s.color }} />
                  </div>
                  <h3 className="font-display font-bold text-[#0F172A] text-xl mb-2">{s.title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed mb-4">{s.desc}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <span className="font-bold text-sm" style={{ color: s.color }}>{s.price}</span>
                    <ArrowRight size={16} className="text-[#94A3B8] group-hover:text-[#4F46E5] group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link href="/services" className="btn-primary text-base px-8 py-4">
            Voir tous nos services
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
