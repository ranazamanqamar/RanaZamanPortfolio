"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { site } from "@/data/site";

function SplitHeadline() {
  const reduce = useReducedMotion();
  let charIndex = 0;

  return (
    <h1
      className="max-w-[540px] text-[length:var(--font-size-2xl)] font-normal leading-none tracking-[-2.5px]"
      aria-label="AI Web Designer & Developer crafting modern digital experiences with design, code & AI."
    >
      {site.heroHeadline.map((chunk, chunkIndex) => {
        const words = chunk.text.split(" ");
        return (
          <span key={`${chunk.text}-${chunkIndex}`}>
            {words.map((word, wordIndex) => {
              const color =
                chunk.tone === "muted" ? "text-[#B2B2B2]" : "text-[#111111]";
              return (
                <span
                  key={`${chunkIndex}-${wordIndex}`}
                  className="mr-[0.28em] inline-block whitespace-nowrap last:mr-0"
                >
                  {word.split("").map((char, i) => {
                    const delay = charIndex * 0.016;
                    charIndex += 1;

                    if (reduce) {
                      return (
                        <span key={`${chunkIndex}-${wordIndex}-${i}`} className={color}>
                          {char}
                        </span>
                      );
                    }

                    return (
                      <motion.span
                        key={`${chunkIndex}-${wordIndex}-${i}`}
                        className={`inline-block ${color}`}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.12 + delay,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        {char}
                      </motion.span>
                    );
                  })}
                </span>
              );
            })}{" "}
          </span>
        );
      })}
    </h1>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="container-site scroll-mt-24 pt-4 pb-2 md:pt-4">
      <div className="grid grid-cols-1 items-stretch gap-x-1 gap-y-6 md:grid-cols-2">
        <div className="flex flex-col justify-end gap-6 py-4 md:h-full md:gap-10 md:py-16">
          <SplitHeadline />

          <motion.p
            className="max-w-[540px] text-[length:var(--font-size-md)] leading-relaxed text-muted-body"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {site.heroSupport}
          </motion.p>

          <motion.div
            className="flex items-center gap-3 text-[14px] text-muted-nav"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            aria-hidden="true"
          >
            <span className="uppercase tracking-[0.18em]">Scroll</span>
            <motion.span
              className="inline-block h-8 w-px origin-top bg-[#111]/25"
              animate={reduce ? undefined : { scaleY: [1, 0.35, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

        <motion.div
          className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-[#f3f3f3] md:aspect-square"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={site.portrait}
            alt={`Portrait of ${site.fullName}`}
            fill
            priority
            unoptimized
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-[center_18%]"
          />
        </motion.div>
      </div>
    </section>
  );
}
