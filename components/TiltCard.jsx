"use client";

import { useRef } from "react";

/**
 * Wraps a book graphic (or any element) and tilts it in 3D following the
 * cursor, like a light physical object reacting to where you're looking
 * at it from. Resets smoothly back to neutral when the cursor leaves.
 */
export default function TiltCard({ children, className = "", maxTilt = 16 }) {
  const wrapRef = useRef(null);
  const frame = useRef(null);

  function handleMouseMove(e) {
    const el = wrapRef.current;
    if (!el) return;

    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const x = (e.clientX - rect.left) / rect.width; // 0 -> 1
      const y = (e.clientY - rect.top) / rect.height; // 0 -> 1

      const rotateY = (x - 0.5) * 2 * maxTilt; // left/right
      const rotateX = (0.5 - y) * 2 * maxTilt; // up/down

      el.style.transition = "transform .05s linear";
      el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  }

  function handleMouseLeave() {
    const el = wrapRef.current;
    if (!el) return;
    if (frame.current) cancelAnimationFrame(frame.current);
    el.style.transition = "transform .5s ease";
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  }

  return (
    <div
      className={className}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      ref={wrapRef}
      style={{ willChange: "transform" }}
    >
      {children}
    </div>
  );
}
