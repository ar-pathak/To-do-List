import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const CategoryCard = ({ name, color, onEdit, onDelete }) => {
    return (
        <div
            className="flex justify-between items-center p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition bg-white"
            style={{ borderLeft: `6px solid ${color}` }}
        >
            <div className="flex items-center gap-3">
                <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: color }}
                ></div>
                <span className="font-medium text-gray-700">{name}</span>
            </div>
            <div className="flex gap-3">
                <FaEdit
                    onClick={onEdit}
                    className="text-blue-500 hover:text-blue-700 cursor-pointer"
                />
                <MdDelete
                    onClick={onDelete}
                    className="text-red-500 hover:text-red-700 cursor-pointer"
                />
            </div>
        </div>
    );
};

export default CategoryCard;
