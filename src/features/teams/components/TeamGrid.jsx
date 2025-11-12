import TeamCard from "./TeamCard";

const TeamGrid = ({ teams, onSelect }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {teams.map((team) => (
            <TeamCard key={team.id} team={team} onSelect={onSelect} />
        ))}
    </div>
);

export default TeamGrid;
