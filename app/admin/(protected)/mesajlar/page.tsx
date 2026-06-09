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

export default function AdminMesajlarPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Message | null>(null);

  const fetchMessages = async () => {
    const res = await fetch("/api/admin/messages");
    setMessages(await res.json());
    setLoading(false);
  };

  useEffect(() => { fetchMessages(); }, []);

  const handleRead = async (msg: Message) => {
    await fetch(`/api/admin/messages/${msg.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ read: !msg.read }),
    });
    setMessages((m) => m.map((x) => (x.id === msg.id ? { ...x, read: !x.read } : x)));
    if (selected?.id === msg.id) setSelected({ ...msg, read: !msg.read });
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Bu mesajı silmək istəyirsiniz?")) return;
    await fetch(`/api/admin/messages/${id}`, { method: "DELETE" });
    setMessages((m) => m.filter((x) => x.id !== id));
    if (selected?.id === id) setSelected(null);
  };

  const unread = messages.filter((m) => !m.read).length;

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
        <h1 className="font-playfair text-3xl font-bold text-white">Mesajlar</h1>
        <p className="text-gray-500 text-sm mt-1 font-inter">
          {messages.length} mesaj · {unread} oxunmamış
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-6 h-[calc(100vh-200px)]">
        {/* List */}
        <div className="lg:col-span-2 bg-dark-100 border border-gold/10 rounded-2xl overflow-hidden flex flex-col">
          <div className="p-4 border-b border-dark-300">
            <div className="text-gray-400 text-xs font-inter uppercase tracking-wide">
              Mesaj Siyahısı
            </div>
          </div>
          <div className="flex-1 overflow-y-auto divide-y divide-dark-300">
            {messages.length === 0 ? (
              <div className="p-8 text-center text-gray-600 font-inter text-sm">
                Mesaj yoxdur
              </div>
            ) : (
              messages.map((msg) => (
                <button
                  key={msg.id}
                  onClick={() => {
                    setSelected(msg);
                    if (!msg.read) handleRead(msg);
                  }}
                  className={`w-full text-left p-4 hover:bg-dark-200 transition-colors ${
                    selected?.id === msg.id ? "bg-dark-200 border-l-2 border-gold" : ""
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                        msg.read ? "bg-gray-700" : "bg-gold"
                      }`}
                    />
                    <div className="flex-1 min-w-0">
                      <div className={`text-sm font-inter truncate ${msg.read ? "text-gray-400" : "text-white font-medium"}`}>
                        {msg.name}
                      </div>
                      <div className="text-gray-600 text-xs truncate mt-0.5">{msg.phone}</div>
                      <div className="text-gray-500 text-xs mt-1 truncate">{msg.message}</div>
                      <div className="text-gray-700 text-xs mt-1">{formatDate(msg.createdAt)}</div>
                    </div>
                  </div>
                </button>
              ))
            )}
          </div>
        </div>

        {/* Detail */}
        <div className="lg:col-span-3 bg-dark-100 border border-gold/10 rounded-2xl overflow-hidden flex flex-col">
          {selected ? (
            <>
              <div className="p-6 border-b border-dark-300 flex items-center justify-between">
                <div>
                  <h2 className="font-playfair text-xl font-bold text-white">{selected.name}</h2>
                  <p className="text-gray-500 text-sm mt-0.5">{formatDate(selected.createdAt)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleRead(selected)}
                    className="px-3 py-1.5 bg-dark-200 hover:bg-dark-300 border border-dark-300 text-gray-300 text-xs font-inter rounded-lg transition-all"
                  >
                    {selected.read ? "Oxunmamış et" : "Oxunmuş et"}
                  </button>
                  <button
                    onClick={() => handleDelete(selected.id)}
                    className="px-3 py-1.5 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-400 text-xs font-inter rounded-lg transition-all"
                  >
                    Sil
                  </button>
                </div>
              </div>
              <div className="p-6 space-y-4 flex-1 overflow-y-auto">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-dark-200 rounded-xl p-4">
                    <div className="text-gray-500 text-xs mb-1">Telefon</div>
                    <a href={`tel:${selected.phone}`} className="text-gold text-sm font-inter hover:underline">
                      {selected.phone}
                    </a>
                  </div>
                  {selected.email && (
                    <div className="bg-dark-200 rounded-xl p-4">
                      <div className="text-gray-500 text-xs mb-1">E-poçt</div>
                      <a href={`mailto:${selected.email}`} className="text-gold text-sm font-inter hover:underline truncate block">
                        {selected.email}
                      </a>
                    </div>
                  )}
                </div>
                <div className="bg-dark-200 rounded-xl p-4">
                  <div className="text-gray-500 text-xs mb-2">Mesaj</div>
                  <p className="text-white text-sm font-inter leading-relaxed whitespace-pre-wrap">
                    {selected.message}
                  </p>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-12 h-12 text-gray-700 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-600 text-sm font-inter">Mesaj seçin</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
