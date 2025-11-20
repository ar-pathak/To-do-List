// src/common/DeleteConfirmPopup.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoWarningOutline, IoClose } from "react-icons/io5";

const DeleteConfirmPopup = ({ isOpen, onClose, onConfirm, title, message, requireTyping = false }) => {
    const [typed, setTyped] = useState("");

    useEffect(() => {
        if (isOpen) setTyped("");
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center p-3 sm:p-6"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <motion.div role="dialog" aria-modal="true" aria-label="Delete confirmation"
                    initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="relative bg-white w-full max-w-sm rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">

                    <div className="bg-gradient-to-r from-[#FF6767] to-[#FF8C68] px-6 py-3 flex justify-between items-center text-white">
                        <h3 className="text-lg font-semibold">{title || "Delete Confirmation"}</h3>
                        <button onClick={onClose} aria-label="Close" className="text-white/90 hover:text-white text-xl"><IoClose /></button>
                    </div>

                    <div className="p-6 text-center overflow-y-auto">
                        <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                            <IoWarningOutline className="text-red-500 text-3xl" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">{title || "Are you sure?"}</h4>
                        <p className="text-gray-500 text-sm mb-4">{message || "This action cannot be undone."}</p>

                        {requireTyping && (
                            <div className="mb-4">
                                <p className="text-xs text-gray-500 mb-1">Type <strong>DELETE</strong> to confirm</p>
                                <input value={typed} onChange={(e) => setTyped(e.target.value)} placeholder="DELETE"
                                    className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-[#FF6767] outline-none text-center" />
                            </div>
                        )}
                    </div>

                    <div className="flex justify-end gap-3 p-4 border-t border-gray-200 bg-white">
                        <button onClick={onClose} className="px-4 py-2 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200">Cancel</button>
                        <button onClick={() => { if (requireTyping && typed.trim() !== "DELETE") return; onConfirm?.(); onClose?.(); }}
                            className={`px-4 py-2 rounded-xl text-white ${requireTyping && typed !== "DELETE" ? "bg-gray-300 cursor-not-allowed" : "bg-[#FF6767] hover:bg-[#ff5656]"} transition`}>
                            Delete
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default DeleteConfirmPopup;
