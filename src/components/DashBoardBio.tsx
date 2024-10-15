'use client';

import React, { useState } from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import DashBoardInterest from './DashBoardInterest';

const DashBoardBioAndInterestPage = () => {
  const [active, setActive] = useState<string>('bio');
  return (
    <div className='p-5'>
      <h1 className='text-3xl'>Bio and Interest</h1>
      <div className='flex my-9'>
        <h1
          className={`px-10 text-2xl text-black transition-all duration-300 ease-in-out ${active === 'bio' ? 'border-b border-b-orange-400 text-orange-400' : ''} cursor-pointer`}
          onClick={() => setActive('bio')}
        >
          Bio
        </h1>
        <h1
          className={`px-10 text-2xl text-black transition-all duration-300 ease-in-out ${active === 'interest' ? 'text-orange-400 border-b border-b-orange-400' : ''} cursor-pointer`}
          onClick={() => setActive('interest')}
        >
          Interest
        </h1>
      </div>
      {active === 'bio' && (
        <div className='flex flex-col'>
          <div className='md:w-1/2 w-full'>
            <Label
              htmlFor='bio'
              className='block mb-2 text-lg font-semibold text-gray-700'
            >
              About Me
            </Label>
            <Textarea
              className='border md:h-[300px] h-full w-full border-white'
              placeholder='Enter Your Bio'
            />
          </div>
        </div>
      )}
      {active === 'interest' && <DashBoardInterest />}
    </div>
  );
};

export default DashBoardBioAndInterestPage;
