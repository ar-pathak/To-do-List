import { motion } from "framer-motion";
import { FaRegClock } from "react-icons/fa";
import { MdPeople } from "react-icons/md";

const statusColors = {
  "In Progress": "text-yellow-500",
  Completed: "text-green-500",
  "Not Started": "text-red-500",
};

const ProjectCard = ({ project, onSelect }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
      onClick={() => onSelect(project)}
      className="bg-white shadow-md hover:shadow-lg border border-gray-200 rounded-2xl p-4 sm:p-6 transition cursor-pointer flex flex-col justify-between"
    >
      <div>
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
            {project.title}
          </h3>
          <span
            className={`text-xs sm:text-sm font-medium ${statusColors[project.status]
              }`}
          >
            {project.status}
          </span>
        </div>
        <p className="text-gray-500 text-sm line-clamp-2 mb-3">
          {project.description}
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-3">
          <div
            className="bg-gradient-to-r from-[#FF6767] to-[#FF8C68] h-2.5 rounded-full transition-all"
            style={{ width: `${project.progress}%` }}
          />
        </div>

        {/* Info Row */}
        <div className="flex justify-between text-xs sm:text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <FaRegClock /> {project.dueDate}
          </div>
          <div className="flex items-center gap-2">
            <MdPeople /> {project.members.length} Members
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
