"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { site } from "@/data/site";

export default function HeroMockup() {
  return (
    <section
      className="container-site mt-0"
      aria-label="UI and UX design exploration"
    >
      <FadeIn y={0}>
        <div className="relative aspect-[2.2/1] w-full overflow-hidden rounded-lg bg-[#eeeeee] sm:aspect-[1189/594]">
          <Image
            src={site.heroMockup}
            alt="UI and UX design exploration visual"
            fill
            sizes="(max-width: 1440px) 100vw, 1440px"
            className="object-cover object-center"
            priority
            unoptimized
          />
        </div>
      </FadeIn>
    </section>
  );
}
