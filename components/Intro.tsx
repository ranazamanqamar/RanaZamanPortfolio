"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { site } from "@/data/site";

export default function Intro() {
  return (
    <section className="container-site mt-24 md:mt-32">
      <FadeIn>
        <div className="grid gap-6 md:grid-cols-2 md:gap-10">
          <p className="text-[clamp(20px,1.8vw,22px)] leading-tight tracking-tight text-black">
            Info
          </p>
          <div>
            <p className="max-w-xl text-[length:var(--font-size-md)] leading-relaxed text-muted-body">
              {site.intro}
            </p>
            <a
              href="/about"
              className="group mt-8 inline-flex items-center gap-2 text-[length:var(--font-size-md)] text-muted-nav transition-colors duration-300 hover:text-[#111]"
            >
              Discover more
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
