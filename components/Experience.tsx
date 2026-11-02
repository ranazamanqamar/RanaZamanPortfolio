"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section className="container-site mt-20 md:mt-28">
      <FadeIn>
        <div className="grid gap-8 border-t border-border pt-10 md:grid-cols-2 md:gap-12">
          <p className="text-[clamp(20px,1.8vw,22px)] leading-tight tracking-tight text-black">
            Work Experience
          </p>
          <div className="space-y-12">
            {experience.map((role) => (
              <article key={role.title}>
                <h3 className="text-[clamp(22px,2vw,28px)] font-medium tracking-tight text-[#111]">
                  {role.title}
                </h3>
                <p className="mt-2 text-[15px] text-muted-nav">{role.period}</p>
                <ul className="mt-5 space-y-2">
                  {role.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="max-w-xl text-[length:var(--font-size-md)] leading-relaxed text-muted-body"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
