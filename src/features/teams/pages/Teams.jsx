import { useMemo, useState } from "react";
import { teams as initialTeams } from "../data/teamsData";
import TeamFilterBar from "../components/TeamFilterBar";
import TeamGrid from "../components/TeamGrid";
import TeamDetail from "../components/TeamDetail";
import AddEditTeamPopup from "../../../common/AddEditTeamPopup";

const Teams = () => {
    const [teams, setTeams] = useState(initialTeams);
    const [selected, setSelected] = useState(null);
    const [filters, setFilters] = useState({ q: "", sort: "recent" });
    const [showPopup, setShowPopup] = useState(false);

    const filtered = useMemo(() => {
        let res = [...teams];
        if (filters.q)
            res = res.filter((t) =>
                t.name.toLowerCase().includes(filters.q.toLowerCase())
            );
        if (filters.sort === "oldest")
            res.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        else res.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        return res;
    }, [teams, filters]);

    const handleAddTeam = (data) => {
        const newTeam = {
            id: teams.length + 1,
            ...data,
            createdAt: new Date().toISOString().split("T")[0],
            members: [],
            projects: [],
        };
        setTeams([...teams, newTeam]);
    };

    return (
        <div className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <h1 className="text-2xl font-semibold text-gray-800">
                    Teams{" "}
                    <span className="text-gray-400 text-sm font-normal">
                        ({filtered.length})
                    </span>
                </h1>
                <button
                    onClick={() => setShowPopup(true)}
                    className="px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-[#FF6767] to-[#FF8C68] text-white hover:shadow-md transition-all"
                >
                    + New Team
                </button>
            </div>

            <TeamFilterBar filters={filters} setFilters={setFilters} />
            <TeamGrid teams={filtered} onSelect={setSelected} />

            {selected && (
                <TeamDetail team={selected} onClose={() => setSelected(null)} />
            )}
            <AddEditTeamPopup
                isOpen={showPopup}
                onClose={() => setShowPopup(false)}
                onSubmit={handleAddTeam}
            />
        </div>
    );
};

export default Teams;
