import { Lock } from "lucide-react";
import { motion } from 'framer-motion'
import ToggleSwitch from "./ToggleSwitch";
import { useState } from "react";

const Security = () => {
    const [twoFactor, setTwoFactor] = useState(false);

    return (
        <motion.div className='bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg border  border-gray-600 mb-6'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>

            <div className="px-4 py-6">
                <div className="flex flex-row gap-2">
                    <span className='text-violet-700'><Lock size={24} /></span>
                    <h1 className='text-gray-100 font-medium text-lg'>Security</h1>
                </div>
                <ToggleSwitch
                    label={"Two-Factor Authentication"}
                    isOn={twoFactor}
                    onToggle={() => setTwoFactor(!twoFactor)}
                />
                <div className='mt-4'>
                    <button
                        className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded 
        transition duration-200
        '
                    >
                        Change Password
                    </button>
                </div>
            </div>
        </motion.div>

    );
};
export default Security;