import { IoMailOutline } from "react-icons/io5";

const ContactSupportCard = () => {
    return (
        <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm">
            <div className="flex items-center gap-3 mb-3">
                <IoMailOutline className="text-[#FF6767] text-2xl" />
                <h3 className="font-semibold text-gray-800 text-lg">Contact Support</h3>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed mb-4">
                If you're facing an issue or need help with anything, our support team is here for you.
            </p>

            <button className="px-5 py-2 bg-gradient-to-r from-[#FF6767] to-[#FF8C68] text-white rounded-lg hover:opacity-90 transition shadow-md">
                Send Message
            </button>
        </div>
    );
};

export default ContactSupportCard;
