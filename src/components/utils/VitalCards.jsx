import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const VitalCards = ({ title, description, priority, status, createdAt, image }) => {
    return (
        <div className="px-5 py-10 border border-gray-300 rounded-lg mx-5">
            <div className="flex p-4">
                {image && (
                    <div>
                        <img src={image} className="w-32 h-32 object-cover rounded-lg mr-3" alt={title} />
                    </div>
                )}
                <div className="flex flex-col px-4 justify-center">
                    <h3 className="font-bold text-xl mb-2">{title}</h3>
                    <p>
                        <span className="font-semibold">Priority: </span>
                        <span
                            className={`ml-1 text-sm ${priority === "Low"
                                ? "text-green-500"
                                : priority === "Moderate"
                                    ? "text-blue-400"
                                    : "text-red-500"
                                }`}
                        >
                            {priority}
                        </span>
                    </p>
                    <p>
                        <span className="font-semibold">Status: </span>
                        <span
                            className={`ml-1 text-sm ${status === "Completed"
                                ? "text-green-500"
                                : status === "In Progress"
                                    ? "text-yellow-500"
                                    : "text-red-500"
                                }`}
                        >
                            {status}
                        </span>
                    </p>
                    {createdAt && (
                        <p>
                            <span className="font-semibold">Created At: </span>
                            <span className="ml-1 text-sm text-gray-500">{createdAt}</span>
                        </p>
                    )}
                </div>
            </div>

            <div className="flex flex-col px-4 py-2 gap-3">
                <p className="text-gray-700 whitespace-pre-line">{description}</p>
                <div className="flex items-center justify-end gap-3">
                    <MdDelete className="bg-red-500 text-white w-7 h-7 sm:w-8 sm:h-8 p-1.5 rounded-md cursor-pointer hover:bg-red-600" />
                    <FaEdit className="bg-blue-500 text-white w-7 h-7 sm:w-8 sm:h-8 p-1.5 rounded-md cursor-pointer hover:bg-blue-600" />
                </div>
            </div>
        </div>
    );
};


export default VitalCards