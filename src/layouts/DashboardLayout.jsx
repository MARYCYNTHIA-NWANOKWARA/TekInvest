import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"


export default function DashboardLayout(){
    const [isSidebarOpen,setIsSidebarOpen] = useState(false)

    return(
     <>
        <div className="flex h-screen bg-gray-100">
           <div className={`fixed md:static inset-0 left-0 z-30 w-64 bg-white transform ${isSidebarOpen? "translate-x-0" : "-translate-x-full" } md:translate-x-0 transition-transform duration-300`}>
            <Sidebar/>
           </div>

           {isSidebarOpen && (
            <div className="fixed inset-0 bg-black-40 z-20 md:hidden" onClick={() => setIsSidebarOpen(false)} />
           )}

           <div className="flex flex-1 flex-col overflow-hidden">
            <Navbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
           </div>
        </div>

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
            <Outlet/>
           </main>
     </>
    )
}