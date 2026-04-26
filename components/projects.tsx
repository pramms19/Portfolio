"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import ProjectCard, { Project } from "./projectCard";

const projects: Project[] = [
  {
    id: 1,
    title: "Glow",
    description: "E-Commerce Makeup Website.",
    image: "/g.png",
    tags: ["React", "TypeScript", "Tailwind", "Shadcn", "Zod", "Zustand"],
    label: "Web",
    liveUrl: "https://typescript-project-nine-psi.vercel.app/",
    githubUrl: "https://github.com/pramms19/typescript-project",
  },
  {
    id: 2,
    title: "Pettle App",
    description:
      "Pet safety app with GPS tracking, alerts, and health monitoring.",
    image: "/pettle.png",
    tags: ["React", "Firebase", "Expo"],
    label: "App",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Chic Seduire",
    description: "E-Commerce Clothing Website for Men and Women.",
    image: "/s.png",
    tags: ["React", "Tailwind","Postman"],
    label: "Web",
    liveUrl: "https://chic-seduire.vercel.app/",
    githubUrl: "https://github.com/pramms19/ecommerce",
  },
];

const categories = ["Web", "App", "UI/UX"];

export default function Projects() {
  const getFiltered = (category: string) =>
    projects.filter((p) => p.label === category);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-10 text-center"
        >
          My <span className="text-primary">Projects</span>
        </motion.h2>

        <Tabs defaultValue="Web" className="w-full flex flex-col items-center">
          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="w-full flex justify-center"
          >
            <TabsList className="bg-transparent border rounded-full px-8 flex gap-8 lg:gap-16 mb-14 shadow-xs">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="relative bg-transparent border-none shadow-none px-0 py-2 rounded-none text-muted-foreground/80 data-[state=active]:text-primary data-[state=active]:bg-transparent text-base md:text-xl transition-all after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary after:scale-x-0 data-[state=active]:after:scale-x-100 after:transition-transform after:duration-300"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </motion.div>

          {/* Tab Content */}
          {categories.map((category) => {
            const filtered = getFiltered(category);
            return (
              <TabsContent
                key={category}
                value={category}
                className="w-full mt-0 focus-visible:outline-none"
              >
                {filtered.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((project, index) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <ProjectCard project={project} />
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center py-20 text-muted-foreground/50"
                  >
                    <p className="text-sm uppercase tracking-widest">
                      No projects yet in this category
                    </p>
                  </motion.div>
                )}

                {/* Bottom label */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-col items-center mt-16"
                >
                  <div className="h-0.5 w-15 bg-primary/30 mb-4" />
                  <p className="text-xs uppercase text-muted-foreground/60">
                    {category} Projects
                  </p>
                </motion.div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
