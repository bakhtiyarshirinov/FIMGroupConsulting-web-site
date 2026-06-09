"use client";

import { useEffect, useState } from "react";
import { formatDate, slugify } from "@/lib/utils";

interface NewsArticle {
  id: number;
  slug: string;
  titleAz: string;
  titleRu: string | null;
  contentAz: string;
  contentRu: string | null;
  imageUrl: string | null;
  published: boolean;
  createdAt: string;
}

type Mode = "list" | "create" | "edit";

const emptyForm = {
  titleAz: "",
  titleRu: "",
  contentAz: "",
  contentRu: "",
  imageUrl: "",
  slug: "",
  published: false,
};

export default function AdminXeberlerPage() {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState<Mode>("list");
  const [editId, setEditId] = useState<number | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const fetchNews = async () => {
    const res = await fetch("/api/admin/news");
    const data = await res.json();
    setNews(data);
    setLoading(false);
  };

  useEffect(() => { fetchNews(); }, []);

  const openCreate = () => {
    setForm(emptyForm);
    setEditId(null);
    setError("");
    setMode("create");
  };

  const openEdit = (article: NewsArticle) => {
    setForm({
      titleAz: article.titleAz,
      titleRu: article.titleRu ?? "",
      contentAz: article.contentAz,
      contentRu: article.contentRu ?? "",
      imageUrl: article.imageUrl ?? "",
      slug: article.slug,
      published: article.published,
    });
    setEditId(article.id);
    setError("");
    setMode("edit");
  };

  const handleSave = async () => {
    setSaving(true);
    setError("");

    const url = mode === "create" ? "/api/admin/news" : `/api/admin/news/${editId}`;
    const method = mode === "create" ? "POST" : "PUT";

    const payload = {
      ...form,
      slug: form.slug || slugify(form.titleAz),
    };

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const d = await res.json();
        throw new Error(d.error ?? "Xəta baş verdi");
      }

      await fetchNews();
      setMode("list");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Xəta");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Bu xəbəri silmək istəyirsiniz?")) return;
    await fetch(`/api/admin/news/${id}`, { method: "DELETE" });
    setNews((n) => n.filter((a) => a.id !== id));
  };

  const handleTogglePublish = async (article: NewsArticle) => {
    await fetch(`/api/admin/news/${article.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...article, published: !article.published }),
    });
    setNews((n) => n.map((a) => (a.id === article.id ? { ...a, published: !a.published } : a)));
  };

  const inputClass =
    "w-full px-3 py-2.5 bg-dark-200 border border-dark-300 focus:border-gold rounded-lg text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-all font-inter text-sm";
  const labelClass = "block text-sm font-medium text-gray-300 mb-1.5 font-inter";

  if (loading) {
    return (
      <div className="p-8 flex items-center justify-center h-64">
        <div className="text-gray-500 font-inter">Yüklənir...</div>
      </div>
    );
  }

  if (mode === "create" || mode === "edit") {
    return (
      <div className="p-8">
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => setMode("list")}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="font-playfair text-2xl font-bold text-white">
            {mode === "create" ? "Yeni Xəbər" : "Xəbəri Düzəlt"}
          </h1>
        </div>

        <div className="max-w-3xl bg-dark-100 border border-gold/10 rounded-2xl p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>Başlıq (AZ) *</label>
              <input
                type="text"
                value={form.titleAz}
                onChange={(e) => {
                  const v = e.target.value;
                  setForm((f) => ({ ...f, titleAz: v, slug: f.slug || slugify(v) }));
                }}
                placeholder="Azerbaycanca başlıq"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Başlıq (RU)</label>
              <input
                type="text"
                value={form.titleRu}
                onChange={(e) => setForm((f) => ({ ...f, titleRu: e.target.value }))}
                placeholder="Rusca başlıq"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className={labelClass}>Slug (URL)</label>
            <input
              type="text"
              value={form.slug}
              onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))}
              placeholder="meqale-slug-url"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Şəkil URL</label>
            <input
              type="url"
              value={form.imageUrl}
              onChange={(e) => setForm((f) => ({ ...f, imageUrl: e.target.value }))}
              placeholder="https://..."
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Mətn (AZ) *</label>
            <textarea
              rows={10}
              value={form.contentAz}
              onChange={(e) => setForm((f) => ({ ...f, contentAz: e.target.value }))}
              placeholder="Məqalənin azərbaycanca mətni..."
              className={`${inputClass} resize-y`}
            />
          </div>

          <div>
            <label className={labelClass}>Mətn (RU)</label>
            <textarea
              rows={8}
              value={form.contentRu}
              onChange={(e) => setForm((f) => ({ ...f, contentRu: e.target.value }))}
              placeholder="Rusca mətn..."
              className={`${inputClass} resize-y`}
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setForm((f) => ({ ...f, published: !f.published }))}
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none ${
                form.published ? "bg-gold" : "bg-dark-300"
              }`}
            >
              <span
                className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-300 ${
                  form.published ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </button>
            <span className="text-gray-300 text-sm font-inter">
              {form.published ? "Yayımlanmış" : "Qaralama"}
            </span>
          </div>

          {error && (
            <div className="px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm font-inter">
              {error}
            </div>
          )}

          <div className="flex gap-3">
            <button
              onClick={handleSave}
              disabled={saving}
              className="px-6 py-3 bg-gold hover:bg-gold-dark disabled:opacity-60 text-white font-inter font-semibold rounded-xl transition-all"
            >
              {saving ? "Saxlanır..." : "Saxla"}
            </button>
            <button
              onClick={() => setMode("list")}
              className="px-6 py-3 bg-dark-200 hover:bg-dark-300 text-gray-300 font-inter rounded-xl transition-all"
            >
              Ləğv et
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-playfair text-3xl font-bold text-white">Xəbərlər</h1>
          <p className="text-gray-500 text-sm mt-1 font-inter">{news.length} xəbər mövcuddur</p>
        </div>
        <button
          onClick={openCreate}
          className="flex items-center gap-2 px-5 py-2.5 bg-gold hover:bg-gold-dark text-white font-inter font-semibold rounded-xl transition-all"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Yeni xəbər
        </button>
      </div>

      <div className="bg-dark-100 border border-gold/10 rounded-2xl overflow-hidden">
        {news.length === 0 ? (
          <div className="p-12 text-center text-gray-600 font-inter">
            Hələ xəbər əlavə edilməyib
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b border-dark-300">
                <th className="text-left px-6 py-4 text-gray-500 text-xs font-inter font-medium uppercase tracking-wide">Başlıq</th>
                <th className="text-left px-6 py-4 text-gray-500 text-xs font-inter font-medium uppercase tracking-wide hidden md:table-cell">Tarix</th>
                <th className="text-left px-6 py-4 text-gray-500 text-xs font-inter font-medium uppercase tracking-wide">Status</th>
                <th className="px-6 py-4" />
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-300">
              {news.map((article) => (
                <tr key={article.id} className="hover:bg-dark-200 transition-colors">
                  <td className="px-6 py-4">
                    <div className="text-white font-inter text-sm font-medium truncate max-w-xs">
                      {article.titleAz}
                    </div>
                    <div className="text-gray-600 text-xs mt-0.5">/{article.slug}</div>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <span className="text-gray-500 text-sm font-inter">{formatDate(article.createdAt)}</span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleTogglePublish(article)}
                      className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                        article.published
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20"
                          : "bg-gray-500/10 text-gray-500 border-gray-500/20 hover:bg-gray-500/20"
                      }`}
                    >
                      {article.published ? "Yayımlanıb" : "Qaralama"}
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 justify-end">
                      <button
                        onClick={() => openEdit(article)}
                        className="p-2 text-gray-400 hover:text-gold hover:bg-gold/10 rounded-lg transition-all"
                        title="Düzəlt"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleDelete(article.id)}
                        className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all"
                        title="Sil"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
