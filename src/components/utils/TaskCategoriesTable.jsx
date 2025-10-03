import { IoMdAdd } from "react-icons/io";
import Table from './Table'

const TaskCategoriesTable = ({ name, tableName }) => {
    return (
        <div className="mb-5">
            <div className='flex item-center justify-between mb-3'>
                <h3 className=" font-semibold"> <span className="border-b-2 border-b-[#F24E1E]">Task</span> {name}</h3>
                <div className="flex items-center  hover:cursor-pointer"><IoMdAdd className="text-[#FF6767] mr-2" /> <span className="text-gray-400 text-sm"> Add Task Status</span></div>
            </div>
            <div>
                <Table
                    name={tableName}
                    rows={[
                        { value: "Completed", onEdit: () => console.log("Edit"), onDelete: () => console.log("Delete") },
                        { value: "In Progress", onEdit: () => { }, onDelete: () => { } },
                        { value: "In Progress", onEdit: () => { }, onDelete: () => { } },
                    ]}
                />
            </div>
        </div>
    )
}

export default TaskCategoriesTable