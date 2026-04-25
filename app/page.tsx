import About from "@/components/about";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}
