import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-4 bg-gray-50">

      {/* Emoji */}
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="text-7xl mb-4"
      >
        😕
      </motion.div>

      <h1 className="text-3xl font-bold text-gray-800 mb-2">Oops! Page Not Found</h1>
      <p className="text-gray-500 mb-6 max-w-xs">
        The page you are looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="bg-[#FF6767] text-white px-6 py-2 rounded-xl shadow-md hover:bg-[#ff5656] transition font-medium"
      >
        Go to Dashboard
      </Link>
    </div>
  );
};

export default ErrorPage;
