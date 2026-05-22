import BOK_LOGO from '../../Assets/images/BOK_logo.svg';
import CUB_LOGO from '../../Assets/images/CUB_logo.svg';
import WISTRON_LOGO from '../../Assets/images/Wistron_logo.png';
import DDSC_LOGO from '../../Assets/images/DDSC_logo.png';

const experiences = [
  {
    company: 'Cathay United Bank',
    role: 'Senior Software Engineer',
    duration: 'Mar 2023 - Present',
    logo: CUB_LOGO,
    logoClass: 'h-10 w-auto',
    summary: 'Owned the internal IDP platform, project maintenance, and AI integration work for enterprise systems.',
    bullets: [
      'Developed and maintained the internal IDP platform.',
      'Owned project development and maintenance for internal systems.',
      'Implemented AI features and integrations to support engineering workflows.',
      'Collaborated with stakeholders to deliver reliable releases on schedule.',
    ],
  },
  {
    company: 'Bank of Kaohsiung',
    role: 'IT Specialist',
    duration: 'Sep 2020 - Feb 2023',
    logo: BOK_LOGO,
    logoClass: 'h-16 w-16 object-contain',
    summary: 'Maintained banking systems and supported infrastructure delivery for internal applications.',
    bullets: [
      'Maintained core systems, including the official website and SWIFT Alliance.',
      'Delivered system development tasks requested by management.',
      'Built CI/CD workflows for infrastructure automation.',
    ],
  },
  {
    company: 'Wistron Corporation',
    role: 'Senior R&D Engineer',
    duration: 'Mar 2015 - Aug 2020',
    logo: WISTRON_LOGO,
    logoClass: 'h-10 w-auto',
    summary: 'Worked across full-stack delivery, DevOps practices, internal training, and code review support.',
    bullets: [
      'Worked as a full-stack engineer with DevOps responsibilities.',
      'Supported project members with implementation and code review.',
      'Delivered internal training for technical skills in front-end and DevOps.',
      'Researched and recommended solutions for management-driven initiatives.',
    ],
  },
  {
    company: 'Dimerco Data System Corporation',
    role: 'Web Developer',
    duration: 'Feb 2012 - Feb 2015',
    logo: DDSC_LOGO,
    logoClass: 'h-14 w-auto',
    summary: 'Built customer-facing and internal systems for travel and logistics-related projects.',
    bullets: [
      'Delivered project development work for EVA Air ticket booking and Sky Shop.',
      'Built and supported the New Taiwan Kubota internal system.',
      'Supported system maintenance and enhancements.',
    ],
  },
];

const WorkExperience = () => {
  return (
    <section className="rounded-[32px] border border-white/75 bg-white/90 p-6 shadow-[0_20px_60px_rgba(18,32,27,0.06)] print:rounded-none print:border-0 print:bg-white print:p-0 print:shadow-none md:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
            Experience
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900">
            Work History
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-slate-500">
          Enterprise delivery, banking systems, DevOps, and AI integration across four long-running roles.
        </p>
      </div>

      <div className="mt-6 space-y-4">
        {experiences.map((experience) => (
          <article
            key={`${experience.company}-${experience.duration}`}
            className="relative overflow-hidden rounded-[28px] border border-black/5 bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(250,250,248,0.94))] p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md print:break-inside-avoid print:rounded-none print:border-0 print:p-0 print:shadow-none"
          >
            <div className="absolute left-6 top-6 h-[calc(100%-3rem)] w-px bg-gradient-to-b from-slate-300 via-slate-200 to-transparent" />
            <div className="relative flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <img
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    className={experience.logoClass}
                  />
                  <div>
                    <h3 className="font-display text-2xl font-bold text-slate-900">
                      {experience.company}
                    </h3>
                    <p className="text-lg font-semibold text-slate-700">
                      {experience.role}
                    </p>
                  </div>
                </div>
                <p className="max-w-3xl text-base leading-7 text-slate-600">
                  {experience.summary}
                </p>
              </div>
              <span className="inline-flex shrink-0 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm">
                {experience.duration}
              </span>
            </div>

            <ul className="relative mt-5 space-y-3 text-base leading-7 text-slate-700">
              {experience.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex gap-3"
                >
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-green-dark" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
