import { TrendingUp, TrendingDown, Wallet } from "lucide-react";
import Button from "./components/Button";
import SummaryCard from "./components/SummaryCard";
import FilterDropdown from "./components/FilterDropdown";

function App() {
  const months = ["Jan", "Feb", "March"];

  return (
    <div className="min-h-screen bg-dark-bg p-6">
      <div className="max-w-3xl mx-auto py-8 px-8">
        {/* MAIN HEADER*/}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-300">
            Finance<span className="text-income-text">Pal</span>
          </h1>
          <div className="space-x-4">
            <Button
              text="+ Income"
              bgColor="bg-income-bg"
              borderColor="border-income-hover"
              textColor="text-income-text"
              hoverColor="hover:bg-income-hover"
            />
            <Button
              text="- Expense"
              bgColor="bg-expense-bg"
              borderColor="border-expense-hover"
              textColor="text-expense-text"
              hoverColor="hover:bg-expense-hover"
            />
          </div>
        </div>
        {/* SUMMARY CARDS */}
        <div className="grid grid-cols-3 mt-12 gap-4">
          <SummaryCard
            icon={TrendingUp}
            iconColor={"text-income-text"}
            title={"Total Income"}
            amount={12000}
            amountColor={"text-income-text"}
          />
          <SummaryCard
            icon={TrendingDown}
            iconColor={"text-expense-text"}
            title={"Total Expense"}
            amount={2000}
            amountColor={"text-expense-text"}
          />
          <SummaryCard
            icon={Wallet}
            iconColor={"text-income-text"}
            title={"Total Income"}
            amount={10000}
            amountColor={"text-income-text"}
          />
        </div>
        {/* SUB HEADER WITH FILTERS */}
        <div className="flex justify-between items-center gap-2">
          <h2 className="text-gray-300 font-bold text-2xl my-6">
            Recent Transactions
          </h2>
          <FilterDropdown label={"Month"} options={months} value={"month"} />
        </div>
      </div>
    </div>
  );
}

export default App;
