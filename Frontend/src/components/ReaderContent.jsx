import { useState } from "react";

const ReaderContent = ({ pages }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <main className="flex flex-col items-center w-full bg-neutral-950 flex-1">
      {pages.length > 0 ? (
        <>
          <img
            src={pages[currentPage - 1]}
            alt={`Page ${currentPage}`}
            className="max-w-full h-auto"
          />
        </>
      ) : (
        <div className="text-white">No pages available</div>
      )}
    </main>
  );
};

export default ReaderContent;