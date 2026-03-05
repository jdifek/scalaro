import { Star, ExternalLink } from "lucide-react";

const testimonials = [
  {
    quote: "Scalaro's platform allowed us to scale from a small blog to Ukraine's #1 financial portal in under 2 years. The SEO tools and analytics are unmatched.",
    author: "Finoglyad Team",
    role: "Content & Growth Lead",
    company: "finoglyad.com",
    url: "https://finoglyad.com",
    avatar: "F",
    color: "from-emerald-500 to-teal-500",
  },
  {
    quote: "We launched our affiliate program in literally 4 days. The fraud detection alone saved us thousands in the first month. Highly recommend for any fintech.",
    author: "Dmytro K.",
    role: "Head of Partnerships",
    company: "MFO Platform",
    url: "#",
    avatar: "D",
    color: "from-indigo-500 to-blue-500",
  },
  {
    quote: "As an agency managing 6 clients' affiliate programs, having one unified white-label platform changed everything. Clean dashboards, clean reporting.",
    author: "Maria S.",
    role: "Agency Owner",
    company: "Digital Growth Agency",
    url: "#",
    avatar: "M",
    color: "from-violet-500 to-purple-500",
  },
];

const logoPartners = [
  { name: "Finoglyad", desc: "Finance Portal #1 UA", initial: "F", color: "bg-emerald-100 text-emerald-700" },
  { name: "MFO Partner", desc: "Lending Platform", initial: "M", color: "bg-indigo-100 text-indigo-700" },
  { name: "SaaS Client", desc: "B2B SaaS", initial: "S", color: "bg-violet-100 text-violet-700" },
  { name: "Agency X", desc: "Digital Agency", initial: "A", color: "bg-blue-100 text-blue-700" },
  { name: "FinTech UA", desc: "Payments", initial: "P", color: "bg-orange-100 text-orange-700" },
];

export default function SocialProof() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partner logos strip */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">Trusted by growing companies</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {logoPartners.map((p) => (
              <div key={p.name} className="flex items-center gap-3 px-5 py-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                <div className={`w-8 h-8 rounded-lg ${p.color} flex items-center justify-center font-bold text-sm`}>
                  {p.initial}
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-slate-700">{p.name}</div>
                  <div className="text-xs text-slate-400">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-100 p-7 flex flex-col hover:shadow-xl hover:border-indigo-100 transition-all duration-300">
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-700 text-sm leading-relaxed mb-6 flex-1">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-slate-900">{t.author}</div>
                  <div className="text-xs text-slate-400 truncate">{t.role} · {t.company}</div>
                </div>
                {t.url !== "#" && (
                  <a href={t.url} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-indigo-500 transition-colors flex-shrink-0">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
