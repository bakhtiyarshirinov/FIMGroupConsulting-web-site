import type { Metadata } from "next";
import { db } from "@/lib/db";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/shared/SectionReveal";
import { TiltCard } from "@/components/shared/TiltCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Xidmətlər",
  description: "FİM GROUP CONSULTİNG MMC-nin qiymətləndirmə xidmətləri: daşınar, daşınmaz əmlak, müəssisə, zərər və qeyri-maddi aktivlər",
};

const iconMap: Record<string, React.ReactNode> = {
  truck: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
    </svg>
  ),
  building: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  briefcase: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  shield: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  star: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
};

const bullets: Record<string, string[]> = {
  truck: ["Maşın və avadanlıqlar", "Nəqliyyat vasitələri", "Heyvanlar və bitkilər", "Texnoloji avadanlıqlar", "İstehsal xətləri"],
  building: ["Mənzil və evlər", "Torpaq sahələri", "Kommersiya obyektləri", "Sənaye binaları", "Tikinti layihələri"],
  briefcase: ["Kiçik və orta müəssisələr", "Holdinq şirkətləri", "Startaplar", "Birləşmə öncəsi qiymətləndirmə", "M&A əməliyyatları"],
  shield: ["Yanğın, su və digər zərər", "Əldən çıxmış mənfəət", "Sahibkarlıq riskləri", "Sığorta tələbləri", "Məhkəmə ekspertizası"],
  star: ["Patentlər və lisenziyalar", "Ticarət nişanları", "Qiymətli kağızlar", "Pay iştirakı", "Proqram təminatı"],
};

export default async function XidmetlerPage() {
  const services = await db.service.findMany({
    where: { visible: true },
    orderBy: { order: "asc" },
  });

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(184,150,62,0.08)_0%,transparent_100%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="text-gold text-xs font-inter font-medium tracking-[0.3em] uppercase mb-4 block">
            Nə edirik
          </span>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
            Xidmətlərimiz
          </h1>
          <p className="text-gray-400 text-xl font-inter max-w-2xl mx-auto">
            Azərbaycan Qiymətləndiricilər Palatasının tələblərinə uyğun,
            beynəlxalq standartlarda peşəkar ekspertiza
          </p>
        </div>
      </section>

      {/* Services detail */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="space-y-8">
            {services.map((service, i) => (
              <StaggerItem key={service.id}>
                <TiltCard intensity={4}>
                  <div className="bg-white border border-gold/15 hover:border-gold/35 rounded-2xl p-8 md:p-10 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(184,150,62,0.12)]">
                    <div className="flex flex-col md:flex-row gap-8">
                      {/* Icon + number */}
                      <div className="shrink-0">
                        <div className="relative w-20 h-20 rounded-2xl bg-gold/8 border border-gold/20 flex items-center justify-center text-gold">
                          {iconMap[service.icon] ?? iconMap.star}
                          <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gold text-white text-xs font-bold flex items-center justify-center font-playfair">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h2 className="font-playfair text-2xl md:text-3xl font-bold text-dark mb-4">
                          {service.titleAz}
                        </h2>
                        {service.titleRu && (
                          <p className="text-gray-400 text-sm italic mb-4">{service.titleRu}</p>
                        )}
                        <p className="text-gray-600 leading-relaxed mb-6 font-inter">
                          {service.descriptionAz}
                        </p>

                        {/* Bullet points */}
                        {bullets[service.icon] && (
                          <div>
                            <h3 className="text-dark font-inter font-semibold text-sm mb-3 uppercase tracking-wide">
                              Əhatə dairəsi:
                            </h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {bullets[service.icon].map((b) => (
                                <li key={b} className="flex items-center gap-2 text-gray-500 text-sm font-inter">
                                  <svg className="w-4 h-4 text-gold shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                  {b}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionReveal>
            <h2 className="font-playfair text-4xl font-bold text-white mb-4">
              Xidmət sifariş etmək istəyirsiniz?
            </h2>
            <p className="text-gray-400 text-lg mb-8 font-inter">
              Bizimlə əlaqə saxlayın, mütəxəssislərimiz sizə kömək etsin
            </p>
            <Link
              href="/elaqe"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold hover:bg-gold-dark text-white font-inter font-semibold rounded-full transition-all duration-300 hover:shadow-gold hover:scale-105"
            >
              Müraciət et
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
