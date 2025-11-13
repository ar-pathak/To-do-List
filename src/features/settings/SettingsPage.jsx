import { useState } from "react";
import SettingsSidebar from "./SettingsSidebar";
import AccountSettings from "./sections/AccountSettings";
import NotificationSettings from "./sections/NotificationSettings";
import AppearanceSettings from "./sections/AppearanceSettings";
import SecuritySettings from "./sections/SecuritySettings";
import WorkspaceSettings from "./sections/WorkspaceSettings";

const SettingsPage = () => {
  const [active, setActive] = useState("account"); // default section

  const renderSection = () => {
    switch (active) {
      case "account":
        return <AccountSettings />;
      case "notifications":
        return <NotificationSettings />;
      case "appearance":
        return <AppearanceSettings />;
      case "security":
        return <SecuritySettings />;
      case "workspace":
        return <WorkspaceSettings />;
      default:
        return <AccountSettings />;
    }
  };

  return (
    <div className="w-full h-full flex flex-col sm:flex-row">
      {/* Sidebar */}
      <SettingsSidebar active={active} setActive={setActive} />

      {/* Content */}
      <div className="flex-1 p-5 sm:p-10 overflow-y-auto">
        {renderSection()}
      </div>
    </div>
  );
};

export default SettingsPage;
