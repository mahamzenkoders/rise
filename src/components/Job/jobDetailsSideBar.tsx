'use client';

import React from 'react';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

const JobDetailsSidebar = () => {
  const router = useRouter();
  const handleApply = () => {
    router.push('/dashboard/job-applied');
  };
  return (
    <div className='w-1/4 p-6 bg-white h-screen border-r lg:block hidden'>
      <div className='text-center mb-4'>
        <div className='bg-gray-200 rounded-full h-16 w-16 mx-auto flex items-center justify-center'>
          <span className='text-xl font-bold text-gray-500'>W</span>
        </div>
        <h2 className='mt-3 text-lg font-semibold'>Webbbin.company</h2>
        <p className='text-gray-500'>Nairobi, Kenya</p>
      </div>
      <div className='flex justify-center mt-4'>
        <Button
          className='bg-orange-500 text-white py-2 px-6 rounded-full mr-4'
          onClick={handleApply}
        >
          APPLY
        </Button>
        <Button className='border border-gray-300 text-gray-600 py-2 px-6 rounded-full'>
          SAVE
        </Button>
      </div>
    </div>
  );
};

export default JobDetailsSidebar;
