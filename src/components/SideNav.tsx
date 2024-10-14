import React from 'react';
import { Button } from './ui/button';

const SideNav = () => {
  return (
    <div className='w-72 bg-gray-100 rounded p-5 m-2 border-r md:block hidden'>
      <h2 className='text-lg font-bold mb-4'>Filters</h2>
      <div className='mb-4'>
        <label className='block mb-1'>Opportunity Type</label>
        <select className='w-full border p-2 rounded'>
          <option value=''>Select type</option>
        </select>
      </div>
      <div className='mb-4'>
        <label className='block mb-1'>Location</label>
        <select className='w-full border p-2 rounded'>
          <option value=''>Select Location</option>
        </select>
      </div>
      <div className='mb-4'>
        <label className='block mb-1'>Industry</label>
        <select className='w-full border p-2 rounded'>
          <option value=''>Select Industry</option>
        </select>
      </div>
      <div className='mb-4'>
        <label className='block mb-1'>Commitment</label>
        <select className='w-full border p-2 rounded'>
          <option value=''>Select Commitment</option>
        </select>
      </div>
      <div className='mb-4'>
        <label className='block mb-1'>Funding Type</label>
        <select className='w-full border p-2 rounded'>
          <option value=''>Select Type</option>
        </select>
      </div>
      <div className='mb-4'>
        <label className='block mb-1'>Education Level</label>
        <div className='flex flex-col space-y-1'>
          <label className='flex items-center'>
            <input
              type='checkbox'
              className='mr-2'
            />
            High school
          </label>
          <label className='flex items-center'>
            <input
              type='checkbox'
              className='mr-2'
            />
            Diploma/Certificate
          </label>
          <label className='flex items-center'>
            <input
              type='checkbox'
              className='mr-2'
            />
            Bachelor's degree
          </label>
          <label className='flex items-center'>
            <input
              type='checkbox'
              className='mr-2'
            />
            Masters degree +
          </label>
        </div>
      </div>
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
