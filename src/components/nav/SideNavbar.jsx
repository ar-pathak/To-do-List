import { BiTask } from "react-icons/bi";
import { MdDashboard, MdLogout } from "react-icons/md";
import { BsExclamationLg, BsListTask } from "react-icons/bs";
import { IoMdSettings, IoIosHelpCircleOutline } from "react-icons/io";
import { SiVexxhost } from "react-icons/si";
import { NavLink } from "react-router";

const navItems = [
  { name: "Dashboard", link: "/", icon: <MdDashboard />, active: true },
  { name: "Vital Task", link: "/vital-task", icon: <BsExclamationLg /> },
  { name: "My Task", link: "/my-task", icon: <BiTask /> },
  { name: "Task Categories", link: "/task-categories", icon: <BsListTask /> },
  { name: "Settings", link: "/settings", icon: <IoMdSettings /> },
  { name: "Help", link: "/help", icon: <IoIosHelpCircleOutline /> },
];

const SideNavbar = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={` ${isOpen ? "w-full h-screen" : "w-64"
        }   w-64 bg-[#FF6767] text-white h-full flex flex-col justify-between p-5 rounded-r-2xl shadow-lg transition `}
    >
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-6">
        {isOpen ? (
          <SiVexxhost
            className="absolute z-50 right-5 top-5"
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : (
          ""
        )}
        <img
          src="./img/Ellipse 1.png"
          alt="Profile"
          className="w-20 h-20 rounded-full border-2 border-white shadow-md"
        />
        <p className="mt-2 font-semibold">Sundar Gurung</p>
        <p className="text-sm text-gray-100">sundargurung360@gmail.com</p>
        <div className="w-full h-px bg-white/30 mt-4"></div>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-2">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  `flex items-center gap-3 p-3 rounded-lg transition font-medium ${isActive ? "bg-white text-[#FF6767]" : "hover:bg-white/20"
                  }`
                }
              >
                <span className="text-xl">{item.icon}</span>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout */}
      <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 pt-4 border-t border-white/30">
        <MdLogout className="text-xl" />
        <button className="font-medium">Logout</button>
      </div>
    </div>
  );
};

export default SideNavbar;
