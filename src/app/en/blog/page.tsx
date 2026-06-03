import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import BlogList from "@/app/components/BlogList";

export const metadata = {
  title: "WebZynth Blog",
  description: "Read our articles on website creation, SEO, and digital marketing.",
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
