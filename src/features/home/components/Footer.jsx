const Footer = () => (
    <footer className="mt-10 sm:mt-12 mb-2 text-[11px] sm:text-xs text-gray-600 flex flex-col sm:flex-row gap-2 sm:gap-0 items-center justify-between">
        <p>© {new Date().getFullYear()} CloudTasks. Built for focused teams.</p>
        <div className="flex items-center gap-3">
            <button className="hover:text-[#FF6767] transition">Status</button>
            <button className="hover:text-[#FF6767] transition">
                Privacy &amp; Terms
            </button>
            <button className="hover:text-[#FF6767] transition">Support</button>
        </div>
    </footer>
);

export default Footer;