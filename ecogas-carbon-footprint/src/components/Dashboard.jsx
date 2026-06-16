import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function Dashboard({ data }) {
  const chartData = [
    {
      name: "LPG",
      value: data.lpg * 170
    },
    {
      name: "Electricity",
      value: data.electricity * 0.5
    },
    {
      name: "Transportation",
      value: data.car * 0.21
    },
    {
      name: "Flights",
      value: data.flights * 250
    }
  ];

  const COLORS = [
    "#4CAF50",
    "#2196F3",
    "#FFC107",
    "#F44336"
  ];

  return (
    <div className="card">
      <h2>Emission Breakdown</h2>

      <ResponsiveContainer
        width="100%"
        height={350}
      >
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            outerRadius={120}
            label
          >
            {chartData.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Dashboard;