import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/mentions-legales", "/politique-confidentialite", "/cgv"],
      },
    ],
    sitemap: "https://webzynth.fr/sitemap.xml",
    host: "https://webzynth.fr",
  };
}
