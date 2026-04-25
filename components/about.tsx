"use client"; // Must be at the top for animations

import { motion } from "framer-motion";
import { Code2, GraduationCap, BriefcaseBusiness, File } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  const stats = [
    { icon: <Code2 className="w-5 h-5" />, label: "Languages", value: "React / Next.js" },
    { icon: <GraduationCap className="w-5 h-5" />, label: "Education", value: "BSc(Hons) Computing" },
    { icon: <File className="w-5 h-5" />, label: "Projects", value: "Websites / App" },
    { icon: <BriefcaseBusiness className="w-5 h-5" />, label: "Experience", value: "Design & Dev" },
  ];

  return (
    <section id="about" className="py-24 my-8 md:my-14 px-4 md:px-8 bg-muted/20 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Side: Story */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">Introduction</h3>
            <p className="border-l-4 border-primary pl-4 py-2 text-muted-foreground text-justify leading-relaxed">
              I am a creative developer focused on building functional,
              user-centric web applications. I bridge the gap between design
              and code, leveraging my background in Graphic Design to create
              visually engaging and technically sound digital experiences. I
              thrive in collaborative environments and am committed to writing
              clean, maintainable code.
            </p>
          </motion.div>

          {/* Right Side: Quick Facts Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }} // Staggered effect
                whileHover={{ y: -5 }} // Small hover pop
              >
                <Card className="border-none shadow-sm bg-background h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                      {stat.icon}
                    </div>
                    <p className="text-xs font-medium uppercase text-muted-foreground tracking-wider">
                      {stat.label}
                    </p>
                    <p className="font-semibold text-sm md:text-base">{stat.value}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}