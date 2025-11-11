import { RiFileEditFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

const Table = ({ name, rows }) => {
  return (
    <div className="overflow-x-auto border border-gray-300 rounded-2xl shadow-sm">
      <table className="w-full text-sm sm:text-base">
        <thead className="bg-gray-100">
          <tr className="grid grid-cols-4 gap-4 p-3">
            <th>SN</th>
            <th className="col-span-2 text-left">{name}</th>
            <th className="text-center col-span-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr
              key={idx}
              className="grid grid-cols-4 gap-4 items-center p-3 border-t border-gray-100 hover:bg-gray-50 transition"
            >
              <td>{idx + 1}</td>
              <td className="col-span-2">{row.value}</td>
              <td className="flex justify-center gap-3 col-span-1">
                <button className="text-blue-500 hover:text-blue-700 flex items-center gap-1">
                  <RiFileEditFill /> Edit
                </button>
                <button className="text-red-500 hover:text-red-700 flex items-center gap-1">
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
