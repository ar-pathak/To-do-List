import { IoIosSearch } from "react-icons/io";
import { useState } from "react";

const Search = () => {
    const [query, setQuery] = useState("");

    return (
        <div className="relative w-full">
            <input
                type="text"
                value={query}
                placeholder="Search anything..."
                onChange={(e) => setQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 bg-gray-100 border border-gray-300 rounded-lg 
                   focus:outline-none focus:ring-2 focus:ring-[#FF6767] shadow-sm
                   placeholder-gray-400 text-gray-700"
            />

            {/* Search Icon */}
            <IoIosSearch
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5"
            />
        </div>
    );
};

export default Search;
