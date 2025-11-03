import { useState, useEffect, useRef } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const statusColors = {
  "Not Started": "text-red-500",
  "In Progress": "text-yellow-500",
  "Completed": "text-green-500",
};

const priorityColors = {
  High: "text-red-500",
  Moderate: "text-blue-500",
  Low: "text-green-500",
};

const ToDoStatusCard = ({ title, description, priority, status, createdAt, image }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative border border-gray-200 bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 sm:flex-row sm:items-center gap-4">
      <div className="flex items-center justify-between ">
        <h2 className="text-lg font-semibold">{title}</h2>

        {/* Menu */}
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-500 hover:text-black p-2"
          >
            <HiOutlineDotsHorizontal size={20} />
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-2 bg-white shadow-lg border border-gray-200 rounded-lg py-2 w-36 z-10">
              {["View", "Edit", "Delete"].map((action, i) => (
                <button
                  key={i}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
                >
                  {action}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        {/* Content */}
        <div className="flex-1">

          <p className="text-gray-500 mt-1 text-sm sm:text-base line-clamp-2">{description}</p>
          <div className="flex flex-wrap gap-3 mt-3 text-sm">
            <span>
              <strong>Priority:</strong>{" "}
              <span className={priorityColors[priority]}>{priority}</span>
            </span>
            <span>
              <strong>Status:</strong>{" "}
              <span className={statusColors[status]}>{status}</span>
            </span>
            {createdAt && (
              <span className="text-gray-400">
                <strong>Created:</strong> {createdAt}
              </span>
            )}
          </div>
        </div>

        {/* Image */}
        {image && (
          <img
            src={image}
            alt="Task"
            className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg shadow-sm"
          />
        )}
      </div>
    </div>
  );
};

export default ToDoStatusCard;
