'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase, type BlogPost } from '@/lib/supabase';
import { PlusCircle, Edit, Trash2, Eye, EyeOff, LogOut, Zap, FileText } from 'lucide-react';

export default function AdminPage() {
  const [session, setSession] = useState<unknown>(null);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  useEffect(() => {
    checkSession();
  }, []);

  async function checkSession() {
    const { data } = await supabase.auth.getSession();
    setSession(data.session);
    if (data.session) fetchPosts();
    setLoading(false);
  }

  async function fetchPosts() {
    const { data } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false });
    setPosts(data || []);
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginError('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setLoginError(error.message);
    } else {
      await checkSession();
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    setSession(null);
    setPosts([]);
  }

  async function togglePublish(post: BlogPost) {
    await supabase
      .from('blog_posts')
      .update({ published: !post.published })
      .eq('id', post.id);
    fetchPosts();
  }

  async function deletePost(id: string) {
    if (!confirm('Delete this post?')) return;
    await supabase.from('blog_posts').delete().eq('id', id);
    fetchPosts();
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="flex items-center gap-2.5 justify-center mb-8">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-white" style={{fontFamily:'Syne,sans-serif'}}>Scalaro Admin</span>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h1 className="text-xl font-bold text-white mb-6" style={{fontFamily:'Syne,sans-serif'}}>Sign In</h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm text-slate-400 mb-1.5">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 text-sm"
                  placeholder="admin@scalaro.io"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1.5">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 text-sm"
                  required
                />
              </div>
              {loginError && <p className="text-red-400 text-sm">{loginError}</p>}
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-xl transition-colors text-sm"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <nav className="bg-slate-900/80 border-b border-slate-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-bold text-white" style={{fontFamily:'Syne,sans-serif'}}>Scalaro Admin</span>
          </div>
          <button onClick={handleLogout} className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors">
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white" style={{fontFamily:'Syne,sans-serif'}}>Blog Posts</h1>
            <p className="text-slate-400 text-sm mt-1">{posts.length} posts total</p>
          </div>
          <Link href="/admin/posts/new" className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors">
            <PlusCircle className="w-4 h-4" /> New Post
          </Link>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20 bg-slate-900/50 rounded-2xl border border-slate-800">
            <FileText className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <p className="text-slate-400">No posts yet. Create your first post!</p>
          </div>
        ) : (
          <div className="bg-slate-900/50 rounded-2xl border border-slate-800 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="text-left px-6 py-4 text-xs text-slate-500 font-semibold uppercase tracking-wider">Title</th>
                  <th className="text-left px-6 py-4 text-xs text-slate-500 font-semibold uppercase tracking-wider">Slug</th>
                  <th className="text-left px-6 py-4 text-xs text-slate-500 font-semibold uppercase tracking-wider">Status</th>
                  <th className="text-left px-6 py-4 text-xs text-slate-500 font-semibold uppercase tracking-wider">Date</th>
                  <th className="text-right px-6 py-4 text-xs text-slate-500 font-semibold uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                {posts.map(post => (
                  <tr key={post.id} className="hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="text-sm text-white font-medium">{post.title_en}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{post.title_ua}</div>
                    </td>
                    <td className="px-6 py-4">
                      <code className="text-xs text-indigo-400 bg-indigo-400/10 px-2 py-0.5 rounded">{post.slug}</code>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${post.published ? 'bg-emerald-400/10 text-emerald-400 border border-emerald-400/20' : 'bg-slate-700/50 text-slate-400 border border-slate-700'}`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${post.published ? 'bg-emerald-400' : 'bg-slate-500'}`} />
                        {post.published ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-400">{new Date(post.created_at).toLocaleDateString()}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button onClick={() => togglePublish(post)} className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-700/50 transition-all">
                          {post.published ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                        <Link href={`/admin/posts/${post.id}`} className="p-2 text-slate-400 hover:text-indigo-400 rounded-lg hover:bg-slate-700/50 transition-all">
                          <Edit className="w-4 h-4" />
                        </Link>
                        <button onClick={() => deletePost(post.id)} className="p-2 text-slate-400 hover:text-red-400 rounded-lg hover:bg-slate-700/50 transition-all">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
