'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { generateSlug } from '@/lib/utils';
import { ArrowLeft, Save, Eye, Zap } from 'lucide-react';

export default function NewPostPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    title_en: '',
    title_ua: '',
    content_en: '',
    content_ua: '',
    slug: '',
    excerpt_en: '',
    excerpt_ua: '',
    author: 'Scalaro Team',
    published: false,
  });

  const handleChange = (field: string, value: string | boolean) => {
    setForm(prev => {
      const updated = { ...prev, [field]: value };
      if (field === 'title_en' && !prev.slug) {
        updated.slug = generateSlug(value as string);
      }
      return updated;
    });
  };

  async function handleSave(publish: boolean) {
    setSaving(true);
    const { error } = await supabase.from('blog_posts').insert({
      ...form,
      published: publish,
      tags: [],
    });

    if (!error) {
      router.push('/admin');
    } else {
      alert('Error: ' + error.message);
    }
    setSaving(false);
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <nav className="bg-slate-900/80 border-b border-slate-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-white" />
            </div>
            <Link href="/admin" className="text-slate-400 hover:text-white text-sm flex items-center gap-1.5">
              <ArrowLeft className="w-4 h-4" /> Back to Posts
            </Link>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => handleSave(false)}
              disabled={saving}
              className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors disabled:opacity-50"
            >
              <Save className="w-4 h-4" /> Save Draft
            </button>
            <button
              onClick={() => handleSave(true)}
              disabled={saving}
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors disabled:opacity-50"
            >
              <Eye className="w-4 h-4" /> Publish
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold text-white mb-8" style={{fontFamily:'Syne,sans-serif'}}>New Blog Post</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* EN Title */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Title (English) *</label>
            <input
              value={form.title_en}
              onChange={e => handleChange('title_en', e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 text-sm"
              placeholder="The Complete Guide to..."
              required
            />
          </div>

          {/* UA Title */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Title (Ukrainian) *</label>
            <input
              value={form.title_ua}
              onChange={e => handleChange('title_ua', e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 text-sm"
              placeholder="Повний посібник з..."
              required
            />
          </div>

          {/* Slug */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">URL Slug *</label>
            <input
              value={form.slug}
              onChange={e => handleChange('slug', e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 text-sm font-mono"
              placeholder="url-friendly-slug"
              required
            />
          </div>

          {/* Author */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Author</label>
            <input
              value={form.author}
              onChange={e => handleChange('author', e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 text-sm"
              placeholder="Author name"
            />
          </div>

          {/* EN Excerpt */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Excerpt (English)</label>
            <textarea
              value={form.excerpt_en}
              onChange={e => handleChange('excerpt_en', e.target.value)}
              rows={3}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 text-sm resize-none"
              placeholder="Brief description for listing page..."
            />
          </div>

          {/* UA Excerpt */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Excerpt (Ukrainian)</label>
            <textarea
              value={form.excerpt_ua}
              onChange={e => handleChange('excerpt_ua', e.target.value)}
              rows={3}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 text-sm resize-none"
              placeholder="Короткий опис для сторінки списку..."
            />
          </div>
        </div>

        {/* Content EN */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-slate-300 mb-2">Content (English) — HTML supported</label>
          <textarea
            value={form.content_en}
            onChange={e => handleChange('content_en', e.target.value)}
            rows={16}
            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 text-sm font-mono resize-y"
            placeholder="<p>Write your article here. HTML is supported for formatting...</p>"
          />
        </div>

        {/* Content UA */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-slate-300 mb-2">Content (Ukrainian) — HTML supported</label>
          <textarea
            value={form.content_ua}
            onChange={e => handleChange('content_ua', e.target.value)}
            rows={16}
            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 text-sm font-mono resize-y"
            placeholder="<p>Напишіть свою статтю тут. HTML підтримується для форматування...</p>"
          />
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-8 justify-end">
          <button
            onClick={() => handleSave(false)}
            disabled={saving}
            className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors disabled:opacity-50"
          >
            <Save className="w-4 h-4" /> Save as Draft
          </button>
          <button
            onClick={() => handleSave(true)}
            disabled={saving}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors disabled:opacity-50"
          >
            <Eye className="w-4 h-4" /> Publish Post
          </button>
        </div>
      </div>
    </div>
  );
}
