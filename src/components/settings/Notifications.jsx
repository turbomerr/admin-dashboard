import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Bell } from "lucide-react";
import ToggleSwitch from './ToggleSwitch';


const Notifications = () => {

    const [notifications, setNotifications] = useState({
        push: true,
        email: false,
        sms: true,
    });

    return (
        <motion.div className='bg-gray-800 bg-opacity-50 backdrop-blur-md mb-6 rounded-lg border border-gray-600'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
            <div className='h-60 px-4 py-4 flex flex-col '>

                <div className='flex gap-3 mb-2 py-2'>
                    <span className='text-violet-700'><Bell size={24} /></span>
                    <h1 className='text-gray-100 font-medium text-lg'>Notifications</h1>
                </div>

                <div >
                    <ToggleSwitch
                        label={"Push Notifications"}
                        isOn={notifications.push}
                        onToggle={() => setNotifications({ ...notifications, push: !notifications.push })}
                    />
                    <ToggleSwitch
                        label={"Email Notifications"}
                        isOn={notifications.email}
                        onToggle={() => setNotifications({ ...notifications, email: !notifications.email })}
                    />
                    <ToggleSwitch
                        label={"SMS Notifications"}
                        isOn={notifications.sms}
                        onToggle={() => setNotifications({ ...notifications, sms: !notifications.sms })}
                    />

                </div>
            </div>
        </motion.div>
    )
}

export default Notifications