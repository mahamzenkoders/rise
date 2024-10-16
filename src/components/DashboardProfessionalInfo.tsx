'use client';
import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import { Input } from './ui/input';
import { useRouter } from 'next/navigation';
import { IoMdArrowBack } from 'react-icons/io';

const DashBoardProfessionalInfo = () => {
  const [positions, setPositions] = useState([{}]);
  const [hasExperience, setHasExperience] = useState(false);
  const router = useRouter();

  const addPosition = () => {
    setPositions([...positions, {}]);
  };

  const handleClick = () => {
    router.push('/profile');
  };

  return (
    <div className='p-6'>
      <IoMdArrowBack
        onClick={handleClick}
        className='lg:hidden block text-5xl my-5 '
      />
      <h2 className='text-2xl font-semibold mb-4'>Education / Experience</h2>

      <div className='mb-6'>
        <label
          htmlFor='education'
          className='block mb-2 text-lg font-medium'
        >
          Education
        </label>
        <select
          id='education'
          className='w-[50%] border border-gray-300 rounded-md p-3'
        >
          <option>Level(s) of education attained so far</option>
          <option>High School</option>
          <option>Bachelor's</option>
          <option>Master's</option>
          <option>PhD</option>
        </select>
      </div>

      <div className='flex items-center mb-6 space-x-2'>
        <label className='mr-4 text-lg font-medium'>
          Any professional experience?
        </label>
        <Switch
          onClick={() => {
            setHasExperience(!hasExperience);
          }}
          id='hasExperience'
          checked={hasExperience}
          className={`bg-orange-400  relative inline-flex h-6 w-11 items-center rounded-full`}
        ></Switch>
      </div>

      {hasExperience && (
        <>
          {positions.map((_, index) => (
            <div
              key={index}
              className='border border-gray-300 bg-gray-100 rounded-lg p-4 mb-4'
            >
              <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div>
                  <label className='block text-lg font-medium mb-2'>
                    Position
                  </label>
                  <input
                    type='text'
                    placeholder='Position'
                    className='w-full border border-gray-300 rounded-md p-3'
                  />
                </div>

                <div>
                  <label className='block text-lg font-medium mb-2'>
                    Company Name
                  </label>
                  <input
                    type='text'
                    placeholder='Company name'
                    className='w-full border border-gray-300 rounded-md p-3'
                  />
                </div>

                <div>
                  <label className='block text-lg font-medium mb-2'>
                    Start Date
                  </label>
                  <Input
                    type='date'
                    className='w-full border border-gray-300 rounded-md p-3'
                  />
                </div>

                <div>
                  <label className='block text-lg font-medium mb-2'>
                    End Date
                  </label>
                  <Input
                    type='date'
                    className='w-full border border-gray-300 rounded-md p-3'
                  />
                </div>
              </div>
            </div>
          ))}

          <div className='flex justify-end'>
            <Button
              onClick={addPosition}
              className='flex items-center text-orange-500 font-medium'
            >
              <AiOutlinePlus className='mr-2' />
              Add one more position
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default DashBoardProfessionalInfo;
