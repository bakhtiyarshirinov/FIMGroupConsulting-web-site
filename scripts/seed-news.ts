import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const daysAgo = (n: number) => new Date(Date.now() - n * 24 * 60 * 60 * 1000);

const articles = [
  {
    slug: "fim-group-consulting-yeni-xidmet-sahesini-teqdim-edir",
    titleAz: "FİM Group Consulting yeni xidmət sahəsini təqdim edir",
    contentAz: `FİM Group Consulting müştərilərinə təklif etdiyi xidmətlər çərçivəsini genişləndirərək yeni bir istiqamət üzrə fəaliyyətə başladığını bildirir. Şirkət indiyədək qiymətləndirmə və maliyyə məsləhəti sahəsində topladığı təcrübəni daha geniş spektrdə müştərilərə çatdırmaq məqsədi daşıyır.

Yeni xidmət sahəsi xüsusilə kiçik və orta sahibkarlıq subyektlərinin ehtiyaclarına yönəlib. Komandamız bu istiqamətdə beynəlxalq standartlara uyğun metodologiyalardan istifadə edərək, müştərilərə daha dəqiq və şəffaf nəticələr təqdim etməyi planlaşdırır.

FİM Group Consulting rəhbərliyi bildirir ki, bu addım şirkətin bazarda mövqeyini möhkəmləndirmək və müştəri bazasını genişləndirmək strategiyasının tərkib hissəsidir. Yeni xidmətlər haqqında ətraflı məlumat tezliklə şirkətin rəsmi kanalları vasitəsilə açıqlanacaq.`,
    published: true,
    createdAt: daysAgo(28),
  },
  {
    slug: "dasinmaz-emlak-bazarinda-qiymetlendirme-tendensiyalari",
    titleAz: "Daşınmaz əmlak bazarında qiymətləndirmə tendensiyaları",
    contentAz: `Son illərdə Azərbaycanda daşınmaz əmlak bazarı əhəmiyyətli dəyişikliklərə məruz qalıb. Bu dəyişikliklər həm qiymətləndirmə metodologiyalarına, həm də bazar iştirakçılarının gözləntilərinə təsir göstərir. FİM Group Consulting mütəxəssisləri bazardakı son tendensiyaları təhlil edərək müştərilərinə daha dəqiq qiymətləndirmə xidməti göstərməyə davam edir.

Xüsusilə Bakı şəhərində kommersiya əmlakının qiymətləndirilməsi zamanı yerləşmə, infrastruktur və icarə gəlirliliyi kimi faktorlar daha çox önəm kəsb etməyə başlayıb. Eyni zamanda yaşayış əmlakı seqmentində tikinti keyfiyyəti və enerji səmərəliliyi qiymətləndirmə prosesində nəzərə alınan əsas göstəricilərdəndir.

Bazarın şəffaflığının artırılması məqsədilə beynəlxalq qiymətləndirmə standartlarının tətbiqi getdikcə daha aktual olur. FİM Group Consulting komandası bu standartları əsas götürərək müştərilərinə obyektiv və əsaslandırılmış qiymətləndirmə hesabatları təqdim edir.`,
    published: true,
    createdAt: daysAgo(19),
  },
  {
    slug: "muessiselerin-qiymetlendirilmesi-ne-ucun-vacibdir",
    titleAz: "Müəssisələrin qiymətləndirilməsi: nə üçün vacibdir?",
    contentAz: `Biznesin dəyərinin düzgün müəyyən edilməsi sahibkarlar, investorlar və idarəetmə qərarları qəbul edən şəxslər üçün mühüm əhəmiyyət kəsb edir. Müəssisənin qiymətləndirilməsi təkcə alqı-satqı əməliyyatları zamanı deyil, həm də strateji planlaşdırma, kredit alınması və hüquqi mübahisələrin həlli prosesində vacib rol oynayır.

FİM Group Consulting olaraq biz müəssisələrin qiymətləndirilməsi zamanı maliyyə göstəricilərini, bazar şərtlərini və sahə üzrə risk faktorlarını kompleks şəkildə təhlil edirik. Bu yanaşma müştərilərimizə yalnız rəqəmlərə əsaslanan deyil, həm də bazarın real vəziyyətini əks etdirən nəticələr təqdim etməyə imkan verir.

Düzgün qiymətləndirmə həmçinin şirkətlərin investorlarla danışıqlar zamanı daha möhkəm mövqe tutmasına kömək edir. Buna görə də peşəkar qiymətləndirmə xidmətindən istifadə etmək uzunmüddətli perspektivdə əhəmiyyətli üstünlük yaradır.`,
    published: true,
    createdAt: daysAgo(10),
  },
  {
    slug: "fim-group-consulting-komandasi-genislenir",
    titleAz: "FİM Group Consulting komandası genişlənir",
    contentAz: `FİM Group Consulting artan müştəri tələbatına cavab vermək məqsədilə komandasını genişləndirir. Şirkətə qiymətləndirmə, maliyyə təhlili və korporativ məsləhət sahələrində təcrübəli mütəxəssislər qoşulub.

Yeni komanda üzvləri həm yerli, həm də beynəlxalq layihələrdə iştirak edərək şirkətin xidmət keyfiyyətinin artırılmasına töhfə verəcəklər. FİM Group Consulting rəhbərliyi bildirir ki, komandanın genişləndirilməsi şirkətin uzunmüddətli inkişaf strategiyasının vacib hissəsidir.

Şirkət gələcəkdə də ixtisaslı kadrların cəlb edilməsinə davam edəcəyini və müştərilərinə daha keyfiyyətli xidmət göstərmək üçün daxili resurslarını gücləndirəcəyini vurğulayır.`,
    published: true,
    createdAt: daysAgo(2),
  },
];

async function main() {
  for (const article of articles) {
    await prisma.news.upsert({
      where: { slug: article.slug },
      update: {},
      create: article,
    });
  }

  const count = await prisma.news.count();
  console.log(`News table now has ${count} rows.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
