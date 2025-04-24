"use client";

import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useMediaQuery } from "usehooks-ts";

export const description = "A radar chart with dots";

const data = [
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

const chartData = [
  { subject: "Recruitment and Engagement", value: 1.3 },
  { subject: "Meeting goals", value: 2.3 },
  { subject: "Continuous Engagement / Feedback", value: 5 },
  { subject: "Behavioural shift / Transition", value: 2.6 },
  { subject: "Ambition / Ideation", value: 3 },
];
const chartConfig = {
  desktop: {
    label: "Value",
  },
} satisfies ChartConfig;

export default function Graph({ className }: { className?: string }) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Card className="rounded-[30px] w-full h-full p-2 bg-white/80">
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="max-sm:min-h-[20rem] max-md:min-h-[400px] w-full h-full text-center mx-auto font-inter"
        >
          <RadarChart
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
            data={chartData}
          >
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis
              dataKey="subject"
              tick={({ x, y, textAnchor, value, index, ...props }) => {
                const data = chartData[index];

                return (
                  <text
                    x={x}
                    // change this for overlapping label fix
                    y={index === 0 ? y - 30 : y}
                    textAnchor={textAnchor}
                    fontSize={isMobile ? 10 : 12}
                    fontWeight={700}
                    className="font-inter"
                    {...props}
                  >
                    <tspan x={x} dy={"1rem"} fontSize={isMobile ? 10 : 12}>
                      {data.subject}
                    </tspan>
                  </text>
                );
              }}
            />
            <PolarGrid stroke="#ababab" />
            <Radar
              dataKey="value"
              fill="#49DFAD"
              fillOpacity={0.6}
              dot={{
                r: 8,
                fillOpacity: 1,
              }}
            />
            <PolarRadiusAxis
              angle={90}
              stroke="hsla(var(--foreground))"
              orientation="middle"
              axisLine={false}
              domain={[1, 5]}
              fontSize={isMobile ? 10 : 12}
              fill="hsla(var(--foreground))"
              tickCount={5}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
