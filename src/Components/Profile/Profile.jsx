import {
  VscMail,
  VscGithubInverted,
} from 'react-icons/vsc';

import Avatar from '@Assets/images/avatar.jpeg';

const highlights = [
  'Enterprise systems',
  'AI integration',
  'Platform delivery',
  'Kaohsiung, Taiwan',
];

const Profile = () => {
  return (
    <section className="overflow-hidden rounded-[36px] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,255,255,0.86))] p-6 shadow-[0_24px_70px_rgba(18,32,27,0.08)] backdrop-blur-xl print:rounded-none print:border-0 print:bg-white print:p-0 print:shadow-none md:p-8">
      <div className="grid gap-8 lg:grid-cols-[240px,1fr] lg:items-start">
        <div className="space-y-5">
          <img
            className="h-40 w-40 rounded-[28px] object-cover shadow-[0_18px_40px_rgba(18,32,27,0.14)] ring-1 ring-black/5"
            src={Avatar}
            alt="Aaron Lin"
            width="384"
            height="512"
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
              Profile
            </p>
            <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-slate-900">
              Aaron Lin
            </h1>
            <p className="mt-2 text-lg font-semibold text-slate-700">
              Senior Software Engineer
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Kaohsiung City, Taiwan
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            {highlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-full border border-black/5 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700 shadow-sm"
              >
                {highlight}
              </span>
            ))}
          </div>

          <div className="max-w-3xl space-y-4 text-[1.05rem] leading-8 text-slate-700">
            <p>
              Senior software engineer focused on enterprise system development, maintenance, and delivery.
            </p>
            <p>
              I build reliable products, improve engineering workflows, and adapt quickly to new tools.
            </p>
            <p>
              I value ownership, continuous learning, and shipping work on schedule.
            </p>
            <p>
              I aim to improve how things are built, not just finish the task.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/JaeyoLin"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-200 hover:shadow-md"
            >
              <VscGithubInverted />
              GitHub
            </a>
            <a
              href="mailto:jaeyoungsam0427@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-200 hover:shadow-md"
            >
              <VscMail />
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
