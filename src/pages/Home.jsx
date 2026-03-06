import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Phone } from "lucide-react";
import Spotlight from "../components/Spotlight.jsx";
import Section from "../components/Section.jsx";
import Button from "../components/Button.jsx";
import Badge from "../components/Badge.jsx";

import profile from "../data/profile.json";
import projects from "../data/projects.json";
import experience from "../data/experience.json";
import skills from "../data/skills.json";
import education from "../data/education.json";

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{profile.name} — Portfolio</title>
        <meta name="description" content={profile.summary} />
        <meta property="og:title" content={`${profile.name} — Portfolio`} />
        <meta property="og:description" content={profile.summary} />
      </Helmet>

      <Spotlight className="glass p-6 sm:p-10 shadow-glow">
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <div className="text-xs tracking-[0.25em] uppercase text-zinc-400">
                {profile.role}
              </div>

              <h1 className="mt-3 text-3xl sm:text-5xl font-display font-semibold leading-tight">
                <span className="gradient-text">{profile.headline}</span>
              </h1>

              <p className="mt-4 text-base sm:text-lg text-zinc-300 dark:text-zinc-300 text-slate-700 max-w-2xl">
                {profile.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button as="a" href="/projects" className="group">
                  View Work{" "}
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition" />
                </Button>
                <Button as="a" href={profile.resumeUrl} variant="ghost">
                  Download Resume <Download size={16} />
                </Button>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a className="glass rounded-xl p-2 hover:bg-white/10 transition" href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <Github size={18} />
                </a>
                <a className="glass rounded-xl p-2 hover:bg-white/10 transition" href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
                <a className="glass rounded-xl p-2 hover:bg-white/10 transition" href={profile.socials.phone} aria-label="Phone">
                  <Phone size={18} />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-4">
            <div className="grid gap-3">
              {profile.stats.map((s) => (
                <div key={s.label} className="glass rounded-2xl p-4">
                  <div className="text-xs text-zinc-400 dark:text-zinc-400 text-slate-600">{s.label}</div>
                  <div className="mt-1 text-lg font-semibold">{s.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Spotlight>

      <Section id="featured" eyebrow="Selected" title="Featured projects">
        <div className="grid gap-4 md:grid-cols-3">
          {featured.map((p) => (
            <a
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="glass rounded-2xl p-5 shadow-glow hover:translate-y-[-2px] transition"
            >
              <div className="text-sm text-zinc-400 dark:text-zinc-400 text-slate-600">{p.category}</div>
              <div className="mt-1 text-lg font-semibold">{p.title}</div>
              <div className="mt-2 text-sm text-zinc-300 dark:text-zinc-300 text-slate-700">{p.tagline}</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {(p.stack || []).slice(0, 5).map((s) => <Badge key={s}>{s}</Badge>)}
              </div>
            </a>
          ))}
        </div>
      </Section>

      <Section id="skills" eyebrow="Toolbox" title="Skills">
        <div className="grid gap-4 md:grid-cols-2">
          {skills.groups.map((g) => (
            <div key={g.name} className="glass rounded-2xl p-5">
              <div className="font-semibold">{g.name}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.items.map((i) => <Badge key={i}>{i}</Badge>)}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 glass rounded-2xl p-5">
          <div className="text-sm text-zinc-400 dark:text-zinc-400 text-slate-600">Currently learning</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {skills.learning.map((i) => <Badge key={i}>{i}</Badge>)}
          </div>
        </div>
      </Section>

      <Section id="experience" eyebrow="Timeline" title="Experience">
        <div className="grid gap-4">
          {experience.map((e) => (
            <div key={e.title + e.company} className="glass rounded-2xl p-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="font-semibold">{e.title}</div>
                <div className="text-sm text-zinc-400 dark:text-zinc-400 text-slate-600">
                  {e.company}{e.location ? ` • ${e.location}` : ""} • {e.date}
                </div>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-zinc-300 dark:text-zinc-300 text-slate-700">
                {e.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/35 dark:bg-white/35 bg-black/25" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="education" eyebrow="Education" title="Academic background">
        <div className="grid gap-4 md:grid-cols-2">
          {education.map((ed) => (
            <div key={ed.degree} className="glass rounded-2xl p-5">
              <div className="font-semibold">{ed.degree}</div>
              <div className="mt-1 text-sm text-zinc-400 dark:text-zinc-400 text-slate-600">
                {ed.school} • {ed.date}
              </div>
              <ul className="mt-3 space-y-2 text-sm text-zinc-300 dark:text-zinc-300 text-slate-700">
                {ed.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/35 dark:bg-white/35 bg-black/25" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" eyebrow="Let’s talk" title="Contact">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="glass rounded-2xl p-6">
            <div className="font-semibold">Send a message</div>
            <p className="mt-2 text-sm text-zinc-300 dark:text-zinc-300 text-slate-700">
              This form uses a mailto fallback (no backend). If you want, I can wire EmailJS or a serverless function.
            </p>
            <form
              className="mt-4 space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const name = fd.get("name");
                const email = fd.get("email");
                const message = fd.get("message");
                const subject = encodeURIComponent(`Portfolio contact from ${name}`);
                const body = encodeURIComponent(`Email: ${email}\n\n${message}`);
                window.location.href = `${profile.socials.email}?subject=${subject}&body=${body}`;
              }}
            >
              <input name="name" required placeholder="Your name" className="w-full rounded-xl px-4 py-3 bg-white/6 dark:bg-white/6 bg-black/4 border border-white/10 dark:border-white/10 border-black/10" />
              <input name="email" type="email" required placeholder="Email address" className="w-full rounded-xl px-4 py-3 bg-white/6 dark:bg-white/6 bg-black/4 border border-white/10 dark:border-white/10 border-black/10" />
              <textarea name="message" required placeholder="Message" rows="5" className="w-full rounded-xl px-4 py-3 bg-white/6 dark:bg-white/6 bg-black/4 border border-white/10 dark:border-white/10 border-black/10" />
              <Button type="submit">Send</Button>
            </form>
          </div>

          <div className="glass rounded-2xl p-6">
            <div className="font-semibold">Quick info</div>
            <div className="mt-3 space-y-2 text-sm text-zinc-300 dark:text-zinc-300 text-slate-700">
              <div><span className="text-zinc-400">Location:</span> {profile.location}</div>
              <div><span className="text-zinc-400">Timezone:</span> {profile.timezone}</div>
              <div className="pt-2 flex flex-wrap gap-3">
                <a className="hover:underline" href={profile.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="hover:underline" href={profile.socials.github} target="_blank" rel="noreferrer">GitHub</a>
                <a className="hover:underline" href={profile.socials.email}>Email</a>
                <a className="hover:underline" href={profile.socials.phone}>Phone</a>
              </div>
              <div className="pt-4 text-xs text-zinc-500">
                Recruiter note: outcomes are highlighted in Projects as measurable impact.
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
