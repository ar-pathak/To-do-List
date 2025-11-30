const FeatureCard = ({ icon, title, desc, chip }) => (
    <div className="group relative rounded-2xl bg-white/90 backdrop-blur border border-white/80 shadow-[0_20px_60px_rgba(15,23,42,0.12)] px-4 py-4 sm:px-5 sm:py-5 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(15,23,42,0.28)]">
        <div className="absolute -right-8 -top-8 w-20 h-20 bg-[#FF6767]/10 rounded-full blur-2xl group-hover:bg-[#FF6767]/20 transition" />
        <div className="relative flex items-center justify-between mb-3">
            <div className="w-9 h-9 rounded-xl bg-[#FF6767]/10 flex items-center justify-center group-hover:scale-105 transition">
                <span className="text-[#FF6767] text-xl">{icon}</span>
            </div>
            <span className="text-[10px] font-semibold rounded-full bg-gray-900 text-white px-2 py-[3px] shadow-sm">
                {chip}
            </span>
        </div>
        <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1.5">
            {title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            {desc}
        </p>
    </div>
);

export default FeatureCard