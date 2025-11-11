import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { defaultStatuses } from "./CategoryData";
import CategoryCard from "./CategoryCard";
import AddCategoryPopup from "./AddCategoryPopup";

const TaskStatus = () => {
  const [statuses, setStatuses] = useState(defaultStatuses);
  const [showPopup, setShowPopup] = useState(false);

  const handleAddCategory = (data) => {
    setStatuses([...statuses, { id: Date.now(), ...data }]);
  };

  const handleDelete = (id) => {
    setStatuses(statuses.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">
          <span className="border-b-2 border-[#FF6767]">Manage</span> Task Status
        </h3>
        <button
          onClick={() => setShowPopup(true)}
          className="flex items-center gap-2 px-4 py-2 bg-[#FF6767] text-white rounded-xl hover:bg-[#ff5656] transition text-sm font-medium"
        >
          <IoMdAdd /> Add Status
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {statuses.map((status) => (
          <CategoryCard
            key={status.id}
            name={status.name}
            color={status.color}
            onDelete={() => handleDelete(status.id)}
            onEdit={() => setShowPopup(true)}
          />
        ))}
      </div>

      <AddCategoryPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        onSubmit={handleAddCategory}
        title="Add New Status"
      />
    </div>
  );
};

export default TaskStatus;
