import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const OpportunityCard = () => (
  <div className='border p-4 rounded-lg mb-4'>
    <div className='flex items-center gap-2'>
      <Avatar>
        <AvatarImage
          src='https://github.com/shadcn.png'
          alt='@shadcn'
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>
        <h3 className='font-semibold text-black'>Webbbin.company</h3>
        <p className='text-xs text-gray-500'>Nairobi, Kenya</p>
      </div>
    </div>
    <p className='text-black text-sm my-1'>
      Search for a talent for tech startup
    </p>
    <p className='text-xs text-gray-500'>
      Hello! We are new company that want to find someone who can help us with
      very interesting job that will in the tech field and. We are new company
      that want
    </p>
    <div className='flex justify-between'>
      <p className='text-xs text-black'>Scholarship, Fully funded</p>
      <p className='text-gray-500 text-xs'>Posted 13h ago</p>
    </div>
  </div>
);

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
