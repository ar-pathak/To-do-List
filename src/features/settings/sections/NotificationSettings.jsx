import SettingSectionWrapper from "../SettingSectionWrapper";

const NotificationSettings = () => {
  return (
    <SettingSectionWrapper
      title="Notifications"
      subtitle="Choose how you want to receive updates."
    >
      <div className="space-y-4">
        <label className="flex items-center gap-3">
          <input type="checkbox" defaultChecked />
          <span>Email Notifications</span>
        </label>
        <label className="flex items-center gap-3">
          <input type="checkbox" defaultChecked />
          <span>Task Reminder Alerts</span>
        </label>
        <label className="flex items-center gap-3">
          <input type="checkbox" />
          <span>Daily Summary</span>
        </label>
      </div>
    </SettingSectionWrapper>
  );
};

export default NotificationSettings;
