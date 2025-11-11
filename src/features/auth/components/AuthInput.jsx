import React from "react";

const AuthInput = ({ icon: Icon, type = "text", placeholder, name, ...rest }) => (
  <label className="flex items-center border border-gray-300 rounded-xl p-3 mb-4 shadow-sm focus-within:ring-2 focus-within:ring-[#FF6767] transition">
    <Icon className="text-[#FF6767] w-5 h-5" />
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="ml-3 flex-1 outline-none text-sm sm:text-base"
      {...rest}
    />
  </label>
);

export default AuthInput;
