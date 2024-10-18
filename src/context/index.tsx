'use client';

import { createContext, useContext, useState } from 'react';

const AppContext = createContext<any>(null);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const ChartProfileData = [
    {
      day: 'Mon',
      profile: 200,
    },
    {
      day: 'Tue',
      profile: 305,
    },
    {
      day: 'Wed',
      profile: 237,
    },
    {
      day: 'Thu',
      profile: 102,
    },
    {
      day: 'Fri',
      profile: 209,
    },
    {
      day: 'Sat',
      profile: 214,
    },
    {
      day: 'Sun',
      profile: 100,
    },
  ];
  let [profile, setProfile] = useState(ChartProfileData);
  let [completionProfile, setCompletionProfile] = useState<number>(85);

  return (
    <AppContext.Provider value={{ profile, completionProfile }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
