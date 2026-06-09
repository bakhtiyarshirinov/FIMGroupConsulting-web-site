"use client";

import { useEffect, useState } from "react";

interface Service {
  id: number;
  titleAz: string;
  titleRu: string | null;
  descriptionAz: string;
  descriptionRu: string | null;
  icon: string;
  visible: boolean;
  order: number;
}

export default function AdminXidmetlerPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [editId, setEditId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<Partial<Service>>({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch("/api/admin/services")
      .then((r) => r.json())
      .then(setServices)
      .finally(() => setLoading(false));
  }, []);

  const handleToggleVisible = async (s: Service) => {
    await fetch(`/api/admin/services/${s.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...s, visible: !s.visible }),
    });
    setServices((arr) => arr.map((x) => (x.id === s.id ? { ...x, visible: !x.visible } : x)));
  };

  const startEdit = (s: Service) => {
    setEditId(s.id);
    setEditForm({ titleAz: s.titleAz, titleRu: s.titleRu ?? "", descriptionAz: s.descriptionAz, descriptionRu: s.descriptionRu ?? "" });
  };

  const cancelEdit = () => {
    setEditId(null);
    setEditForm({});
  };

  const saveEdit = async (s: Service) => {
    setSaving(true);
    await fetch(`/api/admin/services/${s.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...s, ...editForm }),
    });
    setServices((arr) =>
      arr.map((x) => (x.id === s.id ? { ...x, ...editForm } : x))
    );
    setEditId(null);
    setSaving(false);
  };

  const inputClass =
    "w-full px-3 py-2 bg-dark-200 border border-dark-300 focus:border-gold rounded-lg text-white placeholder-gray-600 focus:outline-none text-sm font-inter transition-all";

  if (loading) {
    return (
      <div className="p-8 flex items-center justify-center h-64">
        <div className="text-gray-500 font-inter">Yüklənir...</div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-playfair text-3xl font-bold text-white">Xidmətlər</h1>
        <p className="text-gray-500 text-sm mt-1 font-inter">
          Xidmətlərin görünüşünü və məzmununu idarə edin
        </p>
      </div>

      <div className="space-y-4">
        {services.map((s) => (
          <div
            key={s.id}
            className="bg-dark-100 border border-gold/10 rounded-2xl overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold text-sm font-bold font-playfair">
                    {s.order}
                  </div>
                  {editId === s.id ? (
                    <div className="flex-1 space-y-3 min-w-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs text-gray-500 mb-1 block">Başlıq (AZ)</label>
                          <input
                            type="text"
                            value={editForm.titleAz ?? ""}
                            onChange={(e) => setEditForm((f) => ({ ...f, titleAz: e.target.value }))}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="text-xs text-gray-500 mb-1 block">Başlıq (RU)</label>
                          <input
                            type="text"
                            value={editForm.titleRu ?? ""}
                            onChange={(e) => setEditForm((f) => ({ ...f, titleRu: e.target.value }))}
                            className={inputClass}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-xs text-gray-500 mb-1 block">Təsvir (AZ)</label>
                        <textarea
                          rows={3}
                          value={editForm.descriptionAz ?? ""}
                          onChange={(e) => setEditForm((f) => ({ ...f, descriptionAz: e.target.value }))}
                          className={`${inputClass} resize-none`}
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-500 mb-1 block">Təsvir (RU)</label>
                        <textarea
                          rows={3}
                          value={editForm.descriptionRu ?? ""}
                          onChange={(e) => setEditForm((f) => ({ ...f, descriptionRu: e.target.value }))}
                          className={`${inputClass} resize-none`}
                        />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h3 className="text-white font-inter font-semibold">{s.titleAz}</h3>
                      {s.titleRu && <p className="text-gray-500 text-xs italic">{s.titleRu}</p>}
                      <p className="text-gray-400 text-sm mt-2 leading-relaxed max-w-2xl">
                        {s.descriptionAz}
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {/* Visible toggle */}
                  <button
                    onClick={() => handleToggleVisible(s)}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                      s.visible
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                        : "bg-gray-500/10 text-gray-500 border-gray-500/20"
                    }`}
                  >
                    {s.visible ? "Görünür" : "Gizli"}
                  </button>

                  {editId === s.id ? (
                    <>
                      <button
                        onClick={() => saveEdit(s)}
                        disabled={saving}
                        className="px-3 py-1.5 bg-gold hover:bg-gold-dark text-white text-xs font-inter rounded-lg transition-all disabled:opacity-60"
                      >
                        {saving ? "..." : "Saxla"}
                      </button>
                      <button
                        onClick={cancelEdit}
                        className="px-3 py-1.5 bg-dark-200 hover:bg-dark-300 text-gray-400 text-xs font-inter rounded-lg transition-all"
                      >
                        Ləğv
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => startEdit(s)}
                      className="p-2 text-gray-400 hover:text-gold hover:bg-gold/10 rounded-lg transition-all"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
