import { FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router";

const Navbar = () => (
    <header className="flex items-center justify-between py-3 sm:py-4">
        <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-2xl bg-white/90 shadow-lg flex items-center justify-center">
                <FiCheckCircle className="text-[#FF6767] text-xl" />
            </div>
            <div>
                <p className="font-bold text-lg leading-tight text-gray-900">
                    CloudTasks
                </p>
                <p className="text-[11px] uppercase tracking-[0.18em] text-gray-600">
                    Cloud Task Manager
                </p>
            </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-800">
            <a href="#features" className="hover:text-[#FF6767] transition">
                Features
            </a>
            <a href="#workflow" className="hover:text-[#FF6767] transition">
                How it works
            </a>
            <a href="#pricing" className="hover:text-[#FF6767] transition">
                Pricing
            </a>
            <a href="#testimonials" className="hover:text-[#FF6767] transition">
                Love from users
            </a>
        </nav>

        <div className="flex items-center gap-3">
            <Link
                to="/login"
                className="hidden sm:inline-flex text-sm font-medium text-gray-800 hover:text-[#FF6767] transition"
            >
                Log in
            </Link>
            <Link
                to="/signup"
                className="inline-flex items-center gap-2 rounded-2xl bg-gray-900 text-white text-sm sm:text-[13px] font-semibold px-4 sm:px-5 py-2 shadow-lg shadow-[#FF6767]/40 hover:bg-black hover:-translate-y-[1px] active:translate-y-0 transition"
            >
                Start free
                <span className="inline-flex w-5 h-5 items-center justify-center rounded-full bg-white/10 border border-white/30 text-[10px]">
                    🚀
                </span>
            </Link>
        </div>
    </header>
);

export default Navbar
