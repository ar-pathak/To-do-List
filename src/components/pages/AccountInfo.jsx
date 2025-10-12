import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const AccountInfo = () => {
    const [formData, setFormData] = useState({
        fullName: "Sundar Gurung",
        email: "sundargurung360@gmail.com",
        username: "sundar360",
        phone: "+91 98765 43210",
    });

    const [preview, setPreview] = useState("./img/Ellipse 1.png");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) setPreview(URL.createObjectURL(file));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Account information updated successfully!");
    };

    return (
        <div className="p-4 sm:p-6 md:p-8 bg-gray-50 min-h-screen rounded-2xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#FF6767] to-[#FF4E4E] text-white p-5 rounded-2xl shadow-md mb-6">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                    Account Information
                </h1>
            </div>

            {/* Profile & Form Section */}
            <div className="bg-white p-5 sm:p-8 rounded-2xl shadow-sm border border-gray-200">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
                    {/* Profile Picture */}
                    <div className="flex flex-col items-center w-full sm:w-auto">
                        {preview ? (
                            <img
                                src={preview}
                                alt="Profile Preview"
                                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-[#FF6767] shadow-md"
                            />
                        ) : (
                            <FaUserCircle className="text-7xl sm:text-8xl text-gray-400" />
                        )}
                        <label className="mt-3 sm:mt-4 text-xs sm:text-sm bg-[#FF6767] hover:bg-[#FF4E4E] text-white py-2 px-4 rounded-xl cursor-pointer shadow-md transition w-fit text-center">
                            Change Picture
                            <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleImageChange}
                            />
                        </label>
                    </div>

                    {/* Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
                    >
                        {/* Full Name */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1 text-sm sm:text-base">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-xl p-2.5 sm:p-3 focus:outline-none focus:ring-2 focus:ring-[#FF7A3D] text-sm sm:text-base"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1 text-sm sm:text-base">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-xl p-2.5 sm:p-3 focus:outline-none focus:ring-2 focus:ring-[#FF7A3D] text-sm sm:text-base"
                            />
                        </div>

                        {/* Username */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1 text-sm sm:text-base">
                                Username
                            </label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-xl p-2.5 sm:p-3 focus:outline-none focus:ring-2 focus:ring-[#FF7A3D] text-sm sm:text-base"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1 text-sm sm:text-base">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-xl p-2.5 sm:p-3 focus:outline-none focus:ring-2 focus:ring-[#FF7A3D] text-sm sm:text-base"
                            />
                        </div>

                        {/* Account Info Display */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1 text-sm sm:text-base">
                                Account Type
                            </label>
                            <p className="border border-gray-300 rounded-xl p-2.5 sm:p-3 bg-gray-100 text-gray-600 text-sm sm:text-base">
                                Premium User
                            </p>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1 text-sm sm:text-base">
                                Member Since
                            </label>
                            <p className="border border-gray-300 rounded-xl p-2.5 sm:p-3 bg-gray-100 text-gray-600 text-sm sm:text-base">
                                March 2023
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="col-span-1 sm:col-span-2 flex flex-col sm:flex-row justify-end gap-3 mt-4">
                            <button
                                type="button"
                                className="py-2 px-5 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition text-sm sm:text-base"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="py-2 px-5 sm:px-6 bg-[#FF4E4E] hover:bg-[#FF6767] text-white rounded-xl shadow-md transition text-sm sm:text-base"
                            >
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AccountInfo;
