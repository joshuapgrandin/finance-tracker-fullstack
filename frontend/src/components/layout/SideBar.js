import Logo from "./Logo";

import {
  LayoutDashboard, // Dashboard
  Receipt, // Transactions
  Tags, // Categories
  PiggyBank, // Budgets
  BarChart3, // Reports
} from "lucide-react";

const SideBar = () => {
  return (
    <div className="bg-neutral-50 border-r border-neutral-200 hidden md:flex md:flex-col h-screen w-64 items-start shadow-lg p-6">
      <div className="mt-4 mb-8">
        <Logo />
      </div>

      <ul className="space-y-6">
        <li className="flex gap-2">
          <LayoutDashboard />
          <a href="">Dashboard</a>
        </li>
        <li className="flex gap-2">
          <Receipt />
          <a href="">Transactions</a>
        </li>
        <li className="flex gap-2">
          <Tags />
          <a href="">Categories</a>
        </li>
        <li className="flex gap-2">
          <PiggyBank />
          <a href="">Budgets</a>
        </li>
        <li className="flex gap-2">
          <BarChart3 />
          <a href="">Reports</a>
        </li>
      </ul>
      <div className="flex mt-auto gap-2 items-center">
        <div className="bg-orange-500/60 px-3 py-1 rounded-full">
          <p className="text-orange-900">J</p>
        </div>
        <p>Josh</p>
      </div>
    </div>
  );
};

export default SideBar;
