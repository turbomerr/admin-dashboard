import React from 'react'
import { BarChart2, DollarSign, Menu, Settings, ShoppingBag, ShoppingCart, TrendingUp, Users, X } from "lucide-react";
import { motion, AnimatePresence} from "framer-motion"
import { useState } from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const SIDEBAR_ITEMS = [
        { name: "Overview", icon: BarChart2, color: "#6366f1", href: "/", },
        { name: "Products", icon: ShoppingBag, color: "#8B5CF6", href: "/products" },
        { name: "Users", icon: Users, color: "#EC4899", href: "/users" },
        { name: "Sales", icon: DollarSign, color: "#10B981", href: "/sales" },
        { name: "Orders", icon: ShoppingCart, color: "#F59E0B", href: "/orders" },
        { name: "Settings", icon: Settings, color: "#6EE7B7", href: "/settings" },
    ];

    return (
        <motion.div className={`relative transition-all duration-300 ease-in-out ${isSidebarOpen ? "w-64" : "w-20"}`} // style that will be applied when the page loads
            animate={{ width: isSidebarOpen ? 256 : 80 }} > 
            
            <div className='flex flex-col h-full bg-gray-800 bg-opacity-50 backdrop-blur-md border-r border-gray-700 p-4'>
                <motion.button
                    whileHover={{ scale: 1.1 }} // style that will be applied when the elements get hover
                    whileTap={{ sclae: 0.9 }}
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className='p-2 rounded-full hover:bg-gray-700 max-w-fit'
                >
                    {!isSidebarOpen ? <Menu size={24} /> : <X size={24}/>}
                </motion.button>

                <nav className='mt-6 '>
                    {SIDEBAR_ITEMS.map((item, key) => (
                        <Link key={key} to={item.href}>
                            <motion.div className='flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 mb-2 transition-colors'>
                                <item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />
                                <AnimatePresence>
                                    {isSidebarOpen && (
                                        <motion.span className='ml-4 whitespace-nowrap'
                                            initial={{ opacity: 0, width: 0 }} // beginning style
                                            animate={{ opacity: 1, width: 1 }} // style that will be applied when the page loads
                                            exit={{ opacity: 0, width: 0 }} //delay gecikme
                                            transition={{ duration: 0.2, delay: 0.3 }}> 
                                            
                                            {item.name}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </Link>
                    ))}
                </nav>

            </div>
        </motion.div>
    )
}

export default Sidebar