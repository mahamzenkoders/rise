'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FcGoogle } from 'react-icons/fc';
import { SiFacebook } from 'react-icons/si';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { setupFsCheck } from 'next/dist/server/lib/router-utils/filesystem';

const LoginPage = () => {
  const [active, setActive] = useState<string>('rising');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, useEmail] = useState<String>('');
  const [password, setPassword] = useState<string>('');

  const router = useRouter();

  const handleCLick = () => {
    router.push('/auth/onboard');
  };
  return (
    <div className='flex justify-center items-center flex-col w-full'>
      <div className='flex justify-between my-9'>
        <h1
          className={`pr-4 text-sm text-black transition-all duration-300 ease-in-out ${active === 'rising' ? 'border-b border-b-orange-400 text-orange-400' : ''} cursor-pointer`}
          onClick={() => setActive('rising')}
        >
          RISING LEADER
        </h1>
        <h1
          className={`pl-4 text-sm text-black transition-all duration-300 ease-in-out ${active === 'opportunity' ? 'text-orange-400 border-b border-b-orange-400' : ''} cursor-pointer`}
          onClick={() => setActive('opportunity')}
        >
          OPPORTUNITY PARTNER
        </h1>
      </div>
      <h1 className='font-archivo text-2xl'>Login</h1>
      <div className='mt-4 flex flex-col w-72'>
        <Button
          className='rounded-full mt-4 bg-[#F8F8F8]'
          variant={'outline'}
        >
          <FcGoogle className='m-3' />
          Signup With Google
        </Button>
        <Button
          className='rounded-full mt-4 bg-[#F8F8F8]'
          variant={'outline'}
        >
          <SiFacebook className='m-3 text-blue-600' />
          Signup With Facebook
        </Button>
      </div>

      <div className='my-6'>
        <h1>or</h1>
      </div>
      <div className='flex flex-col gap-4'>
        <Input
          placeholder='Email Address'
          className='w-72'
        />
        <div className='relative'>
          <Input
            placeholder='Password'
            type={showPassword ? 'text' : 'password'}
          />
          <button
            type='button'
            className='absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer'
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <AiFillEyeInvisible className='text-gray-600' />
            ) : (
              <AiFillEye className='text-gray-600' />
            )}
          </button>
        </div>
        <div className='flex justify-center'>
          <h1 className='text-orange-400 text-sm'>Forgot Password</h1>
        </div>
        <Button
          className='rounded-full bg-orange-400 text-white'
          variant={'outline'}
          onClick={handleCLick}
        >
          Login
        </Button>
        <div className='flex justify-center'>
          <h1 className='text-xs'>
            Don't Have An Account?{' '}
            <Link
              href='/auth/signup'
              className='text-orange-400'
            >
              Sign Up
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
