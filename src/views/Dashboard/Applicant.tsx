import ApplicantSection from '@/components/ApplicantSection';
import SideNav from '@/components/SideNav';
import React from 'react';

const ApplicantView = () => {
  return (
    <div className='flex'>
      <div className='lg:block hidden'>
        <SideNav role='employer' />
      </div>
      <ApplicantSection />
    </div>
  );
};

export default ApplicantView;
