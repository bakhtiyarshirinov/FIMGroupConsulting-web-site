import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/shared/SectionReveal";

const advantages = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Hüquqi Etibarlılıq",
    desc: "Ekspert rəylərimiz məhkəmə, bank, sığorta və dövlət qurumları tərəfindən qəbul edilir. Tam hüquqi qüvvəyə malik sənədlər.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Sürətli İcra",
    desc: "Standart qiymətləndirmə işləri 3-5 iş günü ərzində tamamlanır. Təcili hallarda 24 saat ərzində xidmət göstəririk.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Beynəlxalq Standartlar",
    desc: "IVS (Beynəlxalq Qiymətləndirmə Standartları) və IFRS normalarına uyğun metodologiya tətbiq edirik.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Peşəkar Komanda",
    desc: "Akkreditasiya olunmuş qiymətləndiricilər, iqtisadçılar, mühəndislər və hüquqşünaslardan ibarət güclü komanda.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Ölkəmiqyaslı Əhatə",
    desc: "Bakı baş ofisi və regionlarda şöbələrimiz vasitəsilə bütün Azərbaycanda xidmət göstəririk.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Şəffaf Qiymətlər",
    desc: "İş öncəsindən dəqiq qiymət smetası. Gizli ödənişlər yox. Müqavilədə göstərilən məbləğdən artıq tələb etmirik.",
  },
];

export function WhyUsSection() {
  return (
    <section className="py-28 bg-off-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center mb-16">
          <span className="text-gold text-xs font-inter font-medium tracking-[0.3em] uppercase mb-3 block">
            Üstünlüklərimiz
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark heading-underline-center mb-6">
            Niyə Bizi Seçirsiniz?
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-inter">
            14 illik təcrübə, peşəkar komanda və müştəri məmnuniyyətinə bağlılığımız
            bizi bazarda fərqli edir
          </p>
        </SectionReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv) => (
            <StaggerItem key={adv.title}>
              <div className="group bg-white border border-gold/10 hover:border-gold/30 rounded-2xl p-7 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(184,150,62,0.12)] h-full">
                <div className="w-12 h-12 rounded-xl bg-gold/8 border border-gold/20 flex items-center justify-center text-gold mb-5 group-hover:bg-gold group-hover:text-white group-hover:border-gold transition-all duration-300">
                  {adv.icon}
                </div>
                <h3 className="font-playfair text-lg font-bold text-dark mb-3">
                  {adv.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-inter">
                  {adv.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
