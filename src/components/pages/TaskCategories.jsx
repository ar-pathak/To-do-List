
import Table from "../utils/Table";
import TaskCategoriesTable from "../utils/TaskCategoriesTable";
const TaskCategories = () => {
    return (
        <div className="border border-gray-300 rounded-2xl p-5 shadow">
            <div className="flex justify-between items-center mb-5">
                <h2 className="text-2xl font-semibold"> <span className="border-b-2 border-b-[#F24E1E]">Task</span> Categories</h2>
                <span className="border-b font-semibold text-sm hover:cursor-pointer">Go Back</span>
            </div>
            <div className="mb-10">
                <button className="py-2 px-5 rounded-xl bg-[#F24E1E] shadow text-sm hover:cursor-pointer hover:bg-[#FF6767] hover:shadow-xl text-[#FFFFFF]">Add Category</button>
            </div>
            <TaskCategoriesTable name={"Status"} tableName={"Task Status"} />
            <hr className="text-gray-300 my-10" />
            <TaskCategoriesTable name={"Priority"} tableName={"Task Priority"} />


        </div>
    )
}

export default TaskCategories