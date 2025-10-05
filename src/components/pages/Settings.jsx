import React, { useState } from "react";
import { FaUser, FaLock, FaBell, FaPalette } from "react-icons/fa";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Profile", icon: <FaUser /> },
    { id: "security", label: "Security", icon: <FaLock /> },
    { id: "notifications", label: "Notifications", icon: <FaBell /> },
    { id: "appearance", label: "Appearance", icon: <FaPalette /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="animate-fadeIn">
            <h3 className="text-xl font-semibold mb-5">Profile Settings</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-5">
              <input type="text" placeholder="Full Name" className="setting-input" />
              <input type="email" placeholder="Email" className="setting-input" />
              <input type="text" placeholder="Username" className="setting-input" />
              <input type="tel" placeholder="Phone Number" className="setting-input" />
            </div>
            <button className="setting-btn">Save Changes</button>
          </div>
        );

      case "security":
        return (
          <div className="animate-fadeIn">
            <h3 className="text-xl font-semibold mb-5">Security Settings</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-5">
              <input type="password" placeholder="Current Password" className="setting-input" />
              <input type="password" placeholder="New Password" className="setting-input" />
              <input type="password" placeholder="Confirm Password" className="setting-input" />
            </div>
            <button className="setting-btn">Update Password</button>
          </div>
        );

      case "notifications":
        return (
          <div className="animate-fadeIn">
            <h3 className="text-xl font-semibold mb-5">Notifications</h3>
            <div className="flex flex-col gap-4">
              {["Email Alerts", "Push Notifications", "Task Reminders"].map((label) => (
                <label
                  key={label}
                  className="flex items-center justify-between border border-gray-200 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition"
                >
                  <span className="font-medium">{label}</span>
                  <input type="checkbox" className="scale-125 accent-[#FF6767]" />
                </label>
              ))}
            </div>
          </div>
        );

      case "appearance":
        return (
          <div className="animate-fadeIn">
            <h3 className="text-xl font-semibold mb-5">Appearance</h3>
            <div className="flex flex-wrap gap-4">
              <div className="appearance-card bg-white border hover:shadow-lg">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <p className="mt-2 text-gray-700">Light Mode</p>
              </div>
              <div className="appearance-card bg-gray-900 text-white hover:shadow-lg">
                <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                <p className="mt-2">Dark Mode</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-3 sm:p-6 md:p-10 bg-gray-50 min-h-screen transition-all">
      <div className="bg-white rounded-3xl shadow-md hover:shadow-lg transition p-6 md:p-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Tabs */}
          <aside className="w-full md:w-1/4 border-b md:border-b-0 md:border-r border-gray-200 pb-5 md:pb-0 pr-0 md:pr-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Settings</h2>
            <ul className="space-y-2">
              {tabs.map((tab) => (
                <li
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-[#FF6767] text-white shadow-md scale-[1.02]"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span className="font-medium">{tab.label}</span>
                </li>
              ))}
            </ul>
          </aside>

          {/* Content */}
          <main className="flex-1">{renderContent()}</main>
        </div>
      </div>
    </div>
  );
};

export default Settings;
