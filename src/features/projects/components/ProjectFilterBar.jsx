// features/projects/components/ProjectFilterBar.jsx
import React from "react";
import { FiSearch } from "react-icons/fi";

const ProjectFilterBar = ({ filters, setFilters }) => {
    return (
        <div className="w-full bg-white rounded-xl border border-gray-200 p-3 sm:p-4 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <div className="flex items-center gap-2 w-full sm:w-1/2 bg-gray-50 rounded-md px-3 py-2">
                <FiSearch className="text-gray-400" />
                <input
                    aria-label="Search projects"
                    value={filters.q}
                    onChange={(e) => setFilters({ ...filters, q: e.target.value })}
                    placeholder="Search projects..."
                    className="bg-transparent outline-none text-sm w-full"
                />
            </div>

            <select
                className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white"
                value={filters.status}
                onChange={(e) => setFilters({ ...filters, status: e.target.value })}
            >
                <option value="">All statuses</option>
                <option value="Not Started">Not Started</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>

            <select
                className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white"
                value={filters.sort}
                onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
            >
                <option value="recent">Newest</option>
                <option value="oldest">Oldest</option>
            </select>
        </div>
    );
};

export default ProjectFilterBar;
