'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import ProfileImage from '../../public/assets/images/usericon.png';
import { FaBookmark } from 'react-icons/fa';

const ApplicantCard = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/employer/employer-dashboard/applicant-profile');
  };
  return (
    <div
      className='border p-4 rounded-lg cursor-pointer'
      onClick={handleClick}
    >
      <div className='flex items-center gap-2'>
        <div className='flex justify-between w-full items-center'>
          <div className='flex gap-2'>
            <Image
              src={ProfileImage}
              alt='Applicant'
              height={50}
              width={50}
              className='rounded-full mb-2'
            />
            <div>
              <h3 className='font-semibold text-black'>Aisha Filoroi</h3>
              <p className='text-sm text-gray-500'>Nairobi, Kenya</p>
            </div>
          </div>
          <div>
            <FaBookmark className='text-orange-400 text-2xl' />
          </div>
        </div>
      </div>
      <p className='text-sm text-gray-500'>
        Hello! We are new company that want to find someone who can help us with
        very interesting job that will in the tech field and. We are new company
        that want
      </p>
      <p className='text text-black font-semibold'>
        Bachelor Deegree, M, 24 years
      </p>
    </div>
  );
};

export default ApplicantCard;
