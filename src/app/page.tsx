import { services_bg } from "@/assets";
import About from "@/components/home/About";
import Products from "@/components/home/Products";
import Features from "@/components/home/Features";
import GetStarted from "@/components/home/GetStarted";
import Hero from "@/components/home/Hero";
import OurProcess from "@/components/home/OurProcess";
import Partners from "@/components/home/Partners";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Hero />
      <Features />
      <About page="home" />
      <div
        className="bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${services_bg.src})` }}
      >
        <Partners />
        <Services page="home" />
        <OurProcess page="home" />
      </div>

      <Products />
      <GetStarted />
    </main>
  );
}
