import { IoMdAdd } from "react-icons/io";
import Table from "./Table";
import { useState } from "react";
import DeleteConfirmPopup from "../Popups/DeleteConfirmPopup";

const TaskCategoriesTable = ({ name, tableName }) => {
    const [showDelete, setShowDelete] = useState(false);
    const handleDelete = () => {
        console.log("Item deleted!");
    };
    return (
        <div className="mb-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
                <h3 className="text-lg font-semibold">
                    <span className="border-b-2 border-b-[#F24E1E]">Task</span> {name}
                </h3>
                <div className="flex items-center text-sm sm:text-base text-gray-500 hover:text-[#FF6767] cursor-pointer transition">
                    <IoMdAdd className="text-[#FF6767] mr-1 sm:mr-2 text-lg" />
                    <span>Add {tableName}</span>
                </div>
            </div>

            {/* Table */}
            <Table
                name={tableName}
                rows={[
                    {
                        value: "Completed", onEdit: () => console.log("Edit"), onDelete: () => {
                            setShowDelete(true);
                        }
                    },
                    {
                        value: "In Progress", onEdit: () => { }, onDelete: () => {
                            setShowDelete(true);
                        }
                    },
                    {
                        value: "Pending Review", onEdit: () => { }, onDelete: () => {
                            setShowDelete(true);
                        }
                    },
                ]}
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

export default TaskCategoriesTable;
