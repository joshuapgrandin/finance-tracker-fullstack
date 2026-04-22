import PrimaryButton from "../ui/PrimaryButton";

const DashboardHeader = () => {
  const currentMonth = new Date().toLocaleDateString("en-gb", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold text-neutral-900">Dashboard</h1>
        <p className="text-sm text-neutral-500">{currentMonth}</p>
      </div>
      <PrimaryButton text={"+ Add transaction"} size="small" />
    </div>
  );
};

export default DashboardHeader;
