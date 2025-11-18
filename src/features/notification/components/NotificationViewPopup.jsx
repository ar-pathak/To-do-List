import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";


const NotificationViewPopup = ({ isOpen, onClose, notification }) => {
    if (!notification) return null;


    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4"
                    onClick={onClose}
                >
                    {/* Popup Box */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, y: 40 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="bg-white/80 backdrop-blur-xl w-full max-w-md rounded-2xl shadow-2xl border border-gray-200 p-6 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200/70 transition"
                        >
                            <IoClose className="text-xl text-gray-700" />
                        </button>


                        {/* Icon */}
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-[#FF6767]/10 text-[#FF6767] flex items-center justify-center text-2xl">
                                <IoNotificationsOutline />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-800">Notification</h2>
                        </div>


                        {/* Content */}
                        <h3 className="text-lg font-semibold text-gray-900">{notification.title}</h3>
                        <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                            {notification.description || "No additional details provided."}
                        </p>


                        <p className="mt-4 text-xs text-gray-500">{notification.time}</p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};


export default NotificationViewPopup;