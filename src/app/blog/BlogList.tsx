"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { supabase, type BlogPost } from "@/lib/supabase";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { formatDate } from "@/lib/utils";

const FALLBACK_POSTS = [
  {
    id: "1",
    title_en: "How to Launch a White-Label Affiliate Program in 72 Hours",
    title_ua: "Як запустити white-label афіліатну програму за 72 години",
    excerpt_en:
      "A step-by-step guide to launching your own branded affiliate program using white-label software. From technical setup to recruiting your first affiliates.",
    excerpt_ua:
      "Покроковий посібник із запуску власної брендованої афіліатної програми за допомогою white-label програмного забезпечення.",
    slug: "launch-white-label-affiliate-program",
    published: true,
    created_at: "2026-01-15T00:00:00Z",
    read_time: 8,
    content_en: "",
    content_ua: "",
    updated_at: "",
  },
  {
    id: "2",
    title_en: "Affiliate Fraud Prevention: The Complete 2026 Guide",
    title_ua: "Запобігання афіліатному фроду: Повний гід 2026",
    excerpt_en:
      "Learn how to identify, prevent, and handle affiliate fraud. From click fraud to cookie stuffing — and how enterprise-grade tools protect your budget.",
    excerpt_ua:
      "Дізнайтесь як виявляти, запобігати та боротись з афіліатним фродом. Від клікового фроду до cookie stuffing.",
    slug: "affiliate-fraud-prevention-guide",
    published: true,
    created_at: "2026-01-28T00:00:00Z",
    read_time: 12,
    content_en: "",
    content_ua: "",
    updated_at: "",
  },
  {
    id: "3",
    title_en: "Content Platform vs CMS: What Financial Companies Need",
    title_ua: "Контент Платформа vs CMS: Що потрібно фінансовим компаніям",
    excerpt_en:
      "Why traditional CMS solutions like WordPress fall short for fintech content needs, and what purpose-built content platforms offer instead.",
    excerpt_ua:
      "Чому традиційні CMS рішення як WordPress не підходять для потреб фінтех контенту, і що натомість пропонують спеціалізовані контент платформи.",
    slug: "content-platform-vs-cms-fintech",
    published: true,
    created_at: "2026-02-10T00:00:00Z",
    read_time: 7,
    content_en: "",
    content_ua: "",
    updated_at: "",
  },
];

export default function BlogList() {
  const t = useTranslations("blog");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    const cookie = document.cookie
      .split(";")
      .find((c) => c.trim().startsWith("locale="));
    setLocale(cookie ? cookie.split("=")[1].trim() : "en");
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase
          .from("blog_posts")
          .select("*")
          .eq("published", true)
          .order("created_at", { ascending: false });

        if (error || !data || data.length === 0) {
          setPosts(FALLBACK_POSTS as BlogPost[]);
        } else {
          setPosts(data);
        }
      } catch {
        setPosts(FALLBACK_POSTS as BlogPost[]);
      }
      setLoading(false);
    };
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="py-24 flex justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-indigo-600 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {posts.length === 0 ? (
          <div className="text-center py-16 text-slate-500">{t("noPosts")}</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <article className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:border-indigo-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="h-48 bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center">
                    <div className="text-5xl"></div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h2 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors leading-snug">
                      {locale === "ua" ? post.title_ua : post.title_en}
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">
                      {locale === "ua"
                        ? post.excerpt_ua || post.excerpt_en
                        : post.excerpt_en || post.excerpt_ua}
                    </p>
                    <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-50">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {formatDate(post.created_at, locale)}
                      </div>
                      {post.read_time && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.read_time} {t("minRead")}
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
