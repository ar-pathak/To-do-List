import { Link } from "react-router";

const FinalCTASection = () => (
    <section className="mt-16 sm:mt-20">
        <div className="rounded-3xl bg-white/95 border border-white/80 shadow-[0_24px_80px_rgba(15,23,42,0.22)] px-4 sm:px-6 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
                <p className="text-xs font-semibold text-[#FF6767] tracking-[0.22em] uppercase">
                    Ready when you are
                </p>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">
                    Build your cloud task workspace in under 60 seconds.
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-md">
                    Start with one personal board, invite your team later. You can always
                    scale up — you never lose your tasks.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
                <Link
                    to="/signup"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#FF6767] text-white text-sm sm:text-base font-semibold px-5 sm:px-6 py-3 shadow-lg shadow-[#FF6767]/40 hover:bg-[#ff5656] hover:-translate-y-[2px] active:translate-y-0 transition"
                >
                    Create free account
                </Link>
                <Link
                    to="/login"
                    className="text-xs sm:text-sm font-medium text-gray-800 hover:text-[#FF6767] transition"
                >
                    Already have an account? <span className="underline">Log in</span>
                </Link>
            </div>
        </div>
    </section>
);

export default FinalCTASection