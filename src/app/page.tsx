import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhoFor from "@/components/sections/WhoFor";
import Products from "@/components/sections/Products";
import SocialProof from "@/components/sections/SocialProof";
import WhyScalaro from "@/components/sections/WhyScalaro";
import HowItWorks from "@/components/sections/HowItWorks";
import CaseStudy from "@/components/sections/CaseStudy";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Scalaro — White-Label Affiliate Tracking & Content Platform",
  description:
    "White-label software solutions for MFIs, SaaS founders, and digital agencies. Affiliate tracking platform and content publishing system. Launch in 72 hours.",
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhoFor />
        <Products />
        <SocialProof />
        <WhyScalaro />
        <HowItWorks />
        <CaseStudy />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
