import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoHomeOutline, IoSearchOutline } from 'react-icons/io5';
import { LuMessageSquare } from 'react-icons/lu';

const MobileNavigation = () => {
  return (
    <div className='flex justify-between border-t-rose-50 px-9 sticky'>
      <IoHomeOutline className='text-6xl text-gray-300' />
      <IoSearchOutline className='text-6xl text-gray-300' />
      <LuMessageSquare className='text-6xl text-gray-300' />
      <FaRegUserCircle className='text-6xl text-gray-300' />
    </div>
  );
};

export default MobileNavigation;
