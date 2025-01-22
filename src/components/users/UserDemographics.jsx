import React from 'react'
import { motion } from "framer-motion"
import { PieChart, Pie, Legend, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const UserDemographics = () => {

    const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE"];

    const userDemographicsData = [
        { name: "18-24", value: 20 },
        { name: "25-34", value: 30 },
        { name: "35-44", value: 25 },
        { name: "45-54", value: 15 },
        { name: "55+", value: 10 },
    ];

    return (
        <motion.div 
        initial={{opacity : 0, y : 40}}
        animate={{opacity : 1, y : 0}}
        transition={{duration : 1, delay : 1.1}}
        >
            <div className='border border-gray-600 bg-gray-800 rounded-lg bg-opacity-50 p-6'>
                <h1 className='text-sm font-medium'>User Demographics</h1>
                <div className='h-80'>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={400} height={400}>
                            <Pie
                                data={userDemographicsData}
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                fill='#8884d8'
                                dataKey='value'
                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            >
                                {userDemographicsData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                             <Tooltip contentStyle={{backgroundColor: "#45444a", borderRadius : "10px", color : "white"}} itemStyle={{color : "white"}}/>
                            <Legend/>
                        </PieChart>

                    </ResponsiveContainer>
                </div>
            </div>
        </motion.div>
    )
}

export default UserDemographics