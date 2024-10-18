import React from 'react';

const FilterEmployer = () => {
  return (
    <div>
      {' '}
      <div className='mb-4 w-full'>
        <label className='block mb-1'>Active Post or Opportunity</label>
        <select className='w-full border p-2 rounded'>
          <option value=''>Select job</option>
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
      <div className='mb-4'>
        <label className='block mb-1'>Gender</label>
        <div className='flex flex-col space-y-1'>
          <label className='flex items-center'>
            <input
              type='checkbox'
              className='mr-2'
            />
            Male
          </label>
          <label className='flex items-center'>
            <input
              type='checkbox'
              className='mr-2'
            />
            Female
          </label>
          <label className='flex items-center'>
            <input
              type='checkbox'
              className='mr-2'
            />
            Other
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterEmployer;
