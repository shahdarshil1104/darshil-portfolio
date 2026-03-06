import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Badge from "../components/Badge.jsx";
import projects from "../data/projects.json";

export default function ProjectDetail() {
  const { slug } = useParams();
  const p = projects.find((x) => x.slug === slug);

  if (!p) {
    return (
      <div className="glass rounded-3xl p-10 shadow-glow">
        <div className="text-2xl font-semibold">Project not found</div>
        <Link to="/projects" className="mt-4 inline-flex items-center gap-2 hover:underline">
          <ArrowLeft size={16} /> Back to projects
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{p.title} — Darshil Shah</title>
        <meta name="description" content={p.tagline} />
      </Helmet>

      <div className="glass rounded-3xl p-6 sm:p-10 shadow-glow">
        <Link to="/projects" className="inline-flex items-center gap-2 text-sm opacity-90 hover:opacity-100">
          <ArrowLeft size={16} /> Back
        </Link>

        <div className="mt-4 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div>
            <div className="text-sm text-zinc-400 dark:text-zinc-400 text-slate-600">{p.category}</div>
            <h1 className="mt-2 text-3xl sm:text-4xl font-display font-semibold">{p.title}</h1>
            <p className="mt-3 text-zinc-300 dark:text-zinc-300 text-slate-700">{p.tagline}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {(p.stack || []).map((s) => <Badge key={s}>{s}</Badge>)}
            </div>
          </div>

          <div className="flex gap-3">
            {p.links?.repo && p.links.repo.length > 0 && (
              <a className="glass rounded-xl px-4 py-2 inline-flex items-center gap-2 hover:bg-white/10 transition" href={p.links.repo} target="_blank" rel="noreferrer">
                <Github size={16} /> Repo
              </a>
            )}
            {p.links?.demo && p.links.demo.length > 0 && (
              <a className="glass rounded-xl px-4 py-2 inline-flex items-center gap-2 hover:bg-white/10 transition" href={p.links.demo} target="_blank" rel="noreferrer">
                <ExternalLink size={16} /> Demo
              </a>
            )}
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="text-xs tracking-[0.25em] uppercase text-zinc-400">Problem</div>
              <p className="mt-2 text-sm text-zinc-300 dark:text-zinc-300 text-slate-700">{p.problem}</p>
            </div>

            <div>
              <div className="text-xs tracking-[0.25em] uppercase text-zinc-400">Approach</div>
              <ul className="mt-2 space-y-2 text-sm text-zinc-300 dark:text-zinc-300 text-slate-700">
                {(p.approach || []).map((a) => (
                  <li key={a} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/35 dark:bg-white/35 bg-black/25" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-xs tracking-[0.25em] uppercase text-zinc-400">Outcome</div>
              <ul className="mt-2 space-y-2 text-sm text-zinc-300 dark:text-zinc-300 text-slate-700">
                {(p.outcome || []).map((o) => (
                  <li key={o} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/35 dark:bg-white/35 bg-black/25" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="glass rounded-2xl p-5 h-fit">
            <div className="font-semibold">Highlights</div>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300 dark:text-zinc-300 text-slate-700">
              {(p.metrics || []).map((m) => (
                <li key={m} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/35 dark:bg-white/35 bg-black/25" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </>
  );
}
