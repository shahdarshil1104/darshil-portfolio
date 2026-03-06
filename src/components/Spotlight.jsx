import React, { useEffect, useRef } from "react";
import { clamp } from "../lib/utils.js";
export default function Spotlight({ className = "", children }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = clamp(e.clientX - r.left, 0, r.width);
      const y = clamp(e.clientY - r.top, 0, r.height);
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, []);
  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-3xl ${className}`}
      style={{
        background:
          "radial-gradient(800px 450px at var(--mx, 20%) var(--my, 20%), rgba(99,102,241,0.22), transparent 60%)," +
          "radial-gradient(650px 400px at calc(var(--mx, 20%) + 120px) calc(var(--my, 20%) + 80px), rgba(236,72,153,0.14), transparent 60%)," +
          "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
      }}
    >
      <div className="relative">{children}</div>
    </div>
  );
}