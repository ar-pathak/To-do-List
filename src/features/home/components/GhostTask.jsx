const GhostTask = ({ label, active = false, subtle = false }) => (
    <div
        className={`rounded-xl border px-2 py-1.5 flex items-center justify-between shadow-sm text-[10px] ${active
                ? "border-[#FF6767]/70 bg-[#FF6767]/5 animate-pulse"
                : subtle
                    ? "border-dashed border-gray-200 bg-gray-50/80"
                    : "border-gray-100 bg-white"
            }`}
    >
        <span className="text-[10px] text-gray-700 truncate mr-2">{label}</span>
        <span
            className={`inline-flex items-center px-1.5 py-[1px] rounded-full text-[9px] ${active ? "bg-[#FF6767] text-white" : "bg-gray-900 text-white"
                }`}
        >
            • Task
        </span>
    </div>
);

export default GhostTask