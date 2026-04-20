import { CategoryColours } from "../utils/categoryColours";

const TransactionItem = ({
  transactionType,
  description,
  amount,
  isIncome,
}) => {
  const initials = transactionType.slice(0, 2).toUpperCase();
  const amountColour = isIncome ? "text-income" : "text-expense";
  const colour = CategoryColours(transactionType);

  return (
    <div className="flex justify-between mt-4 items-center">
      <div className="flex items-center gap-2">
        <div className={`${colour} rounded-full p-1`}>
          <p className="text-neutral-900">{initials}</p>
        </div>
        <p className="text-neutral-900">{description}</p>
      </div>
      <p className={`${amountColour} font-semibold`}>{amount}</p>
    </div>
  );
};

export default TransactionItem;
