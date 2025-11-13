const HelpCategoryCard = ({ category }) => {
    return (
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition cursor-pointer">
            <div className="text-3xl mb-3">{category.icon}</div>
            <h3 className="text-gray-800 font-semibold text-lg">
                {category.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{category.description}</p>
        </div>
    );
};

export default HelpCategoryCard;
