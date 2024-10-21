import React from 'react';

const CompanyInfoView = () => {
  return (
    <div className='max-w-4xl p-8 bg-white shadow-md rounded-lg'>
      <h2 className='text-2xl font-bold mb-6'>Company Information</h2>

      <form className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='md:col-span-2 flex items-center space-x-4'>
          <div className='w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 font-bold'>
            W
          </div>
          <button className='text-orange-500 text-sm'>Change Photo</button>
        </div>

        <div>
          <label className='block mb-2 font-medium'>Company Name *</label>
          <input
            type='text'
            className='w-full border border-gray-300 p-2 rounded'
            placeholder='Webbbin'
          />
        </div>

        <div>
          <label className='block mb-2 font-medium'>Email Address *</label>
          <input
            type='email'
            className='w-full border border-gray-300 p-2 rounded'
            placeholder='Webbbin.2269'
          />
        </div>

        <div>
          <label className='block mb-2 font-medium'>Year Established *</label>
          <input
            type='date'
            className='w-full border border-gray-300 p-2 rounded'
          />
        </div>

        <div>
          <label className='block mb-2 font-medium'>Phone Number *</label>
          <input
            type='tel'
            className='w-full border border-gray-300 p-2 rounded'
            placeholder='Webbbin.2269'
          />
          <p className='text-xs text-gray-400 mt-1'>
            Confidential Contact: Your email and phone number won’t be visible
            to other users
          </p>
        </div>

        <div>
          <label className='block mb-2 font-medium'>About Company *</label>
          <textarea
            className='w-full border border-gray-300 p-2 rounded'
            rows={3}
            placeholder='Webbbin design agency'
          />
        </div>

        <div>
          <label className='block mb-2 font-medium'>Number of Employees</label>
          <input
            type='number'
            className='w-full border border-gray-300 p-2 rounded'
            placeholder='2'
          />
        </div>

        <div className='flex space-x-4'>
          <div className='w-1/2'>
            <label className='block mb-2 font-medium'>Location *</label>
            <select className='w-full border border-gray-300 p-2 rounded'>
              <option>Country</option>
            </select>
          </div>
          <div className='w-1/2'>
            <label className='block mb-2 font-medium'>&nbsp;</label>
            <select className='w-full border border-gray-300 p-2 rounded'>
              <option>City</option>
            </select>
          </div>
        </div>

        <div>
          <label className='block mb-2 font-medium'>Website URL</label>
          <input
            type='url'
            className='w-full border border-gray-300 p-2 rounded'
            placeholder='www.website.com'
          />
        </div>

        <div>
          <label className='block mb-2 font-medium'>LinkedIn</label>
          <input
            type='url'
            className='w-full border border-gray-300 p-2 rounded'
            placeholder='www.linkedin.website.com'
          />
        </div>

        <div>
          <label className='block mb-2 font-medium'>Account Name *</label>
          <input
            type='text'
            className='w-full border border-gray-300 p-2 rounded'
            placeholder='Webbbin.2269'
          />
        </div>

        <div>
          <label className='block mb-2 font-medium'>Instagram</label>
          <input
            type='url'
            className='w-full border border-gray-300 p-2 rounded'
            placeholder='www.instagram.website.com'
          />
        </div>

        <div className='md:col-span-2 flex justify-between mt-6'>
          <button
            type='button'
            className='px-6 py-2 border border-gray-400 text-gray-500 rounded'
          >
            Cancel
          </button>
          <button
            type='submit'
            className='px-6 py-2 bg-orange-500 text-white rounded'
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CompanyInfoView;
