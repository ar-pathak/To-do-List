import { MdOutlineTask } from "react-icons/md";
import ToDoStatusCard from "./ToDoStatusCard";

const CompletedTasksSection = () => (
  <div className="rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition p-5">
    <div className="flex items-center mb-4">
      <MdOutlineTask className="text-[#FF6767]" />
      <span className="text-gray-600 text-sm ml-2 font-medium">
        Completed Tasks
      </span>
    </div>
    <div className="space-y-4">
      <ToDoStatusCard
        title="Fix UI Animations"
        description="Improve transition effects and responsiveness across all pages."
        priority="Moderate"
        status="Completed"
        image="./img/Rectangle 10.png"
      />
      <ToDoStatusCard
        title="Prepare Release Notes"
        description="Summarize recent updates and send them to the product team."
        priority="Low"
        status="Completed"
        image="./img/Rectangle 10.png"
      />
    </div>
  </div>
);

export default CompletedTasksSection;
