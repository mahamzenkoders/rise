import MainContent from '@/components/MainContent';
import SideNav from '@/components/SideNav';
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
