import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import React from 'react';
import { Button } from '../ui/button';

const ResetPassword = () => {
  const { setFieldValue } = useFormikContext();

  return (
    <div className='flex flex-col items-center p-4'>
      <h2 className='text-lg font-bold'>Reset Your Password</h2>
      <p className='text-sm text-gray-600 mb-4'>
        Please enter your new password below.
      </p>

      <div className='my-4 w-72'>
        <label className='block mb-1 text-gray-700'>New Password</label>
        <Field
          name='newpass.password'
          type='password'
          placeholder='Enter your new password'
          className='placeholder:text-gray-400 text-left block h-10 w-full rounded-md border-0 py-1 px-1 bg-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm'
        />
        <ErrorMessage
          name='newpass.password'
          component='div'
          className='text-red-500 text-sm mt-1'
        />
      </div>

      <div className='my-4 w-72'>
        <label className='block mb-1 text-gray-700'>Confirm Password</label>
        <Field
          name='newpass.confirmPassword'
          type='password'
          placeholder='Confirm your new password'
          className='placeholder:text-gray-400 text-left block h-10 w-full rounded-md border-0 py-1 px-1 bg-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm'
        />
        <ErrorMessage
          name='newpass.confirmPassword'
          component='div'
          className='text-red-500 text-sm mt-1'
        />
      </div>
    </div>
  );
};

export default ResetPassword;
