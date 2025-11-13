import { FaGoogle, FaGithub } from "react-icons/fa";

const ConnectedApps = () => {
    return (
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800">Connected Apps</h2>
            <p className="text-gray-500 text-sm mb-5">
                Manage your linked accounts for easier authentication.
            </p>

            <div className="space-y-4">

                <div className="flex items-center justify-between border p-4 rounded-lg">
                    <div className="flex items-center gap-3">
                        <FaGoogle className="text-red-500 text-xl" />
                        <span className="text-gray-700">Google</span>
                    </div>
                    <button className="text-[#FF6767] font-medium">Connect</button>
                </div>

                <div className="flex items-center justify-between border p-4 rounded-lg">
                    <div className="flex items-center gap-3">
                        <FaGithub className="text-gray-800 text-xl" />
                        <span className="text-gray-700">GitHub</span>
                    </div>
                    <button className="text-[#FF6767] font-medium">Connect</button>
                </div>

            </div>
        </div>
    );
};

export default ConnectedApps;
