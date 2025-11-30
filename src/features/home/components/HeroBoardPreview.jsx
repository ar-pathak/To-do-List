import { FiBell, FiCloud } from "react-icons/fi";
import TaskColumn from "./TaskColumn";
import AvatarCircle from "./AvatarCircle";
import StatusPill from "./StatusPill";

const HeroBoardPreview = () => (
    <div className="relative">
        <div className="absolute -top-4 -right-3 sm:-top-6 sm:-right-6 w-20 sm:w-28 h-20 sm:h-28 bg-white/20 rounded-3xl blur-2xl animate-pulse" />

        <div className="relative rounded-3xl bg-white/90 shadow-[0_24px_80px_rgba(0,0,0,0.22)] border border-white/80 px-4 sm:px-6 py-4 sm:py-5 backdrop-blur">
            {/* Board header */}
            <div className="flex items-center justify-between mb-4">
                <div>
                    <p className="text-xs font-semibold text-gray-500">Today</p>
                    <p className="text-base sm:text-lg font-bold text-gray-900">
                        CloudTasks – Sprint Board
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <StatusPill icon={<FiCloud />} label="Synced" color="emerald" />
                    <div className="flex -space-x-2">
                        <AvatarCircle label="AP" />
                        <AvatarCircle label="SK" />
                        <AvatarCircle label="+5" muted />
                    </div>
                </div>
            </div>

            {/* Columns */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 text-[11px] sm:text-xs">
                <TaskColumn
                    title="Backlog"
                    count={4}
                    accent="border-l-4 border-orange-400"
                    tasks={[
                        {
                            label: "Brainstorm landing page layout",
                            tags: ["Design"],
                            priority: "Low",
                        },
                        {
                            label: "Collect feature requests",
                            tags: ["Product"],
                            priority: "Low",
                        },
                    ]}
                />
                <TaskColumn
                    title="In Progress"
                    count={3}
                    accent="border-l-4 border-blue-500"
                    pulse
                    tasks={[
                        {
                            label: "Implement cloud sync API",
                            tags: ["Backend"],
                            priority: "High",
                        },
                        {
                            label: "Task filters & search",
                            tags: ["Frontend"],
                            priority: "Medium",
                        },
                    ]}
                />
                <TaskColumn
                    title="Done"
                    count={9}
                    accent="border-l-4 border-emerald-500"
                    tasks={[
                        {
                            label: "Login & Signup flow",
                            tags: ["Auth"],
                            priority: "Done",
                        },
                        {
                            label: "Team onboarding email",
                            tags: ["Growth"],
                            priority: "Done",
                        },
                    ]}
                />
            </div>

            {/* Bottom strip */}
            <div className="mt-4 flex items-center justify-between text-[10px] sm:text-[11px] text-gray-600">
                <div className="flex items-center gap-2">
                    <FiBell className="text-[#FF6767]" />
                    <span>4 upcoming deadlines in the next 24 hours</span>
                </div>
                <button className="hidden sm:inline-flex items-center gap-1.5 text-[#FF6767] font-semibold hover:underline">
                    Open full dashboard →
                </button>
            </div>
        </div>
    </div>
);

export default HeroBoardPreview