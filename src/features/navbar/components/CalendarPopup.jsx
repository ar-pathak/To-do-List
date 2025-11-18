import { FaCalendarAlt } from "react-icons/fa";
import { useState } from "react";


const CalendarPopup = () => {
    const [open, setOpen] = useState(false);


    return (
        <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <FaCalendarAlt className="bg-[#FF6767] text-white w-8 h-8 p-1.5 rounded-md cursor-pointer hover:bg-[#ff5757] transition" />


            {open && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border p-4 animate-fadeIn z-50">
                    <p className="font-semibold text-gray-800 mb-3">Calendar</p>
                    <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium">
                        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                            <p key={d}>{d}</p>
                        ))}
                        {Array.from({ length: 31 }).map((_, i) => (
                            <div
                                key={i}
                                className="p-2 bg-gray-50 rounded-md hover:bg-[#FF6767] hover:text-white cursor-pointer transition"
                            >
                                {i + 1}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};


export default CalendarPopup;