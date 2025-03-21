const SortBySelect = () => {
    return (
      <section className="mb-6">
        <h3 className="mb-4 text-base text-white">Sort By</h3>
        <div className="relative p-2 rounded bg-zinc-300">
          <select className="w-full text-sm appearance-none border-[none] bg-transparent">
            <option>Popularity</option>
            <option>Latest</option>
            <option>Rating</option>
          </select>
          <svg
            className="absolute right-3 top-1/2 -translate-y-1/2"
            width="10"
            height="11"
            viewBox="0 0 10 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 1H1L5 9L9 1Z" stroke="black" />
          </svg>
        </div>
      </section>
    );
  };
  
  export default SortBySelect;  