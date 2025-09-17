import { IoIosSearch, IoMdNotificationsOutline } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import Search from "../utils/Search";
import { useEffect, useState } from "react";
import SideNavbar from "./SideNavbar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scroll Down → hide
        setShow(false);
      } else {
        // Scroll Up → show
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);


  return (
    <div
      className={`flex flex-col ${isOpen ? "p-0" : "p-4"
        } bg-white shadow-lg rounded-2xl border border-gray-200 max-w-7xl mx-auto w-full transition-all duration-300 fixed top-0 left-0 right-0 z-50 bg-white shadow transition-transform duration-300 ${show ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      {/* Top Bar */}
      <div className="flex justify-between items-center w-full">
        {/* Logo / Title */}
        <h1 className="sm:text-4xl text-2xl font-bold tracking-tight">
          <span className="text-[#FF6767]">Dash</span>board
        </h1>

        {/* Desktop Search */}
        <div className="w-1/3 hidden lg:block fade-in">
          {!isSearchOpen && <Search />}
        </div>

        {/* Icons + Date + Avatar */}
        <div className="flex items-center sm:gap-5 gap-2">
          {/* Mobile Search Icon */}
          <IoIosSearch
            role="button"
            aria-label="Search"
            className={`bg-[#FF6767] lg:hidden ${isSearchOpen ? "hidden" : ""
              } text-white w-7 h-7 sm:w-8 sm:h-8 p-1.5 rounded-md transition transform hover:scale-110 hover:bg-[#ff4c4c] cursor-pointer`}
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          />

          {/* Notification */}
          <IoMdNotificationsOutline
            role="button"
            aria-label="Notifications"
            className="bg-[#FF6767] text-white w-7 h-7 sm:w-8 sm:h-8 p-1.5 rounded-md transition transform hover:scale-110 hover:bg-[#ff4c4c] cursor-pointer"
          />

          {/* Calendar */}
          <FaCalendarAlt
            role="button"
            aria-label="Calendar"
            className="bg-[#FF6767] text-white w-7 h-7 sm:w-8 sm:h-8 p-1.5 rounded-md transition transform hover:scale-110 hover:bg-[#ff4c4c] cursor-pointer"
          />

          {/* Date */}
          <div className="hidden md:flex flex-col items-center px-3 py-1 bg-gray-50 rounded-md shadow-sm">
            <p className="text-sm font-medium">Tuesday</p>
            <p className="text-[#3ABEFF] text-xs">24/08/2021</p>
          </div>

          {/* hamburger */}
          <div
            className="hamburger mx-1 md:hidden  font-bold text-xl cursor-pointer select-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </div>
        </div>
      </div>

      {/* Mobile Search (Animated) */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${isSearchOpen
          ? "max-h-40 opacity-100 mt-3"
          : "max-h-0 opacity-0 overflow-hidden"
          }`}
      >
        <Search />
      </div>
      {/* hamburger nav menu */}
      <div
        className={`transition-all duration-500 ease-in-out md:hidden absolute z-50 w-full 
    ${isOpen ? "max-h-screen opacity-100 flex" : "max-h-0 opacity-0"} 
  `}
      >
        <SideNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default Navbar;
