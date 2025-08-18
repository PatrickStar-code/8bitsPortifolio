"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function PixelCursor() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xs = useSpring(x, { stiffness: 500, damping: 35 });
  const ys = useSpring(y, { stiffness: 500, damping: 35 });

  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      // snap to 2px grid for sharper 8-bit feel
      const gx = Math.round(e.clientX / 2) * 2;
      const gy = Math.round(e.clientY / 2) * 2;
      x.set(gx);
      y.set(gy);
    };

    const checkPointer = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const clickable = !!target?.closest(
        "a, button, [role='button'], .cursor-pointer, input[type='submit'], input[type='button']"
      );
      setIsPointer(clickable);
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseover", checkPointer);
    document.addEventListener("mouseout", checkPointer);

    document.documentElement.style.cursor = "none"; // hide default cursor
    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", checkPointer);
      document.removeEventListener("mouseout", checkPointer);
      document.documentElement.style.cursor = "";
    };
  }, [x, y]);

  return (
    <motion.div
      className="fixed left-0 top-0 z-[9999] pointer-events-none"
      style={{ translateX: xs, translateY: ys }}
    >
      {isPointer ? (
        // Pixel hand (smaller, cleaner)
        <svg
          width="32"
          height="32"
          shapeRendering="crispEdges"
          className="drop-shadow-[1px_1px_0px_black]"
        >
          <path
            d="M8 10h2v6h2V8h2v8h2v-6h2v10h2V12h2v14H10l-2-2z"
            fill="#3B82F6"
            stroke="black"
            strokeWidth="1"
          />
        </svg>
      ) : (
        // Pixel arrow (medium size, sharper)
        <svg
          width="32"
          height="32"
          shapeRendering="crispEdges"
          className="drop-shadow-[1px_1px_0px_black]"
        >
          <path
            d="M0 0 L0 18 L5 13 L8 20 L11 18 L8 12 L14 12 Z"
            fill="#3B82F6"
            stroke="black"
            strokeWidth="1"
          />
        </svg>
      )}
    </motion.div>
  );
}
