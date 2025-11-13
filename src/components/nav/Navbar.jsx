import { IoIosSearch, IoMdNotificationsOutline } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import Search from "../utils/Search";
import SideNavbar from "./SideNavbar";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastY, setLastY] = useState(0);
  const [mobileSearch, setMobileSearch] = useState(false);

  // Sticky Hide/Show Navbar
  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY < lastY);
      setLastY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto p-4 flex items-center justify-between gap-4">
          {/* Brand */}
          <h1 className="text-3xl font-bold">
            <span className="text-[#FF6767]">Dash</span>board
          </h1>

          {/* Desktop Search */}
          <div className="hidden lg:block w-1/3">
            <Search />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Mobile Search */}
            <IoIosSearch
              className="lg:hidden bg-[#FF6767] text-white w-8 h-8 p-1.5 rounded-md cursor-pointer hover:bg-[#ff4c4c]"
              onClick={() => setMobileSearch(!mobileSearch)}
            />

            {/* Notifications */}
            <IoMdNotificationsOutline className="bg-[#FF6767] text-white w-8 h-8 p-1.5 rounded-md cursor-pointer hover:bg-[#ff4c4c]" />

            {/* Calendar */}
            <FaCalendarAlt className="bg-[#FF6767] text-white w-8 h-8 p-1.5 rounded-md cursor-pointer hover:bg-[#ff4c4c]" />

            {/* Desktop Date */}
            <div className="hidden md:block bg-gray-50 px-3 py-1 rounded-md shadow-sm text-center">
              <p className="text-sm font-medium">Tuesday</p>
              <p className="text-xs text-[#3ABEFF]">24/08/2021</p>
            </div>

            {/* Hamburger */}
            <button
              className="md:hidden ml-2 text-3xl font-bold"
              onClick={() => setIsMenuOpen(true)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {mobileSearch && (
          <div className="lg:hidden px-4 pb-3">
            <Search />
          </div>
        )}
      </nav>

      {/* Mobile Side Menu */}
      <SideNavbar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
    </header>
  );
};

export default Navbar;
