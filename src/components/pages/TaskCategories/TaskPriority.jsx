import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { defaultPriorities } from "./CategoryData";
import CategoryCard from "./CategoryCard";
import AddCategoryPopup from "./AddCategoryPopup";

const TaskPriority = () => {
  const [priorities, setPriorities] = useState(defaultPriorities);
  const [showPopup, setShowPopup] = useState(false);

  const handleAddCategory = (data) => {
    setPriorities([...priorities, { id: Date.now(), ...data }]);
  };

  const handleDelete = (id) => {
    setPriorities(priorities.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">
          <span className="border-b-2 border-[#FF6767]">Manage</span> Task Priority
        </h3>
        <button
          onClick={() => setShowPopup(true)}
          className="flex items-center gap-2 px-4 py-2 bg-[#FF6767] text-white rounded-xl hover:bg-[#ff5656] transition text-sm font-medium"
        >
          <IoMdAdd /> Add Priority
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {priorities.map((priority) => (
          <CategoryCard
            key={priority.id}
            name={priority.name}
            color={priority.color}
            onDelete={() => handleDelete(priority.id)}
            onEdit={() => setShowPopup(true)}
          />
        ))}
      </div>

      <AddCategoryPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        onSubmit={handleAddCategory}
        title="Add New Priority"
      />
    </div>
  );
};

export default TaskPriority;
