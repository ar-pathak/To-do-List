import { FiZap } from "react-icons/fi";
import HeroBoardPreview from "./HeroBoardPreview";
import HeroMetric from "./HeroMetric";
import { Link } from "react-router";

const HeroSection = () => (
    <section className="mt-8 sm:mt-12 lg:mt-16 flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
        {/* Left: text */}
        <div className="w-full lg:w-1/2 space-y-6 sm:space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-[6px] text-xs font-medium shadow-sm backdrop-blur">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Cloud-native • Real-time • Secure
            </div>

            <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                    Turn scattered to-dos into a
                    <span className="text-[#FF6767]"> focused, cloud workspace.</span>
                </h1>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-700 max-w-xl">
                    CloudTasks keeps every task, project, and deadline in one live,
                    collaborative board — so your team never asks{" "}
                    <span className="font-semibold italic">“what’s pending?”</span>{" "}
                    again.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
                <Link
                    to="/signup"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#FF6767] text-white text-sm sm:text-base font-semibold px-5 sm:px-6 py-3 sm:py-3.5 shadow-xl shadow-[#FF6767]/40 hover:bg-[#ff5656] hover:-translate-y-[2px] active:translate-y-0 transition"
                >
                    Get started – it’s free
                    <FiZap className="text-lg" />
                </Link>
                <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-2xl bg-white/90 backdrop-blur px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-gray-800 shadow-md hover:shadow-lg hover:-translate-y-[1px] transition border border-white/60"
                >
                    <span className="w-7 h-7 rounded-full border border-dashed border-gray-300 flex items-center justify-center">
                        ▶
                    </span>
                    Watch 60-sec demo
                </button>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4 text-[11px] sm:text-xs text-gray-700">
                <HeroMetric label="Tasks automated" value="32K+" />
                <HeroMetric label="Teams onboarded" value="1.4K+" />
                <HeroMetric label="Avg. time saved" value="6.3 hrs/wk" />
            </div>
        </div>

        {/* Right: animated preview */}
        <div className="w-full lg:w-1/2">
            <HeroBoardPreview />
        </div>
    </section>
);

export default HeroSection;