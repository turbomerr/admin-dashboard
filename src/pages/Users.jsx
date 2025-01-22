import React from 'react'
import Header from '../components/common/Header'
import { motion } from "framer-motion"
import StatCard from '../components/common/StatCard'
import { UserCheck, UserPlus, UsersIcon, UserX } from "lucide-react";
import UserTable from '../components/users/UserTable';
import { useState } from 'react';
import UserGrowChart from "../components/users/UserGrowChart"
import UserActivity from "../components/users/UserActivity"
import UserDemographics from "../components/users/UserDemographics"



const Users = () => {

    const userStats = {
        totalUsers: 152845,
        newUsersToday: 243,
        activeUsers: 98520,
        churnRate: "2.4%",
    };

    return (
        <div className='flex-1 overflow-auto relative'>
            <Header title={"Users"} />
            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                <motion.div
                    className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <StatCard
                        name='Total Users'
                        icon={UsersIcon}
                        value={userStats.totalUsers.toLocaleString()}
                        color='#6366F1'
                    />
                    <StatCard name='New Users Today' icon={UserPlus} value={userStats.newUsersToday} color='#10B981' />
                    <StatCard
                        name='Active Users'
                        icon={UserCheck}
                        value={userStats.activeUsers.toLocaleString()}
                        color='#F59E0B'
                    />
                    <StatCard name='Churn Rate' icon={UserX} value={userStats.churnRate} color='#EF4444' />
                </motion.div>
                <UserTable />
                <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 mb-8'>
                    <UserGrowChart />
                    <UserActivity />
                </div>
                <div className='grid grid-cols-1'>
                    <UserDemographics/>
                </div>
            </main>
        </div>
    )
}

export default Users