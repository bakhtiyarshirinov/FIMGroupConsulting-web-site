"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AdminLoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Giriş uğursuz oldu");
      }

      router.push("/admin/dashboard");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Xəta baş verdi");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(184,150,62,0.06)_0%,transparent_100%)]" />

      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <Image
            src="/logo.svg"
            alt="FİM GROUP CONSULTİNG"
            width={200}
            height={55}
            className="h-12 w-auto mx-auto mb-4"
          />
          <p className="text-gray-500 text-sm font-inter">Admin Panel</p>
        </div>

        <div className="glass border border-gold/20 rounded-2xl p-8">
          <h1 className="font-playfair text-2xl font-bold text-white mb-2">Giriş</h1>
          <p className="text-gray-500 text-sm font-inter mb-8">
            Admin panelinə daxil olmaq üçün məlumatlarınızı daxil edin
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2 font-inter">
                İstifadəçi adı
              </label>
              <input
                type="text"
                required
                value={form.username}
                onChange={(e) => setForm((f) => ({ ...f, username: e.target.value }))}
                placeholder="admin"
                className="w-full px-4 py-3 bg-dark-200 border border-dark-300 hover:border-gold/30 focus:border-gold rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gold/10 transition-all font-inter text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2 font-inter">
                Şifrə
              </label>
              <input
                type="password"
                required
                value={form.password}
                onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-dark-200 border border-dark-300 hover:border-gold/30 focus:border-gold rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gold/10 transition-all font-inter text-sm"
              />
            </div>

            {error && (
              <div className="px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm font-inter">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gold hover:bg-gold-dark disabled:opacity-60 text-white font-inter font-semibold rounded-xl transition-all duration-300 hover:shadow-gold"
            >
              {loading ? "Giriş edilir..." : "Daxil ol"}
            </button>
          </form>
        </div>

        <p className="text-center text-gray-600 text-xs font-inter mt-6">
          FİM GROUP CONSULTİNG MMC © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
