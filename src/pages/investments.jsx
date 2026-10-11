
import { FaChartLine, FaPlus } from "react-icons/fa";

const investments = [
  { id: 1, name: "Bitcoin Staking", type: "Crypto", amount: "$12,450", roi: "+14.2%", status: "Active" },
  { id: 2, name: "Ethereum Pool", type: "DeFi", amount: "$8,200", roi: "+8.7%", status: "Active" },
  { id: 3, name: "Tek Invest Plan A", type: "Fixed", amount: "$25,000", roi: "+22.0%", status: "Matured" },
  { id: 4, name: "Solana Yield", type: "Crypto", amount: "$3,100", roi: "-2.1%", status: "Active" },
];

function Investments() {
  return (<>
      
    <div className="space-y-6">
      {/* Header: stacks on mobile */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
        <h1 className="text-xl md:text-2xl font-bold">My Investments</h1>
        <button className="flex items-center justify-center gap-2 cursor-pointer hover:bg-orange-700 bg-orange-800 text-white px-4 py-2 rounded-lg w-full md:w-auto">
          <FaPlus /> New Investment
        </button>
      </div>

      {/* Summary Card */}
      <div className="bg-linear-to-r from-green-500 to-emerald-500 text-white p-4 md:p-6 rounded-2xl shadow-lg">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-base md:text-lg font-semibold">Total Invested</h2>
          <FaChartLine className="text-xl md:text-2xl" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold">$48,750</h1>
        <p className="text-sm opacity-90">+11.4% Overall ROI</p>
      </div>

      {/* Investment List: Card on mobile, row on desktop */}
      <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg">
        <h3 className="text-base md:text-lg font-bold mb-4">Active Plans</h3>
        <div className="space-y-4">
          {investments.map((inv) => (
            <div key={inv.id} className="flex flex-col md:flex-row md:items-center md:justify-between border-b pb-4 gap-2">
              <div className="flex-1">
                <p className="font-semibold">{inv.name}</p>
                <p className="text-sm text-gray-500">{inv.type}</p>
              </div>
              <div className="flex items-center justify-between md:justify-end md:gap-6">
                <div className="text-left md:text-right">
                  <p className="font-bold">{inv.amount}</p>
                  <p className={`text-sm ${inv.roi.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>{inv.roi}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${inv.status === 'Active' ? 'bg-blue-100 text-blue-700' : 'bg-gray-200 text-gray-700'}`}>
                  {inv.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default Investments;