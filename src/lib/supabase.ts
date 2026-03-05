import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type BlogPost = {
  id: string;
  title_en: string;
  title_ua: string;
  content_en: string;
  content_ua: string;
  excerpt_en?: string;
  excerpt_ua?: string;
  slug: string;
  published: boolean;
  created_at: string;
  updated_at: string;
  meta_description_en?: string;
  meta_description_ua?: string;
  author?: string;
  read_time?: number;
  cover_image?: string;
};
