"use client";

import { Car, TrendingUp } from "lucide-react";
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

export const description = "A radar chart with dots";

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

const chartData = [
  { subject: "Recruitment and Engagement", desktop: 1.3, mobile: 3 },
  { subject: "Meeting goals", desktop: 2.3, mobile: 4 },
  { subject: "Continuous Engagement / Feedback", desktop: 5, mobile: 2.3 },
  { subject: "Behavioural shift / Transition", desktop: 2.6, mobile: 1.9 },
  { subject: "Ambition / Ideation", desktop: 3, mobile: 1.4 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
  },
} satisfies ChartConfig;

export default function Graph({ className }: { className?: string }) {
  return (
    <Card className="rounded-[40px] h-full w-full">
      <CardHeader>
        <CardTitle className="text-center">Lorem ipsum</CardTitle>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="max-sm:min-h-[300px] max-md:min-h-[500px] w-full h-full text-center container mx-auto "
          // className="text-center md:max-h-[320px] lg:max-h-[700px] w-full h-full"
        >
          <RadarChart
            margin={{ top: 30, right: 30, bottom: 20, left: 30 }}
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
                    fontSize={13}
                    fontWeight={500}
                    {...props}
                  >
                    <tspan
                      x={x}
                      dy={"1rem"}
                      fontSize={12}
                      className="fill-muted-foreground"
                    >
                      {data.subject}
                    </tspan>
                  </text>
                );
              }}
            />
            <PolarGrid />
            <Radar
              dataKey="desktop"
              fill="#49DFAD"
              fillOpacity={0.4}
              dot={{
                r: 4,
                fillOpacity: 1,
              }}
            />
            <PolarRadiusAxis
              angle={90}
              stroke="hsla(var(--foreground))"
              orientation="middle"
              axisLine={false}
              domain={[1, 5]}
              fontSize={12}
              fill="hsla(var(--foreground))"
              tickCount={5}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
