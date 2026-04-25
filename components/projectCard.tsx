"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Link } from "lucide-react";

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  label: string;
  liveUrl: string;
  githubUrl: string;
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-500">
      {/* Background Image */}
      <Image
        src={project.image}
        alt={project.title}
        fill
        loading="eager"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
      />

      {/* Static dark gradient at bottom — always visible */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

      {/* === DEFAULT STATE: title + label badge at the bottom === */}
      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-0 transition-all duration-500 group-hover:translate-y-4 group-hover:opacity-0">
        <div className="flex items-center gap-2 mb-1">
          <Badge className="text-[10px] uppercase tracking-widest bg-secondary text-secondary-foreground border-none px-2 py-0.5">
            {project.label}
          </Badge>
        </div>
        <h3 className="text-white text-xl font-bold leading-tight">
          {project.title}
        </h3>
      </div>

      {/* === HOVER STATE: full overlay with all info === */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-black/60 backdrop-blur-[2px]">
        {/* Top-right action buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <Button
            size="icon"
            variant="secondary"
            className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 backdrop-blur-sm"
            asChild
          >
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live site"
            >
              <ExternalLink className="h-3.5 w-3.5 text-white" />
            </a>
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 backdrop-blur-sm"
            asChild
          >
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repo"
            >
              <Link className="h-3.5 w-3.5 text-white" />
            </a>
          </Button>
        </div>

        {/* Bottom content */}
        <div>
          <Badge className="text-[10px] uppercase tracking-widest bg-secondary text-secondary-foreground border-none px-2 py-0.5 mb-2">
            {project.label}
          </Badge>
          <h3 className="text-white text-xl font-bold leading-tight mb-1">
            {project.title}
          </h3>
          <p className="text-white/70 text-sm mb-3 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/80 border border-white/15 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
