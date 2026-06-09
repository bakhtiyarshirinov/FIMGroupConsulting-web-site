import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/shared/SectionReveal";
import { StatsCounter } from "@/components/shared/StatsCounter";

const stats = [
  { value: 14, suffix: "+", label: "İllik Təcrübə", sublabel: "Years of Excellence" },
  { value: 500, suffix: "+", label: "Müştərilər", sublabel: "Satisfied Clients" },
  { value: 1200, suffix: "+", label: "Layihələr", sublabel: "Completed Projects" },
  { value: 5, suffix: "", label: "Xidmət sahəsi", sublabel: "Service Areas" },
];

export function AboutSection() {
  return (
    <section className="py-28 bg-dark relative overflow-hidden" id="haqqimizda">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(184,150,62,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[radial-gradient(circle,rgba(184,150,62,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <div>
            <SectionReveal>
              <span className="text-gold text-xs font-inter font-medium tracking-[0.3em] uppercase mb-3 block">
                Biz kimik
              </span>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white heading-underline mb-8">
                Haqqımızda
              </h2>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 font-inter">
                <strong className="text-gold">FİM GROUP CONSULTİNG MMC</strong> — 2010-cu ildən Azərbaycanda fəaliyyət göstərən
                peşəkar qiymətləndirmə şirkətidir. Biz daşınar və daşınmaz əmlak, müəssisə,
                qeyri-maddi aktivlər sahəsində etibarlı ekspertiza xidmətləri göstəririk.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6 font-inter">
                Şirkətimiz Azərbaycan Respublikasının qiymətləndirmə fəaliyyətinə dair
                qanunvericiliyinə tam uyğun işləyir. Qiymətləndiricilər Palatası tərəfindən
                akkreditasiya almış mütəxəssislərimiz beynəlxalq standartlar (IVS, IFRS)
                əsasında ekspertiza aparırlar.
              </p>
              <p className="text-gray-400 leading-relaxed font-inter">
                Hər bir müştərimizə fərdi yanaşma, şəffaf prosedur və zamanında
                hazırlanan rəsmi ekspert rəyi təqdim edirik.
              </p>
            </SectionReveal>

            {/* Registry info */}
            <SectionReveal delay={0.2} className="mt-8">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Reyestr nömrəsi", value: "QT-0135" },
                  { label: "VÖEN", value: "3105651911" },
                  { label: "Ünvan (Bakı)", value: "Nərimanov r., Məmməd Araz 20" },
                  { label: "Ünvan (Ağdaş)", value: "Y. Nəbiyev küçəsi 7/6" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="glass rounded-xl p-4 border border-gold/15"
                  >
                    <div className="text-gray-500 text-xs font-inter mb-1">{item.label}</div>
                    <div className="text-gold text-sm font-medium font-inter">{item.value}</div>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>

          {/* Right: Stats */}
          <div>
            <StaggerContainer className="grid grid-cols-2 gap-5">
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="glass border border-gold/15 rounded-2xl p-7 text-center hover:border-gold/30 transition-all duration-300 hover:shadow-gold-sm group">
                    <div className="font-playfair text-5xl font-bold text-gold-gradient mb-2">
                      <StatsCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-white font-inter font-medium text-sm mb-1">
                      {stat.label}
                    </div>
                    <div className="text-gray-600 text-xs font-inter tracking-wide">
                      {stat.sublabel}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Certification badge */}
            <SectionReveal delay={0.3} className="mt-5">
              <div className="glass border border-gold/20 rounded-2xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-inter font-medium text-sm">
                    Akkreditasiya olunmuş qiymətləndiricilər
                  </div>
                  <div className="text-gray-500 text-xs mt-0.5">
                    Azərbaycan Qiymətləndiricilər Palatası · IVS Standartları
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
