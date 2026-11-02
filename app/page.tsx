import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroMockup from "@/components/HeroMockup";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Marquee from "@/components/Marquee";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-[#111]"
      >
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <HeroMockup />
        <Intro />
        <Services />
        <Work />
        <Marquee />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
