import { RiFileEditFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

const Table = ({ name, rows }) => {
    return (
        <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-sm p-3 sm:p-5 bg-white">
            <table className="min-w-full text-sm sm:text-base">
                <thead>
                    <tr className="hidden sm:grid sm:grid-cols-4 gap-4 bg-gray-100 p-3 border-b border-gray-300 rounded-t-xl">
                        <th className="text-left">SN</th>
                        <th className="col-span-2 text-left">{name}</th>
                        <th className="text-center">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {rows.map((row, idx) => (
                        <tr
                            key={idx}
                            className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-center p-3 mb-2 border border-gray-100 rounded-xl shadow hover:shadow-md transition"
                        >
                            {/* SN (mobile view merge) */}
                            <td className="font-semibold sm:font-normal text-gray-700">
                                <span className="sm:hidden text-[#F24E1E] font-bold mr-2">#{idx + 1}</span>
                                <span className="hidden sm:inline">{idx + 1}</span>
                            </td>

                            {/* Name */}
                            <td className="sm:col-span-2 text-gray-800">{row.value}</td>

                            {/* Action Buttons */}
                            <td className="flex sm:col-span-1 justify-start sm:justify-center gap-4 mt-2 sm:mt-0">
                                <button
                                    className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition text-sm"
                                    onClick={() => row.onEdit(row)}
                                >
                                    <RiFileEditFill /> Edit
                                </button>
                                <button
                                    className="flex items-center gap-1 text-red-600 hover:text-red-800 transition text-sm"
                                    onClick={() => row.onDelete(row)}
                                >
                                    <MdDelete /> Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
