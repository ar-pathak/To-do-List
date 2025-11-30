import StatCard from "./StatCard";

const StatsSection = () => (
    <section className="mt-14 sm:mt-16">
        <div className="rounded-3xl bg-gray-900 text-white px-4 sm:px-6 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_28px_90px_rgba(15,23,42,0.9)]">
            <div className="space-y-2">
                <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#FF9B7B]">
                    Numbers that matter
                </p>
                <h2 className="text-xl sm:text-2xl font-bold">
                    Teams close their tasks 2.7× faster with CloudTasks.
                </h2>
                <p className="text-xs sm:text-sm text-gray-300 max-w-md">
                    Thanks to automation, live updates, and a UI built for speed, your
                    backlog stops feeling like a black hole and starts feeling like a
                    smooth conveyor belt.
                </p>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center w-full sm:w-auto">
                <StatCard label="Fewer overdue tasks" value="–61%" />
                <StatCard label="Projects delivered on time" value="92%" />
                <StatCard label="Avg. team adoption" value="89%" />
            </div>
        </div>
    </section>
);


export default StatsSection;