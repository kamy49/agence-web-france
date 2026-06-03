"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";
import ContactForm from "./ContactForm";

const infos = [
  { icon: Mail, label: "Email", value: "contact@webzynth.fr" },
  { icon: Phone, label: "Téléphone", value: "+33 6 XX XX XX XX" },
  { icon: MapPin, label: "Zone d'intervention", value: "Toute la France (100% distanciel)" },
  { icon: Clock, label: "Disponibilité", value: "Lun–Ven, 9h–19h" },
];

const guarantees = [
  "Réponse sous 24h garantie",
  "Devis gratuit et sans engagement",
  "Maquette offerte avant tout engagement",
  "Satisfait ou remboursé 30 jours",
];

export default function ContactContent() {
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
            <span className="section-badge mb-4">Parlons de votre projet</span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[#0F172A] mt-4 mb-6 leading-tight">
              Obtenez votre{" "}
              <span className="gradient-text">devis gratuit</span>
              <br />en 24 heures
            </h1>
            <p className="text-[#64748B] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Décrivez votre projet en 2 minutes. Nous vous répondons sous 24h
              avec une maquette personnalisée et un devis transparent.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>

            {/* Sidebar */}
            <motion.div
              className="lg:col-span-2 space-y-8"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Garanties */}
              <div className="rounded-3xl bg-gradient-to-br from-[#4F46E5] to-[#3730A3] p-8 text-white">
                <h2 className="font-display text-xl font-bold mb-5">Nos engagements</h2>
                <ul className="space-y-3">
                  {guarantees.map((g) => (
                    <li key={g} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 size={18} className="text-[#FCD34D] flex-shrink-0" />
                      {g}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact info */}
              <div className="card p-6">
                <h2 className="font-display text-lg font-bold text-[#0F172A] mb-5">
                  Nous contacter directement
                </h2>
                <ul className="space-y-4">
                  {infos.map((info) => (
                    <li key={info.label} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#4F46E5]/08 flex items-center justify-center flex-shrink-0">
                        <info.icon size={18} className="text-[#4F46E5]" />
                      </div>
                      <div>
                        <p className="text-xs text-[#94A3B8] font-medium uppercase tracking-wide">{info.label}</p>
                        <p className="text-[#334155] font-medium text-sm">{info.value}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social proof */}
              <div className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex -space-x-3">
                    {["#4F46E5", "#F97316", "#10B981", "#F59E0B"].map((c) => (
                      <div
                        key={c}
                        className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                        style={{ backgroundColor: c }}
                      >
                        ✓
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="font-bold text-[#0F172A] text-sm">150+ clients satisfaits</p>
                    <p className="text-[#64748B] text-xs">Note moyenne : 4.9/5</p>
                  </div>
                </div>
                <p className="text-[#64748B] text-sm italic leading-relaxed">
                  &ldquo;Réponse en 2h, maquette livrée le lendemain, site en ligne en 6 jours.
                  Exactement comme promis.&rdquo; — Sophie M., restauratrice
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
