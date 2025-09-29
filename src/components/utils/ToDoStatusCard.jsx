import { HiOutlineDotsHorizontal } from "react-icons/hi";

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

const ToDoStatusCard = ({ title, description, priority, status, createdAt, image }) => {
  return (
    <div className="flex justify-between border border-gray-300 p-4 rounded-lg mb-3 shadow-sm hover:shadow-md transition">
      {/* Status Dot */}
      <div className={`w-3 h-3 rounded-full inline-block mr-2 mt-2 ${statusColors[status]}`} />

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-5 w-full mx-2">
        <div className="md:w-4/5 pr-2">
          <h2 className="text-lg md:text-xl font-medium">{title}</h2>
          <p className="text-gray-500 line-clamp-2">{description}</p>

          {/* Priority & Status & Created At */}
          <div className="flex flex-wrap mt-3 text-sm">
            <div className="flex items-center mr-4">
              <h3 className="font-medium">Priority:</h3>
              <span className={`ml-2 ${priorityColors[priority]}`}>{priority}</span>
            </div>
            <div className="flex items-center">
              <h3 className="font-medium">Status:</h3>
              <span className={`ml-2 ${statusColors[status]}`}>{status}</span>
            </div>
            {createdAt && (
              <div className="flex items-center ml-2">
                <h3 className="font-medium">Created:</h3>
                <span className="ml-2 text-gray-500">{createdAt}</span>
              </div>
            )}
          </div>
        </div>

        {/* Image */}
        {image && (
          <div className="h-full md:flex hidden items-center justify-center">
            <img
              src={image}
              alt={`${title} thumbnail`}
              className="w-20 h-20 md:w-28 md:h-28 object-cover rounded-lg"
            />
          </div>
        )}
      </div>

      {/* Menu */}
      <button
        className="mx-2 relative bottom-10 text-gray-500 hover:text-black"
        title="More options"
        aria-label="More options"
      >
        <HiOutlineDotsHorizontal size={20} />
      </button>
    </div>
  );
};



export default ToDoStatusCard;
