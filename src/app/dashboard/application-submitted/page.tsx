import ApplicationSubmitted from '@/components/ApplicationSubmitted';
import SideNav from '@/components/SideNav';
import React from 'react';

const Page = () => {
  return (
    <div className='flex'>
      <div className='lg:block hidden'>
        <SideNav />
      </div>
      <ApplicationSubmitted />
    </div>
  );
};

export default Page;
