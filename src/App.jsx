import { useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const skills = {
    programming: ["Python", "SQL", "Java"],
    dataEngineering: [
      "ETL Pipelines",
      "Data Modeling",
      "Data Warehousing",
      "Lakehouse Architecture",
      "Data Validation",
    ],
    bigData: ["Apache Kafka", "Apache Spark", "Real-Time Data Processing"],
    orchestration: ["Apache Airflow", "DAG Scheduling", "Pipeline Monitoring"],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "Azure SQL"],
    cloud: [
      "Microsoft Azure",
      "Azure Data Lake",
      "Blob Storage",
      "AWS EC2",
      "AWS S3",
    ],
    ml: [
      "Random Forest",
      "Isolation Forest",
      "LOF",
      "One-Class SVM",
      "Feature Engineering",
      "Model Monitoring",
    ],
    visualization: ["Tableau", "Power BI"],
    tools: ["Git", "GitHub", "Jupyter Notebook", "VS Code"],
  };

  const projects = [
    {
      title: "Real-Time Banking Data Engineering Platform",
      period: "2025 – 2026",
      description:
        "Designed an end-to-end real-time banking data platform for ingestion, processing, analytics, KPI tracking, and anomaly detection.",
      points: [
        "Built real-time transaction ingestion and processing workflows.",
        "Designed automated ETL pipelines for validation and transformation.",
        "Tracked KPIs like processing latency, data accuracy, and pipeline reliability.",
        "Created analytics-ready datasets for reporting and fraud detection workflows.",
      ],
      stack: ["Python", "SQL", "Kafka", "Spark", "Azure", "Airflow"],
    },
    {
      title: "Limited Random Forest Research Project",
      period: "2023 – 2024",
      description:
        "Developed an enhanced Random Forest model to improve prediction accuracy and efficiency.",
      points: [
        "Designed custom feature importance logic.",
        "Improved splitting strategy to reduce randomness.",
        "Achieved 97.96% accuracy and F1-score.",
        "Integrated with scikit-learn pipeline for scalability.",
      ],
      stack: ["Python", "Machine Learning", "scikit-learn", "Research"],
    },
  ];

  const experience = [
    {
      role: "AI/ML Intern",
      company: "Bhavi Technologies Pvt. Ltd., India",
      period: "May 2023 – Apr 2024",
      points: [
        "Built and maintained data pipelines for annotation, preprocessing, and training workflows.",
        "Improved dataset reliability through data validation and transformation.",
        "Optimized feature engineering workflows, reducing execution time by 25%.",
        "Generated analytical insights to improve model and workflow performance.",
      ],
    },
    {
      role: "Project Intern",
      company: "Computer Centre, MSU Baroda, India",
      period: "Jun 2022 – Aug 2022",
      points: [
        "Designed and executed SQL queries for relational databases.",
        "Supported backend development using ASP.NET and MySQL.",
        "Worked on testing, troubleshooting, and documentation for system reliability.",
      ],
    },
  ];

  const education = [
    {
      degree: "Master of Applied Computing",
      school: "Wilfrid Laurier University",
      period: "Jan 2025 – Apr 2026",
    },
    {
      degree: "Bachelor of Technology, Computer Science & Engineering",
      school: "MSU Baroda",
      period: "Aug 2020 – Apr 2024",
      extra: "CGPA: 9.08 / 10.0",
    },
  ];

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Education", link: "#education" },
    { name: "Contact", link: "#contact" },
  ];

  const tagClass =
    "rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200";

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-2xl font-bold tracking-wide text-cyan-300">
            Darshil Shah
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="text-sm font-medium text-slate-300 transition hover:text-cyan-300"
              >
                {item.name}
              </a>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-cyan-400/40 px-5 py-2.5 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
            >
              View Resume
            </a>
          </div>

          <button
            className="rounded-lg border border-white/10 px-3 py-2 text-sm md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Menu
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-slate-900 px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="text-slate-300 transition hover:text-cyan-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                target="_blank"
                rel="noreferrer"
                className="w-fit rounded-xl border border-cyan-400/40 px-5 py-2.5 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
              >
                View Resume
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative overflow-hidden px-6 py-20 md:py-28"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.18),_transparent_30%),radial-gradient(circle_at_left,_rgba(59,130,246,0.18),_transparent_35%)]"></div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">
              DATA ENGINEERING • ANALYTICS • MACHINE LEARNING
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Building scalable data systems and intelligent analytics solutions.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Graduate student in Applied Computing with experience in data
              engineering, workflow optimization, analytics, cloud platforms,
              and machine learning systems.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-105"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300"
              >
                Contact Me
              </a>

              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-cyan-400/40 px-6 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
              >
                View Resume
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className={tagClass}>Ontario, Canada</span>
              <span className={tagClass}>Python</span>
              <span className={tagClass}>SQL</span>
              <span className={tagClass}>Azure</span>
              <span className={tagClass}>Kafka</span>
              <span className={tagClass}>Spark</span>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur">
            <div className="mb-6">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                Quick Snapshot
              </p>
              <h2 className="mt-3 text-3xl font-bold">Portfolio Overview</h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <p className="text-sm text-slate-400">Education</p>
                <p className="mt-2 font-semibold">Master of Applied Computing</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <p className="text-sm text-slate-400">Focus</p>
                <p className="mt-2 font-semibold">Building Data Solutions & Systems</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <p className="text-sm text-slate-400">Cloud</p>
                <p className="mt-2 font-semibold">Azure + AWS</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <p className="text-sm text-slate-400">Visualization</p>
                <p className="mt-2 font-semibold">Tableau + Power BI</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
          About
        </p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          Turning data into impact
        </h2>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-lg leading-8 text-slate-300">
              I specialize in designing and managing end-to-end data workflows,
              ensuring data quality, KPI tracking, and creating analytics
              solutions that support business decisions and operational
              performance.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold">Core Skills</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {[
                ...skills.programming,
                ...skills.dataEngineering,
                ...skills.bigData,
                ...skills.orchestration,
              ].map((item) => (
                <span key={item} className={tagClass}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Projects
        </p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">Featured Work</h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-1 hover:border-cyan-300/40"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
                  {project.period}
                </span>
              </div>

              <p className="mt-4 leading-7 text-slate-300">
                {project.description}
              </p>

              <ul className="mt-5 space-y-3 text-slate-300">
                {project.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.stack.map((tech) => (
                  <span key={tech} className={tagClass}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Experience
        </p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          Professional Experience
        </h2>

        <div className="mt-10 space-y-6">
          {experience.map((job) => (
            <div
              key={job.role}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold">{job.role}</h3>
                  <p className="text-slate-300">{job.company}</p>
                </div>
                <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300">
                  {job.period}
                </span>
              </div>

              <ul className="mt-5 space-y-3 text-slate-300">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Education
        </p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          Academic Background
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {education.map((item) => (
            <div
              key={item.degree}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <h3 className="text-xl font-semibold">{item.degree}</h3>
              <p className="mt-2 text-slate-300">{item.school}</p>
              <p className="mt-2 text-sm text-slate-400">{item.period}</p>
              {item.extra && (
                <p className="mt-3 font-medium text-cyan-300">{item.extra}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Skills
        </p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">Technical Stack</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <SkillCard title="Programming" items={skills.programming} />
          <SkillCard title="Data Engineering" items={skills.dataEngineering} />
          <SkillCard title="Big Data" items={skills.bigData} />
          <SkillCard title="Orchestration" items={skills.orchestration} />
          <SkillCard title="Databases" items={skills.databases} />
          <SkillCard title="Cloud" items={skills.cloud} />
          <SkillCard title="Machine Learning" items={skills.ml} />
          <SkillCard
            title="Tools & Visualization"
            items={[...skills.visualization, ...skills.tools]}
          />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Contact Me
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Let’s build something impactful
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            I’m open to opportunities in data engineering, analytics, machine
            learning, and cloud-based systems.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <a
              href="mailto:shahdarshil1104@gmail.com"
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 transition hover:border-cyan-300"
            >
              <p className="text-sm text-slate-400">Email</p>
              <p className="mt-2 font-medium">shahdarshil1104@gmail.com</p>
            </a>

            <a
              href="https://github.com/shahdarshil1104"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 transition hover:border-cyan-300"
            >
              <p className="text-sm text-slate-400">GitHub</p>
              <p className="mt-2 font-medium">github.com/shahdarshil1104</p>
            </a>

            <a
              href="https://linkedin.com/in/ds-darshil-shah"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 transition hover:border-cyan-300"
            >
              <p className="text-sm text-slate-400">LinkedIn</p>
              <p className="mt-2 font-medium">linkedin.com/in/ds-darshil-shah</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">
        © 2026 Darshil Shah. Built with React and Tailwind CSS.
      </footer>
    </div>
  );
}

function SkillCard({ title, items }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}