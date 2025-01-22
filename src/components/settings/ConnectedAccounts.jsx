import { useState } from "react";
import { motion } from "framer-motion";
import { HelpCircle, Plus } from "lucide-react";

const ConnectedAccounts = () => {
    const [connectedAccounts, setConnectedAccounts] = useState([
        {
            id: 1,
            name: "Google",
            connected: true,
            icon: "/google.png",
        },
        {
            id: 2,
            name: "Facebook",
            connected: false,
            icon: "/facebook.svg",
        },
        {
            id: 3,
            name: "Twitter",
            connected: true,
            icon: "/x.png",
        },
    ]);
    return (

        <motion.div className='bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg border px-4 py-6  border-gray-600 mb-6'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
         
            <div className="">
            <div className="flex flex-row gap-2">
                    <span className='text-violet-700'><HelpCircle size={24} /></span>
                    <h1 className='text-gray-100 font-medium text-lg'>Connected Accounts</h1>
                </div>
            </div>
           {connectedAccounts.map((account) => (
                <div key={account.id} className='flex items-center justify-between py-3'>
                    <div className='flex gap-1'>
                        <img src={account.icon} alt='Social img' className='size-6 object-cover rounded-full mr-2' />
                        <span className='text-gray-300'>{account.name}</span>
                    </div>
                    <button
                        className={`px-3 py-1 rounded ${account.connected ? "bg-green-600 hover:bg-green-700" : "bg-gray-600 hover:bg-gray-700"
                            } transition duration-200`}
                        onClick={() => {
                            setConnectedAccounts(
                                connectedAccounts.map((acc) => {
                                    if (acc.id === account.id) {
                                        return {
                                            ...acc,
                                            connected: !acc.connected,
                                        };
                                    }
                                    return acc;
                                })
                            );
                        }}
                    >
                        {account.connected ? "Connected" : "Connect"}
                    </button>
                </div>
            ))}
           
            <button className='mt-4 flex items-center text-indigo-400 hover:text-indigo-300 transition duration-200'>
                <Plus size={18} className='mr-2' /> Add Account
            </button>
        </motion.div>

    );
};
export default ConnectedAccounts;