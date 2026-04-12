import Image from "next/image";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="flex items-center justify-center px-4 md:px-8 pt-32 pb-10">
      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-16 items-center max-w-5xl">
        {/* Image Container */}
        <div className="shrink-0">
          <Image
            src="/me.jpeg"
            alt="Pramada Shrestha"
            width={400}
            height={400}
            className="rounded-2xl h-72 w-72 md:h-112 md:w-87 object-cover border border-border shadow-xl"
            priority
          />
        </div>

        {/* Content Container */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Pramada Shrestha
          </h1>

          <div className="border-t border-muted-foreground/30 my-4 w-120 mx-auto md:mx-0" />

          <p className="text-lg md:text-xl font-semibold text-primary mb-4">
            Web Developer
          </p>

          <p className="text-sm md:text-base text-muted-foreground max-w-md leading-relaxed">
            I build clean, accessible, and user-centric web applications.
            Focused on turning creative ideas into functional digital
            experiences with a strong emphasis on reliable, maintainable code.
          </p>

          <Button className="rounded-full mt-8 px-4 text-base hover:bg-primary-foreground text-white" size="lg">
            Download CV
            <Download className="ml-1 h-4 w-4 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
