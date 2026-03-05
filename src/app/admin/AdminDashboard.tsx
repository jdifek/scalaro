"use client";
import { useState, useEffect } from "react";
import { supabase, type BlogPost } from "@/lib/supabase";
import { Plus, Edit, Trash2, LogOut, Eye, EyeOff, Save, X, Zap } from "lucide-react";

const ADMIN_EMAIL = "admin@scalaro.io";
const ADMIN_PASSWORD = "Scalaro2025!Admin";

type FormData = {
  title_en: string;
  title_ua: string;
  content_en: string;
  content_ua: string;
  excerpt_en: string;
  excerpt_ua: string;
  slug: string;
  published: boolean;
  meta_description_en: string;
  meta_description_ua: string;
  read_time: number;
  author: string;
};

const emptyForm: FormData = {
  title_en: "", title_ua: "", content_en: "", content_ua: "",
  excerpt_en: "", excerpt_ua: "", slug: "", published: false,
  meta_description_en: "", meta_description_ua: "", read_time: 5, author: "Scalaro Team",
};

export default function AdminDashboard() {
  const [authed, setAuthed] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editing, setEditing] = useState<string | null>(null);
  const [form, setForm] = useState<FormData>(emptyForm);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("scalaro_admin");
    if (stored === "true") setAuthed(true);
  }, []);

  useEffect(() => {
    if (authed) loadPosts();
  }, [authed]);

  const loadPosts = async () => {
    try {
      const { data } = await supabase.from("blog_posts").select("*").order("created_at", { ascending: false });
      if (data) setPosts(data);
    } catch {}
  };

  const login = () => {
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setAuthed(true);
      localStorage.setItem("scalaro_admin", "true");
      setLoginError("");
    } else {
      setLoginError("Invalid credentials");
    }
  };

  const logout = () => {
    setAuthed(false);
    localStorage.removeItem("scalaro_admin");
  };

  const openNew = () => {
    setEditing(null);
    setForm(emptyForm);
    setShowForm(true);
  };

  const openEdit = (post: BlogPost) => {
    setEditing(post.id);
    setForm({
      title_en: post.title_en || "",
      title_ua: post.title_ua || "",
      content_en: post.content_en || "",
      content_ua: post.content_ua || "",
      excerpt_en: post.excerpt_en || "",
      excerpt_ua: post.excerpt_ua || "",
      slug: post.slug || "",
      published: post.published || false,
      meta_description_en: post.meta_description_en || "",
      meta_description_ua: post.meta_description_ua || "",
      read_time: post.read_time || 5,
      author: post.author || "Scalaro Team",
    });
    setShowForm(true);
  };

  const save = async () => {
    setSaving(true);
    try {
      if (editing) {
        await supabase.from("blog_posts").update({ ...form, updated_at: new Date().toISOString() }).eq("id", editing);
      } else {
        await supabase.from("blog_posts").insert({ ...form, created_at: new Date().toISOString(), updated_at: new Date().toISOString() });
      }
      setMessage("✓ Saved successfully!");
      setTimeout(() => setMessage(""), 3000);
      setShowForm(false);
      loadPosts();
    } catch (err) {
      setMessage("✗ Error saving post");
    }
    setSaving(false);
  };

  const deletePost = async (id: string) => {
    if (!confirm("Delete this post?")) return;
    await supabase.from("blog_posts").delete().eq("id", id);
    loadPosts();
  };

  if (!authed) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-xl">Scalaro Admin</span>
          </div>
          <div className="space-y-4">
            <input
              type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="Email" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-indigo-400"
              onKeyDown={(e) => e.key === "Enter" && login()}
            />
            <input
              type="password" value={password} onChange={(e) => setPassword(e.target.value)}
              placeholder="Password" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-indigo-400"
              onKeyDown={(e) => e.key === "Enter" && login()}
            />
            {loginError && <p className="text-red-500 text-sm">{loginError}</p>}
            <button onClick={login} className="w-full py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-blue-600 transition-all text-sm">
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center">
            <Zap className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="font-bold">Scalaro Blog Admin</span>
        </div>
        <div className="flex items-center gap-3">
          {message && <span className="text-sm text-emerald-600 font-medium">{message}</span>}
          <button onClick={openNew} className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
            <Plus className="w-4 h-4" /> New Post
          </button>
          <button onClick={logout} className="inline-flex items-center gap-2 px-3 py-2 text-slate-600 hover:text-slate-900 text-sm rounded-lg hover:bg-slate-100 transition-colors">
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Form */}
        {showForm && (
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bold text-lg">{editing ? "Edit Post" : "New Post"}</h2>
              <button onClick={() => setShowForm(false)} className="p-2 hover:bg-slate-100 rounded-lg">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1">Title (English)</label>
                <input value={form.title_en} onChange={(e) => setForm({ ...form, title_en: e.target.value })} className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-indigo-400" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1">Title (Ukrainian)</label>
                <input value={form.title_ua} onChange={(e) => setForm({ ...form, title_ua: e.target.value })} className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-indigo-400" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1">Slug</label>
                <input value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-indigo-400" placeholder="my-post-slug" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1">Author</label>
                <input value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-indigo-400" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1">Excerpt (English)</label>
                <textarea value={form.excerpt_en} onChange={(e) => setForm({ ...form, excerpt_en: e.target.value })} rows={2} className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-indigo-400 resize-none" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1">Excerpt (Ukrainian)</label>
                <textarea value={form.excerpt_ua} onChange={(e) => setForm({ ...form, excerpt_ua: e.target.value })} rows={2} className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-indigo-400 resize-none" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-slate-500 mb-1">Content (English) — HTML supported</label>
                <textarea value={form.content_en} onChange={(e) => setForm({ ...form, content_en: e.target.value })} rows={8} className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-indigo-400 resize-y font-mono" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-slate-500 mb-1">Content (Ukrainian) — HTML supported</label>
                <textarea value={form.content_ua} onChange={(e) => setForm({ ...form, content_ua: e.target.value })} rows={8} className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-indigo-400 resize-y font-mono" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1">Read Time (minutes)</label>
                <input type="number" value={form.read_time} onChange={(e) => setForm({ ...form, read_time: parseInt(e.target.value) })} className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-indigo-400" />
              </div>
              <div className="flex items-center gap-2 pt-6">
                <input type="checkbox" id="published" checked={form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })} className="w-4 h-4 accent-indigo-600" />
                <label htmlFor="published" className="text-sm font-medium text-slate-700">Published</label>
              </div>
            </div>
            <div className="flex gap-3">
              <button onClick={save} disabled={saving} className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 disabled:opacity-50 transition-colors">
                <Save className="w-4 h-4" />
                {saving ? "Saving..." : "Save Post"}
              </button>
              <button onClick={() => setShowForm(false)} className="px-5 py-2.5 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Posts table */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-50">
            <h2 className="font-bold text-slate-900">Blog Posts ({posts.length})</h2>
          </div>
          {posts.length === 0 ? (
            <div className="py-16 text-center text-slate-400">No posts yet. Create your first post.</div>
          ) : (
            <div className="divide-y divide-slate-50">
              {posts.map((post) => (
                <div key={post.id} className="px-6 py-4 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className={`w-2 h-2 rounded-full flex-shrink-0 ${post.published ? "bg-emerald-400" : "bg-slate-300"}`}></span>
                      <h3 className="font-medium text-slate-900 text-sm truncate">{post.title_en}</h3>
                    </div>
                    <div className="text-xs text-slate-400 pl-4">/blog/{post.slug} · {new Date(post.created_at).toLocaleDateString()}</div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button onClick={() => openEdit(post)} className="p-2 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button onClick={() => deletePost(post.id)} className="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
