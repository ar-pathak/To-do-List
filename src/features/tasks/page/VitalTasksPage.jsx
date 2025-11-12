import { mockTasks } from "../data/mockTasks";
import TaskList from "../components/TaskList";

const VitalTasksPage = () => {
    const vitalTasks = mockTasks.filter((t) => t.priority === "High" || t.status !== "Completed");

    return (
        <div className="p-5 sm:p-8">
            <h1 className="text-2xl sm:text-3xl font-semibold mb-6">
                <span className="border-b-2 border-[#FF6767] pb-1">Vital</span> Tasks
            </h1>
            <TaskList tasks={vitalTasks} />
        </div>
    );
};

export default VitalTasksPage;
