import NavigationButton from "./NavigationButton";
import PageCounter from "./PageCounter";

const ReaderFooter = ({ currentPage, totalPages, onNext, onPrevious }) => {
  return (
    <footer className="flex flex-wrap gap-5 justify-between px-6 py-5 w-full bg-neutral-900 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-4 text-white whitespace-nowrap">
        <NavigationButton onClick={onPrevious}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Previous</span>
        </NavigationButton>

        <div className="flex gap-2">
          <PageCounter currentPage={currentPage} totalPages={totalPages} />
          <NavigationButton onClick={onNext}>
            <span>Next</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </NavigationButton>
        </div>
      </div>

      <div className="flex gap-2 text-stone-500">
        <label className="grow my-auto">Fit to:</label>
        <button className="object-contain shrink-0 rounded-md aspect-[1.8] w-[72px] bg-neutral-800">
          {/* Placeholder for fit control */}
        </button>
      </div>
    </footer>
  );
};

export default ReaderFooter;