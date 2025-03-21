import ChapterCard from "./ChapterCard";
import { latestUpdates } from "../data/mockData";

const LatestUpdatesSection = () => {
  return (
    <section className="px-4 py-8">
      <h2 className="mb-8 text-3xl font-bold max-sm:text-2xl">
        Latest Updates
      </h2>
      <div className="grid gap-6 grid-cols-[repeat(6,1fr)] max-md:grid-cols-[repeat(3,1fr)] max-sm:grid-cols-[1fr]">
        {latestUpdates.map((update, index) => (
          <ChapterCard key={index} {...update} />
        ))}
      </div>
    </section>
  );
};

export default LatestUpdatesSection;