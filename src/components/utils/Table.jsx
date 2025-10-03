
import { RiFileEditFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

const Table = ({ name, rows }) => {
    return (
        <div className="overflow-x-auto  border-2 border-gray-300 rounded-3xl shadow py-5">
            <table className="w-full ">
                <thead>
                    <tr className="grid grid-cols-4 gap-4 p-2 px-4 bg-gray-100 border-b border-gray-300 rounded-t-lg">
                        <th className="text-left">SN</th>
                        <th className="col-span-2 text-left">{name}</th>
                        <th className="col-span-1 text-center">Action</th>
                    </tr>
                </thead>
                <tbody className="px-2">
                    {rows.map((row, idx) => (
                        <tr
                            key={idx}
                            className="grid grid-cols-4 gap-4 items-center p-2 mb-2 px-5"
                        >
                            <td>{idx + 1}</td>
                            <td className="col-span-2">{row.value}</td>
                            <td className="col-span-1 flex justify-center gap-3">
                                <button
                                    className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
                                    onClick={() => row.onEdit(row)}
                                >
                                    <RiFileEditFill /> Edit
                                </button>
                                <button
                                    className="flex items-center gap-1 text-red-600 hover:text-red-800"
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

export default Table