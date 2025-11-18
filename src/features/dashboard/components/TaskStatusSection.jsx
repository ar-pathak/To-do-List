import { MdOutlineTaskAlt } from "react-icons/md";
import StatusChart from "./StatusChart";

const TaskStatusSection = ({ statusData }) => (
  <div className="rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition p-5">
    <div className="flex items-center mb-4">
      <MdOutlineTaskAlt className="text-[#FF6767]" />
      <span className="text-gray-600 text-sm ml-2 font-medium">Task Status</span>
    </div>
    <div className="hidden sm:flex justify-between">
      {statusData.map((s, i) => (
        <StatusChart key={i} type="single" data={s} />
      ))}
    </div>
    <div className="flex sm:hidden justify-center">
      <StatusChart
        type="multi"
        data={statusData.map((s) => ({
          name: s.status,
          value: s.percentage,
        }))}
      />
    </div>
  </div>
);

export default TaskStatusSection;
