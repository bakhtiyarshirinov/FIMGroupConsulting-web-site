"use client";

import { useState } from "react";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Xəta baş verdi. Yenidən cəhd edin.");
      }

      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Xəta baş verdi. Yenidən cəhd edin.");
    }
  };

  const inputClass =
    "w-full px-4 py-3 bg-off-white border border-gold/15 rounded-xl text-dark placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all duration-200 font-inter text-sm";
  const labelClass = "block text-sm font-medium text-gray-600 mb-2 font-inter";

  if (status === "success") {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-500 mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-playfair text-2xl font-bold text-dark mb-2">
          Mesajınız göndərildi
        </h3>
        <p className="text-gray-500 font-inter mb-6">
          Mesajınız göndərildi. Tezliklə sizinlə əlaqə saxlayacağıq.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-gold hover:text-gold-dark font-inter text-sm underline underline-offset-2 transition-colors"
        >
          Yeni mesaj göndər
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} htmlFor="name">
            Ad Soyad *
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            placeholder="Adınızı daxil edin"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Telefon nömrəsi *
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            placeholder="+994 __ ___ __ __"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="email">
          E-poçt
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          placeholder="email@example.com"
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="message">
          Mesajınız *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          placeholder="Sualınızı, ya da əməkdaşlıq təklifinizi yazın..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <div className="px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm font-inter">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gold hover:bg-gold-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-inter font-semibold rounded-xl transition-all duration-300 hover:shadow-gold"
      >
        {status === "loading" ? "Göndərilir..." : "Göndər"}
      </button>

      <p className="text-center text-gray-400 text-xs font-inter">
        * Məcburi sahələr. Məlumatlarınız üçüncü tərəflərlə paylaşılmır.
      </p>
    </form>
  );
}
