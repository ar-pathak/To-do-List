import { PieChart, Pie, Cell } from "recharts";

export default function StatusChart({ status }) {

    // Dynamic color based on status
    const getColor = (status) => {
        if (status === "Completed") return "#00C49F";   // Green
        if (status === "In Progress") return "#0088FE"; // Blue
        return "#FF4C4C";                                      // Red
    };

    const mainColor = getColor(status.status);

    // Chart data (status vs remaining)
    const data = [
        { name: status.status, value: status.percentage },
        { name: "Remaining", value: 100 - status.percentage },
    ];

    return (
        <div className="flex flex-col items-center justify-center relative mb-5">
            <PieChart width={150} height={150}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={55}
                    paddingAngle={2}
                    dataKey="value"
                >
                    {/* First slice = status color, Second slice = gray */}
                    <Cell fill={mainColor} />
                    <Cell fill="#D9D9D9" />
                </Pie>
            </PieChart>

            {/* Center text */}
            <p className="absolute text-lg font-semibold">{status.percentage}%</p>

            {/* Label */}
            <p className="mt-2 flex items-center gap-2 text-sm">
                <span
                    className="w-2 h-2 rounded-full inline-block"
                    style={{ backgroundColor: mainColor }}
                ></span>
                {status.status}
            </p>
        </div>
    );
}
