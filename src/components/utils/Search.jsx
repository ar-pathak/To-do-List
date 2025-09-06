import { IoIosSearch } from "react-icons/io";

const Search = () => {
  return (
    <div className="w-full">
      <label
        htmlFor="search"
        className="flex items-center px-3 py-2 rounded-full bg-gray-100 shadow-inner focus-within:ring-2 focus-within:ring-[#FF6767] transition"
      >
        <input
          type="search"
          name="search"
          id="search"
          aria-label="Search input"
          className="outline-none w-full bg-transparent text-sm sm:text-base"
          placeholder="Search your task here..."
        />
        <IoIosSearch
          role="button"
          aria-label="Submit search"
          className="bg-[#FF6767] text-white w-7 h-7 sm:w-8 sm:h-8 p-1.5 rounded-full cursor-pointer transition transform hover:scale-110 hover:bg-[#ff4c4c]"
        />
      </label>
    </div>
  );
};

export default Search;
