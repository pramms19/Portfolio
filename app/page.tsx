import About from "@/components/about";
import Contact from "@/components/contact";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
