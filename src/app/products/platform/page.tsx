import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/sections/CTA";
import Link from "next/link";
import { CheckCircle, ArrowRight, FileText, Search, Mail, BarChart2, Globe, Users, Zap, Layout } from "lucide-react";

export const metadata: Metadata = {
  title: "Content Platform — Scalaro",
  description: "White-label content platform for fintech, SaaS, and media companies. SEO-optimized article system, newsletter tools, and monetization built in.",
};

const features = [
  { icon: Layout, title: "Branded Content Hub", description: "Fully customizable design system. Your logo, colors, typography. Clients see your brand, not ours." },
  { icon: Search, title: "Advanced SEO Engine", description: "Technical SEO built-in: structured data, sitemap, meta optimization, Core Web Vitals optimized." },
  { icon: Mail, title: "Newsletter & Email Capture", description: "Build your email list with pop-ups, inline forms, and landing pages. Native newsletter sending included." },
  { icon: BarChart2, title: "Content Analytics", description: "Reader engagement, scroll depth, time on page, conversion funnels. Know what content drives revenue." },
  { icon: Globe, title: "Custom Domain & CDN", description: "Point your domain, global CDN delivery, and SSL included. Load times under 1 second worldwide." },
  { icon: Users, title: "Multi-Author Workflow", description: "Editorial workflows with roles and permissions. Writers, editors, and admins with granular access control." },
  { icon: Zap, title: "Monetization Tools", description: "Native ad slots, affiliate links management, paid content paywalls, and sponsored content tracking." },
  { icon: FileText, title: "Content Distribution API", description: "Syndicate content to other platforms. Push articles to social, email, and partner sites automatically." },
];

export default function PlatformPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 bg-gradient-to-br from-emerald-600 via-teal-700 to-emerald-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-medium mb-6">
                 Product 02
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">Content Platform</h1>
              <p className="text-xl text-emerald-200 mb-8">A complete content management and publishing platform that helps businesses own their audience and monetize content at scale. Powers Finoglyad.com since 2023.</p>
              <div className="flex flex-wrap gap-4 mb-10">
                {["White-label", "SEO-optimized", "Newsletter", "Monetization"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-lg text-sm">{tag}</span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href="mailto:hello@scalaro.io" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-600 font-bold rounded-xl hover:bg-emerald-50 transition-all text-sm">
                  Book Demo <ArrowRight className="w-4 h-4" />
                </a>
                <Link href="/pricing" className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all text-sm">
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Proof bar */}
        <section className="py-8 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              <span className="text-slate-400">Powering:</span>
              <a href="https://finoglyad.com" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-emerald-400 transition-colors">
                finoglyad.com ↗
              </a>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">50K+ monthly readers</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">300% traffic growth</span>
              <span className="text-slate-600">|</span>
              <span className="text-emerald-400">Running since 2023</span>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">A Complete Content Operations Platform</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">Everything a content team needs to create, publish, grow, and monetize their audience.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((f) => (
                <div key={f.title} className="p-6 rounded-2xl border border-slate-100 hover:border-emerald-200 hover:shadow-lg transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <f.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social proof */}
        <section className="py-24 bg-emerald-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-5xl mb-6">"</div>
            <blockquote className="text-2xl font-medium text-slate-800 mb-8">
              Scalaro's content platform allowed us to scale from a small blog to Ukraine's leading financial portal. The SEO tools and analytics gave us insights we couldn't get anywhere else.
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold">F</div>
              <div className="text-left">
                <div className="font-semibold text-slate-900">Finoglyad Team</div>
                <div className="text-sm text-slate-500">
                  <a href="https://finoglyad.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600">finoglyad.com</a>
                  {" "}· Ukraine's #1 Finance Portal
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
