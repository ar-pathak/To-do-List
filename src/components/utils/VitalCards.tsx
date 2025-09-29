import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const VitalCards = ({
    title,
    description,
    priority,
    status,
    createdAt,
    image
}: {
    title: string;
    description: string;
    priority: "High" | "Moderate" | "Low";
    status: "Not Started" | "In Progress" | "Completed";
    createdAt?: string;
    image?: string;
}) => {
    return (
        <div className="py-5 px-10 border border-gray-300 rounded-lg m-5">
            <div className="flex p-4">
                <div>
                    <img src={image} className="w-45 mr-3" alt="image" />
                </div>
                <div className="flex flex-col px-4 justify-center">
                    <h3 className="font-bold text-xl mb-2">{title}</h3>
                    <p><span className="font-semibold">Priority: </span><span className={`ml-1 text-sm ${priority === "Low"
                        ? "text-green-500"
                        : priority === "Moderate"
                            ? "text-blue-400"
                            : "text-red-500"
                        }`}>{priority}</span></p>
                    <p><span className="font-semibold">Status: </span><span className={`ml-1 text-sm ${status === "Completed"
                        ? "text-green-500"
                        : status === "In Progress"
                            ? "text-yellow-500"
                            : "text-red-500"
                        }`}>{status}</span></p>
                    <p><span className="font-semibold">Created At: </span> <span className="ml-1 text-sm text-gray-500">{createdAt}</span></p>
                </div>

            </div>
            <div className="flex flex-col p-4">
                <div>
                    {description}
                </div>
                <div className="flex items-center justify-end gap-2">
                    <MdDelete className="bg-[#FF6767] text-white w-7 h-7 sm:w-8 sm:h-8 p-1.5 rounded-md" />
                    <FaEdit className="bg-[#FF6767] text-white  w-7 h-7 sm:w-8 sm:h-8 p-1.5 pl-2 rounded-md" />
                </div>
            </div>
        </div>
    )
}

export default VitalCards