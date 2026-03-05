import Link from "next/link";
import { useTranslations } from "next-intl";
import { BarChart3, FileText, CheckCircle, ArrowRight, Zap, Shield, Globe } from "lucide-react";

const trackingHighlights = [
  { icon: Zap, label: "Real-time tracking" },
  { icon: Shield, label: "Fraud protection" },
  { icon: Globe, label: "Multi-region" },
];
const platformHighlights = [
  { icon: Zap, label: "SEO-optimized" },
  { icon: Globe, label: "Custom domain" },
  { icon: BarChart3, label: "Analytics built-in" },
];

export default function Products() {
  const t = useTranslations("products");
  const trackingFeatures = t.raw("tracking.features") as string[];
  const platformFeatures = t.raw("platform.features") as string[];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full text-sm font-medium text-indigo-700 mb-4">
            Products
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">{t("title")}</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Tracking */}
          <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-shadow duration-500 group flex flex-col">
            {/* Top gradient bar */}
            <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500"></div>

            {/* Mockup preview area */}
            <div className="bg-gradient-to-br from-indigo-600 to-blue-700 px-6 pt-6 pb-0 relative overflow-hidden min-h-[140px]">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-2 right-4 w-32 h-32 rounded-full bg-white blur-2xl"></div>
              </div>
              <div className="relative flex items-end gap-2 pb-0">
                <div className="flex items-end gap-1.5">
                  {[40, 65, 45, 80, 55, 90, 70, 95].map((h, i) => (
                    <div key={i} className="w-5 rounded-t-sm bg-white/30 hover:bg-white/50 transition-colors" style={{ height: `${h * 0.8}px` }}></div>
                  ))}
                </div>
                <div className="ml-4 pb-2">
                  <div className="text-white/60 text-xs font-mono">Conversions / 30d</div>
                  <div className="text-2xl font-black text-white">+31%</div>
                </div>
              </div>
            </div>

            <div className="p-8 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-indigo-400 uppercase tracking-widest">Product 01</div>
                  <h3 className="text-xl font-bold text-slate-900">{t("tracking.title")}</h3>
                </div>
              </div>

              <p className="text-slate-600 mb-5 leading-relaxed text-sm">{t("tracking.description")}</p>

              {/* Highlight pills */}
              <div className="flex gap-2 mb-5 flex-wrap">
                {trackingHighlights.map((h) => (
                  <div key={h.label} className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full">
                    <h.icon className="w-3 h-3" />
                    {h.label}
                  </div>
                ))}
              </div>

              <ul className="grid grid-cols-1 gap-2 mb-8 flex-1">
                {trackingFeatures.map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-3">
                <Link
                  href="/products/tracking"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-blue-600 transition-all text-sm shadow-sm hover:shadow-md"
                >
                  {t("tracking.cta")} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/pricing" className="text-sm text-slate-500 hover:text-indigo-600 transition-colors font-medium">
                  View pricing →
                </Link>
              </div>
            </div>
          </div>

          {/* Platform */}
          <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-shadow duration-500 group flex flex-col">
            <div className="h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"></div>

            {/* Preview area */}
            <div className="bg-gradient-to-br from-emerald-600 to-teal-700 px-6 py-4 relative overflow-hidden min-h-[140px]">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-2 left-4 w-32 h-32 rounded-full bg-white blur-2xl"></div>
              </div>
              {/* Article preview mockup */}
              <div className="relative space-y-2">
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="h-2.5 bg-white/60 rounded w-3/4 mb-1.5"></div>
                  <div className="h-2 bg-white/30 rounded w-full mb-1"></div>
                  <div className="h-2 bg-white/30 rounded w-5/6"></div>
                </div>
                <div className="flex gap-2">
                  <div className="bg-white/20 rounded-lg p-2 flex-1">
                    <div className="h-2 bg-white/50 rounded w-2/3 mb-1"></div>
                    <div className="h-4 bg-white/70 rounded w-1/2 font-bold text-xs flex items-center pl-1 text-white/80">50K readers</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-2 flex-1">
                    <div className="h-2 bg-white/50 rounded w-2/3 mb-1"></div>
                    <div className="h-4 bg-white/70 rounded w-1/2 font-bold text-xs flex items-center pl-1 text-white/80">+300% SEO</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-emerald-500 uppercase tracking-widest">Product 02</div>
                  <h3 className="text-xl font-bold text-slate-900">{t("platform.title")}</h3>
                </div>
              </div>

              <p className="text-slate-600 mb-5 leading-relaxed text-sm">{t("platform.description")}</p>

              <div className="flex gap-2 mb-5 flex-wrap">
                {platformHighlights.map((h) => (
                  <div key={h.label} className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full">
                    <h.icon className="w-3 h-3" />
                    {h.label}
                  </div>
                ))}
              </div>

              {/* Live proof badge */}
              <div className="flex items-center gap-2 mb-5 px-3 py-2 bg-emerald-50 border border-emerald-100 rounded-xl text-xs">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-emerald-700 font-medium">Live proof:</span>
                <a href="https://finoglyad.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-semibold hover:underline">
                  finoglyad.com
                </a>
                <span className="text-emerald-600">· 50K+ readers/mo since 2023</span>
              </div>

              <ul className="grid grid-cols-1 gap-2 mb-8 flex-1">
                {platformFeatures.map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-3">
                <Link
                  href="/products/platform"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-teal-600 transition-all text-sm shadow-sm hover:shadow-md"
                >
                  {t("platform.cta")} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/pricing" className="text-sm text-slate-500 hover:text-emerald-600 transition-colors font-medium">
                  View pricing →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap banner */}
        <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-indigo-900 to-slate-900 border border-indigo-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="px-2.5 py-1 bg-amber-500/20 border border-amber-500/30 rounded-lg text-amber-400 text-xs font-bold">Q3 2025</div>
            <div>
              <span className="text-white font-semibold">CPA Network</span>
              <span className="text-slate-400 text-sm ml-2">— coming to Scalaro</span>
            </div>
          </div>
          <p className="text-sm text-slate-400 text-center sm:text-right">Existing clients get priority access & better rates. <a href="mailto:hello@scalaro.io" className="text-indigo-400 hover:text-indigo-300 underline">Join the waitlist →</a></p>
        </div>
      </div>
    </section>
  );
}
