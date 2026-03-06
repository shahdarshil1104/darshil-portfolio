import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import ProjectCard from "../components/ProjectCard.jsx";
import ProjectFilterBar from "../components/ProjectFilterBar.jsx";
import projects from "../data/projects.json";

export default function Projects() {
  const [active, setActive] = useState("All");
  const filters = useMemo(() => {
    const cats = Array.from(new Set(projects.map((p) => p.category)));
    return ["All", ...cats];
  }, []);

  const list = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <>
      <Helmet>
        <title>Projects — Darshil Shah</title>
        <meta name="description" content="Projects and case studies." />
      </Helmet>

      <div className="glass rounded-3xl p-6 sm:p-10 shadow-glow">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="text-xs tracking-[0.25em] uppercase text-zinc-400">Work</div>
            <h1 className="mt-2 text-3xl sm:text-4xl font-display font-semibold">
              Projects & case studies
            </h1>
            <p className="mt-2 text-sm text-zinc-300 dark:text-zinc-300 text-slate-700">
              Problem → Approach → Outcome format, built for recruiter scanning.
            </p>
          </div>
          <ProjectFilterBar filters={filters} active={active} setActive={setActive} />
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => <ProjectCard key={p.slug} p={p} />)}
        </div>
      </div>
    </>
  );
}
