'use client';

import React, { useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoHomeOutline, IoSearchOutline } from 'react-icons/io5';
import { LuMessageSquare } from 'react-icons/lu';
import { useRouter } from 'next/navigation';

const MobileNavigation = () => {
  const [active, setActive] = useState<string>('opportunity');
  const router = useRouter();

  const HandleActive = (str: string) => {
    if (str === 'home') {
      router.push('/home');
      setActive('home');
    } else if (str === 'opportunity') {
      router.push('/dashboard');
      setActive('opportunity');
    } else if (str === 'messages') {
      router.push('/dashboard/allmessages');
      setActive('messages');
    } else if (str === 'profile') {
      router.push('/profile');
      setActive('profile');
    } else {
      router.push('/dashboard');
      setActive('/opportunity');
    }
  }
  return (
    <div className='flex justify-between border-t-rose-50 px-9 fixed bottom-0 w-full bg-white z-10 py-2'>
      <div
        className={`flex flex-col items-center ${active === 'home' ? `text-orange-400` : ``}`}
        onClick={() => HandleActive('home')}
      >
        <IoHomeOutline
          className={`text-4xl text-gray-300${active === 'home' ? `text-orange-400` : ``}`}
        />
        <h1>Home</h1>
      </div>
      <div
        className={`flex flex-col items-center ${active === 'opportunity' ? `text-orange-400` : ``}`}
        onClick={() => HandleActive('opportunity')}
      >
        <IoSearchOutline
          className={`text-4xl text-gray-300${active === 'opportunity' ? `text-orange-400` : ``}`}
        />
        <h1>Opportunities</h1>
      </div>

      <div
        className={`flex flex-col items-center ${active === 'messages' ? `text-orange-400` : ``}`}
        onClick={() => HandleActive('messages')}
      >
        <LuMessageSquare
          className={`text-4xl text-gray-300${active === 'messages' ? `text-orange-400` : ``}`}
        />
        <h1>Messages</h1>
      </div>
      <div
        className={`flex flex-col items-center ${active === 'profile' ? `text-orange-400` : ``}`}
        onClick={() => HandleActive('profile')}
      >
        <FaRegUserCircle
          className={`text-4xl text-gray-300${active === 'profile' ? `text-orange-400` : ``}`}
        />
        <h1>Profile</h1>
      </div>
    </div>
  );
};

export default MobileNavigation;
