import { useState } from "react";
import HeaderSection from "./components/HeaderSection";
import TaskStatsCard from "./components/TaskStatsCard";
import ToDoListSection from "./components/ToDoListSection";
import TaskStatusSection from "./components/TaskStatusSection";
import CompletedTasksSection from "./components/CompletedTasksSection";
import AddEditTaskPopup from "../../common/AddEditTaskPopup";
import InviteMemberPopup from "../../common/InviteMemberPopup";
import { mockTasks, statusData } from "./data/mockData";

const DashboardPage = () => {
  const [showInvite, setShowInvite] = useState(false);
  const [showTaskPopup, setShowTaskPopup] = useState(false);

  const handleAddTask = (task) => console.log("New Task:", task);
  const handleInvite = (data) => console.log("Invite Sent:", data);

  return (
    <div className="sm:m-6 md:mx-10 text-gray-800 transition-all">
      {/* Header */}
      <HeaderSection onInvite={() => setShowInvite(true)} />

      {/* Invite Popup */}
      <InviteMemberPopup
        isOpen={showInvite}
        onClose={() => setShowInvite(false)}
        onSendInvite={handleInvite}
      />

      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-8">
        <TaskStatsCard label="Total Tasks" value={28} gradient="from-blue-500 to-indigo-500" />
        <TaskStatsCard label="Completed" value={16} gradient="from-green-500 to-emerald-400" />
        <TaskStatsCard label="In Progress" value={7} gradient="from-yellow-500 to-orange-400" />
        <TaskStatsCard label="Pending" value={5} gradient="from-red-500 to-pink-400" />
      </div>

      {/* Main Grid */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ToDoListSection
          tasks={mockTasks}
          onAddTask={() => setShowTaskPopup(true)}
        />
        <div className="flex flex-col gap-8">
          <TaskStatusSection statusData={statusData} />
          <CompletedTasksSection />
        </div>
      </div>

      {/* Popups */}
      <AddEditTaskPopup
        isOpen={showTaskPopup}
        onClose={() => setShowTaskPopup(false)}
        mode="add"
        onSubmit={handleAddTask}
      />
    </div>
  );
};

export default DashboardPage;
