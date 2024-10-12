'use client';

import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import { ChartConfig, ChartContainer } from '@/components/ui/chart';

const chartData = [
  { day: 'Mon', profile: 186 },
  { day: 'Tue', profile: 305 },
  { day: 'Wed', profile: 237 },
  { day: 'Thu', profile: 102 },
  { day: 'Fri', profile: 209 },
  { day: 'Sat', profile: 214 },
  { day: 'Sun', profile: 100 },
];

const chartConfig = {
  desktop: {
    label: 'Profile',
    color: '#F4803E',
  },
} satisfies ChartConfig;

export function ProfileStats() {
  return (
    <ChartContainer
      config={chartConfig}
      className='min-h-[200px] w-full'
    >
      <BarChart data={chartData}>
        <defs>
          <linearGradient
            id='colorProfile'
            x1='0'
            y1='0'
            x2='0'
            y2='1'
          >
            <stop
              offset='0%'
              stopColor='#F4803E'
              stopOpacity={1}
            />
            <stop
              offset='100%'
              stopColor='#F4803E00'
              stopOpacity={0}
            />
          </linearGradient>
        </defs>
        <CartesianGrid
          vertical={false}
          horizontal={false}
        />
        <XAxis
          dataKey='day'
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={value => value.slice(0, 3)}
        />
        <Bar
          dataKey='profile'
          fill='url(#colorProfile)'
          radius={4}
        />
      </BarChart>
    </ChartContainer>
  );
}
