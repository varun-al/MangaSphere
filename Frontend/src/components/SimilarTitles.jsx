"use client";
import SimilarMangaCard from "./SimilarMangaCard";
import { similarManga } from "../data/mockData";

const SimilarTitles = () => {
  return (
    <aside className="w-[300px] max-md:w-full">
      <h2 className="mb-6 text-xl font-bold text-white">Similar Titles</h2>
      <div className="flex flex-col gap-4">
        {similarManga.map((manga) => (
          <SimilarMangaCard
            key={manga.title}
            title={manga.title}
            rating={manga.rating}
            imageUrl={manga.imageUrl}
          />
        ))}
      </div>
    </aside>
  );
};

export default SimilarTitles;