import { FiCheckCircle, FiUsers, FiZap } from "react-icons/fi";
import WorkflowCard from "./WorkflowCard";

const WorkflowSection = () => (
    <section id="workflow" className="mt-16 sm:mt-20">
        <div className="text-center mb-8">
            <p className="text-xs font-semibold text-[#FF6767] tracking-[0.22em] uppercase">
                Workflow
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">
                From idea to done in three animated steps.
            </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            <WorkflowCard
                step="01"
                title="Capture tasks instantly"
                icon={<FiCheckCircle />}
                desc="Quick-add tasks from keyboard, email, or integrations – everything lands in your unified inbox."
            />
            <WorkflowCard
                step="02"
                title="Organize with live boards"
                icon={<FiUsers />}
                desc="Drag tasks into columns, assign owners, and watch avatars update in real time as your team works."
                highlight
            />
            <WorkflowCard
                step="03"
                title="Automate & track progress"
                icon={<FiZap />}
                desc="Set rules, reminders, and recurring tasks. Visualize progress with charts and completion streaks."
            />
        </div>
    </section>
);

export default WorkflowSection