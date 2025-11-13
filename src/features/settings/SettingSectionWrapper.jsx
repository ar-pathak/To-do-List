const SettingSectionWrapper = ({ title, subtitle, children }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
            {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}

            <div className="mt-6">{children}</div>
        </div>
    );
};

export default SettingSectionWrapper;
