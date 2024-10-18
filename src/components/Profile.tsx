'use client';

import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { IoIosArrowForward } from 'react-icons/io';
import { ProfileStats } from './chart';
import { useRouter, usePathname } from 'next/navigation';
import { useAppContext } from '@/context';

const RightSide = ({ role }: { role: string }) => {
  const { completionProfile } = useAppContext();
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (str: string) => {
    if (str === 'saved') {
      router.push('/dashboard/saved');
    } else {
      router.push('/dashboard/application-submitted');
    }
  };

  const isDashboard =
    pathname.startsWith('/dashboard') ||
    pathname.startsWith('/employer/employer-dashboard');

  return (
    <div
      className={`w-72 bg-gray-100 rounded p-4 border-l ${isDashboard ? 'lg:block hidden' : 'lg:hidden block w-full'} p-2`}
    >
      <div className='flex items-center mb-4'>
        <Avatar>
          <AvatarImage
            src='https://github.com/shadcn.png'
            alt='@shadcn'
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className='ml-3'>
          <h3 className='font-bold'>
            {role == 'employer' ? 'Web Bin Company' : 'Rising Leader'}
          </h3>
          <p className='text-xs text-orange-400'>Rising Leader</p>
        </div>
      </div>
      <div className='my-4'>
        <h4 className='text-xs text-gray-500 my-1'>Completion Profile</h4>
        <div className='bg-gray-200 rounded-full h-2'>
          <div
            className='bg-gradient-to-r from-[#F4803E00] to-orange-500 rounded-full h-full my-1'
            style={{ width: `${completionProfile}%` }}
          ></div>
        </div>
        <p className='text-xs mt-1'>{completionProfile}% complete</p>
      </div>
      <div
        className='my-4 bg-white p-3 rounded flex justify-between cursor-pointer'
        onClick={() => handleClick('application')}
      >
        <h1 className=''>
          {role == 'employer' ? 'Active Posts' : 'Application Submitted'}
        </h1>
        <h1 className='text-orange-400'>4</h1>
      </div>
      <div className='my-4 bg-white p-3 rounded flex justify-between cursor-pointer'>
        <h1 className=''>
          {role == 'employer' ? 'Active Applications' : 'Recommendation'}
        </h1>
        <h1 className='text-orange-400'>340</h1>
      </div>
      <div
        className='my-4 bg-white p-3 rounded flex justify-between cursor-pointer'
        onClick={() => handleClick('saved')}
      >
        <h1 className=''>{role == 'employer' ? 'Shortlist' : 'Saved'}</h1>
        <h1 className='text-orange-400'>2</h1>
      </div>
      {role == 'employer' ? (
        <div
          className='my-4 bg-white p-3 rounded flex justify-between cursor-pointer'
          onClick={() => handleClick('saved')}
        >
          <h1 className=''>Saved</h1>
          <h1 className='text-orange-400'>4</h1>
        </div>
      ) : (
        ''
      )}
      <div className='mb-4'>
        <div className='mt-2 h-full bg-white mb-7 py-3'>
          <h4 className='font-bold text-gray-900 px-3'>
            Profile Visit Metrics
          </h4>
          <div className='text-xs text-gray-500 mb-3 px-3'>
            23,400 visits last 7 days
          </div>
          <ProfileStats />
        </div>

        <div className='my-4 flex justify-between bg-white p-3 rounded'>
          <h1 className='font-semibold'>Archive</h1>
          <h1 className='text-orange-400'>3</h1>
        </div>

        <div className='py-4 flex justify-between bg-white p-3 rounded'>
          <h1 className='font-semibold'>Help & Support</h1>
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
};

export default RightSide;
