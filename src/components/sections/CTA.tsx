import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowRight, Calendar, Mail, Clock, CheckCircle } from "lucide-react";

export default function CTA() {
  const t = useTranslations("cta");

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-700 to-blue-800"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDBNIDAgMjAgTCA0MCAyMCBNIDIwIDAgTCAyMCA0MCBNIDAgMzAgTCA0MCAzMCBNIDMwIDAgTCAzMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-indigo-200 mb-6">
               Launch in 72 hours
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">{t("title")}</h2>
            <p className="text-xl text-indigo-200 mb-8">{t("subtitle")}</p>

            <div className="space-y-3 mb-8">
              {[
                { icon: CheckCircle, text: "Free 30-min discovery call — no commitment" },
                { icon: Clock, text: "Custom proposal within 24 hours" },
                { icon: CheckCircle, text: "No credit card required to start" },
                { icon: CheckCircle, text: "Your branding from day one" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-indigo-200">
                  <item.icon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  {item.text}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:hello@scalaro.io"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition-all shadow-lg hover:shadow-xl text-sm"
              >
                <Calendar className="w-4 h-4" />
                {t("primary")}
              </a>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all text-sm"
              >
                {t("secondary")} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right: contact card */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
            <h3 className="text-white font-bold text-xl mb-6">Get in touch</h3>

            <div className="space-y-4 mb-8">
              {[
                { label: "Email us directly", value: "hello@scalaro.io", href: "mailto:hello@scalaro.io", icon: Mail },
                { label: "Response time", value: "< 4 hours on business days", href: null, icon: Clock },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 p-4 bg-white/10 rounded-xl border border-white/10">
                  <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white/60 text-xs">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-white font-semibold text-sm hover:text-indigo-200 transition-colors">{item.value}</a>
                    ) : (
                      <div className="text-white font-semibold text-sm">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* What happens next */}
            <div>
              <div className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-3">What happens next</div>
              <div className="space-y-2">
                {[
                  "You send a message or book a call",
                  "We respond within 4 hours",
                  "30-min discovery call",
                  "Custom proposal in 24h",
                  "Platform live in 72h",
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-white/80">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-black text-white flex-shrink-0">{i + 1}</div>
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
