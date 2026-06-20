import { db } from "@/lib/db";
import { formatDate } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const [newsCount, unreadCount, recentMessages] = await Promise.all([
    db.news.count(),
    db.contactMessage.count({ where: { read: false } }),
    db.contactMessage.findMany({
      orderBy: { createdAt: "desc" },
      take: 5,
    }),
  ]);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-playfair text-3xl font-bold text-white">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1 font-inter">Sayt statistikasına ümumi baxış</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
        <div className="bg-dark-100 border border-gold/10 hover:border-gold/25 rounded-2xl p-6 transition-all">
          <div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-4 bg-amber-500/10 border-amber-500/20 text-amber-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
          <div className="text-3xl font-playfair font-bold text-white mb-1">{unreadCount}</div>
          <div className="text-gray-500 text-sm font-inter">Oxunmamış mesajlar</div>
        </div>

        <div className="bg-dark-100 border border-gold/10 hover:border-gold/25 rounded-2xl p-6 transition-all">
          <div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-4 bg-blue-500/10 border-blue-500/20 text-blue-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
          <div className="text-3xl font-playfair font-bold text-white mb-1">{newsCount}</div>
          <div className="text-gray-500 text-sm font-inter">Ümumi xəbərlər</div>
        </div>
      </div>

      <div className="bg-dark-100 border border-gold/10 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-playfair text-xl font-bold text-white">Son Mesajlar</h2>
          <a href="/admin/mesajlar" className="text-gold text-sm font-inter hover:underline">
            Hamısı →
          </a>
        </div>
        <div className="space-y-3">
          {recentMessages.length === 0 ? (
            <p className="text-gray-600 text-sm font-inter text-center py-6">Mesaj yoxdur</p>
          ) : (
            recentMessages.map((msg) => (
              <div
                key={msg.id}
                className="flex items-start gap-3 p-4 bg-dark-200 rounded-xl border border-dark-300"
              >
                <div
                  className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                    msg.read ? "bg-gray-600" : "bg-gold animate-pulse"
                  }`}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-inter font-medium text-sm truncate">
                      {msg.name}
                    </span>
                    <span className="text-gray-600 text-xs shrink-0">
                      {formatDate(msg.createdAt)}
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs mt-0.5 truncate">{msg.phone}</p>
                  <p className="text-gray-400 text-xs mt-1 truncate">{msg.message}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
