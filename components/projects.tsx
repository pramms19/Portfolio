"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard, { Project } from "./projectCard";

const projects: Project[] = [
  {
    id: 1,
    title: "Glow",
    description: "E-Commerce Makeup Website.",
    image: "/p2.png",
    tags: ["React", "TypeScript", "Tailwind", "Shadcn", "Zod"],
    label: "Web",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Pettle App",
    description:
      "Pet safety app with GPS tracking, alerts, and health monitoring.",
    image: "/p2.png",
    tags: ["React Native", "Firebase", "Expo"],
    label: "App",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Chic Seduire",
    description: "E-Commerce Clothing Website for Men and Women.",
    image: "/p2.png",
    tags: ["React", "Tailwind", "Postman"],
    label: "Web",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const categories = ["Web", "App", "UI/UX"];

export default function Projects() {
  const getFiltered = (category: string) =>
    projects.filter((p) => p.label === category);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          My <span className="text-primary">Projects</span>
        </h2>

        <Tabs defaultValue="Web" className="w-full flex flex-col items-center">
          {/* Tab Navigation */}
          <TabsList className="bg-transparent border rounded-full px-8 flex gap-8 lg:gap-16 mb-14 shadow-xs">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="relative bg-transparent border-none shadow-none px-0 py-2 rounded-none text-muted-foreground/80 data-[state=active]:text-primary data-[state=active]:bg-transparent  text-base md:text-xl transition-all after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary after:scale-x-0 data-[state=active]:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab Content */}
          {categories.map((category) => {
            const filtered = getFiltered(category);
            return (
              <TabsContent
                key={category}
                value={category}
                className="w-full mt-0 focus-visible:outline-none animate-in fade-in zoom-in-95 duration-500"
              >
                {filtered.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center py-20 text-muted-foreground/50">
                    <p className="text-sm uppercase tracking-widest">
                      No projects yet in this category
                    </p>
                  </div>
                )}

                {/* Bottom label */}
                <div className="flex flex-col items-center mt-16">
                  <div className="h-0.5 w-15 bg-primary/30 mb-4"/>
                  <p className="text-xs uppercase text-muted-foreground/60">
                    {category} Projects
                  </p>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
