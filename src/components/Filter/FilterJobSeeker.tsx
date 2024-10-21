import React from 'react';

const FilterJobSeeker = () => {
  return (
    <div>
      {' '}
      <div className='mb-4 w-full'>
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
    </div>
  );
};

export default FilterJobSeeker;
