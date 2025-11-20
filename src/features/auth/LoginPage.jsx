import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import AuthLayout from "./components/AuthLayout";
import AuthInput from "./components/AuthInput";
import SocialLogin from "./components/SocialLogin";
import { Link } from "react-router";
import useHandleLoginSubmit from "./hook/useHandleLoginSubmit";
import Loader from "./components/Loader";

const LoginPage = () => {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const { submitLogin, loading } = useHandleLoginSubmit();

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        submitLogin(formData);
    };

    return (
        <AuthLayout
            title="Welcome Back 👋"
            subtitle="Sign in to manage your tasks efficiently"
            image="./img/login-illustration.png"
        >
            <form onSubmit={handleSubmit}>
                <AuthInput
                    icon={FaUser}
                    name="username"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.username}
                    onChange={handleChange}
                />
                <AuthInput
                    icon={IoMdLock}
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                />

                <div className="flex justify-between items-center text-sm my-2">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="accent-[#FF6767]" />
                        <span>Remember me</span>
                    </label>
                    <a href="#" className="text-[#FF6767] hover:underline">
                        Forgot password?
                    </a>
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#FF6767] text-white py-3 rounded-xl font-medium hover:bg-[#ff5656] transition mt-4"
                >
                    {loading ? (
                        Loader({ msg: 'Signing In...' })
                    ) : (
                        'Sign In'
                    )}
                </button>

                <div className="text-center text-gray-600 text-sm mt-4">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="text-[#FF6767] font-semibold">
                        Sign Up
                    </Link>
                </div>
            </form>
            <SocialLogin />
        </AuthLayout>
    );
};

export default LoginPage;
