"use client";
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    subject: "Recruitment and Engagement",
    A: 1,
  },
  {
    subject: "Meeting goals",
    A: 2,
  },
  {
    subject: "Continuous Engagement / Feedback",
    A: 4,
  },
  {
    subject: "Behavioural shift / Transition",
    A: 4,
  },
  {
    subject: "Ambition / Ideation",
    A: 3,
  },
];

export default function Graph() {
  return (
    <div className="bg-white/90 backdrop-blur-lg w-full h-full rounded-3xl shadow-md flex flex-col items-center justify-center">
      <ResponsiveContainer width="100%" height="70%">
        <RadarChart cx="50%" cy="50%" outerRadius="100%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis
            angle={90}
            domain={[1, 5]}
            tickCount={5}
            tick={{ fill: "#666" }}
          />
          <Radar
            name="EC Maturity"
            dataKey="A"
            stroke="#49DFAD"
            fill="#C1F4E4"
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
