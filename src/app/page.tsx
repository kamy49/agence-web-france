import { redirect } from "next/navigation";

// Redirect root to /en (middleware handles this, but this is a fallback)
export default function RootPage() {
  redirect("/en");
}
