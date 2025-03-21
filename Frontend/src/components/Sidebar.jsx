import SearchBar from "./SearchBar";
import FilterSection from "./FilterSection";
import SortBySelect from "./SortBySelect";
import ViewToggle from "./ViewToggle";
import { statusOptions, genreOptions } from "../data/mockData";

const Sidebar = () => {
  return (
    <aside className="fixed left-4 p-6 rounded-lg bg-neutral-900 top-[94px] w-[300px] max-sm:hidden">
      <section>
        <h2 className="mb-4 text-base text-white">Search</h2>
        <SearchBar />
      </section>

      <FilterSection title="Status" options={statusOptions} />
      <FilterSection title="Genres" options={genreOptions} />
      <SortBySelect />
      <ViewToggle />
    </aside>
  );
};

export default Sidebar;