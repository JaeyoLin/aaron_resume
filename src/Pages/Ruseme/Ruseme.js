import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import ReactToPrint from 'react-to-print';
import { MdOutlinePrint } from 'react-icons/md';

import {
  Education,
  Profile,
  Skills,
  WorkExperience,
} from '@Components';

const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div 
      ref={ref}
      className='print:p-5'
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
    <div className='min-h-screen bg-white max-w-md mx-auto rounded shadow-md overflow-hidden md:max-w-4xl'>
      <div className='flex flex-row'>
        <div className='basis-1/2 flex items-center pl-2 text-green-dark'>
          <Link to='/' className='text-xl hover:text-yellow-500'>Resume</Link>
          <Link to='/portfolio' className='pl-3 text-xl hover:text-yellow-500'>Portfolio</Link>
        </div>
        <div className='basis-1/2 grid justify-items-end text-2xl m-1 pr-2'>
          <ReactToPrint
            trigger={() => {
              return (
                <button><MdOutlinePrint /></button>
              )
            }}
            content={() => componentRef.current}
          />
        </div>
      </div>
      <ComponentToPrint ref={componentRef} />
    </div>
  );
}

export default Ruseme;
