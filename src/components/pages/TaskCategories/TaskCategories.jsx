import { useState } from "react";
import TaskStatus from "./TaskStatus";
import TaskPriority from "./TaskPriority";

const TaskCategories = () => {
    const [activeTab, setActiveTab] = useState("status");

    return (
        <div className="border border-gray-300 rounded-2xl p-5 shadow bg-white min-h-[80vh]">
            {/* Header */}
            <div className="flex flex-wrap justify-between items-center mb-5">
                <h2 className="text-2xl font-semibold">
                    <span className="border-b-2 border-[#FF6767]">Task</span> Categories
                </h2>
                <span className="border-b font-semibold text-sm hover:cursor-pointer text-gray-500 hover:text-[#FF6767] transition">
                    Go Back
                </span>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-6">
                <button
                    onClick={() => setActiveTab("status")}
                    className={`px-4 py-2 font-medium text-sm sm:text-base ${activeTab === "status"
                            ? "text-[#FF6767] border-b-2 border-[#FF6767]"
                            : "text-gray-500 hover:text-[#FF6767]"
                        } transition`}
                >
                    Task Status
                </button>
                <button
                    onClick={() => setActiveTab("priority")}
                    className={`px-4 py-2 font-medium text-sm sm:text-base ${activeTab === "priority"
                            ? "text-[#FF6767] border-b-2 border-[#FF6767]"
                            : "text-gray-500 hover:text-[#FF6767]"
                        } transition`}
                >
                    Task Priority
                </button>
            </div>

            {/* Dynamic Component */}
            {activeTab === "status" ? <TaskStatus /> : <TaskPriority />}
        </div>
    );
};

export default TaskCategories;
