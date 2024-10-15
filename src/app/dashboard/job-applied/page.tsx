import JobApplied from '@/components/JobApplied';
import SideNav from '@/components/SideNav';
import React from 'react';

const Page = () => {
  return (
    <div className='flex'>
      <SideNav />
      <JobApplied />
    </div>
  );
};

export default Page;
