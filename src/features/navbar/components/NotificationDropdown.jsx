const NotificationDropdown = () => {
    const notifications = [
        { id: 1, text: "New order received", time: "2 min ago" },
        { id: 2, text: "Server backup completed", time: "10 min ago" },
        { id: 3, text: "You have 3 new messages", time: "1 hr ago" },
    ];


    return (
        <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border p-4 animate-fadeIn z-50">
            <div className="flex justify-between items-center mb-3">
                <p className="font-semibold text-gray-800">Notifications</p>
                <a
                    href="/notifications"
                    className="text-blue-500 text-sm hover:underline"
                >
                    View All
                </a>
            </div>


            <div className="space-y-3">
                {notifications.map((item) => (
                    <div
                        key={item.id}
                        className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition shadow-sm"
                    >
                        <p className="text-sm font-medium text-gray-700">{item.text}</p>
                        <p className="text-xs text-gray-400">{item.time}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default NotificationDropdown;