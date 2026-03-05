import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/sections/CTA";
import Link from "next/link";
import { CheckCircle, ArrowRight, BarChart3, Shield, Zap, Code, TrendingUp, Users, Globe, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Affiliate Tracking Software — Scalaro",
  description: "Enterprise-grade white-label affiliate tracking software with real-time reporting, fraud detection, and automated payouts. Built for MFIs and SaaS companies.",
};

const features = [
  { icon: BarChart3, title: "Real-Time Analytics", description: "Track every click, impression, and conversion as it happens. Sub-second reporting latency with drill-down capabilities." },
  { icon: Shield, title: "Fraud Prevention", description: "Multi-layer fraud detection using IP analysis, device fingerprinting, and behavioral patterns to protect your budget." },
  { icon: Zap, title: "Automated Payouts", description: "Schedule and execute affiliate payouts automatically. Supports bank transfers, PayPal, crypto, and custom integrations." },
  { icon: Code, title: "API-First Architecture", description: "Complete REST API with webhooks. Integrate with any tool in your stack. Full developer documentation included." },
  { icon: TrendingUp, title: "Multi-Touch Attribution", description: "Choose from last-click, first-click, linear, or custom attribution models. Understand the full customer journey." },
  { icon: Users, title: "Affiliate Portal", description: "Give affiliates their own branded dashboard with real-time stats, creative assets, and payment history." },
  { icon: Globe, title: "Multi-Currency & Multi-Region", description: "Support affiliates in 100+ countries with local currency payouts and region-specific commission structures." },
  { icon: RefreshCw, title: "Postback & Pixel Tracking", description: "Server-side postback, JavaScript pixel, and S2S tracking options. Works with any traffic source." },
];

const useCases = [
  { title: "MFIs & Lending", description: "Track loan application completions, approvals, and funded amounts. Separate commission structures for different loan products.", metric: "35% lower CPA" },
  { title: "SaaS Products", description: "Track trials, paid conversions, and MRR attribution. Recurring commission support for subscription businesses.", metric: "3x affiliate growth" },
  { title: "E-Commerce", description: "Product-level tracking with dynamic commissions. Integration with Shopify, WooCommerce, and custom platforms.", metric: "52% better ROI" },
  { title: "Financial Services", description: "Compliant tracking for regulated industries. GDPR/CCPA ready with full audit trails.", metric: "Full compliance" },
];

export default function TrackingPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 bg-gradient-to-br from-indigo-600 via-blue-700 to-indigo-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-medium mb-6">
                 Product 01
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">Affiliate Tracking Software</h1>
              <p className="text-xl text-indigo-200 mb-8">Enterprise-grade tracking platform you can deploy under your own brand. Real-time analytics, fraud prevention, and automated payouts — all in one platform.</p>
              <div className="flex flex-wrap gap-4 mb-10">
                {["Real-time tracking", "Fraud prevention", "White-label", "API-first"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-lg text-sm">{tag}</span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href="mailto:hello@scalaro.io" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition-all text-sm">
                  Book Demo <ArrowRight className="w-4 h-4" />
                </a>
                <Link href="/pricing" className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all text-sm">
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Everything You Need to Run a Profitable Affiliate Program</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">Built by affiliate marketers, for affiliate marketers. Every feature exists because a client needed it.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((f) => (
                <div key={f.title} className="p-6 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:shadow-lg transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <f.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Built for Every Vertical</h2>
              <p className="text-xl text-slate-600">Whether you're in fintech, SaaS, or e-commerce — our platform adapts to your needs.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((uc) => (
                <div key={uc.title} className="bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-lg transition-shadow">
                  <div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-lg mb-3">{uc.metric}</div>
                  <h3 className="font-bold text-slate-900 mb-2">{uc.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{uc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech specs */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Technical Specifications</h2>
                <p className="text-slate-600 mb-8">Enterprise-grade infrastructure designed for reliability and scale.</p>
                <ul className="space-y-3">
                  {[
                    "Sub-100ms tracking pixel response time",
                    "99.9% uptime SLA with status page",
                    "SOC2 Type II compliant infrastructure",
                    "GDPR & CCPA ready out of the box",
                    "Horizontal scaling to billions of events",
                    "Full audit logs and data retention controls",
                    "Multi-region deployment available",
                    "99.9% data accuracy guarantee",
                  ].map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-slate-300 font-mono text-sm">
                <div className="text-emerald-400 mb-4">// Integration example</div>
                <div className="space-y-2">
                  <div><span className="text-blue-400">POST</span> <span className="text-white">/api/v1/conversion</span></div>
                  <div className="text-slate-500">Authorization: Bearer &lt;token&gt;</div>
                  <div className="text-slate-500">Content-Type: application/json</div>
                  <div className="mt-4 text-yellow-400">{"{"}</div>
                  <div className="pl-4">"affiliate_id": "aff_123",</div>
                  <div className="pl-4">"event": "registration",</div>
                  <div className="pl-4">"amount": 150.00,</div>
                  <div className="pl-4">"currency": "USD",</div>
                  <div className="pl-4">"click_id": "clk_abc"</div>
                  <div className="text-yellow-400">{"}"}</div>
                  <div className="mt-4 text-emerald-400">// → 200 OK, conversion tracked</div>
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
