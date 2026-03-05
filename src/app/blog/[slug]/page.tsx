import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogPostContent from "./BlogPostContent";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <Header />
      <main className="pt-16">
        <BlogPostContent slug={params.slug} />
      </main>
      <Footer />
    </>
  );
}
