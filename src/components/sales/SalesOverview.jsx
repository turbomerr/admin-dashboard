import React, { useState } from 'react'
import { motion } from "framer-motion"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const SalesOverview = () => {

    const monthlySalesData = [
        { month: "Jan", sales: 4000 },
        { month: "Feb", sales: 3000 },
        { month: "Mar", sales: 5000 },
        { month: "Apr", sales: 4500 },
        { month: "May", sales: 6000 },
        { month: "Jun", sales: 5500 },
        { month: "Jul", sales: 7000 },
    ];

    const [selected, setSelected] = useState("This Month")

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4}}>
            <div className='bg-gray-800 bg-opacity-50 border border-gray-600 rounded-lg px-4 py-4'>
                <div className='flex ites  justify-between px-2 mb-2'>
                <h1 className='text-sm font-medium text-gray-100 mb-2'>Sales Overview</h1>
                <select className='bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-gray-600 w-36'
                value={selected} onChange={(e) => (setSelected(e.target.value))}>
                    
                    <option>This Week</option>
                    <option>This Month</option>
                    <option>This Quarter</option>
                    <option>This Year</option>
                </select>
                </div>
                <div className='h-80'>
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            width={500}
                            height={300}
                            data={monthlySalesData}>
                            <CartesianGrid strokeDasharray="3 3" stroke='#374151'/>
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip contentStyle={{ //grafige hover oldugunda ustunde cikan yazin bg-color ve border rengi
                                                        backgroundColor: "#45444a",
                                                        borderColor: "white",
                                                           color : "white",
                                                           borderRadius : "10px"
                                                    }}
                                                    itemStyle={{ color: "white" }}/>
                            <Area type="monotone" dataKey="sales" stroke="#8884d8" fill="#8884d8" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </motion.div>
    )
}

export default SalesOverview