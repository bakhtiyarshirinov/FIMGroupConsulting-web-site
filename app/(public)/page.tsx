import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { AboutSection } from "@/components/home/AboutSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { ContactSection } from "@/components/home/ContactSection";

const staticServices = [
  {
    id: 1,
    titleAz: "Daşınar Əmlakın Qiymətləndirilməsi",
    descriptionAz:
      "Maşın, avadanlıq, nəqliyyat vasitələri, heyvanlar, bitkilər və digər daşınar əmlakın peşəkar qiymətləndirilməsi. Müasir metodologiya əsasında dəqiq bazar dəyərinin müəyyənləşdirilməsi.",
    icon: "truck",
  },
  {
    id: 2,
    titleAz: "Daşınmaz Əmlakın Qiymətləndirilməsi",
    descriptionAz:
      "Mənzil, ev, torpaq sahəsi, kommersiya obyektləri və digər daşınmaz əmlakın qiymətləndirilməsi. Texniki ekspertiza və bazar analizi əsasında real dəyərin hesablanması.",
    icon: "building",
  },
  {
    id: 3,
    titleAz: "Müəssisələrin Qiymətləndirilməsi",
    descriptionAz:
      "Biznesin, şirkətin, müəssisənin tam dəyərinin müəyyənləşdirilməsi. Maliyyə göstəriciləri, aktivlər və bazar mövqeyi nəzərə alınmaqla hərtərəfli qiymətləndirmə.",
    icon: "briefcase",
  },
  {
    id: 4,
    titleAz: "Dəymiş Zərər və Risklərin Qiymətləndirilməsi",
    descriptionAz:
      "Dəymiş zərərin, əldən çıxmış mənfəətin və sahibkarlıq risklərinin qiymətləndirilməsi. Sığorta, məhkəmə və digər prosedurlar üçün rəsmi ekspert rəyi hazırlanması.",
    icon: "shield",
  },
  {
    id: 5,
    titleAz: "Qeyri-Maddi Aktivlərin Qiymətləndirilməsi",
    descriptionAz:
      "İntelektual mülkiyyət, qiymətli kağızlar, pay iştirakı, brend dəyəri və digər qeyri-maddi aktivlərin qiymətləndirilməsi. Beynəlxalq standartlara uyğun ekspertiza.",
    icon: "star",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection services={staticServices} />
      <AboutSection />
      <WhyUsSection />
      <ContactSection />
    </>
  );
}
