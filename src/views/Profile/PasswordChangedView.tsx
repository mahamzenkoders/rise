'use client';
import React, { useState } from 'react';
import { IoEyeSharp } from 'react-icons/io5';
import { IoMdArrowBack } from 'react-icons/io';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

const PasswordChangedView: React.FC = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const handleSave = () => {
    console.log('Saving new password...');
  };

  const handleClick = () => {
    router.push('/profile');
  };

  return (
    <div className='p-6 max-w-md'>
      <IoMdArrowBack
        onClick={handleClick}
        className='lg:hidden block text-5xl my-5 '
      />
      <h2 className='text-2xl font-semibold mb-6'>Change Password</h2>

      <div className='mb-4'>
        <label
          htmlFor='oldPassword'
          className='block mb-2 text-gray-600'
        >
          Old Password
        </label>
        <div className='relative'>
          <input
            type={showOldPassword ? 'text' : 'password'}
            id='oldPassword'
            className='w-full p-3 border rounded-md shadow-sm focus:outline-none focus:border-orange-500'
            value={oldPassword}
            onChange={e => setOldPassword(e.target.value)}
          />
          <span
            onClick={() => setShowOldPassword(!showOldPassword)}
            className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500'
          >
            <IoEyeSharp />
          </span>
        </div>
      </div>

      <div className='mb-4'>
        <label
          htmlFor='newPassword'
          className='block mb-2 text-gray-600'
        >
          New Password
        </label>
        <div className='relative'>
          <input
            type={showNewPassword ? 'text' : 'password'}
            id='newPassword'
            className='w-full p-3 border rounded-md shadow-sm focus:outline-none focus:border-orange-500'
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
          />
          <span
            onClick={() => setShowNewPassword(!showNewPassword)}
            className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500'
          >
            <IoEyeSharp />
          </span>
        </div>
      </div>

      <div className='mb-6'>
        <label
          htmlFor='confirmPassword'
          className='block mb-2 text-gray-600'
        >
          Confirm New Password
        </label>
        <div className='relative'>
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            id='confirmPassword'
            className='w-full p-3 border rounded-md shadow-sm focus:outline-none focus:border-orange-500'
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
          <span
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500'
          >
            <IoEyeSharp />
          </span>
        </div>
      </div>

      <div className='flex justify-between items-center'>
        <Button
          className='text-gray-500 border border-gray-500 py-2 px-8 rounded-full'
          onClick={() => {
            console.log('Canceling password change...');
          }}
        >
          Cancel
        </Button>
        <Button
          className='bg-orange-500 text-white py-2 px-9 rounded-full'
          onClick={handleSave}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default PasswordChangedView;
