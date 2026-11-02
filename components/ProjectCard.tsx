"use client";

import Image from "next/image";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const content = (
    <>
      <div className="overflow-hidden rounded-lg bg-gray-50">
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out md:group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-[#111]/[0.02]">
            <span className="text-[13px] uppercase tracking-[0.2em] text-muted-nav">
              {project.type}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-[clamp(20px,1.8vw,24px)] font-medium tracking-tight text-[#111] transition-transform duration-500 md:group-hover:translate-x-0.5">
            {project.title}
          </h3>
          <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-muted-body">
            {project.description}
          </p>
          <p className="mt-3 text-[14px] text-muted-nav">
            {project.year} · {project.type}
          </p>
        </div>
        <span
          aria-hidden="true"
          className="mt-1 text-muted-nav transition-transform duration-500 md:group-hover:translate-x-1"
        >
          →
        </span>
      </div>
    </>
  );

  if (project.link) {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block focus-visible:outline-offset-4"
      >
        {content}
      </a>
    );
  }

  return <div className="group block">{content}</div>;
}
