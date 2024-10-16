import JobApplied from '@/components/JobApplied';
import SideNav from '@/components/SideNav';
import React from 'react';

const Page = () => {
  return (
    <div className='flex'>
      <div className='lg:block hidden'>
        <SideNav />
      </div>
      <JobApplied />
    </div>
  );
};

export default Page;
