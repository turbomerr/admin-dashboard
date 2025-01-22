import React from 'react'
import { motion, AnimatePresence } from "framer-motion"

const Header = ({ title }) => {
    return (
        <header className='bg-gray-800 bg-opacity-50 backdrop-blur-50 border-b shadow-lg border-gray-600'>
            <div className='max-w-7xl mx-auto py-4 px-4  lg:px-8'>

                <AnimatePresence>
                    <motion.h1 className='text-2xl font-semibold text-gray-100'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: "easyInOut", delay: 0.2, duration: 0.3 }}
                        exit={{opacity : 0}}
                    >
                        {title}
                    </motion.h1>
                </AnimatePresence>

            </div>
        </header>

    )
}

export default Header