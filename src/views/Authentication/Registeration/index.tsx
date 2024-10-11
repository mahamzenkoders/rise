'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { FC, useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { SiFacebook } from 'react-icons/si';
import { useRouter } from 'next/navigation';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { SignValuesInterface } from '@/types/Interfaces/signup.interface';
import { SignUplValues } from '@/app/FormValues/SignUpValues';
import { SignUpSchema } from '@/schema/signup.schema';

interface IRegistrationViewProps {}

const RegistrationView: FC<IRegistrationViewProps> = () => {
  const [active, setActive] = useState<string>('rising');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter();

  const handleClick = () => {
    router.push('/auth/onboard');
  };

  const handleSubmit = (values: SignValuesInterface) => {
    console.log(values);
    handleClick();
  };

  return (
    <div className='flex justify-center items-center flex-col'>
      <div className='flex justify-between my-2'>
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
      <h1 className='font-archivo text-xl'>Sign Up</h1>

      <div className='mt-3 flex flex-col w-72'>
        <Button
          className='rounded-full mt-4 bg-[#F8F8F8]'
          variant={'outline'}
        >
          <FcGoogle className='m-2' />
          Signup With Google
        </Button>
        <Button
          className='rounded-full mt-3 bg-[#F8F8F8]'
          variant={'outline'}
        >
          <SiFacebook className='m-2 text-blue-600' />
          Signup With Facebook
        </Button>
      </div>

      <div className='my-2'>
        <h1>or</h1>
      </div>

      <Formik
        initialValues={SignUplValues}
        validationSchema={SignUpSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form className='flex flex-col gap-2 w-72'>
            <Field
              name='firstName'
              placeholder='First Name'
              className='w-full p-2 border border-gray-300'
            />
            <ErrorMessage
              name='firstName'
              component='div'
              className='text-red-500 text-sm'
            />

            <Field
              name='lastName'
              placeholder='Last Name'
              className='w-full p-2 border border-gray-300'
            />
            <ErrorMessage
              name='lastName'
              component='div'
              className='text-red-500 text-sm'
            />

            <Field
              name='email'
              placeholder='Email Address'
              className='w-full p-2 border border-gray-300'
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
                className='w-full p-2 border border-gray-300'
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

            <Button
              type='submit'
              className='rounded-full bg-orange-400 text-white'
              variant={'outline'}
            >
              Sign Up
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
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationView;
