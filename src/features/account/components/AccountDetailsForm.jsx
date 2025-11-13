const AccountDetailsForm = () => {
    return (
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800">Personal Details</h2>
            <p className="text-gray-500 text-sm mb-5">
                Update your personal contact and profile information.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                <div>
                    <label className="text-sm font-medium">Country</label>
                    <input className="w-full border p-3 rounded-lg mt-1" defaultValue="India" />
                </div>

                <div>
                    <label className="text-sm font-medium">City</label>
                    <input className="w-full border p-3 rounded-lg mt-1" placeholder="Enter city" />
                </div>

                <div className="sm:col-span-2">
                    <label className="text-sm font-medium">Bio</label>
                    <textarea
                        rows={3}
                        placeholder="Tell something about yourself..."
                        className="w-full border p-3 rounded-lg mt-1 resize-none"
                    ></textarea>
                </div>

            </div>

            <button className="mt-5 px-5 py-2 bg-[#FF6767] text-white rounded-lg hover:bg-[#ff4e4e]">
                Save Changes
            </button>
        </div>
    );
};

export default AccountDetailsForm;
