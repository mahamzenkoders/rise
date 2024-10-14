'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { CgNotes, CgProfile } from 'react-icons/cg';
import { FaGraduationCap } from 'react-icons/fa';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { MdNotificationsActive } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { IoIosLogOut } from 'react-icons/io';
import { Button } from './ui/button';

const ProfileNavigation = () => {
  const router = useRouter();

  const navigationItems = [
    {
      name: 'Personal Information',
      path: '/profile/personal-info',
      icon: <CgProfile />,
    },
    {
      name: 'Education / Experience',
      path: '/profile/education-experience',
      icon: <FaGraduationCap />,
    },
    { name: 'Bio and Interests', path: '/profile/bio', icon: <CgNotes /> },
    {
      name: 'Supporting Documents',
      path: '/profile/documents',
      icon: <IoDocumentTextOutline />,
    },
    {
      name: 'Notifications Preferences',
      path: '/profile/notifications',
      icon: <MdNotificationsActive />,
    },
    {
      name: 'Change Password',
      path: '/profile/change-password',
      icon: <RiLockPasswordLine />,
    },
  ];

  return (
    <div className='w-1/4 p-6 bg-gray-100 h-screen border-r'>
      <ul className='space-y-4'>
        {navigationItems.map((item, index) => (
          <li
            key={index}
            className={`cursor-pointer text-3xl items-center bg-white p-3 m-4${
              '/profile/personal-info' === item.path
                ? 'text-orange-500'
                : 'text-gray-600'
            }`}
          >
            <div className='flex gap-3 text-xl p-2 items-center'>
              {item.icon}
              {item.name}
            </div>
          </li>
        ))}
      </ul>

      <div className='mt-52 flex gap-1 items-center text-4xl bg-white m-4 p-3 '>
        <IoIosLogOut className='text-orange-400' />
        <Button className=' text-black text-xl'>Log Out</Button>
      </div>
    </div>
  );
};

export default ProfileNavigation;
