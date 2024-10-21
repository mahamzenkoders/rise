import ApplicationSubmitted from '@/components/ApplicationSubmitted';
import SideNav from '@/components/Filter/SideNav';
import React from 'react';

const ApplicationSubmittedView = () => {
  return (
    <div className='flex'>
      <div className='lg:block hidden'>
        <SideNav role='jobSeeker' />
      </div>
      <ApplicationSubmitted />
    </div>
  );
};

export default ApplicationSubmittedView;
