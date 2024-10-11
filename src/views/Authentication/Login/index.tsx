'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FcGoogle } from 'react-icons/fc';
import { SiFacebook } from 'react-icons/si';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { LoginValuesInterface } from '@/types/Interfaces/login.interface';
import { LoginValues } from '@/app/FormValues/LoginValues';
import { loginSchema } from '@/schema/login.schema';

const LoginPage = () => {
  const [active, setActive] = useState<string>('rising');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const router = useRouter();

  const handleCLick = () => {
    router.push('/auth/onboard');
  };

  const handleSubmit = (values: LoginValuesInterface) => {
    console.log(values);
    router.push('/auth/onboard');
    handleCLick();
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

      <div className='my-4'>
        <h1>or</h1>
      </div>

      <Formik
        initialValues={LoginValues}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        <Form className='flex flex-col gap-2 overflow-hidden'>
          <Field
            name='email'
            placeholder='Email Address'
            className='w-72 p-3 border border-gray-300'
          />
          <ErrorMessage
            name='email'
            component='div'
            className='text-red-500 text-sm'
          />

          <div className='relative'>
            <Field
              name='password'
              placeholder='Password'
              type={showPassword ? 'text' : 'password'}
              className='w-72 p-3 border border-gray-300'
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
            <ErrorMessage
              name='password'
              component='div'
              className='text-red-500 text-sm'
            />
          </div>

          <div className='flex justify-center'>
            <h1 className='text-orange-400 text-sm'>Forgot Password</h1>
          </div>
          <Button
            className='rounded-full bg-orange-400 text-white'
            variant={'outline'}
            type='submit'
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
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
