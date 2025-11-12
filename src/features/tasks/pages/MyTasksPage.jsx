import { mockTasks } from "../data/mockTasks";
import TaskList from "../components/TaskList";

const MyTasksPage = () => (
  <div className="p-5 sm:p-8">
    <h1 className="text-2xl sm:text-3xl font-semibold mb-6">
      <span className="border-b-2 border-[#FF6767] pb-1">My</span> Tasks
    </h1>
    <TaskList tasks={mockTasks} />
  </div>
);

export default MyTasksPage;
