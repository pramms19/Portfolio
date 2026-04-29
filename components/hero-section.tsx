"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="flex items-center justify-center px-4 md:px-8 pt-32 pb-10"
    >
      <div className="flex flex-col lg:flex-row justify-between gap-8 md:gap-16 items-center">
        {/* Image Container */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="shrink-0"
        >
          <Image
            src="/me.jpeg"
            alt="Pramada Shrestha"
            width={400}
            height={400}
            className="rounded-2xl h-72 md:h-112 w-72 md:w-87 object-cover border border-border shadow-xl"
            priority
          />
        </motion.div>

        {/* Content Container */}
        <div className="text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold tracking-tight"
          >
            Pramada Shrestha
          </motion.h1>

          {/* Animated Divider Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="border-t-2 border-primary my-4 mx-auto md:mx-0 min-w-md max-w-lg"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg md:text-xl font-semibold text-primary mb-4 flex justify-center lg:justify-start gap-2"
          >
            <p>Web Developer</p>
            <p className="text-muted-foreground font-light">|</p>
            <p>UI/UX Designer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              asChild
              className="group rounded-full mt-6 px-6 text-white text-base font-medium shadow-md transition-all"
              size="lg"
            >
              <a
                href="/Pramada_Shrestha_CV.pdf"
                download="Pramada_Shrestha_CV.pdf"
              >
                Download CV
                <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
