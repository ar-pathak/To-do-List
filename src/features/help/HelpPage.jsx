import { useState } from "react";
import HelpSearchBar from "./components/HelpSearchBar";
import FAQAccordion from "./components/FAQAccordion";
import HelpCategoryCard from "./components/HelpCategoryCard";
import ContactSupportCard from "./components/ContactSupportCard";
import { faqData } from "./data/faqData";
import { helpCategories } from "./data/helpCategories";

const HelpPage = () => {
    const [query, setQuery] = useState("");

    const filteredFAQ = faqData.filter((faq) =>
        faq.question.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="p-5 sm:p-10">

            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-semibold text-gray-800">Help & Support</h1>
                <p className="text-gray-500 mt-1 text-sm">
                    Find answers to your questions or contact support.
                </p>
            </div>

            {/* Search */}
            <HelpSearchBar query={query} setQuery={setQuery} />

            {/* Categories */}
            <h2 className="text-xl font-semibold mt-10 mb-3 text-gray-800">
                Help Categories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {helpCategories.map((cat, idx) => (
                    <HelpCategoryCard key={idx} category={cat} />
                ))}
            </div>

            {/* FAQs */}
            <h2 className="text-xl font-semibold mt-10 mb-3 text-gray-800">
                Frequently Asked Questions
            </h2>
            <div className="space-y-4">
                {filteredFAQ.length === 0 ? (
                    <p className="text-gray-500 text-sm">No results found.</p>
                ) : (
                    filteredFAQ.map((item, idx) => (
                        <FAQAccordion key={idx} item={item} />
                    ))
                )}
            </div>

            {/* Contact Support */}
            <h2 className="text-xl font-semibold mt-10 mb-3 text-gray-800">
                Still need help?
            </h2>
            <ContactSupportCard />
        </div>
    );
};

export default HelpPage;
