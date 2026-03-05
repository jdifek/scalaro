import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowRight, ExternalLink, TrendingUp, Users, BarChart3, Award, Quote } from "lucide-react";

export default function CaseStudy() {
  const t = useTranslations("caseStudy");
  const metrics = t.raw("metrics") as Array<{ value: string; label: string }>;
  const metricIcons = [Users, TrendingUp, BarChart3, Award];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-emerald-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full text-sm font-medium text-indigo-700 mb-4">
            {t("badge")}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">{t("title")}</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        {/* Main case study card */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden mb-8">
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Left: story (3 cols) */}
            <div className="lg:col-span-3 p-10 lg:p-14">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-xl font-black text-emerald-400">F</div>
                <div>
                  <div className="text-white font-bold text-lg">Finoglyad.com</div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <span>Ukraine's #1 Finance Portal</span>
                    <span>·</span>
                    <a href="https://finoglyad.com" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1">
                      Visit <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
                <div className="ml-auto flex items-center gap-1.5 px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-xs text-emerald-400">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
                  Live since 2023
                </div>
              </div>

              <div className="space-y-5 mb-8">
                <div className="border-l-2 border-red-400/40 pl-4">
                  <div className="text-xs font-bold text-red-400 uppercase tracking-wide mb-1">🎯 {t("challenge")}</div>
                  <p className="text-slate-300 text-sm leading-relaxed">{t("challengeText")}</p>
                </div>
                <div className="border-l-2 border-indigo-400/40 pl-4">
                  <div className="text-xs font-bold text-indigo-400 uppercase tracking-wide mb-1">💡 {t("solution")}</div>
                  <p className="text-slate-300 text-sm leading-relaxed">{t("solutionText")}</p>
                </div>
                <div className="border-l-2 border-emerald-400/40 pl-4">
                  <div className="text-xs font-bold text-emerald-400 uppercase tracking-wide mb-1">✅ {t("result")}</div>
                  <p className="text-slate-300 text-sm leading-relaxed">{t("resultText")}</p>
                </div>
              </div>

              {/* Quote */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-6">
                <Quote className="w-6 h-6 text-indigo-400 mb-3" />
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "Scalaro's platform allowed us to scale from a small blog to Ukraine's leading financial portal. The built-in SEO tools and analytics gave us insights we couldn't find anywhere else."
                </p>
                <div className="mt-3 text-xs text-slate-500">— Finoglyad Editorial Team</div>
              </div>

              <div className="flex gap-3">
                <Link
                  href="/cases"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-blue-600 transition-all text-sm"
                >
                  {t("cta")} <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://finoglyad.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all text-sm"
                >
                  Visit Site <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: metrics (2 cols) */}
            <div className="lg:col-span-2 bg-gradient-to-br from-indigo-600/20 to-transparent border-t lg:border-t-0 lg:border-l border-white/10 p-10 lg:p-12 flex flex-col justify-center">
              <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Results in numbers</h3>
              <div className="grid grid-cols-2 gap-4">
                {metrics.map((metric, i) => {
                  const Icon = metricIcons[i] || TrendingUp;
                  return (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
                      <Icon className="w-5 h-5 text-indigo-400 mb-3" />
                      <div className="text-2xl font-black text-white mb-1">{metric.value}</div>
                      <div className="text-xs text-slate-400 leading-tight">{metric.label}</div>
                    </div>
                  );
                })}
              </div>

              {/* Industry tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {["Content Platform", "Fintech", "Ukraine", "SEO", "2023 →"].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 bg-white/10 rounded-lg text-xs text-slate-400">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
