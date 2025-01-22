import React from 'react'
import {motion} from "framer-motion"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const UserGrowChart = () => {

    const userGrowthData = [
        { month: "Jan", users: 1000 },
        { month: "Feb", users: 1500 },
        { month: "Mar", users: 2000 },
        { month: "Apr", users: 3000 },
        { month: "May", users: 4000 },
        { month: "Jun", users: 5000 },
    ];

    
  return (
    <motion.div 
    initial={{opacity : 0, x : -40}}
    animate={{opacity : 1, x : 0}}
    transition={{duration : 1, delay : 0.3}}
    >
        <div className='border border-gray-600 bg-gray-800 rounded-lg bg-opacity-50 p-6'>
            <h1 className='text-gray-100 text-sm mb-2'>User Growt</h1>
            <div className='h-80'>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                    width={500}
                    height={300}
                    data={userGrowthData}
                    >
                    <CartesianGrid strokeDasharray="3 3" stroke='#374151' />
                    <XAxis dataKey="month" stroke='#9CA3AF'/>
                    <YAxis stroke='#9CA3AF'/>
                   <Tooltip contentStyle={{backgroundColor: "#45444a", borderRadius : "10px", color : "white"}} itemStyle={{color : "white"}}/>
                    <Legend />
                    <Line type="monotone" dataKey="users" stroke='#8B5CF6' strokeWidth={2} dot={{ fill: "#8B5CF6", strokeWidth: 2, r: 4 }}activeDot={{ r: 8 }} />

                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    </motion.div>
  )
}

export default UserGrowChart