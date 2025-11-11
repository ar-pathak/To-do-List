import { motion, AnimatePresence } from "framer-motion";
import { IoWarningOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const DeleteConfirmPopup = ({ isOpen, onClose, onConfirm, title, message }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center p-3 sm:p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="relative bg-white w-full max-w-sm sm:max-w-md rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-[#FF6767] to-[#FF8C68] px-6 py-4 flex justify-between items-center text-white sticky top-0 z-10">
                            <h2 className="text-lg sm:text-xl font-semibold">Delete Confirmation</h2>
                            <button
                                onClick={onClose}
                                className="text-white/80 hover:text-white text-xl transition"
                            >
                                <IoClose />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col items-center text-center overflow-y-auto">
                            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                <IoWarningOutline className="text-red-500 text-3xl" />
                            </div>

                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                                {title || "Are you sure you want to delete?"}
                            </h3>
                            <p className="text-gray-500 text-sm sm:text-base mb-6 leading-relaxed">
                                {message ||
                                    "This action cannot be undone. Once deleted, the data will be permanently removed from the system."}
                            </p>
                        </div>

                        {/* Footer */}
                        <div className="flex justify-end gap-3 p-4 border-t border-gray-200 bg-white sticky bottom-0 z-10">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-5 py-2.5 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition font-medium"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    onConfirm?.();
                                    onClose();
                                }}
                                className="px-5 py-2.5 bg-[#FF6767] text-white rounded-xl hover:bg-[#ff4e4e] transition font-medium shadow-md"
                            >
                                Delete
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default DeleteConfirmPopup;
