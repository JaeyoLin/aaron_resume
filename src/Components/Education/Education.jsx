const Education = () => {
  return (
    <section className="rounded-[28px] border border-black/5 bg-white/85 p-6 shadow-sm print:rounded-none print:border-0 print:bg-white print:p-0 print:shadow-none md:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
            Education
          </p>
          <div className="mt-3 inline-flex rounded-full bg-green-dark/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-green-dark">
            2004 - 2008
          </div>
          <h2 className="mt-4 font-display text-2xl font-bold text-slate-900">
            Ming Chuan University
          </h2>
          <p className="mt-2 text-lg text-slate-700">
            Bachelor Degree, Information Management
          </p>
        </div>
        <p className="max-w-xs text-sm leading-6 text-slate-500">
          Built a foundation in software, information systems, and practical problem solving.
        </p>
      </div>
    </section>
  );
};

export default Education;
