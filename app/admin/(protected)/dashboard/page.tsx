import { db } from "@/lib/db";
import { formatDate } from "@/lib/utils";

export default async function AdminDashboardPage() {
  const [newsCount, messagesCount, unreadCount, servicesCount, recentMessages, recentNews] =
    await Promise.all([
      db.news.count(),
      db.contactMessage.count(),
      db.contactMessage.count({ where: { read: false } }),
      db.service.count(),
      db.contactMessage.findMany({
        orderBy: { createdAt: "desc" },
        take: 5,
      }),
      db.news.findMany({
        orderBy: { createdAt: "desc" },
        take: 5,
      }),
    ]);

  const stats = [
    {
      label: "Ümumi Xəbərlər",
      value: newsCount,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
      color: "text-blue-400",
      bg: "bg-blue-500/10 border-blue-500/20",
    },
    {
      label: "Ümumi Mesajlar",
      value: messagesCount,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/20",
    },
    {
      label: "Oxunmamış Mesajlar",
      value: unreadCount,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      color: "text-amber-400",
      bg: "bg-amber-500/10 border-amber-500/20",
    },
    {
      label: "Xidmətlər",
      value: servicesCount,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      color: "text-gold",
      bg: "bg-gold/10 border-gold/20",
    },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-playfair text-3xl font-bold text-white">İdarə Paneli</h1>
        <p className="text-gray-500 text-sm mt-1 font-inter">Sayt statistikasına ümumi baxış</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-5 mb-10">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-dark-100 border border-gold/10 hover:border-gold/25 rounded-2xl p-6 transition-all"
          >
            <div
              className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 ${s.bg} ${s.color}`}
            >
              {s.icon}
            </div>
            <div className="text-3xl font-playfair font-bold text-white mb-1">{s.value}</div>
            <div className="text-gray-500 text-sm font-inter">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent messages */}
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

        {/* Recent news */}
        <div className="bg-dark-100 border border-gold/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-playfair text-xl font-bold text-white">Son Xəbərlər</h2>
            <a href="/admin/xeberler" className="text-gold text-sm font-inter hover:underline">
              Hamısı →
            </a>
          </div>
          <div className="space-y-3">
            {recentNews.length === 0 ? (
              <p className="text-gray-600 text-sm font-inter text-center py-6">Xəbər yoxdur</p>
            ) : (
              recentNews.map((article) => (
                <div
                  key={article.id}
                  className="flex items-start gap-3 p-4 bg-dark-200 rounded-xl border border-dark-300"
                >
                  <div
                    className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                      article.published ? "bg-emerald-500" : "bg-gray-600"
                    }`}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-white font-inter font-medium text-sm truncate">
                      {article.titleAz}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-gray-500 text-xs">{formatDate(article.createdAt)}</span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          article.published
                            ? "bg-emerald-500/10 text-emerald-400"
                            : "bg-gray-500/10 text-gray-500"
                        }`}
                      >
                        {article.published ? "Yayımlanıb" : "Qaralama"}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
