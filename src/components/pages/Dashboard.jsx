import { IoPersonAdd } from "react-icons/io5";
import { IoIosAdd } from "react-icons/io";
import { HiOutlineDocumentAdd } from "react-icons/hi";
import ToDoStatusCard from "../utils/ToDoStatusCard";
import { VscStarFull } from "react-icons/vsc";
const Dashboard = () => {
  return (
    <div className="m-5 mx-10">
      <div className="flex justify-between items-center">
        <p className="text-4xl font-medium">Welcome back, Sundar 👋</p>
        <div className="flex items-center gap-5 text-[#FF6767]">
          <div className="flex items-center gap-1 bg-gray-100 p-2 rounded-lg">
            <img src="./img/SearchICon.png" alt="link" />
            <img src="./img/SearchICon.png" alt="link" />
            <img src="./img/SearchICon.png" alt="link" />
            <img src="./img/SearchICon.png" alt="link" />
            <img src="./img/SearchICon.png" alt="link" />
          </div>
          <button type="button" className=" flex items-center gap-2 bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition px-4 cursor-pointer border border-[#FF6767]">
            <IoPersonAdd />
            <span>Invite</span>
          </button>
        </div>
      </div>
      <div className="flex justify-between border border-gray-300 p-10 rounded-lg mt-5">
        <div className="w-1/2 shadow-md rounded-lg p-5">
          <div className="flex justify-between items-center mb-5 ">
            <div className="flex items-center gap-2 text-[#FF6767] font-medium">
              <HiOutlineDocumentAdd className="text-[#A1A3AB]" />
              <span>To-Do</span>
            </div>
            <div className="flex items-center gap-2 text-[#FF6767] font-medium cursor-pointer hover:underline">
              <IoIosAdd />
              <span className="text-[#A1A3AB]">Add Task</span>
            </div>
          </div>
          <div>
            <p className="flex items-center" > <span className="text-[15px] font-medium mb-2">20 June</span> <span className="text-[#A1A3AB] text-[12px] mb-1 flex items-center mx-2"><VscStarFull className="mb-1" /> Today</span></p>
            <div className="p-2 ">
              <ToDoStatusCard />
              <ToDoStatusCard />
              <hr className="text-gray-300 my-5" />
              <ToDoStatusCard />
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
