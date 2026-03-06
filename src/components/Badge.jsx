import React from "react";
export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/12 dark:border-white/12 border-black/10 bg-white/6 dark:bg-white/6 bg-black/4 px-2.5 py-1 text-xs text-zinc-200 dark:text-zinc-200 text-slate-700">
      {children}
    </span>
  );
}