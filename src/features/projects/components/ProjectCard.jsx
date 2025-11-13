// features/projects/components/ProjectCard.jsx
import React from "react";

const statusColor = {
  "In Progress": "text-yellow-500",
  Completed: "text-green-500",
  "Not Started": "text-red-500",
};

const ProjectCard = ({ project, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(project)}
      className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-lg transition cursor-pointer flex flex-col justify-between h-full"
    >
      <div>
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-sm sm:text-lg font-semibold text-gray-800">
            {project.title}
          </h3>
          <span className={`text-xs sm:text-sm font-medium ${statusColor[project.status] || "text-gray-500"}`}>
            {project.status}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-gray-500 line-clamp-3 mb-3">
          {project.description}
        </p>

        <div className="flex items-center gap-3 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="1.5" d="M8 7V3m8 4V3M3 11h18M5 21h14"></path></svg>
            {project.dueDate}
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor"><circle cx="6" cy="12" r="1.5"></circle></svg>
            {project.members.length} members
          </span>
        </div>
      </div>

      <div className="mt-4">
        <div className="w-full bg-gray-100 rounded-full h-2.5">
          <div className="h-2.5 rounded-full bg-gradient-to-r from-[#FF6767] to-[#FF8C68]" style={{ width: `${project.progress}%` }} />
        </div>
        <div className="text-xs text-gray-400 mt-2">{project.progress}% complete</div>
      </div>
    </div>
  );
};

export default ProjectCard;
