import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Éviter les fichiers statiques et API
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/public") ||
    /\.(png|jpg|jpeg|gif|ico|svg|webp|css|js)$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Si c'est la racine, rediriger vers /en (Option A)
  if (pathname === "/") {
    // Optionnel: détecter la langue préférée de l'utilisateur
    const acceptLanguage = request.headers.get("accept-language") || "";
    const lang = acceptLanguage.toLowerCase().includes("fr") ? "fr" : "en";
    
    const url = request.nextUrl.clone();
    url.pathname = `/${lang}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
