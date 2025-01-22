import React from 'react'
import { motion } from "framer-motion"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const SalesByCategory = () => {

    const salesByCategory = [
        { name: "Electronics", value: 400 },
        { name: "Clothing", value: 300 },
        { name: "Home & Garden", value: 200 },
        { name: "Books", value: 100 },
        { name: "Others", value: 150 },
    ];

    const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE"];

    return (
        <motion.div className='bg-gray-800 bg-opacity-50 border border-gray-600 rounded-lg px-4 py-4'
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}>
            <h1 className='text-sm text-gray-100 font-medium'>
                Sales By Category
            </h1>
            <div className='h-80'>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={500} height={300}>
                        <Pie
                            data={salesByCategory}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill='#8884d8'
                            dataKey='value'
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                            {salesByCategory.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index]} />
                            ))}
                        </Pie>
                        <Tooltip contentStyle={{
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

export default SalesByCategory