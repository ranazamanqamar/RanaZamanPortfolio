"use client";

import { useReducedMotion } from "motion/react";
import { marqueeItems } from "@/data/marquee";

function Logo({
  label,
  src,
  width,
  height,
}: {
  label: string;
  src: string;
  width: number;
  height: number;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={label}
      width={width}
      height={height}
      className="h-12 w-auto shrink-0 object-contain md:h-20"
      draggable={false}
    />
  );
}

function Track({ ariaHidden = false }: { ariaHidden?: boolean }) {
  const prefix = ariaHidden ? "b" : "a";
  return (
    <div
      className="flex w-max items-center gap-5 pr-5"
      aria-hidden={ariaHidden || undefined}
    >
      {marqueeItems.map((item) => (
        <Logo key={`${prefix}-${item.label}`} {...item} />
      ))}
    </div>
  );
}

export default function Marquee() {
  const reduce = useReducedMotion();

  return (
    <section
      className="mt-20 overflow-hidden border-t border-border py-16 md:mt-28 md:py-24"
      aria-label="Skills and focus areas"
    >
      {reduce ? (
        <div className="overflow-x-auto">
          <div className="flex w-max items-center gap-5 px-4 md:px-6">
            {marqueeItems.map((item) => (
              <Logo key={item.label} {...item} />
            ))}
          </div>
        </div>
      ) : (
        <div className="marquee-mask overflow-hidden">
          <div className="animate-marquee flex w-max items-center hover:[animation-play-state:paused]">
            <Track />
            <Track ariaHidden />
          </div>
        </div>
      )}
    </section>
  );
}
