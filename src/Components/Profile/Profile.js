import {
  VscMail,
  VscGithubInverted,
} from "react-icons/vsc";

import Avatar from '@Assets/images/avatar.jpeg';

/**
 * Profile
 * 
 * @returns 
 */
const Profile = () => {
  return (
    <div className="w-full p-6 md:p-12 print:p-3 bg-green-dark text-white">
      <div className="flex flex-col md:flex-row print:flex-row">
        <div className="basis-1/3">
          <img className="w-32 h-32 rounded-full animate-waving-hand" src={Avatar} alt="" width="384" height="512" />
          <p className="text-3xl">Aaron Lin</p>
          <p className="text-xl leading-8">Software Engineer</p>
          <p className="text-xl leading-8">Kaohsiung City, TW</p>
        </div>
        <div className="basis-2/3 mt-7 md:mt-0 print:mt-0">
          <p className="text-lg leading-8">My strength is responsibility and learning.</p>
          <p className="text-lg leading-8">Be a softwar engineer should be study new knowledge for skills likes curiosity of childs.</p>
          <p className="text-lg leading-8">To face challenges and finish it on schedule.</p>
          <p className="text-lg leading-8">To think how to do it better not do it done.</p>
          <div className="mt-2 mb-2">
            <a href="https://github.com/JaeyoLin" target="_blank"><VscGithubInverted /></a>
          </div>
          <p className="text-lg leading-8"><VscMail className="inline" /> jaeyoungsam0427@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
