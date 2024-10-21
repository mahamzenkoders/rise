import JobApplied from '@/components/Job/JobApplied';
import SideNav from '@/components/Filter/SideNav';
import React from 'react';

const JobAppliedView = () => {
  return (
    <div className='flex'>
      <div className='lg:block hidden'>
        <SideNav role='jobSeeker' />
      </div>
      <JobApplied />
    </div>
  );
};

export default JobAppliedView;
