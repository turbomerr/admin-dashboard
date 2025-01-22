import React from 'react'
import { motion } from "framer-motion"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SalesOverViewChart = () => {

    const salesData = [
        { name: "Jul", sales: 4200 },
        { name: "Aug", sales: 3800 },
        { name: "Sep", sales: 5100 },
        { name: "Oct", sales: 4600 },
        { name: "Nov", sales: 5400 },
        { name: "Dec", sales: 7200 },
        { name: "Jan", sales: 6100 },
        { name: "Feb", sales: 5900 },
        { name: "Mar", sales: 6800 },
        { name: "Apr", sales: 6300 },
        { name: "May", sales: 7100 },
        { name: "Jun", sales: 7500 },
    ];

    return (
        <motion.div className='bg-gray-800 bg-opacity-50 rounded-lg px-4 py-4 text-sm font-medium border border-gray-600'
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay : 0.3 }}>
            <h1 className='text-gray-100 mb-2'>Sales Overview</h1>
            <div className='h-80'>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={salesData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                        
                    >
                        {/* grafigin arkaasindaki cizgilerin rengi */}
                        <CartesianGrid strokeDasharray="3 3" stroke='#4B5563' />
                        <XAxis dataKey={"name"} stroke='#9ca3af'/>
                        <YAxis dataKey={"sales"} stroke='#9ca3af' fontSize={"14px"} />
                        <Tooltip contentStyle={{ //grafige hover oldugunda ustunde cikan yazin bg-color ve border rengi
								backgroundColor: "#45444a",
								borderColor: "white",
                                color : "white",
                                borderRadius : "10px"
							}}
							itemStyle={{ color: "white" }}/>
                            <Legend/>
                        
                        
                        <Line type="monotone" dataKey="sales" stroke="#6366F1" strokeWidth={3} dot={{fill : "white" ,strokeWidth : 6, r: 6}} activeDot={{r: 8, strokeWidth : 2}}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    )
}

export default SalesOverViewChart