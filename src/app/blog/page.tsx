import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogList from "./BlogList";

export const metadata: Metadata = {
  title: "Blog — Scalaro",
  description: "Insights on affiliate marketing, content strategy, and growth tactics for MFIs, SaaS, and digital agencies.",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full text-sm font-medium text-indigo-700 mb-4">
              Blog
            </div>
            <h1 className="text-5xl font-bold text-slate-900 mb-4">Insights & Resources</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Deep dives into affiliate marketing, content strategy, and growth tactics for ambitious businesses.</p>
          </div>
        </section>
        <BlogList />
      </main>
      <Footer />
    </>
  );
}
