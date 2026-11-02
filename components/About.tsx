"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { site } from "@/data/site";

export default function About() {
  return (
    <>
      <section className="container-site pt-4 pb-4 md:pb-14">
        <FadeIn y={0}>
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-[#f3f3f3] md:aspect-[2/1]">
            <Image
              src={site.aboutPortrait}
              alt={`Portrait of ${site.fullName}`}
              fill
              priority
              unoptimized
              sizes="(max-width: 1440px) 100vw, 1440px"
              className="object-cover object-center"
            />
          </div>
        </FadeIn>
      </section>

      <section className="container-site mt-16 scroll-mt-24 md:mt-24">
        <FadeIn>
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <p className="text-[clamp(20px,1.8vw,22px)] leading-tight tracking-tight text-black">
              Info
            </p>
            <div className="space-y-6">
              {site.aboutParagraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-xl text-[length:var(--font-size-md)] leading-relaxed text-muted-body"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
