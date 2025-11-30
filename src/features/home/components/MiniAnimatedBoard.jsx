import GhostTask from "./GhostTask";

const MiniAnimatedBoard = () => (
    <div className="relative">
        <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-white/20 rounded-3xl blur-2xl animate-pulse" />
        <div className="relative rounded-3xl border border-white/80 bg-white/95 shadow-[0_28px_90px_rgba(15,23,42,0.35)] px-4 sm:px-5 py-4 sm:py-5">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <p className="text-xs font-semibold text-gray-700">
                        Cloud workspace – Demo
                    </p>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-gray-500">
                    <span className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
                        ⌘
                    </span>
                    <span>+ K • Command palette</span>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-2.5 text-[10px]">
                {["Today", "This week", "Later"].map((label, idx) => (
                    <div
                        key={label}
                        className="rounded-2xl bg-gray-50 border border-gray-100 p-2"
                    >
                        <div className="flex items-center justify-between mb-1.5">
                            <span className="font-semibold text-gray-800">{label}</span>
                            <span className="text-[9px] text-gray-500">
                                {idx === 0 ? "3" : idx === 1 ? "5" : "2"}
                            </span>
                        </div>
                        <div className="space-y-1.5">
                            <GhostTask label="Design dashboard empty state" active={idx === 0} />
                            <GhostTask label="Sync with mobile app" />
                            {idx === 1 && (
                                <GhostTask label="Automate recurring standup tasks" subtle />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default MiniAnimatedBoard;