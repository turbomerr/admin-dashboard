import React from 'react'
import { motion } from "framer-motion"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const OrderStatus = () => {

    const orderStatusData = [
        { name: "Pending", value: 30 },
        { name: "Processing", value: 45 },
        { name: "Shipped", value: 60 },
        { name: "Delivered", value: 120 },
    ];

    const COLORS = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FED766", "#2AB7CA"];

    return (
        <motion.div
            className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}>
            <h2 className='text-xl font-semibold text-gray-100 mb-4'>Order Status Distribution</h2>
            <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={orderStatusData}
                            cx='50%'
                            cy='50%'
                            outerRadius={80}
                            fill='#8884d8'
                            dataKey='value'
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                            {orderStatusData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip contentStyle={{ //grafige hover oldugunda ustunde cikan yazin bg-color ve border rengi
                            backgroundColor: "#45444a",
                            borderColor: "white",
                            color: "white",
                            borderRadius: "10px"
                        }}
                            itemStyle={{ color: "white" }} />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    )
}

export default OrderStatus