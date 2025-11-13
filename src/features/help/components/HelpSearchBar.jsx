import { FiSearch } from "react-icons/fi";

const HelpSearchBar = ({ query, setQuery }) => {
    return (
        <div className="flex items-center bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm">
            <FiSearch className="text-gray-400 mr-3" />

            <input
                type="text"
                placeholder="Search help topics..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full outline-none text-gray-700 placeholder:text-gray-400"
            />
        </div>
    );
};

export default HelpSearchBar;
