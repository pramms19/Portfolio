import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-bold text-lg text-primary">PS</p>
          <p className="text-sm text-muted-foreground">Pramada Shrestha</p>
        </div>

        <div className="flex gap-6 text-muted-foreground uppercase text-xs font-bold tracking-widest">
          <a href="#about" className="hover:text-primary transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-primary transition-colors">
            Work
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            Contact
          </a>
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/pramms19"
            target="_blank"
            className="p-1 bg-muted rounded-full hover:bg-white/80 transition-all"
          >
            <Image
              src="/git.svg"
              alt="github"
              width={10}
              height={10}
              loading="eager"
              className="w-5 h-5 rounded-full"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/pramada-shrestha-61843a257/"
            target="_blank"
            className="p-1 bg-muted rounded-full hover:bg-white/80 transition-all"
          >
            <Image
              src="/linkedin.webp"
              alt="linkedin"
              width={10}
              height={10}
              loading="eager"
              className="w-5 h-5 rounded-full"
            />
          </a>
          <a
            href="mailto:pramadashrestha17@gmail.com"
            target="_blank"
            className="p-1 bg-muted rounded-full hover:bg-white/80 transition-all"
          >
            <Image
              src="/gmail.webp"
              alt="gmail"
              width={10}
              height={10}
              loading="eager"
              className="w-5 h-5 rounded-full"
            />
          </a>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Pramada Shrestha. All rights reserved.
      </div>
    </footer>
  );
}
