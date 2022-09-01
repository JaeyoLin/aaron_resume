import { GiPositionMarker } from "react-icons/gi";

import Avatar from '../../Assets/images/avatar.png';

/**
 * Profile
 * 
 * @returns 
 */
const Profile = () => {
  return (
    <div className="w-full p-6 md:p-12 bg-green-dark text-white">
      <div className="flex flex-col md:flex-row">
        <div className="basis-1/3">
          <img className="w-32 h-32 rounded-full" src={Avatar} alt="" width="384" height="512" />
          <p className="text-3xl">Aaron Lin</p>
          <p className="text-xl leading-8">Software Engineer</p>
          <p className="text-xl leading-8"><GiPositionMarker className="inline" />Kaohsiung City, TW</p>
        </div>
        <div className="basis-2/3">
          <p className="text-lg leading-8">Research new skill | Improve job programme | Face problems and solve it</p>
          <p className="text-lg leading-8">jaeyoungsam0427@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
