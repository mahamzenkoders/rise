'use client';
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { FaRegBell } from 'react-icons/fa';
import { FiMessageCircle } from 'react-icons/fi';
import { CiSearch } from 'react-icons/ci';
import Image from 'next/image';
import Logo from '../../public/assets/images/Black Logo.png';

const Header = () => {
  const [active, setActive] = useState<String>('opportunity');
  return (
    <div className='flex p-4 items-center justify-between'>
      <div>
        <Image
          src={Logo}
          alt='404'
        />
      </div>
      <div className='items-center gap-5 sm:flex hidden'>
        <div
          onClick={() => setActive('opportunity')}
          className={`flex gap-2 cursor-pointer items-center ${active === 'opportunity' ? `text-orange-400` : ''}`}
        >
          <CiSearch
            className={`text-xl text-black font-semibold ${active === 'opportunity' ? 'text-orange-400' : ``}`}
          />
          <h1 className=''>Opportunities</h1>
        </div>
        <div
          onClick={() => setActive('message')}
          className={`flex gap-2 cursor-pointer items-center ${active === 'message' ? `text-orange-400` : ''}`}
        >
          <FiMessageCircle
            className={`text-xl ${active === 'message' ? 'text-orange-400' : ``}`}
          />
          <h1 className=''>Messages</h1>
        </div>
      </div>
      <div className='flex gap-3 items-center'>
        <FaRegBell className={`text-2xl text-orange-400`} />
        <Avatar>
          <AvatarImage
            src='https://github.com/shadcn.png'
            alt='@shadcn'
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Header;
