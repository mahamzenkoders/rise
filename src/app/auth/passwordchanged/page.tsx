'use client';

import React from 'react';
import PasswordPic from '../../../../public/assets/images/passwordchanged.png';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const PasswordChanged = () => {
  const router = useRouter();

  const handleCLick = () => {
    router.push('/auth/login');
  };
  return (
    <div>
      <div className='flex justify-center'>
        <Image
          src={PasswordPic}
          alt={'Password Changed Picture'}
        ></Image>
      </div>
      <div className='flex flex-col gap-4 my-7 justify-center items-center'>
        <h1 className='text-lg'>Password changed</h1>
        <h3 className='text-sm'>
          Your password has been changed successfully!
        </h3>
      </div>
      <Button
        className='bg-orange-400 text-white w-full'
        variant={'outline'}
        onClick={handleCLick}
      >
        Login With New Password
      </Button>
    </div>
  );
};

export default PasswordChanged;
