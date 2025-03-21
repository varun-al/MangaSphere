"use client";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReaderHeader from "../components/ReaderHeader";
import ReaderContent from "../components/ReaderContent";
import ReaderFooter from "../components/ReaderFooter";
import { chapters } from "../data/mockData";

const ReaderPage = () => {
  const { mangaId, chapterNumber } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 45; // Placeholder for total pages
  const [chapterData, setChapterData] = useState(null);

  // Placeholder pages (replace with actual API data later)
  const pages = Array.from({ length: totalPages }, (_, i) => `https://placehold.co/600x800/000000/FFFFFF?text=Page+${i + 1}`);

  useEffect(() => {
    // Find the chapter data from mockData (replace with API call later)
    const chapter = chapters.find(
      (ch) => ch.title.includes(`Chapter ${chapterNumber}`)
    );
    setChapterData(chapter || { title: `Chapter ${chapterNumber}` });
  }, [chapterNumber]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (!chapterData) return <div className="text-white">Loading...</div>;

  return (
    <article className="overflow-hidden text-sm min-h-screen bg-neutral-950 flex flex-col">
      <div className="w-full max-md:max-w-full flex flex-col flex-1">
        <ReaderHeader
          chapterTitle={chapterData.title}
          mangaId={mangaId}
          chapterNumber={chapterNumber}
          totalChapters={chapters.length}
        />
        <ReaderContent pages={pages} />
        <ReaderFooter
          currentPage={currentPage}
          totalPages={totalPages}
          onNext={handleNextPage}
          onPrevious={handlePreviousPage}
        />
      </div>
    </article>
  );
};

export default ReaderPage;