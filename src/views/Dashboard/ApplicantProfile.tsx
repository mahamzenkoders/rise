import { applicant } from '@/app/applicationValues/applicationvalues';
import ApplicantContentSection from '@/components/Applicant/ApplicantContentSection';
import ApplicantProfileSideBar from '@/components/Applicant/ApplicantSideBar';
import React from 'react';

const ApplicantProfileView = () => {
  return (
    <div className='flex'>
      <ApplicantProfileSideBar applicant={applicant} />
      <div>
        <ApplicantContentSection applicant={applicant} />
      </div>
    </div>
  );
};

export default ApplicantProfileView;
