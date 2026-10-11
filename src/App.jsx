import { Routes,Route } from "react-router-dom"
import Auth from "./pages/Auth"
import Home from "./pages/Home"
import DashboardLayout from "./layouts/DashboardLayout"
import Wallet from "./pages/Wallet"
import Investments from "./pages/investments"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Auth/>} />
     <Route  element={<DashboardLayout/>}>
      <Route path="home" element={<Home/>} />
      <Route path="wallet" element={<Wallet/>} />
      <Route path="investments" element={<Investments/>} />
     </Route>
    </Routes>
  )
}

export default App
