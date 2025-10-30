import { useState } from "react";
import { IoClose } from "react-icons/io5";

const AddTaskPopup = ({ isOpen, onClose, onAddTask }) => {
    const [task, setTask] = useState({
        title: "",
        date: "",
        priority: "Moderate",
        description: "",
        image: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "image") {
            setTask({ ...task, image: files[0] });
        } else {
            setTask({ ...task, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task.title || !task.date || !task.description) {
            alert("Please fill all required fields!");
            return;
        }
        onAddTask(task);
        onClose();
        setTask({ title: "", date: "", priority: "Moderate", description: "", image: null });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white w-[90%] max-w-lg rounded-2xl shadow-xl p-6 sm:p-8 relative animate-fadeIn overflow-y-auto max-h-[90vh]">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition"
                >
                    <IoClose size={22} />
                </button>

                {/* Title */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Add New Task
                </h2>
                <p className="text-sm text-gray-500 mb-5">
                    Fill in the details below to create a new task.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Task Title <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter task title"
                            value={task.title}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A3D]"
                        />
                    </div>

                    {/* Date */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Due Date <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="date"
                            name="date"
                            value={task.date}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A3D]"
                        />
                    </div>

                    {/* Priority */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Priority
                        </label>
                        <select
                            name="priority"
                            value={task.priority}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A3D]"
                        >
                            <option value="Extreme">Extreme</option>
                            <option value="Moderate">Moderate</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Description <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            name="description"
                            placeholder="Write task details..."
                            value={task.description}
                            onChange={handleChange}
                            rows={4}
                            className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A3D] resize-none"
                        />
                    </div>

                    {/* Image Upload */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Upload Image (optional)
                        </label>
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-xl p-2 text-sm cursor-pointer"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row justify-end gap-3 mt-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="py-2 px-5 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition text-sm sm:text-base"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="py-2 px-5 bg-gradient-to-r from-[#FF7A3D] to-[#FF4E4E] text-white rounded-xl shadow-md hover:opacity-90 transition text-sm sm:text-base"
                        >
                            Add Task
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTaskPopup;
