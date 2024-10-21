import Saved from '@/components/Dashboard/Saved';
import SideNav from '@/components/Filter/SideNav';
import React from 'react';

const SavedView = () => {
  return (
    <div className='flex'>
      <div className='lg:block hidden'>
        <SideNav role='jobSeeker' />
      </div>
      <Saved />
    </div>
  );
};

export default SavedView;
