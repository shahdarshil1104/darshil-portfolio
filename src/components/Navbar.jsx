import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";
import profile from "../data/profile.json";
const nav = [{ to: "/", label: "Home" }, { to: "/projects", label: "Projects" }];
export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl glass shadow-glow">
          <div className="flex items-center justify-between px-4 py-3">
            <Link to="/" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl border border-white/10 dark:border-white/10 border-black/10 bg-white/10 dark:bg-white/10 bg-black/6 grid place-items-center font-display font-semibold">
                {profile.name?.[0] || "D"}
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold">{profile.name}</div>
                <div className="text-xs text-zinc-400 dark:text-zinc-400 text-slate-600">{profile.role}</div>
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-2">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-xl text-sm border transition ${
                      isActive
                        ? "bg-white/10 dark:bg-white/10 bg-black/6 border-white/14 dark:border-white/14 border-black/10"
                        : "bg-transparent border-transparent hover:bg-white/6 dark:hover:bg-white/6 hover:bg-black/4"
                    }`
                  }
                  aria-current={pathname === n.to ? "page" : undefined}
                >
                  {n.label}
                </NavLink>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <a
                href={profile.socials?.linkedin}
                className="hidden sm:inline-flex rounded-xl border border-white/10 dark:border-white/10 border-black/10 bg-white/6 dark:bg-white/6 bg-black/4 px-3 py-2 text-sm hover:bg-white/10 dark:hover:bg-white/10 hover:bg-black/6 transition"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}