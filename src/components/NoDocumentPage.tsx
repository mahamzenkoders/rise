'use client';
import Image from 'next/image';
import React from 'react';
import documentImg from '../../public/assets/images/Document.png';
import { Button } from './ui/button';

const NoDocuments: React.FC = () => {
  return (
    <div className='p-4'>
      <h2 className='text-2xl font-semibold mb-4'>Supporting Documents</h2>
      <div className='flex flex-col items-center justify-center h-screen'>
        <h2 className='text-2xl font-semibold mb-4'>
          You have no documents yet.
        </h2>
        <p className='mb-6 text-gray-600'>
          You can attach a CV, Academic credentials, ID documents, portfolio, or
          other relevant documents.
        </p>
        <Image
          src={documentImg}
          alt='No documents'
          className='w-24 h-24 mb-4'
        />
        <Button className='bg-orange-500 text-white py-2 px-7 rounded-full'>
          ADD DOCUMENT
        </Button>
      </div>
    </div>
  );
};

export default NoDocuments;
