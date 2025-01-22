import React from 'react'
import { motion } from "framer-motion"
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DailySalesTrend = () => {


    const dailySalesData = [
        { name: "Mon", sales: 1000 },
        { name: "Tue", sales: 1200 },
        { name: "Wed", sales: 900 },
        { name: "Thu", sales: 1100 },
        { name: "Fri", sales: 1300 },
        { name: "Sat", sales: 1600 },
        { name: "Sun", sales: 1400 },
    ];

    return (
        <motion.div className='bg-gray-800 bg-opacity-50 border border-gray-600 rounded-lg px-4 py-4'
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}>
            <h1 className='text-sm text-gray-100 font-medium'>
                Daily Sales Trend
            </h1>
            <div className='h-80'>
            <ResponsiveContainer>
					<BarChart data={dailySalesData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#374151' />
						<XAxis dataKey='name' stroke='#9CA3AF' />
						<YAxis stroke='#9CA3AF' />
						<Tooltip contentStyle={{backgroundColor: "#45444a", borderRadius : "10px", color : "white"}} itemStyle={{color : "white"}}/>
						<Bar dataKey='sales' fill='#10B981' />
					</BarChart>
				</ResponsiveContainer>
            </div>
        </motion.div>
    )
}

export default DailySalesTrend