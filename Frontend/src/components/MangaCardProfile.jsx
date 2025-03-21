import ProgressBar from "./ProgressBar";
import { Link } from "react-router-dom";

const MangaCardProfile = ({
  image,
  title,
  progress,
  chapter,
  timeAgo,
  showProgress = true,
}) => {
  return (
    <article className="relative w-full max-w-[187px] h-[280px]">
      <Link to={`/manga/${title.toLowerCase().replace(/\s+/g, "-")}`}>
        <div
          className="w-full h-full rounded-[8px] bg-gradient-to-br from-purple-500 to-blue-500"
          style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
        />
      </Link>
      <button className="flex absolute top-2 right-2 justify-center items-center w-9 h-9 rounded-full bg-black bg-opacity-50">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 15L15 5M5 5L15 15"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="absolute inset-x-4 bottom-4">
        <h4 className="text-sm leading-5 text-white">{title}</h4>
        {showProgress && (
          <>
            <ProgressBar progress={progress} />
            <div className="flex justify-between mt-1">
              <div className="text-xs leading-5 text-stone-500">
                Chapter {chapter}
              </div>
              {timeAgo && (
                <div className="text-xs leading-5 text-stone-500">
                  {timeAgo}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </article>
  );
};

export default MangaCardProfile;