"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Menu, X, ChevronDown, Zap, BarChart3, FileText, ArrowRight } from "lucide-react";

export default function Header() {
  const t = useTranslations("nav");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchLocale = async () => {
    const current = document.cookie.split(";").find((c) => c.trim().startsWith("locale="));
    const locale = current ? current.split("=")[1].trim() : "en";
    const next = locale === "en" ? "ua" : "en";
    await fetch("/api/set-locale", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ locale: next }),
    });
    window.location.reload();
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100" : "bg-white/80 backdrop-blur-sm"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-slate-900">Scalaro</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {/* Products dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-600 hover:text-indigo-600 rounded-lg hover:bg-indigo-50/60 transition-all">
                {t("products")} <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                <div className="px-4 pb-2 mb-1 border-b border-slate-50">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Products</span>
                </div>
                <Link href="/products/tracking" className="flex items-center gap-3 px-4 py-2.5 hover:bg-indigo-50 transition-colors group/item">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-800 group-hover/item:text-indigo-700">{t("tracking")}</div>
                    <div className="text-xs text-slate-400">Real-time affiliate tracking</div>
                  </div>
                </Link>
                <Link href="/products/platform" className="flex items-center gap-3 px-4 py-2.5 hover:bg-emerald-50 transition-colors group/item">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-800 group-hover/item:text-emerald-700">{t("platform")}</div>
                    <div className="text-xs text-slate-400">Content & publishing platform</div>
                  </div>
                </Link>
                <div className="mx-4 mt-2 pt-2 border-t border-slate-50">
                  <div className="flex items-center gap-2 text-xs text-slate-400 py-1.5">
                    <span className="px-1.5 py-0.5 bg-amber-100 text-amber-600 rounded font-bold text-[10px]">Q3</span>
                    CPA Network — coming soon
                  </div>
                </div>
              </div>
            </div>

            {[
              { href: "/pricing", label: t("pricing") },
              { href: "/cases", label: t("cases") },
              { href: "/blog", label: t("blog") },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-indigo-600 rounded-lg hover:bg-indigo-50/60 transition-all">
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={switchLocale}
              className="px-3 py-1.5 text-xs font-bold text-slate-500 hover:text-indigo-600 border border-slate-200 hover:border-indigo-300 rounded-lg transition-all"
            >
              {t("switchLang")}
            </button>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-500 rounded-xl hover:from-indigo-700 hover:to-blue-600 transition-all shadow-sm hover:shadow-md"
            >
              {t("getStarted")} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile button */}
          <button className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-1 shadow-lg">
          <Link href="/products/tracking" className="flex items-center gap-2 px-3 py-2.5 text-sm text-slate-700 hover:bg-indigo-50 rounded-lg font-medium">
            <BarChart3 className="w-4 h-4 text-indigo-500" /> {t("tracking")}
          </Link>
          <Link href="/products/platform" className="flex items-center gap-2 px-3 py-2.5 text-sm text-slate-700 hover:bg-emerald-50 rounded-lg font-medium">
            <FileText className="w-4 h-4 text-emerald-500" /> {t("platform")}
          </Link>
          <Link href="/pricing" className="block px-3 py-2.5 text-sm text-slate-700 hover:bg-indigo-50 rounded-lg font-medium">{t("pricing")}</Link>
          <Link href="/cases" className="block px-3 py-2.5 text-sm text-slate-700 hover:bg-indigo-50 rounded-lg font-medium">{t("cases")}</Link>
          <Link href="/blog" className="block px-3 py-2.5 text-sm text-slate-700 hover:bg-indigo-50 rounded-lg font-medium">{t("blog")}</Link>
          <div className="flex gap-2 pt-3 border-t border-slate-100 mt-2">
            <button onClick={switchLocale} className="px-4 py-2.5 text-sm font-semibold border border-slate-200 rounded-xl flex-1 text-center text-slate-600 hover:bg-slate-50">
              {t("switchLang")}
            </button>
            <Link href="/#contact" className="px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-500 rounded-xl flex-1 text-center">
              {t("getStarted")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
