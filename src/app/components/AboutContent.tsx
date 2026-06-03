"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Target, Zap, Users, Award, TrendingUp, Shield } from "lucide-react";
import CountUp from "./CountUp";

const values = [
  {
    icon: Heart,
    color: "#F97316",
    title: "Passion du résultat",
    desc: "On ne livre pas un site — on livre un outil de croissance. Chaque projet est traité comme si c'était notre propre business.",
  },
  {
    icon: Target,
    color: "#4F46E5",
    title: "Transparence totale",
    desc: "Prix fixes, délais respectés, communication claire. Pas de mauvaises surprises, pas de jargon inutile.",
  },
  {
    icon: Zap,
    color: "#F59E0B",
    title: "Réactivité extrême",
    desc: "7 jours de livraison, support sous 4h. Dans notre secteur, la rapidité fait la différence.",
  },
  {
    icon: Users,
    color: "#10B981",
    title: "Centré sur le client",
    desc: "Nous travaillons avec des PME comme la vôtre depuis des années. Nous connaissons vos contraintes et votre réalité.",
  },
];

const team = [
  {
    name: "Karim M.",
    role: "Fondateur & Développeur Full-Stack",
    avatar: "KM",
    color: "#4F46E5",
    bio: "8 ans d'expérience en développement web. Spécialiste Next.js et performance. A travaillé pour des startups et grands groupes avant de lancer WebZynth.",
  },
  {
    name: "Laura B.",
    role: "Directrice Artistique & UX",
    avatar: "LB",
    color: "#F97316",
    bio: "Designer passionnée par l'expérience utilisateur. Elle transforme vos idées en interfaces qui convertissent et qui plaisent à vos clients.",
  },
  {
    name: "Thomas V.",
    role: "Expert SEO & Growth",
    avatar: "TV",
    color: "#10B981",
    bio: "Consultant SEO depuis 6 ans. A aidé plus de 80 PME à atteindre la 1ère page Google. Partenaire Google certifié.",
  },
  {
    name: "Amira S.",
    role: "Chargée de projet & Support",
    avatar: "AS",
    color: "#F59E0B",
    bio: "Votre interlocutrice dédiée de la prise de brief à la livraison. Elle s'assure que chaque projet se déroule sans friction.",
  },
];

const stats = [
  { end: 150, suffix: "+", label: "Sites livrés" },
  { end: 98, suffix: "%", label: "Clients satisfaits" },
  { end: 7, suffix: "j", label: "Délai moyen" },
  { end: 4, suffix: "ans", label: "D'expérience" },
];

export default function AboutContent() {
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
            <span className="section-badge mb-4">Notre histoire</span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[#0F172A] mt-4 mb-6 leading-tight">
              L'agence web qui{" "}
              <span className="gradient-text">comprend les PME</span>
            </h1>
            <p className="text-[#64748B] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              WebZynth est née d'un constat simple : les agences web traditionnelles
              sont trop chères, trop lentes et ne parlent pas le même langage que les artisans
              et commerçants des pays francophones.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0F172A] mb-6">
                Pourquoi nous avons créé{" "}
                <span className="gradient-text">WebZynth</span>
              </h2>
              <div className="space-y-4 text-[#334155] text-base leading-relaxed">
                <p>
                  En 2022, Karim aidait son père à trouver une agence web pour son restaurant en Belgique.
                  Après des mois de démarches, des devis à 8 000€ et des délais de 3 mois, il a
                  décidé de créer lui-même le site en 5 jours avec les meilleures technologies disponibles.
                </p>
                <p>
                  Le résultat était meilleur que ce que proposaient les agences, pour un dixième du prix.
                  C'est là qu'est né WebZynth : <strong>l'agence web qui traite les PME comme
                  des clients VIP</strong>, pas comme une ligne dans un tableau Excel.
                </p>
                <p>
                  Aujourd'hui, notre équipe de 4 passionnés a livré plus de 150 sites pour des
                  restaurants, plombiers, médecins, créatrices de bijoux, auto-écoles... En Suisse, Belgique, Canada, France et Luxembourg.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden h-96">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                  alt="Équipe WebZynth"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 to-transparent" />
              </div>
              {/* Stats overlay */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-warm-lg border border-gray-100">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="font-display font-bold text-2xl text-[#4F46E5]">
                        <CountUp to={s.end} />{s.suffix}
                      </div>
                      <div className="text-[#64748B] text-xs">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#FAFAF9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-badge mb-4">Nos valeurs</span>
            <h2 className="font-display text-4xl font-bold text-[#0F172A] mt-4 mb-4">
              Ce qui nous{" "}
              <span className="gradient-text">distingue</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-6"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${v.color}15` }}
                >
                  <v.icon size={22} style={{ color: v.color }} />
                </div>
                <h3 className="font-display font-bold text-[#0F172A] text-lg mb-2">{v.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-badge mb-4">L'équipe</span>
            <h2 className="font-display text-4xl font-bold text-[#0F172A] mt-4 mb-4">
              Des experts{" "}
              <span className="gradient-text">passionnés</span>
            </h2>
            <p className="text-[#64748B] text-lg max-w-xl mx-auto">
              Une équipe soudée, réactive et 100% dédiée à votre succès en ligne.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="card p-6 text-center"
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4"
                  style={{ backgroundColor: member.color }}
                >
                  {member.avatar}
                </div>
                <h3 className="font-display font-bold text-[#0F172A] text-lg">{member.name}</h3>
                <p className="text-sm font-medium mb-3" style={{ color: member.color }}>{member.role}</p>
                <p className="text-[#64748B] text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-[#0F172A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold text-white mb-6">
              Reconnus & certifiés
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {[
                { icon: Award, label: "Google Partner" },
                { icon: TrendingUp, label: "Next.js Expert" },
                { icon: Shield, label: "RGPD Compliant" },
                { icon: Users, label: "+150 clients" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-3 text-white/80">
                  <c.icon size={20} className="text-[#F59E0B]" />
                  <span className="font-medium">{c.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
