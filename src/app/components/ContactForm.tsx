"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Nom trop court"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.enum(
    ["site-vitrine", "e-commerce", "seo", "refonte", "maintenance", "autre"],
    { error: () => "Sélectionnez un service" }
  ),
  budget: z.enum(
    ["moins-1000", "1000-2000", "2000-5000", "plus-5000", "a-definir"],
    { error: () => "Sélectionnez un budget" }
  ),
  message: z.string().min(20, "Décrivez votre projet en au moins 20 caractères"),
  rgpd: z.boolean().refine((v) => v === true, "Vous devez accepter la politique de confidentialité"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Form data:", data);
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="card p-10 text-center">
        <div className="w-20 h-20 rounded-full bg-[#10B981]/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} className="text-[#10B981]" />
        </div>
        <h2 className="font-display text-2xl font-bold text-[#0F172A] mb-3">
          Message envoyé !
        </h2>
        <p className="text-[#64748B] text-base leading-relaxed max-w-sm mx-auto">
          Merci pour votre message. Nous vous répondons sous 24h avec votre
          maquette gratuite et un devis personnalisé.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-[#64748B]">
          <span>✓ Confirmation par email envoyée</span>
          <span>✓ Réponse sous 24h garantie</span>
        </div>
      </div>
    );
  }

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-xl border text-[#334155] text-sm transition-all outline-none focus:ring-2 ${
      hasError
        ? "border-red-300 focus:ring-red-200 bg-red-50"
        : "border-gray-200 focus:ring-[#4F46E5]/20 focus:border-[#4F46E5] bg-white"
    }`;

  return (
    <div className="card p-8">
      <h2 className="font-display text-2xl font-bold text-[#0F172A] mb-2">
        Décrivez votre projet
      </h2>
      <p className="text-[#64748B] text-sm mb-7">
        Remplissez ce formulaire et recevez votre devis gratuit sous 24h.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        {/* Name + Email */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-[#334155] block mb-1.5">
              Prénom & Nom <span className="text-red-400">*</span>
            </label>
            <input
              {...register("name")}
              placeholder="Sophie Marchand"
              className={inputClass(!!errors.name)}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <label className="text-sm font-medium text-[#334155] block mb-1.5">
              Email <span className="text-red-400">*</span>
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="sophie@exemple.fr"
              className={inputClass(!!errors.email)}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
        </div>

        {/* Phone + Company */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-[#334155] block mb-1.5">Téléphone</label>
            <input
              {...register("phone")}
              type="tel"
              placeholder="+33 6 XX XX XX XX"
              className={inputClass(false)}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-[#334155] block mb-1.5">Entreprise</label>
            <input
              {...register("company")}
              placeholder="Votre société"
              className={inputClass(false)}
            />
          </div>
        </div>

        {/* Service */}
        <div>
          <label className="text-sm font-medium text-[#334155] block mb-1.5">
            Service souhaité <span className="text-red-400">*</span>
          </label>
          <select {...register("service")} className={inputClass(!!errors.service)}>
            <option value="">Sélectionnez un service...</option>
            <option value="site-vitrine">Site Vitrine Professionnel</option>
            <option value="e-commerce">Boutique E-commerce</option>
            <option value="seo">Référencement SEO</option>
            <option value="refonte">Refonte de Site Web</option>
            <option value="maintenance">Maintenance & Support</option>
            <option value="autre">Autre / Je ne sais pas encore</option>
          </select>
          {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
        </div>

        {/* Budget */}
        <div>
          <label className="text-sm font-medium text-[#334155] block mb-1.5">
            Budget estimé <span className="text-red-400">*</span>
          </label>
          <select {...register("budget")} className={inputClass(!!errors.budget)}>
            <option value="">Sélectionnez votre budget...</option>
            <option value="moins-1000">Moins de 1 000€</option>
            <option value="1000-2000">1 000€ – 2 000€</option>
            <option value="2000-5000">2 000€ – 5 000€</option>
            <option value="plus-5000">Plus de 5 000€</option>
            <option value="a-definir">À définir ensemble</option>
          </select>
          {errors.budget && <p className="text-red-500 text-xs mt-1">{errors.budget.message}</p>}
        </div>

        {/* Message */}
        <div>
          <label className="text-sm font-medium text-[#334155] block mb-1.5">
            Décrivez votre projet <span className="text-red-400">*</span>
          </label>
          <textarea
            {...register("message")}
            rows={4}
            placeholder="Je suis restaurateur à Paris, j'ai besoin d'un site avec réservation en ligne et menu interactif..."
            className={`${inputClass(!!errors.message)} resize-none`}
          />
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
        </div>

        {/* RGPD */}
        <div>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              {...register("rgpd")}
              type="checkbox"
              className="mt-0.5 w-4 h-4 rounded accent-[#4F46E5]"
            />
            <span className="text-[#64748B] text-xs leading-relaxed">
              J&apos;accepte la{" "}
              <a href="/politique-confidentialite" className="text-[#4F46E5] hover:underline" target="_blank">
                politique de confidentialité
              </a>{" "}
              et consens au traitement de mes données pour répondre à ma demande.{" "}
              <span className="text-red-400">*</span>
            </span>
          </label>
          {errors.rgpd && <p className="text-red-500 text-xs mt-1">{errors.rgpd.message}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-amber w-full text-base py-4 justify-center disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Envoi en cours...
            </>
          ) : (
            <>
              <Send size={18} />
              Envoyer ma demande de devis gratuit
            </>
          )}
        </button>

        <p className="text-[#94A3B8] text-xs text-center">
          Aucun engagement. Maquette offerte. Réponse sous 24h.
        </p>
      </form>
    </div>
  );
}
