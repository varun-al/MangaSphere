const SearchBar = () => {
    return (
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search titles..."
          className="px-4 py-0 w-full text-sm text-white rounded border border-solid bg-neutral-950 border-neutral-800 h-[38px]"
        />
        <svg
          className="absolute right-3 top-1/2 -translate-y-1/2"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.5002 17.5L13.1693 13.1691M13.1693 13.1691C14.3415 11.997 15 10.4072 15 8.74956C15 7.0919 14.3415 5.50213 13.1693 4.32998C11.9972 3.15783 10.4074 2.49933 8.74975 2.49933C7.09208 2.49933 5.50231 3.15783 4.33016 4.32998C3.15802 5.50213 2.49951 7.0919 2.49951 8.74956C2.49951 10.4072 3.15802 11.997 4.33016 13.1691C5.50231 14.3413 7.09208 14.9998 8.74975 14.9998C10.4074 14.9998 11.9972 14.3413 13.1693 13.1691Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  };
  
  export default SearchBar;