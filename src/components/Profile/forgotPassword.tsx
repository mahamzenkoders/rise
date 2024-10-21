import { ErrorMessage, Field } from 'formik';
import React from 'react';
import { Label } from '../ui/label';

const Forgot = () => {
  return (
    <div className='flex items-center gap-2 flex-col mt-4 w-72'>
      <h1 className='text-lg'>Forgot Password</h1>
      <h2 className='text-sm'>
        Don’t worry! It happens. Please enter the email associated with your
        account.
      </h2>
      <div className='my-4 w-72'>
        <Label className='my-4'>E-mail</Label>
        <Field
          name='f_email'
          placeholder='Enter Your Email'
          className='placeholder:text-gray-400 text-left block h-10 w-full rounded-md border-0 py-1 px-1 bg-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm'
        />
        <ErrorMessage
          name='f_email'
          component='div'
          className='text-red-500 text-sm mt-1'
        ></ErrorMessage>
      </div>
    </div>
  );
};

export default Forgot;
