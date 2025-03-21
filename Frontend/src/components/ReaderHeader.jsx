"use client";
import { useNavigate, useParams } from "react-router-dom";
import NavigationButton from "./NavigationButton";

const ReaderHeader = ({ chapterTitle, mangaId, chapterNumber, totalChapters }) => {
  const navigate = useNavigate();

  const handleBackToChapters = () => {
    navigate(`/manga/${mangaId}`);
  };

  const handleNextChapter = () => {
    const nextChapter = parseInt(chapterNumber) + 1;
    if (nextChapter <= totalChapters) {
      navigate(`/manga/${mangaId}/chapter/${nextChapter}`);
    }
  };

  return (
    <header className="flex flex-wrap gap-5 justify-between px-6 py-5 w-full text-white bg-neutral-900 max-md:px-5 max-md:max-w-full">
      <nav className="flex gap-6 my-auto max-md:max-w-full">
        <button className="flex gap-2 text-center" onClick={handleBackToChapters}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="basis-auto">Back to Chapters</span>
        </button>
        <div className="flex flex-auto gap-6">
          <div className="flex shrink-0 w-px h-6 bg-neutral-800" />
          <h1 className="flex-auto">{chapterTitle}</h1>
        </div>
      </nav>

      <div className="flex gap-4 font-medium text-center">
        <button className="object-contain shrink-0 rounded-md aspect-[1.8] w-[72px] bg-neutral-800">
          {/* Placeholder for view option 1 */}
        </button>
        <button className="object-contain shrink-0 w-10 rounded-md aspect-square bg-neutral-800">
          {/* Placeholder for view option 2 */}
        </button>
        <button className="object-contain shrink-0 w-10 rounded-md aspect-square bg-neutral-800">
          {/* Placeholder for view option 3 */}
        </button>
        <div className="flex shrink-0 my-auto w-px h-6 bg-neutral-800" />
        <NavigationButton variant="primary" onClick={handleNextChapter}>
          <span>Next Chapter</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </NavigationButton>
      </div>
    </header>
  );
};

export default ReaderHeader;