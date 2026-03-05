"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowRight, CheckCircle, Shield, Star, TrendingUp, Globe, BarChart3, Zap, Users, Activity } from "lucide-react";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-[-5%] w-[500px] h-[500px] bg-indigo-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-10 left-[-5%] w-[400px] h-[400px] bg-blue-100 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDBNIDAgMjAgTCA0MCAyMCBNIDIwIDAgTCAyMCA0MCBNIDAgMzAgTCA0MCAzMCBNIDMwIDAgTCAzMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTJlOGYwIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full text-sm font-medium text-indigo-700 mb-6">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              {t("badge")}
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-[1.1] mb-6">
              White-Label Software{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                That Scales
              </span>{" "}
              Your Business
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed mb-8 max-w-xl">
              {t("subtitle")}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { icon: CheckCircle, text: "No setup fees" },
                { icon: Shield, text: "99.9% Uptime SLA" },
                { icon: Star, text: "White-label ready" },
                { icon: Zap, text: "Live in 72h" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-1.5 text-sm text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-100 shadow-sm">
                  <item.icon className="w-3.5 h-3.5 text-emerald-500" />
                  {item.text}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-500 rounded-xl hover:from-indigo-700 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                {t("cta1")} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:border-indigo-300 hover:text-indigo-600 transition-all shadow-sm hover:shadow-md"
              >
                {t("cta2")}
              </Link>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-4 pt-8 border-t border-slate-100">
              {[
                { value: t("stat1"), label: t("stat1Label") },
                { value: t("stat2"), label: t("stat2Label") },
                { value: t("stat3"), label: t("stat3Label") },
                { value: t("stat4"), label: t("stat4Label") },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">{stat.value}</div>
                  <div className="text-xs text-slate-500 mt-0.5 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dashboard Mockup */}
          <div className="relative hidden lg:block">
            <div className="relative z-10">
              {/* Browser frame */}
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
                {/* Browser bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-100">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-slate-400 font-mono border border-slate-200">
                    app.scalaro.io/dashboard
                  </div>
                </div>

                {/* Dashboard content */}
                <div className="p-5 bg-slate-50">
                  {/* Top metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[
                      { label: "Total Clicks", value: "284,920", change: "+18%", color: "text-indigo-600" },
                      { label: "Conversions", value: "12,847", change: "+24%", color: "text-emerald-600" },
                      { label: "Revenue", value: "$94,210", change: "+31%", color: "text-blue-600" },
                    ].map((m) => (
                      <div key={m.label} className="bg-white rounded-xl p-3 border border-slate-100">
                        <div className="text-xs text-slate-400 mb-1">{m.label}</div>
                        <div className={`text-lg font-bold ${m.color}`}>{m.value}</div>
                        <div className="text-xs text-emerald-500 font-medium">{m.change}</div>
                      </div>
                    ))}
                  </div>

                  {/* Chart area */}
                  <div className="bg-white rounded-xl p-4 border border-slate-100 mb-3">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-slate-600">Conversions — Last 30 days</span>
                      <div className="flex items-center gap-1 text-xs text-emerald-600">
                        <Activity className="w-3 h-3" /> Live
                      </div>
                    </div>
                    {/* SVG mini chart */}
                    <svg viewBox="0 0 280 60" className="w-full h-14">
                      <defs>
                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3"/>
                          <stop offset="100%" stopColor="#6366f1" stopOpacity="0"/>
                        </linearGradient>
                      </defs>
                      <path d="M0,50 L20,42 L40,38 L60,35 L80,30 L100,28 L120,20 L140,22 L160,15 L180,18 L200,10 L220,12 L240,8 L260,5 L280,3" stroke="#6366f1" strokeWidth="2" fill="none"/>
                      <path d="M0,50 L20,42 L40,38 L60,35 L80,30 L100,28 L120,20 L140,22 L160,15 L180,18 L200,10 L220,12 L240,8 L260,5 L280,3 L280,60 L0,60 Z" fill="url(#chartGrad)"/>
                    </svg>
                  </div>

                  {/* Affiliates table */}
                  <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
                    <div className="px-4 py-2.5 border-b border-slate-50 flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-600">Top Affiliates</span>
                      <span className="text-xs text-indigo-500">View all</span>
                    </div>
                    {[
                      { name: "Partner A", clicks: "48,291", conv: "2,104", rate: "4.4%" },
                      { name: "Partner B", clicks: "31,820", conv: "1,890", rate: "5.9%" },
                      { name: "Partner C", clicks: "27,445", conv: "1,203", rate: "4.4%" },
                    ].map((row) => (
                      <div key={row.name} className="flex items-center justify-between px-4 py-2 text-xs border-b border-slate-50 last:border-0">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-[9px]">{row.name[8]}</div>
                          <span className="text-slate-700 font-medium">{row.name}</span>
                        </div>
                        <div className="flex gap-4 text-slate-500">
                          <span>{row.clicks}</span>
                          <span className="text-emerald-600 font-medium">{row.conv}</span>
                          <span className="text-indigo-500">{row.rate}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge: fraud alert */}
              <div className="absolute -left-8 top-1/3 bg-white rounded-xl shadow-xl border border-slate-100 p-3 flex items-center gap-2 text-xs">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800">Fraud blocked</div>
                  <div className="text-slate-400">247 clicks today</div>
                </div>
              </div>

              {/* Floating badge: new conversion */}
              <div className="absolute -right-6 bottom-1/3 bg-white rounded-xl shadow-xl border border-slate-100 p-3 flex items-center gap-2 text-xs">
                <div className="w-7 h-7 rounded-lg bg-indigo-100 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-indigo-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800">New conversion</div>
                  <div className="text-emerald-500 font-medium">+$124.00</div>
                </div>
              </div>
            </div>

            {/* Glow behind mockup */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-200 to-blue-200 rounded-3xl blur-2xl opacity-30 scale-95"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
