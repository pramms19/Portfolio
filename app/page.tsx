import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="bg-muted/30 border-y border-border/50">
        <About />
      </div>
      <Skills />
      <div className="bg-muted/30 border-y border-border/50">
        <Projects />
      </div>
      <Contact />
      <div className="bg-muted/30 border-y border-border/50">
        <Footer />
      </div>
    </div>
  );
}
