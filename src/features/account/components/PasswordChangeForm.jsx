const PasswordChangeForm = () => {
    return (
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800">Change Password</h2>
            <p className="text-gray-500 text-sm mb-5">
                Keep your account secure by choosing a strong password.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                <div className="sm:col-span-2">
                    <label className="text-sm font-medium">Current Password</label>
                    <input type="password" className="w-full border p-3 rounded-lg mt-1" />
                </div>

                <div>
                    <label className="text-sm font-medium">New Password</label>
                    <input type="password" className="w-full border p-3 rounded-lg mt-1" />
                </div>

                <div>
                    <label className="text-sm font-medium">Confirm Password</label>
                    <input type="password" className="w-full border p-3 rounded-lg mt-1" />
                </div>

            </div>

            <button className="mt-5 px-5 py-2 bg-[#FF6767] text-white rounded-lg hover:bg-[#ff4e4e]">
                Update Password
            </button>
        </div>
    );
};

export default PasswordChangeForm;
