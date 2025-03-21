"use client";
import GenreTag from "./GenreTag";

const MangaHero = () => {
  const genres = ["Action", "Drama", "Fantasy", "Mystery", "Horror"];

  return (
    <section className="relative mt-16">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae05045864c9d901cfc29dbf81bca394b1a731fe"
        alt="Attack on Titan Cover Background"
        className="w-full h-[400px] object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.50)_100%,#0A0A0A_0%)]" />
      <div className="flex absolute left-4 top-8 gap-8 max-md:flex-col max-md:gap-6 max-sm:inset-x-3 max-sm:top-4">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cedcc04dc1b55da7b7767824c06fd0dc52c9bb9d"
          alt="Attack on Titan Cover"
          className="w-[220px] h-[320px] rounded-[8px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.50)]"
        />
        <div className="flex flex-col gap-4">
          <h2 className="text-5xl font-bold text-white leading-[72px] max-md:text-4xl max-md:leading-[54px]">
            Attack on Titan
          </h2>
          <div className="flex gap-3 items-center text-base leading-6">
            <div className="text-yellow-400">4.9 ★</div>
            <div className="text-stone-300">Completed</div>
            <div className="text-stone-300">By Hajime Isayama</div>
          </div>
          <div className="flex flex-wrap gap-2">
            {genres.map((genre) => (
              <GenreTag key={genre} name={genre} />
            ))}
          </div>
          <div className="flex gap-4 mt-2 max-sm:flex-col max-sm:gap-3">
            <button className="flex gap-2 items-center px-6 py-3 bg-indigo-700 rounded">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 5.03501C8.62634 3.80281 6.84533 3.12246 5 3.12501C4.12333 3.12501 3.28167 3.27501 2.5 3.55167V15.4267C3.30302 15.1434 4.14847 14.9991 5 15C6.92083 15 8.67333 15.7225 10 16.91M10 5.03501C11.3736 3.80274 13.1547 3.12238 15 3.12501C15.8767 3.12501 16.7183 3.27501 17.5 3.55167V15.4267C16.697 15.1434 15.8515 14.9991 15 15C13.1547 14.9975 11.3737 15.6778 10 16.91M10 5.03501V16.91"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-base font-medium text-white">
                Start Reading
              </span>
            </button>
            <button className="flex gap-2 items-center px-6 py-3 rounded border border-indigo-700">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.6608 2.76832C15.5775 2.87499 16.25 3.66582 16.25 4.58915V17.5L10 14.375L3.75 17.5V4.58915C3.75 3.66582 4.42167 2.87499 5.33917 2.76832C8.43599 2.40885 11.564 2.40885 14.6608 2.76832Z"
                  stroke="#4F46E5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-base font-medium text-indigo-700">
                Add to Library
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MangaHero;