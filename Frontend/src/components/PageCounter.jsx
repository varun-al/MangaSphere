const PageCounter = ({ currentPage, totalPages, onNext, onPrevious }) => {
    return (
      <div className="flex gap-2">
        <input
          type="text"
          value={currentPage}
          className="flex shrink-0 w-12 h-10 rounded-md bg-neutral-800 text-white text-center"
          readOnly
        />
        <span className="my-auto text-stone-500">of</span>
        <span className="my-auto text-white">{totalPages}</span>
      </div>
    );
  };
  
  export default PageCounter;