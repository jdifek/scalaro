import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/sections/CTA";
import PricingContent from "./PricingContent";

export const metadata: Metadata = {
  title: "Pricing — Scalaro",
  description: "Simple, transparent pricing for Scalaro's affiliate tracking software and content platform. No hidden fees. Plans starting from $149/month.",
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <PricingContent />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
