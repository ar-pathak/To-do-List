import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { FiUsers } from "react-icons/fi";

const AddEditTeamPopup = ({ isOpen, onClose, onSubmit, mode = "add" }) => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name.trim()) {
            alert("Please enter a team name");
            return;
        }
        onSubmit(formData);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex justify-center items-center bg-black/50 backdrop-blur-md px-3 sm:px-0"
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        transition={{ duration: 0.25 }}
                        className="relative w-full max-w-md sm:max-w-lg max-h-[90vh] overflow-y-auto bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl border border-white/40 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.15)] p-5 sm:p-8"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition"
                        >
                            <IoClose size={22} />
                        </button>

                        {/* Header */}
                        <div className="flex items-center gap-3 mb-5">
                            <div className="bg-gradient-to-r from-[#FF6767] to-[#FF8C68] p-2 rounded-xl text-white">
                                <FiUsers size={22} />
                            </div>
                            <div>
                                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 tracking-tight">
                                    {mode === "add" ? "Create New Team" : "Edit Team"}
                                </h2>
                                <p className="text-sm text-gray-500">
                                    {mode === "add"
                                        ? "Collaborate better by creating a new team."
                                        : "Update your existing team details."}
                                </p>
                            </div>
                        </div>

                        {/* Form */}
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-5 text-sm sm:text-base"
                        >
                            {/* Team Name */}
                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-2">
                                    Team Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g. Frontend Developers"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                    className="w-full border border-gray-200 rounded-xl p-3 bg-white/70 focus:ring-2 focus:ring-[#FF6767] outline-none transition placeholder:text-gray-400"
                                />
                            </div>

                            {/* Description */}
                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-2">
                                    Description
                                </label>
                                <textarea
                                    placeholder="Describe the team's purpose and goals..."
                                    value={formData.description}
                                    onChange={(e) =>
                                        setFormData({ ...formData, description: e.target.value })
                                    }
                                    rows={3}
                                    className="w-full border border-gray-200 rounded-xl p-3 bg-white/70 focus:ring-2 focus:ring-[#FF6767] outline-none transition resize-none placeholder:text-gray-400"
                                />
                            </div>

                            {/* Add Members Section (Future Ready Placeholder) */}
                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-2">
                                    Members
                                </label>
                                <div className="flex flex-wrap gap-2 border border-gray-200 rounded-xl p-3 bg-white/70 text-sm text-gray-500">
                                    <span className="italic text-gray-400">
                                        Member selection feature coming soon...
                                    </span>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row justify-end gap-3 mt-4">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="py-2 px-5 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="py-2 px-5 bg-gradient-to-r from-[#FF7A3D] to-[#FF4E4E] text-white rounded-xl shadow-md hover:opacity-90 transition"
                                >
                                    {mode === "add" ? "Create Team" : "Save Changes"}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AddEditTeamPopup;
