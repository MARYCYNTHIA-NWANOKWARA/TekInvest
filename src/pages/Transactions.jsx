

const transactions = [
  { id: "#23456789043", date: "23/09/2026", from: "Benjamin", to: "Cynthia", coin: "Bitcoin", amount: "0.24824", note: "Part payment for a car", status: "completed" },
  { id: "#98451230112", date: "22/09/2026", from: "Aisha", to: "Benjamin", coin: "Ethereum", amount: "1.54321", note: "Freelance payment", status: "completed" },
  { id: "#11223344556", date: "21/09/2026", from: "Cynthia", to: "David", coin: "USDT", amount: "500.00", note: "Rent", status: "pending" },
  { id: "#55667788990", date: "20/09/2026", from: "Tia", to: "Exchange", coin: "Solana", amount: "12.5000", note: "Deposit to exchange", status: "failed" },
  { id: "#99887766554", date: "19/09/2026", from: "Exchange", to: "Tia", coin: "Bitcoin", amount: "0.01000", note: "Withdrawal", status: "completed" },
  { id: "#33445566778", date: "18/09/2026", from: "David", to: "Aisha", coin: "BNB", amount: "2.1000", note: "Gift", status: "completed" },
  { id: "#66778899001", date: "18/09/2026", from: "John", to: "Tia", coin: "Dogecoin", amount: "2500.00", note: "Bet winnings", status: "completed" },
  { id: "#44556677889", date: "17/09/2026", from: "Tia", to: "Sarah", coin: "Ethereum", amount: "0.5000", note: "Loan repayment", status: "completed" },
  { id: "#22334455667", date: "17/09/2026", from: "Mike", to: "Exchange", coin: "USDT", amount: "1000.00", note: "Buy crypto", status: "pending" },
  { id: "#88990011223", date: "16/09/2026", from: "Exchange", to: "Mike", coin: "Bitcoin", amount: "0.02500", note: "Sell order", status: "completed" },
  { id: "#77665544332", date: "16/09/2026", from: "Sarah", to: "David", coin: "Solana", amount: "45.2000", note: "NFT purchase", status: "failed" },
  { id: "#55443322110", date: "15/09/2026", from: "Benjamin", to: "John", coin: "BNB", amount: "0.8500", note: "Investment", status: "completed" },
  { id: "#33221100998", date: "15/09/2026", from: "Cynthia", to: "Tia", coin: "Bitcoin", amount: "0.00500", note: "Birthday gift", status: "completed" },
  { id: "#11009988776", date: "14/09/2026", from: "Aisha", to: "Exchange", coin: "Ethereum", amount: "2.0000", note: "Swap to USDT", status: "pending" },
  { id: "#99008877665", date: "14/09/2026", from: "Exchange", to: "Aisha", coin: "USDT", amount: "6200.00", note: "Swap complete", status: "completed" },
  { id: "#88776655443", date: "13/09/2026", from: "David", to: "Benjamin", coin: "Dogecoin", amount: "500.00", note: "Food money", status: "completed" },
  { id: "#66554433221", date: "13/09/2026", from: "Tia", to: "Mike", coin: "Bitcoin", amount: "0.00150", note: "Coffee", status: "completed" },
  { id: "#44332211009", date: "12/09/2026", from: "John", to: "Sarah", coin: "BNB", amount: "5.0000", note: "Project funding", status: "failed" },
  { id: "#22110099887", date: "12/09/2026", from: "Sarah", to: "Exchange", coin: "Solana", amount: "100.0000", note: "Stake", status: "completed" },
  { id: "#00998877665", date: "11/09/2026", from: "Exchange", to: "John", coin: "Ethereum", amount: "0.7500", note: "Staking reward", status: "completed" },
];

const getStatusColor = (status) => {
  if(status === "completed") return "bg-green-100 text-green-700"
  if(status === "pending") return "bg-yellow-100 text-yellow-700"
  return "bg-red-100 text-red-700"
}

export default function Transactions() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
       
        <div className="">
      <h2 className="text-xl font-bold mb-4 text-gray-800">My Transactions</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-sm uppercase">
              <th className="p-3">Transaction ID</th>
              <th className="p-3">Date</th>
              <th className="p-3">From</th>
              <th className="p-3">To</th>
              <th className="p-3">Coin</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Note</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-3 font-mono text-sm">{tx.id}</td>
                <td className="p-3">{tx.date}</td>
                <td className="p-3">{tx.from}</td>
                <td className="p-3">{tx.to}</td>
                <td className="p-3">
                  <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs">
                    {tx.coin}
                  </span>
                </td>
                <td className="p-3 font-semibold">{tx.amount}</td>
                <td className="p-3 text-gray-600">{tx.note}</td>
                <td className="p-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(tx.status)}`}>
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}