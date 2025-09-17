import { IoPersonAdd } from "react-icons/io5";
import { IoIosAdd } from "react-icons/io";
import { HiOutlineDocumentAdd } from "react-icons/hi";
import ToDoStatusCard from "../utils/ToDoStatusCard";
import { VscStarFull } from "react-icons/vsc";
import StatusChart, { StatusChartForSM } from "../utils/StatusChart";
import { MdOutlineTask, MdOutlineTaskAlt } from "react-icons/md";

const status = [
  { status: "Completed", percentage: 84 },
  { status: "In Progress", percentage: 10 },
  { status: "Not Started", percentage: 6 }
]

const Dashboard = () => {
  return (
    <div className="m-5 mx-10">
      <div className="flex flex-wrap justify-between items-center">
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
      <div className="flex flex-wrap-reverse justify-between border border-gray-300 md:p-10 rounded-lg mt-5">
        <div className=" shadow-md rounded-lg p-5 mx-5">
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
              />

            </div>
          </div>
        </div>
        <div className="shadow-md rounded-lg p-5 mx-5">
          <div className="shadow-lg rounded-lg ">
            <div className="flex items-center mb-5"><MdOutlineTaskAlt className="text-[#FF6767]" /> <span className="text-[#A1A3AB] mx-2">Task Status</span></div>
            <div className="sm:flex hidden justify-between items-center mb-5">
              {status.map((item, idx) => (
                <StatusChart key={idx} status={item} />
              ))}
            </div>
            <div className="sm:hidden flex justify-between items-center mb-5">
              <StatusChartForSM />
            </div>
          </div>
          <div className="shadow-md rounded-lg mt-10">
            <div className="flex items-center"><MdOutlineTask className="text-[#FF6767]" /> <span className="text-[#A1A3AB] mx-2">Completed Task</span></div>
            <div className="p-5">
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
