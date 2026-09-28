
import { LuCircleHelp, LuHistory, LuLayoutDashboard, LuSettings, LuTrendingUp, LuWallet } from "react-icons/lu";
import { NavLink } from "react-router-dom"

const linkStyle = "flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm hover:bg-orange-800 hover:text-white";
const activeStyle = "bg-orange-800 text-white font-medium";

export default function Sidebar(){
    return(
        <aside className="h-full w-full bg-white border-r flex flex-col">
           <div className="h-16 flex items-center px-6 border-b">
             <span className="text-orange-800 font-bold text-2xl">Tek</span>
             <span className="font-bold text-2xl">Invest</span>
           </div>

           <nav className="flex-1 p-3 space-y-1 mt-2">
             <NavLink to="/home" className={({isActive}) => `${linkStyle} ${isActive ? activeStyle : "text-gray-600"}`}>
               <span><LuLayoutDashboard/></span> Dashboard
             </NavLink>

             <NavLink to="/wallet" className={({isActive}) => `${linkStyle} ${isActive ? activeStyle : "text-gray-600"}`}>
               <span><LuWallet/></span> Wallet
             </NavLink>

             <NavLink to="/investments" className={({isActive}) => `${linkStyle} ${isActive ? activeStyle : "text-gray-600"}`}>
               <span><LuTrendingUp/></span> Investments
             </NavLink>

             <NavLink to="/transactions" className={({isActive}) => `${linkStyle} ${isActive ? activeStyle : "text-gray-600"}`}>
               <span><LuHistory/></span> Transactions
             </NavLink>

             <NavLink to="/help" className={({isActive}) => `${linkStyle} ${isActive ? activeStyle : "text-gray-600"}`}>
               <span><LuCircleHelp/></span> Help
             </NavLink>

             <NavLink to="/settings" className={({isActive}) => `${linkStyle} ${isActive ? activeStyle : "text-gray-600"}`}>
               <span><LuSettings/></span> Settings
             </NavLink>
           </nav>
        </aside>
    )
}