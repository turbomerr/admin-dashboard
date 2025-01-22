import React from 'react'
import { motion } from "framer-motion"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DailyOrders = () => {


    const dailyOrdersData = [
        { date: "07/01", orders: 45 },
        { date: "07/02", orders: 52 },
        { date: "07/03", orders: 49 },
        { date: "07/04", orders: 60 },
        { date: "07/05", orders: 55 },
        { date: "07/06", orders: 58 },
        { date: "07/07", orders: 62 },
    ];

    return (
        <motion.div className='bg-gray-800 bg-opacity-50 rounded-lg px-4 py-4 text-sm font-medium border border-gray-600'
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}>
            <h1 className='text-gray-100 mb-2'>Daily Orders</h1>
            <div className='h-80'>
                <ResponsiveContainer width={"100%"} height={"100%"}>
                    <LineChart width={500} height={300} data={dailyOrdersData} margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}>
                        <CartesianGrid strokeDasharray="3 3" stroke='#4B5563' />
                        <XAxis dataKey={"date"} stroke='#9ca3af' />
                        <YAxis dataKey={"orders"} stroke='#9ca3af' fontSize={"14px"} />
                        <Tooltip contentStyle={{ //grafige hover oldugunda ustunde cikan yazin bg-color ve border rengi
                            backgroundColor: "#45444a",
                            borderColor: "white",
                            color: "white",
                            borderRadius: "10px"
                        }}
                            itemStyle={{ color: "white" }} />
                            <Legend/>
                            <Line type="monotone" dataKey="orders" stroke="#FAC67A" strokeWidth={3} dot={{fill : "white" ,strokeWidth : 4, r: 6}} activeDot={{r: 8, strokeWidth : 2}}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    )
}

export default DailyOrders