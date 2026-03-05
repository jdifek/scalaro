import { useTranslations } from "next-intl";
import { Phone, FileText, Settings, GraduationCap, Rocket } from "lucide-react";
import Link from "next/link";

const stepIcons = [Phone, FileText, Settings, GraduationCap, Rocket];
const stepColors = [
  "from-violet-500 to-indigo-500",
  "from-indigo-500 to-blue-500",
  "from-blue-500 to-cyan-500",
  "from-cyan-500 to-teal-500",
  "from-teal-500 to-emerald-500",
];
const stepTimes = ["Day 1", "Day 1–2", "Day 2–4", "Day 4–5", "Day 5+"];

export default function HowItWorks() {
  const t = useTranslations("howItWorks");
  const steps = t.raw("steps") as Array<{ step: string; title: string; description: string }>;

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-indigo-300 mb-4">
            Process
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">{t("title")}</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        {/* Steps — vertical on mobile, horizontal visual on desktop */}
        <div className="relative">
          {/* Desktop connector */}
          <div className="hidden lg:flex absolute top-16 left-0 right-0 items-center px-[10%] pointer-events-none">
            <div className="flex-1 h-px bg-gradient-to-r from-violet-500/40 via-blue-500/40 to-emerald-500/40 dashed"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, i) => {
              const Icon = stepIcons[i];
              return (
                <div key={i} className="relative group text-center flex flex-col items-center">
                  {/* Step circle */}
                  <div className={`relative z-10 w-[72px] h-[72px] rounded-2xl bg-gradient-to-br ${stepColors[i]} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                    {/* Step number badge */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-900 border-2 border-slate-700 flex items-center justify-center text-[10px] font-black text-slate-300">
                      {i + 1}
                    </div>
                  </div>

                  {/* Time badge */}
                  <div className="inline-flex items-center px-2.5 py-0.5 bg-white/10 border border-white/10 rounded-full text-[11px] text-slate-400 font-mono mb-3">
                    {stepTimes[i]}
                  </div>

                  <h3 className="font-bold text-white text-base mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed max-w-[180px]">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl">
          <div className="text-center sm:text-left">
            <p className="font-semibold text-white">Ready to get started?</p>
            <p className="text-sm text-slate-400">From first call to live platform in under a week.</p>
          </div>
          <Link
            href="/#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-blue-600 transition-all text-sm"
          >
            Book a Discovery Call →
          </Link>
        </div>
      </div>
    </section>
  );
}
