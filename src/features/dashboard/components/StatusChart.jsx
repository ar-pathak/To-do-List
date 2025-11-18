import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

// Vibrant gradient colors
const COLORS = [
    "#ff6b6b", // red
    "#4dabf7", // blue
    "#51cf66", // green
    "#f59f00", // yellow
    "#845ef7", // purple
    "#15aabf", // teal
    "#e64980", // pink
];

const StatusChart = ({ type = "single", data }) => {
    const singleData = [
        { name: data.status, value: data.percentage },
        { name: "Remaining", value: 100 - data.percentage },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col items-center gap-2"
        >
            {/* SINGLE CHART */}
            {type === "single" && (
                <div className="relative">
                    <ResponsiveContainer width={100} height={100}>
                        <PieChart>
                            <Pie
                                data={singleData}
                                innerRadius={32}
                                outerRadius={46}
                                paddingAngle={1}
                                dataKey="value"
                            >
                                <Cell fill="#FF6767" />
                                <Cell fill="#e5e7eb" />
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>

                    {/* Center Label */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[13px] font-semibold text-gray-700">
                            {data.percentage}%
                        </span>
                    </div>
                </div>
            )}

            {/* MULTI CHART */}
            {type === "multi" && (
                <ResponsiveContainer width={280} height={240}>
                    <PieChart>
                        <Pie
                            data={data}
                            outerRadius={90}
                            dataKey="value"
                            paddingAngle={2}
                        >
                            {data.map((entry, index) => (
                                <Cell key={index} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{
                                borderRadius: "10px",
                                border: "1px solid #e5e7eb",
                            }}
                        />
                    </PieChart>
                </ResponsiveContainer>
            )}

            {/* LABEL */}
            {type === "single" && (
                <p className="text-xs text-gray-600 text-center mt-1">{data.status}</p>
            )}
        </motion.div>
    );
};

export default StatusChart;
