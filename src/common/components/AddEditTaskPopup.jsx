// src/common/AddEditTaskPopup.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { FiUpload } from "react-icons/fi";

const DEFAULT_TASK = {
    title: "",
    description: "",
    priority: "Moderate",
    status: "Not Started",
    assignedTo: "",
    date: "",
    image: null,
};

const AddEditTaskPopup = ({ isOpen, onClose, mode = "add", initialData = null, onSubmit, statuses = [], priorities = [] }) => {
    const [task, setTask] = useState(DEFAULT_TASK);
    const [errors, setErrors] = useState({});
    const titleRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            // initialize
            setTask({ ...DEFAULT_TASK, ...(initialData || {}) });
            setErrors({});
            // focus title after opening
            setTimeout(() => titleRef.current?.focus(), 120);
            // lock body scroll
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen, initialData]);

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") onClose?.();
        };
        if (isOpen) window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [isOpen, onClose]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask((p) => ({ ...p, [name]: value }));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => setTask((p) => ({ ...p, image: reader.result }));
        reader.readAsDataURL(file);
    };

    const validate = () => {
        const err = {};
        if (!task.title?.trim()) err.title = "Title is required";
        // additional validation can be added (e.g., date)
        setErrors(err);
        return Object.keys(err).length === 0;
    };

    const submit = (e) => {
        e?.preventDefault();
        if (!validate()) return;
        onSubmit?.(task);
        onClose?.();
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center p-3 sm:p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                aria-hidden={!isOpen}
            >
                <motion.div
                    role="dialog"
                    aria-modal="true"
                    aria-label={mode === "add" ? "Add new task" : "Edit task"}
                    ref={containerRef}
                    tabIndex={-1}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 40, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                >
                    {/* header */}
                    <div className="bg-gradient-to-r from-[#FF6767] to-[#FF8C68] px-6 py-3 flex justify-between items-center text-white sticky top-0 z-10">
                        <h3 className="text-lg font-semibold">
                            {mode === "add" ? "Add New Task" : "Edit Task"}
                        </h3>
                        <button onClick={onClose} aria-label="Close" className="text-white/90 hover:text-white text-xl">
                            <IoClose />
                        </button>
                    </div>

                    {/* body (scrollable) */}
                    <div className="overflow-y-auto px-6 py-5 sm:py-6 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                        <form id="task-form" onSubmit={submit} className="space-y-4 pb-[env(safe-area-inset-bottom)]">
                            {/* Title */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                <input
                                    ref={titleRef}
                                    name="title"
                                    value={task.title}
                                    onChange={handleChange}
                                    className={`w-full border ${errors.title ? "border-red-400" : "border-gray-300"} rounded-xl px-4 py-2 focus:ring-2 focus:ring-[#FF6767] outline-none`}
                                    placeholder="Task title"
                                    aria-invalid={!!errors.title}
                                />
                                {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
                            </div>

                            {/* Description */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                <textarea
                                    name="description"
                                    value={task.description}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="Describe the task"
                                    className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-[#FF6767] outline-none resize-none"
                                />
                            </div>

                            {/* Grid: priority, status, assigned, due date */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                                    <select name="priority" value={task.priority} onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-[#FF6767] outline-none">
                                        {(priorities.length ? priorities : ["Extreme", "High", "Moderate", "Low"]).map((p) => <option key={p} value={p}>{p}</option>)}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                                    <select name="status" value={task.status} onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-[#FF6767] outline-none">
                                        {(statuses.length ? statuses : ["Not Started", "In Progress", "Completed"]).map((s) => <option key={s} value={s}>{s}</option>)}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Assign to (optional)</label>
                                    <input name="assignedTo" value={task.assignedTo} onChange={handleChange}
                                        placeholder="User name or email" className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-[#FF6767] outline-none" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Due date</label>
                                    <input type="date" name="date" value={task.date} onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-[#FF6767] outline-none" />
                                </div>
                            </div>

                            {/* Image upload */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Image (optional)</label>
                                <div className="border-2 border-dashed border-gray-300 rounded-xl px-4 py-6 flex flex-col items-center justify-center hover:border-[#FF6767] transition relative group">
                                    <FiUpload className="text-gray-400 text-2xl mb-2 group-hover:text-[#FF6767]" />
                                    <p className="text-gray-500 text-sm text-center">Click to upload or drag & drop</p>
                                    <input type="file" accept="image/*" onChange={handleImageUpload} className="absolute inset-0 opacity-0 cursor-pointer" />
                                </div>
                                {task.image && (
                                    <div className="mt-3 flex justify-center">
                                        <img src={task.image} alt="preview" className="w-28 h-28 object-cover rounded-md border" />
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>

                    {/* footer (sticky) */}
                    <div className="flex justify-end gap-3 p-4 border-t border-gray-200 bg-white sticky bottom-0 z-10">
                        <button onClick={onClose} className="px-5 py-2.5 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition">Cancel</button>
                        <button form="task-form" onClick={submit} className="px-5 py-2.5 bg-[#FF6767] text-white rounded-xl hover:bg-[#ff5656] transition shadow-md">
                            {mode === "add" ? "Add Task" : "Save Changes"}
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default AddEditTaskPopup;
