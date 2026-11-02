"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import ServiceShape from "@/components/ServiceShape";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section className="container-site mt-24 border-t border-border pt-16 md:mt-32 md:pt-24">
      <FadeIn>
        <p className="mb-8 text-[clamp(20px,1.8vw,22px)] leading-tight tracking-tight text-black md:mb-10">
          Services
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <FadeIn key={service.number} delay={index * 0.06}>
            <article className="group relative flex min-h-[420px] flex-col rounded-lg border border-border bg-white px-5 py-5 transition-colors duration-500 hover:bg-gray-50/70 md:min-h-[460px]">
              <div className="flex items-start justify-between">
                <p className="text-[14px] text-muted-nav">{service.number}</p>
                <span
                  aria-hidden="true"
                  className="text-muted-nav opacity-0 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                >
                  ↗
                </span>
              </div>

              <div className="mt-6">
                <ServiceShape index={index} />
              </div>

              <div className="mt-auto pt-10">
                <h3 className="text-[clamp(22px,2vw,27px)] font-medium leading-tight tracking-tight text-[#111]">
                  {service.title}
                </h3>
                <p className="mt-3 text-[15px] font-medium leading-snug text-[#111]">
                  {service.tagline}
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-muted-nav">
                  {service.description}
                </p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
