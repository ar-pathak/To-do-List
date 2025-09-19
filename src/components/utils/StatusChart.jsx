import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function StatusChart({ data, type = "single" }) {
    // Dynamic color based on status
    const getColor = (status) => {
        if (status === "Completed") return "#00C49F";   // Green
        if (status === "In Progress") return "#0088FE"; // Blue
        return "#FF4C4C";                               // Red
    };

    if (type === "single") {
        const mainColor = getColor(data.status);
        const chartData = [
            { name: data.status, value: data.percentage },
            { name: "Remaining", value: 100 - data.percentage },
        ];

        return (
            <div className="flex flex-col items-center justify-center relative w-full max-w-[180px] min-w-[120px] mx-auto">
                <ResponsiveContainer width="100%" height={180}>
                    <PieChart>
                        <Pie
                            data={chartData}
                            cx="50%"
                            cy="50%"
                            innerRadius="45%"
                            outerRadius="70%"
                            paddingAngle={2}
                            dataKey="value"
                        >
                            <Cell fill={mainColor} />
                            <Cell fill="#D9D9D9" />
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                {/* Center Text */}
                <p className="absolute text-base sm:text-lg font-semibold">
                    {data.percentage}%
                </p>

                {/* Label */}
                <p className="mt-2 flex items-center gap-2 text-xs sm:text-sm">
                    <span
                        className="w-2 h-2 rounded-full inline-block"
                        style={{ backgroundColor: mainColor }}
                    ></span>
                    {data.status}
                </p>
            </div>
        );
    }

    if (type === "multi") {
        const COLORS = ["#00C49F", "#0088FE", "#FF4C4C"];

        return (
            <div className="w-full max-w-[350px] mx-auto">
                <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius="40%"
                            outerRadius="70%"
                            dataKey="value"
                            paddingAngle={2}
                        >
                            {data.map((entry, index) => (
                                <Cell key={index} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                {/* ✅ Custom Legend Below */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-4">
                    {data.map((entry, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 text-sm sm:text-base"
                        >
                            <span
                                className="w-3 h-3 rounded-full inline-block"
                                style={{ backgroundColor: COLORS[index] }}
                            ></span>
                            <span>
                                {entry.name} – {entry.value}%
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return null;
}
