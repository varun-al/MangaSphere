import CollectionCard from "./CollectionCard";
import { collections } from "../data/mockData";

const FeaturedCollectionsSection = () => {
  return (
    <section className="px-4 py-8">
      <h2 className="mb-8 text-3xl font-bold max-sm:text-2xl">
        Featured Collections
      </h2>
      <div className="grid gap-6 grid-cols-[repeat(3,1fr)] max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
        {collections.map((collection, index) => (
          <CollectionCard key={index} {...collection} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCollectionsSection;