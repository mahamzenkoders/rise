'use client';

import React, { useState } from 'react';
import { Settings2 } from 'lucide-react';
import { IoMdArrowBack } from 'react-icons/io';
import SideNav from '../Filter/SideNav';
import OpportunityCard from './opportunitycard';

const MainContent = () => {
  const [show, setShow] = useState<boolean>(false);
  if (show) {
    return (
      <div className='lg:hidden block bg-gray-100'>
        <IoMdArrowBack
          className='text-5xl m-5'
          onClick={() => setShow(false)}
        />
        <SideNav role='jobSeeker' />
      </div>
    );
  } else {
    return (
      <div className='flex-1 p-6 bg-white overflow-y-auto m-2 mb-20'>
        <h1 className='text-2xl font-semibold mb-6'>
          All Opportunities (23,421)
        </h1>
        <div className='mb-4 flex gap-4 items-center justify-between'>
          <input
            type='text'
            placeholder='Search...'
            className='lg:w-full w-[95%] p-2 border rounded'
          />
          <Settings2
            className='text-orange-400 size-8 lg:hidden block'
            onClick={() => setShow(true)}
          />
        </div>
        <div>
          {Array(6)
            .fill(null)
            .map((_, index) => (
              <OpportunityCard key={index} />
            ))}
        </div>
      </div>
    );
  }
};

export default MainContent;
