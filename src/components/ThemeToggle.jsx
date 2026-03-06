import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const t = document.documentElement.dataset.theme || "dark";
    setTheme(t);
  }, []);
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  };
  return (
    <button
      onClick={toggle}
      className="inline-flex items-center justify-center rounded-xl border border-white/10 dark:border-white/10 border-black/10 bg-white/6 dark:bg-white/6 bg-black/4 p-2 hover:bg-white/10 dark:hover:bg-white/10 hover:bg-black/6 transition"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}