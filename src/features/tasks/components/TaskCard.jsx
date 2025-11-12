import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useState, useRef, useEffect } from "react";

const TaskCard = ({ task, onView, onEdit, onDelete }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const statusColors = {
    "Not Started": "text-red-500",
    "In Progress": "text-yellow-500",
    "Completed": "text-green-500",
  };

  const priorityColors = {
    High: "text-red-500",
    Moderate: "text-blue-400",
    Low: "text-green-500",
  };

  return (
    <div className="relative border border-gray-200 rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="font-semibold text-gray-800 text-lg">{task.title}</h2>
          <p className="text-gray-500 text-sm line-clamp-2">{task.description}</p>
          <div className="flex gap-4 text-sm mt-3">
            <span className={`font-medium ${priorityColors[task.priority]}`}>
              {task.priority}
            </span>
            <span className={`font-medium ${statusColors[task.status]}`}>
              {task.status}
            </span>
          </div>
        </div>

        {/* Menu */}
        <div ref={menuRef} className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-1 text-gray-500 hover:text-gray-700"
          >
            <HiOutlineDotsHorizontal />
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-36 bg-white rounded-lg shadow-lg border border-gray-100 z-50">
              <button onClick={onView} className="block w-full text-left px-4 py-2 hover:bg-gray-100">View</button>
              <button onClick={onEdit} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Edit</button>
              <button onClick={onDelete} className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100">Delete</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
