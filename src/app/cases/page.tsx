import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/sections/CTA";
import Link from "next/link";
import { ArrowRight, TrendingUp, Users, BarChart3, Award, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies — Scalaro",
  description: "Real results from real businesses. See how Finoglyad and other companies scaled their business using Scalaro's white-label software.",
};

const timeline = [
  { date: "Q1 2023", event: "Finoglyad onboarded to Content Platform", type: "launch" },
  { date: "Q2 2023", event: "Custom Ukrainian SEO optimization deployed", type: "feature" },
  { date: "Q3 2023", event: "Traffic doubled to 20,000 monthly readers", type: "milestone" },
  { date: "Q4 2023", event: "Newsletter feature launched, 5,000 subscribers", type: "feature" },
  { date: "Q1 2024", event: "Reached 40,000 monthly readers", type: "milestone" },
  { date: "Q2 2024", event: "Monetization tools deployed, revenue 2x", type: "milestone" },
  { date: "2025", event: "50,000+ monthly readers, #1 finance portal", type: "milestone" },
];

export default function CasesPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full text-sm font-medium text-indigo-700 mb-4">
              Case Studies
            </div>
            <h1 className="text-5xl font-bold text-slate-900 mb-4">Customer Success Stories</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Real results from real businesses. See how our clients are growing with Scalaro.</p>
          </div>
        </section>

        {/* Finoglyad Feature */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-10 lg:p-16">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-lg">CASE STUDY</span>
                    <span className="px-3 py-1 bg-white/10 text-slate-300 text-xs font-bold rounded-lg">Content Platform</span>
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-4">Finoglyad.com</h2>
                  <p className="text-slate-400 text-lg mb-6">Ukraine's leading financial comparison portal scaled to 50,000+ monthly readers and became the #1 fintech media property in the country.</p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[
                      { icon: Users, value: "50K+", label: "Monthly Readers" },
                      { icon: TrendingUp, value: "300%", label: "Traffic Growth" },
                      { icon: BarChart3, value: "2 Years", label: "On Scalaro" },
                      { icon: Award, value: "#1", label: "Finance Portal UA" },
                    ].map((m) => (
                      <div key={m.label} className="bg-white/5 border border-white/10 rounded-xl p-4">
                        <m.icon className="w-4 h-4 text-indigo-400 mb-2" />
                        <div className="text-xl font-bold text-white">{m.value}</div>
                        <div className="text-xs text-slate-400">{m.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a href="https://finoglyad.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-slate-900 font-semibold rounded-xl text-sm hover:bg-slate-100 transition-all">
                      Visit Site <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-indigo-600/30 to-transparent p-10 lg:p-16 flex flex-col justify-between">
                  <div>
                    <h3 className="text-white font-bold mb-6 text-lg">Project Timeline</h3>
                    <div className="space-y-4">
                      {timeline.map((item, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <div className={`w-3 h-3 rounded-full flex-shrink-0 ${item.type === "milestone" ? "bg-emerald-400" : item.type === "launch" ? "bg-indigo-400" : "bg-blue-400"}`}></div>
                            {i < timeline.length - 1 && <div className="w-0.5 h-8 bg-white/10 mt-1"></div>}
                          </div>
                          <div className="pb-4">
                            <div className="text-xs text-slate-500 font-mono">{item.date}</div>
                            <div className="text-sm text-slate-300">{item.event}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                      Currently live and growing
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed case */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Full Case Study: Finoglyad</h2>
            <div className="space-y-8">
              <div className="bg-white rounded-2xl border border-slate-100 p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-red-500">🎯</span> The Challenge
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">Finoglyad started as a small financial comparison website in Ukraine in 2022. By early 2023, they had outgrown their initial CMS and needed a platform that could:</p>
                <ul className="space-y-2">
                  {[
                    "Handle 10,000+ monthly visitors with room to scale to 100K+",
                    "Support Ukrainian-language content with proper SEO optimization",
                    "Integrate with their custom financial product comparison engine",
                    "Provide editorial workflows for a growing team of 5+ writers",
                    "Generate revenue through content monetization",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-red-400 mt-0.5">→</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-slate-100 p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-indigo-500">💡</span> The Solution
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">Scalaro deployed a custom instance of the Content Platform in March 2023. The implementation included:</p>
                <ul className="space-y-2">
                  {[
                    "Custom Ukrainian-language SEO schema and meta tag system",
                    "API integration with Finoglyad's proprietary comparison engine",
                    "Multi-author editorial dashboard with approval workflows",
                    "Newsletter subscription system with automated welcome sequences",
                    "Native ad placement system for monetization",
                    "Real-time analytics dashboard for content performance",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-indigo-400 mt-0.5">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-emerald-50 rounded-2xl border border-emerald-100 p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-emerald-500">✅</span> The Results
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">Two years after launching on Scalaro, Finoglyad has become the undisputed leader in Ukrainian financial media:</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { value: "300%", label: "Organic traffic growth" },
                    { value: "50K+", label: "Monthly unique readers" },
                    { value: "5,000+", label: "Newsletter subscribers" },
                    { value: "#1", label: "Google ranking for 'фінансові продукти'" },
                  ].map((m) => (
                    <div key={m.label} className="text-center">
                      <div className="text-2xl font-bold text-emerald-600">{m.value}</div>
                      <div className="text-xs text-slate-500 mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* More cases coming */}
        <section className="py-16 bg-white text-center">
          <div className="max-w-2xl mx-auto px-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full text-sm font-medium text-indigo-700 mb-4">
              🔜 Coming Soon
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">More Case Studies in Progress</h2>
            <p className="text-slate-600 mb-6">We're documenting success stories from 3 more clients. Want to be featured? Share your results with us.</p>
            <a href="mailto:hello@scalaro.io" className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all text-sm">
              Share Your Story <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
