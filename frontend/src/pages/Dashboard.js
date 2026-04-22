import StatCard from "../components/cards/StatCard";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import SideBar from "../components/layout/SideBar";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-neutral-50">
      <SideBar />

      <main className="flex-1 overflow-x-hidden m-8">
        <DashboardHeader />
        <section className="grid grid-cols-3 gap-4 my-4">
          <StatCard text={"Balance"} amount={"£2,800"} />
          <StatCard text={"Income"} amount={"+ £3,200"} />
          <StatCard text={"Expenses"} amount={"- £352.50"} />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
