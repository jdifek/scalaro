import { useTranslations } from "next-intl";
import { Zap, Shield, TrendingUp, Headphones, Code, Globe } from "lucide-react";

const iconMap = { Zap, Shield, TrendingUp, Headphones, Code, Globe };

const proofNumbers = ["72h", "99.9%", "10K+", "<4h", "REST", "12"];

export default function WhyScalaro() {
  const t = useTranslations("why");
  const reasons = t.raw("reasons") as Array<{ icon: string; title: string; description: string }>;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.05),transparent)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-full text-sm font-medium text-emerald-700 mb-4">
            Why Scalaro
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">{t("title")}</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => {
            const Icon = iconMap[reason.icon as keyof typeof iconMap] || Zap;
            return (
              <div
                key={i}
                className="group relative p-7 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:shadow-xl transition-all duration-300 bg-white overflow-hidden"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>

                <div className="relative">
                  {/* Icon + proof number */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-2xl font-black text-slate-100 group-hover:text-indigo-100 transition-colors select-none">
                      {proofNumbers[i]}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-3">{reason.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{reason.description}</p>

                  {/* Bottom accent line */}
                  <div className="mt-5 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-indigo-400 to-blue-400 transition-all duration-500 rounded-full"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom trust bar */}
        <div className="mt-14 bg-gradient-to-r from-slate-50 to-indigo-50 rounded-2xl border border-slate-100 p-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500">
            {[
              "✅ SOC2-compliant infrastructure",
              "✅ GDPR & CCPA ready",
              "✅ 99.9% uptime SLA",
              "✅ Full data ownership",
              "✅ EU & UA servers available",
            ].map((item) => (
              <span key={item} className="font-medium">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
