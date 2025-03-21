"use client";

const Navbar = () => {
  return (
    <header className="flex items-center px-4 py-0 border-b border-solid backdrop-blur-[6px] border-b-neutral-800 h-[70px]">
      <h1 className="mr-6 text-2xl font-bold">MangaSphere</h1>
      <nav className="flex gap-6 max-sm:hidden">
        <button className="text-sm cursor-pointer">Browse</button>
        <button className="text-sm cursor-pointer">Latest</button>
        <button className="text-sm cursor-pointer">Popular</button>
      </nav>
      <div className="flex gap-4 items-center ml-auto">
        <button
          className="flex justify-center items-center rounded-full border border-solid border-neutral-800 h-[37px] w-[37px]"
          aria-label="Search"
        >
          <i className="ti ti-search" aria-hidden="true" />
        </button>
        <button className="px-4 py-2 text-sm font-medium bg-indigo-500 rounded">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Navbar;