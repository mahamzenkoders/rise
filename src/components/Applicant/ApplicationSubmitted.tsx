import React from 'react';
import OpportunityCard from '../Dashboard/opportunitycard';

const ApplicationSubmitted = () => {
  return (
    <div className='flex-1 p-6 bg-white overflow-y-auto m-2'>
      <h1 className='text-2xl font-semibold mb-6'>Application Submitted (4)</h1>
      <div className='mb-4 flex justify-between'>
        <input
          type='text'
          placeholder='Search...'
          className='w-full p-2 border rounded'
        />
      </div>
      <div>
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <OpportunityCard key={index} />
          ))}
      </div>
    </div>
  );
};

export default ApplicationSubmitted;
