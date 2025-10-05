import { FaQuestionCircle, FaEnvelope, FaBook, FaHeadset } from "react-icons/fa";

const Help = () => {
    return (
        <div className="min-h-screen px-3 sm:px-6 py-8 bg-gradient-to-br from-gray-50 via-white to-gray-100">
            <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#FF6767] to-red-500 p-4 sm:p-6 text-white text-center sm:text-left">
                    <h2 className="text-2xl sm:text-3xl font-semibold flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-3">
                        <FaQuestionCircle className="text-white text-3xl sm:text-4xl" />
                        Help & Support Center
                    </h2>
                    <p className="text-xs sm:text-sm mt-1 opacity-90">
                        Get guidance, find answers, and connect with our support team.
                    </p>
                </div>

                {/* Body */}
                <div className="p-4 sm:p-8">
                    {/* Quick Help Options */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10">
                        {[
                            {
                                icon: <FaBook className="text-4xl text-[#FF6767] mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />,
                                title: "Documentation",
                                desc: "Step-by-step guides to help you make the most of your dashboard’s features.",
                            },
                            {
                                icon: <FaHeadset className="text-4xl text-[#FF6767] mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />,
                                title: "Live Chat Support",
                                desc: "Chat instantly with our experts to solve your technical or account-related issues.",
                            },
                            {
                                icon: <FaEnvelope className="text-4xl text-[#FF6767] mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />,
                                title: "Email Assistance",
                                desc: (
                                    <>
                                        Drop us an email at{" "}
                                        <span className="text-red-600 font-medium">
                                            support@dashboard.com
                                        </span>.
                                    </>
                                ),
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="group p-4 sm:p-6 bg-white border rounded-2xl hover:shadow-2xl hover:border-red-400 transition-all duration-300 cursor-pointer"
                            >
                                {item.icon}
                                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* FAQ Section */}
                    <div>
                        <h3 className="text-xl sm:text-2xl font-semibold mb-5 sm:mb-6 text-gray-800 border-b pb-2 border-gray-200">
                            Frequently Asked Questions
                        </h3>

                        <div className="space-y-3 sm:space-y-4">
                            {[
                                {
                                    q: "How can I reset my password?",
                                    a: "Go to the Settings → Security tab, then click on 'Change Password' to update it securely.",
                                },
                                {
                                    q: "How do I create a new task?",
                                    a: "Navigate to My Tasks and click the '+ New Task' button to add your task easily.",
                                },
                                {
                                    q: "Can I change my dashboard theme?",
                                    a: "Yes! Visit Settings → Appearance to switch between light, dark, and custom themes.",
                                },
                                {
                                    q: "Is my data secure?",
                                    a: "Absolutely. All data is encrypted and securely stored following industry standards.",
                                },
                            ].map((item, index) => (
                                <details
                                    key={index}
                                    className="group border border-gray-200 rounded-xl p-3 sm:p-4 hover:border-red-300 transition-all"
                                >
                                    <summary className="cursor-pointer font-medium text-gray-800 flex justify-between items-center text-sm sm:text-base">
                                        {item.q}
                                        <span className="text-[#FF6767] group-open:rotate-180 transition-transform duration-300">
                                            ▼
                                        </span>
                                    </summary>
                                    <p className="text-gray-600 mt-2 text-xs sm:text-sm leading-relaxed">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>

                    {/* Contact Footer */}
                    <div className="mt-10 sm:mt-12 bg-gradient-to-r from-[#FF6767] to-red-500 p-5 sm:p-6 rounded-2xl text-white text-center shadow-md">
                        <h4 className="text-lg sm:text-xl font-semibold mb-2">
                            Still need help?
                        </h4>
                        <p className="text-xs sm:text-sm mb-4 opacity-90">
                            Our support team is available 24/7 to assist you with any questions or concerns.
                        </p>
                        <button className="bg-white text-red-600 px-5 sm:px-6 py-2 rounded-xl font-semibold text-sm sm:text-base hover:bg-gray-100 transition">
                            Contact Support
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Help;
