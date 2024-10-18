import { getCookieFn } from '@/utils/storage.util';
import React from 'react';

const HomeView = () => {
  const role = getCookieFn('role');
  console.log(role);
  <div>{role}</div>;
};

export default HomeView;
