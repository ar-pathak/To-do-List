import React, { useState } from "react";
import { MdEmail, MdOutlineLock } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import AuthLayout from "./components/AuthLayout";
import AuthInput from "./components/AuthInput";
import SocialLogin from "./components/SocialLogin";
import { Link } from "react-router";

const SignupPage = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Signup data:", formData);
    };

    return (
        <AuthLayout
            title="Create Account 🚀"
            subtitle="Join now and manage your projects smarter"
            image="./img/signup-illustration.png"
        >
            <form onSubmit={handleSubmit}>
                <AuthInput
                    icon={FaUser}
                    name="username"
                    placeholder="Enter your username"
                    value={formData.username}
                    onChange={handleChange}
                />
                <AuthInput
                    icon={MdEmail}
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <AuthInput
                    icon={MdOutlineLock}
                    type="password"
                    name="password"
                    placeholder="Create password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <AuthInput
                    icon={MdOutlineLock}
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />

                <label className="flex items-center gap-2 text-sm my-3">
                    <input type="checkbox" className="accent-[#FF6767]" />
                    <span>I agree to terms and conditions</span>
                </label>

                <button
                    type="submit"
                    className="w-full bg-[#FF6767] text-white py-3 rounded-xl font-medium hover:bg-[#ff5656] transition"
                >
                    Sign Up
                </button>

                <div className="text-center text-gray-600 text-sm mt-4">
                    Already have an account?{" "}
                    <Link to="/login" className="text-[#FF6767] font-semibold">
                        Log In
                    </Link>
                </div>
            </form>

            <SocialLogin />
        </AuthLayout>
    );
};

export default SignupPage;
