import Link from "next/link";
import { TiltCard } from "@/components/shared/TiltCard";
import { StaggerContainer, StaggerItem } from "@/components/shared/SectionReveal";
import { SectionReveal } from "@/components/shared/SectionReveal";

const serviceIcons: Record<string, React.ReactNode> = {
  truck: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
    </svg>
  ),
  building: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  briefcase: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  shield: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  star: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
};

interface Service {
  id: number;
  titleAz: string;
  descriptionAz: string;
  icon: string;
}

interface ServicesSectionProps {
  services: Service[];
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="py-28 bg-off-white relative overflow-hidden" id="xidmetler">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionReveal className="text-center mb-16">
          <span className="text-gold text-xs font-inter font-medium tracking-[0.3em] uppercase mb-3 block">
            Nə edirik
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark heading-underline-center mb-6">
            Xidmətlərimiz
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-inter">
            Azərbaycan Respublikasının qiymətləndirmə standartlarına uyğun, beynəlxalq
            metodologiya ilə hərtərəfli ekspertiza xidmətləri
          </p>
        </SectionReveal>

        {/* Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <StaggerItem key={service.id}>
              <TiltCard intensity={8} className="h-full">
                <div className="h-full bg-white border border-gold/15 hover:border-gold/40 rounded-2xl p-7 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(184,150,62,0.15)] group cursor-default">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gold/8 border border-gold/20 flex items-center justify-center text-gold mb-5 group-hover:bg-gold group-hover:text-white group-hover:border-gold transition-all duration-300">
                    {serviceIcons[service.icon] ?? serviceIcons.star}
                  </div>

                  {/* Number badge */}
                  <div className="text-gold/30 font-playfair text-5xl font-bold absolute top-5 right-6 leading-none select-none group-hover:text-gold/20 transition-colors">
                    0{i + 1}
                  </div>

                  <h3 className="font-playfair text-xl font-bold text-dark mb-3 leading-snug">
                    {service.titleAz}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-inter">
                    {service.descriptionAz}
                  </p>

                  <div className="mt-5 pt-5 border-t border-gold/10">
                    <Link
                      href="/xidmetler"
                      className="inline-flex items-center gap-1.5 text-gold text-sm font-medium hover:gap-2.5 transition-all duration-200"
                    >
                      Ətraflı oxu
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <SectionReveal className="text-center mt-12">
          <Link
            href="/xidmetler"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-white font-inter font-semibold rounded-full hover:bg-gold-dark transition-all duration-300 hover:shadow-gold hover:scale-105"
          >
            Bütün xidmətlər
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </SectionReveal>
      </div>
    </section>
  );
}
