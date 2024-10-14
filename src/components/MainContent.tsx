import React from 'react';
import OpportunityCard from './opportunitycard';

const MainContent = () => {
  return (
    <div className='flex-1 p-6 bg-white overflow-y-auto m-2'>
      <h1 className='text-xl font-bold mb-6'>All Opportunities (23,421)</h1>
      <div className='mb-4 flex justify-between'>
        <input
          type='text'
          placeholder='Search...'
          className='w-full p-2 border rounded'
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
};

export default MainContent;
