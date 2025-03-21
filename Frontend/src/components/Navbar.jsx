"use client";
import { Link } from "react-router-dom";

const Navbar = ({ position = "fixed", hideSearch = false }) => {
  return (
    <header
      className={`${
        position === "fixed"
          ? "fixed inset-x-0 top-0 z-50"
          : "sticky top-0 z-[100]"
      } backdrop-blur-[6px] bg-neutral-950 bg-opacity-90 border-b border-neutral-800 h-[70px]`}
    >
      <nav className="flex justify-between items-center px-4 h-full max-sm:px-3">
        <div className="flex gap-6 items-center">
          <Link to="/">
            <h1 className="text-2xl font-bold leading-9 text-white">
              MangaSphere
            </h1>
          </Link>
          <div className="flex gap-6 max-sm:hidden">
            <Link to="/browse" className="text-sm leading-5 text-white">
              Browse
            </Link>
            <Link to="/latest" className="text-sm leading-5 text-white">
              Latest
            </Link>
            <Link to="/popular" className="text-sm leading-5 text-white">
              Popular
            </Link>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          {!hideSearch && (
            <button
              className="flex justify-center items-center rounded-full border border-neutral-800 h-[37px] w-[37px]"
              aria-label="Search"
            >
              <i className="ti ti-search text-white" aria-hidden="true" />
            </button>
          )}
          <Link to="/auth">
            <button className="px-4 py-2 text-sm font-medium leading-5 text-white bg-indigo-700 rounded">
              Sign In
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;