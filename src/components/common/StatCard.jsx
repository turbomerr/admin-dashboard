import React from 'react'
import { motion } from 'framer-motion'

const StatCard = ({name, icon: Icon, value, color}) => {
  return (
    <motion.div className='bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl shadow-lg border border-gray-700 overflow-hidden'
    whileHover={{y : -5, boxShadow : "0 25px 50px -12px rgba(0, 0, 0, 0.5)"}}>
        <div className='py-5 px-4 lg:px-8'>
            <span className='flex items-center text-sm text-gray-400'>
                <Icon size={20} className="mr-1" style={{color}}/>
                {name}
            </span>
            <p className='text-gray-100 font-medium mt-1'>{value}</p>
        </div>
        
    </motion.div>
  )
}

export default StatCard