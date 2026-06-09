import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { AboutSection } from "@/components/home/AboutSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { ContactSection } from "@/components/home/ContactSection";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const services = await db.service.findMany({
    where: { visible: true },
    orderBy: { order: "asc" },
  });

  return (
    <>
      <HeroSection />
      <ServicesSection services={services} />
      <AboutSection />
      <WhyUsSection />
      <ContactSection />
    </>
  );
}
