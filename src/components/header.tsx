'use client';
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { FaRegBell } from 'react-icons/fa';
import { FiMessageCircle } from 'react-icons/fi';
import { CiSearch } from 'react-icons/ci';
import Image from 'next/image';
import Logo from '../../public/assets/images/Black Logo.png';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';

const Header = ({ role }: { role: string }) => {
  const [active, setActive] = useState<String>('opportunity' && 'applicant');

  const router = useRouter();

  const handleProfile = () => {
    router.push('/profile/personal-info');
  };

  const handleClick = (text: string) => {
    if (text === 'opportunity') {
      setActive('opportunity');
      router.push('/dashboard');
    } else if (text == 'applicant') {
      setActive('applicant');
      router.push('/employer/employer-dashboard');
    } else if (text == 'message') {
      setActive('message');
      router.push('/dashboard/messages');
    } else {
      setActive('opportunity');
      setActive('applicant');
    }
  };
  return (
    <div className='flex p-4 items-center justify-between'>
      <div>
        <Image
          src={Logo}
          alt='404'
        />
      </div>
      <div className='items-center gap-5 sm:flex hidden'>
        {role == 'employer' ? (
          <div
            onClick={() => {
              handleClick('applicant');
            }}
            className={`flex gap-2 cursor-pointer items-center ${active === 'applicant' ? `text-orange-400` : ''}`}
          >
            <CiSearch
              className={`text-xl text-black font-semibold ${active === 'applicant' ? 'text-orange-400' : ``}`}
            />
            <h1>Applicant</h1>
          </div>
        ) : (
          <div
            onClick={() => {
              handleClick('opportunity');
            }}
            className={`flex gap-2 cursor-pointer items-center ${active === 'opportunity' ? `text-orange-400` : ''}`}
          >
            <CiSearch
              className={`text-xl text-black font-semibold ${active === 'opportunity' ? 'text-orange-400' : ``}`}
            />
            <h1>Opportunity</h1>
          </div>
        )}
        <div
          onClick={() => {
            handleClick('message');
          }}
          className={`flex gap-2 cursor-pointer items-center ${active === 'message' ? `text-orange-400` : ''}`}
        >
          <FiMessageCircle
            className={`text-xl ${active === 'message' ? 'text-orange-400' : ``}`}
          />
          <h1 className=''>Messages</h1>
        </div>
      </div>
      <div className='flex gap-3 items-center'>
        {role == 'employer' && (
          <div>
            <Button
              className='bg-orange-400 px-4 text-white'
              variant={'outline'}
            >
              Post A Job
            </Button>
          </div>
        )}
        <FaRegBell className={`text-2xl text-orange-400`} />
        <Avatar
          className='cursor-pointer'
          onClick={handleProfile}
        >
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
