"use client";
import ChapterItem from "./ChapterItem";
import { chapters } from "../data/mockData";
import { useParams } from "react-router-dom";

const ChaptersList = () => {
  const { id: mangaId } = useParams();

  return (
    <section className="flex-1">
      <nav className="pb-4 border-[0.667px] border-neutral-800">
        <div className="flex gap-8">
          <button className="pb-4 text-base font-medium text-white border-2 border-indigo-700">
            Chapters
          </button>
          <button className="text-base font-medium text-stone-500">
            Information
          </button>
        </div>
      </nav>
      <div className="flex flex-col gap-4 mt-6">
        {chapters.map((chapter, index) => {
          const chapterNumber = chapter.title.match(/Chapter (\d+)/)?.[1] || index + 1;
          return (
            <ChapterItem
              key={chapter.title}
              title={chapter.title}
              date={chapter.date}
              views={chapter.views}
              isRead={chapter.isRead}
              mangaId={mangaId}
              chapterNumber={chapterNumber}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ChaptersList;