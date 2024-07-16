import Hero from "@/components/Hero";
import Customers from "@/components/about/Customers";
import About from "@/components/home/About";
import GetStarted from "@/components/home/GetStarted";
import OurProcess from "@/components/home/OurProcess";
import Partners from "@/components/home/Partners";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <Hero title="About Us" />
      <About page="about" />
      <Partners />
      <div className="sm:pt-24 pt-16">
        <OurProcess page="about" />
      </div>
      <div className="relative w-full h-full z-[1] transform ease-in-out">
        <Customers />
      </div>
      <GetStarted />
    </main>
  );
}
