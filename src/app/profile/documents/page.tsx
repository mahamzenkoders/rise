'use client';
import { documents } from '@/app/documentValues/documentValues';
import DocumentsList from '@/components/DocumentList';
import NoDocuments from '@/components/NoDocumentPage';
import React from 'react';

const DocumentsPage: React.FC = () => {
  return (
    <div className='h-full'>
      {documents.length > 0 ? (
        <DocumentsList documents={documents} />
      ) : (
        <NoDocuments />
      )}
    </div>
  );
};

export default DocumentsPage;
