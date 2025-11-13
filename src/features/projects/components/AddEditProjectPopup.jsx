import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { FiUpload } from "react-icons/fi";

const AddEditProjectPopup = ({
  isOpen,
  onClose,
  mode = "add",
  initialData = {},
  onSubmit,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startDate: "",
    dueDate: "",
    status: "Not Started",
    progress: 0,
    members: [],
    image: "",
  });

  useEffect(() => {
    if (mode === "edit" && initialData) {
      setFormData((prev) => ({ ...prev, ...initialData }));
    }
  }, [initialData, mode]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () =>
        setFormData({ ...formData, image: reader.result });
      reader.readAsDataURL(file);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      alert("Project title is required");
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
          className="fixed inset-0 z-50 flex justify-center items-center bg-black/50 backdrop-blur-md px-2 sm:px-0"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-lg sm:max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl border border-white/40 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.15)] p-4 sm:p-8"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition"
            >
              <IoClose size={22} />
            </button>

            {/* Title */}
            <div className="mb-5">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 tracking-tight">
                {mode === "add" ? "Create New Project" : "Edit Project"}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {mode === "add"
                  ? "Plan, collaborate, and execute effortlessly."
                  : "Update your project details below."}
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 text-sm sm:text-base"
            >
              {/* Title */}
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Project Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g. E-commerce Redesign"
                  className="w-full border border-gray-200 rounded-xl p-3 bg-white/70 focus:ring-2 focus:ring-[#FF6767] outline-none transition"
                />
              </div>

              {/* Date Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Start Date
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl p-3 bg-white/70 focus:ring-2 focus:ring-[#FF6767] outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Due Date
                  </label>
                  <input
                    type="date"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl p-3 bg-white/70 focus:ring-2 focus:ring-[#FF6767] outline-none transition"
                  />
                </div>
              </div>

              {/* Status + Progress */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Status
                  </label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl p-3 bg-white/70 focus:ring-2 focus:ring-[#FF6767] outline-none transition"
                  >
                    <option>Not Started</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Progress (%)
                  </label>
                  <input
                    type="number"
                    name="progress"
                    min="0"
                    max="100"
                    value={formData.progress}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl p-3 bg-white/70 focus:ring-2 focus:ring-[#FF6767] outline-none transition"
                  />
                </div>
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Project Image
                </label>
                <div className="relative border-2 border-dashed border-gray-300 rounded-xl p-5 text-center cursor-pointer hover:border-[#FF6767] transition">
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <FiUpload className="mx-auto text-[#FF6767] text-2xl mb-2" />
                  <p className="text-gray-500 text-sm">
                    Drag & drop or <span className="text-[#FF6767]">browse</span>
                  </p>
                  {formData.image && (
                    <img
                      src={formData.image}
                      alt="Preview"
                      className="mt-3 w-28 h-28 object-cover rounded-lg mx-auto border border-gray-200"
                    />
                  )}
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Briefly describe your project goals..."
                  className="w-full border border-gray-200 rounded-xl p-3 bg-white/70 focus:ring-2 focus:ring-[#FF6767] outline-none transition"
                />
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
                  {mode === "add" ? "Create Project" : "Save Changes"}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddEditProjectPopup;
