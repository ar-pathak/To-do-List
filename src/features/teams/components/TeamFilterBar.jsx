const TeamFilterBar = ({ filters, setFilters }) => (
    <div className="flex flex-wrap items-center gap-3 mt-4">
        <input
            type="text"
            placeholder="Search teams..."
            value={filters.q}
            onChange={(e) => setFilters({ ...filters, q: e.target.value })}
            className="border border-gray-300 rounded-lg p-2 text-sm flex-1 min-w-[200px] focus:ring-2 focus:ring-[#FF6767] outline-none"
        />

        <select
            value={filters.sort}
            onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
            className="border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-[#FF6767] outline-none"
        >
            <option value="recent">Newest</option>
            <option value="oldest">Oldest</option>
        </select>
    </div>
);

export default TeamFilterBar;
