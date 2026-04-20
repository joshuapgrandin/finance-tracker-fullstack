export const CategoryColours = (transactionType) => {
  const colours = {
    Groceries: "bg-emerald-300/60 text-emerald-900",
    Transport: "bg-blue-300/60 text-blue-900",
    Salary: "bg-green-300/60 text-green-900",
    Shopping: "bg-purple-300/60 text-purple-900",
    Bills: "bg-orange-300/60 text-orange-900",
    "Eating Out": "bg-pink-300/60 text-pink-900",
    Entertainment: "bg-indigo-300/60 text-indigo-900",
  };

  return colours[transactionType] || "bg-gray-300/60 text-gray-900";
};
