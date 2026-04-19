import About from "@/components/about";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import Skills from "@/components/skill";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
    </div>
  );
}
