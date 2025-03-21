import { Link } from "react-router-dom";

const ProfileHeader = () => {
  return (
    <header className="flex fixed inset-x-0 top-0 z-50 items-center px-4 backdrop-blur-[6px] bg-neutral-950 bg-opacity-90 border-b border-neutral-800 h-[73px]">
      <Link to="/">
        <h1 className="text-2xl font-bold leading-9 text-white">MangaSphere</h1>
      </Link>
      <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full border-2 border-indigo-700 bg-indigo-700 ml-auto">
        <span className="text-white text-sm font-medium">MR</span>
      </div>
    </header>
  );
};

export default ProfileHeader;