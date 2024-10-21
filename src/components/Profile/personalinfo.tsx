'use client';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';
import { Label } from '../ui/label';
import { ErrorMessage, Field, useFormikContext } from 'formik';

const ProfileInfo = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const { setFieldValue } = useFormikContext();
  return (
    <div className='flex items-center flex-col'>
      <h1 className='font-archivo text-xl'>Profile Info</h1>
      <div className='flex items-center flex-col my-2 gap-2 w-full'>
        <Avatar>
          <AvatarFallback className='bg-gray-100 border border-gray-300 text-orange-400'>
            TV
          </AvatarFallback>
        </Avatar>
        <h1 className='text-xs'>
          <span className='text-orange-400'>Upload</span> a professional photo
          of yourself
        </h1>
      </div>
      <div className='flex flex-col gap-2 w-[90%]'>
        <div>
          <Label>Date Of Birth</Label>
          <div className='flex items-center border rounded'>
            <span className='p-1 cursor-pointer'>
              <FaCalendarAlt className='text-orange-400' />
            </span>
            <Field name='dateOfBirth'>
              {({ field }: { field: { value: string } }) => (
                <DatePicker
                  selected={field.value ? new Date(field.value) : null}
                  onChange={date => setFieldValue('dateOfBirth', date)}
                  dateFormat='MM/dd/yyyy'
                  placeholderText='mm/dd/yyyy'
                  className='border-0 p-1 flex-grow text-sm'
                />
              )}
            </Field>
            <ErrorMessage
              name='dateOfBirth'
              component='div'
              className='text-red-500 text-sm mt-1'
            ></ErrorMessage>
          </div>
        </div>
        <div className='flex gap-2'>
          <div className='flex-1'>
            <Label>Location</Label>
            <Field
              name='location'
              placeholder='Your Country'
              className='placeholder:text-gray-400 text-left block h-10 w-full rounded-md border-0 py-1 px-1 bg-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm'
            />
            <ErrorMessage
              name='location'
              component='div'
              className='text-red-500 text-sm mt-1'
            ></ErrorMessage>
          </div>
          <div className='flex-1'>
            <Label>City</Label>
            <Field
              name='city'
              placeholder='Your City'
              className='placeholder:text-gray-400 text-left block h-10 w-full rounded-md border-0 py-1 px-1 bg-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm'
            />
            <ErrorMessage
              name='city'
              component='div'
              className='text-red-500 text-sm mt-1'
            ></ErrorMessage>
          </div>
        </div>
        <div>
          <Label>E-mail</Label>
          <Field
            name='email'
            placeholder='Your Email'
            className='placeholder:text-gray-400 text-left block h-10 w-full rounded-md border-0 py-1 px-1 bg-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm'
          />
          <ErrorMessage
            name='email'
            component='div'
            className='text-red-500 text-sm mt-1'
          ></ErrorMessage>
        </div>
        <div>
          <Label>Phone Number</Label>
          <Field
            name='phoneNo'
            placeholder='Your Phone Number'
            className='placeholder:text-gray-400 text-left block h-10 w-full rounded-md border-0 py-1 px-1 bg-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm'
          />
          <ErrorMessage
            name='phoneNo'
            component='div'
            className='text-red-500 text-sm mt-1'
          ></ErrorMessage>
        </div>
        <div>
          <Label>Gender</Label>
          <div className='flex gap-2'>
            <div>
              <Field
                type='radio'
                className='text-orange-400 focus:ring-orange-500'
                name='gender'
                value='female'
                id='gender-female'
              />
              <Label
                htmlFor='gender-female'
                className='ml-1 text-sm'
              >
                Female
              </Label>
            </div>
            <div>
              <Field
                type='radio'
                name='gender'
                value='male'
                id='gender-male'
                className='text-orange-400 focus:ring-orange-500'
              />
              <Label
                htmlFor='gender-male'
                className='ml-1 text-sm'
              >
                Male
              </Label>
            </div>
            <div>
              <Field
                type='radio'
                name='gender'
                value='other'
                id='gender-other'
                className='text-orange-400 focus:ring-orange-500'
              />
              <Label
                htmlFor='gender-other'
                className='ml-1 text-sm'
              >
                Other
              </Label>
              <ErrorMessage
                name='gender'
                component='div'
                className='text-red-500 text-sm mt-1'
              ></ErrorMessage>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
