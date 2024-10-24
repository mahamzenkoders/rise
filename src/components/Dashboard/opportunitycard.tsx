'use client';

import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { useRouter } from 'next/navigation';
import { FaBookmark } from 'react-icons/fa';

const OpportunityCard = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/dashboard/jobposts');
  };
  return (
    <div
      className='border p-4 rounded-lg cursor-pointer'
      onClick={handleClick}
    >
      <div className='flex items-center gap-2'>
        <div className='flex justify-between w-full items-center'>
          <div className='flex gap-3'>
            <Avatar>
              <AvatarImage
                src='https://github.com/shadcn.png'
                alt='@shadcn'
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h3 className='font-semibold text-black'>Webbbin.company</h3>
              <p className='text-sm text-gray-500'>Nairobi, Kenya</p>
            </div>
          </div>
          <div>
            <FaBookmark className='text-orange-400 text-2xl' />
          </div>
        </div>
      </div>
      <p className='text-black text-lg my-1'>
        Search for a talent for tech startup
      </p>
      <p className='text-sm text-gray-500'>
        Hello! We are new company that want to find someone who can help us with
        very interesting job that will in the tech field and. We are new company
        that want
      </p>
      <div className='flex justify-between'>
        <p className='text text-black'>Scholarship, Fully funded</p>
        <p className='text-gray-500 text-xs'>Posted 13h ago</p>
      </div>
    </div>
  );
};

export default OpportunityCard;
