import { IoPersonAdd } from "react-icons/io5";
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
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Dashboard;
