import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";

const CategoryChart = () => {
  const data = [
    { category: "Food", amount: 142, color: "#d97706" },
    { category: "Transport", amount: 86, color: "#6366f1" },
    { category: "Health", amount: 65, color: "#ec4899" },
    { category: "Leisure", amount: 59, color: "#3b82f6" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl border border-neutral-200">
      <h3 className="text-lg font-semibold mb-6 text-neutral-900">
        By category
      </h3>

      <div className="space-y-6">
        {data.map((item) => (
          <div key={item.category}>
            {/* Category name and amount */}
            <div className="flex justify-between items-center mb-2">
              <span className="text-neutral-900 font-medium text-base">
                {item.category}
              </span>
              <span className="text-neutral-900 font-semibold text-base">
                £{item.amount}
              </span>
            </div>

            {/* Horizontal bar */}
            <ResponsiveContainer width="100%" height={12}>
              <BarChart
                data={[item]}
                layout="vertical"
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                barSize={12}
              >
                <XAxis type="number" hide domain={[0, 150]} />
                <Bar
                  dataKey="amount"
                  fill={item.color}
                  radius={[6, 6, 6, 6]}
                  background={{ fill: "#e5e5e5", radius: [6, 6, 6, 6] }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryChart;
