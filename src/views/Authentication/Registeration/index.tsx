'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { FC, Fragment, useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { SiFacebook } from 'react-icons/si';
import { useRouter } from 'next/navigation';

interface IRegistrationViewProps {}

const RegistrationView: FC<IRegistrationViewProps> = () => {
  const [active, setActive] = useState<string>('rising');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter();

  const handleClick = () => {
    router.push('/auth/onboard');
  };
  return (
    <div className='flex justify-center items-center flex-col'>
      <div className='flex justify-between my-5'>
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
      <h1 className='font-archivo text-2xl'>Sign Up</h1>
      <div className='mt-3 flex flex-col'>
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

      <div className='my-4'>
        <h1>or</h1>
      </div>
      <div className='flex flex-col gap-3'>
        <Input placeholder='First Name' />
        <Input placeholder='Last Name' />
        <Input placeholder='Email Address' />
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
        <Button
          onClick={handleClick}
          className='rounded-full bg-orange-400 text-white'
          variant={'outline'}
        >
          SIgn Up
        </Button>
        <div className='flex justify-center'>
          <h1 className='text-xs'>
            Have An Account?{' '}
            <Link
              href='/auth/login'
              className='text-orange-400'
            >
              Login
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default RegistrationView;
