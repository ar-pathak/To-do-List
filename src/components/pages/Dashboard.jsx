import { useState } from "react";
import { IoPersonAdd } from "react-icons/io5";
import { IoIosAdd } from "react-icons/io";
import { HiOutlineDocumentAdd } from "react-icons/hi";
import ToDoStatusCard from "../utils/ToDoStatusCard";
import { VscStarFull } from "react-icons/vsc";
import StatusChart from "../utils/StatusChart";
import { MdOutlineTask, MdOutlineTaskAlt } from "react-icons/md";
import InviteMemberPopup from "../Popups/InviteMemberPopup";
import AddEditTaskPopup from "../Popups/AddEditTaskPopup";


const status = [
  { status: "Completed", percentage: 84 },
  { status: "In Progress", percentage: 10 },
  { status: "Not Started", percentage: 6 }
]

const Dashboard = () => {
  const [showInvite, setShowInvite] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleInviteSend = (data) => {
    console.log("Invite Sent:", data);
  };

  const handleAddTask = (task) => {
    console.log("New Task Added:", task);
  };


  return (
    <div className="sm:m-5 md:mx-10 ">
      <div className="flex flex-wrap justify-between items-center">
        <p className="text-4xl m-2 sm:m-0 font-medium">Welcome back, Sundar 👋</p>
        <div className="flex items-center gap-5 text-[#FF6767]">
          <div className="lg:flex hidden items-center gap-1 bg-gray-100 p-2 rounded-lg">
            <img src="./img/SearchICon.png" alt="link" />
            <img src="./img/SearchICon.png" alt="link" />
            <img src="./img/SearchICon.png" alt="link" />
            <img src="./img/SearchICon.png" alt="link" />
            <img src="./img/SearchICon.png" alt="link" />
          </div>
          <button type="button" onClick={() => setShowInvite(true)} className=" flex items-center gap-2 bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition px-4 cursor-pointer border border-[#FF6767]">
            <IoPersonAdd />
            <span>Invite</span>
          </button>
        </div>
      </div>
      <InviteMemberPopup
        isOpen={showInvite}
        onClose={() => setShowInvite(false)}
        onSendInvite={handleInviteSend}
      />
      <div className="flex flex-wrap-reverse justify-between border border-gray-300 md:p-10 rounded-lg mt-5">
        <div className=" shadow-md rounded-lg sm:p-5 sm:mx-5">
          <div className="flex justify-between items-center mb-5 px-2 ">
            <div className="flex items-center gap-2 text-[#FF6767] font-medium">
              <HiOutlineDocumentAdd className="text-[#A1A3AB]" />
              <span>To-Do</span>
            </div>
            <div onClick={() => setShowPopup(true)} className="flex items-center gap-2 text-[#FF6767] font-medium cursor-pointer hover:underline">
              <IoIosAdd />
              <span className="text-[#A1A3AB]">Add Task</span>
            </div>
          </div>
          <div>
            <p className="flex items-center px-2" > <span className="text-[15px] font-medium mb-2">20 June</span> <span className="text-[#A1A3AB] text-[12px] mb-1 flex items-center mx-2"><VscStarFull className="mb-1" /> Today</span></p>
            <div className="p-2 ">
              <ToDoStatusCard
                title="Attend Nischal’s Birthday Party"
                description="Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements)"
                priority="Moderate"
                status="Not Started"
                image="./img/Rectangle 10.png"
              />

              <ToDoStatusCard
                title="Attend Nischal’s Birthday Party"
                description="Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements)"
                priority="Moderate"
                status="Not Started"
                image="./img/Rectangle 10.png"
              />

              <hr className="text-gray-300 my-5" />
              <ToDoStatusCard
                title="Attend Nischal’s Birthday Party"
                description="Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements)"
                priority="Moderate"
                status="Not Started"
                image="./img/Rectangle 10.png"
                createdAt="25th May, 2023"
              />

            </div>
          </div>
        </div>
        <AddEditTaskPopup
          isOpen={showPopup}
          onClose={() => setShowPopup(false)}
          mode="add"
          onSubmit={handleAddTask}
        />
        <div className="shadow-md rounded-lg mb-5 sm:p-5 py-5 sm:mx-5">
          <div className="shadow-lg rounded-lg ">
            <div className="flex items-center mb-5 px-2"><MdOutlineTaskAlt className="text-[#FF6767]" /> <span className="text-[#A1A3AB] mx-2">Task Status</span></div>
            <div className="sm:flex hidden justify-between items-center pb-5 mb-5">
              {status.map((item, idx) => (
                <StatusChart key={idx} type="single" data={item} />
              ))}
            </div>
            <div className="sm:hidden flex justify-center items-center pb-5 mb-5">
              <StatusChart
                type="multi"
                data={[
                  { name: "Completed", value: 84 },
                  { name: "In Progress", value: 10 },
                  { name: "Not Started", value: 6 },
                ]} />
            </div>
          </div>
          <div className="shadow-md rounded-lg mt-10">
            <div className="flex items-center px-2"><MdOutlineTask className="text-[#FF6767]" /> <span className="text-[#A1A3AB] mx-2">Completed Task</span></div>
            <div className="sm:p-5">
              <ToDoStatusCard
                title="Attend Nischal’s Birthday Party"
                description="Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements)"
                priority="Moderate"
                status="Not Started"
                image="./img/Rectangle 10.png"
              />
              <ToDoStatusCard
                title="Attend Nischal’s Birthday Party"
                description="Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements)"
                priority="Moderate"
                status="Not Started"
                image="./img/Rectangle 10.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
