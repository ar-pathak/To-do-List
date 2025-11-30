const HeroMetric = ({ label, value }) => (
    <div className="rounded-2xl bg-white/80 backdrop-blur px-3 py-2.5 shadow-sm border border-white/50">
        <p className="text-xs text-gray-500 mb-1">{label}</p>
        <p className="font-semibold text-sm sm:text-base">{value}</p>
    </div>
);

export default HeroMetric;