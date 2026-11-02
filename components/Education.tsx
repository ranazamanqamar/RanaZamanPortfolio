"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { education } from "@/data/exploring";

export default function Education() {
  return (
    <section className="container-site mt-20 md:mt-28">
      <FadeIn>
        <div className="grid gap-6 border-t border-border pt-10 md:grid-cols-2 md:gap-12">
          <p className="text-[clamp(20px,1.8vw,22px)] leading-tight tracking-tight text-black">
            Education
          </p>
          <div>
            <h3 className="text-[clamp(22px,2vw,28px)] font-medium tracking-tight text-[#111]">
              {education.degree}
            </h3>
            <p className="mt-3 text-[15px] text-muted-body">{education.place}</p>
            <p className="mt-1 text-[15px] text-muted-nav">{education.period}</p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
