const TabNavigation = () => {
    return (
      <nav className="flex mt-12 border-b border-neutral-800">
        <div className="relative pb-4 text-base leading-6 text-white cursor-pointer">
          <span>Collections</span>
          <div className="absolute bottom-0 left-0 h-0.5 bg-indigo-700 w-full" />
        </div>
        <div className="pb-4 ml-8 text-base leading-6 cursor-pointer text-stone-500">
          Reading History
        </div>
      </nav>
    );
  };
  
  export default TabNavigation;