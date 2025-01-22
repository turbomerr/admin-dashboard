import React from 'react'
import Header from '../components/common/Header'
import { motion } from "framer-motion"
import StatCard from '../components/common/StatCard'
import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react";
import ProductTable from "../components/products/ProductTable"
import SalesTrend from '../components/products/SalesTrend';
import CategoryDistributionChart from '../components/overview/CategoryDistributionChart';

const Products = () => {
  return (
    <div className='flex-1 overflow-hidden relative '>
      <Header title={"Products"} />
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <motion.div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          <StatCard name={"Total Products"} icon={Package} value={567} color={"#6366F1"} />
          <StatCard name={"Top Selling"} icon={TrendingUp} value={89} color={"#10B981"} />
          <StatCard name={"Low Stock"} icon={AlertTriangle} value={12} color={"#F59E0B"} />
          <StatCard name={"Total Revenue"} icon={DollarSign} value={`${621},${12}$`} color={"#EF4444"} />
        </motion.div>

        <ProductTable/>
        <div className='grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-8'>
         <SalesTrend/>
          <CategoryDistributionChart/>
        </div>

      </main>
    </div>
  )
}

export default Products