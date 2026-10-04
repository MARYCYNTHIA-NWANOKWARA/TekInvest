import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"
import dataLine from "../assets/chartData"
import { Line } from "react-chartjs-2"
import {Chart as ChartJS, LineElement, CategoryScale,LinearScale,PointElement, Legend,Tooltip} from "chart.js"
ChartJS.register(LineElement, CategoryScale,LinearScale,PointElement,Tooltip, Legend)

export default function Home(){
    const {user} = useContext(AuthContext)

    const email = String(user?.email || "")
    const splitName = email? email.split("@")[0] : "Guest"
    const displayName = splitName? splitName.charAt(0).toUpperCase() + splitName.slice(1) : "Guest"

    return(
        <>
        <div className = "flex gap-2 items-center">
            <h1 className="font-bold text-2xl">{`Welcome ${displayName}`}</h1>
            <p className="px-2 py-1.5 bg-white rounded-xl font-semibold">{new Date().toLocaleDateString('en-US' , {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            })}</p>
        </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-1 mt-4">

             <div className="bg-linear-to-br from-orange-700 to-orange-800 text-white shadow-lg p-6 h-40  rounded-xl">
                <h3 className="font-bold text-lg">Wallet Balance</h3>
                <p className="text-3xl font-bold mt-4">$827,119</p>
             </div>

              <div className="bg-linear-to-br from-slate-700  shadow-lg to-slate-800 text-white p-6 h-40 rounded-xl">
                <h3 className="font-bold text-lg">Investments</h3>
                <p className="text-3xl font-bold mt-4">$95,482</p>
             </div>

              <div className="bg-linear-to-br from-teal-500  to-cyan-600 shadow-lg text-white p-6 h-40  rounded-xl">
                <h3 className="font-bold text-lg">Transactions</h3>
                <p className="text-3xl font-bold mt-4">$121,011</p>
             </div>
               
           </div>

           <div className="max-w-250 mt-8 bg-white px-4 py-4 rounded-md shadow-md">
              <h3 className="font-bold text-lg">MyCoins</h3>
              <Line data={dataLine}/>
           </div>
           
        </>
    )
}