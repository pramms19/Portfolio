"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    {
      id: "programming",
      label: "Programming",
      skills: [
        "React", "Next.js", "TypeScript", "Tailwind CSS",
        "HTML5", "CSS", "JavaScript", "Firebase", "REST APIs",
      ],
    },
    {
      id: "design",
      label: "Design & Tools",
      skills: [
        "VS Code", "GitHub", "Vercel", "Figma",
        "Photoshop", "Illustrator", "Canva",
      ],
    },
    {
      id: "soft-skills",
      label: "Soft Skills",
      skills: [
        "Presentation", "Communication", "Time Management", "Multi-Tasking",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 md:px-8 relative">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-4xl font-bold mb-10 md:mb-14 text-center"
      >
        My <span className="text-primary">Skills</span>
      </motion.h2>

      <Tabs defaultValue="programming" className="w-full flex flex-col items-center">
        {/* Navigation Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="w-full flex justify-center"
        >
          <TabsList className="bg-transparent border rounded-full px-4 md:px-8 flex gap-4 sm:gap-6 md:gap-10 lg:gap-16 mb-10 md:mb-14 shadow-xs">
            {skills.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="relative bg-transparent border-none shadow-none px-0 py-1 md:py-2 rounded-none text-muted-foreground/80 data-[state=active]:text-primary data-[state=active]:bg-transparent text-sm sm:text-base md:text-xl transition-all after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary after:scale-x-0 data-[state=active]:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </motion.div>

        {/* Content Area */}
        <div className="w-full">
          {skills.map((category) => (
            <TabsContent
              key={category.id}
              value={category.id}
              className="mt-0 focus-visible:outline-none"
            >
              {/* Skills Cloud */}
              <div className="flex flex-wrap justify-center gap-3 mb-14">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                  >
                    <Badge
                      variant="secondary"
                      className="px-3 md:px-6 py-1.5 md:py-3.5 text-xs md:text-sm font-medium bg-secondary/40 hover:bg-secondary hover:text-secondary-foreground transition-all rounded-full border-none shadow-sm cursor-default"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>

              {/* Category Label */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col items-center"
              >
                <div className="h-0.5 w-15 bg-primary/30 mb-4" />
                <p className="text-xs uppercase text-muted-foreground/60">
                  {category.label}
                </p>
              </motion.div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </section>
  );
}