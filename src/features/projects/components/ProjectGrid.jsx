// features/projects/components/ProjectGrid.jsx
import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectGrid = ({ projects, onSelect }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default ProjectGrid;
