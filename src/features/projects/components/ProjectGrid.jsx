import ProjectCard from "./ProjectCard";

const ProjectGrid = ({ projects, onSelect }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
    {projects.map((p) => (
      <ProjectCard key={p.id} project={p} onSelect={onSelect} />
    ))}
  </div>
);

export default ProjectGrid;
