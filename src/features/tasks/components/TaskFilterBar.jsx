// src/features/tasks/components/TaskFilterBar.jsx
import { useEffect, useState, useRef } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import { MdSort } from "react-icons/md";

const sortOptions = [
  { value: "recent", label: "Most recent" },
  { value: "oldest", label: "Oldest" },
  { value: "priority_desc", label: "Priority (High → Low)" },
  { value: "priority_asc", label: "Priority (Low → High)" },
];

const TaskFilterBar = ({
  statuses = [],
  priorities = [],
  users = [],
  onChange = () => {},
  initial = {},
}) => {
  const [q, setQ] = useState(initial.q || "");
  const [status, setStatus] = useState(initial.status || "");
  const [priority, setPriority] = useState(initial.priority || "");
  const [assignee, setAssignee] = useState(initial.assignee || "");
  const [sort, setSort] = useState(initial.sort || "recent");
  const searchTimeout = useRef(null);

  // debounce search
  useEffect(() => {
    if (searchTimeout.current) clearTimeout(searchTimeout.current);
    searchTimeout.current = setTimeout(() => {
      onChange({ q, status, priority, assignee, sort });
    }, 250);
    return () => clearTimeout(searchTimeout.current);
  }, [q, status, priority, assignee, sort]);

  const clearFilters = () => {
    setQ("");
    setStatus("");
    setPriority("");
    setAssignee("");
    setSort("recent");
    onChange({ q: "", status: "", priority: "", assignee: "", sort: "recent" });
  };

  return (
    <div className="w-full bg-white rounded-xl border border-gray-200 p-3 sm:p-4 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
      {/* Search */}
      <div className="flex items-center w-full sm:w-1/3 bg-gray-50 rounded-lg px-3 py-2">
        <FiSearch className="text-gray-400 mr-2" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search tasks, titles, descriptions..."
          className="w-full bg-transparent outline-none text-sm"
          aria-label="Search tasks"
        />
        {q && (
          <button onClick={() => setQ("")} className="ml-2 text-gray-400">
            <FiX />
          </button>
        )}
      </div>

      {/* Status */}
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="text-sm w-full sm:w-1/6 border border-gray-200 rounded-lg px-3 py-2 bg-white"
        aria-label="Filter by status"
      >
        <option value="">All statuses</option>
        {statuses.map((s) => (
          <option key={s.id ?? s.name} value={s.name}>{s.name}</option>
        ))}
      </select>

      {/* Priority */}
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="text-sm w-full sm:w-1/6 border border-gray-200 rounded-lg px-3 py-2 bg-white"
        aria-label="Filter by priority"
      >
        <option value="">All priorities</option>
        {priorities.map((p) => (
          <option key={p.id ?? p.name} value={p.name}>{p.name}</option>
        ))}
      </select>

      {/* Assignee */}
      <select
        value={assignee}
        onChange={(e) => setAssignee(e.target.value)}
        className="text-sm w-full sm:w-1/6 border border-gray-200 rounded-lg px-3 py-2 bg-white"
        aria-label="Filter by assignee"
      >
        <option value="">All assignees</option>
        {users.map((u) => (
          <option key={u.id ?? u} value={u.name ?? u}>{u.name ?? u}</option>
        ))}
      </select>

      {/* Sort & Clear */}
      <div className="flex items-center gap-2 ml-auto">
        <div className="hidden sm:flex items-center gap-2">
          <MdSort />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white"
            aria-label="Sort tasks"
          >
            {sortOptions.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>

        <button
          onClick={clearFilters}
          className="text-sm text-gray-600 bg-gray-100 px-3 py-2 rounded-lg hover:bg-gray-200"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default TaskFilterBar;
