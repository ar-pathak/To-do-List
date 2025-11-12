import { useMemo, useState } from "react";
import TaskCard from "./TaskCard";
import TaskDetailCard from "./TaskDetailCard";
import TaskFilterBar from "./TaskFilterBar";
import EmptyState from "./EmptyState";
import { AnimatePresence, motion } from "framer-motion";

const TaskList = ({
  tasks = [],
  statuses = [],
  priorities = [],
  users = [],
  onAddTask = () => {},
}) => {
  const [selected, setSelected] = useState(null);
  const [filters, setFilters] = useState({
    q: "",
    status: "",
    priority: "",
    assignee: "",
    sort: "recent",
  });

  const filtered = useMemo(() => {
    let res = [...tasks];
    const q = filters.q?.toLowerCase?.() || "";
    if (q)
      res = res.filter((t) =>
        (t.title + " " + (t.description || "")).toLowerCase().includes(q)
      );
    if (filters.status) res = res.filter((t) => t.status === filters.status);
    if (filters.priority) res = res.filter((t) => t.priority === filters.priority);
    if (filters.assignee)
      res = res.filter((t) =>
        Array.isArray(t.assignedTo)
          ? t.assignedTo.includes(filters.assignee)
          : t.assignedTo === filters.assignee
      );

    const rank = (p) =>
      p === "High" || p === "Extreme" ? 3 : p === "Moderate" ? 2 : 1;

    switch (filters.sort) {
      case "priority_desc":
        res.sort((a, b) => rank(b.priority) - rank(a.priority));
        break;
      case "priority_asc":
        res.sort((a, b) => rank(a.priority) - rank(b.priority));
        break;
      case "oldest":
        res.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        break;
      default:
        res.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
    return res;
  }, [tasks, filters]);

  return (
    <div className="flex flex-col gap-3 sm:gap-5 w-full px-2 sm:px-5 overflow-x-hidden">
      {/* Header & Filter */}
      <div className="bg-white border border-gray-100 rounded-xl shadow-sm px-3 py-3 sm:px-6 sm:py-4">
        {/* Header Row */}
        <div className="flex flex-col xs:flex-row sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
          <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
            Tasks{" "}
            {filtered.length > 0 && (
              <span className="text-gray-400 text-xs sm:text-sm font-normal">
                ({filtered.length})
              </span>
            )}
          </h2>

          <button
            onClick={onAddTask}
            className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium bg-gradient-to-r from-[#FF6767] to-[#FF8C68] text-white hover:shadow-md transition-all"
          >
            + Add Task
          </button>
        </div>

        {/* FilterBar — horizontally scrollable on 320px */}
        <div className="mt-2 sm:mt-3 w-full overflow-x-auto scrollbar-hide">
          <div className="min-w-[280px] sm:min-w-0">
            <TaskFilterBar
              statuses={statuses}
              priorities={priorities}
              users={users}
              onChange={(f) => setFilters(f)}
            />
          </div>
        </div>
      </div>

      {/* Task Content */}
      <div className="flex-1 overflow-visible pb-20 sm:pb-24">
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="px-1 sm:px-3"
            >
              <EmptyState
                title="No tasks yet"
                subtitle="Try adding a new one to get started!"
                primaryLabel="Create Task"
                onPrimary={onAddTask}
                secondaryLabel="Clear filters"
                onSecondary={() =>
                  setFilters({
                    q: "",
                    status: "",
                    priority: "",
                    assignee: "",
                    sort: "recent",
                  })
                }
              />
            </motion.div>
          ) : (
            <motion.div
              key="task-list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-3 sm:gap-6 mt-2 sm:mt-4"
            >
              {/* Left Section: List */}
              <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-3 sm:p-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-3 sm:gap-4">
                  {filtered.map((task) => (
                    <motion.div
                      key={task.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{
                        scale: 1.01,
                        boxShadow:
                          "0 4px 14px rgba(255, 103, 103, 0.15), 0 1px 4px rgba(0,0,0,0.06)",
                      }}
                      onClick={() => setSelected(task)}
                      className={`transition-all rounded-xl ${
                        selected?.id === task.id
                          ? "ring-2 ring-[#FF6767]"
                          : "hover:ring-1 ring-gray-200"
                      }`}
                    >
                      <TaskCard
                        task={task}
                        onView={() => setSelected(task)}
                        onEdit={() => console.log("Edit", task.title)}
                        onDelete={() => console.log("Delete", task.title)}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Section: Details (Desktop only) */}
              <div className="hidden lg:block">
                <motion.div
                  layout
                  key={selected?.id || "placeholder"}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  {selected ? (
                    <TaskDetailCard
                      task={selected}
                      onEdit={() => console.log("Edit", selected.title)}
                      onDelete={() => console.log("Delete", selected.title)}
                    />
                  ) : (
                    <div className="h-full flex flex-col justify-center items-center text-gray-400 border border-dashed border-gray-200 rounded-xl py-10 sm:py-16 text-xs sm:text-sm">
                      <p>Select a task to view its details</p>
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Mobile Detail */}
              {selected && (
                <div className="lg:hidden mt-2 sm:mt-3">
                  <TaskDetailCard
                    task={selected}
                    onEdit={() => console.log("Edit", selected.title)}
                    onDelete={() => console.log("Delete", selected.title)}
                  />
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TaskList;
