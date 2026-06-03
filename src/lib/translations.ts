import { Language } from "@/config/i18n";

const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.about": "À Propos",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.cta": "Devis gratuit",

    // Hero
    "hero.badge": "Agence web disponible — Devis sous 24h",
    "hero.title": "Votre site web professionnel en 7 jours.",
    "hero.highlight": "professionnel",
    "hero.description": "Nous créons des sites web modernes, rapides et optimisés Google pour les PME et artisans des pays francophones. À partir de 990€.",
    "hero.features": "✓ Sites livrés en 7 jours | ✓ SEO inclus | ✓ Support 6 mois",
    "hero.cta": "Obtenir mon devis gratuit",
    "hero.secondary": "Nous contacter",

    // About Section
    "about.story": "Notre histoire",
    "about.title": "L'agence web qui comprend les PME",
    "about.description": "WebZynth est née d'un constat simple : les agences web traditionnelles sont trop chères, trop lentes et ne parlent pas le même langage que les artisans et commerçants des pays francophones.",
    "about.why": "Pourquoi nous avons créé WebZynth",
    "about.story1": "En 2022, Karim aidait son père à trouver une agence web pour son restaurant en Belgique. Après des mois de démarches, des devis à 8 000€ et des délais de 3 mois, il a décidé de créer lui-même le site en 5 jours avec les meilleures technologies disponibles.",
    "about.story2": "Le résultat était meilleur que ce que proposaient les agences, pour un dixième du prix. C'est là qu'est né WebZynth : l'agence web qui traite les PME comme des clients VIP, pas comme une ligne dans un tableau Excel.",
    "about.today": "Aujourd'hui, notre équipe de 4 passionnés a livré plus de 150 sites pour des restaurants, plombiers, médecins, créatrices de bijoux, auto-écoles... En Suisse, Belgique, Canada, France et Luxembourg.",
    "about.team": "Équipe WebZynth",

    // Contact
    "contact.email": "Email",
    "contact.zone": "Zone d'intervention",
    "contact.zones": "Belgique, Canada, France, Luxembourg, Suisse (100% distanciel)",
    "contact.availability": "Disponibilité",
    "contact.hours": "Lun–Ven, 9h–19h",

    // Footer
    "footer.description": "Agence web spécialisée dans la création de sites web professionnels pour PME et artisans en France. Des sites qui convertissent.",
    "footer.services": "Services",
    "footer.legal": "Légal",
    "footer.company": "Entreprise",
    "footer.resources": "Ressources",

    // Language
    "lang.select": "Sélectionner la langue",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.about": "About",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.cta": "Free Quote",

    // Hero
    "hero.badge": "Web agency available — Quote in 24h",
    "hero.title": "Your professional website in 7 days.",
    "hero.highlight": "professional",
    "hero.description": "We create modern, fast websites optimized for Google for SMEs and artisans in francophone countries. From €990.",
    "hero.features": "✓ Websites delivered in 7 days | ✓ SEO included | ✓ 6-month support",
    "hero.cta": "Get my free quote",
    "hero.secondary": "Contact us",

    // About Section
    "about.story": "Our Story",
    "about.title": "The web agency that understands SMEs",
    "about.description": "WebZynth was born from a simple observation: traditional web agencies are too expensive, too slow, and don't speak the same language as artisans and merchants in francophone countries.",
    "about.why": "Why we created WebZynth",
    "about.story1": "In 2022, Karim was helping his father find a web agency for his restaurant in Belgium. After months of searching, quotes of €8,000 and 3-month delays, he decided to build the website himself in 5 days using the best available technologies.",
    "about.story2": "The result was better than what agencies were offering, for a tenth of the price. That's when WebZynth was born: the web agency that treats SMEs like VIP clients, not as a line in a spreadsheet.",
    "about.today": "Today, our team of 4 passionate people has delivered over 150 websites for restaurants, plumbers, doctors, jewelry creators, driving schools... Across Switzerland, Belgium, Canada, France and Luxembourg.",
    "about.team": "WebZynth Team",

    // Contact
    "contact.email": "Email",
    "contact.zone": "Service Area",
    "contact.zones": "Belgium, Canada, France, Luxembourg, Switzerland (100% remote)",
    "contact.availability": "Availability",
    "contact.hours": "Mon–Fri, 9am–7pm",

    // Footer
    "footer.description": "Web agency specialized in creating professional websites for SMEs and artisans. Websites that convert.",
    "footer.services": "Services",
    "footer.legal": "Legal",
    "footer.company": "Company",
    "footer.resources": "Resources",

    // Language
    "lang.select": "Select language",
  },
};

export function t(key: string, lang: Language): string {
  return translations[lang]?.[key] || key;
}

export function getTranslations(lang: Language) {
  return translations[lang] || translations.fr;
}
