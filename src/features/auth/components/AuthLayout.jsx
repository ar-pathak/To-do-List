import React from "react";

const AuthLayout = ({ title, subtitle, children, image }) => {
    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-[#FF6767] to-[#FF9B7B]">
            {/* Left side image */}
            <div className="hidden md:flex md:w-1/2 items-center justify-center bg-white/10 backdrop-blur-md">
                <img
                    src="/img/ach3 1.png"
                    alt="auth-illustration"
                    className="max-w-[80%] h-auto drop-shadow-2xl"
                />
            </div>

            {/* Right side form */}
            <div className="flex-1 flex flex-col justify-center items-center bg-white rounded-t-3xl md:rounded-none shadow-lg p-6 sm:p-10 md:p-16 lg:p-24">
                <div className="w-full max-w-md">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-gray-500 text-sm md:text-base mb-6">
                            {subtitle}
                        </p>
                    )}
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
