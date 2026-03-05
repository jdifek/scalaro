"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown, MessageCircle } from "lucide-react";

const categories = ["General", "Technical", "Pricing", "Support"];
const itemCategories = [0, 0, 3, 1, 1, 2, 1, 0, 1, 2]; // map each FAQ to category index

export default function FAQ() {
  const t = useTranslations("faq");
  const items = t.raw("items") as Array<{ q: string; a: string }>;
  const [open, setOpen] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const filtered = activeCategory === null
    ? items
    : items.filter((_, i) => itemCategories[i] === activeCategory);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-200 rounded-full text-sm font-medium text-slate-600 mb-4">
            FAQ
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">{t("title")}</h2>
          <p className="text-xl text-slate-600">{t("subtitle")}</p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeCategory === null ? "bg-indigo-600 text-white shadow-sm" : "bg-white text-slate-600 border border-slate-200 hover:border-indigo-200 hover:text-indigo-600"}`}
          >
            All questions
          </button>
          {categories.map((cat, i) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(i)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeCategory === i ? "bg-indigo-600 text-white shadow-sm" : "bg-white text-slate-600 border border-slate-200 hover:border-indigo-200 hover:text-indigo-600"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-2">
          {filtered.map((item, i) => {
            const realIndex = activeCategory === null ? i : items.indexOf(item);
            return (
              <div
                key={realIndex}
                className={`rounded-2xl border transition-all duration-200 ${open === realIndex ? "border-indigo-200 bg-white shadow-sm" : "border-transparent bg-white hover:border-slate-200"}`}
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 group"
                  onClick={() => setOpen(open === realIndex ? null : realIndex)}
                >
                  <span className="font-semibold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-indigo-700 transition-colors">
                    {item.q}
                  </span>
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all ${open === realIndex ? "bg-indigo-100 rotate-180" : "bg-slate-100"}`}>
                    <ChevronDown className={`w-3.5 h-3.5 transition-colors ${open === realIndex ? "text-indigo-600" : "text-slate-400"}`} />
                  </div>
                </button>
                {open === realIndex && (
                  <div className="px-6 pb-6">
                    <div className="h-px bg-slate-100 mb-4"></div>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center p-8 bg-white rounded-2xl border border-slate-100">
          <MessageCircle className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
          <h3 className="font-bold text-slate-900 mb-2">Still have questions?</h3>
          <p className="text-slate-500 text-sm mb-4">Our team responds within 4 hours on business days.</p>
          <a
            href="mailto:hello@scalaro.io"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors text-sm"
          >
            Contact Support →
          </a>
        </div>
      </div>
    </section>
  );
}
