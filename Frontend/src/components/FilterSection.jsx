const FilterSection = ({ title, options }) => {
    return (
      <section className="mb-6">
        <h3 className="mb-4 text-base text-white">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {options.map((option, index) => (
            <button
              key={index}
              className="px-4 py-1 text-sm cursor-pointer bg-neutral-800 rounded-[999px] text-stone-500"
            >
              {option}
            </button>
          ))}
        </div>
      </section>
    );
  };
  
  export default FilterSection;