import Link from "next/link";
import { useTranslations } from "next-intl";
import { Zap, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-slate-950 text-slate-400">
      {/* Newsletter strip */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-bold text-lg mb-1">
                Stay ahead of the curve
              </h3>
              <p className="text-slate-400 text-sm">
                Affiliate marketing insights, platform updates, and growth
                tactics. No spam.
              </p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 sm:w-64 px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <button className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-semibold transition-colors flex items-center gap-1.5">
                Subscribe <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl text-white mb-4"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-400 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              Scalaro
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              {t("description")}
            </p>
            <div className="space-y-2">
              <a
                href="mailto:hello@scalaro.io"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 text-indigo-400 group-hover:text-indigo-300" />
                hello@scalaro.io
              </a>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-indigo-400" />
                Kyiv, Ukraine 🇺🇦
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              {t("products")}
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/products/tracking"
                  className="text-sm hover:text-white transition-colors"
                >
                  {t("tracking")}
                </Link>
              </li>
              <li>
                <Link
                  href="/products/platform"
                  className="text-sm hover:text-white transition-colors"
                >
                  {t("platform")}
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm hover:text-white transition-colors"
                >
                  {t("pricing")}
                </Link>
              </li>
              <li>
                <span className="text-sm text-slate-600 flex items-center gap-2">
                  CPA Network
                  <span className="text-[10px] bg-amber-900/40 text-amber-400 border border-amber-700/40 px-1.5 py-0.5 rounded font-bold">
                    Q3 2026
                  </span>
                </span>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              {t("company")}
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/cases"
                  className="text-sm hover:text-white transition-colors"
                >
                  {t("cases")}
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm hover:text-white transition-colors"
                >
                  {t("blog")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-sm hover:text-white transition-colors"
                >
                  {t("contact")}
                </Link>
              </li>
              <li>
                <a
                  href="https://finoglyad.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-emerald-500 hover:text-emerald-400 transition-colors flex items-center gap-1"
                >
                  Finoglyad ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              {t("legal")}
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm hover:text-white transition-colors"
                >
                  {t("privacy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm hover:text-white transition-colors"
                >
                  {t("terms")}
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                  System Status
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600">{t("copyright")}</p>
          <div className="flex items-center gap-4 text-xs text-slate-600">
            <span>Built with ❤️ in Ukraine</span>
            <span>·</span>
            <span>Powered by Next.js & Supabase</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
