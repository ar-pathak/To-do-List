import { useMemo, useState } from "react";
import { projects } from "../data/projectsData";
import ProjectFilterBar from "../components/ProjectFilterBar";
import ProjectGrid from "../components/ProjectGrid";
import ProjectDetail from "../components/ProjectDetail";
import AddEditProjectPopup from "../../../common/AddEditProjectPopup";

const Projects = () => {
    const [selected, setSelected] = useState(null);
    const [filters, setFilters] = useState({
        q: "",
        status: "",
        sort: "recent",
    });
    const [show, setShow] = useState(false);

    const filtered = useMemo(() => {
        let res = [...projects];
        if (filters.q)
            res = res.filter((p) =>
                p.title.toLowerCase().includes(filters.q.toLowerCase())
            );
        if (filters.status) res = res.filter((p) => p.status === filters.status);
        if (filters.sort === "recent")
            res.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        else res.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        return res;
    }, [filters]);

    const handleAdd = (data) => {
        console.log("New project added:", data);
    };

    return (
        <div className="p-3 sm:p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <h1 className="text-2xl font-semibold text-gray-800">
                    Projects{" "}
                    <span className="text-gray-400 text-sm font-normal">
                        ({filtered.length})
                    </span>
                </h1>
                <button onClick={() => setShow(true)} className="px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-[#FF6767] to-[#FF8C68] text-white hover:shadow-md transition-all">
                    + New Project
                </button>
            </div>

            <ProjectFilterBar filters={filters} setFilters={setFilters} />
            <ProjectGrid projects={filtered} onSelect={setSelected} />

            {selected && (
                <ProjectDetail project={selected} onClose={() => setSelected(null)} />
            )}

            <AddEditProjectPopup
                isOpen={show}
                onClose={() => setShow(false)}
                mode="add"
                onSubmit={handleAdd}
            />
        </div>
    );
};

export default Projects;
