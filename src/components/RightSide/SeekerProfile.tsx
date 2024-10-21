'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const SeekerProfile = () => {
  const router = useRouter();

  const handleClick = (str: string) => {
    if (str === 'saved') {
      router.push('/dashboard/saved');
    } else {
      router.push('/dashboard/application-submitted');
    }
  };

  return (
    <div>
      <div
        className='my-4 bg-white p-3 rounded flex justify-between cursor-pointer'
        onClick={() => handleClick('application')}
      >
        <h1 className=''>Application Submitted</h1>
        <h1 className='text-orange-400'>4</h1>
      </div>
      <div
        className='my-4 bg-white p-3 rounded flex justify-between cursor-pointer'
        onClick={() => handleClick('application')}
      >
        <h1 className=''>Recommendation</h1>
        <h1 className='text-orange-400'>340</h1>
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

export default SeekerProfile;
