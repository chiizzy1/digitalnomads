import { customers_bg } from "@/assets";
import Hero from "@/components/Hero";
import CaseStudies from "@/components/home/Products";
import GetStarted from "@/components/home/GetStarted";
import OurProcess from "@/components/home/OurProcess";
import PartnersCarousel from "@/components/home/PartnersCarousel";
import Services from "@/components/home/Services";
import FAQ from "@/components/services/FAQ";
import SmallHeading from "@/components/ui/SmallHeading";
import TitleIntro from "@/components/ui/TitleIntro";

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen">
      <Hero title="Services" />
      <Services page="services" />
      <GetStarted />
      <CaseStudies />
      <div
        className="sm:py-24 py-16 bg-center bg-cover bg-no-repeat "
        style={{ backgroundImage: `url(${customers_bg.src})` }}
      >
        <div className="w-full container max-w-6xl mx-auto flex flex-col justify-center items-center">
          <div className="flex flex-col items-center gap-4 mb-12">
            <TitleIntro>OUR PROCESS</TitleIntro>
            <SmallHeading size="lg" className="text-center">
              How We Works?
            </SmallHeading>
          </div>

          <OurProcess page="services" />
        </div>
      </div>
      <div className="w-full container max-w-6xl mx-auto sm:py-24 py-16">
        <PartnersCarousel />
      </div>
      <FAQ />
    </main>
  );
}
