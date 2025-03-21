"use client";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import BrowseMangaGrid from "../components/BrowseMangaGrid";

const BrowsePage = () => {
  return (
    <div className="min-h-screen bg-neutral-950">
      <Navbar position="sticky" hideSearch />
      <main className="relative">
        <Sidebar />
        <BrowseMangaGrid />
      </main>
    </div>
  );
};

export default BrowsePage;