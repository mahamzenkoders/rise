'use client';

import React, { useState } from 'react';
import { Field, ErrorMessage, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from './ui/button';
import { Experience, formValues } from '@/types/Interfaces/form.values';

const ProfessionalInfo: React.FC = () => {
  const { values, setFieldValue, errors, setErrors } =
    useFormikContext<formValues>();
  const [hasExperience, setHasExperience] = useState(false);

  const addExperience = () => {
    // Validation before adding new experience
    const invalidExperience = values.experiences.find(
      exp => !exp.position || !exp.companyName,
    );

    if (invalidExperience) {
      alert(
        'Please fill in all required fields before adding another experience.',
      );
      return;
    }

    const newExperience: Experience = {
      position: '',
      companyName: '',
      startDate: null,
      endDate: null,
    };

    setFieldValue('experiences', [...values.experiences, newExperience]);
  };

  const handleExperienceChange = (
    index: number,
    field: keyof Experience,
    value: string | null,
  ) => {
    const updatedExperience = {
      ...values.experiences[index],
      [field]: value,
    };
    const updatedExperiences = [...values.experiences];
    updatedExperiences[index] = updatedExperience;
    setFieldValue('experiences', updatedExperiences);
  };

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
            onChange={() => {
              setHasExperience(!hasExperience);
              if (!hasExperience) {
                addExperience(); // Add initial experience if checked
              }
            }}
            className='ml-2 toggle-checkbox'
          />
        </label>
      </div>

      {hasExperience && (
        <div className='max-h-96 overflow-y-auto'>
          {values.experiences.map((experience, index) => (
            <div
              key={index}
              className='mb-4'
            >
              <h2 className='text-lg font-semibold mb-2'>
                Position {index + 1}
              </h2>
              <div className='space-y-4'>
                <div>
                  <label className='block text-gray-700'>Position</label>
                  <Field
                    name={`experiences[${index}].position`}
                    placeholder='Position'
                    className='w-full mt-2 p-2 border border-gray-300 rounded'
                    onChange={(e: { target: { value: string | null } }) =>
                      handleExperienceChange(index, 'position', e.target.value)
                    }
                  />
                  <ErrorMessage
                    name={`experiences[${index}].position`}
                    component='div'
                    className='text-red-500 text-sm mt-1'
                  />
                </div>

                <div>
                  <label className='block text-gray-700'>Company Name</label>
                  <Field
                    name={`experiences[${index}].companyName`}
                    placeholder='Company name'
                    className='w-full mt-2 p-2 border border-gray-300 rounded'
                    onChange={(e: { target: { value: string | null } }) =>
                      handleExperienceChange(
                        index,
                        'companyName',
                        e.target.value,
                      )
                    }
                  />
                  <ErrorMessage
                    name={`experiences[${index}].companyName`}
                    component='div'
                    className='text-red-500 text-sm mt-1'
                  />
                </div>

                <div className='flex space-x-2'>
                  <div className='flex-1'>
                    <label className='block text-gray-700'>Start Date</label>
                    <Field name={`experiences[${index}].startDate`}>
                      {({ field }: { field: { value: string | null } }) => (
                        <DatePicker
                          selected={field.value ? new Date(field.value) : null}
                          onChange={date =>
                            handleExperienceChange(
                              index,
                              'startDate',
                              date ? date.toISOString() : null,
                            )
                          }
                          dateFormat='MM/dd/yyyy'
                          placeholderText='mm/dd/yyyy'
                          className='border-0 p-1 flex-grow text-sm'
                        />
                      )}
                    </Field>
                  </div>
                  <div className='flex-1'>
                    <label className='block text-gray-700'>End Date</label>
                    <Field name={`experiences[${index}].endDate`}>
                      {({ field }: { field: { value: string | null } }) => (
                        <DatePicker
                          selected={field.value ? new Date(field.value) : null}
                          onChange={date =>
                            handleExperienceChange(
                              index,
                              'endDate',
                              date ? date.toISOString() : null,
                            )
                          }
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
          ))}

          <div className='flex justify-center'>
            <Button
              variant={'outline'}
              className='text-orange-500 text-sm mt-4'
              onClick={addExperience}
            >
              Add one more experience
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfessionalInfo;
