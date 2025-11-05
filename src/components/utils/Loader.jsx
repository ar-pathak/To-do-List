import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white/60 backdrop-blur-md z-50">

            {/* Spinner */}
            <motion.div
                className="w-16 h-16 border-4 border-t-[#FF6767] border-gray-300 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
            />

            {/* Loading Text */}
            <motion.p
                className="mt-4 text-gray-700 font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            >
                Loading...
            </motion.p>
        </div>
    );
};

export default Loader;
