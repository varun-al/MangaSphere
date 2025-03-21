"use client";
import Navbar from "../components/Navbar";
import MangaHero from "../components/MangaHero";
import ChaptersList from "../components/ChaptersList";
import SimilarTitles from "../components/SimilarTitles";

const MangaDetailsPage = () => {
  return (
    <main className="flex flex-col bg-neutral-950 min-h-screen">
      <Navbar position="fixed" />
      <MangaHero />
      <div className="flex gap-12 px-4 py-8 max-md:flex-col max-md:gap-8 max-sm:gap-6 max-sm:px-3 max-sm:py-6">
        <ChaptersList />
        <SimilarTitles />
      </div>
    </main>
  );
};

export default MangaDetailsPage;