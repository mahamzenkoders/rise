import JobContentSection from '@/components/jobContent';
import JobDetailsSidebar from '@/components/jobDetailsSideBar';
import React from 'react';

const Page = () => {
  return (
    <div className='flex h-screen'>
      <JobDetailsSidebar />
      <JobContentSection />
    </div>
  );
};

export default Page;
