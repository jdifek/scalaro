import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogPostContent from "./BlogPostContent";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  return (
    <>
      <Header />
      <main className="pt-16">
        <BlogPostContent slug={slug} />
      </main>
      <Footer />
    </>
  );
}