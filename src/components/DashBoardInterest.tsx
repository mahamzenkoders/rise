import React from 'react';
import { Label } from './ui/label';

interface Category {
  label: string;
  interest: string[];
}

const categories: Category[] = [
  {
    label: 'Technology and Innovation',
    interest: [
      'Technology and Innovation',
      'Data Science and Analytics',
      'Engineering and Manufacturing',
    ],
  },
  {
    label: 'Business and Entrepreneurship',
    interest: [
      'Entrepreneurship and Business',
      'Finance and Economics',
      'Engineering and Manufacturing',
    ],
  },
  {
    label: 'Social Impact and Advocacy',
    interest: [
      'Social Impact and Community Development',
      'Advocacy and Activism',
      'Youth Empowerment and Leadership',
    ],
  },
  {
    label: 'Health and Wellness',
    interest: [
      'Health and Wellness',
      'Mental Health and Counseling',
      'Sports and Fitness',
    ],
  },
  {
    label: 'Creative and Media Arts',
    interest: [
      'Creative Arts and Design',
      'Media and Communication',
      'Music and Performing Arts',
    ],
  },
  {
    label: 'Science and Environment',
    interest: [
      'Environmental Sustainability',
      'Science and Research',
      'Sustainable Development Goals (SDGs)',
    ],
  },
  {
    label: 'Education and Culture',
    interest: [
      'Education and Teaching',
      'Cultural Studies and Languages',
      'Arts and Cultural Preservation',
    ],
  },
];

const DashBoardInterest = () => {
  return (
    <div className='flex flex-col mb-20'>
      <div className='grid lg:grid-cols-2 grid:cols-1 gap-2 w-[90%] h-[75%] scrollbar-thin scrollbar-thumb-gray-400 overflow-y-auto'>
        {categories.map(category => (
          <div key={category.label}>
            <h3 className='text-xl my-2'>{category.label}</h3>
            {category.interest.map(interest => {
              return (
                <div
                  key={interest}
                  className={`grids grid-cols-3 my-2`}
                >
                  <input
                    type='checkbox'
                    className={`mr-2 p-3 text-lg`}
                  />
                  <Label>{interest}</Label>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashBoardInterest;
