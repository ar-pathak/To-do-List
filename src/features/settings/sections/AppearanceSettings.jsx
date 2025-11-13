import SettingSectionWrapper from "../SettingSectionWrapper";
import SectionCard from "../components/SectionCard";

const AppearanceSettings = () => {
    return (
        <SettingSectionWrapper
            title="Appearance"
            subtitle="Customize how your workspace looks."
        >
            <SectionCard title="Theme">
                <div className="flex gap-3">
                    <button className="px-4 py-2 border rounded-lg">Light</button>
                    <button className="px-4 py-2 border rounded-lg bg-gray-900 text-white">
                        Dark
                    </button>
                </div>
            </SectionCard>
        </SettingSectionWrapper>
    );
};

export default AppearanceSettings;
