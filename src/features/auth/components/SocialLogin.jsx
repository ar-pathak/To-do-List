import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";

const SocialLogin = () => (
    <div className="mt-6">
        <p className="text-center text-gray-500 mb-3 text-sm">
            Or continue with
        </p>
        <div className="flex justify-center gap-4">
            <FaFacebook className="w-6 h-6 text-blue-600 hover:scale-110 transition" />
            <FaGoogle className="w-6 h-6 text-red-500 hover:scale-110 transition" />
            <FaTwitter className="w-6 h-6 text-sky-500 hover:scale-110 transition" />
        </div>
    </div>
);

export default SocialLogin;
