"use client";
import { useTranslations } from "next-intl";
import { Building2, Rocket, Pen, Users, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const iconMap = { Building2, Rocket, Pen, Users };

const cardData = [
  { gradient: "from-indigo-500 to-blue-500", bg: "bg-indigo-50", border: "border-indigo-100", tag: "bg-indigo-100 text-indigo-700", accent: "text-indigo-600" },
  { gradient: "from-violet-500 to-purple-500", bg: "bg-violet-50", border: "border-violet-100", tag: "bg-violet-100 text-violet-700", accent: "text-violet-600" },
  { gradient: "from-emerald-500 to-teal-500", bg: "bg-emerald-50", border: "border-emerald-100", tag: "bg-emerald-100 text-emerald-700", accent: "text-emerald-600" },
  { gradient: "from-orange-500 to-amber-500", bg: "bg-orange-50", border: "border-orange-100", tag: "bg-orange-100 text-orange-700", accent: "text-orange-600" },
];

export default function WhoFor() {
  const t = useTranslations("whoFor");
  const segments = t.raw("segments") as Array<{ icon: string; title: string; problem: string; solution: string; result: string }>;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-sm font-medium text-slate-600 mb-4">
            Who it's for
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">{t("title")}</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {segments.map((seg, i) => {
            const Icon = iconMap[seg.icon as keyof typeof iconMap] || Building2;
            const c = cardData[i];
            return (
              <div key={i} className="group relative bg-white rounded-2xl border border-slate-100 p-8 hover:border-indigo-200 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Hover background */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.gradient} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">{seg.title}</h3>
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${c.tag}`}>
                      0{i + 1}
                    </span>
                  </div>

                  {/* Problem */}
                  <div className={`rounded-xl border ${c.border} ${c.bg} p-4 mb-4`}>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1.5">The Problem</div>
                    <p className="text-sm text-slate-700 leading-relaxed">{seg.problem}</p>
                  </div>

                  {/* Solution */}
                  <div className="p-4 mb-4">
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1.5">Our Solution</div>
                    <p className="text-sm text-slate-700 leading-relaxed">{seg.solution}</p>
                  </div>

                  {/* Result */}
                  <div className="flex items-start gap-2.5 pt-4 border-t border-slate-100">
                    <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${c.accent}`} />
                    <p className={`text-sm font-semibold ${c.accent}`}>{seg.result}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-slate-500 text-sm mb-3">Not sure which product fits your use case?</p>
          <Link href="/#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">
            Talk to our team — we'll figure it out together <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
