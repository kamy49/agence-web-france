export const languages = {
  fr: {
    code: "fr",
    name: "Français",
    flag: "🇫🇷",
    default: false,
  },
  en: {
    code: "en",
    name: "English",
    flag: "🇬🇧",
    default: true,
  },
};

export const defaultLanguage = "en";
export const supportedLanguages = Object.keys(languages);

export type Language = keyof typeof languages;

export function isValidLanguage(lang: unknown): lang is Language {
  return typeof lang === "string" && lang in languages;
}

export function getLanguageFromPath(pathname: string): Language | null {
  const segments = pathname.split("/").filter(Boolean);
  const potentialLang = segments[0];
  return isValidLanguage(potentialLang) ? potentialLang : null;
}

export function getPathWithoutLang(pathname: string): string {
  const lang = getLanguageFromPath(pathname);
  if (!lang) return pathname;
  return pathname.slice(`/${lang}`.length) || "/";
}
