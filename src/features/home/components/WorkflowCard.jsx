const WorkflowCard = ({ step, title, icon, desc, highlight = false }) => (
    <div
        className={`relative rounded-2xl px-4 py-4 sm:px-5 sm:py-6 border shadow-lg overflow-hidden transition-all group ${highlight
                ? "bg-gray-900 text-white border-gray-800 shadow-[0_24px_80px_rgba(15,23,42,0.8)]"
                : "bg-white/90 text-gray-900 border-white/80 shadow-[0_20px_60px_rgba(15,23,42,0.14)]"
            }`}
    >
        <div
            className={`absolute -top-10 right-0 w-24 h-24 rounded-full blur-2xl opacity-70 group-hover:opacity-90 transition ${highlight ? "bg-[#FF6767]/40" : "bg-[#FF6767]/15"
                }`}
        />
        <div className="relative flex items-center justify-between mb-3">
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase">
                Step {step}
            </span>
            <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center ${highlight ? "bg-white/10" : "bg-[#FF6767]/10"
                    }`}
            >
                <span className={highlight ? "text-[#FF9B7B]" : "text-[#FF6767]"}>
                    {icon}
                </span>
            </div>
        </div>
        <h3 className="relative text-sm sm:text-base font-semibold mb-2">
            {title}
        </h3>
        <p
            className={`relative text-xs sm:text-sm leading-relaxed ${highlight ? "text-gray-200" : "text-gray-600"
                }`}
        >
            {desc}
        </p>
    </div>
);

export default WorkflowCard