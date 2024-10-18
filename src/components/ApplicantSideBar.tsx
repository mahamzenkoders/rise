import { Applicant } from '@/types/Interfaces/applicant.interface';
import Image from 'next/image';
import ProfileImage from '../../public/assets/images/usericon.png';

const ApplicantProfileSideBar = ({ applicant }: { applicant: Applicant }) => {
  return (
    <div className='w-full p-6 bg-gray-100 h-screen border-r xl:block hidden'>
      <div className='flex flex-col items-center'>
        <Image
          src={ProfileImage}
          alt='Applicant'
          height={80}
          width={80}
          className='rounded-full mb-4'
        />
        <h2 className='text-lg font-bold'>{applicant.name}</h2>
        <p className='text-gray-500'>{applicant.location}</p>
        <p className='text-gray-500'>{`${applicant.degree}, ${applicant.gender}, ${applicant.age} Years`}</p>

        <div className='flex flex-wrap justify-center gap-2 my-4'>
          {applicant.tags.map((tag, index) => (
            <span
              key={index}
              className='px-2 py-1 bg-orange-200 rounded-full text-xs'
            >
              {tag}
            </span>
          ))}
        </div>

        <div className='my-4'>
          {applicant.jobs.map((job, index) => (
            <div
              key={index}
              className='flex items-center gap-2 my-2'
            >
              <input
                type='radio'
                name='job'
                value={job}
                readOnly
              />
              <label className='text-sm'>{job}</label>
            </div>
          ))}
        </div>

        <div className='flex gap-4 mt-6'>
          <button className='bg-orange-400 text-white px-10 py-3 rounded-full'>
            Message
          </button>
          <button className='border border-gray-400 text-gray-600 px-7 py-3 rounded-full'>
            Pass
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicantProfileSideBar;
