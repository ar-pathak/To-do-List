import SettingSectionWrapper from "../SettingSectionWrapper";
import SectionCard from "../components/SectionCard";

const WorkspaceSettings = () => {
    return (
        <SettingSectionWrapper
            title="Workspace Settings"
            subtitle="Manage your workspace members and permissions."
        >
            <SectionCard title="Members">
                <div className="flex items-center justify-between py-2">
                    <span>Sundar Gurung</span>
                    <span className="text-sm text-gray-500">Admin</span>
                </div>
                <hr />
                <div className="flex items-center justify-between py-2">
                    <span>Arsan Pathak</span>
                    <span className="text-sm text-gray-500">Member</span>
                </div>

                <button className="mt-3 px-4 py-2 bg-[#FF6767] text-white rounded-lg">
                    Invite Member
                </button>
            </SectionCard>
        </SettingSectionWrapper>
    );
};

export default WorkspaceSettings;
