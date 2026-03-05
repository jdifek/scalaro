"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { CheckCircle, Zap } from "lucide-react";

export default function PricingContent() {
  const t = useTranslations("pricing");
  const [annual, setAnnual] = useState(false);

  const trackingPlans = t.raw("tracking.plans") as Array<{ name: string; price: string; description: string; features: string[]; popular?: boolean }>;
  const platformPlans = t.raw("platform.plans") as Array<{ name: string; price: string; description: string; features: string[]; popular?: boolean }>;

  const getPrice = (price: string) => {
    if (price === "Custom" || price === "Індив.") return price;
    const num = parseInt(price);
    if (isNaN(num)) return price;
    return annual ? Math.round(num * 0.8).toString() : price;
  };

  return (
    <div className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full text-sm font-medium text-indigo-700 mb-4">
            Pricing
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">{t("title")}</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">{t("subtitle")}</p>
          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-slate-100 rounded-xl p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${!annual ? "bg-white shadow-sm text-slate-900" : "text-slate-500"}`}
            >
              {t("monthly")}
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${annual ? "bg-white shadow-sm text-slate-900" : "text-slate-500"}`}
            >
              {t("annual")}
              <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">{t("save")}</span>
            </button>
          </div>
        </div>

        {/* Tracking Plans */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">{t("tracking.title")}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {trackingPlans.map((plan, i) => (
              <div key={i} className={`relative rounded-2xl overflow-hidden ${plan.popular ? "border-2 border-indigo-500 shadow-xl" : "border border-slate-200"}`}>
                {plan.popular && (
                  <div className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white text-xs font-bold text-center py-2">
                    ⚡ {t("popular")}
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{plan.name}</h3>
                  <p className="text-sm text-slate-500 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    {plan.price === "Custom" || plan.price === "Індив." ? (
                      <div className="text-3xl font-bold text-slate-900">{plan.price}</div>
                    ) : (
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-slate-900">${getPrice(plan.price)}</span>
                        <span className="text-slate-500 text-sm">/mo</span>
                      </div>
                    )}
                  </div>
                  <a
                    href="mailto:hello@scalaro.io"
                    className={`w-full block text-center py-3 px-4 rounded-xl font-semibold text-sm transition-all mb-6 ${
                      plan.popular
                        ? "bg-gradient-to-r from-indigo-600 to-blue-500 text-white hover:from-indigo-700 hover:to-blue-600"
                        : plan.price === "Custom" || plan.price === "Індив."
                        ? "bg-slate-900 text-white hover:bg-slate-800"
                        : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                    }`}
                  >
                    {plan.price === "Custom" || plan.price === "Індив." ? t("ctaEnterprise") : t("cta")}
                  </a>
                  <ul className="space-y-2">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Plans */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">{t("platform.title")}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {platformPlans.map((plan, i) => (
              <div key={i} className={`relative rounded-2xl overflow-hidden ${plan.popular ? "border-2 border-emerald-500 shadow-xl" : "border border-slate-200"}`}>
                {plan.popular && (
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold text-center py-2">
                    ⚡ {t("popular")}
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{plan.name}</h3>
                  <p className="text-sm text-slate-500 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    {plan.price === "Custom" || plan.price === "Індив." ? (
                      <div className="text-3xl font-bold text-slate-900">{plan.price}</div>
                    ) : (
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-slate-900">${getPrice(plan.price)}</span>
                        <span className="text-slate-500 text-sm">/mo</span>
                      </div>
                    )}
                  </div>
                  <a
                    href="mailto:hello@scalaro.io"
                    className={`w-full block text-center py-3 px-4 rounded-xl font-semibold text-sm transition-all mb-6 ${
                      plan.popular
                        ? "bg-gradient-to-r from-emerald-600 to-teal-500 text-white hover:from-emerald-700 hover:to-teal-600"
                        : plan.price === "Custom" || plan.price === "Індив."
                        ? "bg-slate-900 text-white hover:bg-slate-800"
                        : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                    }`}
                  >
                    {plan.price === "Custom" || plan.price === "Індив." ? t("ctaEnterprise") : t("cta")}
                  </a>
                  <ul className="space-y-2">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
