import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

const FAQAccordion = ({ item }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex justify-between items-center text-left"
            >
                <h4 className="font-medium text-gray-800">{item.question}</h4>
                <IoChevronDown
                    className={`text-gray-500 transition-transform ${open ? "rotate-180" : ""
                        }`}
                />
            </button>

            {open && (
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                    {item.answer}
                </p>
            )}
        </div>
    );
};

export default FAQAccordion;
