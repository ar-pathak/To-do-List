const TestimonialCard = ({ quote, name, role, highlight = false }) => (
    <div
        className={`relative rounded-2xl px-4 py-4 sm:px-5 sm:py-5 border shadow-[0_20px_60px_rgba(15,23,42,0.18)] overflow-hidden ${highlight
                ? "bg-white/95 border-white/80"
                : "bg-white/90 border-white/70"
            }`}
    >
        <div className="absolute -top-8 -left-8 w-16 h-16 bg-[#FF6767]/10 rounded-full blur-2xl" />
        <div className="relative">
            <p className="text-2xl leading-none mb-2 text-[#FF6767]">“</p>
            <p className="text-xs sm:text-sm text-gray-700 mb-4">{quote}</p>
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-semibold text-gray-900">{name}</p>
                    <p className="text-[11px] text-gray-500">{role}</p>
                </div>
                <div className="flex -space-x-1">
                    <span className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#FF6767] to-[#FF9B7B] border border-white shadow-md" />
                    <span className="w-7 h-7 rounded-full bg-gray-200 border border-white shadow-md" />
                </div>
            </div>
        </div>
    </div>
);

export default TestimonialCard