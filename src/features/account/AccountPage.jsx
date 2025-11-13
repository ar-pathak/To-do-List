import ProfileCard from "./components/ProfileCard";
import AccountDetailsForm from "./components/AccountDetailsForm";
import PasswordChangeForm from "./components/PasswordChangeForm";
import ConnectedApps from "./components/ConnectedApps";
import DangerZone from "./components/DangerZone";

const AccountPage = () => {
  return (
    <div className="p-5 sm:p-10">

      {/* Header */}
      <h1 className="text-3xl font-semibold text-gray-800 mb-1">
        Account Settings
      </h1>
      <p className="text-gray-500 text-sm mb-8">
        Manage your personal information and security.
      </p>

      <div className="space-y-8">

        <ProfileCard />

        <AccountDetailsForm />

        <PasswordChangeForm />

        <ConnectedApps />

        <DangerZone />

      </div>
    </div>
  );
};

export default AccountPage;
