import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MoreVertical } from "lucide-react";

const TransactionTable = () => {
  const transactions = [
    {
      id: 1,
      description: "Salary",
      category: "Income",
      date: "17 Apr",
      amount: 3200.0,
    },
    {
      id: 2,
      description: "Tesco groceries",
      category: "Food",
      date: "16 Apr",
      amount: -47.2,
    },
    {
      id: 3,
      description: "Train to Liverpool",
      category: "Transport",
      date: "15 Apr",
      amount: -18.5,
    },
    {
      id: 4,
      description: "PureGym",
      category: "Health",
      date: "14 Apr",
      amount: -24.99,
    },
    {
      id: 5,
      description: "Spotify",
      category: "Leisure",
      date: "13 Apr",
      amount: -10.99,
    },
  ];

  const getCategoryColor = (category) => {
    const colors = {
      Income: "bg-green-100 text-green-700",
      Food: "bg-orange-100 text-orange-700",
      Transport: "bg-indigo-100 text-indigo-700",
      Health: "bg-pink-100 text-pink-700",
      Leisure: "bg-blue-100 text-blue-700",
    };
    return colors[category] || "bg-neutral-100 text-neutral-700";
  };

  return (
    <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden mt-4">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-neutral-200">
        <h2 className="text-xl font-semibold text-neutral-900">
          Recent transactions
        </h2>
        <Link
          to="/transactions"
          className="flex gap-2 items-center text-sm text-neutral-600 hover:text-brand-700 transition-colors"
        >
          <span>View All</span>
          <FaArrowRight />
        </Link>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="border-b border-neutral-100 p-4 hover:bg-neutral-50 transition-colors"
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex-1">
                <p className="font-medium text-neutral-900">
                  {transaction.description}
                </p>
                <div className="flex gap-2 items-center mt-1">
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(transaction.category)}`}
                  >
                    {transaction.category}
                  </span>
                  <span className="text-xs text-neutral-500">
                    {transaction.date}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`text-base font-semibold ${transaction.amount > 0 ? "text-green-600" : "text-red-600"}`}
                >
                  {transaction.amount > 0 ? "+" : ""}£
                  {Math.abs(transaction.amount).toFixed(2)}
                </span>
                <button className="p-1 hover:bg-neutral-200 rounded transition-colors">
                  <MoreVertical size={18} className="text-neutral-500" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-neutral-50 border-b border-neutral-200">
              <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-700">
                Description
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-700">
                Category
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-700">
                Date
              </th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-neutral-700">
                Amount
              </th>
              <th className="w-12"></th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr
                key={transaction.id}
                className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors"
              >
                <td className="px-6 py-4 text-sm font-medium text-neutral-900">
                  {transaction.description}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(transaction.category)}`}
                  >
                    {transaction.category}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-neutral-600">
                  {transaction.date}
                </td>
                <td className="px-6 py-4 text-right">
                  <span
                    className={`text-sm font-semibold ${transaction.amount > 0 ? "text-green-600" : "text-red-600"}`}
                  >
                    {transaction.amount > 0 ? "+" : ""}£
                    {Math.abs(transaction.amount).toFixed(2)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="p-1 hover:bg-neutral-200 rounded transition-colors">
                    <MoreVertical size={18} className="text-neutral-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;
