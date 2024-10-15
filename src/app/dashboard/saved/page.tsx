import Saved from '@/components/Saved';
import SideNav from '@/components/SideNav';
import React from 'react';

const Page = () => {
  return (
    <div className='flex'>
      <SideNav />
      <Saved />
    </div>
  );
};

export default Page;
