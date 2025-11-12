const ProjectFilterBar = ({ filters, setFilters }) => (
    <div className="flex flex-wrap items-center gap-3 mt-3">
        <input
            type="text"
            placeholder="Search projects..."
            value={filters.q}
            onChange={(e) => setFilters({ ...filters, q: e.target.value })}
            className="border border-gray-300 rounded-lg p-2 text-sm flex-1 min-w-[200px] focus:ring-2 focus:ring-[#FF6767] outline-none"
        />

        <select
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
            className="border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-[#FF6767] outline-none"
        >
            <option value="">All Statuses</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Not Started">Not Started</option>
        </select>

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

export default ProjectFilterBar;
