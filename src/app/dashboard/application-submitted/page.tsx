import ApplicationSubmitted from '@/components/ApplicationSubmitted';
import SideNav from '@/components/SideNav';
import React from 'react';

const Page = () => {
  return (
    <div className='flex'>
      <SideNav />
      <ApplicationSubmitted />
    </div>
  );
};

export default Page;
