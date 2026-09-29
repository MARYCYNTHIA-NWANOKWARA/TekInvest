import { Routes,Route } from "react-router-dom"
import Auth from "./pages/Auth"
import Home from "./pages/Home"
import DashboardLayout from "./layouts/DashboardLayout"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Auth/>} />
     <Route  element={<DashboardLayout/>}>
      <Route path="home" element={<Home/>} />
     </Route>
    </Routes>
  )
}

export default App
