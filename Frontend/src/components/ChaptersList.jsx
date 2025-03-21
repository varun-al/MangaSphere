"use client";
import ChapterItem from "./ChapterItem";
import { chapters } from "../data/mockData";

const ChaptersList = () => {
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
        {chapters.map((chapter) => (
          <ChapterItem
            key={chapter.title}
            title={chapter.title}
            date={chapter.date}
            views={chapter.views}
            isRead={chapter.isRead}
          />
        ))}
      </div>
    </section>
  );
};

export default ChaptersList;