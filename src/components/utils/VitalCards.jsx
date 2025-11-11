import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import AddEditTaskPopup from "../Popups/AddEditTaskPopup";
import DeleteConfirmPopup from "../Popups/DeleteConfirmPopup";

const VitalCards = ({ title, description, priority, status, createdAt, image }) => {
    const [showPopup, setShowPopup] = useState(false);
    const [editData, _setEditData] = useState({});
    const [showDelete, setShowDelete] = useState(false);

    const handleEditTask = () => {
        console.log("Edited Task");
    };

    const handleDelete = () => {
        console.log("Item deleted!");
    };

    return (
        <div className="px-5 py-10 border border-gray-300 rounded-lg mx-5 bg-white shadow-sm hover:shadow-md transition">
            <div className="flex p-4">
                {image && (
                    <div>
                        <img
                            src={image}
                            className="w-32 h-32 object-cover rounded-lg mr-3"
                            alt={title}
                        />
                    </div>
                )}
                <div className="flex flex-col px-4 justify-center">
                    <h3 className="font-bold text-xl mb-2">{title}</h3>
                    <p>
                        <span className="font-semibold">Priority: </span>
                        <span
                            className={`ml-1 text-sm ${priority === "Low"
                                    ? "text-green-500"
                                    : priority === "Moderate"
                                        ? "text-blue-400"
                                        : "text-red-500"
                                }`}
                        >
                            {priority}
                        </span>
                    </p>
                    <p>
                        <span className="font-semibold">Status: </span>
                        <span
                            className={`ml-1 text-sm ${status === "Completed"
                                    ? "text-green-500"
                                    : status === "In Progress"
                                        ? "text-yellow-500"
                                        : "text-red-500"
                                }`}
                        >
                            {status}
                        </span>
                    </p>
                    {createdAt && (
                        <p>
                            <span className="font-semibold">Created At: </span>
                            <span className="ml-1 text-sm text-gray-500">{createdAt}</span>
                        </p>
                    )}
                </div>
            </div>

            <div className="flex flex-col px-4 py-2 gap-3">
                <p className="text-gray-700 whitespace-pre-line">{description}</p>
                <div className="flex items-center justify-end gap-3">
                    {/* 🧩 Stop event bubbling */}
                    <MdDelete
                        onClick={(e) => {
                            e.stopPropagation();
                            setShowDelete(true);
                        }}
                        className="bg-red-500 text-white w-7 h-7 sm:w-8 sm:h-8 p-1.5 rounded-md cursor-pointer hover:bg-red-600"
                    />
                    <FaEdit
                        onClick={(e) => {
                            e.stopPropagation();
                            setShowPopup(true);
                        }}
                        className="bg-blue-500 text-white w-7 h-7 sm:w-8 sm:h-8 p-1.5 rounded-md cursor-pointer hover:bg-blue-600"
                    />
                </div>
            </div>

            {/* Popups */}
            <AddEditTaskPopup
                isOpen={showPopup}
                onClose={() => setShowPopup(false)}
                mode="edit"
                initialData={editData}
                onSubmit={handleEditTask}
            />
            <DeleteConfirmPopup
                isOpen={showDelete}
                onClose={() => setShowDelete(false)}
                onConfirm={handleDelete}
                title="Delete Task"
                message="Are you sure you want to delete this task? This action cannot be undone."
            />
        </div>
    );
};

export default VitalCards;
