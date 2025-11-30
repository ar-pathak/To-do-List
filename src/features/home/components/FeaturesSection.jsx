import { FiBarChart2, FiCloud, FiLock, FiUsers, FiZap } from "react-icons/fi";
import FeatureCard from "./FeatureCard";
import { BsCalendarCheck } from "react-icons/bs";

const FeaturesSection = () => (
    <section id="features" className="mt-14 sm:mt-16">
        <div className="flex items-center justify-between gap-4 mb-6 sm:mb-8">
            <div>
                <p className="text-xs font-semibold text-[#FF6767] tracking-[0.22em] uppercase">
                    Features
                </p>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">
                    Designed for cloud-first teams that hate chaos.
                </h2>
            </div>
            <p className="hidden sm:block text-xs text-gray-600 max-w-xs">
                Every interaction is tuned with micro-animations and instant feedback,
                so your task manager feels as fast as you think.
            </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            <FeatureCard
                icon={<FiCloud />}
                title="Real-time cloud sync"
                desc="Every task, status, and comment updates instantly across web — no manual refresh, no stale data."
                chip="Live"
            />
            <FeatureCard
                icon={<BsCalendarCheck />}
                title="Smart calendar & reminders"
                desc="Auto-group tasks by due date, send smart nudges before something goes overdue."
                chip="Focus mode"
            />
            <FeatureCard
                icon={<FiUsers />}
                title="Team workspaces"
                desc="Separate boards per project, shared inbox for mentions, and role-based access built in."
                chip="Collaboration"
            />
            <FeatureCard
                icon={<FiLock />}
                title="Secure by default"
                desc="Encrypted in transit, granular permissions, activity logs and audit trails ready for scale."
                chip="Security"
            />
            <FeatureCard
                icon={<FiBarChart2 />}
                title="Progress analytics"
                desc="Visualize completed tasks, bottlenecks, and workload in clean, minimal charts."
                chip="Insights"
            />
            <FeatureCard
                icon={<FiZap />}
                title="Automation rules"
                desc="Move tasks, assign owners, and notify teammates automatically based on rules you define."
                chip="Automation"
            />
        </div>
    </section>
);

export default FeaturesSection;