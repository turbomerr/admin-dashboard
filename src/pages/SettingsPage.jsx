import React from 'react'
import Header from '../components/common/Header'
import { motion } from 'framer-motion'
import Profile from '../components/settings/Profile'
import Notification from '../components/settings/Notifications'
import Security from "../components/settings/Security"
import ConnectedAccounts from "../components/settings/ConnectedAccounts"
import DangerZone from "../components/settings/DangerZone"

const SettingsPage = () => {
  return (
    <div className='flex-1 overflow-hidden relative'>
      <Header title={"Settings"}/>
      <main className='max-w-4xl mx-auto py-6 px-4 lg:px-8 '>
        <Profile/>
        <Notification/>
        <Security/>
        <ConnectedAccounts/>
        <DangerZone/>
      </main>
    </div>
  )
}

export default SettingsPage