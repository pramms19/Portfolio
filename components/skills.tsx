import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  const skills = [
    {
      id: "programming",
      label: "Programming",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "HTML5",
        "CSS",
        "JavaScript",
        "Firebase",
        "REST APIs",
      ],
    },
    {
      id: "design",
      label: "Design & Tools",
      skills: [
        "VS Code",
        "GitHub",
        "Vercel",
        "Figma",
        "Photoshop",
        "Illustrator",
        "Canva",
      ],
    },
    {
      id: "soft-skills",
      label: "Soft Skills",
      skills: [
        "Presentation",
        "Communication",
        "Time Management",
        "Multi-Tasking",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 my-8 md:my-14 px-4 md:px-8 relative">
      <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">
        My <span className="text-primary">Skills</span>
      </h2>

      <Tabs
        defaultValue="programming"
        className="w-full flex flex-col items-center"
      >
        {/* Navigation Bar - Clean Underline Style */}
        <TabsList className="bg-transparent border rounded-full px-8 flex gap-8 lg:gap-16 mb-14 shadow-xs">
          {skills.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="relative bg-transparent border-none shadow-none px-0 py-2 rounded-none text-muted-foreground/80 data-[state=active]:text-primary data-[state=active]:bg-transparent text-base md:text-xl transition-all after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary after:scale-x-0 data-[state=active]:after:scale-x-100 after:transition-transform after:duration-300"
            >
              {category.label}
             
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Content Area */}
        <div className="w-full">
          {skills.map((category) => (
            <TabsContent
              key={category.id}
              value={category.id}
              className="mt-0 focus-visible:outline-none animate-in fade-in zoom-in-95 duration-500"
            >
              {/* 1. The Skills Cloud */}
              <div className="flex flex-wrap justify-center gap-3 mb-14">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-6 py-3.5 text-sm font-medium bg-secondary/40 hover:bg-secondary hover:text-secondary-foreground transition-all rounded-full border-none shadow-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              {/* 2. The Category Label (Displayed at the bottom of the section) */}
              <div className="flex flex-col items-center">
                <div className="h-0.5 w-15 bg-primary/30 mb-4" />
                <p className="text-xs uppercase text-muted-foreground/60">
                  {category.label}
                </p>
              </div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </section>
  );
}
