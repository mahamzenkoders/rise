'use client';

import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import { ChartConfig, ChartContainer } from '@/components/ui/chart';
import { useAppContext } from '@/context';

const chartConfig = {
  desktop: {
    label: 'Profile',
    color: '#F4803E',
  },
} satisfies ChartConfig;

export function ProfileStats() {
  const { profile } = useAppContext();
  return (
    <ChartContainer
      config={chartConfig}
      className='min-h-[200px] w-full'
    >
      <BarChart data={profile}>
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
