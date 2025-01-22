import { Route, Routes } from "react-router-dom"
import Sidebar from "./components/common/Sidebar"
import OverView from "./pages/OverView"
import Products from "./pages/Products"
import OrdersPage from "./pages/OrdersPage"
import SettingsPage from "./pages/SettingsPage"

import Sales from "./pages/Sales"
import Users from "./pages/Users"


function App() {
  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-100 overflow-hidden">
      {/* BG COLOR */}
     
      <Sidebar />
      <Routes>
        <Route path="/" element={<OverView/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="/sales" element={<Sales/>} />
        <Route path='/orders' element={<OrdersPage />} />
				<Route path='/settings' element={<SettingsPage />} />
      </Routes>
    </div>
  )
}

export default App
