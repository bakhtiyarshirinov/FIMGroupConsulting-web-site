"use client";

import { useEffect, useState } from "react";

interface Settings {
  phone1: string;
  phone2: string;
  email: string;
  address1: string;
  address2: string;
  registry: string;
  voen: string;
  founded_year: string;
  clients_count: string;
  projects_count: string;
  [key: string]: string;
}

const defaultSettings: Settings = {
  phone1: "",
  phone2: "",
  email: "",
  address1: "",
  address2: "",
  registry: "",
  voen: "",
  founded_year: "",
  clients_count: "",
  projects_count: "",
};

export default function AdminAyarlarPage() {
  const [settings, setSettings] = useState<Settings>(defaultSettings);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/admin/settings")
      .then((r) => r.json())
      .then((data) => setSettings({ ...defaultSettings, ...data }))
      .finally(() => setLoading(false));
  }, []);

  const handleSave = async () => {
    setSaving(true);
    setSaved(false);
    await fetch("/api/admin/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(settings),
    });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const inputClass =
    "w-full px-3 py-2.5 bg-dark-200 border border-dark-300 focus:border-gold rounded-lg text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-all font-inter text-sm";
  const labelClass = "block text-sm font-medium text-gray-300 mb-1.5 font-inter";

  const set = (key: keyof Settings) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSettings((s) => ({ ...s, [key]: e.target.value }));
  };

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
        <h1 className="font-playfair text-3xl font-bold text-white">Ayarlar</h1>
        <p className="text-gray-500 text-sm mt-1 font-inter">
          Saytda göstərilən əlaqə məlumatlarını yeniləyin
        </p>
      </div>

      <div className="max-w-2xl space-y-6">
        {/* Contact info */}
        <div className="bg-dark-100 border border-gold/10 rounded-2xl p-6">
          <h2 className="font-playfair text-xl font-bold text-white mb-5">Əlaqə Məlumatları</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Telefon 1</label>
                <input type="tel" value={settings.phone1} onChange={set("phone1")} placeholder="+994 10 000 00 00" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Telefon 2</label>
                <input type="tel" value={settings.phone2} onChange={set("phone2")} placeholder="+994 70 000 00 00" className={inputClass} />
              </div>
            </div>
            <div>
              <label className={labelClass}>E-poçt</label>
              <input type="email" value={settings.email} onChange={set("email")} placeholder="email@domain.com" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Ünvan 1 (Bakı)</label>
              <textarea rows={2} value={settings.address1} onChange={set("address1")} className={`${inputClass} resize-none`} />
            </div>
            <div>
              <label className={labelClass}>Ünvan 2 (Ağdaş)</label>
              <textarea rows={2} value={settings.address2} onChange={set("address2")} className={`${inputClass} resize-none`} />
            </div>
          </div>
        </div>

        {/* Company info */}
        <div className="bg-dark-100 border border-gold/10 rounded-2xl p-6">
          <h2 className="font-playfair text-xl font-bold text-white mb-5">Şirkət Məlumatları</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Reyestr nömrəsi</label>
                <input type="text" value={settings.registry} onChange={set("registry")} placeholder="QT-0135" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>VÖEN</label>
                <input type="text" value={settings.voen} onChange={set("voen")} placeholder="3105651911" className={inputClass} />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-dark-100 border border-gold/10 rounded-2xl p-6">
          <h2 className="font-playfair text-xl font-bold text-white mb-5">Statistika (Saytda göstərilən)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className={labelClass}>Quruluş ili</label>
              <input type="text" value={settings.founded_year} onChange={set("founded_year")} placeholder="2010" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Müştərilər</label>
              <input type="text" value={settings.clients_count} onChange={set("clients_count")} placeholder="500+" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Layihələr</label>
              <input type="text" value={settings.projects_count} onChange={set("projects_count")} placeholder="1200+" className={inputClass} />
            </div>
          </div>
        </div>

        {/* Save button */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 px-6 py-3 bg-gold hover:bg-gold-dark disabled:opacity-60 text-white font-inter font-semibold rounded-xl transition-all"
          >
            {saving ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Saxlanır...
              </>
            ) : (
              "Saxla"
            )}
          </button>
          {saved && (
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-inter">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Saxlandı
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
