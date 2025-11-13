import React from "react";
import {
  IoPersonOutline,
  IoColorPaletteOutline,
  IoNotificationsOutline,
  IoLockClosedOutline,
  IoPeopleOutline,
} from "react-icons/io5";

const menu = [
  { id: "account", label: "Account Settings", icon: <IoPersonOutline /> },
  { id: "notifications", label: "Notifications", icon: <IoNotificationsOutline /> },
  { id: "appearance", label: "Appearance", icon: <IoColorPaletteOutline /> },
  { id: "security", label: "Security", icon: <IoLockClosedOutline /> },
  { id: "workspace", label: "Workspace", icon: <IoPeopleOutline /> },
];

const SettingsSidebar = ({ active, setActive }) => {
  return (
    <div className="w-full sm:w-64 border-b sm:border-r border-gray-200 bg-white p-4 sm:p-6">
      <h2 className="text-gray-800 font-semibold text-lg mb-5">Settings</h2>

      <ul className="flex sm:block gap-3 sm:gap-0 overflow-x-auto">
        {menu.map((item) => (
          <li key={item.id}>
            <button
              className={`flex items-center gap-3 px-4 py-3 rounded-xl w-full text-left whitespace-nowrap
                ${active === item.id ? "bg-[#FF6767] text-white" : "text-gray-600 hover:bg-gray-100"}
              `}
              onClick={() => setActive(item.id)}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SettingsSidebar;
