import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const TaskDetailCard = ({ task, onEdit, onDelete }) => (
  <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-6">
    <div className="flex flex-col sm:flex-row gap-6">
      <img src={task.image} alt={task.title} className="w-full sm:w-48 h-40 object-cover rounded-xl" />
      <div className="flex-1">
        <h3 className="text-2xl font-semibold mb-2 text-gray-800">{task.title}</h3>
        <p className="text-gray-600 mb-4">{task.description}</p>
        <div className="flex flex-wrap gap-4 text-sm">
          <span><b>Priority:</b> {task.priority}</span>
          <span><b>Status:</b> {task.status}</span>
          <span><b>Created:</b> {task.createdAt}</span>
        </div>
        <div className="flex justify-end mt-4 gap-3">
          <button onClick={onEdit} className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg">
            <FaEdit /> Edit
          </button>
          <button onClick={onDelete} className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg">
            <MdDelete /> Delete
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default TaskDetailCard;
