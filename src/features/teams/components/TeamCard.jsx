import { motion } from "framer-motion";
import { MdGroup, MdOutlineCalendarToday } from "react-icons/md";

const TeamCard = ({ team, onSelect }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={() => onSelect(team)}
            className="bg-white shadow-md hover:shadow-lg border border-gray-200 rounded-2xl p-4 sm:p-6 cursor-pointer transition flex flex-col justify-between"
        >
            <div>
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                        {team.name}
                    </h3>
                    <span className="text-xs sm:text-sm text-gray-400">
                        {team.members.length} Members
                    </span>
                </div>
                <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                    {team.description}
                </p>

                {/* Members */}
                <div className="flex -space-x-2">
                    {team.members.slice(0, 4).map((m, i) => (
                        <div
                            key={i}
                            className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF6767] to-[#FF8C68] flex items-center justify-center text-white text-xs font-semibold border-2 border-white shadow-sm"
                        >
                            {m.name[0]}
                        </div>
                    ))}
                    {team.members.length > 4 && (
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs font-medium border-2 border-white shadow-sm">
                            +{team.members.length - 4}
                        </div>
                    )}
                </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center text-xs sm:text-sm text-gray-500 mt-4 pt-3 border-t border-gray-100">
                <div className="flex items-center gap-1">
                    <MdGroup /> {team.projects.length} Projects
                </div>
                <div className="flex items-center gap-1">
                    <MdOutlineCalendarToday /> {team.createdAt}
                </div>
            </div>
        </motion.div>
    );
};

export default TeamCard;
