import StatsCard from "./StatsCard";

const ProfileInfo = () => {
  return (
    <section className="mb-12">
      <div className="flex items-center justify-center w-[150px] h-[150px] rounded-full border-4 border-indigo-700 bg-indigo-700">
        <span className="text-white text-4xl font-medium">MR</span>
      </div>
      <h2 className="mt-4 text-3xl font-bold leading-10 text-white">
        MangaReader
      </h2>
      <div className="flex flex-wrap gap-6 mt-6 max-sm:flex-col">
        <StatsCard label="Joined" value="January 2024" />
        <StatsCard label="Chapters Read" value="1842" />
        <StatsCard label="Library Items" value="156" />
        <StatsCard label="Reading Time" value="486 hours" />
      </div>
    </section>
  );
};

export default ProfileInfo;