import React, { useState, useEffect } from "react";

const AddEditTaskPopup = ({ isOpen, onClose, mode = "add", initialData = {}, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    priority: "Low",
    description: "",
    image: null,
  });
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    if (mode === "edit" && initialData) {
      setFormData({
        title: initialData.title || "",
        date: initialData.date || "",
        priority: initialData.priority || "Low",
        description: initialData.description || "",
        image: initialData.image || null,
      });
      setPreviewImage(initialData.image || null);
    } else {
      setFormData({
        title: "",
        date: "",
        priority: "Low",
        description: "",
        image: null,
      });
      setPreviewImage(null);
    }
  }, [mode, initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      const reader = new FileReader();
      reader.onload = () => setPreviewImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/40 backdrop-blur-sm px-3">
      <div
        className="
          bg-white w-full max-w-md rounded-2xl shadow-2xl relative overflow-hidden 
          animate-fadeIn flex flex-col max-h-[90vh]
        "
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#FF6767] to-[#FF9A76] py-3 px-5 flex justify-between items-center">
          <h2 className="text-white text-lg font-semibold tracking-wide">
            {mode === "edit" ? "Edit Task" : "Add New Task"}
          </h2>
          <button
            onClick={onClose}
            className="text-white text-lg font-bold hover:scale-110 transition"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-5 overflow-y-auto custom-scrollbar flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* Title */}
            <div>
              <label className="text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter task title"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#FF6767]"
                required
              />
            </div>

            {/* Date */}
            <div>
              <label className="text-sm font-medium text-gray-700">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#FF6767]"
                required
              />
            </div>

            {/* Priority */}
            <div>
              <label className="text-sm font-medium text-gray-700">Priority</label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6767]"
              >
                <option value="Extreme">Extreme</option>
                <option value="Moderate">Moderate</option>
                <option value="Low">Low</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter task details"
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 resize-none focus:outline-none focus:ring-2 focus:ring-[#FF6767]"
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="text-sm font-medium text-gray-700">Upload Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 cursor-pointer"
              />
              {previewImage && (
                <img
                  src={previewImage}
                  alt="Preview"
                  className="w-full mt-3 rounded-lg border border-gray-200 shadow-sm object-cover max-h-52"
                />
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#FF6767] text-white py-2 rounded-lg hover:bg-[#ff4b4b] transition shadow-lg mt-2"
            >
              {mode === "edit" ? "Update Task" : "Add Task"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEditTaskPopup;
