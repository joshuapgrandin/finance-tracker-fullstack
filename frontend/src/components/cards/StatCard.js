const StatCard = ({ text, amount }) => {
  let color = text === "Income" ? "text-income" : "text-expense";

  return (
    <div className="bg-neutral-50 rounded-xl p-2 shadow-md border border-neutral-200 hover:shadow-lg transition">
      <p className="text-neutral-600 text-sm ml-2 mt-2 ">{text}</p>
      <p className={`${color} ml-2 text-lg font-bold`}>{amount}</p>
    </div>
  );
};

export default StatCard;
