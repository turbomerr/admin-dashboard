import React from 'react'
import {motion} from "framer-motion"
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';


const CategoryDistributionChart = () => {

    const categoryData = [
        { name: "Electronics", value: 4500 },
        { name: "Clothing", value: 3200 },
        { name: "Home & Garden", value: 2800 },
        { name: "Books", value: 2100 },
        { name: "Sports & Outdoors", value: 1900 },
    ];

    const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

  return (
    <motion.div className='bg-gray-800 bg-opacity-50 rounded-lg px-4 py-4 text-sm font-medium border border-gray-600'
    initial={{opacity : 0, x : 40}}
    animate={{opacity : 1, x : 0}}
    transition={{duration : 1, delay : 0.3}}>
        <h1 className='text-gray-100 mb-2'>Category Distribution</h1>
        <div className='h-80'>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie data={categoryData}
                    cx={"50%"}
                    cy={"50%"}
                    outerRadius={80}
                    fill='#8884d8'
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                        {categoryData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                        ))}
                    </Pie>
                    
                    {/* grafigin elemanlarini alta yazar Legend */}
                    <Legend/> 
                </PieChart>
            </ResponsiveContainer>
        </div>
    </motion.div>
  )
}

export default CategoryDistributionChart