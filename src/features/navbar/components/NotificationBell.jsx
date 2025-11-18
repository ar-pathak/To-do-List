import { IoMdNotificationsOutline } from "react-icons/io";
import { useState } from "react";
import NotificationDropdown from "./NotificationDropdown";
import { Link } from "react-router";


const NotificationBell = () => {
    const [open, setOpen] = useState(false);


    return (
        <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <IoMdNotificationsOutline
                className="bg-[#FF6767] text-white w-8 h-8 p-1.5 rounded-md cursor-pointer hover:bg-[#ff5757] transition"
            />


            {open && <NotificationDropdown />}
        </div>
    );
};


export default NotificationBell;