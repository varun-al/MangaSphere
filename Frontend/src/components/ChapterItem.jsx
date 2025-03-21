"use client";
import { useNavigate } from "react-router-dom";

const ChapterItem = ({ title, date, views, isRead, mangaId, chapterNumber }) => {
  const navigate = useNavigate();

  const handleRead = () => {
    navigate(`/manga/${mangaId}/chapter/${chapterNumber}`);
  };

  return (
    <article className="p-4 rounded-lg bg-neutral-900 max-sm:p-3">
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <h3 className="mb-2 text-base font-medium text-white max-sm:text-sm max-sm:leading-5">
            {title}
          </h3>
          <div className="flex gap-4 text-sm text-stone-500">
            <time dateTime={date}>{date}</time>
            <span>{views} views</span>
          </div>
        </div>
        <button
          className="px-4 py-2 text-sm font-medium text-white bg-indigo-700 rounded"
          onClick={handleRead}
        >
          {isRead ? "Re-read" : "Read"}
        </button>
      </div>
    </article>
  );
};

export default ChapterItem;