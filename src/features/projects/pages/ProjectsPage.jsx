// features/projects/pages/ProjectsPage.jsx
import React, { useMemo, useState } from "react";
import { projectsData } from "../data/projectsData";
import ProjectFilterBar from "../components/ProjectFilterBar";
import ProjectGrid from "../components/ProjectGrid";
import ProjectDetail from "../components/ProjectDetail";
import KanbanBoard from "../components/KanbanBoard";
import AddEditProjectPopup from "../components/AddEditProjectPopup"; // use previously built
import { FiGrid, FiLayout, FiPlus } from "react-icons/fi";

const defaultKanban = (projects) => {
    // create sample kanban items from projects (for demo)
    const items = projects.map((p) => ({
        id: `item-${p.id}`,
        title: p.title,
        projectTitle: p.title,
    }));

    return {
        todo: { id: "todo", title: "To do", items: items.filter((_, i) => i % 3 === 0) },
        inprogress: { id: "inprogress", title: "In progress", items: items.filter((_, i) => i % 3 === 1) },
        done: { id: "done", title: "Done", items: items.filter((_, i) => i % 3 === 2) },
    };
};

const ProjectsPage = () => {
    const [allProjects, setAllProjects] = useState(projectsData);
    const [filters, setFilters] = useState({ q: "", status: "", sort: "recent" });
    const [view, setView] = useState("grid"); // 'grid' or 'kanban'
    const [selected, setSelected] = useState(null);
    const [showAdd, setShowAdd] = useState(false);

    const filtered = useMemo(() => {
        let res = [...allProjects];
        if (filters.q) res = res.filter((p) => p.title.toLowerCase().includes(filters.q.toLowerCase()) || p.description.toLowerCase().includes(filters.q.toLowerCase()));
        if (filters.status) res = res.filter((p) => p.status === filters.status);
        if (filters.sort === "recent") res.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        else res.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        return res;
    }, [allProjects, filters]);

    const kanbanColumns = useMemo(() => defaultKanban(filtered), [filtered]);

    const handleAddProject = (data) => {
        const newProject = { id: `p${Date.now()}`, ...data, createdAt: new Date().toISOString().split("T")[0] };
        setAllProjects((s) => [newProject, ...s]);
        setShowAdd(false);
    };

    return (
        <div className="p-3 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-800">Projects <span className="text-gray-400 text-sm">({filtered.length})</span></h1>
                    <p className="text-xs text-gray-500 mt-1">Manage projects, view status and switch to Kanban board.</p>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 bg-white p-2 rounded-xl border border-gray-200">
                        <button onClick={() => setView("grid")} className={`p-2 rounded-md ${view === "grid" ? "bg-[#FF6767] text-white" : "text-gray-600"}`} title="Grid view"><FiGrid /></button>
                        <button onClick={() => setView("kanban")} className={`p-2 rounded-md ${view === "kanban" ? "bg-[#FF6767] text-white" : "text-gray-600"}`} title="Kanban view"><FiLayout /></button>
                    </div>

                    <button
                        onClick={() => setShowAdd(true)}
                        className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-[#FF6767] to-[#FF8C68] text-white rounded-lg"
                    >
                        <FiPlus /> New Project
                    </button>
                </div>
            </div>

            <div className="mt-4">
                <ProjectFilterBar filters={filters} setFilters={setFilters} />
            </div>

            {/* Views */}
            <div className="mt-4">
                {view === "grid" ? (
                    <ProjectGrid projects={filtered} onSelect={(p) => setSelected(p)} />
                ) : (
                    <div className="mt-3">
                        <KanbanBoard initialColumns={kanbanColumns} onMove={(r) => console.log("moved", r)} />
                    </div>
                )}
            </div>

            {/* Slide-over detail */}
            {selected && <ProjectDetail project={selected} onClose={() => setSelected(null)} />}

            {/* Add / Edit project popup */}
            <AddEditProjectPopup isOpen={showAdd} onClose={() => setShowAdd(false)} mode="add" onSubmit={handleAddProject} />
        </div>
    );
};

export default ProjectsPage;
