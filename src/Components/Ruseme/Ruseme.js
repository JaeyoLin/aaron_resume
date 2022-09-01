import Profile from '../Profile';
import Education from '../Education';
import WorkExperience from '../WorkExperience';
import Skills from '../Skills';

/**
 * Ruseme
 * 
 * @returns 
 */
const Ruseme = () => {
  return (
    <div class="min-h-screen bg-white max-w-md mx-auto rounded shadow-md overflow-hidden md:max-w-4xl">
      <Profile />
      <Education />
      <WorkExperience />
      <Skills />
    </div>
  );
}

export default Ruseme;
