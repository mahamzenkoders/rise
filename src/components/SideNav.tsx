import React from 'react';
import { Button } from './ui/button';
import FilterJobSeeker from './FilterJobSeeker';
import FilterEmployer from './FilterEmployer';

const SideNav = ({ role }: { role: string }) => {
  return (
    <div className='w-screen h-screen bg-gray-100 rounded p-5 m-2 border-r lg:w-72'>
      <h2 className='text-lg font-bold mb-4'>Filters</h2>
      {role == 'jobSeeker' ? <FilterJobSeeker /> : <FilterEmployer />}
      <div className='mt-4'>
        <Button
          variant={'outline'}
          className='w-[50%] bg-orange-500 text-white p-2 rounded-full'
        >
          Apply Filter
        </Button>
        <Button
          variant={'outline'}
          className='w-[50%] bg-gray-200 text-gray-700 p-2 rounded-full mt-2'
        >
          Clear
        </Button>
      </div>
    </div>
  );
};

export default SideNav;
