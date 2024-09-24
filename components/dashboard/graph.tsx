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
    A: 0,
    B: 1,
    fullMark: 5,
  },
  {
    subject: "Meeting goals",
    A: 2,
    B: 3,
    fullMark: 5,
  },
  {
    subject: "Continuous Engagement/Feedback",
    A: 4,
    B: 5,
    fullMark: 5,
  },
  {
    subject: "Behavioural shift / Transition",
    A: 4,
    B: 5,
    fullMark: 5,
  },
  {
    subject: "Ambition / Ideation",
    A: 1,
    B: 5,
    fullMark: 5,
  },
];

export default function Graph() {
  return (
    <div className="bg-white/90 backdrop-blur-lg flex justify-center h-full w-full rounded-3xl shadow-md p-6">
      <ResponsiveContainer width="100%" height="90%">
        <RadarChart cx="50%" cy="50%" outerRadius="90%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={90} domain={[0, 5]} />
          <Radar
            name="EC Maturity"
            dataKey="A"
            stroke="#49DFAD"
            fill="#C1F4E4"
            fillOpacity={0.7}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
