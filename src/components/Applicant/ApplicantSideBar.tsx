import { Applicant } from '@/types/Interfaces/applicant.interface';
import Image from 'next/image';
import ProfileImage from '../../../public/assets/images/usericon.png';

const ApplicantProfileSideBar = ({ applicant }: { applicant: Applicant }) => {
  return (
    <div className='w-full p-6 bg-gray-100 h-screen border-r xl:block hidden'>
      <div className='bg-orange-400 w-full h-20 rounded-md relative'>
        <div className='flex justify-center w-full absolute left-0 top-10'>
          <div className='flex flex-col w-full items-center'>
            <Image
              src={ProfileImage}
              alt='Applicant'
              height={80}
              width={80}
              className='rounded-full mb-4'
            />
            <div className='text-center flex flex-col items-center'>
              <h2 className='text-lg font-bold'>{applicant.name}</h2>
              <p className='text-gray-500'>{applicant.location}</p>
              <p className='text-gray-500'>{`${applicant.degree}, ${applicant.gender}, ${applicant.age} Years`}</p>
            </div>
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

            <div className='flex gap-4 mt-6 font-semibold'>
              <button className='bg-orange-400 w-3/4 px-8 text-white p-2 rounded-full'>
                Message
              </button>
              <button className='border border-gray-400 w-2/4 px-4 text-gray-600 p-2 rounded-full'>
                Pass
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantProfileSideBar;
