import { documents } from '@/app/documentValues/documentValues';
import DocumentsList from '@/components/DashBoardProfile/DocumentList';
import NoDocuments from '@/components/DashBoardProfile/NoDocumentPage';
import React from 'react';

const DocumentView = () => {
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

export default DocumentView;
