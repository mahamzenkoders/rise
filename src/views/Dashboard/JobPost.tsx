import JobContentSection from '@/components/Job/jobContent';
import JobDetailsSidebar from '@/components/Job/jobDetailsSideBar';
import React from 'react';

const JobPostView = () => {
  return (
    <div className='flex h-screen'>
      <JobDetailsSidebar />
      <JobContentSection />
    </div>
  );
};

export default JobPostView;
