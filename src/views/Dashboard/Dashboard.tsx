import MainContent from '@/components/Dashboard/MainContent';
import SideNav from '@/components/Filter/SideNav';
import React from 'react';

const DashboardView = () => {
  return (
    <div className='flex'>
      <div className='lg:block hidden'>
        <SideNav role='jobSeeker' />
      </div>
      <MainContent />
    </div>
  );
};

export default DashboardView;
