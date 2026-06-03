import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import BlogList from "@/app/components/BlogList";

export const metadata = {
  title: "Blog WebZynth",
  description: "Consultez nos articles sur la création de sites web, le SEO et le marketing digital.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <BlogList />
      </main>
      <Footer />
    </>
  );
}
