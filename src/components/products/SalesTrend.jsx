import React from 'react'
import { motion } from "framer-motion"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SalesTrend = () => {

    const salesData = [
        { month: "Jan", sales: 4000 },
        { month: "Feb", sales: 3000 },
        { month: "Mar", sales: 5000 },
        { month: "Apr", sales: 4500 },
        { month: "May", sales: 6000 },
        { month: "Jun", sales: 5500 },
    ];


    return (
        <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
        >
            <div className='border border-gray-600 bg-gray-800 rounded-lg bg-opacity-50 p-6'>
                <h1 className='text-sm text-gray-100 mb-2'>Sales Trend</h1>
                <div className='h-80'>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            width={500}
                            height={300}
                            data={salesData}>
                            <CartesianGrid strokeDasharray="3 3" stroke='#374151'/>
                            <XAxis dataKey="month" stroke='#9CA3AF'/>
                            <YAxis stroke='#9CA3AF'/>
                            <Tooltip contentStyle={{backgroundColor: "#45444a", borderRadius : "10px", color : "white"}} itemStyle={{color : "white"}}/>
                            <Legend/>
                            <Line connectNulls type="monotone" dataKey="sales" stroke="#c026d3" strokeWidth={3} fill="#be185d" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </motion.div>
    )
}

export default SalesTrend