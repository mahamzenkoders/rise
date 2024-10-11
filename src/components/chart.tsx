"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartData = [
  { month: "January", profile: 186 },
  { month: "February", profile: 305 },
  { month: "March", profile: 237 },
  { month: "April", profile: 73 },
  { month: "May", profile: 209 },
  { month: "June", profile: 214 },
];

const chartConfig = {
  desktop: {
    label: "Profile",
    color: "#F4803E",
  },
} satisfies ChartConfig;

export function ProfileStats() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart data={chartData}>
        <defs>
          <linearGradient id="colorProfile" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F4803E" stopOpacity={1} />
            <stop offset="100%" stopColor="#F4803E00" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <Bar dataKey="profile" fill="url(#colorProfile)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
