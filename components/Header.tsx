"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { navigation, site } from "@/data/site";

function formatLiveMeta(date: Date) {
  const day = date.getDate().toString().padStart(2, "0");
  const enMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const hh = date.getHours().toString().padStart(2, "0");
  const mm = date.getMinutes().toString().padStart(2, "0");
  return `${day} ${enMonths[date.getMonth()]} — ${hh}:${mm} ${site.location}`;
}

function isNavActive(href: string, pathname: string) {
  if (href === "/about") return pathname === "/about";
  if (href === "/") return pathname === "/";
  return false;
}

export default function Header() {
  const pathname = usePathname();
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);
  const [meta, setMeta] = useState<string | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const tick = () => setMeta(formatLiveMeta(new Date()));
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur-sm transition-all duration-500 ${
        compact ? "py-3" : "py-4"
      }`}
    >
      <div className="container-site flex items-start justify-between gap-6">
        <a href="/" className="group block min-w-0">
          <p className="text-[clamp(17px,1.5vw,20px)] font-medium leading-none tracking-tight text-[#111]">
            {site.name}.
          </p>
          <p className="mt-1.5 min-h-[24px] text-[17px] leading-tight text-muted-nav">
            {meta ?? `${site.location}`}
          </p>
        </a>

        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Main navigation"
        >
          {navigation.map((item) => {
            const isActive = isNavActive(item.href, pathname);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`text-[17px] transition-colors duration-300 ${
                  isActive
                    ? "text-[#111]"
                    : "text-muted-nav hover:text-[#111]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-px w-full bg-[#111] transition-transform duration-300 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-[#111] transition-transform duration-300 ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-white md:hidden"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <nav
              className="container-site flex h-full flex-col justify-center gap-8"
              aria-label="Mobile navigation"
            >
              {navigation.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-[clamp(36px,10vw,56px)] font-light tracking-tight text-[#111]"
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.45 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
