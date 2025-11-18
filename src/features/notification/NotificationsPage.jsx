const NotificationsPage = () => {
    const notifications = [
        { id: 1, title: "New order received", time: "2 min ago" },
        { id: 2, title: "Server backup completed", time: "10 min ago" },
        { id: 3, title: "New message from John", time: "15 min ago" },
        { id: 4, title: "Payment successful", time: "1 hr ago" },
    ];


    return (
        <div className="max-w-4xl mx-auto mt-28 p-6 bg-white rounded-xl shadow-lg border">
            <h2 className="text-3xl font-bold mb-6">All Notifications</h2>


            <div className="space-y-4">
                {notifications.map((n) => (
                    <div
                        key={n.id}
                        className="p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition cursor-pointer"
                    >
                        <p className="text-lg font-medium text-gray-800">{n.title}</p>
                        <p className="text-sm text-gray-500">{n.time}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default NotificationsPage;