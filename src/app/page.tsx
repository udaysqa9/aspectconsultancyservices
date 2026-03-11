import { HeroSection } from "@/components/hero-section";
import { PartnersSection } from "@/components/partners-section";
import { ServicesSection } from "@/components/services-section";
import { OurWingsSection } from "@/components/our-wings-section";
import { WhyChooseUsSection } from "@/components/why-choose-us-section";
import { LaunchRealAppSection } from "@/components/launch-real-app-section";
import { ProcessSection } from "@/components/process-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurWingsSection />
      <PartnersSection />
      <ServicesSection />
      <LaunchRealAppSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
