'use client';

import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { useRouter } from 'next/navigation';

const OpportunityCard = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/dashboard/jobposts');
  };
  return (
    <div
      className='border p-4 rounded-lg mb-4 cursor-pointer'
      onClick={handleClick}
    >
      <div className='flex items-center gap-2'>
        <Avatar>
          <AvatarImage
            src='https://github.com/shadcn.png'
            alt='@shadcn'
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h3 className='font-semibold text-black'>Webbbin.company</h3>
          <p className='text-xs text-gray-500'>Nairobi, Kenya</p>
        </div>
      </div>
      <p className='text-black text-sm my-1'>
        Search for a talent for tech startup
      </p>
      <p className='text-xs text-gray-500'>
        Hello! We are new company that want to find someone who can help us with
        very interesting job that will in the tech field and. We are new company
        that want
      </p>
      <div className='flex justify-between'>
        <p className='text-xs text-black'>Scholarship, Fully funded</p>
        <p className='text-gray-500 text-xs'>Posted 13h ago</p>
      </div>
    </div>
  );
};

export default OpportunityCard;
