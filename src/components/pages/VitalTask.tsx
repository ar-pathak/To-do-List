import React, { useState } from "react";
import ToDoStatusCard from "../utils/ToDoStatusCard";
import { tasks } from "../../constaintData";
import VitalCards from "../utils/VitalCards";

const VitalTask = () => {
  const [isClicked, setIsClicked] = useState<number | null>(null);
  const [cardDetails, setCardDetails] = useState(tasks[0]);

  const handleTaskClick = (taskId: number, task: typeof tasks[0]) => {
    setIsClicked(isClicked === taskId ? null : taskId);
    setCardDetails(task);
  };

  return (
    <div className="flex">
      {/* Left Side (Task List) */}
      <div className="border border-gray-300 p-5 rounded-lg">
        <div className="mb-2 font-semibold">
          <h4><span className="border-b-2 border-b-amber-500">Vital</span> Task</h4>
        </div>
        {tasks.map((task) => (
          <div
            key={task.id}
            onClick={() => handleTaskClick(task.id, task)}
            className="mb-4 cursor-pointer"
          >
            <ToDoStatusCard {...task} />

            {/* Mobile screen dropdown (only clicked card shows) */}
            {isClicked === task.id && (
              <div className="xl:hidden">
                <VitalCards {...task} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Right Side (Details on big screens) */}
      <div className="xl:inline hidden">
        <VitalCards {...cardDetails} />
      </div>
    </div>
  );
};

export default VitalTask;
