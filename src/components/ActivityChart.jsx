
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

const data = [
  { day: "Mon", tasks: 3 },
  { day: "Tue", tasks: 5 },
  { day: "Wed", tasks: 4 },
  { day: "Thu", tasks: 7 },
  { day: "Fri", tasks: 6 },
  { day: "Sat", tasks: 9 },
  { day: "Sun", tasks: 8 }
];

function ActivityChart() {
  return (
    <div className="chart-card">
      <div className="section-heading">
        <div>
          <h3>Weekly Activity</h3>
          <p>Your productivity this week</p>
        </div>

        <span className="chart-badge">This Week</span>
      </div>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient
                id="purpleGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid stroke="#25263a" strokeDasharray="3 3" />

            <XAxis
              dataKey="day"
              stroke="#888"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              stroke="#888"
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              contentStyle={{
                background: "#1c1d30",
                border: "1px solid #34354a",
                borderRadius: "10px"
              }}
            />

            <Area
              type="monotone"
              dataKey="tasks"
              stroke="#a78bfa"
              strokeWidth={3}
              fill="url(#purpleGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ActivityChart;
