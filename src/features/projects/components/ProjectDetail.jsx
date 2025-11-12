import { motion } from "framer-motion";

const ProjectDetail = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[450px] bg-white shadow-2xl z-50 overflow-y-auto p-6"
        >
            <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 mb-4 text-sm font-medium"
            >
                ← Back
            </button>

            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {project.title}
            </h2>
            <p className="text-gray-600 mb-4">{project.description}</p>

            <div className="space-y-3 text-sm text-gray-500">
                <p>
                    <span className="font-semibold text-gray-700">Status:</span>{" "}
                    {project.status}
                </p>
                <p>
                    <span className="font-semibold text-gray-700">Due Date:</span>{" "}
                    {project.dueDate}
                </p>
                <p>
                    <span className="font-semibold text-gray-700">Progress:</span>{" "}
                    {project.progress}%
                </p>
                <p>
                    <span className="font-semibold text-gray-700">Members:</span>{" "}
                    {project.members.join(", ")}
                </p>
            </div>
        </motion.div>
    );
};

export default ProjectDetail;
