# Scalaro Website — Setup Guide

## Prerequisites
- Node.js 18.17+ 
- npm or yarn
- Supabase account (free tier works)

## Quick Start

```bash
npm install
# Configure Supabase (see below)
npm run dev
```

Visit: http://localhost:3000

---

## Supabase Setup

### Step 1: Create a Supabase Project
1. Go to https://app.supabase.com
2. Click **New Project**
3. Choose your organization, name it "scalaro-blog"
4. Set a strong database password
5. Select a region closest to your users

### Step 2: Create the Blog Posts Table

Go to **SQL Editor** in Supabase and run:

```sql
-- Create blog_posts table
CREATE TABLE blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title_en TEXT NOT NULL,
  title_ua TEXT NOT NULL,
  content_en TEXT DEFAULT '',
  content_ua TEXT DEFAULT '',
  excerpt_en TEXT DEFAULT '',
  excerpt_ua TEXT DEFAULT '',
  slug TEXT UNIQUE NOT NULL,
  published BOOLEAN DEFAULT false,
  meta_description_en TEXT DEFAULT '',
  meta_description_ua TEXT DEFAULT '',
  author TEXT DEFAULT 'Scalaro Team',
  read_time INTEGER DEFAULT 5,
  cover_image TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read published posts
CREATE POLICY "Public can read published posts" ON blog_posts
  FOR SELECT USING (published = true);

-- Policy: Allow all operations for authenticated (we'll use anon key for simplicity)
CREATE POLICY "Allow all for anon" ON blog_posts
  FOR ALL USING (true) WITH CHECK (true);

-- Create index for slug lookups
CREATE INDEX blog_posts_slug_idx ON blog_posts(slug);

-- Create index for published posts
CREATE INDEX blog_posts_published_idx ON blog_posts(published, created_at DESC);
```

### Step 3: Get Your API Keys
1. In Supabase, go to **Settings** → **API**
2. Copy your **Project URL** (looks like `https://xxxx.supabase.co`)
3. Copy your **anon/public** key (starts with `eyJ...`)

### Step 4: Configure Environment Variables
Create `.env.local` in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### Step 5: Seed Sample Posts (Optional)

```sql
INSERT INTO blog_posts (title_en, title_ua, slug, published, excerpt_en, read_time, content_en) VALUES
(
  'How to Launch a White-Label Affiliate Program in 72 Hours',
  'Як запустити white-label афіліатну програму за 72 години',
  'launch-white-label-affiliate-program',
  true,
  'A step-by-step guide to launching your own branded affiliate program.',
  8,
  '<h2>Why White-Label Affiliate Tracking?</h2><p>Building your own affiliate tracking system from scratch takes months. White-label platforms give you all the functionality at a fraction of the cost.</p>'
),
(
  'Affiliate Fraud Prevention: The Complete 2026 Guide',
  'Запобігання афіліатному фроду: Повний гід 2026',
  'affiliate-fraud-prevention-guide',
  true,
  'Learn how to identify, prevent, and handle affiliate fraud.',
  12,
  '<h2>The Scale of Affiliate Fraud</h2><p>Industry estimates suggest that 10-15% of affiliate traffic contains fraudulent activity.</p>'
);
```

---

## Admin Panel

- URL: http://localhost:3000/admin
- Email: **admin@scalaro.io**
- Password: **Scalaro2025!Admin**

> ⚠️ Change these credentials before production deployment!

---

## Language Switching

The site supports English and Ukrainian. Switch via the language toggle in the header.
Locale is stored in a cookie (`locale=en` or `locale=ua`).

---

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

Add environment variables in Vercel dashboard:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Other Platforms
The app uses `next start` and requires a Node.js server.
**Do NOT use `output: 'export'`** — Supabase integration requires server-side rendering.

---

## CPA Network (Roadmap Q3 2026)
The `/products` page includes a "Coming Soon" badge for the CPA Network.
When ready, create a new page at `/products/cpa-network`.

---

## SEO Configuration
- Sitemap: https://yourdomain.com/sitemap.xml
- Robots: https://yourdomain.com/robots.txt
- Update `baseUrl` in `src/app/sitemap.ts` with your actual domain

---

## Support
Email: hello@scalaro.io
