const skillGroups = [
  {
    title: 'AI',
    skills: [
      'GitHub Copilot',
      'Claude Code',
      'Codex',
      'Agentic Workflow',
      'Prompt Engineering',
      'Context Engineering',
      'Harness Engineering',
    ],
  },
  {
    title: 'Front-end',
    skills: [
      'React Hooks',
      'JavaScript ES6+',
      'Webpack',
      'HTML5',
      'CSS3',
      'W3C',
    ],
  },
  {
    title: 'Back-end',
    skills: [
      '.NET Framework',
      'PHP',
      'Java, Spring Boot',
      'Node.js',
    ],
  },
  {
    title: 'Database',
    skills: [
      'SQL Server',
      'MySQL',
      'Oracle',
      'Postgres',
      'MongoDB',
    ],
  },
  {
    title: 'Others',
    skills: [
      'GitLab CI/CD',
      'Jenkins',
      'Docker',
      'CI/CD',
      'DevOps',
      'Unit Testing',
      'E2E Testing',
      'Stress Testing',
      'AWS',
    ],
  },
];

const Skills = () => {
  return (
    <section className="rounded-[32px] border border-slate-900/90 bg-slate-950 px-6 py-8 text-white shadow-[0_24px_70px_rgba(18,32,27,0.18)] print:rounded-none print:border-0 print:bg-white print:px-0 print:py-0 print:text-slate-900 print:shadow-none md:px-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/55 print:text-slate-400">
            Skills
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight">
            Capability Map
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-white/70 print:text-slate-500">
          Current strengths across AI-assisted development, front-end delivery, back-end systems, databases, and delivery tooling.
        </p>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur print:border-slate-200 print:bg-white print:backdrop-blur-0"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-xl font-semibold text-white print:text-slate-900">
                {group.title}
              </h3>
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-white/40 print:text-slate-400">
                Focus
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm font-medium text-white/90 shadow-sm print:border-slate-200 print:bg-slate-50 print:text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
