import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const WeeklyChart = () => {
  const data = [
    { day: "Fri", amount: 120 },
    { day: "Sat", amount: 190 },
    { day: "Sun", amount: 140 },
    { day: "Mon", amount: 210 },
    { day: "Tue", amount: 170 },
    { day: "Wed", amount: 100 },
    { day: "Thu", amount: 180 },
  ];

  // Custom tooltip component
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-neutral-900 text-white px-4 py-3 rounded-lg shadow-lg border border-neutral-700">
          <p className="text-sm font-medium text-neutral-300">
            {payload[0].payload.day}
          </p>
          <p className="text-lg font-bold mt-1">£{payload[0].value}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white p-6 w-full rounded-xl border border-neutral-200">
      <h3 className="text-lg font-semibold mb-6 text-neutral-900">
        Last 7 days
      </h3>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#023E7D", fontSize: 12 }}
          />
          <Tooltip
            cursor={{ fill: "rgba(2, 62, 125, 0.1)" }}
            content={<CustomTooltip />}
          />
          <Bar
            dataKey="amount"
            fill="#023E7D"
            radius={[8, 8, 0, 0]}
            maxBarSize={60}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklyChart;
