"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Work() {
  return (
    <section id="work" className="container-site mt-24 scroll-mt-24 md:mt-32">
      <FadeIn>
        <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[clamp(20px,1.8vw,22px)] leading-tight tracking-tight text-black">
              Work
            </p>
            <h2 className="mt-3 text-[clamp(28px,3vw,40px)] font-normal tracking-tight text-[#111]">
              Selected work
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-muted-body md:text-right">
            A selection of projects across product design, interfaces and
            experiments — more coming soon.
          </p>
        </div>
      </FadeIn>

      <div className="grid gap-10 md:grid-cols-3 md:gap-6">
        {projects.map((project, index) => (
          <FadeIn key={`${project.title}-${index}`} delay={index * 0.1}>
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
