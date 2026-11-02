"use client";

import { useEffect, useRef } from "react";

const LERP = 0.15;
const RING_OPACITY = 0.25;

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -200, y: -200 });
  const ring = useRef({ x: -200, y: -200 });
  const raf = useRef(0);
  const enabledRef = useRef(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const html = document.documentElement;

    const setVisible = (on: boolean) => {
      if (ringRef.current) {
        ringRef.current.style.opacity = on ? String(RING_OPACITY) : "0";
      }
      if (dotRef.current) {
        dotRef.current.style.opacity = on ? "1" : "0";
      }
    };

    const stop = () => {
      enabledRef.current = false;
      html.classList.remove("cursor-custom");
      setVisible(false);
      cancelAnimationFrame(raf.current);
    };

    const tick = () => {
      if (!enabledRef.current) return;

      ring.current.x += (mouse.current.x - ring.current.x) * LERP;
      ring.current.y += (mouse.current.y - ring.current.y) * LERP;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`;
      }

      raf.current = requestAnimationFrame(tick);
    };

    const start = () => {
      if (enabledRef.current) return;
      enabledRef.current = true;
      html.classList.add("cursor-custom");
      raf.current = requestAnimationFrame(tick);
    };

    const sync = () => {
      if (fine.matches && !reduce.matches) start();
      else stop();
    };

    const onMove = (e: MouseEvent) => {
      if (!enabledRef.current) return;

      const first = mouse.current.x < -100;
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (first) {
        ring.current.x = e.clientX;
        ring.current.y = e.clientY;
        if (ringRef.current) {
          ringRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
        }
      }

      setVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => {
      if (enabledRef.current) setVisible(true);
    };

    sync();
    fine.addEventListener("change", sync);
    reduce.addEventListener("change", sync);
    window.addEventListener("mousemove", onMove, { passive: true });
    html.addEventListener("mouseleave", onLeave);
    html.addEventListener("mouseenter", onEnter);

    return () => {
      stop();
      fine.removeEventListener("change", sync);
      reduce.removeEventListener("change", sync);
      window.removeEventListener("mousemove", onMove);
      html.removeEventListener("mouseleave", onLeave);
      html.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{ mixBlendMode: "exclusion" }}
      aria-hidden="true"
    >
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 h-10 w-10 rounded-full bg-white"
        style={{
          opacity: 0,
          transform: "translate3d(-200px, -200px, 0) translate(-50%, -50%)",
          willChange: "transform",
        }}
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-10 h-4 w-4 rounded-full bg-white"
        style={{
          opacity: 0,
          transform: "translate3d(-200px, -200px, 0) translate(-50%, -50%)",
          willChange: "transform",
        }}
      />
    </div>
  );
}
