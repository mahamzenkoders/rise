import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const ActivePostsSideBar = () => {
  const activePosts = [
    {
      title: ' Search for a talent for tech startup',
      postTime: 'Posted 13h ago',
    },
    {
      title: ' Mid level talent needed to the new project in agro field',
      postTime: 'Posted 24h ago',
    },
    {
      title: 'Junior Developer',
      postTime: 'Posted 1d ago',
    },
  ];
  return (
    <div className='w-1/4 h-screen bg-gray-100 p-3 ml-6 rounded'>
      <div className='px-2 my-4 text-xl font-medium'>Active Posts</div>
      {activePosts?.map((post, index) => (
        <div
          key={index}
          className='bg-white flex items-center py-4 px-4 mt-3 rounded justify-between cursor-pointer'
        >
          <div className='flex flex-col gap-2'>
            <h1 className='text-orange-400'>{post.title}</h1>
            <h1 className='text-xs text-gray-500'>{post.postTime}</h1>
          </div>
          <div>
            <IoIosArrowForward className='text-2xl' />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivePostsSideBar;
