import BOK_1 from '@Assets/images/portfolio/bok_1.jpg';
import BOK_2 from '@Assets/images/portfolio/bok_2.jpg';
import BOK_3 from '@Assets/images/portfolio/bok_3.jpg';
import BOK_4 from '@Assets/images/portfolio/bok_4.jpg';
import BOK_5 from '@Assets/images/portfolio/bok_5.jpg';

import PORJECT_SECURITY from '@Assets/images/portfolio/project_security.jpg';
import PORJECT_COACHING_1 from '@Assets/images/portfolio/project_coaching_1.jpg';
import PORJECT_COACHING_2 from '@Assets/images/portfolio/project_coaching_2.jpg';
import PORJECT_OFFICE_1 from '@Assets/images/portfolio/project_office_1.jpg';
import PORJECT_OFFICE_2 from '@Assets/images/portfolio/project_office_2.jpg';
import PORJECT_OFFICE_3 from '@Assets/images/portfolio/project_office_3.jpg';
import PORJECT_OFFICE_4 from '@Assets/images/portfolio/project_office_4.jpg';
import PORJECT_COOK from '@Assets/images/portfolio/project_cook.jpg';
import PORJECT_SVM_1 from '@Assets/images/portfolio/project_svm_1.jpg';
import PORJECT_SVM_2 from '@Assets/images/portfolio/project_svm_2.jpg';
import PORJECT_SVM_3 from '@Assets/images/portfolio/project_svm_3.jpg';
import PORJECT_HIS_1 from '@Assets/images/portfolio/project_his_1.jpg';
import PORJECT_HIS_2 from '@Assets/images/portfolio/project_his_2.jpg';
import PORJECT_MOHW_1 from '@Assets/images/portfolio/project_mohw_1.jpg';
import PORJECT_MOHW_2 from '@Assets/images/portfolio/project_mohw_2.jpg';
import PORJECT_MOHW_3 from '@Assets/images/portfolio/project_mohw_3.jpg';
import PORJECT_MOHW_4 from '@Assets/images/portfolio/project_mohw_4.jpg';

/**
 * PortfolioList
 * 
 * @returns 
 */
const PortfolioList = () => {
  return (
    <div className='w-full p-6 print:p-3 grid justify-items-center'>
      <div className='basis-2/3 text-2xl mb-5 text-green-dark'>Bank of Kaohsiung</div>

      <div className='grid justify-items-center'>
        <div className='text-xl text-yellow-500'>Office Website</div>
        <img className='w-full md:w-11/12 border-solid border-2 border-gray-200' src={BOK_1} alt='' />
        <div className='text-xl text-yellow-500 mt-5'>SWIFT Alliance</div>
        <img className='w-full md:w-11/12 border-solid border-2 border-gray-200' src={BOK_2} alt='' />
        <div className='text-xl text-yellow-500 mt-5 print:mt-44'>Trust Reservation</div>
        <img className='w-full md:w-11/12 border-solid border-2 border-gray-200' src={BOK_3} alt='' />
        <div className='text-xl text-yellow-500 mt-5 print:pt-48'>Questionnaire System</div>
        <img className='w-full md:w-11/12 border-solid border-2 border-gray-200' src={BOK_4} alt='' />
        <img className='w-full md:w-11/12 border-solid border-2 border-gray-200 print:mt-5' src={BOK_5} alt='' />
      </div>

      <div className='basis-2/3 text-2xl leading-8 text-green-dark mt-10 print:mt-80 print:pt-20'>Wistron Corporation</div>
      <div className='grid justify-items-center'>
        <div className='text-xl text-yellow-500'>Security System</div>
        <img className='w-full md:w-11/12 border-solid border-2 border-gray-200' src={PORJECT_SECURITY} alt='' />
        <div className='text-xl text-yellow-500 mt-5'>Supervisor Coaching</div>
        <img className='w-full md:w-11/12 print:w-11/12 border-solid border-2 border-gray-200' src={PORJECT_COACHING_1} alt='' />
        <img className='w-full md:w-11/12 print:w-11/12 border-solid border-2 border-gray-200 print:mt-20' src={PORJECT_COACHING_2} alt='' />
        <div className='text-xl text-yellow-500 mt-5'>Office Position</div>
        <img className='w-full md:w-11/12 print:w-10/12 border-solid border-2 border-gray-200' src={PORJECT_OFFICE_1} alt='' />
        <div className='flex mt-5'>
          <div className='basis-1/3'>
            <img className='w-11/12 border-solid border-2 border-gray-200' src={PORJECT_OFFICE_2} alt='' />    
          </div>
          <div className='basis-1/3'>
            <img className='w-11/12 border-solid border-2 border-gray-200' src={PORJECT_OFFICE_3} alt='' />
          </div>
          <div className='basis-1/3'>
            <img className='w-11/12 border-solid border-2 border-gray-200' src={PORJECT_OFFICE_4} alt='' />
          </div>
        </div>
        <div className='text-xl text-yellow-500 mt-5'>Taipei COOK</div>
        <img className='w-full md:w-11/12 print:w-10/12 border-solid border-2 border-gray-200' src={PORJECT_COOK} alt='' />
        <div className='text-xl text-yellow-500 mt-5'>Smart Vending Machine</div>
        <img className='w-full md:w-11/12 print:w-11/12 border-solid border-2 border-gray-200' src={PORJECT_SVM_1} alt='' />
        <img className='w-full md:w-11/12 print:w-11/12 border-solid border-2 border-gray-200' src={PORJECT_SVM_2} alt='' />
        <img className='w-full md:w-11/12 print:w-11/12 border-solid border-2 border-gray-200' src={PORJECT_SVM_3} alt='' />
      </div>

      <div className='basis-2/3 text-2xl leading-8 text-green-dark'>Dimerco Data System Corporation</div>
      <div className='grid justify-items-center'>

      </div>
    </div>
  );
}

export default PortfolioList;
