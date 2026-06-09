import Link from "next/link";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/shared/SectionReveal";

const contactItems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
      </svg>
    ),
    label: "Baş Ofis",
    value: "AZ1033, Bakı, Nərimanov r., Məmməd Araz 20 (AP Plaza)",
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
    label: "Telefon",
    value: "+994 10 237 23 24 / +994 70 230 23 38",
    href: "tel:+994102372324",
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
];

export function ContactSection() {
  return (
    <section className="py-28 bg-dark relative overflow-hidden" id="elaqe">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(184,150,62,0.05)_0%,transparent_100%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <SectionReveal>
              <span className="text-gold text-xs font-inter font-medium tracking-[0.3em] uppercase mb-3 block">
                Bizimlə əlaqə
              </span>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white heading-underline mb-8">
                Əlaqə Məlumatları
              </h2>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <p className="text-gray-400 text-lg leading-relaxed mb-10 font-inter">
                Hər hansı sualınız varsa, bizə müraciət edin. Mütəxəssislərimiz
                ən qısa müddətdə sizinlə əlaqə saxlayacaq.
              </p>
            </SectionReveal>

            <StaggerContainer className="space-y-4">
              {contactItems.map((item) => (
                <StaggerItem key={item.label}>
                  <div className="glass border border-gold/15 rounded-xl p-5 flex items-start gap-4 hover:border-gold/30 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs font-inter mb-1">{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-white hover:text-gold text-sm font-inter transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white text-sm font-inter">{item.value}</p>
                      )}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Right: Map + CTA */}
          <SectionReveal delay={0.2} direction="left">
            <div className="glass border border-gold/15 rounded-2xl overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=AP+Plaza+Baku+Narimanov&output=embed&z=15"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FİM GROUP CONSULTİNG ünvanı"
              />
              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold text-white mb-2">
                  Formu doldurun
                </h3>
                <p className="text-gray-400 text-sm mb-5">
                  Sualınızı göndərin, 24 saat ərzində cavab alın.
                </p>
                <Link
                  href="/elaqe"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold hover:bg-gold-dark text-white font-inter font-semibold rounded-xl transition-all duration-300 hover:shadow-gold"
                >
                  Müraciət formu
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
