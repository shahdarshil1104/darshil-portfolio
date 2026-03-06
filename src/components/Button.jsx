import React from "react";
export default function Button({ as: Comp = "button", className = "", variant = "primary", ...props }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20";
  const autoPrimary =
    "dark:bg-white/10 dark:hover:bg-white/14 dark:border-white/12 dark:text-white " +
    "bg-black/6 hover:bg-black/10 border border-black/10 text-black";
  const ghost =
    "bg-transparent hover:bg-white/6 dark:hover:bg-white/6 hover:bg-black/4 border border-white/10 dark:border-white/10 border-black/10";
  const styles = variant === "ghost" ? ghost : autoPrimary;
  return <Comp className={`${base} ${styles} ${className}`} {...props} />;
}