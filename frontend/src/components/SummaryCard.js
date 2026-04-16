const SummaryCard = ({ icon: Icon, iconColor, title, amount, amountColor }) => {
  return (
    <div className="bg-card-bg p-2 border-gray-700 border rounded-lg">
      <div className="flex gap-2 m-2 items-center justify-start">
        <Icon className={`${iconColor}`} />
        <h3 className="text-base text-gray-300">{title}</h3>
      </div>
      <div className="m-2">
        <p className={`${amountColor} text-3xl font-bold `}>
          £{amount.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default SummaryCard;
