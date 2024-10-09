'use client';

import React from 'react';
import Image from 'next/image';
import onBoard from '../../../../public/assets/images/onboard.png';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
const OnBoard = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/auth/info');
  };
  return (
    <div className='flex justify-center items-center flex-col'>
      <div>
        <Image
          src={onBoard}
          alt='404'
        ></Image>
        <h1 className='text-xl'>You're Almost OnBoard!</h1>
        <div className='flex flex-col items-center justify-center my-5'>
          <h1 className='text-xs'>We've just sent a link to your email.</h1>
          <h1 className='text-xs'>Click on it to verify.</h1>
        </div>
      </div>
      <div>
        <div className='flex flex-col items-center justify-center my-5'>
          <h1 className='text-xs'>Verified? Great!</h1>
          <h1 className='text-xs'>Just enter your email below to proceed</h1>
        </div>
        <Input placeholder='Email'></Input>
      </div>
      <div className='mt-12'>
        <Button
          onClick={handleClick}
          className='bg-orange-400 rounded-full text-white w-64'
          variant={'outline'}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default OnBoard;
