import { useEffect, useState } from "react";
import Search from "../components/Search";
import SideNavbar from "./SideNavbar";
import { IoIosSearch } from "react-icons/io";
import NotificationBell from "../components/NotificationBell";
import CalendarPopup from "../components/CalendarPopup";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);


    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY < lastScrollY);
            setLastScrollY(window.scrollY);
        };


        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);


    return (
        <div
            className={`flex flex-col p-4 bg-white shadow-lg rounded-2xl border border-gray-200 max-w-7xl mx-auto w-full transition-all duration-300 fixed top-0 left-0 right-0 z-50 ${show ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            <div className="flex justify-between items-center w-full">
                <h1 className="sm:text-4xl text-2xl font-bold"><span className="text-[#FF6767]">Dash</span>board</h1>


                <div className="w-1/3 hidden lg:block fade-in"> {!isSearchOpen && <Search />} </div>


                {/* RIGHT SECTION */}
                <div className="flex items-center gap-4">
                    <IoIosSearch
                        className="bg-[#FF6767] lg:hidden text-white w-8 h-8 p-1.5 rounded-md hover:bg-[#ff4c4c] cursor-pointer"
                        onClick={() => setIsSearchOpen(!isSearchOpen)}
                    />


                    <NotificationBell />
                    <CalendarPopup />


                    <div
                        className="hamburger md:hidden text-xl cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        ☰
                    </div>
                </div>
            </div>


            <div className={`md:hidden transition-all duration-300 ${isSearchOpen ? "max-h-40 mt-3" : "max-h-0 overflow-hidden"}`}> <Search /> </div>


            {isOpen && <SideNavbar isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
    );
};


export default Navbar;