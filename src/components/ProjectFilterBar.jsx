import React from "react";
export default function ProjectFilterBar({ filters, active, setActive }) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setActive(f)}
          className={
            "px-3 py-2 rounded-xl text-sm border transition " +
            (active === f
              ? "bg-white/10 dark:bg-white/10 bg-black/6 border-white/14 dark:border-white/14 border-black/10"
              : "bg-transparent border-white/10 dark:border-white/10 border-black/10 hover:bg-white/6 dark:hover:bg-white/6 hover:bg-black/4")
          }
        >
          {f}
        </button>
      ))}
    </div>
  );
}