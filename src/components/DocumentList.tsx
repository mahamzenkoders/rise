'use client';
import React from 'react';
import { Button } from './ui/button';

interface Document {
  name: string;
  size: string;
}

interface DocumentsListProps {
  documents: Document[];
}

const DocumentsList: React.FC<DocumentsListProps> = ({ documents }) => {
  return (
    <div className='p-6'>
      <h2 className='text-2xl font-semibold mb-4'>Supporting Documents</h2>
      <p className='mb-6 text-gray-600'>
        Enhance your profile by attaching key documents such as your CV,
        academic certificates, identification papers, professional portfolio, or
        any other pertinent documents.
      </p>

      <div className='bg-white p-4 rounded-lg shadow-sm mb-6'>
        <ul className='space-y-4'>
          {documents.map((doc, index) => (
            <li
              key={index}
              className='flex justify-between items-center p-4 bg-gray-100 rounded-md'
            >
              <div className='flex gap-3'>
                <span>{doc.name}</span>
                <span className='text-gray-500'>{doc.size}</span>
              </div>
              <button className='text-orange-500'>Download</button>
            </li>
          ))}
        </ul>
        <Button className='bg-orange-500 flex mt-8 text-white py-2 px-4 rounded-md'>
          ADD DOCUMENT
        </Button>
      </div>
    </div>
  );
};

export default DocumentsList;
