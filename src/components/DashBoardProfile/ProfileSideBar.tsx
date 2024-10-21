'use client';
import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { CgNotes, CgProfile } from 'react-icons/cg';
import { FaGraduationCap } from 'react-icons/fa';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { MdNotificationsActive } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { IoIosLogOut } from 'react-icons/io';
import { Button } from '../ui/button';
import ProfileImage from '../../../public/assets/images/Avatar.png';
import Image from 'next/image';

const ProfileNavigation = ({ role }: { role: string }) => {
  const router = useRouter();
  const pathname = usePathname();

  const seekerNavigation = [
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

  const employerNavigation = [
    {
      name: 'Personal Information',
      path: '/employer/profile/personal-info',
      icon: <CgProfile />,
    },
    {
      name: 'Company Information',
      path: '/employer/profile/company-info',
      icon: <FaGraduationCap />,
    },
    {
      name: 'Notifications Preferences',
      path: '/employer/profile/notification',
      icon: <MdNotificationsActive />,
    },
    {
      name: 'Change Password',
      path: '/employer/profile/change-password',
      icon: <RiLockPasswordLine />,
    },
  ];
  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className={`p-6 bg-gray-100 h-screen border-r  lg:w-1/4 w-full`}>
      <div className='flex items-center mr-6 mb-6'>
        <Image
          src={ProfileImage}
          alt='Profile'
          className='w-16 h-16 rounded-full mr-4'
        />
        <div>
          <h2 className='text-xl font-bold'>Taras Vlasenko</h2>
          <button className='text-orange-500 text-sm'>Change Photo</button>
        </div>
      </div>
      <ul className='space-y-4'>
        {role === 'employer'
          ? employerNavigation.map((item, index) => (
              <li
                key={index}
                onClick={() => handleNavigation(item.path)}
                className={`cursor-pointer text-3xl items-center bg-white p-3 m-4 ${
                  pathname === item.path ? 'text-orange-500' : 'text-gray-600'
                }`}
              >
                <div className='flex gap-3 text-xl p-2 items-center'>
                  {item.icon}
                  {item.name}
                </div>
              </li>
            ))
          : seekerNavigation.map((item, index) => (
              <li
                key={index}
                onClick={() => handleNavigation(item.path)}
                className={`cursor-pointer text-3xl items-center bg-white p-3 m-4 ${
                  pathname === item.path ? 'text-orange-500' : 'text-gray-600'
                }`}
              >
                <div className='flex gap-3 text-xl p-2 items-center'>
                  {item.icon}
                  {item.name}
                </div>
              </li>
            ))}
      </ul>

      <div
        onClick={() => router.push('/auth/login')}
        className='mt-48 flex gap-1 items-center text-4xl bg-white m-4 p-3 cursor-pointer'
      >
        <IoIosLogOut className='text-orange-400' />
        <Button className='text-black text-xl'>Log Out</Button>
      </div>
    </div>
  );
};

export default ProfileNavigation;
