import MiniAnimatedBoard from "./MiniAnimatedBoard";

const BoardPreviewSection = () => (
    <section className="mt-14 sm:mt-16" id="pricing">
        <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2 space-y-3 sm:space-y-4">
                <p className="text-xs font-semibold text-[#FF6767] tracking-[0.22em] uppercase">
                    Your live command center
                </p>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Everything your team needs on a single, animated board.
                </h2>
                <p className="text-sm sm:text-base text-gray-700">
                    Drag & drop tasks across statuses, see avatars typing in real time,
                    and watch columns spring to life with subtle motion feedback. That
                    “is this updated?” feeling — gone.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                        <span className="mt-[3px] text-[#FF6767]">✓</span>
                        <span>Hover micro-interactions on cards for instant context.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="mt-[3px] text-[#FF6767]">✓</span>
                        <span>Color-coded priorities with animated breathing glow.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="mt-[3px] text-[#FF6767]">✓</span>
                        <span>Switch views: Kanban, calendar, list (coming soon).</span>
                    </li>
                </ul>

                <div className="flex flex-wrap gap-2 text-[11px] sm:text-xs">
                    <span className="px-2.5 py-1 rounded-full bg-white/80 border border-white text-gray-700">
                        No credit card required
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-white/80 border border-white text-gray-700">
                        Free for up to 5 teammates
                    </span>
                </div>
            </div>

            <div className="w-full lg:w-1/2">
                <MiniAnimatedBoard />
            </div>
        </div>
    </section>
);

export default BoardPreviewSection