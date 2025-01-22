import React from 'react'
import Header from '../components/common/Header'
import { motion } from 'framer-motion'
import StatCard from '../components/common/StatCard';
import { CheckCircle, Clock, DollarSign, ShoppingBag } from "lucide-react";
import DailyOrders from "../components/orders/DailyOrders"
import OrderStatus from "../components/orders/OrderStatus"
import OrderList from "../components/orders/OrderList"

const OrdersPage = () => {

  const orderStats = {
    totalOrders: "1,234",
    pendingOrders: "56",
    completedOrders: "1,178",
    totalRevenue: "$98,765",
  };

  return (
    <div className='flex-1 overflow-hidden relative'>
      <Header title={"Orders"} />
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <motion.div 
        className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
        initial={{opacity : 0, y : 20}}
        animate={{opacity : 1, y : 0}}
        transition={{duration : 1}}>
          <StatCard name='Total Orders' icon={ShoppingBag} value={orderStats.totalOrders} color='#6366F1' />
          <StatCard name='Pending Orders' icon={Clock} value={orderStats.pendingOrders} color='#F59E0B' />
          <StatCard
            name='Completed Orders'
            icon={CheckCircle}
            value={orderStats.completedOrders}
            color='#10B981'
          />
          <StatCard name='Total Revenue' icon={DollarSign} value={orderStats.totalRevenue} color='#EF4444' />
        </motion.div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
          <DailyOrders/>
          <OrderStatus/>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-1 gap-8 mb-8'>
        <OrderList/>
        </div>
      </main>
    </div>
  )
}

export default OrdersPage