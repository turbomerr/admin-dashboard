import React from 'react'
import { motion } from "framer-motion"
import { useState } from 'react';
import { Edit, Search, Trash2 } from "lucide-react";



const ProductTable = () => {

    const PRODUCT_DATA = [
        { id: 1, name: "Wireless Earbuds", category: "Electronics", price: 59.99, stock: 143, sales: 1200 },
        { id: 2, name: "Leather Wallet", category: "Accessories", price: 39.99, stock: 89, sales: 800 },
        { id: 3, name: "Smart Watch", category: "Electronics", price: 199.99, stock: 56, sales: 650 },
        { id: 4, name: "Yoga Mat", category: "Fitness", price: 29.99, stock: 210, sales: 950 },
        { id: 5, name: "Coffee Maker", category: "Home", price: 79.99, stock: 78, sales: 720 },
    ];

    const [searchTerm, setSearchTerm] = useState("")
    const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA)

    const handleChange = (e) => {
        const term = e.target.value.toLowerCase()
        setSearchTerm(term)
        const filtered = PRODUCT_DATA.filter((product) => product.name.toLowerCase().includes(term) || product.category.toLowerCase().includes(term))
        setFilteredProducts(filtered)
        //console.log(filteredProducts)
    }


    return (
        <motion.div className='bg-gray-800 bg-opacity-50 border border-gray-600 rounded-lg px-6 py-6 mb-8'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}>

            <div className='flex items-center justify-between max-w-6xl py-2'>
                <h1 className='text-gray-100 font-medium text-2xl'>Products List</h1>
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
                                Category
                            </th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                                Price
                            </th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                                Stock
                            </th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                                Sales
                            </th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-500'>
                        
                            {filteredProducts.map((product) => (
                            <motion.tr 
                            key={product.id}
                            initial={{opacity : 0, y : 10}}
                            animate={{opacity : 1, y : 0}}
                            transition={{duration : 1.1}}
                            >
                                <td className='px-6 py-4 text-medium text-sm text-gray-300 whitespace-nowrap'>
                                    {product.name}
                                </td>
                                <td className='px-6 py-4 text-medium text-sm text-gray-300'>
                                    {product.category}
                                </td>
                                <td className='px-6 py-4 text-medium text-sm text-gray-300 whitespace-nowrap'>
                                   <span> {product.price} $</span>
                                </td>
                                <td className='px-6 py-4 text-medium text-sm text-gray-300'>
                                    {product.stock}
                                </td>
                                <td className='px-6 py-4 text-medium text-sm text-gray-300'>
                                    {product.sales}
                                </td>
                                <td className='px-6 py-4 flex gap-2'>
                                   <button className='text-indigo-600'>{<Edit size={20}/>}</button>
                                   <button className='text-rose-700'>{<Trash2 size={20}/>}</button>
                                </td>
                            </motion.tr>
                        ))}
                       
                    </tbody>
                </table>
            </div>
        


        </motion.div>
    )
}

export default ProductTable