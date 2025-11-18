import React from "react";
import { MdOutlinePriorityHigh } from "react-icons/md";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { LuTimer } from "react-icons/lu";

// Priority Colors
const priorityColors = {
    High: "text-red-500",
    Moderate: "text-yellow-500",
    Low: "text-green-500",
};

// Status Colors
const statusColors = {
    Completed: "bg-green-100 text-green-700 border-green-300",
    "In Progress": "bg-yellow-100 text-yellow-700 border-yellow-300",
    "Not Started": "bg-gray-100 text-gray-700 border-gray-300",
};

const ToDoStatusCard = ({ title, description, priority, status, image }) => {
    return (
        <div
            className="flex items-start gap-3 p-3 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300
                 sm:gap-4 sm:p-4"
        >
            {/* Image */}
            <img
                src={image}
                alt="task"
                className="w-10 h-10 rounded-lg object-cover border border-gray-200
                   sm:w-12 sm:h-12"
            />

            {/* Content */}
            <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-gray-800 truncate sm:text-base">{title}</h3>
                <p className="text-xs text-gray-600 mt-1 leading-snug line-clamp-2 sm:text-sm">{description}</p>

                {/* Meta Info */}
                <div
                    className="flex flex-wrap items-center gap-2 mt-2 text-[10px] font-medium sm:text-xs"
                >
                    {/* Priority */}
                    <div className="flex items-center gap-1">
                        <MdOutlinePriorityHigh className={`text-sm ${priorityColors[priority]}`} />
                        <span className="text-gray-700">{priority}</span>
                    </div>

                    {/* Status */}
                    <span
                        className={`px-2 py-0.5 rounded-full border ${statusColors[status]}`}
                    >
                        {status}
                    </span>
                </div>
            </div>

            {/* Icon */}
            <div className="flex items-center ml-1 sm:ml-2">
                {status === "Completed" ? (
                    <IoCheckmarkCircleOutline className="text-green-500 text-lg sm:text-xl" />
                ) : (
                    <LuTimer className="text-gray-400 text-base sm:text-lg" />
                )}
            </div>
        </div>
    );
};

export default ToDoStatusCard;