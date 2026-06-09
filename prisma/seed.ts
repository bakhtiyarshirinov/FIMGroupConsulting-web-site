import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Settings
  const settings = [
    { key: "phone1", value: "+994 10 237 23 24" },
    { key: "phone2", value: "+994 70 230 23 38" },
    { key: "email", value: "fimgroupcounsulting@bk.ru" },
    {
      key: "address1",
      value:
        "AZ1033, Bakı şəhəri, Nərimanov rayonu, Məmməd Araz 20 (AP Plaza)",
    },
    { key: "address2", value: "Ağdaş rayonu, Yusif Nəbiyev küçəsi 7/6" },
    { key: "registry", value: "QT-0135" },
    { key: "voen", value: "3105651911" },
    { key: "founded_year", value: "2010" },
    { key: "clients_count", value: "500+" },
    { key: "projects_count", value: "1200+" },
  ];

  for (const s of settings) {
    await prisma.setting.upsert({
      where: { key: s.key },
      update: { value: s.value },
      create: s,
    });
  }
  console.log("  ✓ Settings seeded");

  // Services
  await prisma.service.deleteMany();
  await prisma.service.createMany({
    data: [
      {
        titleAz: "Daşınar Əmlakın Qiymətləndirilməsi",
        titleRu: "Оценка движимого имущества",
        descriptionAz:
          "Maşın, avadanlıq, nəqliyyat vasitələri, heyvanlar, bitkilər və digər daşınar əmlakın peşəkar qiymətləndirilməsi. Müasir metodologiya əsasında dəqiq bazar dəyərinin müəyyənləşdirilməsi.",
        descriptionRu:
          "Профессиональная оценка машин, оборудования, транспортных средств, животных, растений и другого движимого имущества.",
        icon: "truck",
        visible: true,
        order: 1,
      },
      {
        titleAz: "Daşınmaz Əmlakın Qiymətləndirilməsi",
        titleRu: "Оценка недвижимости",
        descriptionAz:
          "Mənzil, ev, torpaq sahəsi, kommersiya obyektləri və digər daşınmaz əmlakın qiymətləndirilməsi. Texniki ekspertiza və bazar analizi əsasında real dəyərin hesablanması.",
        descriptionRu:
          "Оценка квартир, домов, земельных участков, коммерческой недвижимости и других объектов.",
        icon: "building",
        visible: true,
        order: 2,
      },
      {
        titleAz: "Müəssisələrin Qiymətləndirilməsi",
        titleRu: "Оценка предприятий",
        descriptionAz:
          "Biznesin, şirkətin, müəssisənin tam dəyərinin müəyyənləşdirilməsi. Maliyyə göstəriciləri, aktivlər və bazar mövqeyi nəzərə alınmaqla hərtərəfli qiymətləndirmə.",
        descriptionRu:
          "Определение полной стоимости бизнеса, компании, предприятия с учётом финансовых показателей и рыночной позиции.",
        icon: "briefcase",
        visible: true,
        order: 3,
      },
      {
        titleAz: "Dəymiş Zərər və Risklərin Qiymətləndirilməsi",
        titleRu: "Оценка ущерба и рисков",
        descriptionAz:
          "Dəymiş zərərin, əldən çıxmış mənfəətin və sahibkarlıq risklərinin qiymətləndirilməsi. Sığorta, məhkəmə və digər prosedurlar üçün rəsmi ekspert rəyi hazırlanması.",
        descriptionRu:
          "Оценка причинённого ущерба, упущенной выгоды и рисков. Подготовка официального экспертного заключения.",
        icon: "shield",
        visible: true,
        order: 4,
      },
      {
        titleAz: "Qeyri-Maddi Aktivlərin Qiymətləndirilməsi",
        titleRu: "Оценка нематериальных активов",
        descriptionAz:
          "İntelektual mülkiyyət, qiymətli kağızlar, pay iştirakı, brend dəyəri və digər qeyri-maddi aktivlərin qiymətləndirilməsi. Beynəlxalq standartlara uyğun ekspertiza.",
        descriptionRu:
          "Оценка интеллектуальной собственности, ценных бумаг, долей участия, стоимости бренда и других нематериальных активов.",
        icon: "star",
        visible: true,
        order: 5,
      },
    ],
  });
  console.log("  ✓ Services seeded");

  // News
  const newsArticles = [
    {
      slug: "emlak-bazar-analizi-2024",
      titleAz: "2024-cü ildə Azərbaycanda Əmlak Bazarının Analizi",
      titleRu: "Анализ рынка недвижимости Азербайджана в 2024 году",
      contentAz: `Azərbaycan əmlak bazarı 2024-cü ildə əhəmiyyətli dəyişikliklər yaşayıb. Bakı şəhərinin mərkəzi rayonlarında qiymətlər 15-20% artıb, regionlarda isə sabit qalmağa davam edir.

FİM GROUP CONSULTİNG MMC olaraq bu il 500-dən artıq qiymətləndirmə işi yerinə yetirmişik. Müşahidələrimizə görə, investorlar xüsusilə Nərimanov, Nəsimi və Binəqədi rayonlarına maraq göstərir.

Daşınmaz əmlak bazarında icarə qiymətləri də artmağa davam edir. 2024-cü ilin birinci yarısında icarə gəlirləri 2023-cü ilə nisbətən ortalama 12% yüksəlib.

Ekspertlərimiz hesab edir ki, bu tendensiya 2025-ci ildə də davam edəcək, xüsusilə yeni infrastruktur layihələrinin həyata keçirildiyi rayonlarda.

Əmlak bazarının inkişafına kömək edən başlıca amillər:
- İpoteka kreditlərinin əlçatanlığının artması
- Yeni yaşayış komplekslərinin inşası
- Xarici investorların marağının artması
- Turizm infrastrukturunun genişlənməsi`,
      contentRu: `Рынок недвижимости Азербайджана пережил значительные изменения в 2024 году. В центральных районах Баку цены выросли на 15-20%, тогда как в регионах продолжают оставаться стабильными.

Наши эксперты прогнозируют продолжение этой тенденции в 2025 году, особенно в районах с новыми инфраструктурными проектами.`,
      imageUrl:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      published: true,
    },
    {
      slug: "biznes-qiymetlendirme-metodlari",
      titleAz: "Biznes Qiymətləndirilməsinin Əsas Metodları",
      titleRu: "Основные методы оценки бизнеса",
      contentAz: `Biznesin qiymətləndirilməsi mürəkkəb bir proses olub bir neçə metodun kombinasiyasını tələb edir. FİM GROUP CONSULTİNG MMC bu sahədə beynəlxalq standartlara uyğun yanaşma tətbiq edir.

Əsas qiymətləndirmə metodları:

**1. Gəlir Yanaşması (Income Approach)**
Gələcək pul axınlarının diskontlaşdırılması əsasında dəyər hesablanır. Bu metod gəlir gətirən işlək biznesler üçün ən effektiv metoddur. Diskontlaşdırılmış pul axınları (DCF) modeli vasitəsilə şirkətin gələcək gəlir potensialı müəyyənləşdirilir.

**2. Bazar Yanaşması (Market Approach)**
Analoji müəssisələrlə müqayisəli analiz aparılır. Bu metod xüsusilə aktiv bazarın mövcud olduğu hallarda dəqiq nəticələr verir.

**3. Xərc Yanaşması (Cost Approach)**
Müəssisənin aktivlərinin əvəzlənmə dəyəri hesablanır. Bu metod aktivlərə əsaslanan şirkətlər üçün uyğundur.

Hər halda ən uyğun metod ekspert tərəfindən seçilir.`,
      imageUrl:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
      published: true,
    },
    {
      slug: "qeyri-maddi-aktivler-qiymetlendirmesi",
      titleAz: "Qeyri-Maddi Aktivlərin Qiymətləndirilməsinin Əhəmiyyəti",
      titleRu: "Важность оценки нематериальных активов",
      contentAz: `Müasir iqtisadiyyatda şirkətin dəyərinin böyük hissəsi qeyri-maddi aktivlərdən ibarətdir. Brendin dəyəri, patentlər, lisenziyalar, müştəri bazası — bunların hamısı şirkətin ümumi dəyərinə ciddi töhfə verir.

Azərbaycanda bu sahədə qiymətləndirmə hələ yetərincə inkişaf etməyib. Lakin beynəlxalq investor cəlb etmək, birləşmə və satınalma əməliyyatları keçirmək, ya da mülkiyyət mübahisəsini həll etmək üçün qeyri-maddi aktivlərin peşəkar qiymətləndirilməsi vacibdir.

FİM GROUP CONSULTİNG bu sahədə IVS 210 standartlarına uyğun xidmətlər göstərir:

- Ticarət nişanlarının (trademark) dəyərinin müəyyənləşdirilməsi
- Patentlər və lisenziyaların dəyərinin hesablanması
- Proqram təminatının dəyərinin qiymətləndirilməsi
- Müştəri münasibətlərinin dəyərinin analizi
- Qiymətli kağızların və pay iştirakının qiymətləndirilməsi

Bu xidmətlər sayəsində şirkətlər daha əsaslı investisiya qərarları qəbul edə bilərlər.`,
      imageUrl:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
      published: true,
    },
  ];

  for (const article of newsArticles) {
    await prisma.news.upsert({
      where: { slug: article.slug },
      update: article,
      create: article,
    });
  }
  console.log("  ✓ News seeded");

  console.log("✅ Seed completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
