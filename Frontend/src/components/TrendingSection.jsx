import MangaCard from "./MangaCard";
import { trendingManga } from "../data/mockData";

const TrendingSection = () => {
  return (
    <section className="px-4 py-8">
      <h2 className="mb-8 text-3xl font-bold max-sm:text-2xl">Trending Now</h2>
      <div className="grid gap-6 grid-cols-[repeat(3,1fr)] max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
        {trendingManga.map((manga, index) => (
          <MangaCard key={index} {...manga} />
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;