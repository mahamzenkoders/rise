'use client';

import React from 'react';
import Tick from '../../public/assets/images/tick.png';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const PasswordChanged = () => {
  const router = useRouter();

  const handleCLick = () => {
router.push('/dashboard/jobposts');
  };
  return (
    <div className='flex flex-col justify-center m-auto items-center'>
      <Image
        src={Tick}
        alt={'Job Applied Picture'}
      ></Image>
      <div className='flex flex-col gap-4 my-7 justify-center items-center'>
        <h1 className='text-2xl'>You have applied Successfully!</h1>
      </div>
      <Button
        className='bg-gray-50 text-black w-full'
        variant={'outline'}
        onClick={handleCLick}
      >
        BACK TO JOB DESCRIPTION
      </Button>
    </div>
  );
};

export default PasswordChanged;
