import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Badge from "./Badge.jsx";
export default function ProjectCard({ p }) {
  return (
    <div className="glass rounded-2xl p-5 shadow-glow hover:translate-y-[-2px] transition">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-sm text-zinc-400 dark:text-zinc-400 text-slate-600">{p.category}</div>
          <h3 className="mt-1 text-lg font-semibold">{p.title}</h3>
          <p className="mt-2 text-sm text-zinc-300 dark:text-zinc-300 text-slate-700">{p.tagline}</p>
        </div>
        <Link to={`/projects/${p.slug}`} className="inline-flex items-center gap-1 text-sm opacity-90 hover:opacity-100">
          View <ArrowUpRight size={16} />
        </Link>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {(p.stack || []).slice(0, 6).map((s) => <Badge key={s}>{s}</Badge>)}
      </div>
      <ul className="mt-4 space-y-1 text-sm text-zinc-300 dark:text-zinc-300 text-slate-700">
        {(p.metrics || []).slice(0, 3).map((m) => (
          <li key={m} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/35 dark:bg-white/35 bg-black/25" />
            <span>{m}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}