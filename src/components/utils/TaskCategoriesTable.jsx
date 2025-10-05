import { IoMdAdd } from "react-icons/io";
import Table from "./Table";

const TaskCategoriesTable = ({ name, tableName }) => {
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
                    { value: "Completed", onEdit: () => console.log("Edit"), onDelete: () => console.log("Delete") },
                    { value: "In Progress", onEdit: () => { }, onDelete: () => { } },
                    { value: "Pending Review", onEdit: () => { }, onDelete: () => { } },
                ]}
            />
        </div>
    );
};

export default TaskCategoriesTable;
