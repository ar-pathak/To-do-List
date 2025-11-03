import { useState } from "react";
import { IoPersonAdd } from "react-icons/io5";
import { IoIosAdd } from "react-icons/io";
import { HiOutlineDocumentAdd } from "react-icons/hi";
import { MdOutlineTask, MdOutlineTaskAlt } from "react-icons/md";
import { VscStarFull } from "react-icons/vsc";
import ToDoStatusCard from "../utils/ToDoStatusCard";
import StatusChart from "../utils/StatusChart";
import InviteMemberPopup from "../Popups/InviteMemberPopup";
import AddEditTaskPopup from "../Popups/AddEditTaskPopup";

const status = [
  { status: "Completed", percentage: 84 },
  { status: "In Progress", percentage: 10 },
  { status: "Not Started", percentage: 6 },
];

const Dashboard = () => {
  const [showInvite, setShowInvite] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleInviteSend = (data) => console.log("Invite Sent:", data);
  const handleAddTask = (task) => console.log("New Task Added:", task);

  return (
    <div className="sm:m-6 md:mx-10 transition-all duration-300 text-gray-800">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-4 sm:mb-0">
          Welcome back, <span className="text-[#FF6767]">Sundar 👋</span>
        </h1>
        <button
          onClick={() => setShowInvite(true)}
          className="flex items-center gap-2 bg-white border border-[#FF6767] text-[#FF6767] px-5 py-2 rounded-xl shadow-sm hover:bg-[#FF6767] hover:text-white transition-all duration-200"
        >
          <IoPersonAdd className="text-lg" />
          <span className="text-sm font-medium">Invite</span>
        </button>
      </div>

      {/* Invite Popup */}
      <InviteMemberPopup
        isOpen={showInvite}
        onClose={() => setShowInvite(false)}
        onSendInvite={handleInviteSend}
      />

      {/* === ANALYTICS CARDS === */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-8">
        {[
          { label: "Total Tasks", value: 28, color: "from-blue-500 to-indigo-500" },
          { label: "Completed", value: 16, color: "from-green-500 to-emerald-400" },
          { label: "In Progress", value: 7, color: "from-yellow-500 to-orange-400" },
          { label: "Pending", value: 5, color: "from-red-500 to-pink-400" },
        ].map((card, idx) => (
          <div
            key={idx}
            className={`rounded-2xl p-4 text-white bg-gradient-to-br ${card.color} shadow-md hover:shadow-lg transition-all`}
          >
            <p className="text-sm opacity-90">{card.label}</p>
            <h2 className="text-2xl sm:text-3xl font-semibold mt-1">{card.value}</h2>
          </div>
        ))}
      </div>

      {/* === MAIN GRID === */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* === To-Do Section === */}
        <div className="rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition p-5">
          <div className="flex justify-between items-center mb-5">
            <div className="flex items-center gap-2 text-[#FF6767] font-medium">
              <HiOutlineDocumentAdd className="text-xl text-gray-500" />
              <span>To-Do Tasks</span>
            </div>
            <button
              onClick={() => setShowPopup(true)}
              className="flex items-center gap-1 text-sm text-gray-600 hover:text-[#FF6767] transition-all"
            >
              <IoIosAdd className="text-lg" />
              <span>Add Task</span>
            </button>
          </div>

          {/* To-Do List */}
          <p className="flex items-center mb-3 text-gray-700">
            <span className="font-medium text-sm">20 June</span>
            <span className="text-xs text-gray-400 ml-2 flex items-center gap-1">
              <VscStarFull className="text-yellow-500" /> Today
            </span>
          </p>

          <div className="space-y-4">
            <ToDoStatusCard
              title="Attend Nischal’s Birthday Party"
              description="Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements)"
              priority="Moderate"
              status="In Progress"
              image="./img/Rectangle 10.png"
            />
            <ToDoStatusCard
              title="Meeting with Project Team"
              description="Review development milestones and fix frontend bugs in dashboard."
              priority="High"
              status="Not Started"
              image="./img/Rectangle 10.png"
            />
            <ToDoStatusCard
              title="Prepare Monthly Report"
              description="Collect all project updates, client feedback, and progress reports."
              priority="Low"
              status="Completed"
              image="./img/Rectangle 10.png"
              createdAt="25th May, 2023"
            />
          </div>
        </div>

        {/* === Right Section (Analytics & Completed) === */}
        <div className="rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition p-5">
          {/* Task Status */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <MdOutlineTaskAlt className="text-[#FF6767]" />
              <span className="text-gray-600 text-sm ml-2 font-medium">
                Task Status
              </span>
            </div>
            <div className="hidden sm:flex justify-between">
              {status.map((item, idx) => (
                <StatusChart key={idx} type="single" data={item} />
              ))}
            </div>
            <div className="flex sm:hidden justify-center">
              <StatusChart
                type="multi"
                data={[
                  { name: "Completed", value: 84 },
                  { name: "In Progress", value: 10 },
                  { name: "Not Started", value: 6 },
                ]}
              />
            </div>
          </div>

          {/* Completed Tasks */}
          <div>
            <div className="flex items-center mb-4">
              <MdOutlineTask className="text-[#FF6767]" />
              <span className="text-gray-600 text-sm ml-2 font-medium">
                Completed Tasks
              </span>
            </div>
            <div className="space-y-4">
              <ToDoStatusCard
                title="Buy Groceries for Weekend"
                description="Pick up fruits, snacks, and essentials from the market."
                priority="Low"
                status="Completed"
                image="./img/Rectangle 10.png"
              />
              <ToDoStatusCard
                title="Fix UI Animations in Navbar"
                description="Enhance navigation bar hover effects and responsiveness."
                priority="Moderate"
                status="Completed"
                image="./img/Rectangle 10.png"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Popups */}
      <AddEditTaskPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        mode="add"
        onSubmit={handleAddTask}
      />
    </div>
  );
};

export default Dashboard;
