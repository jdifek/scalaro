import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Products from "@/components/sections/Products";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Products — Scalaro",
  description: "Scalaro offers two white-label products: Affiliate Tracking Software and Content Platform. Built for fintech, SaaS, and content businesses.",
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <div className="py-16 bg-gradient-to-b from-slate-50 to-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full text-sm font-medium text-indigo-700 mb-4">
              Our Products
            </div>
            <h1 className="text-5xl font-bold text-slate-900 mb-4">Everything You Need to Scale</h1>
            <p className="text-xl text-slate-600">Two fully white-labeled products, battle-tested in production, ready to power your business growth.</p>
          </div>
        </div>
        <Products />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
