'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { IoMdArrowRoundBack } from 'react-icons/io';

const JobContentSection = () => {
  const router = useRouter();
  const attachments = [
    { fileName: 'details.pdf', fileSize: '563 kB' },
    { fileName: 'details.pdf', fileSize: '563 kB' },
  ];

  const handleBack = () => {
    router.push('/dashboard');
  };

  return (
    <div className='flex-1 bg-white p-6 h-screen overflow-y-auto'>
      <IoMdArrowRoundBack
        onClick={handleBack}
        className='text-3xl cursor-pointer'
      />
      <h1 className='text-3xl font-bold my-3'>
        Search for a talent for tech startup
      </h1>
      <p className='text-orange-600 font-semibold mb-4'>Fully Funded</p>

      <div className='grid grid-cols-2 gap-4 text-gray-600 mb-6'>
        <div>
          <span className='font-semibold'>Education Level:</span> Diploma
        </div>
        <div>
          <span className='font-semibold'>Industry:</span> Music And Art
        </div>
        <div>
          <span className='font-semibold'>Type Of Opportunity:</span> Volunteer
          Opportunity
        </div>
        <div>
          <span className='font-semibold'>Deadline:</span> 23.02.23
        </div>
      </div>

      <div>
        <h3 className='font-bold mb-2'>Description</h3>
        <p className='mb-4'>
          As a new and ambitious company, we prioritize fostering a
          collaborative and inclusive work environment...
        </p>

        <h4 className='mb-2'>Job Opportunity: More Than a Role</h4>
        <p className='mb-4'>
          The job opportunity we are presenting is not merely a role; it is a
          unique chance to be part of something groundbreaking...
        </p>

        <h4 className='mb-2'>Embracing AI Advancements</h4>
        <p className='my-2'>
          In our relentless pursuit of excellence, we are committed to embracing
          and leveraging the latest advancements in AI to elevate the quality of
          our products and services. We understand that staying abreast of
          technological developments is essential for meeting and exceeding the
          evolving needs of our clients.
        </p>
        <ul className='list-disc ml-5 my-4'>
          <li>
            We stay at the forefront of technological advancements to ensure our
            solutions remain cutting-edge.
          </li>
          <li>
            Our commitment to continuous learning allows us to swiftly
            incorporate new AI developments.
          </li>
        </ul>
      </div>

      <h4 className='font-bold mb-2'>Attached files</h4>
      <div className='space-y-2'>
        {attachments.map((file, index) => (
          <div
            key={index}
            className='flex justify-between items-center bg-gray-100 p-3 rounded-lg'
          >
            <div className='flex items-center'>
              <span className='text-sm font-semibold mr-2'>
                {file.fileName}
              </span>
              <span className='text-xs text-gray-500'>{file.fileSize}</span>
            </div>
            <button className='text-orange-500 text-sm'>Download</button>
          </div>
        ))}
      </div>

      <p className='text-xs text-gray-600 bg-gray-100 mt-20'>
        Rise diligently verifies the authenticity of all opportunities posted on
        our platform. However, we recommend that users exercise due diligence
        and research independently to ensure each opportunity aligns with their
        personal and professional goals. Rise is not responsible for the
        outcomes of engagements with third-party organizations or any
        discrepancies in opportunity details.
      </p>
    </div>
  );
};

export default JobContentSection;
