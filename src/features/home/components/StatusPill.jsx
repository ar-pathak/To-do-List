const StatusPill = ({ icon, label, color = "emerald" }) => {
    const colorMap = {
        emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
        blue: "bg-blue-50 text-blue-700 border-blue-200",
    };

    return (
        <div
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-medium ${colorMap[color]}`}
        >
            <span className="text-xs">{icon}</span>
            {label}
        </div>
    );
};
export default StatusPill;