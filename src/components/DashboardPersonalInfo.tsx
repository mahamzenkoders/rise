'use client';

import React, { useState } from 'react';

const PersonalInfoForm = () => {
  const [formData, setFormData] = useState({
    firstName: 'Taras',
    lastName: 'Vlasenko',
    dateOfBirth: '',
    phone: '+234 435 687 11',
    email: 'kalenskyi.ui@gmail.com',
    gender: 'Male',
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

  return (
    <div className='flex-1 bg-white p-8 h-screen overflow-y-auto'>
      <div className='flex items-center mb-6'>
        <img
          src='/path/to/avatar.png'
          alt='Profile'
          className='w-16 h-16 rounded-full mr-4'
        />
        <div>
          <h2 className='text-xl font-bold'>Taras Vlasenko</h2>
          <button className='text-orange-500 text-sm'>Change Photo</button>
        </div>
      </div>

      <div className='grid grid-cols-2 gap-4 mb-4'>
        <div>
          <label className='block text-sm font-semibold mb-2'>First Name</label>
          <input
            type='text'
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
            name='lastName'
            value={formData.lastName}
            onChange={handleInputChange}
            className='w-full p-2 border rounded'
          />
        </div>
      </div>

      <div className='grid grid-cols-2 gap-4 mb-4'>
        <div>
          <label className='block text-sm font-semibold mb-2'>
            Date of Birth
          </label>
          <input
            type='text'
            name='dateOfBirth'
            value={formData.dateOfBirth}
            placeholder='mm/dd/yyyy'
            onChange={handleInputChange}
            className='w-full p-2 border rounded'
          />
        </div>
        <div>
          <label className='block text-sm font-semibold mb-2'>Phone</label>
          <input
            type='text'
            name='phone'
            value={formData.phone}
            onChange={handleInputChange}
            className='w-full p-2 border rounded'
          />
        </div>
      </div>

      <div className='grid grid-cols-2 gap-4 mb-4'>
        <div>
          <label className='block text-sm font-semibold mb-2'>Location*</label>
          <select
            name='country'
            value={formData.country}
            onChange={handleInputChange}
            className='w-full p-2 border rounded'
          >
            <option value=''>Country</option>
            <option value='Nigeria'>Nigeria</option>
            <option value='Kenya'>Kenya</option>
          </select>
        </div>
        <div>
          <select
            name='city'
            value={formData.city}
            onChange={handleInputChange}
            className='w-full p-2 border rounded'
          >
            <option value=''>City</option>
            <option value='Lagos'>Lagos</option>
            <option value='Nairobi'>Nairobi</option>
          </select>
        </div>
      </div>

      <div className='mb-4'>
        <label className='block text-sm font-semibold mb-2'>E-mail</label>
        <input
          type='email'
          name='email'
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

      <div className='flex justify-end space-x-4'>
        <button className='py-2 px-6 bg-gray-300 text-gray-700 rounded'>
          Cancel
        </button>
        <button className='py-2 px-6 bg-orange-500 text-white rounded'>
          Save
        </button>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
