import type { Metadata } from "next";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/shared/SectionReveal";
import { StatsCounter } from "@/components/shared/StatsCounter";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Haqqımızda",
  description: "FİM GROUP CONSULTİNG MMC haqqında — şirkətin tarixi, missiyası və rəsmi qeydiyyat məlumatları",
};

const team = [
  {
    name: "Fəqan Səfərəliyev",
    role: "Təsisçi / Direktor",
    photo: "/team/sahin.jpg",
    objectPosition: "center top",
  },
  {
    name: "Beydullayev Elnur",
    role: "Nümayəndə",
    photo: "/team/elnur.jpg",
    objectPosition: "center top",
  },
  
];



export default function HaqqimizdaPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(184,150,62,0.08)_0%,transparent_100%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="text-gold text-xs font-inter font-medium tracking-[0.3em] uppercase mb-4 block">
            Kim olduğumuzu tanıyın
          </span>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
            Haqqımızda
          </h1>
          <p className="text-gray-400 text-xl font-inter max-w-2xl mx-auto">
           Qiymətləndirmə sahəsində etibarlı tərəfdaşınız
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <span className="text-gold text-xs font-inter font-medium tracking-[0.3em] uppercase mb-3 block">Missiyamız</span>
              <h2 className="font-playfair text-4xl font-bold text-dark heading-underline mb-6">
                Peşəkarlıq və Etibarlılıq
              </h2>
              <div className="space-y-4 text-gray-600 font-inter leading-relaxed">
                <p>
                  <strong className="text-gold">FİM GROUP CONSULTİNG MMC</strong> — Azərbaycanda qiymətləndirmə
                  fəaliyyəti sahəsindəki lider şirkətlərdən biri olaraq, 14 il ərzində yüzlərcə
                  müştəriyə etibarlı ekspertiza xidmətləri göstərmişdir.
                </p>
                <p>
                  Bizim missiyamız — hər bir müştəriyə dürüst, obyektiv və beynəlxalq standartlara
                  tam uyğun qiymətləndirmə xidməti göstərməkdir. Məhkəmə, bank, sığorta və
                  investisiya prosedurlarında etibarlı ekspert rəyləri hazırlayırıq.
                </p>
                <p>
                  Akkreditasiya olunmuş mütəxəssislərimiz daşınar, daşınmaz əmlak,
                  müəssisə dəyərinin müəyyənləşdirilməsi və qeyri-maddi aktivlər sahəsində
                  dərin təcrübəyə malikdir.
                </p>
              </div>
            </SectionReveal>

            {/* Stats */}
            <StaggerContainer className="grid grid-cols-2 gap-4">
              {[
                { value: 14, suffix: "+", label: "İllik Təcrübə" },
                { value: 500, suffix: "+", label: "Müştərilər" },
                { value: 1200, suffix: "+", label: "Layihələr" },
                { value: 5, suffix: "", label: "Xidmət Sahəsi" },
              ].map((s) => (
                <StaggerItem key={s.label}>
                  <div className="bg-white border border-gold/15 rounded-2xl p-6 text-center hover:border-gold/30 hover:shadow-[0_8px_30px_rgba(184,150,62,0.1)] transition-all">
                    <div className="font-playfair text-4xl font-bold text-gold-gradient mb-2">
                      <StatsCounter value={s.value} suffix={s.suffix} />
                    </div>
                    <div className="text-dark font-inter text-sm font-medium">{s.label}</div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Registry + Legal */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-white heading-underline-center mb-4">
              Rəsmi Məlumatlar
            </h2>
            <p className="text-gray-400 font-inter">Hüquqi şəxs statusuna dair rəsmi qeydiyyat məlumatları</p>
          </SectionReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { label: "Şirkətin adı", value: "FİM GROUP CONSULTİNG MMC", icon: "🏢" },
              { label: "Reyestr nömrəsi", value: "QT-0135", icon: "📋" },
              { label: "VÖEN", value: "3105651911", icon: "🔢" },
              { label: "Baş ofis", value: "AZ1033, Bakı, Nərimanov r., Məmməd Araz 20", icon: "📍" },
              { label: "Ağdaş filialı", value: "Ağdaş r., Y. Nəbiyev küçəsi 7/6", icon: "📍" },
              { label: "E-poçt", value: "fimgroupcounsulting@bk.ru", icon: "✉️" },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <div className="glass border border-gold/15 rounded-xl p-5 hover:border-gold/30 transition-colors">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-gray-500 text-xs font-inter mb-1">{item.label}</div>
                  <div className="text-gold font-inter font-medium text-sm">{item.value}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
     

      {/* Team */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-white heading-underline-center mb-4">
              Komandamız
            </h2>
            <p className="text-gray-400 font-inter">Peşəkar mütəxəssislərdən ibarət komanda</p>
          </SectionReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <div className="glass border border-gold/15 rounded-2xl p-6 text-center hover:border-gold/35 transition-all duration-300 hover:shadow-gold-sm group">
                  {/* Photo */}
                  <div className="relative w-28 h-28 mx-auto mb-5 rounded-2xl overflow-hidden border-2 border-gold/25 group-hover:border-gold/50 transition-all duration-300">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover"
                      style={{ objectPosition: member.objectPosition }}
                      sizes="112px"
                    />
                    {/* Subtle gold overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  {/* Name */}
                  <div className="font-playfair text-gold font-bold text-lg leading-snug mb-1">
                    {member.name}
                  </div>
                  {/* Title */}
                  <div className="text-gray-400 text-sm font-inter">{member.role}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-off-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionReveal>
            <h2 className="font-playfair text-3xl font-bold text-dark mb-4">
              Bizimlə işləmək istəyirsiniz?
            </h2>
            <p className="text-gray-500 mb-6 font-inter">
              Əlaqə formu vasitəsilə sorğunuzu göndərin
            </p>
            <Link
              href="/elaqe"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-white font-inter font-semibold rounded-full hover:bg-gold-dark hover:shadow-gold hover:scale-105 transition-all duration-300"
            >
              Bizimlə Əlaqə
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
