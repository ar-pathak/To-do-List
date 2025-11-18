import React from "react";
import { motion } from "framer-motion";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsDot } from "react-icons/bs";
import NotificationViewPopup from "./components/NotificationViewPopup";

const notifications = [
    { id: 1, title: "New order received", time: "2 min ago", type: "order" },
    { id: 2, title: "Server backup completed", time: "10 min ago", type: "system" },
    { id: 3, title: "New message from John", time: "15 min ago", type: "message" },
    { id: 4, title: "Payment successful", time: "1 hr ago", type: "payment" },
];

const typeColors = {
    order: "bg-blue-100 text-blue-600",
    system: "bg-purple-100 text-purple-600",
    message: "bg-yellow-100 text-yellow-600",
    payment: "bg-green-100 text-green-600",
};

const NotificationsPage = () => {
    const [selected, setSelected] = React.useState(null);
    const [open, setOpen] = React.useState(false);


    const openPopup = (item) => {
        setSelected(item);
        setOpen(true);
    };

    return (
        <div className="min-h-screen p-6 sm:p-10 bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
                <IoNotificationsOutline className="text-4xl text-[#FF6767]" />
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                    Notifications
                </h2>
            </div>

            <div className="max-w-3xl mx-auto rounded-2xl bg-white/80 backdrop-blur-lg border border-gray-200 shadow-xl p-6 sm:p-8">
                <div className="space-y-5">
                    {notifications.map((n, index) => (
                        <motion.div
                            key={n.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.08 }}
                            onClick={() => openPopup(n)}
                            className="group flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md hover:bg-white transition-all cursor-pointer"
                        >
                            <div className="flex items-center gap-4">
                                {/* Icon Badge */}
                                <div
                                    className={`w-11 h-11 flex items-center justify-center rounded-xl text-lg font-bold ${typeColors[n.type]}`}
                                >
                                    <IoNotificationsOutline />
                                </div>

                                {/* Text */}
                                <div>
                                    <p className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-[#FF6767] transition-all">
                                        {n.title}
                                    </p>
                                    <p className="flex items-center text-sm text-gray-500">
                                        <BsDot className="text-xl" /> {n.time}
                                    </p>
                                </div>
                            </div>

                            {/* Indicator */}
                            <div className="w-3 h-3 bg-[#FF6767] rounded-full opacity-90 group-hover:opacity-100 transition-all"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <NotificationViewPopup
                isOpen={open}
                onClose={() => setOpen(false)}
                notification={selected}
            />
        </div>
    );
};

export default NotificationsPage;