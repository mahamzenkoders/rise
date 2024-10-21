'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const EmployerProfile = () => {
  const router = useRouter();

  const handleClick = (str: string) => {
    if (str === 'active_post') {
      router.push('/employer/employer-dashboard');
    } else if (str === 'active_application') {
      router.push('/dashboard/saved');
    } else if (str === 'shortlist') {
      router.push('/dashboard/saved');
    } else {
      router.push('/dashboard/application-submitted');
    }
  };

  return (
    <div>
      <div
        className='my-4 bg-white p-3 rounded flex justify-between cursor-pointer'
        onClick={() => handleClick('active_post')}
      >
        <h1 className=''>Active Posts</h1>
        <h1 className='text-orange-400'>2</h1>
      </div>
      <div
        className='my-4 bg-white p-3 rounded flex justify-between cursor-pointer'
        onClick={() => handleClick('active_application')}
      >
        <h1 className=''>Active Application</h1>
        <h1 className='text-orange-400'>310</h1>
      </div>
      <div
        className='my-4 bg-white p-3 rounded flex justify-between cursor-pointer'
        onClick={() => handleClick('shortlist')}
      >
        <h1 className=''>Shortlist</h1>
        <h1 className='text-orange-400'>4</h1>
      </div>
      <div
        className='my-4 bg-white p-3 rounded flex justify-between cursor-pointer'
        onClick={() => handleClick('saved')}
      >
        <h1 className=''>Saved</h1>
        <h1 className='text-orange-400'>2</h1>
      </div>
    </div>
  );
};

export default EmployerProfile;
