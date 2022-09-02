import BOK_LOGO from '../../Assets/images/BOK_logo.svg';
import WISTRON_LOGO from '../../Assets/images/Wistron_logo.png';
import DDSC_LOGO from '../../Assets/images/DDSC_logo.png';

/**
 * WorkExperience
 * 
 * @returns 
 */
const WorkExperience = () => {
  return (
    <div className="w-full p-6 md:p-12">
      <p className="font-bold text-3xl text-green-dark mb-4">WorkExperience</p>
      <div>
        <div className="flex items-center flex-col-reverse md:flex-row">
          <div className="basis-2/3 text-2xl md:text-3xl leading-8">Bank of Kaohsiung</div>
          <div className="basis-1/3 grid justify-items-start md:justify-items-end"><img src={BOK_LOGO} className="w-24 h-24" /></div>
        </div>
        <div className="text-2xl text-yellow-500 grid justify-items-center md:justify-items-start leading-8">IT Specialist</div>
        <div className="text-xl text-zinc-400 grid justify-items-center md:justify-items-start leading-8">Sep 2020 - Present</div>
        <ul className="mt-5 ml-2 list-outside md:list-inside list-disc leading-6 md:leading-8 text-lg">
          <li>System maintenance, such as official website, swift alliance.</li>
          <li>Action items handed down by upper management, such as system development.</li>
          <li>CI/CD for Infrastructure.</li>
        </ul>
      </div>
      <div className="mt-8">
        <div className="flex items-center flex-col-reverse md:flex-row mb-5">
          <div className="basis-2/3 text-2xl md:text-3xl leading-8">Wistron Corporation</div>
          <div className="basis-1/3 grid justify-items-start md:justify-items-end"><img src={WISTRON_LOGO} className="h-10" /></div>
        </div>
        <div className="text-2xl text-yellow-500 grid justify-items-center md:justify-items-start leading-8">RD Senior Engineer</div>
        <div className="text-xl text-zinc-400 grid justify-items-center md:justify-items-start leading-8">Mar 2015 – Aug 2020</div>
        <ul className="mt-5 ml-2 list-outside md:list-inside list-disc leading-6 md:leading-8 text-lg">
          <li>Full stack engineer and DevOps.</li>
          <li>Assisted tasks with project members and code review.</li>
          <li>Hard skills training for employees.</li>
          <li>Researched and recommended solutions for action items handed down by upper management.</li>
        </ul>
      </div>
      <div className="mt-8">
        <div className="flex items-center flex-col-reverse md:flex-row">
          <div className="basis-2/3 text-2xl md:text-3xl leading-8">Dimerco Data System Corporation</div>
          <div className="basis-1/3 grid justify-items-start md:justify-items-end"><img src={DDSC_LOGO} className="h-20" /></div>
        </div>
        <div className="text-2xl text-yellow-500 grid justify-items-center md:justify-items-start leading-8">Web Developer</div>
        <div className="text-xl text-zinc-400 grid justify-items-center md:justify-items-start leading-8">Feb 2012 – Feb 2015</div>
        <ul className="mt-5 ml-2 list-outside md:list-inside list-disc leading-6 md:leading-8 text-lg">
          <li>Project development for EVA Air.</li>
          <li>System maintenance.</li>
        </ul>
      </div>
    </div>
  );
}

export default WorkExperience;
