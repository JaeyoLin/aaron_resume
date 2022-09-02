import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { MdOutlinePrint } from "react-icons/md";

import Profile from '../Profile';
import Education from '../Education';
import WorkExperience from '../WorkExperience';
import Skills from '../Skills';

const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div 
      ref={ref}
      className="print:p-5"
    >
      <Profile />
      <Education />
      <WorkExperience />
      <Skills />
    </div>
  )
})

/**
 * Ruseme
 * 
 * @returns 
 */
const Ruseme = () => {
  const componentRef = useRef();

  return (
    <div className="min-h-screen bg-white max-w-md mx-auto rounded shadow-md overflow-hidden md:max-w-4xl">
      <ReactToPrint
        trigger={() => {
          return (
            <div className='grid justify-items-end text-2xl m-1'>
              <button><MdOutlinePrint /></button>
            </div>
          )
        }}
        content={() => componentRef.current}
      />
      <ComponentToPrint ref={componentRef} />
    </div>
  );
}

export default Ruseme;
