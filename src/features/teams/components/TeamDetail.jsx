import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

const TeamDetail = ({ team, onClose }) => {
    if (!team) return null;

    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[400px] bg-white shadow-2xl z-50 overflow-y-auto p-6"
        >
            <button
                onClick={onClose}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition"
            >
                <IoClose size={22} />
            </button>

            <h2 className="text-2xl font-semibold text-gray-800 mb-1">
                {team.name}
            </h2>
            <p className="text-sm text-gray-500 mb-5">{team.description}</p>

            <h4 className="font-semibold text-gray-700 mb-2">Members</h4>
            <ul className="space-y-2 mb-4">
                {team.members.map((m, i) => (
                    <li
                        key={i}
                        className="flex justify-between bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm"
                    >
                        <span>{m.name}</span>
                        <span className="text-gray-500">{m.role}</span>
                    </li>
                ))}
            </ul>

            <h4 className="font-semibold text-gray-700 mb-2">Projects</h4>
            <ul className="space-y-2">
                {team.projects.map((p, i) => (
                    <li
                        key={i}
                        className="text-sm bg-gray-50 border border-gray-200 rounded-lg px-3 py-2"
                    >
                        {p}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

export default TeamDetail;
