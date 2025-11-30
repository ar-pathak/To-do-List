const TaskColumn = ({ title, count, tasks, accent, pulse = false }) => (
    <div className="rounded-2xl bg-gray-50 border border-gray-100/70 shadow-sm p-2.5">
        <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
                <div
                    className={`w-1.5 h-7 rounded-full ${accent} ${pulse ? "animate-pulse" : ""
                        }`}
                />
                <p className="font-semibold text-gray-800 text-xs">{title}</p>
            </div>
            <span className="text-[10px] text-gray-500">{count}</span>
        </div>
        <div className="space-y-2">
            {tasks.map((task, idx) => (
                <div
                    key={idx}
                    className="group rounded-xl bg-white border border-gray-100 px-2.5 py-2 shadow-[0_6px_18px_rgba(15,23,42,0.06)] hover:-translate-y-[2px] hover:shadow-[0_12px_28px_rgba(15,23,42,0.18)] transition-all"
                >
                    <p className="text-[11px] font-medium text-gray-800 mb-1 line-clamp-2">
                        {task.label}
                    </p>
                    <div className="flex items-center justify-between">
                        <span className="inline-flex items-center px-1.5 py-[2px] rounded-full bg-gray-50 text-[9px] text-gray-500">
                            {task.tags[0]}
                        </span>
                        <span className="inline-flex items-center px-1.5 py-[2px] rounded-full text-[9px] font-semibold text-[#FF6767] bg-[#FF6767]/5">
                            {task.priority}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default TaskColumn;