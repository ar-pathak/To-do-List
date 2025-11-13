import SettingSectionWrapper from "../SettingSectionWrapper";
import FormGroup from "../components/FormGroup";
import SectionCard from "../components/SectionCard";

const SecuritySettings = () => {
    return (
        <SettingSectionWrapper
            title="Security"
            subtitle="Manage your password and security preferences."
        >
            <SectionCard title="Change Password">
                <FormGroup label="Current Password">
                    <input type="password" className="w-full border rounded-lg p-3" />
                </FormGroup>
                <FormGroup label="New Password">
                    <input type="password" className="w-full border rounded-lg p-3" />
                </FormGroup>
                <FormGroup label="Confirm New Password">
                    <input type="password" className="w-full border rounded-lg p-3" />
                </FormGroup>
                <button className="px-4 py-2 bg-[#FF6767] text-white rounded-lg">
                    Update
                </button>
            </SectionCard>
        </SettingSectionWrapper>
    );
};

export default SecuritySettings;
