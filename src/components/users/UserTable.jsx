import React from 'react'
import { motion } from "framer-motion"
import { useState } from 'react';
import { Edit, Search, Trash2 } from "lucide-react";


const UserTable = () => {

    const userData = [
        { id: 1, name: "John Doe", email: "john@example.com", role: "Customer", status: "Active" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin", status: "Active" },
        { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Customer", status: "Inactive" },
        { id: 4, name: "Alice Brown", email: "alice@example.com", role: "Customer", status: "Active" },
        { id: 5, name: "Charlie Wilson", email: "charlie@example.com", role: "Moderator", status: "Active" },
    ];

    const [filteredUsers, setFilteredUsers] = useState(userData)
    const [searchTerm, setSearchTerm] = useState("")

    const handleChange = (e) => {
        const term = e.target.value.toLowerCase()
        setSearchTerm(term)
        const filtered = userData.filter((user) => user.name.includes(term) || user.email.includes(term))
        setFilteredUsers(filtered)
    }



    return (
        <motion.div className='bg-gray-800 bg-opacity-50 border border-gray-600 rounded-lg px-6 py-6 mb-8'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}>

            <div className='flex items-center justify-between max-w-6xl py-2'>
                <h1 className='text-gray-100 font-medium text-2xl'>Users List</h1>
                <div className='relative'>
                    <Search size={22} className='absolute top-2.5 left-2' />
                    <input value={searchTerm} onChange={handleChange} type="text" placeholder='Search Producst...' className='border-2 border-gray-600  bg-gray-600 w-64 rounded-lg pl-10 py-2 focus:ring-2 focus:ring-gray-400 focus:outline-none' />
                </div>
            </div>
            <div className='overflow-hidden'>
                <table className='min-w-full divide-y divide-gray-500'>
                    <thead>
                        <tr>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-tighter'>
                                Name
                            </th>

                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                                Email
                            </th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                                Role
                            </th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                                Status
                            </th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                                Actions
                            </th>

                        </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-500'>

                        {filteredUsers.map((user) => (
                            <motion.tr
                                key={user.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.1 }}
                            >
                                <td className='px-6 py-4 text-medium text-sm text-gray-300 whitespace-nowrap'>
                                    {user.name}
                                </td>
                                <td className='px-6 py-4 text-medium text-sm text-gray-300'>
                                    {user.email}
                                </td>
                                <td className='px-6 py-4 text-medium text-sm text-gray-300 whitespace-nowrap'>
                                    <span> {user.role} </span>
                                </td>
                                {user.status === "Active" ? (<td className='px-6 py-4 text-medium text-sm text-gray-300'>
                                    <button className='bg-green-600 px-2 py-1 rounded-lg'>{user.status}</button>
                                </td>) : <td className='px-6 py-4 text-medium text-sm text-gray-300'>
                                    <button className='bg-red-800 px-2 py-1 rounded-lg'>{user.status}</button>
                                </td>}


                                <td className='px-6 py-4 flex gap-2'>
                                    <button className='text-indigo-600'>Edit</button>
                                    <button className='text-rose-500'>Delete</button>
                                </td>
                            </motion.tr>
                        ))}

                    </tbody>
                </table>
                
            </div>

            

        </motion.div>
    )
}

export default UserTable