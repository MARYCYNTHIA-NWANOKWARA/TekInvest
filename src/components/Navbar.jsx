import { useContext, useState} from "react"
import { AuthContext } from "../context/AuthContext"
import { FiMenu, FiSearch, FiX } from "react-icons/fi"

export default function Navbar({onMenuClick}){
    const [showSearch, setShowSearch] = useState(false)
    const {logOut} = useContext(AuthContext)

    return(
        <header className="h-16 bg-white border-b flex items-center px-4 md:px-6 justify-between gap-4 sticky top-0 z-10">
            <div className="flex items-center gap-3 flex-1">
                <button onClick={onMenuClick} className="md:hidden p-2 -ml-2 text-xl">
                    <FiMenu/>
                </button>

                <div className="hidden md:flex relative max-w-md w-full">
                    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
                    <input placeholder="...Search" className="w-full bg-gray-100 rounded-full pl-10 pr-4 py-2 text-sm outline-none focus:ring-2 focus:ring-black" />
                </div>

                <button onClick={() => setShowSearch(!showSearch)} className="md:hidden p-2 text-xl">
                    {showSearch ? <FiX/> : <FiSearch/>}
                </button>

                <div className="md:hidden h-16 flex items-center px-6 border-b">
                     <span className="text-orange-800 font-bold text-2xl">Tek</span>
                     <span className="font-bold text-2xl">Invest</span>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <button onClick={() => logOut()} className="bg-orange-800 hover:bg-orange-900 text-white text-xs px-4 py-1.5 rounded-md">
                    LogOut
                </button>
            </div>

            {showSearch && (
                <div className="absolute top-16 left-0 right-0 bg-white p-3 border-b md:hidden flex items-center gap-2">
                    <FiSearch className="text-gray-400"/>
                    <input autoFocus placeholder="...Search" className="w-full bg-gray-100 rounded-full px-4 py-2.5 text-sm outline-none"/>
                </div>
            )}
        </header>
        
    )
}