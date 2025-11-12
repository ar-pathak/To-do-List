import { IoIosAdd } from "react-icons/io";
import { HiOutlineDocumentAdd } from "react-icons/hi";
import { VscStarFull } from "react-icons/vsc";
import ToDoStatusCard from "../../../components/utils/ToDoStatusCard";

const ToDoListSection = ({ tasks, onAddTask }) => (
    <div className="rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition p-5">
        <div className="flex justify-between items-center mb-5">
            <div className="flex items-center gap-2 text-[#FF6767] font-medium">
                <HiOutlineDocumentAdd className="text-xl text-gray-500" />
                <span>To-Do Tasks</span>
            </div>
            <button
                onClick={onAddTask}
                className="flex items-center gap-1 text-sm text-gray-600 hover:text-[#FF6767] transition-all"
            >
                <IoIosAdd className="text-lg" />
                <span>Add Task</span>
            </button>
        </div>

        <p className="flex items-center mb-3 text-gray-700">
            <span className="font-medium text-sm">20 June</span>
            <span className="text-xs text-gray-400 ml-2 flex items-center gap-1">
                <VscStarFull className="text-yellow-500" /> Today
            </span>
        </p>

        <div className="space-y-4">
            {tasks.map((task, idx) => (
                <ToDoStatusCard key={idx} {...task} />
            ))}
        </div>
    </div>
);

export default ToDoListSection;
