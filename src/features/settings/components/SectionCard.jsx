const SectionCard = ({ title, children }) => {
    return (
        <div className="border border-gray-200 rounded-xl p-5 mb-5 bg-white shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-3">{title}</h3>
            {children}
        </div>
    );
};

export default SectionCard;
