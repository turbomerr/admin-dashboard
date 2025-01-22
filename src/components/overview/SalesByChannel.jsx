import React from 'react'
import { motion } from "framer-motion"
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const SalesByChannel = () => {

    const SalesChannelData = [
        { name: "Website", value: 4500 },
        { name: "Mobil", value: 3200 },
        { name: "Market Place", value: 18000 },
        { name: "Social Media", value: 9450 },

    ]

    const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

    return (
        <motion.div className='bg-gray-800 bg-opacity-50 rounded-lg border border-gray-600 text-sm font-medium px-4 py-4 '
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}>
            <h1 className='text-gray-100 mb-2'>Sales Channel</h1>
            <div className='h-80'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={SalesChannelData}
                        margin={{ top: 5, left: 10 }}>
                        <CartesianGrid strokeDasharray="4 4" stroke='#4B5563' />
                        <XAxis dataKey={"name"} />
                        <YAxis dataKey={"value"} />
                        <Tooltip contentStyle={{ backgroundColor: "#45444a", borderRadius: "10px", borderColor: "white",color : "white"}} />
                        <Legend />
                        <Bar dataKey={"value"} fill='#cbd5e1' >
                            {SalesChannelData.map((data, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index] } />
                            ))}
                        </Bar>

                    </BarChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    )
}

export default SalesByChannel