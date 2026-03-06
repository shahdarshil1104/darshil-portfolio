import clsx from "clsx";
export function cn(...args) { return clsx(...args); }
export function clamp(n, min, max) { return Math.max(min, Math.min(max, n)); }
