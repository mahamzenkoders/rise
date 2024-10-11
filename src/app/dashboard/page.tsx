import MainContent from '@/components/MainContent';
import RightSide from '@/components/Profile';
import SideNav from '@/components/SideNav';
import React from 'react';

const DashBoard = () => {
  return (
    <div className='flex min-h-screen'>
      <SideNav />
      <MainContent />
      <RightSide />
    </div>
  );
};

export default DashBoard;
