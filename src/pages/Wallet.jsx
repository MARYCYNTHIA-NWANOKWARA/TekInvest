import { FaWallet, FaArrowUp, FaArrowDown, FaCopy } from "react-icons/fa";

function Wallet() {
  const walletBalance = 827119;
  const btcBalance = 0.48234;
  const ethBalance = 3.2105;

  return (
    <>
    <div className="space-y-6 ">.

      <div className="bg-linear-to-r from-orange-700 to-orange-800 text-white p-6 rounded-2xl shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Wallet Balance</h2>
          <FaWallet className="text-2xl" />
        </div>
        <h1 className="text-4xl font-bold mb-2">${walletBalance.toLocaleString()}</h1>
        <p className="text-sm opacity-90">Total Portfolio Value</p>
      </div>

     
      <div className="grid grid-cols-2 gap-4">
        <button className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold">
          <FaArrowDown /> Deposit
        </button>
        <button className="flex items-center justify-center gap-2 bg-red-700 hover:bg-red-600 text-white py-3 rounded-xl font-semibold">
          <FaArrowUp /> Withdraw
        </button>
      </div>

      
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h3 className="text-lg font-bold mb-4">Your Assets</h3>
        
        
        <div className="flex items-center justify-between border-b pb-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-700 rounded-full flex items-center justify-center text-white font-bold">B</div>
            <div>
              <p className="font-semibold">Bitcoin</p>
              <p className="text-sm text-gray-500">BTC</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-bold">{btcBalance} BTC</p>
            <p className="text-sm text-gray-500">$21,450.22</p>
          </div>
        </div>

        {/* ETH */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold">E</div>
            <div>
              <p className="font-semibold">Ethereum</p>
              <p className="text-sm text-gray-500">ETH</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-bold">{ethBalance} ETH</p>
            <p className="text-sm text-gray-500">$8,210.50</p>
          </div>
        </div>
      </div>

      {/* Wallet Address */}
      <div className="bg-white p-4 rounded-2xl shadow-lg">
        <p className="text-sm text-gray-500 mb-2">Your BTC Wallet Address</p>
        <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
          <p className="font-mono text-sm truncate">bc1qxy2k...9v8n7m</p>
          <FaCopy className="text-gray-600 cursor-pointer hover:text-black" />
        </div>
      </div>
    </div>
    </>
  );
}

export default Wallet;