import { useRef } from 'react';
import { Link } from 'react-router-dom';
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
      <header className="sticky top-3 z-20 mb-6 rounded-full border border-white/70 bg-white/80 px-4 py-3 shadow-[0_12px_40px_rgba(18,32,27,0.08)] backdrop-blur-xl print:hidden">
        <div className="flex items-center justify-between gap-4">
          <nav className="flex items-center gap-4 text-sm font-semibold text-slate-700">
            <Link to="/" className="transition hover:text-green-dark">Resume</Link>
            <Link to="/portfolio" className="transition hover:text-green-dark">Portfolio</Link>
          </nav>
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 rounded-full bg-green-dark px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
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
