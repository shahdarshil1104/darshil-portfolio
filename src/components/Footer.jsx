import React from "react";
import profile from "../data/profile.json";
export default function Footer() {
  return (
    <footer className="border-t border-white/8 dark:border-white/8 border-black/8 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div>
            <div className="font-semibold">{profile.name}</div>
            <div className="text-sm text-zinc-400 dark:text-zinc-400 text-slate-600">
              {profile.location} • {profile.timezone}
            </div>
          </div>
          <div className="flex gap-3 text-sm">
            <a className="hover:underline" href={profile.socials.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="hover:underline" href={profile.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="hover:underline" href={profile.socials.email}>Email</a>
          </div>
        </div>
        <div className="mt-6 text-xs text-zinc-500">
          © {new Date().getFullYear()} • Built with React + Tailwind + Framer Motion
        </div>
      </div>
    </footer>
  );
}