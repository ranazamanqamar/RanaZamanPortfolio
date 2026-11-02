"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { site } from "@/data/site";

const links = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    label: "GitHub",
    value: "github.com/ranazamanqamar",
    href: site.github,
  },
  {
    label: "LinkedIn",
    value: "Rana Zaman Qamar",
    href: site.linkedin,
  },
] as const;

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-gray-100 pt-10 md:pt-16"
    >
      <div className="container-site pb-8 md:pb-12">
        <FadeIn>
          <h2 className="max-w-4xl text-[length:var(--font-size-2xl)] font-light leading-[1.1] tracking-[-0.04em] text-[#111]">
            {site.contactHeading}
          </h2>
          <p className="mt-8 max-w-xl text-[length:var(--font-size-md)] leading-relaxed text-muted-body">
            {site.contactSupport}
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-8 border-t border-gray-200 pt-10 sm:grid-cols-3">
          {links.map((link, index) => (
            <FadeIn key={link.label} delay={index * 0.08}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group block"
              >
                <p className="text-[14px] uppercase tracking-[0.16em] text-muted-nav">
                  {link.label}
                </p>
                <p className="mt-3 text-[clamp(18px,1.6vw,22px)] tracking-tight text-[#111] transition-transform duration-500 group-hover:translate-x-1">
                  {link.value}
                  <span
                    aria-hidden="true"
                    className="ml-2 inline-block text-muted-nav transition-transform duration-500 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </p>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
