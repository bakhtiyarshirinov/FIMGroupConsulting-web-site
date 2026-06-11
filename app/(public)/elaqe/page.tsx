import type { Metadata } from "next";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/shared/SectionReveal";

export const metadata: Metadata = {
  title: "Əlaqə",
  description: "FİM GROUP CONSULTİNG MMC ilə əlaqə saxlayın. Bakı və Ağdaş ofislərimiz.",
};

export default function ElaqePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(184,150,62,0.08)_0%,transparent_100%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="text-gold text-xs font-inter font-medium tracking-[0.3em] uppercase mb-4 block">
            Bizimlə danışın
          </span>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
            Əlaqə
          </h1>
          <p className="text-gray-400 text-xl font-inter max-w-2xl mx-auto">
            Sualınız var? Aşağıdakı məlumatlar vasitəsilə bizimlə əlaqə saxlayın
          </p>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-20 bg-off-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="font-playfair text-3xl font-bold text-dark heading-underline mb-8">
              Əlaqə Məlumatları
            </h2>
          </SectionReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                ),
                label: "Baş Ofis — Bakı",
                value: "AZ1033, Bakı şəhəri, Nərimanov rayonu, Məmməd Araz 20 (AP Plaza)",
                href: null,
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                ),
                label: "Ağdaş Filialı",
                value: "Ağdaş rayonu, Yusif Nəbiyev küçəsi 7/6",
                href: null,
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                ),
                label: "Telefon 1",
                value: "+994 10 237 23 24",
                href: "tel:+994102372324",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                ),
                label: "Telefon 2",
                value: "+994 70 230 23 38",
                href: "tel:+994702302338",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                ),
                label: "E-poçt",
                value: "fimgroupcounsulting@bk.ru",
                href: "mailto:fimgroupcounsulting@bk.ru",
              },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <div className="bg-white border border-gold/15 rounded-xl p-5 flex items-start gap-4 hover:border-gold/30 hover:shadow-[0_4px_20px_rgba(184,150,62,0.08)] transition-all">
                  <div className="w-10 h-10 rounded-lg bg-gold/8 border border-gold/20 flex items-center justify-center text-gold shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs font-inter mb-0.5">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-dark hover:text-gold text-sm font-inter transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-dark text-sm font-inter">{item.value}</p>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Map */}
      <section className="bg-off-white pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="rounded-2xl overflow-hidden border border-gold/15 shadow-[0_10px_40px_rgba(184,150,62,0.1)]">
              <iframe
                src="https://maps.google.com/maps?q=Narimanov+district+Baku+Azerbaijan&output=embed&z=14"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FİM GROUP CONSULTİNG ünvanı xəritəsi"
              />
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
