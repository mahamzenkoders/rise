import MainContent from '@/components/MainContent';
import SideNav from '@/components/SideNav';
import React from 'react';

const DashBoard = () => {
  return (
    <div className='flex'>
      <SideNav />
      <MainContent />
    </div>
  );
};

export default DashBoard;
