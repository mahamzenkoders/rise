'use client';

import React, { useState } from 'react';
import ProfileImage from '../../../public/assets/images/Avatar.png';
import Image from 'next/image';
import DatePicker from 'react-datepicker';
import { FaCalendarAlt } from 'react-icons/fa';
import { IoMdArrowBack } from 'react-icons/io';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

const PersonalInfoView = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    phone: '',
    email: '',
    gender: '',
    country: '',
    city: '',
  });

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const router = useRouter();

  const handleClick = () => {
    router.push('/profile');
  };

  return (
    <div className='flex-1 bg-white p-8 h-screen  overflow-y-auto'>
      <IoMdArrowBack
        onClick={handleClick}
        className='lg:hidden block text-5xl my-5 '
      />
      <div className='flex items-center mb-6'>
        <Image
          src={ProfileImage}
          alt='Profile'
          className='w-16 h-16 rounded-full mr-4'
        />
        <div>
          <h2 className='text-xl font-bold'>Taras Vlasenko</h2>
          <button className='text-orange-500 text-sm'>Change Photo</button>
        </div>
      </div>

      <div className='grid md:grid-cols-6 grid:cols:3 gap-4 mb-4'>
        <div>
          <label className='block text-sm font-semibold mb-2'>First Name</label>
          <input
            type='text'
            placeholder='First Name'
            name='firstName'
            value={formData.firstName}
            onChange={handleInputChange}
            className='w-full p-2 border rounded'
          />
        </div>
        <div>
          <label className='block text-sm font-semibold mb-2'>Last Name</label>
          <input
            type='text'
            placeholder='Last Name'
            name='lastName'
            value={formData.lastName}
            onChange={handleInputChange}
            className='w-full p-2 border rounded'
          />
        </div>
      </div>

      <div className='grid grid-cols-1 w-1/2 gap-4 mb-4'>
        <div>
          <label className='block text-sm font-semibold mb-2'>
            Date of Birth
          </label>
          <div className='flex items-center border rounded'>
            <span className='p-1 cursor-pointer'>
              <FaCalendarAlt className='text-orange-400' />
            </span>
            <DatePicker
              dateFormat='MM/dd/yyyy'
              placeholderText='mm/dd/yyyy'
              className='border-0 p-1 flex-grow text-sm'
            />
          </div>
        </div>
        <div>
          <label className='block text-sm font-semibold mb-2'>Phone</label>
          <input
            placeholder='+92 (888) 3456 755'
            type='text'
            name='phone'
            value={formData.phone}
            onChange={handleInputChange}
            className='w-full p-2 border rounded'
          />
        </div>
      </div>

      <div className='grid grid-cols-6 gap-4 mb-4 items-center'>
        <div>
          <label className='block text-sm font-semibold mb-2'>Location*</label>
          <select
            name='country'
            value={formData.country}
            onChange={handleInputChange}
            className='w-full p-2 border rounded'
          >
            <option value=''>Country</option>
            <option value='Nigeria'>Pakistan</option>
            <option value='Kenya'>India</option>
            <option value='Nigeria'>Nigeria</option>
            <option value='Kenya'>Kenya</option>
            <option value='Kenya'>USA</option>
            <option value='Kenya'>Canada</option>
            <option value='Kenya'>Nepal</option>
            <option value='Kenya'>Bangladesh</option>
            <option value='Kenya'>China</option>
          </select>
        </div>
        <div>
          <label className='block text-sm font-semibold mb-2'>City*</label>
          <select
            name='city'
            value={formData.city}
            onChange={handleInputChange}
            className='w-full p-2 border rounded'
          >
            <option value=''>City</option>
            <option value='Lagos'>Karachi</option>
            <option value='Nairobi'>Lahore</option>
            <option value='Lagos'>Islamabad</option>
            <option value='Nairobi'>Washington</option>
            <option value='Lagos'>Toronto</option>
            <option value='Nairobi'>Mumbai</option>
            <option value='Lagos'>Lagos</option>
            <option value='Nairobi'>Nairobi</option>
          </select>
        </div>
      </div>

      <div className='mb-4 w-1/2'>
        <label className='block text-sm font-semibold mb-2'>E-mail</label>
        <input
          type='email'
          name='email'
          placeholder='example@gmail.com'
          value={formData.email}
          onChange={handleInputChange}
          className='w-full p-2 border rounded'
        />
      </div>

      <div className='mb-6'>
        <label className='block text-sm font-semibold mb-2'>Gender</label>
        <div className='flex space-x-4'>
          <label className='flex items-center'>
            <input
              type='radio'
              name='gender'
              value='Male'
              checked={formData.gender === 'Male'}
              onChange={handleInputChange}
              className='mr-2'
            />
            Male
          </label>
          <label className='flex items-center'>
            <input
              type='radio'
              name='gender'
              value='Female'
              checked={formData.gender === 'Female'}
              onChange={handleInputChange}
              className='mr-2'
            />
            Female
          </label>
          <label className='flex items-center'>
            <input
              type='radio'
              name='gender'
              value='Other'
              checked={formData.gender === 'Other'}
              onChange={handleInputChange}
              className='mr-2'
            />
            Other
          </label>
        </div>
      </div>

      <div className='flex justify-start space-x-8'>
        <Button
          variant={'outline'}
          className='py-4 px-10 bg-gray-300 text-gray-700 rounded-full'
        >
          Cancel
        </Button>
        <Button
          variant={'outline'}
          className='py-4 px-10 bg-orange-500 text-white rounded-full'
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default PersonalInfoView;
