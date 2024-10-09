'use client';

import React, { useState } from 'react';
import { Field, ErrorMessage, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';

const ProfessionalInfo = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [currentDate, setCurrentDate] = useState<Date | null>(null);
  const { setFieldValue } = useFormikContext();
  const [hasExperience, setHasExperience] = useState(false);

  return (
    <div className='max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-lg'>
      <h1 className='text-center text-2xl font-bold text-gray-900 mb-4'>
        Professional Info
      </h1>

      <div className='mb-4'>
        <label className='block text-gray-700'>
          Level(s) of education attained so far
        </label>
        <Field
          as='select'
          name='education'
          className='w-full mt-2 p-2 border border-gray-300 rounded'
        >
          <option value=''>Select</option>
          <option value='High School'>High School</option>
          <option value='Bachelors'>Bachelors</option>
          <option value='Masters'>Masters</option>
          <option value='PhD'>PhD</option>
        </Field>
        <ErrorMessage
          name='education'
          component='div'
          className='text-red-500 text-sm mt-1'
        />
      </div>
      <div className='mb-4'>
        <label className='flex items-center'>
          <span className='text-gray-700'>Any professional experience?</span>
          <input
            type='checkbox'
            checked={hasExperience}
            onChange={() => setHasExperience(!hasExperience)}
            className='ml-2 toggle-checkbox'
          />
        </label>
      </div>

      {hasExperience && (
        <div className='space-y-4'>
          <div>
            <label className='block text-gray-700'>Position</label>
            <Field
              name='position'
              placeholder='Position'
              className='w-full mt-2 p-2 border border-gray-300 rounded'
            />
            <ErrorMessage
              name='position'
              component='div'
              className='text-red-500 text-sm mt-1'
            />
          </div>

          <div>
            <label className='block text-gray-700'>Company Name</label>
            <Field
              name='companyName'
              placeholder='Company name'
              className='w-full mt-2 p-2 border border-gray-300 rounded'
            />
            <ErrorMessage
              name='companyName'
              component='div'
              className='text-red-500 text-sm mt-1'
            />
          </div>

          <div className='flex space-x-2'>
            <div className='flex-1'>
              <label className='block text-gray-700'>Start Date</label>
              <div className='flex items-center border border-gray-300 rounded'>
                <Field name='StartDate'>
                  {({ field }: { field: { value: string } }) => (
                    <DatePicker
                      selected={field.value ? new Date(field.value) : null}
                      onChange={date => setFieldValue('StartDate', date)}
                      dateFormat='MM/dd/yyyy'
                      placeholderText='mm/dd/yyyy'
                      className='border-0 p-1 flex-grow text-sm'
                    />
                  )}
                </Field>
              </div>
            </div>
            <div className='flex-1'>
              <label className='block text-gray-700'>Current Date</label>
              <div className='flex items-center border border-gray-300 rounded'>
                <Field name='EndDate'>
                  {({ field }: { field: { value: string } }) => (
                    <DatePicker
                      selected={field.value ? new Date(field.value) : null}
                      onChange={date => setFieldValue('EndDate', date)}
                      dateFormat='MM/dd/yyyy'
                      placeholderText='mm/dd/yyyy'
                      className='border-0 p-1 flex-grow text-sm'
                    />
                  )}
                </Field>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfessionalInfo;
