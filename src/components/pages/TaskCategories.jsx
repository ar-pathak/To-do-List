import TaskCategoriesTable from "../utils/TaskCategoriesTable";

const TaskCategories = () => {
    return (
        <div className="border border-gray-300 rounded-2xl p-4 sm:p-6 shadow bg-white">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
                <h2 className="text-xl sm:text-2xl font-semibold">
                    <span className="border-b-2 border-b-[#F24E1E]">Task</span> Categories
                </h2>
                <span className="border-b font-semibold text-sm text-gray-600 hover:text-[#F24E1E] cursor-pointer">
                    Go Back
                </span>
            </div>

            {/* Add Button */}
            <div className="mb-8">
                <button className="py-2 px-4 sm:px-5 rounded-xl bg-[#F24E1E] shadow text-sm sm:text-base hover:bg-[#FF6767] hover:shadow-lg text-white transition">
                    Add Category
                </button>
            </div>

            {/* Tables */}
            <TaskCategoriesTable name="Status" tableName="Task Status" />
            <hr className="border-gray-200 my-8 sm:my-10" />
            <TaskCategoriesTable name="Priority" tableName="Task Priority" />
        </div>
    );
};

export default TaskCategories;
