import Saved from '@/components/Saved';
import SideNav from '@/components/SideNav';
import React from 'react';

const SavedView = () => {
  return (
    <div className='flex'>
      <div className='lg:block hidden'>
        <SideNav />
      </div>
      <Saved />
    </div>
  );
};

export default SavedView;
