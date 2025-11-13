// features/projects/components/ProjectDetail.jsx
import React from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

const ProjectDetail = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <motion.aside
            initial={{ x: 120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 120, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-2xl z-50 overflow-y-auto p-5"
        >
            <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
                <IoClose size={22} />
            </button>

            <div className="space-y-4 mt-4">
                <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
                <p className="text-sm text-gray-500">{project.description}</p>

                <div className="bg-gray-50 border border-gray-100 rounded-xl p-3">
                    <div className="flex justify-between items-center text-sm text-gray-600">
                        <div>
                            <div className="text-xs text-gray-500">Status</div>
                            <div className="font-medium">{project.status}</div>
                        </div>
                        <div>
                            <div className="text-xs text-gray-500">Due</div>
                            <div className="font-medium">{project.dueDate}</div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div style={{ width: `${project.progress}%` }} className="h-2.5 rounded-full bg-gradient-to-r from-[#FF6767] to-[#FF8C68]" />
                        </div>
                        <div className="text-xs text-gray-400 mt-2">{project.progress}% progress</div>
                    </div>
                </div>

                <div className="mt-2">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Members</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.members.map((m, i) => (
                            <div key={i} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-xs">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#FF6767] to-[#FF8C68] text-white flex items-center justify-center text-xs">{m[0]}</div>
                                <span className="text-xs">{m}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* tasks placeholder */}
                <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Project tasks</h4>
                    <div className="text-sm text-gray-500">Tasks will appear here (future integration).</div>
                </div>
            </div>
        </motion.aside>
    );
};

export default ProjectDetail;
