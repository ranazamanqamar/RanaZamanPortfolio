"use client";

import { motion, useReducedMotion } from "motion/react";

type ServiceShapeProps = {
  index: number;
  className?: string;
};

const boxClass = "h-24 w-24 md:h-[120px] md:w-[120px]";

/** Concentric rings — shrink / expand */
function ShapeRings({ animate }: { animate: boolean }) {
  const svg = (
    <svg viewBox="0 0 160 160" fill="none" aria-hidden="true" className="h-full w-full">
      <circle cx="80" cy="80" r="54" stroke="#111" strokeWidth="1.15" />
      <circle cx="80" cy="80" r="36" stroke="#111" strokeWidth="1.15" />
      <circle cx="80" cy="80" r="18" stroke="#111" strokeWidth="1.15" />
    </svg>
  );

  if (!animate) return <div className={boxClass}>{svg}</div>;

  return (
    <motion.div
      className={boxClass}
      animate={{ scale: [1, 0.82, 1] }}
      transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      style={{ transformOrigin: "center center" }}
    >
      {svg}
    </motion.div>
  );
}

/** Nested cube — continuous spin */
function ShapeCube({ animate }: { animate: boolean }) {
  const svg = (
    <svg viewBox="0 0 160 160" fill="none" aria-hidden="true" className="h-full w-full">
      <path
        d="M80 28 L128 54 L128 106 L80 132 L32 106 L32 54 Z"
        stroke="#111"
        strokeWidth="1.15"
        strokeLinejoin="round"
      />
      <path
        d="M80 28 V80 M32 54 L80 80 L128 54 M32 106 L80 80 L128 106 M80 80 V132"
        stroke="#111"
        strokeWidth="1"
      />
      <path
        d="M80 52 L108 67 L108 97 L80 112 L52 97 L52 67 Z"
        stroke="#111"
        strokeWidth="1.15"
        strokeLinejoin="round"
      />
      <path
        d="M80 52 V80 M52 67 L80 80 L108 67 M52 97 L80 80 L108 97 M80 80 V112"
        stroke="#111"
        strokeWidth="0.9"
      />
    </svg>
  );

  if (!animate) return <div className={boxClass}>{svg}</div>;

  return (
    <motion.div
      className={boxClass}
      animate={{ rotate: 360 }}
      transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
      style={{ transformOrigin: "center center" }}
    >
      {svg}
    </motion.div>
  );
}

/** Staggered rects — separate then reattach */
function ShapeRects({ animate }: { animate: boolean }) {
  const rects = [
    { x: 28, y: 36, w: 52, h: 36, apart: { x: -22, y: -18 } },
    { x: 72, y: 48, w: 60, h: 40, apart: { x: 22, y: -16 } },
    { x: 40, y: 84, w: 48, h: 34, apart: { x: -20, y: 20 } },
    { x: 80, y: 92, w: 44, h: 32, apart: { x: 24, y: 18 } },
  ];

  return (
    <div className={boxClass}>
      <svg viewBox="0 0 160 160" fill="none" aria-hidden="true" className="h-full w-full overflow-visible">
        {rects.map((r, i) =>
          animate ? (
            <motion.rect
              key={i}
              x={r.x}
              y={r.y}
              width={r.w}
              height={r.h}
              stroke="#111"
              strokeWidth="1.15"
              fill="none"
              animate={{
                x: [0, r.apart.x, 0],
                y: [0, r.apart.y, 0],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.05,
              }}
            />
          ) : (
            <rect
              key={i}
              x={r.x}
              y={r.y}
              width={r.w}
              height={r.h}
              stroke="#111"
              strokeWidth="1.15"
              fill="none"
            />
          ),
        )}
      </svg>
    </div>
  );
}

/** Isometric L — soft move in place */
function ShapeLBlock({ animate }: { animate: boolean }) {
  const svg = (
    <svg viewBox="0 0 160 160" fill="none" aria-hidden="true" className="h-full w-full">
      <path
        d="M58 34 L90 50 L90 98 L58 114 L42 106 L42 58 Z"
        stroke="#111"
        strokeWidth="1.15"
        strokeLinejoin="round"
      />
      <path
        d="M58 34 L74 42 L74 90 L58 98 M42 58 L74 74 L90 66 M42 106 L74 90 L90 98"
        stroke="#111"
        strokeWidth="0.9"
      />
      <path
        d="M90 82 L122 66 L138 74 L138 98 L106 114 L90 106 Z"
        stroke="#111"
        strokeWidth="1.15"
        strokeLinejoin="round"
      />
      <path
        d="M90 82 L106 90 L106 114 M122 66 L106 90 L138 74 M122 90 L138 98"
        stroke="#111"
        strokeWidth="0.9"
      />
    </svg>
  );

  if (!animate) return <div className={boxClass}>{svg}</div>;

  return (
    <motion.div
      className={boxClass}
      animate={{ x: [-10, 10, -10], y: [6, -6, 6] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      {svg}
    </motion.div>
  );
}

/** Nested diamonds — scale pulse only (no spin) */
function ShapeDiamond({ animate }: { animate: boolean }) {
  const svg = (
    <svg viewBox="0 0 160 160" fill="none" aria-hidden="true" className="h-full w-full">
      <path
        d="M80 28 L132 80 L80 132 L28 80 Z"
        stroke="#111"
        strokeWidth="1.15"
        strokeLinejoin="round"
      />
      <path
        d="M80 52 L108 80 L80 108 L52 80 Z"
        stroke="#111"
        strokeWidth="1.15"
        strokeLinejoin="round"
      />
    </svg>
  );

  if (!animate) return <div className={boxClass}>{svg}</div>;

  return (
    <motion.div
      className={boxClass}
      animate={{ scale: [1, 0.86, 1] }}
      transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      style={{ transformOrigin: "center center" }}
    >
      {svg}
    </motion.div>
  );
}

const shapeComponents = [ShapeRings, ShapeCube, ShapeRects, ShapeLBlock, ShapeDiamond];

export default function ServiceShape({ index, className = "" }: ServiceShapeProps) {
  const reduce = useReducedMotion();
  const Shape = shapeComponents[index % shapeComponents.length];

  return (
    <div className={className}>
      <Shape animate={!reduce} />
    </div>
  );
}
