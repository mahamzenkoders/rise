'use client';

import { Applicant } from '@/types/Interfaces/applicant.interface';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useRouter } from 'next/navigation';

const ApplicantContentSection = ({ applicant }: { applicant: Applicant }) => {
  const router = useRouter();
  const handleBack = () => {
    router.push('/employer/employer-dashboard');
  };
  return (
    <div className='p-6'>
      <div>
        <IoMdArrowRoundBack
          onClick={handleBack}
          className='text-3xl cursor-pointer'
        />
      </div>
      <div className='my-6 px-6'>
        <h3 className='text-xl font-bold'>Bio</h3>
        <p className='text-gray-600 mt-4'>{applicant.bio}</p>
      </div>

      <div className='mb-6 px-6'>
        <h3 className='text-xl font-bold'>Professional Experience</h3>
        <ul className='mt-4 space-y-4'>
          {applicant.experience.map((job, index) => (
            <li
              key={index}
              className='flex items-start gap-2'
            >
              <div className='text-orange-500 mt-1 '>•</div>
              <div>
                <h4 className='font-bold'>{job.company}</h4>
                <p className='text-gray-500'>{job.position}</p>
                <p className='text-gray-400 text-sm'>
                  {job.startDate} - {job.endDate}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className='text-xl font-bold px-6'>Documents and Attachments</h3>
        <ul className='mt-4 space-y-4 px-6'>
          {applicant.documents.map((doc, index) => (
            <li
              key={index}
              className='flex justify-between items-center bg-gray-100 p-2 rounded'
            >
              <span>{doc.name}</span>
              <a
                href={doc.url}
                download
                className='text-orange-500'
              >
                Download
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ApplicantContentSection;
