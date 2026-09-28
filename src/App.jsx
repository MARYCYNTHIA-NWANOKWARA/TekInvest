import { Routes,Route } from "react-router-dom"
import Auth from "./pages/Auth"
import Home from "./pages/Home"
import DashboardLayout from "./layouts/DashboardLayout"

function App() {

  return (
    <Routes>
     <Route path="/" element={<DashboardLayout/>}>
      <Route path="/Home" element={<Home/>} />
     </Route>
      <Route index element={<Auth/>} />
    </Routes>
  )
}

export default App
