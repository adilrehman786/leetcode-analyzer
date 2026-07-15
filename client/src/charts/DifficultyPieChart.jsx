import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#22c55e", "#eab308", "#ef4444"];

function DifficultyPieChart({ profile }) {
  if (!profile) return null;

  const stats = profile.submitStats.acSubmissionNum;

  const data = [
    {
      name: "Easy",
      value: stats[1].count,
    },
    {
      name: "Medium",
      value: stats[2].count,
    },
    {
      name: "Hard",
      value: stats[3].count,
    },
  ];

  return (
    <div className="bg-slate-900 rounded-2xl p-6 shadow-xl">
      <h2 className="text-xl font-semibold mb-5">
        Difficulty Distribution
      </h2>

      <div className="h-80">

        <ResponsiveContainer>

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              outerRadius={110}
              label
            >

              {data.map((entry, index) => (
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

    </div>
  );
}

export default DifficultyPieChart;
