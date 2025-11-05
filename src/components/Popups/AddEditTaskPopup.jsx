import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { FiUpload } from "react-icons/fi";

const AddEditTaskPopup = ({ isOpen, onClose, mode = "add", onSubmit, existingTask }) => {
  const [task, setTask] = useState({
    title: "",
    date: "",
    priority: "Moderate",
    description: "",
    image: null,
  });

  // initialize or reset task data
  useEffect(() => {
    if (isOpen && mode === "edit" && existingTask) {
      setTask({
        title: existingTask.title || "",
        date: existingTask.date || "",
        priority: existingTask.priority || "Moderate",
        description: existingTask.description || "",
        image: existingTask.image || null,
      });
    } else if (isOpen && mode === "add") {
      setTask({
        title: "",
        date: "",
        priority: "Moderate",
        description: "",
        image: null,
      });
    }
  }, [isOpen, mode, existingTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setTask((prev) => ({ ...prev, image: reader.result }));
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center p-3 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Centered container with scroll */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#FF6767] to-[#FF8C68] px-6 py-4 flex justify-between items-center text-white sticky top-0 z-10">
              <h2 className="text-xl sm:text-2xl font-semibold">
                {mode === "add" ? "Add New Task" : "Edit Task"}
              </h2>
              <button
                onClick={onClose}
                className="text-white/80 hover:text-white text-xl transition"
              >
                <IoClose />
              </button>
            </div>

            {/* Scrollable form */}
            <div className="overflow-y-auto px-6 py-5 sm:py-6 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              <form onSubmit={handleSubmit} className="space-y-5 pb-[env(safe-area-inset-bottom)]">
                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Task Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={task.title}
                    onChange={handleChange}
                    placeholder="Enter task title..."
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-gray-800 focus:ring-2 focus:ring-[#FF6767] outline-none transition"
                  />
                </div>

                {/* Date & Priority */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Due Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={task.date}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-gray-800 focus:ring-2 focus:ring-[#FF6767] outline-none transition"
                    />
                  </div>

                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Priority
                    </label>
                    <select
                      name="priority"
                      value={task.priority}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-gray-800 focus:ring-2 focus:ring-[#FF6767] outline-none bg-white transition"
                    >
                      <option value="Extreme">Extreme</option>
                      <option value="Moderate">Moderate</option>
                      <option value="Low">Low</option>
                    </select>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={task.description}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Describe your task..."
                    className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-gray-800 focus:ring-2 focus:ring-[#FF6767] outline-none transition resize-none"
                  />
                </div>

                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Task Image (Optional)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl px-4 py-6 flex flex-col items-center justify-center hover:border-[#FF6767] transition relative group">
                    <FiUpload className="text-gray-400 text-2xl mb-2 group-hover:text-[#FF6767]" />
                    <p className="text-gray-500 text-sm text-center">
                      Tap to upload or drag & drop an image
                    </p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </div>

                  {task.image && (
                    <div className="mt-3 flex justify-center">
                      <img
                        src={task.image}
                        alt="Preview"
                        className="w-32 h-32 object-cover rounded-lg shadow-md border"
                      />
                    </div>
                  )}
                </div>
              </form>
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-3 p-4 border-t border-gray-200 bg-white sticky bottom-0 z-10">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-5 py-2.5 bg-[#FF6767] text-white rounded-xl hover:bg-[#ff5656] transition font-medium shadow-md"
              >
                {mode === "add" ? "Add Task" : "Save Changes"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddEditTaskPopup;
