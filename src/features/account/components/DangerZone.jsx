const DangerZone = () => {
    return (
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-red-300 shadow-sm">
            <h2 className="text-xl font-semibold text-red-600">Danger Zone</h2>
            <p className="text-sm text-red-500 mt-1 mb-4">
                Deleting your account is permanent and cannot be undone.
            </p>

            <button className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                Delete Account
            </button>
        </div>
    );
};

export default DangerZone;
