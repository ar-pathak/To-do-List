// src/features/tasks/components/EmptyState.jsx
import { IoAddCircleOutline } from "react-icons/io5";

const EmptyState = ({
    title = "No items yet",
    subtitle = "There are currently no tasks here. Create your first task to get started.",
    primaryLabel = "Create Task",
    onPrimary = () => { },
    secondaryLabel,
    onSecondary,
    className = "",
}) => {
    return (
        <div className={`w-full rounded-xl border border-dashed border-gray-200 p-8 text-center bg-white ${className}`}>
            <div className="mx-auto w-full max-w-xs">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#FF6767] to-[#FF8C68] text-white text-3xl mx-auto mb-4">
                    <IoAddCircleOutline />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 mb-6">{subtitle}</p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                        onClick={onPrimary}
                        className="px-5 py-2.5 bg-[#FF6767] text-white rounded-xl hover:bg-[#ff5656] transition font-medium"
                    >
                        {primaryLabel}
                    </button>

                    {secondaryLabel && onSecondary && (
                        <button
                            onClick={onSecondary}
                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition text-sm"
                        >
                            {secondaryLabel}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EmptyState;
