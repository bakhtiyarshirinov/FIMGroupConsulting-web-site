"use client";

import { useEffect, useState } from "react";
import { formatDate } from "@/lib/utils";

interface Message {
  id: number;
  name: string;
  email: string | null;
  phone: string;
  message: string;
  read: boolean;
  createdAt: string;
}

type Filter = "all" | "unread" | "read";

export default function AdminMesajlarPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<Filter>("all");

  const fetchMessages = async () => {
    const res = await fetch("/api/admin/messages");
    setMessages(await res.json());
    setLoading(false);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleToggleRead = async (msg: Message) => {
    await fetch("/api/admin/messages", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: msg.id, read: !msg.read }),
    });
    setMessages((m) => m.map((x) => (x.id === msg.id ? { ...x, read: !x.read } : x)));
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Silmək istədiyinizə əminsiniz?")) return;
    await fetch("/api/admin/messages", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setMessages((m) => m.filter((x) => x.id !== id));
  };

  const filtered = messages.filter((m) => {
    if (filter === "unread") return !m.read;
    if (filter === "read") return m.read;
    return true;
  });

  const unread = messages.filter((m) => !m.read).length;

  if (loading) {
    return (
      <div className="p-8 flex items-center justify-center h-64">
        <div className="text-gray-500 font-inter">Yüklənir...</div>
      </div>
    );
  }

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: "Hamısı" },
    { key: "unread", label: "Oxunmamış" },
    { key: "read", label: "Oxunmuş" },
  ];

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-playfair text-3xl font-bold text-white">Mesajlar</h1>
          <p className="text-gray-500 text-sm mt-1 font-inter">
            {messages.length} mesaj · {unread} oxunmamış
          </p>
        </div>
        <div className="flex items-center gap-2 bg-dark-100 border border-gold/10 rounded-xl p-1">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-4 py-2 text-sm font-inter rounded-lg transition-all ${
                filter === f.key
                  ? "bg-gold text-dark font-semibold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-dark-100 border border-gold/10 rounded-2xl overflow-hidden">
        {filtered.length === 0 ? (
          <div className="p-12 text-center text-gray-600 font-inter">Mesaj yoxdur</div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b border-dark-300">
                <th className="text-left px-6 py-4 text-gray-500 text-xs font-inter font-medium uppercase tracking-wide">Ad</th>
                <th className="text-left px-6 py-4 text-gray-500 text-xs font-inter font-medium uppercase tracking-wide">Telefon</th>
                <th className="text-left px-6 py-4 text-gray-500 text-xs font-inter font-medium uppercase tracking-wide hidden md:table-cell">E-poçt</th>
                <th className="text-left px-6 py-4 text-gray-500 text-xs font-inter font-medium uppercase tracking-wide">Mesaj</th>
                <th className="text-left px-6 py-4 text-gray-500 text-xs font-inter font-medium uppercase tracking-wide hidden md:table-cell">Tarix</th>
                <th className="text-left px-6 py-4 text-gray-500 text-xs font-inter font-medium uppercase tracking-wide">Status</th>
                <th className="px-6 py-4" />
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-300">
              {filtered.map((msg) => (
                <tr
                  key={msg.id}
                  onClick={() => !msg.read && handleToggleRead(msg)}
                  className="hover:bg-dark-200 transition-colors cursor-pointer"
                >
                  <td className="px-6 py-4 text-white text-sm font-inter">{msg.name}</td>
                  <td className="px-6 py-4 text-gray-400 text-sm font-inter">{msg.phone}</td>
                  <td className="px-6 py-4 text-gray-400 text-sm font-inter hidden md:table-cell">
                    {msg.email ?? "—"}
                  </td>
                  <td className="px-6 py-4 text-gray-400 text-sm font-inter max-w-xs truncate">
                    {msg.message}
                  </td>
                  <td className="px-6 py-4 text-gray-500 text-sm font-inter hidden md:table-cell">
                    {formatDate(msg.createdAt)}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`text-xs px-3 py-1 rounded-full border ${
                        msg.read
                          ? "bg-gray-500/10 text-gray-500 border-gray-500/20"
                          : "bg-gold/10 text-gold border-gold/20"
                      }`}
                    >
                      {msg.read ? "Oxunmuş" : "Oxunmamış"}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(msg.id);
                      }}
                      className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all"
                      title="Sil"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
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
