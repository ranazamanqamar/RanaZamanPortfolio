import type { Metadata } from "next";
import Header from "@/components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Exploring from "@/components/Exploring";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About — Rana Zaman Qamar",
  description:
    "Computer Science student at UCP Gujranwala — aspiring AI web designer and developer creating modern, interactive websites.",
};

export default function AboutPage() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-[#111]"
      >
        Skip to content
      </a>
      <Header />
      <main id="about">
        <About />
        <Experience />
        <Education />
        <Exploring />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
