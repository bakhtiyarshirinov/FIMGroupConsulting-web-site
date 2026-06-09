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
        const data = await res.json();
        throw new Error(data.error ?? "Xəta baş verdi");
      }

      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Xəta baş verdi");
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
          Müraciətiniz göndərildi!
        </h3>
        <p className="text-gray-500 font-inter mb-6">
          24 saat ərzində sizinlə əlaqə saxlayacağıq.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-gold hover:text-gold-dark font-inter text-sm underline underline-offset-2 transition-colors"
        >
          Yeni müraciət göndər
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
            Telefon *
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
          Mesaj *
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
        {status === "loading" ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Göndərilir...
          </>
        ) : (
          <>
            Müraciəti Göndər
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </>
        )}
      </button>

      <p className="text-center text-gray-400 text-xs font-inter">
        * Məcburi sahələr. Məlumatlarınız üçüncü tərəflərlə paylaşılmır.
      </p>
    </form>
  );
}
