import BrowseMangaCard from "./BrowseMangaCard";
import { browseMangaData } from "../data/mockData";

const BrowseMangaGrid = () => {
  return (
    <main className="p-6 ml-80 max-sm:ml-0">
      <h2 className="mb-6 text-2xl font-bold text-white">Browse Manga</h2>
      <div className="grid gap-6 grid-cols-[repeat(4,1fr)] max-md:grid-cols-[repeat(3,1fr)] max-sm:grid-cols-[1fr]">
        {browseMangaData.map((manga, index) => (
          <BrowseMangaCard
            key={index}
            title={manga.title}
            status={manga.status}
            chapters={manga.chapters}
            rating={manga.rating}
            views={manga.views}
            imageUrl={manga.imageUrl}
          />
        ))}
      </div>
    </main>
  );
};

export default BrowseMangaGrid;