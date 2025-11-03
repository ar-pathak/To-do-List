import React, { useState, useRef, useEffect } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const statusColors = {
  "Not Started": "bg-red-500",
  "In Progress": "bg-yellow-500",
  "Completed": "bg-green-500",
};

const priorityColors = {
  High: "text-red-500",
  Moderate: "text-blue-500",
  Low: "text-green-500",
};

const ToDoStatusCard = ({
  title,
  description,
  priority,
  status,
  createdAt,
  image,
  onView,
  onEdit,
  onDelete,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative flex justify-between border border-gray-200 p-4 md:p-5 rounded-2xl mb-4 shadow-sm hover:shadow-md transition-all duration-300 bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm">
      {/* Status Dot */}
      <div className={`w-3 h-3 rounded-full mt-2 ${statusColors[status]}`} />

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-4 w-full mx-3">
        <div className="md:w-4/5 pr-2">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800">
            {title}
          </h2>
          <p className="text-gray-500 mt-1 line-clamp-2">{description}</p>

          {/* Priority & Status & Created At */}
          <div className="flex flex-wrap items-center mt-3 text-sm text-gray-600 gap-x-4 gap-y-2">
            <div className="flex items-center">
              <h3 className="font-medium">Priority:</h3>
              <span className={`ml-2 font-semibold ${priorityColors[priority]}`}>
                {priority}
              </span>
            </div>
            <div className="flex items-center">
              <h3 className="font-medium">Status:</h3>
              <span className={`ml-2 font-semibold capitalize text-gray-700`}>
                {status}
              </span>
            </div>
            {createdAt && (
              <div className="flex items-center">
                <h3 className="font-medium">Created:</h3>
                <span className="ml-2 text-gray-500">{createdAt}</span>
              </div>
            )}
          </div>
        </div>

        {/* Image */}
        {image && (
          <div className="hidden md:flex items-center justify-center">
            <img
              src={image}
              alt={`${title} thumbnail`}
              className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-xl border border-gray-200 shadow-sm"
            />
          </div>
        )}
      </div>

      {/* Menu Button */}
      <div className="relative" ref={menuRef}>
        <button
          className="mx-2 text-gray-500 hover:text-gray-800 p-1 rounded-full hover:bg-gray-100 transition"
          title="More options"
          aria-label="More options"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <HiOutlineDotsHorizontal size={22} />
        </button>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="absolute right-0 top-8 w-40 bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl shadow-xl z-20 animate-fadeSlideDown">
            {[
              { label: "View", action: onView },
              { label: "Edit", action: onEdit },
              { label: "Delete", action: onDelete, danger: true },
            ].map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  item.action?.();
                  setMenuOpen(false);
                }}
                className={`block w-full text-left px-5 py-2.5 text-sm font-medium ${item.danger
                    ? "text-red-500 hover:bg-red-50"
                    : "text-gray-700 hover:bg-gray-100"
                  } transition-all`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ToDoStatusCard;
