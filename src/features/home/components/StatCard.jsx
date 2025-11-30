const StatCard = ({ label, value }) => (
    <div className="rounded-2xl bg-white/5 border border-white/10 px-3 py-3 sm:px-4 sm:py-4">
        <p className="text-xs text-gray-300 mb-1">{label}</p>
        <p className="text-lg sm:text-xl font-bold">{value}</p>
    </div>
);

export default StatCard