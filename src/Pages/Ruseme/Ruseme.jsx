import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { MdOutlinePrint } from 'react-icons/md';

import {
  Education,
  Profile,
  Skills,
  WorkExperience,
} from '@Components';

const Ruseme = () => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: 'Aaron Lin Resume',
  });

  return (
    <div className="mx-auto min-h-screen max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
      <header className="sticky top-3 z-20 mb-6 rounded-full border border-white/75 bg-white/82 px-4 py-3 shadow-[0_16px_50px_rgba(18,32,27,0.10)] backdrop-blur-2xl print:hidden">
        <div className="flex items-center justify-between gap-4">
          <nav className="flex items-center gap-3 text-sm font-semibold text-slate-700">
            <span className="rounded-full bg-slate-900 px-3 py-1 text-white shadow-sm">
              Resume
            </span>
            <span className="hidden text-slate-400 sm:inline">
              Senior Software Engineer
            </span>
          </nav>
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(18,32,27,0.18)] transition hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-[0_16px_34px_rgba(18,32,27,0.22)]"
          >
            <MdOutlinePrint />
            Print
          </button>
        </div>
      </header>

      <main ref={componentRef} className="space-y-6 pb-6 print:space-y-4 print:pb-0">
        <Profile />
        <Education />
        <WorkExperience />
        <Skills />
      </main>
    </div>
  );
};

export default Ruseme;
