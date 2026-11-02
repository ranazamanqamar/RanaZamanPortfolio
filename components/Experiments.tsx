"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { experiments } from "@/data/experiments";

export default function Experiments() {
  return (
    <section className="container-site mt-24 md:mt-32">
      <FadeIn>
        <div className="mb-10 md:mb-14">
          <p className="text-[clamp(20px,1.8vw,22px)] leading-tight tracking-tight text-black">
            Explorations
          </p>
          <p className="mt-3 max-w-lg text-[length:var(--font-size-md)] text-muted-body">
            Design passions &amp; experiments
          </p>
        </div>
      </FadeIn>

      <ul className="border-t border-border">
        {experiments.map((item, index) => (
          <FadeIn key={item.title} delay={index * 0.05}>
            <li className="group border-b border-border">
              <div className="flex flex-col gap-2 py-6 transition-colors duration-500 hover:bg-gray-50/70 md:flex-row md:items-baseline md:justify-between md:gap-10 md:px-2">
                <h3 className="text-[clamp(22px,2vw,28px)] font-medium tracking-tight text-[#111] transition-transform duration-500 md:group-hover:translate-x-1">
                  {item.title}
                </h3>
                <p className="max-w-md text-[15px] leading-relaxed text-muted-body md:text-right">
                  {item.description}
                </p>
              </div>
            </li>
          </FadeIn>
        ))}
      </ul>
    </section>
  );
}
