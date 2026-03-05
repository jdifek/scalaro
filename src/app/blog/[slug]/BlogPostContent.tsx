"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { supabase, type BlogPost } from "@/lib/supabase";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { formatDate } from "@/lib/utils";

const FALLBACK_CONTENT: Record<string, Partial<BlogPost>> = {
  "launch-white-label-affiliate-program": {
    title_en: "How to Launch a White-Label Affiliate Program in 72 Hours",
    title_ua: "Як запустити white-label афіліатну програму за 72 години",
    content_en: `<h2>Why White-Label Affiliate Tracking?</h2><p>Building your own affiliate tracking system from scratch takes months of development time and significant technical resources. White-label platforms give you all the functionality at a fraction of the cost and time.</p><h2>Step 1: Choose Your Platform</h2><p>Look for a platform that offers real-time tracking, fraud prevention, and automated payouts. Scalaro's tracking software provides all three with a white-label interface you can customize to match your brand.</p><h2>Step 2: Configure Your Commission Structure</h2><p>Decide on your commission model: CPA (cost per action), CPS (cost per sale), CPL (cost per lead), or a hybrid. Most successful affiliate programs use tiered commissions to incentivize high performers.</p><h2>Step 3: Create Affiliate Materials</h2><p>Prepare banners, landing pages, email swipes, and product information that affiliates can use. The easier you make it for affiliates to promote you, the better your results will be.</p><h2>Step 4: Recruit Your First Affiliates</h2><p>Start with your existing network: customers who love your product, bloggers in your niche, and industry influencers. Quality beats quantity — 10 engaged affiliates outperform 100 passive ones.</p><h2>Step 5: Go Live and Monitor</h2><p>Launch your program and monitor key metrics from day one: click-through rates, conversion rates, and affiliate quality scores. Use the data to optimize your commission structure and creative assets.</p>`,
    created_at: "2026-01-15T00:00:00Z",
    read_time: 8,
    author: "Scalaro Team",
  },
  "affiliate-fraud-prevention-guide": {
    title_en: "Affiliate Fraud Prevention: The Complete 2026 Guide",
    title_ua: "Запобігання афіліатному фроду: Повний гід 2026",
    content_en: `<h2>The Scale of Affiliate Fraud</h2><p>Industry estimates suggest that 10-15% of affiliate traffic contains fraudulent activity. For a program spending $100K/month on affiliate commissions, that's $10-15K wasted on fake conversions.</p><h2>Types of Affiliate Fraud</h2><h3>Click Fraud</h3><p>Affiliates generate fake clicks to inflate their metrics. Modern detection uses IP analysis and behavioral patterns to identify bot traffic and click farms.</p><h3>Cookie Stuffing</h3><p>Malicious affiliates place tracking cookies on users' browsers without their knowledge, claiming credit for purchases they had no role in influencing.</p><h3>Lead Fraud</h3><p>Fake registrations and lead submissions. Common in fintech affiliate programs where commissions are paid for loan applications.</p><h2>Prevention Strategies</h2><p>1. Use server-side tracking instead of JavaScript pixels for critical conversions. 2. Implement velocity checks — too many conversions from one IP is suspicious. 3. Require email verification for all affiliate-driven sign-ups. 4. Monitor conversion rates by affiliate — outliers need investigation. 5. Use device fingerprinting to catch VPN and proxy traffic.</p><h2>Enterprise Fraud Protection</h2><p>Scalaro's tracking platform includes built-in fraud detection that flags suspicious activity in real-time and holds commissions for review before they're paid out.</p>`,
    created_at: "2026-01-28T00:00:00Z",
    read_time: 12,
    author: "Scalaro Team",
  },
};

export default function BlogPostContent({ slug }: { slug: string }) {
  const t = useTranslations("blog");
  const [post, setPost] = useState<Partial<BlogPost> | null>(null);
  const [loading, setLoading] = useState(true);
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    const cookie = document.cookie
      .split(";")
      .find((c) => c.trim().startsWith("locale="));
    setLocale(cookie ? cookie.split("=")[1].trim() : "en");
  }, []);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data, error } = await supabase
          .from("blog_posts")
          .select("*")
          .eq("slug", slug)
          .eq("published", true)
          .single();

        if (error || !data) {
          setPost(FALLBACK_CONTENT[slug] || null);
        } else {
          setPost(data);
        }
      } catch {
        setPost(FALLBACK_CONTENT[slug] || null);
      }
      setLoading(false);
    };
    fetch();
  }, [slug]);

  if (loading) {
    return (
      <div className="py-24 flex justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-indigo-600 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">
          Post not found
        </h1>
        <Link href="/blog" className="text-indigo-600 hover:underline">
          {t("backToBlog")}
        </Link>
      </div>
    );
  }

  const title = locale === "ua" ? post.title_ua : post.title_en;
  const content =
    locale === "ua" ? post.content_ua || post.content_en : post.content_en;

  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> {t("backToBlog")}
        </Link>

        <article>
          <header className="mb-10">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              {post.created_at && (
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.created_at, locale)}
                </div>
              )}
              {post.read_time && (
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.read_time} {t("minRead")}
                </div>
              )}
              {post.author && <span>By {post.author}</span>}
            </div>
          </header>

          <div
            className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-p:text-slate-600 prose-p:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: content || "" }}
          />
        </article>

        <div className="mt-16 pt-8 border-t border-slate-100 text-center">
          <p className="text-slate-600 mb-4">
            Ready to grow your business with Scalaro?
          </p>
          <a
            href="mailto:hello@scalaro.io"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-blue-600 transition-all text-sm"
          >
            Book a Free Demo
          </a>
        </div>
      </div>
    </div>
  );
}
