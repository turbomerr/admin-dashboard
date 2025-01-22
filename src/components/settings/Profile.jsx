import React from 'react'
import { motion } from 'framer-motion'
import { User } from "lucide-react";

const Profile = () => {
    return (
        <motion.div className='bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg border border-gray-600 mb-6'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
            <div className='h-60 px-4 py-4 flex flex-col '>

                <div className='flex gap-3 mb-2 py-2'>
                    <span className='text-violet-700'><User size={24} /></span>
                    <h1 className='text-gray-100 font-medium text-lg'>Profile</h1>
                </div>
                <div className='flex gap-3 mb-4 items-center'>
                    <img src="https://picsum.photos/100/100" alt="" className='rounded-full w-20 h-20 object-cover mr-4' />
                    <div className='flex flex-col '>
                        <h3 className='text-lg font-semibold text-gray-100'>John Doe</h3>
                        <p className='text-gray-400'>john.doe@example.com</p>
                    </div>
                </div>
                <button className='bg-indigo-600 hover:bg-indigo-700  text-white font-bold py-2 px-4 rounded transition duration-200 sm:w-auto w-64'>
                    Edit Profile
                </button>
            </div>
        </motion.div>
    )
}

export default Profile